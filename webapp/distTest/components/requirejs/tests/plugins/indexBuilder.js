(function(){function e(e){var i=e.split("?"),u=parseInt(i[0],10),s=i[1].split(":"),t=s[u];return{index:u,choices:s,choice:t}}define({normalize:function(u,s){var t=e(u),a=t.choices;for(i=0;a.length>i;i++)a[i]=s(a[i]);return t.index+"?"+a.join(":")},load:function(i,u,s){u([e(i).choice],function(e){s(e)})},write:function(i,u,s){var t=e(u);s("define('"+i+"!"+u+"', ['"+t.choice+"'], function (value) { return value;});\n")}})})();