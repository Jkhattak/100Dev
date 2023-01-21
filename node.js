const http = require('http')
const fd = require('fs')
http.createServer((req, res) => {
    fs.readFile('demofile.html', (err, data) => {
        res.write
    })
})