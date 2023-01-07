// Create magic ball 8 and assign it random outputs
// The ball should include 0 up to 8 (8 also included digits)

userName = 'Batman'; //Enter the name
userQuestion = 'Magic ball! GUIDE ME!!!';  //should be a string
randomNumber = Math.floor(Math.random()*8) //random number generator 
eightBall = ''; //This is where we will save the value of the random number


userName ? console.log('Hello', userName) : console.log('Hello!')
console.log(userName, 'asked', userQuestion)

switch (randomNumber) {
  case 0:
  eightBall = 'it is certain'
  console.log ('it is certain')
  break

  case 1:
  eigtBall = 'It is decidedly so'
  console.log('it is decidedly so')
  break

  case 2:
  eightBall = 'Reply hazy try again'
  console.log('Reply hazy try again')
  break

  case 3:
  eightBall = 'Cannot predict now'
  console.log('Cannot predict now')
  break

  case 4:
  eightBall = 'Do not count on it'
  console.log('Do not count on it')
  break 

  case 5:
  eightball = 'My sources say no'
  console.log('My sources say no')
  break 

  case 6:
  eightball = 'Outlook not so good'
  console.log('Outlook not so good')
  break 

  case 7:
  eightBall = ('Signs point to yes')
  console.log('Signs point to yes')
  break

  case 8:
  eightBall = "Life is good"
  console.log('Life is good')
  break
}

