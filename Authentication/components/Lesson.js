import { LessonHeader } from "./LessonHeader";
class Lesson {
    $container;
    $lessonHeader; 
    constructor(){
        this.$container = document.createElement("div");

        this.$lessonHeader = new LessonHeader(); 
    }

    render = () => {
        this.$container.appendChild(this.$lessonHeader.render);
        return this.$container;
    }
}