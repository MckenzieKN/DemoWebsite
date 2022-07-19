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
var answer4 = new Array();

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