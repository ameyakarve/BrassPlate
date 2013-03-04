var express = require('express');
var gzippo = require('gzippo');
var app = express();

app.configure(function() {
    app.set('views', __dirname + '/views');
    app.set('view engine', 'jade');
    app.use(gzippo.staticGzip(__dirname + '/webapp/release'));
});
app.get('/', function(req, res) {
    res.sendfile('views/index.html');
});

app.get('/blog', function(req, res) {
    res.render('blog', {
        title: "App Blog"
    });
});
app.get('/api/typeaheadHackInit', function(req, res) {
    var result = [];
    result.push({
        uid: 1,
        value: "A1",
        brand: "b",
        price: 1,
        unit: "a",
        callback: {
            target: "calculatorComponent",
            type: "dataAdded"
        },
        tokens: ["Ameya"]
    }, {
        uid: 2,
        value: "A2",
        brand: "b",
        price: 2,
        unit: "a",
        callback: {
            target: "calculatorComponent",
            type: "dataAdded"
        },
        tokens: ["Ameya"]
    }, {
        uid: 3,
        value: "A3",
        brand: "b",
        price: 3,
        unit: "a",
        callback: {
            target: "calculatorComponent",
            type: "dataAdded"
        },
        tokens: ["Ameya"]
    }, {
        uid: 4,
        value: "A4",
        brand: "b",
        price: 4,
        unit: "a",
        callback: {
            target: "calculatorComponent",
            type: "dataAdded"
        },
        tokens: ["Ameya"]
    }, {
        uid: 5,
        value: "A5",
        brand: "b",
        price: 5,
        unit: "a",
        callback: {
            target: "calculatorComponent",
            type: "dataAdded"
        },
        tokens: ["Ameya"]
    }, {
        uid: 6,
        value: "B1",
        brand: "b",
        price: 6,
        unit: "a",
        callback: {
            target: "calculatorComponent",
            type: "dataAdded"
        },
        tokens: ["Ameya"]
    }, {
        uid: 7,
        value: "B2",
        brand: "b",
        price: 7,
        unit: "a",
        callback: {
            target: "calculatorComponent",
            type: "dataAdded"
        },
        tokens: ["Ameya"]
    }, {
        uid: 8,
        value: "B3",
        brand: "b",
        price: 8,
        unit: "a",
        callback: {
            target: "calculatorComponent",
            type: "dataAdded"
        },
        tokens: ["Ameya"]
    }, {
        uid: 9,
        value: "B4",
        brand: "b",
        price: 9,
        unit: "a",
        callback: {
            target: "calculatorComponent",
            type: "dataAdded"
        },
        tokens: ["Ameya"]
    }, {
        uid: 10,
        value: "C1",
        brand: "b",
        price: 10,
        unit: "a",
        callback: {
            target: "calculatorComponent",
            type: "dataAdded"
        },
        tokens: ["Ameya"]
    }, {
        uid: 11,
        value: "C2",
        brand: "b",
        price: 11,
        unit: "a",
        callback: {
            target: "calculatorComponent",
            type: "dataAdded"
        },
        tokens: ["Ameya"]
    }, {
        uid: 12,
        value: "C3",
        brand: "b",
        price: 12,
        unit: "a",
        callback: {
            target: "calculatorComponent",
            type: "dataAdded"
        },
        tokens: ["Ameya"]
    }, {
        uid: 13,
        value: "D1",
        brand: "b",
        price: 13,
        unit: "a",
        callback: {
            target: "calculatorComponent",
            type: "dataAdded"
        },
        tokens: ["Ameya"]
    }, {
        uid: 14,
        value: "D2",
        brand: "b",
        price: 14,
        unit: "a",
        callback: {
            target: "calculatorComponent",
            type: "dataAdded"
        },
        tokens: ["Ameya"]
    }, {
        uid: 15,
        value: "E1",
        brand: "b",
        price: 15,
        unit: "a",
        callback: {
            target: "calculatorComponent",
            type: "dataAdded"
        },
        tokens: ["Ameya"]
    });
    res.send(result);
    console.log(result);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
    console.log("Listening on " + port);
});
