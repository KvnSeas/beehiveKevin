class BeeComponent extends Component{
    constructor(parent, model){
        super(parent);
        this.model = model;
        this.container.id = "beeComponent";
        this.container.classList.add("beeComp");

        var beeName = document.createElement("p");
        beeName.innerHTML = model.name;
        beeName.classList.add("beeName");
        this.container.appendChild(beeName);

        var username = document.createElement("p");
        username.innerHTML = model.username;
        this.container.appendChild(username);

        this.container.onclick = this.onContainerClick.bind(this);
    }

    onContainerClick(){
        var appManager = AppManager.getInstance();
        appManager.uiManager.refreshPostsComp(this.model);
    }
}