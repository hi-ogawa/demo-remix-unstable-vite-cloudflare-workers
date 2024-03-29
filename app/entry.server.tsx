// based on https://github.com/remix-run/remix/blob/bf2feb9bdb292ac6560964d6749b0fcf9a8c784e/templates/cloudflare-workers/app/entry.server.tsx#L13-L20

import type { EntryContext } from "@remix-run/server-runtime";
import { RemixServer } from "@remix-run/react";
import { isbot } from "isbot";

// force "browser" export on node (typing is from env.d.ts)
import { renderToReadableStream } from "react-dom/server.browser";

// initialize miniflare to mimic cloudflare workers runtime on vite server
if (import.meta.env.DEV) {
  await import("./miniflare");
}

export default async function handleRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext,
) {
  const body = await renderToReadableStream(
    <RemixServer context={remixContext} url={request.url} />,
    {
      signal: request.signal,
      onError(error: unknown) {
        // Log streaming rendering errors from inside the shell
        console.error(error);
        responseStatusCode = 500;
      },
    },
  );

  if (isbot(request.headers.get("user-agent"))) {
    await body.allReady;
  }

  responseHeaders.set("Content-Type", "text/html");
  return new Response(body, {
    headers: responseHeaders,
    status: responseStatusCode,
  });
}
