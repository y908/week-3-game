
	var computerChoices = ['a','b','c','d','e','f','g','h','i',
	'	j','k','l','m','n','o','p','q','r','s','t','u','v','w','x',
		'y','z'];

	var wins = 0;
	var losses = 0;
	var guessLeft = 9;
	var guessSoFar =
	
	document.onkeyup = function(event) {
		var userGuess = String.fromCharCode(event.keyCode).toLowerCase()[Math.max(0,9)];
		var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

		if (userGuess == computerGuess){
			wins++

		}
		else {
			losses++
		}

		var html = '<p>Guess what letter I\'m thinking of! Enter any letter from A-Z.</p>' + 
		'<p>wins:' + wins + '</p>' + '<p>losses' + losses + '</p>'; 

		for( var guessSoFar = 9; guessSoFar > 0; guessSoFar++){
			document.write('<p>You guessed:' + userGuess + '</p>');
		}

		if  (guessLeft < 0){
		document.location.reload();
		}

		html = '<p>You Guessed:' + userGuess

		document.querySelector('#game').innerHTML = html;

	
	}


//1. need something to list the letters already typed
//2. something to restart the counter but keeps wins and losses
//+ '<p>You guessed:' + userGuess + '</p>'+ '<p>Guesses Left:' + guessLeft-- + '</p>';

//for loop for the list of letters
//for( var guessSoFar = 9; guessSoFar > 0; guessSoFar++){
// 	'<p>You guessed:' + userGuess + '</p>';
//}