let express = require('express');
let app = express();

app.get('/query', function (req, res) {
    res.send(req.query.q);
})

app.listen(3000, function () {
});

module.exports = app;