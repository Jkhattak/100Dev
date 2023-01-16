//Create an espresso machine constructor that makes machines with 4 properties and 3 methods

class ExpressoMachine{
    constructor (brand,country,origin,color){

    this.brand = brand
    this.country = country
    this.origin = origin
    this.color = color

    }
 start(){

    console.log('Start to make espresso');
}
 stop() {
    console.log('Turning off')

}
steam (){
    console.log("Steam")

}
    }


let coffe = new ExpressoMachine('Starbucks', 'America','India', 'Red')
console.log(coffe)
console.log(coffe.start())