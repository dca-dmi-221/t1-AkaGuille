let frame1, frame2;

function setup() {
  createCanvas(1280, 720);
  frame1 = loadImage("../Images/Frame1.png");
  frame2 = loadImage("../Images/Frame2.png");

  //Buttons
  const bPlay = createButton("PLAY");
  bPlay.position(620, 626);
  bPlay.mousePressed(play);

  const bPause = createButton("PAUSE");
  bPause.position(620, 626);

  const bNext = createButton("NEXT");
  bNext.position(700, 626);

  const bPrevious = createButton("PREVIOUS");
  bPrevious.position(520, 626);

}

function draw() {
  background(220);
  imageMode(CENTER);
  image(frame1, 640, 360);
  image(frame2, 640, 360);
  imageMode(CORNER);

}

