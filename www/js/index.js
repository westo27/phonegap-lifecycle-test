//window.localStorage.setItem(bottle, ml);
//window.localStorage.setItem(notepad, writing);
//window.localStorage.setItem(pen, blue);
//window.localStorage.setItem(computer, dell);
//window.localStorage.setItem(phone, motorola);

var key = "pen";
var value = "blue";

window.localStorage.setItem( key, value );

var value = window.localStorage.getItem(key);

//simple
window.alert(value);

//better
$(function () {          
    $("#myText").text(value);
});