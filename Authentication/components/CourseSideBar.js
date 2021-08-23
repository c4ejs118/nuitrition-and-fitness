export class CourseHeader{
    $container;
    $logo; 
    $courseList; 
    $course1;
    $course2; 
    $course3; 
    $course4; 
    $course5; 

    constructor(){
        this.$container = document.createElement("div");

        this.$logo = document.createElement("img");

        this.$courseList = document.createElement("ul");

        this.$course1 = document.createElement("li");
        this.$course2 = document.createElement("li");
        this.$course3 = document.createElement("li");
        this.$course4 = document.createElement("li");
        this.$course5 = document.createElement("li");
    }

    render = () => {
        this.$courseList.appendChild(this.$course1);
        this.$courseList.appendChild(this.$course2);
        this.$courseList.appendChild(this.$course3);
        this.$courseList.appendChild(this.$course4);
        this.$courseList.appendChild(this.$course5);
    }
}