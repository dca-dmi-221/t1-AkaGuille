let frame1, frame2;
let songDefault1;
let songDefault2;
let songDefault3;
let allSongs;
let defaultPlaylist1;
let defaultPlaylist;
let defaultPlaylist3;
let file1;
let file2;
let file3;
let duration1;
let duration2;
let duration3;
let slider;
let player;
let volumeUp, volumeDown, volumeMute;


function preload() {
  soundFormats('mp3', 'ogg');

  file1 = loadSound("songs/Flight Of The Bumblebee.mp3");
  file2 = loadSound("songs/Ride Of The Valkyries.mp3");
  file3 = loadSound("songs/William Tell Overture.mp3");

  //Frames
  frame1 = new App({
    image: loadImage("../Images/Frame1.png"),
    x: 640,
    y: 360
  });
  frame2 = new App({
    image: loadImage("../Images/Frame2.png"),
    x: 640,
    y: 360
  });

  volumeUp = new App({
    image: loadImage("../Images/VolumeUp.png"),
    x: 980,
    y: 626,
  });

  volumeMute = new App({
    image: loadImage("../Images/VolumeMute.png"),
    x: 980,
    y: 626,
  });

  volumeDown = new App({
    image: loadImage("../Images/VolumeDown.png"),
    x: 980,
    y: 626,
  });
}



function setup() {
  createCanvas(1280, 720);

  duration1 = file1.duration();
  duration2 = file2.duration();
  duration3 = file3.duration();

  songDefault1 = new Song("Flight Of The Bumblebee", duration1, file1);
  songDefault2 = new Song("Ride Of The Valkyries", duration2, file2);
  songDefault3 = new Song("William Tell Overture", duration3, file3);

  allSongs = new Playlist({
    name: 'default'
  });
  allSongs.add(songDefault1);
  allSongs.add(songDefault2);
  allSongs.add(songDefault3);

  console.log(allSongs);

  defaultPlaylist1 = new Playlist({
    name: 'Clasica'
  });
  defaultPlaylist1.add(songDefault1);

  defaultPlaylist2 = new Playlist({
    name: 'Rock'
  });
  defaultPlaylist2.add(songDefault2);

  defaultPlaylist3 = new Playlist({
    name: 'Pop'
  });
  defaultPlaylist3.add(songDefault3);

  slider = createSlider(0, 1, 0.5, 0.01).style('width', "100px").position(1000, 626);
  player = new MP3Player({
    playlist: allSongs,
    slider: slider
  });

  //Buttons
  //Problem fixed with the monitor Daniel Martinez

  const bPlay = createButton("PLAY").position(600, 626).mousePressed(() => {
    player.playSong();
  });
  const bPause = createButton("PAUSE").position(500, 626).mousePressed(() => {
    player.pauseSong()
  });
  const bNext = createButton("NEXT").position(700, 626).mousePressed(() => {
    player.nextSong()
  });
  const bPrevious = createButton("PREVIOUS").position(400, 626).mousePressed(() => {
    player.previousSong()
  });
  const bFoward = createButton("+15").position(800, 626).mousePressed(() => {
    player.forwardSong()
  });
  const bBack = createButton("-15").position(300, 626).mousePressed(() => {
    player.backSong()
  });
  const bStop = createButton("STOP").position(200, 626).mousePressed(() => {
    player.stopSong()
  });

}

function draw() {
  background(220);
  frame1.show();
  frame2.show();
  player.showSlider();

}