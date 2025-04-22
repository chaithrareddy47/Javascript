/*
 Callback function =
👉 A function passed as an argument into another function,
👉 and executed (called back) later inside that function.
*/

function processUserInput(callbackGreet) {
    const name = 'Pyush'
    return callbackGreet(name)
}

function greet(name) {
    return `Hello ${name}`
}

console.log(processUserInput(greet));

// * 1. Button Click Event (Browser)

const button = document.querySelector('button')
button.addEventListener('click', function () {
    console.log('button clicked ');
    
})


// 🎯 CALLBACK MINI CHALLENGES
function sayName(name) {
    return `Hello ${name}`
}

function runCallBack() {
    const name = 'sarthak'
    return sayName(name)
}
console.log(runCallBack(sayName));


/*
2️⃣ Delay with setTimeout (Callback inside Timer)
✅ Write a function delayedMessage that prints "I am delayed" after 2 seconds.
*/

function delayedMessage() {
    return `I am delayed `
}

setTimeout(delayedMessage, 2000)

/*
3️⃣ Array Callback Challenge
✅ Write a function that doubles each number in an array using map and a callback.


*/

const arr = [1, 2, 3, 4]

const doubledarr = arr.map((arr) => {
    return arr * arr
})
console.log(doubledarr);


