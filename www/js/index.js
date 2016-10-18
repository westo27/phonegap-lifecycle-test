window.localStorage.setItem(bottle, 500ml);
window.localStorage.setItem(notepad, writing);
window.localStorage.setItem(pen, blue);
window.localStorage.setItem(computer, dell);
window.localStorage.setItem(phone, motorola);

var phone = window.localStorage.getItem(phone);

//simple
window.alert(phone);

//better
$(function () {          
    $("#myText").text("hoover");
});