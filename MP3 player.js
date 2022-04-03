class MP3Player {
    constructor(){
    }

    
}

function playSong(){
    if (!song.isPlaying()) {
        song.play();
    }
}

function pauseSong(){
    if (song.isPlaying()) {
        song.pause();
    }
}

function nextSong(){
    song.stop();
    if (currentSongIndex < songDefault.length) {
        song = songDefault[currentSongIndex++].link;
        currentSongIndex = currentSongIndex++;
    } else {
        song = songDefault[0].link;
        currentSongIndex = 1;
    }
    song.play();
    console.log(currentSongIndex)
}

function previousSong() {

}

