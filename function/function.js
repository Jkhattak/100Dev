// *Variables*
// Create a variable and console log the value
const variable = 15
console.log(variable)


// Create a variable, add 10 to it, and alert the value

let var2 = 7;
var2 += 77;

console.log(var2);

// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference

function subFour(x1,x2,x3,x4) {
    const diff = x1-x2-x3-x4
    console.log(diff)
}


// Create a function that divides one number by another and returns the remainder

function divTwo (x1,x2) {
    console.log(x1 / x2);
}


// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji

function sumTwo(x1,x2) {
    const add = x1 + x2
    if (add > 50){
        alert('Jumanji')
    }
}



// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA

function multiThree (x1,x2,x3) {

    const add = x1*x2*x3
    if(add % 3==0 ){
        alert('ZEBRA')
    }
}