// function play(){
//     const homeSection=document.getElementById("home-screen");
//   homeSection.classList.add("hidden");
//   const playGround=document.getElementById("play-ground")
//   playGround.classList.remove("hidden")
// }

function continuegame(){
    const alphabet=getRandomNumber();
    console.log(alphabet);
    const currentAlphabet=document.getElementById("current-alphabet");
    currentAlphabet.innerText=alphabet;
    
    addBackgroundColor(alphabet);

}

function addBackgroundColor(elementId){
    const element=document.getElementById(elementId);
    element.classList.add("bg-orange-400");


}
 function removeBackground(elementId){
    const element=document.getElementById(elementId);
    element.classList.remove("bg-orange-400");
 }

function play(){
    hideElement("home-screen");
    showElement("play-ground");
    continuegame();
}

