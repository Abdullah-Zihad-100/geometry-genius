function calcualteTriangleArea(){
//   get triangle base value 
const baseField=document.getElementById('triangle-base');
const baseValueText=baseField.value;
const base=parseFloat(baseValueText);

// baseField.value='';
// if(isNaN(base)){
// alert("enter valid number")
// return;
// }



// get triangle height value 
const heightField=document.getElementById('triangle-height');
const heightValueText=heightField.value;
const height=parseFloat(heightValueText);

// // heightField.value='';
// if(isNaN(height)){
// alert("enter valid number")
// return;
// }

// calculate area 
const area=0.5*height*base;
// get area value
const triangleArea=document.getElementById('triangle-area');
triangleArea.innerText=area;



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
