const animals = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];

//find elephant index in the array
const foundAnimal = animals.findIndex(animal => {
  return animal === 'elephant'
  
})

console.log(foundAnimal)


// finding a variable in the list that starts with "s"
const startsWithS = animals.findIndex(animal => {
  return animal[0] === 's'
})