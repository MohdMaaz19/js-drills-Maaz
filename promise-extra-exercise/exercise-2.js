/*
    1. Print out "Program started" at the start of your code
    2. Create a Promise that resolves after 3 seconds
    3. Log out the promise while it's pending
    4. Print out "Program in progress..." as well

    5. Print out "Step 1 complete" when the first promise fulfills
    6. Have the first promise return another new Promise that will
       fulfill after 3 seconds with the message: "Step 2 Complete"

    7. Print out the message from the second promise after it
       fulfills ("Step 2 Complete")

    HINT: Use setTimeout for the delay
*/

console.log("Program started")

const newPromise = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Step 1 complete");
    },3000)
})
console.log(newPromise);
console.log("Program in progress...");
newPromise
.then((msg)=>{
    console.log(msg)
    const anotherPromise = new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve("Step 2 complete");
    },3000)
})
.then((msg)=>{
    console.log(msg)
})
})
