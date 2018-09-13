var ball
var obst 
var speed = 1
function setup() {
	createCanvas(600,500);
	ball = {x:width/2, y: height/2, r:60}
	obst = {x: width/2, y:470, w:100, h:10}

}

function draw(){
	background(51);
	ellipse(ball.x, ball.y, ball.r, ball.r)
	ball.y += speed;
	rect(obst.x, obst.y, obst.w, obst.h)
	line(ball.x,ball.y,obst.x,obst.y)
	if(abs(ball.y - obst.y+obst.h/2)<(ball.r/2 + obst.h/2)){speed = -1}
	console.log(ball.y);
}


