function Car() {
  this.y = height*0.9;
  this.x = width/2;
  this.size = 60;
  this.boost = false;
  

  this.show = function() {
    fill(255);
    rect(this.x-55/2, this.y, this.size, this.size, 20);
   //fill(0,255,0);
   image(img, this.x-23,900,50,80);
   //ellipse(this.x,900,10,10);
  }
}
