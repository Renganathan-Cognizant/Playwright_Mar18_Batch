import {test} from '@playwright/test';
//login + save session
test('session storage',async({page})=>{
    //test.setTimeout(60000); // 60 seconds
    await page.goto("https://bookcart.azurewebsites.net/login");
    await page.locator("input[formcontrolname='username']").fill("ortoni");
    await page.locator("input[formcontrolname='password']").fill("Pass1234$");
    await page.locator("//span[@class='mdc-button__label' and text()='Login']").click();

    await page.waitForSelector("//span[@class='mdc-button__label']//span[text()=' ortoni']", {timeout:5000})

    await page.context().storageState({path:'./Login.json'})
})


