let pile = [
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
};
function winCondition(n1, n2){
    if (n1 >= 11){
        if (n2 < 11){
            return 1;
        }
        else if (n1-n2 < 2 && n2-n1 < 2){
            return 0;
        }
        else{
            return 1;
        }
    }
    else if (n2 >= 11){
        return n2;
    }
    else{
        return 0;
    }
};
function calculateScore(array){
    if (array.length === 0){
        return 0;
    }
    console.log(array);
    let roundScore = 0;
    let sbou3 = 0;
    let lcarta = array.length;
    let stout = 0;
    let dineri = 0;
    for(let i = 0; i < array.length; i++){
        for (let j = 0; j < 40; j++){
            if (array[i] === ref[j].id){
                array[i] = ref[j];
            }
        }
    }
    array.forEach(card => {
        if (card.includes('♦️')){
            dineri += 1;
        }
        if (card === "7♦️"){
            roundScore += 1;
        }
        if (card.includes('6')){
            stout +=1;
        }
        if (card.includes('7')){
            sbou3 +=1;
        }
    });
    if (dineri > 5){
        roundScore += 1;
    }
    if (sbou3 > 2){
        roundScore += 1;
    }
    else if (sbou3 === 2){
        if (stout > 2){
            roundScore += 1;
        }
    }
    if(lcarta > 20){
        roundScore++;
    }
    console.log(roundScore);
    return roundScore;
};

let myFinalScore = 0;
let yourFinalScore = 0;

let yourPile = [];
let myPile = [];
let onTable = [];
let playerScore = [];
let botScore = [];
let myCkeyeb = 0;
let yourChkeyeb = 0;

const heading = document.getElementById("score");
heading.textContent = `You: ${yourFinalScore} - Bot: ${myFinalScore}`;
shuffle(pile);

function calculateCurrentCombinations(onTable1){
    const numCards = onTable1.length;
    if(numCards === 0){
        return [];
    }
    const totalCombinations = 1 << numCards;

    let sums = [];

    for (let i = 1; i < totalCombinations; i++) { 
        let sum = 0;
        let cardIds = [];  

        for (let j = 0; j < numCards; j++) {
            if (i & (1 << j)) { 
                sum += onTable1[j].value; 
                cardIds.push(onTable1[j].id); 
            }
        }
        sums.push({ sum, cardIds: [...cardIds] });
    }
    return sums;
}
function calculateTheoretical(array){
    let score = 0;
    array.forEach(card => {
        if (card.includes('♦️')){
            score += 4;
        }
        if (card === "7♦️"){
            score += 20;
        }
        if (card.includes('6')){
            score +=8;
        }
        if (card.includes('7')){
            score +=12;
        }
        score++;
    });
    return score;
}

while (onTable.length < 4 && pile.length) {
    onTable.push(pile.pop());
}

function botTurn() {
    if (myPile.length > 0) {
        const botCardIndex = Math.floor(Math.random() * myPile.length);
        const botCard = myPile[botCardIndex];
        const botCardId = myPile[botCardIndex].id

        const botHand = document.getElementById('opponent');
        myPile.splice(botCardIndex, 1);

        const botChosenCard = botHand.querySelector(`[id="${botCardId}"]`);

        botHand.removeChild(botChosenCard);

        const tableCardDiv = document.createElement('div');
        tableCardDiv.classList.add('card');
        tableCardDiv.textContent = botCard.value;
        tableCardDiv.id = botCardId;  
        table.appendChild(tableCardDiv);
        onTable.push(botCard);
    }
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
        cardDiv.textContent = "";  
        cardDiv.id == card.id;
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
        if(!selectedHandCard){
            alert("select A card!");
            return;
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
            for(let i = 0; i < ref.length; i++){
                if (ref[i].id === selectedHandCard.id){
                    theCard = ref[i];
                }
            }
            let test = 0;
            if (sum == theCard.points ){
                if(theCard.points >= 8){
                    let x = theCard.points;
                    onTable.forEach(card => {
                        if (card.points === x && valuesArray.length != 1){
                            alert(`fama ${card.value} lezem thezha`);
                            test = 1;
                        }
                    });
                };
                if (test === 1){
                    test = 0;
                    return;
                }
                playerScore.push(theCard.value);
                let cardValuesArray = [];
                valuesArray.forEach(card => {
                    for(let i = 0; i < 40; i++){
                        if (ref[i].id === card){
                            cardValuesArray.push(ref[i].value);
                        }
                    }
                });
                playerScore = playerScore.concat(cardValuesArray);
                const allSelectedDivs = document.querySelectorAll('.selected');
                allSelectedDivs.forEach(div => div.remove());
                yourPile = yourPile.filter(card => card.id !== theCard.id);
                onTable = onTable.filter(tableCard => !valuesArray.includes(tableCard.id));
                if(onTable.length === 0){
                    alert("CHKOBAA");
                    yourChkeyeb += 1;
                }

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
            if (pile.length === 0){
                alert("round over");
                let yourRoundScore = calculateScore(playerScore) + yourChkeyeb;
                let myRoundScore = calculateScore(botScore) + myCkeyeb;
                myFinalScore += myRoundScore;
                yourFinalScore += yourRoundScore;
                alert(`round Score: \n You: ${yourRoundScore} - Me ${myRoundScore}`);
                heading.textContent = `You: ${yourFinalScore} - Bot: ${myFinalScore}`;
                let winning = winCondition(yourFinalScore, myFinalScore);
                if(winning > 0){
                    if (winning === 1){
                        alert("congrats, you win.");
                    }
                    else{
                        alert("the bot wins! good luck next time");
                    }
                    location.reload();
                    return;
                }
                const allSelectedDivs = document.querySelectorAll('.card');
                allSelectedDivs.forEach(div => div.remove());
                pile = [
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
                yourPile = [];
                myPile = [];
                onTable = [];
                playerScore = [];
                botScore = [];
                myCkeyeb = 0;
                yourChkeyeb = 0;

                shuffle(pile);

                while (onTable.length < 4 && pile.length) {
                    onTable.push(pile.pop());
                };
                dealCards();
                renderBotHand();
                renderHand();
                renderTable();

            } else {
                shuffle(pile);
                dealCards();
                renderBotHand();
                renderHand();
            }
        }
    });
});
