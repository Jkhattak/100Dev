/* create a program that will randomly generate an age and assign it a race number. The age is between 1 and 100. People are of age of 18 years are not included in this race. Adults can sign up for two different session. If they do early registration. They will be the first one to run at 9:30 am. Adult who do not register will run at 11:00 am. Everyone else runs at 12:30 pm */

let raceNumber = Math.floor(Math.random(1) * 1000);
let earlyRegister = true;
let age = Math.floor(Math.random(1)*100);

if (age < 18 && earlyRegister){
  console.log("You are an adult who registered early, and your race number is ", raceNumber + 1000, '. Your run time is 9:30 am')
} else if (age < 18 && earlyRegister != true) {
  console.log("You are an an adult who did not registered early, and your race number is ", raceNumber + 1000, ". Your run time is 11:00 am")
}else if (age == 18) {
  console.log ("You are 18 years old. You are not included in this race")
}  else {
  console.log('You are not an adult, and your race number is', raceNumber, ". You run at 12:30 pm")
}