import {expect, test} from '@playwright/test';

test('radiobutton', async({page}) => {
    await page.goto('https://testautomationpractice.blogspot.com/')
    await page.locator('#male').check();
    await expect(page.locator('#male')).not.toBeChecked();
})

test("multi dropdown", async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.selectOption("#colors", ["Blue","Red"])
    await page.waitForTimeout(5000)
})