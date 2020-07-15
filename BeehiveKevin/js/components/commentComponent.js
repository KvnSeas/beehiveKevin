class CommentComponent extends Component{
    constructor(parent, model){
        super(parent);
        this.model = model;
        this.container.classList.add("commentComp");

        this.name = document.createElement("p");
        this.name.innerHTML = this.model.name;
        this.name.classList.add("commentName");
        this.container.appendChild(this.name);

        this.body = document.createElement("p");
        this.body.innerHTML = this.model.body;
        this.body.classList.add("commentBody");
        this.container.appendChild(this.body);
    }
}