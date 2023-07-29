"Use Strict"
var position = 70;
var time = setInterval(func,35);
var box = document.getElementById("my_box_realtime");
function func(){
  if(position == 0){
    clearIntervar(time);
  }else{
    position--;
    box.style.right = position + "px";
    box.style.bottom = position + "px";
  }
}