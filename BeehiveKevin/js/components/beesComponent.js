class BeesComponent extends Component{
    constructor(parent){
        super(parent);
        this.container.id = "beesComponent";
        this.container.classList.add("beesComp");
    }
    addBee(bees){
        console.log(bees);
        bees.forEach((bee) => {
           var beeComponent = new BeeComponent(this.container, bee);
        });
    }
}