'use strict';
// WEEK-6 CODING ASSIGNMENT - WAR CARD GAME

// Create a 'DeckOfCards' class that creates a 'deck' array, with a methods to create a 'newDeck' to 'shuffle':
// Each card in the deck will have a value, a suit, and a rank (Aces low, with a rank of 1).

class DeckOfCards {
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

const cards = new DeckOfCards();
cards.newDeck();
cards.shuffle();
// console.table(cards.deck); //ANCHOR - check full deck of shuffled cards

// Player Class will include the player's 'hand' of cards array, 'score', and 'name' constructor

class Player {
	hand = [];
	score = 0;
	constructor(newName) {
		this.name = newName;
	}
}

// Create two players from the 'Player' class:

const player1 = new Player('Ben');
const player2 = new Player('Lucy');

// Distribute half of the shuffled deck to each player:

player1.hand = player1.hand.concat(cards.deck.splice(0, 26));
player2.hand = cards.deck;
// console.table(player1.hand); //ANCHOR - check player1's hand
// console.table(player2.hand); //ANCHOR - check player2's hand

// Loop to play a round, tabulate scores, and declare round winner

function playGame() {
	for (let round = 1; round <= 26; round++) {
		console.log(`\n==============================\nROUND ${round}:`);
		const player1play = player1.hand.shift();
		const player2play = player2.hand.shift();
		let indefiniteArticle1 = 'a';
		if (player1play.value === 8 || player1play.value === 'Ace') {
			indefiniteArticle1 = 'an';
		}
		let indefiniteArticle2 = 'a';
		if (player2play.value === 8 || player2play.value === 'Ace') {
			indefiniteArticle2 = 'an';
		}
		console.log(
			`${player1.name} played ${indefiniteArticle1} ${player1play.value} of ${player1play.suit}`
		);
		console.log(
			`${player2.name} played ${indefiniteArticle2} ${player2play.value} of ${player2play.suit}`
		);
		if (player1play.rank > player2play.rank) {
			player1.score++;
			console.log(`${player1.name}(${player1.score}-${player2.score}) wins this round`);
		} else if (player2play.rank > player1play.rank) {
			player2.score++;
			console.log(`${player2.name}(${player2.score}-${player1.score}) wins this round`);
		} else {
			console.log(`This round was a tie`);
		}
	}
}
playGame();

// display final scores, and declare the winner (or tie)

function declareWinner(score1, score2) {
	let declaration = '';
	if (score1 > score2) {
		declaration = `🏆 ${player1.name} wins the game, ${score1} to  ${score2}! 🏆`;
	} else if (score2 > score1) {
		declaration = `🏆 ${player2.name} wins the game, ${score2} to  ${score1}! 🏆`;
	} else {
		declaration = `The game ended in a tie!`;
	}
	console.log(
		`\n===================================\n${declaration}\n===================================`
	);
	return declaration;
}
declareWinner(player1.score, player2.score);
