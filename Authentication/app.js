let currentScreen = null;
const app = document.getElementById("app");
const navBar = document.getElementById("navBar");

const setScreen = (screen) => {
  if (currentScreen) {
    app.removeChild(currentScreen);
  }
  currentScreen = app.appendChild(screen.render());
};

const setNavBar = (navBarScreen) => {
    navBar.appendChild(navBarScreen.render());
}

export { setScreen, setNavBar};
