var cards = [
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamnds.png"
},
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"
},
{
	rank: "dana",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png"
}
];

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

var flipCard = function(cardsId) {
		checkForMatch();
		console.log("User flipped " + cards[0,2].rank);
		console.log(cards[0,2].cardImage);
		console.log(cards[0,2].suit);
	}

flipCard(0);
flipCard(2);

cardsInPlay.push(cards[0,2].rank);

