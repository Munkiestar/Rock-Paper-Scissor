// game function
const game = () =>{
	let playerScore = 0;
	let compScore = 0;

	// Start the Game
	const startGame = () =>{
		const playBtn = document.querySelector('.intro button');
		const introScreen = document.querySelector('.intro');
		const match = document.querySelector('.match');

		playBtn.addEventListener('click', () =>{
			introScreen.classList.add('fadeOut');
			match.classList.add('fadeIn');
		});
	};

	// Play Match
	const playMatch = () =>{
		const options = document.querySelectorAll('.options button');
		const playerHand = document.querySelector('.player-hand');
		const compHand = document.querySelector('.computer-hand');
		const hands = document.querySelectorAll('.hands img');

		hands.forEach(hand =>{
			hand.addEventListener('animationend', function(){
				this.style.animation = '';
			});
		});

		// Computer AI
		const compOptions = ['rock', 'paper', 'scissors'];

		options.forEach(option =>{
			option.addEventListener('click', function(){
				// Computer Choice
				const compRandNum = Math.floor(Math.random() * 3);
				const compChoice = compOptions[compRandNum];


				setTimeout(() =>{
					// check for Compare Hands winner
					compareHands(this.textContent, compChoice);

					// update Images
					playerHand.src =`./img/${this.textContent}.png`;
					compHand.src = `./img/${compChoice}.png`;
					}, 1500);

				// animation shake
				playerHand.style.animation = "shakeHuman 1.5s ease";
				compHand.style.animation = 'shakeComp 1.5s ease';
			});
		});
	};

	const compareHands = (playerChoice, compChoice) =>{
		// Update Text
		
		const winner = document.querySelector('.winner');
		// a Tie
		if(playerChoice === compChoice){
			winner.textContent = 'It is a tie!';
			return; // end the function
		}
		// a Rock
		if(playerChoice === 'rock'){
			if(compChoice === 'scissors'){
				winner.textContent = 'Human Wins!';
				playerScore++;
				updateScore();
				return;
			} else{
				winner.textContent = 'Computer Wins!';
				compScore++;
				updateScore();
				return;
			}
		}		
		// a Paper
		if(playerChoice === 'paper'){
			if(compChoice === 'scissors'){
				winner.textContent = 'Computer Wins!';
				compScore++;
				updateScore();
				return;
			} else{
				winner.textContent = 'Human Wins!';
				playerScore++;
				updateScore();
				return;
			}
		}		
		// a Scissors
		if(playerChoice === 'scissors'){
			if(compChoice === 'rock'){
				winner.textContent = 'Computer Wins!';
				compScore++;
				updateScore();
				return;
			} else{
				winner.textContent = 'Human Wins!';
				playerScore++;
				updateScore();
				return;
			}
		}		
	};

	// update 	Score
	const updateScore = () => {
		const pScore = document.querySelector('.player-score p');
		const cScore = document.querySelector('.computer-score p');

		pScore.textContent = playerScore;
		cScore.textContent = compScore;
	};


	// Call all the inner funct
	startGame();
	playMatch();
};



// start the game function
game();