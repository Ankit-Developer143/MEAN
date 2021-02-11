//Single Parameter
function singleParameter(number) {
    return(number);
}
console.log(singleParameter(5)); //5
//Arrow
const singleParameter1 = number =>number
console.log(singleParameter1(10));


//Double Paremeter ===============================================================
function sum(a,b) {
    return a+b;
    
}
console.log(sum(2,5));

//Arrow Functions ===============================================================

const sum1 = (a,b) =>a+b
console.log(sum1(2,5));//7


//No Parameter =================================================================
function randomnumber() {
    return Math.random
    
}
console.log(randomnumber());

//Arrow =========================================================================
const randomnumber1 = () => Math.random


//Anynomous Function ===========================================================

// document.addEventListener('click',function(){
//     console.log('click');
// });

// document.addEventListener('click',() => console.log('click'))




