function Obstacle(speed_factor) {
  this.y = 5;
  this.x = Math.random()*width;
  this.speed = 5;
  this.size = 25;


  this.show = function() {
    fill(255,0,0);
    ellipse(this.x, this.y, this.size, this.size);
  }
  this.update = function() {
    this.y += this.speed*gameSpeed;
  }
  this.collision = function(car) {

    if((car.y - this.y) < this.size){
	if (abs(car.x - this.x) < (this.size+car.size/2)) {
	  return true;
	}
    }
    return false;
  }

  this.offscreen = function () {
    return (this.y > height+this.size)
  }
}
