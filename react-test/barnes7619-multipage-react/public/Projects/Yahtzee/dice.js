class Dice {
  constructor(face,x,y) {
    this.face = face;
    this.width = 50;
    this.dot = 8;
    this.y = y;
    this.x = x;
    this.held = false;
    this.fillColor = "white";
    this.holdColor = 220;


    //  Click Area
    this.wMin = this.x;
    this.hMin = this.y;
    this.wMax = this.x + this.width;
    this.hMax = this.y + this.width;
  }

  roll() {
    this.face = Math.floor((Math.random() * 6) + 1);
  }


  draw(){
    fill(this.holdColor);
    noStroke();
    rect(this.x,this.y+52,this.width,10);
    stroke("black");
    fill(this.fillColor);
    square(this.x,this.y,this.width);
    switch (this.face) {
      case 1: fill("black"); circle(this.x+this.width/2,this.y+this.width/2,this.dot); break;
      case 2: fill("black"); circle(this.x+this.width/4,this.y+this.width/4,this.dot); circle(this.x+3*(this.width/4),this.y+3*(this.width/4),this.dot); break;
      case 3: fill("black"); circle(this.x+this.width/2,this.y+this.width/2,this.dot); circle(this.x+this.width/4,this.y+this.width/4,this.dot); circle(this.x+3*(this.width/4),this.y+3*(this.width/4),this.dot); break;
      case 4: fill("black"); circle(this.x+this.width/4,this.y+this.width/4,this.dot); circle(this.x+3*(this.width/4),this.y+3*(this.width/4),this.dot); circle(this.x+this.width/4,this.y+3*(this.width/4),this.dot); circle(this.x+3*(this.width/4),this.y+(this.width/4),this.dot); break;
      case 5: fill("black"); circle(this.x+this.width/4,this.y+this.width/4,this.dot); circle(this.x+3*(this.width/4),this.y+3*(this.width/4),this.dot); circle(this.x+this.width/4,this.y+3*(this.width/4),this.dot); circle(this.x+3*(this.width/4),this.y+(this.width/4),this.dot); circle(this.x+this.width/2,this.y+this.width/2,this.dot); break;
      case 6: fill("black"); circle(this.x+this.width/4,this.y+this.width/4,this.dot); circle(this.x+3*(this.width/4),this.y+3*(this.width/4),this.dot); circle(this.x+this.width/4,this.y+3*(this.width/4),this.dot); circle(this.x+3*(this.width/4),this.y+(this.width/4),this.dot); circle(this.x+this.width/4,this.y+this.width/2,this.dot); circle(this.x+3*(this.width/4),this.y+this.width/2,this.dot); break;
      default: break;
    }

  }

  hold(){
    if (this.held) {this.held = false; this.holdColor = 220 /*this.fillColor = "white"/*console.log("Dice Unheld");*/}
    else {this.held = true; this.holdColor = "red" /*this.fillColor = "red"/*console.log("Dice Held");*/}
  }

  isHeld(){
    return this.held;
  }

  mouseReleased(){
    if (winMouseX > this.wMin && winMouseX < this.wMax && winMouseY > this.hMin && winMouseY < this.hMax){
      this.hold();
    }
  }

  read(){
    return this.face;
  }

}
