//Create an espresso machine constructor that makes machines with 4 properties and 3 methods

class ExpressoMachine{
    constructor (brand,country,origin,color){

    this.brand = brand
    this.country = country
    this.origin = origin
    this.color = color
}
}
function start(){

    console.log('Start to make espresso');
}
function stop() {
    console.log('Turning off')

}
function steam (){
    console.log("Steam")

}