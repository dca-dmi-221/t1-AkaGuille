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

  //Frames
  frame1 = new App ({
    image: loadImage("../Images/Frame1.png"), 
    x: 640, 
    y: 360});
  frame2 = new App ({
    image: loadImage("../Images/Frame2.png"), 
    x: 640, 
    y: 360});

  song = songDefault[0].link;

  //Buttons
  const bPlay = createButton("PLAY").position(600, 626).mousePressed(playSong);
  const bPause = createButton("PAUSE").position(500, 626).mousePressed(pauseSong);
  const bNext = createButton("NEXT").position(700, 626).mousePressed(nextSong);
  const bPrevious = createButton("PREVIOUS").position(400, 626).mousePressed(previousSong);
  const bFoward = createButton("+15").position(800, 626).mousePressed(forwardSong);
  const bBack = createButton("-15").position(300, 626).mousePressed(backSong);

  //Sliders
  slider = createSlider(0, 1, 0.5, 0.01).style('width', "100px").position(1000, 626);

}

function draw() {
  background(220);
  frame1.show();
  frame2.show();
  song.setVolume(slider.value());

}

