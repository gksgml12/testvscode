const quotes = [
    {
        quote: "a",
        author: "A"
    },{
        quote: "b",
        author: "B"
    },{
        quote: "c",
        author: "C"
    }
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todayQuote =quotes[Math.floor(Math.random()*quotes.length)]

quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;