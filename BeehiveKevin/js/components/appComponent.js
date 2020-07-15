class AppComponent extends Component{
    constructor(parent){
        super(parent);
        this.container.id = "appComponent";
        this.container.classList.add("appComp");

        this.headerComponent = new HeaderComponent(this.container);
        this.loadComponent = new LoadComponent(this.container);
        this.beesComponent = new BeesComponent(this.container);
        this.postsComponent = new PostsComponent(this.container);
        this.almbumsComponent = new AlbumsComponent(this.container);
        this.todosComponent = new TodosComponent(this.container);
        this.commentFormComp = new CommentFormComp(this.container);
    }
}