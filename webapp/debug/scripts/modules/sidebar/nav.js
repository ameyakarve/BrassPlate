/*global define*/
'use strict';
define(
[
    'vendor/flight/lib/component'
], function (component)
	{
		function NavBar()
        {
            this.after('initialize', function () {
			
            });
        }
		return {navbarComponent: component(NavBar)};
    });
