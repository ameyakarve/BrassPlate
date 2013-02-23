var express = require('express');

var app = express();

app.configure(function(){
    app.set('views', __dirname + '/views');
    app.set('view engine', 'jade');
    app.use(express.static(__dirname + '/appData'));    
});
app.get('/', function(req, res){
        res.sendfile('views/index.html');
    });

app.get('/blog', function(req, res){
        res.render('blog', {title:"App Blog"});
    });
app.get('/api/addIngredient',function(req,res){
    console.log(req.query);
    var result = {success:true,data:req.query};
    res.send(result);
});

var port = process.env.PORT||5000;
app.listen(5000, function() {
  console.log("Listening on " + port);
});
