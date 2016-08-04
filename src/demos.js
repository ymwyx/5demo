let express = require('express');
let app = express();

let bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.post('/body', function (req, res) {
    res.send(req.body.name);
})
app.get('/query', function (req, res) {
    res.send(req.query.q);
})
app.get('/params/:name', function (req, res) {
    res.send(req.params.name);
})

app.listen(3000, function () {
});
module.exports = app;