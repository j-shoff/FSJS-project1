/******************************************
Treehouse Techdegree: FSJS
Project 1: A Random Quote Generator
Author: Johnathan Shoff
Year: 2018
******************************************/

//Auto Quote Interval Speed
const quoteSpeed = 10000;

//Created a quotes array to store quote objects
const quotes = [
  {
    quote: "Optimism is the faith that leads to achievement. Nothing can be done without hope and confidence.",
    source: "Helen Keller",
    citation: "Retrieved November 17, 2018, from BrainyQuote.com Web site: https://www.brainyquote.com/quotes/helen_keller_164579",
    tag: "Motivational"
  },
  {
    quote: "We Become What We Think About.",
    source: "Earl Nightingale",
    tag: "Motivational"
  },
  {
    quote: "Java is to JavaScript as ham is to hamster.",
    source: "Jeremy Keith",
    year: 2009,
    tag: "Programming"
  },
  {
    quote: "The science of today is the technology of tomorrow.",
    source: "Edward Teller",
    citation: "Retrieved November 17, 2018, from BrainyQuote.com Web site: https://www.brainyquote.com/quotes/edward_teller_102595",
    tag: "Technology"
  },
  {
    quote: "Information technology and business are becoming inextricably interwoven. I don't think anybody can talk meaningfully about one without the talking about the other.",
    source: "Bill Gates",
    citation: "Retrieved November 17, 2018, from BrainyQuote.com Web site: https://www.brainyquote.com/quotes/bill_gates_173262",
    tag: "Technology"
  },
  {
    quote: "Software is a great combination between artistry and engineering.",
    source: "Bill Gates",
    citation: "Retrieved November 17, 2018, from BrainyQuote.com Web site: https://www.brainyquote.com/quotes/bill_gates_626107",
    tag: "Technology"
  },
  {
    quote: "Failure is simply the opportunity to begin again, this time more intelligently.",
    source: "Henry Ford",
    tag: "Intelligence"
  },
  {
    quote: "The true sign of intelligence is not knowledge but imagination.",
    source: "Albert Einstein",
    tag: "Imagination"
  },
  {
    quote: "From there to here, and here to there, funny things are everywhere.",
    source: "Dr. Seuss",
    tag: "Humor"
  },
  {
    quote: "Tell me and I forget. Teach me and I remember. Involve me and I learn.",
    source: "Benjamin Franklin",
    tag: "Learning"
  },
  {
    quote: "Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment.",
    source: "Buddha",
    tag: "Concentrate"
  },
  {
    quote: "The future belongs to those who believe in the beauty of their dreams.",
    source: "Eleanor Roosevelt",
    tag: "Future"
  },
  {
    quote: "The past cannot be changed. The future is yet in your power.",
    source: "Mary Pickford",
    tag: "Future"
  },
  {
    quote: "Times and conditions change so rapidly that we must keep our aim constantly focused on the future.",
    source: "Walt Disney",
    tag: "Focus"
  },
  {
    quote: "The way to get started is to quit talking and begin doing.",
    source: "Walt Disney",
    tag: "Begin"
  },
  {
    quote: "When you're curious, you find lots of interesting things to do.",
    source: "Walt Disney",
    tag: "Curiousity"
  },
  {
    quote: "If you can dream it, you can do it.",
    source: "Walt Disney",
    tag: "Motivational"
  },
  {
    quote: "Good communication is just as stimulating as black coffee, and just as hard to sleep after.",
    source: "Anne Morrow Lindbergh",
    tag: "Communication"
  },
  {
    quote: "The only source of knowledge is experience.",
    source: "Albert Einstein",
    tag: "Experience"
  },
  {
    quote: "Failure is the key to success; each mistake teaches us something.",
    source: "Morihei Ueshiba",
    citation: "Retrieved November 17, 2018, from BrainyQuote.com Web site: https://www.brainyquote.com/quotes/morihei_ueshiba_183597",
    tag: "Failure"
  }
];

//Randomly generate a number based on a high and low value.
getRandomNumber = (low, high) => {
  let rand = Math.floor(Math.random() * (high - low + 1)) + low;
  return rand;
}

//Create a function to pass the array of quotes.
getRandomQuote = array =>{

  //Get a random number between 0 - the total number of quotes.
  let randNumber = getRandomNumber(0,array.length - 1);

  //Create a variable to store the random quote object.
  let randomQuote = array[randNumber];
  return randomQuote;
}

//Display the random quote in the quote box element
printQuote = () => {

  //Get random quote
  let randomQuote = getRandomQuote(quotes);

  //Initial information variable.
  let information = '';

  //If tag property exists add it to the information.
  if(randomQuote.tag){
    information += `<span class="tag">${randomQuote.tag}</span>`
  }

  //Set the information to have the qoute.
  information +=  `<p class="quote">${randomQuote.quote}</p>`;

  //Set the information to have the source.
  information +=  `<p class="source">${randomQuote.source}`;

  //If citation property exists add it to the information.
  if(randomQuote.citation){
    information += `<span class="citation">${randomQuote.citation}</span>`;
  }

  //If year property exists add it to the informatio..
  if(randomQuote.year){
    information += `<span class="year">${randomQuote.year}</span>`;
  }

  information += `</p>`;

  //Get quote box element by id.
  let quoteBox = document.getElementById('quote-box');

  //Update inner HTML of the quoteBox to show the information.
  quoteBox.innerHTML = information;

  //When loading new quote to the screen change the background to a random color.
  document.body.style.backgroundColor = `rgb(${getRandomNumber(30,230)}, ${getRandomNumber(30,230)}, ${getRandomNumber(30,230)})`;

}

clickHandler = () =>{
  //Stop the autoPrintQuote timer
  clearInterval(autoPrintQuote);
  //Call the printQuote function.
  printQuote();
  //Restart the auto print timer again.
  autoPrintQuote = setInterval(printQuote, quoteSpeed);
}


//When someone presses the "Show another quote" button run the printQuote function.
document.getElementById('loadQuote').addEventListener("click", clickHandler, false);

//Set initial random quote.
printQuote();

//After (n) seconds load a new random quote.
let autoPrintQuote = setInterval(printQuote, quoteSpeed);
