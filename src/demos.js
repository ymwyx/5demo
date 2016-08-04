let express = require('express');
let app = express();

let bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.post('/post', function (req, res) {
    res.send(req.body.name);
})
app.get('/query', function (req, res) {
    res.send(req.query.q);
})


app.listen(3000, function () {
});
module.exports = app;