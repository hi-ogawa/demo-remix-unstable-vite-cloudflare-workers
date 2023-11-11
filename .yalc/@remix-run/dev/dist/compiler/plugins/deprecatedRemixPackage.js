/**
 * @remix-run/dev v1.18.1
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

var path = require('path');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var path__default = /*#__PURE__*/_interopDefaultLegacy(path);

/**
 * A plugin to warn users when importing from the deprecated `remix` package
 */
function deprecatedRemixPackagePlugin(ctx) {
  return {
    name: "deprecated-remix-package",
    setup(build) {
      build.onResolve({
        filter: /.*/
      }, ({
        importer,
        path: filePath
      }) => {
        // Warn on deprecated imports from the remix package
        if (filePath === "remix") {
          let relativePath = path__default["default"].relative(process.cwd(), importer);
          ctx.logger.warn(`deprecated \`remix\` import in ${relativePath}`, {
            details: ["Imports from the `remix` package were deprecated in v1.3.3.", "Change your code to import from the appropriate `@remix-run/*` package instead.", "You can run the following codemod to autofix this issue:", "-> `npx @remix-run/dev@latest codemod replace-remix-magic-imports`"],
            key: importer
          });
        }
        return undefined;
      });
    }
  };
}

exports.deprecatedRemixPackagePlugin = deprecatedRemixPackagePlugin;
