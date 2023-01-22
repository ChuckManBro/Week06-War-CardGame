let expect = chai.expect;

const fullDeck1 = new DeckOfCards();
fullDeck1.newDeck(); // creates a new deck of cards object for testing

describe('Test WAR game functions:', function () {
	describe('Check newDeck method in DeckOfCards class', function () {
		it('New deck should contain 52 cards (objects)', function () {
			expect(fullDeck1.deck.length).to.equal(52);
		});
	});
	describe('Check shuffle method:', function () {
		it('New deck should not match a shuffled deck', function () {
			const fullDeck2 = new DeckOfCards();
			fullDeck2.newDeck();
			fullDeck2.shuffle();
			expect(fullDeck1).to.not.equal(fullDeck2);
		});
	});
	describe('Does declareWinner function allow for a tie?', function () {
		it('Tied game should declare "The game ended in a tie!"', function () {
			expect(declareWinner(13, 13)).to.equal(`The game ended in a tie!`);
		});
	});
});
