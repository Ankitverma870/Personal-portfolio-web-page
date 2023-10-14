function myFunction(){
  var element= document.body;
  element.classList.toggle("dark-mode")
}
var messageArr=["WELCOME TO MY PORTFOLIO"];

var textPostion=0;
var speed = 200;
typewrite=() => {
document.querySelector("#jobtitle").innerHTML=messageArr[0].substring(0,textPostion);
    if(textPostion ++ !=messageArr[0].length)
       setTimeout(typewrite,speed)
  } 
 window.addEventListener("load",typewrite);

