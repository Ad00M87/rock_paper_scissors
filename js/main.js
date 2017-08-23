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

var winArray = [];

winArray[0] = new Image();
winArray[0] = 'draw.png';

winArray[1] = new Image();
winArray[1] = 'userWin.png';

winArray[2] = new Image();
winArray[2] = 'compWin.png';

function userWin() {
    document.getElementById('winner').src = '../images/userWin.png';
  }

function compWin() {
    document.getElementById('winner').src = '../images/compWin.png';
  }

function draw() {
    document.getElementById('winner').src = '../images/draw.png';
  }

// function compareRock(elementSrc) {
//   if (document.getElementById('yourChoice').src )
// }
//second option.
// var userChoice = prompt("Do you choose rock, paper or scissors?");
// var computerChoice = Math.random();
// if (computerChoice < 0.34) {
// 	computerChoice = "rock";
// } else if(computerChoice <= 0.67) {
// 	computerChoice = "paper";
// } else {
// 	computerChoice = "scissors";
// } console.log("Computer: " + computerChoice);
//
// compare(document.getElementById('yourChoice').src, document.getElementById('compChoice').src);

function compare(choice1, choice2) {
    if (choice1 === choice2) {
        draw();
    } else if (choice1 === 'http://127.0.0.1:3000/images/Rock.png') {
        if (choice2 === 'http://127.0.0.1:3000/images/Scissors.png') {
            userWin();
        } else {
            compWin();
        }
    } else if (choice1 === 'http://127.0.0.1:3000/images/Paper.png') {
        if (choice2 === 'http://127.0.0.1:3000/images/Rock/png') {
            userWin();
        } else {
            compWin();
        }
    } else if (choice1 === 'http://127.0.0.1:3000/images/Scissors.png') {
        if (choice2 === 'http://127.0.0.1:3000/images/Paper.png') {
            userWin();
        } else {
            compWin();
        }
    }
}
//
// compare(userChoice, computerChoice)
