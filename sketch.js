let frame1, frame2;
let songDefault = [];
let currentSongIndex = 1;
let song;
let slider;


function preload() {
  soundFormats('mp3', 'ogg');
  songDefault =[
    {
      name: "Flight Of The Bumblebee",
      link: loadSound("songs/Flight Of The Bumblebee.mp3")
    },

    {
      name: "Ride Of The Valkyries",
      link: loadSound("songs/Ride Of The Valkyries.mp3")
    },

    {
      name: "William Tell Overture",
      link: loadSound("songs/William Tell Overture.mp3")
    },
  ]
}

function setup() {
  createCanvas(1280, 720);
  frame1 = loadImage("../Images/Frame1.png");
  frame2 = loadImage("../Images/Frame2.png");

  song = songDefault[0].link;

  //Buttons
  const bPlay = createButton("PLAY");
  bPlay.position(600, 626);
  bPlay.mousePressed(playSong);

  const bPause = createButton("PAUSE");
  bPause.position(500, 626);
  bPause.mousePressed(pauseSong);

  const bNext = createButton("NEXT");
  bNext.position(700, 626);
  bNext.mousePressed(nextSong);

  const bPrevious = createButton("PREVIOUS");
  bPrevious.position(400, 626);
  bPrevious.mousePressed(previousSong);

  //Slider
  slider = createSlider(0, 255, 100);
  slider.style('width', "100px");
  slider.position(1000, 626);
  

}

function draw() {
  background(220);
  imageMode(CENTER);
  image(frame1, 640, 360);
  image(frame2, 640, 360);
  imageMode(CORNER);

}

