import {test, expect} from '@playwright/test';

test('screenshot on page & locator', async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.locator("#datepicker").scrollIntoViewIfNeeded();
    await page.locator("#datepicker").screenshot({path:'locatorLevelSS.png'})
    await page.waitForTimeout(2000)
    await page.fill("#datepicker","10/08/2025")
    await page.screenshot({path: 'pageLevelSS.png'})
    await page.waitForTimeout(2000)
})

test('Visual Testing example 2', async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.locator("#datepicker").scrollIntoViewIfNeeded();
    //screenshot
    expect(await page.screenshot()).toMatchSnapshot('exactmatch.png')
})
//playwright methods for doing visual testing
//1. toMatchSnapshot() --> it will compare the screenshot with the 
// baseline image and if there is any mismatch it will show the diff image
//2. toMatchSnapshot('filename.png') --> it will compare the screenshot 
// with the specified file and if there is any mismatch it will show the diff image
//toHaveScreenshot() --> it will check if the screenshot is taken or not 
// and it will return true or false




//3 workers in config
//two test cases in a file
//going to run this entire file
//  in two browsers
//total 4 tc's to run
//3 -->workers
//1 --> 1 worker fir  --> 
//2 --> 2 worker fir
//3 --> 3 worker web
//4








// test('Visual Testing example 1', async({page})=>{
//     await page.goto("https://www.flightaware.com/live/")
//     expect(await page.screenshot()).toMatchSnapshot('visualmatch.png')
// })