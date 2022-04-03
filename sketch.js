let frame1, frame2;
let play, pause, next, previous;

function setup() {
  createCanvas(1280, 720);
  frame1 = loadImage("../Images/Frame1.png");
  frame2 = loadImage("../Images/Frame2.png");

  //Buttons
  const play = createButton('');
  play.elt.className = 'playButton';
  play.position(620, 626);


}

function draw() {
  background(220);
  imageMode(CENTER);
  image(frame1, 640, 360);
  image(frame2, 640, 360);
  imageMode(CORNER);
}

