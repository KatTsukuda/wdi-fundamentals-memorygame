// Objects - listing out each of the four card types
var cards = [
	{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
	},
	{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"
	},
	{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"
	},
	{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png"
	}
];
var cardsInPlay = [];

// checking and verifying if there's a match
var checkForMatch = function() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		console.log("You found a match!");
	} else {
		console.log("Sorry, try again.");
	}
}; 
// interactive functions

var flipCard = function () {
	var cardID = this.getAttribute("data-id")
		console.log("User flipped " + cards[cardID].rank);
		console.log("User flipped " + cards[cardID].suit);
		console.log("User flipped " + cards[cardID].cardImage);
			
	cardsInPlay.push(cards[cardID].rank);
		this.setAttribute('src', cards[cardID].cardImage);
			if (cardsInPlay[0] === cardsInPlay[1]) {
				alert("You found a match!");
		} 	else {
				alert("Sorry, try again.");
	}
};


var createBoard = function () {
	for (var i = 0; i < cards.length; i++) {
var cardElement = document.createElement ("img");
	cardElement.setAttribute("src", "images/back.png");
	cardElement.setAttribute("data-id", i);
	cardElement.addEventListener("click", flipCard);
document.getElementById("game-board").appendChild(cardElement);
	}
};

createBoard();

    





