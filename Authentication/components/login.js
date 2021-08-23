import { InputGroup } from "./inputGroup.js";
import { setScreen } from "../app.js";
import { Register } from "./register.js";

class Login {
  $container;
  $title;
  $inputGroupEmail;
  $inputGroupPassword;
  $form;
  $button;
  $borderLine;
  $feedbackMessage;
  $linkToRegister;  

  constructor() {
    this.$container = document.createElement("div");
    this.$container.style.width = "400px";
    this.$container.style.margin = "auto";
    this.$container.classList.add("authen-form", "h-screen", "flex-col");
    this.$title = document.createElement("h3");
    this.$title.innerHTML = "Login";
    this.$title.classList.add("title-style");
    this.$title.style.marginBottom = "5px";
    this.$inputGroupEmail = new InputGroup("email", "Email", "email");
    this.$inputGroupEmail.$input.placeholder = "Enter your Email here";
    this.$inputGroupPassword = new InputGroup("password","Password","password");
    this.$inputGroupPassword.$input.placeholder = "Enter your Password here";
    this.$form = document.createElement("form");
    this.$form.addEventListener("submit", this.handleSubmit);
    this.$form.classList.add("form");
    this.$btnSubmit = document.createElement("button");
    this.$btnSubmit.type = "submit";
    this.$btnSubmit.innerHTML = "Login";
    this.$btnSubmit.classList.add("btn-submit");
    this.$borderLine = document.createElement("h5");
    this.$borderLine.innerHTML = "----------or----------";
    this.$linkToRegister = document.createElement("div");
    this.$linkToRegister.innerHTML = "Create an account now";
    this.$linkToRegister.classList.add("btn-link");
    this.$linkToRegister.addEventListener("click", this.moveToRegister);
  }

  moveToRegister = () => {
    const register = new Register();
    setScreen(register);
  };

  handleSubmit = (evt) => {
    evt.preventDefault();
    const email = this.$inputGroupEmail.getInputValue();
    const password = this.$inputGroupPassword.getInputValue();
    //TODO Validation
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((userInfo) => {
        console.log(userInfo);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    this.$form.appendChild(this.$inputGroupEmail.render());
    this.$form.appendChild(this.$inputGroupPassword.render());
    this.$form.appendChild(this.$btnSubmit);

    this.$container.appendChild(this.$title);
    this.$container.appendChild(this.$form);
    this.$container.appendChild(this.$borderLine);
    this.$container.appendChild(this.$linkToRegister);
   
    return this.$container;
  }
}

export { Login };
