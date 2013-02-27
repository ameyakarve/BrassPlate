var express = require('express');
var gzippo = require('gzippo');
var app = express();

app.configure(function(){
    app.set('views', __dirname + '/views');
    app.set('view engine', 'jade');
    app.use(gzippo.staticGzip(__dirname + '/release'));    
});
app.get('/', function(req, res){
        res.sendfile('views/index.html');
    });

app.get('/blog', function(req, res){
        res.render('blog', {title:"App Blog"});
    });
app.get('/api/addIngredient',function(req,res){
    
	console.log(req.query);
	if(parseInt(req.query.LASTTIMESTAMP)==0)
	{
		var result = {
			lastTimeStamp:1890987464,
			addedStatus:{
				success:false,
				addedItemUID:20,
				errorCode:4,
				errorMsg:"Non existing error"
			},
			init:true,
			updatedData:[
				{
					UID:1,
					NAME:"Ameya",
					PRICE:20,
					UNIT:"kg",
					BRAND:"B1"
				},
				{
					UID:2,
					NAME:"Ball",
					PRICE:23,
					UNIT:"ml",
					BRAND:"B2"
				},
				{
					UID:3,
					NAME:"Cow",
					PRICE:2,
					UNIT:"liter",
					BRAND:"B3"
				},
				{
					UID:4,
					NAME:"Dog",
					PRICE:50,
					UNIT:"ml",
					BRAND:"B1"
				},
				{
					UID:5,
					NAME:"Eagle",
					PRICE:26,
					UNIT:"kg",
					BRAND:"B2"
				},
				{
					UID:6,
					NAME:"Fish",
					PRICE:24,
					UNIT:"ml",
					BRAND:"B3"
				},
				{
					UID:7,
					NAME:"Goat",
					PRICE:10,
					UNIT:"unit",
					BRAND:"B1"
				},
				{
					UID:8,
					NAME:"Horse",
					PRICE:200,
					UNIT:"kg",
					BRAND:"B2"
				},
				{
					UID:9,
					NAME:"Icecream",
					PRICE:20,
					UNIT:"g",
					BRAND:"B3"
				},
				{
					UID:10,
					NAME:"Aunk",
					PRICE:25,
					UNIT:"kg",
					BRAND:"B1"
				}
			
			]
			
			
		};
		res.send(result);
	}
	else
	{
		console.log(req.query);
		if(req.query.NAME&&req.query.BRAND&&req.query.PRICE&&req.query.UNIT&&req.query.LASTTIMESTAMP)
		{
			//All clear
			var name = req.query.NAME;
			var price = parseFloat(req.query.PRICE);
			if(isNaN(price)||price<0)
			{
				var result = 
				{
					lastTimeStamp:1890987464,
					addedStatus:{
						success:false,
						addedItemUID:20,
						errorCode:4,
						errorMsg:"Price fail"
					},
					init:false,
					updatedData:
					[
						{
							UID:20,
							NAME:"Aolf",
							PRICE:25,
							UNIT:"kg",
							BRAND:"B1"
						}
					]
				};
				res.send(result);
			
			}
			else
			{
				if(name == "Spoon")
				{
					var result = 
					{
						lastTimeStamp:1890987464,
						addedStatus:{
							success:false,
							addedItemUID:20,
							errorCode:4,
							errorMsg:"Name overlap"
						},
						init:false,
						updatedData:
						[
							{
								UID:20,
								NAME:"Wolf",
								PRICE:25,
								UNIT:"kg",
								BRAND:"B1"
							}
						]
					};
					res.send(result);
				}
				else
				{
					var result = 
					{
						lastTimeStamp:1890987464,
						addedStatus:{
							success:true,
							addedItemUID:20,
							errorCode:4,
							errorMsg:"some existing error"
						},
						init:false,
						updatedData:
						[
							{
								UID:20,
								NAME:"Wolf",
								PRICE:25,
								UNIT:"kg",
								BRAND:"B1"
							}
						]
					};
					res.send(result);
				}
			}
			
		}
		else
		{
			//Incomplete data
			var result = 
			{
				lastTimeStamp:1890987464,
				addedStatus:{
					success:false,
					addedItemUID:20,
					errorCode:4,
					errorMsg:"some existing error"
				},
				init:false,
				updatedData:
				[
					{
						UID:20,
						NAME:"Wolf",
						PRICE:25,
						UNIT:"kg",
						BRAND:"B1"
					}
				]
			};
			res.send(result);
		}
		
	}
	
	//console.log(req.query);
    //var result = {success:true,data:req.query};
    //res.send(result);
});

var port = process.env.PORT||5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
