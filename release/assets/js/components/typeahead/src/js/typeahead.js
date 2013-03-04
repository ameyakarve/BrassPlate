/*
 * typeahead.js
 * https://github.com/twitter/typeahead
 * Copyright 2013 Twitter, Inc. and other contributors; Licensed MIT
 */

(function(){function e(e){return r[e]?r[e].apply(this,[].slice.call(arguments,1)):r.initialize.apply(this,arguments)}function t(e){o=e}var n,r,i={},o={};jQuery.fn.typeahead=e,e.configureTransport=t,r={initialize:function(t){var r={};if(t=utils.isArray(t)?t:[t],0===t.length)throw Error("no datasets provided");return delete e.configureTransport,n=n||new Transport(o),utils.each(t,function(e,t){var o,s=t.name=t.name||utils.getUniqueId();if(i[s])o=i[s];else{if(t.limit=t.limit||5,t.template=t.template,t.engine=t.engine,t.template&&!t.engine)throw Error("no template engine specified for "+s);o=i[s]=new Dataset({name:t.name,limit:t.limit,local:t.local,prefetch:t.prefetch,ttl_ms:t.ttl_ms,remote:t.remote,matcher:t.matcher,ranker:t.ranker,transport:n})}r[s]={name:t.name,limit:t.limit,template:t.template,engine:t.engine,getSuggestions:o.getSuggestions}}),this.each(function(){$(this).data({typeahead:new TypeaheadView({input:this,datasets:r})})})}}})();