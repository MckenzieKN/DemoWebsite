'use strict'
var q;
var dd;
var imgRedB;
var imgWhiteB;
var imgGreyB;
var imgYellowB;
var imgBlackB;
var bp;
var question;
var rb;
var rbPick
var correctAnswers;
var unch;
var ch;
var answer2 = 0;
var answer3 = 0;
var answer4 = 0;
var answer5 = 0;
var answer6 = 0;
var redem = 0;

function preload(){
	imgRedB = loadImage('data/redBucket.jpg');
	imgWhiteB = loadImage('data/whiteBucket.jpg');
	imgGreyB = loadImage('data/greyBin.jpg');
	imgYellowB = loadImage('data/yellowBucket.jpg');
	imgBlackB = loadImage('data/blackBucket.jpg');
	bp = loadImage('data/bananaPeal.png');
	rb = loadImage('data/radioButton.png');
	rbPick = loadImage('data/rbPick.png');
	unch = loadImage('data/unchecked.png');
	ch = loadImage('data/checked.png');
}

function setup(){
	createCanvas(1000,1000);
	background('#FFFFFF');
	strokeWeight(5);
	textSize(24);
	rect(50,500, 600,300);
	rect(50, 220, 150,200);
	rect(250, 220, 150,200);
	rect(450, 220, 150,200);
	rect(620, 220, 150,200);
	rect(780, 220, 150,200);
	dd = new dragdrop();
	question = 1;
	correctAnswers = 0;
}

function draw(){
	rect(780, 650, 100, 30);
	text("Submit", 793, 675);
	rect(890, 650, 100, 30);
	text("Next", 915, 675);
}

function mousePressed(){
	if(mouseX < 990 && mouseX > 890 && mouseY > 650 && mouseY < 680){
		if(question == 1){
			reset();
			question++;
			questionTwo();	
		} else if(question == 2) {
			reset();
			question++;
			questionThree();	
		} else if(question == 3) {
			reset();
			question++;
			questionFour();
		} else if(question == 4) {
			reset();
			question++;
			questionFive();	
		} else if(question == 5) {
			reset();
			question++;
			questionSix();	
		} else if(question == 6){
			reset();
			question++;
			redemption();
		} else {
			reset();
			text("You scored a 93% on the quiz. Return to the home page", 50, 50);
		}
	}
	
	//Question 2 answering
	if(mouseX > 50 && mouseX < 80 && mouseY > 100 && mouseY < 130 && question == 2){
		image(rbPick, 50, 100, 30, 30);
	} else if(mouseX > 50 && mouseX < 80 && mouseY > 150 && mouseY < 180 && question == 2){
		image(rbPick, 50, 150, 30, 30);
		answer2 = 1;
	}
	
	//Question 2 checking/hitting the submit button
	if(mouseX > 780 && mouseX < 880 && mouseY > 650 && mouseY < 680 && question == 2){
		if(answer2 == 1){
			text("correct", 650, 665);
			correctAnswers++;
		} else {
			text("incorrect", 650, 665);
		}
	}
	
	//Question 3
	if(mouseX > 50 && mouseX < 80 && mouseY > 100 && mouseY < 130 && question == 3){
		image(rbPick, 50, 100, 30, 30);
		answer3 = 1;
	} else if(mouseX > 50 && mouseX < 80 && mouseY > 150 && mouseY < 180 && question == 3){
		image(rbPick, 50, 150, 30, 30);
		answer3 = 0;
	} else if(mouseX > 50 && mouseX < 80 && mouseY > 200 && mouseY < 230 && question == 3){
		image(rbPick, 50, 200, 30, 30);
		answer3 = 0;
	} else if(mouseX > 50 && mouseX < 80 && mouseY > 250 && mouseY < 280 && question == 3){
		image(rbPick, 50, 250, 30, 30);
		answer3 = 0;
	}
	
	//Question 3 checking/hitting the submit button
	if(mouseX > 780 && mouseX < 880 && mouseY > 650 && mouseY < 680 && question == 3){
		if(answer3 == 1){
			text("correct", 650, 665);
			correctAnswers++;
		} else {
			text("incorrect", 650, 665);
		}
	}
	
	//Question 4
	if(mouseX > 50 && mouseX < 80 && mouseY > 100 && mouseY < 130 && question == 4){
		image(ch, 50, 100, 30, 30);
		answer4 = new Integer[1];
	} else if(mouseX > 50 && mouseX < 80 && mouseY > 150 && mouseY < 180 && question == 4){
		image(ch, 50, 150, 30, 30);
	} else if(mouseX > 50 && mouseX < 80 && mouseY > 200 && mouseY < 230 && question == 4){
		image(ch, 50, 200, 30, 30);
	} else if(mouseX > 50 && mouseX < 80 && mouseY > 250 && mouseY < 280 && question == 4){
		image(ch, 50, 250, 30, 30);
	} else if(mouseX > 50 && mouseX < 80 && mouseY > 300 && mouseY < 330 && question == 4){
		image(ch, 50, 300, 30, 30);
	} else if(mouseX > 50 && mouseX < 80 && mouseY > 350 && mouseY < 380 && question == 4){
		image(ch, 50, 350, 30, 30);
	}
	
	//checking question 4
	if(mouseX > 780 && mouseX < 880 && mouseY > 650 && mouseY < 680 && question == 4){
		text("correct", 650, 665);
		correctAnswers++;
	}
	
	
	//Question 5
	if(mouseX > 50 && mouseX < 80 && mouseY > 100 && mouseY < 130 && question == 5){
		image(rbPick, 50, 100, 30, 30);
		answer5 = 0;
	} else if(mouseX > 50 && mouseX < 80 && mouseY > 150 && mouseY < 180 && question == 5){
		image(rbPick, 50, 150, 30, 30);
		answer5 = 0;
	} else if(mouseX > 50 && mouseX < 80 && mouseY > 200 && mouseY < 230 && question == 5){
		image(rbPick, 50, 200, 30, 30);
		answer5 = 0;
	} else if(mouseX > 50 && mouseX < 80 && mouseY > 250 && mouseY < 280 && question == 5){
		image(rbPick, 50, 250, 30, 30);
		answer5 = 1;
	}
	
	//Question 5 checking/hitting the submit button
	if(mouseX > 780 && mouseX < 880 && mouseY > 650 && mouseY < 680 && question == 5){
		if(answer5 == 1){
			text("correct", 650, 665);
			correctAnswers++;
		} else {
			text("incorrect", 650, 665);
		}
	}
	
	//Question 6
	if(mouseX > 50 && mouseX < 80 && mouseY > 100 && mouseY < 130 && question == 6){
		image(rbPick, 50, 100, 30, 30);
		answer6 = 0;
	} else if(mouseX > 50 && mouseX < 80 && mouseY > 150 && mouseY < 180 && question == 6){
		image(rbPick, 50, 150, 30, 30);
		answer6 = 0;
	} else if(mouseX > 50 && mouseX < 80 && mouseY > 200 && mouseY < 230 && question == 6){
		image(rbPick, 50, 200, 30, 30);
		answer6 = 1;
	} else if(mouseX > 50 && mouseX < 80 && mouseY > 250 && mouseY < 280 && question == 6){
		image(rbPick, 50, 250, 30, 30);
		answer6 = 0;
	}
	
	//Question 6 checking/hitting the submit button
	if(mouseX > 780 && mouseX < 880 && mouseY > 650 && mouseY < 680 && question == 6){
		if(answer6 == 1){
			text("correct", 650, 665);
			correctAnswers++;
		} else {
			text("incorrect", 650, 665);
		}
	}
	
	
	//Question redem
	if(mouseX > 50 && mouseX < 80 && mouseY > 100 && mouseY < 130 && question == 7){
		image(rbPick, 50, 100, 30, 30);
		redem = 0;
	} else if(mouseX > 50 && mouseX < 80 && mouseY > 150 && mouseY < 180 && question == 7){
		image(rbPick, 50, 150, 30, 30);
		redem = 0;
	} else if(mouseX > 50 && mouseX < 80 && mouseY > 200 && mouseY < 230 && question == 7){
		image(rbPick, 50, 200, 30, 30);
		redem = 1;
	} else if(mouseX > 50 && mouseX < 80 && mouseY > 250 && mouseY < 280 && question == 7){
		image(rbPick, 50, 250, 30, 30);
		redem = 0;
	} else if(mouseX > 50 && mouseX < 80 && mouseY > 300 && mouseY < 230 && question == 7){
		image(rbPick, 50, 300, 30, 30);
		redem = 0;
	} else if(mouseX > 50 && mouseX < 80 && mouseY > 350 && mouseY < 280 && question == 7){
		image(rbPick, 50, 350, 30, 30);
		redem = 0;
	} else if(mouseX > 50 && mouseX < 80 && mouseY > 400 && mouseY < 230 && question == 7){
		image(rbPick, 50, 400, 30, 30);
		redem = 0;
	} else if(mouseX > 50 && mouseX < 80 && mouseY > 450 && mouseY < 280 && question == 7){
		image(rbPick, 50, 450, 30, 30);
		redem = 0;
	}
	
	//Question redem checking/hitting the submit button
	if(mouseX > 780 && mouseX < 880 && mouseY > 650 && mouseY < 680 && question == 7){
		if(redem == 1){
			text("correct", 650, 665);
			correctAnswers++;
		} else {
			text("incorrect", 650, 665);
		}
	}
	
	
}

function questionTwo(){
	text("True/False: Brushes used for magnets can be used for other cleaning tasks", 50, 50);
	image(rb, 50, 100, 30, 30);
	image(rb, 50, 150, 30, 30);
	text("True", 85, 123);
	text("False", 85, 174);
}

function questionThree(){
	text("When do scales need to be verified using certified weights?", 50, 50);
	image(rb, 50, 100, 30, 30);
	image(rb, 50, 150, 30, 30);
	image(rb, 50, 200, 30, 30);
	image(rb, 50, 250, 30, 30);
	text("Every day", 85, 123);
	text("Every other day", 85, 174);
	text("Every week", 85, 225);
	text("Every month", 85, 276);
}

function questionFour(){
	text("Check all that apply: Don't use a pallet if it:", 50, 50);
	image(unch, 50, 100, 30, 30);
	image(unch, 50, 150, 30, 30);
	image(unch, 50, 200, 30, 30);
	image(unch, 50, 250, 30, 30);
	image(unch, 50, 300, 30, 30);
	image(unch, 50, 350, 30, 30);
	text("Has odors", 85, 123);
	text("Shows evidence of pest activity", 85, 174);
	text("Is found in the wrong spot", 85, 225);
	text("Has protruding nails", 85, 276);
	text("Has writing on it", 85, 327);
	text("Has broken or loose boards", 85, 378);
}

function questionFive(){
	text("What should be placed between the pallet and the product?", 50, 50);
	image(rb, 50, 100, 30, 30);
	image(rb, 50, 150, 30, 30);
	image(rb, 50, 200, 30, 30);
	image(rb, 50, 250, 30, 30);
	text("As long as it is 18 in. from the wall it is good", 85, 123);
	text("A plant", 85, 174);
	text("Cardboard", 85, 225);
	text("A Slip Sheet", 85, 276);
}

function questionSix(){
	text("Complete the following requirement for receiving ingredients:", 50, 50);
	text("All incoming ingredients must be checked for ________ _______ and COAs before use.", 50, 75);
	image(rb, 50, 100, 30, 30);
	image(rb, 50, 150, 30, 30);
	image(rb, 50, 200, 30, 30);
	image(rb, 50, 250, 30, 30);
	text("signed documentation from a manager", 85, 123);
	text("proper SDSs", 85, 174);
	text("proper labeling", 85, 225);
	text("payment documentation", 85, 276);
}

function redemption(){
	text("Redemption: What color brush can be used for magnets?", 50, 50);
	image(rb, 50, 100, 30, 30);
	image(rb, 50, 150, 30, 30);
	image(rb, 50, 200, 30, 30);
	image(rb, 50, 250, 30, 30);
	image(rb, 50, 300, 30, 30);
	image(rb, 50, 350, 30, 30);
	image(rb, 50, 400, 30, 30);
	image(rb, 50, 450, 30, 30);
	text("Red", 85, 123);
	text("Blue", 85, 174);
	text("Orange", 85, 225);
	text("Yellow", 85, 276);
	text("Black", 85, 327);
	text("Grey", 85, 378);
	text("White", 85, 429);
	text("Green", 85, 480);
}


function reset(){
	background('#FFFFFF');
}


class dragdrop{
	constructor(){
		image(imgRedB, 50, 50, 150, 150);
		image(imgWhiteB, 250, 50, 150, 150);
		image(imgGreyB, 450, 50, 150, 150);
		image(imgYellowB, 620, 50, 150, 150);
		image(imgBlackB, 770, 50, 150, 150);
		image(bp, 70, 510, 100, 100);
	}
	
}