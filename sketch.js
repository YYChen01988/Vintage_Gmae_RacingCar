var car;
var obstacles = new Array(1);
var roads = new Array(10);
var gameEnded = false;
var gameSpeed = 1;
var img;
function preload() {
  img = loadImage("batman.png");
}
function setup() {
	createCanvas(500,1000);
	car = new Car();
	for(var i =0 ; i<roads.length; i++ ){
		roads[i] = new Road(height/roads.length*i);
	}
}

function draw(){
	background(100,100,100);
	if(!gameEnded) {
		if (frameCount % 20 == 0 && Math.random()>0.1){
			obstacles.push(new Obstacle(Math.random()));
		}
	  obstacles.map((o) => o.update());
	  roads.map((o) => o.update());
	  obstacles = obstacles.filter((o) => !o.offscreen());
	  roads = roads.filter((o) => !o.offscreen());

	  if( obstacles.filter((o) => o.collision(car)).length > 0) {
 	    gameEnded = true;
	  }
        }
	roads.map((o) => o.show());
	car.show();
	obstacles.map((o) => o.show());


  if (keyIsDown(UP_ARROW)) {
	gameSpeed += 0.01;
  }
  if (keyIsDown(DOWN_ARROW)) {
	gameSpeed -= 0.01;
  }
  if (keyIsDown(LEFT_ARROW)) {
    	car.x -= 10;
  }
  if (keyIsDown(RIGHT_ARROW)) {
    	car.x += 10;
  }
}


