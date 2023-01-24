const express = require('express')
const app = express()
const port = 8000

let savage = {
    'age': 28,
    'birtName' : 'Sheyaa Bin Abrahim-Joseph',
    'birthLocation' : 'London, England'
}

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')

})

app.get('/api/savage', (request, response) =>{
    response.json
})

app.listen(port, ()=>{
    console.log(`Server running on port ${port}`)
})