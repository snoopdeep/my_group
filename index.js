
for(var i=0;i<document.querySelectorAll(".individual").length;i++)
{
  document.querySelectorAll(".individual")[i].addEventListener("click",function(){

    makeSound(this.innerHTML);
  });
}
document.addEventListener("keydown",function(event){
 
  makeSound(event.key);

});

function makeSound(key)
{
  // if(playing.paused){
  //   return;
  // }
  // else{
  switch(key)
  {
    case 'a':var audio=new Audio("sounds/audio-6.mp3");
            audio.cloneNode().play();
              break;
    case 'r':var audio=new Audio("sounds/audio-1.mp3");
            audio.cloneNode().play();
              break;
     case 's':var audio=new Audio("sounds/audio-9.mp3");
              audio.play();
                break;
    case 'h':var audio=new Audio("sounds/audio-7.mp3");
            audio.play();
              break;
    case 'x':var audio=new Audio("sounds/audio-10.mp3");
            audio.play();
              break;
    case 'm':var audio=new Audio("sounds/audio-3.mp3");
            audio.play();
              break;
    case 'j':var audio=new Audio("sounds/audio-2.mp3");
            audio.play();
              break;
    case 'b':var audio=new Audio("sounds/audio-8.mp3");
            audio.play();
              break;
    case 'k':var audio=new Audio("sounds/audio-4.mp3");
            audio.play();
              break;
    case 'd':var audio=new Audio("sounds/audio-5.mp3");
            audio.play();
              break;
  }


}
