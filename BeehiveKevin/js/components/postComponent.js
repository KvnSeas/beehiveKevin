class PostComponent extends Component{
    constructor(parent, model){
        super(parent);
        this.model = model;
        this.container.classList.add("postComp");

        var title = document.createElement("p");
        title.innerHTML = model.title;
        title.classList.add("postTitle");
        this.container.appendChild(title);

        var body = document.createElement("p");
        body.innerHTML = model.body;
        body.classList.add("postBody");
        this.container.appendChild(body);

        var addCommentBtn = document.createElement("button");
        addCommentBtn.innerHTML = "Add Comment";
        addCommentBtn.onclick = this.onAddCommentClick.bind(this);
        this.container.appendChild(addCommentBtn);

        this.model.comments.forEach((comment) => {
            var commentComponent = new CommentComponent(this.container, comment);
        });
    }
    onAddCommentClick(e){
        console.log('show new comment form');
    
    }
}