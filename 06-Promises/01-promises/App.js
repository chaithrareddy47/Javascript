// var promise = new Promise(function (resolve, reject) {
//     if (true) {
//         resolve('Stuff worked')
//     } else {
//         reject(Error('It broke'))
//     }

// })

// // console.log(promise);

// promise.then(function (resukt) {
//     console.log('promise worked');

// }, function (err) {
//     console.log('something broke');

// })

/*
  :

🔹 Level 1: Create and Consume Basic Promises
👉 Goal: Understand how promises are created, resolved, and consumed.

🧪 Example 1: Simulate a successful API call
js
Copy code

*/

/*

const fetchData = (shouldFail) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // if (shouldFail) {
            //     resolve("Data fetched successfully!.", shouldFail);
            // } else {
            //     reject('Failed to fetch data', shouldFail)
            // }
            resolve('Data fetched ', shouldFail)
        },5000)
        
        // setTimeout(() => {
        //     reject('Data failed ', shouldFail)
        // },5000)
    })
}
// console.log(fetchData());


fetchData(true).then((data) => {
    console.log(data);
    
}).catch((error) => {
    console.log('Error : ', error);
    
})

*/

/*
 * 🔹 Level 2: Practice Chaining Promises
 * 👉 Goal: Handle multiple async steps in sequence

 * 🧪 Example 3: Chain Promises
*/

/*
const stepOne = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('step 1 done');
            resolve('step 1 result')
            
        }, 2000)
    })
}

const stepTwo = (prevData) => {
    console.log(prevData);
    
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('step two, ', prevData);
            resolve('step2')
        },3000)
    })
}

stepOne()
    .then(stepTwo)
    .then((final) => {
    console.log('Final result', final);
    
    })

    */

/*
     * 🔹 Level 3: Use Promises in Real-Life Use Cases
👉 Goal: Mimic real-world tasks with Promises

🧪 Example 4: Login flow (fake)
     
     */


// const login = (userName, password) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (userName === 'chai' && password === '#123') {
//                 resolve('Login is successfull🤘')
//             } else {
//                 reject('Invalid credentials ❌')
//             }
//         },2000)
//     })
// }

// login('chai', '#123')
//     .then(res => console.log(res))
//     .catch(err => console.log(err))


  /*
   📝 Practice Challenges for You:
Create a fake order system

Step 1: Place order

Step 2: Process payment

Step 3: Send confirmation
  */


function placeOrder(orderId ) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('🛒 order placed!');
            resolve(orderId)
        },1000)
    })
}

function processPayment(orderId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (orderId === 1234) {
                console.log('💳 payment process for ' + orderId);
            resolve('PaymentID456')
            } else {
                reject('wrong order id please check your order')
            }
        },3000)
    })
}

function sendConfirmation(paymentId) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`📧 confirmation sent for ${paymentId}`);
            resolve("Order completed!");
        },5000)
        
    })
}

placeOrder(123)
    .then(processPayment)
    .then(sendConfirmation)
    .then((final) => {
    console.log(final);
    
    })
.catch(err => console.log('oops ❌', err))