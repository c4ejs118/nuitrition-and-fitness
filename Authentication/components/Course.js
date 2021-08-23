class Course{
    $container;
    $sideBar; 
    $courseArea; 
    constructor(){ 
       this.$container = document.createElement("div");

    }

    render(){
        this.$container.appendChild(this.$sideBar);
        this.$container.appendChild(this.$courseArea);
        return this.$container;
    }
}

export{ Course }