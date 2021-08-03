var countTime = new Date("Aug 3, 2022 16:20:25").getTime();
var timerId;

function start(){
var id = setInterval(function() {
  var now = new Date().getTime();
  var diff = countTime - now;
  var days = Math.floor(diff/(1000*60*60*24));
  var hours = Math.floor((diff%(1000*60*60*24))/(1000*60*60));
  var mins = Math.floor((diff%(1000*60*60))/(1000*60));
  var secs = Math.floor((diff % (1000 * 60)) / 1000);
  
  document.getElementById("timer").innerHTML = days+" Days "+hours+" hh "+mins+" mm "+secs+" ss ";
  if(diff <0){
    clearInterval(id);
    document.getElementById('timer').innerHTML = "EXPIRED";
  }
},1000);
  return id;
}

// stoping the timer
var btnstop = document.getElementById('stop');
 btnstop.onclick = function(){
    clearInterval(timerId);
 }

//reseting the timer
var btnreset = document.getElementById('reset');
  btnreset.onclick = function(){
  document.getElementById('timer').innerHTML = "00"+" Days "+"00"+" hh "+"00"+" mm "+"00"+" ss ";
   clearInterval(timerId);  
  }

//start the timer
var btnstart = document.getElementById('start');
btnstart.onclick = function(){
 timerId = start(); 
}