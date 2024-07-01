// why we use .js why not txt


// Variables let vs const vs var
// const accountId = 12567893;
// let  accountEmail = 'abc@mail.com';
// var  accountPassword = 1234;
// console.log(accountId);
// console.log(accountEmail);
// console.log(accountPassword);


// console.log(strawberry); // undefined

// var strawberry = '🍓';

// console.log(strawberry); //🍓

// behind the scenes i works like this
var strawberry; // undefined in memeory 
 
console.log(strawberry); 

strawberry = '🍓'; // assign the value
 
console.log(strawberry);

// let variables with tdz
//"ReferenceError: Cannot access 'cherry' before initialization"

// console.log(cherry); // reference eroro
let cherry = '🍒';
console.log(cherry);

// const avacado;// syntax error

let num = 10, num1 = 20, num2 = 40;
console.log(num1, num, num2);
var num0 = 10, num3 = 20, num4 = 40;
console.log(num1, num, num2);


const a = 10, b = 20, c = 30;
console.log(a, b, c);

const grapes = '🍇';

function logGrapes() {
    console.log(grapes);

    function innerFunction() {
        console.log(grapes);
        {
            console.log(grapes);
        }
    }

    innerFunction()


}
logGrapes()


//functional scope

function abc() {
    let aa = 1;
    var bb = 2;
    const cc = 3;
}
abc()
// console.log(aa);  //reference error
// console.log(bb); //reference error
// console.log(cc); //reference error

//mutataion of values
var arr = 10;
let arr2 = 30;
console.log(arr);
console.log(arr2);
arr = 50;
arr2 = 100;
console.log(arr); //new values are assigned
console.log(arr2);


var orange = '🍊';

function orangeFunc() {
    console.log(orange);
    var orange = '🧡';
    function innerFunc() {
        console.log(orange);
    }

    innerFunc()

}
orangeFunc()

 var orange = "🟠";
 console.log(orange);

console.log(orange);

const mango = '🥭';
{
    const mango = '🍊';
    console.log(mango);
}
console.log(mango);
