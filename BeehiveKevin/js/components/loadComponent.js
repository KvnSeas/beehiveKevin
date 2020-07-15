class LoadComponent extends Component{
    constructor(parent){
        super(parent)
        this.container.id = "loadComponent";
        this.container.classList.add("loadComp");

        var loadTitle = document.createElement("p");
        this.container.appendChild(loadTitle);
        loadTitle.innerText = "LODING...."
    }
}