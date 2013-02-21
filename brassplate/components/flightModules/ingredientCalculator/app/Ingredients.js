define(
    [
        'flight/lib/component'
    ],
    function(component)
    {
        return component(Ingredients);
        function Ingredients()
        {
            this.defaultAttrs({
                selectedItems :[]
              });


            this.initfunction = function()
            {
                require(
                    [
                        'text!flightModules/ingredientCalculator/app/namelist.txt',
                        'bootstrap/js/bootstrap-typeahead'
                    ],function(nameList, typeAhead){
                        var names = (window.$.parseJSON(nameList));
                        window.$("#ingredientTypeahead").typeahead({source:names, updater:function(item)
                        {
                            var index = names.indexOf(item);
                            window.$("#ingredientsComponent").trigger({type:"newItemAdded",item:item,index:index});   
                            return item;
                        },matcher:function(item)
                        {
                            window.$("#warningGroup").removeClass("error");
                            window.$("#inputWarning").html(" ");
                            return true;
                        }
                        });
                    }
                );
            };
            this.itemAdded = function(event)
            {
                console.log(event.item, event.index,"New Item Added");
                if(this.attr.selectedItems.indexOf(event.index)==-1)
                {
                    var id = "addedItem"+event.index;
                    window.$("#itemList").append('<div class="row-fluid itemRow" id="'+id+'"></div>');
                    window.$("#"+id).html('<div class="span8 itemName">'+event.item+'</div><div class="span2"><input class="input-block-level" type="number" value=0></div><div class="span2 itemValue">0.00</div>');
                    this.attr.selectedItems.push(event.index);
                    console.log(this.attr.selectedItems);    
                }
                else
                {
                    window.$("#warningGroup").addClass("error");
                    window.$("#inputWarning").html("This item is already present");
                }
                
            };
            
            this.after("initialize",function()
            {
                this.initfunction();
                this.on("newItemAdded",this.itemAdded);
            });
        }
    }
);