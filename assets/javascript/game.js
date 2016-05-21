window.onload = function () {

//----------------key variables--------------------

	var wordbank = ['papaya', 'lychee', 'peach','banana', 'pineapple', 'celery', 'pumpkin', 'cabbage', 'spinach', 'carrot'];

//var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h','i', 'j', 'k', 'l', 'm','n', 'o', 'p', 'q', 'r', 's','t', 'u', 'v', 'w', 'x', 'y', 'z'];

	
// ------------ Active Variables --------------------
	var userInput; //the letters the user types
	var guessesLeft; //how many guesses are left for the user
	
	var space; //spaces in between the letters
	var currentWord; //the word selected by the computer
	var message; //alerts to the user 


	var gameWord; // array with actual word
	var dashes; // array with dashes and replaced correct letters
	var wrongLetters; // array with letters we have guessed
	var found;	// flag to see if letter is found yet
	found  = 0; // 0 means not found.

	var guessedTwice; // if you guessed twice
	guessedTwice = 0; // 0 -- means you've not guessed this letter yet

	var counter; // number of guesses the person took wrong
	counter = 10;

	var charCode;


//----------Computer Genorates Random word-------------------------

function newGame() {

	currentWord = wordbank[Math.floor(Math.random()*wordbank.length)];

	counter = 10;

	document.getElementById("counter2").innerHTML = counter;


	document.getElementById("wrong").innerHTML = '';

// display current word -- for development purposes -- REMOVE THIS
//	document.getElementById("word").innerHTML = currentWord; 
// REMOVE THE ABOVE LINE

	dashes = currentWord.split('')

  for(var i = 0; i<currentWord.length; i++){
		dashes[i] = '_ ';
 	}

 	// show dashes on first run
 	document.getElementById("guessed").innerHTML = dashes.join('');

 	// make wrong letters into an ARRAY
	wrongLetters = [];

}


	newGame();



//--------------User Guesses-----------------------
 	document.onkeyup = function(event) {

 		// make user input lower case
	  userInput = String.fromCharCode(event.keyCode).toLowerCase();

	  
	  charCode = event.keyCode;

		if (charCode < 64 || charCode > 91){
			alert("That's not a letter! You lose a point!");
		}



		// 	  
	  gameWord = currentWord.split('')

	  // matches current letter with letters of the word
	  // to see if guessed correct letter
	  for(var i = 0; i<currentWord.length; i++){

	  	if(userInput == gameWord[i]){
  			dashes[i] = userInput;
  			found = 1;
  		}

		}

		// display the underscores with correctly guessed letters
		// insert a space after letter
		document.getElementById("guessed").innerHTML = dashes.join(' ');

		if(found == 1){
			// do nothing
		}else{
		
			// checks to see if userInput has been used before
			for(var i = 0; i<wrongLetters.length; i++){
				if(userInput == wrongLetters[i]){
					guessedTwice = 1;
				}
			}

			// if letter was never used, the counter goes down
			if(guessedTwice == 0){
				wrongLetters[10-counter] = userInput;
				counter = counter - 1;
			}

		} // close the else 

	// reset flags
	guessedTwice = 0;
	found = 0;



	// -- displays wrong letters
	document.getElementById("wrong").innerHTML = wrongLetters.join(', ');

	//----GUESS COUNTER------
	document.getElementById("counter2").innerHTML = counter;


		if(counter == 0){
			alert("You lost! :C ");

			//restart game
			newGame();

		}

		if(dashes.join('') == currentWord){
			alert('You won!  :D');
			newGame();
		}




	} // closing tag for event key press


} //closing tag for window.onload 


//--------------what to remember--------
//uses guess
//guesses remaining
//letters uses
//reset the game once you won
//bonus:play a song when the person wins