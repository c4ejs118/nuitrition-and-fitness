class NavigationBar{
    $container; 

    $logo; 
    $logoLink; 
    $logoImage;

    $menuList; 
    $menuListItem; 
    $menuListItemHome; 
    $menuListItemAboutUs; 
    $menuListItemBlog; 
    $menuListItemShop; 

    $navAuthentication;
    $navBtnSignIn; 
    $navBtnSignUp;  
    constructor(){
        this.$container = document.createElement("nav");
        this.$container.classList.add("navbar"); 

        this.$logo = document.createElement("div");
        this.$logo.classList.add("nav__logo");
        this.$logoLink = document.createElement("a");
        this.$logoLink.href = "../index.html";
        this.$logoImage = document.createElement("img");
        this.$logoImage.src = "../pictures/website_logo.png";
        this.$logoImage.width = "150px";

        this.$navMenuList = document.createElement("div");
        this.$navMenuList.classList.add("nav__menuList");
        this.$navMenuListItem = document.createElement("ul");
        this.$navMenuListItemHome = new Item("Home");
        this.$navMenuListItemAboutUs = new Item("About us");
        this.$navMenuListItemBlog = new Item("Blog");
        this.$navMenuListItemShop = new Item("Shop");

        this.$navAuthentication = document.createElement("div");
        this.$navAuthentication.classList.add("nav__authentication");
        this.$navBtnSignIn = document.createElement("button");
        this.$navBtnSignIn.innerHTML = "Sign in";
        this.$navBtnSignIn.id =  "sign-in";
        this.$navBtnSignUp = document.createElement("button");
        this.$navBtnSignUp.innerHTML = "Sign up";
        this.$navBtnSignUp.id =  "sign-up";
    }

    render = () => {     
        this.$logoLink.appendChild(this.$navLogoImage);
        this.$logo.appendChild(this.$navLogoLink);
  
        this.$navMenuListItem.appendChild(this.$navMenuListItemHome.render());
        this.$navMenuListItem.appendChild(this.$navMenuListItemAboutUs.render());
        this.$navMenuListItem.appendChild(this.$navMenuListItemBlog.render());
        this.$navMenuListItem.appendChild(this.$navMenuListItemShop.render());
        this.$navMenuList.appendChild(this.$navMenuListItem);

        this.$navAuthentication.appendChild(this.$navBtnSignIn);
        this.$navAuthentication.appendChild(this.$navBtnSignUp);

        this.$container.appendChild(this.$logo);
        this.$container.appendChild(this.navMenuList);
        this.$container.appendChild(this.$navAuthentication);

        return this.$container;
    }
}

export {NavigationBar};