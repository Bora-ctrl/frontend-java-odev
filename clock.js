let userName = prompt("Adınız nedir?") 
let myName = document.querySelector('#myName') 
myName.innerHTML = `${userName.toUpperCase()}` 

function showTime() {

var days = ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"];

var d = new Date();

var time = document.querySelector('#myClock')

time.innerHTML = `${say(d.getHours())}:${say(d.getMinutes())}:${say(d.getSeconds())} ${days[d.getUTCDay()]}`
setTimeout(showTime, 1000); 
}
function say(x){
    if(x <10){
        x = "0"+x;
    }
    return x
}
showTime(); 

