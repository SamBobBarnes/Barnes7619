function pregameRoll() {
	var dice = [0, 0, 0, 0, 0];
	for (var i = 0; i < 5; i++) {
		dice[i] = Math.floor(Math.random() * 6 + 1);
		//console.log(dice[i] + " " + i); //debug
	}
	return dice;
}

function rollAllDice() {
	if (rollCount < 3) {
		dice.forEach((die, i) => {
			if (!die.isHeld()) {
				die.roll();
			}
		});
		rollCount += 1;
		if (rollCount == 3) rollButton.canClick(false);
	}
}

function freeAllDice() {
	dice.forEach((die, i) => {
		if (die.isHeld()) {
			die.hold();
		}
	});
	rollCount = 0;
	rollButton.canClick(true);
}

function readAllDice() {
	result = [0, 0, 0, 0, 0];
	dice.forEach((die, i) => {
		result[i] = die.read();
	});
	//console.log(result);
	return result;
}
