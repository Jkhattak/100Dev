document.querySelector('#yasuo').addEventListener('click',pickYasuo)
document.querySelector('#yone').addEventListener('click', pickYone)


function pickYasuo() {
    document.querySelector('#yone').style.display = 'none'
    document.querySelector('#zed').style.display = 'none'
    document.querySelector('body').style.backgroundColor = 'pink'
}

function pickYone() {
    document.querySelector('#yasuo').style.display = 'none'
    document.querySelector('#zed').style.display = 'none'
}
