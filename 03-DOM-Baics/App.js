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
// const inputVal = (document.querySelector(".number").textContent = 13);

/ * guessing game 

let secretNumber = Math.floor(Math.random() * 20) + 1;
console.log(secretNumber);
let score = 20;







// * Event listeners

const btn = document.querySelector(".check");
const message = document.querySelector('.message')

const again = document.querySelector(".again");


again.addEventListener('click', function () {
      secretNumber = Math.floor(Math.random() * 20) + 1;
     console.log(secretNumber);
     // console.log('brn clicked');
     score = 20;
     
     Number((document.querySelector(".guess").value = ""));

     message.textContent = "Start guessing..."
     document.body.style.backgroundColor = "#222";
     document.body.style.color = "white";

     document.querySelector(".number").textContent = '?';
     document.querySelector('.score').textContent = score;

    

})



btn.addEventListener('click', function () {
     const guess = Number(document.querySelector('.guess').value)
     console.log(guess, typeof guess);

     

     if (!guess) {
         message.textContent = '🚫 No number'
     } else if (guess === secretNumber) {
          message.textContent = '✅ correct number'

          document.querySelector('.number').textContent = secretNumber;

          document.querySelector('body').style.backgroundColor = 'green'
          document.querySelector(".highscore").textContent = score;
          
     } else if (guess > secretNumber) {
          if (score >  1) {
               message.textContent = "Guess is high";
               score--;
               document.querySelector(".score").textContent = score;
          } else {
               message.textContent = 'You lost the game'
               document.querySelector(".score").textContent = 0;
          }
          
     } else if (guess < secretNumber) {
         if (score > 1) {
           message.textContent = "Guess is low";
           score--;
           document.querySelector(".score").textContent = score;
         } else {
           message.textContent = "You lost the game";
           document.querySelector(".score").textContent = 0;
         }
     }


     
     
})




