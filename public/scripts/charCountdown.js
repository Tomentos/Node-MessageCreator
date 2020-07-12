//Displaying the remaining characters for the textarea
function charCountdown() {

    //Creating variables used to check the values
    var max = document.getElementById("text").maxLength
    var chars = document.getElementById("text").value.length

    //Calculating and setting the counters new value
    document.getElementById("textCount").value = `${max - chars} / ${max}`
}
