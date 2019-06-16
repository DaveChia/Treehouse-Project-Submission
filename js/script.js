/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

/* This program generates a random quote and background color when the "Show another quote" button is clicked by the user.

An additional counter variable "previousRandomQuoteNumber" is added to prevent the user from generating the same quote during consecutive "Show another quote" button clicking.
*/

//Initialization of Global Variables
var previousRandomQuoteNumber="start";
var quotes = []; //Creating an empty array to store quotes data later on


//Adding 5 empty objects into the quote array
for(var x = 0; x < 5; x++){
	
	quotes.push({});
	
}

//Adding required properties to individual object in the quote array
	quotes[0].quote="Your Time Is Limited, So Don’t Waste It Living Someone Else’s Life.";
	quotes[0].source="Steve Jobs";
	quotes[0].citation="2005 Stanford Commencement Address";
	quotes[0].year="2005";
	quotes[0].tags="Entrepreneurship";
	
	quotes[1].quote="Spread love everywhere you go. Let no one ever come to you without leaving happier.";
	quotes[1].source="Mother Teresa";
	quotes[1].tags="Love and Peace";
	
	quotes[2].quote="A person without a sense of humor is like a wagon without springs. It's jolted by every pebble on the road.";
	quotes[2].source="Henry Ward Beecher";
	quotes[2].tags="Humor";
	
	quotes[3].quote="The way get started is to quit talking and begin doing.";
	quotes[3].source="Walt Disney";
	quotes[3].tags="Inspirational";

	quotes[4].quote="Being a family means you are a part of something very wonderful. It means you will love and be loved for the rest of your life.";
	quotes[4].source="Lisa Weed";
	quotes[4].tags="Family";	

//This function generates a random number that is within the quote array length to be returned to the "printQuote" function
function getRandomQuote(min, max){
	
	var outputRandomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
	
	//The code below prevents users from generating the same random number on consecutive "Show another quote" button clicks, therefore prevents user from generating the same quote on consecutive "Show another quote" button clicking
	while(true){
		
		if(previousRandomQuoteNumber !== outputRandomNumber){
			
			previousRandomQuoteNumber = outputRandomNumber;
			return outputRandomNumber;
			break;
			
		}else{
			
			outputRandomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
			
		}
		
	}
	
}

//When "Show another quote" button is clicked, this function gets a random number from "getRandomNumber" function and then uses the number to retrive the respective random number array from the "quotes" array to be displayed on HTML. A random background color also generates whenever the "Show another quote" button is clicked
function printQuote(){
	
	var minimumNumber = 0;
	var maxmimumNumber = quotes.length-1;
	var getRandomQuoteNumber = getRandomQuote(0, maxmimumNumber);
	var outputHTML = "";
	
	//Calls the function to generate a random background color
	functionGenerateRandomBackGroundColor();
	
	//This part of the code generates the required HTML string to be displayed onto the HTML
	outputHTML = '<p class="quote">'+ quotes[getRandomQuoteNumber]["quote"] +'</p>'
		
						+
						
					'<p class="source">'+ quotes[getRandomQuoteNumber]["source"];
					
	if(quotes[getRandomQuoteNumber]["citation"]){
		
		outputHTML = outputHTML + '<span class="citation">'+ quotes[getRandomQuoteNumber]["citation"] +'</span>';
		
	}
	
	if(quotes[getRandomQuoteNumber]["year"]){
		
		outputHTML = outputHTML + '<span class="year">'+ quotes[getRandomQuoteNumber]["year"] +'</span>';
		
	}
	
	if(quotes[getRandomQuoteNumber]["tags"]){
		
		outputHTML = outputHTML + '<span class="tags">. '+ quotes[getRandomQuoteNumber]["tags"] +'</span>';
		
	}
	
	outputHTML = outputHTML + '</p>';
	
	//This part of the code displays the generated HTML string onto the HTML
	document.getElementById('quote-box').innerHTML = outputHTML;
	
}

//This function generates a random background color
function functionGenerateRandomBackGroundColor(){
	
	var randomColorHexCode = '#'+(Math.random()*0xFFFFFF<<0).toString(16);

	document.body.style.background = randomColorHexCode;
	
	
}

//The code belows starts the "print quote" function and generates a random quote and generates a random background color on "Show another quote" button click
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

//The code belows starts the "print quote" function and generates a random quote and generates a random background color every 25 seconds
setInterval(printQuote, 25000);


// Remember to delete the comments that came with this file, and replace them with your own code comments.