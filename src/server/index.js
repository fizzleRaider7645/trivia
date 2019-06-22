let express = require('express');

let app = express();

let server = app.listen(4000, function() {
    console.log('I\'m listening')
})

app.use(express.static('./src/server/public'))