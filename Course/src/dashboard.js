let courseList = document.querySelector("#course--list");

renderCourse = (courseName, instructorName, courseDescription, openingDate, status) => {
    let li = document.createElement("li");
    let course = document.createElement("div");
    course.innerHTML= "course__list";

    //Course displayed header
    let courseHeader = document.createElement("div");
    courseHeader.className = "course__header";

    let firstHeading = document.createElement("h2");
    let firstHeadingLink = document.createElement("a");
    firstHeadingLink.innerHTML = courseName; 
    firstHeading.appendChild(firstHeadingLink);

    let secondHeading = document.createElement("h3");
    secondHeading.innerHTML = "Instructor: "; 
    let secondHeadingLink = document.createElement("a");
    secondHeadingLink.innerHTML = instructorName;
    secondHeading.appendChild(secondHeadingLink);
    
    courseHeader.appendChild(firstHeading);
    courseHeader.appendChild(secondHeading);
    course.appendChild(courseHeader);

    //Course displayed Center
    let courseCenter = document.createElement("div");
    courseCenter.className = "course__center";
    courseCenter.innerHTML = courseDescription;
    course.appendChild(courseCenter);


    //Course displayed Footer
    let courseFooter = document.createElement("div");
    courseFooter.className = "course__footer";
    let firstPara = document.createElement("p");
    let firstParaSpan = document.createElement("span");
    firstParaSpan.innerHTML = openingDate;
    firstPara.innerHTML = $(`Opening Date: ${firstPara.innerHTML}`);
    courseFooter.appendChild(firstPara);

    let secondPara = document.createElement("p"); 
    let secondParaSpan = document.createElement("span");
    secondParaSpan.innerHTML = status;
    secondPara.innerHTML = $(`Status: ${firstPara.innerHTML}`);
    courseFooter.appendChild(secondPara);

    course.appendChild(courseFooter);
}