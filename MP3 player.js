class MP3Player {
    constructor({
        playlist,
        slider,
    }) {
        this.currentSongIndex = 0;
        this.playlist = playlist;
        this.song = playlist.songs[this.currentSongIndex].file;
        this.slider = slider;
        this.btns = [];
    }

    showCurrentSong() {
        textAlign(RIGHT);
        textSize(20);
        text(this.song.name, 300, 800)

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
        if (this.currentSongIndex == this.playlist.songs.length - 1) {
            this.currentSongIndex = 0;
            this.song = this.playlist.songs[this.currentSongIndex].file;
            console.log(this.currentSongIndex);
        } else {
            this.currentSongIndex++;
            this.song = this.playlist.songs[this.currentSongIndex].file;
            console.log(this.currentSongIndex);
        }
        this.playSong();
    }

    previousSong() {
        this.stopSong();
        if (this.currentSongIndex !== 0) {
            this.currentSongIndex = this.currentSongIndex - 1;
            this.song = this.playlist.songs[this.currentSongIndex].file;
        } else if (this.currentSongIndex == 0) {
            this.currentSongIndex = this.playlist.songs.length - 1;
            this.song = this.playlist.songs[this.currentSongIndex].file;
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

    showSongs() {
        this.deleteBtn()
        console.log(this.playlist.songs.length)
        for (let i = 0; i < this.playlist.songs.length; i++) {
            const song = this.playlist.songs[i];
            this.btns.push(
                createButton(song.name).position(350, 100 + (80 * i)).class("btn").mousePressed(() => {
                    this.stopSong();
                    this.song = song.file;
                    this.currentSongIndex = i;
                    this.playSong();
                })
            );

        }
    }

    deleteBtn() {
        this.btns.forEach(btn => {
            btn.hide()
        });
    }



    set changePlaylist(newPlaylist) {
        this.playlist = newPlaylist;
    }




}