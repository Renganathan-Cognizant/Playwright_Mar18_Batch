import {chromium, test} from '@playwright/test';

test('demo test', async () => {
   const browser = await chromium.launch();
   const context = await browser.newContext();
   const page =await context.newPage();

   await page.goto("https://www.google.com");

   await page.getByRole('button', { name: "submit" }).click();
   page.getByText

})