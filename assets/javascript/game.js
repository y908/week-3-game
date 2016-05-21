window.onload = function () {

//----------------key variables--------------------

	var wordbank = ['papaya', 'lychee', 'peach','banana', 'pineapple', 'celery', 'pumpkin', 'cabbage', 'spinach', 'carrot'];

	var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h','i', 'j', 'k', 'l', 'm','n', 'o', 'p', 'q', 'r', 's','t', 'u', 'v', 'w', 'x', 'y', 'z'];

	
// ------------ Active Variables --------------------
	var userInput; //the letters the user types
	var guessesLeft; //how many guesses are left for the user
	var lettersMatched; //the letters that come up when matching the word
	var space; //spaces in between the letters
	var currentWord; //the word selected by the computer
	var message; //alerts to the user 


	var temp; // array with actual word
	var temp2; // array with dashes and replaced correct words
	var temp3; // array with letters we have guessed
	var found;	// flag to see if letter is found yet
	found  = 0; // 0 means not found.

	var guessedTwice; // if you guessed twice
	guessedTwice = 0; // 0 -- means you've not guessed this letter yet

	var numGuesses; // number of guesses the person took wrong
	numGuesses = 10;

//----------Computer Genorates Random word-------------------------

	currentWord = wordbank[Math.floor(Math.random()*wordbank.length)];

// display current word -- for development purposes
	document.getElementById("word").innerHTML = currentWord;

	temp2 = currentWord.split('')

  for(var i = 0; i<currentWord.length; i++){
		temp2[i] = '_';
 	}

	temp3 = ['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0']
	
	for(var i = 0; i<10; i++){
		temp3[i] = 'x';
	}
	
//--------------User Guesses-----------------------
 	document.onkeyup = function(event) {
	  userInput = String.fromCharCode(event.keyCode).toLowerCase();

	  temp = currentWord.split('')

	  // matches current letter with letters of the word
	  // to see if guessed correct letter
	  for(var i = 0; i<currentWord.length; i++){

	  	if(userInput == temp[i]){
  			temp2[i] = userInput;
  			found = 1;
  		}

		}

		// display the underscores with correctly guessed letters
		document.getElementById("guessed").innerHTML = temp2.join('');

		if(found == 1){
			// do nothing
		}else{
		
			for(var i = 0; i<temp3.length; i++){
				if(userInput == temp3[i]){
					guessedTwice = 1;
				}
			}

			if(guessedTwice == 0){
				temp3[numGuesses] = userInput;
				numGuesses = numGuesses - 1;
			}

		} // close the else 

	// reset flags
	guessedTwice = 0;
	found = 0;

	// -- displays wrong letters
	document.getElementById("wrong").innerHTML = temp3.join('');

	//----GUESS COUNTER------
	document.getElementById("counter2").innerHTML = numGuesses;


	} // closing tag for event key press


} //closing tag for window.onload 


//--------------what to remember--------
//uses guess
//guesses remaining
//letters uses
//reset the game once you won
//bonus:play a song when the person wins