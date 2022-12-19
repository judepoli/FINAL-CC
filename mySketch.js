//PINK FLOYD VISUAL FOR SONGGGG ENJOY!

var song; //breathe by pink floyd
let timer = 0;
let interval = 4000; // 1000 mil = 1 sec 4 sec interval
let myMeteor; // class name
let fft;


function preload(){
	song = loadSound('Breathe.mp3');
}

function setup() {
	song.play();
	angleMode(DEGREES);
	createCanvas(800, 500, WEBGL); //3d
	myMeteor = new Meteor (20, 20, 3, 4); 
	fft = new p5.FFT();

}

function draw() { //https://www.youtube.com/watch?v=vmhRlDyPHMQ -- watched for the original sin wave vertex shape - shows how to use map to use sin wave in 3d space 
	let spectrum = fft.analyze();
	let bass, mid, treble; //3 freq sound waves - low mid high range 256

  bass = fft.getEnergy("bass"); 
  mid = fft.getEnergy("mid");
  treble = fft.getEnergy("treble");
  
  let bins=[bass,mid,treble]
	
	background(bins[0]*3, bins[1]/20, bins[2]*70); //pinnk and red - goes with bass mid and treb




	//rotateX(10); //as time + rotate x more
	//rotateY(60); //^^
	//stroke(255);
	
		for (var i=0; i<100; i++){ //manipulate middle
			var r = map(sin(frameCount / 2 ), -1, 1, 200, 100); //color mapping for sin wave
			var g = map(i, 0, 20, 100, 200); //manipulate 
			var b = map(cos(frameCount), -1, 1, 200, 100);
			
			stroke(r, b, g);
			strokeWeight(bins[0]/105); //weight goes with bass freq

			noFill(); //for the spheres



			beginShape(); //yt tutorial - linked above. 
				for(var j=0; j<360; j+=10){ //last plays w shape 
					var rad = i*8; //manipulate
					var x = rad * cos(j) ;
					var y = rad * sin(j) ;
					var z = sin(frameCount * 2 + i * 3) * 90; //manipulate 
					vertex (x, y, z);
					}
			endShape(CLOSE); 

			rotateX(bins[1]/70);// rotatex by mid value divide to slow down
			rotateY(bins[2]/20); 
			rotateZ(bins[0]);
		}
	//strokeWeight(1);
			 //9 spheres. - 3 per each bass, mid, and treb 
			
			strokeWeight(bins[0]/50); //bass -smallest brightest one
			sphere(40, 24, 24); //make smooth detail x and y
			
			strokeWeight(bins[0]/150); ///bass  
			sphere(60, 24, 24);
	
			strokeWeight(bins[0]/250);  //bass 
			sphere(80, 24, 24); 
	
			
			strokeWeight(bins[1]/15); //mid 
			sphere(100, 24, 24);
	
			strokeWeight(bins[1]/30); ///mid
			sphere(120, 24, 24);
	
			strokeWeight(bins[1]/45); //mid 
			sphere(140, 24, 24);
	
			
			strokeWeight(bins[2]); //treb
			sphere(160, 24, 24);
	
			strokeWeight(bins[2]/2); //treb
			sphere(180, 24, 24);
	
			strokeWeight(bins[2]/4); //treb
			sphere(200, 24, 24);
		
			//each size inc by 20 and each freq lowered

			/*
			myMeteor.display();
			myMeteor.move();
			*/
	
	//time intervals - small changes such as color and small meteors 
				
			if (millis() - timer > interval){ //first switch - scene change 
				rotateX(bins[0]); //as time + rotate x more
				rotateY(bins[1]);
				
			}
			if (millis() - timer > interval*4){ // second switch - diff visual
				rotateX(bins[1]/3); //as time + rotate x more
				rotateZ(bins[2]/3);
			}
			if (millis() - timer > interval*8){ //color
				var g = map(i, 0, 20, 10, 200); //manipulate 

			if (millis() - timer > interval*10){ //color
				var g = map(i, 0, 20, 10, 400);
			}
			if (millis() - timer > interval*12){ //
				rotateX(180); 
			}
			if (millis() - timer > interval*14){ //third scene - slow moving x fast y
				myMeteor.display();
				myMeteor.move();
			}
			if (millis() - timer > interval * 16){
					rotateX(120);
					rotateY(240);
			}
			if (millis() - timer > interval * 18){
					myMeteor.rotate();
			}
			if (millis() - timer > interval * 20){
					myMeteor.noFill();
			}
			
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
			this.xSpeed *= -0.2;
		}
		
		this.y += this.ySpeed;
		if (this.y <0 || this.y > height){
			this.ySpeed *= 0.2;
		}
	}
	display() {
		fill(255);
		ellipse(this.x, this.y, 20, 20);
	}
	
	noFill(){
		noFill();
		ellipse(this.x, this.y, 20);
	}
	rotate(){
		this.x = rotateX(frameCount );
		this.y = rotateY(frameCount );
	}
}



