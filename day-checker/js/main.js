


//If Tuesday or Thursday, tell them they have class
//If Saturday, tell them they have Office Hours
//If Friday and House Turing, they have private office hours
//If Wednesday and House Hopper, tell them they have private office hours
//If Monday and House Hamilton, tell them to book a 1on1
//If any other day or wrong house, tell them to study

day = 'Tuesday'
house = ''

if (day === 'Tuesday' || day === 'Thursday'){
    console.log('you have a class today')
} else if (day ==="saturday"){
    console.log('They have office hours')
} else if (day ==='Friday' && house === 'House Turing'){
    console.log('They have private office hours')
} else if (day ==='Wednesday' && house ==='House Hopper'){
    console.log('You have private office hours')
} else if (day === 'Monday' && House ==='House Hamilton'){
    console.log('Book a 1on1')
} else {
    console.log("Wrong house")
}


//On click of the h1
//Take the value from the input
//Place the result of the conditional in the paragraph

document.querySelector('h1').addEventListener('click', run)

function run () {
    const value = document.querySelector('#whatDay').value
    const value2 = document.querySelector('#whatHouse').value
    const sum = `The day is ${value} and the house is ${value2}`
    document.querySelector('p').innerText = sum
    
}