
import { setScreen } from "../app.js";
class SuccessfulLogin {
  $container;
  $title;
  $linkToMainWebsite; 

  $btnToMainWebsite;
  $btnToCourse; 
  $btnLogout;

  constructor() {
    this.$container = document.createElement("div");
    this.$container.style.width = "400px";
    this.$container.style.margin = "auto";
    this.$container.classList.add("authen-form", "h-screen", "flex-col", "success-form");

    this.$title = document.createElement("div");
    this.$title.innerHTML = (`Congratulation, you are in!`);
    this.$title.classList.add("title-style","successful-title");
    this.$title.style.marginBottom = "5px";

    this.$linkToMainWebsite = document. createElement("a");
    this.$linkToMainWebsite.href = "../main-profile.html";
    this.$linkToMainWebsite.classList.add("successful-link");
    

    this.$btnToMainWebsite = document.createElement("button");
    this.$btnToMainWebsite.innerHTML = "Go to main website";
    this.$btnToMainWebsite.classList.add("successful-btn");

    this.$btnToCourse = document.createElement("button");
    this.$btnToCourse.innerHTML = "Go to your Course";
    this.$btnToCourse.classList.add("successful-btn");


    this.$btnLogout = document.createElement("button");
    this.$btnLogout.addEventListener("click", this.handleLogout);
    this.$btnLogout.classList.add("successful-btn");
    this.$btnLogout.innerHTML = "Logout";
  }

  handleLogout = () => {
    firebase.auth().signOut();
  };


  render  = () => {
    this.$container.appendChild(this.$title);
    this.$container.appendChild(this.$linkToMainWebsite);
    this.$linkToMainWebsite.appendChild(this.$btnToMainWebsite);
    this.$container.appendChild(this.$btnToCourse);
    this.$container.appendChild(this.$btnLogout);
    return this.$container;
  }
}

export { SuccessfulLogin };
