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
// add to calculate entry
/* 
* 1.get the element whare you want to add the dynamic HTML
* 2. create an element you want to add
* 3.if need add some class
* 4.set inner html it could be dynamic tamplate string
* 5. append the created element as a child of the parent
 */

function addCalculationEntry(areaType,area){
    const calculationEntry=document.getElementById('calculation-entry');
    const count=calculationEntry.childElementCount;
    const p=document.createElement('p');
    p.style.margin='5px';
    p.style.border='solid 2px gray';
    p.style.borderRadius='5px';
    p.style.fontSize='18px';
    p.innerHTML=`${count+1}.${areaType} ${area} cm<sup>2</sup>  <button class="btn btn-sm bg-blue-600 text-white">Convert m<sup>2</sup></button>`;
    calculationEntry.appendChild(p);
}