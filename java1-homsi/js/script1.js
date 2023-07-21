var menuItem = document.getElementById("menu").getElementsByTagName("li");
// var menuItem = document.querySelectorAll("#menu li");

// var headLine = document.getElementById("text");
var headLine = document.querySelector("#text");

// var btn = document.getElementById("zar");
var btn = document.querySelector("#zar");

var myMenu = document.getElementById("menu");
var counter = 1;

// menuItem[0].innerHTML = "hello world";
// menuItem[1].innerHTML = "hello world";
// menuItem[2].innerHTML = "hello world";
// menuItem[3].innerHTML = "hello world";

// for (i = 0; i < menuItem.length; i++) {
//     menuItem[i].innerHTML = "hello world";
// }




// for (i = 0; i < menuItem.length; i++) {
//     menuItem[i].addEventListener("click", selectItem);
// }
myMenu.addEventListener("click", selectItem);
function selectItem(n) {
    // alert("it's Done");
    // headLine.innerHTML = "<< hello world >>"
    // headLine.innerHTML = this.innerHTML
    if (n.target.nodeName == "LI") {
        headLine.innerHTML = n.target.innerHTML;
        for (i = 0; i < menuItem.length; i++) {
            menuItem[i].classList.remove("selected");
            n.target.classList.add("selected");

        }

    };

}


// my practice until 28 minuts


// var menuItem = document.getElementById("menu").getElementsByTagName("li");
// var Header = document.getElementById("text");
// menuItem[0].innerHTML = "good joob";
// menuItem[1].innerHTML = "good";
// menuItem[2].innerHTML = " joob";
// menuItem[3].innerHTML = "fine";

// for (Y = 0; Y < menuItem.length; Y++){
// menuItem[Y].innerHTML="very well";
// }

// for (Y = 0; Y < menuItem.length; Y++) {
//     menuItem[Y].addEventListener("click", selectItem);
// }

// function selectItem(){
// Header.innerHTML = "my idea";
// }

// function selectItem() {
//     Header.innerHTML = this.innerHTML;

// }

btn.addEventListener("click", newItem);
function newItem() {

    // headLine.innerHTML = "hi every body";
    btn.innerHTML = " click here pls";
    // menuItem[1].innerHTML = " ///  java  ///";
    // myMenu.innerHTML = " ///  java  ///";
    // myMenu.innerHTML = "new line";
    // myMenu.innerHTML += "new line";
    // myMenu.innerHTML += "<li> new line </li>";
    myMenu.innerHTML += "<li> new line  " + counter + " </li>";
    // myMenu.innerHTML += "<li> new " + counter + "line   </li>";
    counter++;

}
