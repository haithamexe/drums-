let btns = document.querySelectorAll("button.drum"); 
for(let i=0; i<btns.length;i++){
    btns[i].addEventListener("click", function(){
        clickhand(this.innerHTML);
        shadowthing(this.innerHTML);
    });
}

document.addEventListener("keydown",function(event){
    console.log(event);
});

document.addEventListener("keydown",function(event){
    clickhand(event.key);
    shadowthing(event.key);
});

function clickhand(key){
    switch(key){
        case "w":
            var audio = new Audio("sounds/tom1.mp3");
            audio.play();
            break;
        case "a":
            var audio = new Audio("sounds/tom2.mp3");
            audio.play();
            break;
        case "s":
            var audio = new Audio("sounds/tom3.mp3");
            audio.play();
            break;    
        case "d":
            var audio = new Audio("sounds/tom4.mp3");
            audio.play();
            break;    
        case "j":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break; 
        case "k":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break; 
        case "l":
            var audio = new Audio("sounds/kick.mp3");
            audio.play();
            break; 
        default:
    }   
}

function shadowthing(key){
    let pressedkey = document.querySelector("." + key +".drum");
    pressedkey.classList.toggle("pressed");
    setTimeout(()=>{
        pressedkey.classList.toggle("pressed");
    },100);
}