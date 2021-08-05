import { Register } from "./components/register.js/index.js.js";
import {Login} from "./components/login.js/index.js.js"

const web = document.getElementById("web");

// const register = new RegisterForm();
// web.appendChild(register.render());

const login = new Login(); 
web.appendChild(login.render());