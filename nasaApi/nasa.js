document.querySelector('#button').addEventListener('click', run)

function run(){
    const val = document.querySelector('input').value
    console.log(val)

fetch(`https://api.nasa.gov/planetary/apod?api_key=FB6rkOfvaMiSQQlO65GAfqA6W7Awp0aIosHGtUUG&date=${val}`)
  .then(response => response.json())
  .then(data => {
    console.log(data)
    document.querySelector('img').src = data.hdurl
    document.querySelector('h3').innerText = data.title
    document.querySelector('span').innerText = data.explanation 
  })
  .catch(error => {
    console.error('Error:', error);
  });
  

}
