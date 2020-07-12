//Checking if every option is chosen
function formCheck() {

    //Creating variables used to check the values
    var background = ``
    var font = document.getElementById("font").value
    var appearance = ``
    var appearanceSpeed = document.getElementById("appearanceSpeed").value
    var appearanceDelay = document.getElementById("appearanceDelay").value
    var text = document.getElementById("text").value

    //Creating Booleans for deep check
    var select = true
    var change = false

    //Get values for radiobuttons
    var backgroundCheck = document.getElementsByName("background")
    for (var i = 0, j = backgroundCheck.length; i < j; i++) {
        if (backgroundCheck[i].checked)
            background = i
    }
    var appearanceCheck = document.getElementsByName("appearance")
    for (var i = 0, j = appearanceCheck.length; i < j; i++) {
        if (appearanceCheck[i].checked)
            appearance = i
    }

    //Check if every option is selected and displaying a message if not
    if (background === ``) {
        document.getElementById("bgErr").innerHTML = `Please select a background`
        select = false
    }
    else
        document.getElementById("bgErr").innerHTML = ``

    if (font == `` || font == null) {
        document.getElementById("fErr").innerHTML = `Please select a font`
        select = false
    }
    else
        document.getElementById("fErr").innerHTML = ``

    if (appearance === ``) {
        document.getElementById("aErr").innerHTML = `Please select an appearance direction`
        select = false
    }
    else
        document.getElementById("aErr").innerHTML = ``

    if (appearanceSpeed == `` || appearanceSpeed == null) {
        document.getElementById("asErr").innerHTML = `Please select an appearance speed`
        select = false
    }
    else
        document.getElementById("asErr").innerHTML = ``

    if (appearanceDelay == `` || appearanceDelay == null) {
        document.getElementById("adErr").innerHTML = `Please select an appearance delay`
        select = false
    }
    else
        document.getElementById("adErr").innerHTML = ``

    if (text == `` || text == null) {
        document.getElementById("txtErr").innerHTML = `Please enter a message`
        select = false
    }
    else
        document.getElementById("txtErr").innerHTML = ``


    //Checking if every option was selected
    if (select == true) {

        //Checking if the source code was altered in order to give an out of range answer
        if (background < 0 || background > 7 ||  font < 0 || font > 6 || appearance < 0 || appearance > 2 || appearanceSpeed < 0 || appearanceSpeed > 10 || appearanceDelay < 0 || appearanceDelay > 10 || text.length > 100) {
            change = true
        }

        //Passing variables to the link generation function
        linkChange(background, font, appearance, appearanceSpeed, appearanceDelay, text, change)
    }

    //If not every option was selected page automatically scrolls back to the top
    else
        window.scrollTo(0, 0)
}


//Link generation function
function linkChange(bg, f, a, as, ad, t, ch) {

    //If the source code was altered a message will be displayed
    if (ch == true) {

        //In one of three cases the visitor will be redirected to Never Gonna Give You up instead of recieving a message
        if (Math.floor(Math.random() * 3) == 0)
            window.location.replace(`https://youtu.be/dQw4w9WgXcQ`)

        //The visitor will recieve a message
        else {
            document.getElementById("resLink").innerHTML = `Funny man you are, changing HTML source code you do.`
            document.getElementById("resLink").removeAttribute("href")
        }
    }

    //Generate Link and enter it into the result bar
    else {
        var link = `${window.location.href}/view?op=${bg},${f},${a},${as},${ad}&msg=${encodeURIComponent(t)}`
        document.getElementById("resLink").innerHTML = link
        document.getElementById("resLink").href = link
    }
}
