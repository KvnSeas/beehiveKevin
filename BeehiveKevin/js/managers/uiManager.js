class UIManager{
    constructor(appManager){
        this.appManager = appManager;
        this.appComponent = new AppComponent(document.body);
    }
    showLoading(){
        console.log('Show Loading');
    }
    showUI(){
        console.log('Show UI');
        this.appComponent.loadComponent.hide();
        this.appComponent.beesComponent.addBee(this.appManager.dataManager.bees);
        this.refreshPostsComp(AppManager.getInstance().dataManager.bees[0]);
    }

    refreshPostsComp(bee){
        this.appComponent.postsComponent.showBeePosts(bee);
    }
    hideCommentForm(){
        this.appComponent.commentFormComp.hide();
    }
    showCommentForm(){
        this.appComponent.commentFormComp.show();
    }
}