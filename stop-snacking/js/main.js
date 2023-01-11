//Create a function that grabs the number of snacks from the input and tells you to stop that many times

const line = document.querySelector('#help').addEventListener('click', run)

function run(){
    let number = document.querySelector('input').value 
    for (let i=0; i < number; i++) {
    document.querySelector('#stops').innerText += ' Stop'
}
}