class PostsComponent extends Component{
    constructor(parent){
        super(parent);
        this.container.id = "postsComponent";
        this.container.classList.add('postsComp');
        this.bee = null;
    }

    showBeePosts(bee){
        this.container.scrollTo(0,0);
        this.container.innerHTML = '';
        bee.posts.forEach((post) => {
            var postComponent = new PostComponent(this.container, post);
        });
    }
}