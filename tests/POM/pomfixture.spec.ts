import {test} from '../../Fixtures/pomfixture'

test("login", async({loginpage,checkoutpage,productselection})=>{
    await loginpage.launchApp()
    await loginpage.login()
    await productselection.SelectProduct()
    await checkoutpage.checkout()
})
