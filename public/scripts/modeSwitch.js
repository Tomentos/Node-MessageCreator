//Checking if a variable already exists in the Local Storage
if (!localStorage.getItem("mode")) {

    //Setting the default theme if no value is found in the Local Storage
    localStorage.setItem("mode", "dark")
    setDark()
}  



//Loading the correct theme when switching / loading the page, Default View
function loadTheme(theme, arrow) {

    //Checking if the theme is set to dark
    if (localStorage.getItem("mode") == `dark`) {

        //Checking if the theme variable was recieved to set the theme
        if (theme)
            setDark()

        //Checking if the arrow variable was recieved to set the arrows
        if (arrow)
            setDarkArrow()
    }

    else if (localStorage.getItem("mode") == `light`) {

        //Checking if the theme variable was recieved to set the theme
        if (theme)
            setLight()

        //Checking if the arrow variable was recieved to set the arrows
        if (arrow)
            setLightArrow()
    }
}

//Changing the theme, Default View
function modeSwitch(theme, arrow) {

    //Checking if the theme is set to dark
    if (localStorage.getItem("mode") == `dark`) {

        //Checking if the theme variable was recieved to change the theme
        if (theme)
            setLight()

        //Checking if the arrow variable was recieved to change the arrows
        if (arrow)
            setLightArrow()

        //Changing the local storage variable to light
        localStorage.setItem("mode", "light")
    }

    //Checking if the theme is set to light
    else if (localStorage.getItem("mode") == `light`) {

        //Checking if the theme variable was recieved to change the theme
        if (theme)
            setDark()

        //Checking if the arrow variable was recieved to change the arrows
        if (arrow)
            setDarkArrow()

        //Changing the local storage variable to dark
        localStorage.setItem("mode", "dark")
    }
}



//Function responsible for changing the theme to dark
function setDark() {

    //Setting the background colors to dark
    document.documentElement.style.setProperty("--bgColor", "#161616")
    document.documentElement.style.setProperty("--hdColor", "#242424")
    document.documentElement.style.setProperty("--hvColor", "#323232")

    //Setting the font colors to light
    document.documentElement.style.setProperty("--txtColor", "lightgray")
    document.documentElement.style.setProperty("--txtLight", "#afafaf")
    document.documentElement.style.setProperty("--txtLink", "lightseagreen")

    //Switching the modeswitch icons to the Lightmode Button
    document.getElementById("mode").classList.remove("iconLight")
    document.getElementById("mode").classList.add("iconDark")
}

//Function responsible for changing the arrows to dark
function setDarkArrow() {

    //Switching the arrow icons to light
    document.getElementById("arrow0").src = "images/arrow0Light.svg"
    document.getElementById("arrow1").src = "images/arrow1Light.svg"
    document.getElementById("arrow2").src = "images/arrow2Light.svg"
}

//Function responsible for changing the theme to light
function setLight() {

    //Setting the background colors to light
    document.documentElement.style.setProperty("--bgColor", "white")
    document.documentElement.style.setProperty("--hdColor", "#efefef")
    document.documentElement.style.setProperty("--hvColor", "#dfdfdf")

    //Setting the font colors to dark
    document.documentElement.style.setProperty("--txtColor", "#2c2c2c")
    document.documentElement.style.setProperty("--txtLight", "#242424")
    document.documentElement.style.setProperty("--txtLink", "lightskyblue")

    //Switching the modeswitch icons to the Darkmode Button
    document.getElementById("mode").classList.remove("iconDark")
    document.getElementById("mode").classList.add("iconLight")
}

//Function responsible for changing the arrows to light
function setLightArrow() {

    //Switching the arrow icons to dark
    document.getElementById("arrow0").src = "images/arrow0Dark.svg"
    document.getElementById("arrow1").src = "images/arrow1Dark.svg"
    document.getElementById("arrow2").src = "images/arrow2Dark.svg"
}
