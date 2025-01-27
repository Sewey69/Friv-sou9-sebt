const pile = [
    { id: 'card1', value: "1♠️", points: 1 },
    { id: 'card2', value: "1❤️", points: 1 },
    { id: 'card3', value: "1♦️", points: 1 },
    { id: 'card4', value: "1♣️", points: 1 },
    { id: 'card5', value: "2♠️", points: 2 },
    { id: 'card6', value: "2❤️", points: 2 },
    { id: 'card7', value: "2♦️", points: 2 },
    { id: 'card8', value: "2♣️", points: 2 },
    { id: 'card9', value: "3♠️", points: 3 },
    { id: 'card10', value: "3❤️", points: 3 },
    { id: 'card11', value: "3♦️", points: 3 },
    { id: 'card12', value: "3♣️", points: 3 },
    { id: 'card13', value: "4♠️", points: 4 },
    { id: 'card14', value: "4❤️", points: 4 },
    { id: 'card15', value: "4♦️", points: 4 },
    { id: 'card16', value: "4♣️", points: 4 },
    { id: 'card17', value: "5♠️", points: 5 },
    { id: 'card18', value: "5❤️", points: 5 },
    { id: 'card19', value: "5♦️", points: 5 },
    { id: 'card20', value: "5♣️", points: 5 },
    { id: 'card21', value: "6♠️", points: 6 },
    { id: 'card22', value: "6❤️", points: 6 },
    { id: 'card23', value: "6♦️", points: 6 },
    { id: 'card24', value: "6♣️", points: 6 },
    { id: 'card25', value: "7♠️", points: 7 },
    { id: 'card26', value: "7❤️", points: 7 },
    { id: 'card27', value: "7♦️", points: 7 },
    { id: 'card28', value: "7♣️", points: 7 },
    { id: 'card29', value: "Rayy♠️", points: 10 },
    { id: 'card30', value: "Rayy❤️", points: 10 },
    { id: 'card31', value: "Rayy♦️", points: 10 },
    { id: 'card32', value: "Rayy♣️", points: 10 },
    { id: 'card33', value: "Kawel♠️", points: 9 },
    { id: 'card34', value: "Kawel❤️", points: 9 },
    { id: 'card35', value: "Kawel♦️", points: 9 },
    { id: 'card36', value: "Kawel♣️", points: 9 },
    { id: 'card37', value: "Moujira♠️", points: 8 },
    { id: 'card38', value: "Moujira❤️", points: 8 },
    { id: 'card39', value: "Moujira♦️", points: 8 },
    { id: 'card40', value: "Moujira♣️", points: 8 }
];
const ref = [
    { id: 'card1', value: "1♠️", points: 1 },
    { id: 'card2', value: "1❤️", points: 1 },
    { id: 'card3', value: "1♦️", points: 1 },
    { id: 'card4', value: "1♣️", points: 1 },
    { id: 'card5', value: "2♠️", points: 2 },
    { id: 'card6', value: "2❤️", points: 2 },
    { id: 'card7', value: "2♦️", points: 2 },
    { id: 'card8', value: "2♣️", points: 2 },
    { id: 'card9', value: "3♠️", points: 3 },
    { id: 'card10', value: "3❤️", points: 3 },
    { id: 'card11', value: "3♦️", points: 3 },
    { id: 'card12', value: "3♣️", points: 3 },
    { id: 'card13', value: "4♠️", points: 4 },
    { id: 'card14', value: "4❤️", points: 4 },
    { id: 'card15', value: "4♦️", points: 4 },
    { id: 'card16', value: "4♣️", points: 4 },
    { id: 'card17', value: "5♠️", points: 5 },
    { id: 'card18', value: "5❤️", points: 5 },
    { id: 'card19', value: "5♦️", points: 5 },
    { id: 'card20', value: "5♣️", points: 5 },
    { id: 'card21', value: "6♠️", points: 6 },
    { id: 'card22', value: "6❤️", points: 6 },
    { id: 'card23', value: "6♦️", points: 6 },
    { id: 'card24', value: "6♣️", points: 6 },
    { id: 'card25', value: "7♠️", points: 7 },
    { id: 'card26', value: "7❤️", points: 7 },
    { id: 'card27', value: "7♦️", points: 7 },
    { id: 'card28', value: "7♣️", points: 7 },
    { id: 'card29', value: "Rayy♠️", points: 10 },
    { id: 'card30', value: "Rayy❤️", points: 10 },
    { id: 'card31', value: "Rayy♦️", points: 10 },
    { id: 'card32', value: "Rayy♣️", points: 10 },
    { id: 'card33', value: "Kawel♠️", points: 9 },
    { id: 'card34', value: "Kawel❤️", points: 9 },
    { id: 'card35', value: "Kawel♦️", points: 9 },
    { id: 'card36', value: "Kawel♣️", points: 9 },
    { id: 'card37', value: "Moujira♠️", points: 8 },
    { id: 'card38', value: "Moujira❤️", points: 8 },
    { id: 'card39', value: "Moujira♦️", points: 8 },
    { id: 'card40', value: "Moujira♣️", points: 8 }
];
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; 
    }
}
shuffle(pile);

function calculateCurrentCombinations(){
    const numCards = onTable.length;
    const totalCombinations = 1 << numCards;

    let sums = [];

    for (let i = 1; i < totalCombinations; i++) { 
        let sum = 0;
        let cardIds = [];  

        for (let j = 0; j < numCards; j++) {
            if (i & (1 << j)) { 
                sum += onTable[j].value; 
                cardIds.push(onTable[j].id); 
            }
        }
        sums.push({ sum, cardIds: [...cardIds] });
    }
    return sums;
}

let yourPile = [];
let myPile = [];
let onTable = [];
let playerScore = [];
let botScore = [];

while (onTable.length < 4 && pile.length) {
    onTable.push(pile.pop());
}

function dealCards() {
    while (yourPile.length < 3 && pile.length) {
        yourPile.push(pile.pop());
    }
    while (myPile.length < 3 && pile.length) {
        myPile.push(pile.pop());
    }
}
dealCards();
function renderHand() {
    const handContainer = document.getElementById('your-hand');
    handContainer.innerHTML = '';  

    yourPile.forEach((card, index) => {
        const cardDiv = document.createElement('div');
        cardDiv.classList.add('card');
        cardDiv.textContent = card.value; 
        cardDiv.id = card.id;
        handContainer.appendChild(cardDiv);
    });
}
function renderBotHand() {
    const botHandContainer = document.getElementById('opponent');
    botHandContainer.innerHTML = '';  

    myPile.forEach((card) => {
        const cardDiv = document.createElement('div');
        cardDiv.classList.add('card');
        cardDiv.classList.add('hidden-card');
        cardDiv.id = card.id;
        // cardDiv.textContent = card.value; 
        cardDiv.textContent = "";  
        cardDiv.setAttribute('data-id', card.id); // Assign the unique ID
        botHandContainer.appendChild(cardDiv);
    });
}
function renderTable(){
    const tableContainer = document.getElementById('table');

    onTable.forEach((card) => {
        const tableCardDiv = document.createElement('div');
        tableCardDiv.classList.add('card');
        tableCardDiv.id = card.id;
        tableCardDiv.textContent = card.value;
        tableContainer.appendChild(tableCardDiv);
    });
}
renderBotHand();
renderHand();
renderTable();

function botTurn() {
    if (myPile.length > 0) {
        const botCardIndex = Math.floor(Math.random() * myPile.length);
        const botCard = myPile[botCardIndex];
        const botCardId = myPile[botCardIndex].id

        const botHand = document.getElementById('opponent');
        myPile.splice(botCardIndex, 1);

        const botChosenCard = botHand.querySelector(`[data-id="${botCardId}"]`);

        botHand.removeChild(botChosenCard);

        const tableCardDiv = document.createElement('div');
        tableCardDiv.classList.add('card');
        tableCardDiv.textContent = botCard.value;
        tableCardDiv.id = botCardId;  
        table.appendChild(tableCardDiv);

        onTable.push(botCard);
    }
}

const playerHand = document.getElementById('your-hand');
playerHand.addEventListener('click', handleSelectCard);

function handleSelectCard(event){
    const clickedCard = event.target;
    if (clickedCard.classList.contains('card')) {
        const previouslySelected = document.querySelector('.card.selected');
        if(clickedCard.classList.contains('selected')){
            clickedCard.classList.remove("selected");
        }
        else if (previouslySelected) {
            previouslySelected.classList.remove('selected');
        }
        else{
            clickedCard.classList.add("selected");
        }

    }
    const cardValue = clickedCard.textContent; 
    const cardId = clickedCard.getAttribute('data-id'); 
    const cardName = clickedCard.getAttribute('data-name');
    console.log(`Card Value: ${cardValue}, Card ID: ${cardId}, Card Name: ${cardName}`);
}

const TableCards = document.getElementById('table');
TableCards.addEventListener('click', handlePlayerMove);

const playButton = document.getElementsByClassName('play');

function handlePlayerMove(event){
    const selectedCard = document.querySelector('#your-hand .selected');
    const clickedCard2 = event.target;
    if (selectedCard) {
        if (selectedCard.classList.contains('card')) {
            if (clickedCard2 && clickedCard2.classList.contains('card')) {
                clickedCard2.classList.toggle('selected');
            }   
        }
    };
}

document.addEventListener('DOMContentLoaded', () => {
    const playButton = document.getElementById('play');
    playButton.addEventListener('click', () => {
        const tableDivs = document.querySelectorAll('#table .selected');
        const valuesArray = Array.from(tableDivs).map(div => div.id);
        const selectedHandCard = document.querySelector('#your-hand .selected');
        console.log(valuesArray);
        if(!selectedHandCard){
            alert("select A card!");
        }
        else if(valuesArray.length === 0){
            const card = yourPile.find(card => card.id === selectedHandCard.id);  

            yourPile = yourPile.filter(card => card.id !== selectedHandCard.id);  
            onTable.push(card);  
            playerHand.removeChild(selectedHandCard); 

            const tableCardDiv = document.createElement('div');
            tableCardDiv.classList.add('card');
            tableCardDiv.textContent = card.value;  
            tableCardDiv.id = card.id;
            document.getElementById('table').appendChild(tableCardDiv);

            selectedHandCard.style.pointerEvents = 'none';  
        } else {
            let sum = 0;
            valuesArray.forEach(selectedCardValue => {
                for(let i = 0; i < ref.length; i++){
                    if (ref[i].id === selectedCardValue){
                        sum += ref[i].points;
                    }
                }
            });
            let theCard;
            console.log(selectedHandCard.id);
            for(let i = 0; i < ref.length; i++){
                if (ref[i].id === selectedHandCard.id){
                    theCard = ref[i];
                }
            }
            if (sum == theCard.points ){
                playerScore.push(theCard.value);
                playerScore = playerScore.concat(valuesArray);
                const allSelectedDivs = document.querySelectorAll('.selected');
                allSelectedDivs.forEach(div => div.remove());
                yourPile = yourPile.filter(card => card.id !== theCard.id);
                onTable = onTable.filter(tableCard => !valuesArray.includes(tableCard.id));
            }
            else {
                alert("wrong, try again");
                const selectedCards = document.querySelectorAll('.selected');
                selectedCards.forEach(card => card.classList.remove('selected'));
                return;
            }
        }
        botTurn();

        if (myPile.length === 0 && yourPile.length === 0){
            alert("round over, dealing cards...");
            if (pile.length === 0){
                alert("game over");
            } else {
                dealCards();
                renderBotHand();
                renderHand();
                // renderTable();
            }
        }
    });
});
