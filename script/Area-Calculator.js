// Basic simple code 

// triangle --------------

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
// get area value
const triangleArea=document.getElementById('triangle-area');
triangleArea.innerText=area;


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
// console.log(length ,width)

// caculate arae
const area=width*length;
// show recatangle are
const recatangleArea=document.getElementById('rectangle-area');
recatangleArea.innerText=area
}





// New function Mathod Use short code ----->


// parallelogram---------------

function calcualteParallelogramArea(){
   const base=getInputValue('parallelogram-base');
const height=getInputValue('parallelogram-heigth');
const area=base*height
setElementTextValue('parallelogram-area',area)
}


// ellipse--------------------

function calcualteellipseArea(){
const a=getInputValue('ellipse-a');
const b=getInputValue('ellipse-b');
const area=3.1415*a*b;
setElementTextValue('ellipse-area',area);
}