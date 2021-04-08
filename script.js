//SELECTORS
const card = document.getElementById("card");
const quoteText = document.getElementById("quote-text");
const authorText = document.getElementById("author-text");
const newQuoteBtn = document.getElementById("new-quote");
const postQuoteBtn = document.getElementById("post-quote");

// quote container
let quoteArray = [];
const API_URL = "https://type.fit/api/quotes";

//FUNCTIONS

//tweet a quote
const tweetQuote = () => {
  //twitter url that tweets the quote and author info
  const twitter_URL = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
  //open a new window to the link above to tweet the quote
  window.open(twitter_URL, "_blank");
};

// show quote on page
const displayQuote = () => {
  //retrieve one quote at a time using Math.floor method
  const randomQuote = quoteArray[Math.floor(Math.random() * quoteArray.length)];
  // destructure quotes
  const { author, text } = randomQuote;
  //pass in text and author info into elements to display on page
  quoteText.textContent = text;
  authorText.textContent = author || "Unknown";
};

//fetchQuotes
const fetchQuotes = async (url) => {
  try {
    const res = await fetch(url);
    quoteArray = await res.json();
    displayQuote();
  } catch (error) {
    console.log(error);
  }
};

fetchQuotes(API_URL);
//EVENT LISTENERS
newQuoteBtn.addEventListener("click", () => {
  displayQuote();
});

postQuoteBtn.addEventListener("click", tweetQuote);
