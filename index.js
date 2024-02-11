var numberOfDrums = document.querySelectorAll(".drum").length


for (var i = 0; i < numberOfDrums; i++){

    document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);

    function handleClick(){

    var drumsInnerHTML = this.innerHTML;

    sounds(drumsInnerHTML);
    buttonAnimation(drumsInnerHTML);
    }


}

document.addEventListener("keypress", handlePress);


function handlePress(event){
    
    sounds(event.key);
    buttonAnimation(event.key);
}   

function sounds(key){
   
    switch (key) {
           case "w":
               var tom1 = new Audio("sounds/tom-1.mp3")
               tom1.play();
               break;
           case "a":
               var tom2 = new Audio("sounds/tom-2.mp3")
               tom2.play();
               break;
           case "s":
               var tom3 = new Audio("sounds/tom-3.mp3")
               tom3.play();
               break;
           case "d":
               var tom4 = new Audio("sounds/tom-4.mp3")
               tom4.play();
               break;
           case "j":
               var snare = new Audio("sounds/snare.mp3")
               snare.play();
               break;
           case "k":
               var crash = new Audio("sounds/crash.mp3")
               crash.play();
               break;
           case "l":
               var kick = new Audio("sounds/kick-bass.mp3")
               kick.play();
               break;
       
           default: console.log(key);
   }
}

function buttonAnimation(currentKey){
    var animation = document.querySelector("." + currentKey);
    animation.classList.add("pressed");

    setTimeout(function(){
        animation.classList.remove("pressed");
    }, 100)
}












/**
 * var audio = new Audio("sounds/tom-1.mp3")
 * function handleClick(){

    audio.play();

} **/