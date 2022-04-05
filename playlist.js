class Playlist {
    constructor({
        name
    }) {
        this.songs = [];
        this.name = name;
    }

    add(song) {
        this.songs.push(song);
    }
}