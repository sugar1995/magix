define("magix/magix",function(){var e=/\/\.\/|\/[^\/.]+?\/\.{2}\/|([^:\/])\/\/+|\.{2}\//,t=/\/[^\/]*$/,r=/[#?].*$/,n="",i=/([^=&?\/#]+)=?([^&=#?]*)/g,a="pathname",o=/^https?:\/\//i,s=0,c="/",f="vframe",u="\n",v=window.console,m=v&&v.error,l=function(){},h={tagName:f,rootId:"magix_vf_root",execError:function(e){m&&v.error(e)}},d=h.hasOwnProperty,p=function(e,t){return e?d.call(e,t):e},g=function(e){return function(t,r,n){switch(arguments.length){case 0:n=e;break;case 1:n=M.isObject(t)?w(e,t):p(e,t)?e[t]:null;break;case 2:null===r?(delete e[t],n=r):e[t]=n=r}return n}},y=function(e,t){return t.f==e.f?t.t-e.t:t.f-e.f},x=function(e,t){var r=this;return r.get?(r.c=[],r.x=e||20,r.b=r.x+(isNaN(t)?5:t),void 0):new x(e,t)},w=function(e,t,r){for(var n in t)r&&p(r,n)||(e[n]=t[n]);return e};w(x.prototype,{get:function(e){var t,r=this,n=r.c;return e=a+e,p(n,e)&&(t=n[e],t.f>=1&&(t.f++,t.t=s++,t=t.v)),t},set:function(e,t,r){var n=this,i=n.c,o=a+e,c=i[o];if(!p(i,o)){if(i.length>=n.b){i.sort(y);for(var f=n.b-n.x;f--;)c=i.pop(),delete i[c.k],c.m&&E(c.m,c.o,c)}c={},i.push(c),i[o]=c}return c.o=e,c.k=o,c.v=t,c.f=1,c.t=s++,c.m=r,t},del:function(e){e=a+e;var t=this.c,r=t[e];r&&(r.f=-1e5,r.v=n,delete t[e],r.m&&(E(r.m,r.o,r),r.m=n))},has:function(e){return e=a+e,p(this.c,e)}});var b=x(60),C=x(),E=function(e,t,r,n,i,a){for(M.isArray(e)||(e=[e]),t&&(M.isArray(t)||t.callee)||(t=[t]),n=0;e.length>n;n++)try{a=e[n],i=a&&a.apply(r,t)}catch(o){h.execError(o)}return i},M={isNumeric:function(e){return!isNaN(parseFloat(e))&&isFinite(e)},mix:w,has:p,safeExec:E,noop:l,config:g(h),start:function(e){var t=this;w(h,e),t.libRequire(h.iniFile,function(r){h=w(h,r,e),h["!tnc"]=h.tagName!=f;var n=h.progress;t.libRequire(["magix/router","magix/vom"],function(e,r){e.on("!ul",r.locChged),e.on("changed",r.locChged),n&&r.on("progress",n),t.libRequire(h.extensions,e.start)})})},keys:Object.keys||function(e){var t=[];for(var r in e)p(e,r)&&t.push(r);return t},local:g({}),path:function(i,a){var s=i+u+a,f=C.get(s);if(!f){if(o.test(a))f=a;else if(i=i.replace(r,n).replace(t,n)+c,a.charAt(0)==c){var v=o.test(i)?8:0,m=i.indexOf(c,v);f=i.substring(0,m)+a}else f=i+a;for(;e.test(f);)f=f.replace(e,"$1/");C.set(s,f)}return f},pathToObject:function(e,t){var s=e+u+t,f=b.get(s);if(!f){f={};var v={},m=n;r.test(e)?m=e.replace(r,n):~e.indexOf("=")||(m=e);var l=e.replace(m,n);if(m&&o.test(m)){var h=m.indexOf(c,8);m=~h?m.substring(h):c}l.replace(i,function(e,r,n){if(t)try{n=decodeURIComponent(n)}catch(i){}v[r]=n}),f[a]=m,f.params=v,b.set(s,f)}return f},objectToPath:function(e,t,r){var n,i=e[a],o=[],s=e.params;for(var c in s)n=s[c],(!r||n||p(r,c))&&(t&&(n=encodeURIComponent(n)),o.push(c+"="+n));return o.length&&(i=i+"?"+o.join("&")),i},listToMap:function(e,t){var r,n,i,a={};if(M.isString(e)&&(e=e.split(",")),e&&(i=e.length))for(r=0;i>r;r++)n=e[r],a[t?n[t]:n]=t?n:1;return a},cache:x},P=Object.prototype.toString;return w(M,{libRequire:function(e,t){M.isArray(e)||(e=[e]),e?require(e,t):t&&t()},isArray:$.isArray,isFunction:$.isFunction,isObject:function(e){return"[object Object]"==P.call(e)},isString:function(e){return"[object String]"==P.call(e)},isNumber:function(e){return"[object Number]"==P.call(e)},isRegExp:function(e){return"[object RegExp]"==P.call(e)},extend:function(e,t,r,n){e.superclass=t.prototype,t.prototype.constructor=t;var i=function(){};return i.prototype=t.prototype,e.prototype=new i,M.mix(e.prototype,r),M.mix(e,n),e.prototype.constructor=e,e}})}),define("magix/router",["magix/magix","magix/event"],function(e,t){var r,n,i,a,o=window,s="",c="pathname",f="view",u=e.has,v=e.mix,m=document,l=e.keys,h=/^UTF-8$/i.test(m.charset||m.characterSet||"UTF-8"),d=e.config(),p=e.cache(),g=e.cache(40),y={params:{},href:s},x=/#.*$/,w=/^[^#]*#?!?/,b="params",C=d.nativeHistory,E=function(t,r,n){if(t){n=this[b],e.isString(t)&&(t=t.split(","));for(var i=0;t.length>i&&!(r=u(n,t[i]));i++);}return r},M=function(){return this[c]},P=function(){return this[f]},T=function(e,t,r,n){return r=this,n=r[b],arguments.length>1?n[e]=t:n[e]},O=function(t){var r=e.pathToObject(t,h),n=r[c];return n&&a&&(r[c]=e.path(o.location[c],n)),r},A=v({viewInfo:function(t,r){var i,a;if(!n){n={rs:d.routes||{},nf:d.notFoundView};var o=d.defaultView;n.dv=o;var f=d.defaultPathname||s;i=n.rs,n.f=e.isFunction(i),n.f||i[f]||!o||(i[f]=o),n[c]=f}return t||(t=n[c]),i=n.rs,a=n.f?i.call(d,t,r):i[t],{view:a||n.nf||n.dv,pathname:a||C||n.nf?t:n[c]}},start:function(){var e=A,t=o.history;i=C&&t.pushState,a=C&&!i,i?e.useState():e.useHash(),e.route()},parseQH:function(e,t){e=e||o.location.href;var r=A,n=p.get(e);if(!n){var i=e.replace(x,s),a=e.replace(w,s),u=O(i),m=O(a),l={};v(l,u[b]),v(l,m[b]),n={get:T,set:T,href:e,refHref:y.href,srcQuery:i,srcHash:a,query:u,hash:m,params:l},p.set(e,n)}if(t&&!n[f]){var h;h=C?n.hash[c]||n.query[c]:n.hash[c];var d=r.viewInfo(h,n);v(n,d)}return n},getChged:function(e,t){var r=e.href,n=t.href,i=r+"\n"+n,a=g.get(i);if(!a){var o,s,u;a={},a[f]=u,a[c]=u,a[b]={};var v,m,h=[c,f];for(v=1;v>=0;v--)m=h[v],s=e[m],u=t[m],s!=u&&(a[m]={from:s,to:u},o=1);var d=e[b],p=t[b];for(h=l(d).concat(l(p)),v=h.length-1;v>=0;v--)m=h[v],s=d[m],u=p[m],s!=u&&(a[b][m]={from:s,to:u},o=1);a.occur=o,a.isParam=E,a.isPathname=M,a.isView=P,g.set(i,a)}return a},route:function(){var e=A,t=e.parseQH(0,1),n=!y.get,i=e.getChged(y,t);y=t,i.occur&&(r=t,e.fire("changed",{location:t,changed:i,force:n}))},navigate:function(t,n,o){var f=A;if(!n&&e.isObject(t)&&(n=t,t=s),n&&(t=e.objectToPath({params:n,pathname:t},h)),t){var m=O(t),l={};if(l[b]=v({},m[b]),l[c]=m[c],l[c]){if(a){var d=r.query[b];for(var p in d)u(d,p)&&!u(l[b],p)&&(l[b][p]=s)}}else{var g=v({},r[b]);l[b]=v(g,l[b]),l[c]=r[c]}var y,x=e.objectToPath(l,h,r.query[b]);y=i?x!=r.srcQuery:x!=r.srcHash,y&&(i?(f.poped=1,history[o?"replaceState":"pushState"](s,s,x),f.route()):(v(l,r,l),l.srcHash=x,l.hash={params:l[b],pathname:l[c]},f.fire("!ul",{loc:r=l}),x="#!"+x,o?location.replace(x):location.hash=x))}}},t);return A.useState=function(){var e=A,t=location.href;$(o).on("popstate",function(){var r=location.href==t;(e.poped||!r)&&(e.poped=1,e.route())},!1)},A.useHash=function(){$(o).on("hashchange",A.route,!1)},A}),define("magix/body",["magix/magix"],function(e){var t,r=e.has,n=e.mix,i={},a=document.body,o={},s=String.fromCharCode(26),c="mx-ei",f="mx-owner",u="addEventListener",v="removeEventListener",m=a[u],l={},h=65536,d="on",p=",",g=function(e){return e.id||(e.id="mx-e-"+h--)},y=function(e,t,r){return e&&e.setAttribute&&(r?e.setAttribute(t,r):r=e.getAttribute(t)),r},x=function(){this.returnValue=!1},w=function(){this.cancelBubble=!0},b={special:function(e){n(i,e)},process:function(e){if(e=e||window.event,e&&!e[d]){var n=e.target||e.srcElement||a;for(e[d]=1;n&&1!=n.nodeType;)n=n.parentNode;var i=n,o=e.type,u=l[o]||(l[o]=RegExp(p+o+"(?:,|$)"));if(!u.test(y(n,c))){for(var v,h,b="mx-"+o,$=[];i&&(v=y(i,b),h=y(i,c),!v&&!u.test(h));)$.push(i),i=i.parentNode;if(v){var C,E=v.split(s);if(E.length>1&&(C=E[0],v=E.pop()),C=C||y(i,f),!C)for(var M=i,P=t.all();M;){if(r(P,M.id)){y(i,f,C=M.id);break}M=M.parentNode}if(!C)throw Error("bad:"+v);var T=t.get(C),O=T&&T.view;O&&(m||(e.preventDefault=x,e.stopPropagation=w),O.processEvent({info:v,se:e,st:o,tId:g(n),cId:g(i)}))}else for(var A;$.length;)A=$.shift(),h=y(A,c)||d,u.test(h)||(h=h+p+o,y(A,c,h))}}},act:function(e,r,n){var s=o[e]||0,c=s>0?1:0,f=b.process;if(s+=r?-c:c,!s){n&&(t=n);var l=i[e];l?b.lib(a,e,r,f):m?a[r?v:u](e,f,!1):a[d+e]=r?null:f,r||(s=1)}o[e]=s}},C={focus:2,blur:2,mouseenter:2,mouseleave:2};return b.special(C),b.lib=function(e,t,r,n){var i=C[t];1==i?$(e)[r?"off":"on"](t,n):$(e)[(r?"un":"")+"delegate"]("[mx-"+t+"]",t,n)},b}),define("magix/event",["magix/magix"],function(e){var t=function(e){return"~"+e},r=e.safeExec,n={fire:function(e,n,i,a){var o=t(e),s=this,c=s[o];if(c){n||(n={}),n.type||(n.type=e);for(var f,u,v=c.length,m=v-1;v--;)f=a?v:m-v,u=c[f],(u.d||u.r)&&(c.splice(f,1),m--),u.d||r(u.f,n,s)}i&&delete s[o]},on:function(r,n,i){var a=t(r),o=this[a]||(this[a]=[]);e.isNumeric(i)?o.splice(i,0,{f:n}):o.push({f:n,r:i})},off:function(e,r){var n=t(e),i=this[n];if(i)if(r){for(var a,o=i.length-1;o>=0;o--)if(a=i[o],a.f==r&&!a.d){a.d=1;break}}else delete this[n]},once:function(e,t){this.on(e,t,!0)}};return n}),define("magix/vframe",["magix/magix","magix/event","magix/view"],function(e,t,r){var n,i,a,o,s,c=document,f=c.body,u=65536,v=e.safeExec,m=[],l=m.slice,h=e.mix,d=e.config("tagName"),p=e.config("rootId"),g=e.config("!tnc"),y=e.has,x=g?"mx-vframe":"mx-defer",w=f.contains,b=g&&f.querySelectorAll,$=" "+d+"[mx-vframe]",C="alter",E="created",M=function(e){return"object"==typeof e?e:c.getElementById(e)},P=function(e,t,r){return t=M(e),t&&(r=b?c.querySelectorAll("#"+t.id+$):t.getElementsByTagName(d)),r||m},T=function(e){return e.id||(e.id="magix_vf_"+u--)},O=function(e,t,r){if(e=M(e),t=M(t),e&&t)if(e!==t)try{r=w?t.contains(e):16&t.compareDocumentPosition(e)}catch(n){r=0}else r=1;return r},A=function(e){var t=this;t.id=e,t.cM={},t.cC=0,t.rC=0,t.sign=1<<30,t.rM={},t.owner=s};return h(A,{root:function(e,t,r){if(!n){a=t,o=r,s=e;var i=M(p);i||(i=c.createElement(d),i.id=p,f.insertBefore(i,f.firstChild)),n=new A(p),e.add(n)}return n}}),h(h(A.prototype,t),{mountView:function(t,n,i){var c=this,f=M(c.id);if(f._bak?f._chgd=1:(f._bak=1,f._tmpl=f.innerHTML),c.unmountView(),t){var u=e.pathToObject(t),m=u.pathname,l=--c.sign;e.libRequire(m,function(e){if(l==c.sign){r.prepare(e);var t=new e({owner:c,id:c.id,$:M,path:m,vom:s,location:a});c.view=t,t.on("interact",function(e){e.tmpl||(f._chgd&&(f.innerHTML=f._tmpl),c.mountZoneVframes()),t.on("rendered",function(){c.mountZoneVframes()}),t.on("prerender",function(){c.unmountZoneVframes(0,1)||c.cAlter()}),t.on("inited",function(){c.viewInited=1,c.fire("viewInited",{view:t}),i&&v(i,t,c)})},0),n=n||{},t.load(h(n,u.params,n),o)}})}},unmountView:function(){var e=this;if(e.view){i||(i={}),e.unmountZoneVframes(0,1),e.cAlter(i),e.view.oust();var t=M(e.id);t&&t._bak&&(t.innerHTML=t._tmpl),delete e.view,delete e.viewInited,i=0,e.fire("viewUnmounted")}e.sign--},mountVframe:function(e,t,r,n){var i=this;i.fcc&&i.cAlter();var a=s.get(e);return a||(a=new A(e),a.pId=i.id,y(i.cM,e)||i.cC++,i.cM[e]=1,s.add(a)),a.mountView(t,r,n),a},mountZoneVframes:function(e,t,r){var n=this,i=e||n.id;n.unmountZoneVframes(i,1);var a=P(i),o=a.length,s={};if(o)for(var c,f,u,v,m=0;o>m;m++)if(c=a[m],f=T(c),!y(s,f)&&(u=c.getAttribute("mx-view"),v=!c.getAttribute(x),v=v!=g,v||u)){n.mountVframe(f,u,t,r);for(var l,h=P(c),d=0,p=h.length;p>d;d++)l=h[d],s[T(l)]=1}n.cCreated()},unmountVframe:function(e,t){var r=this;e=e||r.id;var n=s.get(e);if(n){var i=n.fcc;n.unmountView(),s.remove(e,i);var a=s.get(n.pId);a&&y(a.cM,e)&&(delete a.cM[e],a.cC--,t||a.cCreated())}},unmountZoneVframes:function(e,t){var r,n,i=this,a=i.cM;for(n in a)e?O(n,e)&&i.unmountVframe(n,r=1):i.unmountVframe(n,r=1);return t||i.cCreated(),r},invokeView:function(e){var t,r=this,n=r.view,i=r.viewInited&&n[e],a=l.call(arguments,1);return i&&(t=v(i,a,n)),t},cCreated:function(e){var t=this;if(t.cC==t.rC){var r=t.view;r&&!t.fcc&&(t.fcc=1,delete t.fca,r.fire(E,e),t.fire(E,e)),s.vfCreated();var n=t.id,i=s.get(t.pId);i&&!y(i.rM,n)&&(i.rM[n]=i.cM[n],i.rC++,i.cCreated(e))}},cAlter:function(e){var t=this;e||(e={});var r=t.fcc;if(delete t.fcc,!t.fca&&r){var n=t.view,i=t.id;n&&(t.fca=1,n.fire(C,e),t.fire(C,e));var a=s.get(t.pId);a&&y(a.rM,i)&&(a.rC--,delete a.rM[i],a.cAlter(e))}},locChged:function(){var t=this,r=t.view;if(t.viewInited&&r.sign>0){var n=r.olChanged(o),i={location:a,changed:o,prevent:function(){this.cs=m},to:function(t){t=t||m,e.isString(t)&&(t=t.split(",")),this.cs=t}};n&&v(r.locationChange,i,r);for(var c,f=i.cs||e.keys(t.cM),u=0,l=f.length;l>u;u++)c=s.get(f[u]),c&&c.locChged()}}}),A}),define("magix/view",["magix/magix","magix/event","magix/body"],function(e,t,r){var n=e.safeExec,i=e.has,a=",",o=[],s=e.noop,c=e.mix,f="~",u=function(e){return function(){var t,r=this,n=r.notifyUpdate();return n&&(t=e.apply(r,arguments)),t}},v=e.cache(40),m="<",l=">",h=/\smx-(?!view|defer|owner|vframe)[a-z]+\s*=\s*"/g,d=String.fromCharCode(26),p={prevent:function(e){e=e||this.srcEvent,e.preventDefault()},stop:function(e){e=e||this.srcEvent,e.stopPropagation()},halt:function(e){this.prevent(e),this.stop(e)}},g=/(\w+)(?:<(\w+)>)?(?:{([\s\S]*)})?/,y=/(\w+):([^,]+)/g,x=/([$\w]+)<([\w,]+)>/,w=function(e){var t=this;c(t,e),t.sign=1,n(w.ms,[e],t)};w.ms=[],w.prepare=function(e){if(!e[f]){e[f]=1;var t,r,n,i,o,c=e.prototype,v={};for(var h in c)if(t=c[h],r=h.match(x))for(n=r[1],i=r[2],i=i.split(a),o=i.length-1;o>-1;o--)r=i[o],v[r]=1,c[n+m+r+l]=t;else"render"==h&&t!=s&&(c[h]=u(t));i&&(c.$evts=v)}},w.mixin=function(e,t){t&&w.ms.push(t),c(w.prototype,e)},c(c(w.prototype,t),{render:s,locationChange:s,init:s,hasTmpl:!0,enableEvent:!0,load:function(){var e=this,t=e.hasTmpl,r=arguments,i=e.sign,a=function(a){if(i>0&&i==e.sign){e.template=e.wrapMxEvent(a),e.delegateEvents(),e.fire("interact",{tmpl:t},1),n(e.init,r,e),e.fire("inited",0,1),n(e.render,o,e);var s=!t&&!e.rendered;s&&(e.rendered=!0,e.fire("primed",0,1))}};t?e.fetchTmpl(e.path,a):a()},beginUpdate:function(){var e=this;e.sign>0&&e.rendered&&(e.fire("refresh",0,1),e.fire("prerender"))},endUpdate:function(){var e=this;e.sign>0&&(e.rendered||(e.fire("primed",0,1),e.rendered=!0),e.fire("rendered"))},notifyUpdate:function(){var e=this;return e.sign>0&&(e.sign++,e.fire("rendercall")),e.sign},wrapMxEvent:function(e){return(e+"").replace(h,"$&"+this.id+d)},setViewHTML:function(e){var t,r=this;r.beginUpdate(),r.sign>0&&(t=r.$(r.id),t&&(t.innerHTML=e)),r.endUpdate()},observeLocation:function(t){var r,n=this;n.$ol||(n.$ol={keys:[]}),r=n.$ol;var i=r.keys;e.isObject(t)&&(r.pn=t.pathname,t=t.keys),t&&(r.keys=i.concat((t+"").split(a)))},olChanged:function(e){var t=this,r=t.$ol;if(r){var n=0;if(r.pn&&(n=e.isPathname()),!n){var i=r.keys;n=e.isParam(i)}return n}return 1},oust:function(){var e=this;e.sign>0&&(e.sign=0,e.fire("refresh",0,1),e.fire("destroy",0,1,1),e.delegateEvents(1)),e.sign--},processEvent:function(e){var t=this;if(t.enableEvent&&t.sign>0){var r=e.info,i=e.se,a=v.get(r);a||(a=r.match(g),a={n:a[1],f:a[2],i:a[3],p:{}},a.i&&a.i.replace(y,function(e,t,r){a.p[t]=r}),v.set(r,a));var o=a.n+m+e.st+l,s=t[o];if(s){var c=p[a.f];c&&c.call(p,i),n(s,{currentId:e.cId,targetId:e.tId,type:e.st,srcEvent:i,halt:p.halt,prevent:p.prevent,stop:p.stop,params:a.p},t)}}},delegateEvents:function(e){var t=this,n=t.$evts,i=t.vom;for(var a in n)r.act(a,e,i)}});var b,C="?t="+Date.now(),E={},M={};return w.prototype.fetchTmpl=function(e,t){var r=this,a="template"in r;if(a)t(r.template);else if(i(E,e))t(E[e]);else{var o=e.indexOf("/");if(!b){var s=e.substring(0,o);b=require.s.contexts._.config.paths[s]}e=e.substring(o+1);var c=b+e+".html",f=M[c],u=function(r){t(E[e]=r)};f?f.push(u):(f=M[c]=[u],$.ajax({url:c+C,success:function(e){n(f,e),delete M[c]},error:function(e,t){n(f,t),delete M[c]}}))}},w.extend=function(t,r,i){var a=this,o=function(){o.superclass.constructor.apply(this,arguments),r&&n(r,arguments,this)};return o.extend=a.extend,e.extend(o,a,t,i)},w}),define("magix/vom",["magix/vframe","magix/magix","magix/event"],function(e,t,r){var n=t.has,i=t.mix,a=0,o=0,s=0,c=0,f={},u={},v={},m=t.mix({all:function(){return f},add:function(e){n(f,e.id)||(a++,f[e.id]=e,m.fire("add",{vframe:e}))},get:function(e){return f[e]},remove:function(e,t){var r=f[e];r&&(a--,t&&o--,delete f[e],m.fire("remove",{vframe:r}))},vfCreated:function(){if(!c){o++;var e=o/a;e>s&&m.fire("progress",{percent:s=e},c=1==e)}},locChged:function(t){var r,n=t.loc;if(n?r=1:n=t.location,i(u,n),!r){i(v,t.changed);var a=e.root(m,u,v);v.view?a.mountView(n.view):a.locChged()}}},r);return m}),define("mxext/mmanager",["magix/magix","magix/event"],function(e,t){var r=e.has,n=e.safeExec,i=e.mix,a="mr",o=String.fromCharCode(26),s=e.isFunction,c=12e5,f=function(e,t,r){t=[];for(r in e)t.push(r,a,e[r]);return t},u=function(e,t){return[e.name,f(t.urlParams),f(t.postParams)].join(o)},v=Date.now||function(){return+new Date},m=v(),l=function(e){throw Error(e)},h=function(t){var r=this;r.$mClass=t,r.$mCache=e.cache(),r.$mCacheKeys={},r.$mMetas={},r.id="mm"+m--,n(h.ms,arguments,r)},d=[].slice,p=function(e,t,r){return function(){return e.apply(t,[t,r].concat(d.call(arguments)))}},g=function(e,t,r){var i=r.key,a=r.cKeys,o=a[i];if(o){var s=o.q;delete a[i],n(s,e)}},y=function(e){return function(){var t=new b(this),r=arguments,n=r[r.length-1];return n&&n.manage&&(n.manage(t),r=d.call(r,0,-1)),t[e].apply(t,r)}},x=function(e,t){return function(r,n){var i=d.call(arguments,1);return this.send(r,i.length>1?i:n,e,t)}};i(h,{create:function(e){return e||l("ungiven modelClass"),new h(e)},mixin:function(e,t){t&&h.ms.push(t),i(h.prototype,e)},ms:[]});var w={ALL:1,ONE:2,ORDER:4},b=function(e){this.$host=e,this.$busy=0,this.$reqs={},this.id=a+m--};return i(b.prototype,{send:function(t,i,a,o){var s=this;if(s.$busy)return s.next(function(){this.send(t,i,a,o)}),s;s.$busy=1;var c=s.$host,f=c.$mCache,u=c.$mCacheKeys,m=s.$reqs;e.isArray(t)||(t=[t]);var h,d,y,x=t.length,b=0,$=Array(x),C=[],E={},M=[],P=e.isArray(i);P&&(C=Array(i.length));for(var T,O=function(e,t,r){if(!s.$destroy){b++,delete m[e.id];var o=e.$mm,u=o.key;if($[t]=e,r)h=1,y=1,d=r,E.msg=r,E[t]=r;else{if(y=0,!u||u&&!f.has(u)){u&&f.set(u,e),o.done=v();var l=o.after,p=o.meta;l&&n(l,[e,p]),c.fire("done",{model:e,meta:p})}!e.fromCache&&o.used>0&&(e.fromCache=1),o.used++}if(a==w.ONE){var g=P?i[t]:i;g&&(C[t]=n(g,[y?E:null,e,E],s))}else if(a==w.ORDER){M[t]={m:e,e:y,s:r};for(var T,O,A=M.i||0;T=M[A];A++)O=P?i[A]:i,T.e&&(E.msg=T.s,E[A]=T.s),C[A]=n(O,[T.e?E:null,T.m,E].concat(C),s);M.i=A}b>=x&&(h||(E=null),a==w.ALL?($.unshift(E),C[0]=E,C[1]=n(i,$,s)):C.unshift(E),s.$ntId=setTimeout(function(){s.doNext(C)},30))}},A=0;t.length>A;A++)if(T=t[A]){var V=c.getModel(T,o),I=V.cKey,k=V.entity,j=p(O,k,A);j.id=s.id,I&&r(u,I)?u[I].q.push(j):V.update?(m[k.id]=k,I&&(u[I]={q:[j],e:k},j=g),k.request(j,{key:I,cKeys:u})):j()}else l("empty model");return s},fetchAll:function(e,t){return this.send(e,t,w.ALL)},saveAll:function(e,t){return this.send(e,t,w.ALL,1)},fetchOrder:x(w.ORDER),saveOrder:x(w.ORDER,1),saveOne:x(w.ONE,1),fetchOne:x(w.ONE),abort:function(){var e=this;clearTimeout(e.$ntId);var t=e.$host,i=e.$reqs,a=t.$mCacheKeys;for(var o in i){var s=i[o],c=s.$mm.key;if(c&&r(a,c)){for(var f,u=a[c],v=u.q,m=[],l=[],h=0;v.length>h;h++)f=v[h],f.id!=e.id?m.push(f):e.$destroy||l.push(f);n(l,["abort"],e),m.length?u.q=m:s.abort()}else s.abort()}e.$reqs={},e.$queue=[],e.$busy=0},next:function(e){var t=this;if(t.$queue||(t.$queue=[]),t.$queue.push(e),!t.$busy){var r=t.$latest;t.doNext(r)}return t},doNext:function(e){var t=this;t.$busy=0;var r=t.$queue;if(r){var i=r.shift();i&&n(i,e,t)}t.$latest=e},destroy:function(){var e=this;e.$destroy=1,e.abort()}}),i(i(h.prototype,t),{registerModels:function(t){var r=this,n=r.$mMetas;e.isArray(t)||(t=[t]);for(var i,a,o=0;t.length>o;o++)i=t[o],i&&(a=i.name,a?n[a]&&l("already exist:"+a):l("miss name"),i.cache&&(i.cacheKey||(i.cacheKey=u),i.cacheTime||(i.cacheTime=c)),n[a]=i)},registerMethods:function(e){i(this,e)},createModel:function(e){var t=this,r=t.getModelMeta(e),i=new t.$mClass;i.set(r),i.$mm={used:0};var a=e.before||r.before;s(a)&&n(a,[i,r]);var o=e.after||r.after;i.$mm.after=o;var c=e.cacheKey||r.cacheKey;return s(c)&&(c=n(c,[r,e])),i.$mm.key=c,i.$mm.meta=r,i.set(e),i.setUrlParams(r.urlParams),i.setPostParams(r.postParams),i.setUrlParams(e.urlParams),i.setPostParams(e.postParams),t.fire("inited",{model:i,meta:r}),i},getModelMeta:function(t){var r,n=this,i=n.$mMetas;r=e.isString(t)?t:t.name;var a=i[r];return a||l("Unfound:"+r),a},getModel:function(e,t){var r,n,i=this;return t||(r=i.getCachedModel(e)),r||(n=1,r=i.createModel(e)),{entity:r,cKey:r.$mm.key,update:n}},saveAll:y("saveAll"),fetchAll:y("fetchAll"),saveOrder:y("saveOrder"),fetchOrder:y("fetchOrder"),saveOne:y("saveOne"),fetchOne:y("fetchOne"),createMRequest:function(e){var t=new b(this);return e&&e.manage&&e.manage(t),t},clearCacheByKey:function(e){var t=this,r=t.$mCache;r.del(e)},clearCacheByName:function(e){for(var t=this,r=t.$mCache,n=r.c,i=0;n.length>i;i++){var a=n[i],o=a.v,s=o&&o.$mm;if(s){var c=s.meta.name;c==e&&r.del(s.key)}}},getCachedModel:function(t){var r,i,a=this,o=a.$mCache,c=null;if(e.isString(t)?r=t:(i=a.getModelMeta(t),r=t.cacheKey||i.cacheKey,s(r)&&(r=n(r,[i,t]))),r){var f=a.$mCacheKeys,u=f[r];if(u)c=u.e;else if(c=o.get(r)){i||(i=c.$mm.meta);var m=t.cacheTime||i.cacheTime||0;s(m)&&(m=n(m,[i,t])),m>0&&v()-c.$mm.done>m&&(a.clearCacheByKey(r),c=0)}}return c}}),h}),define("mxext/model",["magix/magix"],function(e){var t=function(t,r){var n=this,i=function(){i.superclass.constructor.apply(this,arguments),r&&e.safeExec(r,arguments,this)};return e.mix(i,n,{prototype:!0}),e.extend(i,n,t)},r=+new Date,n=encodeURIComponent,i=e.has,a=e.isObject,o=e.toString,s=function(e){this.set(e),this.id="m"+r--};return e.mix(s,{GET:"GET",POST:"POST",extend:t}),e.mix(s.prototype,{sync:e.noop,getPostParams:function(){return this.getParams(s.POST)},getUrlParams:function(){return this.getParams(s.GET)},getParams:function(t){var r=this;t||(t=s.GET);var i,a="$"+t,o=r[a],c=[];for(var f in o){i=o[f],e.isArray(i)||(i=[i]);for(var u=0;i.length>u;u++)c.push(f+"="+n(i[u]))}return c.join("&")},setUrlParamsIf:function(e,t){this.setParams(e,t,s.GET,!0)},setPostParamsIf:function(e,t){var r=this;r.setParams(e,t,s.POST,!0)},setParams:function(e,t,r,n){var o=this,s="$"+r;o[s]||(o[s]={});var c=o[s];if(!a(e)&&e){var f={};f[e]=t,e=f}for(var u in e)n&&i(c,u)||(c[u]=e[u])},setPostParams:function(e,t){var r=this;r.setParams(e,t,s.POST)},setUrlParams:function(e,t){this.setParams(e,t,s.GET)},get:function(e,t){var r=this,n=arguments.length,i=!n,a=2==n,s=r.$attrs;return s&&(s=i?s:s[e]),a&&o.call(t)!=o.call(s)&&(s=t),s},set:function(e,t){var r=this;if(r.$attrs||(r.$attrs={}),a(e))for(var n in e)r.$attrs[n]=e[n];else e&&(r.$attrs[e]=t)},request:function(e,t){var r=this;r.$abt=0;var n=function(n,i){r.$abt?e("abort",null,t):n?e(n,i,t):(a(i)||(i={data:i}),r.set(i),e(n,i,t))};r.$trans=r.sync(n)},abort:function(){var e=this,t=e.$trans;t&&t.abort&&t.abort(),delete e.$trans,e.$abt=1},isAborted:function(){return this.$abt}}),s}),define("mxext/view",["magix/magix","magix/view","magix/router"],function(e,t,r){var n=window,i=0,a=e.safeExec,o=e.has,s=[],c=s.slice,f="rendercall",u="destroy",v=function(e){n.clearTimeout(e),n.clearInterval(e)},m=function(e){a(e.destroy,s,e)},l=function(e){var t=this,r=t.$res,n=e.type==f,i=e.type!=u;for(var a in r){var o=r[a];(!n||o.mr)&&t.destroyManaged(a,i)}},h=t.extend({navigate:r.navigate,manage:function(t,r,n){var a=this,o=arguments,s=1,c=a.$res;if(1==o.length)r=t,t="res_"+i++,s=0;else{var f=c[t];f&&f.res!=r&&a.destroyManaged(t)}var u;e.isNumber(r)?u=v:r&&r.destroy&&(u=m);var l={hk:s,res:r,ol:n,mr:r&&r.fetchOne,oust:u};return c[t]=l,r},getManaged:function(e,t){var r=this,n=r.$res,i=null;if(o(n,e)){var a=n[e];i=a.res,t&&delete n[e]}return i},removeManaged:function(e){return this.getManaged(e,1)},destroyManaged:function(e,t){var r,n=this,i=n.$res,a=i[e];if(a&&(!t||!a.ol)){r=a.res;var o=a.oust,s=!1;o&&(o(r),s=!0),a.hk&&t||delete i[e],n.fire("destroyManaged",{resource:r,processed:s})}return r},invokeView:function(e){var t,r=this.vom.get(e);if(r){var n=c.call(arguments,1);t=r.invokeView.apply(r,n)}return t},invokeParentView:function(){var e=this,t=c.call(arguments);return t.unshift(e.owner.pId),e.invokeView.apply(e,t)}},function(){var e=this;e.$res={},e.on("interact",function(){e.on(f,l),e.on("prerender",l),e.on(u,l)}),a(h.ms,arguments,e)},{ms:[],mixin:function(t,r){r&&h.ms.push(r),e.mix(h.prototype,t)}});return h}),document.createElement("vframe");