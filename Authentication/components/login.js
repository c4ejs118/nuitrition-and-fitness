import { InputGroup } from "./inputGroup.js";

class Login{
    $container;
    $title;
    $formLogin;
    $inputGroupEmail;
    $inputGroupPassword;
    $btnSubmit;
    constructor(){
        this.$container = document.createElement("div");
        this.$container.classList.add("center", "h-screen", "flex-col", "form-desire");

        this.$formLogin = document.createElement("form");
        this.$formLogin.addEventListener("submit", this.handleSubmit);

        this.$title = document.createElement("h1");
        this.$title.style.margin = "10px 0";
        this.$title.innerHTML = "Login"

        

        this.$inputGroupEmail = new InputGroup(
            "email",
            "Email",
            "email"
        );

        this.$inputGroupPassword= new InputGroup(
            "password",
            "Password",
            "password"
        );


        this.$btnSubmit = document.createElement("button");
        this.$btnSubmit.innerHTML = "Login"
        this.$btnSubmit.type = "submit";
    }

    handleSubmit = (evt) => { 
        evt.preventDefault();

        //validate form 
        const email = this.$inputGroupEmail.getInputValue(); 
        const password = this.$inputGroupPassword.getInputValue(); 
 
        if(!email) this.$inputGroupEmail.setError("Email cannot be empty");
        else this.$inputGroupEmail.setError(); 

        if(password.length < 6) this.$inputGroupPassword.setError("Password length must be greater or equal than 6 letters");
        else this.$inputGroupPassword.setError(); 
        

    }

    render = () => { 
        this.$formLogin.appendChild(this.$inputGroupEmail.render()); 
        this.$formLogin.appendChild(this.$inputGroupPassword.render()); 
        this.$formLogin.appendChild(this.$btnSubmit); 

        this.$container.appendChild(this.$title);
        this.$container.appendChild(this.$formLogin);

        return this.$container;
    }
} 

export { Login }