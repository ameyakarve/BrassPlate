define(
    {
		Home:{
            main:'<div class="row-fluid">Home goez here</div>'
        },
        Ingredients:{
            main:'<div class="row-fluid"><div class="span6" id="IngredientsLeft">I am a column to the leftz</div><div class="span6" id="IngredientsRight"></div></div>',
            RightColumn:'I am always right!'
        },
		Sidebar:{
            main:'<div class="row-fluid"><ul id="SidebarPanels"></ul></div>',
            item:'{{#.}}<li><a href="#/{{.}}" class="btn">{{.}}</a></li>{{/.}}',
            paths:["Home","Ingredients"]
		}
	}
);