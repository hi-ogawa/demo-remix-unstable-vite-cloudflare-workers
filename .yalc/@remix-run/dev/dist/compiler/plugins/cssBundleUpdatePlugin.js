/**
 * @remix-run/dev v1.15.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var fse = require('fs-extra');

const pluginName = "css-bundle-update-plugin";
const namespace = `${pluginName}-ns`;

/**
 * This plugin updates the source code for the "css-bundle" package on rebuilds
 * to contain the latest CSS bundle href so CSS changes get picked up for HMR.
 * Without this plugin, the "css-bundle" package source code never changes on
 * disk so it never triggers an update.
 */
function cssBundleUpdatePlugin({
  getCssBundleHref
}) {
  return {
    name: pluginName,
    async setup(build) {
      let isRebuild = false;
      build.onEnd(() => {
        isRebuild = true;
      });
      let preventInfiniteLoop = {};
      build.onResolve({
        filter: /^@remix-run\/css-bundle$/
      }, async args => {
        // Prevent plugin from infinitely trying to resolve itself
        if (args.pluginData === preventInfiniteLoop) {
          return null;
        }

        // We don't wait for the href on the first build and instead rely on the
        // default runtime manifest lookup. We only need to update this package
        // to reflect changes during development so the first build is fine.
        if (!isRebuild) {
          return null;
        }
        let resolvedPath = (await build.resolve(args.path, {
          resolveDir: args.resolveDir,
          kind: args.kind,
          pluginData: preventInfiniteLoop
        })).path;
        return {
          path: resolvedPath,
          namespace
        };
      });
      build.onLoad({
        filter: /.*/,
        namespace
      }, async args => {
        let [cssBundleHref, contents] = await Promise.all([getCssBundleHref(), fse.readFile(args.path, "utf8")]);
        if (cssBundleHref) {
          contents = contents.replace(/__INJECT_CSS_BUNDLE_HREF__/g, JSON.stringify(cssBundleHref));
        }
        return {
          loader: "js",
          contents
        };
      });
    }
  };
}

exports.cssBundleUpdatePlugin = cssBundleUpdatePlugin;
