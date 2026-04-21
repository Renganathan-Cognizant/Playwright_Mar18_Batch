//types of fixture
//1.test fixture-requested by test and gets rerun per test

import {test} from '../../Fixtures/customfixture'

// test("test1", async({testfixture})=>{
//     console.log(`use statement execution : ${testfixture}`) //playwright sep batch
// })

//2.Worker fixture - runs only once per worker

test("testworker",async({testfixture,workerfixture})=>{
    console.log(`use statement execution : ${testfixture}`)
    console.log(`use statement execution : ${workerfixture}`)
})

test("testworker2",async({testfixture,workerfixture})=>{
    console.log(`use statement execution : ${testfixture}`)
    console.log(`use statement execution : ${workerfixture}`)
})