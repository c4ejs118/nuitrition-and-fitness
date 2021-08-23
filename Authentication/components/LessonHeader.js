class LessonHeader{
    $container; 
    $title; 
    $avatar; 
    constructor(){
        this.$container = document.createElement("div");
        
        this.$title = document.createElement("span");
        this.$title.innerHTML = (`Enjoy your lesson here`);

        this.$avatar = document.createElement("img");
        this.$avatar.src = "";
        this.$avatar.alt = (`this is the logo`);
    }

    render = () => {
        this.$container.appendChild(this.$title);
        this.$container.appendChild(this.$avatar);
        return this.$container
    }
}

export {LessonHeader};