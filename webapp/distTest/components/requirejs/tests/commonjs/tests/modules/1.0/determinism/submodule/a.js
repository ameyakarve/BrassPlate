define(["require","exports","module","test","test","a"],function(e){var i=e("test"),u=!1,i=e("test");try{e("a")}catch(s){u=!0}i.assert(u,"require does not fall back to relative modules when absolutes are not available.")});