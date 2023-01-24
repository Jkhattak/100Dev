const express = require('express')
const app = express()
const port = 8000

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')

})

app.listen(port, ()=>{
    console.log(`Server running on port ${port}`)
})