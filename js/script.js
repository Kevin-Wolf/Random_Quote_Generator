/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
const quotes = [ 
  // creating a variable named "quotes"

{
    quote: "JUST, DO IT! Don't let your dreams be dreams.",
    source: "Shia LaBeouf",
    citation: "#INTRODUCTIONS - A short featuring Shia LaBeouf",
    year: 2015,
    tags: "Motivational"
},

{
  quote: "When I find a Pirate's map, It's always tea-stained, and the edges are burnt. And it's like, if you're a pirate, all right, and you're gonna make this map and ecpect me to carry it around the globe as I search for treasure, then laminate it!",
  source: "Bo Burnham",
  citation: "INSIDE - A film by Bo Burnham",
  year: 2021,
  tags: "Comedy"
},

{
  quote: "After climbing a great hill, one only finds that there are many more hills to climb.",
  source: "Nelson Mandela",
  citation: "Long Walk To Freedom - An autobiography by Nelson Mandela",
  year: 1994,
  tags: "Perseverance"
},

{
  quote: "Rosa Parks sat so Martin Luther could walk, Martin Luther walked so Barack Obama could run, Barack Obama ran so all the children could fly.",
  source: "Jay-Z",
  citation: "My President is Black - A song by Jay-Z",
  year: 2009,
  tags: "Civil Rights"
},

{
  quote: "Takin' on a challenge is a lot like riding a horse. If your're comfortable while you're doin' it, you're probably doin' it wrong.",
  source: "Ted Lasso",
  citation: "An Apple TV original show - Ted Lasso, portrayed by Jason Sudeikis",
  year: 2020,
  tags: "Persistence"
}

];  
//console.log(quotes)

// adding 5 objects inside the "quotes" array to store the properties of the quotes and logging them to the console.


/***
 * `getRandomQuote` function
***/

function getRandomQuote() {
  const myRandomQuote = Math.floor( Math.random() * quotes.length );
  return quotes[myRandomQuote];
};   
// This function selects a random quote from the array.

function randomBackgroundColor() {
  let r = Math.floor( Math.random() * 256 );
  let g = Math.floor( Math.random() * 256 );
  let b = Math.floor( Math.random() * 256 );
  let bgColor = `rgb(${r}, ${g}, ${b})`;
  document.body.style.backgroundColor = bgColor;
  return bgColor;
// console.log(bgColor);
}; 
// This function creates a random backround color.


/***
 * `printQuote` function
***/

function printQuote() { 
// This function displays a new quote when the user clicks the "show another quote" button

  let myRandomQuote= getRandomQuote(); 
// created variable to store random quote objext from the getRandomQuote() function

  let htmlString = `<p class = "quote"> ${myRandomQuote.quote}</p>
                    <p class = "source">${myRandomQuote.source}`; // created another variable to store the HTML string, using a template litaral.

if (myRandomQuote.citation) {
 htmlString += `<span class="citation">${myRandomQuote.citation}</span>`
} 

if (myRandomQuote.year) {
  htmlString += `<span class="year">${myRandomQuote.year}</span>`
}

if (myRandomQuote.tag) {
  htmlString += `<span class="tag">${myRandomQuote.tag}</span>`
} 
// Created three "if" statements to concatenate the string if the object has carries the "citation, year and tag" properties.

htmlString +='</p>'; 

randomBackgroundColor();  
// Calling the random background color function.                 
                    
document.getElementById('quote-box').innerHTML = htmlString; 
// Updates project's HTML with a random quote.

return htmlString

};

setInterval(printQuote, 10000);  
// Timing function that prints a new quote every 10 seconds.


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);