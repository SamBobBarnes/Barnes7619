class Sheet{
  constructor(x,y,width,height){

    //scores
    this.aces = 0;
    this.twos = 0;
    this.threes = 0;
    this.fours = 0;
    this.fives = 0;
    this.sixes = 0;
    this.toak = 0;
    this.foak = 0;
    this.fh = 0;
    this.smS = 0;
    this.lgS = 0;
    this.yahtzee = 0;
    this.chance = 0;
    this.total = 0;
    this.upperBonus = false;
    this.yahtzeeBonus = false;

    //locked scores
    this.acesL = false;
    this.twosL = false;
    this.threesL = false;
    this.foursL = false;
    this.fivesL = false;
    this.sixesL = false;
    this.toakL = false;
    this.foakL = false;
    this.fhL = false;
    this.smSL = false;
    this.lgSL = false;
    this.yahtzeeL = false;
    this.chanceL = false;

    //dimensions
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;

    this.cellH = height/3;
    this.cellW7 = width/7;
    this.cellW6 = width/6;

    //Cell Colors
    this.highlight = "#03e8fc";
    this.base = "white";


//Cell Limits
    //Top
    this.cellXMinT = [this.x+this.cellW6*0, this.x+this.cellW6*1, this.x+this.cellW6*2, this.x+this.cellW6*3, this.x+this.cellW6*4, this.x+this.cellW6*5];
    this.cellXMaxT = [this.x-1+this.cellW6*1, this.x-1+this.cellW6*2, this.x-1+this.cellW6*3, this.x-1+this.cellW6*4, this.x-1+this.cellW6*5, this.x-1+this.cellW6*6];
    this.cellYMinT = this.y;
    this.cellYMaxT = this.y+this.cellH-1;

    //Bottom
    this.cellXMinB = [this.x+this.cellW7*0, this.x+this.cellW7*1, this.x+this.cellW7*2, this.x+this.cellW7*3, this.x+this.cellW7*4, this.x+this.cellW7*5, this.x+this.cellW7*6];
    this.cellXMaxB = [this.x-1+this.cellW7*1, this.x-1+this.cellW7*2, this.x-1+this.cellW7*3, this.x-1+this.cellW7*4, this.x-1+this.cellW7*5, this.x-1+this.cellW7*6, this.x-1+this.cellW7*7];
    this.cellYMinB = this.y+this.cellH;
    this.cellYMaxB = this.y+this.cellH*2-1;

    //Array
    this.cells = [
      [this.cellXMinT[0], this.cellXMaxT[0], this.cellYMinT, this.cellYMaxT],
      [this.cellXMinT[1], this.cellXMaxT[1], this.cellYMinT, this.cellYMaxT],
      [this.cellXMinT[2], this.cellXMaxT[2], this.cellYMinT, this.cellYMaxT],
      [this.cellXMinT[3], this.cellXMaxT[3], this.cellYMinT, this.cellYMaxT],
      [this.cellXMinT[4], this.cellXMaxT[4], this.cellYMinT, this.cellYMaxT],
      [this.cellXMinT[5], this.cellXMaxT[5], this.cellYMinT, this.cellYMaxT],
      [this.cellXMinB[0], this.cellXMaxB[0], this.cellYMinB, this.cellYMaxB],
      [this.cellXMinB[1], this.cellXMaxB[1], this.cellYMinB, this.cellYMaxB],
      [this.cellXMinB[2], this.cellXMaxB[2], this.cellYMinB, this.cellYMaxB],
      [this.cellXMinB[3], this.cellXMaxB[3], this.cellYMinB, this.cellYMaxB],
      [this.cellXMinB[4], this.cellXMaxB[4], this.cellYMinB, this.cellYMaxB],
      [this.cellXMinB[5], this.cellXMaxB[5], this.cellYMinB, this.cellYMaxB],
      [this.cellXMinB[6], this.cellXMaxB[6], this.cellYMinB, this.cellYMaxB]
    ]

    //text
    this.font = "Recursive";
    this.textColor = "black";

  }

  draw(){

    //main rect
    fill(this.base);
    rect (this.x,this.y,this.width,this.height);

    //secondary rects top row
    if(this.acesL) {fill(this.highlight)} else {fill(this.base)}  //Highlight if used x13
    rect(this.x+this.cellW6*0,this.y, this.cellW6, this.cellH);
    if(this.twosL) {fill(this.highlight)} else {fill(this.base)}
    rect(this.x+this.cellW6*1,this.y, this.cellW6, this.cellH);
    if(this.threesL) {fill(this.highlight)} else {fill(this.base)}
    rect(this.x+this.cellW6*2,this.y, this.cellW6, this.cellH);
    if(this.foursL) {fill(this.highlight)} else {fill(this.base)}
    rect(this.x+this.cellW6*3,this.y, this.cellW6, this.cellH);
    if(this.fivesL) {fill(this.highlight)} else {fill(this.base)}
    rect(this.x+this.cellW6*4,this.y, this.cellW6, this.cellH);
    if(this.sixesL) {fill(this.highlight)} else {fill(this.base)}
    rect(this.x+this.cellW6*5,this.y, this.cellW6, this.cellH);

    //secondary rects bottom row
    if(this.toakL) {fill(this.highlight)} else {fill(this.base)}
    rect(this.x+this.cellW7*0,this.y+this.cellH, this.cellW7, this.cellH);
    if(this.foakL) {fill(this.highlight)} else {fill(this.base)}
    rect(this.x+this.cellW7*1,this.y+this.cellH, this.cellW7, this.cellH);
    if(this.fhL) {fill(this.highlight)} else {fill(this.base)}
    rect(this.x+this.cellW7*2,this.y+this.cellH, this.cellW7, this.cellH);
    if(this.smSL) {fill(this.highlight)} else {fill(this.base)}
    rect(this.x+this.cellW7*3,this.y+this.cellH, this.cellW7, this.cellH);
    if(this.lgSL) {fill(this.highlight)} else {fill(this.base)}
    rect(this.x+this.cellW7*4,this.y+this.cellH, this.cellW7, this.cellH);
    if(this.yahtzeeL) {fill(this.highlight)} else {fill(this.base)}
    rect(this.x+this.cellW7*5,this.y+this.cellH, this.cellW7, this.cellH);
    if(this.chanceL) {fill(this.highlight)} else {fill(this.base)}
    rect(this.x+this.cellW7*6,this.y+this.cellH, this.cellW7, this.cellH);
    fill(this.base);

    //text
    textSize(this.cellH/5);
    textAlign(CENTER, CENTER);
    textFont(this.font);
    fill(this.textColor);

    //top row text
    text("Aces: " + this.aces, this.x+this.cellW6*0, this.y, this.cellW6, this.cellH);
    text("Twos: " + this.twos, this.x+this.cellW6*1, this.y, this.cellW6, this.cellH);
    text("Threes: " + this.threes, this.x+this.cellW6*2, this.y, this.cellW6, this.cellH);
    text("Fours: " + this.fours, this.x+this.cellW6*3, this.y, this.cellW6, this.cellH);
    text("Fives: " + this.fives, this.x+this.cellW6*4, this.y, this.cellW6, this.cellH);
    text("Sixes: " + this.sixes, this.x+this.cellW6*5, this.y, this.cellW6, this.cellH);

    //bottom row text
    text("3 of a kind: " + this.toak, this.x+this.cellW7*0, this.y+this.cellH, this.cellW7, this.cellH);
    text("4 of a kind: " + this.foak, this.x+this.cellW7*1, this.y+this.cellH, this.cellW7, this.cellH);
    text("Full House: " + this.fh, this.x+this.cellW7*2, this.y+this.cellH, this.cellW7, this.cellH);
    text("Small Straight: " + this.smS, this.x+this.cellW7*3, this.y+this.cellH, this.cellW7, this.cellH);
    text("Large Straight: " + this.lgS, this.x+this.cellW7*4, this.y+this.cellH, this.cellW7, this.cellH);
    text("Yahtzee: " + this.yahtzee, this.x+this.cellW7*5, this.y+this.cellH, this.cellW7, this.cellH);
    text("Chance: " + this.chance, this.x+this.cellW7*6, this.y+this.cellH, this.cellW7, this.cellH);

    //Total Row text
    textSize(this.cellH/2);
    if (this.yahtzee > 0) this.yahtzeeBonus = true;
    if ((this.aces+this.twos+this.threes+this.fours+this.fives+this.sixes) >= 63) this.upperBonus = true;

    if (this.yahtzeeBonus && this.upperBonus) {this.total = 235;}
    else if (this.yahtzeeBonus && !this.upperBonus) {this.total = 100;}
    else if (!this.yahtzeeBonus && this.upperBonus) {this.total = 135;}
    else {this.total = 0;}
    this.total = this.total + this.aces + this.twos + this.threes + this.fours + this.fives + this.sixes + this.toak + this.foak + this.fh + this.smS + this.lgS + this.yahtzee + this.chance;

    if(this.acesL && this.twosL && this.threesL && this.foursL && this.fivesL && this.sixesL && this.toakL && this.foakL && this.fhL && this.smSL && this.lgSL && this.yahtzeeL && this.chanceL) {
      text("Game End Total: "+this.total, this.x, this.y+this.cellH*2, this.width, this.cellH);
      textSize(this.cellH/4);
      text("Please reload to start again.", this.x, this.y+this.cellH*3.25, this.width, this.cellH/3);
    }
    else {
      text("Total: "+this.total, this.x, this.y+this.cellH*2, this.width, this.cellH);

    }


  }

  mouseReleased(){

    //Detect if Cells are clicked on and call pertinent function
    if(winMouseX > this.cells[0][0] && winMouseX < this.cells[0][1] && winMouseY > this.cells[0][2] && winMouseY < this.cells[0][3]){lockin("aces")}
    if(winMouseX > this.cells[1][0] && winMouseX < this.cells[1][1] && winMouseY > this.cells[1][2] && winMouseY < this.cells[1][3]){lockin("twos")}
    if(winMouseX > this.cells[2][0] && winMouseX < this.cells[2][1] && winMouseY > this.cells[2][2] && winMouseY < this.cells[2][3]){lockin("threes")}
    if(winMouseX > this.cells[3][0] && winMouseX < this.cells[3][1] && winMouseY > this.cells[3][2] && winMouseY < this.cells[3][3]){lockin("fours")}
    if(winMouseX > this.cells[4][0] && winMouseX < this.cells[4][1] && winMouseY > this.cells[4][2] && winMouseY < this.cells[4][3]){lockin("fives")}
    if(winMouseX > this.cells[5][0] && winMouseX < this.cells[5][1] && winMouseY > this.cells[5][2] && winMouseY < this.cells[5][3]){lockin("sixes")}
    if(winMouseX > this.cells[6][0] && winMouseX < this.cells[6][1] && winMouseY > this.cells[6][2] && winMouseY < this.cells[6][3]){lockin("toak")}
    if(winMouseX > this.cells[7][0] && winMouseX < this.cells[7][1] && winMouseY > this.cells[7][2] && winMouseY < this.cells[7][3]){lockin("foak")}
    if(winMouseX > this.cells[8][0] && winMouseX < this.cells[8][1] && winMouseY > this.cells[8][2] && winMouseY < this.cells[8][3]){lockin("fh")}
    if(winMouseX > this.cells[9][0] && winMouseX < this.cells[9][1] && winMouseY > this.cells[9][2] && winMouseY < this.cells[9][3]){lockin("smS")}
    if(winMouseX > this.cells[10][0] && winMouseX < this.cells[10][1] && winMouseY > this.cells[10][2] && winMouseY < this.cells[10][3]){lockin("lgS")}
    if(winMouseX > this.cells[11][0] && winMouseX < this.cells[11][1] && winMouseY > this.cells[11][2] && winMouseY < this.cells[11][3]){lockin("yahtzee")}
    if(winMouseX > this.cells[12][0] && winMouseX < this.cells[12][1] && winMouseY > this.cells[12][2] && winMouseY < this.cells[12][3]){lockin("chance")}
  }

  changeNum(space,num){
    // if spaces are used, they cannot be used again. if they are not used they become used, score is set, dice are unheld and all dice are rolled.
    switch(space) {
      case "aces": if(!this.acesL) {this.acesL = true; this.aces = num; freeAllDice(); rollAllDice();} break;
      case "twos": if(!this.twosL) {this.twosL = true; this.twos = num; freeAllDice(); rollAllDice();} break;
      case "threes": if(!this.threesL) {this.threesL = true; this.threes = num; freeAllDice(); rollAllDice();} break;
      case "fours": if(!this.foursL) {this.foursL = true; this.fours = num; freeAllDice(); rollAllDice();} break;
      case "fives": if(!this.fivesL) {this.fivesL = true; this.fives = num; freeAllDice(); rollAllDice();} break;
      case "sixes": if(!this.sixesL) {this.sixesL = true; this.sixes = num; freeAllDice(); rollAllDice();} break;
      case "toak": if(!this.toakL) {this.toakL = true; this.toak = num; freeAllDice(); rollAllDice();} break;
      case "foak": if(!this.foakL) {this.foakL = true; this.foak = num; freeAllDice(); rollAllDice();} break;
      case "fh": if(!this.fhL) {this.fhL = true; this.fh = num; freeAllDice(); rollAllDice();} break;
      case "smS": if(!this.smSL) {this.smSL = true; this.smS = num; freeAllDice(); rollAllDice();} break;
      case "lgS": if(!this.lgSL) {this.lgSL = true; this.lgS = num; freeAllDice(); rollAllDice();} break;
      case "yahtzee": if(!this.yahtzeeL) {this.yahtzeeL = true; this.yahtzee = num; freeAllDice(); rollAllDice();} break;
      case "chance": if(!this.chanceL) {this.chanceL = true; this.chance = num; freeAllDice(); rollAllDice();} break;
      default: break;
    }
  }

}
