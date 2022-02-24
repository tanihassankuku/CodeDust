var words =["rainboll", "heart", "purple","Tani"]

var index =0;
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  
  
  fill(255);
  textSize(23);
  text(words[index], 12,200);
  } 
  
  function mousePressed(){
    index =index + 1;
    
    if(index == words.lenght){
      index =0;
    }
  
}