var bird;
var pipes = [];

var fontsize = 30;
var	score = 0;
var bestScore = 0;

function setup() {
	createCanvas(400, 600);

  	textSize(fontsize);	
	bird = new Bird();
	pipes.push(new Pipe());
}

function draw(){
	background(0);
	bird.update();
	bird.show();
	



	drawScore(score);
	drawBestScore(bestScore);

    
	
	for (var i = pipes.length-1; i >= 0; i--){
		pipes[i].show();
		pipes[i].update();
		
		if (pipes[i].hits(bird)){
			//console.log("hit");
			if(bestScore < score) bestScore = score ;
			score = 0;
		}

		if (pipes[i].offscreen()){
			pipes.splice(i, 1);
		}
	}
	

	if (frameCount % 150 == 0){
		pipes.push(new Pipe());	
	}
	
	if(frameCount % 4 == 0){
		score++;
	}


}

function keyPressed(){
	if(key == " ") {
		bird.up();
	}   
}

function drawScore(score){
	fill(255);
	text(score, 10, 50 );

}

function drawBestScore(score){
	fill(255);
	text(score, width - 60, 50 );

}



function mouseClicked(){
		bird.up();
}