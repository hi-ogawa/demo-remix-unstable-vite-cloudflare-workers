import { test } from "@playwright/test";

test("basic", async ({ page }) => {
  await page.goto("/kv", { waitUntil: "networkidle" });
  await page.getByTestId("hydrated").waitFor();

  await page.getByText('counter = 0').click();
  await page.getByRole('button', { name: '+1' }).click();
  await page.getByText('counter = 1').click();

  await page.reload({ waitUntil: "networkidle" });
  await page.getByTestId("hydrated").waitFor();
  await page.getByText('counter = 1').click();

  await page.getByRole('button', { name: '-1' }).click();
  await page.getByText('counter = 0').click();
  await page.getByRole('button', { name: '-1' }).click();
  await page.getByText('counter = -1').click();
  await page.getByRole('button', { name: '+1' }).click();
  await page.getByText('counter = 0').click();
});
