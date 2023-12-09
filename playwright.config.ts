import { defineConfig } from "@playwright/test";

const PORT = 4456;
const command = process.env["E2E_WEB_SERVER_COMMAND"] ?? "pnpm dev";

export default defineConfig({
  testDir: "e2e",
  use: {
    baseURL: `http://localhost:${PORT}`,
    trace: "on-first-retry",
  },
  projects: [
    {
      name: "chromium",
      use: {
        browserName: "chromium",
      },
    },
  ],
  webServer: {
    command: `${command} --port ${PORT}`,
    port: PORT,
  },
});
