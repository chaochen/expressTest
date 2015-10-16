//
//Created by chaochen on 15/10/15.

var express = require('express');
var app = express();

var fortunes = [
    "Conquer your fears or they will conquer you.",
    "Rivers need springs.",
    "Do not fear what you don't know.",
    "You will have a pleasant surprise.",
    "Whenever possible, keep it simple."
];

app.use(express.static('public'));

// Optional since express defaults to CWD/views
app.set('views', __dirname + '/view');


//use jade template
app.set('view engine', 'jade');

app.set('port', process.env.PORT || 3000);

app.get('/', function (req, res) {
    res.render('home');
});

app.get('/about', function(req, res){ var randomFortune =
    fortunes[Math.floor(Math.random() * fortunes.length)];
    res.render('about', { fortune: randomFortune });
});


// 404 catch-all 处理器(中间件)
app.use(function(req, res, next){
res.status(404);
res.render('404');
});

// 500 错误处理器(中间件)
app.use(function(err, req, res, next){
console.error(err.stack);
res.status(500);
res.render('500');
});

app.listen(app.get('port'), function () {
    console.log('Express started on http://localhost:' +
        app.get('port') + '; press Ctrl-C to terminate.');
});

/*
var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/', function (req, res) {
    res.send('Hello World');
})

var server = app.listen(8081, function () {

    var host = server.address().address
    var port = server.address().port

    console.log("应用实例，访问地址为 http://%s:%s", host, port)
})*/
