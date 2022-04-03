let frame1;
let frame2;

function setup() {
  createCanvas(1280, 720);
  frame1 = new App (loadImage("../Images/Frame1.png"), 640, 360);
  frame2 = new App (loadImage("../Images/Frame2.png"), 640, 360);
}

function draw() {
  background(220);
  frame2.show();
}

