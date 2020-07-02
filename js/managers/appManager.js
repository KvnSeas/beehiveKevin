class AppManager{
    constructor(){
        this.dataManager = new DataManager(this);
        this.uiManager = new UIManager(this);
        this.dataManager.start();
    }
}