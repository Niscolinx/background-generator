// function move(direction){
//     var whatHappens;
//     switch (direction){
//     case "forward":
//     whatHappens = "you are going to the far east, please do turn back and reconsider";
//     break;

//     case "backward":
//     whatHappens = "you are walking into a trap, please ask for the corrections before you go to any place next time";
//     break;

//     case "right":
//     whatHappens = "you must be a fool for not taking the correct instructions that are gonna enable you to follow the right path";
//     break;

//     case "left":
//     whatHappens = "Wowwwww, you just got it right, seems as if you finally listened to the instructions";
//     break;
//     default: "please type in the right keyword to continue, you moron";
//     }
//     return whatHappens;
// }

var color1 = document.querySelector("#color1");
var color2 = document.querySelector("#color2");
var body = document.querySelector("body");
var displaycolor = document.querySelector("h3 span");

function setGradient(){
    body.style.background = "linear-gradient(to right, "
    + color1.value +
     ","
      + color2.value + 
      ")";
      displaycolor.textContent = body.style.background + ";"
};

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

const add = (a,b) => a * b;

