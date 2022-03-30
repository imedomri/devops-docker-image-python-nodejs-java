var express = require('express')
const process = require('process');

var express = express()
express.get('/', function (req, res) {
    res.send('{"message":"Hello World JavaScript v1"}')
})
express.listen(5000, function () {
    console.log('Ready on port 5000!')
})

/* To Handle Ctrl C*/
process.on('SIGINT', function () {
    process.exit();
});