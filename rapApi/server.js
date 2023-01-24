const express = require('express')
const app = express()
const cors = require('cors')
const port = 8000

app.use(cors())


let rapper = { 'savage': {
    'age': 28,
    'birtName' : 'Sheyaa Bin Abrahim-Joseph',
    'birthLocation' : 'London, England'

}, 
'Eminem' : {
    'age': 46,
    'birthname' : 'Martial Matther',  
    'birthLocation': "Detriot,USA"


}, 
'Unknown' : {
    'age' : "unknown",
    'birthname': 30,
    'birthname' : 'unknown'
}
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