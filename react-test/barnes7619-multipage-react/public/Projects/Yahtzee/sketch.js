//Canvas Size
let canvasx = 800;
let canvasy = 400;


var scores = [3,6,9,12,15,18,0,0,0,0,0,0,0,0,0,0,0,0];
var diceSet = [1,1,1,1,1];

var rollCount = 0;


function setup() {
  //nunito = loadFont('.https://fonts.googleapis.com/css2?family=Nunito&display=swap');
  createCanvas(canvasx,canvasy)
  diceSet = pregameRoll(); // roll dice
  board(diceSet);
}

function draw(){
  background(220);
  //  Draw all Dice
  dice.forEach((die, i) => {
    die.draw();
  });
  rollButton.draw();
  scoreSheet.draw();
}


function mouseReleased(){
  rollButton.mouseReleased();
  dice.forEach((die, i) => {
    die.mouseReleased();
  });
  scoreSheet.mouseReleased();
}
