
function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(50);
    
  
  lollipop(100,100,50);
  lollipop(300,200,150);

}
function lollipop(x,y, diameter){
  fill(0,200,255);
  rect(x-10,y,20,150);
  
  fill(255,0,200);
  ellipse(300,200,100,100);
  ellipse(x,y, diameter);
}
  
