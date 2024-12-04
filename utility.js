function hideElement(elementId){
    const element=document.getElementById(elementId);
    element.classList.add("hidden")
}
function showElement(elementId){
    const element=document.getElementById(elementId);
    element.classList.remove("hidden")
}
function getRandomNumber(){
const alphabetString='abcdefghijklmnopqrstuvwxyz';
const alphabets=alphabetString.split('');
const randomNumber=Math.random() * 25;
const index=Math.round(randomNumber);
const alphabet=alphabets[index];

return alphabet;
}

function getTextElementValueById(elementId){
    const element= document.getElementById(elementId);
    const elementValueText=element.innerText;
    const value =parseInt(elementValueText);
    return value;

    
}
function setTextElementById(elementId,value){
    const element=document.getElementById(elementId);
    element.innerText=value;

}