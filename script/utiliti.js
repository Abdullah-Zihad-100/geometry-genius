function calcualteParallelogramArea(){
   const base=getInputValue('parallelogram-base');
const height=getInputValue('parallelogram-heigth');
const area=base*height
setElementTextValue('parallelogram-area',area)
}


// reusebale function ---> reduce deplicate code 

function getInputValue(fieldId){
    const inputField=document.getElementById(fieldId);
    const inputValueText=inputField.value;
    const value=parseFloat(inputValueText);
    return value;
}



// reuseble set span ,p,div,etc,text
function setElementTextValue(elementId,area){
    const element=document.getElementById(elementId);
    element.innerText=area

}