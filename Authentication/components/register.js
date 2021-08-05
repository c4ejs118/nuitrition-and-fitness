import { InputGroup } from "./inputGroup.js";

class RegisterForm{
    $container;
    $title;
    $formRegister;
    $inputGroupDisplayName;
    $inputGroupEmail;
    $inputGroupPassword;
    $inputGroupConfirmPassword;
    $btnSubmit;
    constructor(){
        this.$container = document.createElement("div");
        this.$container.classList.add("center", "h-screen", "flex-col", "form-desire");

        this.$formRegister = document.createElement("form");
        this.$formRegister.addEventListener("submit", this.handleSubmit);

        this.$title = document.createElement("h1");
        this.$title.style.margin = "10px 0";
        this.$title.innerHTML = "Sign up"

        this.$inputGroupDisplayName = new InputGroup(
            "text",
            "Username",
            "userName"
        );

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

        this.$inputGroupConfirmPassword = new InputGroup(
            "password",
            "Confirm password",
            "password"
        );

        this.$btnSubmit = document.createElement("button");
        this.$btnSubmit.innerHTML = "Register"
        this.$btnSubmit.type = "submit";
    }

    handleSubmit = (evt) => { 
        evt.preventDefault();

        //validate form 
        const displayName = this.$inputGroupDisplayName.getInputValue(); 
        const email = this.$inputGroupEmail.getInputValue(); 
        const password = this.$inputGroupPassword.getInputValue(); 
        const confirmPassword = this.$inputGroupConfirmPassword.getInputValue(); 


        if(!displayName) this.$inputGroupDisplayName.setError("Display name cannot be empty")
        else this.$inputGroupDisplayName.setError(); 

        if(!email) this.$inputGroupEmail.setError("Email cannot be empty");
        else this.$inputGroupEmail.setError(); 

        if(password.length < 6) this.$inputGroupPassword.setError("Password length must be greater or equal than 6 letters");
        else this.$inputGroupPassword.setError(); 
        
        if(confirmPassword !== password) this.$inputGroupConfirmPassword.setError("Confirm password not matched")
        else this.$inputGroupConfirmPassword.setError(); 
    }

    render = () => { 
        this.$formRegister.appendChild(this.$inputGroupDisplayName.render()); 
        this.$formRegister.appendChild(this.$inputGroupEmail.render()); 
        this.$formRegister.appendChild(this.$inputGroupPassword.render()); 
        this.$formRegister.appendChild(this.$inputGroupConfirmPassword.render()); 
        this.$formRegister.appendChild(this.$btnSubmit); 

        this.$container.appendChild(this.$title);
        this.$container.appendChild(this.$formRegister);

        return this.$container;
    }
} 

export { RegisterForm }