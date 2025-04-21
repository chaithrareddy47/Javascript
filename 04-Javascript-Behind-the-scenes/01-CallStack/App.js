/*
 * CALL STACK / EXECUTION CONTEXT 
- everuthing happens inside the execution conetxt 
- Javascript is a single threaded single concurrent language, meaning it can handle one task at a time or a piece of code at a time. It has a single call stack
- 1.Call Stack :- It’s a data structure which records the function calls, basically where in the program we are. If we call a function to execute , we push something on to the stack, and when we return from a function, we pop off the top of the stack.

- It is single-threaded. Meaning it can only do one thing at a time.
Code execution is synchronous.
A function invocation creates a stack frame that occupies a temporary memory.
It works as a LIFO — Last In, First Out data structure.
*/

var n = 2;
function square(num) {
    var ans = num * num;
    return ans
}

var square2 = square(n);
var square4 = square(4);

console.log(square2);
console.log(square4);


function foo(b) {
    var a = 5;
    return a * b;
}

function bar(x) {
    var y = 3;
    return foo(x * y)
}

console.log(bar(6));


/* 
* stack trace error
-  A stack trace shows the chain of function calls that led to an error happening.
- It helps you debug and find where exactly the mistake happened in your code.

*/


function firstFunction() {
    console.log('first Function calld');
    
    
}

function secondFunction() {
    function nestedFunc() {
        function deepNested() {
        
            // throw new Error("stack trace error");
        }
        deepNested()
    }
    nestedFunc();
    firstFunction()

}

function thirdFunction() {
    secondFunction()
}

thirdFunction()

let a = 'Hello World';

function one() {
    console.log('inside first function');
    second()
    

    
}
function second() {
    console.log('i am called insdie second func');
    
}

one();
console.log('global execution context');
