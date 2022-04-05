class MP3Player {
    constructor({
        playlist,
        slider
    }) {
        this.currentSongIndex = 0;
        this.playlist = playlist;
        this.song = playlist.songs[this.currentSongIndex].file;
        this.slider = slider;
    }

    showSlider() {
        this.song.setVolume(this.slider.value());
    }

    playSong() {
        if (!this.song.isPlaying()) {
            this.song.play();
        }
    }

    stopSong() {
        this.song.stop();
    }

    pauseSong() {
        if (this.song.isPlaying()) {
            this.song.pause();
        }
    }

    nextSong() {
        this.stopSong();
        if (this.currentSongIndex < this.playlist.songs.length) {
            this.song = this.playlist.songs[this.currentSongIndex++].file;
            console.log(this.currentSongIndex);
        } else {
            //this.song = this.playlist.songs[0].file;
            this.currentSongIndex = 0;
        }
        this.playSong();
    }

    previousSong() {
        this.stopSong();
        if (this.currentSongIndex > 0) {
            song = this.playlist.songs[currentSongIndex - 2].file;
            this.currentSongIndex = this.currentSongIndex - 1;
        } else {
            let totalSongs = this.playlist.songs.length;
            song = this.playlist.songs[totalSongs - 1].file;
            this.currentSongIndex = this.playlist.songs.length;
        }
        this.playSong();
        console.log(this.currentSongIndex)
    }

    forwardSong() {
        if (this.song.isPlaying()) {
            this.song.jump(this.song.currentTime() + 15);
        }
    }

    backSong() {
        if (this.song.isPlaying()) {
            this.song.jump(this.song.currentTime() - 15);
        }
    }


}