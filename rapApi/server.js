const express = require('express')
const app = express()
const cors = require('cors')
const port = 8000

app.use(cors())


let savage = {
    'age': 28,
    'birtName' : 'Sheyaa Bin Abrahim-Joseph',
    'birthLocation' : 'London, England'
}

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')

})

app.get('/api/savage', (request, response) =>{
    response.json(savage)
})

app.listen(port, ()=>{
    console.log(`Server running on port ${port}`)
})