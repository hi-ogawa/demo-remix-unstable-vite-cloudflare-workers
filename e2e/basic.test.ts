import { test } from "@playwright/test";

test("kv", async ({ page }) => {
  await page.goto("/kv", { waitUntil: "networkidle" });
  await page.getByTestId("hydrated").waitFor();

  await page.getByText("counter = 0").click();
  await page.getByRole("button", { name: "+1" }).click();
  await page.getByText("counter = 1").click();

  await page.reload({ waitUntil: "networkidle" });
  await page.getByTestId("hydrated").waitFor();
  await page.getByText("counter = 1").click();

  await page.getByRole("button", { name: "-1" }).click();
  await page.getByText("counter = 0").click();
  await page.getByRole("button", { name: "-1" }).click();
  await page.getByText("counter = -1").click();
  await page.getByRole("button", { name: "+1" }).click();
  await page.getByText("counter = 0").click();
});

test("vars", async ({ page }) => {
  await page.goto("/vars");
  if (process.env.E2E_WEB_SERVER_COMMAND) {
    await page.getByText('{"SOME_VAR":"hello"}').click();
  } else {
    await page.getByText('{"SOME_VAR":"hello-dev"}').click();
  }
});
