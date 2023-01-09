//For each funcitons
const fruits = ['mango', 'papaya', 'pineapple', 'apple'];

// Iterate over fruits below

fruits.forEach(fruit => console.log(`I want to eat a ${fruit}`))


// Map function
// Map funciton will return a new array compared to forEach function which will only return the same array values
const numbers = [1, 2, 3, 4, 5]; 
 
// const bigNumbers = numbers.map(number => {
//   return number * 10;
// });

const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];

// Create the secretMessage array below
const secretMessage = animals.map(animal => {
  return animal[0]})

console.log(secretMessage.join(''));

const bigNumbers = [100, 200, 300, 400, 500];

// Create the smallNumbers array below
const smallNumbers = bigNumbers.map(numbers => {
return numbers/100 
})

console.log(smallNumbers)