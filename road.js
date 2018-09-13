function Road(y) {
  this.y = y;
  this.x = width/2;
  this.speed = 5;


  this.show = function() {
    fill(255);
    rect(this.x, this.y, 20, 50);
  }
  this.update = function() {
    this.y += this.speed*gameSpeed;
  }

  this.offscreen = function () {
    if (this.y > height) {
      this.y = 0;
    }
  }
}
