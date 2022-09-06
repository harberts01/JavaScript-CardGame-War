let A = 14
const J = 11
const Q = 12
const K = 13
const suits = ['♥', '♣', '♠', '♦']
const values = [A, 2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K]

class Deck{
    constructor(cards = newDeck()){
        this.cards = cards
    }
}

class Card {
    constructor(suit, value){
        this.suit = suit
        this.value = value
    }
}


function newDeck(){
    return suits.flatMap(suit => {
        return values.map( value => {
            return new Card(suit, value)
        })
    })
}

let shuffle = deck => {
	for (let i = deck.length - 1; i > 0; i--){
		const j = Math.floor(Math.random() * (i + 1));
		[deck[i], deck[j]] = [deck[j], deck[i]]
	}
	return deck;
}

const deck = new Deck()
shuffle(deck.cards)
console.log(deck.cards)

const player1 = deck.cards.splice(0, 26)
console.log(player1)

const player2 = deck.cards.splice(0, 26)
console.log(player2)

// player1 = player1.filter(val => !player2.includes(val));

//-----------------------------------------------------------------------------

let resultOne = player1.map(a => a.value)


let resultTwo = player2.map(a => a.value)


let player1Points = 0
let player2Points = 0

for (let i = 0; i < resultOne.length; i++){
    for(let k = 0; k < resultTwo.length; k++){
        if(resultOne[i] > resultTwo[k]){
            player1Points += 1
        }else{
            player2Points += 1
        }
    }
}


if(player1Points > player2Points){
    console.log(`PLAYER ONE WINS!`)
}else{
    console.log(`PLAYER TWO WINS!`)
}