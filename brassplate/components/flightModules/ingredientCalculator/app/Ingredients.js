define(
[
    'flight/lib/component', 
    'bootstrap/js/bootstrap-typeahead', 
    'underscore/underscore', 
    'mustache/mustache', 
    'text!templates/ingredientCalculator/addItem.txt', 
    'text!templates/ingredientCalculator/typeaheadInput.txt'
    ],

function(component, typeAhead, Underscore, Mustache, addItemTemplate, typeaheadInput) {
    return component(Ingredients);

    function Ingredients() {
        this.defaultAttrs({
            selectedItems: [],
            allItems: [],
            quantities: [],
            lastTimeStamp:0
        });
        this.setQuantities = function(event) {
            var dom = window.$(".inputQuantity");
            var values = (window._.map(dom, function(item) {
                if (isNaN(parseFloat(item.value))) return 0;
                else if (parseFloat(item.value) < 0) return 0;
                else return parseFloat(item.value);
            }));
            console.log(event.removed);
            var sum = 0;
            for (var i = 0; i < this.attr.selectedItems.length; i++) {

                var index = this.attr.selectedItems[i];
                var price = this.attr.allItems[index].PRICE;
                var add = price * values[i];
                if (!isNaN(add)) sum += add;
            }
            window.$("#totalPriceValue").html(sum.toFixed(2));
            if (!event.removed) {
                var thisVal = parseFloat(window.$("#itemQuantity" + event.index)[0].value);
                if (thisVal < 0 || isNaN(thisVal)) thisVal = 0;
                var cost = thisVal * this.attr.allItems[event.index].PRICE;
                window.$("#itemValue" + event.index).html(cost.toFixed(2));
            }
        };
        this.initfunction = function(event) {
            //window.$("#ingredientTypeahead").remove();
            //window.$("#inputWarning").remove();
            //window.$("#inputControls").html(Mustache.render(typeaheadInput,{}));
            //set AllItems, lastTimeStamp
            console.log(event);
            /*window.$("#addIngredientComponent").trigger({
                type:"setTimeStamp",
                timestamp:this.attr.lastTimeStamp
            });
            console.log("Sent trigger");
            var names = window._.map(this.attr.allItems,function(num){return num.NAME;});
            window.$("#ingredientTypeahead").typeahead({
                source: names,
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
            */
        };
        this.serverCall = function(params)
        {
            window.$.ajax({
                type:"GET",
                data:params,
                url:"api/addIngredient",
                success:function(data){console.log(data);window.$("#ingredientsComponent").trigger({type:"serverResponse",returnData:data});},
                error:function(data){}
            });
        };
        this.renderNewItem = function(name, index) {
            return Mustache.render(addItemTemplate, {
                data: this.attr.allItems[index],
                index: index
            });
        };
        this.itemAdded = function(event) {
            console.log(event.item, event.index, "New Item Added");
            if (this.attr.selectedItems.indexOf(event.index) == -1) {
                var id = "addedItem" + event.index;
                window.$("#itemList").append(this.renderNewItem(event.item, event.index));
                window.$("#removeItem" + event.index).click(function() {
                    window.$("#ingredientsComponent").trigger({
                        type: "itemRemoved",
                        index: event.index
                    });
                });
                window.$("#itemQuantity" + event.index).on("input", function() {
                    window.$("#ingredientsComponent").trigger({
                        type: "quantitiesChanged",
                        index: event.index,
                        removed: false
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

        this.itemRemoved = function(event) {
            console.log(event);
            window.$("#addedItem" + event.index).remove();
            var index = this.attr.selectedItems.indexOf(event.index);
            this.attr.selectedItems.splice(index, 1);
            console.log(this.attr.selectedItems);
            window.$("#ingredientsComponent").trigger({
                type: "quantitiesChanged",
                index: event.index,
                removed: true
            });
        };
        this.insertNewData = function(event) {
            console.log(event);
            //Temporary code here; to be deleted
            if (typeof(event.returnData.PRICE) == "string") {
                if (isNaN(parseFloat(event.returnData.PRICE)) || parseFloat(event.returnData.PRICE < 0)) event.returnData.PRICE = 0;
                else event.returnData.PRICE = parseFloat(event.returnData.PRICE)

            };
            this.attr.allItems.push(event.returnData);
            console.log("Called Initfunction again");
            this.initfunction();
        };
        this.Init = function()
        {
            this.serverCall("a=1");
        };
        this.after("initialize", function() {
            
            this.on("serverResponse",this.initfunction);
            this.on("nextDependencyLoaded",this.Init);
            this.on("newItemAdded", this.itemAdded);
            this.on("itemRemoved", this.itemRemoved);
            this.on("quantitiesChanged", this.setQuantities);
            this.on("newDataToBeAdded", this.insertNewData);
        });
    }
});
