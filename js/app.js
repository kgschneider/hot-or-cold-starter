var number;
var gameFinished = false;

function generateNumber () {
	number = Math.floor((Math.random() * 100) + 1);
	console.log("the secret number is " + number)
}

$(document).ready(function() {

  $(".what").click(function(){

    	$(".overlay").fadeIn(1000);
  	});

  $("a.close").click(function(){

  		$(".overlay").fadeOut(1000);
  	});


generateNumber();
var guessInput;
var guesses = [];

	$('.new').click(function() {
		generateNumber();
		guesses = [];
		$('#userGuess').val('');
		$('#count').html('0');
		$('#guessList').html('');
		$('#feedback').html('Make your guess!');
		gameFinished = false;
	})

	$('#guessButton').click(function() {
		
		guessInput = $('#userGuess').val();

		var distance = Math.abs(number - guessInput);
		console.log(distance);

		if (gameFinished == true) {
			$('#feedback').html("The game is finished!  Click New Game.");
		}


		else if (guessInput <= 0 || 100 < guessInput || isNaN(parseFloat(guessInput))) {
			$('#feedback').html("Try again! The number must be between 1-100.");
		}
		
		else {

			guesses.push(guessInput);

			if (guessInput == number) {
				$('#feedback').html("You got it!");
				gameFinished = true;
			}
			else if (distance >= 1 && distance <= 10 && guessInput < number) {
				$('#feedback').html("Very hot! Try a higher number.");
			}
			else if (distance >= 1 && distance <= 10 && guessInput > number) {
				$('#feedback').html("Very hot! Try a lower number.");
			}
			else if (distance >= 11 && distance <= 30 && guessInput < number){
				$('#feedback').html("Getting hot! Try a higher number.");
			}
			else if (distance >= 11 && distance <= 30 && guessInput > number){
				$('#feedback').html("Getting hot! Try a lower number.");
			}
			else if (distance >= 31 && distance <= 50 && guessInput < number) {
				$('#feedback').html("Cold! Try a higher number.");
			}
			else if (distance >= 31 && distance <= 50 && guessInput > number) {
				$('#feedback').html("Cold! Try a lower number.");
			}
			else if (distance >= 51 && distance <= 70 && guessInput < number) {
				$('#feedback').html("Very cold! Try a higher number.");
			}
			else if (distance >= 51 && distance <= 70 && guessInput > number) {
				$('#feedback').html("Very cold! Try a lower number.");
			}
			else if (distance >= 71 && distance <= 99 && guessInput < number) {
				$('#feedback').html("Ice cold! Try a higher number.");
			}
			else if (distance >= 71 && distance <= 99 && guessInput > number) {
				$('#feedback').html("Ice cold! Try a lower number.");
			}


			$('#guessList').html(' ');

			for (var i = 0; i < guesses.length; i++) {
				$('#count').html(guesses.length);
				$('#guessList').append(guesses[i]);
				
				if (i < guesses.length - 1) {
					$('#guessList').append(",");
				}
			}
		}
	});
});  

	
/* var number = Math.floor((Math.random() * 100) + 1);
var userGuessNum = $('#userGuess').val();

$(document).ready(function(){


	/*--- Display information modal box ---*/
  	/* $(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	/* $("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

});

/* function GuessNumber() {

} */

