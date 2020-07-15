class CommentFormComp extends Component{
    constructor(parent){
        super(parent);
        this.container.classList.add("commentFormComp");

        this.formBackground = document.createElement("div");
        this.container.appendChild(this.formBackground);
        this.formBackground.classList.add("formBackground");

        this.title = document.createElement("input");
        this.title.placeholder = "Enter your title here"
        this.formBackground.appendChild(this.title);

        this.body = document.createElement("textarea");
        this.body.placeholder = "Enter your body here"
        this.formBackground.appendChild(this.body);

        this.cancelBtn = document.createElement("button");
        this.cancelBtn.innerHTML = "Cancel";
        this.formBackground.appendChild(this.cancelBtn);
        this.cancelBtn.onclick = this.onCancelBtn.bind(this);

        this.okBtn = document.createElement("button");
        this.okBtn.innerHTML = "OK";
        this.formBackground.appendChild(this.okBtn);
        this.okBtn.onclick = this.onOkBtn.bind(this)
    }

    onCancelBtn(e){
        AppManager.getInstance().uiManager.hideCommentForm();
    }

    onOkBtn(e){

    }
}