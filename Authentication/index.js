import { Login } from "./components/login.js";
import { SuccessfulLogin } from "./components/successfulLogin.js";
import { setScreen } from "./app.js";
// import { NavigationBar } from "./components/navigationBar.js";


firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    const successfulLogin = new SuccessfulLogin();
    setScreen(successfulLogin);
  } else {
    const login = new Login();
    setScreen(login);
    console.log(login);
  }
});
