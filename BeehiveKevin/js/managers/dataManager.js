class DataManager{
    constructor(appManager){
        this.appManager = appManager;
        this.urlPosts = 'https://beehive-270a2.firebaseio.com/data/posts.json';
        this.urlBees = 'https://beehive-270a2.firebaseio.com/data/users.json';
        this.urlComments = 'https://beehive-270a2.firebaseio.com/data/comments.json';
        this.urlAlbums = 'https://beehive-270a2.firebaseio.com/data/albums.json';
        this.urlPhotos = 'https://beehive-270a2.firebaseio.com/data/photos.json';
        this.urlTodos = 'https://beehive-270a2.firebaseio.com/data/todos.json';
        this.bees = [];
        this.posts = [];
        this.comments = [];
        this.albums = [];
        this.photos = [];
        this.todos = [];
    }

    start(){
        this.appManager.uiManager.showLoading();
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
                var company = new Company(beeData.company.bs, beeData.company.catchPhrase, beeData.company.name);
                var geo = new Geo(beeData.address.geo.lat, beeData.address.geo.lng);
                var address = new Address(beeData.address.city, geo, beeData.address.street, beeData.address.suite, beeData.address.zipcode);
                var bee = new Bee(beeData.id, beeData.name, beeData.email, beeData.phone, beeData.username, beeData.website, address, company, beeData.image, beeData.owner);
                this.bees.push(bee);
            });
            this.sendRequest(this.urlPosts, this.getPostsComplete.bind(this));
            this.sendRequest(this.urlAlbums, this.getAlbumsComplete.bind(this));
            this.sendRequest(this.urlTodos, this.getTodosComplete.bind(this));
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
                this.posts.push(post);
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
                this.comments.push(comment);
                this.addCommentToPost(comment);
            });
            this.appManager.uiManager.showUI();
        } 
        else{
            console.log('Error on requests')
        }
    }

    //agregar comentario al respectivo post
    addCommentToPost(comment){
        this.posts.forEach(post =>{
            if(post.id === comment.postId){
                post.addComment(comment);
                return;
            }
        })
    }

    //parsear info de albums
    getAlbumsComplete(e){
        var request = e.target;
        if (request.status === 200){
            var data = JSON.parse(request.responseText);
            data.forEach(albumData => {
                var album = new Album(albumData.id, albumData.title, albumData.userId);
                this.albums.push(album);
                this.addAlbumToBee(album);
            });
            this.sendRequest(this.urlPhotos, this.getPhotosComplete.bind(this));
        } 
        else{
            console.log('Error on requests')
        }
    }

    //agregar album al respectivo bee
    addAlbumToBee(album){
        this.bees.forEach(bee =>{
            if(bee.id === album.userId){
                bee.addAlbum(album);
                return;
            }
        })
    }

    //parsear info de photos
    getPhotosComplete(e){
        var request = e.target;
        if (request.status === 200){
            var data = JSON.parse(request.responseText);
            data.forEach(photoData => {
                var photo = new Photo(photoData.albumId, photoData.id, photoData.thumbnailUrl , photoData.title, photoData.url);
                this.photos.push(photo);
                this.addPhotoToAlbum(photo);
            });
        } 
        else{
            console.log('Error on requests')
        }
    }

    //agregar photo a album respectivo
    addPhotoToAlbum(photo){
        this.albums.forEach(album =>{
            if(album.id === photo.albumId){
                album.addPhoto(photo);
                return;
            }
        })
    }

    //parsear info de todos
    getTodosComplete(e){
        var request = e.target;
        if (request.status === 200){
            var data = JSON.parse(request.responseText);
            data.forEach(todoData => {
                var todo = new Todo(todoData.completed, todoData.id, todoData.title, todoData.userId);
                this.todos.push(todo);
                this.addTodoToBee(todo);
            });
        } 
        else{
            console.log('Error on requests')
        }
    }

    //agregar todo a respectivo bee
    addTodoToBee(todo){
        this.bees.forEach(bee =>{
            if(bee.id === todo.userId){
                bee.addTodo(todo);
                return;
            }
        })
    }
}