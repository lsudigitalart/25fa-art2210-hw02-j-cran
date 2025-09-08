function setup() {
  createCanvas(950, 642);
  background(212,175,11);

  //fill(255);
  //for(x=0; x<100; x=x+20) {
  //  for(y=0, y<1000; y=y+20); {
  //  ellipse(x,y,10);
  //  }
  //}
  //bottom lines
  
  strokeWeight(8);
  line(0,610,500,610);
  line(0,630,490,630);

  strokeWeight(10);
  line(0,580,600,580);

  //end bottom lines
  noStroke();

  fill(230,207,184);
  beginShape();
   vertex(950,642);
   vertex(820,642);
   vertex(800,600);
   vertex(750,500);
   vertex(750,200);
   vertex(785,100);
   vertex(850,0);
   vertex(950,0);
  endShape();

  //top lines
  fill(0);
  rect(0,100,1000,15);

  fill(230,230,230);
  rect(0,20,1000,20);

}

function draw() {

  console.log(mouseX,mouseY);
}
