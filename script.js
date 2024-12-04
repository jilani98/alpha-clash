// function play(){
//     const homeSection=document.getElementById("home-screen");
//   homeSection.classList.add("hidden");
//   const playGround=document.getElementById("play-ground")
//   playGround.classList.remove("hidden")
// }



// button keyPress 
function handleClickButton(event){
    const playerPressed=event.key
    console.log(playerPressed)

    // stop the game
    if(playerPressed === "Escape"){
        gameOver();
    }


    console.log("player pressed", playerPressed)
    const currentAlphabet=document.getElementById("current-alphabet");
    const cuurentAlpha=currentAlphabet.innerText;
    const expectedAlpha=cuurentAlpha.toLocaleLowerCase();
    if(playerPressed === expectedAlpha){
    //   const currentScoreElement = document.getElementById("current-score");
    //   const currentScoreText=currentScoreElement.innerText;
    //   const currentScore=parseInt(currentScoreText);
    //   
    //   currentScoreElement.innerText=newScore;
    const currentScore=getTextElementValueById("current-score");
    const updatedScore=currentScore+1;
    setTextElementById("current-score", updatedScore)



        continuegame();
        removeBackground(expectedAlpha);
    }
    else{
       
        // const currentlifeText=currentLifeElement.innerText;
        // const currentLife=parseInt(currentlifeText);
        // const newlife=currentLife -1;
        // currentLifeElement.innerText=newlife;
         const currentLife=document.getElementById("current-life").innerText;

        const updatedLife=parseInt(currentLife)-1;
        setTextElementById("current-life",updatedLife);
        if(updatedLife === 0){
            console.log("game over")
            gameOver()
        }


    }
    
}
document.addEventListener("keyup",handleClickButton);

function continuegame(){
    const alphabet=getRandomNumber();

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
    hideElement("final-score")
    showElement("play-ground");
    setTextElementById("current-life", 5)
    setTextElementById("current-score", 0)
    continuegame();
}

function gameOver(){
    hideElement("play-ground");
    showElement("final-score");
    const lastScore =getTextElementValueById("current-score");
    setTextElementById("game-score",lastScore);
    const currentalphabet=getElementByTextId("current-alphabet");
    
    removeBackground(currentalphabet);
}

function getElementByTextId(elementId){
    
    const element=document.getElementById(elementId);
    const text=element.innerText;

    return text;
}