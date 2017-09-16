require('marko/node-require');
require('marko/express');

var express = require('express');

require('lasso').configure({
    plugins: [
        'lasso-marko'
    ],
    outputDir: __dirname + '/static'
});

var app = express();
var port = process.env.PORT || 8080;

app.use(require('lasso/middleware').serveStatic());

app.get("/", require('./src/home/index'));

app.listen(port, function(){
    console.log('running on port:' + port);
});
