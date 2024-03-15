// Basic simple code 
// Triangle --------------
function calcualteTriangleArea(){
//   get triangle base value 
const baseField=document.getElementById('triangle-base');
const baseValueText=baseField.value;
const base=parseFloat(baseValueText);
// get triangle height value 
const heightField=document.getElementById('triangle-height');
const heightValueText=heightField.value;
const height=parseFloat(heightValueText);
// calculate area 
const area=0.5*height*base;
// valid input
if(isNaN(height)||isNaN(base)){
    alert('enter valid number')
    return;
}
// get area value
const triangleArea=document.getElementById('triangle-area');
triangleArea.innerText=area;

addCalculationEntry('Triangle',area)

// Rectangle --------------
}
function calcualteRactangleArea(){
    // get withe
 const widthField=document.getElementById('ractangle-width');
 const widthValueText=widthField.value;
 const width=parseFloat(widthValueText);
// get length
const lengthField=document.getElementById('ractangle-length');
const lengthValueText=lengthField.value;
const length=parseFloat(lengthValueText);
// caculate arae
const area=width*length;
// valid input
if(isNaN(width)||isNaN(length)){
    alert('enter valid number')
    return;
}
// show recatangle area
const recatangleArea=document.getElementById('rectangle-area');
recatangleArea.innerText=area;
addCalculationEntry('Recatangle',area)

}
// New function Mathod Use short code ----->
// parallelogram---------------
function calcualteParallelogramArea(){
   const base=getInputValue('parallelogram-base');
const height=getInputValue('parallelogram-heigth');
const area=base*height
// valid input 
if(isNaN(base)||isNaN(height)){
    alert('enter valid number')
    return;
}
setElementTextValue('parallelogram-area',area);
// add to calculate 
addCalculationEntry('Parallelogram',area)

}

// ellipse-------------------->
function calcualteellipseArea(){
const a=getInputValue('ellipse-a');
const b=getInputValue('ellipse-b');
const area=3.1415*a*b;
// valid input 
if(isNaN(a)||isNaN(b)){
    alert('enter valid number')
    return;
}
setElementTextValue('ellipse-area',area);
// add to calculate 
addCalculationEntry('ellipse',area)

}
// Rhombus --------------->
function calcualteRhombusArea(){
const d1=getInputValue('rhombus-d1')
const d2=getInputValue('rhombus-d2')
const area=0.5*d1*d2;
// valid input 
if(isNaN(d1)||isNaN(d2)){
    alert('enter valid number')
    return;
}
setElementTextValue('rhombus-area',area);
// add to calculate 
addCalculationEntry('Rhombus',area)

}
// Pentagon  --------------->
function calcualtePentagonArea(){
const p=getInputValue('pentagon-p')
const b=getInputValue('pentagon-b')
const area=0.5*p*b;
// valid input 
if(isNaN(p)||isNaN(b)){
    alert('enter valid number')
    return;
}
setElementTextValue('pentagon-area',area);
addCalculationEntry('Pentagon',area)

}