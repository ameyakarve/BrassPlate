/*global define*/
'use strict';
define(
	[
		'vendor/flight/lib/component',
		'modules/Ingredients/JqueryCalls',
        'underscore'
	],

function (
    component,
    jQueryCalls,
    _
    ) {
		function Ingredients() {
			this.defaultAttrs({
				selectedItems: [],
				quantities: []
			});
			this.Init = function ()
			{
				this.attr.selectedItems = [];
				this.attr.quantities = [];
			};
			this.addData = function (event)
			{
				var detail = event.originalEvent.detail.returnData;
				var data = detail.data;
				var value = detail.value;
				var values = _.pluck(data, 'value');
				var index = values.indexOf(value);
				if (index !== -1)
				{
					var UID = data[index].uid;
					var UIDs = _.pluck(this.attr.selectedItems, 'uid');
					if (_.contains(UIDs, UID))
					{
						console.log('Value found!');
						
					}
					else
					{
						this.attr.selectedItems.push(data[index]);
					}
				}
			};
			this.after('initialize', function () {
				this.Init();
				this.on('nextDependencyLoaded', jQueryCalls.CalculatorsetTypeAhead);
				this.on('dataAdded', this.addData);
			});
		}
		return {
			calculatorComponent: component(Ingredients)
		};

	}
);
