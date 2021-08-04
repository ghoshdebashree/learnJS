var btnstart = document.getElementById("start");
var btnstop = document.getElementById("stop");
var btnreset = document.getElementById("reset");
var t;
var h1 = document.querySelector('h1');
var secs = 0;
var mins = 0;
var hours = 0;
btnstart.onclick = function(){
  t = setInterval(timer,100);
 }

btnstop.onclick = function(){
  clearInterval(t);
}

btnreset.onclick = function(){
  h1.textContent = "00:00:00"
  mins =0;
  secs =0;
  hours =0;
}
function timer(){
  secs++;
  if(secs >=60){
    secs = 0;
    mins++;
    if(mins >=60){
    mins = 0;
    hours++;
  }
}
  h1.textContent =(hours?(hours>9?hours:"0"+hours) :"00") +":"+ (mins?( mins>9?mins:"0"+mins):"00") +":"+ (secs? (secs>9?secs:"0"+secs):"00");
}