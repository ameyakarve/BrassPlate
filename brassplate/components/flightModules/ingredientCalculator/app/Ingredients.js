define(
    [
        'flight/lib/component', 
        'bootstrap/js/bootstrap-typeahead', 
        'underscore/underscore',
        'mustache/mustache', 
        'text!templates/ingredientCalculator/addItem.txt', 
        'text!flightModules/ingredientCalculator/app/namelist.txt'
    ],

function(component, typeAhead, Underscore, Mustache, addItemTemplate, nameList) {
    return component(Ingredients);

    function Ingredients() {
        this.defaultAttrs({
            selectedItems: [],
            allItems:window.$.parseJSON(nameList),
            names:window._.map(window.$.parseJSON(nameList),function(item){return item.NAME}),
            quantities:[]
        });
	this.setQuantities = function(event)
	{
		var dom = window.$(".inputQuantity");
		var values = (window._.map(dom,function(item){
			if(isNaN(parseFloat(item.value)))
				return 0;
			else if(parseFloat(item.value)<0)
				return 0;
			else return parseFloat(item.value);
		}));
		var sum = 0;
		for(var i = 0; i<this.attr.selectedItems.length; i++)
			sum += this.attr.allItems[this.attr.selectedItems[i]].PRICE*values[this.attr.selectedItems[i]];
		window.$("#totalPriceValue").html(sum.toFixed(2));
		var thisVal = parseFloat(window.$("#itemQuantity"+event.index).value);
		console.log(thisVal,event);
		if(thisVal<0 || isNaN(thisVal)) thisVal=0;
		window.$("#itemValue"+event.index).html(thisVal.toFixed(2));
		
		
	};
        this.initfunction = function() {
            window.$("#ingredientTypeahead").typeahead({
                source: this.attr.names,
                updater: function(item) {
                    var index = this.source.indexOf(item);
                    window.$("#ingredientsComponent").trigger({
                        type: "newItemAdded",
                        item: item,
                        index: index
                    });
                    return item;
                },
                matcher: function(item) {
                    window.$("#warningGroup").removeClass("error");
                    window.$("#inputWarning").html(" ");
                    return true;
                }
            });

        };
        this.renderNewItem = function(name, index) {
            return Mustache.render(addItemTemplate, {
                data:this.attr.allItems[index],
                index:index
            });
        };
        this.itemAdded = function(event) {
            console.log(event.item, event.index, "New Item Added");
            if (this.attr.selectedItems.indexOf(event.index) == -1) {
                var id = "addedItem" + event.index;
                window.$("#itemList").append(this.renderNewItem(event.item, event.index));
                window.$("#removeItem"+event.index).click(function(){
                    window.$("#ingredientsComponent").trigger({
                        type:"itemRemoved",
                        index:event.index
                    });
                });
                window.$("#itemQuantity"+event.index).on("input",function(){
                    window.$("#ingredientsComponent").trigger({
                    	type:"quantitiesChanged",
                    	index:event.index
                    });
                });
                this.attr.selectedItems.push(event.index);
                console.log(this.attr.selectedItems);
            }
            else {
                window.$("#warningGroup").addClass("error");
                window.$("#inputWarning").html("This item is already present");
            }

        };
        
        this.itemRemoved = function(event)
        {
            console.log(event);
            window.$("#addedItem"+event.index).remove();
            var index = this.attr.selectedItems.indexOf(event.index);
            this.attr.selectedItems.splice(index,1);
            console.log(this.attr.selectedItems);
        }

        this.after("initialize", function() {
            this.initfunction();
            this.on("newItemAdded", this.itemAdded);
            this.on("itemRemoved",this.itemRemoved);
            this.on("quantitiesChanged",this.setQuantities);
        });
    }
});
