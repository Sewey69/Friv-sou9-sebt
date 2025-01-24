const buttonColors = ["red", "blue", "green", "blue"];

let gamePattern = [];
let userClickedPattern = [];

let started = false;
let level = 0;

const red = new Audio('./assets/red.mp3');
const blue = new Audio('./assets/blue.mp3');
const yellow = new Audio('./assets/yellow.mp3');
const green = new Audio('./assets/green.mp3');
const wrong = new Audio('./assets/wrong.mp3');

function playSound(nameS){
    switch (nameS) {
        case "red":
            red.play();
            break;
        case "blue":
            blue.play();
            break;
        case "green":
            green.play();
            break;
        case "yellow":
            yellow.play();
            break;
        case "wrong":
            wrong.play();
            break;
    }
};
function animatePress(currentColor){
    $(`#${currentColor}`).addClass("pressed");
    setTimeout(function(){
        $(`#${currentColor}`).removeClass("pressed");
    }, 100);
};
function nextSequence(){
    userClickedPattern = [];
    level++;
    $("h1").html(`level ${level}`);
    let randomNumber = Math.floor(Math.random()*4);
    let randomChosenColour = buttonColors[randomNumber];
    gamePattern.push(randomChosenColour);
    $(`#${randomChosenColour}`).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);
};
function checkAnswer(currentLevel){
    if (gamePattern[currentLevel] == userClickedPattern[currentLevel]){
        console.log("correct");
    }
    else{
        console.log("false");
    }
}

$("html").keypress(function(){
    if (!started){
        nextSequence();
        $("h1").html(`level ${level}`);
    }
});
$(".btn").click(function() {
    var userChosenColor = $(this).attr("id");
    userClickedPattern.push(userChosenColor);
    animatePress(userChosenColor);
    playSound(userChosenColor);
});

