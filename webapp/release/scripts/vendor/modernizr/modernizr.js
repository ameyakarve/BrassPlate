window.Modernizr=function(t,e,n){function i(t){b.cssText=t}function r(t,e){return i(_.join(t+";")+(e||""))}function o(t,e){return typeof t===e}function a(t,e){return!!~(""+t).indexOf(e)}function s(t,e){for(var i in t){var r=t[i];if(!a(r,"-")&&b[r]!==n)return"pfx"==e?r:!0}return!1}function u(t,e,i){for(var r in t){var a=e[t[r]];if(a!==n)return i===!1?t[r]:o(a,"function")?a.bind(i||e):a}return!1}function c(t,e,n){var i=t.charAt(0).toUpperCase()+t.slice(1),r=(t+" "+k.join(i+" ")+i).split(" ");return o(e,"string")||o(e,"undefined")?s(r,e):(r=(t+" "+T.join(i+" ")+i).split(" "),u(r,e,n))}function l(){p.input=function(n){for(var i=0,r=n.length;r>i;i++)E[n[i]]=!!(n[i]in w);return E.list&&(E.list=!(!e.createElement("datalist")||!t.HTMLDataListElement)),E}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),p.inputtypes=function(t){for(var i,r,o,a=0,s=t.length;s>a;a++)w.setAttribute("type",r=t[a]),i="text"!==w.type,i&&(w.value=C,w.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(r)&&w.style.WebkitAppearance!==n?(g.appendChild(w),o=e.defaultView,i=o.getComputedStyle&&"textfield"!==o.getComputedStyle(w,null).WebkitAppearance&&0!==w.offsetHeight,g.removeChild(w)):/^(search|tel)$/.test(r)||(i=/^(url|email)$/.test(r)?w.checkValidity&&w.checkValidity()===!1:w.value!=C)),A[t[a]]=!!i;return A}("search tel url email datetime date month week time datetime-local number range color".split(" "))}var d,h,f="2.6.2",p={},m=!0,g=e.documentElement,v="modernizr",y=e.createElement(v),b=y.style,w=e.createElement("input"),C=":)",x={}.toString,_=" -webkit- -moz- -o- -ms- ".split(" "),I="Webkit Moz O ms",k=I.split(" "),T=I.toLowerCase().split(" "),S={svg:"http://www.w3.org/2000/svg"},j={},A={},E={},O=[],$=O.slice,D=function(t,n,i,r){var o,a,s,u,c=e.createElement("div"),l=e.body,d=l||e.createElement("body");if(parseInt(i,10))for(;i--;)s=e.createElement("div"),s.id=r?r[i]:v+(i+1),c.appendChild(s);return o=["&#173;",'<style id="s',v,'">',t,"</style>"].join(""),c.id=v,(l?c:d).innerHTML+=o,d.appendChild(c),l||(d.style.background="",d.style.overflow="hidden",u=g.style.overflow,g.style.overflow="hidden",g.appendChild(d)),a=n(c,t),l?c.parentNode.removeChild(c):(d.parentNode.removeChild(d),g.style.overflow=u),!!a},N=function(e){var n=t.matchMedia||t.msMatchMedia;if(n)return n(e).matches;var i;return D("@media "+e+" { #"+v+" { position: absolute; } }",function(e){i="absolute"==(t.getComputedStyle?getComputedStyle(e,null):e.currentStyle).position}),i},F=function(){function t(t,r){r=r||e.createElement(i[t]||"div"),t="on"+t;var a=t in r;return a||(r.setAttribute||(r=e.createElement("div")),r.setAttribute&&r.removeAttribute&&(r.setAttribute(t,""),a=o(r[t],"function"),o(r[t],"undefined")||(r[t]=n),r.removeAttribute(t))),r=null,a}var i={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};return t}(),P={}.hasOwnProperty;h=o(P,"undefined")||o(P.call,"undefined")?function(t,e){return e in t&&o(t.constructor.prototype[e],"undefined")}:function(t,e){return P.call(t,e)},Function.prototype.bind||(Function.prototype.bind=function(t){var e=this;if("function"!=typeof e)throw new TypeError;var n=$.call(arguments,1),i=function(){if(this instanceof i){var r=function(){};r.prototype=e.prototype;var o=new r,a=e.apply(o,n.concat($.call(arguments)));return Object(a)===a?a:o}return e.apply(t,n.concat($.call(arguments)))};return i}),j.flexbox=function(){return c("flexWrap")},j.flexboxlegacy=function(){return c("boxDirection")},j.canvas=function(){var t=e.createElement("canvas");return!(!t.getContext||!t.getContext("2d"))},j.canvastext=function(){return!(!p.canvas||!o(e.createElement("canvas").getContext("2d").fillText,"function"))},j.webgl=function(){return!!t.WebGLRenderingContext},j.touch=function(){var n;return"ontouchstart"in t||t.DocumentTouch&&e instanceof DocumentTouch?n=!0:D(["@media (",_.join("touch-enabled),("),v,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(t){n=9===t.offsetTop}),n},j.geolocation=function(){return"geolocation"in navigator},j.postmessage=function(){return!!t.postMessage},j.websqldatabase=function(){return!!t.openDatabase},j.indexedDB=function(){return!!c("indexedDB",t)},j.hashchange=function(){return F("hashchange",t)&&(e.documentMode===n||e.documentMode>7)},j.history=function(){return!(!t.history||!history.pushState)},j.draganddrop=function(){var t=e.createElement("div");return"draggable"in t||"ondragstart"in t&&"ondrop"in t},j.websockets=function(){return"WebSocket"in t||"MozWebSocket"in t},j.rgba=function(){return i("background-color:rgba(150,255,150,.5)"),a(b.backgroundColor,"rgba")},j.hsla=function(){return i("background-color:hsla(120,40%,100%,.5)"),a(b.backgroundColor,"rgba")||a(b.backgroundColor,"hsla")},j.multiplebgs=function(){return i("background:url(https://),url(https://),red url(https://)"),/(url\s*\(.*?){3}/.test(b.background)},j.backgroundsize=function(){return c("backgroundSize")},j.borderimage=function(){return c("borderImage")},j.borderradius=function(){return c("borderRadius")},j.boxshadow=function(){return c("boxShadow")},j.textshadow=function(){return""===e.createElement("div").style.textShadow},j.opacity=function(){return r("opacity:.55"),/^0.55$/.test(b.opacity)},j.cssanimations=function(){return c("animationName")},j.csscolumns=function(){return c("columnCount")},j.cssgradients=function(){var t="background-image:",e="gradient(linear,left top,right bottom,from(#9f9),to(white));",n="linear-gradient(left top,#9f9, white);";return i((t+"-webkit- ".split(" ").join(e+t)+_.join(n+t)).slice(0,-t.length)),a(b.backgroundImage,"gradient")},j.cssreflections=function(){return c("boxReflect")},j.csstransforms=function(){return!!c("transform")},j.csstransforms3d=function(){var t=!!c("perspective");return t&&"webkitPerspective"in g.style&&D("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(e){t=9===e.offsetLeft&&3===e.offsetHeight}),t},j.csstransitions=function(){return c("transition")},j.fontface=function(){var t;return D('@font-face {font-family:"font";src:url("https://")}',function(n,i){var r=e.getElementById("smodernizr"),o=r.sheet||r.styleSheet,a=o?o.cssRules&&o.cssRules[0]?o.cssRules[0].cssText:o.cssText||"":"";t=/src/i.test(a)&&0===a.indexOf(i.split(" ")[0])}),t},j.generatedcontent=function(){var t;return D(["#",v,"{font:0/0 a}#",v,':after{content:"',C,'";visibility:hidden;font:3px/1 a}'].join(""),function(e){t=e.offsetHeight>=3}),t},j.video=function(){var t=e.createElement("video"),n=!1;try{(n=!!t.canPlayType)&&(n=new Boolean(n),n.ogg=t.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),n.h264=t.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),n.webm=t.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,""))}catch(i){}return n},j.audio=function(){var t=e.createElement("audio"),n=!1;try{(n=!!t.canPlayType)&&(n=new Boolean(n),n.ogg=t.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),n.mp3=t.canPlayType("audio/mpeg;").replace(/^no$/,""),n.wav=t.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),n.m4a=(t.canPlayType("audio/x-m4a;")||t.canPlayType("audio/aac;")).replace(/^no$/,""))}catch(i){}return n},j.localstorage=function(){try{return localStorage.setItem(v,v),localStorage.removeItem(v),!0}catch(t){return!1}},j.sessionstorage=function(){try{return sessionStorage.setItem(v,v),sessionStorage.removeItem(v),!0}catch(t){return!1}},j.webworkers=function(){return!!t.Worker},j.applicationcache=function(){return!!t.applicationCache},j.svg=function(){return!!e.createElementNS&&!!e.createElementNS(S.svg,"svg").createSVGRect},j.inlinesvg=function(){var t=e.createElement("div");return t.innerHTML="<svg/>",(t.firstChild&&t.firstChild.namespaceURI)==S.svg},j.smil=function(){return!!e.createElementNS&&/SVGAnimate/.test(x.call(e.createElementNS(S.svg,"animate")))},j.svgclippaths=function(){return!!e.createElementNS&&/SVGClipPath/.test(x.call(e.createElementNS(S.svg,"clipPath")))};for(var M in j)h(j,M)&&(d=M.toLowerCase(),p[d]=j[M](),O.push((p[d]?"":"no-")+d));return p.input||l(),p.addTest=function(t,e){if("object"==typeof t)for(var i in t)h(t,i)&&p.addTest(i,t[i]);else{if(t=t.toLowerCase(),p[t]!==n)return p;e="function"==typeof e?e():e,m!==n&&m&&(g.className+=" "+(e?"":"no-")+t),p[t]=e}return p},i(""),y=w=null,function(t,e){function i(t,e){var n=t.createElement("p"),i=t.getElementsByTagName("head")[0]||t.documentElement;return n.innerHTML="x<style>"+e+"</style>",i.insertBefore(n.lastChild,i.firstChild)}function r(){var t=y.elements;return"string"==typeof t?t.split(" "):t}function o(t){var e=v[t[m]];return e||(e={},g++,t[m]=g,v[g]=e),e}function a(t,n,i){if(n||(n=e),d)return n.createElement(t);i||(i=o(n));var r;return r=i.cache[t]?i.cache[t].cloneNode():p.test(t)?(i.cache[t]=i.createElem(t)).cloneNode():i.createElem(t),r.canHaveChildren&&!f.test(t)?i.frag.appendChild(r):r}function s(t,n){if(t||(t=e),d)return t.createDocumentFragment();n=n||o(t);for(var i=n.frag.cloneNode(),a=0,s=r(),u=s.length;u>a;a++)i.createElement(s[a]);return i}function u(t,e){e.cache||(e.cache={},e.createElem=t.createElement,e.createFrag=t.createDocumentFragment,e.frag=e.createFrag()),t.createElement=function(n){return y.shivMethods?a(n,t,e):e.createElem(n)},t.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+r().join().replace(/\w+/g,function(t){return e.createElem(t),e.frag.createElement(t),'c("'+t+'")'})+");return n}")(y,e.frag)}function c(t){t||(t=e);var n=o(t);return!y.shivCSS||l||n.hasCSS||(n.hasCSS=!!i(t,"article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")),d||u(t,n),t}var l,d,h=t.html5||{},f=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,p=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,m="_html5shiv",g=0,v={};(function(){try{var t=e.createElement("a");t.innerHTML="<xyz></xyz>",l="hidden"in t,d=1==t.childNodes.length||function(){e.createElement("a");var t=e.createDocumentFragment();return t.cloneNode===n||t.createDocumentFragment===n||t.createElement===n}()}catch(i){l=!0,d=!0}})();var y={elements:h.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",shivCSS:h.shivCSS!==!1,supportsUnknownElements:d,shivMethods:h.shivMethods!==!1,type:"default",shivDocument:c,createElement:a,createDocumentFragment:s};t.html5=y,c(e)}(this,e),p._version=f,p._prefixes=_,p._domPrefixes=T,p._cssomPrefixes=k,p.mq=N,p.hasEvent=F,p.testProp=function(t){return s([t])},p.testAllProps=c,p.testStyles=D,p.prefixed=function(t,e,n){return e?c(t,e,n):c(t,"pfx")},g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(m?" js "+O.join(" "):""),p}(this,this.document);