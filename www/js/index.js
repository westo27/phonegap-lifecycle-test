//window.localStorage.setItem(bottle, ml);
//window.localStorage.setItem(notepad, writing);
//window.localStorage.setItem(pen, blue);
//window.localStorage.setItem(computer, dell);
//window.localStorage.setItem(phone, motorola);

//pen
var penValue = "blue";
window.localStorage.setItem("pen",penValue);
var penValue = window.localStorage.getItem("pen");

//better text output
$(function () {          
    $("#myText").text(penValue);
});

window.alert(window.localStorage.length);