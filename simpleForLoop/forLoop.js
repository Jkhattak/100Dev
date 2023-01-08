// Write your code below
//For loop contains three expressino inside the parentheses seperated by ;


for (let counter =5; counter <=100; counter++){
    console.log(counter)
  }
  
  //Using for loop reverse
  for (let counter = 3; counter >= 0; counter-- ){
    console.log(counter)
  }

  // Iterating over a string 

  const vacationSpots = ['Bali', 'Paris', 'Tulum'];

// Write your code below
for (let i = 0; i < vacationSpots.length; i++){
  console.log(`I would love to visit ${vacationSpots[i]}`)
}

// Double nested loop 
const myArray = [6, 19, 20];
const yourArray = [19, 81, 2];
for (let i = 0; i < myArray.length; i++) {
  for (let j = 0; j < yourArray.length; j++) {
    if (myArray[i] === yourArray[j]) {
      console.log('Both arrays have the number: ' + yourArray[j]);
    }
  }
}

// Write a nested code to see if two people have same followers
// Write your code below
let bobsFollowers = ['Yas', 'Yone', 'Zed','Jax']
let tinasFollowers = ['Yas', 'Yone', 'Leblanc']
let mutualFollowers = []

for (let i=0; i < bobsFollowers.length; i++) {
  for (let j =0; j < tinasFollowers.length; j++){
    if (bobsFollowers[i] === tinasFollowers[j]){
      mutualFollowers.push(tinasFollowers[j])
    }
  }
}
console.log(mutualFollowers)