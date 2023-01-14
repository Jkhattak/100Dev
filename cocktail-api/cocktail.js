document.querySelector('button').addEventListener('click', run)
function run() {
fetch('http://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita')
  .then(response => response.json())
  .then(data => {
    console.log(data);
    
  })
  .catch(error => {
    console.log('Error:', error);
  });
}