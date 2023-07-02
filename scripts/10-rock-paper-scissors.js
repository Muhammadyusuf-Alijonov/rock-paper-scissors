let score = JSON.parse(localStorage.getItem('score')) || {
	wins: 0,
	losses: 0,
	ties: 0,
};

updateScoreElement();

function playGame(playerMove) {
	computerMove = pickComputerMove();

	result = '';
	
	if (playerMove === 'scissors') {
		if (computerMove === 'rock') {
			result = 'You lose.';
		} else if (computerMove === 'paper') {
			result = 'You win.';
		} else if (computerMove === 'scissors') {
			result = 'Tie.';
		}

	} else if (playerMove === 'paper') {
		if (computerMove === 'rock') {
			result = 'You win.';
		} else if (computerMove === 'paper') {
			result = 'Tie.';
		} else if (computerMove === 'scissors') {
			result = 'You lose.';
		}

	} else if (playerMove === 'rock') {
		if (computerMove === 'rock') {
			result = 'Tie.';
		} else if (computerMove === 'paper') {
			result = 'You lose.';
		} else if (computerMove === 'scissors') {
			result = 'You win.';
		}
	}

	if (result === 'You win.') {
		score.wins++;
	} else if (result === 'You lose.') {
		score.losses++;
	} else if (result === 'Tie.') {
		score.ties++;
	}

	localStorage.setItem('score', JSON.stringify(score));

	updateScoreElement();
	
	document.querySelector('.js-result').innerHTML = result;
	
	document.querySelector(
		'.js-moves'
	).innerHTML = `You <img src="images/${playerMove}-emoji.png" alt="${playerMove}" class="move-icon" />
    <img src="images/${computerMove}-emoji.png" alt="${computerMove}" class="move-icon" />
    Computer`;
}

function updateScoreElement() {
	document.querySelector(
		'.js-score'
	).innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

function pickComputerMove() {
	const randomNumber = Math.random();

	let computerMove = '';

	if (randomNumber >= 0 && randomNumber < 1 / 3) {
		computerMove = 'rock';
	} else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
		computerMove = 'paper';
	} else if (randomNumber >= 2 / 3 && randomNumber < 1) {
		computerMove = 'scissors';
	}
	return computerMove;
}
