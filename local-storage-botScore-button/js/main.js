//Create a button that adds 1 to a botScore stored in localStorage 

document.querySelector('button').addEventListener('click', add)

function add() {
    
    let botScore = Number(localStorage.getItem("botScore"))
    botScore = botScore + 1
    localStorage.setItem('botScore', botScore)

}
