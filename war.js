'use strict';
// WEEK-6 CODING ASSIGNMENT - WAR CARD GAME

// Create an array called "deck", that contains a full deck of cards along with their rank:

const suits = ['Clubs', 'Diamonds', 'Hearts', 'Spades'];
const cardValues = ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King'];
let deck = [];
function newDeck() {
	for (let i = 0; i < suits.length; i++) {
		for (let x = 0; x < cardValues.length; x++) {
			let card = {};
			card.value = cardValues[x];
			card.suit = suits[i];
			switch (cardValues[x]) {
				case 'Ace':
					card.rank = 1;
					break;
				case 'Jack':
					card.rank = 11;
					break;
				case 'Queen':
					card.rank = 12;
					break;
				case 'King':
					card.rank = 13;
					break;
				default:
					card.rank = cardValues[x];
			}
			deck.push(card);
		}
	}
}
newDeck();

// Player Class will include the player's name, hand, and a method play the first card in their hand

class Player {
	constructor(name) {
		this.name = name;
		// this.hand = [];
	}
	hand = [];
	playCard() {
		return this.hand.shift();
	}
}

// Create two players from the Player class:

let player1 = new Player('Joe');
let player2 = new Player('Lucy');

// console.log(player1.name);
// player1.hand.push(
// 	{ value: 5, suit: 'Hearts', rank: 5 },
// 	{ value: 'Ace', suit: 'Spades', rank: 1 },
// 	{ value: 'King', suit: 'Clubs', rank: 13 }
// );
// console.log(player1.hand);

// "Shuffle" & Distribute Cards. (26 cards will be randomly picked and given to player1. The rest will be given to player2.)

console.table(deck);

while (deck.length > 26) {
	let randomDeckIndex = Math.floor(Math.random() * deck.length);
	player1.hand = player1.hand.concat(deck.splice(randomDeckIndex, 1));
}
player2.hand = deck;

console.table(player1.hand);
console.table(player2.hand);

// Shuffle and distribute cards

//loop to play cards, and record score of each round, and add to total scores

// display final scores, and recognize the winner
