//Get a dog photo from the dog.ceo api and place the photo in the DOM


const img = document.querySelector('img')

Url = 'https://dog.ceo/api/breeds/image/random'

fetch(Url)
    .then(Response => Response.json())
    .then(data => { img.src = data.message
        document.body.append(img)
    })
    .catch(error => console.log('Error:', Error))

