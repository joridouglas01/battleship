//he first 3 var's denote where the battle ship is actually located on the grid.
var location1 = 3;
var location2 = 4;
var location3 = 5;

//These are the beginning peramiters for the "while" loop.  Basically everything is set to "0".
var guess;
var hits = 0;
var guesses = 0;

// This statement is basically saying as long as the variable has a staus of not sunk, the loop shall continue.
var isSunk = false;

//This is the beginning of the loop and also produces the alert box to begin the game.
while (isSunk == false) {
	guess = prompt("Ready, aim, fire! (enter a number from 0-6):");
	//This is the script that describes what range of numbers/input the user can insert to mae the loop run. If the value is outside of the perimeters then is will promt new alert.
	if (guess < 0 || guess > 6) {
		alert("Please enter a valid cell number!");
	}	else {
		guesses = guesses + 1;
		
		//This is the actionable script that produces the "Hit" pop-up box.
		//Also increases the amount of hits in counter and will produce "You sank my battleship" popup.
		if (guess == location1 || guess == location2 || guess == location3) {
			alert("Hit!");
			hits = hits + 1;
			if (hits == 3) {
				isSunk = true;
				alert("You sank my battleship!");
			}
		}	else {
			alert("MISS");
		}
	}
}
var stats = " You took " + guesses + " guesses to sink the battleship, " + " which means your shooting accuracy was " + (3/guesses);
alert(stats);


