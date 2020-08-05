function board(diceSet) {

  //Score sheet
  scoreSheet = new Sheet(10,10,canvasx-20,250);


  //  Roll Button
  var rollButtonWidth = 100;
  var rollButtonHeight = 50;
  var rollButtonX = 20;
  var rollButtonY = canvasy - 30 - rollButtonHeight;
  rollButton = new Button(rollButtonX,rollButtonY,rollButtonWidth,rollButtonHeight,"Roll Dice",rollAllDice)


  //  Dice Placement
  let diceOffsetx = (canvasx-290)/2;
  let diceOffsety = canvasy - 80;

  dice = [new Dice(diceSet[0],diceOffsetx,diceOffsety),
      new Dice(diceSet[1], diceOffsetx+60,diceOffsety),
      new Dice(diceSet[2],diceOffsetx+120,diceOffsety),
      new Dice(diceSet[3],diceOffsetx+180,diceOffsety),
      new Dice(diceSet[4],diceOffsetx+240,diceOffsety)]
}
