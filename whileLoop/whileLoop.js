// create a while loop
const cards = ['diamond', 'spade', 'heart', 'club'];

// Write your code below
let currentCard;

counter = 1

while (currentCard !== 'spade') {
  currentCard = cards[Math.floor(Math.random() * 4)];
  console.log(currentCard)
}

//Do-While loop 
// Write your code below
let cupsOfSugarNeeded = 7
let cupsAdded = 0

do {
  cupsAdded++
} while (cupsAdded < cupsOfSugarNeeded) {
  console.log(cupsAdded)
}

//Using break in loop 
const rapperArray = ["Lil' Kim", "Jay-Z", "Notorious B.I.G.", "Tupac"];

// Write your code below

for (let i=0; i < rapperArray.length; i++){
  console.log(rapperArray[i])
  if (rapperArray[i] === 'Notorious B.I.G.' ){
    console.log(rapperArray[i])
   break 
  }
}
console.log("And if you don't know, now you know.")

