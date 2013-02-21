var express = require('express');

var app = express.createServer(express.logger());

app.configure(function(){
    app.set('views', __dirname + '/views');
    app.set('view engine', 'jade');
    app.use(express.static(__dirname + '/brassplate/components'));    
});
app.get('/', function(req, res){
        //res.render('kitchenProfile', {title:"Home Page"});
        res.sendfile('views/kitchenProfile.html');
    });

app.get('/blog', function(req, res){
        res.render('blog', {title:"App Blog"});
    });

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
