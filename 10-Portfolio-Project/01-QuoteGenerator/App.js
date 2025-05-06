// https://jacintodesign.github.io/quotes-api/data/quotes.json

const quoteContainer = document.querySelector("#quote-container");
const quoteText = document.querySelector("#quote");
const authorText = document.querySelector("#author");
const twitterBtn = document.querySelector("#twitter");
const newQuoteBtn = document.querySelector("#new-quote");

const loader = document.querySelector('#loader')



let apiQuote = [];

// loading
function loading() {
    loader.hidden = false;
    quoteContainer.hidden = true;
}

// hide 
function complete() {
    quoteContainer.hidden = false;
    loader.hidden = true;
}



// show new quote
function newQuote() {
    loading()
    // picking random quote
    // const randomIndex = Math.floor(Math.random() * apiQuote.length)

    // const randomQuote = apiQuote[randomIndex]
    // console.log(randomQuote);
    
    const quote = apiQuote[Math.floor(Math.random() * apiQuote.length)]
    console.log(quote);

    // check if author filed is balnk
    if (!quote.author) {
        authorText.textContent  = 'Unknown';
    } else {
           authorText.textContent = quote.author;
 }
    
    // check quite legth is long 
    if (quote.text.length > 50) {
        quoteText.classList.add('long-quote');
    } else {
        quoteText.classList.remove("long-quote");
    }


    quoteText.textContent = quote.text;

    complete()
    
    
}




async function getQuote() {
    loading()
  const apiURL = "https://jacintodesign.github.io/quotes-api/data/quotes.json";
  try {
    const response = await fetch(apiURL);
    console.log(response);
     apiQuote = await response.json();
      console.log(apiQuote);
      newQuote()
      
  } catch (err) {
    // catching teh error
    console.log(err);
  }
}


//https://twitter.com/intent/tweet
// tweet quote
function tweetQuote() {
    const twitterURL = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
    window.open(twitterURL, '_blank')
}

// eveten listener
newQuoteBtn.addEventListener('click', newQuote)

twitterBtn.addEventListener('click', tweetQuote)


//onloead
getQuote();