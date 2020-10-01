document.addEventListener('DOMContentLoaded', () => {
	//card options
	const cardArray = [
		{
			name: 'fries',
			img: 'images/fries.svg'
		},
		{
			name: 'cheeseburger',
			img: 'images/burger.svg'
		},
		{
			name: 'ice-cream',
			img: 'images/icecream.svg'
		},
		{
			name: 'pizza',
			img: 'images/pizza.svg'
		},
		{
			name: 'milkshake',
			img: 'images/soda.svg'
		},
		{
			name: 'hotdog',
			img: 'images/hotdog.svg'
		},
		{
			name: 'fries',
			img: 'images/fries.svg'
		},
		{
			name: 'cheeseburger',
			img: 'images/burger.svg'
		},
		{
			name: 'ice-cream',
			img: 'images/icecream.svg'
		},
		{
			name: 'pizza',
			img: 'images/pizza.svg'
		},
		{
			name: 'milkshake',
			img: 'images/soda.svg'
		},
		{
			name: 'hotdog',
			img: 'images/hotdog.svg'
		}
	];

	cardArray.sort(() => 0.5 - Math.random());

	const grid = document.querySelector('.grid');
	const resultDisplay = document.querySelector('#result');
	var cardsChosen = [];
	var cardsChosenId = [];
	const cardsWon = [];

	//create your board
	function createBoard() {
		for (let i = 0; i < cardArray.length; i++) {
			var card = document.createElement('img');
			card.setAttribute('src', 'images/blank.svg');
			card.setAttribute('data-id', i);
			card.addEventListener('click', flipCard);
			grid.appendChild(card);
		}
	}

	//check for matches
	function checkForMatch() {
		var cards = document.querySelectorAll('img');
		const optionOneId = cardsChosenId[0];
		const optionTwoId = cardsChosenId[1];

		if (optionOneId == optionTwoId) {
			cards[optionOneId].setAttribute('src', 'images/blank.svg');
			cards[optionTwoId].setAttribute('src', 'images/blank.svg');
			alert('You have clicked the same image!');
		} else if (cardsChosen[0] === cardsChosen[1]) {
			alert('You found a match');
			cards[optionOneId].setAttribute('src', 'images/white.svg');
			cards[optionTwoId].setAttribute('src', 'images/white.svg');
			cards[optionOneId].removeEventListener('click', flipCard);
			cards[optionTwoId].removeEventListener('click', flipCard);
			cardsWon.push(cardsChosen);
		} else {
			cards[optionOneId].setAttribute('src', 'images/blank.svg');
			cards[optionTwoId].setAttribute('src', 'images/blank.svg');
			alert('Sorry, try again');
		}
		cardsChosen = [];
		cardsChosenId = [];
		resultDisplay.textContent = cardsWon.length;
		if (cardsWon.length === cardArray.length / 2) {
			resultDisplay.textContent = 'Congratulations! You found them all!';
		}
	}

	//flip your card
	function flipCard() {
		var cardId = this.getAttribute('data-id');
		cardsChosen.push(cardArray[cardId].name);
		cardsChosenId.push(cardId);
		this.setAttribute('src', cardArray[cardId].img);
		if (cardsChosen.length === 2) {
			setTimeout(checkForMatch, 500);
		}
	}

	createBoard();
});
