var cards = ["queen", "queen", "king", "king"];

var cardsInPlay = [];

var checkForMatch = function() {
	if (cardsInPlay.length === 2) {
		if (cardsInPlay[0] === cardsInPlay[2]) {
		console.log("You found a match!");
	}
	else {
		console.log("Sorry, try again.");
	}
}
}

var flipCard = function(cardId) {
		checkForMatch();
		console.log("User flipped " + cards[cardId]);
	}

flipCard(0);
flipCard(2);

cardsInPlay.push(cards[0,2]);
