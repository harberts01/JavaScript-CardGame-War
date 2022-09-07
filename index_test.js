let expect = chai.expect;

describe('MyFunctions', function() {
    describe('New hand', function() {
        it('should create an array of 52 cards, and deal them evenly leaving the deck empy', function() {
             let x = newDeck();
            expect(player1).to.have.lengthOf(26);
            expect(player2).to.have.lengthOf(26);
            expect(Deck).to.have.lengthOf(0)
    });
        it('Should throw error if deck has cards remaining or players have imbalance in amount of cards.', function() {
            expect(function() {
                newDeck();
            expect(player1).to.have.lengthOf(26);
            expect(player2).to.have.lengthOf(26);
            expect(Deck).to.have.lengthOf(0)
            }).to.throw(Error);
        });
    });
});