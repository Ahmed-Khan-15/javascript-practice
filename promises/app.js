// Promise = An object that may produce a 
// single value in the future: either a resolved value 
// or a reason that it's not resolved (e.g., a network 
// error occurred). A promise may be in one of 3 possible 
// states: fulfilled, rejected, or pending. Promises are 
// used to handle asynchronous operations in JavaScript.
// 
// Example of a Promise
// const myPromise = new Promise((resolve, reject) => {
//     const success = true; // Simulating a successful operation

// Do these chores in order 
// 1. walk the cat
// 2. clean the kitchen
// 3. take out the trash
// 4. do the laundry
// 5. mow the lawn

function walkTheCat() {
    setTimeout(()=>{
        console.log("Walk the cat");
    },2500);
}

function cleanTheKitchen(){
    setTimeout(()=>{
        console.log("Clean the kitchen");
    },3000);
}

function takeoutTheTrash(){
    setTimeout(()=>{
        console.log("Take out the trash");
    },1000);
}

function doTheLaundry(){
    setTimeout(()=>{
        console.log("Do the laundry");
    },1700);
}

function mowTheLawn(){
    setTimeout(()=>{
        console.log("Mow the lawn");
    },2000);
}

walkTheCat();
cleanTheKitchen();
takeoutTheTrash();
doTheLaundry();
mowTheLawn();