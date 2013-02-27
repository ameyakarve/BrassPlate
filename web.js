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
app.get('/api/typeaheadHackInit',function(req,res){
    var result = [];
    result.push({uid:1,value:"A1",brand:"b",price:1,unit:"a",tokens:["Ameya"]} ,{uid:2,value:"A2",brand:"b",price:2,unit:"a",tokens:["Ameya"]} ,{uid:3,value:"A3",brand:"b",price:3,unit:"a",tokens:["Ameya"]} ,{uid:4,value:"A4",brand:"b",price:4,unit:"a",tokens:["Ameya"]} ,{uid:5,value:"A5",brand:"b",price:5,unit:"a",tokens:["Ameya"]} ,{uid:6,value:"B1",brand:"b",price:6,unit:"a",tokens:["Ameya"]} ,{uid:7,value:"B2",brand:"b",price:7,unit:"a",tokens:["Ameya"]} ,{uid:8,value:"B3",brand:"b",price:8,unit:"a",tokens:["Ameya"]} ,{uid:9,value:"B4",brand:"b",price:9,unit:"a",tokens:["Ameya"]} ,{uid:10,value:"C1",brand:"b",price:10,unit:"a",tokens:["Ameya"]} ,{uid:11,value:"C2",brand:"b",price:11,unit:"a",tokens:["Ameya"]} ,{uid:12,value:"C3",brand:"b",price:12,unit:"a",tokens:["Ameya"]} ,{uid:13,value:"D1",brand:"b",price:13,unit:"a",tokens:["Ameya"]} ,{uid:14,value:"D2",brand:"b",price:14,unit:"a",tokens:["Ameya"]} ,{uid:15,value:"E1",brand:"b",price:15,unit:"a",tokens:["Ameya"]} );
    res.send(result);
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
