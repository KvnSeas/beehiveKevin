class Album {
    constructor(id, title, userId) {
        this.id = id;
        this.title = title;
        this.userId = userId;
        this.photos = [];
    }
    addPhoto(photo) {
        this.photos.push(photo);
    }
}