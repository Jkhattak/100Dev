//card game

fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.log('Error:', error);
  });











//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const choice = document.querySelector('input').value
  console.log(choice)
  const url = `https://api.nasa.gov/planetary/apod?api_key=1dcNban294bqp3ntZWa43fIgo6UPXXimGuueRlzn&date=${choice}`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        if(data.media_type === 'image'){
          document.querySelector('img').src = data.hdurl
        } else if (data.media_type === 'video'){
          document.querySelector('iframe').src = data.url
        } else{
          alert('Media Not Supported -Conctact NASA IMMEDIATLY')
        }
        document.querySelector('h3').innerText = data.explanation
        
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

