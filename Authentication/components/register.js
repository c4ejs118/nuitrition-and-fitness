import { InputGroup } from "./inputGroup.js";
import { Login } from "./login.js";
import { setScreen } from "../app.js";

class Register {
  $container;
  $title;

  $formRegister;

  $inputGroupEmail;
  $inputGroupDisplayName;
  $inputGroupPassword;
  $inputGroupConfirmPassword;

  $feedbackMessage;

  $btnSubmit;
  $linkToLogin;

  constructor() {
    this.$container = document.createElement("div");
    this.$container.style.width = "400px";
    this.$container.style.margin = "auto";
    this.$container.classList.add("authen-form", "h-screen", "flex-col");
    this.$title = document.createElement("h3");
    this.$title.innerHTML = "Register";
    this.$title.classList.add("title-style");

    this.$formRegister = document.createElement("form");
    this.$formRegister.addEventListener("submit", this.handleSubmit);
    this.$formRegister.classList.add("form");
    this.$inputGroupEmail = new InputGroup("email", "Email", "email");
    this.$inputGroupEmail.$input.placeholder = "Enter your email";
    this.$inputGroupDisplayName = new InputGroup("text","Display name","displayName");
    this.$inputGroupDisplayName.$input.placeholder = "Enter your name"
    this.$inputGroupPassword = new InputGroup("password","Password","password");
    this.$inputGroupPassword.$input.placeholder = "Enter your password"
    this.$inputGroupConfirmPassword = new InputGroup("password","Confirm Password","confirmPassword");
    this.$inputGroupConfirmPassword.$input.placeholder = "Confirm your password again"
    this.$feedbackMessage = document.createElement("div");
    this.$btnSubmit = document.createElement("button");
    this.$btnSubmit.type = "submit";
    this.$btnSubmit.innerHTML = "Register";
    this.$btnSubmit.classList.add("btn-submit");
    this.$linkToLogin = document.createElement("div");
    this.$linkToLogin.classList.add("btn-link");
    this.$linkToLogin.innerHTML = "Back to Login";
    this.$linkToLogin.addEventListener("click", this.moveToLogin);
  }

  moveToLogin = () => {
    const login = new Login();
    setScreen(login);
  };

  handleSubmit = (evt) => {
    evt.preventDefault();

    // Validate form
    const email = this.$inputGroupEmail.getInputValue();
    const displayName = this.$inputGroupEmail.getInputValue();
    const password = this.$inputGroupPassword.getInputValue();
    const confirmPassword = this.$inputGroupConfirmPassword.getInputValue();

    this.$inputGroupEmail.setError(null);
    this.$inputGroupPassword.setError(null);
    this.$inputGroupDisplayName.setError(null);
    this.$inputGroupConfirmPassword.setError(null);

    if (!email) {
      this.$inputGroupEmail.setError("Email cannot be empty!");
    }
    if (!displayName) {
      this.$inputGroupDisplayName.setError("Display name cannot be empty!");
    }
    if (password.length < 6) {
      this.$inputGroupPassword.setError(
        "Password length must be greater or equal than 6!"
      );
    }
    if (confirmPassword !== password) {
      this.$inputGroupConfirmPassword.setError("Confirm password not matched!");
    }

    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        this.$feedbackMessage.innerHTML =
          "Register successfully! Please check your inbox";
        firebase.auth().currentUser.sendEmailVerification();
        this.$inputGroupEmail.setInputValue("");
      })
      .catch((error) => {
        this.$feedbackMessage.innerHTML = error.toString();
        console.log(error);
      });
  };

  render() {
    this.$formRegister.appendChild(this.$inputGroupEmail.render());
    // this.$formRegister.appendChild(this.$feedbackMessage);
    this.$formRegister.appendChild(this.$inputGroupDisplayName.render());
    this.$formRegister.appendChild(this.$inputGroupPassword.render());
    this.$formRegister.appendChild(this.$inputGroupConfirmPassword.render());
    this.$formRegister.appendChild(this.$btnSubmit)

    this.$container.appendChild(this.$title);
    // this.$container.appendChild(this.$feedbackMessage);
    this.$container.appendChild(this.$formRegister);
    // this.$container.appendChild(this.$btnSubmit)
    this.$container.appendChild(this.$linkToLogin);
    return this.$container;
  }
}

export { Register };
