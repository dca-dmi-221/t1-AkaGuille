let frame1, frame2;
let allSongs;
let rap;
let bachata;
let soundtracks;
let rap1;
let rap2;
let rap3;
let bachata1;
let bachata2;
let bachata3;
let soundtrack1;
let soundtrack2;
let soundtrack3;
let file1;
let file2
let file3;
let file4
let file5;
let file6;
let file7;
let file8;
let file9;
let duration1;
let duration2;
let duration3;
let duration4;
let duration5;
let duration6;
let duration7;
let duration8;
let duration9;
let slider;
let player;
let volumeUp;
let volumeDown;
let volumeMute;
let imgRap1;

let currentPlaylist = 0;


function preload() {
  //Songs
  soundFormats('mp3', 'ogg');
  file1 = loadSound("songs/Cuanto he tenido.mp3");
  file2 = loadSound("songs/Fe de Errata.mp3");
  file3 = loadSound("songs/Redi.mp3");
  file4 = loadSound("songs/Corazón sin cara.mp3");
  file5 = loadSound("songs/Por un segundo.mp3");
  file6 = loadSound("songs/El malo.mp3");
  file7 = loadSound("songs/Flight Of The Bumblebee.mp3");
  file8 = loadSound("songs/Ride Of The Valkyries.mp3");
  file9 = loadSound("songs/William Tell Overture.mp3");

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
    y: 635,
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

  //Durations 
  duration1 = file1.duration();
  duration2 = file2.duration();
  duration3 = file3.duration();
  duration4 = file4.duration();
  duration5 = file5.duration();
  duration6 = file6.duration();
  duration7 = file7.duration();
  duration8 = file8.duration();
  duration9 = file9.duration();

  //New songs
  rap1 = new Song("Cuanto he tenido", duration1, file1);
  rap2 = new Song("Fe de Errata", duration2, file2);
  rap3 = new Song("Redi", duration3, file3);
  bachata1 = new Song("Corazón sin cara", duration4, file4);
  bachata2 = new Song("Por un segundo", duration5, file5);
  bachata3 = new Song("El Malo", duration6, file6);
  soundtrack1 = new Song("Flight Of The Bumblebee", duration7, file7);
  soundtrack2 = new Song("Ride Of The Valkyries", duration8, file8);
  soundtrack3 = new Song("William Tell Overture", duration9, file9);

  //New playlist
  allSongs = new Playlist({
    name: "DEFAULT"
  });
  allSongs.add(rap1);
  allSongs.add(rap2);
  allSongs.add(rap3);
  allSongs.add(bachata1);
  allSongs.add(bachata2);
  allSongs.add(bachata3);
  allSongs.add(soundtrack1);
  allSongs.add(soundtrack2);
  allSongs.add(soundtrack3);
  console.log(allSongs);


  rap = new Playlist({
    name: 'RAP'
  });
  rap.add(rap1);
  rap.add(rap2);
  rap.add(rap3);


  bachata = new Playlist({
    name: 'BACHATA'
  });
  bachata.add(bachata1);
  bachata.add(bachata2);
  bachata.add(bachata3);


  soundtracks = new Playlist({
    name: 'SOUNDTRACKS'
  });
  soundtracks.add(soundtrack1);
  soundtracks.add(soundtrack2);
  soundtracks.add(soundtrack3);

  console.log(rap);
  console.log(bachata);
  console.log(soundtracks);

  slider = createSlider(0, 1, 0.5, 0.01).style('width', "100px").position(1000, 626);

  player = new MP3Player({
    playlist: allSongs,
    slider: slider
  });

  console.log(player, "----------------------------------");

  //Buttons

  const bPlay = createButton("").position(600, 626).mousePressed(() => {
    player.playSong();
  });
  bPlay.elt.className = "play-Button";

  const bPause = createButton("").position(500, 626).mousePressed(() => {
    player.pauseSong()
  });
  bPause.elt.className = "pause-Button";

  const bNext = createButton("").position(700, 626).mousePressed(() => {
    player.nextSong()
  });
  bNext.elt.className = "next-Button";

  const bPrevious = createButton("").position(400, 626).mousePressed(() => {
    player.previousSong()
  });
  bPrevious.elt.className = "previous-Button";

  const bFoward = createButton("").position(800, 626).mousePressed(() => {
    player.forwardSong()
  });
  bFoward.elt.className = "moreFifteen-Button";

  const bBack = createButton("").position(300, 626).mousePressed(() => {
    player.backSong()
  });
  bBack.elt.className = "lessFifteen-Button";

  const bStop = createButton("STOP").position(200, 626).mousePressed(() => {
    player.stopSong()
  });

  const bAllSongs = createButton("").position(20, 100).mousePressed(() => {
    player.changePlaylist = allSongs;
    console.log(player);
  });
  bAllSongs.elt.className = "allsongs-Button";

  const bRap = createButton("").position(20, 200).mousePressed(() => {
    player.changePlaylist = rap;
    player.showSongs();
    console.log(player);
  });
  bRap.elt.className = "rap-Button";

  const bBachata = createButton("").position(20, 300).mousePressed(() => {
    player.changePlaylist = bachata;
    player.showSongs();
    console.log(player);
  });
  bBachata.elt.className = "bachata-Button";

  const bSoundtracks = createButton("").position(20, 400).mousePressed(() => {
    player.changePlaylist = soundtracks;
    player.showSongs();
    console.log(player);
  });
  bSoundtracks.elt.className = "soundtrack-Button";




}

function draw() {
  background(220);
  frame1.show();
  frame2.show();
  player.showSlider();

  volumeUp.show();

}