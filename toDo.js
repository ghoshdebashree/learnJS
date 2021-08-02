var ul = document.getElementById('ul');
var text = document.getElementById('text');

button.onclick = function(){
var li = document.createElement('li');
li.innerHTML = text.value;
ul.appendChild(li);
var btn = document.createElement('button');
btn.innerHTML ="remove";
ul.appendChild(btn);
  
btn.onclick = function(){
  ul.removeChild(li);
  ul.removeChild(btn);
}
btn.setAttribute("style", "width: 80px; height: 40px; background-color: lightgray; font-size:15px;  font-family:'Montserrat', sans-serif; margin:20px;");
  if(text.value == ""){
     ul.removeChild(li);
     ul.removeChild(btn);
  }
}