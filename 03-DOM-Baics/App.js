/*
 * DOCUMENT OBJECT MODEL
*/
// * selecting and manipulating dom

/*
console.log(document.querySelector('.message').textContent);


// selelcting elemnts
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 30;
console.log(document.querySelector('.guess').value);

console.log(document.querySelector('.guess').value = 23);

*/
const inputVal = (document.querySelector(".number").textContent = 13);


// * Event listeners

const btn = document.querySelector(".check").addEventListener('click', function () {
     console.log("Button clicked");
     
}) 
console.log(btn);
