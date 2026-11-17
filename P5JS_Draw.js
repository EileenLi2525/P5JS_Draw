let x = 5;
let y = 255
function setup() {
  createCanvas(500, 500);
  background(y,y,y);
  strokeWeight(x);
  colorMode(RGB);

}

function mouseDragged() {
  circle(0,0,0)
  line(pmouseX, pmouseY, mouseX, mouseY);
  if (keyIsDown(69)){
    stroke(y,y,y)
  }
  else{
    stroke(0,0,0)
  }
  
  if (keyIsDown(83)){
    strokeWeight(3)
  }
  else{
    strokeWeight(x)
  }
  
}
