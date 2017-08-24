console.log("It works!");

var imgArray = [];

imgArray[0] = new Image();
imgArray[0] = 'Rock.png';

imgArray[1] = new Image();
imgArray[1] = 'Paper.png';

imgArray[2] = new Image();
imgArray[2] = 'Scissors.png';

function getRandomImage(imgArray) {
    var num = Math.floor( Math.random() * imgArray.length );
    var img = imgArray[ num ];
    var imgStr = '../images/' + img;
    document.getElementById('compChoice').src = imgStr;
  }

var Wins = 0;
var Losses = 0;
var Draw = 0;

function userWinCount() {
    Wins += 1;
    document.getElementById('wins').innerHTML = "Wins: " + Wins;
}

function compWinCount() {
    Losses += 1;
    document.getElementById('losses').innerHTML = "Losses: " + Losses;
}

function drawCount() {
    Draw += 1;
    document.getElementById('ties').innerHTML = "Draws: " + Draw;
}

function winPercent() {
  var percent = Wins / (Wins + Losses + Draw);
  document.getElementById('winPercent').innerHTML = "Win Percent: " + percent.toFixed(2);
}

function lossPercent() {
  var percent = Losses / (Wins + Losses + Draw);
  document.getElementById('lossPercent').innerHTML = "Loss Percent: " + percent.toFixed(2);
}

function tiesPercent() {
  var percent = Draw / (Wins + Losses + Draw);
  document.getElementById('tiesPercent').innerHTML = "Draw Percent: " + percent.toFixed(2);
}

function clearCount() {
    Wins = 0;
    Losses = 0;
    Draw = 0;
    document.getElementById('wins').innerHTML = "Wins: " + Wins;
    document.getElementById('losses').innerHTML = "Losses: " + Losses;
    document.getElementById('ties').innerHTML = "Draws: " + Draw;
    document.getElementById('winPercent').innerHTML = "Win Percent: 0";
    document.getElementById('lossPercent').innerHTML = "Loss Percent: 0";
    document.getElementById('tiesPercent').innerHTML = "Draw Percent: 0";
}

function userWin() {
    document.getElementById('winner').src = '../images/userWin.png';
  }

function compWin() {
    document.getElementById('winner').src = '../images/compWin.png';
  }

function draw() {
    document.getElementById('winner').src = '../images/draw.png';
  }

function compare(choice1, choice2) {
    if (choice1 === choice2) {
        draw();
        drawCount();
        winPercent();
        lossPercent();
        tiesPercent();
    } else if (choice1 === window.location.href + 'images/Rock.png') {
        if (choice2 === window.location.href + 'images/Scissors.png') {
            userWin();
            userWinCount();
            winPercent();
            lossPercent();
            tiesPercent();
        } else {
            compWin();
            compWinCount();
            winPercent();
            lossPercent();
            tiesPercent();
        }
    } else if (choice1 === window.location.href + 'images/Paper.png') {
        if (choice2 === window.location.href + 'images/Rock/png') {
            userWin();
            userWinCount();
            winPercent();
            lossPercent();
            tiesPercent();
        } else {
            compWin();
            compWinCount();
            winPercent();
            lossPercent();
            tiesPercent();
        }
    } else if (choice1 === window.location.href + 'images/Scissors.png') {
        if (choice2 === window.location.href + 'images/Paper.png') {
            userWin();
            userWinCount();
            winPercent();
            lossPercent();
            tiesPercent();
        } else {
            compWin();
            compWinCount();
            winPercent();
            lossPercent();
            tiesPercent();
        }
    }
}
//
// compare(userChoice, computerChoice)
