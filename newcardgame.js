//creating variables and arrays to define a card and the value of each card.
// I used 'let' for the ACE so that the variable could be changed to value 1 if players chose.
let A = 14
const J = 11
const Q = 12
const K = 13
const suits = ['♥', '♣', '♠', '♦']
const values = [A, 2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K]

// created a deck using the newDeck as a callback so once we completed the newDeck function it would
// be held in the Deck class.
class Deck{
    constructor(cards = newDeck()){
        this.cards = cards
    }
}
//Build a card class using what a card is made up of, a suit and a value. 
class Card {
    constructor(suit, value){
        this.suit = suit
        this.value = value
    }
}

//build a function creating a new deck. I used .flatmap to create one array for all the suits
// instead of 4 separat arrays as the .map would have done. Use the card class to define my cards and assign
// a value and suit to each card in the array of 52 elements.
function newDeck(){
    return suits.flatMap(suit => {
        return values.map( value => {
            return new Card(suit, value)
        });
    });
}
//using a for loop I created a function that takes the cards 
let shuffle = deck => {
	for (let i = deck.length - 1; i > 0; i--){
		const j = Math.floor(Math.random() * (i + 1));
		[deck[i], deck[j]] = [deck[j], deck[i]]
	}
	return deck;
}

const deck = new Deck();
shuffle(deck.cards);
console.log(deck.cards);

// player 1 is recieving the first half of the deck
const player1 = deck.cards.splice(0, 26);
console.log(player1);

// player 2 is recieving the second half of the deck
const player2 = deck.cards.splice(0, 26);
console.log(player2);

// player1 = player1.filter(val => !player2.includes(val));

// I used the .map method and used a function as the parameter that retrieves the value of each card
// for each player.
let resultOne = player1.map(a => a.value);
let resultTwo = player2.map(a => a.value);

let player1Points = 0
let player2Points = 0


// Here I set a for loop to compare the values given in the 2 result arrays. I chose to add all the elements
// in each array and then decide which array held the greater values. In the game of war the winner will hold
// the greater total value of cards if they win. I incremented the results and they are held in the player
// points variables above.

for (let i = 0; i < 26; i++){
    console.log(`Player 1: ${resultOne[i]}`, `Player 2: ${resultTwo[i]}`);
    if(resultOne[i] > resultTwo[i]){
        player1Points += 1
    }else{
        player2Points += 1
    }
}
    console.log(`Player 1 Total Points ${player1Points}`);
    console.log(`Player 2 Total Points ${player2Points}`);
// I then compared the player points values to print the winner of the greater hand.

if(player1Points > player2Points){
    console.log(`PLAYER ONE WINS!`);
}else if(player2Points > player1Points){
    console.log(`PLAYER TWO WINS!`);
}else {
    console.log(`ITS A TIE!`);
} 