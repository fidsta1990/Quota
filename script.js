//SELECTORS
const card = document.getElementById("card");
const quoteText = document.getElementById("quote-text");
const authorText = document.getElementById("author-text");
const newQuoteBtn = document.getElementById("new-quote");
const postQuote = document.getElementById("post-quote");

// quote container
let quoteArray = [];
const API_URL = "https://type.fit/api/quotes";
//FUNCTIONS
//helper function to set Attributes
const setAttributes = (element, attributes) => {
  for (let key in attributes) {
    element.setAttribute(key, attributes[key]);
  }
};

// show quote on page
const displayQuote = () => {
  //retrieve one quote at a time using Math.floor method
  const randomQuote = quoteArray[Math.floor(Math.random() * quoteArray.length)];
  // destructure quotes
  const { author, text } = randomQuote;
  //pass in text and author info into elements to display on page
  quoteText.textContent = text;
  authorText.textContent = author;
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
