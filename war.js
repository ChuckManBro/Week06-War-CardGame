'use strict';
// WEEK-6 CODING ASSIGNMENT - WAR CARD GAME

// Create a 'Deck' class that creates a full deck array, with a method to shuffle:
// Each card in the deck will have a value, a suit, and a rank (Aces low, with a rank of 1).

class Deck {
	deck = [];
	newDeck() {
		const suits = ['Clubs', 'Diamonds', 'Hearts', 'Spades'];
		const cardValues = ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King'];
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
				this.deck.push(card);
			}
		}
	}
	shuffle() {
		for (let i = this.deck.length - 1; i > 0; i--) {
			let random = Math.floor(Math.random() * (i + 1));
			[this.deck[i], this.deck[random]] = [this.deck[random], this.deck[i]];
		}
		return this.deck;
	}
}

let cards = new Deck();
cards.newDeck();
cards.shuffle();
console.table(cards.deck);

// Player Class will include the player's hand of cards array, score, and name constructor

class Player {
	hand = [];
	score = 0;
	constructor(newName) {
		this.name = newName;
	}
}

// Create two players from the Player class:

let player1 = new Player('Joe');
let player2 = new Player('Lucy');

// Distribute half of the shuffled deck to each player:

player1.hand = player1.hand.concat(cards.deck.splice(0, 26));
player2.hand = cards.deck;
console.table(player1.hand);
console.table(player2.hand);

//loop to play cards, and record score of each round, and add to total scores

// display final scores, and declare the winner (or tie)
