class Button {
	constructor(x, y, width, height, text, clicked) {
		this.text = text;
		this.color = 'green';
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
		this.textColor = 'black';
		this.font = 'Recursive';
		this.clicked = clicked;
		this.clickable = true;

		//  Click Area
		this.wMin = this.x;
		this.hMin = this.y;
		this.wMax = this.x + this.width;
		this.hMax = this.y + this.height;
	}

	//Roll the Dice if button is Clicked
	mouseReleased() {
		if (
			winMouseX > this.wMin &&
			winMouseX < this.wMax &&
			winMouseY > this.hMin &&
			winMouseY < this.hMax &&
			this.clickable
		) {
			this.clicked();
		}
	}

	//Draw the button
	draw() {
		fill(this.color);
		rect(this.x, this.y, this.width, this.height);
		textSize(this.height / 3);
		textAlign(CENTER, CENTER);
		textFont(this.font);
		fill(this.textColor);
		text(this.text, this.x + this.width / 2, this.y + this.height / 2);
	}

	//Set Background Color of Button
	setColor(color) {
		this.color = color;
		//console.log(color);
	}

	//Set Color of Button Text
	setTextColor(color) {
		this.textColor = color;
	}

	//Set Text Font
	setTextFont(font) {
		this.font = font;
	}

	//Change Button Clickability
	canClick(tf) {
		this.clickable = tf;
		if (tf) this.color = 'green';
		else this.color = 190;
	}
}
