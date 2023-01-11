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

//Create a function that takes in a word and a number. Console log the word x times where x was the number passed in

function wordNumber(word, number) {
    for (i=0; i < number; i++){
        console.log(word)
    }
}

function fun (x1,x2,x3,x4) {
    let firstTwo = x1*x2
    let lasttwo = x2 + x4
    if (firstTwo > 100 && firstTwo > lasttwo) {

        console.log(firstTwo)
    }
}

function fourNum(x1,x2,x3,x4){
    let diff = x1 * x2;
    
    if (diff > 100){
        console.log(x3+x4)

    } else if (diff < 100){

        console.log(x3 - x4)
    } else if (diff == 100) {
        let multi = (x1*x2*x3)
        let reminder = multi % x4
        alert(reminder)
    }
}

//Create a function that takes in a number. The function should return an array that contains every number from 1 to that number as seperate elements


function numb(x){
    let arr = []
    for (let i = 0; i < x; i++){
       arr.push(i)
    }
    return arr
}
