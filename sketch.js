function setup() {
    createCanvas(600, 600);
    background(0,0,0);
   }
   
   function draw() {
    stroke("lightgreen");
    fill("green");
   
    if(mouseIsPressed){
     rect(mouseX, mouseY, 5, 5);
    }
   
   }