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