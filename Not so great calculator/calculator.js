let total = 0

document.querySelector('#zero').addEventListener('click',zero)
document.querySelector('#nine').addEventListener('click',nine)
document.querySelector('#three').addEventListener('click',three)
document.querySelector('#two').addEventListener('click',two)
document.querySelector('#five').addEventListener('click',five)

function zero () {
    total = 0
    document.querySelector('h2').innerText = total
    document.querySelector('h2').style.background = 'red'
}
function nine () {
    total = total - 9
    document.querySelector('h2').innerText = total
    document.querySelector('h2').style.background = 'red'
}
function three () {
    total = total + 3
    document.querySelector('h2').innerHTML = total
    document.querySelector('h2').style.background = 'red'
}
function two () {
    total = total + 2
    document.querySelector('h2').innerHTML = total
    document.querySelector('h2').style.background = 'red'
}
function five () {
    total = total + 5
    document.querySelector('h2').innerHTML = total
    document.querySelector('h2').style.background = 'red'
}

