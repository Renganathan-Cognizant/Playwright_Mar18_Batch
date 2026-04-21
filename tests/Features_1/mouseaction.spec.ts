import {test} from '@playwright/test';

test.only('Mouse hover', async({page})=>{
    await page.goto('https://www.snapdeal.com')
    const fashion = page.getByAltText('imgs/l/c/1/homesiteiconne-d6c37.jpeg')
    //await page.locator('//span[text()="Home & Kitchen"]')
    fashion.hover()
    await page.waitForTimeout(5000)
})

test('right click', async({page})=>{
    await page.goto('https://www.snapdeal.com')
    const fashion = page.getByAltText('imgs/l/c/1/homesiteiconne-d6c37.jpeg')
    await fashion.click({button:'right'})
    await page.waitForTimeout(5000)
})

test('double click', async({page})=>{
    await page.goto('https://www.snapdeal.com')
    const fashion = page.getByAltText('imgs/l/c/1/homesiteiconne-d6c37.jpeg')
    fashion.hover()
    await page.waitForTimeout(5000)
    const electric = page.getByAltText('imgs/l/c/1/electriccookers-5c5c5c.jpeg')
    electric.dblclick()
    await page.waitForTimeout(10000)
})

test('drag and drop', async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')

    const electric1 = await page.locator('#draggable')
    const electric2 = await page.locator('#droppable')
    
    await electric1.dragTo(electric2)
    await page.waitForTimeout(5000)
    
})


//assignment https://testautomationpractice.blogspot.com/
