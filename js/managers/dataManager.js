class DataManager{
    constructor(appManager){
        this.appManager = appManager;
        this.urlPosts = 'https://beehive-270a2.firebaseio.com/data/posts.json';
        this.urlBees = 'https://beehive-270a2.firebaseio.com/data/users.json';
        this.urlComments = 'https://beehive-270a2.firebaseio.com/data/comments.json';
        this.bees = [];
        this.posts = [];
        this.comments = [];
    }

    start(){
        this.sendRequest(this.urlBees, this.getBeesComplete.bind(this));
    }

    //traer los datos
    sendRequest(url, callback){
        var request = new XMLHttpRequest();
        request.addEventListener('load', callback);
        request.open('GET', url);
        request.send();
    }

    //parsear info de bees
    getBeesComplete(e) {
        var request = e.target;
        if (request.status === 200){
            var data = JSON.parse(request.responseText);
            //parsear adress, geo, company
            data.forEach(beeData => {
                var bee = new Bee(beeData.id, beeData.name, beeData.email, beeData.phone, beeData.username, beeData.website, beeData.address, beeData.company);
                this.bees.push(bee);
            });
            this.sendRequest(this.urlPosts, this.getPostsComplete.bind(this));
        } 
        else{
            console.log('Error on requests')
        }
    }

    //parsear info de posts
    getPostsComplete(e) {
        var request = e.target;
        if (request.status === 200){
            var data = JSON.parse(request.responseText);
            data.forEach(postData => {
                var post = new Post(postData.id, postData.body, postData.title, postData.userId);
                this.addPostToBe(post);
            });
            this.sendRequest(this.urlComments, this.getCommentsComplete.bind(this));
        } 
        else{
            console.log('Error on requests')
        }
    }

    //agregar post a respectivo bee
    addPostToBe(post){
        this.bees.forEach(bee =>{
            if(bee.id === post.userId){
                bee.addPost(post);
                return;
            }
        })
    }

    //parsear info de comments
    getCommentsComplete(e){
        var request = e.target;
        if (request.status === 200){
            var data = JSON.parse(request.responseText);
            data.forEach(commentData => {
                var comment = new Comment(commentData.id, commentData.body, commentData.name, commentData.email, commentData.postId);
                this.addCommentToPost(comment);
            });
        } 
        else{
            console.log('Error on requests')
        }
        console.log(this.bees);
    }

    //agregar comentario al respectivo post
    addCommentToPost(comment){
        this.bees.forEach(bee =>{
            this.posts.forEach(post =>{
                if(post.id === comment.postId){
                    post.addComment(comment);
                    return;
                }
            })
        })
    }
}