import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body ref={(el) => el?.setAttribute("data-testid", "hydrated")}>
        <div style={{ display: "flex", gap: "1rem" }}>
          <a
            href="https://github.com/hi-ogawa/demo-remix-unstable-vite-cloudflare-workers"
            target="_blank"
          >
            Source code
          </a>
          <Link to="/">Index</Link>
          <Link to="/kv">KV Demo</Link>
          <Link to="/vars">Vars Demo</Link>
        </div>
        <Outlet />
        <ScrollRestoration />
        <LiveReload />
        <Scripts />
      </body>
    </html>
  );
}
