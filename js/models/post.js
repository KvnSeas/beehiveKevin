class Post{
    constructor(id, body, title, userId){
        this.id = id;
        this.body = body;
        this.title = title;
        this.userId = userId;
        this.comments = [];
    }
    addComment(comment){
        this.comments.push(comment);
    }
}