let greetingName = document.getElementById("myName");

let getName = prompt("İsim Giriniz!");
greetingName.innerHTML = getName;

let currentDay = new Date().getDay();
let days;

switch (currentDay) {
    case 0:
        days = "Pazartesi";
        break;
    case 1:
        days = "Salı";
        break;
    case 2:
        days = "Çarşamba";
        break;
    case 3:
        days = "Perşembe";
        break;
    case 4:
        days = "Cuma";
        break;
    case 5:
        days = "Cumartesi";
        break;
    case 6:
        days = "Pazar";
        break;
}

myClock = function() {
    document.getElementById("myClock").innerHTML = `${new Date().getHours()} : ${new Date().getMinutes()} : ${new Date().getSeconds()}  ${days}` ;
}
var timeInterval = setInterval(myClock, 1000);
