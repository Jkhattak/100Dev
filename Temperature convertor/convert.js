const kelvin = 293 //This is the temperature in Kelvin
let celsius = kelvin - 273 //subtracting celsious from kelvin

let fahrenheit = celsius * (9/5) + 32 //Using the equation to convert 
fahrenheit = Math.floor(fahrenheit) //rounding the answer

console.log(`The temperature is ${fahrenheit} degree Fahrenheit`)
