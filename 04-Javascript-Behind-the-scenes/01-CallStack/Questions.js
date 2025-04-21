/*
 * ✏️ Question 1: Easy
 What will be the output of this code?


*/
function a() {
    console.log('Inside a');
    b();
    console.log('back in a');

    
}

function b() {
    console.log('Inside b')
}

a()
console.log('Im in global context');

/*
* ✏️ Question 2: Medium
* In the following code, how many Execution Contexts are created in total?
*/

function first() {
    second()
}

function second() {
    third()
}

function third() {
    return 'Hello form thirs'
}

first()

/*
 * ✏️ Question 3: Hard (tricky)
* What will happen here?
(Think carefully about the order!)

*/

function alpha() {
  console.log("Alpha start");
  beta();
  console.log("Alpha end");
}

function beta() {
  console.log("Beta start");
  gamma();
  console.log("Beta end");
}

function gamma() {
  console.log("Gamma here");
}

alpha();
console.log("Done with all!");
