/*!3.5.3 MIT kooboy_li@163.com*/KISSY.add("magix",function(n,t,e){var r,i=n.noop,o=n.all,f=n.isObject,a=n.isArray,u=0,c="",s=[],$=s.slice,h=",",v=null,l=window,p=document,d=o(p),m="#",g=JSON.stringify,y="\x1e",b="object",w="prototype",x="params",k=/[#?].*$/,q=/([^=&?\/#]+)=?([^&#?]*)/g,V=/(?!^)=|&/,I=function(n){return(n||"mx_")+u++},A=I(),S={rootId:I(),defaultView:A,error:function(n){throw n}},T=S.hasOwnProperty,U=function(n){return typeof n==b?n:p.getElementById(n)},j=function(n){return!n||typeof n!=b},H=function(n,t,e){var r,i,o,f=0;for(o in n)r=n[o],i=t[o],j(r)&&i==r||(e[o]=1,f=1),t[o]=r;return f},O=function(n,t,e){if(n=U(n),t=U(t),n&&t&&(e=n==t,!e))try{e=t.contains?t.contains(n):16&t.compareDocumentPosition(n)}catch(r){}return e},E=Object.assign||function(n,t,e){for(e in t)n[e]=t[e];return n},C=function(n,t){t&&!C[n]&&(C[n]=1,o("head").append("<style>"+t+"</style>"))},L=function(n,t,e,r,i,o){for(t=t||s,a(n)||(n=[n]),a(t)||(t=[t]),r=0;r<n.length;r++){o=n[r];try{i=o&&o.apply(e,t)}catch(f){S.error(f)}}return i},M=function(n,t){return n&&T.call(n,t)},Z=function(n,t){return t.f-n.f||t.t-n.t},P=function(n,t,e,r){r=this,r.c=[],r.b=0|t||5,r.x=r.b+(n||20),r.r=e};E(P[w],{get:function(n){var t=this,e=t.c,r=e[y+n];return r&&(r.f++,r.t=u++,r=r.v),r},each:function(n,t,e,r,i){for(e=this,r=e.c,i=r.length;i--;)n(r[i].v,t,e)},set:function(n,t){var e=this,r=e.c,i=y+n,o=r[i],f=e.b;if(!o){if(r.length>=e.x)for(r.sort(Z);f--;)o=r.pop(),o.f>0&&e.del(o.o);o={o:n},r.push(o),r[i]=o}o.v=t,o.f=1,o.t=u++},del:function(n){n=y+n;var t=this.c,e=t[n],r=this.r;e&&(e.f=-1,e.v=c,delete t[n],r&&L(r,e.o))},has:function(n){return M(this.c,y+n)}});var R,N=function(t,e){n.use(t&&t+c,function(n){e&&e.apply(n,$.call(arguments,1))})},B=n.extend,F=function(t,e){n.one(t).html(e),d.fireHandler("htmlchange",{target:t})},K=e.test,D=function(n,t){t=this,n.eventTarget=t.e,L(t.f,n,t.v)},J=function(n,e,r,i,o){o?t[(i?"un":c)+"delegate"](n,e,r,o):t[i?"detach":nn](n,e,r,o)},Q=new P,Y=function(n,t,e){try{e=decodeURIComponent(e)}catch(r){}R[t]=e},_=function(n){var t,e=Q.get(n);return e||(R={},t=n.replace(k,c),n==t&&V.test(t)&&(t=c),n.replace(t,c).replace(q,Y),Q.set(n,e={a:t,b:R})),{path:e.a,params:E({},e.b)}},z=function(n,t,e){var r,i,o,f=[];for(i in t)r=t[i]+c,(!e||r||M(e,i))&&(r=encodeURIComponent(r),f.push(o=i+"="+r));return o&&(n+=(n&&(~n.indexOf("?")?"&":"?"))+f.join("&")),n},G=function(n,t){var e,r,i,o={};if(n&&(i=n.length))for(e=0;e<i;e++)r=n[e],o[t&&r?r[t]:r]=t?r:(0|o[r])+1;return o},W=Object.keys||function(n,t,e){t=[];for(e in n)M(n,e)&&t.push(e);return t},X={config:function(n,t){return t=S,n&&(t=f(n)?E(t,n):t[n]),t},boot:function(n){E(S,n),N(S.ini,function(t){E(S,t),E(S,n),N(S.exts,function(){Mn.on("changed",_n),sn.on("changed",_n),jn()})})},toMap:G,toTry:L,toUrl:z,parseUrl:_,mix:E,has:M,keys:W,inside:O,node:U,applyStyle:C,guid:I,Cache:P},nn="on",tn={fire:function(n,t,e,r){var i,o,f,a,u=y+n,s=this,$=s[u];if(t||(t={}),t.type||(t.type=n),$)for(i=$.length,o=i-1;i--;)f=r?i:o-i,a=$[f],a.f?(a.x=1,L(a.f,t,s),a.x=c):a.x||($.splice(f,1),o--);$=s[nn+n],$&&L($,t,s),e&&s.off(n)},on:function(n,t){var e=this,r=y+n,i=e[r]||(e[r]=[]);i.push({f:t})},off:function(n,t){var e,r,i=y+n,o=this,f=o[i];if(t){if(f)for(e=f.length;e--;)if(r=f[e],r.f==t){r.f=c;break}}else delete o[i],delete o[nn+n]}};X.Event=tn;var en={},rn={},on={},fn=0,an=function(n,t,e){var r=n.$os;if(r)for(var i=r.length;i--;){var o=r[i];if(e=M(t,o))break}return e},un=function(n){n=(n+c).split(",");for(var t,e=0;e<n.length;e++)t=n[e],M(rn,t)?rn[t]++:rn[t]=1;return n},cn=function(n){for(var t,e,r=0;r<n.length;r++)t=n[r],M(rn,t)&&(e=--rn[t],e||(delete rn[t],delete en[t]))},sn=E({get:function(n){var t=n?en[n]:en;return t},set:function(n){fn=H(n,en,on)||fn;return this},digest:function(n){n&&sn.set(n),fn&&(this.fire("changed",{keys:on}),fn=0,on={})},clean:function(n){return{ctor:function(){var t=this;n=un(n),t.on("destroy",function(){cn(n)})}}}},tn);X.State=sn;var $n,hn,vn,ln,pn,dn,mn,gn="path",yn="view",bn=new P,wn=new P,xn=l.location,kn=0,qn={query:{},params:{},href:c},Vn=/(?:^.*\/\/[^\/]+|#.*$)/gi,In=/^[^#]*#?!?/,An=function(n,t){return t=this[x],t[n]||c},Sn=m+"!",Tn=function(n,t){n=Sn+n,t?xn.replace(n):xn.hash=n},Un=function(n,t,e,r,i,o){n=z(n,t,o),n!=e.srcHash&&(kn=i,Tn(n,r))},jn=function(){var n,t,e=Cn().srcHash;J(l,"hashchange",function(r,i,o){t||(i=Cn(),n=i.srcHash,n!=e&&(o=function(){r.p=1,e=n,t=c,Tn(n),Ln()},r={reject:function(){r.p=1,t=c,Tn(e)},resolve:o,prevent:function(){t=1}},Mn.fire("change",r),t||r.p||o()))}),l.onbeforeunload=function(n){n=n||l.event;var t={};if(Mn.fire("pageunload",t),t.msg)return n&&(n.returnValue=t.msg),t.msg},Ln()},Hn=document.title,On=function(n,t){if(vn||(vn=S.routes||{},ln=S.unmatchView,pn=S.defaultView,dn=S.defaultPath||"/",mn=S.rewrite),!n[yn]){var e=n.hash[gn]||hn&&n.query[gn]||dn;mn&&(e=mn(e,n[x],vn)),t=vn[e]||ln||pn,n[gn]=e,n[yn]=t,f(t)&&E(n,t)}},En=function(n,t){var e=n.href,r=t.href,i=e+y+r,o=wn.get(i);if(!o){var f,a,u,c;o={force:!e},o[x]=c={};var s,$,h=n[x],v=t[x],l=[gn,yn].concat(W(h),W(v));for(s=l.length;s--;)$=l[s],1==s&&(h=n,v=t,c=o),a=h[$],u=v[$],a!=u&&(c[$]={from:a,to:u},f=1);wn.set(i,o={a:f,b:o})}return o},Cn=function(n){n=n||xn.href;var t,e,r,i,o,f=bn.get(n);return f||(t=n.replace(Vn,c),e=n.replace(In,c),r=_(t),i=_(e),o=E({},r[x]),E(o,i[x]),f={get:An,href:n,srcQuery:t,srcHash:e,query:r,hash:i,params:o},On(f),bn.set(n,f)),f},Ln=function(){var n=Cn(),t=En(qn,qn=n);return!kn&&t.a&&($n=t.b,$n.path&&(document.title=n.title||Hn),Mn.fire("changed",$n)),kn=0,$n},Mn=E({parse:Cn,diff:Ln,to:function(n,t,e,r){!t&&f(n)&&(t=n,n=c);var i=_(n),o=i[x],a=i[gn],u=qn[gn],s=qn[x],$=qn.query[x];if(E(o,t),a){if(!hn)for(u in $)M(o,u)||(o[u]=c)}else s&&(a=u,o=E(E({},s),o));Un(a,o,qn,e,r,$)}},tn);X.Router=Mn;var Zn,Pn,Rn,Nn=function(n,t,e){n.$d||n.$h||n.$cc!=n.$rc||(n.$cr||(n.$cr=1,n.$ca=0,n.fire("created")),t=n.id,e=Kn[n.pId],e&&!M(e.$r,t)&&(e.$r[t]=1,e.$rc++,Nn(e)))},Bn=function(n,t,e,r){!n.$ca&&n.$cr&&(n.$cr=0,n.$ca=1,n.fire("alter",t),e=n.id,r=Kn[n.pId],r&&M(r.$r,e)&&(r.$rc--,delete r.$r[e],Bn(r,t)))},Fn=function(n,t){return Zn||(r=p.body,n=S.rootId,t=U(n),t||(r.id=n),Zn=new zn(n)),Zn},Kn={},Dn=function(n,t){M(Kn,n)||(Kn[n]=t,zn.fire("add",{vframe:t}),n=U(n),n&&(n.vframe=t))},Jn=function(n,t,e){for(t=n.$il;t.length;)e=t.shift(),e.r||n.invoke(e.n,e.a),delete t[e.k]},Qn=function(n,t,e){e=Kn[n],e&&(delete Kn[n],zn.fire("remove",{vframe:e,fcc:t}),n=U(n),n&&(n.vframe=v))},Yn=function(n,t,e){if(n&&n.$g!=Rn&&(e=n.$v)&&e.$s>0){var r=t?an(e,t):Ht(e);r&&e.render();for(var i=n.children(),o=i.length,f=0;f<o;)Yn(Kn[i[f++]],t)}},_n=function(n){var t,e=Fn();(t=n.view)?e.mountView(t.to):(Rn=u++,Yn(e,n.keys))},zn=function(n,t,e){e=this,e.id=n,e.$c={},e.$cc=0,e.$rc=0,e.$s=1,e.$r={},e.$il=[],e.pId=t,Dn(n,e)};E(zn,E({all:function(){return Kn},get:function(n){return Kn[n]}},tn)),E(E(zn[w],tn),{mountView:function(n,t){var e,r,i,o,f,a,u,c,s,$=this,h=$.id,v=U(h);if(!$.$a&&v&&($.$a=1,$.$t=v.innerHTML),$.unmountView(),$.$d=0,v&&n){if($.path=n,e=_(n),i=e.path,r=++$.$s,o=e[x],a=$.pId,u=Kn[a],u=u&&u.$v,u=u&&u.updater,u&&n.indexOf(y)>0)for(c in o)s=o[c],s.charAt(0)==y&&(o[c]=u.get(s));E(o,t),N(i,function(n){if(r==$.$s){if(!n)return S.error(Error("id:"+h+" cannot load:"+i));f=Ut(n),i=new n({owner:$,id:h},o,f),$.$v=i,$.$g=Rn,At(i),i.init(o),i.render(),i.$t||($.$a=0,i.$p||i.endUpdate())}})}},unmountView:function(){var n,t,e=this,r=e.$v;e.$il=[],r&&(Pn||(t=1,Pn={id:e.id}),e.$d=1,e.unmountZone(0,1),Bn(e,Pn),e.$v=0,r.$s>0&&(r.$s=0,r.fire("destroy",0,1,1),qt(r,1),At(r,1)),r.$s--,r.owner=v,n=U(e.id),n&&e.$a&&F(n,e.$t),t&&(Pn=0)),e.$s++},mountVframe:function(n,t,e){var r,i=this;return Bn(i,{id:n}),r=Kn[n],r||(M(i.$c,n)||(i.$cl=c,i.$cc++),i.$c[n]=n,r=new zn(n,i.id)),r.mountView(t,e),r},mountZone:function(n,t){var e,r,i,f=this,a=[];n=n||f.id;var u=o(m+n+" [mx-view]");for(f.$h=1,e=0;e<u.length;e++)r=u[e],i=r.id||(r.id=I()),r.$m||(r.$m=1,a.push([i,r.getAttribute("mx-view")]));for(;a.length;)r=a.shift(),i=r[0],a[i]?S.error(Error("vf.id duplicate:"+i+" at "+f.path)):f.mountVframe(a[i]=i,r[1],t);f.$h=0,Nn(f)},unmountVframe:function(n,t){var e,r,i,o=this;n=n?o.$c[n]:o.id,e=Kn[n],e&&(r=e.$cr,i=e.pId,e.unmountView(),Qn(n,r),e.id=e.pId=c,e=Kn[i],e&&M(e.$c,n)&&(delete e.$c[n],e.$cl=c,e.$cc--,t||Nn(e)))},unmountZone:function(n,t){var e,r=this,i=r.$c;for(e in i)(!n||e!=n&&O(e,n))&&r.unmountVframe(e,1);t||Nn(r)},parent:function(n,t){for(t=this,n=n>>>0||1;t&&n--;)t=Kn[t.pId];return t},children:function(n){return n=this,n.$cl||(n.$cl=W(n.$c))},invoke:function(n,t){var e,r,i,o,f,a=this,u=a.$il;return(r=a.$v)&&r.$p?e=(i=r[n])&&L(i,t,r):(o=u[f=y+n],o&&(o.r=t==o.a),o={n:n,a:t,k:f},u.push(o),u[f]=o),e}}),X.Vframe=zn,e[w].invokeView=function(){var n,t=this.prop("vframe");return t&&(n=t.invoke.apply(t,arguments)),n};var Gn,Wn="mx-",Xn=new P(30,10),nt=/(?:([\w\-]+)\x1e)?([^(]+)\(([\s\S]*)?\)/,tt={},et={},rt=function(n,t){var e,i,o,f,a,u,c,$=[],h=n,v=n.getAttribute(Wn+t),l=[];if(v&&(a=Xn.get(v),a||(a=v.match(nt)||s,a={v:a[1],n:a[2],i:a[3]},a.p=a.i&&L(Function("return "+a.i)),Xn.set(v,a)),$.push(a={r:v,v:a.v,p:a.p,n:a.n})),a&&!a.v||et[t]){if(c=n.$v,!c)for(l.push(h);h!=r&&(h=h.parentNode);){if(Kn[i=h.id]||(i=h.$v)){c=i;break}l.push(h)}if(c){for(;v=l.pop();)v.$v=c;do if(e=Kn[c],e&&(u=e.$v)){o=u.$so,f=o[t];for(i in f)K(n,i)&&$.push({r:i,v:c,n:i});if(u.$t){a&&!a.v&&(a.v=c);break}}while(e&&(c=e.pId))}}return $},it=function(n){for(var t,e,i,o,f,a,u,c=n.target,s=n.type,$=[];c!=r&&1==c.nodeType;){if(e=rt(c,s),e.length)for($=[];t=e.shift();){if(!t.v)return S.error(Error("bad "+s+":"+t.r));o=Kn[t.v],f=o&&o.$v,f&&(a=t.n+y+s,u=f[a],u&&(n.eventTarget=c,n[x]=t.p||{},L(u,n,f)))}if((i=c.$)&&i[s]||n.isPropagationStopped())break;$.push(c),c=c.parentNode||r}for(;c=$.pop();)i=c.$||(c.$={}),i[s]=1},ot=function(n,t,e){var i=0|tt[n],o=e?-1:1;i&&e!==i||J(r,n,it,e),tt[n]=i+o,t&&(et[n]=(0|et[n])+o)},ft=/\\|'/g,at=/\r|\n/g,ut=/<%([@=!])?([\s\S]*?)%>|$/g,ct=function(n){var t=0,e="$p+='";return n.replace(ut,function(r,i,o,f){e+=n.slice(t,f).replace(ft,"\\$&").replace(at,"\\n"),t=f+r.length;return"@"==i?e+="';$s=$i();$p+=$s;$$[$s]="+o+";$p+='":"="==i?e+="'+$e("+o+")+'":"!"==i?e+="'+$n("+o+")+'":o&&(e+="';"+o+";$p+='"),r}),e+="';",e="var $t,$p='',$em={'&':'&amp;','<':'&lt;','>':'&gt;','\"':'&#34;','\\'':'&#39;','`':'&#96;'},$er=/[&<>\"'`]/g,$n=function(v){return v==null?'':''+v},$ef=function(m){return $em[m]},$e=function(v){return $n(v).replace($er,$ef)},$i=function(){return '"+y+"'+$g++},$s,$um={'!':'%21','\\'':'%27','(':'%28',')':'%29','*':'%2A'},$uf=function(m){return $um[m]},$uq=/[!')(*]/g,$eu=function(v){return encodeURIComponent($n(v)).replace($uq,$uf)},$qr=/[\\\\'\"]/g,$eq=function(v){return $n(v).replace($qr,'\\\\$&')};"+e+"return $p",Function("$g","$$",e)},st=new P,Gn=function(n,t){var e=st.get(n);return e||(e=ct(n),st.set(n,e)),e.call(t,1,t)},$t=/\d+\x1d/g,ht=/([\w\-:]+)(?:="([\s\S]*?)")?/g,vt={amp:"&",lt:"<",gt:">","#34":'"',"#39":"'","#96":"`"},lt=/&([^;]+);/g,pt=function(n,t){return vt[t]||n},dt=function(n,t,e,r,i,o,f){var a,u,s=n.id||(n.id=I()),$=t.owner;if(i){var h,v,l,p,d,m,g,y,h=xt(Gn(e.attr,r),f),v={};h.replace(ht,function(n,t,e,r){v[t]=r});for(var p,d,m,g,y,l=e.attrs.length;l--;)p=e.attrs[l],d=p.n,y=p.f,p.v?(a=1,u=v[d]):(m=p.p?n[y||d]:n.getAttribute(d),g=p.b?M(v,d):v[d]||c,m!=g&&(p.p?(p.q&&g.replace(lt,pt),n[y||d]=g):g?n.setAttribute(d,g):n.removeAttribute(d)))}a&&$.unmountVframe(s),(o||a&&e.tmpl)&&t.setHTML(s,Gn(e.tmpl,r)),a&&u&&$.mountVframe(s,u)},mt=function(n,t,e){var r,i=n.$i,f=Kn[i],a=f&&f.$v;if(a&&(r=a.tmpl)){var u=r.html,c=r.subs;if(n.$rd&&t)for(var s,$,h,v,l,p,d,m,g=c.length;g--;){if(h=0,v=0,$=c[g],l=1,d=$.mask,s=$.pKeys)for(p=s.length;p--;)if(M(t,s[p])){l=0;break}if(l){for(l=0,s=$.keys,p=s.length;p--;)if(M(t,s[p])){if(l=1,!d||h&&v){h=$.tmpl,v=$.attr;break}m=d.charAt(p),h=h||1&m,v=v||2&m}if(l){var b=o(xt($.path,i));for(p=0;p<b.length;)dt(b[p++],a,$,e,v,h,i)}}}else{if(!r[y]){r[y]=1;var w,x,k={},q=function(n){return k[n].tmpl};for(w=c.length;w--;)x=c[w],x.s&&(k[x.s]=x,x.tmpl=x.tmpl.replace($t,q));u=r.html=u.replace($t,q)}n.$rd=1,a.setHTML(n.$t,Gn(u,e))}}},gt=function(n){var t=this;t.$i=n,t.$t=n,t.$data={},t.$keys={}},yt=gt.prototype;E(yt,{to:function(n,t){t=this,t.$t=n},get:function(n){var t=this.$data;return n&&(t=t[n]),t},gain:function(n){for(var t,e=this.$data,r=n.split(".");e&&r.length;)t=r.shift(),e=e[t];return e},set:function(n){var t=this,e=t.$data,r=t.$keys;return H(n,e,r),t},digest:function(n){var t=this;n&&t.set(n),n=t.$data;var e=t.$keys;return t.$keys={},mt(t,e,n),t},snapshot:function(){var n=this;return n.$ss=g(n.$data),n},altered:function(){var n=this;if(n.$ss)return n.$ss!=g(n.$data)}});var bt=/^(\$?)([^<]+?)<([^>]+)>$/,wt=/\x1f/g,xt=function(n,t){return(n+c).replace(wt,t||this.id)},kt=function(n,t,e){return n.$l?e=n:(e=function(n){L(e.$l,n,this)},e.$l=[n],e.$m=1),e.$l=e.$l.concat(t.$l||t),e},qt=function(n,t){var e,r,i=n.$r;for(e in i)r=i[e],(t||r.x)&&Vt(i,e,1)},Vt=function(n,t,e,r){var i,o,f=n[t];return f&&f!=r&&(o=f.e,i=o.destroy,i&&e&&L(i,s,o),delete n[t]),o},It=function(n,t,e){t=n.render,n.render=function(){e=this,e.$s>0&&(e.$s++,e.fire("rendercall"),qt(e),L(t,$.call(arguments),e))}},At=function(n,t){var e,r,i=n.$eo,o=n.$so;for(e in i)ot(e,o[e],t);for(i=n.$el,e=i.length;e--;)r=i[e],J(r.e,r.n,D,t,{i:n.id,v:n,f:r.f,e:r.e})},St=[],Tt={win:l,doc:p},Ut=function(n){if(!n[y]){n[y]=[];var t,e,r,i,o,f,a,u,c,s=n[w],$={},v=[],l={},p={};if(e=s.mixins,u=0,e)for(c=e.length;u<c;){o=e[u++];for(a in o)t=o[a],r=p[a],"ctor"!=a?(bt.test(a)&&(r?t=kt(r,t):t.$m=1),p[a]=t,M(s,a)||(s[a]=t)):n[y].push(t)}for(a in s)if(t=s[a],e=a.match(bt))for(f=e[1],r=e[2],i=e[3].split(h);u=i.pop();){if(o=Tt[r],c=1,f){if(o){v.push({f:t,e:o,n:u});continue}c=2,o=l[u],o||(o=l[u]={}),o[r]=1}$[u]=$[u]|c,u=r+y+u,o=s[u],o?o.$m&&(t.$m?s[u]=kt(o,t):M(s,a)&&(s[u]=t)):s[u]=t}It(s),s.$eo=$,s.$el=v,s.$so=l,s.$t=!!s.tmpl}return n[y]},jt=function(n,t,e){for(var r=0;r<n.length&&!(e=M(t,n[r]));r++);return e},Ht=function(n){var t,e=n.$l;return e.f&&(e.p&&(t=$n[gn]),t||(t=jt(e.k,$n[x]))),t},Ot=function(n,t){t=this,E(t,n),t.$l={k:[]},t.$r={},t.$s=1,t.updater=new gt(t.id),L(St,n,t)},Et=Ot[w];E(Ot,{merge:function(n,t){t=n&&n.ctor,t&&St.push(t),E(Et,n)},extend:function(n,t){var e=this;n=n||{};var r=n.ctor,i=[];r&&i.push(r);var o=function(n,t,r){e.call(this,n,t),L(i.concat(r),t,this)};return o.extend=e.extend,B(o,e,n,t)}}),E(E(Et,tn),{render:i,init:i,wrapEvent:xt,beginUpdate:function(n,t){t=this,t.$s>0&&t.$p&&(t.owner.unmountZone(n,1),t.fire("prerender",{id:n}))},endUpdate:function(n,t,e,r){t=this,t.$s>0&&(n=n||t.id,t.fire("rendered",{id:n}),r=t.$p,t.$p=1,e=t.owner,e.mountZone(n),r||setTimeout(t.wrapAsync(function(){Jn(e)}),0))},wrapAsync:function(n,t){var e=this,r=e.$s;return function(){r>0&&r==e.$s&&n&&n.apply(t||e,arguments)}},observeLocation:function(n,t){var e,r=this;e=r.$l,e.f=1,f(n)&&(t=n.path,n=n[x]),e.p=t,n&&(e.k=(n+c).split(h))},observeState:function(n){this.$os=(n+c).split(h)},capture:function(n,t,e,r,i){return r=this.$r,t?(Vt(r,n,1,t),i={e:t,x:e},r[n]=i):(i=r[n],t=i&&i.e||t),t},release:function(n,t){return Vt(this.$r,n,t)},leaveTip:function(n,t){var e=this,r=function(i){var o="a",f="b";"change"!=i.type&&(o="b",f="a"),r[o]?(i.prevent(),i.reject()):t()?(i.prevent(),r[f]=1,e.leaveConfirm(n,function(){r[f]=0,i.resolve()},function(){r[f]=0,i.reject()})):i.resolve()},i=function(e){t()&&(e.msg=n)};Mn.on("change",r),Mn.on("pageunload",i),e.on("unload",r),e.on("destroy",function(){Mn.off("change",r),Mn.off("pageunload",i)})},setHTML:function(n,t){var e,r=this;r.beginUpdate(n),r.$s>0&&(e=U(n),e&&F(e,xt(t,r.id))),r.endUpdate(n)}}),X.View=Ot;var Ct=n.type,Lt=n.bind,Mt=n.now,Zt=function(){this.id=I("b"),this.$={}};E(Zt[w],{get:function(n,t,e){var r=this,i=t!=e,o=r.$,f=o;if(n){for(var u,s=a(n)?$.call(n):(n+c).split(".");(u=s.shift())&&f;)f=f[u];u&&(f=e)}var h;return i&&(h=Ct(t))!=Ct(f)&&(f=t),f},set:function(n,t){var e,r=this;f(n)||(e={},e[n]=t,n=e),E(r.$,n)}});var Pt=1,Rt=2,Nt=function(n,t,e){e=this[n],e&&(delete this[n],L(e,t,e.e))},Bt=function(n,t,e,r,i,o){var f=[],a=v,u=0;return function(c,s){var $,h=this;u++;var l=h.$m,p=l.k;f[c+1]=h;var d={bag:h,error:s};if(s)a=s,t.fire("fail",d),$=1;else if(!o.has(p)){p&&o.set(p,h),l.t=Mt();var m=l.a;m&&L(m,h,h),l.x&&t.clear(l.x),t.fire("done",d),$=1}if(!e.$o){var g=u==r;g&&(e.$b=0,i==Rt&&(f[0]=a,L(n,f,e))),i==Pt&&L(n,[s?s:v,h,g,c],e)}$&&t.fire("end",d)}},Ft=function(n,t,e,r,i){if(n.$o)return n;if(n.$b)return n.enqueue(function(){Ft(this,t,e,r,i)});n.$b=1;var o=n.constructor,f=o.$r;a(t)||(t=[t]);for(var u,c=t.length,s=Bt(e,o,n,c,r,o.$c),$=0;$<c;$++)if(u=t[$]){var h,v=o.get(u,i),l=v.e,p=l.$m.k,d=Lt(s,l,$);p&&f[p]?f[p].push(d):v.u?(p&&(h=[d],h.e=l,f[p]=h,d=Lt(Nt,f,p)),o.$s(l,d)):d()}return n},Kt=function(){var n=this;n.id=I("s"),n.$q=[]};E(Kt[w],{all:function(n,t){return Ft(this,n,t,Rt)},save:function(n,t){return Ft(this,n,t,Rt,1)},one:function(n,t){return Ft(this,n,t,Pt)},enqueue:function(n){var t=this;return t.$o||(t.$q.push(n),t.dequeue(t.$a)),t},dequeue:function(){var n=this,t=$.call(arguments);n.$b||n.$o||(n.$b=1,setTimeout(function(){if(n.$b=0,!n.$o){var e=n.$q.shift();e&&L(e,n.$a=t,n)}},0))},destroy:function(n){n=this,n.$o=1,n.$q=0}});var Dt=function(n,t,e){return e=[g(t),g(n)],e.join(y)},Jt=function(n,t,e,r){r=n&&n.$m,r&&t[r.n]&&e.del(r.k)},Qt=E({add:function(n){var t=this,e=t.$m;a(n)||(n=[n]);for(var r,i,o=n.length;o--;)r=n[o],r&&(i=r.name,r.cache=0|r.cache,e[i]=r)},create:function(n){var t=this,e=t.meta(n),r=0|n.cache||e.cache,i=new Zt;i.set(e),i.$m={n:e.name,a:e.after,x:e.cleans,k:r&&Dt(e,n)},f(n)&&i.set(n);var o=e.before;return o&&L(o,i,i),t.fire("begin",{bag:i}),i},meta:function(n){var t=this,e=t.$m,r=n.name||n,i=e[r];return i||n},get:function(n,t){var e,r,i=this;return t||(e=i.cached(n)),e||(e=i.create(n),r=1),{e:e,u:r}},clear:function(n){this.$c.each(Jt,G((n+c).split(h)))},cached:function(n){var t,e,r=this,i=r.$c,o=r.meta(n),f=0|n.cache||o.cache;if(f&&(e=Dt(o,n)),e){var a=r.$r,u=a[e];u?t=u.e:(t=i.get(e),t&&Mt()-t.$m.t>f&&(i.del(e),t=0))}return t}},tn);Kt.extend=function(n,t,e){var r=this,i=function(){r.call(this)};return i.$s=n,i.$c=new P(t,e),i.$r={},i.$m={},B(i,r,v,Qt)},X.Service=Kt;var Yt=function(n,t){var e=this,r=n&&n.ctor,i=function(){var n=this,t=arguments;e.apply(n,t),r&&r.apply(n,t)};return i.extend=Yt,B(i,e,n,t)};return E(i[w],tn),i.extend=Yt,X.Base=i,n.add(A,function(){return Ot.extend()}),X},{requires:["event","node","dom"]});