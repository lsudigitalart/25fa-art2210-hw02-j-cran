function setup() {
  createCanvas(950, 642);
  background(212,175,11);

  //fill(255);
  //for(x=0; x<100; x=x+20) {
  //  for(y=0, y<1000; y=y+20); {
  //  ellipse(x,y,10);
  //  }
  //}
  noStroke();

  fill(230,207,184);
  beginShape();
   vertex(950,642);
   vertex(820,642);
   vertex(800,600);
   vertex(750,500);
   vertex(750,200);
   vertex(785,100);
   vertex(820,0);
   vertex(950,0);
  endShape();

  fill(0);
  stroke(0);
  strokeWeight(10);
  bezier(816,642,600,499,780,119,847,-50);
  bezier(955,300,940,310,930,315,920,315);
  bezier(620,-10,420,-10,450,300,550,643);
  ellipse(300,0,50,900);
  ellipse(200,0,40,600);
  ellipse(75,0,20,500);

  fill(230,207,184);
  stroke(0);
  strokeWeight(20);
  bezier(819,642,760,469,828,163,855,0);
  
  noStroke();
  fill(212,175,11);
  ellipse(350,250,100,600);
  ellipse(220,250,50,600);
  ellipse(90,250,30,600);
  ellipse(600,310,130,670);

  //top lines
  noStroke();
  fill(0);
  rect(0,100,1000,15);

  fill(230,230,230);
  rect(0,20,1000,20);

  //bottom lines

  stroke(0);
  strokeWeight(8);
  line(0,610,500,610);
  line(0,630,490,630);

  strokeWeight(10);
  line(0,580,600,580);

  //end bottom lines

}

function draw() {

  console.log(mouseX,mouseY);
}
