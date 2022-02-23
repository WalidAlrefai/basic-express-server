const express = require('express');
const cors = require('cors');
const logger = require('./middleware/logger')
const validator = require('./middleware/validator.js')
const errorHandler = require('./error-handlers/500')
const notFound = require('./error-handlers/404')
const app = express();

app.use(express.json());
app.use(cors());
app.use(logger);

app.get('/', (req, res) => {
    res.send('home route')
})

app.get('/person',validator, (req, res) => {
    console.log(req.query.name)
    res.json({
        name: req.query.name
    }

    )
})



app.use(errorHandler);
app.use('*', notFound);


function start(port) {
    app.listen(port, () => {
        console.log(`running on port ${port}`)
    })
}


module.exports = {
    app: app,
    start: start
}