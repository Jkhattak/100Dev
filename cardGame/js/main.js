//card game

let deckId = ''

fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
  .then(response => response.json())
  .then(data => {

    deckId = data.deck_id
  })
  .catch(error => {
    console.log('Error:', error);
  });

//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch) 

function getFetch(){
  
  
  const url = `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=2`

  fetch(url)
  .then(response => response.json())
  .then(data => {
    console.log(data);
    document.querySelector('#player1').src = data.cards[0].image
    
    document.querySelector('#player2').src = data.cards[1].image
    
  })
  .catch(error => {
    console.log('Error:', error);
  });

}