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

function previousSong(){
    song.stop();
    if (currentSongIndex > 1) {
        song = songDefault[currentSongIndex-2].link;
        currentSongIndex = currentSongIndex-1;
    } else {
        let totalSongs = songDefault.length;
        song = songDefault[totalSongs-1].link;
        currentSongIndex = totalSongs;
    }
    song.play();
    console.log(currentSongIndex)
}

function forwardSong() {
    if (song.isPlaying()) {
        song.jump(song.currentTime() + 15);
    }
}

function backSong() {
    if (song.isPlaying()) {
        song.jump(song.currentTime() -15);
    }
}


