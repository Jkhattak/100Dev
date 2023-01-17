//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM

document.querySelector('button').addEventListener('click', run)

function run() {

    let value = document.querySelector('input').value
    // console.log(value)
    const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='+value;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data.drinks)
            document.querySelector('img').src = data.drinks[0].strDrinkThumb
            document.querySelector("h3").innerText = data.drinks[0].strInstructions

            document.querySelector("h2").innerText = data.drinks[0].strDrink


        })
            .catch(error => console.log('Error:', error))

}

    // document.querySelector('img').src = data
