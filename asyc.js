function houseOne(){
    console.log('Paper delivered to house 1')
}
function houseTwo(callback){
    setTimeout(() => {
        console.log('Paper delivered to house 2')
        callback()
    }, 3000)
}
function houseThree(){
    console.log('Paper delivered to house 3')
}