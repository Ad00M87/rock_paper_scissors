console.log("It works!");

var imgArray = [];

imgArray[0] = new Image();
imgArray[0] = 'Rock.png';

imgArray[1] = new Image();
imgArray[1] = 'Paper.png';

imgArray[2] = new Image();
imgArray[2] = 'Scissors.png';

function getRandomImage(imgArray, path) {
    path = path || '../images/'; // default path here
    var num = Math.floor( Math.random() * imgArray.length );
    var img = imgArray[ num ];
    var imgStr = '<img src="' + path + img + '" alt = "">';
    document.write(imgStr); document.close();
}

document.getElementByClass("runProgram")
.addEventListener('click', function() {

}) 
