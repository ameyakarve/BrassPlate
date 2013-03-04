define(
	{
		IngredientsTemplate:"<div class='row-fluid' id='calculatorComponent'> <h4>Ingredients calculator</h4> <div class='row-fluid'> <div class='row-fluid itemTopRow'> <div class='span7 itemName'>Item Name</div> <div class='span1 itemName'>Price</div> <div class='span1 itemName'>Quantity</div> <div class='span1 itemName'>Unit</div> <div class='span2 itemValue'>Total price</div> </div> </div> <div class='row-fluid' id='itemList'></div> <div class='row-fluid'> <div class='row-fluid itemBottomRow'> <div class='span9 itemName'>Total</div> <div class='span1 offset1 itemValue' id='totalPriceValue'>0.00</div> </div> </div> <form> <fieldset> <h4>Add a new Ingredient</h4> <label>Ingredient Name</label> <div class='control-group' id='warningGroup'> <div class='controls' id='inputControls'></div> </div> </fieldset> </form> </div> <div class='row-fluid' id='formComponent'> <a class='btn btn-success' id='addNewIngredientButton'> <i class='icon-plus-sign icon-white'></i></a>&nbsp;&nbsp;Can\'t find an item in your list? Why not add another? <div class='modal hide fade' id='addNewIngredientFormModal'> <div class='modal-header'> <button id='addIngredientModalClose' type='button' class='close' data-dismiss='modal' aria-hidden='true' data-loading-text='&times;'>&times;</button> <h3>Add a new Ingredient</h3> </div> <div class='modal-body'> <form id='addIngredientmodalForm'> <fieldset> <div class='row-fluid'> <div class='row-fluid' id='formAlertArea'> </div> <label>Item Name</label> <input name='NAME' class='input-block-level' placeholder='Item Name' type='text'> <label>Brand</label> <input name='BRAND' class='input-block-level' placeholder='Brand' type='text'> <label>Unit</label> <input name='UNIT' class='input-block-level' placeholder='Unit' type='text'> <label>Unit Cost</label> <input name='PRICE' class='input-block-level' placeholder='Unit Cost' type='number'> <input id='formTimeStamp' type='hidden' name='LASTTIMESTAMP' value=0> </div> </fieldset> </form> </div> <div class='modal-footer'> <button id='addIngredientFormSubmit' type='button' class='btn btn-primary' data-loading-text='Adding...'>Add</button> </div> </div>",
		sidebarTemplate:"<div class='row-fluid'> <div class='span12' id='navbar'> <ul class='nav nav-tabs nav-stacked' id='navbarUl'> <li class='active' id='nav1'> <a href='#/home'><i class='icon-home icon-black'></i>&nbsp;&nbsp;Home</a> </li> <li id='nav2'> <a href='#/about'><i class='icon-question-sign icon-black'></i>&nbsp;&nbsp;About Us</a> </li> <li id='nav3'> <a href='#/ingredients'><i class='icon-list-alt icon-black'></i>&nbsp;&nbsp;Ingredients</a> </li> </ul> </div> </div>"
	}
);