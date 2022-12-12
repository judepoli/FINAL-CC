var song; //breathe by pink floyd
let timer = 0; 
let interval = 4000; // 1000 mil = 1 sec 
let myMeteor; // class name - circles flying


function preload(){
	song = loadSound('Breathe.mp3');
	//volume(0.5);
	
}

function setup() {
	song.play();
	song.stop(110);
	angleMode(DEGREES); //not radian 
	createCanvas(800, 800, WEBGL); //3 d mode 
	myMeteor = new Meteor (20, 20, 3, 4); //new instance - change later
}

function draw() { //https://www.youtube.com/watch?v=vmhRlDyPHMQ (WORKS CITED -- i got the original sine wave form from ths video - suoer informational, guides you through the code -- 
	//essentially a 3d space - 3 vertex that operate on x y z axes - ale to therefore rotate each variable and configurate the wave into a wide range of viuals. the color mode is mapped to the frame count and to sin
	//in order to develop smoothness - not just sparratic or sudden changes. )
	background(30, 90, 255);

	rotateX(90); //as time + rotate x more
	rotateY(30); //^^
	noFill();
	stroke(255); //first stance
	strokeWeight(1);
	
		for (var i=0; i<90; i++){ //manipulate middle
			
			var r = map(sin(frameCount / 2 ), -1, 1, 200, 100); 
			var g = map(i, 0, 20, 100, 200); //manipulate 
			var b = map(cos(frameCount), -1, 1, 200, 100);
			
			stroke(r, b, g);
			
			rotate(frameCount / 10); //play -- as framecount goes up change color scheme 
			
			beginShape();
				for(var j=0; j<360; j+=10){ //last plays w shape 
					var rad = i*8; //manipulate
					var x = rad * cos(j);
					var y = rad * sin(j);
					var z = sin(frameCount * 2 + i * 3) * 90 //manipulate 
					vertex (x, y, z);
					
			if (millis() - timer > interval){ //first switch - scene change 
				rotateX(10); //as time + rotate x more
				rotateY(30);
			}
			if (millis() - timer > interval*2){ // second switch - diff visual
				rotateX(20); //as time + rotate x more
				rotateY(350);
			}
			if (millis() - timer > interval*2.5){ //color
					var g = map(i, 0, 20, 10, 200); //manipulate 

			if (millis() - timer > interval*2.7){ //color
				var g = map(i, 0, 20, 10, 400);
			}
			if (millis() - timer > interval*3){ //another sphere shows up
				sphere(50);
				rotateX(90); 
				rotateY(30);
			}
			if (millis() - timer > interval*4){ //third scene - slow moving x fast y
				myMeteor.display();
				myMeteor.move();
			}
			if (millis() - timer > interval * 4.8){
					rotateX(120);
					rotateY(240);
					myMeteor.fill();
			}
			if (millis() - timer > interval * 5.7){
					myMeteor.rotate(10);
			}
			if (millis() - timer > interval * 6.8){ //back to huge plane visual 
					myMeteor.noFill();
			}
			if (millis() - timer > interval *9){
				rotateX(30);
				rotateY(40);
			}
				if (millis() - timer > interval *13){
				rotateX(30);
				rotateY(40);
				sphere(frameCount);
			}
				
		}
	}
		endShape(CLOSE);
		}
				
			if (millis() - timer > interval){
					sphere(100);
			}
	if (millis() - timer > interval *17){
				song.stop(17);
			}
}

//FLYING THINGS class 
class Meteor{
	constructor(x, y, xSpeed, ySpeed){
		this.x = x;
		this.y = y;
		this.xSpeed = xSpeed;
		this.ySpeed = ySpeed;
	}
	move(){
		this.x += this.xSpeed;
		if (this.x <0 || this.x > width){
			this.xSpeed *= -1;
		}
		
		this.y += this.ySpeed;
		if (this.y <0 || this.y > height){
			this.ySpeed *= -1;
		}
	}
	display() {
		ellipse(this.x, this.y, 20);
	}
	fill(){
		fill(30, 90, 255);
		ellipse(this.x, this.y, 20);
	}
	noFill(){
		noFill();
		ellipse(this.x, this.y, 20);
	}
	rotate(){
		this.x = rotateX(30);
		this.y = rotateY(70);
	}
}



