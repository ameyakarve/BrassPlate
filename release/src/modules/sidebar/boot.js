define(["jquery","mustache","src/templates","src/modules/sidebar/nav"],function(e,t,n,r){var i=function(){e("#sidebar").html(t.render(n.sidebarTemplate,{})),r.navbarComponent.attachTo("#navbar")},o=function(t){e("li.active").each(function(){e(this).removeClass("active")}),e(t).addClass("active")};return{initialize:i,toggleNavbar:o}});