(function (factory) {
  typeof define === 'function' && define.amd ? define(factory) :
  factory();
})((function () { 'use strict';

  /**
   * The code below uses open source software. Please visit the URL below for an overview of the licenses:
   * http://js.api.here.com/v3/3.1.30.6/HERE_NOTICE
   */

  (function(){var n,aa=[];function ba(a){return function(){return aa[a].apply(this,arguments)}}function ca(a,b){return aa[a]=b}function da(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}function ea(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:da(a)}}
  var fa="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value);},ha="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this;function ja(a,b){if(b){var c=ha;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];e in c||(c[e]={});c=c[e];}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&fa(c,a,{configurable:!0,writable:!0,value:b});}}
  ja("Array.prototype.find",function(a){return a?a:function(b,c){a:{var d=this;d instanceof String&&(d=String(d));for(var e=d.length,f=0;f<e;f++){var g=d[f];if(b.call(c,g,f,d)){b=g;break a}}b=void 0;}return b}});function ka(){ka=function(){};ha.Symbol||(ha.Symbol=la);}function ma(a,b){this.a=a;fa(this,"description",{configurable:!0,writable:!0,value:b});}ma.prototype.toString=function(){return this.a};
  var la=function(){function a(c){if(this instanceof a)throw new TypeError("Symbol is not a constructor");return new ma("jscomp_symbol_"+(c||"")+"_"+b++,c)}var b=0;return a}();function na(){ka();var a=ha.Symbol.iterator;a||(a=ha.Symbol.iterator=ha.Symbol("Symbol.iterator"));"function"!=typeof Array.prototype[a]&&fa(Array.prototype,a,{configurable:!0,writable:!0,value:function(){return oa(da(this))}});na=function(){};}
  function oa(a){na();a={next:a};a[ha.Symbol.iterator]=function(){return this};return a}function pa(a,b){na();a instanceof String&&(a+="");var c=0,d={next:function(){if(c<a.length){var e=c++;return {value:b(e,a[e]),done:!1}}d.next=function(){return {done:!0,value:void 0}};return d.next()}};d[Symbol.iterator]=function(){return d};return d}ja("Array.prototype.keys",function(a){return a?a:function(){return pa(this,function(b){return b})}});var qa;
  if("function"==typeof Object.setPrototypeOf)qa=Object.setPrototypeOf;else {var ra;a:{var sa={Ug:!0},ta={};try{ta.__proto__=sa;ra=ta.Ug;break a}catch(a){}ra=!1;}qa=ra?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null;}var ua=qa;ja("Object.setPrototypeOf",function(a){return a||ua});
  ja("Promise",function(a){function b(g){this.A=0;this.b=void 0;this.a=[];var h=this.c();try{g(h.resolve,h.reject);}catch(k){h.reject(k);}}function c(){this.a=null;}function d(g){return g instanceof b?g:new b(function(h){h(g);})}if(a)return a;c.prototype.b=function(g){if(null==this.a){this.a=[];var h=this;this.c(function(){h.g();});}this.a.push(g);};var e=ha.setTimeout;c.prototype.c=function(g){e(g,0);};c.prototype.g=function(){for(;this.a&&this.a.length;){var g=this.a;this.a=[];for(var h=0;h<g.length;++h){var k=
  g[h];g[h]=null;try{k();}catch(l){this.f(l);}}}this.a=null;};c.prototype.f=function(g){this.c(function(){throw g;});};b.prototype.c=function(){function g(l){return function(m){k||(k=!0,l.call(h,m));}}var h=this,k=!1;return {resolve:g(this.o),reject:g(this.f)}};b.prototype.o=function(g){if(g===this)this.f(new TypeError("A Promise cannot resolve to itself"));else if(g instanceof b)this.aa(g);else {a:switch(typeof g){case "object":var h=null!=g;break a;case "function":h=!0;break a;default:h=!1;}h?this.m(g):this.g(g);}};
  b.prototype.m=function(g){var h=void 0;try{h=g.then;}catch(k){this.f(k);return}"function"==typeof h?this.s(h,g):this.g(g);};b.prototype.f=function(g){this.i(2,g);};b.prototype.g=function(g){this.i(1,g);};b.prototype.i=function(g,h){if(0!=this.A)throw Error("Cannot settle("+g+", "+h+"): Promise already settled in state"+this.A);this.A=g;this.b=h;this.j();};b.prototype.j=function(){if(null!=this.a){for(var g=0;g<this.a.length;++g)f.b(this.a[g]);this.a=null;}};var f=new c;b.prototype.aa=function(g){var h=
  this.c();g.Kf(h.resolve,h.reject);};b.prototype.s=function(g,h){var k=this.c();try{g.call(h,k.resolve,k.reject);}catch(l){k.reject(l);}};b.prototype.then=function(g,h){function k(q,r){return "function"==typeof q?function(v){try{l(q(v));}catch(w){m(w);}}:r}var l,m,p=new b(function(q,r){l=q;m=r;});this.Kf(k(g,l),k(h,m));return p};b.prototype.catch=function(g){return this.then(void 0,g)};b.prototype.Kf=function(g,h){function k(){switch(l.A){case 1:g(l.b);break;case 2:h(l.b);break;default:throw Error("Unexpected state: "+
  l.A);}}var l=this;null==this.a?f.b(k):this.a.push(k);};b.resolve=d;b.reject=function(g){return new b(function(h,k){k(g);})};b.race=function(g){return new b(function(h,k){for(var l=ea(g),m=l.next();!m.done;m=l.next())d(m.value).Kf(h,k);})};b.all=function(g){var h=ea(g),k=h.next();return k.done?d([]):new b(function(l,m){function p(v){return function(w){q[v]=w;r--;0==r&&l(q);}}var q=[],r=0;do q.push(void 0),r++,d(k.value).Kf(p(q.length-1),m),k=h.next();while(!k.done)})};return b});
  ja("Object.entries",function(a){return a?a:function(b){var c=[],d;for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&c.push([d,b[d]]);return c}});ja("Array.prototype.fill",function(a){return a?a:function(b,c,d){var e=this.length||0;0>c&&(c=Math.max(0,e+c));if(null==d||d>e)d=e;d=Number(d);0>d&&(d=Math.max(0,e+d));for(c=Number(c||0);c<d;c++)this[c]=b;return this}});
  var va="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)Object.prototype.hasOwnProperty.call(d,e)&&(a[e]=d[e]);}return a};ja("Object.assign",function(a){return a||va});ja("Math.log2",function(a){return a?a:function(b){return Math.log(b)/Math.LN2}});var wa=this||self;
  function ya(a,b,c){a=a.split(".");c=c||wa;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===b?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b;}function za(){}
  function Aa(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return "array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return "object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return "array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return "function"}else return "null";
  else if("function"==b&&"undefined"==typeof a.call)return "object";return b}function Ba(a){var b=Aa(a);return "array"==b||"object"==b&&"number"==typeof a.length}function Ca(a){return "function"==Aa(a)}function Da(a){var b=typeof a;return "object"==b&&null!=a||"function"==b}var Ea="closure_uid_"+(1E9*Math.random()>>>0),Fa=0;function Ga(a,b,c){return a.call.apply(a.bind,arguments)}
  function Ha(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}function Ia(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?Ia=Ga:Ia=Ha;return Ia.apply(null,arguments)}
  function Ja(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var d=c.slice();d.push.apply(d,arguments);return a.apply(this,d)}}function t(a,b){ya(a,b,void 0);}function u(a,b){function c(){}c.prototype=b.prototype;a.l=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.yp=function(d,e,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[e].apply(d,g)};}function Ka(a){if(Error.captureStackTrace)Error.captureStackTrace(this,Ka);else {var b=Error().stack;b&&(this.stack=b);}a&&(this.message=String(a));}u(Ka,Error);Ka.prototype.name="CustomError";function La(a,b){this.c=a;this.f=b;this.b=0;this.a=null;}La.prototype.get=function(){if(0<this.b){this.b--;var a=this.a;this.a=a.next;a.next=null;}else a=this.c();return a};La.prototype.put=function(a){this.f(a);100>this.b&&(this.b++,a.next=this.a,this.a=a);};function Ma(){this.b=this.a=null;}var Oa=new La(function(){return new Na},function(a){a.reset();});Ma.prototype.add=function(a,b){var c=Oa.get();c.set(a,b);this.b?this.b.next=c:this.a=c;this.b=c;};Ma.prototype.remove=function(){var a=null;this.a&&(a=this.a,this.a=this.a.next,this.a||(this.b=null),a.next=null);return a};function Na(){this.next=this.b=this.a=null;}Na.prototype.set=function(a,b){this.a=a;this.b=b;this.next=null;};Na.prototype.reset=function(){this.next=this.b=this.a=null;};var Pa=String.prototype.trim?function(a){return a.trim()}:function(a){return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};function Qa(a,b){return -1!=a.indexOf(b)}function Ra(a,b){return a<b?-1:a>b?1:0}function Sa(a,b){for(var c in a)if(b.call(void 0,a[c],c,a))return !0;return !1}function Ta(a){for(var b in a)return !1;return !0}function Ua(a){var b={},c;for(c in a)b[c]=a[c];return b}var Va="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Wa(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<Va.length;f++)c=Va[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c]);}}var Xa;a:{var Ya=wa.navigator;if(Ya){var Za=Ya.userAgent;if(Za){Xa=Za;break a}}Xa="";}function $a(a){return Qa(Xa,a)}var ab=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if("string"===typeof a)return "string"!==typeof b||1!=b.length?-1:a.indexOf(b,0);for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return -1};function bb(a,b){this.b=a===cb&&b||"";this.a=db;}var db={},cb={},eb=new bb(cb,"");function fb(a,b){this.b=a===gb&&b||"";this.a=hb;}fb.prototype.zc=function(){return 1};var hb={},gb={};function ib(){this.b="";this.c=jb;this.a=null;}ib.prototype.zc=function(){return this.a};function kb(){var a=lb;if(a instanceof ib&&a.constructor===ib&&a.c===jb)return a.b;Aa(a);return "type_error:SafeHtml"}var jb={};function mb(a){var b=new ib;b.b=a;b.a=0;return b}mb("<!DOCTYPE html>");var lb=mb("");mb("<br>");function nb(a){var b=new fb(gb,eb instanceof bb&&eb.constructor===bb&&eb.a===db?eb.b:"type_error:Const");b instanceof fb&&b.constructor===fb&&b.a===hb?b=b.b:(Aa(b),b="type_error:TrustedResourceUrl");a.src=b.toString();}function ob(a){ob[" "](a);return a}ob[" "]=za;function pb(a,b){var c=qb;return Object.prototype.hasOwnProperty.call(c,a)?c[a]:c[a]=b(a)}var rb=$a("Opera"),sb=$a("Trident")||$a("MSIE"),tb=$a("Edge"),ub=$a("Gecko")&&!(Qa(Xa.toLowerCase(),"webkit")&&!$a("Edge"))&&!($a("Trident")||$a("MSIE"))&&!$a("Edge"),vb=Qa(Xa.toLowerCase(),"webkit")&&!$a("Edge");function xb(){var a=wa.document;return a?a.documentMode:void 0}var yb;
  a:{var zb="",Ab=function(){var a=Xa;if(ub)return /rv:([^\);]+)(\)|;)/.exec(a);if(tb)return /Edge\/([\d\.]+)/.exec(a);if(sb)return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(vb)return /WebKit\/(\S+)/.exec(a);if(rb)return /(?:Version)[ \/]?(\S+)/.exec(a)}();Ab&&(zb=Ab?Ab[1]:"");if(sb){var Bb=xb();if(null!=Bb&&Bb>parseFloat(zb)){yb=String(Bb);break a}}yb=zb;}var qb={};
  function Cb(a){return pb(a,function(){for(var b=0,c=Pa(String(yb)).split("."),d=Pa(String(a)).split("."),e=Math.max(c.length,d.length),f=0;0==b&&f<e;f++){var g=c[f]||"",h=d[f]||"";do{g=/(\d*)(\D*)(.*)/.exec(g)||["","","",""];h=/(\d*)(\D*)(.*)/.exec(h)||["","","",""];if(0==g[0].length&&0==h[0].length)break;b=0==g[1].length?0:parseInt(g[1],10);var k=0==h[1].length?0:parseInt(h[1],10);b=Ra(b,k)||Ra(0==g[2].length,0==h[2].length)||Ra(g[2],h[2]);g=g[3];h=h[3];}while(0==b)}return 0<=b})}var Db;
  Db=wa.document&&sb?xb():void 0;!ub&&!sb||sb&&9<=Number(Db)||ub&&Cb("1.9.1");sb&&Cb("9");function Eb(a){var b=document;a=String(a);"application/xhtml+xml"===b.contentType&&(a=a.toLowerCase());return b.createElement(a)}function Fb(a){wa.setTimeout(function(){throw a;},0);}var Gb;
  function Hb(){var a=wa.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!$a("Presto")&&(a=function(){var e=Eb("IFRAME");e.style.display="none";nb(e);document.documentElement.appendChild(e);var f=e.contentWindow;e=f.document;e.open();e.write(kb());e.close();var g="callImmediate"+Math.random(),h="file:"==f.location.protocol?"*":f.location.protocol+"//"+f.location.host;e=Ia(function(k){if(("*"==h||k.origin==h)&&k.data==g)this.port1.onmessage();},
  this);f.addEventListener("message",e,!1);this.port1={};this.port2={postMessage:function(){f.postMessage(g,h);}};});if("undefined"!==typeof a&&!$a("Trident")&&!$a("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var e=c.wj;c.wj=null;e();}};return function(e){d.next={wj:e};d=d.next;b.port2.postMessage(0);}}return "undefined"!==typeof document&&"onreadystatechange"in Eb("SCRIPT")?function(e){var f=Eb("SCRIPT");f.onreadystatechange=function(){f.onreadystatechange=null;
  f.parentNode.removeChild(f);f=null;e();e=null;};document.documentElement.appendChild(f);}:function(e){wa.setTimeout(e,0);}}function Ib(a,b){Jb||Kb();Lb||(Jb(),Lb=!0);Mb.add(a,b);}var Jb;function Kb(){if(wa.Promise&&wa.Promise.resolve){var a=wa.Promise.resolve(void 0);Jb=function(){a.then(Nb);};}else Jb=function(){var b=Nb;!Ca(wa.setImmediate)||wa.Window&&wa.Window.prototype&&!$a("Edge")&&wa.Window.prototype.setImmediate==wa.setImmediate?(Gb||(Gb=Hb()),Gb(b)):wa.setImmediate(b);};}var Lb=!1,Mb=new Ma;function Nb(){for(var a;a=Mb.remove();){try{a.a.call(a.b);}catch(b){Fb(b);}Oa.put(a);}Lb=!1;}function Ob(a){this.A=Pb;this.i=void 0;this.c=this.a=this.b=null;this.f=this.g=!1;if(a!=za)try{var b=this;a.call(void 0,function(c){Qb(b,Rb,c);},function(c){Qb(b,Sb,c);});}catch(c){Qb(this,Sb,c);}}var Pb=0,Rb=2,Sb=3;function Tb(){this.next=this.c=this.b=this.f=this.a=null;this.g=!1;}Tb.prototype.reset=function(){this.c=this.b=this.f=this.a=null;this.g=!1;};var Ub=new La(function(){return new Tb},function(a){a.reset();});function Vb(a,b,c){var d=Ub.get();d.f=a;d.b=b;d.c=c;return d}
  function Wb(a){if(a instanceof Ob)return a;var b=new Ob(za);Qb(b,Rb,a);return b}function Yb(a){return new Ob(function(b,c){c(a);})}function Zb(){var a,b,c=new Ob(function(d,e){a=d;b=e;});return new $b(c,a,b)}Ob.prototype.then=function(a,b,c){return ac(this,Ca(a)?a:null,Ca(b)?b:null,c)};Ob.prototype.$goog_Thenable=!0;Ob.prototype.cancel=function(a){if(this.A==Pb){var b=new bc(a);Ib(function(){cc(this,b);},this);}};
  function cc(a,b){if(a.A==Pb)if(a.b){var c=a.b;if(c.a){for(var d=0,e=null,f=null,g=c.a;g&&(g.g||(d++,g.a==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(c.A==Pb&&1==d?cc(c,b):(f?(d=f,d.next==c.c&&(c.c=d),d.next=d.next.next):dc(c),ec(c,e,Sb,b)));}a.b=null;}else Qb(a,Sb,b);}function fc(a,b){a.a||a.A!=Rb&&a.A!=Sb||hc(a);a.c?a.c.next=b:a.a=b;a.c=b;}
  function ac(a,b,c,d){var e=Vb(null,null,null);e.a=new Ob(function(f,g){e.f=b?function(h){try{var k=b.call(d,h);f(k);}catch(l){g(l);}}:f;e.b=c?function(h){try{var k=c.call(d,h);void 0===k&&h instanceof bc?g(h):f(k);}catch(l){g(l);}}:g;});e.a.b=a;fc(a,e);return e.a}Ob.prototype.m=function(a){this.A=Pb;Qb(this,Rb,a);};Ob.prototype.o=function(a){this.A=Pb;Qb(this,Sb,a);};
  function Qb(a,b,c){if(a.A==Pb){a===c&&(b=Sb,c=new TypeError("Promise cannot resolve to itself"));a.A=1;a:{var d=c,e=a.m,f=a.o;if(d instanceof Ob){fc(d,Vb(e||za,f||null,a));var g=!0;}else {if(d)try{var h=!!d.$goog_Thenable;}catch(l){h=!1;}else h=!1;if(h)d.then(e,f,a),g=!0;else {if(Da(d))try{var k=d.then;if(Ca(k)){ic(d,k,e,f,a);g=!0;break a}}catch(l){f.call(a,l);g=!0;break a}g=!1;}}}g||(a.i=c,a.A=b,a.b=null,hc(a),b!=Sb||c instanceof bc||jc(a,c));}}
  function ic(a,b,c,d,e){function f(k){h||(h=!0,d.call(e,k));}function g(k){h||(h=!0,c.call(e,k));}var h=!1;try{b.call(a,g,f);}catch(k){f(k);}}function hc(a){a.g||(a.g=!0,Ib(a.j,a));}function dc(a){var b=null;a.a&&(b=a.a,a.a=b.next,b.next=null);a.a||(a.c=null);return b}Ob.prototype.j=function(){for(var a;a=dc(this);)ec(this,a,this.A,this.i);this.g=!1;};
  function ec(a,b,c,d){if(c==Sb&&b.b&&!b.g)for(;a&&a.f;a=a.b)a.f=!1;if(b.a)b.a.b=null,kc(b,c,d);else try{b.g?b.f.call(b.c):kc(b,c,d);}catch(e){lc.call(null,e);}Ub.put(b);}function kc(a,b,c){b==Rb?a.f.call(a.c,c):a.b&&a.b.call(a.c,c);}function jc(a,b){a.f=!0;Ib(function(){a.f&&lc.call(null,b);});}var lc=Fb;function bc(a){Ka.call(this,a);}u(bc,Ka);bc.prototype.name="cancel";function $b(a,b,c){this.dl=a;this.resolve=b;this.reject=c;}var x=this;function mc(){return Object.create(y,void 0)}var A=Ia,nc=String,oc=x.Object.freeze||function(a){return a};function pc(a){for(var b=Object.keys(a),c=b.length,d;c--;)d=a[b[c]],Da(d)&&pc(d);return oc(a)}function qc(a){var b=Aa(a);if("object"==b||"array"==b){if(Ca(a.clone))return a.clone();b="array"==b?[]:{};for(var c in a)a.hasOwnProperty(c)&&(b[c]=qc(a[c]));return b}return a}var B=self.eval("undefined"),y=self.eval("null");function rc(a,b){return nc(a).split(b!==B?b:" ")}var sc="prototype constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
  function C(a,b,c,d,e){if(!(b=a instanceof b)&&c)throw new D(c,d,tc(e)?e:a);return b}function uc(a,b){if(!0===(C(a,b)&&a.constructor===b))throw new TypeError("Illegal constructor "+vc(b));}function wc(a,b,c,d,e){if(!(b=xc(a)===b)&&c)throw new D(c,d,tc(e)?e:a);return b}function yc(a,b,c,d){return wc(a,"Array",b,c,d)}t("H.lang.isArray",yc);function tc(a){return a!==B}function zc(a){return "string"===typeof a}t("H.lang.isString",zc);var Ac=parseInt,Bc=parseFloat,E=isNaN;
  function Cc(a){return a===+a}t("H.lang.isNumber",Cc);t("H.lang.isInteger",Number.isInteger?Number.isInteger:function(a){return "number"===typeof a&&0===a%1});function Dc(a){return !E(+a)}function xc(a){var b=Object[sc[0]][sc[6]].call(a).match(/^\[object (\w+)\]$/);return b?b[1]:typeof a}var Ec=[];function Fc(a){0>Ec.indexOf(a)&&Ec.push(a);}Fc(Ec);
  function vc(a,b,c,d){var e="",f=2>arguments.length,g;f&&(b={H:x.H},c="",d=Ec.slice());Gc(b,!0,function(h,k){try{if(g=h[k],k=Hc(h,g),!(Da(g)&&g.window===g&&g.self===g||Da(g)&&0<g.nodeType&&Ca(g.cloneNode))&&Da(g)){if(g===a)return e=c+"."+k,!0;if(0>d.indexOf(g)&&(d.push(g),e=vc(a,g,c+"."+k,d)))return !0}}catch(l){}});f&&(e=e?e.substr(1).replace("."+sc[0]+".","#"):"~"+(Ca(a)?Ic(a)+"()":xc(a)));return e}
  function Hc(a,b){var c=[];Gc(a,!1,function(d,e){d[e]===b&&c.push(e);});return c.sort(Jc)[0]}function Jc(a,b){return b.length-a.length}var Kc=Object[sc[0]][sc[2]];function Gc(a,b,c){var d;if(a){for(e in a)if((!b||Kc.call(a,e))&&c(a,e,!0))return;for(d=sc.length;d--;){var e=sc[d];if((!b||Kc.call(a,e))&&c(a,e,!1))break}}}function Ic(a){return (a=/^\s*function ([^\( ]+)/.exec(a))?a[1]:"anonymous"}function Lc(a,b,c){c[b]="#"+b;}var Mc=!!x.__karma__;function Nc(){throw Error("unimplemented method");}function Oc(a,b){b=b||{};"status"in b&&(this.status=+b.status);"statusText"in b&&(this.statusText=b.statusText);this.ok=200<=this.status&&300>this.status;this.bodyUsed=!1;a?"string"===typeof a?this.c=a:ArrayBuffer&&(ArrayBuffer.prototype.isPrototypeOf(a)||a.buffer)?this.a=a.buffer||a:Blob.prototype.isPrototypeOf(a)&&(this.b=a):this.c="";}t("H.net.Response",Oc);Oc.prototype.type="default";Oc.prototype.type=Oc.prototype.type;Oc.prototype.status=200;Oc.prototype.status=Oc.prototype.status;
  Oc.prototype.statusText="OK";Oc.prototype.statusText=Oc.prototype.statusText;function Pc(a){if(a.bodyUsed)return Yb(new TypeError("Already read"));a.bodyUsed=!0;}Oc.error=function(){Oc.a||(Oc.a=new Oc(null,{status:0,statusText:""}),Oc.a.type="error");return Oc.a};Oc.error=Oc.error;
  Oc.prototype.text=function(){var a=Pc(this);if(!a)if(this.c)a=Wb(this.c);else if(this.a){a=new Uint8Array(this.a);var b=a.length,c=Array(b),d;for(d=0;d<b;d++)c[d]=String.fromCharCode(a[d]);a=Wb(c.join(""));}else this.b?a=Qc(this.b):a=Yb("Unsupported response body");return a};Oc.prototype.json=function(){return this.text().then(x.JSON.parse)};Oc.prototype.blob=function(){var a,b=Pc(this);b||(this.b?a=this.b:this.a&&(a=new Blob([this.a],{type:"application/octet-stream"})));return b||Wb(a)};
  Oc.prototype.arrayBuffer=function(){return this.a?Pc(this)||Wb(this.a.slice(0)):this.blob().then(Oc.b)};Oc.b=function(a){var b=new FileReader;b.readAsArrayBuffer(a);return new Ob(function(c,d){b.onload=function(){c(b.result);};b.onerror=function(){d(b.error);};})};function Qc(a){var b=new FileReader;b.readAsText(a);return new Ob(function(c,d){b.onload=function(){c(b.result);};b.onerror=function(){d(b.error);};})}!Mc&&x.Response&&x.Response.error&&(Oc=x.Response,Fc(Oc.prototype));function Rc(a,b,c){function d(){var m=A(l.a,l),p=+k.timeout||0;Sc?(Tc(l,"timeout",m),e.timeout=p):p&&(l.c=setTimeout(function(){e.abort();l.a({type:"timeout"});},p));Tc(l,"error",m);Tc(l,"load",m);e.send(k.data);}var e,f,g,h=c&&c.headers||{},k={},l=this;if(!Ca(b))throw new D(Rc,1,"function required");Wa(h,Uc.headers,h);Wa(k,Uc,c||{});k.headers=h;this.b=b;this.T=e=new XMLHttpRequest;b=k.method;try{e.open(b,a,!0);for(f in h)h.hasOwnProperty(f)&&(g=h[f])&&e.setRequestHeader(f,g);e.withCredentials=!!k.withCredentials;
  d();}catch(m){this.a({type:"cors"});}}t("H.net.Xhr",Rc);var Uc={method:"GET",headers:{},data:null},Vc="withCredentials"in new XMLHttpRequest,Sc="timeout"in new XMLHttpRequest;function Tc(a,b,c){Vc?a.T.addEventListener(b,c):a.T["on"+b]=c;}function Wc(a,b,c){Vc?a.T.removeEventListener(b,c):a.T["on"+b]=null;}Rc.prototype.abort=function(){this.T&&(this.T.abort(),this.T&&this.a({type:"abort"}));};Rc.prototype.abort=Rc.prototype.abort;
  Rc.prototype.a=function(a){var b=a.type;a=this.T;var c,d;this.c&&clearTimeout(this.c);"load"===b?a instanceof XMLHttpRequest&&200!==a.status&&(c="network"):c=4===a.readyState&&0===a.status&&"error"==b?"cors":"error"!=b?b:"network";b=this.a;Wc(this,"timeout",b);Wc(this,"error",b);Wc(this,"load",b);0===a.status||c&&"network"!==c?d=Oc.error():d=new Oc(a.responseText||null,a);c=this.b;delete this.a;delete this.b;delete this.T;c(d);};function Xc(a,b){var c=[];a&&c.push(vc(a));1<arguments.length&&c.push(""+b);c=Error(c.join(" "));Object.setPrototypeOf(c,Xc.prototype);return c}u(Xc,Error);t("H.lang.IllegalOperationError",Xc);Xc.prototype.name="IllegalOperationError";var Yc,Zc,$c;function D(a,b,c){var d=arguments.length;b=b!==B?+b:b;if(b!==B){var e=(e=/^.*?\(([^\)]+)/.exec((""+a).replace(/(\/\*([\s\S]*?)\*\/)|(\/\/(.*)$)/gm,"")))?rc(e[1].replace(/\s+/g,""),","):[];e.forEach(Lc);e=e[b]||"#"+b;}var f=a?vc(a):"";d=2<d?nc(c):"";if(e||d)f+=" (Argument "+(e||"")+(d?" "+d:"")+")";d=Error(f);Object.setPrototypeOf(d,D.prototype);return d}u(D,Error);t("H.lang.InvalidArgumentError",D);D.prototype.name="InvalidArgumentError";function ad(){if(!zc("STATIC_DB"))throw new D(this.constructor,0);this.g=x.indexedDB||x.qp||x.Go||x.Ho;if(!this.g)throw new Xc(this.constructor,"This browser does not support IndexedDB");this.a=[];this.c=[];this.ri=A(this.ri,this);}var bd,dd;n=ad.prototype;n.put=function(a,b,c,d){if(!zc(a)&&!Cc(a))throw new D(this.put,0);if(!ed(b))throw new D(this.put,1);fd(this,function(e){gd(e.put(b,a),c,d);},d);};
  n.get=function(a,b,c){var d;if(!zc(a)&&!Cc(a))throw new D(this.get,0);if(!Ca(b))throw new D(this.get,1);fd(this,function(e){d=e.get(a);gd(d,b,c);},c);return {cancel:function(){d&&(d.onsuccess=hd);}}};n.remove=function(a,b,c){if(!zc(a)&&!Cc(a))throw new D(this.remove,0);fd(this,function(d){gd(d["delete"](a),b,c);},c);};n.clear=function(a,b){fd(this,function(c){gd(c.clear(),a,b);},b);};n.ri=function(){var a=this.b.result;a.objectStoreNames.contains("data")||a.createObjectStore("data");};
  function id(a,b,c){if(a.b)a.a?(a.a.push(b),c&&a.c.push(c)):a.f?c&&c(a.f):b(a.b.result);else {a.b=a.g.open(jd+"STATIC_DB",1);a.b.onupgradeneeded=a.ri;var d=a.b.onerror=function(){clearTimeout(a.i);a.f=this.error;a.c.forEach(function(e){e(a.f);});a.a=a.c=null;};a.i=setTimeout(function(){d.call({error:Error("DbOpenTimeoutError")});},500);a.b.onsuccess=function(){clearTimeout(a.i);a.a?(a.a.forEach(function(e){e(this.result);},this),a.a=a.c=null):(a.b=a.f=null,a.a=[],a.c=[]);};a.a.push(b);c&&a.c.push(c);}}
  function fd(a,b,c){id(a,function(d){d=d.transaction(["data"],"readwrite");b(d.objectStore("data"));},c);}function gd(a,b,c){b&&(a.onsuccess=function(){b(this.result);});c&&(a.onerror=function(){c(this.error);});}function ed(a){var b=Object.prototype.toString.call(a);return "[object Blob]"===b||"[object ArrayBuffer]"===b||zc(a)||Da(a)}function kd(){bd||(bd=new ad);return bd}t("H.util.IndexedDBStorage.getInstance",kd);var jd="H_";
  function ld(){if(!tc(dd))if("file:"===window.location.protocol&&-1<navigator.userAgent.toLowerCase().indexOf("firefox")&&128<=window.location.href.length)dd=!1;else {var a=x.indexedDB||x.qp||x.Go||x.Ho;var b=jd+"TEST_DB";try{var c=a&&a.open(b,1);}catch(d){}dd=!!c&&null===c.onupgradeneeded;c&&a.deleteDatabase&&a.deleteDatabase(b);}return dd}t("H.util.IndexedDBStorage.isSupported",ld);function nd(){this.Nd=this.Nd;this.sb=this.sb;}var od=0,pd={};nd.prototype.Nd=!1;nd.prototype.B=function(){if(!this.Nd&&(this.Nd=!0,this.u(),0!=od)){var a=this[Ea]||(this[Ea]=++Fa);delete pd[a];}};
  nd.prototype.zb=function(a,b){this.Nd?void 0!==b?a.call(b):a():(this.sb||(this.sb=[]),this.sb.push(void 0!==b?Ia(a,b):a));};nd.prototype.u=function(){if(this.sb)for(;this.sb.length;)this.sb.shift()();};function qd(a){a&&"function"==typeof a.B&&a.B();}function rd(a,b){this.type=a;this.currentTarget=this.target=b;this.f=this.a=!1;this.nl=!0;}rd.prototype.stopPropagation=function(){this.a=!0;};rd.prototype.preventDefault=function(){this.f=!0;this.nl=!1;};t("H.util.Event",rd);rd.prototype.stopPropagation=rd.prototype.stopPropagation;rd.prototype.stopPropagation=rd.prototype.stopPropagation;rd.prototype.CAPTURING_PHASE=1;rd.prototype.CAPTURING_PHASE=rd.prototype.CAPTURING_PHASE;rd.prototype.AT_TARGET=2;rd.prototype.AT_TARGET=rd.prototype.AT_TARGET;rd.prototype.BUBBLING_PHASE=3;rd.prototype.BUBBLING_PHASE=rd.prototype.BUBBLING_PHASE;rd.prototype.eventPhase=0;rd.prototype.eventPhase=rd.prototype.eventPhase;function sd(a,b,c){sd.l.constructor.call(this,a,c);this.data=b;}u(sd,rd);t("H.util.DataEvent",sd);function td(a,b,c){td.l.constructor.call(this,a,c);this.message=b;}u(td,rd);t("H.util.ErrorEvent",td);var ud=Math,vd=ud.min,wd=ud.max,xd=ud.round,yd=ud.floor,zd=ud.ceil,Ad=ud.abs,Bd=ud.log,Cd=ud.sqrt,Dd=ud.pow,Ed=ud.exp,Fd=ud.sin,Gd=ud.asin,Hd=ud.cos,Id=ud.tan,Jd=ud.atan,Kd=ud.atan2,Ld=ud.LN2,Md=ud.PI,Nd=Md/2,Od=Md/4,Pd=2*Md,Qd=3*Md,Rd=Md/180,Sd=180/Md,Td=1/0,Ud=Dd(-2,53),Vd=Vd||function(a){return Bd(a)/Ld};function Wd(a,b){var c;return 0>(c=a%b)===0>b?c:c+b}function Xd(a,b,c){b-=c=c||0;a-=c;return a-yd(a/b)*b+c}t("H.math.normalize",Xd);function Yd(a,b,c){return a>c?c:a<b?b:a}
  t("H.math.clamp",Yd);function Zd(a,b,c,d){d||(d=0);return b<c?a>=b-d&&a<=c+d:a>=c-d&&a<=b+d}function $d(a,b,c,d,e,f){return Cd(Dd((a-e)*(d-f)-(b-f)*(c-e),2)/(Dd(c-e,2)+Dd(d-f,2)))}var ae={NONE:0,VERTEX:1,EDGE:2,SURFACE:3};t("H.math.CoverType",ae);
  function be(a,b,c,d,e,f){var g=c.length,h=g,k=c[0],l=0,m=0,p=0;d=d/2||0;var q=f||2;f=q*(e?0:1)+1;for(var r=q-2;1!=l&&h>f;){h-=r;var v=c[--h];q=c[--h];var w=c[h?h-r-1:(g+(h-r-1))%g];var z=c[h?h-r-2:(g+(h-r-2))%g];if(q>=a-d&&q<=a+d&&v>=b-d&&v<=b+d||z>=a-d&&z<=a+d&&w>=b-d&&w<=b+d)l=1;else if(!l&&q===a)z===a&&(v<b&&w>b||v>b&&w<b)||(k<=a&&z>a||k>=a&&z<a)&&(v>=b?++m:++p),l=Zd(b,v,w,d)&&$d(a,b,q,v,z,w)<=d?2:0;else if(!l&&Zd(a,q,z,d)){if(q<a&&z>a||q>a&&z<a)k=v+(a-q)/(z-q)*(w-v),m+=k>b,p+=k<b;l=Zd(b,v,w,d)&&
  $d(a,b,q,v,z,w)<=d?2:0;}k=q;}!l&&e&&0!==p&&0!==m%2&&(l=3);return l}function ce(a,b){return be(a.x,a.y,b,0,!0)!==ae.NONE}t("H.math.isPointInsidePolygon",ce);function de(a){for(var b=a.length,c=new Float64Array(2*b),d=b&&tc(a[0].x);b--;){var e=a[b],f=b<<1;c[f]=d?e.x:e[0];c[f+1]=d?e.y:e[1];}return c}t("H.math.flatten",de);function ee(a,b,c){this.type=a;this.data=b;this.f=Zb();this.resolve=A(this.resolve,this);this.reject=A(this.reject,this);this.priority=fe;c!==B&&(this.priority=c);this.yh().add(this);}var fe=1,ge={up:0,xp:fe,tp:2};n=ee.prototype;n.then=function(a,b,c){return this.f.dl.then(a,b,c)};n.resolve=function(a){this.pe=3;this.f.resolve(a);};n.reject=function(a){this.pe=5;this.f.reject(a);};n.pe=0;n.cancel=function(){3>this.pe&&(this.Ie(),this.yh().remove(this),this.pe=4);};function he(a){var b;this.a={};for(b in ge)this.a[ge[b]]=[];this.vf=a;this.vf.addEventListener("allocatable",A(this.b,this));}t("H.util.JobManager",he);var ie=Object.keys(ge).map(function(a){return ge[a]}).sort().reverse();he.prototype.add=function(a){C(a,ee,this.add,0);this.a[a.priority].push(a);this.b();};he.prototype.contains=function(a){return -1<this.a[a.priority].indexOf(a)};
  he.prototype.remove=function(a){var b=a.priority,c=this.a[b].indexOf(a);if(-1<c)return this.a[b].splice(c,1),!0;a.ej&&this.vf.Tf(a.ej);return !1};he.prototype.b=function(){ie.forEach(function(a){this.a[a]=this.a[a].filter(function(b){var c;if((c=this.vf.Zg(b))!==y){var d=A(this.vf.Tf,this.vf,c,b);b.ej=c;b.then(d,d);b.pe=b.Lj(c)?1:5;}else return !0},this);},this);};function je(a,b,c){var d=[],e=arguments.length;a&&d.push(vc(a));1<e&&(e=2<e&&yc(c)?" out of ["+c[0]+"..."+c[1]+"]":"",d.push("("+b+e+")"));d=Error(d.join(" "));Object.setPrototypeOf(d,je.prototype);return d}u(je,Error);t("H.lang.OutOfRangeError",je);je.prototype.name="OutOfRangeError";var ke="closure_listenable_"+(1E6*Math.random()|0);function le(a){return !(!a||!a[ke])}var me=0;function ne(a,b,c,d,e){this.listener=a;this.proxy=null;this.src=b;this.type=c;this.capture=!!d;this.gg=e;this.key=++me;this.se=this.Jf=!1;}function oe(a){a.se=!0;a.listener=null;a.proxy=null;a.src=null;a.gg=null;}function pe(a){this.src=a;this.a={};this.b=0;}pe.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.a[f];a||(a=this.a[f]=[],this.b++);var g=qe(a,b,d,e);-1<g?(b=a[g],c||(b.Jf=!1)):(b=new ne(b,this.src,f,!!d,e),b.Jf=c,a.push(b));return b};pe.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.a))return !1;var e=this.a[a];b=qe(e,b,c,d);return -1<b?(oe(e[b]),Array.prototype.splice.call(e,b,1),0==e.length&&(delete this.a[a],this.b--),!0):!1};
  function re(a,b){var c=b.type;if(!(c in a.a))return !1;var d=a.a[c],e=ab(d,b),f;(f=0<=e)&&Array.prototype.splice.call(d,e,1);f&&(oe(b),0==a.a[c].length&&(delete a.a[c],a.b--));return f}pe.prototype.qa=function(a){a=a&&a.toString();var b=0,c;for(c in this.a)if(!a||c==a){for(var d=this.a[c],e=0;e<d.length;e++)++b,oe(d[e]);delete this.a[c];this.b--;}return b};
  function se(a,b){var c=void 0!==b,d=c?b.toString():"";return Sa(a.a,function(e){for(var f=0;f<e.length;++f)if(!c||e[f].type==d)return !0;return !1})}function qe(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.se&&f.listener==b&&f.capture==!!c&&f.gg==d)return e}return -1}var te=!sb||9<=Number(Db),ue=sb&&!Cb("9");!vb||Cb("528");ub&&Cb("1.9b")||sb&&Cb("8")||rb&&Cb("9.5")||vb&&Cb("528");ub&&!Cb("8")||sb&&Cb("9");var ve=function(){if(!wa.addEventListener||!Object.defineProperty)return !1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0;}});try{wa.addEventListener("test",za,b),wa.removeEventListener("test",za,b);}catch(c){}return a}();function we(a,b){rd.call(this,a?a.type:"");this.relatedTarget=this.currentTarget=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.pointerId=0;this.pointerType="";this.b=null;if(a){var c=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.currentTarget=b;if(b=a.relatedTarget){if(ub){a:{try{ob(b.nodeName);var e=!0;break a}catch(f){}e=
  !1;}e||(b=null);}}else "mouseover"==c?b=a.fromElement:"mouseout"==c&&(b=a.toElement);this.relatedTarget=b;d?(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0):(this.clientX=void 0!==a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0);this.button=a.button;this.key=a.key||"";this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=
  a.shiftKey;this.metaKey=a.metaKey;this.pointerId=a.pointerId||0;this.pointerType="string"===typeof a.pointerType?a.pointerType:xe[a.pointerType]||"";this.b=a;a.defaultPrevented&&this.preventDefault();}}u(we,rd);var xe={2:"touch",3:"pen",4:"mouse"};we.prototype.stopPropagation=function(){we.l.stopPropagation.call(this);this.b.stopPropagation?this.b.stopPropagation():this.b.cancelBubble=!0;};
  we.prototype.preventDefault=function(){we.l.preventDefault.call(this);var a=this.b;if(a.preventDefault)a.preventDefault();else if(a.returnValue=!1,ue)try{if(a.ctrlKey||112<=a.keyCode&&123>=a.keyCode)a.keyCode=-1;}catch(b){}};var ye="closure_lm_"+(1E6*Math.random()|0),ze={};function Be(a,b,c,d,e){if(d&&d.once)return Ce(a,b,c,d,e);if("array"==Aa(b)){for(var f=0;f<b.length;f++)Be(a,b[f],c,d,e);return null}c=De(c);return le(a)?a.aa.add(String(b),c,!1,Da(d)?!!d.capture:!!d,e):Ee(a,b,c,!1,d,e)}
  function Ee(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var g=Da(e)?!!e.capture:!!e,h=Fe(a);h||(a[ye]=h=new pe(a));c=h.add(b,c,d,g,f);if(c.proxy)return c;d=Ge();c.proxy=d;d.src=a;d.listener=c;if(a.addEventListener)ve||(e=g),void 0===e&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(He(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");return c}
  function Ge(){var a=Ie,b=te?function(c){return a.call(b.src,b.listener,c)}:function(c){c=a.call(b.src,b.listener,c);if(!c)return c};return b}function Ce(a,b,c,d,e){if("array"==Aa(b)){for(var f=0;f<b.length;f++)Ce(a,b[f],c,d,e);return null}c=De(c);return le(a)?a.aa.add(String(b),c,!0,Da(d)?!!d.capture:!!d,e):Ee(a,b,c,!0,d,e)}
  function Je(a,b,c,d,e){if("array"==Aa(b)){for(var f=0;f<b.length;f++)Je(a,b[f],c,d,e);return null}d=Da(d)?!!d.capture:!!d;c=De(c);if(le(a))return a.aa.remove(String(b),c,d,e);if(!a)return !1;if(a=Fe(a))if(b=a.a[b.toString()],a=-1,b&&(a=qe(b,c,d,e)),c=-1<a?b[a]:null)return Ke(c);return !1}
  function Ke(a){if("number"===typeof a||!a||a.se)return !1;var b=a.src;if(le(b))return re(b.aa,a);var c=a.type,d=a.proxy;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(He(c),d):b.addListener&&b.removeListener&&b.removeListener(d);(c=Fe(b))?(re(c,a),0==c.b&&(c.src=null,b[ye]=null)):oe(a);return !0}function He(a){return a in ze?ze[a]:ze[a]="on"+a}
  function Le(a,b,c,d){var e=!0;if(a=Fe(a))if(b=a.a[b.toString()])for(b=b.concat(),a=0;a<b.length;a++){var f=b[a];f&&f.capture==c&&!f.se&&(f=Me(f,d),e=e&&!1!==f);}return e}function Me(a,b){var c=a.listener,d=a.gg||a.src;a.Jf&&Ke(a);return c.call(d,b)}
  function Ie(a,b){if(a.se)return !0;if(!te){if(!b)a:{b=["window","event"];for(var c=wa,d=0;d<b.length;d++)if(c=c[b[d]],null==c){b=null;break a}b=c;}d=b;b=new we(d,this);c=!0;if(!(0>d.keyCode||void 0!=d.returnValue)){a:{var e=!1;if(0==d.keyCode)try{d.keyCode=-1;break a}catch(g){e=!0;}if(e||void 0==d.returnValue)d.returnValue=!0;}d=[];for(e=b.currentTarget;e;e=e.parentNode)d.push(e);a=a.type;for(e=d.length-1;!b.a&&0<=e;e--){b.currentTarget=d[e];var f=Le(d[e],a,!0,b);c=c&&f;}for(e=0;!b.a&&e<d.length;e++)b.currentTarget=
  d[e],f=Le(d[e],a,!1,b),c=c&&f;}return c}return Me(a,new we(b,this))}function Fe(a){a=a[ye];return a instanceof pe?a:null}var Ne="__closure_events_fn_"+(1E9*Math.random()>>>0);function De(a){if(Ca(a))return a;a[Ne]||(a[Ne]=function(b){return a.handleEvent(b)});return a[Ne]}function F(){nd.call(this);this.aa=new pe(this);this.ao=this;this.jh=null;}u(F,nd);F.prototype[ke]=!0;n=F.prototype;n.Qb=function(){return this.jh};n.ka=function(a){this.jh=a;};n.addEventListener=function(a,b,c,d){Be(this,a,b,c,d);};n.removeEventListener=function(a,b,c,d){Je(this,a,b,c,d);};
  n.dispatchEvent=function(a){var b,c=this.Qb();if(c)for(b=[];c;c=c.Qb())b.push(c);c=this.ao;var d=a.type||a;if("string"===typeof a)a=new rd(a,c);else if(a instanceof rd)a.target=a.target||c;else {var e=a;a=new rd(d,c);Wa(a,e);}e=!0;if(b)for(var f=b.length-1;!a.a&&0<=f;f--){var g=a.currentTarget=b[f];e=g.td(d,!0,a)&&e;}a.a||(g=a.currentTarget=c,e=g.td(d,!0,a)&&e,a.a||(e=g.td(d,!1,a)&&e));if(b)for(f=0;!a.a&&f<b.length;f++)g=a.currentTarget=b[f],e=g.td(d,!1,a)&&e;return e};
  n.u=function(){F.l.u.call(this);this.aa&&this.aa.qa(void 0);this.jh=null;};n.td=function(a,b,c){a=this.aa.a[String(a)];if(!a)return !0;a=a.concat();for(var d=!0,e=0;e<a.length;++e){var f=a[e];if(f&&!f.se&&f.capture==b){var g=f.listener,h=f.gg||f.src;f.Jf&&re(this.aa,f);d=!1!==g.call(h,c)&&d;}}return d&&0!=c.nl};t("H.util.EventTarget",F);F.prototype.ka=F.prototype.ka;F.prototype.setParentEventTarget=F.prototype.ka;F.prototype.Qb=F.prototype.Qb;F.prototype.getParentEventTarget=F.prototype.Qb;F.prototype.addEventListener=F.prototype.addEventListener;F.prototype.addEventListener=F.prototype.addEventListener;F.prototype.removeEventListener=F.prototype.removeEventListener;F.prototype.removeEventListener=F.prototype.removeEventListener;F.prototype.dispatchEvent=F.prototype.dispatchEvent;
  F.prototype.dispatchEvent=F.prototype.dispatchEvent;F.prototype.B=F.prototype.B;F.prototype.dispose=F.prototype.B;F.prototype.zb=F.prototype.zb;F.prototype.addOnDisposeCallback=F.prototype.zb;F.prototype.lo=F.prototype.td;
  F.prototype.td=function(a,b,c){var d,e,f=!0;var g=c[c.currentTarget===c.target?"AT_TARGET":b?"CAPTURING_PHASE":(d=!0,"BUBBLING_PHASE")];if(!d||"pointerenter"!==(e=c.type)&&"pointerleave"!==e)c.eventPhase=g,f=F.prototype.lo.apply(this,arguments),d&&this.Qb&&null===this.Qb()&&delete c.eventPhase;return f};function Oe(a){a=a||{};var b=a.callback;this.a=a.label;Ca(b)&&(this.callback=b);this.b=!!a.disabled;Oe.l.constructor.call(this);}u(Oe,F);t("H.util.ContextItem",Oe);Oe.prototype.Ye=function(){return this.a};Oe.prototype.getLabel=Oe.prototype.Ye;Oe.prototype.Qc=function(a){this.a!==a&&(this.a=a,this.dispatchEvent("update"));return this};Oe.prototype.setLabel=Oe.prototype.Qc;Oe.prototype.mc=function(){return this.b};Oe.prototype.isDisabled=Oe.prototype.mc;
  Oe.prototype.Da=function(a){a^this.b&&(this.b=a,this.dispatchEvent("update"));return this};Oe.prototype.setDisabled=Oe.prototype.Da;var Pe=new Oe;Oe.SEPARATOR=Pe;function Re(){if(x.document){var a=document.createElement("canvas");a.width=a.height=1;return a.getContext("2d")}return null}function Se(){return window.devicePixelRatio||1}t("H.util.getPixelRatio",Se);var Te=/^rgba\(([^,]+),([^,]+),([^,]+),([^)]+)\)$/;
  function Ue(a){var b=Ve[a],c=x.RegExp;b||(x.Uint8ClampedArray||(x.Uint8ClampedArray=function(d){return d instanceof Number?Array(d):d.map(function(e){return Yd(xd(e),0,255)})}),"none"===a?b=new Uint8ClampedArray([0,0,0,0]):(We.fillStyle="black",We.fillStyle=a,Te.test(We.fillStyle)?b=new Uint8ClampedArray([c.$1,c.$2,c.$3,255*c.$4]):(We.clearRect(0,0,1,1),We.fillRect(0,0,1,1),b=We.getImageData(0,0,1,1).data)),Ve[a]=b);return b}function Xe(a){return "none"!==a&&0<Ue(a)[3]}var Ve=mc(),Ye=!!x.VBArray;
  t("H.util.eval",function(a){return eval(a)});function Ze(a,b){return a!==B?a:b}function $e(a){return /^<svg/.test(a)?"data:image/svg+xml;charset=utf-8,"+encodeURIComponent(a):a}t("H.util.provide",function(a){var b=wa.$jscomp;if(b&&("function"!=typeof b.Lm?0:b.Lm()))throw Error("goog.provide cannot be used within a module.");ya(a,void 0);});function af(a){this.oc=0<a?ud.round(a):0;}af.prototype.next=function(a){if(9007199254740992===this.oc)throw new je(a,this.oc,[0,9007199254740991]);return this.oc++};
  var bf=new af,cf=A(bf.next,bf);function df(){return !0}function ef(){return !1}function hd(){}var ff=oc([]),gf=oc({});function hf(a){return "CANVAS"===a.tagName?[a]:a.getElementsByTagName("CANVAS")}function jf(a,b,c){var d;b=a.ownerDocument===b?a.cloneNode(!0):b.importNode(a,!0);if(c)for(a=hf(a),c=hf(b),d=c.length;d--;)c[d].getContext("2d").drawImage(a[d],0,0);return b}var We=Re(),kf=Re();
  function lf(a){var b=a.complete,c=0<a.naturalWidth;if(b&&!c&&Ye)try{kf.drawImage(a,0,0),c=!0;}catch(d){}return b&&c}var mf=x.BlobBuilder||x.WebKitBlobBuilder||x.MozBlobBuilder;function nf(a,b){b=b||"";if(mf){var c=new mf;c.append(a);a=c.getBlob(b);}else a=new Blob([a],{type:b});return a}var of=x.navigator;Zc=/Edge\/\d+/.test(of.appVersion);$c=/(A|a)ndroid/.test(of.appVersion);function pf(){var a=pf.a;a||(a=this,pf.a=a,Fc(pf.a),F.call(a),qf(this));return a}u(pf,F);pf.prototype.u=function(){pf.l.u.call(this);qf(this);};function qf(a){a.g=10;a.i=6;a.a=mc();a.b=mc();a.c=0;}pf.prototype.Zg=function(a){a=a.type;var b=this.a[a]||0;if(this.c<this.g&&b<this.i){var c=++this.f;this.c++;this.a[a]=b+1;this.b[c+""]=a;return c}return y};
  pf.prototype.Tf=function(a){var b=this.b[a];if(!tc(b)||!this.a[b])throw new Xc(this.Tf,"Unknown requestId");this.c--;this.a[b]--;this.a[b]||delete this.a[b];delete this.b[a];this.dispatchEvent("allocatable");};pf.prototype.f=-1;function rf(a,b,c,d){if(!this.b[a])throw new D(rf,0,"Mime type is not supported");this.g=a;a=d?Ua(d):{};"crossOrigin"in a||(a.crossOrigin="anonymous");this.a=a;sf.href=b.toString();ee.call(this,sf.protocol+"//"+sf.hostname,b,c);}u(rf,ee);rf.prototype.Lj=function(){this.c=this.b[this.g].call(this);return !0};rf.prototype.Ie=function(){this.c&&(this.c.abort(),this.c=null);};
  rf.prototype.b={"application/json":function(){var a=this,b=tf(this.a),c=b.headers;b.headers=c=c?Ua(c):{};c.Accept="application/json";return new Rc(this.data,function(d){200<=d.status&&300>d.status?a.resolve(d.json()):a.reject(d);},b)},"text/plain":function(){var a=this;return new Rc(this.data,function(b){200<=b.status&&300>b.status?a.resolve(b.text()):a.reject(b);},tf(this.a))},image:function(){var a=x.document.createElement("img"),b=this,c=this.data;a.onload=A(this.resolve,this,a);a.onerror=function(){b.reject(Oc.error());};
  a.crossOrigin=this.a.crossOrigin;a.src=c;return {abort:function(){a.onerror=a.onload=null;Ye&&lf(a)||a.removeAttribute("src");}}}};
  (function(){try{var a=new XMLHttpRequest;a.open("get","/",!0);}catch(b){a={};}"response"in a&&(rf.prototype.b.arraybuffer=function(){var b=new XMLHttpRequest,c=this,d=this.a,e=d.headers,f;b.open("GET",this.data);uf(b,d);b.responseType="arraybuffer";if(e)for(f in e)b.setRequestHeader(f,e[f]);b.onerror=b.ontimeout=function(){c.reject(Oc.error());};b.onload=function(){c.resolve(new Oc(b.response));};b.send();return b});})();var vf=new he(new pf);rf.prototype.yh=function(){return vf};var sf=x.document.createElement("a");
  function tf(a){var b=Ua(a);delete b.crossOrigin;uf(b,a);return b}function uf(a,b){a.withCredentials="use-credentials"===b.crossOrigin;}function I(a,b){this.x=+a;this.y=+b;}t("H.math.Point",I);I.prototype.set=I;I.prototype.set=I.prototype.set;I.prototype.clone=function(a){a?(a.x=this.x,a.y=this.y):a=new I(this.x,this.y);return a};I.prototype.clone=I.prototype.clone;I.prototype.add=function(a){this.x+=a.x;this.y+=a.y;return this};I.prototype.add=I.prototype.add;I.prototype.sub=function(a){this.x-=a.x;this.y-=a.y;return this};I.prototype.sub=I.prototype.sub;I.prototype.scale=function(a,b){this.x*=a;this.y*=void 0===b?a:b;return this};
  I.prototype.scale=I.prototype.scale;I.prototype.round=function(){this.x=xd(this.x);this.y=xd(this.y);return this};I.prototype.round=I.prototype.round;I.prototype.floor=function(){this.x=yd(this.x);this.y=yd(this.y);return this};I.prototype.floor=I.prototype.floor;I.prototype.ceil=function(){this.x=zd(this.x);this.y=zd(this.y);return this};I.prototype.ceil=I.prototype.ceil;I.prototype.oa=function(a){return !(!a||this.x!==a.x||this.y!==a.y)};I.prototype.equals=I.prototype.oa;
  I.prototype.Yj=function(a,b){var c=b.x-a.x,d=b.y-a.y,e=a;if(c||d){var f=((this.x-a.x)*c+(this.y-a.y)*d)/(c*c+d*d);0>=f?e=a:1<=f?e=b:e=new I(a.x+f*c,a.y+f*d);}return e};I.prototype.getNearest=I.prototype.Yj;I.prototype.Za=function(a){return Cd(Dd(this.x-a.x,2)+Dd(this.y-a.y,2))};I.prototype.distance=I.prototype.Za;function wf(a){if(!a)throw Error("invalid argument");return a instanceof I?a:new I(a.x,a.y)}I.fromIPoint=wf;function xf(a){var b=yf[a];if(!b)if(a in zf)b=yf[a]=a;else {b=Af.length;var c="",d=a.charAt(0).toUpperCase()+a.substr(1),e="",f=!1;Bf&&(e=Bf+d,f=e in zf);for(;b--&&!f;)c=Af[b],e=c+d,f=e in zf;f&&(Bf=c);if(b=f?e:null)yf[a]=b;else throw Error("Could not find any variant of CSS property ["+a+"]");}return b}t("H.dom.cssPrefixer.prefix",xf);var Af=["O","Ms","ms","Moz","Webkit"],yf={},Bf="",zf=document.createElement("span").style;function Cf(a,b,c,d){if(!a||!b||!c)throw new D(Cf,null,"Must specify name, version and revision parameter");this.name=a;this.version=b;this.revision=c;d&&Wa(this,d);}t("H.util.BuildInfo",Cf);Cf.prototype.toString=function(){var a,b=[];for(a in this)zc(this[a])&&b.push(this[a]);return b.join(";")};var Df={};function Ef(a,b,c,d){if(!a)throw new D(Ef,1,"Must specify a name parameter");return Df[a]||(Df[a]=new Cf(a,b,c,d))}Cf.get=Ef;function Ff(){Ff.l.constructor.call(this);this.a=Gf(this);this.f=mc();this.c=A(this.c,this);this.a.addEventListener("message",this.c);this.b={};}u(Ff,F);Ff.prototype.u=function(){this.a.terminate();};Ff.prototype.i=function(a){var b=a.type,c=!!this.f[b],d=a.data,e=Hf++,f=d&&d.np?d.np:B,g=!0;c?(this.b[e]=a,If(this,b,e,d&&d.message,f)):(a.reject(new D(this.i,0,"processor_not_found")),g=!1);return g};
  Ff.prototype.c=function(a){a=a.data;var b=this.b[a.taskId],c=a.taskId,d=a.data,e=this;if(2===a.type)(new rf("arraybuffer",d)).then(function(f){return f.arrayBuffer()}).then(function(f){e.a.postMessage(["3",c,[f]],[f]);},function(){e.a.postMessage(["3",c,[null,"ERROR"]]);});else {if(b){switch(a.type){case 1:b.resolve(d);break;case 0:b.reject(d);}delete this.b[c];}this.dispatchEvent(new rd(this.g.IDLE));}};var Hf=0;function Jf(a,b,c){var d=Hf++,e;a.b[d]=e=Zb();If(a,b,d,c);return e.dl}
  function If(a,b,c,d,e){d===B||Ba(d)||(d=[d]);try{a.a.postMessage([b,c,d],e);}catch(f){a=a.b[c],a.reject(f.message);}}Ff.prototype.g={IDLE:"idle",hj:"error"};Ff.prototype.j=function(a,b){var c=this.m||(this.m=new rd(this.g.hj));c.data=b;delete this.f[a];this.dispatchEvent(c);};
  function Gf(a){var b=x.H.__bootstrap__;b=Ca(b)?(""+b).replace(/^[^{]+{((.|[\r\n])+?)}\s*$/,"$1"):""+b;if(x.Worker&&x.URL)try{var c=new x.Worker(x.URL.createObjectURL(nf(b,"application/javascript")));}catch(d){}c||(a=new Kf(a),function(){eval("var self = arguments[0];"+b);}(),c=new Lf(a));return c}function Lf(a){F.call(this);this.a=a;}u(Lf,F);Lf.prototype.postMessage=function(a){x.setTimeout(A(this.b,this,a),0);};Lf.prototype.b=function(a){var b=new rd("message");b.data=a;this.a.dispatchEvent(b);};
  Lf.prototype.terminate=function(){this.a.B();this.B();};function Kf(a){F.call(this);this.a=a;this.addEventListener=A(this.addEventListener,this);this.removeEventListener=A(this.removeEventListener,this);this.postMessage=A(this.postMessage,this);this.eval=A(eval,this);}u(Kf,F);Kf.prototype.postMessage=function(a){var b=new rd("message");b.data=a;x.setTimeout(A(this.a.c,this.a,b),0);};function Mf(){var a=Nf;a||(a=Nf=this,F.call(a),Of(this));return a}var Nf;u(Mf,F);Mf.prototype.u=function(){Mf.l.u.call(this);Of(this);};function Of(a){var b=a.b,c;if(b)for(c=b.length;c--;)b[c].B();a.b=[];Fc(a.b);a.c=mc();a.f=mc();}
  Mf.prototype.Zg=function(a){var b;a=a.type;if(b=this.f[a]){var c=this.b;var d=c[0];d||(d=c[0]=new Ff,this.zb(Ja(qd,d)),Ta(this.c)||(c=x.Object.keys(this.c),Jf(d,"0",c)));c=d;c.f[a]||(c.f[a]=b,Jf(c,"1",[a,Ca(b)?b+"":b]).then(hd,A(c.j,c,a)));}else throw new Xc(this.Zg,'Unknown type "'+a+'"');return d};Mf.prototype.Tf=function(){};Mf.prototype.a=function(a,b){var c=this.f,d=c[a];if(d){if(b!==d)throw new Xc(this.a,'Type "'+a+'" is already registered');}else c[a]=b;};function Pf(a,b,c){ee.call(this,a,b,c);}var Qf;u(Pf,ee);Pf.prototype.yh=function(){Qf||(Qf=new he(new Mf));return Qf};Pf.prototype.Ie=function(){};Pf.prototype.Lj=function(a){return a.i(this)};function Rf(a,b,c){var d=Yd(+a,-90,90);if(b&&E(d))throw new D(b,c,a);return d}function Sf(a,b,c){var d=+a;if(-180>d||180<d)d=Wd(d+180,360)-180;if(b&&E(d))throw new D(b,c,a);return d}function Tf(a,b,c){var d;if(a!==B&&E(d=+a)&&b)throw new D(b,c,a);return d}function Uf(a,b){return 0!==(0>a^0>b)&&180<Ad(b-a)}t("H.geo.isDBC",Uf);function Vf(){uc(this,Vf);}t("H.geo.AbstractGeometry",Vf);Vf.prototype.getBoundingBox=Vf.prototype.G;Vf.prototype.equals=Vf.prototype.oa;Vf.prototype.rb="";Vf.prototype.Mb="";Vf.prototype.toString=function(){return this.Tc([this.rb.toUpperCase()," "]).join("")};Vf.prototype.toString=Vf.prototype.toString;Vf.prototype.Sc=function(){return {type:this.Mb,coordinates:this.md()}};Vf.prototype.toGeoJSON=Vf.prototype.Sc;Vf.prototype.X=function(){return {type:this.rb,coordinates:this.yc(),boundingBox:this.G().X()}};
  Vf.prototype.forWorkerMessage=Vf.prototype.X;function Wf(a,b,c){this.lat=Rf(a,Wf,0);this.lng=Sf(b,Wf,1);c!==B&&(this.alt=Tf(c,Wf,2));}u(Wf,Vf);t("H.geo.Point",Wf);Wf.prototype.oa=function(a){return this===a||!!a&&this.lat===a.lat&&this.lng===a.lng&&(this.alt||0)===(a.alt||0)};Wf.prototype.equals=Wf.prototype.oa;Wf.prototype.Za=function(a){if(this===a||this.lat===a.lat&&this.lng===a.lng)a=0;else {var b=this.lat*Rd;var c=a.lat*Rd;a=1.274200158E7*Gd(vd(1,Cd(Dd(Fd((b-c)/2),2)+Hd(b)*Hd(c)*Dd(Fd((this.lng*Rd-a.lng*Rd)/2),2))));}return a};
  Wf.prototype.distance=Wf.prototype.Za;
  Wf.prototype.Ng=function(a,b,c){if(c){if(b/=6371000.79){a*=Rd;var d=Rd*this.lat;var e=Fd(d);var f=Fd(b);var g=Hd(b);var h=Rd*this.lng;var k=Hd(d);d=Gd(k*Hd(a)*f+e*g);a=Kd(Fd(a)*k*f,g-e*Fd(d));a=(h+a+Md)%(2*Md)-Md;k=a*Sd;}return b?new Wf(d*Sd,(k+540)%360-180):this}a=(a%360+360)%360;if(0===(a+90)%180)return d=this.lng+b/(6371000.79*Pd*Hd(this.lat*Rd))*(270===a?-360:360),new Wf(this.lat,(d+540)%360-180);if(b/=6371000.79){a*=Rd;h=this.lat*Rd;e=this.lng*Rd;f=h+b*Hd(a);g=f-h;d=Bd(Id(f/2+Od)/Id(h/2+Od));
  d=E(g/d)?Hd(h):g/d;var l=b*Fd(a)/d;Ad(f)>Nd&&(f=0<f?Md-f:-(Md+f));}return b?new Wf(f*Sd,((e+l+Qd+(Ad(h+g)>Nd?Md:0))%Pd-Md)*Sd):this};Wf.prototype.walk=Wf.prototype.Ng;Wf.prototype.G=function(){return new K(this.lat,this.lng,this.lat,this.lng)};Wf.prototype.getBoundingBox=Wf.prototype.G;function Yf(a,b,c){var d=Da(a)&&!(E(a.lat=Rf(a.lat))||E(a.lng=Sf(a.lng))||a.alt!==B&&E(a.alt=Tf(a.alt)));if(!d&&b)throw new D(b,c,a);return d}Wf.validate=Yf;
  function Zf(a){if(!a)throw new D(Zf,0,a);return new Wf(a.lat,a.lng,a.alt)}Wf.fromIPoint=Zf;n=Wf.prototype;n.rb="Point";n.Tc=function(a){a.push("(",this.lng," ",this.lat,")");return a};n.Mb="Point";n.md=function(){return [this.lng,this.lat,this.alt||0]};n.yc=function(){return [this.lat,this.lng,this.alt||0]};function K(a,b,c,d){$f(this,Rf(a,K,0),Sf(b,K,1),Rf(c,K,2),Sf(d,K,3));}u(K,Vf);t("H.geo.Rect",K);K.prototype.rb="Polygon";K.prototype.Tc=function(a){var b=this.la,c=this.ca,d=this.na,e=this.ia;a.push("(","(",c," ",b,",",e," ",b,",",e," ",d,",",c," ",d,",",c," ",b,")",")");return a};K.prototype.oa=function(a){return this===a||!!a&&this.la===a.la&&this.ca===a.ca&&this.na===a.na&&this.ia===a.ia};K.prototype.equals=K.prototype.oa;K.prototype.clone=function(){return new K(this.la,this.ca,this.na,this.ia)};
  K.prototype.clone=K.prototype.clone;function $f(a,b,c,d,e){a.ca=c;a.ia=e;b<d&&(c=b,b=d,d=c);a.la=b;a.na=d;a.c=a.a=a.b=null;return a}K.prototype.Rb=function(){this.c||(this.c=new Wf(this.la,this.ca));return this.c};K.prototype.getTopLeft=K.prototype.Rb;K.prototype.Nb=function(){this.a||(this.a=new Wf(this.na,this.ia));return this.a};K.prototype.getBottomRight=K.prototype.Nb;K.prototype.On=function(){return this.la};K.prototype.getTop=K.prototype.On;K.prototype.Fm=function(){return this.na};
  K.prototype.getBottom=K.prototype.Fm;K.prototype.kn=function(){return this.ca};K.prototype.getLeft=K.prototype.kn;K.prototype.En=function(){return this.ia};K.prototype.getRight=K.prototype.En;K.prototype.fb=function(){this.b||(this.b=new Wf(this.na+(this.la-this.na)/2,ag(this.ca,this.Fb())));return this.b};K.prototype.getCenter=K.prototype.fb;K.prototype.Fb=function(){return bg(this.ca,this.ia)};K.prototype.getWidth=K.prototype.Fb;K.prototype.ae=function(){return this.la-this.na};
  K.prototype.getHeight=K.prototype.ae;K.prototype.Gb=function(){return this.ca>this.ia};K.prototype.isCDB=K.prototype.Gb;K.prototype.jg=function(){return !this.Fb()&&!this.ae()};K.prototype.isEmpty=K.prototype.jg;K.prototype.G=function(){return new K(this.la,this.ca,this.na,this.ia)};K.prototype.getBoundingBox=K.prototype.G;
  K.prototype.Of=function(a,b,c){var d=this.fb();c||(a=Rf(a,this.Of,0),b=Sf(b,this.Of,1));b=this.gd(a,b,c);a=b.fb();return a.lat===d.lat&&a.lng===d.lng&&this.ae()===b.ae()&&this.Fb()===b.Fb()};K.prototype.containsLatLng=K.prototype.Of;K.prototype.pd=function(a,b){b||Yf(a,this.pd,0);return this.Of(a.lat,a.lng,b)};K.prototype.containsPoint=K.prototype.pd;
  K.prototype.hh=function(a,b){var c=this.fb();if(!b&&!C(a,K))throw new D(this.hh,0,a);b=this.nc(a,b);a=b.fb();return a.lat===c.lat&&a.lng===c.lng&&this.ae()===b.ae()&&this.Fb()===b.Fb()};K.prototype.containsRect=K.prototype.hh;K.prototype.gd=function(a,b,c,d){if(!c){if(E(a=Rf(a)))throw new D(this.gd,0,a);if(E(b=Sf(b)))throw new D(this.gd,1,b);}return cg(this.la,this.ca,this.na,this.ia,a,b,a,b,d)};K.prototype.mergeLatLng=K.prototype.gd;
  K.prototype.Nk=function(a,b,c){b||Yf(a,this.Nk,0);return this.gd(a.lat,a.lng,b,c)};K.prototype.mergePoint=K.prototype.Nk;K.prototype.nc=function(a,b,c){if(!b&&!C(a,K))throw new D(this.nc,0,a);return cg(this.la,this.ca,this.na,this.ia,a.la,a.ca,a.na,a.ia,c)};K.prototype.mergeRect=K.prototype.nc;K.prototype.Ic=function(a,b,c,d,e,f){e||(a=Rf(a,this.Ic,0),b=Sf(b,this.Ic,1),c=Rf(c,this.Ic,2),d=Sf(d,this.Ic,3));return cg(this.la,this.ca,this.na,this.ia,a,b,c,d,f)};K.prototype.mergeTopLeftBottomRight=K.prototype.Ic;
  K.prototype.Ad=function(a,b){var c=this.ca<=this.ia,d=a.ca<=a.ia,e=this.ca<a.ia,f=a.ca<this.ia;if(!b&&!C(a,K))throw new D(this.Ad,0,a);return this.na<=a.la&&a.na<=this.la&&(!c&&(!d||e||f)||!d&&(e||f)||e&&f)};K.prototype.intersects=K.prototype.Ad;function bg(a,b){a=b-a;return a+(0>a?360:0)}function ag(a,b){a+=b/2;return a-(180<a?360:0)}
  function cg(a,b,c,d,e,f,g,h,k){c=vd(c,g);a=wd(a,e);e=bg(b,d);var l=ag(b,e);g=bg(f,h);var m=ag(f,g)-l;m+=0>m-1E-6?360:0;if(180>m-1E-6){l=b;var p=h;}else m=360-m,l=f,p=d;m=m+e/2+g/2;360<=m+5E-7?(l=-180,p=180):m-5E-7<e?(l=b,p=d):m-5E-7<g&&(l=f,p=h);return k?$f(k,a,l,c,p):new K(a,l,c,p)}K.merge=cg;function dg(a,b,c){c||(Yf(a,dg,0),Yf(b,dg,1));return new K(a.lat,a.lng,b.lat,b.lng)}K.fromPoints=dg;
  function eg(a,b){var c=1,d=a.length,e=null;if(!Ba(a))throw new D(eg,0,a);if(0<d){var f=a[0];for(e=dg(f,f,b);c<d;c++)f=a[c],e.gd(f.lat,f.lng,b,e);}return e}K.coverPoints=eg;function fg(a,b){var c=3,d=a.length,e;if(!(b||a&&null!=a.length))throw new D(fg,0,a);if(0<d)for(e=new K(a[0],a[1],a[0],a[1]);c<d;c+=3)e.gd(a[c],a[c+1],b,e);return e}K.coverLatLngAlts=fg;
  function gg(a,b){var c=1,d=a.length,e;if(b&&(!a||null==a.length))throw new D(gg,0,a);if(0<d)for(e=new K(a[0].la,a[0].ca,a[0].na,a[0].ia);c<d;c++)e.nc(a[c],b,e);return e}K.coverRects=gg;
  K.prototype.ml=function(a,b){var c=this.ca,d=this.la,e=this.ia,f=this.na,g=this.fb().lng;Yf(a,this.ml,0);var h=a.lat-f-(d-f)/2;var k=a.lng-g;k=180<k||-180>k?-(g+a.lng):k;a=c+(0>k?2*k:0);a=-180>a?360+a:a;e+=0<k?2*k:0;e=180<e?e-360:e;d=0<h?d+2*h:d;90<=d&&(d=90);f=0>h?f+2*h:f;-90>=f&&(f=-90);return b?$f(b,d,a,f,e):new K(d,a,f,e)};K.prototype.resizeToCenter=K.prototype.ml;K.prototype.Mb="Polygon";
  K.prototype.md=function(){return [[this.ca,this.la,0],[this.ia,this.la,0],[this.ia,this.na,0],[this.ca,this.na,0],[this.ca,this.la,0]]};K.prototype.X=function(){return this.yc()};K.prototype.yc=function(){return [this.la,this.ca,this.na,this.ia]};function hg(a,b,c,d,e,f){uc(this,hg);this.c=a||10;this.b=this.a=null;this.f=d||0;this.g=e||0;this.i=b||1;this.j=c||1;this.o=!!f;this.flush();}function ig(a){var b=a.b;if(a.o&&!b){var c=a.head;if(c.entries||c[0]||c[1]||c[2]||c[3])b=[c],b=jg([b,b,b,b],[c[6],c[7],c[4],c[5]]),a.b=b;}return b}
  function jg(a,b){var c,d,e,f,g=0;for(c=3;0<=c;c--){var h=c+4;var k=0<c%3;var l=[];var m=b[c];var p=a[c];for(d=p.length;d--;){var q=p[d];if(e=q.entries)for(f=e.length;f--;){var r=e[f].wd(c);if(k?r>m:r<m)m=r;}for(f=4;f--;)(e=q[f])&&(k?e[h]>m:e[h]<m)&&l.push(e);}g+=l.length;b[c]=m;a[c]=l;}g&&(b=jg(a,b));return b}function kg(a,b,c){var d,e;if(a.o&&(d=a.b))for(e=3;0<=e;e--){var f=b.wd(e);if(e%3?f>=d[e]:f<=d[e])if(c)d[e]=f;else {a.b=null;break}}}
  hg.prototype.remove=function(a){var b,c,d,e=!1;a&&(b=a.node)&&b.b===this&&(c=b.entries)&&0<=(d=c.indexOf(a))&&(c.splice(d,1),this.m(b),kg(this,a,!1),e=!0);return e};hg.prototype.flush=function(){var a=new lg(null,NaN,this.f-this.i,this.g-this.j,this.f+this.i,this.g+this.j);a.b=this;this.head=this.a=a;this.b=null;};function mg(a,b){var c=a.head,d;if(b){var e=b;if(e!==c)for(c=e;e=e.parent;)if(e.entries||1<e.a)c=e;}else for(;!c.entries&&2>(d=c.a);)if(d)c=e;else break;a.head=c;}
  hg.prototype.ab=function(a,b,c,d,e,f){var g=[],h=this.head,k=this.a;a<=h[5]&&b<=h[6]&&(e?c>=h[7]:c>h[7])&&(f?d>=h[4]:d>h[4])&&ng(this,h,g,a,b,c,d,f||d>=k[6],e||c>=k[5]);return g};
  function ng(a,b,c,d,e,f,g,h,k){var l=b.entries,m=b[7],p=b[4],q=b[5],r=b[6],v=b[8],w=b[9],z;if(l){var J=l.length;if(e>p||d>m||g<r||f<q)for(;J--;){m=l[J];p=m.wd(3);q=m.wd(0);r=m.wd(1);var G=m.wd(2);G>=e&&r>=d&&(q<g||h&&q==g)&&(p<f||k&&p==f)&&c.push(m);}else for(;J--;)c.push(l[J]);}if(f>v||k&&f==v)e<w&&(z=b[1])&&ng(a,z,c,d,e,f,g,h,k),(g>w||h&&g==w)&&(z=b[3])&&ng(a,z,c,d,e,f,g,h,k);d<v&&(e<w&&(z=b[0])&&ng(a,z,c,d,e,f,g,h,k),(g>w||h&&g==w)&&(z=b[2])&&ng(a,z,c,d,e,f,g,h,k));}hg.prototype.Uc=ba(1);var og=0;
  function lg(a,b,c,d,e,f){this.c=b;a&&(this.parent=a,this.b=a.b,b&1?(c=a[8],e=a[5]):(c=a[7],e=a[8]),b&2?(d=a[9],f=a[6]):(d=a[4],f=a[9]));this[7]=c;this[5]=e;this[8]=(c+e)/2;this[4]=d;this[6]=f;this[9]=(d+f)/2;}lg.prototype.a=0;function pg(a,b){return a[b]||(++a.a,a[b]=new lg(a,b))}lg.prototype.removeChild=function(a){var b=a.c;this[b]===a&&(delete this[b],delete a.parent,--this.a);};lg.prototype.Uc=ba(0);function qg(a,b){(a.entries||(a.entries=[])).push(b);b.node=a;}
  function rg(a,b,c,d,e){var f=a[5],g=a[6];return a[7]<=b&&a[4]<=c&&(f>d||f===d&&f===a.b.a[5])&&(g>e||g===e&&g===a.b.a[6])}function sg(a,b,c,d,e,f){sg.l.constructor.apply(this,arguments);}u(sg,hg);sg.prototype.m=function(a){for(var b,c,d=this.head;a;){if(!(b=a.entries)||!b.length)if(b&&delete a.entries,!a.a&&(c=a.parent)){c.removeChild(a);d===a&&(d=c);a=c;continue}a=y;}this.head!==d&&(this.head=d,mg(this));};function tg(a,b,c,d,e){if(rg(a.a,b,c,d,e))return ug(a,a.a,b,c,d,e,a.c);throw Error("Coordinates out of bounds");}sg.prototype.Fc=function(a,b){return tg(this,a,b,a,b)};
  function ug(a,b,c,d,e,f,g){var h=b[8],k=b[9],l,m;g&&(e<h||(l=c>=h))&&(f<k||(m=d>=k))?c=ug(a,pg(b,l|m<<1),c,d,e,f,g-1):(qg(b,c=new vg(c,d,e,f)),kg(a,c,!0),mg(a,b));return c}function vg(a,b,c,d){this.id=og++;this[0]=b;this[1]=c;this[2]=d;this[3]=a;}vg.prototype.wd=function(a){return this[a]};function wg(a){this.f=new sg(+a||10,180,90,0,0,!0);this.c=[];this.g=!1;this.a=this.b=this.R=null;}t("H.geo.QuadTree",wg);n=wg.prototype;n.Xh=0;n.bd=function(){return this.Xh};n.Gb=function(){return this.g};
  n.G=function(){var a,b;if(!this.R){var c=[];!this.b&&(a=ig(this.f))&&(this.b=new K(-a[0],a[3],-a[2],a[1]));(b=this.b)&&c.push(b);var d,e,f;if(!this.a&&(f=(e=this.c).length)){a=90;var g=360;var h=-90;for(d=0;f--;){var k=e[f];a=vd(a,k[0]);g=vd(g,k[3]);h=wd(h,k[2]);d=wd(d,k[1]);}this.a=new K(-a,g,-h,d-360);}(b=this.a)&&c.push(b);if(b=c[0])c[1]&&(b=b.nc(c[1],!0)),this.R=b;}return this.R};
  function xg(a,b,c,d,e,f){f?(f=new vg(e,-b,c+360,-d),a.c.push(f),a.g=!0,a.a&&a.a.Ic(b,c,d,e,!0,a.a)):(f=tg(a.f,c,-b,e,-d),a.b&&a.b.Ic(b,c,d,e,!0,a.b));++a.Xh;a.R=null;return f}n.Fc=function(a){var b=a.lng;a=a.lat;return xg(this,a,b,a,b,!1)};n.mk=function(a){var b=a.Rb(),c=a.Nb();return (a=a.Gb())?xg(this,b.lat,c.lng,c.lat,b.lng,a):xg(this,b.lat,b.lng,c.lat,c.lng,a)};wg.prototype.insertBoundingBox=wg.prototype.mk;
  wg.prototype.remove=function(a){var b;if(a.node){var c=this.f.remove(a);this.b=null;}else if(a=(b=this.c).indexOf(a),c=0<=a)b.splice(a,1),this.g=0<b.length,this.a=null;c&&(--this.Xh,this.R=null);return c};wg.prototype.remove=wg.prototype.remove;function yg(a,b,c,d,e,f,g){a=a.c;var h=a.length,k=[],l;if(h){var m=c+360;for(l=e+360;h--;){var p=a[h];zg(p,b,c,d,e,f,g)?k.push(p):zg(p,b,m,d,l,f,g)&&k.push(p);}}return k}
  function zg(a,b,c,d,e,f,g){var h=a[3],k=a[0],l=a[1];a=a[2];return (f?k<=d:k<d)&&(g?h<=e:h<e)&&a>=b&&l>=c}function Ag(a,b){var c,d,e;if(c=b.length){var f=a.length;for(d={};f--;)d[a[f].id]=1;for(;c--;)(e=b[c]).id in d||a.push(e);}}wg.prototype.ig=function(a,b,c){var d=this.f,e=a.Rb(),f=a.Nb(),g=-e.lat;e=e.lng;var h=-f.lat;f=f.lng;!b&&g===h||!c&&e===f?a=[]:a.Gb()?(a=d.ab(-180,g,f,h,c,b),Ag(a,d.ab(e,g,180,h,!1,b)),Ag(a,yg(this,g,f,h,e+360,b,c))):(a=d.ab(e,g,f,h,c,b),Ag(a,yg(this,g,e,h,f,b,c)));return a};
  wg.prototype.intersectBoundingBox=wg.prototype.ig;function Bg(a){return x.H.gl.flexpolyline.encode(a)}t("H.util.flexiblePolyline.encode",Bg);function Cg(a){return x.H.gl.flexpolyline.decode(a)}t("H.util.flexiblePolyline.decode",Cg);function L(a){L.l.constructor.call(this);a&&Dg(a,L,0);this.Y=a||[];this.a=Eg(this,0,this.Y.length);}u(L,Vf);t("H.geo.LineString",L);function Eg(a,b,c){a=a.Y;var d=0;b=wd(b,0);c=vd(c,a.length);c-=2;for(b+=1;b<c;)d+=Uf(a[b],a[b+=3]);return d}L.prototype.zi=function(a,b,c){Fg(this,a,b,c,this.zi);};L.prototype.pushLatLngAlt=L.prototype.zi;function Fg(a,b,c,d,e){var f=a.Y.length;b=Rf(b,e);c=Sf(c,e);a.Y.push(Rf(b,e),Sf(c,e),d===B?0:Tf(d,e));f&&(a.a+=Uf(a.Y[f-2],c));delete a.R;delete a.b;}
  L.prototype.Bf=function(a,b,c){c&&Dg(c,this.Bf,2);void 0===b&&(b=this.Y.length);b&&(this.a-=Eg(this,a-3,a+b+3));var d=c?this.Y.splice.apply(this.Y,[a,b].concat(c)):this.Y.splice(a,b);c&&(this.a+=Eg(this,a-3,a+c.length+3));b&&!c&&(this.a+=Eg(this,a-3,a-3));delete this.R;delete this.b;return d};L.prototype.spliceLatLngAlts=L.prototype.Bf;L.prototype.nk=function(a,b,c,d){this.Bf(a,0,[b,c,d]);};L.prototype.insertLatLngAlt=L.prototype.nk;L.prototype.il=function(a){this.Bf(a,3);};
  L.prototype.removeLatLngAlt=L.prototype.il;L.prototype.Fd=function(a){Fg(this,a.lat,a.lng,a.alt,this.Fd);};L.prototype.pushPoint=L.prototype.Fd;L.prototype.Fc=function(a,b){this.nk(3*a,b.lat,b.lng,b.alt);};L.prototype.insertPoint=L.prototype.Fc;L.prototype.sf=function(a){this.il(3*a);};L.prototype.removePoint=L.prototype.sf;L.prototype.Qe=function(a,b){var c=this.Y,d=3*a;a=c[d];var e=c[d+1];c=c[d+2];b&&(b.lat=a,b.lng=e,b.alt=c);return b||new Wf(a,e,c)};L.prototype.extractPoint=L.prototype.Qe;
  L.prototype.tm=function(a,b,c){var d=this.Y;b=b||0;c=Ze(c,d.length/3);for(var e=3*b;b<c;)a(d[e++],d[e++],d[e++],b++);};L.prototype.eachLatLngAlt=L.prototype.tm;L.isDBC=Uf;L.prototype.wh=function(a){var b=this.a;a&&(a=this.Y,b+=Uf(a[a.length-2],a[1]));return b};L.prototype.getDBCs=L.prototype.wh;L.prototype.Ze=function(){return this.Y.length/3};L.prototype.getPointCount=L.prototype.Ze;L.prototype.hn=function(){return this.Y};L.prototype.getLatLngAltArray=L.prototype.hn;L.prototype.R=y;
  L.prototype.G=function(){var a;if(!(a=this.R)){a=this.Y;var b=a.length,c=3,d,e,f=y;if(3<=b){var g=d=a[0];var h=e=a[1];for(f=new K(g,h,d,e);c<b;c+=3){g=a[c-3];h=a[c-2];d=a[c];e=a[c+1];if(h>e&&180<e-h||h<e&&-180>h-e||e<h&&180>Ad(e-h)){var k=h;h=e;e=k;}g<d&&(k=g,g=d,d=k);cg(f.la,f.ca,f.na,f.ia,g,h,d,e,f);}}a=this.R=f;}return a};L.prototype.getBoundingBox=L.prototype.G;L.prototype.Zn=function(){return this.R!==y};L.prototype.hasBoundingBox=L.prototype.Zn;
  function Dg(a,b,c){for(var d=a.length,e=!(d%3),f;e&&d;)e=!(E(a[--d]=Tf((f=a[d])===B?0:f))||E(a[--d]=Sf(a[d]))||E(a[--d]=Rf(a[d])));if(!e&&b)throw new D(b,c,a);}function Gg(a){var b=new L,c=0,d=a.length;if(d%2)throw new D(Gg,0,a);for(;c<d;)Fg(b,a[c++],a[c++],0,Gg);return b}L.fromLatLngArray=Gg;L.prototype.oa=function(a){var b=this===a,c;if(!b&&(b=C(a,L))){var d=this.Y;a=a.Y;for(b=(c=d.length)===a.length;b&&c--;)b=d[c]==a[c];}return b};L.prototype.equals=L.prototype.oa;
  function Hg(a,b){return a.a-b.a}
  function Ig(a,b){var c=a.Y,d=-2,e=[],f;var g=a.b;if(!g){g=a.b=new wg;var h=0;var k=a.Y;var l=k.length;for(f=0;f<l;f+=3){var m=k[f];var p=k[f+1];if(f){if(r<p){var q=r;var r=p;}else q=p;if(w<m)var v=m;else {v=w;var w=m;}q=xg(g,v,q,w,r,180<r-q);q.a=h++;}w=m;r=p;}}g=g.ig(b).sort(Hg);k=g.length;for(b=0;b<k;b++){h=g[b];h=h.a;l=3*h;if(h>d+1){var z=[c[l],c[l+1]];e.push(z);}d=h;z.push(c[l+3],c[l+4]);}if(a.a){c=[];d=e.length;for(b=0;b<d;b++)if(z=e[b],g=z.length){k=[];for(a=0;a<g;a+=2)h=z[a],l=z[a+1],k.push(h,l),f=
  z[a-1],a&&Uf(l,f)&&(c.push(k),k=[],f+=0>f?360:-360,k.push(z[a-2],f,h,l));c.push(k);}e=c;}return e}n=L.prototype;n.rb="LineString";n.Tc=function(a,b){var c=this.Y,d=c.length,e;if(d){a.push("(");for(e=0;e<d;e+=3)e&&a.push(","),a.push(c[e+1]," ",c[e]);b&&(c[0]!==c[d-3]||c[1]!==c[d-2])&&a.push(",",c[1]," ",c[0]);a.push(")");}else a.push("EMPTY");return a};n.Mb="LineString";n.md=function(){var a=[],b=this.Y,c=b.length,d;for(d=0;d<c;d+=3)a.push([b[d+1],b[d],b[d+2]]);return a};
  n.yc=function(){var a=this.Y,b;if(this.G().Gb()){a=a.slice();var c=1;for(b=a.length;c<b;c+=3)0>a[c]&&(a[c]+=360);}return a};n.lp=function(a){a=void 0===a?5:a;for(var b=this.Y,c=b.length,d=[],e=0;e<c;e+=3)d.push([b[e],b[e+1],b[e+2]]);return Bg({polyline:d,precision:a,thirdDim:2,thirdDimPrecision:a})};L.prototype.toFlexiblePolyline=L.prototype.lp;
  function Jg(a){var b=Cg(a);a=b.polyline;var c=b.thirdDim;b=2===c||3===c;c=0===c;if(!a)throw new D(Jg,0,"data");if(b||c){c=a.length;var d=Array(3*c);for(var e=0,f=0;e<c;e++){var g=a[e];d[f++]=g[0];d[f++]=g[1];d[f++]=b?g[2]:0;}}if(!d)throw new D(Jg,0,"only ABSENT, ALTITUDE or ELEVATION are supported as type of the 3rd dimension");return new L(d)}L.fromFlexiblePolyline=Jg;function Kg(a){Kg.l.constructor.call(this);void 0!==a&&(this.data=a);}u(Kg,F);t("H.map.Feature",Kg);Kg.prototype.getData=function(){return this.data};Kg.prototype.getData=Kg.prototype.getData;Kg.prototype.u=function(){Kg.l.u.call(this);delete this.data;};function Lg(){}t("H.map.provider.Invalidations",Lg);Lg.MARK_INITIAL=Ud;Lg.prototype.update=function(a,b){b!==Mg.NONE&&(this.a=a,b&Mg.SPATIAL&&(this.f=a),b&Mg.VISUAL&&(this.g=a),b&Mg.ADD&&(this.b=a),b&Mg.REMOVE&&(this.c=a),b&Mg.Z_ORDER&&(this.j=a),b&Mg.VOLATILITY&&(this.i=a));};Lg.prototype.update=Lg.prototype.update;Lg.prototype.on=function(){return this.a};Lg.prototype.getMark=Lg.prototype.on;Lg.prototype.a=Ud;Lg.prototype.eo=function(a){return this.a>a};Lg.prototype.isAny=Lg.prototype.eo;
  Lg.prototype.g=Ud;Lg.prototype.me=function(a){return this.g>a};Lg.prototype.isVisual=Lg.prototype.me;Lg.prototype.f=Ud;Lg.prototype.Qh=function(a){return this.f>a};Lg.prototype.isSpatial=Lg.prototype.Qh;Lg.prototype.b=Ud;Lg.prototype.pk=function(a){return this.b>a};Lg.prototype.isAdd=Lg.prototype.pk;Lg.prototype.c=Ud;Lg.prototype.kg=function(a){return this.c>a};Lg.prototype.isRemove=Lg.prototype.kg;Lg.prototype.j=Ud;Lg.prototype.Rh=function(a){return this.j>a};Lg.prototype.isZOrder=Lg.prototype.Rh;
  Lg.prototype.i=Ud;Lg.prototype.ko=function(a){return this.i>a};Lg.prototype.isVolatility=Lg.prototype.ko;var Mg={NONE:0,VISUAL:1,SPATIAL:2,ADD:4,REMOVE:8,Z_ORDER:16,VOLATILITY:32};Lg.Flag=Mg;function Ng(a,b,c){Ng.l.constructor.call(this,a);this.oldValue=c;this.newValue=b;}u(Ng,rd);t("H.util.ChangeEvent",Ng);function M(a){uc(this,M);M.l.constructor.call(this,a?a.data:B);this.N=Og.next();if(a){var b="min";Cc(a[b])&&(this.v=a[b]);b="max";Cc(a[b])&&(this.s=a[b]);b="visibility";b in a&&(this.c=!!a[b]);b="volatility";b in a&&(this.C=!!a[b]);b="zIndex";b in a&&(this.o=+a[b]||0);b="provider";b in a&&!C(a[b],N)&&(this.a=a[b],this.wa(Mg.ADD));}}u(M,Kg);t("H.map.Object",M);var Og=new af(1),Pg={ANY:31,OVERLAY:1,SPATIAL:2,MARKER:4,DOM_MARKER:8,GROUP:16};M.Type=Pg;M.prototype.gb=function(){return this.N};
  M.prototype.getId=M.prototype.gb;M.prototype.Qi=function(a){if(!Cc(a)&&!zc(a))throw new D(this.Qi,0,"id must be a number or a string");this.m=a;return this};M.prototype.setRemoteId=M.prototype.Qi;M.prototype.Dn=function(){return this.m};M.prototype.getRemoteId=M.prototype.Dn;M.prototype.v=-1/0;M.prototype.s=1/0;M.prototype.Vj=function(a){var b=this.s;if(a)for(a=this;a=a.Ha;)b=vd(b,a.s);return b};M.prototype.getMax=M.prototype.Vj;
  M.prototype.Xj=function(a){var b=this.v;if(a)for(a=this;a=a.Ha;)b=wd(b,a.v);return b};M.prototype.getMin=M.prototype.Xj;M.prototype.c=!0;M.prototype.wb=function(a){var b=this.c;(a=!!a)^b&&(this.c=a,this.invalidate(Mg.VISUAL));return this};M.prototype.setVisibility=M.prototype.wb;M.prototype.Dc=function(a){for(var b=this,c;(c=b.c)&&a&&(b=b.Ha););return c};M.prototype.getVisibility=M.prototype.Dc;M.prototype.C=!1;M.prototype.fg=function(a){for(var b=this,c;!(c=b.C)&&a&&(b=b.Ha););return c};
  M.prototype.getVolatility=M.prototype.fg;M.prototype.El=function(a){var b=this.C;b^a&&(this.C=!b,this.invalidate(Mg.VOLATILITY));return this};M.prototype.setVolatility=M.prototype.El;M.prototype.o=B;M.prototype.fk=function(){return this.o};M.prototype.getZIndex=M.prototype.fk;M.prototype.ye=function(a){a!==this.o&&(this.uf(),this.o=a,this.invalidate(Mg.Z_ORDER));return this};M.prototype.setZIndex=M.prototype.ye;M.prototype.J=B;
  M.prototype.ed=function(){var a=this.J,b,c;if(!a){var d=(b=this.o)!==B;(a=this.Ha)?(a=a.ed().slice(),a[0]|=d):a=[d|0];a.push(b||0,0>(c=this.Ti)?this.N:c);this.J=a;}return a};M.prototype.getZInfo=M.prototype.ed;M.prototype.uf=function(){this.J=B;};function Qg(a,b,c){var d,e;if(!c||a[0]|b[0]){var f=a.length;var g=b.length;var h=vd(f,g);var k=1;for(e=1+c;k<h;k+=e)if(d=a[k]-b[k])return d}return c?0:f-g}M.compareZInfo=Qg;function Rg(a,b){return a.xj(b)}M.compareZOrder=Rg;
  M.prototype.xj=function(a){return this.Og-a.Og||Qg(this.ed(),a.ed(),!1)};M.prototype.compareZOrder=M.prototype.xj;n=M.prototype;n.previousSibling=y;n.nextSibling=y;n.Ti=-1;n.Ha=y;n.sn=function(){return this.Ha};M.prototype.getParentGroup=M.prototype.sn;M.prototype.kc=function(){for(var a=this,b;b=a.Ha;)a=b;return a};M.prototype.getRootGroup=M.prototype.kc;M.prototype.contains=function(a){return this===a};M.prototype.contains=M.prototype.contains;
  M.prototype.ka=function(a){if(this.Ha)throw new Xc(this.ka,"Not allowed for a child of a group");M.l.ka.call(this,a);};M.prototype.setParentEventTarget=M.prototype.ka;M.prototype.a=y;M.prototype.ga=function(){return this.a};M.prototype.getProvider=M.prototype.ga;
  M.prototype.xe=function(a,b){var c=this.a,d;if(d=c!==a){if(b&&(c&&!C(c,N)||a&&!C(a,N)))throw new Xc(b,"Only LocalObjectProvider allows an object transfers");b=this.type!==Pg.GROUP;c&&(this.invalidate(Mg.REMOVE),b&&c.Ia(this));if(this.a=a)b&&a.ea(this),this.za=y,this.invalidate(Mg.ADD);}return d};M.prototype.Pb=function(){return this.za||(this.za=new Lg)};M.prototype.getInvalidations=M.prototype.Pb;M.prototype.wa=function(a){var b=this.ga(),c;(c=!!b)&&b.invalidateObject(this,a);return c};
  M.prototype.invalidate=M.prototype.wa;M.prototype.u=function(){this.Ha&&this.Ha.Ia(this);M.l.u.call(this);};M.prototype.setData=function(a){this.data=a;return this};M.prototype.setData=M.prototype.setData;M.prototype.Sc=function(a){if(a&&!Ca(a))throw new D(M.prototype.Sc,0,"opt_callback must be a function");a={type:"Feature",properties:Sg(this,a?a(this.data):this.data,!!a),geometry:this.ba().Sc()};this.m&&(a.id=this.m);return a};M.prototype.toGeoJSON=M.prototype.Sc;
  function Sg(a,b,c){if(null===b||b===B)return null;if(0<=Object.keys(b).length&&"[object Object]"!==Object.prototype.toString.call(b))throw Error(Tg(a,c));try{return JSON.stringify(b),b}catch(d){throw Error(Tg(a,c));}}function Tg(a,b){return "Object Remote-Id: "+a.m+" - "+(b?"The value returned by the callback is not a valid JSON object and cannot be set as Feature properties.":"The given object data is not a valid JSON object and cannot be set as Feature properties.")}
  M.prototype.X=function(){return {id:this.N,properties:{min:this.Xj(),max:this.Vj(),zIdx:this.o,sIdx:this.Ti,parent:this.Ha?this.Ha.gb():0,visible:this.Dc(),"volatile":this.fg()},type:"Feature"}};M.prototype.forWorkerMessage=M.prototype.X;function Ug(a){var b;if(a){var c=Vg;for(b=C(a,Ug);c--;){var d=Wg[c];if(a.hasOwnProperty(d)){var e=a[d];if(b)this[d]=e;else {if((e=Xg[c](e))===Yg)throw new D(Ug,0,d+": "+a[d]);e!==this[d]&&e!==B&&(this[d]=e);}}}c=b?a.cf:this.lineWidth&&Xe(this.strokeColor);c||(this.cf=c);c=b?a.Sb:Xe(this.fillColor);c||(this.Sb=c);c=b?a.bf:"none"!==this.strokeColor&&this.lineWidth;c||(this.bf=c);}oc(this);}t("H.map.SpatialStyle",Ug);Ug.prototype.Sb=!0;Ug.prototype.cf=!0;Ug.prototype.bf=!0;var Wg="strokeColor fillColor lineWidth lineCap lineJoin miterLimit lineDash lineDashOffset lineHeadCap lineTailCap".split(" ");
  Ug.prototype.strokeColor="rgba(0,85,170,.6)";Ug.prototype.strokeColor=Ug.prototype.strokeColor;Ug.prototype.fillColor="rgba(0,85,170,.4)";Ug.prototype.fillColor=Ug.prototype.fillColor;Ug.prototype.lineWidth=2;Ug.prototype.lineWidth=Ug.prototype.lineWidth;Ug.prototype.lineCap="round";Ug.prototype.lineCap=Ug.prototype.lineCap;Ug.prototype.lineJoin="miter";Ug.prototype.lineJoin=Ug.prototype.lineJoin;Ug.prototype.miterLimit=1;Ug.prototype.miterLimit=Ug.prototype.miterLimit;Ug.prototype.po=ff;
  Ug.prototype.lineDash=Ug.prototype.po;Ug.prototype.lineDashOffset=0;Ug.prototype.lineDashOffset=Ug.prototype.lineDashOffset;Ug.prototype.qo=B;Ug.prototype.lineHeadCap=Ug.prototype.qo;Ug.prototype.ro=B;Ug.prototype.lineTailCap=Ug.prototype.ro;var Vg=Wg.length;Ug.prototype.oa=function(a){var b=this===a;if(!b&&a){for(b=0;b<Vg;b++){var c=Wg[b];if(this[c]!==a[c])break}b=b===Vg;}return b};Ug.prototype.equals=Ug.prototype.oa;Ug.prototype.Rj=function(a){if(a){var b={};Wa(b,this,a);}else b=this;return new Ug(b)};
  Ug.prototype.getCopy=Ug.prototype.Rj;
  var Yg=oc({}),Xg=[function(a){return a?nc(a):Yg},function(a){return a?nc(a):Yg},function(a){return 0<=a&&100>=a?+a:Yg},function(a){a=nc(a);return "butt"===a||"square"===a||"round"===a||"arrow-head"===a||"arrow-tail"===a?a:Yg},function(a){return "round"===a||"bevel"===a||"miter"===a?a:Yg},function(a){return 0<a&&100>=a?+a:Yg},function(a){return a&&a.every&&a.every(Dc)?a:Yg},function(a){return E(+a)?Yg:+a},function(a){return tc(a)?Xg[3](a):B},function(a){return tc(a)?Xg[3](a):B}];Ug.MAX_LINE_WIDTH=100;
  var Zg=new Ug;Ug.DEFAULT_STYLE=Zg;var $g="fillColor strokeColor lineWidth lineCap lineJoin miterLimit lineDashOffset lineDash lineTailCap lineHeadCap".split(" ");Ug.prototype.X=function(){for(var a={},b=$g.length,c;b--;)c=$g[b],a[c]=this[c];return a};Ug.prototype.forWorkerMessage=Ug.prototype.X;function ah(a){var b;if(a){var c=C(a,ah);for(b in a)if(b in this){var d=a[b];d!==this[b]&&("fillColor"===b||0<(d=+d))&&(this[b]=d);}a=c?a.Sb:!!(Xe(this.fillColor)&&this.width&&this.width);a||(this.Sb=a);}oc(this);}t("H.map.ArrowStyle",ah);ah.prototype.Sb=!0;ah.prototype.fillColor="rgba(255,255,255,.75)";ah.prototype.width=1.2;ah.prototype.length=1.6;ah.prototype.frequency=5;ah.prototype.Qj=function(){return new ah(this)};
  ah.prototype.oa=function(a){var b=this===a;!b&&a&&(b=a.width===this.width&&a.fillColor===this.fillColor&&a.length===this.length&&a.frequency===this.frequency);return b};ah.prototype.equals=ah.prototype.oa;function bh(a,b){var c;bh.l.constructor.call(this,b);b&&this.rc(b.style);a&&(this.j=!0);b&&(c=b.arrows)&&this.tl(c);}u(bh,M);t("H.map.Spatial",bh);bh.prototype.type=Pg.SPATIAL;bh.prototype.Og=0;bh.prototype.style=Zg;bh.prototype.ua=function(){return this.style};bh.prototype.getStyle=bh.prototype.ua;bh.prototype.rc=function(a){var b=!0;a?this.style=C(a,Ug)?a:new Ug(a):this.style?delete this.style:b=!1;b&&this.invalidate(Mg.VISUAL);return this};bh.prototype.setStyle=bh.prototype.rc;
  bh.prototype.Cm=function(){return this.g};bh.prototype.getArrows=bh.prototype.Cm;bh.prototype.tl=function(a){var b=this.g,c=!1;!a&&b?(delete this.g,c=!0):!a||b&&b.oa(a)||(this.g=new ah(a),c=!0);c&&"none"!==this.style.strokeColor&&this.wa(1);return this};bh.prototype.setArrows=bh.prototype.tl;function ch(a,b){var c=!1,d=!1,e;if(b.length){for(c=0;c<b.length;c++)if(b[c]!==dh){d=!0;break}b=a.style;c=d?b.cf||b.Sb&&a.j||(e=a.g||!1)&&b.bf&&e.Sb:b.Sb;}return c&&a.Dc(!0)}bh.prototype.j=!1;bh.prototype.ho=function(){return this.j};
  bh.prototype.isClosed=bh.prototype.ho;bh.prototype.getGeometriesForTile=bh.prototype.$d;bh.prototype.zh=function(){return y};bh.prototype.getLabels=bh.prototype.zh;function eh(a,b){eh.l.constructor.call(this,a,b);}u(eh,bh);t("H.map.GeoShape",eh);eh.prototype.getBoundingBox=eh.prototype.G;function fh(a,b,c,d){var e=[],f=b.length,g;for(g=0;g<f;g++){var h=b[g];h.length&&e.push(gh(a,h,c,d));}return e}function gh(a,b,c,d){var e,f=[],g=b.length,h=0;a.W=0;for(e=e||0;h<g;)f.push(hh(a,b[h++],b[h++],e,d));c&&f.push(hh(a,b[0],b[1],e,d));return f}function hh(a,b,c,d,e){var f=a.W;f&&180<Ad(f-c)&&(c+=0>f?-360:360);a.W=c;return e.Sh(b,c+d)}
  function ih(a,b,c){for(var d=b,e,f=a.length+b,g,h;d--;){b=a[d];g=b.length;for(e=Array(g);g--;)h=b[g],e[g]=new I(h.x+c,h.y);a[--f]=e;}}var jh=new L([0,0,0,0,0,0,0,0,0]);function kh(a){uc(this,kh);kh.l.constructor.call(this);this.pa=lh(this,a,this.constructor,0);}u(kh,Vf);t("H.geo.MultiGeometry",kh);kh.prototype.splice=function(a,b,c){a=[a];b!==B&&a.push(b);c&&(b=lh(this,c,this.splice,2),a=a.concat(b));this.R=y;return this.pa.splice.apply(this.pa,a)};kh.prototype.splice=kh.prototype.splice;kh.prototype.pc=function(a){var b=this.pa.length;if(!(0<=a&&a<b))throw new je(this.pc,a,[0,b-1]);this.R=y;return this.pa.splice(a,1)[0]};kh.prototype.removeAt=kh.prototype.pc;
  kh.prototype.remove=function(a){a=this.pa.indexOf(a);if(0<=a){var b=this.pa.splice(a,1)[0];this.R=y;}return b||y};kh.prototype.remove=kh.prototype.remove;kh.prototype.$m=function(){return this.pa};kh.prototype.getGeometries=kh.prototype.$m;kh.prototype.push=function(a){var b=lh(this,[a],this.push,0)[0];this.R&&(this.R=this.R.nc(a.G()));this.pa.push(b);};kh.prototype.push=kh.prototype.push;
  kh.prototype.G=function(){var a;if(!(a=this.R)){a=y;var b,c;if(this.pa.length)for(a=this.pa[0].G(),c=1;c<this.pa.length;c++)if(b=this.pa[c].G())a=a?a.nc(b):b;}return this.R=a};kh.prototype.getBoundingBox=kh.prototype.G;kh.prototype.R=y;function lh(a,b,c,d){var e,f=[];if(!yc(b))throw new D(c,d);for(e=0;e<b.length;e++)if(a.a(b[e]))f.push(a.b(b[e]));else throw new D(c,d);return f}kh.prototype.b=function(a){return a};
  kh.prototype.oa=function(a){var b=this===a,c;if(!b&&(b=C(a,this.constructor))){var d=this.pa;a=a.pa;for(b=(c=d.length)===a.length;b&&c--;)b=d[c].oa(a[c]);}return b};kh.prototype.equals=kh.prototype.oa;n=kh.prototype;n.Tc=function(a){var b=this.pa,c=b.length,d,e,f=!1;if(c){a.push("(");for(d=0;d<c;d++)(e=0<d&&f)&&a.push(","),b[d].Tc(a),"EMPTY"===a[a.length-1]?a.splice(-1-e,1+e):f=!0;f?a.push(")"):a.splice(-1,1,"EMPTY");}else a.push("EMPTY");return a};
  n.toString=function(){return this.Tc([this.rb.toUpperCase()," "]).join("")};n.yc=function(){for(var a=[],b=this.pa,c=b.length;c--;)a[c]=b[c].yc();return a};n.X=function(){var a=kh.l.X.call(this);a.type=this.rb;return a};n.md=function(){for(var a=[],b=this.pa,c=b.length;c--;)a[c]=b[c].md();return a};function mh(a){mh.l.constructor.call(this,a);}u(mh,kh);t("H.geo.MultiLineString",mh);mh.prototype.a=function(a){return C(a,L)};mh.prototype.rb="Multi"+L.prototype.rb;mh.prototype.Mb="Multi"+L.prototype.Mb;function nh(a,b){nh.l.constructor.call(this,!1,b);this.da(a);}u(nh,eh);t("H.map.Polyline",nh);nh.prototype.G=function(){return this.eb.G()};nh.prototype.getBoundingBox=nh.prototype.G;nh.prototype.eb=y;nh.prototype.da=function(a){var b=this.da,c,d;if(C(a,mh)){var e=a.pa;if(c=e.length)for(d=0;d<c;d++)oh(e[d],b);else throw new D(b,0);}else oh(a,b);this.zd=!!e;this.eb=a;this.wa(Mg.SPATIAL);return this};nh.prototype.setGeometry=nh.prototype.da;nh.prototype.ba=function(){return this.eb};
  nh.prototype.getGeometry=nh.prototype.ba;nh.prototype.clip=function(a){var b=this.eb;return Ig(this.zd?b.pa[0]:b,a)};nh.prototype.clip=nh.prototype.clip;nh.prototype.$d=function(a){var b=this.eb;var c,d=[];if(this.zd)for(b=b.pa,c=b.length;c--;)ph(this,b[c],a,d);else ph(this,b,a,d);return d.length?d:B};nh.prototype.getGeometriesForTile=nh.prototype.$d;function oh(a,b){if(!C(a,L)||2>a.Ze())throw new D(b,0);}
  function ph(a,b,c,d){var e=Ig(b,c.bg());if(e.length&&(b=c.dg(),a=fh(a,e,!1,b),e=a.length)){var f=c.af();b=b.w;c.x||ih(a,e,-b);c.x===(1<<c.z)-1&&ih(a,e,b);c=qh(a,f.left,f.top,f.right,f.bottom,!1);c.length&&d.push(new rh(c));}}nh.prototype.X=function(){var a=nh.l.X.call(this),b=a.properties;a.geometry=this.ba().X();b.style=this.ua().X();b.height=0;return a};nh.prototype.forWorkerMessage=nh.prototype.X;var sh;function th(a,b){if(x.URL)return (new x.URL(a,b)).toString();if(!a||!uh(a))return a;if(!b||uh(b))throw new TypeError("Failed to construct 'URL': Invalid base URL");sh||(sh=document.createElement("a"),Fc(sh));var c=sh;c.href=b;"/"!==a[0]?a=c.href.replace(/\/[^\/]*$/,"/")+a:((b=c.origin)||(b=c.protocol+"//"+c.host),a=b+a);return a}function uh(a){var b=!1;"string"===typeof a&&(b=!(-1<a.search(/^(http|https|data|blob):/)||"//"===a.substr(0,2)));return b}function vh(a,b){var c,d=arguments.length,e,f;for(c=1;c<d;c++)if((e=arguments[c])&&e!==a&&e!==g){var g=e;for(f in e){var h=e[f];a[f]!==h&&(wh(h)?wh(a[f])?a[f]=vh(a[f],h):a[f]=qc(h):void 0!==h&&(a[f]=qc(h)));}}return a}t("H.util.webgl.mergeObjects",vh);var xh=mc();function yh(a,b,c){var d=c[a];return b&&d in b&&0>sc.indexOf(d)?(b=b[d],++a<c.length?yh(a,b,c):b):xh}
  var zh=yh.bind(null,0),Ah={polygons:1,lines:1,"pattern-lines":1,points:1,text:1,raster:1,custom_icons:1,overlays:1},Bh={data:1,draw:1,enabled:1,filter:1,properties:1},Ch=Object.keys(Bh);function Dh(a,b,c,d,e,f){var g=d[a],h=c[g];if(++a<d.length){var k=b[g]||{};for(c=Ch.length;c--;){var l=Ch[c];if("draw"!==l||!f){var m=h[l];m!==B&&(k[l]=qc(m));}}Dh(a,k,h,d,e,f);}else e?k=qc(h):(k=h,delete c[g]);b[g]=b[g]?vh(b[g],k):k;}var Eh=Dh.bind(null,0);function Fh(a,b){a in Ah&&(b[a]=1);}
  function Gh(a,b,c){var d,e,f;for(d in a)if(Bh[d]){if("draw"===d){var g=a[d];for(e in g){var h=g[e];(f=h.style)?(h.style=b+f,Fh(f,c)):(delete g[e],g[b+e]=h,Fh(e,c));}}}else Gh(a[d],b,c);}
  function Hh(a,b){var c={},d,e,f,g;b+="_";a=vh({},a);if(d=a.styles)for(e in d){var h=d[e];delete d[e];d[b+e]=h;if(f=h.mix)for(zc(f)&&(f=[f]),g=f.length;g--;)Fh(f[g],c),f[g]=b+f[g];if(g=h.base)f||(f=h.mix=[]),f.unshift(b+g),delete h.base,Fh(g,c);Fh(e,c);}else d=a.styles={};if(h=a.layers)for(e in h)f=h[e],delete h[e],(g=f.data)&&!g.layer&&(g.layer=e),h[b+e]=f,Gh(f,b,c);for(e in c)d[b+e]={base:e};return a}
  function Ih(a,b){var c=a.sources,d=Object.keys(c)[0],e=vh(c[d],{uid:b});c=a.layers;var f;a.sources={};a.sources[b]=e;for(f in c)a=c[f],a.data?a.data.source===d&&(a.data.source=b):a.data={source:b};}function Jh(a,b){var c;var d=a.textures;var e=a.fonts;for(c in d){var f=d[c];f.url&&(f.url=th(f.url,b));}for(c in e)if(d=e[c],yc(d))for(f=0;f<d.length;f++){var g=d[f];g.url=g.url&&th(g.url,b);}else g=a.fonts[c],g.url=g.url&&th(g.url,b);}
  function Kh(a,b){return "function(){return "+("feature."+a+(b||""))+";}"}function Lh(a){return Kh("style."+a,void 0)}function Mh(a,b,c,d){a={base:a,blend:b,blend_order:c};d&&(a.clean_depth=!!d);return a}function Nh(a){var b={};b["translucent-"+(a?"extruded-":"")+"polygons"]={color:Lh("fillColor"),order:1,interactive:!0,extrude:a};return b}function Oh(a,b,c,d){a={data:{source:a,layer:b}};c&&(a.draw=c);d&&(a.filter=d);return a}function wh(a){return Da(a)&&!yc(a)}function Ph(a,b){Ph.l.constructor.call(this);if(b&&uh(b))throw new D(Ph,1,"Base URL must be absolute");this.A=Qh.INIT;this.a=null;this.c=b;}u(Ph,F);t("H.map.render.Style",Ph);Ph.prototype.load=Ph.prototype.load;Ph.prototype.getState=function(){return this.A};Ph.prototype.getState=Ph.prototype.getState;Ph.prototype.P=function(a){this.A=a;};Ph.prototype.setState=Ph.prototype.P;Ph.prototype.hc=function(){return this.c};Ph.prototype.getBaseUrl=Ph.prototype.hc;Ph.prototype.vd=function(){return qc(this.a)};
  Ph.prototype.getConfig=Ph.prototype.vd;Ph.prototype.Jm=function(){return this.a};Ph.prototype.getConfigReference=Ph.prototype.Jm;Ph.prototype.Ld=function(a){this.a=a;};Ph.prototype.setConfig=Ph.prototype.Ld;Ph.prototype.Lb=function(a){this.a=null;this.P(Qh.ERROR);var b=Rh;se(this.aa,void 0!==b?String(b):void 0)?this.dispatchEvent(new td(Rh,a,this)):console.error(a);};Ph.prototype.dispatchError=Ph.prototype.Lb;Ph.prototype.u=function(){Ph.l.u.call(this);this.a=null;};
  var Rh="error",Sh={nd:"change",hj:Rh},Qh={ERROR:-1,INIT:0,LOADING:1,READY:2};Ph.State=Qh;function Th(a,b){Th.l.constructor.call(this,a,b);if(zc(a))Uh.test(a)&&-1===a.indexOf("import:")?(this.f=a,b||(this.j=uh(this.f)?B:this.f)):this.g=a;else if(Da(a))this.Ld(qc(a));else throw new D(Th,0,Vh);}u(Th,Ph);t("H.map.render.webgl.Style",Th);
  Th.prototype.load=function(){var a=this,b=this.hc();this.f?(this.P(Qh.LOADING),(new rf("text/plain",this.f)).then(function(c){var d={};return Wh(c,b,!1,(d[b]=!0,d))}).then(function(c){return a.Ld(c)},function(c){return a.Lb(c.message)}),this.f=null):this.g&&(this.P(Qh.LOADING),Wh(this.g,b).then(function(c){return a.Ld(c)},function(c){return a.Lb(c.message)}),this.g=null);};
  Th.prototype.zl=function(a,b,c){var d;Xh(this);a=Yh(this,a,this.zl,c);for(c=0;c<a.length;c++){var e=a[c].hb.draw;for(d in e){var f=e[d];wh(f)&&(f.interactive=!!b);}}Zh(this);};Th.prototype.setInteractive=Th.prototype.zl;
  Th.prototype.setProperty=function(a,b,c){var d,e=a.split("."),f=0,g=e.length;Xh(this);if(!tc(b))throw new D(this.setProperty,1,"value");if(d=$h(this.a,e)){if(!(d.parent instanceof Object)||d.parent instanceof Array)if(c)e.pop(),e=$h(this.a,e),d.parent=e.parent[e.wg]={};else throw new D(this.setProperty,0,a+" property is not primitive type");d.parent[d.wg]=b;}else {for(d=this.a;f!==g-1;)d[e[f]]={},d=d[e[f++]];d[e[f]]=b;}ai(this)&&Zh(this);};Th.prototype.setProperty=Th.prototype.setProperty;
  Th.prototype.Eh=function(a){Xh(this);return (a=$h(this.a,a.split(".")))?qc(a.node):void 0};Th.prototype.getProperty=Th.prototype.Eh;Th.prototype.removeProperty=function(a){Xh(this);(a=$h(this.a,a.split(".")))&&a.parent&&a.parent.hasOwnProperty(a.wg)&&(delete a.parent[a.wg],ai(this)&&Zh(this));};Th.prototype.removeProperty=Th.prototype.removeProperty;
  Th.prototype.Pe=function(a,b,c){var d;Xh(this);var e=this.a;var f=e.layers;var g=Yh(this,a,this.Pe,!1);a=g.length;for(d={};a--;)Eh(d,f,g[a].id,!!b,!!c);c={};g=Object.keys(e);for(a=g.length;a--;){var h=g[a];var k=e[h];c[h]=k===f?d:qc(k);}b||Zh(this);return c};Th.prototype.extractConfig=Th.prototype.Pe;Th.prototype.hf=function(a){Xh(this);if(!Da(a))throw new D(this.hf,0,"config");this.Ld(vh(this.a,a));};Th.prototype.mergeConfig=Th.prototype.hf;Th.prototype.b=ba(2);
  Th.prototype.toString=function(){return this.getState()===Qh.READY?x.H.gl.yaml.safeDump(this.a,{lineWidth:120}):""};Th.prototype.u=function(){Th.l.u.call(this);this.g=this.f=null;};function ai(a){var b=a.a,c;if(Da(b)){var d;if(d=a.i){b=b&&b.sources;d=!1;for(var e in b)if(b[e].type===a.i){d=!0;break}d=!(b?d:1);}d&&(c="invalid source, the only valid type is "+a.i);}else c=Vh;c&&a.Lb(c);return !c}function Zh(a){a.dispatchEvent(new rd("change",a));}
  function Xh(a){if(a.getState()!==Qh.READY)throw new Xc(a.hf,"style is not ready yet");}function Yh(a,b,c,d){var e=[],f=yc(b)?b:[b],g,h;void 0===d&&(d=!0);for(f=f.sort().reverse();g=f.pop();){b=String(g).split(".");a:{var k=a.a;for(var l=b.length;l--&&!Bh[b[l]];);if(k&&0>l&&(k=zh(k.layers,b),wh(k)))break a;k=xh;}if(k===xh)throw new D(c,0,'Unresolvable layer ID "'+g+'"');e.push({id:b,hb:k});if(d)for(h in k)!Bh[h]&&wh(k[h])&&f.push(g+"."+h);}return e}
  function $h(a,b){var c=0,d;for(d=b.length;c!==d;){var e=b[c++];var f=a;a=f[e];if(!a)break}return c===d?{node:a,parent:f,wg:e}:void 0}var Uh=/^(http[s]?)?.*\.ya?ml/i,Vh="invalid style configuration";
  function Wh(a,b,c,d){c=void 0===c?!1:c;d=void 0===d?{}:d;try{var e=x.H.gl.yaml.safeLoad(a,{json:!0});}catch(f){return Promise.reject(f)}return e&&(a=e["import"],zc(a)&&(a=[a]),c&&b&&bi(e,b),delete e["import"],yc(a)&&a.length)?(c=a.reduce(function(f,g){var h=b?th(g,b):g;d[h]||(d[h]=!0,f.push((new rf("text/plain",h)).then(function(k){return Wh(k,h,!0,d)})));return f},[]),Promise.all(c).then(function(f){var g={};f.forEach(function(h){return h&&vh(g,h)});vh(g,e);return g})):Promise.resolve(e)}
  function bi(a,b){function c(g){g.url&&(g.url=th(g.url,b));}var d=a&&a.fonts;if(d)for(var e in d)yc(d[e])?d[e].forEach(c):c(d[e]);if(a=a&&a.textures)for(var f in a)c(a[f]);}Th.normalize=bi;Th.prototype.Ld=function(a){Th.l.Ld.call(this,a);ai(this)&&(this.P(Qh.READY),Zh(this));};Th.prototype.vd=function(){return Th.l.vd.call(this)};Th.prototype.hc=function(){return this.j||Th.l.hc.call(this)};t("H.map.Style",Th);Th.State=Qh;function qh(a,b,c,d,e,f){var g,h,k=a.length,l,m;if(k)for(g=[];k--;){var p=a[k];var q=p.length;var r=0;for(l=1;l<q;l++)if(m=ci(p[l-1],p[l],c,b,d,e)){var v=m[0];var w=m[1];r&&r.oa(v)?h.push(w):g.push(h=m);r=w;f&&(l=q,k=0);}}else g=a;return g}t("H.math.clipping.clipStrips",qh);
  function ci(a,b,c,d,e,f){var g=a.x;a=-a.y;var h=b.x;b=-b.y;c=-c;f=-f;if(g>h){if(h>e||g<d)return;var k=g;var l=a;g=h;a=b;h=k;b=l;k=1;}else if(g>e||h<d)return;if(a>b){if(b>c||a<f)return;var m=1;a=-a;b=-b;l=f;f=-c;c=-l;}else if(a>c||b<f)return;if(g<d){if((a+=(d-g)*(b-a)/(h-g))>c)return;g=d;}if(a<f){if((g+=(f-a)*(h-g)/(b-a))>e)return;a=f;}h>e&&(b=a+(e-g)*(b-a)/(h-g),h=e);b>c&&(h=g+(c-a)*(h-g)/(b-a),b=c);m&&(a=-a,b=-b);return k?[new I(h,-b),new I(g,-a)]:[new I(g,-a),new I(h,-b)]}
  function di(a,b,c){a=ei(a,!0);b=ei(b,!1);var d,e;var f={};var g=d=1;switch(~~(c||0)){case 1:g=d=0;break;case 2:d=0;g=1;break;case 3:d=1,g=0;}c=d;var h=g;if(b&&a){b.Qf=fi(b.x,b.y,null,gi(b));a.Qf=fi(a.x,a.y,null,gi(a));for(g=b;g.next;g=g.next)if(!g.ab)for(d=a;d.next;d=d.next)if(!d.ab){var k=hi(g.next);var l=hi(d.next);if(e=ii(g,k,d,l,f)){e=f.dm;var m=f.em;var p=f.rp;var q=f.sp;e=fi(p,q,null,null,null,null,!0,0,0,e);ji(e,g,k);k=fi(p,q,null,null,null,null,!0,0,0,m);ji(k,d,l);e.ki=k;k.ki=e;}}f=ce(b,ki(a));
  c&&(f=!f);for(g=b;g;g=g.next)g.ab&&(g.oh=f,f=!f);f=ce(a,ki(b));h&&(f=!f);for(d=a;d.next;d=d.next)d.ab&&(d.oh=f,f=!f);li(b);for(li(a);(a=mi(b))!=b;){for(c=null;!a.Mg;a=a.ki){for(f=a.oh;;){c=fi(a.x,a.y,c);c.artificial=a.ab||a.fo;a.Mg=1;a=f?a.next:a.Ub;if(!a)break;if(a.ab){a.Mg=1;break}}if(!a)break}c.li=r;var r=c;}return r}}t("H.math.clipping.clipPolygon",di);
  function fi(a,b,c,d,e,f,g,h,k,l){a={x:a,y:b,next:c||null,Ub:d||null,li:e||null,ki:f||null,ab:!!g,oh:h||0,Mg:k||0,alpha:l||0};d&&(a.Ub.next=a);c&&(a.next.Ub=a);return a}function hi(a){for(;a&&a.ab;)a=a.next;return a}function gi(a){if(a)for(;a.next;)a=a.next;return a}function mi(a){var b=a;if(b){do b=b.next;while(b!=a&&(!b.ab||b.ab&&b.Mg))}return b}function li(a){var b=gi(a);b.Ub.next=a;a.Ub=b.Ub;}
  function ii(a,b,c,d,e,f){var g,h=b.x-a.x,k=b.y-a.y;var l=d.x-c.x;var m=d.y-c.y;var p=h*m-k*l;if(!p)return 0;l=((c.x-a.x)*m-(c.y-a.y)*l)/p;p=(k*(c.x-a.x)-h*(c.y-a.y))/p;if(0>l||1<l||0>p||1<p)return 0;0===l?g=a:1===l?g=b:0===p?g=c:1===p&&(g=d);if(g&&!f)return g.x+=2.480549651603763E-5,g.y+=7.321997314118067E-5,g.Qf&&(g.Qf.x=g.x,g.Qf.y=g.y),ii(a,b,c,d,e);e.rp=a.x+l*h;e.sp=a.y+l*k;e.dm=l;e.em=p;return 1}function ki(a){for(var b=[];a;)b.push(a.x,a.y),a=a.next;return b}
  function ji(a,b,c){for(b=b.next;b!==c&&b.alpha<=a.alpha;)b=b.next;a.next=b;a.Ub=b.Ub;a.next.Ub=a;a.Ub.next=a;}function ei(a,b){for(var c,d=null,e=0,f=a.length;e<f;e++){c=fi(a[e].x,a[e].y,d);c.fo=b;if(c.next=d)d.Ub=c;d=c;}return d}function O(a,b){var c;O.l.constructor.call(this);C(a,L,O,0);if(b!==B&&yc(b,O,1)){for(c=0;c<b.length;c++)C(b[c],L,O,1,"index "+c);this.Pa=b;}else this.Pa=[];this.cb=a;this.a=[];}u(O,Vf);t("H.geo.Polygon",O);function ni(a){var b=O,c=L,d=a.la,e=a.ca,f=a.na,g=a.ia;e=[d,e,B,d,g,B,f,g,B,f,e,B];180<=a.Fb()&&(e.splice(9,0,f,a=a.fb().lng,B),e.splice(3,0,d,a,B));return new b(new c(e))}O.fromRect=ni;var oi={NORTH:90,SOUTH:-90};O.Direction=oi;O.prototype.Cd=oi.NORTH;
  O.prototype.Al=function(a){this.Cd!==a&&(this.R=y,this.a.length=0,this.Cd=a);return this};O.prototype.setPoleCovering=O.prototype.Al;O.prototype.xn=function(){return this.Cd};O.prototype.getPoleCovering=O.prototype.xn;O.prototype.Um=function(){return this.cb};O.prototype.getExterior=O.prototype.Um;O.prototype.xl=function(a){if(!C(a,L))throw new D(this.xl,0,a);this.cb=a;this.R=y;};O.prototype.setExterior=O.prototype.xl;O.prototype.en=function(){return this.Pa};O.prototype.getInteriors=O.prototype.en;
  O.prototype.Lg=function(a,b,c){var d=arguments.length,e;for(e=2;e<d;e++)C(arguments[e],L,this.Lg,e);var f=this.Pa.splice.apply(this.Pa,arguments);for(e=2;e<d;e++)arguments[e]=B;this.a.splice.apply(this.a,arguments);return f};O.prototype.spliceInteriors=O.prototype.Lg;O.prototype.Vo=function(a){return this.Lg(a,1)[0]};O.prototype.removeInteriorAt=O.prototype.Vo;O.prototype.Uo=function(a){a=this.Pa.indexOf(a);return 0>a?B:this.Lg(a,1)[0]};O.prototype.removeInterior=O.prototype.Uo;
  O.prototype.el=function(a){if(!C(a,L))throw new D(this.el,0,a);this.Pa.push(a);};O.prototype.pushInterior=O.prototype.el;O.prototype.G=function(){var a=this.R;a||(this.R=a=pi(this.cb,this.Cd));return a};O.prototype.getBoundingBox=O.prototype.G;n=O.prototype;n.Pj=function(a){var b=this.Pa.length;if(0>a||a>=b)throw new je(this.Pj,a,[0,b-1]);(b=this.a[a])||(this.a[a]=b=pi(this.Pa[a],this.Cd));return b};n.cb=y;n.Pa=[];
  function pi(a,b){var c,d,e;if(e=a.G())(c=a.wh(!0))&&(d=a.Ze())&&(e=e.nc(eg([a.Qe(0),a.Qe(d-1)],!0),!0)),360===e.Fb()&&1===c%2&&(e=e.gd(b,0));return e}n.rb="Polygon";n.Tc=function(a){var b=this.Pa,c=b.length,d;if(this.cb.Ze()){a.push("(");this.cb.Tc(a,!0);for(d=0;d<c;d++)b[d].Ze()&&(a.push(","),b[d].Tc(a,!0));a.push(")");}else a.push("EMPTY");return a};n.Mb="Polygon";
  n.md=function(){var a,b=[],c=this.Pa,d=this.cb.md();d[0].toString()!==d[d.length-1].toString()&&d.push(d[0]);b.push(d);for(a=0;a<c.length;a++)d=c[a].md(),d[0].toString()!==d[d.length-1].toString()&&d.push(d[0]),b.push(d);return b};n.X=function(){var a=O.l.X.call(this);this.G().Gb()&&(a.type="Multi"+a.type);return a};n.yc=function(){var a=[],b=this.Pa,c=b.length;for(a.push(this.cb.yc());c--;)a[c+1]=b[c].yc();return this.G().Gb()?[a]:a};
  n.oa=function(a){var b=!1;if(C(a,O)){var c=a.Pa,d=this.Pa.length;b=c.length;var e=0;for(b=this.cb.oa(a.cb)&&d===b;b&&e<d;)b=b&&this.Pa[e].oa(c[e]),e++;}return b};function qi(a,b,c,d){d=void 0===d?!0:d;var e=a.Pa,f=ri.bind(null,b,c);return be(b,c,a.cb.Y,0,!0,3)!==ae.NONE?d?!e.some(f):!0:!1}function ri(a,b,c){return be(a,b,c.Y,0,!0,3)===ae.SURFACE}
  function si(a,b){b=b.Y;a=a.cb.Y;var c,d,e=b.length-3,f=a.length-3,g={};for(c=0;c<e;c+=3){var h=b[c];var k=b[c+1];var l=b[c+3];var m=b[c+4];for(d=0;d<f;d+=3){var p=a[d];var q=a[d+1];var r=a[d+3];var v=a[d+4];if(ii({x:k,y:h},{x:m,y:l},{x:q,y:p},{x:v,y:r},g,!0))return !0}}return !1}
  function ti(a,b){var c=b.cb,d=b.Pa,e=d.length,f=c.Y,g=f.length,h=a.cb.Y,k=h.length;if(si(a,c))return !0;for(c=0;c<g;c+=3)if(qi(a,f[c],f[c+1]))return !0;for(c=0;c<k;c+=3)if(qi(b,h[c],h[c+1]))return !0;for(c=0;c<e;c++)if(si(a,d[c]))return !0;return !1}function ui(a){ui.l.constructor.call(this,a);}u(ui,kh);t("H.geo.MultiPolygon",ui);ui.prototype.a=function(a){return C(a,O)};ui.prototype.rb="Multi"+O.prototype.rb;ui.prototype.Mb="Multi"+O.prototype.Mb;function rh(a,b,c){this.paths=this.a=a;b!==B&&(this.interiorsIndex=this.b=b);c!==B&&(this.outlinesIndex=this.c=c);}rh.prototype.interiorsIndex=rh.prototype.b=Td;rh.prototype.outlinesIndex=rh.prototype.c=Td;var dh=pc(new rh([])),vi=oc([]);function xi(a,b){var c=b&&(+b.extrusion||+b.extrude),d=b&&+b.elevation,e=0;xi.l.constructor.call(this,!0,b);0<d&&(e+=d,this.f=d);0<c&&(e+=c,this.i=c);if(e>yi)throw new je(xi,e,[0,yi]);C(a,L)?this.da(new O(a)):this.da(a);}u(xi,eh);t("H.map.Polygon",xi);xi.prototype.i=0;xi.prototype.f=0;xi.prototype.eb=y;var yi=2047;xi.MAX_EXTRUDE_HEIGHT=yi;xi.prototype.Gi=function(a){var b=+a;if(b!==a)throw new D(this.Gi,0,a);if(0>b||this.f+b>yi)throw new je(this.Gi,this.f+b,[0,yi]);this.i=b;this.wa(Mg.SPATIAL);};
  xi.prototype.setExtrusion=xi.prototype.Gi;xi.prototype.Vm=function(){return this.i};xi.prototype.getExtrusion=xi.prototype.Vm;xi.prototype.Fi=function(a){var b=+a;if(b!==a)throw new D(this.Fi,0,a);if(0>b||this.i+b>yi)throw new je(this.Fi,this.i+b,[0,yi]);this.f=b;this.wa(Mg.SPATIAL);};xi.prototype.setElevation=xi.prototype.Fi;xi.prototype.Sm=function(){return this.f};xi.prototype.getElevation=xi.prototype.Sm;xi.prototype.ba=function(){return this.eb};xi.prototype.getGeometry=xi.prototype.ba;
  xi.prototype.da=function(a){if(a===y||C(a,O))var b=!1;else C(a,ui,this.da,0),b=!0;this.zd=b;b=this.eb;this.eb=a;b!==y&&this.wa(Mg.SPATIAL);return this};xi.prototype.setGeometry=xi.prototype.da;xi.prototype.G=function(){return this.ba().G()};xi.prototype.getBoundingBox=xi.prototype.G;
  xi.prototype.$d=function(a){var b,c=this.ba(),d,e;if(this.zd){c=c.pa;var f=0;for(e=c.length;f<e;f++)if(d=zi(this,c[f],a,c[f].Cd))b||(b=[]),b.push(d);}else d=this.Xa,d===B&&(d=this.zd?oi.NORTH:this.ba().Cd),(d=zi(this,c,a,d))&&(b=[d]);return b};xi.prototype.getGeometriesForTile=xi.prototype.$d;
  function zi(a,b,c,d){var e,f,g=0,h=!0;if(e=Ai(a,b.cb,c,d,b.G())){var k=new rh(e);var l=b.Pa;if(f=l.length)for(k.b=k.a.length;g<f;g++)if(e=Ai(a,l[g],c,d,b.Pj(g)))k.a=k.a.concat(e);f=k.a.length;for(g=0;g<f;g++)if(k.a[g]!==vi){h=!1;break}h&&(k=g%2?dh:B);}return k}
  function Ai(a,b,c,d,e){var f=c.af(),g=e,h=g.Fb();var k=[[]];var l=b.Y;var m=[],p=l.length,q,r=!1;for(q=0;q<p;q+=3){var v=l[q];var w=l[q+1];r||180!=Ad(w)||(m.push(v),m.push(w),m.push(v),m.push(-w),r=!0);m.push(v);m.push(w);}l=m;360>h&&-180==g.ca&&(g=new K(g.la,180,g.na,g.ia));360>h&&180==g.ia&&(g=new K(g.la,g.ca,g.na,-180));if(g.Gb()){h=l;v=h.length;l=-1;for(m=0;m<v-2;m+=2)if(Uf(h[m+1],h[m+3])){l=m+2;break}-1===l&&Uf(h[v-1],h[1])&&(l=v);-1!==l&&(p=h[l-2],m=h[l-1],q=h[l%v],r=h[(l+1)%v],180!==Ad(p)&&
  180!==Ad(q)&&(w=Ad(q-p),v=Ad(r-m),v+=180<v?-360:0,r=Ad(180-r),r+=180<r?-360:0,v&&r&&(w/=Ad(v)/Ad(r),p=q+(q>p?-w:w),m=0<m?180:-180,h.splice(l,0,p,m,p,-m))));l=h;}k[0]=Bi([].concat(l),g.ca);360>g.Fb()&&g.pd(new Wf(g.la,180))&&(l=Bi([].concat(l),g.ia),k.push(l));g=c.dg();a=fh(a,k,!0,g);if(360===e.Fb()&&1===b.wh(!0)%2){b=a;a=c.af();b[0][1].x>b[0][b[0].length-1].x&&(b[0]=b[0].reverse());l=[];h=b[0].length-1;for(k=0;k<h;k++)m=b[0][k],l[k]=new I(m.x-2*g.w,m.y),l[k+h]=new I(m.x-g.w,m.y),l[k+2*h]=new I(m.x,
  m.y),l[k+3*h]=new I(m.x+g.w,m.y),l[k+4*h]=new I(m.x+2*g.w,m.y);b[0]=l;k=g.Sh(d,0);k.y=2*a[d===oi.NORTH?"top":"bottom"];d=k.clone();k.x=b[0][b[0].length-1].x+1;d.x=b[0][0].x-1;b[0].push(k,d);a=b;}d=f.left;b=f.top;k=f.right;f=f.bottom;if(qh(a,d,b,k,f,!0).length){if(!c.bg().hh(e)){c=a;e=[new I(d,b),new I(k,b),new I(k,f),new I(d,f)];f=[];for(a=c.length;a--;)if(d=di(e,c[a]))for(b=Ci(d),f.push(b);d.li;)d=d.li,b=Ci(d),f.push(b);a=f;}}else c=Di(d,b,a[0]),a[1]&&(c^=Di(d,b,a[1])),a=c?[vi]:B;return a}
  function Di(a,b,c){var d,e,f;var g=d=c[0].x;var h=e=c[0].y;var k=1;for(f=c.length;k<f;k++){var l=c[k].x;var m=c[k].y;l>d?d=l:l<g&&(g=l);m>e?e=m:m<h&&(h=m);}return g<=a&&a<=d&&h<=b&&b<=e&&ce({x:a,y:b},de(c.concat(c[0])))}function Ci(a){var b=[],c=a;do{var d=xd(100*(c.Mo?c.Mo:c.x))/100;var e=xd(100*(c.No?c.No:c.y))/100;if(!f||.01<Cd(Dd(f.x-d,2)+Dd(f.y-e,2))){var f=new I(d,e);b.push(f);}c=c.next;}while(c&&c!==a);return b}xi.prototype.U=y;
  function Bi(a,b){var c,d=Number.POSITIVE_INFINITY,e=-1,f=a.length;for(c=0;c<f;c+=2){var g=Ad(a[c+1]-b);g+=180<g?360-g:g;g<d&&(d=g,e=c);}return 0<c?(b=a.splice(e,a.length-e),b.concat(a)):a}
  xi.prototype.X=function(){var a=xi.l.X.call(this),b=this.ba(),c=this.zd?b.pa:[b],d,e=a.properties;var f=a.geometry=b.X();e.style=this.ua().X();e.height=this.i+this.f;e.min_height=this.f;if(this.G().Gb()&&(f.type="MultiPolygon",this.zd)){var g=[];c.forEach(function(h,k){d=f.coordinates[k];h.G().Gb()?g=g.concat(d):g.push(d);});f.coordinates=g;}return a};xi.prototype.forWorkerMessage=xi.prototype.X;function Ei(a,b,c){Ei.l.constructor.call(this,jh,c);this.Hg(a);this.Pi(b);c&&"precision"in c&&this.Ni(c.precision);}u(Ei,xi);t("H.map.Circle",Ei);Ei.prototype.Hg=function(a){(a=Zf(a)).oa(this.b)||(this.b=a,Fi(this));};Ei.prototype.setCenter=Ei.prototype.Hg;Ei.prototype.fb=function(){return this.b};Ei.prototype.getCenter=Ei.prototype.fb;Ei.prototype.Pi=function(a){if(E(a=Yd(a,0,6371000.79*Md/2)))throw new D(this.Pi,0,a);this.fa!==a&&(this.fa=a,Fi(this));};Ei.prototype.setRadius=Ei.prototype.Pi;
  Ei.prototype.Cn=function(){return this.fa};Ei.prototype.getRadius=Ei.prototype.Cn;Ei.prototype.O=60;Ei.prototype.Ni=function(a){if(!Cc(a))throw new D(this.Ni,0,a);this.O!==(a=Yd(xd(a),4,360))&&(this.O=a,Fi(this));};Ei.prototype.setPrecision=Ei.prototype.Ni;Ei.prototype.zn=function(){return this.O};Ei.prototype.getPrecision=Ei.prototype.zn;Ei.prototype.da=function(){return this};Ei.prototype.setGeometry=Ei.prototype.da;Ei.prototype.ba=function(){this.eb||Ei.l.da.call(this,Gi(this));return this.eb};
  Ei.prototype.getGeometry=Ei.prototype.ba;function Fi(a){a.eb!==y&&Ei.l.da.call(a,Gi(a));}function Gi(a){var b=a.b,c=b.lat,d=a.fa,e=0,f=new L;if(90===Ad(c))for(c=b.Ng(0,d,!0).lat;360>e;e+=120)f.zi(c,e-180,B);else for(a=a.O,a=360/a;360>e;e+=a)f.Fd(b.Ng(e,d,!0));b=new O(f);0>c&&b.Al(oi.SOUTH);return b}function Hi(a,b){if(!C(a,Element)){Ii.innerHTML=a;a=Ii.firstElementChild;if(!a)throw new D(Hi,0,"No element data");Ii.removeChild(a);var c=!0;Ii.innerHTML="";}this.a=0!==hf(a).length;this.c=c?a:jf(a,x.document,this.a);b&&(c="onAttach",c in b&&wc(a=b[c],"Function",Hi,1,c)&&(this.mi=a),c="onDetach",c in b&&wc(a=b[c],"Function",Hi,1,c)&&(this.b=a));}t("H.map.DomIcon",Hi);var Ii=document.createElement("DIV");Hi.prototype.mi=null;Hi.prototype.b=null;Hi.prototype.Qj=function(a){return jf(this.c,a,this.a)};
  Hi.prototype.a=!1;function Ji(a){Ji.l.constructor.call(this,a);}u(Ji,kh);t("H.geo.MultiPoint",Ji);Ji.prototype.a=function(a){return Yf(a)};Ji.prototype.b=function(a){return C(a,Wf)?a:Zf(a)};Ji.prototype.rb="Multi"+Wf.prototype.rb;Ji.prototype.Mb="Multi"+Wf.prototype.Mb;function Ki(a,b){this.w=+a;this.h=+b;}t("H.math.Size",Ki);function Li(a,b){var c;var d=a;var e=b||[];if(a!==Mi.NONE){b=c=e.length;if(-1===this.b.indexOf(d))throw new D(Li,0,a);if(!e)throw new D(Li,1,e);for(;c--;)if(E(e[c]))throw new D(Li,1,e);d===Mi.RECT&&3<b&&(e=[e[0],e[1],e[2],e[1],e[2],e[3],e[0],e[3]],d=Mi.POLYGON);if(d===Mi.CIRCLE&&2<b&&(a=e[2],0<a)){d=e[0];var f=e[1];c=vd(2*zd(a),40);var g=360/c;for(e=[];c--;){var h=g*c*Rd;e.push(d+Fd(h)*a,f+Hd(h)*a);}d=Mi.POLYGON;}if(d!==Mi.POLYGON||!b||e.length%2)throw new D(Li,1,e);this.a=e;}}
  t("H.map.HitArea",Li);var Mi={NONE:0,RECT:1,CIRCLE:2,POLYGON:3};Li.ShapeType=Mi;Li.prototype.b=[Mi.RECT,Mi.CIRCLE,Mi.POLYGON];Li.prototype.hg=function(a,b,c){return this.a?be(a,b,this.a,c,!0):ae.NONE};Li.prototype.hitTest=Li.prototype.hg;function Ni(a,b){var c;uc(this,Ni);Ni.l.constructor.call(this,b);this.da(a);b&&"icon"in b&&(c=b.icon);this.Pc(c||Oi(this));}u(Ni,M);t("H.map.AbstractMarker",Ni);Ni.prototype.ba=function(){return this.b};Ni.prototype.getGeometry=Ni.prototype.ba;Ni.prototype.da=function(a){var b=this.b;C(a,Wf)||C(a,Ji)?this.b=a:(Yf(a,this.da,0),this.b=Zf(a));b&&this.wa(Mg.SPATIAL);return this};Ni.prototype.setGeometry=Ni.prototype.da;Ni.prototype.G=function(){return this.b.G()};Ni.prototype.Cb=function(){return this.icon};
  Ni.prototype.getIcon=Ni.prototype.Cb;Ni.prototype.Pc=function(a){var b=this.icon,c=!b;if(b!==a){if(!this.sk(a)){if(c)throw new D(this.constructor,1,a);throw new D(this.Pc,0,a);}this.icon=a;c||this.wa(Mg.VISUAL);}return this};Ni.prototype.setIcon=Ni.prototype.Pc;function Oi(a){var b=a.g;b||(b=a.constructor.prototype.g=a.f(Pi));return b}
  var Pi={svg:'<svg xmlns="http://www.w3.org/2000/svg" width="38" height="47" viewBox="0 0 38 47"><g fill="none"><path fill="#0F1621" fill-opacity=".4" d="M15 46c0 .317 1.79.574 4 .574s4-.257 4-.574c0-.317-1.79-.574-4-.574s-4 .257-4 .574z"></path><path fill="#01b6b2" d="M33.25 31.652A19.015 19.015 0 0 0 38 19.06C38 8.549 29.478 0 19 0S0 8.55 0 19.059c0 4.823 1.795 9.233 4.75 12.593L18.975 46 33.25 31.652z"></path><path fill="#6A6D74" fill-opacity=".5" d="M26.862 37.5l4.714-4.77c3.822-3.576 5.924-8.411 5.924-13.62C37.5 8.847 29.2.5 19 .5S.5 8.848.5 19.11c0 5.209 2.102 10.044 5.919 13.614l4.719 4.776h15.724zM19 0c10.493 0 19 8.525 19 19.041 0 5.507-2.348 10.454-6.079 13.932L19 46 6.079 32.973C2.348 29.495 0 24.548 0 19.04 0 8.525 8.507 0 19 0z"></path></g></svg>',size:new Ki(38,
  47),anchor:new I(19,45),hitArea:new Li(Mi.POLYGON,[19,46,2,27,0,18,5,6,19,0,32,5,38,15,36,27,19,47])};Ni.prototype.X=function(){var a=Ni.l.X.call(this),b=this.Cb(),c=b.Db(),d=b.ud();a.geometry=this.ba().X();c&&(b=a.properties.icon={id:b.uid},b.size={w:c.w,h:c.h},b.offset=[c.w/2-(d?d.x:0),c.h/2-(d?d.y:0)]);return a};Ni.prototype.forWorkerMessage=Ni.prototype.X;function Qi(a,b){Qi.l.constructor.call(this,a,b);}u(Qi,Ni);t("H.map.DomMarker",Qi);Qi.prototype.type=Pg.DOM_MARKER;Qi.prototype.Og=2;Qi.prototype.f=function(a){var b=new Hi(a.svg,a);a=a.anchor;b.c.style.margin=-a.y+"px 0 0 -"+a.x+"px";return b};Qi.prototype.sk=function(a){return C(a,Hi)};function Ri(a,b,c,d){Ri.l.constructor.call(this,a,b,c);this.modifiers=d;}u(Ri,Ng);t("H.map.ChangeEvent",Ri);var Si={SIZE:1,POSITION:2,HEADING:4,TILT:8,INCLINE:16,ZOOM:32,BOUNDS:64};Ri.Type=Si;Ri.prototype.Zl=Si.SIZE;Ri.prototype.SIZE=Ri.prototype.Zl;Ri.prototype.oj=Si.POSITION;Ri.prototype.POSITION=Ri.prototype.oj;Ri.prototype.ij=Si.HEADING;Ri.prototype.HEADING=Ri.prototype.ij;Ri.prototype.qj=Si.TILT;Ri.prototype.TILT=Ri.prototype.qj;Ri.prototype.jj=Si.INCLINE;Ri.prototype.INCLINE=Ri.prototype.jj;
  Ri.prototype.rj=Si.ZOOM;Ri.prototype.ZOOM=Ri.prototype.rj;Ri.prototype.fj=Si.BOUNDS;Ri.prototype.BOUNDS=Ri.prototype.fj;function Ti(){this.a=[];Ti.l.constructor.call(this);}u(Ti,F);t("H.util.OList",Ti);function Ui(a,b,c){a=a.a.length;if(c)var d=a;else if(E(d=0>(d=+b)?wd(0,a+d):vd(a,d)))throw new je(Ti,b,[0,a-1]);return d}Ti.prototype.add=function(a,b){b=Ui(this,b,E(b));this.a.splice(b,0,a);this.dispatchEvent(new Vi(this,this.b.Be,b,a,null,null));};Ti.prototype.add=Ti.prototype.add;function Wi(a,b){var c=a.a.splice(b,1)[0];a.dispatchEvent(new Vi(a,a.b.De,b,null,c,null));return c}
  Ti.prototype.pc=function(a){this.get(a);return Wi(this,a)};Ti.prototype.removeAt=Ti.prototype.pc;Ti.prototype.remove=function(a){a=this.indexOf(a);return 0<=a?(Wi(this,a),!0):!1};Ti.prototype.remove=Ti.prototype.remove;Ti.prototype.set=function(a,b){if(0!==this.a.length||0!==a){this.get(a);a=Ui(this,a,!1);var c=this.a[a];}this.a[a]=b;this.dispatchEvent(new Vi(this,this.b.Ee,a,b,c,null));return c};Ti.prototype.set=Ti.prototype.set;Ti.prototype.indexOf=function(a){return this.a.indexOf(a)};
  Ti.prototype.indexOf=Ti.prototype.indexOf;Ti.prototype.get=function(a){var b=Ui(this,a,!1),c=this.a;if(b>=c.length)throw new je(this.get,a,[0,c.length-1]);return c[b]};Ti.prototype.get=Ti.prototype.get;Ti.prototype.ln=function(){return this.a.length};Ti.prototype.getLength=Ti.prototype.ln;Ti.prototype.Na=function(){return [].concat(this.a)};Ti.prototype.asArray=Ti.prototype.Na;Ti.prototype.flush=function(){for(var a=this.a.length;a--;)Wi(this,a);};Ti.prototype.flush=Ti.prototype.flush;
  Ti.prototype.u=function(){this.flush();Ti.l.u.call(this);};Ti.prototype.b={Be:"add",De:"remove",Ee:"set",wp:"move"};function Vi(a,b,c,d,e,f){Vi.l.constructor.call(this,b,a);this.idx=c;this.added=d;this.removed=e;this.moved=f;}u(Vi,rd);var Xi={};t("H.geo.mercator",Xi);Xi.a=function(a){return vd(1,wd(0,.5-Bd(Id(Od+Nd*a/180))/Md/2))};Xi.b=function(a){return a/360+.5};Xi.mg=function(a,b,c){c?(c.x=Xi.b(b),c.y=Xi.a(a)):c=new I(Xi.b(b),Xi.a(a));return c};Xi.latLngToPoint=Xi.mg;Xi.$c=function(a,b){return Xi.mg(a.lat,a.lng,b)};Xi.geoToPoint=Xi.$c;Xi.f=function(a){return 0>=a?90:1<=a?-90:Sd*(2*Jd(Ed(Md*(1-2*a)))-Nd)};Xi.c=function(a){return 360*(1===a?1:Wd(a,1))-180};
  Xi.Sa=function(a,b,c){c?(c.lat=Xi.f(b),c.lng=Xi.c(a)):c=new Wf(Xi.f(b),Xi.c(a));return c};Xi.xyToGeo=Xi.Sa;Xi.vg=function(a,b){return Xi.Sa(a.x,a.y,b)};Xi.pointToGeo=Xi.vg;t("H.util.constants.DEFAULT_MIN_ZOOM_LEVEL",0);t("H.util.constants.DEFAULT_MAX_ZOOM_LEVEL",22);function Yi(a,b){this.projection=a||Xi;this.b=0;this.a=this.exp=Bd(b||256)/Ld;Zi(this);this.y=this.x=0;}t("H.geo.PixelProjection",Yi);var $i=Ad(24)+Ad(-8);Yi.prototype.cl=Xi;Yi.prototype.projection=Yi.prototype.cl;Yi.prototype.x=0;Yi.prototype.x=Yi.prototype.x;Yi.prototype.y=0;Yi.prototype.y=Yi.prototype.y;Yi.prototype.pp=Dd(2,$i);Yi.prototype.w=Yi.prototype.pp;Yi.prototype.Xn=Dd(2,$i);Yi.prototype.h=Yi.prototype.Xn;
  Yi.prototype.Qa=function(a){if(E(a))throw new D(this.Qa,0,a);var b=this.x/this.w;var c=this.y/this.h;this.b=a;this.a=this.exp+a;Zi(this);this.x=b*this.w;this.y=c*this.h;};Yi.prototype.rescale=Yi.prototype.Qa;function Zi(a){a.a>$i&&(a.a=$i);a.w=Dd(2,a.a);a.h=Dd(2,a.a);}Yi.prototype.gk=function(){return this.b||0};Yi.prototype.getZoomScale=Yi.prototype.gk;Yi.prototype.lb=function(a,b){a=this.projection.mg(a.lat,a.lng,b);a.x=a.x*this.w-this.x;a.y=a.y*this.h-this.y;return a};Yi.prototype.geoToPixel=Yi.prototype.lb;
  Yi.prototype.lf=function(a,b){return this.projection.Sa((a.x+this.x)/this.w,(a.y+this.y)/this.h,b)};Yi.prototype.pixelToGeo=Yi.prototype.lf;Yi.prototype.Sa=function(a,b,c){return this.projection.Sa((a+this.x)/this.w,(b+this.y)/this.h,c)};Yi.prototype.xyToGeo=Yi.prototype.Sa;Yi.prototype.Sh=function(a,b,c){a=this.projection.mg(a,b,c);a.x=a.x*this.w-this.x;a.y=a.y*this.h-this.y;return a};Yi.prototype.latLngToPixel=Yi.prototype.Sh;
  Yi.prototype.qe=function(a){return new I(a.x*this.w-this.x,a.y*this.h-this.y)};Yi.prototype.pointToPixel=Yi.prototype.qe;function aj(a){a=a||{};aj.l.constructor.call(this);this.min=0;this.max=22;this.nm=this.dark=!!a.dark;a.min&&this.Ki(a.min);a.max&&this.Ii(a.max);this.pixelProjection=new Yi(a.projection,a.minWorldSize);a.provider&&(this.a=a.provider,this.g=A(this.g,this),this.a.addEventListener(P.prototype.i.Ea,this.g,!1,this),this.i=A(this.i,this),this.a.addEventListener(P.prototype.i.Ce,this.i,!1,this));}u(aj,F);t("H.map.layer.Layer",aj);aj.prototype.min=0;aj.prototype.min=aj.prototype.min;
  aj.prototype.max=22;aj.prototype.max=aj.prototype.max;aj.prototype.ra=y;aj.prototype.pixelProjection=aj.prototype.ra;aj.prototype.b={Ea:"update",Ce:"configchange",nj:"minchange",mj:"maxchange"};aj.prototype.ga=function(){return this.a};aj.prototype.getProvider=aj.prototype.ga;aj.prototype.jo=function(a){return this.min<=a&&a<=this.max};aj.prototype.isValid=aj.prototype.jo;
  function bj(a,b,c){var d=a[b],e="min"===b,f=e?a.Ki:a.Ii;if(c!==d)if(e?c<=a.max:c>=a.min)a[b]=c,a.g(),a.i(),a.dispatchEvent(new Ng(e?a.b.nj:a.b.mj,c,d));else throw new D(f,0,"Invalid condition min <= max");return a}aj.prototype.Ki=function(a){return bj(this,"min",+a)};aj.prototype.setMin=aj.prototype.Ki;aj.prototype.Ii=function(a){return bj(this,"max",+a)};aj.prototype.setMax=aj.prototype.Ii;aj.prototype.g=function(){this.dispatchEvent(this.b.Ea);};aj.prototype.i=function(){this.dispatchEvent(this.b.Ce);};
  aj.prototype.u=function(){aj.l.u.call(this);};aj.prototype.ta=function(){return null};aj.prototype.getCopyrights=aj.prototype.ta;function cj(a){var b;cj.l.constructor.call(this);this.dispatchEvent=A(this.dispatchEvent,this);if(a){var c=a.length;for(b=0;b<c;b++)this.add(a[b]);}}u(cj,Ti);t("H.map.DataModel",cj);function dj(a,b){var c=b.getProvider&&b.getProvider();c&&(ej[c.uid]=c);b.ka(a);}function fj(a){var b=a.getProvider&&a.getProvider();b&&delete ej[b.uid];a.ka(null);}cj.prototype.add=function(a,b){C(a,aj,this.add,0);dj(this,a);cj.l.add.call(this,a,b);};cj.prototype.add=cj.prototype.add;
  cj.prototype.set=function(a,b){C(b,aj,this.set,0);dj(this,b);(a=cj.l.set.call(this,a,b))&&fj(a);return a};cj.prototype.set=cj.prototype.set;cj.prototype.pc=function(a){var b;(b=cj.l.pc.call(this,a))&&fj(b);return b};cj.prototype.removeAt=cj.prototype.pc;cj.prototype.remove=function(a){var b;(b=cj.l.remove.call(this,a))&&fj(a);return b};cj.prototype.remove=cj.prototype.remove;cj.prototype.flush=function(){for(var a=this.a.length;a--;)this.pc(a);cj.l.flush.call(this);};cj.prototype.flush=cj.prototype.flush;
  var ej={};Fc(ej);function gj(a,b,c){if(a=ej[a])return C(a[b],Function,gj,1,"invalid method"),a[b].apply(a,c)}cj.invoke=gj;function hj(a,b){Ca(a)&&(this.i=a);Cc(b)&&(this.a=b);}t("H.util.Request",hj);hj.State={PENDING:0,PROCESSING:1,COMPLETE:2,CANCELLED:3,ERROR:4};var ij=[0,1,2,3,4];hj.prototype.A=0;hj.prototype.getState=function(){return this.A};hj.prototype.getState=hj.prototype.getState;hj.prototype.P=function(a){if(0>ij.indexOf(a))throw new D(this.P,0,a);if(this.A!==a||1===a&&1<this.a)this.A=a,this.i&&this.i(this);};hj.prototype.a=1;hj.prototype.Pn=function(){return this.a};hj.prototype.getTotal=hj.prototype.Pn;
  hj.prototype.b=0;hj.prototype.An=function(){return this.b};hj.prototype.getProcessed=hj.prototype.An;hj.prototype.g=0;hj.prototype.Wm=function(){return this.g};hj.prototype.getFailed=hj.prototype.Wm;function jj(a,b){a.b<a.a&&(tc(b)||(b=2),0===b||1===b||0!==a.A&&1!==a.A||(a.b++,2!==b&&a.g++,a.P(a.b<a.a?1:2)));}hj.prototype.Ie=function(){};hj.prototype.cancel=function(){3!==this.A&&(this.Ie(),this.P(3));};hj.prototype.cancel=hj.prototype.cancel;function kj(){}t("H.util.ICapturable",kj);kj.prototype.capture=function(){};kj.prototype.capture=kj.prototype.capture;t("H.util.Disposable",nd);nd.prototype.zb=nd.prototype.zb;nd.prototype.addOnDisposeCallback=nd.prototype.zb;t("H.util.dispose",qd);nd.prototype.B=nd.prototype.B;nd.prototype.dispose=nd.prototype.B;nd.prototype.u=nd.prototype.u;function lj(a,b){var c=a.L(),d=c.ownerDocument;lj.l.constructor.call(this);this.a=a;this.S=c=c.appendChild(mj(d,"DIV","position:absolute;bottom:0;right:0;left:0px;z-index:1;direction:ltr;pointer-events:none;height:40px-webkit-touch-callout: none;-webkit-user-select:none;-khtml-user-select: none;-moz-user-select: none;-ms-user-select: none;user-select:none;",null,"H_imprint"));this.If=mj(d,"DIV","margin: 0 0 "+nj+"px "+nj+"px;display:inline-block;",oj,"H_logo");c.appendChild(this.If);c=c.appendChild(mj(d,
  "DIV","right:0;bottom:0;position:absolute;background-color:rgba(255,255,255,.8);color:#0F1621;padding:2px 16px",null,"H_copyright"));this.g=c.appendChild(mj(d,"A","color:inherit; margin:0px 8px; text-decoration:none; pointer-events:all;","Terms of use"));this.g.target="_blank";this.f=c.appendChild(mj(d,"SPAN","margin:0px 8px"));this.j=Ua(pj);this.Li(b);this.c=A(this.c,this);this.b=A(this.b,this);this.a.addEventListener(this.a.o.lj,this.c);this.a.a.addEventListener("add",this.b);this.a.a.addEventListener("remove",
  this.b);this.a.a.addEventListener("set",this.b);this.b();}var qj;u(lj,nd);t("H.map.Imprint",lj);var nj=16,pj={font:'11px "Lucida Grande", Arial, Helvetica, sans-serif',href:"https://legal.here.com/{LN}/terms/serviceterms/{CN}",invert:!1,reportHref:"https://wego.here.com/",locale:"en-US"};
  lj.prototype.Li=function(a){var b,c=this.If.firstChild.firstChild.childNodes;a||(this.j=Ua(pj));var d=this.j;for(b in d)a&&b in a&&(d[b]=a[b]);a=(this.Oh=a=d.invert)?rj:sj;c[0].style.fill=a.Fl;c[0].style.fillOpacity=a.Gl;c[1].style.fill=a.Kl;c[1].style.fillOpacity=a.Ll;a=d.locale;tj[a]||(a="en-US",d.locale=a);this.g.innerHTML=tj[a];a=a.split("-");this.g.href=d.href.replace("{LN}",a[0]).replace("{CN}",a[1].toLowerCase());this.S.style.font=d.font;};lj.prototype.setOptions=lj.prototype.Li;
  function mj(a,b,c,d,e){a=a.createElement(b);c&&(a.style.cssText=c);d&&(a.innerHTML=d);e&&(a.className=e);return a}lj.prototype.L=function(){return this.S};lj.prototype.c=function(){this.f.innerHTML=this.i+" "+this.ta();};lj.prototype.b=function(){this.c();setTimeout(this.c,5E3);};
  var oj='<svg height="40" viewBox="0 0 47 40" width="47" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="m45.2054149 8.82876345.6003191.40637037-.2240425.6914074-.4490426 1.38570368c-.1024468.3148889-.6998936 1.9596297-2.43 3.5918519l-.017234.0163704c-.188617.1887407-.3801064.3659259-.5467021.5084444l-.4605319.4285185-.486383.4516296-.1407447-.0702963c-.7257447.4583704-1.4926596.7886667-2.2796809.9831852l.5840426.5864445-.6769149.6817778-2.052766 2.0636296-.169468.1704444-.019149.0192593-2.3821276 2.3958518c-.4902128.8493334-1.1202128 1.6331852-1.8497873 2.3111112-.6031915.6047407-1.2504255 1.1054814-1.935 1.4954814l-.4777659.4805186-4.3247873 4.3506666-.0296808.0298519-.0315958.0269629-2.1532978 1.8171111-.2661702.2253334h-.3485107-3.8948936l-3.968617 3.9914815-1.3547873 1.3616296-.6769148.6808148-.6769149-.6808148-1.3538298-1.3616296-4.80925535-4.837926-3.2687234-3.2875555-1.63436171-1.6437778h2.3112766 4.62255319 2.67223407l-4.71063832-4.7368148-.6769149-.6808148.6769149-.6808148 4.93851062-4.9650371.6769149-.6798518.6769149.6808148 2.7296809 2.7454074c.9363829-.8820741 2.1485106-1.4685185 3.4037234-1.6562963.278617-1.4694815 1.0187234-2.834963 2.168617-3.9885926.5696808-.572 1.1843617-1.0438519 1.8335106-1.4107407l.2901064-.2917778 4.3094681-4.31985187c.5830851-1.0582963 1.4256383-1.78918519 2.0364893-2.12718519l.4471277-.24748148c.3829787-.7617037.9047872-1.47622222 1.5539362-2.12622222 1.510851-1.51666667 3.3165957-2.31881482 5.22-2.31881482.0871276 0 .1752127.00192593.2594681.00577778 1.9484042.06933334 3.8441489.97933334 5.4775532 2.62792593.1512765.15022222.3303191.34859259.5361702.5797037l.0526595.05874074c.1120213.12518519.2345745.26192593.370532.40733334l1.2657446 1.36066666.6328724.67985185-.6548936.65866667-.2508511.25325926zm-27.9288192 22.17414815h-9.57446804l4.78723404 4.8148148zm23.1864894-21.70422223c-.9220213 1.38666663-2.5180851 3.63037033-4.1984042 1.94133333l4.2510638-4.27651851c-.3810638-.41022222-.6711702-.754-.8923404-.97740741-2.2921277-2.31207407-4.8743617-2.34192593-6.8984043-.312-1.3528723 1.35681481-1.7071277 2.91007407-1.313617 4.38533332l-1.332766-1.52629628c-.385851.21474074-2.0182979 1.65918518-.7937234 3.84703708l-1.5252127-1.274963-2.0240426 2.0299259 2.7344681 2.7502222c-2.1121277-1.6861481-4.3889362-1.5205185-6.2157447.312-1.9560638 1.9615556-1.8181915 4.3381482-.3532979 6.293926l-.295851-.2946667c-1.9321277-1.9432593-4.0318085-1.2576296-5.0706383-.2128148-.8023405.8079259-1.2944681 1.9191852-1.0924468 2.6905185l-4.195532-4.2187407-2.22893613 2.2408148 8.25893613 8.3065185h4.4339362l-2.9767021-2.9938519c-.5893908-.6029568-.9604155-1.0987731-1.1531529-1.5232627-.3182349-.7008886-.1504161-1.2073234.3230465-1.680515.7334043-.7318519 1.583617-.2763704 3.0829787 1.2277777l2.9412766 2.9562963 2.2164894-2.2292592-2.7909575-2.8060741c2.0125532 1.5291852 4.4224468 1.612 6.5728724-.545037 1.3567021-1.2653334 1.7425532-2.4565185 1.7425532-2.4565185l-1.6755319-1.1314815c-.9229788 1.3866666-2.5152128 3.6361481-4.195532 1.9461481l4.2606383-4.2851852 2.655 2.6712593 2.3160639-2.3294074-3.3223405-3.3424445c-1.5520212-1.5609629-.6328723-3.0275555.0124469-3.5793333.3025531.6442222.7448936 1.2624445 1.3078723 1.8296296 2.1485106 2.1676297 4.9260638 2.6038519 7.3685106.1550371 1.3567022-1.2643704 1.7425532-2.4565185 1.7425532-2.4565185zm-3.6564894-1.35537321-2.0211702 2.03377777c-.9890425-1.18251851-.9392553-1.81422222-.3245744-2.43051851.7439361-.7462963 1.4993617-.43044445 2.3457446.39674074zm-12.4879787 12.56088884c-.9890425-1.1825185-.9411702-1.819037-.3284042-2.4353333.7448936-.7462963 1.5003191-.4304444 2.3467021.3967408z" fill="#0f1621" fill-opacity=".7"/><path d="m17.2765957 31.0029116-4.787234 4.8148148-4.78723404-4.8148148zm23.1864894-21.70422223 1.6755319 1.13148153s-.385851 1.1921481-1.7425532 2.4565185c-2.4424468 2.4488148-5.22 2.0125926-7.3685106-.1550371-.5629787-.5671851-1.0053192-1.1854074-1.3078723-1.8296296-.6453192.5517778-1.5644681 2.0183704-.0124469 3.5793333l3.3223405 3.3424445-2.3160639 2.3294074-2.655-2.6712593-4.2606383 4.2851852c1.6803192 1.69 3.2725532-.5594815 4.195532-1.9461481l1.6755319 1.1314815s-.3858511 1.1911851-1.7425532 2.4565185c-2.1504256 2.157037-4.5603192 2.0742222-6.5728724.545037l2.7909575 2.8060741-2.2164894 2.2292592-2.9412766-2.9562963c-1.4993617-1.5041481-2.3495744-1.9596296-3.0829787-1.2277777-.4734626.4731916-.6412814.9796264-.3230465 1.680515.1927374.4244896.5637621.9203059 1.1531529 1.5232627l2.9767021 2.9938519h-4.4339362l-8.25893613-8.3065185 2.22893613-2.2408148 4.195532 4.2187407c-.2020213-.7713333.2901063-1.8825926 1.0924468-2.6905185 1.0388298-1.0448148 3.1385106-1.7304445 5.0706383.2128148l.295851.2946667c-1.4648936-1.9557778-1.6027659-4.3323704.3532979-6.293926 1.8268085-1.8325185 4.103617-1.9981481 6.2157447-.312l-2.7344681-2.7502222 2.0240426-2.0299259 1.5252127 1.274963c-1.2245745-2.1878519.4078724-3.63229634.7937234-3.84703708l1.332766 1.52629628c-.3935107-1.47525925-.0392553-3.02851851 1.313617-4.38533332 2.0240426-2.02992593 4.6062766-2.00007407 6.8984043.312.2211702.22340741.5112766.56718519.8923404.97740741l-4.2510638 4.27651851c1.6803191 1.689037 3.2763829-.5546667 4.1984042-1.94133333zm-16.1444681 11.20551563 2.0182979-2.0385925c-.846383-.8271852-1.6018085-1.1430371-2.3467021-.3967408-.612766.6162963-.6606383 1.2528148.3284042 2.4353333zm12.4879787-12.56088884c-.8463829-.82718519-1.6018085-1.14303704-2.3457446-.39674074-.6146809.61629629-.6644681 1.248.3245744 2.43051851z" fill="#fff" fill-opacity=".3"/></g></svg>',sj=
  {Kl:"#0F1621",Ll:.3,Fl:"#fff",Gl:.6},rj={Kl:"#fff",Ll:1,Fl:"#0F1621",Gl:.7},uj="1987&ndash;"+wd(2015,(new Date).getFullYear())+" HERE";lj.prototype.ta=function(){var a=this.a,b=a.vb(),c=a.b.mb().bounds;a=a.a;var d=a.a.length,e={},f=0,g,h,k,l=[uj];if(c)for(;f<d;f++)if(h=a.get(f).getCopyrights(c.G(),b))for(g=0;g<h.length;g++)e[k=h[g].label]||(l.push(k),e[k]=1);return l.join(", ")};lj.prototype.getCopyrights=lj.prototype.ta;lj.prototype.ua=function(){return this.S.style};lj.prototype.i=String.fromCharCode(169);
  lj.prototype.u=function(){this.a.removeEventListener(this.a.o.lj,this.c);this.a.a.removeEventListener("add",this.b);this.a.a.removeEventListener("remove",this.b);this.a.a.removeEventListener("set",this.b);if(this.S.parentNode){var a=this.S;a.parentNode.removeChild(a);}};
  lj.prototype.capture=function(a,b,c,d){var e=a.getContext("2d"),f=window.getComputedStyle(this.f.parentElement),g=2*Ac(f.paddingLeft,10),h=(this.f.offsetWidth+2*g)*b,k=this.f.offsetHeight*b,l=Bc(f.getPropertyValue("font-size")),m=this.S.ownerDocument,p=+a.width,q=+a.height,r=nj*b,v=this.If.childNodes[0].getBoundingClientRect(),w=v.width*b,z=v.height*b,J=hd;Ca(d)&&(J=function(){d("capture_error");});e.fillStyle=f.backgroundColor;e.fillRect(p-h,q-k,h,k);h=this.i+" "+function(G){G=mj(m,"div",null,G);
  return G.textContent||G.innerText||""}(this.ta());e.font=l*b+"px "+f.getPropertyValue("font-family");e.fillStyle=f.getPropertyValue("color");e.textBaseline="bottom";e.textAlign="right";e.fillText(h,p-g*b,q);vj(this,e.font,function(G){(new rf("image",G)).then(function(U){e.drawImage(U,r,q-(z+r),w,z);c(a);},J);},J);};lj.prototype.capture=lj.prototype.capture;
  function vj(a,b,c,d){wj(A(function(e){e?this.Oh?c("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAeCAYAAABe3VzdAAADNklEQVRYR82XW6hVVRSGv7+rmJfSMKSnSkMEfY7EogcJC7tilGRopBAiSaI+SBARQSCIIqgFISih2YW0oAgLCsKXojA0RB+81VugZEFZv/yHuWTt7d7Hfc4+6+h4OWefNfcc3xlj/v+YS1zjoab5bE8DZgGngB8keSg5GwO0PQ54F3i2BnQIWCLpx14hGwG0fT3wOfBwB5DzwOOSDvQC2RTgM8Ae4D/gaeA3YDdwN5AWvyxp+6gD2r4OmAq8AbwInAMmA/OAT4CbgBWStvYClzUjWkHbrwHLgF8LVHJ8DDxah7P9JHCil7M40oA/A7OBC8ANtSqlrQOVs30/8CWQat8r6cxg1RwRQNvPA88Bk4D7gJzBV4A5teSp5MlS4VuA/ZIeu1Kr+wa0/QTwIRDlRhT5eTswBvi2CKOd42AULilndNAYCcA7gK+BmbVMiyXtsh3Qt4FFBTgW8w6wXtLfV4LrSyS2FwAvAWOBX+JtwF0laUDmS/oun23fDNwJnJb0Ty9g1ZphVdB2qrK2LdFfBbb685/AIxXkUKDqa4cMaDs2kjalRe8Fola57J3qRQSJviGHA3gMuAdYI2lDUfDOArQLWAd8VTuTOW9vjUoFy6TIGYpS9wKfAjuK5wVuSfn91iKcvZJeHy5ci0hsZwzNk5Qh3xIFbLyks7aPAtPLgv+L4VZwDwLvA6uKz6XdfcVAi22PBz4q4+lVSRurXW2vKYKIZfwEHCmmXC35HngAyITYD0ys2t8XWflyBfhmvKm24QCk7aVFCPVc7WMszzKucknI+NoHPCUppt13VICZm2nNwjoksByY0SXL72Vi3FieZ97mgrpyqF432H9xScW2O0H+W6oSE/4D2FYuA9kzlUzVTwO3Ad9IOtx3ydo2aLGZLpABm5KW2Z4AfAbMLfsEcpGkKLqRuMwHu0CukrSpCCrvGlF6hBEVL5MUw24kOhp1B8gc+FTqgxpkFLuzSbjk6jpJOkC2tDPeKCkVbDRkO67fDTTC2VK7vgfyBUlfNEpV2zyAK4HNXRLmZfshScdHC6g9T+WDGU2XpkdZdNXhWs6g7dXAhmsJ7jKR2M77bG4kV7Wt9TZfBLgYEC7PSpcIAAAAAElFTkSuQmCC"):c("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAeCAYAAABe3VzdAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAOxAAADsQBlSsOGwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAIMSURBVFiFzdZPiE1RGADwXzPTTPIMQoodVpbKgpoUG5qExUi8DSVJQv4slJJsbNjYWFhNETWLUUosRDRLUVLCYhIiojFojHkW997uvefNGIuZc99Xp/fOO6/Or++c75xDi0d7hDlWYQNqeB9hvv+OGq6jUWjPsKZKVBbtuKOMy9p3bKqOlsROCWYc27AWr9PfJnCgKlgbluNqivmGDmzBrxR3sCocnMEw7sqXdEAzboeK9uLTFPVbed8VcesxglFJtqNEHbcxlIL68ChADuCSpEgauBULt11SDI3C5yJJdrLCCNsQumMBl+J5AKinY4slBfNTfsRcxJwYsK0YxD3J0r1RPut6Cv/twgp0xoDBBc3LNhr0RwJktNifAn7gsnLmsuxVinyVTn4i7dcLoH4sU96Tp2Pi2uSVehN75Gdev+QO7pIXztmZnLwTvf+AzU+/v5Rn50+A24gP2IW5M4mbJ7+ejgVjJ/EpHXuCa8p77nGK68FX5eWfsTgfTJoh92qu1vAaa+CtPJuDZuEh3CHZUyHyxSSYrL3DWKE/gStm8aybDDkmKYperJM/BrJMnsJuHMLq2YJNh/wsX7JuPAyQfTFg0yGPFMZreCCv4n2xgTQjxyXP+CxquK8iXBYhMlzOtliQBVg4RVuCG/iSto/YHAuWxWFTHyXDWBkbNFkc1cK4LI5rYVwW57QY7i/pZeJv8QQJRQAAAABJRU5ErkJggg=="):
  (e=this.If.cloneNode(!0),e.firstChild.setAttribute("style","font:"+b),c($e(e.innerHTML)));},a),d);}lj.prototype.Oh=!1;function wj(a,b){var c="data:image/svg+xml;charset=utf-8,"+encodeURIComponent(oj),d=qj;tc(d)?a(d):(new rf("image",c)).then(function(e){We.drawImage(e,0,0);try{We.getImageData(0,0,1,1),d=!1;}catch(f){d=18===f.code;}finally{qj=d,a(d);}},b);}lj.prototype.bm=function(a,b){tj[a]=b;};lj.prototype.addL11NString=lj.prototype.bm;
  var tj={"de-DE":"Nutzungsbedingungen","en-US":"Terms of use","en-GB":"Terms of use","es-ES":"Condiciones de uso","fi-FI":"Palveluehdot","fr-FR":"Conditions d'utilisation","it-IT":"Condizioni di utilizzo","nl-NL":"Dienstvoorwaarden","pl-PL":"Warunki \u015bwiadczenia us\u0142ugi","pt-BR":"Termos de servi\u00e7o","pt-PT":"Termos do servi\u00e7o","ru-RU":"\u0423\u0441\u043b\u043e\u0432\u0438\u044f \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f","tr-TR":"Servis Ko\u015fullar\u0131",
  "zh-CN":"\u4f7f\u7528\u6761\u6b3e"};function Q(a){var b={};this.i=b.previousSibling=b.nextSibling=b;this.j=new af;Q.l.constructor.call(this,a);a&&"objects"in a&&this.fc(a.objects);}u(Q,M);t("H.map.Group",Q);Q.prototype.type=Pg.GROUP;Q.prototype.xe=function(a,b){this.f=!0;a=Q.l.xe.call(this,a,b);this.f=!1;a&&this.forEach(xj,!0);return a};Q.prototype.setProvider=Q.prototype.xe;function xj(a,b,c){a.xe(c.a);}Q.prototype.contains=function(a){var b=this===a;if(!b&&this.b&&C(a,M))for(;!b&&a;)a===this?b=!0:a=a.Ha;return b};
  Q.prototype.contains=Q.prototype.contains;Q.prototype.uf=function(){this.J=B;this.forEach(yj,!0);};Q.prototype.resetZInfo=Q.prototype.uf;function yj(a){a.uf();}Q.prototype.f=!1;Q.prototype.wa=function(a){var b=Q.l.wa.call(this,a);b&&!this.f&&(this.g=a,this.forEach(zj,!0),delete this.g);return b};Q.prototype.invalidate=Q.prototype.wa;function zj(a,b,c){a.wa(c.g);}
  Q.prototype.forEach=function(a,b,c){var d;if(this.b){var e=this.i;var f=e.nextSibling;for(d=0;f!==e;){var g=f.nextSibling;a.call(c,f,d++,this);b&&C(f,Q)&&f.forEach(a,b,c);f=g;}}};Q.prototype.forEach=Q.prototype.forEach;Q.prototype.Va=function(a){var b=[];this.forEach(Aj,a,b);return b};Q.prototype.getObjects=Q.prototype.Va;Q.prototype.G=function(){var a=null;this.b&&this.forEach(function(b){(b=b.G())&&(a?a=a.nc(b):a=b);});return a};Q.prototype.getBoundingBox=Q.prototype.G;
  function Aj(a){this.push(a);}Q.prototype.b=0;Q.prototype.Hm=function(){return this.b};Q.prototype.getChildCount=Q.prototype.Hm;
  Q.prototype.ea=function(a){var b=this.i,c=b.previousSibling;C(a,M,this.ea,0);if(a.contains(this))throw new Xc(this.ea,"The new object contains the parent group");var d=a.fg(!0);var e=a.Ha;if(e!==this){if(e){e=a.previousSibling;var f=a.nextSibling;e.nextSibling=f;f.previousSibling=e;}a.Ha=this;M.l.ka.call(a,this);c.nextSibling=a;a.previousSibling=c;a.nextSibling=b;b.previousSibling=a;this.b++;}a.Ti=this.j.next();a.uf();b=a.xe(this.a,this.ea);a.fg(!0)^d&&a.wa(Mg.VOLATILITY);b||a.wa(Mg.Z_ORDER);return a};
  Q.prototype.addObject=Q.prototype.ea;Q.prototype.fc=function(a){var b;yc(a,this.fc,0);var c=a.length;for(b=0;b<c;b++)this.ea(a[b]);};Q.prototype.addObjects=Q.prototype.fc;Q.prototype.Ia=function(a){if(!a||a.Ha!==this)throw new Xc(this.Ia,"object not found");var b=a.previousSibling,c=a.nextSibling;b.nextSibling=c;c.previousSibling=b;a.Ha=null;M.l.ka.call(a,null);delete a.previousSibling;delete a.nextSibling;C(a.a,N)&&a.xe(null,this.Ia);this.b--;return a};Q.prototype.removeObject=Q.prototype.Ia;
  Q.prototype.Gd=function(a){var b;yc(a,this.Gd,0);var c=a.length;for(b=0;b<c;b++)this.Ia(a[b]);};Q.prototype.removeObjects=Q.prototype.Gd;Q.prototype.qa=function(){var a=this.Va();this.Gd(a);};Q.prototype.removeAll=Q.prototype.qa;
  Q.prototype.Sc=function(a){for(var b=this.Va(),c=0,d=b.length,e=[],f,g,h;c<d;c++)h=b[c],h instanceof Q?(f=a?a(h.getData()):h.getData(),g=Sg(this,f,!!a),f={type:"Feature"},f.properties=g,h.m&&(f.id=h.m),f.geometry={},f.geometry.type="GeometryCollection",f.geometry.geometries=Bj(this,h.Va()),e.push(f)):e.push(h.Sc(a));return {type:"FeatureCollection",features:e}};Q.prototype.toGeoJSON=Q.prototype.Sc;
  function Bj(a,b){for(var c=0,d=b.length,e,f,g=[];c<d;c++)e=b[c],f={},e instanceof Q?(f.type="GeometryCollection",f.geometries=Bj(a,e.Va())):f=e.ba().Sc(),g.push(f);return g}Q.prototype.X=function(){var a=Q.l.X.call(this);a.type="Group";return a};Q.prototype.forWorkerMessage=Q.prototype.X;var Cj={PROVIDES_BY_VIEWPORT:1,PROVIDES_RASTERS:2,PROVIDES_SPATIALS:4,PROVIDES_OVERLAYS:8,PROVIDES_MARKERS:16,PROVIDES_DOM_MARKERS:32,PROVIDES_GEOJSON:64,PROVIDES_OMV:128,CROP_LINES_BY_TILE:256,CROP_POLYGONS_BY_TILE:512,HAS_VOLATILE_DATA:1024};t("H.map.provider.Capabilities",Cj);Cj.PROVIDES_WEBGL_RENDERABLE_OBJECTS=Cj.PROVIDES_SPATIALS|Cj.PROVIDES_OVERLAYS|Cj.PROVIDES_MARKERS;function Dj(a,b,c,d,e){b&&(this.b=b);tc(c)&&(this.$g=!!c);this.$g&&d&&(this.ah=new Ki(d.w,d.h));tc(e)&&(this.c={crossOrigin:e});switch(Ej[xc(a)]){case 2:this.Dd=a;Fj(this,1);break;case 1:if(lf(a)){this.Dd=a;Gj(this);Fj(this,1);break}a=a.src;case 0:if(a){a=$e(a);this.a=new rf("image",a,B,this.c);this.a.then(A(this.Jo,this),A(this.Io,this));break}default:throw Fj(this,-1),new D(Dj,0,"No image data");}}n=Dj.prototype;n.A=0;n.getState=function(){return this.A};
  function Fj(a,b){a.A=b;delete a.a;a.b&&a.b(b,a);}n.$g=!0;function Gj(a){if(a.$g){var b=a.Dd,c=Hj(a),d=c&&c.w||+b.width,e=c&&c.h||+b.height,f=Se();if(C(b,x.HTMLCanvasElement))c=b;else {c=b.ownerDocument.createElement("canvas");c.width=zd(d*f);c.height=zd(e*f);var g=c.getContext("2d");g.scale(f,f);g.drawImage(b,0,0,d,e);Zc&&(g.clearRect(0,0,d,e),g.drawImage(b,0,0,d,e));}a.Dd=c;}}n.Dd=y;n.getData=function(){return this.Dd};var Ej={String:0,HTMLImageElement:1,HTMLCanvasElement:2};n=Dj.prototype;n.ah=y;
  n.Db=function(){return 1===this.A?Hj(this):y};function Hj(a){var b=a.ah,c;if(!b){var d=a.Dd;b=d.naturalWidth||d.width;if(0===b&&Ye&&1===Ej[xc(d)]){var e=!0;if(c=d.parentNode)var f=d.nextSibling;document.body.appendChild(d);}a.ah=b=new Ki(d.naturalWidth||d.width,d.naturalHeight||d.height);e&&(c?c.insertBefore(d,f):document.body.removeChild(d));}return b}n.Jo=function(a){this.Dd=a;Gj(this);Fj(this,1);};n.Io=function(){Fj(this,-1);};n.cancel=function(){this.a&&this.a.cancel();};function Ij(a,b){var c,d="anonymous";this.uid=Jj.next();Ij.l.constructor.call(this);if(b){var e="size";if(e in b){var f=b[e];if(!f||isNaN(f.w)||isNaN(f.h))throw new D(Ij,1,e);this.c=new Ki(f.w,f.h);}e="anchor";if(e in b){f=b[e];if(!f||isNaN(f.x)||isNaN(f.y))throw new D(Ij,1,e);this.b=new I(f.x,f.y);}e="hitArea";e in b&&(f=b[e],C(f,Li,Ij,1),this.g=b[e]);e="asCanvas";e in b&&(c=b[e]);e="crossOrigin";e in b&&(d=b[e]);f=b.stickHeight;f===+f&&0<f&&(this.hp=f);e="stickColor";f=b[e];e in b&&zc(f)&&(this.gp=
  f);}a=new Dj(a,A(this.i,this),c,this.c,d);b=this.A=a.getState();0!==b?this.i(b,a):this.f=a;}u(Ij,F);t("H.map.Icon",Ij);var Jj=new af;Ij.State={ERROR:-1,LOADING:0,READY:1};Ij.prototype.getState=function(){return this.A};Ij.prototype.getState=Ij.prototype.getState;Ij.prototype.i=function(a,b){this.a=b.getData();if(1===a){var c=this.c;c||(c=this.c=b.Db());this.b||(this.b=new I(c.w/2|0,c.h));}this.f&&(this.A=a,delete this.f,this.dispatchEvent("statechange"));};Ij.prototype.a=y;Ij.prototype.ad=function(){return this.a};
  Ij.prototype.getBitmap=Ij.prototype.ad;Ij.prototype.c=y;Ij.prototype.Db=function(){return this.c};Ij.prototype.getSize=Ij.prototype.Db;Ij.prototype.b=y;Ij.prototype.ud=function(){return this.b};Ij.prototype.getAnchor=Ij.prototype.ud;Ij.prototype.g=y;Ij.prototype.an=function(){return this.g};Ij.prototype.getHitArea=Ij.prototype.an;Ij.prototype.u=function(){Ij.l.u.call(this);this.a?(this.a.removeAttribute("src"),delete this.a):(this.f.cancel(),delete this.f);};function Kj(a,b,c,d,e,f){Kj.l.constructor.call(this,isNaN(a)?15:a,b,c,d,e,f);}u(Kj,hg);Kj.prototype.m=function(a){for(var b,c,d,e=this.head;a;){if(b=a.entries)if(c=b.length){if(2>c&&(d=a.parent)&&1===d.a){d.removeChild(a);e===a&&(e=d);d.entries=b;a=b[0].node=d;continue}}else if(delete a.entries,d=a.parent)if(d.removeChild(a),e===a&&(e=d),1===d.a){a=d.a?d[0]||d[1]||d[2]||d[3]:null;continue}a=y;}this.head!==e&&(this.head=e,mg(this));};
  Kj.prototype.Fc=function(a,b){if(rg(this.a,a,b,a,b))return Lj(this,this.a,a,b,this.c);throw Error("Coordinates out of bounds");};function Lj(a,b,c,d,e){var f=b.entries;if(e)if(b.a)f=Mj(a,b,c,d,e);else if(f){f=f[0];var g=pg(b,f[1]>=b[8]|(f[0]>=b[9])<<1);g.entries=b.entries;delete b.entries;f.node=g;mg(a,g);f=Mj(a,b,c,d,e);}else qg(b,f=new Nj(c,d)),mg(a,b),kg(a,f,!0);else f||mg(a,b),qg(b,f=new Nj(c,d)),kg(a,f,!0);return f}function Mj(a,b,c,d,e){return Lj(a,pg(b,c>=b[8]|(d>=b[9])<<1),c,d,e-1)}
  function Nj(a,b){this.id=og++;this[0]=b;this[1]=a;}Nj.prototype.wd=function(a){return this[a%2]};function Oj(){this.a=new Kj(10,180,90,0,0,!0);}n=Oj.prototype;n.Wh=0;n.bd=function(){return this.Wh};n.R=null;n.G=function(){var a=this.R,b;!a&&(b=ig(this.a))&&(this.R=a=new K(-b[0],b[3],-b[2],b[1]));return a};n.Fc=function(a){++this.Wh;this.R=null;return this.a.Fc(a.lng,-a.lat)};n.remove=function(a){if(a=this.a.remove(a))--this.Wh,this.R=null;return a};
  n.ig=function(a,b,c){var d=this.a,e=a.Rb(),f=a.Nb(),g=-e.lat;e=e.lng;var h=-f.lat;f=f.lng;var k;a.Gb()?k=d.ab(-180,g,f,h,c,b).concat(d.ab(e,g,180,h,c,b)):k=d.ab(e,g,f,h,c,b);return k};function Pj(a,b,c){this.c=a;this.a=b;this.g=c;this.f=this.c&Cj.PROVIDES_BY_VIEWPORT?"function(){return sources[$source].isInMinMaxRange(feature, $zoom) && feature.ref.effectiveVisibility;}":B;this.b={};}function Qj(a,b,c,d){this.a=a;this.b=b;this.c=c;this.Df=d;}function Rj(a,b,c,d){a={type:b,uid:a.b,tiled:c,max_zoom:a.c};d&&Wa(a,d);return a}function Sj(a){this.a=a;}function Tj(a,b,c,d,e){this.a=a;this.b=b;this.c=c;this.f=d;this.Df=e;}
  function Uj(a){if(a.a&Cj.PROVIDES_DOM_MARKERS&&!(a.a&Cj.PROVIDES_MARKERS))return {};var b=new Qj(a.a,a.b,a.c,a.Df);var c=new Sj(a.a);a=new Pj(a.a,a.b,a.f);var d={},e=b.b;b=b.a&Cj.PROVIDES_BY_VIEWPORT?Rj(b,"ObjectSource",!1,{progressiveUpdate:!0,has_volatile_data:!!(b.a&Cj.HAS_VOLATILE_DATA)}):b.a&Cj.PROVIDES_RASTERS?Rj(b,"RemoteRasterTileSource",!0,{url:""}):Rj(b,"ObjectTileSource",!0,{tile_size:b.Df});d[e]=b;b={};c.a&Cj.PROVIDES_RASTERS&&(b={"translucent-raster":Mh("raster","inlay",1)});if(c.a&Cj.PROVIDES_WEBGL_RENDERABLE_OBJECTS){e=
  !!(c.a&Cj.CROP_LINES_BY_TILE);var f={"translucent-polygons":Mh("polygons","inlay",2),"translucent-extruded-polygons":Mh("polygons","translucent",3),"translucent-pattern-lines":Mh("pattern-lines","translucent",4),"translucent-overlays":Mh("overlays","inlay",5),markers:Mh("custom_icons","overlay",6,!1)};f["translucent-polygons"].crop_by_tile=!!(c.a&Cj.CROP_POLYGONS_BY_TILE);f["translucent-pattern-lines"].crop_by_tile=e;f.markers.suppress_fade=!0;f.markers.stick=!0;Wa(b,f);}a.c&Cj.PROVIDES_RASTERS&&(a.b["tile_layer_"+
  a.a]=Oh(a.a,"_default",{"translucent-raster":{color:[1,1,1,a.g],order:0}}));if(a.c&Cj.PROVIDES_SPATIALS){c={"translucent-pattern-lines":{color:Lh("strokeColor"),width:Lh("lineWidth * $meters_per_pixel"),join:Lh("lineJoin"),cap:Lh("lineCap"),tail_cap:Lh("lineTailCap"),head_cap:Lh("lineHeadCap"),miter_limit:Lh("miterLimit"),order:"function() { return 2 + feature.effectiveZIdx / 2; }",interactive:!0,dash:Lh("lineDash"),extrude:!0,dash_phase:Lh("lineDashOffset")}};e=a.b;f="polygon_layer_"+a.a;var g=Oh(a.a,
  "polygons",void 0,a.f);g.flat={filter:"function(){return !feature.height && !feature.min_height;}",draw:Nh(!1)};g.extruded={filter:"function(){return feature.height || feature.min_height;}",draw:Nh(!0)};e[f]=g;a.b["outline_layer_"+a.a]=Oh(a.a,"outlines",c,a.f);a.b["polyline_layer_"+a.a]=Oh(a.a,"polylines",c,a.f);}a.c&Cj.PROVIDES_OVERLAYS&&(a.b["overlay_layer_"+a.a]=Oh(a.a,"overlays",{"translucent-overlays":{color:[1,1,1,a.g],order:8190,interactive:!0}}));a.c&Cj.PROVIDES_MARKERS&&(a.b["marker_layer_"+
  a.a]=Oh(a.a,"markers",{markers:{sprite:Kh("icon.id"),offset:Kh("icon.offset"),collide:!1,priority:8191,elevate_by_altitude:!0,interactive:!0,stick:{color:Kh("icon.stick_color"),height:Kh("icon.stick_height")}}},a.f));return {sources:d,styles:b,layers:a.b}}function P(a){var b=""+cf(),c;P.l.constructor.call(this);a=a||{};this.min=a.min||0;this.max=a.max||22;if(c=a.uri){if(/_/.test(c))throw new D(P,0,"uri "+c);}else c=b;this.uri=c||b;this.uid=b;a.getCopyrights&&wc(a.getCopyrights,"Function",P)&&(this.getCopyrights=a.getCopyrights);this.g=this.g.bind(this);this.za=!0;this.f=a.engineType||Vj.WEBGL;if(this.f===Vj.HARP&&!H.map.render.harp)throw new D(P,0,"HARP engine is not supported, module not found");}u(P,F);t("H.map.provider.Provider",P);
  P.prototype.i={Ce:"configchange",Ea:"update"};function Wj(a,b,c){a.dispatchEvent(new sd(a.i.Ea,c,b));}P.prototype.g=function(){this.dispatchEvent(this.i.Ce);};P.prototype.u=function(){F.prototype.u.call(this);this.b&&(this.b.removeEventListener("change",this.g),this.b=null);};P.prototype.ta=function(){return null};P.prototype.getCopyrights=P.prototype.ta;
  P.prototype.getCapabilities=function(){var a=0;this.wi()&&(a|=Cj.PROVIDES_BY_VIEWPORT);this.providesRasters()&&(a|=Cj.PROVIDES_RASTERS);this.providesSpatials()&&(a|=Cj.PROVIDES_SPATIALS);this.providesOverlays()&&(a|=Cj.PROVIDES_OVERLAYS);this.providesMarkers()&&(a|=Cj.PROVIDES_MARKERS);this.providesDomMarkers()&&(a|=Cj.PROVIDES_DOM_MARKERS);this.providesGeoJSON()&&(a|=Cj.PROVIDES_GEOJSON);this.providesOMV()&&(a|=Cj.PROVIDES_OMV);return a};P.prototype.getCapabilities=P.prototype.getCapabilities;
  P.prototype.wi=ef;P.prototype.pf=ef;P.prototype.providesRasters=P.prototype.pf;P.prototype.Jc=ef;P.prototype.providesSpatials=P.prototype.Jc;P.prototype.yi=ef;P.prototype.providesOverlays=P.prototype.yi;P.prototype.Wb=ef;P.prototype.providesMarkers=P.prototype.Wb;P.prototype.Vb=ef;P.prototype.providesDomMarkers=P.prototype.Vb;P.prototype.xi=ef;P.prototype.providesGeoJSON=P.prototype.xi;P.prototype.Ed=ef;P.prototype.providesOMV=P.prototype.Ed;P.prototype.Tm=function(){return this.f};
  P.prototype.getEngineType=P.prototype.Tm;P.prototype.nf=hd;P.prototype.preprocessData=P.prototype.nf;P.prototype.j=1;function Xj(a,b){b=Yd(b,0,1);E(b)&&(b=1);a.j!==b&&(a.j=b,a.za&&Yj(a),a.g(),Wj(a));}P.prototype.rn=function(){return this.j};P.prototype.getOpacityInternal=P.prototype.rn;
  P.prototype.ac=function(a,b){var c=this;if(this.f===Vj.WEBGL&&!C(a,Th)||this.f===Vj.HARP&&!C(a,H.map.render.harp.Style))throw a=Object.entries(Vj).find(function(d){return d[1]===c.f}),new D(this.ac,0,"Invalid style for engineType "+a);this.b&&(this.b.removeEventListener("change",this.g),this.b.removeEventListener(Rh,this.g));this.b=a;this.b.addEventListener("change",this.g);this.b.addEventListener(Rh,this.g);b||this.g();this.za=!1;};P.prototype.setStyleInternal=P.prototype.ac;
  P.prototype.ub=function(){this.b||Yj(this);return this.b};P.prototype.getStyleInternal=P.prototype.ub;function Yj(a){if(a.f===Vj.WEBGL){var b=new Tj(a.getCapabilities(),a.uid,a.max,a.j,a.tileSize);a.b=new Th(Uj(b));}else a.f===Vj.HARP&&H.map.render.harp&&(a.b=new H.map.render.harp.Style({}));a.za=!0;}P.prototype.ak=function(){var a=this.getCapabilities(),b=Zj.FEATURE;a&Cj.PROVIDES_BY_VIEWPORT?b=Zj.SOURCE:a&Cj.PROVIDES_RASTERS?b=null:a&Cj.PROVIDES_WEBGL_RENDERABLE_OBJECTS&&(b=Zj.PROVIDER);return b};
  P.prototype.getPickingMode=P.prototype.ak;P.prototype.Xm=function(){return !1};P.prototype.getFeatureProxy=P.prototype.Xm;function ak(a){var b;uc(this,ak);ak.l.constructor.call(this,a);this.Aa=a=[];for(b in Pg)a[Pg[b]]=new Lg;}u(ak,P);t("H.map.provider.ObjectProvider",ak);ak.prototype.wi=df;ak.prototype.providesByViewport=ak.prototype.wi;ak.prototype.Pb=function(a){return this.Aa[a||Pg.ANY]};ak.prototype.getInvalidations=ak.prototype.Pb;ak.prototype.ke=function(a,b){if(b!==Mg.NONE){var c=this.Aa[Pg.ANY];var d=c.a+1;c.update(d,b);c=this.Aa[a.type];c.update(d,b);a.Pb().update(d,b);Wj(this,a);}};
  ak.prototype.invalidateObject=ak.prototype.ke;ak.prototype.requestOverlays=ak.prototype.Hd;ak.prototype.requestSpatials=ak.prototype.Ag;ak.prototype.requestSpatialsByTile=ak.prototype.Bg;ak.prototype.yb=!1;ak.prototype.requestMarkers=ak.prototype.Lc;ak.prototype.requestDomMarkers=ak.prototype.Kc;function N(a){a=a||{};N.l.constructor.call(this,a);this.c=a=new Q({min:a.min,max:a.max});a.a=this;a.ka(this);a.wa(Mg.ADD);this.O=new wg;this.m=new wg;this.s=new Oj;this.v=new wg;this.J=new Oj;this.U=new wg;}u(N,ak);t("H.map.provider.LocalObjectProvider",N);N.prototype.getCapabilities=function(){return Cj.PROVIDES_BY_VIEWPORT|Cj.PROVIDES_WEBGL_RENDERABLE_OBJECTS|Cj.PROVIDES_DOM_MARKERS|Cj.CROP_LINES_BY_TILE};
  N.prototype.ub=function(){if(!this.fa){this.fa=N.l.ub.call(this);var a=new Tj(this.getCapabilities()|Cj.HAS_VOLATILE_DATA,this.uid+"_vol",this.max,this.j,this.tileSize);this.fa.hf(Uj(a));}return this.fa};N.prototype.kc=function(){return this.c};N.prototype.getRootGroup=N.prototype.kc;N.prototype.ke=function(a,b){b&Mg.SPATIAL&&this.ea(a);N.l.ke.call(this,a,b);};N.prototype.invalidateObject=N.prototype.ke;
  N.prototype.ea=function(a){var b;C(a,M,this.ea,0);if(a.a!==this)throw new Xc(this.ea,"foreign object");this.Ia(a);var c=a.type;if(c===Pg.MARKER)if((b=a.ba())instanceof Wf){var d=!0;c=this.s;}else c=this.v;else c===Pg.DOM_MARKER?(b=a.ba())instanceof Wf?(d=!0,c=this.J):c=this.U:c=c===Pg.OVERLAY?this.O:this.m;d=d?c.Fc(b):c.mk(a.G());d.dj=a;a.ma=d;};
  N.prototype.Ia=function(a){var b;if(a)if(a.a!==this){if(C(a,M))throw new Xc(this.Ia,"foreign object");}else if(b=a.ma){var c=a.type;c===Pg.MARKER?this.s.remove(b)||this.v.remove(b):c===Pg.DOM_MARKER?this.J.remove(b)||this.U.remove(b):c===Pg.OVERLAY?this.O.remove(b):this.m.remove(b);delete b.dj;delete a.ma;}};N.prototype.removeObject=N.prototype.Ia;
  function bk(a,b,c,d,e,f,g){g=g||[];if(b.bd())for(a=b!==a.s&&b!==a.v,e=!e,b=b.ig(c,f,f),c=b.length,f=0;f<c;f++){var h=b[f].dj;var k;if(k=void 0!==d){for(var l=yd(d),m=h;(k=m.v<=l&&m.s>=l)&&(m=m.Ha););k=!k;}k||!e&&!h.Dc(!0)||(a||1===h.Cb().getState())&&g.push(h);}return g}N.prototype.yi=function(){return 0<this.O.bd()};N.prototype.providesOverlays=N.prototype.yi;N.prototype.Hd=function(a,b,c){return bk(this,this.O,a,b,c,!1).filter(function(d){return d.ad()})};N.prototype.requestOverlays=N.prototype.Hd;
  N.prototype.Jc=function(){return 0<this.m.bd()};N.prototype.providesSpatials=N.prototype.Jc;N.prototype.Ag=function(a,b,c){return bk(this,this.m,a,b,c,!1)};N.prototype.requestSpatials=N.prototype.Ag;N.prototype.Bg=function(a,b){return bk(this,this.m,a.bg(),a.zL,b,!1)};N.prototype.requestSpatialsByTile=N.prototype.Bg;N.prototype.Wb=function(){return 0<this.s.bd()+this.v.bd()};N.prototype.providesMarkers=N.prototype.Wb;N.prototype.Lc=function(a,b,c){return ck(this,a,b,c,!1)};
  N.prototype.requestMarkers=N.prototype.Lc;function ck(a,b,c,d,e){var f=bk(a,a.s,b,c,d,e);bk(a,a.v,b,c,d,e,f);return f}N.prototype.Vb=function(){return 0<this.J.bd()+this.U.bd()};N.prototype.providesDomMarkers=N.prototype.Vb;N.prototype.Kc=function(a,b,c){return dk(this,a,b,c,!1)};N.prototype.requestDomMarkers=N.prototype.Kc;function dk(a,b,c,d,e){var f=bk(a,a.J,b,c,d,e);bk(a,a.U,b,c,d,e,f);return f}
  function ek(a,b,c){var d=c.ba(),e,f=fk.bind(null,a);a=gk.bind(null,a);C(c,nh)?e=C(d,L)?f(d):d.pa.some(f):C(c,xi)?e=C(d,O)?a(d):d.pa.some(a):C(c,hk)&&(e=a(ni(d)));e&&b.push(c);}function fk(a,b){a:{var c=b.Y;var d=si(a,b);if(!d){b=b.Y.length;for(var e=0;e<b;e+=3)if(qi(a,c[e],c[e+1])){a=!0;break a}}a=d;}return a}function gk(a,b){return ti(a,b)}
  function ik(a,b,c){for(var d=a.length;d--;){var e=a[d],f=e.ba();if(C(f,Ji)){f=f.pa;for(var g=f.length,h;g--;)if(h=f[g],qi(b,h.lat,h.lng)){c.push(e);break}}else qi(b,f.lat,f.lng)&&c.push(e);}}
  N.prototype.Va=function(a,b,c,d,e){for(var f=this,g=a.G(),h=[],k=Wb(),l=1;l&Pg.ANY;){if(l&d)switch(l){case Pg.MARKER:k=k.then(function(){return ck(f,g,c,b,!0)}).then(function(m){return ik(m,a,h)});break;case Pg.DOM_MARKER:k=k.then(function(){return dk(f,g,c,b,!0)}).then(function(m){return ik(m,a,h)});break;case Pg.SPATIAL:k=k.then(function(){return bk(f,f.m,g,c,b,!0)}).then(function(m){m.forEach(ek.bind(null,a,h));});break;case Pg.OVERLAY:k=k.then(function(){return bk(f,f.O,g,c,b,!0)}).then(function(m){m.forEach(ek.bind(null,
  a,h));});}l<<=1;}k.then(function(){return e(h)});};N.prototype.u=function(){N.l.u.call(this);this.c.qa();};var jk={PENDING:0,ACTIVE:1,DONE:2};t("H.map.render.RenderState",jk);function kk(a,b){b=b||{};var c;if(!C(a,Element))throw new D(kk,0,a);var d=a.ownerDocument.createElement("div");this.S=a;kk.l.constructor.call(this);this.padding=new lk(0,0,0,0);this.center=new I(0,0);this.margin=0;this.element=d;d.style.zIndex=0;d.style.height=d.style.width="100%";d.style.direction="ltr";d.style.position="relative"===a.style.position?"absolute":"relative";this.resize();a.appendChild(d);(c=b.padding)!==B&&this.Mi(c.top,c.right,c.bottom,c.left);this.Hi((c=b.margin)!==B?c:0);}u(kk,F);
  t("H.map.ViewPort",kk);kk.prototype.a={Ea:"update",Fe:"sync"};kk.prototype.Hi=function(a){if(this.margin!==+a){if(E(this.margin=+a))throw new D(this.Hi,0,a);mk(this);this.dispatchEvent(this.a.Ea);}};kk.prototype.setMargin=kk.prototype.Hi;kk.prototype.Mi=function(a,b,c,d){var e=this.padding;if(e.top!==a||e.right!==b||e.bottom!==c||e.left!==d){if(E(a+b+c+d))throw new D(this.Mi);e.top=a;e.right=b;e.bottom=c;e.left=d;mk(this);this.dispatchEvent(this.a.Ea);}};kk.prototype.setPadding=kk.prototype.Mi;
  function mk(a){var b=a.padding;a.center.set((a.width+b.left-b.right)/2<<0,(a.height+b.top-b.bottom)/2<<0);}kk.prototype.resize=function(){var a=this.S.offsetWidth,b=this.S.offsetHeight;if(this.width!==a||this.height!==b)this.c=new Ki(this.width,this.height),this.width=a,this.height=b,mk(this),this.dispatchEvent(this.a.Ea);};kk.prototype.resize=kk.prototype.resize;kk.prototype.bb=function(a){this.dispatchEvent(new Ri(this.a.Fe,this.c,a,Si.SIZE));};kk.prototype.synchronize=kk.prototype.bb;
  kk.prototype.u=function(){x.clearTimeout(this.b);this.b=null;this.S.removeChild(this.element);this.element=this.S=null;kk.l.u.call(this);};kk.prototype.uc=Nc;kk.prototype.startInteraction=kk.prototype.uc;kk.prototype.lc=Nc;kk.prototype.interaction=kk.prototype.lc;kk.prototype.Bb=Nc;kk.prototype.endInteraction=kk.prototype.Bb;function nk(a,b,c,d,e,f){var g;for(g=[];d<=e;d++)g=g.concat(ok(a,c,d));a=g.length;hj.call(this,f,a);this.j=c=[];this.f=A(this.f,this);this.c=A(this.c,this);for(this.P(1);a--;)f=g[a],c.push(pk(b,f[0],f[1],f[2],this.f,this.c));}u(nk,hj);nk.prototype.f=function(){jj(this,2);};nk.prototype.c=function(){jj(this,4);};nk.prototype.Ie=function(){for(var a=this.j,b=a.length;b--;)a[b].cancel();this.j=y;};function qk(){}t("H.util.ICancelable",qk);qk.prototype.cancel=function(){};qk.prototype.cancel=qk.prototype.cancel;function rk(a,b){var c=this;if(!Ca(b))throw new D(sk,1,b);if(!Ca(a.next||Ca(a.cycle)))throw new D(rk,2,'Argument "mode" must implement H.util.AsyncQueue.Mode');this.b=[];this.c=[];this.g=a;this.i=b;this.j=function(){tk(c);};this.a=null;this.f=function(){c.a||(c.a=x.setTimeout(c.j,1));};}t("H.util.AsyncQueue",rk);rk.prototype.push=function(a,b){if(!Ca(b))throw new D(this.push,1,b);a=uk(new vk,a,this.f,b);this.b.push(a);this.f();return a};rk.prototype.push=rk.prototype.push;
  function tk(a){var b=a.c,c=0,d=a.g;d.a();for(a.a=null;c<b.length;){var e=b[c];e.rk?b.splice(c,1):c++;}for(;e=d.next(a.b,a.c);)e.cancelled?e.done(null,"cancelled"):(b.push(e),a.i(e,e.data));}function vk(){uk(this,null,null,null);}rk.Task=vk;function uk(a,b,c,d){a.data=b;a.cancelled=!1;a.rk=!1;a.b=c;a.c=d;a.a=null;return a}vk.prototype.done=function(a,b){this.rk=!0;this.b();this.c(this,a,b);};vk.prototype.done=vk.prototype.done;vk.prototype.cancel=function(){this.a&&this.a();this.cancelled=!0;};
  vk.prototype.cancel=vk.prototype.cancel;vk.prototype.$o=function(a){this.a=a;return this};vk.prototype.setCancelFn=vk.prototype.$o;function wk(){}rk.Mode=wk;wk.prototype.next=function(){};wk.prototype.a=function(){};function xk(a,b){xk.l.constructor.call(this,new yk(a),b);}u(xk,rk);t("H.util.SequentialQueue",xk);function yk(a){if(isNaN(a)||0>a)throw new D(xk,1,'Argument "maxTime" must be a positive number');this.b=a;this.Rc=zk();}yk.prototype.next=function(a){return a.length&&zk()-this.Rc<this.b?a=a.shift():null};yk.prototype.a=function(){this.Rc=zk();};function Ak(a){uc(this,Ak);Ak.l.constructor.call(this,a);if(a&&"tileSize"in a){var b=Bd(+a.tileSize)/Ld;if(isNaN(b)||b%1||0>b||30<b)throw new D(Ak,0,"tileSize: "+a.tileSize);this.tileSize=+a.tileSize;}}u(Ak,P);t("H.map.provider.TileProvider",Ak);function Bk(a,b){return Vd(a)-8-xd(Vd(b))}Ak.getZoomLevelOffset=Bk;Ak.prototype.yd=function(a,b,c){return this.uri.concat("_",a,"_",b,"_",c)};Ak.prototype.getTileKey=Ak.prototype.yd;Ak.prototype.Df=256;Ak.prototype.tileSize=Ak.prototype.Df;function Ck(){}t("H.util.ICache",Ck);Ck.prototype.add=function(){};Ck.prototype.add=Ck.prototype.add;Ck.prototype.get=function(){};Ck.prototype.get=Ck.prototype.get;Ck.prototype.Uf=function(){};Ck.prototype.drop=Ck.prototype.Uf;Ck.prototype.forEach=function(){};Ck.prototype.forEach=Ck.prototype.forEach;Ck.prototype.qa=function(){};Ck.prototype.removeAll=Ck.prototype.qa;Ck.prototype.re=function(){};Ck.prototype.registerOnDrop=Ck.prototype.re;Ck.prototype.lh=function(){};
  Ck.prototype.deRegisterOnDrop=Ck.prototype.lh;function Dk(a,b,c){this.g=[];b&&this.re(b);if(c&&!Ca(c))throw new D(Dk,2,c);this.b=0;this.filter=c;this.a={};this.f=this.c=null;this.Ji(a);}t("H.util.Cache",Dk);Dk.prototype.add=function(a,b,c){var d,e;c=+c;if(!Cc(c)||0>c)throw new D(this.add,2,c);a=String(a);if(e=this.filter?this.filter(a,b,c):!0)(d=this.a[a])?(d.data!==b&&Ek(this,d),this.b+=c-d.size,d.size=c,d.data=b,Fk(this,d)):this.a[a]=Gk(this,{id:a,data:b,size:c,oc:null,jd:null},this.c),Hk(this);return e};Dk.prototype.add=Dk.prototype.add;
  Dk.prototype.re=function(a){if(!Ca(a))throw new D(this.re,0,a);this.g.push(a);};Dk.prototype.registerOnDrop=Dk.prototype.re;Dk.prototype.lh=function(a){this.g=this.g.filter(function(b){return b!==a});};Dk.prototype.deRegisterOnDrop=Dk.prototype.lh;Dk.prototype.get=function(a,b){return (a=b?this.a[a]:Fk(this,this.a[a]))&&a.data};Dk.prototype.get=Dk.prototype.get;Dk.prototype.Uf=function(a){var b;(b=this.a[a])&&Ik(this,b,!0);};Dk.prototype.drop=Dk.prototype.Uf;
  Dk.prototype.forEach=function(a,b,c){var d;for(d in this.a){var e=this.a[d];(c?c(d,e.data,e.size):1)&&a.call(b,d,e.data,e.size);}};Dk.prototype.forEach=Dk.prototype.forEach;Dk.prototype.qa=function(a){var b;for(b in this.a){var c=this.a[b];(a?a(b,c.data,c.size):1)&&Ik(this,this.a[b],!0);}};Dk.prototype.removeAll=Dk.prototype.qa;Dk.prototype.Ji=function(a){if(!(0<+a))throw new D(Dk.prototype.Ji,0,a);this.i=+a;Hk(this);return this};Dk.prototype.setMaxSize=Dk.prototype.Ji;Dk.prototype.pn=function(){return this.i};
  Dk.prototype.getMaxSize=Dk.prototype.pn;Dk.prototype.Nm=function(){return this.b};Dk.prototype.getCurrentSize=Dk.prototype.Nm;function Fk(a,b){b&&(a.c=Gk(a,b,a.c));return b}function Hk(a){for(;a.b>a.i&&a.f;)Ik(a,a.f,!0);}function Gk(a,b,c){if(c!==b){(b.oc||b.jd)&&Ik(a,b,!1);if(b.oc=c)b.jd=c.jd,c.jd=b;b.jd||(a.c=b);b.oc||(a.f=b);a.b+=b.size;}return b}function Ik(a,b,c){var d=b.jd,e=b.oc;if(d||e||b==a.c&&b==a.f)d?d.oc=e:a.c=e,e?e.jd=d:a.f=d,a.b-=b.size,c&&(delete a.a[b.id],Ek(a,b));b.oc=b.jd=null;}
  function Ek(a,b){for(var c=a.g.length;c--;)a.g[c].call(a,b.id,b.data,b.size);}var Jk,Kk=function(){function a(){}for(var b,c,d,e=rc("o ms moz webkit "),f=5;f--&&!b;)b=e[f],b=(c=x[b+(b?"R":"r")+"equestAnimationFrame"])&&!E(c.call(window,a))&&(d=x[b+(b?"C":"c")+"ancelAnimationFrame"]);Jk=b?function(g){return c.call(x,g)}:function(g){return x.setTimeout(g,25)};return b?function(g){return d.call(x,g)}:function(g){return x.clearTimeout(g)}}(),zk=x.performance&&x.performance.now?function(){return x.performance.now()}:function(){return x.Date.now()};function Lk(a,b,c,d){this.key="";this.x=a;this.y=b;this.z=c;this.data=d;this.valid=!0;}t("H.map.provider.Tile",Lk);function Mk(a,b,c,d){a-=c;b-=d;return a*a+b*b}function Nk(a,b,c){return Ok(a,b*b,c||0,0,a.length-1)}t("H.math.simplifyDP",Nk);
  function Ok(a,b,c,d,e){var f=0,g=d,h=a[d].x,k=a[d].y,l=a[e].x,m=a[e].y,p=d+1,q=Mk(h,k,l,m);if(q)for(;p<e;){var r=a[p++];var v=r.x;r=r.y;var w=((v-h)*(l-h)+(r-k)*(m-k))/q;v=0>w?Mk(v,r,h,k):1<w?Mk(v,r,l,m):Mk(v,r,h+w*(l-h),k+w*(m-k));v>f&&(f=v,g=p-1);}else for(;p<e;)r=a[p++],v=r.x,r=r.y,v=Mk(v,r,h,k),v>f&&(f=v,g=p-1);f>=b||0<c&&g-d?(--c,1<g-d?(d=Ok(a,b,c,d,g),d.splice(d.length-1,1)):d=[a[d]],d=1<e-g?d.concat(Ok(a,b,c,g,e)):d.concat(a.slice(g,e+1))):d=[a[d],a[e]];return d}function Pk(a,b,c,d,e,f,g,h){Pk.l.constructor.call(this,b,c,d,null);this.key=a;this.aa=h;this.a=e;this.g=f;this.i={};this.zL=g;this.o=zd(Ug.MAX_LINE_WIDTH/2*this.g+1);}u(Pk,Lk);t("H.map.provider.SpatialTile",Pk);Pk.prototype.c=Ud;Pk.prototype.s=Ud;Pk.prototype.b=Ud;function Qk(a){return a.aa.getInvalidations(Pg.SPATIAL)}
  function Rk(a){var b=Qk(a),c=b.a,d=a.c,e=d===c,f;if(!(e||b.pk(d)||b.Qh(d))){e=a.f;var g=a.i;if(b.kg(d))for(f=e.length;f--;){var h=e[f];if(h.Pb().kg(d)){e.splice(f,1);var k=k||Sk(a,h.gb());}}if(b.Rh(d)){for(f=e.length;f--;)if(h=e[f],h.Pb().Rh(d)){var l=1;if((h=g[h.gb()])&&h.a){k=1;break}}l&&e.sort(Tk);}if(!k&&b.me(d))for(f=e.length;f--;)if(e[f].Pb().me(d)){var m=1;break}a.s!==d||m||(a.s=c,a.b!==d||k||(a.b=c));a.c=c;e=!0;}return e}
  Pk.prototype.le=function(){var a=Qk(this),b=a.a,c=this.b,d=c===b;d||(this.aa.yb&&!a.me(c)?d=!0:Rk(this)&&(d=this.b===b));return d};Pk.prototype.isCanvasValid=Pk.prototype.le;Object.defineProperty(Pk.prototype,"valid",{get:function(){return this.le()},set:hd,configurable:!0});function Uk(a,b){this.b=a;this.a=b;}function Sk(a,b){a=a.i;var c=a[b];if(c)return delete a[b],c.a}Pk.prototype.f=ff;
  function Vk(a){var b=Qk(a),c=a.c,d=a.f,e;if(!Rk(a)){for(e=d.length;e--;){var f=d[e];var g=f.Pb();(g.kg(c)||g.Qh(c))&&Sk(a,f.gb());}a.f=a.aa.requestSpatialsByTile(a,!1,!1).sort(Tk);a.c=b.a;}}function Tk(a,b){return Qg(a.ed(),b.ed(),!1)}Pk.prototype.Va=function(){return this.f};Pk.prototype.getObjects=Pk.prototype.Va;Pk.prototype.Mn=function(){return this.a};Pk.prototype.getTileSize=Pk.prototype.Mn;var Wk={};
  Pk.prototype.af=function(){var a=this.a+"_"+this.g,b=Wk[a];if(!b){b=-this.o;var c=this.a-b;b=Wk[a]=new lk(b,b,c,c);}return b};Pk.prototype.getPxClipRect=Pk.prototype.af;Pk.prototype.bg=function(){var a=this.sb;if(!a){var b=this.dg();a=0;var c=this.a;this.z&&(c-=a+=this.af().top);a=this.sb=dg(b.lf(new I(a,a)),b.lf(new I(c,c)));}return a};Pk.prototype.getGeoClipRect=Pk.prototype.bg;Pk.prototype.dg=function(){var a=this.v;if(!a){var b=this.a;a=this.v=new Yi(B,b);a.Qa(this.z);a.x=this.x*b;a.y=this.y*b;}return a};
  Pk.prototype.getPxProj=Pk.prototype.dg;Pk.prototype.$a=function(){return this.g};Pk.prototype.getPixelRatio=Pk.prototype.$a;Pk.prototype.xg=function(){var a=this.data;this.data=null;this.b=Ud;return a};Pk.prototype.releaseCanvas=Pk.prototype.xg;Pk.prototype.yg=function(){this.i={};delete this.f;this.c=Ud;};Pk.prototype.releaseData=Pk.prototype.yg;
  Pk.prototype.V=function(a){var b=a.getContext("2d"),c,d,e,f,g=0;Vk(this);if(this.b<this.c){var h=this.f;if(c=h.length){a.width=a.height=this.a;b.clearRect(0,0,this.a,this.a);var k=this.i;for(d=0;d<c;d++){var l=h[d];var m=l.gb();if(f=(e=k[m])?e.b:l.getGeometriesForTile(this)){if(e)l.Pb().me(this.b)&&(e.a=ch(l,f)),e=e.a;else {e=ch(l,f);var p;var q=f;for(var r=l.j?2:0,v=q.length;v--;){var w=q[v];if(w!==dh){var z=w.a;for(p=z.length;p--;)w=z[p],4<w.length&&(z[p]=Nk(w,.6,r));}}this.i[m]=new Uk(f,e);}if(e){b.save();
  q=l.j?this.O:this.C;for(m=0;m<f.length;m++)q.call(this,l,f[m],l.ua(),b);if(f=l.getLabels(this))for(l=b,m=f.length;m--;)for(r=f[m],q=r.size,l.font=q+"px "+r.font,l.fillStyle=r.color,l.textAlign="center",l.translate(r.x,r.y),l.rotate(r.angle),q=r.lineHeight||1.375*q,v=r.lines,r=v.length;r--;)l.fillText(v[r],0,r*q);b.restore();}g|=e;}}}this.data=g?a:null;this.s=this.b=this.c;}else this.data&&(g=1);return 0<g};Pk.prototype.render=Pk.prototype.V;
  Pk.prototype.C=function(a,b,c,d){var e;c.cf&&(Xk(d,c,this.g),Yk(b,d,!1,!0,!1,this.a,this.o));c.bf&&(e=a.g)&&e.Sb&&(Zk(d,e),$k(this,d,b,e,c.lineWidth));};
  Pk.prototype.O=function(a,b,c,d){var e=c.Sb,f=c.cf,g,h=this.a,k=this.o;if(b===dh)e&&(Zk(d,c),d.fillRect(0,0,h,h));else {f&&Xk(d,c,this.g);if(c.bf&&(g=a.g)){var l=c.lineWidth;g.Sb||(g=null);}a=b.c;if(a===Td){if(f||e)Zk(d,c),Yk(b,d,!0,f,e,h,this.o);g&&(Zk(d,g),$k(this,d,b,g,l,0));}else e&&(Zk(d,c),Yk(b,d,!0,!1,e,h,k,0,a)),f&&Yk(b,d,!1,f,!1,h,k,a),g&&(Zk(d,g),$k(this,d,b,g,l,a));}};
  function Yk(a,b,c,d,e,f,g,h,k){var l=a.a,m=-g;g=f+g;h=h||0;k===B&&(k=l.length);if(e&&a===dh)b.fillRect(0,0,f,f);else if(k>h){b.beginPath();for(f=h;f<k;f++){var p=l[f];var q=p.length;if(p===vi)b.moveTo(m,m),b.lineTo(m,g),b.lineTo(g,g),b.lineTo(g,m);else {var r=p[0];b.moveTo(r.x,r.y);for(h=1;h<q;h++)r=p[h],b.lineTo(r.x,r.y);}c&&b.closePath();}c&&e&&b.fill(a.b!==Td?"evenodd":"nonzero");d&&b.stroke();}}
  function Xk(a,b,c){var d;a.strokeStyle=b.strokeColor;a.lineWidth=b.lineWidth*c;a.lineCap=b.lineCap;a.lineJoin=b.lineJoin;a.miterLimit=b.miterLimit;a.setLineDash&&(d=b.lineDash)!==ff&&(a.setLineDash(d),a.lineDashOffset=b.lineDashOffset);}function Zk(a,b){a.fillStyle=b.fillColor;}
  function $k(a,b,c,d,e,f){var g=e*d.width/2;e=e*d.length/2;var h=e/2;d=2*e*d.frequency;var k=Cd(Dd(e,2)+Dd(g,2));a=a.a-k;a=new lk(k,k,a,a);c=c.a;var l,m,p,q,r,v,w,z=Md/2;f=f||0;for(k=c.length;k-- >f;){var J=0;var G=c[k];if(m=l=G.length){var U=G;m=U.length;for(p=0;--m;)p+=U[m].Za(U[m-1]);m=(U=p)>=d;}if(m)for(m=vd(yd(U/d),1E3),m=U/(m+1),p=m/2;--l;){for(q=(r=G[l]).Za(v=G[l-1]);p<=J+q;){var X=r.x+(v.x-r.x)*(w=(p-J)/q);w=r.y+(v.y-r.y)*w;a.Pf(X,w)&&(b.save(),b.translate(X,w),b.rotate(-Jd((v.y-r.y)/(r.x-v.x))+
  (r.x<v.x?z:-z)),b.beginPath(),b.moveTo(-g,-e),b.lineTo(0,e),b.lineTo(g,-e),b.lineTo(0,-h),b.closePath(),b.fill(),b.restore());p+=m;}J+=q;}}}var al=[];
  Pk.prototype.Ga=function(a,b,c){for(var d=this.f,e=d.length,f,g,h,k,l,m,p=ff,q,r=this.g;e--;)if(g=d[e],g.Dc(!0)&&(h=this.i[g.gb()])&&(k=h.b)){f=g.ua();m="none"!==f.fillColor&&g.j;q="none"===f.strokeColor?0:f.lineWidth*r;for(f=k.length;f--;){l=k[f];var v;if(!(v=m&&l===dh)&&(v=m||q)){var w;v=a;var z=b,J=m,G=q,U=l.b,X=l.c,xa=X!==Td,ia=l.a,gc=ia.length,wb=0,md=0,wi=!1;for(l=0;l<gc;l++){var Qe=ia[l];var Xb=l>=X;var Xf=!Xb&&l>=U;if(Qe===vi&&J)Xf?wb++:md++;else {var cd=Qe.length;al.length=2*cd;for(w=0;w<
  cd;w++){var Up=Qe[w];al[2*w]=Up.x;al[2*w+1]=Up.y;}w=J&&!Xb;Xb=xa&&!Xb?0:G;if(w||Xb)if(Xb=be(v,z,al,Xb,w),Xb===ae.EDGE||Xb===ae.VERTEX){wi=!0;break}else if(Xb===ae.SURFACE)if(Xf)wb++;else if(md++,U===Td)break}}v=wi||0<md&&!(wb%2);}if(v){p===ff&&(p=[]);p.push(g);break}}if(c&&p.length)break}return p};function bl(a,b){var c;bl.l.constructor.call(this,b);this.C=a;this.N=a=b.pixelRatio;this.tileSize=c=1<<xd(Vd((b.tileSize||256)*a));this.U=Bk(c,a);this.Zh=A(this.Zh,this);this.ni=A(this.ni,this);this.$h=A(this.$h,this);this.Yh=A(this.Yh,this);this.v=A(this.v,this);this.C.addEventListener(P.prototype.i.Ea,this.v,!1,this);this.c=[];this.m=new Dk(b.tileCacheSize||256,this.Zh);this.s=new Dk(b.dataCacheSize||512,this.ni);this.J=new xk(20,this.$h);this.a={};this.O=zk();}u(bl,Ak);
  bl.prototype.v=function(a){a.target.type===Pg.SPATIAL&&Wj(this,a.target);};bl.prototype.jb=function(a,b,c,d){var e=this.getTileKey(a,b,c),f;if(f=this.m.get(e,d)){if(d||f.le())return f;d||this.m.Uf(e);}if((f=this.s.get(e,d))&&(d||Rk(f)))return a=this.c.pop()||document.createElement("canvas"),f.V(a)||this.c.push(a),this.m.add(e,f,1),f;d||((f=this.a[e])?f.count++:(f=this.J.push([e,a,b,c],this.Yh),f.count=1,this.a[e]=f));};bl.prototype.requestTile=bl.prototype.jb;bl.prototype.rd=function(){};
  bl.prototype.Wc=function(a,b,c){this.Lf(this.getTileKey(a,b,c));};bl.prototype.cancelTile=bl.prototype.Wc;bl.prototype.Lf=function(a){var b;if(b=this.a[a])b.count--,b.count||(b.cancel(),delete this.a[a]);};bl.prototype.cancelTileByKey=bl.prototype.Lf;n=bl.prototype;n.$h=function(a,b){var c=b[0],d=b[1],e=b[2],f=b[3];c=this.m.get(c)||new Pk(c,d,e,f,this.tileSize,this.N,f+this.U,this.C);d=c.data||this.c.pop()||document.createElement("canvas");c.V(d)||this.c.push(d);b.push(c);a.done(c);};
  n.Yh=function(a,b){a=a.data[0];b&&this.m.add(a,b,1);delete this.a[a];Wj(this);};n.Zh=function(a,b){b.data&&this.c.push(b.xg());this.s.add(a,b,1);};n.ni=function(a,b){b.yg();};n.u=function(){for(var a in this.a)this.a[a].cancel();this.m.qa();this.s.qa();this.c.length=0;bl.l.u.call(this);};function cl(a,b){b=b||{};if(!a)throw new D(cl,0,a);this.tileSize=a.tileSize;this.c={};aj.call(this,{min:void 0!==b.min?b.min:a.min,max:void 0!==b.max?b.max:a.max,minWorldSize:this.tileSize,projection:b.cl,dark:b.dark,provider:a});}u(cl,aj);t("H.map.layer.BaseTileLayer",cl);cl.prototype.Te=function(a,b){var c=this.pixelProjection;if(!C(a,K))throw new D(this.Te,0,a);if(!E(b)){var d=c.gk();c.Qa(b);}a=dl(c.lb(a.Rb()),c.lb(a.Nb()));!E(d)&&c.Qa(d);return a};cl.prototype.geoRectToRect=cl.prototype.Te;
  cl.prototype.je=function(a,b){var c=Dd(2,yd(b)),d=this.tileSize;if(!C(a,lk))throw new D(this.je,0,a);if(E(b=+b))throw new D(this.je,1,b);b=yd(a.left/d);b===c&&--b;var e=yd(a.right/d);e===c&&--e;return new lk(b,Yd(yd(a.top/d),0,c-1),e,Yd(yd(a.bottom/d),0,c-1))};cl.prototype.getTileBounds=cl.prototype.je;cl.prototype.jb=function(a,b,c,d){return this.a.requestTile(a,b,c,d)};cl.prototype.Wc=function(a,b,c){this.a.cancelTile(a,b,c);};cl.prototype.cancelTile=cl.prototype.Wc;
  cl.prototype.ta=function(a,b){return this.a.getCopyrights?this.a.getCopyrights(a,b):null};cl.prototype.getCopyrights=cl.prototype.ta;function el(a,b,c,d,e){d=yd(d);var f=Dd(2,d),g=b.left,h=b.top,k=b.right;c=k+(c?f+(k===b.left?0:1):1);var l=b.bottom,m=[];if(e){var p=g+(1+k-g)/2+e.x/a.tileSize-.5;var q=h+(1+l-h)/2+e.y/a.tileSize-.5;}for(;g<c;){for(h=b.top;h<=l;)a=g%f,m.push([a,h,d,e?Ad(p-g)+Ad(q-h):0]),h++;g++;}return m}
  function ok(a,b,c){c=yd(c);a.pixelProjection.Qa(c);b=a.Te(b);var d=a.je(b,c);return el(a,d,b.left>b.right,c)}
  cl.prototype.$e=function(a,b,c,d,e,f){var g,h=[],k,l=this.a;f=null!=f?f:"__default__";var m=l.requestTile;if(!C(a,lk))throw new D(this.$e,0,a);if(E(c=+c))throw new D(this.$e,1,c);d||(g={});b=el(this,a,b,c,e);if(a=b.length)for(d||b.sort(fl),c=a;c--;)e=b[c],d||(g[l.yd.apply(l,e)]=!0),e[3]=+d,(k=m.apply(l,e))&&h.push(k);if(!d){d=g;var p;g=this.c[f]||{};for(p in g)g.hasOwnProperty(p)&&g[p]&&!d[p]&&this.a.cancelTileByKey(p);this.c[f]=d;}return {total:a,tiles:h}};cl.prototype.getProviderTiles=cl.prototype.$e;
  function fl(a,b){return b[3]-a[3]}function R(a){uc(this,R);R.l.constructor.call(this,a);this.ec=new gl;this.gc=A(this.gc,this);this.U=hl;this.createTileInternal=this.rd.bind(this);}u(R,Ak);t("H.map.provider.RemoteTileProvider",R);R.prototype.Yd=function(){return 1};R.prototype.getEntryWeight=R.prototype.Yd;var hl=new Dk(65536);R.prototype.m={};R.prototype.fa={};R.prototype.Ob=function(){return this.U};R.prototype.getCache=R.prototype.Ob;R.prototype.O=ba(3);R.prototype.gc=function(a){var b=this.uri;return !a.indexOf(b)&&"_"===a.charAt(b.length)};
  R.prototype.cacheFilter=R.prototype.gc;R.prototype.Xa=function(a,b){b.valid=!1;};R.prototype.reload=function(a){var b=this.getCache();a?b.qa(this.gc):b.forEach(this.Xa,this,this.gc);il(this);Wj(this,this,{isReload:!0});};R.prototype.reload=R.prototype.reload;R.prototype.fh=function(){return !1};R.prototype.MAX_STORE_TIME=Infinity;R.prototype.ge=function(){return this.ec};R.prototype.ma=function(a,b){b(a);};
  function pk(a,b,c,d,e,f){d=~~d;return a.requestInternal(b,c,d,function(g,h){a.ge().put(a.yd(b,c,d),{raw:h&&h.raw||g,timestamp:x.Date.now()},e,f);},f,0)}R.prototype.requestInternal=R.prototype.K;
  R.prototype.jb=function(a,b,c,d){var e=this;var f=this.getCache();if(E(a=+a))throw new D(this.jb,0,a);if(E(b=+b))throw new D(this.jb,0,b);if(E(c=+c))throw new D(this.jb,0,c);c=~~c;var g=this.getTileKey(a,b,c);f=f.get(g);f&&f.valid||d||this.m[g]||(f=B,this.requestTileAsPromise(a,b,c,d).then(function(h){Wj(e,h);},hd));return f};R.prototype.requestTile=R.prototype.jb;
  R.prototype.ll=function(a,b,c,d){var e=this,f=this.getCache(),g=this.getTileKey(a,b,c),h=this.m,k=this.fa,l,m=this.ge();if(k[g])return k[g];k[g]=k=new Ob(function(p,q){function r(v){var w,z;var J=function(G,U){z=e.createTileInternal(a,b,c,G,U);z.key=g;f.add(g,z,e.Yd(G));p(z);jl(e,g);};v&&(w=x.Date.now()-v.timestamp);v&&w<e.MAX_STORE_TIME?e.ma(v.raw,J):(w&&m.remove(g),(z=f.get(g))&&z.valid||d?p(z||null):h[g]=e.requestInternal(a,b,c,J,q));}l=m.get(g,r,r);});h[g]||(h[g]=l);k.then(function(){jl(e,g);},function(){jl(e,
  g);});return k};R.prototype.requestTileAsPromise=R.prototype.ll;R.prototype.kl=function(a,b){var c=this,d=a.id,e=a.tile.coords;return new Ob(function(f,g){c.ll(e.x,e.y,e.z,b).then(function(h){var k=y;h=h.Va?h.Va():h.data;for(var l=h.length,m;l--;)if(m=h[l],m.gb()===d){k=m;break}f(k);},g);})};R.prototype.requestObjectAsPromise=R.prototype.kl;function jl(a,b){delete a.m[b];delete a.fa[b];}function il(a){for(var b in a.m)a.gc(b)&&a.cancelTileByKey(b);}var kl={cancel:function(){}};
  R.prototype.rd=function(a,b,c,d){return new Lk(a,b,c,d)};R.prototype.Lf=function(a){var b=this.m[a];b&&(b.cancel(),jl(this,a));};R.prototype.cancelTileByKey=R.prototype.Lf;R.prototype.Wc=function(a,b,c){this.cancelTileByKey(this.getTileKey(a,b,c));};R.prototype.cancelTile=R.prototype.Wc;R.prototype.u=function(){R.l.u.call(this);this.getCache().qa(this.gc);il(this);};function gl(){}R.NullStorage=gl;gl.prototype.get=function(a,b){b();return kl};gl.prototype.get=gl.prototype.get;
  gl.prototype.put=function(a,b,c){c&&c();};gl.prototype.put=gl.prototype.put;gl.prototype.clear=function(a){a&&a();};gl.prototype.clear=gl.prototype.clear;gl.prototype.remove=function(a,b){b&&b();};gl.prototype.remove=gl.prototype.remove;function sk(a){sk.l.constructor.call(this,a);a&&(this.C={crossOrigin:a.crossOrigin||"anonymous",headers:a.headers||{}},this.v=a.getURL);if(!Ca(this.v))throw new D(sk,0,"getURL");Xj(this,a.opacity);this.c=x.URL||x.webkitURL;a=this.C.crossOrigin;if(!(a="anonymous"===a||"use-credentials"===a)){a=this.v(0,0,0);var b=window.location,c=document.createElement("a");c.href=a;a=c.hostname===b.hostname&&c.port===b.port&&c.protocol===b.protocol;}(this.N=a&&!!rf.prototype.b.arraybuffer&&!!this.c)&&this.Ob().re(A(this.Aa,
  this));}u(sk,R);t("H.map.provider.ImageTileProvider",sk);sk.prototype.qc=function(a){Xj(this,a);};sk.prototype.setOpacity=sk.prototype.qc;sk.prototype.dd=function(){return this.j};sk.prototype.getOpacity=sk.prototype.dd;sk.prototype.pf=df;sk.prototype.providesRasters=sk.prototype.pf;sk.prototype.Yd=function(){return this.tileSize};sk.prototype.getEntryWeight=sk.prototype.Yd;
  sk.prototype.K=function(a,b,c,d,e,f){var g=this,h=this.v(a,b,c),k;a=null;if(h){var l=x.setTimeout(function(){g.N?(k=new rf("arraybuffer",h,f,g.C),k.then(function(m){return m.blob()}).then(function(m){var p=new Image;p.onload=A(d,null,p,{raw:m});p.onerror=A(e,null,"bad url");try{p.src=g.c.createObjectURL(m);}catch(q){}},e)):(k=new rf("image",h,f,g.C),k.then(d,e));},150);a={cancel:function(){k?k.cancel():x.clearTimeout(l);}};}else d(null);return a};sk.prototype.requestInternal=sk.prototype.K;
  sk.prototype.ma=function(a,b){var c=new Image;c.onload=function(){b(this);};c.src=this.c.createObjectURL(a);};sk.prototype.Aa=function(a,b){(a=b.data)&&a instanceof HTMLImageElement&&this.c.revokeObjectURL(a.src);};function lk(a,b,c,d){this.left=+a;this.top=+b;this.right=+c;this.bottom=+d;}t("H.math.Rect",lk);lk.prototype.set=lk;lk.prototype.set=lk.prototype.set;lk.prototype.Rb=function(){return this.c||(this.c=new I(this.left,this.top))};lk.prototype.getTopLeft=lk.prototype.Rb;lk.prototype.Nb=function(){return this.a||(this.a=new I(this.right,this.bottom))};lk.prototype.getBottomRight=lk.prototype.Nb;lk.prototype.Pf=function(a,b){return this.left<=a&&this.right>=a&&this.top<=b&&this.bottom>=b};
  lk.prototype.containsXY=lk.prototype.Pf;function dl(a,b){return new lk(a.x,a.y,b.x,b.y)}lk.fromPoints=dl;lk.prototype.clone=function(){return new lk(this.left,this.top,this.right,this.bottom)};lk.prototype.clone=lk.prototype.clone;function ll(a,b){cl.call(this,a,b);}u(ll,cl);t("H.map.layer.TileLayer",ll);ll.prototype.Id=function(a,b,c,d,e){if(!C(a,K))throw new D(this.Id,0,a);if(E(b=+b))throw new D(this.Id,1,b);b=yd(b);this.pixelProjection.Qa(b);a=this.Te(a);var f=this.je(a,b);return this.$e(f,a.left>a.right,b,c,d,e)};ll.prototype.requestTiles=ll.prototype.Id;function ml(a,b){b=b?Ua(b):{};b.tileSize=b.tileSize||256;b.pixelRatio=b.pixelRatio||Se();b.max=24;this.c=new bl(a,b);this.f=new ll(this.c);b.minWorldSize=this.c.tileSize;b.provider=a;ml.l.constructor.call(this,b);this.tileSize=this.f.tileSize;this.j=A(this.j,this);this.c.addEventListener(this.c.i.Ea,this.j);a.addEventListener(a.i.Ea,this.j);}u(ml,aj);t("H.map.layer.ObjectLayer",ml);ml.prototype.j=function(a){a.currentTarget!==this.c&&a.target.type===Pg.SPATIAL||this.g();};var nl={markers:ff,total:0};
  ml.prototype.Lc=function(a,b,c){var d=this.a,e;return d.providesMarkers()&&(e=d.requestMarkers(a,b,!0,c)).length?{markers:e,total:e.length}:nl};ml.prototype.requestMarkers=ml.prototype.Lc;ml.prototype.Kc=function(a,b,c){var d=this.a,e;return d.providesDomMarkers()&&(e=d.requestDomMarkers(a,b,!0,c)).length?{markers:e,total:e.length}:nl};ml.prototype.requestDomMarkers=ml.prototype.Kc;var ol={tiles:ff,total:0};
  ml.prototype.Id=function(a,b,c,d){if(this.a.providesSpatials()){var e=this.f.Id(a,b,c,d);c||(c=this.c,e=zk(),33<e-c.O&&(tk(c.J),c.O=e),e=this.f.Id(a,b,!0,d));}else e=ol;return e};ml.prototype.requestTiles=ml.prototype.Id;ml.prototype.jb=function(a,b,c,d){return this.f.jb(a,b,c,d)};ml.prototype.requestTile=ml.prototype.jb;ml.prototype.Wc=function(a,b,c){this.f.Wc(a,b,c);};ml.prototype.cancelTile=ml.prototype.Wc;var pl={overlays:ff,total:0};
  ml.prototype.Hd=function(a,b,c){var d=this.a,e=pl;d.providesOverlays&&d.providesOverlays()&&(a=d.requestOverlays(a,b,!0,c),b=a.length)&&(e={overlays:a,total:b});return e};ml.prototype.requestOverlays=ml.prototype.Hd;ml.prototype.u=function(){this.c.B();this.f.B();this.a.dispose();ml.l.u.call(this);};function ql(a,b,c,d){var e=new lk(0,0,0,0);ql.l.constructor.call(this);if(!a)throw new D(ql,0,a);if(!b)throw new D(ql,1,b);if(!c)throw new D(ql,2,c);if("object"!==typeof d)throw new D(ql,3,d+" is not an object");if("number"!==typeof d.pixelRatio)throw new D(ql,3,d.pixelRatio+" is not a number");this.sa=d.pixelRatio;this.zoom=0;this.ib=Bd(this.sa)/Ld;this.ra=new Yi;this.yb={1:e.clone(),2:e.clone(),4:e.clone()};this.m=new I(.5,.5);this.g=a;rl(this,this.sa);this.uc=A(this.uc,this);this.lc=A(this.lc,
  this);this.Bb=A(this.Bb,this);a.startInteraction=this.uc;a.interaction=this.lc;a.endInteraction=this.Bb;a.addEventListener(a.a.Ea,this.U,!1,this);this.getCapabilities=this.getCapabilities;this.capture=this.capture;this.zoomAt=this.Ae;this.relaunch=this.ha;this.dispose=this.B;this.screenToGeo=this.Wa;this.geoToScreen=this.Fa;this.screenToLookAtData=this.Eg;this.O=b;this.tc=A(this.tc,this);this.control=A(this.control,this);this.Ab=A(this.Ab,this);b.startControl=this.tc;b.control=this.control;b.endControl=
  this.Ab;b.addEventListener(b.a.Ea,this.bh,!1,this);this.c=c;this.qg=A(this.qg,this);this.ef=A(this.ef,this);this.ff=A(this.ff,this);this.pg=A(this.pg,this);c.addEventListener(aj.prototype.b.Ea,this.qg,!1,this);c.addEventListener(c.b.Be,this.ef,!1,this);c.addEventListener(c.b.De,this.ff,!1,this);c.addEventListener(c.b.Ee,this.pg,!1,this);}u(ql,F);t("H.map.render.RenderEngine",ql);
  function rl(a,b){var c=a.g,d=c.width,e=c.height,f=c.padding,g=f.top,h=f.left,k=f.bottom;f=f.right;c=c.margin;var l=-(d+h-f)/2<<0,m=-(e+g-k)/2<<0;d+=l;e+=m;a=a.yb;a[1].set((l-c)*b,(m-c)*b,(d+c)*b,(e+c)*b);a[2].set(l*b,m*b,d*b,e*b);a[4].set((l+h)*b,(m+g)*b,(d-f)*b,(e-k)*b);}ql.prototype.U=function(){rl(this,this.sa);};
  ql.prototype.u=function(){var a=this.g,b=this.O,c=this.c;a.removeEventListener(a.a.Ea,this.U,!1,this);a.startInteraction===this.uc&&(a.startInteraction=kk.prototype.uc);a.interaction===this.lc&&(a.interaction=kk.prototype.lc);a.endInteraction===this.Bb&&(a.endInteraction=kk.prototype.Bb);b.removeEventListener(b.a.Ea,this.bh,!1,this);b.startControl===this.tc&&(b.startControl=sl.prototype.tc);b.control===this.control&&(b.control=sl.prototype.control);b.endControl===this.Ab&&(b.endControl=sl.prototype.Ab);
  c.removeEventListener(aj.prototype.b.Ea,this.qg,!1,this);c.removeEventListener(c.b.Be,this.ef,!1,this);c.removeEventListener(c.b.De,this.ff,!1,this);c.removeEventListener(c.b.Ee,this.pg,!1,this);};ql.prototype.Di=function(a){this.Sg=a;};ql.prototype.setAnimationCallback=ql.prototype.Di;ql.prototype.Ai=function(){this.Sg=void 0;};ql.prototype.resetAnimationCallback=ql.prototype.Ai;ql.prototype.control=function(){};ql.prototype.capture=function(){return Yb(Error("not implemented"))};
  function tl(a,b){a.style.transition="opacity 1.5s";Ce(a,"transitionend",b,!1);a.style.opacity=0;}var ul={ZOOM:1,HEADING:2,TILT:4,INCLINE:8,COORD:16};ql.InteractionModifiers=ul;n=ql.prototype;n.zk={pj:"render"};n.qg=function(a){this.Rk(a);this.ha();};n.ef=function(a){this.jf(a.idx,a.added);};n.ff=function(a){this.oi(a.idx,a.removed,a.type===this.c.b.Ee);};n.pg=function(a){a.removed&&this.ff(a);this.ef(a);};n.Rk=hd;n.jf=function(a,b){this.Mh(a,b);0===a&&this.Jb();C(b,aj)&&vl(this,b,!0);this.te();this.ha();};
  n.Jb=function(){var a=this.c.Na();if(0<a.length){var b=a[0].max;this.Pg=a[0].min;this.Tg=b;}else a=this.getCapabilities().lookAt.zoom,b=a.max,this.Pg=a.min,this.Tg=b;a=wl(this,this.zoom);a!==this.zoom&&(this.zoom=a,this.ra.Qa(a),this.bb());};n.bb=function(a){this.J=this.mb();a&&(this.J.position=a);this.J.zoom=this.zoom-this.ib;this.J.position.alt=0;};n.Nl=0;n.heading=180;n.mb=function(){return xl(this,{position:this.ra.projection.vg(this.m),zoom:this.zoom,tilt:this.Nl,heading:this.heading})};
  function xl(a,b){b.tilt=yl(a,b.tilt);b.heading=zl(a,b.heading);b.incline=a.getCapabilities().lookAt.incline.min;return b}function wl(a,b){var c=a.getCapabilities().lookAt.zoom;return Yd(b,wd(c.min,a.Pg),vd(c.max,a.Tg))}function yl(a,b){a=a.getCapabilities().lookAt.tilt;return Yd(b,a.min,a.max)}function zl(a,b){a=a.getCapabilities().lookAt.heading;return Yd((b%360+360)%360,a.min,a.max)}
  function vl(a,b,c){c=c?b.addEventListener:b.removeEventListener;c.call(b,b.b.nj,a.pi,!1,a);c.call(b,b.b.mj,a.pi,!1,a);}n.Mh=hd;n.oi=hd;n.ap=function(a,b){this.C={before:a,after:b};};ql.prototype.setOnRenderCallbacks=ql.prototype.ap;var Al={P2D:0,WEBGL:1,HARP:2};ql.EngineType=Al;var Bl={lookAt:{zoom:{min:-8,max:24},tilt:{min:0,max:85},incline:{min:0,max:0},heading:{min:0,max:360}},interaction:{ZOOM:ul.ZOOM,COORD:ul.COORD},capture:!0};t("H.map.render.webgl.capabilities",Bl);function Cl(a){var b,c=this,d=x.H.gl;Cl.l.constructor.call(this);this.a=b=d.Scene.create(x.URL.createObjectURL(nf(JSON.stringify(Dl))),{viewport:a.viewport,container:a.vc,disableRenderLoop:!0,devicePixelRatio:a.devicePixelRatio,logLevel:"error"});a.Ko&&b.subscribe({load:a.Ko});b.subscribe({view_complete:function(){c.g=!0;a.Tk();}});var e=b.requestRedraw;b.requestRedraw=function(){e.apply(b);a.Tk();};this.i=A(this.i,this);this.f=A(this.f,this);this.j=0;this.c={};this.b={};}u(Cl,nd);Cl.prototype.g=!1;
  function El(a){a=a.a.sources;var b;for(b in a){var c=a[b];if(c.hasPendingCommands&&c.hasPendingCommands())return !0}return x.H.gl.Task.hasPendingTasks()}Cl.prototype.V=function(){var a=x.H.gl.Task;this.a.immediateRedraw();a.setState({user_moving_view:this.a.view.user_input_active});a.processAll();return this.g&&!this.a.dirty&&!this.a.building&&!El(this)&&!Object.keys(this.b).length};function Fl(a){a.g=!1;a.a.resetViewComplete();}function Gl(a){return a.a.view}
  function Hl(a,b){function c(){var e=b.Na(),f={},g={},h,k,l,m=++a.j,p,q;vh(g,Dl);for(k=0;k<e.length;k++){var r=e[k];if(h=r.ga()){var v=h.ub();if(v.getState()===Qh.READY){var w=v.vd();if(!Ta(w)){delete w.cameras;delete w.camera;f[k]=w=Hh(w,k);!C(r,ml)&&w.sources&&Ih(w,h.uid);for(l in w.sources){var z=w.sources[l];z.max_zoom=vd(h.max,Bl.lookAt.zoom.max);z.max_display_zoom=r.max;z.min_display_zoom=r.min;if(q=h.tileSize)2<=d&&256<q&&h instanceof sk&&(q/=2),z.tile_size=q;}(p=v.hc())&&Jh(w,p);vh(g,w);}}}}vh(g.layers.skybox.draw.skybox.color,
  g.scene.sky);a.a.config=g;return a.a.updateConfig().then(function(){var J={},G,U;if(m!==a.j)return !1;a.j=0;for(U in f){r=e[+U];var X=f[U].sources;for(G in X)if(X=a.a.sources[G])J[G]=X,X.initialize&&r.getProvider()&&X.initialize(r.getProvider(),a.i,a.a.getWorkers().length,X.tiled?B:a.a.tile_manager.getWorkerForTile(y,X));}for(G in a.c)!J[G]&&a.c[G].dispose&&a.c[G].dispose();a.c=J;return !0})}var d=a.a.pixelRatio();a.a.initialized?c():a.a.load(y,{blocking:!1}).then(c);}
  Cl.prototype.i=function(a,b,c){var d=this,e=this.a.sources[a],f=c&&c.isReload;b?!0!==this.b[a]&&(this.b[a]||(this.b[a]={Ml:{},vj:[]}),C(b,Lk)?this.b[a].Ml[b.x+"/"+b.y+"/"+b.z]=!0:(b=b.boundingBox,this.b[a].vj.push(new K(b[0],b[1],b[2],b[3])))):this.b[a]=!0;e&&e.has_volatile_data?Il(this,f):(x.clearTimeout(this.m),this.m=x.setTimeout(function(){return Il(d,f)},Jl));};var Jl=100;
  Cl.prototype.f=function(a){var b=!1,c=this.b[a.source.name],d=x.H.gl;if(c)if(!0===c)b=!0;else {var e=d.Tile.coord(d.Geo.wrapTile(a.coords));b=!!c.Ml[e.key];if(!b){var f=d.Geo.getTileBoundingBox(e,a.source.tile_size,Ug.MAX_LINE_WIDTH/2);f=dg(f.getTopLeft(),f.getBottomRight());b=c.vj.some(function(g){return g.Ad(f,!0)||f.pd(g.fb(),!0)});}}return b};function Il(a,b){var c=a.a.tile_manager;c.removeTiles(a.f);c.updateTilesForView();b&&c.removeCachedTiles(a.f);Fl(a);a.b={};}Cl.prototype.vd=function(){return this.a.config};
  function Kl(a,b,c,d){a.a.getFeatureAt(b,c,d);a.a.update();}function Ll(a){return a.a.screenshot(void 0).then(function(b){return new Ob(function(c,d){new Dj(URL.createObjectURL(b.blob),function(e,f){1===e?c(f.getData()):d();},!1);})})}Cl.prototype.$a=function(){return this.a.pixelRatio()};Cl.prototype.u=function(){var a=this.c;Cl.l.u.call(this);this.a.destroy();this.b={};a&&Object.keys(a).forEach(function(b){a[b].dispose();});x.clearTimeout(this.m);this.c=this.a=null;};
  var Dl={scene:{background:{color:"#FFFFFF"},sky:{zenith:"#347BC0",horizon:"#EDF2F9",fog:"#FFFFFF"}},lights:{default_light:{type:"directional",name:"default_light",visible:!0}},camera:{type:"perspective"},styles:{},fonts:{},sources:{skybox:{type:"SkyBox"}},layers:{skybox:{data:{source:"skybox"},draw:{skybox:{color:{}}}}},global:{}};var Zj={FEATURE:1,SOURCE:2,PROVIDER:3};t("H.map.provider.PickingMode",Zj);function Ml(a){return a}t("H.util.animation.ease.LINEAR",Ml);t("H.util.animation.ease.EASE_IN_QUAD",function(a){return a*a});function Nl(a){return -a*(a-2)}t("H.util.animation.ease.EASE_OUT_QUAD",Nl);t("H.util.animation.ease.EASE_IN_OUT_QUINT",function(a){a*=2;return 1>a?Dd(a,5)/2:(a-=2,Dd(a,5)/2+1)});function Ol(a){return 1-Math.sqrt(1-a*a)}function Pl(a){return Cd(2*a-a*a)}t("H.util.animation.ease.EASE_OUT_CIRC",Pl);function Ql(a){return 1-Math.cos(a*Math.PI/2)}
  function Rl(a){return Math.sin(a*Math.PI/2)}function Sl(a,b){this.a={tilt:Tl(a.tilt,b.tilt),heading:Tl(a.heading,b.heading),zoom:b.zoom-a.zoom};var c=this.b=Zf(a.position),d=b.position;a=d.lat*Rd;var e=c.lat*Rd;d=d.lng*Rd-c.lng*Rd;c=Fd(d)*Hd(a);a=Hd(e)*Fd(a)-Fd(e)*Hd(a)*Hd(d);a=Math.atan2(c,a);this.j=(0<=a?a:Pd+a)*Sd;this.c=this.b.Za(b.position);b=this.a.zoom;this.i=0===b?this.f:Object.assign({},this.f,{zoom:0>b?Pl:Ol,position:0>b?Ql:Rl});this.g=Object.assign({},{tilt:0,heading:0,zoom:0});}
  function Tl(a,b){a=b-a;return -180<a&&180>=a?a:180<a?a-360:a+360}Sl.prototype.f={tilt:Ml,heading:Ml,zoom:Ml,position:Ml};function Ul(a,b){if(E(this.x=+a))throw new D(Ul,0,a);if(E(this.y=+b))throw new D(Ul,1,b);}Ul.prototype.add=function(a){return new Ul(this.x+a.x,this.y+a.y)};Ul.prototype.a=function(a){if(!C(a,Ul))throw new D(this.a,0,a);a=this.b(a);return a.x+a.y};Ul.prototype.b=function(a){if(!C(a,Ul))throw new D(this.b,0,a);return new Ul(this.x*a.x,this.y*a.y)};Ul.prototype.Qa=function(a){return new Ul(this.x*a,this.y*a)};function Vl(a){return Cd(a.a(a))}function Wl(a){a=a||gf;this.sb=tc(a.Fo)?a.Fo:3;this.aa=tc(a.Do)?a.Do:300;this.s=tc(a.op)?a.op:3;this.v=tc(a.kp)?a.kp:50;this.f=[];this.clear();}t("H.map.render.InteractionUtils",Wl);Wl.prototype.io=function(){return this.c};Wl.prototype.isGestureDetected=Wl.prototype.io;Wl.prototype.start=function(a,b){var c=ul.HEADING,d=ul.TILT;this.a&&this.clear();this.i=a;this.m=!!b;this.a=!0;this.c=!(a&(c|d))||a===c||a===d;};Wl.prototype.start=Wl.prototype.start;
  Wl.prototype.store=function(a,b,c,d,e){var f=!1;if(this.a){a=new Xl(a,b,c,d,e);f=a.c;this.o=this.b;this.b=a;if(this.g){if(this.j=!0,f){b=this.i;var g=this.c;if(!g&&this.j){e=ul.HEADING;var h=ul.TILT;c=ul.COORD;d=ul.ZOOM;var k=b&(c|h)?this.ce(!0):Yl;var l=b&d?this.Xf(!0):1;var m=b&e?Ad(this.uh(!0)):0;var p=Ad(k.x);var q=Ad(k.y);k=10<p||10<q;p=10<q&&q>3*p;l=.8>l||1.2<l;m=7<m;b&h&&(m||l||k&&!p?Zl(this,h):p&&(Zl(this,~h>>>0),g=!0));!g&&b&e&&b&(c|d)&&(l||k?(Zl(this,e),g=!0):m&&(Zl(this,h),g=!0));this.c=
  g;}}}else this.g=a,f||(this.c=!0);this.m&&this.f.push(a);}return f};Wl.prototype.store=Wl.prototype.store;Wl.prototype.clear=function(){this.f.length=0;this.a=this.m=this.j=this.c=!1;this.g=this.o=this.b=void 0;};Wl.prototype.clear=Wl.prototype.clear;Wl.prototype.Hc=function(a){return 0<(this.i&a)};Wl.prototype.isModifierEnabled=Wl.prototype.Hc;function Zl(a,b){a.i^=a.i&b;}Wl.prototype.va=function(){return this.a};Wl.prototype.isRunning=Wl.prototype.va;var Yl=oc(new Ul(0,0));
  Wl.prototype.zc=function(){var a;if(this.m){var b=this.f;var c=b.length;var d=0;for(a=new Ul(0,0);--c&&d<this.s;)a=a.add($l(b[c-1],b[c])),d++;}else a=this.ce();b=a;c=Vl(b);return 0!==c?new Ul(b.x/c,b.y/c):b};Wl.prototype.getDirection=Wl.prototype.zc;
  Wl.prototype.Eb=function(a){a=a||zk();var b,c;if(this.m){var d=this.f;var e=this.f.length;var f=this.f[e-1];for(c=b=0;--e&&b<this.s;)c+=Vl($l(d[e],d[e-1])),b++;d=c/b;}else f=this.b,d=Vl(this.ce());return d=d>=this.sb&&a-f.timestamp<=this.v?d>this.aa?this.aa:d:0};Wl.prototype.getSpeed=Wl.prototype.Eb;Wl.prototype.Wf=function(){return this.b?am(this.b):B};Wl.prototype.getBifocalCenter=Wl.prototype.Wf;Wl.prototype.ce=function(a){return (a=a?this.g:this.o)?$l(a,this.b):new Ul(0,0)};
  Wl.prototype.getMoveVector=Wl.prototype.ce;Wl.prototype.Xf=function(a){var b=1;if(this.j){var c=this.b;a=a?this.g:this.o;if(a=bm(a))if(c=bm(c))b=c/a;}return b};Wl.prototype.getBifocalScaling=Wl.prototype.Xf;Wl.prototype.uh=function(a){if(this.j){var b=a?this.g:this.o,c=this.b;a=b.b;var d=c.b,e=0;a&&d&&(b=b.a,c=c.a,e-=Kd(d.y-c.y,d.x-c.x)*Sd-Kd(a.y-b.y,a.x-b.x)*Sd);a=e;}else a=0;return a};Wl.prototype.getBifocalRotation=Wl.prototype.uh;
  function Xl(a,b,c,d,e){this.a=new I(a,b);c!==B&&(this.b=new I(c,d),this.c=!0);this.timestamp=e!==B?e:zk();}Xl.prototype.c=!1;function am(a){var b=a.a;return (a=a.b)?new I(b.x-(b.x-a.x)/2,b.y-(b.y-a.y)/2):B}function cm(a,b){var c=a.a;return (a=a.b)&&a.Za(b)<c.Za(b)?a:c}function $l(a,b){var c=a.b,d=b.b;d&&c?(b=am(b),a=am(a)):c?(b=b.a,a=cm(a,b)):d?(a=a.a,b=cm(b,a)):(b=b.a,a=a.a);return new Ul(b.x-a.x,b.y-a.y)}function bm(a){var b=a.b;return b?a.a.Za(b):0}function dm(){F.call(this);this.reset();}u(dm,F);dm.prototype.start=function(a,b){this.a&&this.reset();E(a-b)||(this.b=+a,this.c=+b);this.a=!0;};dm.prototype.reset=function(){this.a=!1;this.b=this.c=null;this.f=new em(0,0,0,0,0,0);};dm.prototype.va=function(){return this.a};dm.prototype.g={Rg:"animationupdate"};function fm(a){fm.l.constructor.call(this,dm.prototype.g.Rg);this.c=a;}u(fm,rd);
  dm.prototype.set=function(a,b,c,d,e,f){var g=this.f;this.a&&(a=new em(a/1E3,b/1E3,c/1E3,d/1E3,e/1E3,f/1E3),g.oa(a)||(this.f=a,this.dispatchEvent(new fm(gm(this)))));};function gm(a){return x.Object.create(a.f)}dm.prototype.Eb=function(){return gm(this).Eb()};dm.prototype.zc=function(){var a=gm(this),b=this.Eb()||1;return new em(a.nb/b,a.ob/b,a.pb/b,a.ue,a.ve,a.wf)};dm.prototype.u=function(){this.reset();dm.l.u.call(this);};
  function em(a,b,c,d,e,f){this.nb=a;this.ob=b;this.pb=c;this.ue=d;this.ve=e;this.wf=f;}em.prototype.Eb=function(){return Cd(this.nb*this.nb+this.ob*this.ob+this.pb*this.pb)};em.prototype.zc=function(){var a=this.Eb()||1;return new em(this.nb/a,this.ob/a,this.pb/a,this.ue,this.ve,this.wf)};em.prototype.oa=function(a){return !!a&&this.nb===a.nb&&this.ob===a.ob&&this.pb===a.pb&&this.ue===a.ue&&this.ve===a.ve&&this.wf===a.wf};function hm(a,b,c,d){hm.l.constructor.call(this);this.vc=a;this.sa=d;this.a=a.appendChild(this.createElement(a.ownerDocument));this.yf(b,c);}u(hm,nd);hm.prototype.L=function(){return this.a};hm.prototype.yf=function(a,b){this.size?(this.size.w=a,this.size.h=b):this.size=new Ki(a,b);this.Dl(this.a,this.a.style,a,b,this.sa);};hm.prototype.setSize=hm.prototype.yf;n=hm.prototype;n.Db=function(){return this.size};n.$a=function(){return this.sa};n.tk=!0;
  n.wb=function(a){a!==this.tk&&(this.a.style.display=a?"block":"none",this.tk=a);};n.ai=1;n.qc=function(a){this.ai!==a&&(this.Ak(a),this.ai=a);};n.dd=function(){return this.ai};n.ye=function(a){this.a.style.zIndex=a;};hm.prototype.setZIndex=hm.prototype.ye;n=hm.prototype;n.fk=function(){return +this.a.style.zIndex};n.Zc=function(){};n.clear=function(){};n.u=function(){this.clear();this.vc.removeChild(this.a);this.yf(0,0);this.a=this.vc=null;hm.l.u.call(this);};n.hl=0;n.Dg=function(){++this.hl;};
  n.release=function(){--this.hl||this.B();};function im(a,b,c,d){im.l.constructor.apply(this,arguments);}u(im,hm);t("H.map.render.dom.Surface",im);n=im.prototype;n.Xd=function(){return "dom"};n.createElement=function(a){a=a.createElement("DIV");a.style.position="absolute";a.style.pointerEvents="none";return a};n.Dl=function(a,b,c,d){b.width=c+"px";b.height=d+"px";};n.Ak=function(a){this.a.style.opacity=a;};
  n.Zc=function(a,b,c){var d=this.sa,e=a.style;e[xf("transform")]="matrix(1,0,0,1,"+b/d+","+c/d+")";a.parentNode!==this.a&&(e.position="absolute",this.a.appendChild(a),this.a.style.pointerEvents="auto","auto"===getComputedStyle(a).pointerEvents&&(a.style.pointerEvents="all"),this.a.style.pointerEvents="none");};n.clear=function(a){a?this.a.removeChild(a):this.a.innerHTML="";};function jm(a,b,c,d,e,f){var g=e||"2d";jm.l.constructor.apply(this,arguments);this.b=this.a.getContext(g,f);this.c="2d"===g;this.f=g;this.uo=f;}u(jm,hm);n=jm.prototype;n.createElement=function(a){a=a.createElement("canvas");var b=a.style;b.position="absolute";b.top=b.left="0";return a};n.Dl=function(a,b,c,d,e){a.width=wd(c,1);a.height=wd(d,1);b.width=xd(c/e)+"px";b.height=xd(d/e)+"px";};n.Ak=function(a){this.b.globalAlpha=a;};n.Zc=function(a,b,c,d,e){this.c&&this.b.drawImage(a,b,c,d,e);};n.Xd=function(){return this.f};
  n.clear=function(a){var b,c;this.c&&(a?this.b.clearRect(b=a.left,c=a.top,a.right-b,a.bottom-c):this.a.width=this.size.w);};n.u=function(){this.a.width=this.a.height=0;this.b=y;jm.l.u.call(this);};function km(a){this.hb=a;}u(km,nd);km.prototype.tb=function(){return this.hb};km.prototype.getLayer=km.prototype.tb;km.prototype.Kn=function(){return this.xb};km.prototype.getSurface=km.prototype.Kn;km.prototype.ld=function(a){var b=this.xb;a!==b&&(this.xb=a,a.Dg(),b&&b.release());};km.prototype.setSurface=km.prototype.ld;km.prototype.u=function(){this.xb.release();};km.prototype.ie=function(){};km.prototype.render=km.prototype.V;function lm(a){var b="dom";lm.l.constructor.call(this,a);C(this.hb,mm)&&(b="2d"===a.Xd()?"2d":"webgl");this.a=b;}u(lm,km);lm.prototype.V=function(a,b,c,d,e,f,g,h){g=this.hb;var k=this.xb,l=!(C(k,jm)&&"2d"===k.Xd());if(d>=g.min&&d<=g.max)return l&&k.wb(!0),g.V(k.L(),{boundingBox:a,zoom:d,screenCenter:b,priorityCenter:f,projection:c,cacheOnly:e,size:k.Db(),pixelRatio:k.$a(),cameraMatrix:h});l&&k.wb(!1);return jk.DONE};lm.prototype.ie=function(){return this.a};function nm(a,b,c,d,e){if(!Ca(a.Di)||!Ca(a.Ai))throw new D(nm,0,a);this.b=a;if(!Ca(this.i=b))throw new D(nm,1,b);if(E(this.g=+c))throw new D(nm,2,c);if(!Ca(this.f=d)&&null!=d)throw new D(nm,3,d);if(!Ca(this.c=e)&&null!=e)throw new D(nm,4,e);this.id=(new af).next();this.a=!1;}t("H.util.animation.Animation",nm);
  nm.prototype.start=function(){var a=this;this.Rc=zk();this.a=!0;var b=this.Rc;this.b.Di(function(){if(a.a){var c=zk(),d=c-a.Rc,e=d/a.g,f=!1;1<=e&&(e=1,f=!0);a.i(a.c?a.c(e):e,d,c-b,c);b=c;f&&a.stop();}else a.stop();});};nm.prototype.start=nm.prototype.start;nm.prototype.stop=function(a){this.a=!1;this.b.Ai();a||this.f&&this.f(this);};nm.prototype.stop=nm.prototype.stop;nm.prototype.va=function(){return this.a};nm.prototype.isRunning=nm.prototype.va;function om(a,b){om.l.constructor.call(this,a);this.xc=!(!b||!b.xc);this.f={};}u(om,km);om.prototype.ld=function(a){om.l.ld.call(this,a);this.g=a.vc.ownerDocument;};om.prototype.setSurface=om.prototype.ld;var pm=function(a,b){b=b.ba();return C(b,kh)?b.pa:(a[0]=b,a)}.bind(null,[]);
  om.prototype.V=function(a,b,c,d,e,f,g){var h=this.hb,k,l,m,p;this.m=b=this.f;this.f=c={};if(d>=h.min&&d<=h.max){var q=this.Nj(a,d,e,f);var r=q.markers;if(a=r.length){d=[];e=this.xb;for(f=0;f<a;f++){h=r[f];var v=pm(h);for(k=v.length;k--;)if(l=g(v[k]))(p=b[m=h.gb()+"_"+k])?delete b[m]:p={Mk:h},c[m]=p,d.push([p,h,h.Cb(),e,l.x,l.y]);}d.sort(qm);a=d.length;for(f=0;f<a;f++)this.jl.apply(this,d[f]);}}return !q||q.requested&&q.requested===q.total||!q.requested&&r.length===q.total?jk.DONE:jk.PENDING};
  om.prototype.render=om.prototype.V;function qm(a,b){var c=a[1].ed(),d=b[1].ed();return Qg(c,d,!0)||a[5]-b[5]||Qg(c,d,!1)}om.prototype.Ga=function(){};om.prototype.getObjectsAt=om.prototype.Ga;function rm(a,b){rm.l.constructor.apply(this,arguments);this.c=0;this.a=[];this.b=A(this.b,this);}u(rm,om);t("H.map.render.dom.MarkerRenderer",rm);rm.prototype.Nj=function(){return this.hb.Kc.apply(this.hb,arguments)};rm.prototype.V=function(a,b,c,d,e,f,g){this.b();this.j=0;var h=rm.l.V.apply(this,arguments);var k=this.xb,l=this.m,m;for(m in l)sm(this,k,l[m]);return 0===this.a.length&&h?jk.DONE:jk.PENDING};rm.prototype.render=rm.prototype.V;
  rm.prototype.ld=function(a){rm.l.ld.call(this,a);this.i=a.$a();};rm.prototype.setSurface=rm.prototype.ld;rm.prototype.b=function(){for(var a=this.a.length,b,c,d;a--;)d=this.a[a],b=d.Ef,c=d.Ef.Cb(),c.mi(d,c,b);this.a.length=0;};rm.prototype.jl=function(a,b,c,d,e,f){var g;var h=d.$a();var k=b.Pb();e*=h;f*=h;this.xc||(e=xd(e),f=xd(f));a.detail&&(k.me(a.co)?sm(this,d,a):g=a.detail);g||(a.detail=g=c.Qj(this.g),this.c++,Ca(c.mi)&&this.a.push(g));a.co=k.a;g.style.zIndex=this.j++;g.Ef=b;d.Zc(g,e,f,0,0);};
  var tm,um="pointer-events",vm;if(Ye){var wm;Ye&&Yc!==y&&(Yc=(wm=/(MSIE\s+|rv:)([^\);]+)(\)|;)/.exec(navigator.userAgent))?+wm[2]:y);vm=Yc;9===vm?um="display":10===vm&&(um="visibility");}tm=um;
  rm.prototype.Ga=function(a,b,c){var d=this.i,e=ff,f,g,h,k,l;if(this.c){a/=d;b/=d;d=this.g;var m=d.documentElement;var p=this.xb.L();var q=p.getBoundingClientRect();a+=q.left;for(b+=q.top;(g=h=d.elementFromPoint(a,b))&&g!==p&&g!==m&&h!==r;){for(;(k=g.parentNode)&&(!Ca(k.contains)||!k.contains(p));)g=k;if(k===p&&(g!==h||"svg"!==g.nodeName)&&0>e.indexOf(l=g.Ef)&&(e===ff&&(e=[]),e.push(l),c))break;f||(f=[]);var r=g.style;f.push({Aj:r.getPropertyValue(tm),bo:r.getPropertyPriority(tm),style:r});r.setProperty(tm,
  "visibility"===tm?"hidden":"none","important");r=h;}if(f)for(b=f.length;b--;)a=f[b],a.style.removeProperty(tm),zc(a.Aj)&&a.style.setProperty(tm,a.Aj,a.bo);}return e};rm.prototype.getObjectsAt=rm.prototype.Ga;rm.prototype.ie=function(){return "dom"};function sm(a,b,c){b.clear(b=c.detail);delete b.Ef;a.c--;c=(a=c.Mk).Cb();c.b&&c.b(b,c,a);}rm.prototype.u=function(){this.a.length=0;var a=this.xb,b=this.f,c;for(c in b)sm(this,a,b[c]);this.xb.B();rm.l.u.call(this);};function mm(a,b){var c=b||{},d=c.contextType;c=c.contextAttributes;mm.l.constructor.call(this,b);wc(a,"Function",mm,0,"invalid render callback");if(d){if(-1===xm.indexOf(d))throw new D(mm,1,"invalid context type");this.f=d;}c&&(this.m=c);this.j=a;}u(mm,aj);t("H.map.layer.CanvasLayer",mm);var xm=["2d","webgl","webgl2","experimental-webgl"];mm.prototype.f="2d";mm.prototype.Xd=function(){return this.f};
  mm.prototype.V=function(a,b){this.c&&this.c.canvas===a||(this.c=a.getContext(this.f,this.m));return this.j(this.c,b)};mm.prototype.u=function(){mm.l.u.call(this);this.c=B;};function ym(a,b){ym.l.constructor.call(this,b);wc(a,"Function",ym,0,"invalid render callback");this.c=a;}u(ym,aj);t("H.map.layer.DomLayer",ym);ym.prototype.V=function(a,b){return this.c(a,b)};function zm(a,b){if(E(this.b=+a))throw new D(zm,0,a);this.a=0;b&&this.yl(b);}t("H.util.kinetics.KineticMove",zm);zm.prototype.yl=function(a){this.a=a;return this};zm.prototype.setInitialSpeed=zm.prototype.yl;zm.prototype.Rm=function(){return Math.abs(this.a/this.b)};zm.prototype.getDuration=zm.prototype.Rm;zm.prototype.We=function(a){return this.a+this.b*a};zm.prototype.getCurrentSpeed=zm.prototype.We;zm.prototype.Mm=function(a){return this.a*a+this.b*a*a/2};zm.prototype.getCurrentPath=zm.prototype.Mm;function Am(a,b){this.a=a;this.b=b;}
  function Bm(a,b,c){var d=[],e={vc:a.a,width:b.w,height:b.h,sa:a.b};for(a=0;a<c.length;a++){b=c[a];var f=b.ie();var g={};Wa(g,e);var h=b.xb;switch(f){case "2d":C(b.tb(),mm)&&(g.ih=b.tb().m);if(f=m&&"2d"===m.Xd()){f=g.ih;var k=m.uo;f=k===f?!0:k&&!f?!k.alpha&&!k.willReadFrequently:f&&!k?!f.alpha&&!f.willReadFrequently:!f.alpha===!f.alpha&&!k.willReadFrequently===!f.willReadFrequently;}if(f)var l=!1;else if(h&&!l){var m=h;l=!1;}else m=new jm(g.vc,g.width,g.height,g.sa,"2d",g.ih),l=!0;break;case "dom":m=
  h||new im(g.vc,g.width,g.height,g.sa);l=!h;break;default:m=h||new jm(g.vc,g.width,g.height,g.sa,b.tb().Xd(),g.ih),l=!h;}d[d.length-1]!==m&&(m.ye(d.length),d.push(m));b.ld(m);}return d}t("H.util.events.listenOnce",Ce);t("H.util.events.dispatchEvent",function(a,b){return a.dispatchEvent(b)});t("H.util.events.fireListeners",function(a,b,c,d){return le(a)?a.td(b,c,d):Le(a,b,c,d)});t("H.util.events.listen",Be);t("H.util.events.unlisten",Je);var Cm=Me;
  Me=function(a,b){var c,d,e=!0;var f=b[b.currentTarget===b.target?"AT_TARGET":a.capture?"CAPTURING_PHASE":(c=!0,"BUBBLING_PHASE")];if(!c||"pointerenter"!==(d=b.type)&&"pointerleave"!==d)b.eventPhase=f,e=Cm(a,b),c&&a.src&&a.src.Qb&&null===a.src.Qb()&&delete b.eventPhase;return e};function sl(){sl.l.constructor.call(this);this.c={};this.b={position:new Wf(0,0),zoom:0,heading:180,incline:0,tilt:0,bounds:new O(Gg([90,-180,90,0,90,180,-90,180,-90,-180]))};}u(sl,F);t("H.map.ViewModel",sl);sl.prototype.a={Ea:"update",Fe:"sync"};
  sl.prototype.$b=function(a,b){if(!a)throw new D(this.$b,0,a);var c=a[Dm];if(tc(c)&&!Yf(c))throw new D(this.$b,0,Dm);c=a[Em];if(tc(c)&&E(+c))throw new D(this.$b,0,Em);c=a[Fm];if(tc(c)&&!C(c,Vf))throw new D(this.$b,0,Fm);a=x.Object.assign({},a);c=Gm(a,this.c,this.b);Hm(this,this.c,a);this.dispatchEvent(new Im(this.c,c,b));return this};sl.prototype.setLookAtData=sl.prototype.$b;sl.prototype.mb=function(){var a={};a[Dm]=Zf(this.b[Dm]);Hm(this,a,this.b,!0);return a};sl.prototype.getLookAtData=sl.prototype.mb;
  var Dm="position",Em="zoom",Fm="bounds",Jm={oj:Dm,rj:Em,ij:"heading",qj:"tilt",jj:"incline",fj:Fm},Km=Object.keys(Jm).map(function(a){return Jm[a]});
  function Hm(a,b,c,d){a.i={};a.g={};a.f=[];for(var e=a.m,f=a.j,g=Km.length,h,k,l;g--;)if(h=Km[g],l=c[h],k=b[h],null==k||!d)if(null!=l){tc(e)&&e.call(a,h,k,l);var m=h,p;(p="position"!==h)||(p=l,p=!p||E(p.lat)||E(p.lng)?!1:!0);b[m]=p?l:Zf(l);if(tc(f)){switch(h){case "position":k=l&&k&&(l.lat!==k.lat||l.lng!==k.lng);break;case "bounds":k=l&&k&&!l.oa(k);break;default:k=l!==k;}k&&f.call(a,h);}}else delete b[h];}sl.prototype.m=function(a,b,c){this.i[a]=b;this.g[a]=c;};sl.prototype.j=function(a){this.f.push(Lm[a]);};
  var Lm=Km.reduce(function(a,b){a[b]=Si[b.toUpperCase()];return a},{});function Gm(a,b,c){var d=0;["tilt","incline","heading",Em].forEach(function(e){if(E(a[e])){var f=E(b[e])?c[e]:b[e];a[e]=f;}else d|=Lm[e];});[Dm,Fm].forEach(function(e){a[e]?d|=Lm[e]:a[e]=b[e]||c[e];});return d}sl.prototype.bb=function(a){var b={},c={};Hm(this,this.b,a);this.c={};b.lookAt=this.g;c.lookAt=this.i;a=this.f;a=a.length?a.reduce(Mm):0;this.dispatchEvent(new Ri(this.a.Fe,b,c,a));};sl.prototype.synchronize=sl.prototype.bb;
  function Mm(a,b){return a|b}sl.prototype.zf=function(a,b){if(E(a=+a))throw new D(this.zf,0,Em);this.$b({zoom:a},b);};sl.prototype.vb=function(){return this.b.zoom};sl.prototype.tc=Nc;sl.prototype.startControl=sl.prototype.tc;sl.prototype.control=Nc;sl.prototype.control=sl.prototype.control;sl.prototype.Ab=Nc;sl.prototype.endControl=sl.prototype.Ab;function Im(a,b,c){Im.l.constructor.call(this,sl.prototype.a.Ea,a,null,b);this.b=this.animate=!!c;}u(Im,Ri);function S(a,b,c,d){S.l.constructor.call(this,a,b,c,d);this.Aa=new Dk(100);this.fa=new I(0,0);this.Ne=!!d.enableSubpixelRendering;this.kb=Nm;this.o=new Wl;this.i=d=new dm;this.dc=A(this.dc,this);d.addEventListener(d.g.Rg,this.dc);d=a.element;this.N=a=d.ownerDocument.createElement("div");a.style.position="absolute";a.style.width=a.style.height="100%";a.style.zIndex=0;d.insertBefore(a,d.firstChild);this.Pd=new Am(this.N,this.sa);this.ma=b.mb().position;b=x.H.gl;if(!b)throw new Xc(S,'"H-webgl" module is missing');
  this.a=new Cl({viewport:this.g,vc:this.N,devicePixelRatio:this.sa,Tk:A(this.ha,this)});b.WorkerBroker.addTarget("model",cj);b=this.c.Na();a=0;d=b.length;this.j={Yc:[],ja:[]};for(this.f=b;a<d;a++){var e=b[a];this.jf(a,e);vl(this,e,!0);}this.Jb();this.ec=A(this.ec,this);this.ci=A(this.ci,this);this.Fa=A(this.Fa,this);c.addEventListener(aj.prototype.b.Ce,this.ec);this.A=Om;this.zoom=wl(this,this.O.vb());this.Jb();this.U();}u(S,ql);t("H.map.render.webgl.RenderEngine",S);
  S.prototype.mb=function(){var a=this.ma;return xl(this,{position:{vk:a.vk,xk:a.xk},zoom:this.zoom,tilt:this.Nl,heading:this.heading})};S.prototype.ec=function(a){a=(a=a.target.ga())&&a.ub();(a&&a.getState())===Qh.INIT?a.load():(Fl(this.a),Hl(this.a,this.c),this.ha());};S.prototype.type=Al.WEBGL;S.prototype.type=S.prototype.type;var Om=2;S.prototype.getState=function(){return this.A};S.prototype.getState=S.prototype.getState;function Pm(a,b,c){b=c-b;a=Dd(2,8+a.zoom);return b<a/2?b:b-a*c/Ad(c)}
  function Qm(a,b,c){function d(h){return e[h]+Tl(e[h],b[h])/2}if(!(c&Si.POSITION||c&Si.BOUNDS))return null;var e=Gl(a.a).getLookAtData();c=e.position;var f=b.position,g=b.bounds;if(qi(e.bounds,f.lat,f.lng,!1)||g&&qi(g,c.lat,c.lng,!1))return null;c=Rm(a,{tilt:d("tilt"),heading:d("heading"),incline:0,bounds:eg([c,f])});c.zoom=wl(a,c.zoom-.5);delete c.bounds;return c}S.prototype.od=!1;
  function Sm(a,b,c,d){a=a.getCapabilities().lookAt[d];a=a.max-a.min;return Ad("zoom"===d?c[d]-b[d]:Tl(b[d],c[d]))/a||0}function Tm(a,b,c){a=wd(8*Sm(a,b,c,"zoom"),Sm(a,b,c,"heading"),Sm(a,b,c,"tilt")/2);return Yd(3E3*a,300,4E3)}
  S.prototype.bh=function(a){var b=this,c=a.newValue,d=a.modifiers,e=Gl(this.a);Um(this);this.fa.set(0,0);var f=Vm(this,c);Km.forEach(function(l){d&a[l.toUpperCase()]||delete f[l];});if(a.b){e=Gl(this.a).getLookAtData();var g=Rm(this,f);c=Qm(this,g,d);var h=function(){return b.od=!1};delete g.bounds;this.od=!0;if(c){e=Tm(this,e,c);var k=Tm(this,c,g);Wm(this,c,e,function(){return Wm(b,g,k,h)});}else c=Tm(this,e,g),Wm(this,g,c,h);}else Xm(f),e.setLookAtData(f);Ym(this);Fl(this.a);this.ha();};
  function Rm(a,b){Xm(b);return Gl(a.a).getBestLookAtData(b)}function Xm(a){var b=a.bounds;!b||b instanceof O||(a.bounds=ni(b.G()));}function Zm(a,b,c){Gl(a.a).setLookAtData(b);Fl(a.a);Ym(a);a.ha();c&&setTimeout(c,0);}
  function Wm(a,b,c,d){var e=Gl(a.a).getLookAtData(),f=new Sl(e,b);0!==f.a.tilt+f.a.heading+f.a.zoom+f.c?$m(a,function(g){for(var h in f.a)if(0!==f.a[h]){var k=f.i[h](g);e[h]+=f.a[h]*(k-f.g[h]);f.g[h]=k;}0!==f.c&&(e.position=f.b.Ng(f.j,f.c*f.i.position(g),!0));return Zm(a,e)},c,function(){return Zm(a,b,d)}):Zm(a,b,d);}S.prototype.Fg=function(){};S.prototype.setAnimationDuration=S.prototype.Fg;S.prototype.sh=function(){};S.prototype.getAnimationDuration=S.prototype.sh;S.prototype.Gg=function(){};
  S.prototype.setAnimationEase=S.prototype.Gg;S.prototype.th=function(){};S.prototype.getAnimationEase=S.prototype.th;S.prototype.Cg=function(){};S.prototype.resetAnimationDefaults=S.prototype.Cg;function an(a,b){a.Aa.qa(function(c,d){return d.Qb()===b});}n=S.prototype;n.Rk=function(a){an(this,a.target.ga());Fl(this.a);this.ha();};n.jf=function(a,b){S.l.jf.call(this,a,b);bn(b)&&(Fl(this.a),(a=(a=b.ga())&&a.ub())&&a.getState()===Qh.INIT&&a.load());};
  n.oi=function(a,b,c){var d;this.Xa=zk();an(this,b.ga());if(b.requestDomMarkers||C(b,mm)||C(b,ym)){var e=this.j.ja;for(d=e.length;d--;){var f=e[d];if(f.tb()===b){e.splice(d,1);f.B();break}}}bn(b)&&Hl(this.a,this.c);this.f=this.c.Na();0===a&&(vl(this,b,!1),this.Jb());Bm(this.Pd,cn(this),this.j.ja.filter(tc));this.te();c||this.ha();};function bn(a){return !(C(a,ym)||C(a,mm))}n.pi=function(){this.Jb();};
  n.Jb=function(){S.l.Jb.call(this);var a=this.getCapabilities().lookAt.zoom;Gl(this.a).setZoomConstraints(wd(a.min,this.Pg),vd(a.max,this.Tg));};n.Mh=function(a,b){var c;if(b){a={xc:this.Ne,ib:this.ib};b.V?C(b,mm)?c=new lm(b):C(b,ym)&&(c=new lm(b)):b.requestDomMarkers&&(c=new rm(b,a));if(c){this.j.ja.push(c);var d=this.c.Na();this.j.ja.sort(function(e,f){return d.indexOf(e.hb)-d.indexOf(f.hb)});Bm(this.Pd,cn(this),this.j.ja.filter(tc));}bn(b)&&Hl(this.a,this.c);}this.f=this.c.Na();};
  function Vm(a,b){var c=b.position;return xl(a,{zoom:wl(a,b.zoom),position:new Wf(c.lat,c.lng),tilt:b.tilt,heading:b.heading,bounds:b.bounds})}function Ym(a){var b=Gl(a.a).getLookAtData();a.zoom=b.zoom;a.ma=b.position;}function dn(a,b){a=Gl(a.a).geoToMeters(b);return new I(a.x/4.007501668557849E7+.5,1-(a.y/4.007501668557849E7+.5))}function en(a,b){return b.sub(dn(a,a.ma)).scale(Dd(2,8+a.zoom))}n.Fa=function(a){return Gl(this.a).geoToPixel(a)};S.prototype.geoToScreen=S.prototype.Fa;
  S.prototype.Wa=function(a,b){return Gl(this.a).xyToGeo(a,b)};S.prototype.screenToGeo=S.prototype.Wa;S.prototype.Eg=function(a,b){a=this.Wa(a,b);b=this.O.mb();b.position=a;return b};
  function fn(a,b,c,d,e,f,g,h){var k,l,m=0,p;var q=function(){0===--m&&f(e);};if(h&&h.features)for(m=l=h.features.length,p=0;p<l;p++){var r=h.features[p];var v=r.id;if(k=a.a.a.sources[r.source_name]){var w=k.provider;var z=w.ak();if(z===Zj.SOURCE){var J=r.source_layer;if("overlays"===J)gn(a,b,c,d,e,k,r.properties.overlays_config);else if(k=k.getMapObjectById(v))if("markers"!==J)e.push(k);else if(hn(a,b,c,k))e.push(k);else if(d&&!g){var G=!0;Kl(a.a,{x:b,y:c},{radius:jn,top_most_only:!1},function(U){fn(a,
  b,c,d,e,f,!0,U);});}m--;}else z===Zj.FEATURE?(J=r.tile.coords,G=w.getFeatureProxy(r.properties,J,function(U){if(U){for(var X=U,xa;X&&(xa=X.Qb())&&xa!==w;)X=xa;xa||X.ka(w);e.push(U);}q();}),G||(k=a.Aa.get(v),k||(k=new Kg(r),k.ka(w),a.Aa.add(v,k,1)),e.push(k),m--)):z===Zj.PROVIDER&&(G=!0,w.kl(r,!1).then(function(U){U&&(U instanceof Ni?hn(this,b,c,U):1)&&e.push(U);q();},function(){q();},a));}}z&&(G||0!==m)||f(e);}
  function gn(a,b,c,d,e,f,g){var h;a=a.Wa(b,c);for(b=g.length;b--&&(!(h=f.getMapObjectById(g[b].id))||0<=e.indexOf(h)||!h.ba().pd(a)||(e.push(h),!d)););}function hn(a,b,c,d){var e=d.Cb(),f=e.g,g,h=!f;if(f)if(e=e.ud(),b+=e.x,c+=e.y,e=d.ba(),C(e,Ji))for(d=e.pa,g=d.length;g--&&!h;)e=a.Fa(d[g]),h=f.hg(b-e.x,c-e.y,0)!==ae.NONE;else e=a.Fa(e),h=f.hg(b-e.x,c-e.y,0)!==ae.NONE;return h}
  S.prototype.Ga=function(a,b,c,d){var e=this,f=[];f=kn(f,this.j.ja,a*this.sa,b*this.sa,c);c&&f.length?d(f):this.a.a.initialized?Kl(this.a,{x:a,y:b},{radius:jn,top_most_only:c},function(g){fn(e,a,b,c,f,d,!1,g);}):d(f);};S.prototype.getObjectsAt=S.prototype.Ga;function kn(a,b,c,d,e){for(var f=b.length,g;f--&&!((g=b[f])&&g.Ga&&(a=a.concat(g.Ga(c,d,e)),a.length&&e)););return a}S.prototype.W=y;function cn(a){a=a.yb[2];return {w:a.right-a.left,h:a.bottom-a.top}}
  S.prototype.U=function(){var a=this.j.ja.length;rl(this,this.sa);this.fa.set(0,0);var b=cn(this);var c=b.w;var d=b.h;for(this.a.a.handleViewportUpdate();a--;){b=this.j.ja[a].xb;var e=b.Db();e.w===c&&e.h===d||b.yf(c,d);}this.W=new Ki(c,d);Fl(this.a);this.ha();};S.prototype.getCapabilities=function(){return Bl};S.prototype.getCapabilities=S.prototype.getCapabilities;function ln(a){a.b&&a.b.va()||(El(a.a)||zk()-a.Xa<a.kb)&&!a.v?a.Vd||(a.Vd=Jk(a.ci)):(a.v&&(a.te(),mn(a)),a.A=Om);}n=S.prototype;n.Vd=0;
  n.te=function(){this.j.Yc.length=0;};
  n.ci=function(){this.Vd=0;this.C&&this.C.before();var a=Gl(this.a);var b=a.getLookAtData(!1);var c=a.getLookAtData(!0);a=this.g.center.clone();c=c.bounds.G();var d=this.zoom;var e=this.fa;var f=this.f;var g=f.length;for(this.kb=Nm;g--;){var h=f[g];C(h,aj)&&h.ga()&&h.ga().nf(c,d);}this.v=this.a.V();this.O.bb(b);b=this.v;f=this.j;g=f.ja.length;var k=!0,l;for(l=0;l<g;l++){h=f.ja[l];var m=f.Yc;if(h){var p=h.V(c,a,void 0,d,!1,e,this.Fa,this.a.a.getCameraMatrix());p===jk.ACTIVE&&(this.kb=Infinity);p!==jk.DONE||
  m[l]||(mn(this,h.tb()),m[l]=!0);m[l]||(k=!1);}}this.v=b&k;this.W&&(this.g.bb(this.W),this.W=y);this.b&&this.b.va()&&this.Sg();this.C&&this.C.after();ln(this);};function mn(a,b){a.od||setTimeout(A(a.dispatchEvent,a,{type:a.zk.pj,target:b||a}),1);}n.u=function(){var a=this.c.Na()[0],b=this.g;Kk(this.Vd);nn(this);a&&vl(this,a,!1);this.j.ja.filter(tc).forEach(function(c){c.B();});b.element&&b.element.removeChild(this.N);this.N=null;this.A=3;this.a.B();S.l.u.call(this);};
  n.ha=function(){this.Xa=zk();this.A===Om&&(this.v=!1,this.A=1,ln(this));};function on(a,b,c){Gl(a.a).applyPxOffset([b,c]);Ym(a);a.fa.set(0,0);Fl(a.a);a.ha();}n.Ae=function(a,b,c){a=wl(this,wl(this,a));pn(this,a,b,c);};S.prototype.zoomAt=S.prototype.Ae;function pn(a,b,c,d){Gl(a.a).setLookAtData({zoom:b},Cc(c)&&Cc(c)?[c,d]:B);Ym(a);Fl(a.a);a.ha();}function Um(a){nn(a);a.i.va()&&a.Ab(!0);a.o.va()&&a.Bb(!0);}function qn(a,b){if(b){var c={};c.mf=b.power;c.Oe=b.ease;c.duration=b.duration;a.s=c;}}
  S.prototype.uc=function(a,b){var c=!!(b||a&(ul.HEADING|ul.TILT));Um(this);qn(this,b);this.o.start(a,c);Gl(this.a).setPanning(!0);};S.prototype.startInteraction=S.prototype.uc;
  S.prototype.lc=function(a,b,c,d,e){var f=this.o;var g=!1;if(f.va()){var h=Gl(this.a);var k=h.getLookAtData();var l=this.g.center;l=[l.x,l.y];b=f.store(a,b,c,d,e);c=f.Wf();a=f.ce();e=this.o.Xf();d=this.o.uh();f.c&&(f.Hc(ul.TILT)&&(h.setLookAtData({tilt:yl(this,k.tilt+a.y/this.g.height*-180)},l),g=!0),b&&1!==e&&f.Hc(ul.ZOOM)&&(g=f.Wf(),e=Bd(Dd(2,this.zoom)*e)/Ld,pn(this,wl(this,e),g.x,g.y),g=!0),f.Hc(ul.COORD)&&0<Vl(a)&&(on(this,-a.x,-a.y),g=!0),f.Hc(ul.HEADING)&&(b?h.setLookAtData({heading:k.heading+
  zl(this,d)},[c.x,c.y]):a.x&&h.setLookAtData({heading:zl(this,k.heading+a.x/this.g.width*360)},l),g=!0),g&&(Fl(this.a),this.ha()));}};S.prototype.interaction=S.prototype.lc;
  S.prototype.Bb=function(a){var b=this;if(this.o.va()&&!a){if(this.s){a=this.o.Eb();var c=this.o.zc();var d=this.s.duration;var e=(this.s.mf||1)*a;var f=new zm(-e/(0<d?d:1),e);!E(c.x)&&!E(c.y)&&0<e&&b.o.Hc(ul.COORD)&&$m(this,function(g){e=f.We(g*d);E(e)||on(b,xd(-c.x*e),xd(-c.y*e));},d,void 0,this.s.Oe);}this.s=null;this.o.clear();}Gl(this.a).setPanning(!1);this.ha();};S.prototype.endInteraction=S.prototype.Bb;S.prototype.tc=function(a,b,c){Um(this);this.i.start(b,c);qn(this,a);Gl(this.a).setPanning(!0);};
  S.prototype.startControl=S.prototype.tc;S.prototype.control=function(a,b,c,d,e,f){for(var g=0,h;g<arguments.length;g++)if(h=+arguments[g],h!==h)throw new D(this.control,g,h);this.i.va()&&this.i.set(a,b,c,d,e,f);};S.prototype.control=S.prototype.control;
  S.prototype.Ab=function(a,b){var c=this,d;if(this.i.va()){nn(this);var e=zk();var f=e-this.za;if(1<=f){var g=gm(this.i);rn(this,g,f);}if(!this.s||a||b)"function"===typeof b&&(a=Gl(this.a),a=a.getLookAtData(),b(a),sn(this,a));else {b=this.i.Eb();var h=this.i.zc();var k=this.s.duration;var l=(this.s.mf||1)*b;var m=new zm(-l/(0<k?k:1),l);!E(h.nb)&&!E(h.ob)&&0<l&&$m(this,function(p,q,r,v){e&&(r=v-e,e=0);l=m.We(p*k)*r;E(l)||((d=h.pb*l)&&pn(c,wl(c,c.zoom+d),c.i.b,c.i.c),on(c,xd(h.nb*l),xd(h.ob*l)));},k,void 0,
  this.s.Oe);}this.i.reset();Gl(this.a).setPanning(!1);this.ha();}};S.prototype.endControl=S.prototype.Ab;
  function sn(a,b){var c=en(a,dn(a,b.position)),d=c.y;c=c.x;var e=b.zoom,f=en(a,dn(a,a.ma));b=f.y;var g=f.x;f=a.zoom;var h=a.i.Eb(),k=a.i.b,l=a.i.c,m=0;c=Pm(a,g,c);c-=g;d-=b;f=e-f;b=Cd(c*c+d*d+f*f);if(0!==h&&0!==b){var p=c/b;var q=d/b;var r=f/b;var v=h*h/(2*b);$m(a,function(w,z){var J;if(1!==w){w=h*z-v*z*z/2;z=w-m;if(J=r*z)J=wl(a,a.zoom+J),pn(a,J,k,l);on(a,xd(p*z),xd(q*z));m=w;}else pn(a,wl(a,e),k,l),a.ha();},2*b/h);}}
  S.prototype.dc=function(a){var b=this,c=a.c;this.fa.set(0,0);c.nb||c.ob||c.pb||c.ue||c.ve||c.wf?(this.za=zk(),$m(this,function(d,e,f,g){b.za=g;rn(b,c,f);},Td),this.ha()):nn(this);};function rn(a,b,c){c=c||0;var d=a.i,e=Gl(a.a),f=e.getLookAtData();b.pb&&pn(a,wl(a,f.zoom+b.pb*c),d.b,d.c);e.setLookAtData({heading:zl(a,f.heading+b.ve*c),tilt:yl(a,f.tilt+b.ue*c)});Ym(a);on(a,b.nb*c,b.ob*c);}function $m(a,b,c,d,e){a.b&&a.b.va()&&a.b.stop(!0);a.b=new nm(a,b,c,d,e);a.b.start();}
  function nn(a){a.b&&a.b.va()&&a.b.stop(!0);}S.prototype.nh=function(){};S.prototype.enter=S.prototype.nh;S.prototype.Vf=function(a){tl(this.N,a);};S.prototype.exit=S.prototype.Vf;S.prototype.capture=function(a,b,c,d){var e=this;return Ll(e.a).then(function(f){var g=e.N.ownerDocument.createElement("canvas"),h=e.sa,k=g.getContext("2d"),l=e.a.$a()/h,m=(c-a)*h;h*=d-b;g.width=m;g.height=h;k.drawImage(f,a*l,b*l,m*l,h*l,0,0,m,h);return g})};S.prototype.ym=function(a){return Gl(this.a).geoToMeters(a)};
  S.prototype.geoToMeters=S.prototype.ym;S.prototype.Eo=function(a){return Gl(this.a).metersToGeo(a)};S.prototype.metersToGeo=S.prototype.Eo;var Nm=5E3,jn=3.5;function T(a,b,c){var d={};T.l.constructor.call(this);this.J=A(T.prototype.J,this);this.i=tn(c,T);this.b=c=new sl;this.N=!1;c.addEventListener(c.a.Fe,this.za,!1,this);if(!C(a,Element))throw new D(T,0,a);c=this.S=a.ownerDocument.createElement("div");var e=c.style;e.position="relative";e.height=c.style.width="100%";e.overflow="hidden";e.webkitTapHighlightColor="transparent";"transparent"!==e.webkitTapHighlightColor&&(e.webkitTapHighlightColor="rgba(0,0,0,0)");a.appendChild(c);this.ya=new kk(this.S,
  this.i);this.ya.addEventListener(this.ya.a.Fe,this.za,!1,this);a=this.a=new cj(this.i.layers);a.addEventListener(a.b.Ee,this.U,!1,this);a.addEventListener(a.b.Be,this.U,!1,this);a.addEventListener(a.b.De,this.U,!1,this);!this.f&&un(this);this.c=null;this.a.add(b,0);this.g=this.O(null!=this.i.engineType?this.i.engineType:Vj.WEBGL,this.i);this.v=A(this.v,this);this.C=A(this.C,this);b=this.i.imprint;if(b!==B&&"object"!==typeof b)throw new D(T,1,"imprint");this.m=null===b?b:new lj(this,b);b=this.i.autoColor;
  this.fa=b===B||!!b;vn(this);(b=this.i.zoom)&&(d.zoom=b);(b=this.i.bounds)&&(d.bounds=b);(b=this.i.center)&&(d.position=b);this.b.$b(d);}u(T,F);t("H.Map",T);function tn(a,b){if(a){var c=a.pixelRatio;if(c===B)a.pixelRatio=Se();else if(!(0<c))throw new D(b,0,"pixelRatio: "+c);}else a={},a.pixelRatio=Se();a.renderBaseBackground||(a.renderBaseBackground={lower:3,higher:2});return a}
  T.prototype.u=function(){this.fa=!1;this.m&&this.m.B();this.g.dispose();this.b.B();this.ya.B();this.f.B();this.j.B();this.a.B();var a=this.S;a.parentNode.removeChild(a);this.S=null;F.prototype.u.call(this);};T.prototype.L=function(){return this.S};T.prototype.getElement=T.prototype.L;T.prototype.$a=function(){return this.i.pixelRatio};T.prototype.getPixelRatio=T.prototype.$a;function vn(a){a.m&&a.fa&&a.m.Li({invert:a.c&&a.c.nm});}
  T.prototype.U=function(a){var b=a.added,c=a.removed;b&&b.ga()&&b.ga().ka(this);c&&c.ga()&&c.ga().ka(null);c===this.f&&(this.j=this.f=null);c===this.c&&(this.c=null);0===a.idx&&(this.dispatchEvent(new Ng(this.o.Ff,this.c=a.type!==this.a.b.De?b:0<this.a.a.length?this.a.get(0):y,a.type!==this.a.b.Be?c:1<this.a.a.length?this.a.get(1):y)),vn(this));};T.prototype.za=function(a){a.modifiers&&(this.N||(wn(this,"start"),this.N=!0),wn(this,"",a),this.W&&x.clearTimeout(this.W),this.W=x.setTimeout(this.C,333));};
  function wn(a,b,c){a.dispatchEvent(c?new Ri(a.o.kj,c.newValue,c.oldValue,c.modifiers):a.o.kj+b);}T.prototype.C=function(){wn(this,"end");this.N=!1;};T.prototype.Hg=function(a,b){this.g.getCapabilities().lookAt&&this.b.$b({position:a},!!b);return this};T.prototype.setCenter=T.prototype.Hg;T.prototype.fb=function(){var a=this.b.mb();return a?a.position:y};T.prototype.getCenter=T.prototype.fb;T.prototype.zf=function(a,b){this.b.zf(a,!!b);return this};T.prototype.setZoom=T.prototype.zf;T.prototype.vb=function(){return this.b.vb()};
  T.prototype.getZoom=T.prototype.vb;T.prototype.Ae=function(a,b,c){this.g.zoomAt(a,b,c);};T.prototype.zoomAt=T.prototype.Ae;T.prototype.Un=function(){return this.ya};T.prototype.getViewPort=T.prototype.Un;T.prototype.Tn=function(){return this.b};T.prototype.getViewModel=T.prototype.Tn;T.prototype.jn=function(){return this.a};T.prototype.getLayers=T.prototype.jn;T.prototype.dn=function(){return this.m};T.prototype.getImprint=T.prototype.dn;
  T.prototype.capture=function(a,b,c,d,e,f){function g(G,U){q?G.cancel():(w.save(),U.capture(v,m,function(X){w.restore();G.done(X);},function(X){G.done(null,X);h(null);}));}function h(G){q||(q=!0,a(G));}var k=this.ic(),l=k.getCapabilities(),m=this.i.pixelRatio,p=this.ya,q=!1,r=this,v,w;if(!Ca(a))throw new D(this.capture,0,a);c=c||0;d=d||0;e=e||p.width;f=f||p.height;var z=wd(0,vd(c,e));var J=wd(0,vd(d,f));c=vd(p.width,wd(c,e));d=vd(p.height,wd(d,f));l.capture?k.capture(z,J,c,d).then(function(G){var U=r.m,
  X=b||[];v=G;w=v.getContext("2d");v.style.width=v.width/m+"px";v.style.height=v.height/m+"px";var xa=new xk(10,g);X=X.concat(U).filter(function(ia){return Ca(ia&&ia.capture)});X.length?(G=X.pop(),X.forEach(function(ia){xa.push(ia,hd);}),xa.push(G,A(h,r,v)),tk(xa)):h(v);},function(){h(y);}):a(null);};T.prototype.capture=T.prototype.capture;T.prototype.ic=function(){return this.s||this.g};T.prototype.getEngine=T.prototype.ic;
  T.prototype.wl=function(a){this.g.type===a||this.ma||(this.ma=!0,this.s=this.O(a),this.s.addEventListener("render",this.v));return this};T.prototype.setEngineType=T.prototype.wl;T.prototype.v=function(a){a.target===this.s&&(this.s.removeEventListener("render",this.v),this.g.Vf(this.J));};T.prototype.J=function(){var a=this.g.type;this.g.B();this.g=this.s;this.s=B;this.ma=!1;this.dispatchEvent(new Ng(this.o.Vl,this.g.type,a));};
  T.prototype.O=function(a,b){b=b?tn(b,this.O):this.i;vn(this);if(a===Vj.P2D)return new x.H.map.render.p2d.RenderEngine(this.ya,this.b,this.a,b);if(a===Vj.WEBGL)return new S(this.ya,this.b,this.a,b);if(a===Vj.HARP)return new x.H.map.render.harp.RenderEngine(this.ya,this.b,this.a,b);throw new D(this.wl,0,a);};
  T.prototype.Cf=function(a,b,c,d,e){b=tc(b)?C(b,K,this.Cf,1,b)&&b:this.b.mb().bounds.G();e=e||this.c;if(!C(e,cl))throw new D(this.Cf,4);var f=e.ga(),g=this.$a(),h=e.tileSize;2<=g&&256<h&&f instanceof sk&&(h/=2);g=this.vb();h=Math.log2(h)-8;c=tc(c)?+c:g;d=tc(d)?+d:g;if(!(c<=d))throw new D(this.Cf,B,"!(min <= max)");g=f.min;var k=f.max,l=this.ic().type===Vj.WEBGL?yd:xd;c=Yd(l(c)-h,g,k);d=Yd(l(d)-h,g,k);if(!(f&&C(f,R)&&ld()&&f.fh()))throw new Xc(this.Cf,"Storing is not supported");return new nk(e,f,b,
  c,d,a)};T.prototype.storeContent=T.prototype.Cf;function xn(a){hj.call(this,a);}u(xn,hj);xn.prototype.f=function(){jj(this,2);};xn.prototype.c=function(){jj(this,4);};T.prototype.mm=function(a){a=new xn(a);kd().clear(A(a.f,a),A(a.c,a));return a};T.prototype.clearContent=T.prototype.mm;T.prototype.Xg=function(a,b){var c=this.a,d=c.indexOf(a),e=b!==+b;b=e?c.a.length-1:b;0>d?c.add(a,b):d-b&&(c.pc(d),c.add(a,e?b-1:b));return this};T.prototype.addLayer=T.prototype.Xg;
  T.prototype.rf=function(a){var b=this.a.indexOf(a);a!==this.c&&a!==this.f&&-1!==b&&this.a.pc(b);return this};T.prototype.removeLayer=T.prototype.rf;T.prototype.Kd=function(a){this.c!==a&&(this.a.a.length&&this.a.get(0)!==this.f?this.a.set(0,a):this.a.add(a,0),this.c=a);return this};T.prototype.setBaseLayer=T.prototype.Kd;T.prototype.Em=function(){return this.c};T.prototype.getBaseLayer=T.prototype.Em;
  T.prototype.Fa=function(a){if(!Yf(a))throw new D(this.Fa,0,a);return (a=this.g.geoToScreen(a))?wf(a):y};T.prototype.geoToScreen=T.prototype.Fa;T.prototype.Wa=function(a,b){var c;if(c=+E(a)||2*E(b))throw new D(this.Wa,c-1,arguments[c-1]);return (c=this.g.screenToGeo(a,b))?Zf(c):y};T.prototype.screenToGeo=T.prototype.Wa;T.prototype.Eg=function(a,b){return this.g.screenToLookAtData(a,b)};T.prototype.screenToLookAtData=T.prototype.Eg;
  T.prototype.ea=function(a){if(!C(a,M))throw new D(this.ea,0,a);!this.f&&un(this);this.j.kc().ea(a);return a};T.prototype.addObject=T.prototype.ea;T.prototype.Ia=function(a){if(!C(a,M))throw new D(this.Ia,0,a);!this.f&&un(this);this.j.kc().Ia(a);return a};T.prototype.removeObject=T.prototype.Ia;T.prototype.Va=function(a){!this.f&&un(this);return this.j.kc().Va(a)};T.prototype.getObjects=T.prototype.Va;
  T.prototype.fc=function(a){var b;yc(a,this.fc,0,a);!this.f&&un(this);var c=a.length;for(b=0;b<c;b++)this.ea(a[b]);return this};T.prototype.addObjects=T.prototype.fc;T.prototype.Gd=function(a){var b;yc(a,this.Gd,0,a);!this.f&&un(this);var c=a.length;for(b=0;b<c;b++)this.Ia(a[b]);return this};T.prototype.removeObjects=T.prototype.Gd;T.prototype.de=function(a,b,c){var d;if(d=+E(a)||2*E(b))throw new D(this.de,d-1,arguments[d-1]);this.g.getObjectsAt(a,b,!0,function(e){c(e[0]);});};
  T.prototype.getObjectAt=T.prototype.de;T.prototype.Ga=function(a,b,c){var d;if(d=+E(a)||2*E(b))throw new D(this.de,d-1,arguments[d-1]);this.g.getObjectsAt(a,b,!1,c);};T.prototype.getObjectsAt=T.prototype.Ga;T.prototype.Bh=function(a,b,c){var d=c||gf;c=d.visiblesOnly;var e=d.zoom;d=d.types;var f=Pg.ANY;C(a,O,this.Bh,0,"area");wc(b,"Function",this.Bh,1,"callback");this.j.Va(a,tc(c)?!!c:!0,tc(e)?+e:this.b.vb(),tc(d)?d&f:f,b);};T.prototype.getObjectsWithin=T.prototype.Bh;
  function un(a){a.j=new N({max:24});a.f=new ml(a.j,a.i);a.a.add(a.f);}var Vj={P2D:Al.P2D,WEBGL:Al.WEBGL};T.EngineType=Vj;Vj.HARP=Al.HARP;T.prototype.o={vp:"mapviewchangestart",kj:"mapviewchange",lj:"mapviewchangeend",Ff:"baselayerchange",Vl:"enginechange"};function yn(a,b){yn.l.constructor.call(this,a,b);}u(yn,Ni);t("H.map.Marker",yn);n=yn.prototype;n.type=Pg.MARKER;n.Og=1;n.wa=function(a){if(a!==Mg.VISUAL||1===this.bl||1===this.icon.getState())var b=yn.l.wa.call(this,a);return b||!1};n.bl=0;n.sk=function(a){return C(a,Ij)};n.Ph=!1;n.Qk=function(){this.wa(Mg.VISUAL);};
  n.Pc=function(a){var b=this.icon;this.Ph&&(b.removeEventListener("statechange",this.Qk,!1,this),delete this.Ph);b&&(this.bl=b.getState());yn.l.Pc.call(this,a);0===a.getState()&&(this.Ph=!0,Ce(a,"statechange",this.Qk,!1,this));return this};yn.prototype.setIcon=yn.prototype.Pc;yn.prototype.f=function(a){return new Ij(a.svg,a)};yn.prototype.X=function(){var a=this.getIcon(),b=a.hp||0,c=yn.l.forWorkerMessage.call(this),d=c.properties.icon;d&&0<b&&Wa(d,{stick_color:a.gp,stick_height:b});return c};
  yn.prototype.forWorkerMessage=yn.prototype.X;function zn(a,b){zn.l.constructor.call(this,jh,b);this.we(a);}u(zn,xi);t("H.map.Rect",zn);zn.prototype.we=function(a){if(!C(a,K))throw new D(this.we,0,a);a.oa(this.U)||(this.U=this.R=a,this.eb!==y&&zn.l.da.call(this,ni(a)));};zn.prototype.setBoundingBox=zn.prototype.we;zn.prototype.G=function(){return this.R};zn.prototype.getBoundingBox=zn.prototype.G;zn.prototype.da=function(){return this};zn.prototype.setGeometry=zn.prototype.da;
  zn.prototype.ba=function(){this.eb||zn.l.da.call(this,ni(this.U));return this.eb};zn.prototype.getGeometry=zn.prototype.ba;function hk(a,b,c){var d="anonymous",e=1;this.f=A(this.f,this);M.call(this,c);this.da(a);c&&(a="crossOrigin",a in c&&(d=c[a]),a="opacity",a in c&&(e=c[a]));this.vl(b,d);this.qc(e);}u(hk,M);t("H.map.Overlay",hk);hk.prototype.type=Pg.OVERLAY;hk.prototype.G=function(){return this.R};hk.prototype.getBoundingBox=hk.prototype.G;hk.prototype.we=function(a){C(a,K,this.we,0,a);return this.da(a)};hk.prototype.setBoundingBox=hk.prototype.we;hk.prototype.ba=function(){return this.R};
  hk.prototype.getGeometry=hk.prototype.ba;hk.prototype.da=function(a){var b=this.R,c=!b;C(a,K,this.da,0,a);if(c||!b.oa(a))this.R=a,c||this.wa(Mg.SPATIAL);return this};hk.prototype.setGeometry=hk.prototype.da;hk.prototype.ad=function(){return this.b.getData()};hk.prototype.getBitmap=hk.prototype.ad;hk.prototype.vl=function(a,b){var c=this.b;c&&1!==c.getState()&&c.cancel();this.b=new Dj(a,this.f,!0,B,b);return this};hk.prototype.setBitmap=hk.prototype.vl;
  hk.prototype.f=function(a,b){this.b=b;1===a&&this.wa(Mg.VISUAL);};hk.prototype.dd=function(){return this.g};hk.prototype.getOpacity=hk.prototype.dd;hk.prototype.qc=function(a){var b=this.g,c=2>b;if(0<=a&&1>=a)a!==b&&(this.g=a,c&&this.wa(Mg.VISUAL));else throw new D(this.qc,0);return this};hk.prototype.setOpacity=hk.prototype.qc;hk.prototype.X=function(){var a=hk.l.X.call(this);a.geometry=ni(this.R).X();a.properties.overlay=!0;return a};hk.prototype.forWorkerMessage=hk.prototype.X;function An(a){if(!a||!Ca(a.requestData))throw new D(An,0,"options.requestData");An.l.constructor.call(this,a);this.N=a.requestData;this.J=!!a.providesDomMarkers;}u(An,R);t("H.map.provider.MarkerTileProvider",An);An.prototype.Yd=function(a){return a?a.length+1:1};An.prototype.getEntryWeight=An.prototype.Yd;
  An.prototype.K=function(a,b,c,d,e){var f=this;return this.N(a,b,c,function(g){for(var h=[],k,l,m=g.length;m--;)l=g[m],l.jp=f.getTileKey(a,b,c),l.ka(f),k=l.Cb(),(C(l,Qi)||1===k.getState())&&h.push(g[m]);d(h);},e)};An.prototype.requestInternal=An.prototype.K;An.prototype.ke=function(a,b){b===Mg.VISUAL&&(a=this.Ob().get(a.jp))&&(a.valid=!1,Wj(this,a));};An.prototype.invalidateObject=An.prototype.ke;An.prototype.Vb=function(){return this.J};An.prototype.providesDomMarkers=An.prototype.Vb;
  An.prototype.Wb=df;An.prototype.providesMarkers=An.prototype.Wb;function Bn(a,b){Bn.l.constructor.call(this,a,b);}u(Bn,cl);t("H.map.layer.MarkerTileLayer",Bn);var Cn={markers:[],total:0,requested:0};function Dn(a,b,c,d,e){var f=yd(c);a.pixelProjection.Qa(f);b=a.je(a.Te(b),f);c=a.$e(b,b.left>b.right,~~c,d,e);a=c.tiles;c=c.total;d=a.length;e=[];var g;for(g=0;g<d;g++)for(b=a[g],f=b.data.length;f--;)e.push(b.data[f]);return {markers:e,total:a.length,requested:c}}Bn.prototype.Lc=function(a,b,c,d){return this.a.providesDomMarkers()?Cn:Dn(this,a,b,c,d)};
  Bn.prototype.requestMarkers=Bn.prototype.Lc;Bn.prototype.Kc=function(a,b,c,d){return this.a.providesDomMarkers()?Dn(this,a,b,c,d):Cn};Bn.prototype.requestDomMarkers=Bn.prototype.Kc;function En(a,b,c){var d,e=6;if(b){for(d=' expected close to: "'+b;e--;)b=a.a.next(),-1!==b&&(d+=String.fromCharCode(b));d+='"';}throw new D(Fn,0,"- Malformed WKT: "+(d?c+d:"unexpected end of stream"));}var Gn={$l:" ",Xl:"(",Yl:")",Ul:",",Wl:""};Object.keys(Gn).reduce(function(a,b){a[Gn[b]]=!0;return a},mc());function Hn(a,b){var c=a.next();b=b?")":"(";c!==b&&En(a,c,'"'+b+'"');}function In(a){return ","===Jn(a)?(a.next(),!0):!1}
  function Kn(a,b,c,d,e){var f,g,h=2+b+c;for(g=1;g<=h;g++)(c=a.next())?(f=+c)!==f?En(a,c,"number"):1===g?d[e+1]=f:2===g?d[e]=f:3===g&&(d[e+2]=f):En(a,c);b||(d[e+2]=0);}var Ln=[];function Mn(a,b,c,d){d||Hn(a,0);Kn(a,b,c,Ln,0);d||Hn(a,1);return new Wf(Ln[0],Ln[1],b?Ln[2]:B)}function Nn(a,b,c){var d=[];Hn(a,0);do Kn(a,b,c,d,d.length);while(In(a));Hn(a,1);return new L(d)}function On(a,b,c){Hn(a,0);var d=Nn(a,b,c);if(In(a)){var e=[];do e.push(Nn(a,b,c));while(In(a))}Hn(a,1);return new O(d,e)}
  var Pn=[],Qn=[On],Rn=[Mn],Sn={POINT:Rn,LINESTRING:[Nn],POLYGON:Qn,MULTIPOINT:[Mn,Ji],MULTILINESTRING:[Nn,mh],MULTIPOLYGON:[On,ui],GEOMETRY:Pn,GEOMETRYCOLLECTION:Pn,CIRCULARSTRING:Pn,COMPOUNDCURVE:Pn,CURVEPOLYGON:Pn,MULTICURVE:Pn,MULTISURFACE:Pn,CURVE:Pn,SURFACE:Pn,POLYHEDRALSURFACE:Pn,TIN:Pn,TRIANGLE:Pn},Tn={Z:1,M:2,ZM:3};
  function Fn(a){a=new Un(a);var b;var c=a.next();(b=Sn[c.toUpperCase()])||En(a,c,"type name");if(b!==Pn){c=Jn(a);c=Tn[c.toUpperCase()];var d=c&1;var e=c>>1;d|e&&a.next();c=Jn(a);if("EMPTY"===c)if(a.next(),d=b[1])var f=new d([]);else b!==Rn&&(f=new L([]),b===Qn&&(f=new O(f)));else if("("===c){f=b[0];b=b[1];if(b){var g=[];Hn(a,0);if(f===Mn){var h="("!==Jn(a);do g.push(f(a,d,e,h));while(In(a))}else {do g.push(f(a,d,e));while(In(a))}Hn(a,1);d=new b(g);}else d=f(a,d,e);f=d;}else En(a,c,'"Z", "M", "ZM", "(" or "EMPTY"');
  a.next()&&En(a,c,"end of stream");}return f||y}function Un(a){this.a=a;}function Jn(a){var b=a.b;if(b===B){for(b=a.a;b.Tb()===Vn;)b.next();if(Wn[b.Tb()])b=b.next(),b=b===Xn?"":String.fromCharCode(b);else {b.ze();do b.next();while(!Wn[b.Tb()]);b=String.fromCharCode.apply(null,b.Ud());}a.b=b;}return b}Un.prototype.next=function(){var a=Jn(this);""!==a&&delete this.b;return a};var Vn=32,Xn=-1,Yn={$l:Vn,Xl:40,Yl:41,Ul:44,Wl:Xn},Wn=Object.keys(Yn).reduce(function(a,b){a[Yn[b]]=!0;return a},mc());function Zn(){}t("H.util.ICharStream",Zn);Zn.prototype.next=function(){};Zn.prototype.ze=function(){};Zn.prototype.Ud=function(){};Zn.prototype.Tb=function(){};function $n(a){this.c=String(a);this.f=0;this.a=[];this.b=!1;}t("H.util.CharStream",$n);$n.prototype.next=function(){var a=this.c.charCodeAt(this.f++);a=isNaN(a)?-1:a;this.b&&this.a.push(a);return a};$n.prototype.ze=function(){this.b=!0;this.a=[];};$n.prototype.Ud=function(){var a=this.a.slice();this.b=!1;this.a=[];return a};$n.prototype.Tb=function(){var a=this.c.charCodeAt(this.f);return isNaN(a)?-1:a};t("H.util.wkt.toGeometry",function(a){return Fn(new $n(a))});t("H.buildInfo",function(){return Ef("H-core","1.30.6","757f3c65")});var ao=function(){var a="maps"+eval('"js-"');var b=x.document.querySelector('script[src*="'+a+'"]');if(!b){var c=x.document.getElementsByTagName("script");var d=new RegExp("^.*"+a);var e=0;for(a=c.length;e<a;e++)if(d.test(c[e].src)){b=c[e];break}}return b?b.src.replace(/\/[^\/]*$/,"/"):""}();t("H.getScriptPath",function(){return ao});

  function bo(a,b){if(!a)throw new D(bo,0,a);bo.l.constructor.call(this,a);this.b={};this.c=b&&b.xc;this.f=co++;}u(bo,km);var co=0;
  bo.prototype.V=function(a,b,c,d,e,f){var g=xd(d),h=this.hb,k=g+(c.exp-h.pixelProjection.exp),l=h.min,m=h.max;d=h.tileSize;var p=h.ga().j,q=this.xb,r=q.dd();var v=q.Db().w;var w=c.w,z=c.x,J=c.y,G={};if(g<l||g>m)return jk.DONE;e=h.requestTiles(a,k,e,f,this.f);a=e.total;e=e.tiles;f=e.length;this.g=c;this.j=b;this.a=k;r!==p&&q.qc(p);c=d=d*w/(Dd(2,k)*d);this.c||(d%1&&(d=yd(d),w=c/d,z/=w,J/=w,w=Dd(2,k)*d),z=yd(z),J=yd(J));this.i=c;k=-d;g=v+d;for(h=0;h<f;h++){v=e[h];if((l=v.data)&&l.tagName){c=b.x-(z-v.x*
  d);p=b.y-(J-v.y*d);q.Zc(l,c,p,d,d);for(r=c;(r-=w)>k;)q.Zc(l,r,p,d,d);for(r=c;(r+=w)<g;)q.Zc(l,r,p,d,d);}G[this.a+"_"+v.x+"_"+v.y]=v;}this.b=G;return f===a?jk.DONE:jk.PENDING};bo.prototype.Ga=function(a,b,c){var d=this.i,e=d/this.hb.tileSize,f=this.g,g=this.j,h;if(tc(this.a)&&f){a=f.x+(a-g.x);b=f.y+(b-g.y);var k=yd(f.w/d);var l=f=yd(a/d);g=yd(b/d);Ad(l)>=k&&(l%=k);0>l&&(l=k+l);(k=this.b[this.a+"_"+l+"_"+g])&&k.Ga&&(h=k.Ga((a-d*f)/e,(b-d*g)/e,c));}return h||ff};bo.prototype.ie=function(){return "2d"};function eo(a,b){b=b||{};C(a,ml,eo,0);eo.l.constructor.call(this,a);this.xc=!!b.xc;this.c=b.ib||0;this.a=[];this.b={};}u(eo,km);
  eo.prototype.V=function(a,b,c,d,e,f){var g,h=this.hb,k;d-=this.c;this.a.length=0;var l=this.b;this.b=g={};if(d>=h.min&&d<=h.max){var m=h.Hd(a,d,e,f);var p=m.overlays;if(a=p.length)for(p.sort(Rg),d=this.xb,e=this.xc,f=0;f<a;f++){h=p[f];var q=h.G();var r=c.lb(q.Rb());var v=c.lb(q.Nb());q=c.w;r.x>=v.x&&(r.x-=q);q=-((r.x+v.x)/q>>1)*q;r.x+=q;r.add(b);v.x+=q;v.add(b);e||(r.round(),v.round());(q=l[k=h.gb()])?delete l[k]:q={Oo:h};g[k]=q;var w=r.x;r=r.y;var z=v.x;v=v.y;var J=z-w;var G=v-r;d.qc(h.dd());d.Zc(h.ad(),
  w,r,J,G);q.mh?q.mh.set(w,r,z,v):q.mh=new lk(w,r,z,v);this.a.push(q);}}return !m||m.requested&&m.requested===m.total||!m.requested&&p.length===m.total?jk.DONE:jk.PENDING};eo.prototype.Ga=function(a,b,c){for(var d=this.a,e=d.length,f,g,h;e--;)if(f=d[e],g=f.mh,g.Pf(a,b))if(f=f.Oo,h)h.push(f);else if(h=[f],c)break;return h||ff};eo.prototype.ie=function(){return "2d"};eo.prototype.u=function(){this.a=null;eo.l.u.call(this);};var fo={lookAt:{zoom:{min:-8,max:24},tilt:{min:0,max:0},incline:{min:0,max:0},heading:{min:180,max:180}},interaction:{ZOOM:ul.ZOOM,COORD:ul.COORD},capture:!0};t("H.map.render.p2d.capabilities",fo);function go(a,b){this.a=[];go.l.constructor.apply(this,arguments);}u(go,om);n=go.prototype;n.Nj=function(){return this.hb.Lc.apply(this.hb,arguments)};n.V=function(a,b,c,d,e,f,g){this.a=[];return go.l.V.apply(this,arguments)};n.Ck=1;n.jl=function(a,b,c,d,e,f){var g=this.Ck=d.$a();e*=g;f*=g;var h=c.Db();b=h.w*g;h=h.h*g;var k=c.ud();this.xc?(e-=k.x*g,f-=k.y*g):(e=xd(e-k.x*g),f=xd(f-k.y*g));d.Zc(c.ad(),e,f,b,h);a.detail?a.detail.set(e,f,e+b,f+h):a.detail=new lk(e,f,e+b,f+h);this.a.push(a);};
  n.Ga=function(a,b,c){for(var d=this.a,e=d.length,f,g,h,k=ff,l=this.Ck;e--&&!(f=d[e],g=f.detail,g.Pf(a,b)&&(f=f.Mk,(!(h=f.Cb().g)||h.hg((a-g.left)/l,(b-g.top)/l,0))&&0>k.indexOf(f)&&(k===ff&&(k=[]),k.push(f),c))););return k};n.ie=function(){return "2d"};n.u=function(){this.a=null;go.l.u.call(this);};function V(a,b,c,d){V.l.constructor.call(this,a,b,c,d);this.N=new I(0,0);if(c=d.renderBaseBackground)this.to=c.lower,this.no=c.higher;this.mo=!!d.enableSubpixelRendering;this.od=ho;this.Oj=0;this.Ne=this.Mj=!1;this.i=new Wl;this.a=d=new dm;this.Pd=A(this.Pd,this);d.addEventListener(d.g.Rg,this.Pd);this.Fa=A(this.Fa,this);d=a.element;this.Aa=a=d.ownerDocument.createElement("div");a.style.position="absolute";a.style.width=a.style.height="100%";a.style.zIndex=0;d.insertBefore(a,d.firstChild);this.ik=
  new Am(this.Aa,this.sa);this.o=[];io(this);this.bi=A(V.prototype.bi,this);this.A=jo;this.Cg();this.zoom=ko(this,this.O.vb()+this.ib);this.Jb();lo(this,b.mb().position,this.zoom);this.bb();this.U();}u(V,ql);t("H.map.render.p2d.RenderEngine",V);V.prototype.type=Al.P2D;V.prototype.type=V.prototype.type;var jo=2;V.prototype.getState=function(){return this.A};V.prototype.getState=V.prototype.getState;function mo(a,b,c){b=c-b;return Ad(b)<a.ra.w/2?b:b-a.ra.w*c/Ad(c)}
  V.prototype.bh=function(a){var b=this,c=a.b,d=a.newValue,e=a.modifiers;a=d.position;var f=d.bounds,g,h=this.zoom,k=this.m,l=0;e&Si.POSITION&&(g=b.ra.lb(a));if(e&Si.BOUNDS)d=no(this,f.G(),e&Si.ZOOM?d.zoom:B,e&Si.POSITION?a:B),this.O.$b(d,c);else {e&Si.POSITION||(g=b.ra.lb(d.position));var m=g.x;var p=g.y;oo(this);this.N.set(0,0);d=po(this,d);var q=d.zoom;var r=d.position;if(c){var v=q-h;var w={x:k.x,y:k.y};c=this.ra.qe(w).x;var z=this.ra.projection.$c(a);if(z.x!==this.m.x||z.y!==this.m.y||q!==this.zoom)m=
  mo(this,c,m),qo(this,function(J){var G=J-l;if(q!==h){g=b.ra.qe(z);var U=b.ra.qe(w);m=mo(b,U.x,g.x);p=g.y-U.y;}l=J;ro(b,m*G,p*G);h+=v*G;so(b,h);b.bb();b.ha();},this.kb,function(){lo(b,r,q);so(b,q);b.bb(r);b.ha();},this.dc);}else to(this),lo(this,r,q),so(this,q),this.bb(r);this.ha();}};V.prototype.kb=300;V.prototype.Fg=function(a){var b=Cc(a);if(!b||b&&0>a)throw new D(this.Fg,1,"positive number required");this.kb=a;};V.prototype.setAnimationDuration=V.prototype.Fg;V.prototype.sh=function(){return this.kb};
  V.prototype.getAnimationDuration=V.prototype.sh;V.prototype.dc=Nl;V.prototype.Gg=function(a){if(!Ca(a))throw new D(this.Gg,1,"function required");this.dc=a;};V.prototype.setAnimationEase=V.prototype.Gg;V.prototype.th=function(){return this.dc};V.prototype.getAnimationEase=V.prototype.th;V.prototype.Cg=function(){this.dc=Nl;this.kb=300;};V.prototype.resetAnimationDefaults=V.prototype.Cg;
  V.prototype.oi=function(a,b,c){var d;this.Xa=zk();(d=this.fa.ja.splice(a,1)[0])&&d.B&&d.B();(d=this.s.ja.splice(a,1)[0])&&d.B&&d.B();(d=this.W.ja.splice(a,1)[0])&&d.B&&d.B();(d=this.ma.ja.splice(a,1)[0])&&d.B&&d.B();this.f=this.c.Na();0===a&&(vl(this,b,!1),this.Jb());this.o=Bm(this.ik,uo(this),vo(this));this.te();c||this.ha();};function io(a){var b=a.c.Na(),c=0,d=b.length;[a.fa={},a.s={},a.W={},a.ma={}].forEach(function(e){e.Yc=[];e.ja=[];});for(a.f=a.c.Na();c<d;c++)a.jf(c,b[c]);a.Jb();}
  V.prototype.pi=function(){this.Jb();this.ha();};V.prototype.Mh=function(a,b,c){var d,e,f,g;if(b){var h={xc:this.mo,ib:this.ib};b.V?C(b,mm)?e=new lm(b):C(b,ym)&&(g=new lm(b)):(b.requestOverlays&&(d=new eo(b,h)),b.requestTiles&&(e=new bo(b,h)),b.requestMarkers&&(f=new go(b,h)),b.requestDomMarkers&&(g=new rm(b,h)));}c=c||0;this.fa.ja.splice(a,c,d);this.s.ja.splice(a,c,e);this.W.ja.splice(a,c,f);this.ma.ja.splice(a,c,g);this.f=this.c.Na();this.o=Bm(this.ik,uo(this),vo(this));};
  function vo(a){var b=[];b=b.concat(a.s.ja);b=b.concat(a.fa.ja);b=b.concat(a.W.ja);b=b.concat(a.ma.ja);return b=b.filter(tc)}function po(a,b){var c=wl(a,wl(a,b.zoom)+a.ib);a=xl(a,b);a.zoom=c;return a}function lo(a,b,c){var d=a.ra;d.Qa(c);a.m=d.projection.$c(b);d.x=d.w*a.m.x;d.y=d.h*a.m.y;}V.prototype.Wa=function(a,b){var c=this.g.center,d=this.sa;return this.ra.Sa((a-c.x)*d,(b-c.y)*d)};V.prototype.screenToGeo=V.prototype.Wa;V.prototype.Eg=function(a,b){a=this.Wa(a,b);b=this.O.mb();b.position=a;return b};
  V.prototype.Fa=function(a){var b=this.sa,c=this.g.center,d=c.x*b;c=c.y*b;a=this.ra.lb(a);var e=this.ra.w;return new I(xd((a.x-xd(a.x/e)*e+d)/b),xd((a.y+c)/b))};V.prototype.geoToScreen=V.prototype.Fa;V.prototype.G=function(a,b){var c=this.yb[a||4];a=this.ra;var d=c.left-b,e=a.Sa(d,c.top-b),f=c.right+b;b=a.Sa(f,c.bottom+b);f-d>=a.w&&(e.lng=-(b.lng=180));return dg(e,b)};
  V.prototype.Ga=function(a,b,c,d){var e=[],f=this.sa,g;a*=f;b*=f;f=[this.fa,this.s,this.W,this.ma];for(g=f.length;g--&&(!c||!e.length);){for(var h=e,k=f[g].ja,l=a,m=b,p=c,q=k.length;q--&&!((e=k[q])&&e.Ga&&(h=h.concat(e.Ga(l,m,p)),h.length&&p)););e=h;}d(e);};V.prototype.getObjectsAt=V.prototype.Ga;V.prototype.ec=y;function uo(a){a=a.yb[2];return {w:a.right-a.left,h:a.bottom-a.top}}
  V.prototype.U=function(){var a=this.o.length,b;V.l.U.call(this);var c=uo(this);this.N.set(0,0);var d=c.w;for(b=c.h;a--;){c=this.o[a];var e=c.Db();e.w===d&&e.h===b||c.yf(d,b);}this.ec=new Ki(d,b);this.ha();};V.prototype.getCapabilities=function(){return fo};V.prototype.getCapabilities=V.prototype.getCapabilities;function wo(a){a.b&&a.b.va()||zk()-a.Xa<a.od&&!a.v?a.Vd=Jk(a.bi):(a.v&&(a.te(),xo(a)),a.A=jo);}n=V.prototype;
  n.te=function(){this.fa.Yc.length=0;this.s.Yc.length=0;this.W.Yc.length=0;this.ma.Yc.length=0;};
  n.bi=function(){var a;this.C&&this.C.before();var b=this.s.ja;var c=this.g.center.clone().scale(this.sa).round();var d=this.G(1,0);var e=this.G(1,yo);var f=this.zoom;var g=f-this.ib;var h=this.ra;var k=this.to;var l=this.no;var m=b[0];b=this.N;var p=this.o.length;var q=this.f;for(a=q.length;p--;){var r=this.o[p];C(r,jm)&&r.clear();}if(m){if(k)for(;k;)p=f-k,m.V(d,c,h,p,!0,b),--k;if(l&&this.Ne)for(r=1;r<=l&&(p=f+r,h.Qa(p),k=this.G(2,0),h.Qa(f),!m.V(k,c,h,p,!0,b));r++);}for(this.od=ho;a--;)h=q[a],C(h,
  aj)&&h.ga()&&h.ga().nf(e,g);d=this.Bk(d,c,f,!1,b,zo,this.s,this.fa);c=this.Bk(e,c,g,!1,b,Ao,this.W,this.ma);this.v=d&&c;this.b&&this.b.va()&&this.Sg();this.J||(this.J=this.O.mb());this.J.bounds=this.G(4,0);this.O.bb(this.J);this.J=null;this.ec&&(this.g.bb(this.ec),this.ec=y);f<this.Oj?this.Ne=!0:this.Mj&&(this.Ne=!1);this.Oj=f;this.Mj=d;this.C&&this.C.after();wo(this);};
  n.Bk=function(a,b,c,d,e,f,g){var h=Array.prototype.slice.call(arguments,6),k=h.length,l=h[0].ja.length,m=k*l,p=!!m,q;for(q=0;q<m;q++){if(f===zo){var r=q%k;var v=Math.floor(q/k);}else r=Math.floor(q/l),v=q%l;var w=h[r].ja[v];r=h[r].Yc;w&&(w=w.V(a,b,this.ra,c,d,e,this.Fa),w===jk.ACTIVE&&(this.od=Infinity),w!==jk.DONE||r[v]||(xo(this,this.f[v]),r[v]=!0),r[v]||(p=!1));}return p};function xo(a,b){a.dispatchEvent({type:a.zk.pj,target:b||a});}
  n.u=function(){var a=this.c.Na()[0],b=this.g;Kk(this.Vd);to(this,!0);a&&vl(this,a,!1);vo(this).forEach(function(c){c.B();});b.element&&b.element.removeChild(this.Aa);this.Aa=null;this.A=3;V.l.u.call(this);};n.ha=function(){this.Xa=zk();this.A===jo&&(this.v=!1,this.A=1,wo(this));};function Bo(a,b,c){ro(a,b*a.sa,c*a.sa);a.N.set(0,0);a.bb();a.ha();}function ro(a,b,c){var d=a.ra;a=a.m;d.x=Wd(d.x+b,d.w);d.y=wd(0,vd(d.w,d.y+c));a.x=d.x/d.w;a.y=d.y/d.h;}
  n.Ae=function(a,b,c){a=wl(this,wl(this,a)+this.ib);so(this,a,b,c);};V.prototype.zoomAt=V.prototype.Ae;function so(a,b,c,d){var e=a.sa,f=a.g.center;c===+c&&d===+d?(c=(c-f.x)*e,d=(d-f.y)*e,a.N.set(c,d),ro(a,c,d),a.ra.Qa(b),ro(a,-c,-d)):(a.N.set(0,0),a.ra.Qa(b));a.zoom=b;a.bb();a.ha();}
  function no(a,b,c,d){var e=a.getCapabilities().lookAt.zoom.max,f=b.fb(),g=d||f;if(b.jg()||c&&d)c=c===B?e:c;else {var h=new Yi(a.ra.projection);h.Qa(e);var k=h.lb(b.Rb()).round();var l=h.lb(b.Nb()).round();e=h.w;b.Gb()&&(k.x-=e);d?(f=h.lb(g),b=2*wd(f.x-k.x,l.x-f.x),k=2*wd(f.y-k.y,l.y-f.y)):(b=l.x-k.x,k=l.y-k.y,g=f);c===B&&(f=a.yb[4],c=f.right-f.left,f=f.bottom-f.top,c=-8+vd(Bd(c/b*e)/Ld,Bd(f/k*e)/Ld)-a.ib,c=wl(a,c));}return {zoom:yd(c),position:g}}
  function oo(a){to(a,!0);a.a.va()&&a.Ab(!0);a.i.va()&&a.Bb(!0);to(a,!0);}V.prototype.uc=function(a,b){oo(this);Co(this,b);this.i.start(a,!!b);};V.prototype.startInteraction=V.prototype.uc;function Co(a,b){if(b){var c={};c.mf=b.power;c.Oe=b.ease;c.duration=b.duration;a.j=c;}}function ko(a,b){return wl(a,wl(a,b-a.ib)+a.ib)}
  V.prototype.lc=function(a,b,c,d,e){var f=!1;this.i.va()&&(b=this.i.store(a,b,c,d,e),this.i.Hc(ul.COORD)&&(a=this.i.ce(),0<Vl(a)&&(Bo(this,-a.x,-a.y),f=!0)),b&&this.i.Hc(ul.ZOOM)&&(a=this.i.Wf(),b=this.i.Xf(),b=Bd(Dd(2,this.zoom)*b)/Ld,b!==this.zoom&&(b=ko(this,b),so(this,b,a.x,a.y),f=!0)),f&&this.ha());};V.prototype.interaction=V.prototype.lc;
  V.prototype.Bb=function(a){var b=this;if(this.i.va()&&!a){if(this.j){a=this.i.Eb();var c=this.i.zc();var d=this.j.duration;var e=(this.j.mf||1)*a;var f=new zm(-e/(0<d?d:1),e);!E(c.x)&&!E(c.y)&&0<e&&b.i.Hc(ul.COORD)&&qo(this,function(g){e=f.We(g*d);E(e)||Bo(b,xd(-c.x*e),xd(-c.y*e));},d,void 0,this.j.Oe);}this.j=null;this.i.clear();}};V.prototype.endInteraction=V.prototype.Bb;V.prototype.tc=function(a,b,c){oo(this);this.a.start(b,c);Co(this,a);};V.prototype.startControl=V.prototype.tc;
  V.prototype.control=function(a,b,c){if(E(+c))throw new D(this.control,2,c);if(E(a))throw new D(this.control,0,a);if(E(b))throw new D(this.control,1,b);this.a.va()&&this.a.set(a,b,c,0,0,0);};V.prototype.control=V.prototype.control;
  V.prototype.Ab=function(a,b){var c=this,d;if(this.a.va()){to(this,!0);var e=zk();var f=e-this.za;if(1<=f){var g=gm(this.a);Do(this,g,f);}if(!this.j||a||b)"function"===typeof b&&(a=this.mb(),a.zoom=this.zoom-this.ib,b(a),a.zoom+=this.ib,Eo(this,a));else {b=this.a.Eb();var h=this.a.zc();var k=this.j.duration;var l=(this.j.mf||1)*b;var m=new zm(-l/(0<k?k:1),l);!E(h.nb)&&!E(h.ob)&&0<l&&qo(this,function(p,q,r,v){e&&(r=v-e,e=0);l=m.We(p*k)*r;E(l)||((d=h.pb*l)&&so(c,ko(c,c.zoom+d),c.a.b,c.a.c),Bo(c,xd(h.nb*
  l),xd(h.ob*l)));},k,void 0,this.j.Oe);}this.a.reset();}};V.prototype.endControl=V.prototype.Ab;
  function Eo(a,b){var c=a.m,d=a.ra.projection.$c(b.position),e=a.ra.qe(d),f=e.y;e=e.x;var g=b.zoom;c=a.ra.qe(c);b=c.y;var h=c.x;c=a.zoom;var k=a.a.Eb(),l=a.a.b,m=a.a.c,p=0;e=mo(a,h,e);e-=h;f-=b;c=g-c;b=Cd(e*e+f*f+c*c);if(0!==k&&0!==b){var q=e/b;var r=f/b;var v=c/b;var w=k*k/(2*b);qo(a,function(z,J){var G;if(1!==z){z=k*J-w*J*J/2;J=z-p;if(G=v*J)G=ko(a,a.zoom+G),so(a,ko(a,G),l,m);Bo(a,xd(q*J),xd(r*J));p=z;}else a.m=d,so(a,ko(a,g),l,m),a.bb(),a.ha();},2*b/k);}}
  V.prototype.Pd=function(a){var b=this,c=a.c;this.N.set(0,0);c.nb||c.ob||c.pb?(this.za=zk(),qo(this,function(d,e,f,g){b.za=g;Do(b,c,f);},Number.POSITIVE_INFINITY),this.ha()):to(this,!0);};function Do(a,b,c){c=c||0;b.pb&&so(a,ko(a,a.zoom+b.pb*c),a.a.atX,a.a.atY);Bo(a,b.nb*c,b.ob*c);}function qo(a,b,c,d,e){a.b&&a.b.va()&&a.b.stop(!0);a.b=new nm(a,b,c,d,e);a.b.start();}function to(a,b){a.b&&a.b.va()&&a.b.stop(b);}V.prototype.nh=function(){};V.prototype.enter=V.prototype.nh;
  V.prototype.Vf=function(a){tl(this.Aa,a);};V.prototype.exit=V.prototype.Vf;V.prototype.capture=function(a,b,c,d){var e=this.Aa.ownerDocument.createElement("canvas"),f=e.getContext("2d"),g=this.sa;e.width=(c-a)*g;e.height=(d-b)*g;for(c=0;c<this.o.length;c++)d=this.o[c],C(d,jm)&&f.drawImage(d.L(),-a*g,-b*g);return Wb(e)};var Ao=0,zo=1,ho=1E3,yo=256;

  function Fo(a){var b=a.ownerDocument;b=b.documentElement||b.body.parentNode||b.body;try{var c=a.getBoundingClientRect();}catch(d){c={top:0,right:0,bottom:0,left:0,height:0,width:0};}return {x:c.left+("number"===typeof window.pageXOffset?window.pageXOffset:b.scrollLeft),y:c.top+("number"===typeof window.pageYOffset?window.pageYOffset:b.scrollTop)}}var Go=Function("return this")();function Ho(a,b,c,d,e,f,g){Ho.l.constructor.call(this,a);this.pointers=b;this.changedPointers=c;this.targetPointers=d;this.currentPointer=e;this.originalEvent=g;this.target=f;}u(Ho,rd);t("H.mapevents.Event",Ho);function Io(a,b,c,d,e,f){if(isNaN(a))throw Error("x needs to be a number");if(isNaN(b))throw Error("y needs to be a number");if(isNaN(c))throw Error("pointer must have an id");this.viewportX=a;this.viewportY=b;this.target=null;this.id=c;this.type=d;this.dragTarget=null;this.button=tc(e)?e:-1;this.buttons=tc(f)?f:0;this.a=this.button;}t("H.mapevents.Pointer",Io);
  function Jo(a,b,c){if(isNaN(b))throw Error("x needs to be a number");if(isNaN(c))throw Error("y needs to be a number");a.viewportX=b;a.viewportY=c;}Io.prototype.gn=function(){return this.a};Io.prototype.getLastChangedButton=Io.prototype.gn;function Ko(a,b){a.a=b;a.buttons|=Io.prototype.b[+b]||0;}function Lo(a,b){a.a=b;a.buttons&=~(Io.prototype.b[+b]||0);}Io.prototype.b=[1,4,2];var Mo={NONE:-1,LEFT:0,MIDDLE:1,RIGHT:2};Io.Button=Mo;function No(a){this.a=a instanceof Array?a.slice(0):[];}n=No.prototype;n.clear=function(){this.a.splice(0,this.a.length);};n.length=function(){return this.a.length};n.indexOf=function(a){for(var b=this.a.length;b--;)if(this.a[b].id===a)return b;return -1};function Oo(a,b){b=a.indexOf(b);return -1!==b?a.a[b]:null}n.remove=function(a){a=this.indexOf(a);return -1!==a?this.a.splice(a,1)[0]:null};function Po(a,b){for(var c=a.a.length,d=[];c--;)a.a[c].type!==b&&d.push(a.a[c]);a.a=d;}
  function Qo(a,b){for(var c=a.a.length;c--;)if(a.a[c].dragTarget===b)return !0;return !1}n.push=function(a){if(a instanceof Io)return this.a.push(a);throw Error("list needs a pointer");};n.Na=function(){return this.a};n.clone=function(){return new No(this.a)};function Ro(a,b,c){c=c||{};if(!(a instanceof T))throw Error("events: map instance required");if(!(b instanceof Array))throw Error("events: map array required");nd.call(this);this.kh=c.kh||300;this.Bj=c.Bj||50;this.Il=c.Il||50;this.Jl=c.Jl||500;this.Vh=c.Vh||900;this.Uh=c.Uh||8;this.map=a;this.o=this.map.ya;this.j=this.o.element;this.O=b;this.a=new No;this.b=new No;this.i={};this.c=null;this.s=!0;this.aa={};this.f={};this.m=null;this.Le=A(this.Le,this);this.C={pointerdown:this.qm,pointermove:this.rm,
  pointerup:this.sm,pointercancel:this.pm};So(this);}u(Ro,nd);function So(a,b){var c,d=a.O.length;for(c=0;c<d;c++){var e=a.O[c];var f=e.listener;"function"===typeof f&&(b?(e.target||a.j).removeEventListener(e.Ta,f):(e.target||a.j).addEventListener(e.Ta,f));}}function To(a,b,c){var d;if("function"===typeof a.C[b]){"pointermove"!==b&&(a.s=!0);var e=0;for(d=a.b.length();e<d;e++){var f=a.b.a[e];a.j.contains(c.composedPath()[0])?Uo(a,f,a.Ij.bind(a,c,b,f)):a.Ij(c,b,f,null);}}a.b.clear();}n=Ro.prototype;
  n.Ij=function(a,b,c,d){Vo(c.id,this.aa);this.C[b].call(this,c,d,a);};function Uo(a,b,c){if(a.c===b)c(b.target);else {var d=a.o;var e=b.viewportX;b=b.viewportY;if(0>e||0>b||e>=d.width||b>=d.height)c(y);else {var f=a.map;f.de(e,b,function(g){c(g||f);});}}}
  n.sm=function(a,b,c){var d=a.id;a.target=b;Wo(this,a,c);Xo(this,b,"pointerup",c,a);"mouse"!==a.type&&Xo(this,b,"pointerleave",c,a);b=this.i[a.id];var e={x:a.viewportX,y:a.viewportY},f=c.timeStamp,g=a.target,h=this.m;b&&b.target===g&&b.He.Za(e)<this.Il&&f-b.Yi<this.Jl?(Xo(this,g,"tap",c,a),h&&h.target===g&&f-h.Yi<this.kh?h.He.Za({x:a.viewportX,y:a.viewportY})<this.Bj&&(Xo(this,g,"dbltap",c,a),this.m=null):this.m={target:g,He:new I(a.viewportX,a.viewportY),Yi:c.timeStamp}):this.m=null;this.i={};Vo(d,
  this.f);};function Wo(a,b,c){b===a.c&&(Xo(a,b.dragTarget,"dragend",c,b),a.c=null,Vo(b.id,a.aa));b.dragTarget=null;}n.Le=function(a,b){var c=this;Xo(this,a.dragTarget,"drag",b,a);Vo(a.id,this.aa);this.aa[a.id]=setTimeout(function(){c.Le(a,b);},150);};function Vo(a,b){b[a]&&(b[a].timeout?clearTimeout(b[a].timeout):clearTimeout(b[a]),delete b[a]);}
  function Yo(a,b,c){var d=b.target,e=new I(b.viewportX,b.viewportY),f=b.id;Vo(f,a.f);var g=setTimeout(function(){d&&d===b.target&&e.Za({x:b.viewportX,y:b.viewportY})<a.Uh&&(Xo(a,d,"longpress",c,b),delete a.i[b.id]);},a.Vh);a.f[f]={timeout:g,He:e};}
  n.rm=function(a,b,c){var d=a.dragTarget,e=a.id;var f=a.target;a.target=b;f!==b&&(Xo(this,f,"pointerleave",c,a),Xo(this,b,"pointerenter",c,a));d?this.c?(this.Le(a,c),this.f[e]&&this.f[e].He.Za({x:a.viewportX,y:a.viewportY})>this.Uh&&Vo(e,this.f)):this.s?this.s=!1:(this.c=a,Xo(this,d,"dragstart",c,a),this.Le(a,c),delete this.i[e],this.s=!0):(!this.c||this.c&&this.c.dragTarget!==b&&this.c.dragTarget!==this.map)&&Xo(this,b,"pointermove",c,a);};
  n.qm=function(a,b,c){var d=!(/^(?:mouse|pen)$/.test(a.type)&&0!==c.button);if(b){a.target=b;this.i[a.id]={He:new I(a.viewportX,a.viewportY),target:a.target,Yi:c.timeStamp};"mouse"!==a.type&&Xo(this,b,"pointerenter",c,a);var e=Xo(this,b,"pointerdown",c,a);!this.c&&d&&(b.draggable&&!Qo(this.a,b)?a.dragTarget=b:!this.map.draggable||e.defaultPrevented||Qo(this.a,this.map)||(a.dragTarget=this.map));Yo(this,a,c);}};
  n.pm=function(a,b,c){var d=a.id;a.target=null;b?(Xo(this,b,"pointerleave",c,a),Xo(this,b,"pointercancel",c,a)):Xo(this,this.map,"pointercancel",c,a);Wo(this,a,c);this.i={};Vo(d,this.f);};function Xo(a,b,c,d,e){if(b&&"function"===typeof b.dispatchEvent){var f=Ho;var g=a.a.Na(),h=a.b.Na();a=a.a;var k,l=a.a.length,m=[];for(k=0;k<l;k++)a.a[k].target===b&&m.push(a.a[k]);f=new f(c,g,h,m,e,b,d);e.button=/^(?:longpress|(?:dbl)?tap|pointer(?:down|up))$/.test(c)?e.a:Mo.NONE;b.dispatchEvent(f);}return f}
  n.u=function(){So(this,!0);this.a.clear();this.b.clear();var a=this.aa,b;for(b in a)Vo(b,a);a=this.f;for(var c in a)Vo(c,a);this.c=this.i=this.m=this.map=this.b=this.a=this.O=this.S=null;nd.prototype.u.call(this);};function Zo(a){this.g=A(this.g,this);Ro.call(this,a,[{Ta:"touchstart",listener:this.g},{Ta:"touchmove",listener:this.g},{Ta:"touchend",listener:this.g},{Ta:"touchcancel",listener:this.g}]);this.J={touchstart:"pointerdown",touchmove:"pointermove",touchend:"pointerup",touchcancel:"pointercancel"};this.v=(a=(a=a.m)?a.L():null)?Array.prototype.slice.call(a.querySelectorAll("a"),0):[];}u(Zo,Ro);
  Zo.prototype.g=function(a){var b=a.touches,c=this.a.length(),d;if("touchstart"===a.type&&c>=b.length){c=this.a.clone();for(d=b.length;d--;)c.remove(b[d].identifier);for(d=c.length();d--;)this.a.remove(c.a[d].id);this.b=c;To(this,"pointercancel",a);this.b.clear();}if(this.J[a.type]){b=Fo(this.o.element);c=a.type;d=a.changedTouches;var e=d.length,f;this.b.clear();for(f=0;f<e;f++){var g=d[f];var h=Oo(this.a,g.identifier);var k=g.pageX-b.x;var l=g.pageY-b.y;if(h)if("touchmove"===c){g=Math.abs(h.viewportX-
  k);var m=Math.abs(h.viewportY-l);if(1<g||1<m||1===g&&1===m)Jo(h,k,l),this.b.push(h);}else "touchend"===c&&(this.a.remove(h.id),this.b.push(h),Lo(h,Mo.LEFT));else h=new Io(k,l,g.identifier,"touch",Mo.LEFT,1),this.a.push(h),this.b.push(h);}To(this,this.J[a.type],a);-1===this.v.indexOf(a.target)&&a.preventDefault();}};Zo.prototype.u=function(){this.v=null;Ro.prototype.u.call(this);};function $o(a){var b=ap(this);(window.PointerEvent||window.MSPointerEvent)&&b.push({Ta:"MSHoldVisual",listener:"prevent"});Ro.call(this,a,b);}u($o,Ro);function ap(a){var b=!!window.PointerEvent,c,d,e=[];a.g=A(a.g,a);"MSPointerDown MSPointerMove MSPointerUp MSPointerCancel MSPointerOut MSPointerOver".split(" ").forEach(function(f){c=f.toLowerCase().replace(/ms/g,"");d=b?c:f;e.push({Ta:d,listener:a.g,target:/^pointer(up|move)$/.test(c)?window:null});});return e}var bp={2:"touch",3:"pen",4:"mouse"};
  $o.prototype.g=function(a){var b=window.PointerEvent?a.type:a.type.toLowerCase().replace(/ms/g,""),c=Fo(this.j),d=Oo(this.a,a.pointerId),e=a.pageX-c.x;c=a.pageY-c.y;var f=bp[a.pointerType]||a.pointerType;Zc&&"rtl"===x.getComputedStyle(this.o.element).direction&&(e-=(x.devicePixelRatio-1)*this.o.width);if(!(d||/^pointer(up|out|cancel)$/.test(b)||"touch"===f&&"pointerdown"!==b)){d={x:e,y:c};var g=a.pointerType;"number"===typeof g&&(g=bp[g]);d=new Io(d.x,d.y,a.pointerId,g,a.button,a.buttons);this.a.push(d);}if(d)if(/^pointer(up|cancel)$/.test(b)?
  ("touch"===f&&this.a.remove(d.id),Lo(d,a.button)):"pointerdown"===b&&("touch"===a.pointerType&&(Po(this.a,"mouse"),Po(this.a,"pen")),Ko(d,a.button)),this.b.push(d),"pointermove"!==b)Jo(d,e,c),To(this,/^pointer(over|out)$/.test(b)?"pointermove":b,a);else if(d.viewportX!==e||d.viewportY!==c)Jo(d,e,c),To(this,b,a);this.b.clear();};function cp(a,b,c,d){cp.l.constructor.call(this,"contextmenu");this.items=[];this.viewportX=a;this.viewportY=b;this.target=c;this.originalEvent=d;}u(cp,rd);t("H.mapevents.ContextMenuEvent",cp);function dp(a){this.Hh=A(this.Hh,this);this.Jh=A(this.Jh,this);this.Ih=A(this.Ih,this);this.v=!1;this.g=-1;this.J=0;dp.l.constructor.call(this,a,[{Ta:"contextmenu",listener:this.Hh},{target:a,Ta:"longpress",listener:this.Jh},{target:a,Ta:"dbltap",listener:this.Ih}]);}u(dp,Ro);n=dp.prototype;n.Jh=function(a){var b=a.currentPointer;"touch"===b.type&&1===a.pointers.length&&ep(this,b.viewportX,b.viewportY,a.originalEvent,a.target);};n.Ih=function(a){"touch"===a.currentPointer.type&&(this.J=Date.now());};
  n.Hh=function(a){var b=this;-1===this.g?this.g=setTimeout(function(){var c=Fo(b.j),d=a.pageX-c.x;c=a.pageY-c.y;b.g=-1;ep(b,d,c,a);},this.kh):(clearInterval(this.g),this.g=-1);a.preventDefault();};function ep(a,b,c,d,e){var f=a.map,g=Date.now()-a.J;e?!a.v&&g>a.Vh&&(a.v=!0,e.dispatchEvent(new cp(b,c,e,d)),Ce(f.L(),a.gj,a.Hj,!1,a)):f.de(b,c,a.vo.bind(a,b,c,d));}n.vo=function(a,b,c,d){d=d&&Ca(d.dispatchEvent)?d:this.map;ep(this,a,b,c,d);};n.gj=["mousedown","touchstart","pointerdown","wheel"];
  n.Hj=function(){this.v&&(this.v=!1,this.map.dispatchEvent(new rd("contextmenuclose",this.map)));};n.u=function(){var a=this.map.L();clearInterval(this.g);a&&Je(a,this.gj,this.Hj,!1,this);Ro.prototype.u.call(this);};function fp(a,b,c,d,e){fp.l.constructor.call(this,"wheel");this.delta=a;this.viewportX=b;this.viewportY=c;this.target=d;this.originalEvent=e;}u(fp,rd);t("H.mapevents.WheelEvent",fp);function gp(a){var b="onwheel"in document;this.N=b;this.J=(b?"d":"wheelD")+"elta";this.g=A(this.g,this);gp.l.constructor.call(this,a,[{Ta:(b?"":"mouse")+"wheel",listener:this.g}]);this.v=this.map.ya;}u(gp,Ro);
  gp.prototype.g=function(a){if(!a.Tl){var b=Fo(this.j);var c=a.pageX-b.x;b=a.pageY-b.y;var d=this.J,e=a[d+(d+"Y"in a?"Y":"")],f;Zc&&"rtl"===x.getComputedStyle(this.v.element).direction&&(c-=(x.devicePixelRatio-1)*this.v.width);if(e){var g=Math.abs;var h=g(e);e=(!(f=a[d+"X"])||3<=h/g(f))&&(!(f=a[d+"Z"])||3<=h/g(f))?((0<e)-(0>e))*(this.N?1:-1):0;}c=new fp(e,c,b,null,a);c.delta&&(a.stopImmediatePropagation(),a.preventDefault(),this.map.de(c.viewportX,c.viewportY,this.U.bind(this,c)));}};
  gp.prototype.U=function(a,b){var c=a.target=b||this.map,d,e;setTimeout(function(){c.dispatchEvent(a);a.f||(d=a.originalEvent,e=new x.WheelEvent("wheel",d),e.Tl=1,d.target.dispatchEvent(e));},0);};function hp(a){this.g=A(this.g,this);Ro.call(this,a,[{Ta:"mousedown",listener:this.g},{Ta:"mousemove",listener:this.g,target:window},{Ta:"mouseup",listener:this.g,target:window},{Ta:"mouseover",listener:this.g},{Ta:"mouseout",listener:this.g},{Ta:"dragstart",listener:this.v}]);}u(hp,Ro);
  hp.prototype.g=function(a){var b=a.type,c=Fo(this.j);c={x:a.pageX-c.x,y:a.pageY-c.y};var d;(d=this.a.a[0])||(d=new Io(c.x,c.y,1,"mouse"),this.a.push(d));this.b.push(d);Jo(d,c.x,c.y);/^mouse(?:move|over|out)$/.test(b)?To(this,"pointermove",a):(/^mouse(down|up)$/.test(b)&&(c=a.which-1,"up"===Go.RegExp.$1?Lo(d,c):Ko(d,c)),To(this,b.replace("mouse","pointer"),a));this.b.clear();};hp.prototype.v=function(a){a.preventDefault();};function ip(a){var b=a.ya.element.style;if(-1!==jp.indexOf(a))throw Error("InvalidArgument: map is already in use");this.a=a;jp.push(a);b.msTouchAction=b.touchAction="none";$c||!window.PointerEvent&&!window.MSPointerEvent?(this.c=new Zo(this.a),this.b=new hp(this.a)):this.c=new $o(this.a);this.g=new gp(this.a);this.f=new dp(this.a);this.a.zb(this.B,this);nd.call(this);}u(ip,nd);t("H.mapevents.MapEvents",ip);ip.prototype.c=null;ip.prototype.b=null;ip.prototype.g=null;ip.prototype.f=null;
  var jp=[];Fc(jp);ip.prototype.B=function(){this.a=null;this.c.B();this.g.B();this.f.B();this.b&&this.b.B();jp.splice(jp.indexOf(this.a),1);nd.prototype.B.call(this);};ip.prototype.dispose=ip.prototype.B;ip.prototype.Dm=function(){return this.a};ip.prototype.getAttachedMap=ip.prototype.Dm;function kp(a,b){b=void 0===b?{}:b;var c;kp.l.constructor.call(this);if(-1!==lp.indexOf(a))throw new D(kp,0,"events are already used");this.a=c=a.a;this.j=a;lp.push(a);c.draggable=!0;this.i=b.kinetics||{duration:600,ease:Nl};this.m=b.modifierKey||"Alt";this.enable(b.enabled);this.c=c.ya;this.f=this.c.element;this.g=0;c.addEventListener("dragstart",this.ei,!1,this);c.addEventListener("drag",this.Ek,!1,this);c.addEventListener("dragend",this.di,!0,this);c.addEventListener("wheel",this.Uk,!1,this);c.addEventListener("dbltap",
  this.Pk,!1,this);c.addEventListener("pointermove",this.Fk,!1,this);Be(this.f,"contextmenu",this.Dk,!1,this);a.zb(this.B,this);}u(kp,nd);t("H.mapevents.Behavior",kp);var lp=[];Fc(lp);kp.prototype.b=0;var mp={PANNING:1,PINCH_ZOOM:2,WHEEL_ZOOM:4,DBL_TAP_ZOOM:8,FRACTIONAL_ZOOM:16,TILT:32,HEADING:64};kp.Feature=mp;var np=mp.PANNING,op=mp.PINCH_ZOOM,pp=mp.WHEEL_ZOOM,qp=mp.DBL_TAP_ZOOM,rp=mp.FRACTIONAL_ZOOM,sp=mp.TILT,tp=mp.HEADING,up=np|op|pp|qp|rp|sp|tp;kp.DRAGGING=np;kp.WHEELZOOM=pp;
  kp.DBLTAPZOOM=qp;kp.FRACTIONALZOOM=rp;function vp(a,b){if(a!==+a||a%1||0>a||2147483647<a)throw new D(b,0,"integer in range [0...0x7FFFFFFF] required");}kp.prototype.disable=function(a){var b=this.b;a!==B?(vp(a,this.disable),b^=b&a):b=0;this.c.endInteraction(!0);this.b=b;this.a.draggable=0<(b&(np|sp|tp|op));};kp.prototype.disable=kp.prototype.disable;kp.prototype.enable=function(a){var b=this.b;a!==B?(vp(a,this.enable),b|=a&up):b=up;this.b=b;this.a.draggable=0<(b&(np|sp|tp|op));};
  kp.prototype.enable=kp.prototype.enable;kp.prototype.isEnabled=function(a){vp(a,this.isEnabled);return a===(this.b&a)};kp.prototype.isEnabled=kp.prototype.isEnabled;
  function wp(a,b,c){var d="touch"===b.currentPointer.type,e=0,f;if(f=!d){f=a.m;var g,h=b.originalEvent;h.getModifierState?g=h.getModifierState(f):g=!!h[f.replace(/^Control$/,"ctrl").toLowerCase()+"Key"];f=g;}f?e|=sp|tp:(e|=np,d&&(b=b.pointers,2===b.length&&(e|=op|tp,c?55>Ad(b[0].viewportY-b[1].viewportY)&&(e|=sp):a.Nh&ul.TILT&&(e|=sp))));e&=a.b;return (e&sp?ul.TILT:0)|(e&tp?ul.HEADING:0)|(e&op?ul.ZOOM:0)|(e&np?ul.COORD:0)}
  function xp(a){var b=a.pointers;a=b[0];b=b[1];a=[a.viewportX,a.viewportY];b&&a.push(b.viewportX,b.viewportY);return a}n=kp.prototype;n.Nh=0;n.ei=function(a){var b=wp(this,a,!0);if(this.Nh=b){var c=this.c;a=xp(a);c.startInteraction(b,this.i);c.interaction.apply(c,a);if(this.b&pp&&!(this.b&rp)&&(b=a[0],c=a[1],this.g)){a=this.a.vb();var d=(0>this.g?zd:yd)(a);a!==d&&(this.g=0,yp(this,a,d,b,c));}}};
  n.Ek=function(a){var b=wp(this,a,!1);if(b!==this.Nh)"pointerout"!==a.originalEvent.type&&"pointerover"!==a.originalEvent.type&&(this.di(a),this.ei(a));else if(b){b=this.c;var c=xp(a);b.interaction.apply(b,c);a.originalEvent.preventDefault();}};n.di=function(a){wp(this,a,!1)&&this.c.endInteraction(!this.i);};
  function yp(a,b,c,d,e){var f=+c-+b;a=a.a.b;if(isNaN(+b))throw Error("start zoom needs to be a number");if(isNaN(+c))throw Error("to zoom needs to be a number");0!==f&&(a.startControl(null,d,e),a.control(0,0,6,0,0,0),a.endControl(!0,function(g){g.zoom=c;}));}n.Uk=function(a){if(!a.defaultPrevented&&this.b&pp){var b=a.delta;var c=this.a.vb();var d=this.a;var e=d.ic().type;d=this.b&rp?c-b:(0>-b?zd:yd)(c)-b;if(e===Vj.P2D||e===Vj.WEBGL||e===Vj.HARP)yp(this,c,d,a.viewportX,a.viewportY),this.g=b;a.preventDefault();}};
  n.Fk=function(){};n.Pk=function(a){var b=a.currentPointer,c=this.a.vb(),d=a.currentPointer.type,e=this.a.ic().type;(e===Vj.P2D||e===Vj.WEBGL||e===Vj.HARP)&&this.b&qp&&(a="mouse"===d?0===a.originalEvent.button?-1:1:0<a.pointers.length?1:-1,a=this.b&rp?c-a:(0>-a?zd:yd)(c)-a,yp(this,c,a,b.viewportX,b.viewportY));};n.Dk=function(a){return this.b&qp?(a.preventDefault(),!1):!0};
  n.B=function(){var a=this.a;a&&(a.draggable=!1,a.removeEventListener("dragstart",this.ei,!1,this),a.removeEventListener("drag",this.Ek,!1,this),a.removeEventListener("dragend",this.di,!0,this),a.removeEventListener("wheel",this.Uk,!1,this),a.removeEventListener("dbltap",this.Pk,!1,this),a.removeEventListener("pointermove",this.Fk,!1,this),this.a=null);this.f&&(this.f.style.msTouchAction="",Je(this.f,"contextmenu",this.Dk,!1,this),this.f=null);this.i=this.c=null;lp.splice(lp.indexOf(this.j),1);nd.prototype.B.call(this);};
  kp.prototype.dispose=kp.prototype.B;t("H.mapevents.buildInfo",function(){return Ef("H-mapevents","1.30.6","a2dc7f9")});

  R.prototype.O=ca(3,function(a){var b=this.getCache(),c=this;if(a!==y){C(a,Dk,R.prototype.O,0);var d=a;}else d=hl;d!==b&&b.qa(function(e,f,g){return c.gc(e)?(d.add(e,f,g),!0):!1});this.U=d;});Th.prototype.b=ca(2,function(a){this.i=a;a=this.getState();a!==Qh.INIT&&a!==Qh.LOADING&&ai(this);});function zp(a,b){Wa.apply(null,arguments);return a}function Ap(){this.a={};}
  function Bp(a,b){for(var c in b)if(b.hasOwnProperty(c)){var d,e=b[c],f=a.a[c]||(a.a[c]=[]),g=e.length;for(d=0;d<g;d++)f.push(new Cp(e[d]));}}function Dp(a,b,c,d){var e=(a=a.a[b])?a.length:0,f=[];for(b=0;b<e;b++)a[b].Ad(c,d)&&f.push(a[b]);return f}
  function Cp(a){var b,c=a.boxes;this.label=a.label;this.min=a.minLevel;this.max=a.maxLevel;this.b=[];if(c&&(b=c.length)){var d=c[0];var e=new K(d[0],d[1],d[2],d[3]);this.b.push(e);this.a=new K(d[0],d[1],d[2],d[3]);for(a=1;a<b;a++)d=c[a],e=new K(d[0],d[1],d[2],d[3]),this.b.push(e),this.a.nc(e,!1,this.a);}}Cp.prototype.Ad=function(a,b){if(a>=this.min&&a<=this.max)if((a=this.b.length)&&this.a){if(this.a.Ad(b))for(;a--;)if(this.b[a].Ad(b))return !0}else return !0;return !1};function W(a,b,c,d,e,f){if(a&&b)this.Cl(a),this.Ig(b),this.Md(c),this.Bl(e),this.rl(f),this.Oi(d);else throw Error('Parameters "scheme" and "host" must be specified');}t("H.service.Url",W);
  function Ep(a,b){var c=x.document,d,e=c&&c.createElement("a"),f="";if(c){if(b){var g=(d=c.getElementsByTagName("base")[0])&&d.href;var h=c.head;var k=d||h.appendChild(c.createElement("base"));k.href=b;}e.href=a;f=e.href;b&&(d?d.href=g:h.removeChild(k));}else /[\w]+:\/\//.test(a)&&(f=a);g=/(?:(\w+):\/\/)?(?:([^:]+):([^@/]*)@)?([^/:]+)?(?:[:]{1}([0-9]+))?(\/[^?#]*)?(\?[^#]+)?(#.*)?/.exec(f);a=g[1];k=g[4];b=g[5];h=g[6];c=g[7];d=g[8];!g[2]&&k&&/@/.test(k)&&(k=k.split("@")[1]);g=k;h=h&&0<h.length?h.substr(1):
  "";k={};if(c)for(e=/([?&]?([^=&+]+))(=([^&]+))?/g;f=e.exec(c);)k[decodeURIComponent(f[2])]=f[4]?decodeURIComponent(f[4]):void 0;return new W(a,g,h,k,isNaN(+b)?void 0:+b,d&&0<d.length?d.substr(1):"")}W.parse=Ep;W.prototype.clone=function(){var a={},b;for(b in this.a)a[b]=this.a[b];return new W(this.s,this.f,this.c,a,this.g,this.b)};W.prototype.clone=W.prototype.clone;
  W.prototype.Cl=function(a){if(!a||"string"!==typeof a)throw Error('The "scheme" parameter must be a non-empty string.');this.s=a;return this};W.prototype.setScheme=W.prototype.Cl;W.prototype.Hn=function(){return this.s};W.prototype.getScheme=W.prototype.Hn;W.prototype.Ig=function(a){if(!a||"string"!==typeof a||"-"===a.charAt(0)||"."===a.charAt(0)||"."===a.charAt(a.length-1))throw Error('The "host" parameter is not a valid host name.');this.f=a;return this};W.prototype.setHost=W.prototype.Ig;
  W.prototype.bn=function(){return this.f};W.prototype.getHost=W.prototype.bn;W.prototype.Md=function(a){this.c=a||void 0;return this};W.prototype.setPath=W.prototype.Md;W.prototype.un=function(){return this.c};W.prototype.getPath=W.prototype.un;W.prototype.Oi=function(a){if(a)if("object"==typeof a)this.a=a;else throw Error('Parameter "params" must be an object.');else this.a={};return this};W.prototype.setQuery=W.prototype.Oi;W.prototype.jk=function(){return !Gp(this)};W.prototype.hasQuery=W.prototype.jk;
  W.prototype.getQuery=function(){return this.a};W.prototype.getQuery=W.prototype.getQuery;W.prototype.Bl=function(a){if(a&&isNaN(parseInt(a,10)))throw Error('Parameter "port" must be a number or undefined');this.g=+a||void 0;return this};W.prototype.setPort=W.prototype.Bl;W.prototype.yn=function(){return this.g};W.prototype.getPort=W.prototype.yn;W.prototype.rl=function(a){this.b=a||void 0;return this};W.prototype.setAnchor=W.prototype.rl;W.prototype.ud=function(){return this.b};
  W.prototype.getAnchor=W.prototype.ud;W.prototype.I=function(a){if("object"!==typeof a)throw Error('Parameter "other" must be an object.');var b=this.a,c;for(c in a)a.hasOwnProperty(c)&&"function"!==typeof a[c]&&(b[c]=a[c]);return this};W.prototype.mergeQuery=W.prototype.I;W.prototype.Ma=function(a){if(!a||"string"!==typeof a)throw Error('Parameter "subDomain" must be a non-empty string');"."===a.substr(a.length-1)&&(a=a.substr(0,a.length-1));return this.Ig(a+"."+this.f)};
  W.prototype.addSubDomain=W.prototype.Ma;W.prototype.F=function(a){if(!a||"string"!==typeof a)throw Error('Parameter "subPath" must be a non-empty string');return this.Md((this.c?this.c+"/":"")+a)};W.prototype.addSubPath=W.prototype.F;W.prototype.toString=function(){return [this.s+"://",this.f,this.g?":"+this.g:"",this.c||!Gp(this)||this.b?"/":"",this.c?encodeURI(this.c):"",Hp(this),this.b?"#"+encodeURIComponent(this.b):""].join("")};W.prototype.toString=W.prototype.toString;
  function Hp(a){function b(g,h){return encodeURIComponent(g)+(void 0===h?"":"="+encodeURIComponent(h).replace(/[!'()*]/g,function(k){return "%"+k.charCodeAt(0).toString(16)}))}var c=[],d,e=a.a;for(d in e)if(e.hasOwnProperty(d)&&"function"!==typeof e[d]){var f=a.a[d];C(f,Ip)?f.Rl.forEach(function(g){c.push(b(d,g));}):c.push(b(d,f));}return 0<c.length?"?"+c.join("&"):""}function Jp(a){var b=Ef("H-service","1.30.6","2978c8b");a.a.xnlp="CL_JSMv3."+b.version;return a}
  function Gp(a){var b,c=0;for(b in a.a)if(a.a.hasOwnProperty(b)&&"function"!==typeof a.a[b]&&(c++,0<c))break;return !c}function Ip(a){var b;if(!yc(a))throw new D(Ip,0,a);for(b=0;b<a.length;b++){var c=a[b];if(!zc(c)&&!Cc(c))throw new D(Ip,0,"The array can only contain strings and numbers");}this.Rl=a;}W.MultiValueQueryParameter=Ip;Ip.prototype.Sn=function(){return this.Rl};Ip.prototype.getValues=Ip.prototype.Sn;var Kp=Function("return this")();rc("monospace serif");function Lp(){}Lp.prototype.pop=function(a){this[a]||(this[a]=[]);return this[a].pop()||Kp.document.createElement("canvas")};Lp.prototype.push=function(a,b){this[b]||(this[b]=[]);this[b].push(a);};var Mp=new Lp;t("H.service.util.eval",function(a){return eval(a)});function Np(){var a=decodeURIComponent(x.H.getScriptPath());a=a?"/"===a[a.length-1]?a.substring(0,a.length-1):a:"https://js.api.here.com/v3/3.1.30.6";return Ep(a).F("styles")}function Op(a,b,c,d,e,f,g){var h=this;g=g||{};f=f?f:{};var k=a.D().clone().F(b+"/"+a.Cc()+"/"+c).I(f),l=a.Fh();this.J=a;this.W=k;sk.call(this,{tileSize:d,max:512===d?19:20,min:512===d?2:0,getURL:function(m,p,q){var r=h.W.clone();l&&r.Ma(l[(q+p+m)%l.length]);r.F(q+"/"+m+"/"+p+"/"+d+"/"+e);return r.toString()},crossOrigin:g.crossOrigin,headers:g.headers,uri:k.toString().replace(/_/g,"")+d,engineType:g.engineType});this.kb=b;this.s=c;this.a=f;this.yb=c.split(".")[0];this.ng=A(this.ng,this);this.getCopyrights=
  this.ta;a.addEventListener("versionupdate",this.ng);}u(Op,sk);Op.prototype.MAX_STORE_TIME=2592E6;n=Op.prototype;n.u=function(){sk.prototype.u.call(this);this.J.removeEventListener("versionupdate",this.ng);};n.ta=function(a,b){return Dp(this.J.ta(),this.yb,b,a)};n.ng=function(){var a=this.J;this.W=a.D().clone().F(this.kb+"/"+a.Cc()+"/"+this.s).I(this.a);this.reload(!1);};n.fh=function(){return ld()};n.ge=function(){return ld()?kd():Op.l.ge.call(this)};function Pp(a,b){b=void 0===b?{}:b;if(!a.qk)throw new Xc(a);Pp.l.constructor.call(this);var c=Qp(this,b);if(!c.baseUrl&&!c.platformBaseUrl)throw new D(a,0,'either "baseUrl" or "platformBaseUrl" must be specified');this.c=(c.baseUrl?c.baseUrl:c.platformBaseUrl).clone();a=c.baseUrl?b:c;a.host&&this.c.Ig(a.host);a.subDomain&&this.c.Ma(a.subDomain);a.path&&this.c.Md(a.path);Jp(this.c);this.gf=c.headers||{};}u(Pp,F);t("H.service.Service",Pp);function Qp(a,b){a=a.a();return b?zp({},a,b):a}
  Pp.prototype.a=function(){return {}};Pp.prototype.D=function(){return this.c};Pp.prototype.getUrl=Pp.prototype.D;Pp.prototype.K=function(a,b,c,d){d=new rf(void 0===d?"application/json":d,a.toString(),fe,{headers:this.gf});d.then(b,Rp(this,a,c));return d};function Rp(a,b,c){return function(d){return "function"!==typeof d.json?Promise.reject(c(Sp(b,d))):d.json().then(function(e){return c(a.b(e))},function(){return c(Sp(b,d))})}}Pp.prototype.b=function(a){return Error(a.message)};
  function Sp(a,b){return Error((b.statusText?"["+b.statusText+"] ":"")+a+" request failed")}function Y(a){a=zp({},this.b,a);var b=a.apikey||a.apiKey,c=a.baseUrl;if(c=b?c?0:"baseUrl":"apikey")throw new D(Y,0,'"'+c+'" must be specified');this.ul(a.baseUrl);this.a=b;this.c.I({apikey:b});this.f=a.headers||{};this.g=Ua(a.servicesConfig||{});}t("H.service.Platform",Y);Y.prototype.b={apikey:null,baseUrl:new W("https","hereapi.com")};Y.prototype.ul=function(a){this.c=Jp(a.clone());this.a=a=this.a;this.c.I({apikey:a});};Y.prototype.setBaseUrl=Y.prototype.ul;Y.prototype.hc=function(){return this.c};
  Y.prototype.getBaseUrl=Y.prototype.hc;Y.prototype.Ya=function(a,b){try{return a.qk=!0,new a(zp({platformBaseUrl:this.hc(),headers:this.f},this.g[a.CONFIG_KEY]||{},b||{}))}finally{delete a.qk;}};Y.prototype.createService=Y.prototype.Ya;function Tp(a){Tp.l.constructor.call(this,Tp,a);a=Qp(this,a);this.bc=a.shards;(this.Ra=a.ignoreTypes?null:a.type)&&this.D().Ma(this.Ra);this.cc=a.version;this.Xc=new Ap;this.vi={};this.Rf=0;"newest"===this.cc&&this.ph();}u(Tp,Pp);t("H.service.MapTileService",Tp);Tp.prototype.a=function(){return {subDomain:"maps.ls",path:"maptile/2.1",type:"base",version:"newest",shards:["1","2","3","4"]}};Tp.CONFIG_KEY="maptile";
  function Vp(a,b){for(var c={},d=a[b+"s"][b],e=d.length;e--;)c[d[e].id]=d[e];a[b+"s"]=c;}Tp.prototype.Fh=function(){return this.bc};Tp.prototype.ek=function(){return this.Ra};Tp.prototype.getType=Tp.prototype.ek;Tp.prototype.Cc=function(){return this.cc};Tp.prototype.getVersion=Tp.prototype.Cc;Tp.prototype.Si=function(a){this.cc=a;};Tp.prototype.ta=function(){this.Rf||(this.cc&&"newest"!==this.cc||"traffic"===this.Ra)&&this.Re();return this.Xc};Tp.prototype.getCopyrights=Tp.prototype.ta;n=Tp.prototype;
  n.$i=function(a){a=a.response;var b;Vp(a,"map");Vp(a,"scheme");Vp(a,"tiletype");Vp(a,"format");Vp(a,"resolution");Vp(a,"language");if("newest"===this.cc&&"traffic"!==this.Ra)for(b in a.maps)a.maps[b].hash&&a.maps[b].newest&&(this.Si(a.maps[b].hash),this.dispatchEvent("versionupdate"));this.Lh=a;this.dispatchEvent("infoupdate");};n.Zi=function(a){Bp(this.Xc,a);this.dispatchEvent("copyrightupdate");};
  n.ph=function(){var a=this;var b=this.D().clone().F("info").I({output:"json"});this.bc&&b.Ma(this.bc[0]);this.K(b,function(c){a.$i(c);},function(c){throw c;});};n.Re=function(){var a=this;var b=this.D().clone().F("copyright").F(a.Cc()).I({output:"json"});this.bc&&b.Ma(this.bc[0]);this.Rf=1;this.K(b,function(c){a.Rf=2;a.Zi(c);},function(c){a.Rf=-1;throw c;});};n.xh=function(){return this.Lh};Tp.prototype.getInfo=Tp.prototype.xh;
  Tp.prototype.Me=function(a,b,c,d,e,f){var g=this.D().clone().F(a+"/"+this.Cc()+"/"+b+"/"+c+"/"+d).I(e?e:{}).toString();var h=0,k,l=g.length;if(0!==l)for(k=0;k<l;k++){var m=g.charCodeAt(k);h=(h<<5)-h+m;h|=0;}g=h;h=this.vi[g];h||(h=new Op(this,a,b,c,d,e,zp({headers:this.gf},f||{})),this.vi[g]=h);return h};Tp.prototype.createTileProvider=Tp.prototype.Me;Tp.prototype.wc=function(a,b,c,d,e,f,g,h){a=this.Me(a,b,c,d,e,h);return new ll(a,{opacity:f,dark:!!g})};Tp.prototype.createTileLayer=Tp.prototype.wc;
  Y.prototype.Ah=function(a){return this.Ya(Tp,a)};Y.prototype.getMapTileService=Y.prototype.Ah;function Wp(a,b,c){var d=this;c=c||{};var e=+c.min,f=+c.max;c.tileSize=c.tileSize||512;c.min=e?Yd(e,1,17):1;c.min+=Bk(c.tileSize,1);c.max=f?Yd(f,1,17):17;Wp.l.constructor.call(this,c);C(a,Xp,Wp,0);C(b,Ph,Wp,1);this.o=a;b.b&&b.b("OMV");this.ac(b,!0);this.s=function(){Yp(d);d.reload(!1);};a.addEventListener("versionupdate",this.s);Yp(this);Wp.prototype.J=function(){var g=/^v2\/vectortiles\/(.+)\/mc$/.exec(a.D().c);return g?g[1]:B+""}();}u(Wp,R);t("H.service.omv.Provider",Wp);Wp.prototype.Ed=df;
  Wp.prototype.providesOMV=Wp.prototype.Ed;function Yp(a){var b=a.yd("_#-;,:","_#-;,:","_#-;,:");a.v=new RegExp("^"+b.replace(/[.*+?^${}()|[\]\\\/]/g,"\\$&").replace(/_#-;,:/g,"\\d+")+"$");}Wp.prototype.gc=function(a){return this.v.test(a)};Wp.prototype.cacheFilter=Wp.prototype.gc;Wp.prototype.yd=function(a,b,c){return Zp(this.o,a,b,c).toString()};Wp.prototype.getTileKey=Wp.prototype.yd;Wp.prototype.Ob=function(){return this.N};Wp.prototype.getCache=Wp.prototype.Ob;Wp.prototype.MAX_STORE_TIME=2592E6;
  Wp.prototype.fh=function(){return ld()};Wp.prototype.ge=function(){return ld()?kd():Wp.l.ge.call(this)};Wp.prototype.K=function(a,b,c,d,e){return this.o.jb(a,b,c,d,e)};Wp.prototype.requestInternal=Wp.prototype.K;Wp.prototype.rc=function(a){a.b&&a.b("OMV");this.ac(a);};Wp.prototype.setStyle=Wp.prototype.rc;Wp.prototype.ua=function(){return Wp.l.ub.apply(this)};Wp.prototype.getStyle=Wp.prototype.ua;
  Wp.prototype.ub=function(){var a=Wp.l.ub.apply(this),b;this.C&&(a.getState()===Qh.READY?(b=a.vd())&&b.global&&(this.c&&(b.global.ux_language=this.c),this.a&&(b.global.ux_language_fallback=this.a),a=new Th(b,a.hc())):a.load());return a};function $p(a,b,c){var d=a.ub().getState()===Qh.READY,e=zc(b),f=zc(c);e&&(a.c=b);f&&(a.a=c);if(e||f)a.C=!0,d&&a.g();}Wp.prototype.u=function(){Wp.l.u.call(this);this.o.removeEventListener("versionupdate",this.s);};Wp.prototype.N=new Dk(256);
  Wp.prototype.ta=function(a,b){return Dp(this.o.ta(),this.J,b,a)};Wp.prototype.getCopyrights=Wp.prototype.ta;function Xp(a){Xp.l.constructor.call(this,Xp,a);a=Qp(this,a).mapVersion;this.df=tc(a)?a:aq[this.D().toString()];tc(this.df)||bq(this);}u(Xp,Pp);t("H.service.omv.Service",Xp);Xp.prototype.a=function(){return {subDomain:"vector",path:"v2/vectortiles/base/mc"}};Xp.CONFIG_KEY="omv";var aq={};Fc(aq);Xp.prototype.nn=function(){return this.df};Xp.prototype.getMapVersion=Xp.prototype.nn;
  function bq(a){a.K(a.D().clone().F("../../info"),function(b){b=b.mapVersion;var c=a.D().toString();a.df=b;b!==aq[c]&&(aq[c]=b,a.dispatchEvent("versionupdate"));},function(){});}Xp.prototype.qd=function(a,b){return new ll(new Wp(this,a,b),{max:22})};Xp.prototype.createLayer=Xp.prototype.qd;Xp.prototype.jb=function(a,b,c,d,e){return this.K(Zp(this,a,b,c),function(f){return f.arrayBuffer().then(d,e)},e,"arraybuffer")};
  function Zp(a,b,c,d){b=a.D().clone().F(d+"/"+b+"/"+c+"/omv");tc(a.df)&&b.I({mv:a.df});return b}Xp.prototype.he=function(a){return Np().F(a)};Xp.prototype.Ch=function(a,b){if(!Ca(a))throw new D(this.Ch,0,'"onResult" must be a function');if(!Ca(b))throw new D(this.Ch,1,'"onError" must be a function');return this.K(this.D().clone().Md("v2/vectortiles/pviews"),a,b)};Xp.prototype.getPoliticalViews=Xp.prototype.Ch;Y.prototype.$j=function(a){return this.Ya(Xp,a)};Y.prototype.getOMVService=Y.prototype.$j;
  Xp.prototype.Re=function(){this.Xc=new Ap;this.K(this.D().clone().F("../../copyrights"),A(this.Zi,this),hd);};Xp.prototype.Zi=function(a){Bp(this.Xc,a);this.dispatchEvent("copyrightupdate");};Xp.prototype.ta=function(){this.Xc||this.Re();return this.Xc};Xp.prototype.getCopyrights=Xp.prototype.ta;Y.prototype.Sf=function(a,b,c,d,e,f){var g=this.Ah(),h=this.Ah({type:"aerial"}),k=this.dk(),l=this.$j(),m=Vj.WEBGL,p={},q={crossOrigin:"anonymous"};if(Da(a)){var r=a;"crossOrigin"in r&&(q.crossOrigin=r.crossOrigin);a=r.tileSize;b=r.ppi;c=r.lg;d=r.lg2;e=r.style;f=r.pois;r.engineType&&(m=r.engineType,q.engineType=m);}var v=a||512;if(0>[72,250,320,500].indexOf(+b)){if(b!==B)throw new D(this.Sf,1,b);}else p.ppi=+b;c&&(p.lg=c);d&&(p.lg2=d);e&&(p.style=e);f&&(p.pois=f);a=function(w,z,J,G,U){return w.wc(z,
  J,v,G,p,1,U,q)};if(m===Vj.HARP&&!H.map.render.harp)throw new D(this.Sf,0,"HARP engine is not supported, module not found");b=m===Vj.WEBGL?new Th(l.he("omv/miami/normal.day.yaml").toString()):new H.map.render.harp.Style(l.he("harp/miami/normal.day.json").toString());c=m===Vj.WEBGL?new Th(l.he("omv/miami/truck.day.yaml").toString()):new H.map.render.harp.Style(l.he("harp/miami/normal.day.json").toString());d={engineType:m};b=l.qd(b,d);$p(b.ga(),p.lg,p.lg2);c=l.qd(c,d);$p(c.ga(),p.lg,p.lg2);l=k.zj(p.lg?
  {lg:p.lg,i18n:!0,engineType:m}:{engineType:m});return {vector:{normal:{map:b,truck:c,traffic:k.yj(void 0,m),trafficincidents:l}},raster:{normal:{xbase:a(g,"xbasetile","normal.day","png8",!1),xbasenight:a(g,"xbasetile","normal.night","png8",!0),base:a(g,"basetile","normal.day","png8",!1),basenight:a(g,"basetile","normal.night","png8",!0),map:a(g,"maptile","normal.day","png8",!1),mapnight:a(g,"maptile","normal.night","png8",!0),trafficincidents:l,transit:a(g,"maptile","normal.day.transit","png8",!1),
  labels:a(g,"labeltile","normal.day","png",!1)},satellite:{xbase:a(h,"xbasetile","hybrid.day","jpg",!0),base:a(h,"basetile","hybrid.day","jpg",!0),map:a(h,"maptile","hybrid.day","jpg",!0),labels:a(h,"labeltile","hybrid.day","png",!0)},terrain:{xbase:a(h,"xbasetile","terrain.day","jpg",!1),base:a(h,"basetile","terrain.day","jpg",!1),map:a(h,"maptile","terrain.day","jpg",!1),labels:a(h,"labeltile","terrain.day","png",!1)}}}};Y.prototype.createDefaultLayers=Y.prototype.Sf;function cq(){this.a={};}cq.prototype.Cb=function(a,b){var c=a+b,d;if(d=this.a[c])return d;a=dq.MARKER.replace("{{icon}}",eq[a]||eq.OTHER);a=a.replace("{{color}}",fq[b]||fq.BLOCKING);b={size:{w:26,h:33},anchor:{x:13,y:30},hitArea:new Li(Mi.POLYGON,gq.MARKER)};return this.a[c]=d=new Ij(a,b)};
  var dq={MARKER:'<svg width="26" height="33" enable-background="new 0 0 26 33" viewBox="0 0 26 33" xmlns="http://www.w3.org/2000/svg"><path d="m26 33h-26v-33h26z" fill="#8c8c8c" opacity="0"/><path d="m17 29.566c0 1.116-1.791 2.022-4 2.022s-4-.906-4-2.022c0-1.118 1.791-2.026 4-2.026s4 .908 4 2.026" fill="#878787" opacity=".6"/><path d="m1.795 17.971c-1.562-1.555-1.574-3.828-.028-5.655l8.343-10.021c.769-.895 1.795-1.384 2.894-1.384 1.117 0 2.197.521 2.889 1.394l8.338 10.014c1.588 1.854 1.578 4.022-.029 5.65l-11.202 11.202z" fill="{{color}}"/>{{icon}}</svg>'},eq=
  {CONGESTION:'<path style="fill:#FFFFFF;" d="M12.966,1.177c0.965,0,1.894,0.442,2.496,1.204l8.378,10.258c1.362,1.592,1.482,3.477,0,4.979L12.994,28.464L2.143,17.618c-1.381-1.375-1.38-3.348,0-4.979l8.314-10.258C11.174,1.547,12.085,1.177,12.966,1.177 M12.967,0.177L12.967,0.177c-1.247,0-2.408,0.551-3.269,1.552l-8.332,10.28c-1.711,2.022-1.688,4.567,0.07,6.317l10.85,10.845l0.707,0.707l0.707-0.707l10.847-10.846c1.784-1.807,1.803-4.292,0.053-6.337L16.237,1.748C15.462,0.769,14.236,0.177,12.967,0.177L12.967,0.177z M16.645,10.405l-2.025-2.22c-0.48-0.51-1.15-0.8-1.84-0.8H9.53c-0.69,0-1.36,0.29-1.84,0.8l-1.94,2.22c-0.39,0.63-0.59,1.35-0.59,2.09v1.64c0,0.69,0.56,1.25,1.25,1.25h1.44l0.255-0.539c0.204-0.431,0.456-0.837,0.753-1.21l0.962-1.211l0.83-0.9c0.32-0.35,0.72-0.63,1.15-0.82H8.23c-0.28,0-0.55-0.07-0.79-0.22l-0.28-0.17l1.27-1.45c0.28-0.31,0.68-0.48,1.1-0.48h3.25c0.42,0,0.82,0.17,1.1,0.48l1.354,1.54H16.645z M18.31,12.205c-0.35-0.37-0.81-0.63-1.3-0.74c-0.18-0.04-0.36-0.06-0.54-0.06h-3.24c-0.7,0-1.37,0.29-1.84,0.8l-1.13,1.22l-0.82,1c-0.38,0.63-0.59,1.35-0.59,2.09v1.64c0,0.69,0.56,1.25,1.25,1.25h1.75v-1h5.99v1h1.75c0.69,0,1.25-0.56,1.25-1.25v-1.64c0-0.74-0.2-1.46-0.59-2.09L18.31,12.205z M12.1,17.105h-1c-0.138,0-0.25-0.112-0.25-0.25v-1c0-0.138,0.112-0.25,0.25-0.25h1c0.138,0,0.25,0.112,0.25,0.25v1C12.35,16.993,12.238,17.105,12.1,17.105z M18.59,17.105h-1c-0.138,0-0.25-0.112-0.25-0.25v-1c0-0.138,0.112-0.25,0.25-0.25h1c0.138,0,0.25,0.112,0.25,0.25v1C18.84,16.993,18.728,17.105,18.59,17.105z M18.56,14.505c-0.24,0.15-0.51,0.22-0.79,0.22h-5.85c-0.28,0-0.55-0.07-0.78-0.22l-0.29-0.17l1.27-1.45c0.15-0.16,0.33-0.28,0.53-0.37c0.18-0.07,0.38-0.11,0.58-0.11h3.24c0.24,0,0.48,0.06,0.68,0.16c0.16,0.08,0.3,0.19,0.42,0.32l1.27,1.45L18.56,14.505z M8.42,13.03h-1c-0.138,0-0.25-0.112-0.25-0.25v-1c0-0.138,0.112-0.25,0.25-0.25h1c0.138,0,0.25,0.112,0.25,0.25v1C8.67,12.918,8.559,13.03,8.42,13.03z"/>',
  ROADWORKS:'<path d="m13.004 1.411c.964 0 1.894.441 2.496 1.204l8.346 10.023c1.363 1.592 1.482 3.477 0 4.979l-10.846 10.847-10.852-10.846c-1.381-1.375-1.379-3.348 0-4.979l8.346-10.023c.717-.835 1.628-1.205 2.51-1.205m0-1c-1.248 0-2.408.551-3.268 1.552l-8.356 10.035c-1.718 2.033-1.695 4.578.064 6.328l10.85 10.845.706.707.707-.707 10.846-10.846c1.784-1.808 1.803-4.293.053-6.337l-8.337-10.012c-.769-.973-1.996-1.565-3.265-1.565zm-.575 15.264c.018-.332-.13-.651-.394-.851l-2.945-2.235-.21.36c-.22.39-.41.78-.58 1.19l-.677 2.129-1.364 3.051h1.314l2.109-4.672 1.317 1.212.138 3.46h1.092zm6.16-1.327c-.401-.54-1.209-.539-1.609.001l-1.17 1.58-2.29-1.74-.139-4.054c-.011-.276-.134-.535-.342-.716l-.7-.61c-.185-.161-.422-.25-.667-.25h-1.885c-.335 0-.648.168-.833.447l-1.144 1.723 7.58 5.76-1.86 2.51c-.098.132-.004.32.161.32h6.648l1.142-1.077zm-8.79-2.989-.876-.665.841-1.018.965.043zm1.63 1.24.969-1.781.118 2.61zm2.76-5.79c-.64 0-1.16.52-1.16 1.16 0 .65.52 1.17 1.16 1.17s1.16-.52 1.16-1.17c0-.64-.52-1.16-1.16-1.16z" fill="#fff"/>',
  ACCIDENT:'<path style="fill:#FFFFFF;" d="M12.998,1.091c0.964,0,1.894,0.442,2.496,1.204l8.346,10.344c1.363,1.592,1.482,3.477,0,4.979L12.994,28.465L2.143,17.618c-1.381-1.375-1.379-3.348,0-4.979l8.346-10.344C11.205,1.462,12.115,1.091,12.998,1.091 M12.998,0.091L12.998,0.091c-1.248,0-2.408,0.551-3.269,1.552L1.364,12.011c-1.708,2.021-1.685,4.566,0.073,6.316l10.85,10.845l0.707,0.707l0.707-0.707l10.846-10.846c1.784-1.808,1.803-4.293,0.053-6.337l-8.327-10.32C15.494,0.684,14.268,0.091,12.998,0.091L12.998,0.091z M7.83,18.982l-3.309-1.855l0.945,1.855H7.83z M16.111,19h3.942l1.596-2L16.111,19z M10.512,20.064l1.021-1.021l1.632,0.076c0.329,0.018,0.651-0.022,0.963-0.123c0.626-0.206,1.122-0.76,1.288-1.44l0.264-1.089l2.066-0.93c0.373-0.17,0.673-0.42,0.861-0.731c0.275-0.449,0.405-0.97,0.369-1.498L18.9,11.676l1.021-1.021l-0.724-0.724l-0.427,0.427l-0.121-0.364c-0.201-0.603-0.54-1.151-0.989-1.6l-1.159-1.159c-0.5-0.5-1.31-0.5-1.809,0l-1.267,1.267l0.724,0.724l-5.066,5.066l-0.724-0.724l-1.267,1.267c-0.5,0.5-0.5,1.31,0,1.809l1.159,1.159c0.449,0.449,0.997,0.788,1.6,0.989l0.364,0.121l-0.427,0.427L10.512,20.064z M14.901,10.349l0.732-0.732c0.098-0.098,0.256-0.098,0.354,0l0.732,0.732c0.098,0.098,0.098,0.256,0,0.354l-0.732,0.732c-0.098,0.098-0.256,0.098-0.354,0l-0.732-0.732C14.803,10.604,14.803,10.446,14.901,10.349z M9.472,15.777l0.732-0.732c0.098-0.098,0.256-0.098,0.354,0l0.732,0.732c0.098,0.098,0.098,0.256,0,0.354l-0.732,0.732c-0.098,0.098-0.256,0.098-0.354,0L9.472,16.13C9.375,16.033,9.375,15.874,9.472,15.777z M11.391,17.615c0.069-0.271,0.206-0.518,0.405-0.717l4.961-4.961c0.195-0.195,0.445-0.337,0.717-0.405l0.344-0.083l0.137,1.925c0.022,0.318-0.058,0.63-0.221,0.901c-0.101,0.166-0.279,0.271-0.409,0.329L14.8,15.74l-0.38,1.574c-0.083,0.344-0.318,0.615-0.612,0.713c-0.188,0.058-0.38,0.083-0.579,0.072l-1.925-0.138L11.391,17.615z"/>',
  OTHER:'<path style="fill:#FFFFFF;" d="M13.004,1.411c0.964,0,1.894,0.441,2.496,1.204l8.346,10.023c1.363,1.592,1.482,3.477,0,4.979L13,28.465L2.148,17.618c-1.381-1.375-1.379-3.348,0-4.979l8.346-10.023C11.211,1.781,12.122,1.411,13.004,1.411 M13.004,0.411L13.004,0.411c-1.248,0-2.408,0.551-3.268,1.552L1.38,11.998c-1.718,2.033-1.694,4.579,0.064,6.328l10.85,10.845L13,29.878l0.707-0.707l10.846-10.846c1.784-1.808,1.803-4.293,0.053-6.337L16.269,1.976C15.5,1.003,14.273,0.411,13.004,0.411L13.004,0.411z M14.716,20.139c0,0.947-0.758,1.724-1.724,1.724c-0.947,0-1.704-0.777-1.704-1.724c0-0.928,0.757-1.704,1.704-1.704C13.958,18.435,14.716,19.211,14.716,20.139z M14.204,16.33H11.78l-0.537-8.533h3.5L14.204,16.33z"/>'},
  fq={BLOCKING:"#323232",VERYHIGH:"#d5232f",HIGH:"#ffa100"},gq={MARKER:[24.1,17.8,14.2,28.42,16.8,29.4,12.8,31.4,8.79,29.4,11.23,28.42,1.7,17.8,1.7,12.1,10,1.9,12.9,.498,15.8,1.9,24.1,12.1,24.1,17.8]};function hq(a,b,c){c=c?c:{};c.criticality||(c.criticality="major,critical");C(a,iq,hq,0);An.call(this,{max:20,min:8,requestData:A(this.W,this),engineType:c.engineType});this.s=new cq;this.C=a;this.a=c;this.reload=A(this.reload,this);this.v=setInterval(this.reload,b||18E4);}u(hq,An);t("H.service.traffic.incidents.Provider",hq);hq.prototype.c={minor:"HIGH","low impact":"HIGH",major:"VERYHIGH",critical:"BLOCKING"};
  hq.prototype.W=function(a,b,c,d,e){var f=this,g=this.c,h=this.s;return this.C.requestIncidentsByTile(a,b,c,function(k){var l=[];k=k.TRAFFIC_ITEMS;var m;if(k)for(k=k.TRAFFIC_ITEM,m=k.length;m--;){var p=k[m];var q=p.TRAFFIC_ITEM_TYPE_DESC;switch(q){case "ACCIDENT":case "CONGESTION":var r=q;break;case "CONSTRUCTION":r="ROADWORKS";break;default:r="OTHER";}r=h.Cb(r,g[p.CRITICALITY.DESCRIPTION]);q=p.LOCATION.GEOLOC.ORIGIN;q=new yn({lat:q.LATITUDE,lng:q.LONGITUDE},{provider:f,icon:r});q.setData(p);l.push(q);}d(l);},
  e,this.a)};hq.prototype.B=function(){An.prototype.B.call(this);clearInterval(this.v);};var jq="A21 A22 F01 F02 F08 F04 F05 F07 F03 F06 A2F F13 A25 A2C F12 D1B F1B A27 E12 A3A A24 A3D A3F F1F F25 F2C E32 A33 F29 D26 D36 F26 D0F F0F F2B E0C D3A A45 D23 D11 F2E F19 F14 F39 A4A A4B A5C D38 F2A F1A D0A F1C A48 D25 D1D F32 A46 A3E D24 E1C E32 A5F D2E D22 D0A".split(" ");function kq(a,b){var c={};this.a=a;Wa(c,b||c);ak.call(this,c);this.zg={};a=this.Pb(Pg.SPATIAL);a.update(a.a+1,Mg.ADD);}u(kq,ak);t("H.service.remote.ObjectProvider",kq);kq.prototype.B=function(){ak.prototype.B.call(this);};kq.prototype.Lc=function(){return ff};kq.prototype.requestMarkers=kq.prototype.Lc;kq.prototype.Kc=function(){return ff};kq.prototype.requestDomMarkers=kq.prototype.Kc;kq.prototype.Hd=function(){return ff};kq.prototype.requestOverlays=kq.prototype.Hd;kq.prototype.Wb=df;
  kq.prototype.providesMarkers=kq.prototype.Wb;kq.prototype.Vb=df;kq.prototype.providesDomMarkers=kq.prototype.Vb;kq.prototype.Jc=df;kq.prototype.providesSpatials=kq.prototype.Jc;kq.prototype.Ag=function(){return ff};kq.prototype.requestSpatials=kq.prototype.Ag;function lq(a){return a.Dc(!0)}kq.prototype.Bg=function(a,b){a=mq(this,a,nq);b&&(a=a.filter(lq));return a};kq.prototype.requestSpatialsByTile=kq.prototype.Bg;
  function mq(a,b,c){var d=b.j&&b.j[c],e;!d&&(e=b.m)&&(delete b.m,(b.j=a=a.a.parse(a,b,e))&&(d=a[c]));return d||ff}kq.prototype.ea=function(a){var b=a.gb();if(this.zg[b])throw new Xc(this.ea,"Remote object "+b+" already added");return this.zg[b]=a};kq.prototype.Ia=function(a){delete this.zg[a.gb()];};var nq="spatials";function oq(a,b,c,d){oq.l.constructor.call(this,{min:pq,max:qq,engineType:d});C(a,iq,oq,0);this.s=a;this.a=c||rq;this.a.responseattributes="sh,fc";this.c=setInterval(A(this.reload,this),b||18E4);this.f===Vj.WEBGL?this.ac(new Th(a.he("traffic/flow.yaml").toString()),!0):this.ac(new H.map.render.harp.Style({styles:[{when:["==",["geometry-type"],"LineString"],technique:"solid-line",renderOrder:10002,attr:{color:["case",[">=",["get","JF"],10],"black",[">=",["get","JF"],8],"red",[">=",["get","JF"],4],
  "yellow","green"],lineWidth:3,metricUnit:"Pixel"}}]}));}u(oq,R);t("H.service.traffic.flow.Provider",oq);oq.prototype.xi=df;oq.prototype.providesGeoJSON=oq.prototype.xi;oq.prototype.ua=function(){return this.ub()};oq.prototype.getStyle=oq.prototype.ua;oq.prototype.rc=function(a){a.b&&a.b("GeoJSONTileSource");this.ac(a);};oq.prototype.setStyle=oq.prototype.rc;var rq={locationreferences:"tmc,shp"};oq.prototype.u=function(){oq.l.u.call(this);clearInterval(this.c);};
  oq.prototype.K=function(a,b,c,d,e){return this.s.requestFlowByTile(a,b,c,function(f){f.type&&-1!==f.type.indexOf("Error")?e(f.Details):d(f);},e,this.a)};oq.prototype.requestInternal=oq.prototype.K;
  oq.prototype.rd=function(a,b,c,d,e){var f,g,h,k,l={type:"FeatureCollection",features:[]},m;var p=d.RWS.length;for(f=0;f<p;f++){var q=d.RWS[f];var r=q.RW;var v=r.length;var w=-1!==jq.indexOf(q.EXTENDED_COUNTRY_CODE+q.EBU_COUNTRY_CODE);for(q=0;q<v;q++){var z=r[q].FIS;var J=z.length;for(z=0;z<J;z++){var G=r[q].FIS[z].FI;var U=G.length;for(g=0;g<U;g++){var X=G[g];var xa=[];var ia=X.CF[0];var gc=!!ia.SSS;var wb={type:"Feature",properties:ia,geometry:{type:"MultiLineString",coordinates:xa}};wb.properties.LHT=
  w;X.SHP.length&&(wb.properties.FC=X.SHP[0].FC);gc&&(m=[]);for(ia=0;ia<X.SHP.length;ia++){var md=X.SHP[ia].value;var wi=md.length;for(h=0;h<wi;h++){var Qe=gc?m:void 0,Xb=new $n(md[h].trim()),Xf=[],cd={};for(Xb.ze();-1!==(k=Xb.Tb());)k===sq?(cd.lat=+String.fromCharCode.apply(oq,Xb.Ud()),Xb.next(),Xb.ze()):k===tq?(cd.lng=+String.fromCharCode.apply(oq,Xb.Ud()),Xf.push([cd.lng,cd.lat]),Qe&&Qe.push(Zf(cd)),cd=[],Xb.next(),Xb.ze()):Xb.next();cd.lng=+String.fromCharCode.apply(oq,Xb.Ud());Xf.push([cd.lng,
  cd.lat]);Qe&&Qe.push(Zf(cd));k=Xf;xa.push(k);}}l.features.push(wb);}}}}return oq.l.rd.call(this,a,b,c,l,e)};oq.prototype.createTileInternal=oq.prototype.rd;var qq=21,pq=10,tq=32,sq=44;function uq(a){function b(m){d.contains(e)&&d.removeChild(e);l&&clearTimeout(l);delete uq.a[f];m&&a.Kj&&a.Kj.call(k,m);}if(!a.url||!a.eh)throw Error('Parameter "options" must specify at least a URL and a callback.');if("function"!==typeof a.eh)throw Error("Parameters options.callback must be a function");var c=a.Ap||document;var d=c.getElementsByTagName("head")[0];var e=c.createElement("script");c=a.url instanceof W?a.url:Ep(a.url,a.zp);var f=uq.b++;var g=a.jm||"callback";var h=a.eh;var k={};var l=
  null;k.id=f;k.cancel=function(){b("cancelled");};0!==a.timeout&&(l=x.setTimeout(function(){b("timeout");},a.timeout||3E4));uq.a[f]=function(m){b();h.call(k,m);};e.type="text/javascript";e.src=c.toString()+(c.jk()?"&":"?")+g+"="+(a.Bp?"H.service.jsonp.handleResponse("+f+")":encodeURI("H.service.jsonp.handleResponse("+f+")"));d.appendChild(e);return k}t("H.service.jsonp",uq);uq.Yn=function(a){return (a=uq.a[a])?a:function(){}};uq.handleResponse=uq.Yn;uq.b=0;uq.a={};function iq(a){iq.l.constructor.call(this,iq,a);this.km=Qp(this,a).callbackKey;}u(iq,Pp);t("H.service.traffic.Service",iq);iq.prototype.a=function(){return {subDomain:"traffic.ls",path:"traffic/6.1",callbackKey:"jsoncallback"}};iq.CONFIG_KEY="traffic";iq.prototype.yj=function(a,b){return new ll(new oq(this,void 0,a,b),{max:22})};iq.prototype.createFlowLayer=iq.prototype.yj;iq.prototype.zj=function(a){return new Bn(new hq(this,void 0,a))};iq.prototype.createIncidentsLayer=iq.prototype.zj;
  function vq(a,b,c,d){return uq({url:b,eh:c,Kj:function(e){d(Error("["+e+"] "+b+" request failed"));},jm:a.km})}iq.prototype.Xo=function(a,b,c){a=this.D().clone().F("incidents.json").I(a);return vq(this,a,b,c)};iq.prototype.requestIncidents=iq.prototype.Xo;iq.prototype.Wo=function(a,b,c,d,e,f){a=this.D().clone().F(["flow/json",c,a,b].join("/")).I(f||{});return vq(this,a,d,e)};iq.prototype.requestFlowByTile=iq.prototype.Wo;
  iq.prototype.Yo=function(a,b,c,d,e,f){a=this.D().clone().F(["incidents/json",c,a,b].join("/")).I(f||{});return vq(this,a,d,e)};iq.prototype.requestIncidentsByTile=iq.prototype.Yo;iq.prototype.he=function(a){return Np().F(a)};Y.prototype.dk=function(a){return this.Ya(iq,a)};Y.prototype.getTrafficService=Y.prototype.dk;function wq(a){wq.l.constructor.call(this,wq,a);this.ol=Qp(this,a).reverseSubDomain;}u(wq,Pp);t("H.service.GeocodingService",wq);wq.prototype.a=function(){return {subDomain:"geocoder.ls",reverseSubDomain:"reverse",path:"6.2"}};wq.CONFIG_KEY="geocoding";wq.prototype.b=function(a){return Error(a.Details||a.message||a.error)};wq.prototype.rh=function(a,b,c){a=this.D().clone().F("geocode.json").I(a);return this.K(a,b,c)};wq.prototype.geocode=wq.prototype.rh;
  wq.prototype.Bi=function(a,b,c){a=this.D().clone().F("reversegeocode.json").I(a);this.ol&&a.Ma(this.ol);return this.K(a,b,c)};wq.prototype.reverseGeocode=wq.prototype.Bi;wq.prototype.search=function(a,b,c){a=this.D().clone().F("search.json").I(a);return this.K(a,b,c)};wq.prototype.search=wq.prototype.search;Y.prototype.Ym=function(a){return this.Ya(wq,a)};Y.prototype.getGeocodingService=Y.prototype.Ym;function xq(a){xq.l.constructor.call(this,xq,a);}u(xq,Pp);t("H.service.PlacesService",xq);xq.prototype.a=function(){return {subDomain:"places.ls",path:"places/v1"}};xq.CONFIG_KEY="places";xq.EntryPoint={SEARCH:"discover/search",SUGGEST:"suggest",EXPLORE:"discover/explore",AROUND:"discover/around",HERE:"discover/here",CATEGORIES:"categories/places"};xq.prototype.request=function(a,b,c,d){return this.T(a,b,c,d)};
  xq.prototype.T=function(a,b,c,d){a=this.D().clone().F(a).I(b||{});return this.K(a,c,d)};xq.prototype.search=function(a,b,c){return this.T("discover/search",a,b,c)};xq.prototype.search=xq.prototype.search;xq.prototype.ip=function(a,b,c){return this.T("suggest",a,b,c)};xq.prototype.suggest=xq.prototype.ip;xq.prototype.um=function(a,b,c){return this.T("discover/explore",a,b,c)};xq.prototype.explore=xq.prototype.um;xq.prototype.fm=function(a,b,c){return this.T("discover/around",a,b,c)};
  xq.prototype.around=xq.prototype.fm;xq.prototype.$n=function(a,b,c){return this.T("discover/here",a,b,c)};xq.prototype.here=xq.prototype.$n;xq.prototype.lm=function(a,b,c){return this.T("categories/places",a,b,c)};xq.prototype.categories=xq.prototype.lm;xq.prototype.wm=function(a,b,c,d){a=Ep(a).I(this.D().getQuery()).I(d||{});return this.K(a,b,c)};xq.prototype.follow=xq.prototype.wm;Y.prototype.vn=function(a){return this.Ya(xq,a)};Y.prototype.getPlacesService=Y.prototype.vn;function yq(a){yq.l.constructor.call(this,yq,a);this.f=a.getToken;}u(yq,Pp);t("H.service.iml.Service",yq);yq.prototype.a=function(){return {host:"interactive.data.api.platform.here.com",path:"interactive/v1/catalogs"}};
  yq.prototype.b=function(a){function b(){for(var d=ea(c),e=d.next();!e.done;e=d.next()){e=e.value;var f=e.format;if(e.keys.every(function(g){return a[g]}))return f()}return JSON.stringify(a)}var c=[{keys:["code","title","cause","action"],format:function(){return a.code+": "+a.title+"; cause: "+a.cause+"; action: "+a.action}},{keys:["error","error_description"],format:function(){return a.error+": "+a.error_description}},{keys:["error","errorMessage"],format:function(){return a.error+": "+a.errorMessage}}];
  return Error(Da(a)?b():a)};yq.prototype.fe=function(a,b,c,d,e){var f=this.fe;zq(f,0,a,b);Aq(f,2,c,d);a=this.D().clone().F(a+"/layers/"+b+"/statistics").I(e||{});return this.T(a,"GET",c,d)};yq.prototype.getStatistics=yq.prototype.fe;yq.prototype.$f=function(a,b,c,d,e,f,g,h,k){var l=k?"":".mvtf";a=this.D().clone().F(d+"/layers/"+e+"/tile/web/"+c+"_"+a+"_"+b+l).I(Object.assign({clip:!0},h));return this.T(a,"GET",k?f:function(m){return m.arrayBuffer().then(f)},g,void 0,k?"application/json":"arraybuffer")};
  yq.prototype.getFeaturesByTile=yq.prototype.$f;yq.prototype.Sj=function(a,b,c,d,e,f){var g=this.Sj;Bq(g,a);zq(g,1,b,c);Aq(g,3,d,e);a=Cq(this,a,b,c,f);return this.T(a,"GET",d,e)};yq.prototype.getFeatureById=yq.prototype.Sj;yq.prototype.cd=function(a,b,c,d,e,f){var g=this.cd;Dq(g,a);zq(g,1,b,c);Aq(g,3,d,e);a=Eq(this,a,b,c,f);return this.T(a,"GET",d,e)};yq.prototype.getFeaturesById=yq.prototype.cd;
  yq.prototype.Zd=function(a,b,c,d,e){var f=this.Zd;if(!Da(a)||!(a.bbox||a.north&&a.east&&a.south&&a.west))throw new D(f,0,'must be an object with either "bbox" or a full set of "north", "east", "south" and "west"');zq(f,1,b,c);Aq(f,3,d,e);a=this.D().clone().F(b+"/layers/"+c+"/bbox").I(a);return this.T(a,"GET",d,e)};yq.prototype.getFeaturesByBoundingBox=yq.prototype.Zd;
  yq.prototype.Uj=function(a,b,c,d,e){var f=this.Uj;if(!(Da(a)&&a.radius&&(a.lat&&(a.lng||a.lon)||a.refCatalogHrn&&a.refLayerId&&a.refFeatureId)))throw new D(f,0,'must be an object with "radius" and a combination of either "lat"+"lng" or "refCatalogHrn"+"refLayerId"+"refFeatureId"');zq(f,1,b,c);Aq(f,3,d,e);a=this.D().clone().F(b+"/layers/"+c+"/spatial").I(a);return this.T(a,"GET",d,e)};yq.prototype.getFeaturesByPointAndRadius=yq.prototype.Uj;
  yq.prototype.Tj=function(a,b,c,d,e,f){var g=this.Tj;if(!Da(a)||!a.radius)throw new D(g,0,'must be an object with "radius"');Fq(g,1,b);zq(g,2,c,d);Aq(g,4,e,f);a=this.D().clone().F(c+"/layers/"+d+"/spatial").I(a);return this.T(a,"POST",e,f,b)};yq.prototype.getFeaturesByGeometryAndRadius=yq.prototype.Tj;yq.prototype.pl=function(a,b,c,d,e){var f=this.pl;zq(f,0,a,b);Aq(f,2,c,d);a=this.D().clone().F(a+"/layers/"+b+"/search").I(e||{});return this.T(a,"GET",c,d)};yq.prototype.searchFeatures=yq.prototype.pl;
  yq.prototype.uk=function(a,b,c,d,e){var f=this.uk;zq(f,0,a,b);Aq(f,2,c,d);a=this.D().clone().F(a+"/layers/"+b+"/iterate").I(e||{});return this.T(a,"GET",c,d)};yq.prototype.iterateFeatures=yq.prototype.uk;yq.prototype.kd=function(a,b,c,d,e,f){var g=this.kd;Fq(g,0,a);zq(g,1,b,c);Aq(g,3,d,e);b=Gq(this,b,c,f);return this.T(b,"PUT",d,e,a)};yq.prototype.putFeatures=yq.prototype.kd;
  yq.prototype.hd=function(a,b,c,d,e,f){var g=this.hd;Fq(g,0,a);zq(g,1,b,c);Aq(g,3,d,e);b=Gq(this,b,c,f);return this.T(b,"POST",d,e,a)};yq.prototype.postFeatures=yq.prototype.hd;yq.prototype.sd=function(a,b,c,d,e){var f=this.sd;Dq(f,a);zq(f,1,b,c);Aq(f,3,d,e);a=Eq(this,a,b,c);return this.T(a,"DELETE",d,e)};yq.prototype.deleteFeatures=yq.prototype.sd;yq.prototype.fl=function(a,b,c,d,e,f,g){var h=this.fl;Bq(h,a);Fq(h,1,b);zq(h,2,c,d);Aq(h,4,e,f);a=Cq(this,a,c,d,g);return this.T(a,"PUT",e,f,b)};
  yq.prototype.putFeature=yq.prototype.fl;yq.prototype.Zk=function(a,b,c,d,e,f,g){var h=this.Zk;Bq(h,a);Fq(h,1,b);zq(h,2,c,d);Aq(h,4,e,f);a=Cq(this,a,c,d,g);return this.T(a,"PATCH",e,f,b)};yq.prototype.patchFeature=yq.prototype.Zk;yq.prototype.Dj=function(a,b,c,d,e){var f=this.Dj;Bq(f,a);zq(f,1,b,c);Aq(f,3,d,e);a=Cq(this,a,b,c);return this.T(a,"DELETE",d,e,void 0,"text/plain")};yq.prototype.deleteFeature=yq.prototype.Dj;
  function Gq(a,b,c,d){return a.D().clone().F(b+"/layers/"+c+"/features").I(d||{})}function Eq(a,b,c,d,e){b=Object.assign({},e,{id:new Ip(b)});return Gq(a,c,d,b)}function Cq(a,b,c,d,e){return a.D().clone().F(c+"/layers/"+d+"/features/"+b).I(e||{})}
  yq.prototype.T=function(a,b,c,d,e,f){f=void 0===f?"application/json":f;b={method:b,headers:Object.assign({},e?{"Content-Type":"application/geo+json"}:void 0,"function"===typeof this.f?{Authorization:"Bearer "+this.f()}:void 0,this.gf)};e&&(b.data=JSON.stringify(e));e=new rf(f,a.toString(),fe,b);e.then(c,Rp(this,a,d));return e};yq.CONFIG_KEY="iml";function zq(a,b,c,d){wc(c,"String",a,b,"must be a string");wc(d,"String",a,b+1,"must be a string");}
  function Bq(a,b){wc(b,"String",a,0,"must be a string");}function Dq(a,b){if(!Array.isArray(b)||0===b.length||b.some(function(c){return "string"!==typeof c}))throw new D(a,0,"must be a non-empty array of strings");}function Fq(a,b,c){if(!Da(c))throw new D(a,b,"must be a GeoJSON object");}function Aq(a,b,c,d){if(!Ca(c))throw new D(a,b,"must be a function");if(!Ca(d))throw new D(a,b+1,"must be a function");}Y.prototype.cn=function(a){return this.Ya(yq,a)};Y.prototype.getIMLService=Y.prototype.cn;function Hq(a,b,c,d){Hq.l.constructor.call(this,d?{min:d.min,max:d.max,engineType:d.engineType}:void 0);C(a,yq,Hq,0);if(!zc(b))throw new D(Hq,1,'"catalogHrn" must be a string');if(!zc(c))throw new D(Hq,2,'"layerId" must be a string');this.v=a;this.a=b;this.c=c;this.s=Da(d)&&Da(d.parameters)?d.parameters:{};this.ac(this.f===Vj.WEBGL?new Th({sources:{iml:{type:"MVT"}},layers:{iml:{data:{source:"iml",layer:this.a+":"+this.c},points:{filter:{$geometry:"point"},draw:{points:{collide:!1,order:200,color:"#92CF48",
  size:[[10,"8px"],[14,"12px"],[18,"16px"]]}}},polygons:{filter:{$geometry:"polygon"},draw:{polygons:{order:201,color:"#E39E3C"},lines:{order:202,color:"#755DA5",width:"1px"}}},lines:{filter:{$geometry:"line"},draw:{lines:{order:203,color:"#0258AE",width:"2px",join:"round",cap:"round"}}}}}}):new H.map.render.harp.Style({styles:[{layer:this.a+":"+this.c,when:["==",["geometry-type"],"Point"],technique:"circles",renderOrder:200,color:"#92CF48",size:["interpolate",["linear"],["zoom"],10,8,14,12,18,16]},
  {layer:this.a+":"+this.c,when:["==",["geometry-type"],"Polygon"],technique:"fill",color:"#E39E3C",renderOrder:201},{layer:this.a+":"+this.c,when:["==",["geometry-type"],"Polygon"],technique:"solid-line",color:"#755DA5",lineWidth:"1px",renderOrder:202},{layer:this.a+":"+this.c,when:["==",["geometry-type"],"LineString"],technique:"solid-line",color:"#0258AE",lineWidth:"2px",renderOrder:203}]}));}u(Hq,R);t("H.service.iml.Provider",Hq);
  Hq.prototype.K=function(a,b,c,d,e){return this.v.$f(a,b,c,this.a,this.c,d,e,this.s)};Hq.prototype.requestInternal=Hq.prototype.K;Hq.prototype.Ed=df;Hq.prototype.providesOMV=Hq.prototype.Ed;Hq.prototype.ua=function(){return this.ub()};Hq.prototype.getStyle=Hq.prototype.ua;Hq.prototype.rc=function(a){C(a,Th)&&a.b("MVT");this.ac(a);};Hq.prototype.setStyle=Hq.prototype.rc;function Iq(a){Iq.l.constructor.call(this,Iq,a);}u(Iq,Pp);t("H.service.publicTransit.Service",Iq);Iq.prototype.a=function(){return {subDomain:"transit.router",path:"v8"}};Iq.CONFIG_KEY="publicTransit";Iq.prototype.Fn=function(a,b,c){a=this.D().clone().F("routes").I(a);return this.K(a,b,c)};Iq.prototype.getRoutes=Iq.prototype.Fn;Iq.prototype.Qm=function(a,b,c){a=this.D().clone().F("departures").I(a);return this.K(a,b,c)};Iq.prototype.getDepartures=Iq.prototype.Qm;
  Iq.prototype.Jn=function(a,b,c){a=this.D().clone().F("stations").I(a);return this.K(a,b,c)};Iq.prototype.getStations=Iq.prototype.Jn;Iq.prototype.b=function(a){return Error(JSON.stringify(a))};Y.prototype.Bn=function(a){return this.Ya(Iq,a)};Y.prototype.getPublicTransitService=Y.prototype.Bn;function Jq(a){Jq.l.constructor.call(this,Jq,a);}u(Jq,Pp);t("H.service.RoutingService",Jq);Jq.prototype.a=function(){return {subDomain:"route.ls",path:"routing/7.2"}};Jq.prototype.b=function(a){return Error(a.details)};Jq.CONFIG_KEY="routing";Jq.prototype.Qd=function(a,b,c){a=this.D().clone().F("calculateroute.json").I(a);return this.K(a,b,c)};Jq.prototype.calculateRoute=Jq.prototype.Qd;
  Jq.prototype.dh=function(a,b,c){a=this.D().clone().Ma("isoline").F("calculateisoline.json").I(a);return this.K(a,b,c)};Jq.prototype.calculateIsoline=Jq.prototype.dh;function Kq(a){Kq.l.constructor.call(this,Kq,a);}u(Kq,Pp);t("H.service.RoutingService8",Kq);Kq.CONFIG_KEY="routing_v8";Kq.prototype.a=function(){return {subDomain:"router",path:"v8/routes"}};Kq.prototype.b=function(a){return Error(a.error)};Kq.prototype.Qd=function(a,b,c){a=this.D().clone().I(a);return this.K(a,b,c)};Kq.prototype.calculateRoute=Kq.prototype.Qd;Kq.prototype.dh=function(a,b,c){a=this.D().clone().Ma("isoline").Md("v8/isolines").I(a);return this.K(a,b,c)};
  Kq.prototype.calculateIsoline=Kq.prototype.dh;Y.prototype.bk=function(a,b){b=+b||7;if(7===b)b=Jq;else if(8===b)b=Kq;else throw new D(this.bk,1,"allowed values are 7 and 8");return this.Ya(b,a)};Y.prototype.getRoutingService=Y.prototype.bk;function Lq(){}t("H.service.extension.dataView.ITable",Lq);Lq.prototype.be=function(){};Lq.prototype.getMeta=Lq.prototype.be;Lq.prototype.ee=function(){};Lq.prototype.getRowCount=Lq.prototype.ee;Lq.prototype.Bc=function(){};Lq.prototype.getRow=Lq.prototype.Bc;Lq.prototype.Ua=function(){};Lq.prototype.getColumnNames=Lq.prototype.Ua;Lq.prototype.Ue=function(){};Lq.prototype.getColumn=Lq.prototype.Ue;Lq.prototype.xa=function(){};Lq.prototype.getCell=Lq.prototype.xa;Lq.prototype.concat=function(){};
  Lq.prototype.concat=Lq.prototype.concat;function Mq(){}t("H.service.extension.dataView.IRow",Mq);Mq.prototype.Ua=function(){};Mq.prototype.getColumnNames=Mq.prototype.Ua;Mq.prototype.xa=function(){};Mq.prototype.getCell=Mq.prototype.xa;Mq.prototype.xd=function(){};Mq.prototype.getTable=Mq.prototype.xd;function Nq(a,b){this.a=a;this.b=b;}t("H.service.extension.dataView.ObjRow",Nq);Nq.prototype.Ua=function(){return this.a.Ua()};Nq.prototype.getColumnNames=Nq.prototype.Ua;Nq.prototype.xa=function(a){return this.a.xa(this.b,a)};Nq.prototype.getCell=Nq.prototype.xa;Nq.prototype.xd=function(){return this.a};Nq.prototype.getTable=Nq.prototype.xd;function Oq(){}t("H.service.extension.dataView.IColumn",Oq);Oq.prototype.xa=function(){};Oq.prototype.getCell=Oq.prototype.xa;function Pq(a,b){this.b=a;this.a=b;}t("H.service.extension.dataView.ObjColumn",Pq);Pq.prototype.xa=function(a){return this.b.xa(a,this.a)};Pq.prototype.getCell=Pq.prototype.xa;function Qq(a,b,c){var d;b=b||(a&&a.length?Object.keys(a[0]):B);this.Hb=a;if(b)for(this.Rd=b,this.gh=a=mc(),d=b.length;d--;)a[b[d]]=!0;c!==B&&(this.ji=c);}t("H.service.extension.dataView.ObjTable",Qq);n=Qq.prototype;n.ji=B;n.Hb=B;n.Rd=B;n.gh=B;n.be=function(){return this.ji};Qq.prototype.getMeta=Qq.prototype.be;Qq.prototype.ee=function(){return this.Hb?this.Hb.length:0};Qq.prototype.getRowCount=Qq.prototype.ee;Qq.prototype.Bc=function(a){var b=this.Hb;return b&&b[a]?new Nq(this,a):B};
  Qq.prototype.getRow=Qq.prototype.Bc;Qq.prototype.Ua=function(){return this.Rd||ff};Qq.prototype.getColumnNames=Qq.prototype.Ua;Qq.prototype.Ue=function(a){return this.gh[a]?new Pq(this,a):B};Qq.prototype.getColumn=Qq.prototype.Ue;Qq.prototype.xa=function(a,b){var c=this.Hb;return (a=c&&this.gh[b]&&c[a])&&a[b]};Qq.prototype.getCell=Qq.prototype.xa;
  Qq.prototype.concat=function(){var a=arguments.length,b,c=this.Rd,d=""+this.Rd,e=(this.Hb||[]).slice();for(b=0;b<a;b++){var f=arguments[b];if(!(f instanceof Qq))throw new D(this.concat,b);if(f.Hb){if(c&&""+f.Rd!==d)throw new D(this.concat,b,"Incompatible columns!");e=e.concat(f.Hb);}}return new Qq(e,this.Rd,this.ji)};Qq.prototype.concat=Qq.prototype.concat;function Rq(a,b){a.Hb?a.Hb.push(b):a.Hb=[b];return a.Hb.length-1}function Sq(a){var b=Tq;if(!a||!zc(Ze(a.layerId,a.layer))||!Cc(a.level)||tc(a.rowFilter)&&!Ca(a.rowFilter)||tc(a.rowFilterContext)&&!Da(a.rowFilterContext))throw new D(b,1,tc("invalid layer config")?"invalid layer config":a);}function Uq(a,b,c,d){d=d||Vq;this.tf={};d.provider=a;this.invalidate=ef;Uq.l.constructor.call(this,b,d);delete this.invalidate;c&&(this.b=c);this.wa(Mg.ADD);}u(Uq,bh);t("H.service.remote.Spatial",Uq);var Vq={};Uq.prototype.gb=function(){return this.b||bh.prototype.gb.call(this)};Uq.prototype.getId=Uq.prototype.gb;Uq.prototype.Dg=Function();Uq.prototype.retain=Uq.prototype.Dg;Uq.prototype.release=Function();Uq.prototype.release=Uq.prototype.release;function Wq(a,b){this.a=a;b&&(this.b=b);}
  var Xq=new Wq([]);Uq.prototype.$d=function(a){return (this.tf[a.key]||Xq).a};Uq.prototype.getGeometriesForTile=Uq.prototype.$d;Uq.prototype.zh=function(a){return (this.tf[a.key]||Xq).b};Uq.prototype.getLabels=Uq.prototype.zh;function Yq(a,b,c){a.tf[b.key]=new Wq(c,void 0);}function Zq(a,b,c,d,e,f){$q(Zq,1,b,c);$q(Zq,2,d,e);(this.f=a.length)?(this.s=a,this.aa=b,this.i=c,this.b=0,this.c=A(this.c,this),this.o=d,this.j=e,this.a=mc(),Wa(this.a,ar,f||{}),this.g={},x.setTimeout(this.c,0)):b(ff,!0);}var ar={duration:100,Am:"geometry",zm:"WKT",Zo:"searchAttributes",Cj:B};
  Zq.prototype.c=function(){var a=[];var b=!1;for(var c=zk(),d;this.b<this.f;){var e=this.s[this.b];b=e.attributes;d=e.layerId||this.a.Cj;e.distance&&(b[this.a.Zo]={nearest:new Wf(e.nearestLat,e.nearestLon),distance:e.distance});if(e=e[this.a.Am]){try{var f=Fn(new $n(e));}catch(g){this.i(new x.Error(g.message));b=!0;break}b[this.a.zm]=f;}(e=this.g[d])||(e=this.g[d]=this.o({layerId:d,columnNames:Object.keys(b)}));b=this.j(e,b);a.push(b);this.b++;if((b=this.b===this.f)||zk()-c>=this.a.duration){this.aa(a,
  b);break}}b?this.g=y:this.m=x.setTimeout(this.c,0);};Zq.prototype.cancel=function(){x.clearTimeout(this.m);this.b<this.f&&this.i(new x.Error("parsing canceled"));};Zq.prototype.cancel=Zq.prototype.cancel;function $q(a,b,c,d){if(!Ca(c))throw new D(a,b,"has invalid type");if(!Ca(d))throw new D(a,b+1,"has invalid type");}function br(a,b,c){var d=8===a;this.b=b;this.c=c||hd;(this.a=4===a||d)?this.j=d:this.g=1===a;this.f=this.a?"$HProjGeometry":"geometry";}
  br.prototype.parse=function(a,b,c){var d,e,f={},g=[],h,k;var l=0;for(h=c.length;l<h;l++){var m=c[l];var p=m.Rows;if(m=p.length){var q=Object.keys(p[0]).filter(function(v){return "geometry"!==v&&"$HProjGeometry"!==v});q=new Qq(p,q);for(k=0;k<m;k++){var r=p[k];if(e=r[this.f]){if(delete r[this.f],r=q.Bc(k))try{this.a?d=cr(this,a,b,r,e):d=dr(this,a,r,e.path),d.ka(a),g.push(d);}catch(v){this.c(v.message);}}else this.c("Layer must contain geometries");}}}f[this.a?"spatials":this.g?"markers":"domMarkers"]=
  g;return f};function cr(a,b,c,d,e){var f=[],g=e.paths,h=g.length,k=0,l=a.b&&a.b(d);for(a=new Uq(b,a.j,B,{style:l||a.i,data:d});k!==h;)f.push(er(g[k++]));Yq(a,c,[new rh(f,e.interiorsIndex,e.outlinesIndex)]);return a}function dr(a,b,c,d){d=new Wf(d[0],d[1]);var e=a.b&&a.b(c);a.g?(a={icon:e,data:c,provider:b},a=new yn(d,a)):(a={icon:e,data:c,provider:b},a=new Qi(d,a));return a}function er(a){for(var b=0,c=a.length,d=[];b<c;)d.push(new I(a[b++],a[b++]));return d}function fr(a){a=a||{};var b=a.tileCacheSize||1024,c=a.resultType,d=a.styleCallback;tc(a.min)||(a.min=12);fr.l.constructor.call(this,a);if(-1===gr.indexOf(c))throw new D(fr,2,"invalid resultType");this.a=c;if(d&&!Ca(d))throw new D(fr,2,"invalid style callback");this.Aa=d;this.W=a.pixelRatio||Se();this.Lb=A(this.Lb,this);this.O(new Dk(b,A(this.dc,this)));this.createTileInternal=4===c||8===c?A(this.N,this):A(this.J,this);}u(fr,R);t("H.service.extension.TileProvider",fr);fr.prototype.c=!1;
  fr.prototype.getCapabilities=function(){return fr.l.getCapabilities.call(this)|Cj.CROP_LINES_BY_TILE|Cj.CROP_POLYGONS_BY_TILE};fr.prototype.jb=function(a,b,c,d){return this.c?fr.l.jb.call(this,a,b,c,d):B};fr.prototype.requestTile=fr.prototype.jb;fr.prototype.Lb=function(a){this.dispatchEvent(new td("error",zc(a)?a:a+"",this));};fr.prototype.Wb=function(){return 1===this.a};fr.prototype.providesMarkers=fr.prototype.Wb;fr.prototype.Vb=function(){return 2===this.a};fr.prototype.providesDomMarkers=fr.prototype.Vb;
  fr.prototype.Jc=function(){return 4===this.a||8===this.a};fr.prototype.providesSpatials=fr.prototype.Jc;function hr(a){var b=a.yb;b||(a.v||(a.v=a.s(a.a,a.Aa,a.Lb)),b=a.yb=new kq(a.v),b.ka(a),b.addEventListener(a.i.Ea,A(a.kb,a)),b.yb=!0);return b}
  fr.prototype.J=function(a,b,c,d){var e=this.getTileKey(a,b,c);e=this.Ob().get(e);var f=2==this.a,g=[],h=hr(this);e?e.valid=!0:(a=e=new Lk(a,b,c,y),delete a.j,a.m=d);d=f?mq(h,e,"domMarkers"):mq(h,e,"markers");for(b=d.length;b--;)a=d[b],a.aj=e,(f||1===a.Cb().getState())&&g.push(a);e.data=g;return e};fr.prototype.kb=function(a){if(a=a.target.aj)a.valid=!1;};fr.prototype.cp=function(a){this.C=!!a;};fr.prototype.setTileCanvasRendering=fr.prototype.cp;fr.prototype.C=!0;
  fr.prototype.N=function(a,b,c,d){var e=hr(this),f=this.getTileKey(a,b,c),g=this.tileSize,h=this.Ob().get(f);h||(a=h=new Pk(f,a,b,c,g,this.W,c,e),delete a.j,a.m=d);this.C?(d=Mp.pop(g),h.V(d)||Mp.push(d,g)):Vk(h);return h};fr.prototype.dc=function(a,b){var c;if(4===this.a||8===this.a){a=b.Va();for(c=a.length;c--;)delete a[c].tf[b.key];b.data&&(Mp.push(b.xg(),this.tileSize),b.yg());}else for(a=b.data,c=a.length;c--;)delete a[c].aj;};fr.prototype.u=function(){fr.l.u.call(this);hr(this).B();};
  var ir={MARKER:1,DOM_MARKER:2,POLYLINE:4,POLYGON:8};fr.ResultType=ir;var gr=[1,2,4,8];function Tq(a,b,c){var d=this,e=b&&b.rowFilter,f=c.resultType;Tq.l.constructor.call(this,c);C(a,jr,Tq,0);Sq(b);e?(c=Ua(b),c.rowFilter=e.toString()):c=Ua(b);delete c.layer;c.layerId=Ze(b.layerId,b.layer);(new Mf).a("pde","H.service.extension.worker.processor");a=a.D().clone().F(kr+"."+lr).I({meta:1});(new Pf("pde",{message:[this.uid,0,{tileSize:this.tileSize,projected:!0,onlyOutline:4===f,serverUrl:a.toString(),layerConfigs:[c],horizontalMargin:1}]})).then(function(){d.c=!0;Wj(d);},this.Lb);}
  u(Tq,fr);t("H.service.extension.platformData.TileProvider",Tq);Tq.prototype.s=function(a,b,c){a=new br(a,b,c);a.i=mr;return a};var mr=new Ug({strokeColor:"transparent",fillColor:"transparent",lineWidth:0,lineJoin:"round",lineCap:"round"});
  Tq.prototype.K=function(a,b,c,d,e){var f=this,g=this.getTileKey(a,b,c),h;g=this.Ob().get(g);var k={cancel:hd},l=!0,m=this.a;g&&(4===m||8===m?g.le()||(d(Mp.pop(this.tileSize),null),l=!1):(d(y),l=!1));if(l){var p=Kp.setTimeout(function(){h=new Pf("pde",{message:[f.uid,1,[a,b,c]]});h.then(d,e);},500);k.cancel=function(){h?h.cancel():Kp.clearTimeout(p);};}return k};Tq.prototype.requestInternal=Tq.prototype.K;Tq.prototype.u=function(){Tq.l.u.call(this);new Pf("pde",{message:[this.uid,3]});};
  Tq.ResultType=ir;function nr(a){this.a=a;}nr.prototype.cancel=function(){for(var a=this.a,b=a.length;b--;)a[b].cancel();a.length=0;};function jr(a){jr.l.constructor.call(this,jr,a);}u(jr,Pp);t("H.service.extension.platformData.Service",jr);jr.prototype.a=function(){return {subDomain:"s.fleet.ls",path:"1"}};jr.CONFIG_KEY="platformData";jr.prototype.request=function(a,b,c,d,e){return this.T(a,b,c,d,e)};
  jr.prototype.T=function(a,b,c,d,e){var f="text/plain";if(!a)throw new D(this.request,0,a);if(!b)throw new D(this.request,1,b);if(!d)throw new D(this.request,3,d);if(!e)throw new D(this.request,4,e);a=this.D().clone().F(a+"."+b).I(c);b===or.JSON&&(f="application/json");return this.K(a,d,e,f)};var kr="tiles";
  jr.EntryPoint={DOC_ATTRIBUTES:"doc/attributes",DOC_LAYER:"doc/layer",DOC_LAYERS:"doc/layers",DOC_MAPS:"doc/maps",DOC_INDEXES:"doc/indexes",SEARCH_BBOX:"search/bbox",SEARCH_CORRIDOR:"search/corridor",SEARCH_PROXIMITY:"search/proximity",SEARCH_QUADKEY:"search/quadkey",SERVICE_CONFIGURATION:"serviceconfiguration",STATIC:"static",TILE:"tile",TILES:kr,FILE:"file",INDEX:"index"};var lr="json",or={TXT:"txt",JSON:lr,HTML:"html",BIN:"bin"};jr.EntryPointType=or;
  jr.prototype.wc=function(a,b){var c=b&&b.resultType;a=new Tq(this,a,b);var d;1==c||2===c?d=new Bn(a):d=new ll(a);return d};jr.prototype.createTileLayer=jr.prototype.wc;jr.prototype.Jd=function(a,b,c,d){var e=[],f,g=b.layer_id||b.layer_ids;a=this.request(a,lr,b,function(h){f=new Zq(h.geometries,c,d,function(k){return new Qq([],k.columnNames,k)},function(k,l){return k.Bc(Rq(k,l))},{Cj:g});e.push(f);},function(h){d(new x.Error(h));});e.push(a);return new nr(e)};
  function pr(a,b,c){if(!yc(a))throw new D(c,0,"has invalid type");if(!yc(b))throw new D(c,1,"has invalid type");if(a.length!==b.length||!a.length)throw new D(c,1,"specify one key attribute for each given layer id in the same order");}
  jr.prototype.Mc=function(a,b,c,d,e,f){function g(l,m){m&&h--;d(l,!h);}var h,k=[];pr(a,b,this.Mc);$q(this.Mc,3,d,e);C(c,K,this.Mc,2);c={bbox:c.la+","+c.ca+";"+c.na+","+c.ia};f&&Wa(c,f);a=c.layer_id?[c.layer_id]:a;f=0;for(h=a.length;f<h;f++)c.layer_id=a[f],c.key_attribute=b[f],k.push(this.Jd("search/bbox",c,g,e));return new nr(k)};jr.prototype.searchByBoundingBox=jr.prototype.Mc;
  jr.prototype.Yb=function(a,b,c,d,e,f,g){pr(a,b,this.Yb);C(c,Wf,this.Yb,2,"has invalid type");if(!Cc(d))throw new D(this.Yb,3,"has invalid type");$q(this.Yb,4,e,f);a={layer_ids:a.join(","),key_attributes:b.join(","),proximity:c.lat+","+c.lng+","+d};g&&Wa(a,g);return this.Jd("search/proximity",a,e,f)};jr.prototype.searchByProximity=jr.prototype.Yb;
  jr.prototype.Xb=function(a,b,c,d,e,f,g){var h="";pr(a,b,this.Xb);if(!zc(c)&&!C(c,L))throw new D(this.Xb,1,"has invalid type");if(!Cc(d))throw new D(this.Xb,2,"has invalid type");$q(this.Xb,4,e,f);a={layer_ids:a.join(","),key_attributes:b.join(","),radius:d};if(zc(c))a.route_id=c;else {d=c.Y;c=0;for(b=d.length;c<b;c+=3)h+=d[c]+","+d[c+1],c<b-3&&(h+=";");a.corridor=h;}g&&Wa(a,g);return this.Jd("search/corridor",a,e,f)};jr.prototype.searchByCorridor=jr.prototype.Xb;
  Y.prototype.wn=function(a){return this.Ya(jr,a)};Y.prototype.getPlatformDataService=Y.prototype.wn;function qr(a){qr.l.constructor.call(this,qr,a);}u(qr,Pp);t("H.service.extension.geofencing.Service",qr);qr.prototype.a=function(){return {subDomain:"fleet.ls",path:"2"}};qr.CONFIG_KEY="geofencing";qr.prototype.request=function(a,b,c,d){return this.T(a,b,c,d)};qr.prototype.b=function(a){return Error(a.issues&&a.issues.length?a.issues.map(function(b){return b.message}).join(". "):a.message||a.response_code)};
  qr.prototype.T=function(a,b,c,d){if(!a)throw new D(this.request,0,a);if(!Ca(c))throw new TypeError("onResult must be a function");if(!Ca(d))throw new TypeError("onError must be a function");a=this.D().clone().F(a+".json").I(b);return this.K(a,c,d)};qr.EntryPoint={SEARCH_PROXIMITY:"search/proximity"};Y.prototype.Zm=function(a){return this.Ya(qr,a)};Y.prototype.getGeofencingService=Y.prototype.Zm;t("H.service.extension.customLocation.Permission",{READ:"read",WRITE:"write",EXPORT:"export"});t("H.service.extension.customLocation.Storage",{READONLY:"readonly",UPDATABLE:"updatable"});function rr(a){var b=sr;if(!a||!zc(a.layerId)||tc(a.rowFilter)&&!Ca(a.rowFilter)||tc(a.rowFilterContext)&&!Da(a.rowFilterContext))throw new D(b,1,tc("invalid layer config")?"invalid layer config":a);}function tr(a){return zc(a)&&/^[A-Z][A-Z0-9_]*$/.test(a)}function ur(a){for(var b=a&&a.length,c=2<=b&&"WKT"===a[--b]&&"GEOMETRY_ID"===a[--b];c&&b--;)c=tr(a[b]);return c}
  function vr(a,b){var c="",d,e,f=[];if(!b){var g={};f=[];if(a.geometries)for(e=0;e<a.geometries.length;e++)b=a.geometries[e],g[b.layerId]||(g[b.layerId]=[]),g[b.layerId].push(b);for(d in g)f.push({layerId:d,geometries:g[d]});for(d=0;d<f.length;d++)c+=vr(f[d],f[d].layerId);}else if(a.geometries&&a.geometries.length)for(e=Object.keys(a.geometries[0].attributes),c=c+("Meta:\t"+b+"\n")+e.join("\t"),c+="\tWKT\n",d=0;d<a.geometries.length;d++){var h=a.geometries[d].attributes;g=a.geometries[d].geometry;for(b=
  0;b<e.length;b++)f.push(h[e[b]]);c+=f.join("\t");c+="\t"+g+"\n";f=[];}return c}function sr(a,b,c){var d=this,e=b&&b.rowFilter,f;sr.l.constructor.call(this,c);C(a,wr,sr,0);var g=c.resultType;rr(b);if(e){var h=Ua(b);h.rowFilter=e.toString();}else h=b;(new Mf).a("cle","H.service.extension.worker.processor");var k=b.layerId;a.request(xr,yr,{detail_level:"all",layer_id:k},function(l){l=l.layers;var m;for(m=0;m<l.length;m++)if(l[m].layerId===k){h.level=l[m].level;break}f=a.D().clone().F(zr+"."+yr).I({meta:1});(new Pf("cle",{message:[d.uid,0,{tileSize:d.tileSize,projected:!0,onlyOutline:4===
  g,serverUrl:f.toString(),layerConfigs:[h],batchTiles:!1,horizontalMargin:1}]})).then(function(){d.c=!0;Wj(d);},d.Lb);},function(l){d.Lb(l.message);});}u(sr,fr);t("H.service.extension.customLocation.TileProvider",sr);sr.prototype.s=function(a,b,c){return new br(a,b,c)};
  sr.prototype.K=function(a,b,c,d,e){var f=this,g=this.getTileKey(a,b,c),h;g=this.Ob().get(g);var k={cancel:hd},l=!0,m=this.a;g&&(4===m||8===m?g.le()||(d(Mp.pop(this.tileSize),null),l=!1):(d(y),l=!1));if(l){var p=Kp.setTimeout(function(){h=new Pf("cle",{message:[f.uid,1,[a,b,c]]});h.then(d,e);},500);k.cancel=function(){h?h.cancel():Kp.clearTimeout(p);};}return k};sr.prototype.requestInternal=sr.prototype.K;sr.prototype.u=function(){sr.l.u.call(this);new Pf("cle",{message:[this.uid,3]});};function Ar(){if(Br)throw new Xc(Ar);}t("H.service.extension.customLocation.Table",Ar);var Br=!0;function Cr(a,b){var c;Br=!1;var d=new Ar;Br=!0;d.c=pc(x.JSON.parse(x.JSON.stringify(a)));a=a.columnNames;var e=mc();for(c=a.length;c--;)e[a[c]]=c;d.f=e;d.b=a.length;if(b){if(b.length%a.length)throw new D(Cr,1,"Invalid number of cells");}else b=[];d.a=b;return d}Ar.prototype.be=function(){return this.c};Ar.prototype.getMeta=Ar.prototype.be;Ar.prototype.ee=function(){return this.a.length/this.b};
  Ar.prototype.getRowCount=Ar.prototype.ee;Ar.prototype.Bc=function(a){return a<this.a.length/this.b?new Dr(this,a):B};Ar.prototype.getRow=Ar.prototype.Bc;Ar.prototype.Gn=function(){var a=this.a.length/this.b,b,c=new x.Array(a);for(b=0;b<a;b++)c[b]=new Dr(this,b);return c};Ar.prototype.getRows=Ar.prototype.Gn;Ar.prototype.Wg=function(a){var b=this.b,c=this.a,d=c.length/this.b;if(!a||a.length%b)throw new D(this.Wg,0,"Invalid number of cells");this.a=c.concat(a);return d};Ar.prototype.addCells=Ar.prototype.Wg;
  Ar.prototype.cm=function(){for(var a=this.b,b=this.a,c=this.a.length/this.b;a--;)b.push(y);return this.Bc(c)};Ar.prototype.addRow=Ar.prototype.cm;Ar.prototype.Ua=function(){return this.c.columnNames};Ar.prototype.getColumnNames=Ar.prototype.Ua;Ar.prototype.Ue=function(a){return this.f[a]===B?B:new Er(this,a)};Ar.prototype.getColumn=Ar.prototype.Ue;Ar.prototype.xa=function(a,b){return this.a[a*this.b+this.f[b]]};Ar.prototype.getCell=Ar.prototype.xa;
  Ar.prototype.Nc=function(a,b,c){b=this.f[b];if(a>=this.a.length/this.b)throw new D(this.Nc,0,"Row index out of bounds");if(b===B)throw new D(this.Nc,0,"Column unknown");this.a[a*this.b+b]=c;};Ar.prototype.setCell=Ar.prototype.Nc;
  Ar.prototype.concat=function(a){var b=arguments.length,c,d=""+this.Ua(),e=this.a?this.a.slice():[];for(c=0;c<b;c++){var f=arguments[c];if(!(f instanceof Ar))throw new D(this.concat,c);if(""+f.Ua()!==d)throw new D(this.concat,c,"Incompatible columns!");f.a&&(e=e.concat(f.a));}return Cr(this.c,e)};Ar.prototype.concat=Ar.prototype.concat;var Fr=/(\n|\t|\r|")/;
  Ar.prototype.Xi=function(a,b){var c,d=this.b,e=this.Ua(),f=[],g=[],h=this.a,k=-1;for(c=0;c<d;c++)if(!a||a.test(e[c]))"WKT"===e[c]&&(k=f.length),f.push(c);if(!(a=f.length))throw new D(this.Xi,1,"No columns filtered");Gr(this,g,e,0,d,f,a,k);if(b){var l=b.length;for(c=0;c<l;c++)g.push("\n"),e=b[c],Gr(this,g,h,e,d,f,a,k);}else for(l=this.ee(),e=0;e<l;e++)g.push("\n"),Gr(this,g,h,e,d,f,a,k);return g.join("")};
  function Gr(a,b,c,d,e,f,g,h){var k;for(k=0;k<g;k++){k&&b.push("\t");var l=c[d*e+f[k]];if(k!==h){if(l!==y){l=String(l);if(Fr.test(l))throw new D(a.Xi,0,'Invalid character (\\n, \\r, \\t, or ") in row '+d+" column "+a.c.columnNames[f[k]]);b.push(l);}}else b.push(l);}}function Er(a,b){this.b=a;this.a=b;}Ar.Column=Er;Er.prototype.xa=function(a){return this.b.xa(a,this.a)};Er.prototype.getCell=Er.prototype.xa;Er.prototype.Nc=function(a,b){this.b.Nc(a,this.a,b);};Er.prototype.setCell=Er.prototype.Nc;
  function Dr(a,b){this.a=a;this.gi=b;}Ar.Row=Dr;Dr.prototype.Ua=function(){return this.a.Ua()};Dr.prototype.getColumnNames=Dr.prototype.Ua;Dr.prototype.xa=function(a){return this.a.xa(this.gi,a)};Dr.prototype.getCell=Dr.prototype.xa;Dr.prototype.Nc=function(a,b){this.a.Nc(this.gi,a,b);};Dr.prototype.setCell=Dr.prototype.Nc;Dr.prototype.xd=function(){return this.a};Dr.prototype.getTable=Dr.prototype.xd;function Hr(a){if(a===B)a="\t";else if(!/^[^"\r\n]$/.test(a))throw new D(Hr,0);this.b=String(a).charCodeAt(0);this.hi=A(this.hi,this);this.A=Ir;}var Ir=0;n=Hr.prototype;n.getState=function(){return this.A};function Jr(a,b,c){var d=a.A;if(d!==b)throw 1===d&&(a.A=Ir),new Xc(c,"Requires state: "+["READY","PARSE","PAUSE"][b]+" but found "+["READY","PARSE","PAUSE"][d]);}n.abort=function(){Jr(this,2,Hr.prototype.abort);this.A=Ir;};
  n.hi=function(a){this.A=Ir;throw new D(Hr.prototype.parse,0,"Malformed DSV at row "+this.a.j+" column "+this.a.b+": "+a);};function Kr(a,b){var c=[];a.parse(b,function(d,e,f){1>d&&(c[e]=f);return 0<d});a.A=Ir;return c}n.parse=function(a,b,c){Jr(this,Ir,Hr.prototype.parse);a=a.trim();this.a=new Lr(a,this.b,this.hi);this.c=b;this.Ok=c||ef;this.A=2;this.resume();};n.Ok=ef;
  n.resume=function(){var a=this.a,b=[];Jr(this,2,Hr.prototype.resume);this.A=1;do{if(!a.g){this.A=Ir;break}if(e>a.b){if(void 0!==c&&c!==e){this.a.a("The number of columns must be the same for all rows");return}var c=e;}var d=a.j;var e=a.b;var f=a.Nf;var g=this.Ok(d,e,a);if(a.Nf>f)for(;-1!==a.next(););else {for(;-1!==(f=a.next());)b.push(f);g=String.fromCharCode.apply(y,b);b.length=0;}Mr(a);this.c(d,e,g)&&(this.A=a.g?2:Ir);}while(1===this.A);2!=this.A&&void 0!==c&&0<e&&c!==e&&this.a.a("The number of columns must be the same for all rows");};
  function Lr(a,b,c){this.c=new $n(a);this.m=b;this.g=!0;this.Nf=this.j=this.b=0;Mr(this);this.a=c;this.f=[];this.i=!1;}n=Lr.prototype;n.Nf=0;function Mr(a){var b=a.c.Tb();a.o=!1;(a.aa=34===b)&&a.c.next();}function Nr(a,b){var c=a.c;a.o=!0;switch(b){case a.m:a.b++;break;case 13:c.next(),10!==c.Tb()&&a.a("CR without LF");case 10:a.b=0;a.j++;break;case -1:a.g=!1;break;default:a.a("End of field expected");}c.next();return -1}
  n.Tb=function(){if(this.o)var a=-1;else {var b=this.c;a=b.Tb();if(this.aa)switch(a){case 34:b.next();a=b.Tb();34!==a&&(a=Nr(this,a));break;case -1:this.a("Closing quotation mark expected");}else switch(a){case 34:this.a("Unexpected quotation mark");case this.m:case 13:case 10:case -1:a=Nr(this,a);}}return a};n.ze=function(){this.i=!0;this.f=[];};n.Ud=function(){var a=this.f.slice();this.i=!1;this.f=[];return a};n.next=function(){var a=this.Tb();-1!==a&&this.c.next();this.i&&this.f.push(a);this.Nf++;return a};function Or(a,b,c,d){d=d||{};if(!b)throw new D(Or,1,"has to be a function");if(!c)throw new D(Or,2,"has to be a function");this.c=b;this.g=c;this.a=[];this.i=d.duration||Pr;this.b=A(this.b,this);this.f={};a=a.split("Meta:\t").slice(1);for(b=0;b<a.length;b++){d=a[b].split("\n");c=d[0].split("\t")[0];d=d.slice(1).join("\n");this.Td[c]=new Hr;this.fi[c]=Kr(this.Td[c],d);var e={layerId:c,columnNames:this.fi[c]};this.Th.push(c);this.f[c]=Cr(e);this.Rc[c]=zk();Qr(this,d,c);this.b(c);}}var Pr=100;n=Or.prototype;
  n.fi={};n.Th=[];n.Td={};n.Rc={};n.Wi={};function Qr(a,b,c){var d=[],e=a.fi[c].length-1,f=a.f[c];try{a.Td[c].parse(b,function(g,h,k){var l=!1;0<g&&(d[h]=k,h===e&&(a.a.push(f.Bc(f.Wg(d))),zk()-a.Rc[c]>a.i&&(l=!0)));return l},function(g,h,k){if(0<g&&h===e)return Fn(k)});}catch(g){a.g(g);}}n.cancel=function(){for(var a in this.Wi)x.clearTimeout(this.Wi[a]);};Or.prototype.cancel=Or.prototype.cancel;
  Or.prototype.b=function(a){var b=this,c,d;this.Wi[a]=x.setTimeout(function(){if(2===b.Td[a].getState())b.Rc[a]=zk(),b.c(b.a,!1),b.a=[],b.Td[a].resume(),b.b(a);else {c=!0;for(d=0;d<b.Th.length;d++)if(b.Td[b.Th[d]].getState()!==Ir){c=!1;break}c&&(0<b.a.length&&b.c(b.a,!0),b.a=[]);}},0);};function wr(a){wr.l.constructor.call(this,wr,a);}u(wr,Pp);t("H.service.extension.customLocation.Service",wr);wr.prototype.a=function(){return {subDomain:"fleet.ls",path:"2"}};wr.CONFIG_KEY="customLocation";wr.prototype.wc=function(a,b){var c=b&&b.resultType;a=new sr(this,a,b);var d;1===c||2===c?d=new Bn(a):d=new ll(a);return d};wr.prototype.createTileLayer=wr.prototype.wc;
  function Rr(a,b,c,d){var e;a=a===Sr?"changes":"file";var f=b[a],g=zc(f),h=!g&&C(f,Blob);if(!g&&!h)throw new D(d,0,"Invalid "+a+" parameter");if(Tr)h?e=f:e=nf(f,"text/plain"),d=new x.FormData,d.append(a,e,e.name||a+".wkt"),c.method="POST",c.data=d,delete b[a];else if(h)throw new D(d,0,"Sending Blob data is not supported by the browser");}var Tr=x.FormData&&!!x.FormData.prototype.append;wr.prototype.request=function(a,b,c,d,e){return this.T(a,b,c,d,e)};
  wr.prototype.T=function(a,b,c,d,e){var f="text/plain",g=a===Ur.LAYERS_UPLOAD||a===Ur.LAYERS_MODIFY||a===Ur.LAYERS_IMPORT,h=c,k={data:B,method:"GET",headers:this.gf};if(!a)throw new D(this.request,0,a);if(!b)throw new D(this.request,1,b);$q(this.request,3,d,e);g&&(C(c,Object,this.request,2,"Invalid request parameters"),h=Ua(c),Rr(a,h,k,this.request));var l=this.D().clone().F(a+"."+b).I(h);b===Vr.JSON&&(f="application/json");a=new rf(f,l.toString(),fe,k);a.then(function(m){var p=m.issues;p&&m.error_id&&
  m.response_code?e(Error(p[0].message)):d(m);},function(m){"error"===m.type||404===m.status?e(Error(m.statusText||"Unable to load data")):m.json().then(function(p){e(Error("["+p.issues[0].message+"] "+l+" request failed"));},function(){e(Error("["+m.statusText+"] "+l+" request failed"));});});return a};
  var xr="layers/list",Sr="layers/modify",zr="tiled/tile",Ur={LAYERS_DELETE:"layers/delete",LAYERS_GRANT:"layers/access/grant",LAYERS_LIST:xr,LAYERS_MODIFY:Sr,LAYERS_UPLOAD:"layers/upload",LAYERS_IMPORT:"layers/import",SEARCH_ALL:"search/all",SEARCH_BBOX:"search/bbox",SEARCH_CORRIDOR:"search/corridor",SEARCH_PROXIMITY:"search/proximity",SEARCH_QUADKEY:"search/quadkey",SEARCH_TILE:zr};wr.EntryPoint=Ur;var yr="json",Vr={TXT:"txt",JSON:yr};wr.EntryPointType=Vr;
  wr.prototype.tb=function(a,b,c){var d=this;return this.request("search/all","txt",{filter:'WKT==""',layer_id:a},function(e){var f=e.replace(/[\r\n]+$/g,"").split("\t");d.request(xr,yr,{layer_id:a,detail_level:"all"},function(g){g=g.layers[0];g.columnNames=f;b(Cr(g));},c);},c)};wr.prototype.getLayer=wr.prototype.tb;
  wr.prototype.hk=function(a,b,c,d){function e(){return ++g<f?h.request("layers/access/grant",yr,{layer_id:a,granted_app_id:b[g].grantedAppId,permissions:b[g].permissions.join(",")},e,d):h.tb(a,c,d)}var f=b&&b.length,g=-1,h=this;return e()};wr.prototype.grantAccess=wr.prototype.hk;wr.prototype.Ej=function(a,b,c){return this.request("layers/delete",yr,{layer_ids:a},b,c)};wr.prototype.deleteLayer=wr.prototype.Ej;
  wr.prototype.qd=function(a,b,c){function d(){setTimeout(function(){k.tb(g,function(q){setTimeout(e.bind(null,q),m);},function(){64E3>l?(l+=m,d()):c(x.Error("Timeout"));});},m);m*=2;}function e(q){var r=JSON.stringify(q.Ua()),v=a.grants;if(r!==JSON.stringify(h)){var w="Results into different column names on the backend: "+r;setTimeout(function(){k.Ej(g,function(){c(x.Error(w));},function(z){c(x.Error(w+". "+z.message));});},m);}else v&&v.length?k.hk(g,v,b,c):b(q);}var f,g,h,k=this,l=0,m=1E3;var p=!a||!tr(g=
  a.layerId)&&(f="layerId")||!ur(h=a.columnNames)&&(f="columnNames")?0:Ca(b)?Ca(c)?-1:2:1;if(0<=p)throw new D(k.qd,p,f||arguments[p]);return k.tb(g,function(){c(x.Error("Layer exists already"));},function(){var q={layer_id:g,file:h.join("\t")},r=a.level,v=a.storage;r!==B&&(q.level=r);v!==B&&(q.storage=v);k.request("layers/upload",yr,q,d,c);})};wr.prototype.createLayer=wr.prototype.qd;
  wr.prototype.Jd=function(a,b,c,d){var e=[],f;a=this.request(a,yr,b,function(g){g.geometries.length?(g=vr(g,b.layer_id),f=new Or(g,c,d),e.push(f)):c(ff,!0);},d);e.push(a);return new nr(e)};wr.prototype.Yb=function(a,b,c,d,e,f){if(!yc(a))throw new D(this.Yb,0,"has invalid type");C(b,Wf,this.Yb,1,"has invalid type");if(!Cc(c))throw new D(this.Yb,2,"has invalid type");$q(this.Yb,3,d,e);a={layer_ids:a.join(","),proximity:b.lat+","+b.lng+","+c};f&&Wa(a,f);return this.Jd("search/proximity",a,d,e)};
  wr.prototype.searchByProximity=wr.prototype.Yb;wr.prototype.Xb=function(a,b,c,d,e,f){var g="";if(!yc(a))throw new D(this.Xb,0,"has invalid type");if(!zc(b)&&!C(b,L))throw new D(this.Xb,1,"has invalid type");if(!Cc(c))throw new D(this.Xb,2,"has invalid type");$q(this.Xb,3,d,e);a={layer_ids:a.join(","),radius:c};if(zc(b))a.route_id=b;else {var h=b.Y;b=0;for(c=h.length;b<c;b+=3)g+=h[b]+","+h[b+1],b<c-3&&(g+=",");a.corridor=g;}f&&Wa(a,f);return this.Jd("search/corridor",a,d,e)};
  wr.prototype.searchByCorridor=wr.prototype.Xb;wr.prototype.Mc=function(a,b,c,d,e){function f(k,l){l&&h--;c(k,!h);}var g=[],h;if(!yc(a))throw new D(this.Mc,0,"has invalid type");C(b,K,this.Mc,1,"has invalid type");$q(this.Mc,2,c,d);b={bbox:b.la+","+b.ca+";"+b.na+","+b.ia};e&&Wa(b,e);a=b.layer_id?[b.layer_id]:a;e=0;for(h=a.length;e<h;e++)b.layer_id=a[e],g.push(this.Jd("search/bbox",b,f,d));return new nr(g)};wr.prototype.searchByBoundingBox=wr.prototype.Mc;
  wr.prototype.Ci=function(a,b,c,d){var e,f=[];if(!zc(a))throw new D(this.Ci,0,"has invalid type");$q(this.Ci,1,b,c);var g={layer_id:a};d&&Wa(g,d);d=this.request("search/all",yr,g,function(h){h.geometries.length?(h=vr(h,a),e=new Or(h,b,c),f.push(e)):b(ff,!0);},c);f.push(d);return new nr(f)};wr.prototype.searchAll=wr.prototype.Ci;var Wr={"delete":/^GEOMETRY_ID$/,append:/^(?!GEOMETRY_ID$)/};
  function Xr(a,b,c,d,e,f){function g(){v++;d(this,v===q);}function h(U){v++;e(U,this,v===q);}var k="append"!==b,l,m={},p=mc(),q=0,r=[],v=0;if(!yc(c))throw new D(f,0,c);$q(f,1,d,e);for(l=c.length;l--;){var w=c[l];if(C(w,Dr)){var z=w.xd().be().layerId;var J=w.xa("GEOMETRY_ID");if(k){if(J===y||""===String(J))var G='GEOMETRY_ID must not be null or ""';m[J=z+"_"+J]&&(G="same GEOMETRY_ID for multiple rows");m[J]=w;}else J!==y&&""!==String(J)&&(G='GEOMETRY_ID must be null or ""');}else G="Invalid type";if(G)throw new D(f,
  0,"- Invalid row at index "+l+", "+G);J=p[z];J||(J=p[z]=[],q++);J.push(w);}for(z in p){J=p[z];c=[];for(l=J.length;l--;)c.push(J[l].gi);r.push(a.request(Sr,yr,{layer_id:z,action:b,changes:J[0].xd().Xi(Wr[b]||null,c)},A(g,J),A(h,J)));}return new nr(r)}wr.prototype.uj=function(a,b,c){return Xr(this,"append",a,b,c,this.uj)};wr.prototype.appendRows=wr.prototype.uj;wr.prototype.Ql=function(a,b,c){return Xr(this,"update",a,b,c,this.Ql)};wr.prototype.updateRows=wr.prototype.Ql;
  wr.prototype.Fj=function(a,b,c){return Xr(this,"delete",a,b,c,this.Fj)};wr.prototype.deleteRows=wr.prototype.Fj;Y.prototype.Om=function(a){return this.Ya(wr,a)};Y.prototype.getCustomLocationService=Y.prototype.Om;function Yr(a){xq.l.constructor.call(this,Yr,a);}u(Yr,Pp);t("H.service.extension.customRoute.Service",Yr);Yr.prototype.a=function(){return {subDomain:"s.fleet.ls",path:"2"}};Yr.CONFIG_KEY="customRoute";Yr.prototype.b=function(a){return Error(a.issues&&a.issues.length?a.issues.map(function(b){return b.message}).join(". "):a)};Yr.prototype.Qd=function(a,b,c){$q(this.Qd,1,b,c);a=this.D().clone().F("calculateroute.json").I(a);return this.K(a,b,c)};Yr.prototype.calculateRoute=Yr.prototype.Qd;
  Y.prototype.Pm=function(a){return this.Ya(Yr,a)};Y.prototype.getCustomRoutingService=Y.prototype.Pm;function Zr(a){Zr.l.constructor.call(this,Zr,a);}u(Zr,Pp);t("H.service.SearchService",Zr);Zr.CONFIG_KEY="search";Zr.prototype.a=function(){return {subDomain:"search",path:"v1"}};Zr.prototype.b=function(a){a=[a.title,a.action,a.cause].filter(function(b){return b});return Error(a.join(". "))};Zr.prototype.rh=function(a,b,c){a=this.D().clone().Ma("geocode").F("geocode").I(a);return this.K(a,b,c)};Zr.prototype.geocode=Zr.prototype.rh;
  Zr.prototype.Bi=function(a,b,c){a=this.D().clone().Ma("revgeocode").F("revgeocode").I(a);return this.K(a,b,c)};Zr.prototype.reverseGeocode=Zr.prototype.Bi;Zr.prototype.gm=function(a,b,c){a=this.D().clone().Ma("autosuggest").F("autosuggest").I(a);return this.K(a,b,c)};Zr.prototype.autosuggest=Zr.prototype.gm;Zr.prototype.om=function(a,b,c){a=this.D().clone().Ma("discover").F("discover").I(a);return this.K(a,b,c)};Zr.prototype.discover=Zr.prototype.om;
  Zr.prototype.so=function(a,b,c){a=this.D().clone().Ma("lookup").F("lookup").I(a);return this.K(a,b,c)};Zr.prototype.lookup=Zr.prototype.so;Zr.prototype.im=function(a,b,c){a=this.D().clone().Ma("browse").F("browse").I(a);return this.K(a,b,c)};Zr.prototype.browse=Zr.prototype.im;Y.prototype.In=function(a){return this.Ya(Zr,a)};Y.prototype.getSearchService=Y.prototype.In;function $r(a){this.g=!!a.toBypassToken;if(!this.g&&!a.token)throw new D($r,0,'"token" must be specified');$r.l.constructor.call(this,$r,a);this.j=a.token;this.i={};this.f={};}u($r,Pp);t("H.service.xyz.Service",$r);$r.prototype.a=function(){return {host:"xyz.api.here.com",path:"hub/spaces"}};$r.prototype.b=function(a){return Error(a.errorMessage||a.message)};
  $r.prototype.Dh=function(a,b,c){wc(a,"String",this.Dh,0,'"projectId" must be a string');as(this.Dh,1,b,c);a=bs(this.D().clone().Md("project-api/projects/"+a));return this.K(a,b,c)};$r.prototype.getProject=$r.prototype.Dh;$r.prototype.ck=function(a,b,c){as(this.ck,0,a,b);c=cs(this,this.D().clone().I(c||{}));return this.K(c,a,b)};$r.prototype.getSpaces=$r.prototype.ck;
  $r.prototype.eg=function(a,b,c){wc(a,"String",this.eg,0,'"spaceId" must be a string');as(this.eg,1,b,c);a=cs(this,this.D().clone().F(a));return this.K(a,b,c)};$r.prototype.getSpace=$r.prototype.eg;$r.prototype.fe=function(a,b,c){wc(a,"String",this.fe,0,'"spaceId" must be a string');as(this.fe,1,b,c);a=cs(this,this.D().clone().F(a+"/statistics"));return this.K(a,b,c)};$r.prototype.getStatistics=$r.prototype.fe;
  $r.prototype.$f=function(a,b,c,d,e,f,g){a=cs(this,this.D().clone().F(d+"/tile/web/"+c+"_"+a+"_"+b+".mvtf").I(Object.assign({clip:!0},g)));return this.K(a,function(h){return h.arrayBuffer().then(e)},f,"arraybuffer")};$r.prototype.search=function(a,b,c,d){wc(a,"String",this.search,0,'"spaceId" must be a string');as(this.search,1,b,c);a=cs(this,this.D().clone().F(a+"/search").I(d||{}));return this.K(a,b,c)};$r.prototype.search=$r.prototype.search;
  $r.prototype.cd=function(a,b,c,d){wc(a,"String",this.cd,0,'"spaceId" must be a string');if(!Da(b))throw new D(this.cd,1,'"params" must be an object');as(this.cd,2,c,d);a=cs(this,this.D().clone().F(a+"/features").I(b));return this.K(a,c,d)};$r.prototype.getFeaturesById=$r.prototype.cd;
  $r.prototype.Zd=function(a,b,c,d){wc(a,"String",this.Zd,0,'"spaceId" must be a string');if(!Da(b))throw new D(this.cd,1,'"params" must be an object');as(this.Zd,2,c,d);a=cs(this,this.D().clone().F(a+"/bbox").I(b));return this.K(a,c,d)};$r.prototype.getFeaturesByBoundingBox=$r.prototype.Zd;$r.prototype.ta=function(a){var b=this.i[a];if(b)return b;this.f[a]||this.Re(a);return null};
  $r.prototype.kd=function(a,b,c,d,e){wc(a,"String",this.kd,0,'"spaceId" must be a string');if(!Da(b))throw new D(this.kd,1,'"geojsonObject" must be an object');as(this.kd,2,c,d);if(e&&!Da(e))throw new D(this.kd,4,'"opt_params" must be an object');return ds(this,a,c,d,"PUT",b,e)};$r.prototype.putFeatures=$r.prototype.kd;
  $r.prototype.hd=function(a,b,c,d,e){wc(a,"String",this.hd,0,'"spaceId" must be a string');if(!Da(b))throw new D(this.hd,1,'"featureCollection" must be an object');as(this.hd,2,c,d);if(e&&!Da(e))throw new D(this.hd,4,'"opt_params" must be an object');return ds(this,a,c,d,"POST",b,e)};$r.prototype.postFeatures=$r.prototype.hd;
  $r.prototype.sd=function(a,b,c,d){wc(a,"String",this.sd,0,'"spaceId" must be a string');if(!Da(b))throw new D(this.sd,1,'"params" must be an object');as(this.sd,2,c,d);return ds(this,a,c,d,"DELETE",B,b)};$r.prototype.deleteFeatures=$r.prototype.sd;
  function ds(a,b,c,d,e,f,g){var h=Object.assign(a.g?{}:{authorization:"Bearer "+a.j},{"Content-Type":"application/geo+json"},a.gf);e={method:e,headers:h};f&&(e.data=JSON.stringify(f));b=bs(a.D().clone().F(b+"/features").I(g||{}));f=new rf("application/json",b.toString(),fe,e);f.then(c,Rp(a,b,d));return f}$r.prototype.Re=function(a){var b=this;this.f[a]=es;this.eg(a,function(c){b.f[a]=fs;b.i[a]=c.copyright;b.dispatchEvent("copyrightupdate");},function(c){b.f[a]=gs;throw c;});};
  function cs(a,b){return a.g?b:bs(b).I({access_token:a.j})}function bs(a){var b=Object.assign({},a.getQuery());delete b.apikey;return a.Oi(b)}$r.CONFIG_KEY="xyz";var es=1,fs=2,gs=-1;function as(a,b,c,d){if(!Ca(c))throw new D(a,b,'"onResult" must be a function');if(!Ca(d))throw new D(a,b+1,'"onError" must be a function');}Y.prototype.Vn=function(a){return this.Ya($r,a)};Y.prototype.getXYZService=Y.prototype.Vn;function hs(a,b,c){var d;hs.l.constructor.call(this,c?{min:c.min,max:c.max,engineType:c.engineType}:void 0);C(a,$r,hs,0);if(!zc(b))throw new D(hs,1,'"spaceId" must be a string');this.s=a;this.a=b;this.c={};if(c&&(["limit","simplificationLevel","tags"].forEach(function(e){e in c&&(this.c[e]=c[e]);},this),a=c.parameters))for(d in a)this.c[d]=a[d];this.ac(this.f===Vj.WEBGL?new Th({sources:{xyz:{type:"MVT"}},layers:{xyz:{data:{source:"xyz",layer:this.a},points:{filter:{$geometry:"point"},draw:{points:{collide:!1,
  order:200,color:"#92CF48",size:[[10,"8px"],[14,"12px"],[18,"16px"]]}}},polygons:{filter:{$geometry:"polygon"},draw:{polygons:{order:201,color:"#E39E3C"},lines:{order:202,color:"#755DA5",width:"1px"}}},lines:{filter:{$geometry:"line"},draw:{lines:{order:203,color:"#000000",width:"2px",join:"round",cap:"round"}}}}}}):new H.map.render.harp.Style({styles:[{layer:this.a,when:["==",["geometry-type"],"Point"],technique:"circles",renderOrder:200,color:"#92CF48",size:["interpolate",["linear"],["zoom"],10,
  8,14,12,18,16]},{layer:this.a,when:["==",["geometry-type"],"Polygon"],technique:"fill",color:"#E39E3C",renderOrder:201},{layer:this.a,when:["==",["geometry-type"],"Polygon"],technique:"solid-line",color:"#755DA5",lineWidth:"1px",renderOrder:202},{layer:this.a,when:["==",["geometry-type"],"LineString"],technique:"solid-line",color:"#000000",lineWidth:"2px",renderOrder:203}]}));}u(hs,R);t("H.service.xyz.Provider",hs);hs.prototype.K=function(a,b,c,d,e){return this.s.$f(a,b,c,this.a,d,e,this.c)};
  hs.prototype.requestInternal=hs.prototype.K;hs.prototype.ta=function(){return this.s.ta(this.a)};hs.prototype.getCopyrights=hs.prototype.ta;hs.prototype.Ed=df;hs.prototype.providesOMV=hs.prototype.Ed;hs.prototype.ua=function(){return this.ub()};hs.prototype.getStyle=hs.prototype.ua;hs.prototype.rc=function(a){C(a,Th)&&a.b("MVT");this.ac(a);};hs.prototype.setStyle=hs.prototype.rc;t("H.service.buildInfo",function(){return Ef("H-service","1.30.6","2978c8b")});

  function is(a){var b;if(a)for(this.a={},b=a.length;b--;)this.a[a[b]]=!0;this.Hl={};}var js;is.prototype.a={};is.prototype.parse=function(a,b,c){var d,e,f,g,h;js=!1;try{c=Kp.JSON.parse(c);}catch(m){js=!0;}if(c&&(d=c.metadata)){var k={spatials:[]};for(e in d){if(c=!this.a[e]&&(f=ks[e]))(g=d[e])||(js=!0,g=void 0),c=g;if(c)for(c=g.length;c--;){var l;(l=g[c])||(js=!0,l=void 0);(h=l)&&f(b,a,this,e,h,k);}}}else js=!0;return js?void 0:k};is.prototype.parse=is.prototype.parse;
  var ks={"street labels":function(a,b,c,d,e,f){var g;(g=e.vertices)||(js=!0,g=void 0);if(g){var h,k=g.length,l;(l=0<k)||(js=!0,l=void 0);if(l)for(h=Array(k/2);k;){var m=g[--k];l=g[--k];h[k/2]=new I(l,m);}h=h?{a:[h]}:B;k=+e["font size"]/a.$a();g=c.Hl[k];g||(ls.lineWidth=k,g=c.Hl[k]=c.Sd.Rj(ls));ms(a,b,h,!1,g,e,d,f);}delete e.vertices;},"city center labels":function(a,b,c,d,e,f){ms(a,b,ns(e,new rh([])),!0,c.Sd,e,d,f);},labels:function(a,b,c,d,e,f){var g;(g=e["bounding boxes"])||(js=!0,g=void 0);if(g){for(var h=
  g.length,k=new rh([]),l;h--;){var m;(m=g[h])||(js=!0,m=void 0);(l=m)&&ns(l,k);}ms(a,b,k,!0,c.Sd,e,d,f);}delete e["bounding boxes"];},buildings:function(a,b,c,d,e,f){var g=e.id,h=b.zg[g],k,l,m,p=[],q=[];(k=e)||(js=!0,k=void 0);if(k&&((l=k.vertices)||(js=!0,l=void 0),l)){var r;(r=k.polygons)||(js=!0,r=void 0);(m=r)&&p.push.apply(p,os(l,m));(k=k.outlines)||(js=!0,k=void 0);(m=k)&&q.push.apply(q,os(l,m));}m=p.length;p.push.apply(p,q);q=new rh(p,Td,m);(p=p.length)||(js=!0,p=void 0);p&&(h?(Yq(h,a,[q]),f.spatials.push(h)):
  (h=ms(a,b,q,!0,c.Sd,e,d,f,g),b.ea(h)));}};ks["transit stops"]=ks.POIs=ks.labels;var ps=["box 2","box 1","annotation box","icon box"];function ns(a,b){for(var c=ps.length,d,e;c--;)if(d=ps[c],e=a[d]){var f=e[0],g=e[1],h=e[2];e=e[3];b.a.push([new I(f,g),new I(f+h,g),new I(f+h,g+e),new I(f,g+e)]);delete a[d];}return b}
  function os(a,b){var c=b.length,d,e,f;if(0<c)for(e=Array(c);c--;)if((d=b[c])||(js=!0,d=void 0),d){var g=d.length;if(0<g)for(e[c]=f=Array(g);g--;){var h=2*d[g];f[g]=new I(a[h],a[h+1]);}}return e||[]}var qs={};function ms(a,b,c,d,e,f,g,h,k){qs.style=e;d=new Uq(b,d,k,qs);c&&Yq(d,a,[c]);rs(f);f.category=g;d.setData(f);h.spatials.push(d);d.ka(b);return d}is.prototype.Sd=new Ug({strokeColor:"transparent",fillColor:"transparent",lineWidth:0});var ls={};
  function rs(a){var b,c=!1;switch(typeof a){case "object":if(a instanceof Array)for(b=a.length;b--;)rs(a[b])?c=!0:delete a[b];else if(a)for(b in a)rs(a[b])?c=!0:delete a[b];break;case "number":c=!0;break;default:c=!!a;}return c}function ss(a,b,c){c=c||{};b=b||{};var d=c.tileType||"maptile",e=c.scheme||"normal.day";R.call(this,{min:0,max:20});!0===b.pois&&(b.pois="!F");this.a=b;if(!(a&&a instanceof ts))throw Error("InvalidArgument: service required");this.C=a;this.v=A(this.v,this);this.C.addEventListener("versionupdate",this.v);this.c=a.D().clone().F(d+"/"+a.Cc()+"/"+e).I(this.N).I(b);this.bc=a.Fh()||null;this.W=c.pixelRatio||c.pixelratio||Se();this.tileSize=c.tileSize||256;this.tileType=d;this.scheme=e;this.s=new kq(new is(c.categoryFilter));
  this.s.ka(this);this.J=A(this.J,this);this.s.addEventListener("update",this.J);R.call(this,{min:0,max:20});this.O(new Dk(c.tileCacheSize||256,A(this.Aa,this)));}u(ss,R);t("H.service.metaInfo.TileProvider",ss);ss.prototype.Aa=function(a,b){a=b.Va();for(var c=a.length,d;c--;)d=a[c],delete d.tf[b.key],d.release();b.data&&(Mp.push(b.xg(),this.tileSize),b.yg());};ss.prototype.J=function(){this.dispatchEvent("update");};
  ss.prototype.K=function(a,b,c,d,e){var f=this.c.clone(),g=this.bc,h=this.tileSize,k=this.getTileKey(a,b,c);k=this.Ob().get(k);var l;if(k&&!k.le()){d(Mp.pop(this.tileSize),null);var m={cancel:function(){}};}else {g&&f.Ma(g[(c+b+a)%g.length]);f.F(c+"/"+a+"/"+b+"/"+h+"/png8");var p=Kp.setTimeout(function(){l=new rf("text/plain",f.toString());l.then(function(q){d(null,q);},e);},500);}return m||{cancel:function(){l?l.cancel():Kp.clearTimeout(p);}}};ss.prototype.requestInternal=ss.prototype.K;
  ss.prototype.rd=function(a,b,c,d,e){var f=this.s;var g=d||Mp.pop(this.tileSize);if(d)a=this.Ob().get(this.getTileKey(a,b,c)),a.V(d);else if(d=a=new Pk(this.yd(a,b,c),a,b,c,this.tileSize,this.W,c,f),delete d.j,d.m=e,a.V(g))for(e=a.Va(),g=e.length;g--;)e[g].Dg();else Mp.push(g,this.tileSize);return a};ss.prototype.createTileInternal=ss.prototype.rd;ss.prototype.B=function(){this.s.B();this.C.removeEventListener("versionupdate",this.v);R.prototype.B.call(this);};
  ss.prototype.v=function(){var a=this.C;this.c=a.D().clone().F(this.tileType+"/"+a.Cc()+"/"+this.scheme).I(this.N).I(this.a);this.reload(!1);};ss.prototype.N={metadata:"metaonly",mgen:"2"};function ts(a){ts.l.constructor.call(this,ts,a);a=Qp(this,a);this.bc=a.shards;(this.Ra=a.ignoreTypes?null:a.type)&&this.D().Ma(this.Ra);this.cc=a.version;this.vi={};this.Xc=new Ap;"newest"===this.cc&&this.ph();}u(ts,Pp);t("H.service.metaInfo.Service",ts);ts.prototype.a=function(){return {type:"base",version:"newest",subDomain:"maps.ls",path:"maptile/2.1",shards:["1","2","3","4"]}};ts.CONFIG_KEY="metaInfo";function us(a,b){for(var c={},d=a[b+"s"][b],e=d.length;e--;)c[d[e].id]=d[e];a[b+"s"]=c;}
  ts.prototype.Fh=function(){return this.bc};ts.prototype.ek=function(){return this.Ra};ts.prototype.Cc=function(){return this.cc};ts.prototype.getVersion=ts.prototype.Cc;ts.prototype.Si=function(a){this.cc=a;};ts.prototype.ta=function(){return this.Xc};ts.prototype.getCopyrights=ts.prototype.ta;
  ts.prototype.$i=function(a){a=a.response;var b;us(a,"map");us(a,"scheme");us(a,"tiletype");us(a,"format");us(a,"resolution");us(a,"language");if("newest"===this.cc&&"traffic"!==this.Ra)for(b in a.maps)a.maps[b].hash&&a.maps[b].newest&&(this.Si(a.maps[b].hash),this.dispatchEvent("versionupdate"));this.Lh=a;this.dispatchEvent("infoupdate");};
  ts.prototype.ph=function(){var a=this;var b=this.D().clone().F("info").I({output:"json"});this.bc&&b.Ma(this.bc[0]);this.K(b,function(c){a.$i(c);},function(c){throw c;});};ts.prototype.xh=function(){return this.Lh};ts.prototype.getInfo=ts.prototype.xh;ts.prototype.Me=function(a,b,c,d,e,f){return new ss(this,d,{tileSize:a,pixelRatio:b,categoryFilter:c,tileType:e,scheme:f})};ts.prototype.createTileProvider=ts.prototype.Me;ts.prototype.wc=function(a,b,c,d,e,f){return new ll(this.Me(a,b,c,d,e,f))};
  ts.prototype.createTileLayer=ts.prototype.wc;Y.prototype.Wj=function(a){return this.Ya(ts,a)};Y.prototype.getMetaInfoService=Y.prototype.Wj;(function(){var a=Y.prototype.createDefaultLayers;Y.prototype.createDefaultLayers=function(b,c,d,e,f,g){var h=a.call(this,b,c,d,e,f,g),k={},l=this.Wj();"object"===typeof b&&(g=b,b=g.tileSize,c=g.ppi,d=g.lg,e=g.lg2,f=g.style,g=g.pois);b=b||256;var m=320===c?2:1;if(0>[72,250,320,500].indexOf(+c)){if(c!==B)throw new D(this.Sf,1,c);}else k.ppi=+c;d&&(k.lg=d);e&&(k.lg2=e);f&&(k.style=f);g&&(k.pois=g);h.raster.normal.metaInfo=l.wc(b,m,["buildings"],k);return h};})();

  function vs(a,b,c,d,e){e&1&&ws(a,a,b,c,d,0);e&2&&ws(a,a,b,c,d,1);e&4&&ws(a,a,b,c,d,2);e&8&&ws(a,a,b,c,d,3);}
  function ws(a,b,c,d,e,f){var g=(c+1)*(c+1),h,k=4*d,l=c+1,m,p=[{r:0,xm:0,hm:0,Ug:0,next:null}];var q=1;var r=["r","g","b","a"][f];var v=2*c+1;for(var w,z;q<v;q++)p[q]={r:0,xm:0,hm:0,Ug:0,next:null},p[q-1].next=p[q];p[2*c].next=p[0];var J=4*(d-1);for(h=0;h<e;h++){var G=h*k;var U=a[G+f];var X=U*l*(c+2)/2;v=U*l;for(q=0;q<=c;q++)p[q][r]=U;var xa=0;for(q=1;q<=c;q++){var ia=q<d?G+4*q:G+J;ia=a[ia+f];X+=ia*(l-q);xa+=ia;p[c+q][r]=ia;}ia=p[0];w=p[l];q=G;z=4*l;var gc=G+J;for(U=0;U<d;U++){b[q+f]=X/g;X-=v;var wb=
  U+l<d?q+z:gc;wb=a[wb+f];xa+=wb;X+=xa;v-=ia[r];v+=w[r];xa-=w[r];ia[r]=wb;ia=ia.next;w=w.next;q+=4;if(!X)for(;(m=4*(U+l))<k&&0===a[G+f+m];)U++,q+=4;}}G=(e-1)*k;for(U=0;U<d;U++){a=4*U;h=b[a+f];X=h*l*(c+2)/2;v=h*l;for(q=0;q<=c;q++)p[q][r]=h;xa=0;for(q=1;q<=c;q++)ia=q<e?a+q*k:a+G,ia=b[ia+f],X+=ia*(c-q+1),xa+=ia,p[c+q][r]=ia;ia=p[0];w=p[l];q=a;gc=l*k;J=a+G;for(h=0;h<e;h++)if(b[q+f]=X/g,X-=v,wb=h+l<e?q+gc:J,wb=b[wb+f],xa+=wb,X+=xa,v-=ia[r],v+=w[r],xa-=w[r],ia[r]=wb,ia=ia.next,w=w.next,q+=k,!X)for(;(m=h+l)<
  e&&0===b[m*k+f+a];)h++,q+=k;}}function xs(a,b,c){this.f=b=a>>b;this.j=Math.log(b)*Math.LOG2E;this.i=a=document.createElement("CANVAS");this.a=a.getContext("2d");this.b=a.width=a.height=3*b;var d=document.createElement("canvas");a=c.a;var e=c.b;b=[];var f;d.width=256;d.height=1;d=d.getContext("2d");for(g in e)e.hasOwnProperty(g)&&b.push({stop:parseFloat(g),value:e[g]});e=b.length;b.sort(this.m);0<b[0].stop&&b.unshift({stop:0,value:b[0].value});1>b[e-1].stop&&b.push({stop:1,value:b[e-1].value});e=b.length;var g=d.createLinearGradient(0,
  0,256,0);for(f=0;f<e;f++){if(!a&&k){var h=k.stop+(b[f].stop-k.stop)/2;g.addColorStop(h,k.value);g.addColorStop(h,b[f].value);}g.addColorStop(b[f].stop,b[f].value);var k=b[f];}d.fillStyle=g;d.fillRect(0,0,256,1);this.c=d.getImageData(0,0,256,1).data;this.g=c.a;}xs.prototype.m=function(a,b){return a.stop-b.stop};function ys(a,b){this.canvas=a;this.size=b;}function zs(a,b,c){this.a=a=Yd(a,0,30);this.Ra=b;this.i=c;this.m=[];this.b=[];do this.b[a]=[],this.m[a]=new As;while(a--);b===Bs?(this.o=Cs,this.j=Ds):(this.o=Es,this.j=Fs);this.c=1/0;this.f=-1/0;}var Gs=Math.log(.5);function Ds(a){return this.g?Math.round((a-this.c)/this.g*255):127}function Fs(a){return void 0===this.aa?127:Math.round(255*Math.pow(a,this.aa))}
  zs.prototype.Ib=function(a){var b,c;var d=a.value;void 0===d&&(d=1);d>this.f&&(this.f=d,this.g=this.f-this.c);d<this.c&&(this.c=d,this.g=this.f-this.c);var e=Xi.$c(a).scale(1073741823).floor();d=this.a;var f=e.x>>30-d;e=e.y>>30-d;for(c=this.o;-1<d;){this.b[d][e]||(this.b[d][e]=[]);(b=this.b[d][e][f])||(b=this.b[d][e][f]=new c);b.Ib(a,d);var g=this.m[d];g.f>b.b&&(g.f=b.b);g.a<b.b&&(g.a=b.b);g.c>b.a&&(g.c=b.a);g.b<b.a&&(g.b=b.a);d--;f>>=1;e>>=1;}};
  function Hs(a,b,c,d,e){var f=1<<b,g,h;d=Xd(d,f);f=0<=c&&c<f&&(g=a.b[b])&&(h=g[c])&&(f=h[d])||null;!f&&e&&0<=b&&(f=Hs(a,b-1,c>>1,d>>1,e));return f}function Is(a,b,c,d,e,f){for(var g,h=[];c<=d;c++)for(g=e;g<=f;g++)h.push(Hs(a,b,c,g,!1));return h}function Js(a,b){var c=0,d=0,e=Hs(a,0,0,0,!1),f;if(!0===b.c)return b.f;b.z===a.a?b.f=b.a:(Ks(a,b,function(g){var h=Ls(a,g),k=4-h.length;if(g.z!==a.a){for(f=0;f<h.length;f++)c+=h[f].a,d++;c+=k*e.a;d+=k;}}),b.f=c/d);b.c=!0;return b.f}
  function Ks(a,b,c){b=[b];for(var d,e;0<b.length;)e=b.shift(),d=Ls(a,e),c(e),b.push.apply(b,d);}function Ls(a,b){var c=[],d,e,f;for(e=0;1>=e;e++)for(f=0;1>=f;f++)(d=Hs(a,b.z+1,2*b.x+e,2*b.y+f,!1))&&c.push(d);return c}zs.prototype.clear=function(){zs.call(this,this.a,this.Ra,this.i);};function Es(){this.a=this.b=this.g=0;}Es.prototype.Ib=function(a,b){this.g++;this.b+=a.value||1;this.a=this.b/Math.pow(2,2*(30-b));};function Cs(){this.a=this.b=this.g=0;this.c=!1;}
  Cs.prototype.Ib=function(a){a=a.value;this.b+=void 0!==a?a:1;this.a=this.b/++this.g;this.c=!1;};function As(){this.f=this.c=1/0;this.a=this.b=-1/0;}function Ms(a,b){var c,d=0;if(!Da(a)||Ta(a))throw new D(Ms,0,a);for(c in a){var e=+c;d++;if(!(Cc(e)&&0<=e&&1>=e&&zc(a[c])))throw new D(Ms,0,a);}if(2>d)throw new D(Ms,0,"Specify at least 2 stops");this.b=a;this.a=!!b;}t("H.data.heatmap.Colors",Ms);var Ns=new Ms({0:"#008","0.2":"#0b0","0.5":"#ff0","0.7":"#f00"},!0);Ms.DEFAULT=Ns;function Os(a){var b=a||{},c=+b.sampleDepth;a=+b.coarseness;var d=b.colors,e={min:b.min,max:b.max},f=b.tileSize,g=+b.dataMax;b.tileSize&&(e.tileSize=f);R.call(this,e);Xj(this,b.opacity);this.Ra="value"===b.type?Bs:Ps;this.sampleDepth_=Cc(c)?Yd(Math.round(c),1,8):4;this.v=!!b.assumeValues;b=this.max;this.C=Cc(g)?Yd(Math.round(g),this.min,b+this.sampleDepth_):b;a=Cc(a)?Yd(Math.round(a),0,3):1;if(d&&!C(d,Ms))throw new D(Os,0,"colors");this.a=new zs(b+this.sampleDepth_,this.Ra,this.C);this.N=new xs(this.tileSize,
  a,d||Ns);this.s=A(this.s,this);this.c=A(this.c,this);this.J=new xk(20,this.s);}u(Os,R);t("H.data.heatmap.Provider",Os);Os.prototype.qc=function(a){Xj(this,a);};Os.prototype.setOpacity=Os.prototype.qc;Os.prototype.dd=function(){return this.j};Os.prototype.getOpacity=Os.prototype.dd;Os.prototype.pf=df;Os.prototype.providesRasters=Os.prototype.pf;
  Os.prototype.K=function(a,b,c,d,e){var f=this.v,g,h;if(Hs(this.a,0,0,0,!1)){if(!f){var k=Is(this.a,c,b-1,b+1,a-1,a+1);for(g=k.length;g--&&!f;)if(null!==k[g]){f=!0;break}}f&&(h=this.J.push([a,b,c,d,e],this.c));}f||d(null);return h};Os.prototype.requestInternal=Os.prototype.K;
  function Qs(a,b,c,d){var e=document.createElement("canvas"),f=a.tileSize,g=e.getContext("2d");e.width=e.height=f;var h=a.N;var k=a.a,l=a.v,m=a.Ra;var p=h.f;var q=h.a,r,v,w=m===Ps?2:1,z=w;a=Math.min(a.sampleDepth_+w,h.j);w=h.b;var J=k.a;if(l&&m===Bs){for(v=-1;1>=v;v++)for(l=-1;1>=l;l++){var G=(G=Hs(k,d,c+v,b+l,!0))?k.j(Js(k,G)):128;q.fillStyle="rgba("+G+",128,0,1)";q.fillRect((l+1)*p,(v+1)*p,p,p);}l=p-Math.floor(p/10);v=3;G=q.getImageData(0,0,w,w);vs(G.data,l,w,w,v);q.putImageData(G,0,0);}else q.fillStyle=
  l?"#080":"#000",q.fillRect(0,0,w,w);for(;z<=a&&d+z<=J;z++){l=p>>z;v=p-l;var U=m===Ps?127+Math.floor(128/(1<<a-z)):255;G=(1<<z)+2;var X=1<<z;var xa=b<<z;var ia=c<<z;X=Is(k,d+z,ia-1,ia+X,xa-1,xa+X);for(xa=X.length;xa--;){ia=xa%G;var gc=xa/G<<0;if(r=X[xa])r=k.j(r.a),q.fillStyle="rgba("+r+","+U+",0,1)",q.fillRect(ia*l+v,gc*l+v,l,l);}G=q;U=l;X=v;xa=p+2*l;l=p+2*l;ia=ia=3;gc=q.getImageData(X,v,xa,l);vs(gc.data,U,xa,l,ia);G.putImageData(gc,X,v);}b=q.getImageData(0,0,w,w);c=h.c;d=h.g;k=b.data;a=0;for(w=k.length;a<
  w;a+=4)m=k[a],z=k[a+1],4===c.length&&(m=0),k[a]=c[4*m],k[a+1]=c[4*m+1],k[a+2]=c[4*m+2],k[a+3]=c[4*m+3]*(d?z/255:10>z?0:1);q.putImageData(b,0,0);h=new ys(h.i,p);p=h.size;g.drawImage(h.canvas,p,p,p,p,0,0,f,f);return e}Os.prototype.s=function(a,b){a.done(Qs(this,b[0],b[1],b[2]));};Os.prototype.c=function(a,b,c){var d=a.data;a=d[3];d=d[4];c?d():a(b);};
  Os.prototype.tj=function(a,b){var c;if(!yc(a))throw new D(this.tj,0,a);if(c=a.length){for(;c--;)this.a.Ib(a[c]);a=this.a;var d;c=a.m;var e=a.a,f=0;if(a.Ra===Ps){var g=c[a.a].a;for(d=a.a;0<=d;d--)if(c[d].a===g)f=d;else break;g=c[0].a;for(d=0;d<=f;d++)if(g===c[d].a)e=d;else break;f>a.i&&(f=a.i);g=Math.round(e+(f-e)/2);a.aa=Gs/Math.log(c[g].b);}this.reload(!!b);}};Os.prototype.addData=Os.prototype.tj;Os.prototype.clear=function(){this.a.clear();this.reload(!0);};Os.prototype.clear=Os.prototype.clear;var Ps=0,Bs=1;function Rs(){}t("H.data.utils.Dom",Rs);Rs.prototype.Wd=function(a){return !!a&&/^\s*(1|true)\s*$/i.test(this.Oa(a))};Rs.prototype.getBoolean=Rs.prototype.Wd;Rs.prototype.Oa=function(a){var b;try{if(a.nodeType===Node.ATTRIBUTE_NODE)return a.value;var c="";var d=0;var e=a.childNodes;for(b=e.length;d<b;d++)e[d].nodeType!==Node.COMMENT_NODE&&(c+=e[d].nodeValue.replace(/^\s+|\s+$/g,""));}catch(f){}return c||""};Rs.prototype.getString=Rs.prototype.Oa;
  Rs.prototype.ag=function(a){return parseFloat(this.Oa(a))||0};Rs.prototype.getFloat=Rs.prototype.ag;Rs.prototype.Yk=function(a){var b=a.split(/\s+/),c=b.length,d=!(b&&1==c),e=d?1:3,f=[],g;d||(b=a.split(","),c=b.length);for(g=0;g<c;g+=e)if(a=this.si(d?b[g]:g+3>b.length?null:b.slice(g,g+3)))f.push(a);else return [];return f};Rs.prototype.parseCoords=Rs.prototype.Yk;
  Rs.prototype.si=function(a){if(!a)return null;var b=a instanceof Array&&0<a.length&&4>a.length?a:a.split(",");a=parseFloat(b[0]);var c=parseFloat(b[1]);b=parseFloat(b[2]);return isNaN(c)||isNaN(a)?null:new Wf(c,a,isNaN(b)?void 0:b)};Rs.prototype.parseCoord=Rs.prototype.si;Rs.prototype.Zf=function(a){a=this.Oa(a);return /^[0-9a-fA-F]{8}$/.test(a)?"#"+a.substr(6,2)+a.substr(4,2)+a.substr(2,2)+a.substr(0,2):"#000000ff"};Rs.prototype.getColor=Rs.prototype.Zf;function Ss(){this.a={4:function(a){return ["#",a.charAt(1),a.charAt(1),a.charAt(2),a.charAt(2),a.charAt(3),a.charAt(3),"ff"].join("")},5:function(a){return ["#",a.charAt(1),a.charAt(1),a.charAt(2),a.charAt(2),a.charAt(3),a.charAt(3),a.charAt(4),a.charAt(4)].join("")},7:function(a){return a+"ff"},9:function(a){return a}};this.b={4:function(a){return [Ts(a.charAt(1)),Ts(a.charAt(2)),Ts(a.charAt(3)),255]},5:function(a){return [Ts(a.charAt(1)),Ts(a.charAt(2)),Ts(a.charAt(3)),Ts(a.charAt(4))]},7:function(a){a=
  parseInt(a.substring(1),16);return [a>>16&255,a>>8&255,a&255,255]},9:function(a){a=parseInt(a.substring(1),16);return [a>>24&255,a>>16&255,a>>8&255,a&255]}};}t("H.data.utils.ColorHelper",Ss);function Ts(a){a=parseInt(a,16);return (a<<4)+a}function Us(a){return 16>a?"0"+Math.round(a).toString(16):Math.round(a).toString(16)}
  function Vs(a,b,c){if(!/^(#|rgb).*/.test(b))return [0,0,0,255];c||(c="","#"===b.charAt(0)?c=a.a[b.length]?b:"":"rgb"===b.substr(0,3)&&(b=b.match(/\d+(\.\d+)?/g),c=b.length,c=2<c&&5>c?["#",Us(+b[0]),Us(+b[1]),Us(+b[2]),3<c?Us(255*+b[3]):"ff"].join(""):""),b=c);a=a.b[b.length](b);a[3]=Math.round(a[3]/255*100)/100;return a}
  Ss.prototype.Ol=function(a,b){var c="";if(!/^(#|rgb).*/.test(a)){c="";var d;for(d=0;6>d;d++)c+="ABCDEF0123456789".charAt(Math.floor(16*Math.random()));return c+"ff"}a=Vs(this,a,b);for(b=0;4>b;b++)3>b?d=Math.floor(Math.random()*(a[b]+1)):d=255*a[b],c+=Us(d);return c};Ss.prototype.toRandomRGBA=Ss.prototype.Ol;function Ws(a){a=a.attributes;for(var b,c=a.length;c--;)switch(b=a[c],b.name){case "x":this.x=parseFloat(b.value);break;case "y":this.y=parseFloat(b.value);break;case "xunits":this.fd="fraction"===Rs.prototype.Oa(b);break;case "yunits":this.Gc="fraction"===Rs.prototype.Oa(b);}}t("H.data.kml.HotSpot",Ws);function Xs(a){var b=a.childNodes,c=new Rs;for(a=b.length;a--;){var d=b[a];switch(d.nodeName){case "href":this.href=c.Oa(d);}}}t("H.data.kml.Icon",Xs);function Ys(a){var b;if(a){a=a.childNodes;var c=a.length;for(b=new Rs;c--;){var d=a[c];switch(d.nodeName){case "scale":this.scale=b.ag(d);break;case "Icon":this.icon=d=new Xs(d);break;case "hotSpot":this.kk=d=new Ws(d);}}}}t("H.data.kml.IconStyle",Ys);function Zs(a){a=a.childNodes;for(var b,c=a.length,d=new Rs,e=new Ss;c--;)switch(b=a[c],b.nodeName){case "color":this.color=d.Zf(b);break;case "colorMode":this.a=d.Oa(b);}"random"===this.a&&(this.color="#"+e.Ol(this.color,!1));}t("H.data.kml.ColorStyle",Zs);function $s(a){var b=a.childNodes,c=b.length,d=new Rs;this.outline=this.fill=!0;for(this.Mf=new Zs(a);c--;)switch(a=b[c],a.nodeName){case "fill":this.fill=d.Wd(a);break;case "outline":this.outline=d.Wd(a);}}t("H.data.kml.PolyStyle",$s);function at(a){var b=a.childNodes,c=b.length,d=new Rs;for(this.Mf=new Zs(a);c--;)a=b[c],"width"===a.nodeName&&(this.width=d.ag(a));}t("H.data.kml.LineStyle",at);function bt(a){a=a.childNodes;for(var b,c=a.length,d=new Rs;c--;)switch(b=a[c],b.nodeName){case "bgColor":this.bgColor=d.Zf(b);break;case "textColor":this.textColor=d.Zf(b);break;case "text":this.text=d.Oa(b);break;case "displayMode":this.displayMode=d.Oa(b);}}t("H.data.kml.BalloonStyle",bt);function ct(a){var b=a.childNodes,c=b.length;for(this.id=a.getAttribute("id");c--;)switch(a=b[c],a.nodeName){case "IconStyle":this.lk=a=new Ys(a);break;case "LineStyle":this.ne=a=new at(a);break;case "PolyStyle":this.al=a=new $s(a);break;case "BalloonStyle":this.Hf=a=new bt(a);}}t("H.data.kml.Style",ct);function dt(a,b){a=a.childNodes;var c=a.length,d=new Rs;for(this.b=b;c--;)switch(b=a[c],b.nodeName){case "key":this.key=d.Oa(b);break;case "styleUrl":this.a=d.Oa(b);}}t("H.data.kml.Pair",dt);dt.prototype.ua=function(){if(this.a){var a="highlight"===this.key?!0:!1;a=this.b.Gh(this.a.substr(1),a);}return a};dt.prototype.getStyle=dt.prototype.ua;function et(a,b){var c=a.childNodes,d=c.length;this.b=b;this.id=a.getAttribute("id");for(this.a=[];d--;)a=c[d],"Pair"===a.nodeName&&(a=new dt(a,this.b),this.a.push(a));}t("H.data.kml.StyleMap",et);et.prototype.ua=function(a){var b=null;a=a?"highlight":"normal";for(var c=this.a.length;c--;)this.a[c].key===a&&(b=this.a[c].ua());return b};et.prototype.getStyle=et.prototype.ua;function ft(){this.a={};}t("H.data.kml.StyleContainer",ft);ft.prototype.Yg=function(a){a&&a.id&&(this.a["style_"+a.id]=a);};ft.prototype.addStyle=ft.prototype.Yg;ft.prototype.Gh=function(a,b){a=this.a["style_"+a];a instanceof et&&(a=a.ua(b));return a};ft.prototype.getStyleById=ft.prototype.Gh;function gt(a,b){var c=a&&a.childNodes||[],d=new Rs;if(!a||!b)throw Error("Node or stylesContainer is not defined");this.visibility=!0;this.Qo=a;for(a=c.length;a--;){var e=c[a];switch(e.nodeName){case "name":this.name=d.Oa(e);break;case "description":this.description=d.Oa(e);break;case "visibility":this.visibility=d.Wd(e);break;case "open":this.open=d.Wd(e);break;case "styleUrl":if(this.a=d.Oa(e))e=this.a.substr(1),this.vm=b.Gh(e,!1);break;case "Style":this.yk=e=new ct(e);}}}
  t("H.data.kml.Feature",gt);function ht(a){a=a.childNodes;for(var b,c=a.length,d=null,e=new Rs;c--;)b=a[c],"coordinates"===b.nodeName&&(d=e.Oa(b));this.a=null;d&&(this.a=e.si(d)||null);}t("H.data.kml.Point",ht);function it(a){a=a.childNodes;for(var b,c=a.length,d=new Rs;c--;)if(b=a[c],"coordinates"===b.nodeName){b=d.Oa(b);var e=[],f=new Rs;try{e=f.Yk(b);}catch(g){e=[];}this.a=2>e.length?[]:e;}}t("H.data.kml.Line",it);function jt(a){for(var b=new L,c=a.a?a.a.length:0;c--;)b.Fd(a.a[c]);return b}function kt(){}kt.prototype.f=0;kt.prototype.b=0;function lt(a){var b=a.childNodes,c=b.length;this.a=new L;for(this.c=[];c--;){var d=b[c];var e=d.nodeName;if("outerBoundaryIs"===e||"innerBoundaryIs"===e){var f=d.childNodes;for(d=f.length;d--;){var g=f[d];if("LinearRing"===g.nodeName){var h=new it(g);if("outerBoundaryIs"===e){this.a=jt(h);var k=void 0,l=a,m=h.a;h=new Rs;var p=l.querySelector("altitudeMode");if(p&&p.parentNode===l&&!/^\s*clampTo/.test(h.Oa(p))&&m){p=m.length;for(var q=0;q<p&&0!==k;q++){var r=m[q].alt;r?k?r!==k&&(k=0):k=r:k=0;}(m=l.querySelector("*|altitudeOffset"))&&
  m.parentNode===g&&"http://www.google.com/kml/ext/2.2"===m.namespaceURI&&(g=h.ag(m))&&(k+=g);k&&(k=vd(yi,k),(g=l.querySelector("extrude"))&&g.parentNode===l&&h.Wd(g)?this.b=k:this.f=k);}}else this.c.push(jt(h));}}}}}u(lt,kt);t("H.data.kml.Polygon",lt);function mt(a,b){var c=document.createElement("CANVAS");c.width=1;c.height=1;this.i=a;this.b={};this.f={};this.g=new Ij(c);this.c=b||"";}mt.prototype.create=function(a){this.a=new gt(a,this.i);return nt(this,a,null)};
  function nt(a,b,c){b=b.childNodes;for(var d=b.length,e,f={},g;d--;){var h=b[d];switch(h.nodeName){case "Point":e=new ht(h);g=ot(a,"Marker");e=new yn(e.a,g);g.ti&&Ce(g.ti,"statechange",A(a.j,a,g.ti,e,g),!1);break;case "LineString":e=new it(h);g=ot(a,"Polyline");e=new nh(jt(e),g);break;case "LinearRing":e=new it(h);g=ot(a,"Polyline");e=new nh(jt(e),g);break;case "Polygon":e=new lt(h);g=ot(a,"Polygon");g.elevation=e.f;g.extrusion=e.b;e=new xi(new O(e.a,e.c),g);break;case "MultiGeometry":e=new Q,e=nt(a,
  h,e);}e&&(a.a.name&&(f.name=a.a.name),a.a.description&&(f.description=a.a.description),g&&g.Hf&&(f.balloonStyle=g.Hf),f.kmlNode=a.a.Qo,e.setData(f),c&&c.ea(e));}c&&(e=c);return e}mt.prototype.j=function(a,b,c){var d=c.anchor,e=c.scale;c=e+"_"+d.x+d.y+d.fd+d.Gc+"_"+c.href;var f={};if(1===a.getState()){var g=this.b[c];if(!g){var h=d.x;var k=d.y;if(g=a.Db())g={w:g.w*e,h:g.h*e},f.size=g;h=d.fd&&g?g.w*h:h*e;k=d.Gc&&g?g.h*(1-k):!d.Gc&&g?g.h-k*e:k*e;f.anchor={x:h,y:k};g=new Ij(a.ad(),f);this.b[c]=g;}b.Pc(g);}delete this.f[c];};
  function ot(a,b){var c=a.a,d={visibility:c.visibility};var e=new Ss;var f=1;var g={x:0,y:0,fd:!1,Gc:!1};var h=pt(a,c.vm);c.yk&&(h=pt(a,c.yk,h));switch(b){case "Marker":if(h&&h.lk){e=h.lk;e.scale&&(f=e.scale);if(e.kk){var k=e.kk;g={x:k.x,y:k.y,fd:k.fd,Gc:k.Gc};}e.icon&&e.icon.href?(b=e.icon.href,qt.test(b)||(b=a.c+b),e=f+"_"+g.x+g.y+g.fd+g.Gc+"_"+b,k=a.b[e]||a.f[e],k||(k=new Ij(b),a.f[e]=k),0===k.getState()?(d.icon=a.g,d.ti=k,d.href=b,d.anchor=g,d.scale=f):1===k.getState()&&(d.icon=k)):1!==f&&(k||(g=
  {x:14,y:4,fd:!1,Gc:!1}),a={w:28*f,h:36*f},f={size:new Ki(a.w,a.h),anchor:new I(g.fd?a.w*g.x:g.x*f,g.Gc?a.h*(1-g.y):a.h-g.y*f),hitArea:new Li(Mi.POLYGON,[0*f,16*f,0*f,7*f,8*f,0*f,18*f,0*f,26*f,7*f,26*f,16*f,18*f,34*f,8*f,34*f])},d.icon=new Ij('<svg xmlns="http://www.w3.org/2000/svg" width="28px" height="36px"><path d="M 19 31 C 19 32.7 16.3 34 13 34 C 9.7 34 7 32.7 7 31 C 7 29.3 9.7 28 13 28 C 16.3 28 19 29.3 19 31 Z" fill="#000" fill-opacity=".2"/><path d="M 13 0 C 9.5 0 6.3 1.3 3.8 3.8 C 1.4 7.8 0 9.4 0 12.8 C 0 16.3 1.4 19.5 3.8 21.9 L 13 31 L 22.2 21.9 C 24.6 19.5 25.9 16.3 25.9 12.8 C 25.9 9.4 24.6 6.1 22.1 3.8 C 19.7 1.3 16.5 0 13 0 Z" fill="#fff"/><path d="M 13 2.2 C 6 2.2 2.3 7.2 2.1 12.8 C 2.1 16.1 3.1 18.4 5.2 20.5 L 13 28.2 L 20.8 20.5 C 22.9 18.4 23.8 16.2 23.8 12.8 C 23.6 7.07 20 2.2 13 2.2 Z" fill="#18d"/></svg>',
  f));}break;case "Polyline":d.style={};h&&h.ne&&(f=h.ne,d.style.strokeColor="rgba("+Vs(e,f.Mf.color,!0)+")",0<=f.width&&(d.style.lineWidth=f.width));break;case "Polygon":d.style={},h&&(h.ne&&(f=h.ne,d.style.strokeColor="rgba("+Vs(e,f.Mf.color,!0)+")",0<=f.width&&(d.style.lineWidth=f.width)),h.al&&(f=h.al,d.style.fillColor=f.fill?"rgba("+Vs(e,f.Mf.color,!0)+")":"rgba(0,0,0,0)",f.outline||(d.style.lineWidth=0)));}d.Hf=h.Hf;return d}
  function pt(a,b,c){c=c||{};for(var d in b)b.hasOwnProperty(d)&&(c[d]="object"===typeof b[d]?pt(a,b[d],c[d]):b[d]);return c}var qt=/^[^:\/]+:/;function rt(a){uc(this,rt);this.url=a;this.b=[];this.a=y;this.c=A(this.c,this);F.call(this);}u(rt,F);t("H.data.AbstractReader",rt);var st={ERROR:-1,LOADING:0,VISIT:1,READY:2};rt.State=st;rt.prototype.f=st.READY;rt.prototype.j={am:"statechange"};rt.prototype.tb=function(){if(!this.a){this.a=new N;var a=this.a.kc();a.fc(this.b);}return new ml(this.a)};rt.prototype.getLayer=rt.prototype.tb;rt.prototype.tn=function(){return this.b.concat([])};rt.prototype.getParsedObjects=rt.prototype.tn;
  rt.prototype.D=function(){return this.url};rt.prototype.getUrl=rt.prototype.D;rt.prototype.ep=function(a){if(this.f===st.LOADING||this.f===st.VISIT)throw Error("InvalidState: state "+this.f);this.b=[];this.a=y;this.url=a;return this};rt.prototype.setUrl=rt.prototype.ep;rt.prototype.getState=function(){return this.f};rt.prototype.getState=rt.prototype.getState;rt.prototype.P=function(a,b,c){this.f=a;this.dispatchEvent(new tt(b||this,this.j.am,a,c||""));};
  rt.prototype.parse=function(){var a=this;tc(this.url)?(this.P(st.LOADING),(new rf("text/plain",this.url)).then(function(b){try{a.c(b);}catch(c){a.P(st.ERROR,y,c.message);}},function(){a.P(st.ERROR,y,"Error loading file");})):a.P(st.ERROR,y,"File url was not set");};rt.prototype.parse=rt.prototype.parse;function tt(a,b,c,d){tt.l.constructor.call(this,b,a);this.state=c;this.message=d;}u(tt,rd);function ut(a){var b=a?a.lastIndexOf("/"):B;this.g=[];rt.call(this,a);0<=b&&(this.i=a.substr(0,b)+"/");}u(ut,rt);t("H.data.kml.Reader",ut);
  ut.prototype.c=function(a){var b,c=null;if(a&&""!=a.trim()){try{var d=(new DOMParser).parseFromString(a,"text/xml");}catch(h){this.P(st.ERROR,void 0,"Error parsing KML document");return}if(d.getElementsByTagName("parsererror").length)this.P(st.ERROR,void 0,"Error parsing KML document");else if((a=d.childNodes&&"kml"===d.childNodes[0].nodeName?d.childNodes[0]:void 0)&&(b=vt(a.childNodes,"Document")[0]),b=b||a){d=new ft;for(var e=vt(b.childNodes,"Style"),f=vt(b.childNodes,"StyleMap"),g=e.length;g--;)a=
  new ct(e[g]),d.Yg(a);for(g=f.length;g--;)a=new et(f[g],d),d.Yg(a);this.o=d;this.m=new mt(this.o,this.i);a=b.childNodes;for(b=a.length;b--;)if(e=a[b],d=c,"Placemark"===e.nodeName?(e=this.m.create(e))&&wt(this,e,d):"Folder"===e.nodeName&&(e={group:new Q,node:e},wt(this,e.group,d),this.g.push(e)),!b&&(d=this.g.shift()))a=d.node.childNodes,c=d.group,b=a.length;this.P(st.READY);}else this.P(st.ERROR,void 0,"Invalid KML document");}else this.P(st.ERROR,void 0,"Unable to create objects from the empty data");};
  function wt(a,b,c){c?c.ea(b):(a.a&&a.a.kc().ea(b),a.b.push(b),a.P(st.VISIT,b));}function vt(a,b){for(var c=a.length,d,e=[];c--;)d=a[c],d.nodeName===b&&e.push(d);return e}function xt(a,b){this.b=a;this.a=b;}
  xt.prototype.create=function(a,b){var c=a.coordinates;switch(a.type){case "Point":var d=new yn(yt(c));break;case "LineString":d=new nh(zt(c));break;case "Polygon":d=new xi(At(c));break;case "MultiPoint":var e=0;var f=c.length;d=[];if(this.a){for(;e<f;e++)d.push(yt(c[e]));c=new yn(new Ji(d));}else {for(;e<f;e++)d.push(new yn(yt(c[e])));c=new Q;c.fc(d);}d=c;f="multiPoint";break;case "MultiLineString":e=0;f=c.length;d=[];if(this.a){for(;e<f;e++)d.push(zt(c[e]));c=new nh(new mh(d));}else {for(;e<f;e++)d.push(new nh(zt(c[e])));
  c=new Q;c.fc(d);}d=c;f="multiLineString";break;case "MultiPolygon":d=[];e=0;f=c.length;if(this.a){for(;e<f;e++)d.push(At(c[e]));c=new xi(new ui(d));}else {for(;e<f;e++)d.push(new xi(At(c[e])));c=new Q;c.fc(d);}d=c;f="multiPolygon";break;case "GeometryCollection":c=d=new Q;e=a.geometries;f=0;for(var g=e.length;f<g;f++)this.create(e[f],c);f="geometryCollection";}d&&(c=d,e=a.properties,a=a.id,g={},e&&(this.a?g=e:g.properties=e),f&&!this.a&&(g[f]=!0),a&&c.Qi(a),c.setData(g),this.b(d));b&&d&&b.ea(d);return d};
  xt.prototype.create=xt.prototype.create;function yt(a){return new Wf(a[1],a[0])}function At(a){for(var b=zt(a[0]),c=[],d,e=1,f=a.length;e<f;e++)d=zt(a[e]),c.push(d);return new O(b,c)}function zt(a){for(var b=0,c=a.length,d=new L;b<c;b++)d.Fd(yt(a[b]));return d}function Bt(a,b){b=b||{};this.i=b.style||this.Sd;(this.g=!!b.disableLegacyMode)||window.console.warn("H.data.geojson.Reader: Legacy parser is enabled in GeoJSON Reader. Features like Multi-Geometries, Polygon interiors and GeoJSON feature properties might not work as expected. To maximise compatibility with the remote services it is recommended to set the `disableLegacyMode` flag to true.");rt.call(this,a);}u(Bt,rt);t("H.data.geojson.Reader",Bt);
  Bt.prototype.c=function(a){var b,c;try{var d="string"===typeof a?JSON.parse(a):a;if("object"===typeof d){var e=new xt(this.i,this.g);switch(d.type){case "FeatureCollection":if(b=d.features){var f=new Q;Ct(this,f);for(c=0;c<b.length;c++){var g=Dt(b[c]);(g=e.create(g))&&f.ea(g);}}break;case "Feature":g=Dt(d);(g=e.create(g))&&Ct(this,g);break;default:(g=e.create(d))&&Ct(this,g);}this.P(st.READY);}else this.P(st.ERROR,void 0,"Invalid syntax");}catch(h){this.P(st.ERROR,void 0,"Parse error. "+h.message);}};
  Bt.prototype.Po=function(a){this.P(st.LOADING);this.c(a);};Bt.prototype.parseData=Bt.prototype.Po;Bt.prototype.Sd=function(){};function Dt(a){var b={};if(a.geometry){var c=a.geometry;b.type=c.type;b.properties=a.properties;c.coordinates&&(b.coordinates=c.coordinates);c.geometries&&(b.geometries=c.geometries);a.id&&(b.id=a.id);}return b}function Ct(a,b){a.a&&a.a.kc().ea(b);a.b.push(b);a.P(st.VISIT,b);}t("H.data.buildInfo",function(){return Ef("H-data","1.30.6","abfe236")});

  hg.prototype.Uc=ca(1,function(a,b){this.a.Uc(a,Cc(b)?b:this.c);});lg.prototype.Uc=ca(0,function(a,b){var c=0,d;if(!a(this)&&b--)for(;3>=c;c++)(d=this[c])&&d.Uc(a,b);});function Et(a,b,c){this.f=this.c=c;this.ui=[];this.a=0;this.R=dg(a,b,!0);}t("H.clustering.grid.Cluster",Et);Et.prototype.Ge=function(a){this.b||(this.b=Zf(a));this.a+=a.wt||1;this.ui.push(a);};Et.prototype.Ca=function(){return this.b};Et.prototype.getPosition=Et.prototype.Ca;Et.prototype.Ec=function(){return this.a};Et.prototype.getWeight=Et.prototype.Ec;Et.prototype.Bd=df;Et.prototype.isCluster=Et.prototype.Bd;Et.prototype.Ac=function(){return this.c};Et.prototype.getMinZoom=Et.prototype.Ac;
  Et.prototype.cg=function(){return this.f};Et.prototype.getMaxZoom=Et.prototype.cg;Et.prototype.G=function(){return this.R};Et.prototype.getBoundingBox=Et.prototype.G;Et.prototype.qh=function(a){this.Se(a);};Et.prototype.forEachEntry=Et.prototype.qh;Et.prototype.Se=function(a){var b=this;if(!Ca(a))throw new D(this.Se,0,a);this.ui.forEach(function(c){a(new Ft(c,b.c+1));});};Et.prototype.forEachDataPoint=Et.prototype.Se;function Gt(a){nd.call(this);this.a=[];var b;a?Wa(b={},Ht,a):b=Ht;this.g=b;nd.call(this);}u(Gt,nd);var It={clusters:[],noisePoints:[]},Ht={projection:Xi,min:0,max:22,eps:32,minWeight:2};n=Gt.prototype;n.Oc=function(a){this.a=a;this.b=!0;};n.Ib=function(a){this.a.push(a);this.b=!0;};n.Gf=function(a){this.a=this.a.concat(a);this.b=!0;};n.qf=function(a){this.a=this.a.filter(function(b){return b!==a});this.b=!0;};n.u=function(){Gt.l.u.call(this);this.a=null;};n.sl=hd;function Ft(a,b){this.a=a;this.b=b;}t("H.clustering.grid.NoisePoint",Ft);Ft.prototype.Ca=function(){return Zf(this.a)};Ft.prototype.getPosition=Ft.prototype.Ca;Ft.prototype.Ec=function(){return this.a.wt};Ft.prototype.getWeight=Ft.prototype.Ec;Ft.prototype.Bd=ef;Ft.prototype.isCluster=Ft.prototype.Bd;Ft.prototype.Ac=function(){return this.b};Ft.prototype.getMinZoom=Ft.prototype.Ac;Ft.prototype.getData=function(){return this.a.data};Ft.prototype.getData=Ft.prototype.getData;function Jt(a){Gt.call(this,a);}u(Jt,Gt);
  Jt.prototype.Ui=function(a){var b=this.g,c=b.min,d=b.max,e=[],f=[],g;if(this.b){for(g=this.a;c<=d;c++){for(var h,k=void 0,l,m,p,q,r,v,w,z=c,J=g,G=e,U=f,X=b.eps,xa=b.projection,ia=b.minWeight,gc=J.length,wb=Math.pow(2,z+8),md=[];w=J[--gc];)if(!w.cj){m=xa.$c(w).scale(wb).floor();v=wb;r=m.x;q=m.y;for(l=md.length;l--;)h=md[l],p=h.Ca(),h.bj||(h.bj=xa.$c(p).scale(wb).floor()),p=h.bj,p=p.Za(m),p<v&&(v=p,k=h);k&&k.G().pd(w)||(k=new Et(xa.vg({x:(r-X)/wb,y:(q-X)/wb}),xa.vg({x:(r+X)/wb,y:(q+X)/wb}),z),md.push(k));
  k.Ge(w);k=null;}for(gc=md.length;gc--;)if(h=md[gc],l=h.Ec(),l<ia)for(h=h.ui,l=h.length;w=h[--l];)U.push(new Ft(w,z)),w.cj=!0;else G.push(h);}c=0;for(d=g.length;c<d;c++)delete g[c].cj;this.b=!1;a({clusters:e,noisePoints:f});}};function Kt(a){this.a=a;a=document.createElement("canvas");var b=a.getContext("2d"),c=this.a,d=14*c;a.width=d;a.height=d;b.scale(c,c);b.beginPath();b.strokeStyle="#FFFFFF";b.fillStyle="#1080DD";b.arc(7,7,6,0,2*Math.PI,!1);b.fill();b.lineWidth=1;b.stroke();this.f=new Ij(a,{size:{w:14,h:14},anchor:{x:7,y:7}});this.b={};this.c={};}t("H.clustering.theme.Circular",Kt);
  function Lt(a,b,c){var d,e=document.createElement("canvas"),f=e.getContext("2d");var g=a.a;var h=b*g;e.width=h;e.height=h;f.scale(g,g);g=b+":"+c;(d=a.b[g])?f.putImageData(d,0,0):(b/=2,f.beginPath(),f.strokeStyle="rgba("+c+",0.2)",f.fillStyle="rgba("+c+",1)",f.arc(b,b,b/5*3,0,2*Math.PI,!1),f.fill(),f.lineWidth=b/5*4,f.stroke(),a.b[g]=f.getImageData(0,0,h,h));return e}
  Kt.prototype.Im=function(a){var b=a.Ec();var c=this.c[b];if(!c){if(10>b){c=Lt(this,28,"118,209,0");var d={x:11,y:18};}else 25>b?(c=Lt(this,38,"255,105,0"),d={x:13,y:23}):50>b?(c=Lt(this,38,"240,60,0"),d={x:13,y:23}):100>b?(c=Lt(this,38,"181,0,21"),d={x:13,y:23}):1E3>b?(c=Lt(this,48,"181,0,21"),d={x:15,y:28}):(c=Lt(this,66,"181,0,21"),d={x:20,y:38});var e=c.getContext("2d");e.fillStyle="#FFFFFF";e.font="bold 11px Arial";e.fillText(b,d.x,d.y);d=c.width/this.a;c=new Ij(c,{size:{w:d,h:d},anchor:{x:d/2,
  y:d/2}});this.c[b]=c;}b=new yn(a.Ca(),{icon:c,min:a.Ac(),max:a.cg()});b.setData(a);return b};Kt.prototype.getClusterPresentation=Kt.prototype.Im;Kt.prototype.qn=function(a){var b=new yn(a.Ca(),{icon:this.f,min:a.Ac()});b.setData(a);return b};Kt.prototype.getNoisePresentation=Kt.prototype.qn;function Mt(a){Gt.call(this,a);a=this.g;if(a.projection!==Xi)throw new D(Mt,0,"Other projection than mercator not supported yet");this.m=a.projection;this.f=a.eps;this.v=a.minWeight;this.o=new Yi(this.m);(new Mf).a("cluster","H.clustering.dynamicgrid.worker");this.i=A(this.i,this);this.j=A(this.j,this);}u(Mt,Gt);Mt.prototype.sl=function(a,b){this.aa=a;this.s=yd(b);};
  Mt.prototype.Ui=function(a,b){var c=this.c;var d=this.aa,e=this.s||0;var f=!c||!(c.zoom===e&&c.b.oa(d));if(d&&(this.b||f)){c&&3>c.pe&&c.cancel();this.b=!1;c=this.f;if(c>=128*Dd(2,e))var g=Nt;else {f=this.o;f.Qa(e);var h=f.lb(d.Rb());g=f.lb(d.Nb());h.y-=c;g.y+=c;h=f.lf(h);var k=f.lf(g);g=new K(h.lat,h.lng,k.lat,k.lng);c=f.Sa(c,0).lng+180;g=g.Ic(h.lat,h.lng-c,k.lat,h.lng).Ic(h.lat,k.lng,k.lat,k.lng+c);}c=g;h=this.a;g=[];for(f=h.length;f--;)c.pd(h[f])&&g.push(h[f]);0<g.length?(this.c=new Ot(d,e,g,this.f,
  this.v,this.m!==Xi,a,b),this.c.then(this.i,this.j)):a(It);}};Mt.prototype.i=function(a){Ba(a)||(a=new x.Uint32Array(a));this.c.g(Pt(this,a));};Mt.prototype.j=function(a){zc(a)&&this.c.c(a);};var Nt=new K(90,-180,-90,180);
  function Pt(a,b){for(var c=0,d=b[c++],e=Array(d),f=0,g=[],h=b.length,k=a.c.a,l=a.c.zoom;d--;)e[f++]=new Ft(k[b[c++]],l);for(;c<h;){d=b[c++];f=k[b[c]];var m=a.o;var p=a.f;m.Qa(a.c.zoom);var q=m.lb(f);f=m.Sa(q.x-p,q.y-p);m=m.Sa(q.x+p,q.y+p);f=new K(f.lat,f.lng,m.lat,m.lng);for(f=new Et(f.Rb(),f.Nb(),l);d--;)f.Ge(k[b[c++]]);g.push(f);}return {clusters:g,noisePoints:e}}Mt.prototype.u=function(){Mt.l.u.call(this);};
  function Ot(a,b,c,d,e,f,g,h){this.b=a;this.zoom=b;this.a=c;this.g=g;this.c=h;a=c.length;g=3*a;h=new (x.Float64Array||Array)(g);for(var k;a--;)k=c[a],h[--g]=k.lat,h[--g]=k.lng,h[--g]=k.wt;ee.call(this,"cluster",{message:[h,d,e,b,f]},void 0);}u(Ot,Pf);function Qt(a,b,c){this.c=a;this.a=b;this.f=c;}t("H.clustering.fastgrid.NoisePoint",Qt);Qt.prototype.Ca=function(){this.b||(this.b=this.c.Sa(this.a[1],this.a[0],1));return this.b};Qt.prototype.getPosition=Qt.prototype.Ca;Qt.prototype.Ec=function(){return this.a.a};Qt.prototype.getWeight=Qt.prototype.Ec;Qt.prototype.Bd=ef;Qt.prototype.isCluster=Qt.prototype.Bd;Qt.prototype.Ac=function(){return this.f-this.c.c};Qt.prototype.getMinZoom=Qt.prototype.Ac;Qt.prototype.getData=function(){return this.a.data};
  Qt.prototype.getData=Qt.prototype.getData;function Rt(a,b,c,d){this.c=a;this.a=b;this.j=c;this.o=d;this.g=Ia(this.g,this);this.f=Ia(this.f,this);}t("H.clustering.fastgrid.Cluster",Rt);Rt.prototype.Ca=function(){this.b||(this.b=this.c.Sa(this.a.Je,this.a.Ke,this.a.Kb));return this.b};Rt.prototype.getPosition=Rt.prototype.Ca;Rt.prototype.Ec=function(){return this.a.Kb};Rt.prototype.getWeight=Rt.prototype.Ec;Rt.prototype.Bd=df;Rt.prototype.isCluster=Rt.prototype.Bd;Rt.prototype.Ac=function(){return this.j?this.j-this.c.c:-1/0};
  Rt.prototype.getMinZoom=Rt.prototype.Ac;Rt.prototype.cg=function(){return this.o-this.c.c};Rt.prototype.getMaxZoom=Rt.prototype.cg;Rt.prototype.G=function(){this.R||(this.R=dg(this.c.Sa(this.a.a,this.a.f,1),this.c.Sa(this.a.b,this.a.c,1),!0));return this.R};Rt.prototype.getBoundingBox=Rt.prototype.G;Rt.prototype.qh=function(a){this.i=a;this.a.Uc(this.g,Td);};Rt.prototype.forEachEntry=Rt.prototype.qh;
  Rt.prototype.g=function(a,b){var c=!1,d,e;a.Kb>=this.c.m&&a!==this.a&&a.Kb!==this.a.Kb&&(this.i(new Rt(this.c,a,0,b)),c=!0);if(!c&&(d=a.entries))for(a=d.length,e=0;e<a;e++)this.i(new Qt(this.c,d[e],b));return c};Rt.prototype.Se=function(a){this.m=a;this.a.Uc(this.f,Td);};Rt.prototype.forEachDataPoint=Rt.prototype.Se;Rt.prototype.f=function(a,b){var c;if(a=a.entries){var d=a.length;for(c=0;c<d;c++)this.m(new Qt(this.c,a[c],b));}return !1};function St(a,b,c,d,e,f){this.g=b;a&&(this.parent=a,b&1?(c=a[8],e=a[5]):(c=a[7],e=a[8]),b&2?(d=a[9],f=a[6]):(d=a[4],f=a[9]));this[7]=c;this[5]=e;this[8]=(c+e)/2;this[4]=d;this[6]=f;this[9]=(d+f)/2;}n=St.prototype;n.oe=0;function Tt(a,b){return a[b]||(++a.oe,a[b]=new St(a,b))}n.removeChild=function(a){var b=a.g;this[b]===a&&(delete this[b],delete a.parent,--this.oe);};n.Uc=function(a,b){for(var c=0,d=this;d=d.parent;)++c;Ut(this,a,b,c);};
  function Ut(a,b,c,d){var e,f;if(!b(a,d)&&c--)for(++d,e=0;4>e;e++)(f=a[e])&&Ut(f,b,c,d);}n.Je=0;n.Ke=0;n.Kb=0;function Vt(a){this.b=a||10;this.a=null;Wt(this);}function Wt(a){a.head=a.a=new St(null,NaN,0,0,4294967296,4294967296);}function Xt(a,b){var c,d;for(c=0;4>c;c++)if(d=b[c])Xt(a,d),delete b[c];delete b.parent;delete b.entries;}function Yt(a,b){var c=a.head,d;if(b){var e=b;if(e!==c)for(c=e;e=e.parent;)if(e.entries||1<e.oe)c=e;}else for(;!c.entries&&2>(d=c.oe);)if(d)c=e;else break;a.head=c;}
  Vt.prototype.Fc=function(a,b,c,d){var e=this.a;if(!(a>=e[7]&&b>=e[4]&&a<=e[5]&&b<=e[6]))throw Error("Coordinates out of bounds");return Zt(this,this.a,a,b,c,this.b,d)};
  function Zt(a,b,c,d,e,f,g){var h=b.entries;if(f)if(b.oe)h=Zt(a,Tt(b,c>=b[8]|(d>=b[9])<<1),c,d,e,f-1,g);else if(h){h=h[0];var k=Tt(b,h[1]>=b[8]|(h[0]>=b[9])<<1);k.entries=b.entries;k.Je=b.Je;k.Ke=b.Ke;k.Kb=b.Kb;k.a=b.a;k.f=b.f;k.b=b.b;k.c=b.c;delete b.entries;h.node=k;Yt(a,k);h=Zt(a,Tt(b,c>=b[8]|(d>=b[9])<<1),c,d,e,f-1,g);}else f=h=new $t(c,d,e,g),(b.entries||(b.entries=[])).push(f),Yt(a,b);else h||Yt(a,b),a=h=new $t(c,d,e,g),(b.entries||(b.entries=[])).push(a);b.Je+=c*e;b.Ke+=d*e;b.Kb+=e;b.a===B?(b.a=
  b.b=c,b.f=b.c=d):(c<b.a?b.a=c:c>b.b&&(b.b=c),d<b.f?b.f=d:d>b.c&&(b.c=d));return h}Vt.prototype.Uc=function(a,b){Ut(this.a,a,b===+b?b:this.b,0);};function $t(a,b,c,d){this[0]=b;this[1]=a;this.a=c;this.data=d;}function au(a){Gt.call(this,a);a=this.g;this.j=a.projection;this.o=a.min;this.f=a.max;this.m=a.minWeight;this.c=7-xd(Bd(wd(1,a.eps))/Ld);this.i=new Vt(wd(this.o,this.f+this.c));}u(au,Gt);n=au.prototype;n.Oc=function(a){var b=0,c=a.length,d,e=new I(0,0),f=this.j,g=this.i;au.l.Oc.call(this,a);Xt(g,g.a);for(Wt(g);b<c;b++)f.$c(d=a[b],e).scale(4294967296).floor(),g.Fc(e.x,e.y,d.wt,d.data);this.b=!0;};n.Ib=function(a){au.l.Ib.call(this,a);this.Oc(this.a);};
  n.Gf=function(a){for(var b=a.length,c=au.l.Ib;b--;)c.call(this,a[b]);this.Oc(this.a);};n.qf=function(a){au.l.qf.call(this,a);this.Oc(this.a);};n.Sa=function(a,b,c,d){return this.j.Sa(a/c/4294967296,b/c/4294967296,d)};n.Ui=function(a){if(this.b){var b={clusters:[],noisePoints:[]};bu(this,this.i.a,0,this.f+this.c,-1/0,b,null);this.b=!1;a(b);}};
  function bu(a,b,c,d,e,f,g){var h=b.Kb,k;g&&(g.node.Kb!==h?(f.clusters.push(new Rt(a,g.node,g.depth,c-1)),g=null):e++);g||(h>=a.m?(g={node:b,depth:c},e=c):cu(a,b,e+1,f));if(b.oe&&d--)for(c++,h=0;4>h;h++)if(k=b[h])bu(a,k,c,d,e,f,g),g=null;g&&f.clusters.push(new Rt(a,g.node,g.depth,a.f+a.c));}function cu(a,b,c,d){b=b.entries;var e;if(b){var f=b.length;d=d.noisePoints;for(e=0;e<f;e++)d.push(new Qt(a,b[e],c));}else for(e=0;4>e;e++)(f=a[e])&&cu(a,f,c,d);}n.u=function(){au.l.u.call(this);this.i=null;};function du(a,b,c,d){this.lat=a;this.lng=b;this.wt=c===+c?c:1;this.data=d;}t("H.clustering.DataPoint",du);du.prototype.vk=NaN;du.prototype.xk=NaN;function eu(a,b){b=b||{};var c={},d=b.min||0,e=wd(d,b.max||22);d={min:d,max:e};eu.l.constructor.call(this,d);this.kb=b.pixelRatio||Se();Wa(c,Ht,d,b.clusteringOptions||{});c.minWeight=wd(Ht.minWeight,c.minWeight);switch(c.strategy){case fu.DYNAMICGRID:if(c.projection!==Xi)throw new D(eu,1,"Unsupported projection");this.a=new Mt(c);break;case fu.GRID:this.a=new Jt(c);break;default:this.a=new au(c);}this.a.Oc(a);this.C=b.theme||new Kt(this.kb);this.ma=A(this.ma,this);this.Xa=A(this.Xa,this);gu(this);}
  u(eu,N);t("H.clustering.Provider",eu);eu.prototype.u=function(){eu.l.u.call(this);this.c.qa();this.a.B();this.C=this.N=this.a=null;x.clearTimeout(this.W);};var fu={FASTGRID:0,GRID:1,DYNAMICGRID:2};eu.Strategy=fu;eu.prototype.ma=function(){this.dispatchEvent("start");this.a.Ui(this.Xa,hd);};function gu(a,b,c){a.W&&x.clearTimeout(a.W);b&&a.a.sl(b,c);a.W=x.setTimeout(a.ma,150);}eu.prototype.Xa=function(a){this.dispatchEvent("end");this.N=a;hu(this);};eu.prototype.Oc=function(a){this.a.Oc(a);gu(this);};
  eu.prototype.setDataPoints=eu.prototype.Oc;eu.prototype.Ib=function(a){this.a.Ib(a);gu(this);};eu.prototype.addDataPoint=eu.prototype.Ib;eu.prototype.Gf=function(a){this.a.Gf(a);gu(this);};eu.prototype.addDataPoints=eu.prototype.Gf;eu.prototype.qf=function(a){this.a.qf(a);gu(this);};eu.prototype.removeDataPoint=eu.prototype.qf;eu.prototype.Ln=function(){return this.C};eu.prototype.getTheme=eu.prototype.Ln;eu.prototype.bp=function(a){this.C=a;this.N&&(this.c.qa(),hu(this));};eu.prototype.setTheme=eu.prototype.bp;
  function hu(a){var b=a.N.clusters,c=a.N.noisePoints,d=b.length,e=c.length,f=0<d+e;for(a.c.qa();e--;){var g=c[e];a.c.ea(a.C.getNoisePresentation(g));}for(;d--;)c=b[d],a.c.ea(a.C.getClusterPresentation(c));f&&Wj(a);}eu.prototype.Vb=function(){return !0};eu.prototype.providesDomMarkers=eu.prototype.Vb;eu.prototype.Wb=function(){return !0};eu.prototype.providesMarkers=eu.prototype.Wb;eu.prototype.Jc=function(){return !0};eu.prototype.providesSpatials=eu.prototype.Jc;
  eu.prototype.nf=function(a,b){gu(this,a,b);};eu.prototype.preprocessData=eu.prototype.nf;t("H.clustering.buildInfo",function(){return Ef("H-clustering","1.30.6","5f44999")});

  function iu(a,b){a:{for(var c=a.length,d="string"===typeof a?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){b=e;break a}b=-1;}return 0>b?null:"string"===typeof a?a.charAt(b):a[b]}var ju={};function ku(a){var b=a.ownerDocument,c=b.documentElement;b=b.defaultView;var d=a.getBoundingClientRect();a=d.left;d=d.top;isNaN(b.pageXOffset)?(a+=c.scrollLeft,d+=c.scrollTop):(a+=b.pageXOffset,d+=b.pageYOffset);return new I(a,d)}
  function lu(a,b,c){b=Cc(b)?b+"px":b;c=Cc(c)?c+"px":c;a.style[xf("transform")]="translate("+b+","+c+")";}var mu={TOP_LEFT:"top-left",TOP_CENTER:"top-center",TOP_RIGHT:"top-right",LEFT_TOP:"left-top",LEFT_MIDDLE:"left-middle",LEFT_BOTTOM:"left-bottom",RIGHT_TOP:"right-top",RIGHT_MIDDLE:"right-middle",RIGHT_BOTTOM:"right-bottom",BOTTOM_LEFT:"bottom-left",BOTTOM_CENTER:"bottom-center",BOTTOM_RIGHT:"bottom-right"};t("H.ui.LayoutAlignment",mu);function nu(a,b){var c={},d={};c["top-left"]=ou(b,"div",[pu,qu].join(" "));c["top-center"]=ou(b,"div",[pu,ru,su,qu].join(" "));c["top-right"]=ou(b,"div",[pu,qu].join(" "));c["left-top"]=ou(b,"div",[pu,tu].join(" "));c["left-middle"]=ou(b,"div",[pu,uu,vu,tu].join(" "));c["left-bottom"]=ou(b,"div",[pu,tu].join(" "));c["right-top"]=ou(b,"div",[pu,tu].join(" "));c["right-middle"]=ou(b,"div",[pu,wu,vu,tu].join(" "));c["right-bottom"]=ou(b,"div",[pu,tu].join(" "));c["bottom-left"]=ou(b,"div",[pu,qu].join(" "));
  c["bottom-center"]=ou(b,"div",[pu,xu,su,qu].join(" "));c["bottom-right"]=ou(b,"div",[pu,qu].join(" "));d["top-left"]=ou(b,"div",[ru,uu].join(" "));d["top-right"]=ou(b,"div",[ru,wu].join(" "));d["bottom-left"]=ou(b,"div",[xu,uu].join(" "));d["bottom-right"]=ou(b,"div",[xu,wu].join(" "));yu(d["top-left"],c["top-left"],c["left-top"]);yu(d["top-right"],c["top-right"],c["right-top"]);yu(d["bottom-left"],c["left-bottom"],c["bottom-left"]);yu(d["bottom-right"],c["right-bottom"],c["bottom-right"]);yu(a,d["top-left"],
  d["top-right"],d["bottom-left"],d["bottom-right"],c["top-center"],c["left-middle"],c["right-middle"],c["bottom-center"]);this.a=c;}var ru="H_l_top",xu="H_l_bottom",uu="H_l_left",wu="H_l_right",su="H_l_center",vu="H_l_middle",qu="H_l_horizontal",tu="H_l_vertical",pu="H_l_anchor";nu.prototype.update=function(){var a=this.a;zu(a["top-center"],!0);zu(a["bottom-center"],!0);zu(a["left-middle"],!1);zu(a["right-middle"],!1);};
  function zu(a,b){b?(b=a.offsetWidth,a.style.marginLeft=-Math.round(.5*b)+"px"):(b=a.offsetHeight,a.style.marginTop=-Math.round(.5*b)+"px");}nu.prototype.put=function(a,b){a=a?a.L():null;var c=b?this.a[b]:null;a&&c&&(a.parentElement&&a.parentElement.removeChild(a),c.insertBefore(a,/(bottom|right)$/.test(b)||/(center|middle)/.test(b)&&c.childNodes.length%2?c.firstChild:null));this.update();};var Au={IMPERIAL:"imperial",METRIC:"metric"};t("H.ui.UnitSystem",Au);function Bu(){this.a=this.Gj();}Bu.prototype.Gj=function(){var a=Function("return this;")(),b=a.navigator,c=[];b&&(b.msPointerEnabled?c.push(Cu):b.pointerEnabled&&c.push(Du));1>c.length&&("TouchEvent"in a&&c.push(Eu),c.push(Fu));return c};Bu.prototype.detectEventSets=Bu.prototype.Gj;Bu.prototype.addEventListener=function(a,b,c,d){for(var e=this.a,f,g=e.length,h=!1;g--;)if(f=e[g][b])h=!0,a.addEventListener(f,c,d||!1);h||a.addEventListener(b,c,d||!1);};
  Bu.prototype.removeEventListener=function(a,b,c,d){for(var e=this.a,f,g=e.length,h=!1;g--;)if(f=e[g][b])h=!0,a.removeEventListener(f,c,d||!1);h||a.removeEventListener(b,c,d||!1);};
  var Du={start:"pointerdown",end:"pointerup",move:"pointermove",cancel:"pointercancel",over:"pointerover",out:"pointerout",hover:"pointerhover"},Cu={start:"MSPointerDown",end:"MSPointerUp",move:"MSPointerMove",cancel:"MSPointerCancel",over:"MSPointerOver",out:"MSPointerOut",hover:"MSPointerHover"},Eu={start:"touchstart",end:"touchend",move:"touchmove",cancel:"touchcancel"},Fu={start:"mousedown",end:"mouseup",move:"mousemove",over:"mouseover",out:"mouseout",hover:"mousehover"};function ou(a,b,c,d){a=a.createElement(b);c&&(a.className=c);d&&(a.innerHTML=d);return a}function yu(a,b){for(var c=1,d=arguments.length;c<d;c++)a.appendChild(arguments[c]);}var Gu=new Bu;function Hu(a,b,c){Gu.addEventListener(a,b,c,void 0);}function Iu(a,b,c){Gu.removeEventListener(a,b,c,void 0);}var Ju=[];t("H.ui.i18n.defaultLocales",Ju);var Ku={},Lu=[];function Mu(a,b){Ku[a]=b;-1===Ju.indexOf(a)&&Ju.push(a);Lu.length?Nu(a,b):Lu=Object.keys(b);}function Nu(a,b){for(var c=Lu,d=c.length,e;d--;)if(e=c[d],!b[e])throw Error("'"+e+"' key missing in translation map for "+a);}Mu("nl-NL",{"layers.normal":"Kaartweergave","layers.satellite":"Satelliet","layers.terrain":"Terrein","layer.transit":"Openbaar vervoer","layer.traffic":"Verkeerssituatie","layer.incidents":"Toon verkeersincidenten","layers.choose":"Weergave kiezen",minimap:"Minimap","scale.switchToImperial":"Overgaan naar mijlen","scale.switchToMetric":"Wijzigen naar km","scale.km":"km","scale.m":"m","scale.mi":"mi","scale.ft":"ft","zoom.out":"Uitzoomen","zoom.in":"Inzoomen","zoom.rectangle":"Zoom rectangle","traffic.MASS_TRANSIT":"Openbaar vervoer",
  "traffic.MISCELLANEOUS":"Diversen","traffic.ACCIDENT":"Ongeval","traffic.OTHER_NEWS":"Meer informatie","traffic.PLANNED_EVENT":"Geplande afzetting","traffic.ROAD_HAZARD":"Gevaar op de weg","traffic.ROAD_CLOSURE":"Rijbaan afgesloten","traffic.WEATHER":"Weer","traffic.CONGESTION":"Verkeersopstopping","traffic.CONSTRUCTION":"Wegwerkzaamheden","traffic.DISABLED_VEHICLE":"Voertuig met pech","traffic.from":"Begintijd:","traffic.until":"Geschatte eindtijd:","distance.measurement":"Measure distance"});Mu("pt-PT",{"layers.normal":"Vista do mapa","layers.satellite":"Sat\u00e9lite","layers.terrain":"Terreno","layer.transit":"Transportes p\u00fablicos","layer.traffic":"Condi\u00e7\u00f5es de tr\u00e2nsito","layer.incidents":"Mostrar incidentes de tr\u00e2nsito","layers.choose":"Escolher vista",minimap:"Minimap","scale.switchToImperial":"Mudar para milhas","scale.switchToMetric":"Mudar para km","scale.km":"km","scale.m":"m","scale.mi":"mi","scale.ft":"ft","zoom.out":"Diminuir","zoom.in":"Aumentar",
  "zoom.rectangle":"Zoom rectangle","traffic.MASS_TRANSIT":"Transportes p\u00fablicos","traffic.MISCELLANEOUS":"Diversos","traffic.ACCIDENT":"Acidente","traffic.OTHER_NEWS":"Outras not\u00edcias","traffic.PLANNED_EVENT":"Evento planeado","traffic.ROAD_HAZARD":"Perigo na estrada","traffic.ROAD_CLOSURE":"Estrada fechada","traffic.WEATHER":"Meteorologia","traffic.CONGESTION":"Congestionamento","traffic.CONSTRUCTION":"Constru\u00e7\u00e3o","traffic.DISABLED_VEHICLE":"Ve\u00edculo avariado","traffic.from":"Hora de in\u00edcio:",
  "traffic.until":"Hora de fim prevista:","distance.measurement":"Measure distance"});Mu("ru-RU",{"layers.normal":"\u0420\u0435\u0436\u0438\u043c \u043a\u0430\u0440\u0442\u044b","layers.satellite":"\u0421\u043f\u0443\u0442\u043d\u0438\u043a\u043e\u0432\u0430\u044f","layers.terrain":"\u041c\u0435\u0441\u0442\u043d\u043e\u0441\u0442\u044c","layer.transit":"\u041e\u0431\u0449\u0435\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u0439 \u0442\u0440\u0430\u043d\u0441\u043f\u043e\u0440\u0442","layer.traffic":"\u0414\u043e\u0440\u043e\u0436\u043d\u044b\u0435 \u0443\u0441\u043b\u043e\u0432\u0438\u044f",
  "layer.incidents":"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u0434\u043e\u0440\u043e\u0436\u043d\u044b\u0435 \u0441\u043e\u0431\u044b\u0442\u0438\u044f","layers.choose":"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0432\u0438\u0434",minimap:"Minimap","scale.switchToImperial":"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u043c\u0438\u043b\u0438","scale.switchToMetric":"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u043a\u0438\u043b\u043e\u043c\u0435\u0442\u0440\u044b",
  "scale.km":"\u043a\u043c","scale.m":"\u043c","scale.mi":"\u043c\u0438\u043b\u044c","scale.ft":"\u0444\u0443\u0442","zoom.out":"\u041e\u0442\u0434\u0430\u043b\u0438\u0442\u044c","zoom.in":"\u041f\u0440\u0438\u0431\u043b\u0438\u0437\u0438\u0442\u044c","zoom.rectangle":"Zoom rectangle","traffic.MASS_TRANSIT":"\u041e\u0431\u0449\u0435\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u0439 \u0442\u0440\u0430\u043d\u0441\u043f\u043e\u0440\u0442","traffic.MISCELLANEOUS":"\u041f\u0440\u043e\u0447\u0435\u0435 \u0414\u0422\u041f",
  "traffic.ACCIDENT":"\u0414\u0422\u041f","traffic.OTHER_NEWS":"\u0414\u0440\u0443\u0433\u0438\u0435 \u043d\u043e\u0432\u043e\u0441\u0442\u0438","traffic.PLANNED_EVENT":"\u041f\u043b\u0430\u043d\u043e\u0432\u043e\u0435 \u043c\u0435\u0440\u043e\u043f\u0440\u0438\u044f\u0442\u0438\u0435","traffic.ROAD_HAZARD":"\u0414\u043e\u0440\u043e\u0436\u043d\u0430\u044f \u043e\u043f\u0430\u0441\u043d\u043e\u0441\u0442\u044c","traffic.ROAD_CLOSURE":"\u0414\u043e\u0440\u043e\u0433\u0430 \u0437\u0430\u043a\u0440\u044b\u0442\u0430",
  "traffic.WEATHER":"\u041f\u043e\u0433\u043e\u0434\u0430","traffic.CONGESTION":"\u041f\u0440\u043e\u0431\u043a\u0430","traffic.CONSTRUCTION":"\u0420\u0435\u043c\u043e\u043d\u0442","traffic.DISABLED_VEHICLE":"\u041d\u0435\u0438\u0441\u043f\u0440\u0430\u0432\u043d\u044b\u0439 \u0430\u0432\u0442\u043e\u043c\u043e\u0431\u0438\u043b\u044c","traffic.from":"\u0412\u0440\u0435\u043c\u044f \u043d\u0430\u0447\u0430\u043b\u0430:","traffic.until":"\u041e\u0436\u0438\u0434\u0430\u0435\u043c\u043e\u0435 \u0432\u0440\u0435\u043c\u044f \u043e\u043a\u043e\u043d\u0447\u0430\u043d\u0438\u044f:",
  "distance.measurement":"\u0418\u0437\u043c\u0435\u0440\u0438\u0442\u044c \u0440\u0430\u0441\u0441\u0442\u043e\u044f\u043d\u0438\u0435"});Mu("fi-FI",{"layers.normal":"Karttan\u00e4kym\u00e4","layers.satellite":"Satelliitti","layers.terrain":"Maasto","layer.transit":"Julkinen liikenne","layer.traffic":"Liikenneolosuhteet","layer.incidents":"N\u00e4yt\u00e4 liikennetapahtumat","layers.choose":"Valitse n\u00e4kym\u00e4",minimap:"Minimap","scale.switchToImperial":"Vaihda maileihin","scale.switchToMetric":"Vaihda kilometreihin","scale.km":"km","scale.m":"m","scale.mi":"mi","scale.ft":"ft","zoom.out":"Loitonna","zoom.in":"L\u00e4henn\u00e4",
  "zoom.rectangle":"Zoom rectangle","traffic.MASS_TRANSIT":"Julkinen liikenne","traffic.MISCELLANEOUS":"Erittelem\u00e4t\u00f6n syy","traffic.ACCIDENT":"Onnettomuus","traffic.OTHER_NEWS":"Muu tapahtuma","traffic.PLANNED_EVENT":"Suunniteltu tapahtuma","traffic.ROAD_HAZARD":"Vaara tiell\u00e4","traffic.ROAD_CLOSURE":"Tie suljettu","traffic.WEATHER":"S\u00e4\u00e4","traffic.CONGESTION":"Ruuhka","traffic.CONSTRUCTION":"Rakennusty\u00f6","traffic.DISABLED_VEHICLE":"Pys\u00e4htynyt ajoneuvo","traffic.from":"Alkamisaika:",
  "traffic.until":"Arvioitu p\u00e4\u00e4ttymisaika:","distance.measurement":"Measure distance"});Mu("pt-BR",{"layers.normal":"Exibi\u00e7\u00e3o do mapa","layers.satellite":"Sat\u00e9lite","layers.terrain":"Terreno","layer.transit":"Transporte p\u00fablico","layer.traffic":"Condi\u00e7\u00f5es do tr\u00e2nsito","layer.incidents":"Mostrar incidentes no tr\u00e2nsito","layers.choose":"Escolher exibi\u00e7\u00e3o",minimap:"Minimap","scale.switchToImperial":"Mudar para milhas","scale.switchToMetric":"Mudar para km","scale.km":"km","scale.m":"m","scale.mi":"milhas","scale.ft":"p\u00e9s","zoom.out":"Menos zoom",
  "zoom.in":"Mais zoom","zoom.rectangle":"Zoom rectangle","traffic.MASS_TRANSIT":"Transporte p\u00fablico","traffic.MISCELLANEOUS":"Miscel\u00e2nea","traffic.ACCIDENT":"Acidente","traffic.OTHER_NEWS":"Outras not\u00edcias","traffic.PLANNED_EVENT":"Evento planejado","traffic.ROAD_HAZARD":"Risco na estrada","traffic.ROAD_CLOSURE":"Estrada fechada","traffic.WEATHER":"Clima","traffic.CONGESTION":"Congestionamento","traffic.CONSTRUCTION":"Constru\u00e7\u00e3o","traffic.DISABLED_VEHICLE":"Ve\u00edculo incapacitado",
  "traffic.from":"Hora de in\u00edcio:","traffic.until":"Tempo final estimado:","distance.measurement":"Measure distance"});Mu("zh-CN",{"layers.normal":"\u5730\u56fe\u89c6\u56fe","layers.satellite":"\u536b\u661f","layers.terrain":"\u5730\u5f62","layer.transit":"\u516c\u5171\u4ea4\u901a","layer.traffic":"\u4ea4\u901a\u60c5\u51b5","layer.incidents":"\u663e\u793a\u4ea4\u901a\u4e8b\u4ef6","layers.choose":"\u9009\u62e9\u89c6\u56fe",minimap:"Minimap","scale.switchToImperial":"\u5207\u6362\u4e3a\u300c\u82f1\u91cc\u300d","scale.switchToMetric":"\u5207\u6362\u4e3a\u300c\u516c\u91cc\u300d","scale.km":"\u516c\u91cc","scale.m":"\u7c73",
  "scale.mi":"\u82f1\u91cc","scale.ft":"\u82f1\u5c3a","zoom.out":"\u7f29\u5c0f","zoom.in":"\u653e\u5927","zoom.rectangle":"Zoom rectangle","traffic.MASS_TRANSIT":"\u516c\u5171\u4ea4\u901a","traffic.MISCELLANEOUS":"\u7efc\u5408\u4e8b\u4ef6","traffic.ACCIDENT":"\u4ea4\u901a\u610f\u5916","traffic.OTHER_NEWS":"\u5176\u4ed6\u65b0\u95fb","traffic.PLANNED_EVENT":"\u9884\u5b9a\u4e8b\u4ef6","traffic.ROAD_HAZARD":"\u9053\u8def\u5371\u9669","traffic.ROAD_CLOSURE":"\u9053\u8def\u5df2\u5173\u95ed","traffic.WEATHER":"\u5929\u6c14",
  "traffic.CONGESTION":"\u5835\u585e","traffic.CONSTRUCTION":"\u65bd\u5de5","traffic.DISABLED_VEHICLE":"\u8f66\u8f86\u629b\u951a","traffic.from":"\u5f00\u59cb\u65f6\u95f4\uff1a","traffic.until":"\u9884\u8ba1\u7ed3\u675f\u65f6\u95f4\uff1a","distance.measurement":"Measure distance"});Mu("es-ES",{"layers.normal":"Mapa","layers.satellite":"Sat\u00e9lite","layers.terrain":"Terreno","layer.transit":"Transporte p\u00fablico","layer.traffic":"Estado del tr\u00e1fico","layer.incidents":"Mostrar incidentes de tr\u00e1fico","layers.choose":"Elija una vista",minimap:"Minimap","scale.switchToImperial":"Cambiar a millas","scale.switchToMetric":"Cambiar a km","scale.km":"km","scale.m":"m","scale.mi":"mi","scale.ft":"ft","zoom.out":"Alejar","zoom.in":"Acercar","zoom.rectangle":"Zoom rectangle",
  "traffic.MASS_TRANSIT":"Transporte p\u00fablico","traffic.MISCELLANEOUS":"Varios","traffic.ACCIDENT":"Accidente","traffic.OTHER_NEWS":"M\u00e1s noticias","traffic.PLANNED_EVENT":"Acto programado","traffic.ROAD_HAZARD":"Riesgo en carretera","traffic.ROAD_CLOSURE":"Carretera cerrada","traffic.WEATHER":"Tiempo","traffic.CONGESTION":"Atasco","traffic.CONSTRUCTION":"Construcci\u00f3n","traffic.DISABLED_VEHICLE":"Veh\u00edculo averiado","traffic.from":"Inicio:","traffic.until":"Finalizaci\u00f3n estimada:",
  "distance.measurement":"Measure distance"});Mu("fr-FR",{"layers.normal":"Carte","layers.satellite":"Satellite","layers.terrain":"Terrain","layer.transit":"Transports publics","layer.traffic":"Conditions de circulation","layer.incidents":"Afficher les incidents de circulation","layers.choose":"Choisir la vue",minimap:"Minimap","scale.switchToImperial":"Passer en miles","scale.switchToMetric":"Passer en km","scale.km":"km","scale.m":"m","scale.mi":"mi","scale.ft":"ft","zoom.out":"Zoom arri\u00e8re","zoom.in":"Zoom avant","zoom.rectangle":"Zoom rectangle",
  "traffic.MASS_TRANSIT":"Transports publics","traffic.MISCELLANEOUS":"Divers","traffic.ACCIDENT":"Accident","traffic.OTHER_NEWS":"Autre","traffic.PLANNED_EVENT":"\u00c9v\u00e9nement pr\u00e9vu","traffic.ROAD_HAZARD":"Danger routier","traffic.ROAD_CLOSURE":"Chauss\u00e9e ferm\u00e9e","traffic.WEATHER":"M\u00e9t\u00e9o","traffic.CONGESTION":"Embouteillage","traffic.CONSTRUCTION":"Travaux","traffic.DISABLED_VEHICLE":"V\u00e9hicule en panne","traffic.from":"Date ou heure de d\u00e9but:","traffic.until":"Date et heure de fin estim\u00e9es:",
  "distance.measurement":"Measure distance"});Mu("pl-PL",{"layers.normal":"Widok mapy","layers.satellite":"Satelita","layers.terrain":"Teren","layer.transit":"Transport publiczny","layer.traffic":"Warunki drogowe","layer.incidents":"Poka\u017c zdarzenia drogowe","layers.choose":"Wybierz widok",minimap:"Minimap","scale.switchToImperial":"Zmie\u0144 na mile","scale.switchToMetric":"Zmie\u0144 na km","scale.km":"km","scale.m":"m","scale.mi":"mi","scale.ft":"ft","zoom.out":"Oddal","zoom.in":"Przybli\u017c","zoom.rectangle":"Zoom rectangle","traffic.MASS_TRANSIT":"Transport publiczny",
  "traffic.MISCELLANEOUS":"Inne zdarzenie","traffic.ACCIDENT":"Wypadek","traffic.OTHER_NEWS":"Inne wiadomo\u015bci","traffic.PLANNED_EVENT":"Zdarzenie planowane","traffic.ROAD_HAZARD":"Niebezpiecze\u0144stwo na drodze","traffic.ROAD_CLOSURE":"Jezdnia zamkni\u0119ta","traffic.WEATHER":"Pogoda","traffic.CONGESTION":"Korek","traffic.CONSTRUCTION":"Budowa","traffic.DISABLED_VEHICLE":"Uszkodzony pojazd","traffic.from":"Data rozpocz\u0119cia:","traffic.until":"Przybli\u017cona data zako\u0144czenia:","distance.measurement":"Measure distance"});Mu("de-DE",{"layers.normal":"Kartenansicht","layers.satellite":"Satellit","layers.terrain":"Gel\u00e4nde","layer.transit":"\u00d6ffentliche Verkehrsmittel","layer.traffic":"Verkehrslage","layer.incidents":"Verkehrsst\u00f6rungen anzeigen","layers.choose":"Ansicht ausw\u00e4hlen",minimap:"Minimap","scale.switchToImperial":"Umrechnung in Meilen","scale.switchToMetric":"Umrechnung in Kilometer","scale.km":"km","scale.m":"m","scale.mi":"mi","scale.ft":"ft","zoom.out":"Verkleinern","zoom.in":"Vergr\u00f6\u00dfern",
  "zoom.rectangle":"Zoom rectangle","traffic.MASS_TRANSIT":"\u00d6ffentliche Verkehrsmittel","traffic.MISCELLANEOUS":"Diverse","traffic.ACCIDENT":"Unfall","traffic.OTHER_NEWS":"Anderes Ereignis","traffic.PLANNED_EVENT":"Geplantes Ereignis","traffic.ROAD_HAZARD":"Verkehrshindernis","traffic.ROAD_CLOSURE":"Fahrbahn gesperrt","traffic.WEATHER":"Wetter","traffic.CONGESTION":"Verkehrsstau","traffic.CONSTRUCTION":"Baustelle","traffic.DISABLED_VEHICLE":"Liegengebliebenes Fahrzeug","traffic.from":"Beginn:",
  "traffic.until":"Voraussichtliches Ende:","distance.measurement":"Measure distance"});Mu("tr-TR",{"layers.normal":"Harita g\u00f6r\u00fcn\u00fcm\u00fc","layers.satellite":"Uydu","layers.terrain":"Arazi","layer.transit":"Toplu ula\u015f\u0131m","layer.traffic":"Trafik durumlar\u0131","layer.incidents":"Trafik olaylar\u0131n\u0131 g\u00f6ster","layers.choose":"G\u00f6r\u00fcn\u00fcm se\u00e7",minimap:"Minimap","scale.switchToImperial":"Mile d\u00f6n\u00fc\u015ft\u00fcr","scale.switchToMetric":"Kilometreye d\u00f6n\u00fc\u015ft\u00fcr","scale.km":"km","scale.m":"m","scale.mi":"mil","scale.ft":"ft",
  "zoom.out":"Uzakla\u015ft\u0131r","zoom.in":"Yak\u0131nla\u015ft\u0131r","zoom.rectangle":"Zoom rectangle","traffic.MASS_TRANSIT":"Toplu ula\u015f\u0131m","traffic.MISCELLANEOUS":"\u00c7e\u015fitli","traffic.ACCIDENT":"Kaza","traffic.OTHER_NEWS":"Di\u011fer haberler","traffic.PLANNED_EVENT":"Planl\u0131 etkinlik","traffic.ROAD_HAZARD":"Yol tehlikesi","traffic.ROAD_CLOSURE":"Yol kapal\u0131","traffic.WEATHER":"Hava durumu","traffic.CONGESTION":"Yo\u011funluk","traffic.CONSTRUCTION":"Yol \u00e7al\u0131\u015fmas\u0131",
  "traffic.DISABLED_VEHICLE":"Ara\u00e7 ar\u0131zas\u0131","traffic.from":"Ba\u015flang\u0131\u00e7 zaman\u0131:","traffic.until":"Tahmini biti\u015f zaman\u0131:","distance.measurement":"Measure distance"});Mu("it-IT",{"layers.normal":"Vista mappa","layers.satellite":"Satellite","layers.terrain":"Terreno","layer.transit":"Mezzi pubblici","layer.traffic":"Condizioni del traffico","layer.incidents":"Mostra incidenti stradali","layers.choose":"Scegli vista",minimap:"Minimap","scale.switchToImperial":"Passa a miglia","scale.switchToMetric":"Passa a km","scale.km":"km","scale.m":"m","scale.mi":"mi","scale.ft":"ft","zoom.out":"Zoom indietro","zoom.in":"Zoom avanti","zoom.rectangle":"Zoom rectangle","traffic.MASS_TRANSIT":"Mezzi pubblici",
  "traffic.MISCELLANEOUS":"Varie","traffic.ACCIDENT":"Incidente","traffic.OTHER_NEWS":"Altre notizie","traffic.PLANNED_EVENT":"Evento pianificato","traffic.ROAD_HAZARD":"Strada dissestata","traffic.ROAD_CLOSURE":"Strada chiusa","traffic.WEATHER":"Maltempo","traffic.CONGESTION":"Ingorgo","traffic.CONSTRUCTION":"Lavori in corso","traffic.DISABLED_VEHICLE":"Veicolo in panne","traffic.from":"Ora di inizio:","traffic.until":"Ora di fine stimata:","distance.measurement":"Measure distance"});Mu("en-US",{"layers.normal":"Map view","layers.satellite":"Satellite","layers.terrain":"Terrain","layer.transit":"Public transport","layer.traffic":"Traffic conditions","layer.incidents":"Show traffic incidents","layers.choose":"Choose view",minimap:"Minimap","scale.switchToImperial":"Change to miles","scale.switchToMetric":"Change to km","scale.km":"km","scale.m":"m","scale.mi":"mi","scale.ft":"ft","zoom.out":"Zoom out","zoom.in":"Zoom in","zoom.rectangle":"Zoom rectangle","traffic.MASS_TRANSIT":"Public transport",
  "traffic.MISCELLANEOUS":"Miscellaneous","traffic.ACCIDENT":"Accident","traffic.OTHER_NEWS":"Other news","traffic.PLANNED_EVENT":"Planned event","traffic.ROAD_HAZARD":"Road hazard","traffic.ROAD_CLOSURE":"Roadway closed","traffic.WEATHER":"Weather","traffic.CONGESTION":"Congestion","traffic.CONSTRUCTION":"Construction","traffic.DISABLED_VEHICLE":"Disabled vehicle","traffic.from":"Start time:","traffic.until":"Estimated end time:","distance.measurement":"Measure distance"});function Ou(a,b){if(!zc(a))throw new TypeError("string locale code required");if(Da(b))Nu(a,b);else {if(-1===Ju.indexOf(a))throw Error("Default locale '"+a+"' does nto exist.");b=Ku[a];}this.a=b||{};this.b=a;}t("H.ui.i18n.Localization",Ou);Ou.prototype.mn=function(){return this.b};Ou.prototype.getLocale=Ou.prototype.mn;Ou.prototype.fn=function(){return Object.keys(this.a)};Ou.prototype.getKeys=Ou.prototype.fn;Ou.prototype.Kh=function(a){return !(!this.a||!this.a[a])};Ou.prototype.hasKey=Ou.prototype.Kh;
  Ou.prototype.translate=function(a){var b=this.a[a];if(!zc(b))throw Error("Translation missing for key '"+a+"'.");return b};Ou.prototype.translate=Ou.prototype.translate;function Z(a,b){F.call(this);this.Ra=a||"div";this.g=b?b.split(" "):[];this.J=!1;this.g.push("H_el");}u(Z,F);t("H.ui.base.Element",Z);Z.prototype.V=function(a){if(!a)throw Error("Wrong document object");this.S=ou(a,this.Ra,this.g.join(" "));this.renderInternal(this.S,a);this.Da(this.mc(),!0);this.sc(this.ma);this.wb(this.c);return this.S};Z.prototype.fa=function(){};Z.prototype.N=function(){};Z.prototype.$=function(){};Z.prototype.renderInternal=Z.prototype.$;Z.prototype.mc=function(){return this.J};
  Z.prototype.isDisabled=Z.prototype.mc;Z.prototype.Da=function(a,b){a=!!a;if(a!==this.J||b)(this.J=a)?this.La("H_disabled"):this.qb("H_disabled");return this};Z.prototype.setDisabled=Z.prototype.Da;Z.prototype.O=null;Z.prototype.getData=function(){return this.O};Z.prototype.getData=Z.prototype.getData;Z.prototype.setData=function(a){this.O=a;};Z.prototype.setData=Z.prototype.setData;Z.prototype.sc=function(a){var b=this.L();this.ma=a;b&&(a?b.setAttribute("title",a):b.removeAttribute("title"));};
  Z.prototype.setTooltip=Z.prototype.sc;Z.prototype.S=null;Z.prototype.L=function(){return this.S};Z.prototype.getElement=Z.prototype.L;Z.prototype.c=!0;Z.prototype.wb=function(a){var b=this.L();this.c=a;b&&(b.style.display=a?"":"none");};Z.prototype.setVisibility=Z.prototype.wb;Z.prototype.Dc=function(){return this.c};Z.prototype.getVisibility=Z.prototype.Dc;Z.prototype.La=function(a){var b=this.L();0>this.g.indexOf(a)&&this.g.push(a);b&&(b.className=this.g.join(" "));return this};
  Z.prototype.addClass=Z.prototype.La;Z.prototype.qb=function(a){a=this.g.indexOf(a);var b=this.L();-1<a&&this.g.splice(a,1);b&&(b.className=this.g.join(" "));return this};Z.prototype.removeClass=Z.prototype.qb;function Pu(a){(a=a.L())&&a.parentNode&&a.parentNode.removeChild(a);}Z.prototype.u=function(){Z.l.u.call(this);Pu(this);this.ma=this.O=this.S=null;};function Qu(a,b,c){Z.call(this,a,b);this.b=c?c.concat():[];}u(Qu,Z);t("H.ui.base.Container",Qu);Qu.prototype.Da=function(a,b){var c=this.b?this.b.length:0;for(Z.prototype.Da.call(this,a,b);c--;)this.b[c].Da(a,b);return this};Qu.prototype.setDisabled=Qu.prototype.Da;Qu.prototype.Ka=function(a){var b=this.L();this.b.push(a);b&&(a.V(b.ownerDocument),b.appendChild(a.L()));return this};Qu.prototype.addChild=Qu.prototype.Ka;Qu.prototype.vh=function(){return this.b.concat()};
  Qu.prototype.getChildren=Qu.prototype.vh;Qu.prototype.removeChild=function(a){var b=this.b.indexOf(a),c=this.L();0<=b&&(this.b.splice(b,1),c&&c.removeChild(a.L()));};Qu.prototype.removeChild=Qu.prototype.removeChild;Qu.prototype.qa=function(){var a=this.L();a&&this.b.forEach(function(b){a.removeChild(b.L());});this.b=[];};Qu.prototype.$=function(a,b){for(var c=0,d=this.b.length;c<d;c++)a.appendChild(this.b[c].V(b));};Qu.prototype.renderInternal=Qu.prototype.$;
  Qu.prototype.u=function(){this.qa();this.b.forEach(this.W,this);Z.prototype.u.call(this);};Qu.prototype.W=function(a){a.B();};function Ru(a){C(a,Oe,Ru,1);Z.call(this,"div","H_context_menu_item");this.b=a;this.f=A(this.f,this);this.a=A(this.a,this);this.b.addEventListener("update",this.a);}u(Ru,Z);t("H.ui.context.Item",Ru);Ru.prototype.f=function(a){var b=this.b,c=b.callback;c&&!b.isDisabled()&&(this.dispatchEvent("click"),c(a));};Ru.prototype.$=function(){var a=this,b=this.L();Be(b,"click",this.f);b.addEventListener("keyup",function(c){13==c.keyCode&&a.f(c);});this.a();};Ru.prototype.renderInternal=Ru.prototype.$;
  Ru.prototype.a=function(){var a=this.L(),b=this.b;b.callback?(this.La("clickable"),a.setAttribute("tabindex","0")):(this.qb("clickable"),a.removeAttribute("tabindex"));b.isDisabled()?this.La("disabled"):this.qb("disabled");b=b.getLabel();Su.textContent=b;a.innerHTML=Su.innerHTML.split("\n").join("<br/>");};Ru.prototype.u=function(){Z.prototype.u.call(this);this.b.removeEventListener("update",this.a);};function Tu(a){C(a,Array,Tu,1);Qu.call(this,"div","H_context_menu");this.f=a;this.a=null;}u(Tu,Qu);t("H.ui.context.Menu",Tu);Tu.prototype.$=function(){Qu.prototype.$.apply(this,arguments);this.f.forEach(function(a){a===Pe?a=new Z("div","H_context_menu_item_separator"):(a=new Ru(a),a.addEventListener("click",this.i.bind(this)));this.Ka(a);},this);Be(this.L(),["mousedown","touchstart","pointerdown","wheel"],function(a){a.stopPropagation();});};Tu.prototype.renderInternal=Tu.prototype.$;
  Tu.prototype.setPosition=function(a,b){if(this.a){var c=this.L();var d=c.offsetWidth;var e=c.offsetHeight;var f=this.a;var g=f.ya.width;f=f.ya.height;a+d>g&&a>g/2&&(a-=d);b+e>f&&b>f/2&&(b-=e);lu(c,a,b);}};Tu.prototype.setPosition=Tu.prototype.setPosition;Tu.prototype.i=function(){this.a&&this.a.dispatchEvent(new rd("contextmenuclose",this.a));};Tu.prototype.Ja=function(a){this.a=a;};Tu.prototype.setMap=Tu.prototype.Ja;function Uu(a,b){b=b||{};var c=this;Z.call(this,"div","H_ib H_ib_top");this.v=A(function(d){c.mc()||(c.close(),d.preventDefault());},this);this.update=A(this.update,this);this.i=A(this.i,this);this.setPosition(a);this.xf(b.content);b.onStateChange&&this.addEventListener("statechange",b.onStateChange);this.P(Vu.OPEN);}u(Uu,Z);t("H.ui.InfoBubble",Uu);Uu.prototype.a=null;Uu.prototype.Ca=function(){return this.b};Uu.prototype.setPosition=function(a){this.b=Zf(a);this.update();};
  Uu.prototype.setPosition=Uu.prototype.setPosition;Uu.prototype.Ja=function(a){this.a=a;};
  Uu.prototype.$=function(a,b){this.o=ou(b,"div","H_ib_body");this.tailEl_=ou(b,"div","H_ib_tail");this.j=ou(b,"div","H_ib_close H_btn",Wu);this.f=ou(b,"div","H_ib_content","&nbsp;");this.o.appendChild(this.j);this.o.appendChild(this.f);Hu(this.j,"start",this.v);this.a.b.addEventListener("sync",this.update);this.a.ya.addEventListener("sync",this.update);this.a.addEventListener("enginechange",this.i);a.appendChild(this.o);a.appendChild(this.tailEl_);this.xf(this.m);};
  Uu.prototype.renderInternal=Uu.prototype.$;Uu.prototype.i=function(){this.s||(this.s=setTimeout(this.update,0));};Uu.prototype.update=function(){var a=this.L(),b=this.a,c,d="none";this.s=0;if(b&&a&&this.getState()===Vu.OPEN){if(c=b.Fa(this.b)){var e=c.x;c=c.y;b=b.ya.width;if(e>=-b||e<=2*b||c>=-b||c<=2*b)d="",Xu?(a.style.left=e-b+"px",a.style.top=c+"px"):lu(a,e,c);}a.style.display=d;""===d&&(a.style.visibility="visible");}};var Vu={OPEN:"open",CLOSED:"closed"};Uu.State=Vu;Uu.prototype.A=Vu.OPEN;
  Uu.prototype.getState=function(){return this.A};Uu.prototype.getState=Uu.prototype.getState;Uu.prototype.P=function(a){a!==this.A&&(this.A=a,this.dispatchEvent("statechange"));if(a=this.L())this.A===Vu.OPEN?(a.style.display="block",a.style.visibility="hidden",this.i()):a.style.display="none";};Uu.prototype.setState=Uu.prototype.P;Uu.prototype.close=function(){this.P(Vu.CLOSED);};Uu.prototype.close=Uu.prototype.close;Uu.prototype.open=function(){this.P(Vu.OPEN);};Uu.prototype.open=Uu.prototype.open;
  Uu.prototype.Km=function(){return this.f||null};Uu.prototype.getContentElement=Uu.prototype.Km;
  Uu.prototype.xf=function(a){if(a)if("string"===typeof a||"number"===typeof a.nodeType&&"string"===typeof a.nodeName)this.m=a;else throw Error("InfoBubble content must be a string or HTML node.");else this.m=void 0;this.L()&&(this.m?(this.f.innerHTML="","string"===typeof this.m?this.f.innerHTML=a:"number"===typeof a.nodeType&&"string"===typeof a.nodeName&&this.f.appendChild(a)):this.f.innerHTML="&nbsp;",this.i());};Uu.prototype.setContent=Uu.prototype.xf;
  Uu.prototype.u=function(){this.close();this.xf(null);this.j&&Iu(this.j,"end",this.v);this.a&&(this.a.b.removeEventListener("sync",this.update),this.a.ya.removeEventListener("sync",this.update));Z.prototype.u.call(this);};var Wu='<svg version="1.1" class="H_icon" viewBox="0 0 12 12"><path d="m8.12 6 3.66-3.66c.29-.29.29-.76 0-1.05l-1.06-1.06c-.29-.29-.76-.29-1.05 0l-3.66 3.66-3.66-3.66c-.29-.29-.76-.29-1.05 0l-1.06 1.06c-.29.29-.3.76 0 1.05l3.66 3.66-3.66 3.66c-.29.29-.29.76 0 1.05l1.06 1.06c.29.29.76.29 1.05 0l3.66-3.66 3.66 3.66c.29.29.76.29 1.05 0l1.06-1.06c.29-.29.3-.76 0-1.05z"></path></svg>';function Yu(a){this.c=a;this.a=this.b=null;this.i=0;this.g=22;this.f=A(this.f,this);a=this.c.jc();a.addEventListener("mapviewchange",this.o,!1,this);a=a.a;a.addEventListener("add",this.j,!1,this);a.addEventListener("remove",this.m,!1,this);}function Zu(a,b){a.b&&b&&a.b===b.ga()||(a.b&&a.b.removeEventListener("tap",a.f),b?(a.b=b.ga(),a.b.addEventListener("tap",a.f),a.i=a.b.min,a.g=a.b.max):(a.b=null,a.i=0,a.g=22));}
  Yu.prototype.o=function(a){var b=a.newValue.zoom;this.a&&a.modifiers&a.ZOOM&&(b<this.i||b>this.g)&&this.a.close();};Yu.prototype.j=function(a){a=a.added;$u(a)&&Zu(this,a);};Yu.prototype.m=function(a){$u(a.removed)&&(this.a&&this.a.close(),Zu(this,null));};function $u(a){return window.H.service&&a.ga()instanceof window.H.service.traffic.incidents.Provider}
  Yu.prototype.f=function(a){var b;if(a.target&&(b=a.target.getData())&&0===a.currentPointer.button){this.a||(this.a=new Uu(a.target.ba()),this.a.La("H_tib"),this.c.sj(this.a));this.a.setPosition(a.target.ba());var c=b.TRAFFIC_ITEM_TYPE_DESC.replace(" ","_");this.c.Ba().Kh("traffic."+c)?c=this.c.Ba().translate("traffic."+c):c=b.TRAFFIC_ITEM_DESCRIPTION[b.TRAFFIC_ITEM_DESCRIPTION.length-1].value;this.a.xf('<div class="H_tib_content"><div class="H_rdo_title" dir="auto">{{title}}</div><div class="H_tib_desc" dir="auto"><span>{{desc}}</span><div class="H_tib_time"><span class="H_tib_left">{{traffic.from}}</span><span class="H_tib_right">{{from}}</span><br/><span class="H_tib_left">{{traffic.until}}</span><span class="H_tib_right">{{until}}</span></div></div>'.replace("{{title}}",
  c).replace("{{desc}}",b.TRAFFIC_ITEM_DESCRIPTION[0].value).replace("{{traffic.from}}",this.c.Ba().translate("traffic.from")).replace("{{traffic.until}}",this.c.Ba().translate("traffic.until")).replace("{{from}}",b.START_TIME).replace("{{until}}",b.END_TIME));this.a.open();}a.stopPropagation();};function av(a,b){var c=a.L(),d=this;F.call(this);this.a=a;this.i=c.ownerDocument;this.f={};this.c=[];new Yu(this);this.S=ou(this.i,"div","H_ui");this.setDirection();this.C=A(function(e){this.o.put(e.target,e.target.Vc);},this);this.addEventListener("alignmentchange",this.C);this.J=A(function(){this.Pl();},this);this.addEventListener("toggleunitsystem",this.J);this.S.addEventListener("contextmenu",this.v,!1);this.S.addEventListener("MSHoldVisual",this.v,!1);this.a.addEventListener("contextmenu",
  this.O,!1,this);this.a.addEventListener("contextmenuclose",this.s,!1,this);this.a.zb(this.B.bind(this));this.b=null;this.m=-1;this.o=new nu(this.S,this.i);this.g=Au.METRIC;bv(this,"en-US");b&&cv(this,b);c.appendChild(this.S);x.setTimeout(function(){d.o.update();},1);}u(av,F);t("H.ui.UI",av);av.prototype.v=function(a){for(var b=a.target;b&&!/\bH_ib_content\b/.test(b.className);)b=b.parentNode;b||a.preventDefault();};av.prototype.L=function(){return this.S};av.prototype.getElement=av.prototype.L;
  av.prototype.jc=function(){return this.a};av.prototype.getMap=av.prototype.jc;av.prototype.Qn=function(){return this.g};av.prototype.getUnitSystem=av.prototype.Qn;av.prototype.Jg=function(a){var b=this.f,c;if(a!==this.g)for(c in this.g=a,b)if(b[c]instanceof dv)b[c].onUnitSystemChange(this.g);};av.prototype.setUnitSystem=av.prototype.Jg;av.prototype.setDirection=function(a){this.S.setAttribute("dir",a||getComputedStyle(this.jc().L()).direction);};av.prototype.setDirection=av.prototype.setDirection;
  function bv(a,b){if(zc(b))var c=b;else if(b instanceof Ou){c=b.b;var d=b;}else throw Error("The locale parameter must be a string or a H.ui.i18n.Localization object.");if(c)if(d)a.j=d;else if(0<=Ju.indexOf(c))a.j=new Ou(c);else throw Error("Locale ["+c+"] is not supported.");else throw Error("No locale was defined.");}av.prototype.Ba=function(){return this.j};av.prototype.Pl=function(){this.g===Au.METRIC?this.Jg(Au.IMPERIAL):this.Jg(Au.METRIC);};av.prototype.toggleUnitSystem=av.prototype.Pl;
  av.prototype.sj=function(a){var b=this.c.length,c=this.S;if(0>this.c.indexOf(a)){a.ka(this);a.Ja(this.a);var d=a.V(this.i);b=0<b?this.c[b-1].L().nextSibling:this.S.firstChild;c.insertBefore(d,b);this.c.push(a);}};av.prototype.addBubble=av.prototype.sj;
  av.prototype.O=function(a){var b=a.items;this.b&&this.s();clearTimeout(this.m);this.m=x.setTimeout(function(){b.length&&(this.b=new Tu(b),this.S.insertBefore(this.b.V(this.i),this.S.firstChild),this.b.ka(this),this.b.Ja(this.a),this.b.setPosition(a.viewportX,a.viewportY));}.bind(this),0);};av.prototype.s=function(){this.b&&(this.b.B(),this.b=null);};av.prototype.Ro=function(a){var b=this.c.indexOf(a);-1<b&&(a.ka(null),a.Ja(null),this.c.splice(b,1),this.S.removeChild(a.L()));};
  av.prototype.removeBubble=av.prototype.Ro;av.prototype.Gm=function(){return this.c};av.prototype.getBubbles=av.prototype.Gm;av.prototype.Od=function(a,b){if(this.Ve(a))throw Error("A control with name ["+a+"] is already registered.");b.ka(this);b.Ja(this.a);b.Xa=this.j;b.V(this.i);b.onUnitSystemChange(this.g);this.f[a]=b;};av.prototype.addControl=av.prototype.Od;
  av.prototype.To=function(a){var b=this.Ve(a);if(b)b.N(),b.ka(null),b.Ja(null),Pu(b),delete this.f[a];else throw Error("Control ["+a+"] not found in this UI's controls.");return b};av.prototype.removeControl=av.prototype.To;av.prototype.Ve=function(a){return this.f[a]};av.prototype.getControl=av.prototype.Ve;
  av.prototype.u=function(){for(var a in this.f)ju.hasOwnProperty.call(this.f,a)&&this.f[a].B();this.c.forEach(function(b){b.B();});(a=this.S.parentNode)&&a.removeChild(this.S);F.prototype.u.call(this);this.S=null;};
  function cv(a,b){var c,d;b.unitSystem&&a.Jg(b.unitSystem);(d=b.locale)&&bv(a,d);(c=b.zoom)&&a.Od("zoom",new ev(Da(c)?c:null));(c=b.zoomrectangle)&&a.Od("zoomrectangle",new fv(Da(c)?c:null));(c=b.mapsettings)&&a.Od("mapsettings",new gv(Da(c)?c:null));(c=b.scalebar)&&a.Od("scalebar",new hv(Da(c)?c:null));(c=b.distancemeasurement)&&a.Od("distancemeasurement",new iv(Da(c)?c:null));}
  av.prototype.capture=function(a,b,c,d){var e=this.Ve("scalebar"),f=a.getContext("2d"),g=a.width,h=a.height,k=this.a.m,l=5+(k?k.L().childNodes[1].offsetHeight:0);e&&e.Dc()?e.capture(b,function(m){f.drawImage(m,g-m.width-5*b,h-m.height-l*b);c(a);},d):c(a);};av.prototype.capture=av.prototype.capture;
  av.createDefault=function(a,b,c){var d=a.ic().type;c=new av(a,{unitSystem:Au.METRIC,zoom:{alignment:"right-bottom"},mapsettings:jv(d,b,a.c),scalebar:{alignment:"bottom-right"},locale:c||"en-US"});if(d===Al.P2D){var e=c.Ve("mapsettings");var f=function(){if(e.jc()){var g=jv(d,b,a.c);kv(e,g.baseLayers,g.layers);}};a.addEventListener(a.o.Ff,f);c.zb(function(){a.removeEventListener(a.o.Ff,f);});e.zb(function(){a.removeEventListener(a.o.Ff,f);});}return c};
  function jv(a,b,c){var d=b.raster;b=b.vector.normal;var e;if(a===Al.P2D){a=[{label:"layers.normal",layer:d.normal.map},{label:"layers.satellite",layer:d.satellite.map},{label:"layers.terrain",layer:d.terrain.map}];if(c)for(e in d)if(d[e].map===c){var f=e;break}c=[{label:"layer.incidents",layer:d.normal.trafficincidents},{label:"layer.transit",layer:f&&d[f].transit}];}else a=[{label:"layers.normal",layer:b.map},{label:"layers.satellite",layer:d.satellite.map}],c=[{label:"layer.traffic",layer:b.traffic},
  {label:"layer.incidents",layer:b.trafficincidents}];return {alignment:"bottom-right",baseLayers:a,layers:c}}function lv(a){a=a||{};Z.call(this,"div","H_btn");this.Qc(a.label||" ");this.sc(a.tooltip||"");this.setData(a.data);this.Da(!!a.disabled);this.P(mv.UP,!0);a.onStateChange&&this.addEventListener("statechange",a.onStateChange);this.f=A(this.f,this);this.b=A(this.b,this);}u(lv,Z);t("H.ui.base.Button",lv);lv.prototype.Da=function(a,b){a&&this.qb("H_active");return lv.l.Da.call(this,a,b)};
  lv.prototype.$=function(a){Hu(a,"start",this.f);Hu(a,"end",this.b);Hu(a,"out",this.b);this.Qc(this.Ye(),!0);};lv.prototype.renderInternal=lv.prototype.$;lv.prototype.getState=function(){return this.A};lv.prototype.getState=lv.prototype.getState;lv.prototype.P=function(a,b){a!==this.A&&(this.A=a,a===mv.DOWN?this.La("H_active"):this.qb("H_active"),b||this.dispatchEvent("statechange"));return this};lv.prototype.setState=lv.prototype.P;lv.prototype.Ye=function(){return this.a};
  lv.prototype.getLabel=lv.prototype.Ye;lv.prototype.Qc=function(a,b){if(b||a!==this.a)if(this.a=a,b=this.L())b.innerHTML=a;return this};lv.prototype.setLabel=lv.prototype.Qc;lv.prototype.f=function(a){this.mc()||this.P(mv.DOWN);a.preventDefault();};lv.prototype.b=function(a){this.mc()||this.P(mv.UP);a.preventDefault();};lv.prototype.u=function(){var a=this.L();a&&(Iu(a,"start",this.f),Iu(a,"end",this.b),Iu(a,"out",this.b));Z.prototype.u.call(this);};var mv={UP:"up",DOWN:"down"};lv.State=mv;function nv(a){a=a||{};var b;this.f=!!a.vertical;this.W=a.length||"16em";this.a=Cc(b=a.min)?b:0;this.m=wd(this.a,Cc(b=a.max)?b:100);this.za=E(b=a.step)?1:b;this.o=ov(this,Cc(b=a.value)?b:(this.a+this.m)/2);this.sg=A(this.sg,this);this.og=A(this.og,this);this.ug=A(this.ug,this);this.tg=A(this.tg,this);this.b=a.pointerArea;Z.call(this,"div","H_slider"+(this.f?"":" H_l_horizontal"));}u(nv,Z);t("H.ui.base.Slider",nv);
  nv.prototype.Kg=function(a,b){var c=this.f,d=c?"top":"left";if(!this.i||b)a=Yd(a,this.a,this.m),this.j&&(b=100*(a-this.a)/(this.m-this.a),c=(c?-1:1)*b,this.j.style[d]=c+"%",this.Xa.style[d]=100+c+"%"),this.o=ov(this,a);return this.o};nv.prototype.setValue=nv.prototype.Kg;nv.prototype.Rn=function(){return this.o};nv.prototype.getValue=nv.prototype.Rn;function pv(a){a.s||(Hu(a.L(),"start",a.sg),Hu(a.b,"move",a.og),Hu(a.b,"end",a.ug),Hu(a.b,"out",a.tg),a.s=!0);}
  function qv(a){a.s&&(Iu(a.L(),"start",a.sg),Iu(a.b,"move",a.og),Iu(a.b,"end",a.ug),Iu(a.b,"out",a.tg),a.s=!1);}function ov(a,b){var c=a.za;b=Yd(b,a.a,a.m);return c?a.a+xd((b-a.a)/c)*c:b}function rv(a,b){var c=a.C,d=a.f;a.v||(a.v=c["offset"+(d?"Height":"Width")]);b-=ku(c)[d?"y":"x"];0>b&&(b=0);b=(a.m-a.a)*b/a.v;b=ov(a,d?a.m-b:a.a+b);a.o!==b&&(a.Kg(b,!0),a.dispatchEvent(new Ng(a.Kk.nd,b,a.o)));}function sv(a,b){return (b.touches?b.targetTouches[0]:b)["page"+(a.f?"Y":"X")]}
  function tv(a){var b=!1,c=a.type;-1!==c.indexOf("pointer")||-1!==c.indexOf("touch")?b=!0:C(a,MouseEvent)&&(b=1===a.which||1===a.buttons);return b}function uv(a){var b=a.touches;return b&&1===b.length||C(a,MouseEvent)}n=nv.prototype;
  n.sg=function(a){var b=this.f;if(tv(a)&&uv(a)){var c=sv(this,a);var d=a.target;d===this.j||d.parentElement===this.j?(this.U=c-ku(this.j)[b?"y":"x"]-this.j.offsetWidth/2,this.L().className="H_slider H_slider_active"+(this.f?"":" H_l_horizontal"),this.i=!0):rv(this,c);a.preventDefault();}};n.ug=function(){this.i&&(this.L().className="H_slider "+(this.f?"":" H_l_horizontal"),this.i=!1);};n.tg=function(a){this.i&&a.target===this.b&&(this.i=!1);};
  n.og=function(a){this.i&&uv(a)&&(tv(a)?(rv(this,sv(this,a)-this.U),a.preventDefault()):this.i=!1);};n.Kk={nd:"change"};
  n.$=function(a,b){var c=ou(b,"div","H_slider_cont"),d=ou(b,"div","H_slider_knob_cont"),e=ou(b,"div","H_slider_knob"),f=ou(b,"div","H_slider_knob_halo"),g=ou(b,"div","H_slider_track");b=ou(b,"div","H_slider_track H_slider_track_active");a.appendChild(c);c.appendChild(g);g.appendChild(b);c.appendChild(d);d.appendChild(e);d.appendChild(f);this.C=g;this.Xa=b;this.j=d;this.b||(this.b=a.ownerDocument.body);c.style[this.f?"height":"width"]=this.W;this.Kg(this.o);pv(this);};
  nv.prototype.renderInternal=nv.prototype.$;nv.prototype.u=function(){qv(this);};nv.prototype.Da=function(a,b){a?qv(this):this.C&&pv(this);return Z.prototype.Da.call(this,a,b)};nv.prototype.setDisabled=nv.prototype.Da;var vv={"in":'<svg version="1.1" class="H_icon" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"viewBox="0 0 24 24" enable-background="new 0 0 24 24" xml:space="preserve"><g><path d="m5 10.6h5.6v-5.6h2.8v5.6h5.6v2.8h-5.6v5.6h-2.8v-5.6h-5.6v-2.8z"></path></g></svg>',out:'<svg version="1.1" class="H_icon" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"viewBox="0 0 24 24" enable-background="new 0 0 24 24" xml:space="preserve"><path d="m5 10.6h14v2.8h-14z"/></svg>'};function dv(){Qu.call(this,"div","H_ctl");this.map=null;this.Vc="top-left";}u(dv,Qu);t("H.ui.Control",dv);dv.prototype.Ja=function(a){this.map=a;};dv.prototype.V=function(a){return Qu.prototype.V.call(this,a)};dv.prototype.$=function(a,b){Qu.prototype.renderInternal.call(this,a,b);this.Zb(this.Vc);};dv.prototype.renderInternal=dv.prototype.$;dv.prototype.kf=function(){};dv.prototype.onUnitSystemChange=dv.prototype.kf;dv.prototype.jc=function(){return this.map};dv.prototype.getMap=dv.prototype.jc;
  dv.prototype.Ba=function(){return this.Xa};dv.prototype.getLocalization=dv.prototype.Ba;dv.prototype.Bm=function(){return this.Vc};dv.prototype.getAlignment=dv.prototype.Bm;dv.prototype.Zb=function(a){"string"===typeof a&&mu[a.replace("-","_").toUpperCase()]===a&&(this.Vc=a,this.dispatchEvent("alignmentchange"));return this};dv.prototype.setAlignment=dv.prototype.Zb;function ev(a){a=a||{};var b=a.slider;dv.call(this);this.o=A(this.o,this);this.i=A(this.i,this);this.a=A(this.a,this);b&&(this.v=A(this.v,this),this.C=b,this.Aa=a.sliderSnaps,this.La("H_zoom_slider"));this.j=new lv({label:vv["in"],onStateChange:this.o});this.s=new lv({label:vv.out,onStateChange:this.o});this.La("H_zoom");this.La("H_grp");this.za=!1!==a.fractionalZoom;this.setZoomSpeed(a.zoomSpeed||4);this.Zb(a.alignment||"right-middle");}u(ev,dv);t("H.ui.ZoomControl",ev);
  ev.prototype.Wn=function(){return this.U};ev.prototype.getZoomSpeed=ev.prototype.Wn;ev.prototype.fp=function(a){this.U=a;};ev.prototype.setZoomSpeed=ev.prototype.fp;ev.prototype.Ja=function(a){this.map!==a&&(this.map&&this.map.removeEventListener("mapviewchange",this.i),wv(this));dv.prototype.Ja.apply(this,arguments);this.map&&(this.a(),a.addEventListener("mapviewchange",this.i),a.addEventListener("baselayerchange",this.a));};ev.prototype.setMap=ev.prototype.Ja;
  ev.prototype.u=function(){dv.prototype.u.apply(this,arguments);this.map.removeEventListener("baselayerchange",this.a);wv(this);};ev.prototype.$=function(a,b){dv.prototype.renderInternal.call(this,a,b);this.j.sc(this.Ba().translate("zoom.in"));this.s.sc(this.Ba().translate("zoom.out"));};ev.prototype.renderInternal=ev.prototype.$;ev.prototype.Zb=function(a){var b=this.Vc;dv.prototype.Zb.call(this,a);b!==a&&this.a();return this};ev.prototype.setAlignment=ev.prototype.Zb;
  ev.prototype.i=function(){var a=this.map,b=a.vb(),c=a.$a()-1;a=a.c||a.ic().getCapabilities().lookAt.zoom;this.C&&this.f.Kg(b);this.mc()||(this.j.Da(b+c>=a.max),this.s.Da(b<=a.min));};ev.prototype.Da=function(a,b){ev.l.Da.call(this,a,b);this.i();return this};ev.prototype.setDisabled=ev.prototype.Da;function wv(a){a.removeChild(a.f);a.f=null;a.m&&(a.m.removeEventListener("minchange",a.a),a.m.removeEventListener("maxchange",a.a),a.m=null);}
  ev.prototype.o=function(a){a=a.target;var b=a===this.j?1:-1,c=0<b?Math.ceil:Math.floor,d=this.map,e,f=this;d&&("down"===a.getState()?(d.b.startControl(),d.b.control(0,0,b*this.U,0,0,0)):d.b.endControl(!0,function(g){e=f.za?g.zoom:c(g.zoom);g.zoom=e;}));};ev.prototype.v=function(a){this.map&&this.map.zf(a.newValue);};
  ev.prototype.a=function(){var a=this.Vc,b=this.jc();if(/^top/g.test(a)||/^bottom/g.test(a)){var c=this.s;a=this.j;var d=!1;}else c=this.j,a=this.s,d=!0;this.removeChild(c);this.removeChild(a);this.Ka(c);if(this.C&&b){wv(this);b=d;var e=(d=(c=this.map)&&c.c)||c.ic().getCapabilities().lookAt.zoom;if(this.m=d)d.addEventListener("minchange",this.a),d.addEventListener("maxchange",this.a);this.f=new nv({step:this.Aa?1:0,vertical:b,min:e.min,max:e.max,value:c.vb(),pointerArea:c.L()});this.f.addEventListener(this.f.Kk.nd,
  this.v);this.Ka(this.f);}this.Ka(a);};var xv={btn:'<svg class="H_icon" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill-rule="evenodd"><g transform="translate(3 2)"><path d="m18 13v7h-18v-7h2v5h2v-2h2v2h2v-3h2v3h2v-2h2v2h2v-5z"></path><path d="m2.3.3c.7 0 1.3.1 1.8.4s.9.6 1.1 1 .4.9.4 1.4c0 .5-.1 1-.3 1.4s-.57 1-1 1.6-1.3 1.3-2.3 2.2h3.9l-.2 1.7h-6.16v-1.6c1.1-1.1 2-2 2.5-2.6s.9-1 1-1.4.3-.8.3-1.2c0-.4-.1-.7-.3-.9s-.5-.3-.9-.3c-.3 0-.6 0-.9.2s-.5.4-.8.7l-1.3-1c.4-.5.9-.9 1.4-1.2s1.2-.4 1.8-.4zm14.4 9.7h-2.3l-.2-3.8c 0-.9-.1-1.7-.1-2.4 0-.5 0-1 0-1.5l-1.5 6.7h-2.2l-1.6-6.7c.1.8.1 1.6.1 2.3 0 .5 0 1.1 0 1.7l-.2 3.8h-2.2l.7-9.7h2.9l1.5 6.6 1.4-6.6h2.9z"></path></g></g></svg>',
  point:'<svg height="22" viewBox="0 0 12 12" width="22" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="m6 12c3.3 0 6-2.7 6-6s-2.7-6-6-6-6 2.7-6 6 2.7 6 6 6z" fill="#fff"></path><path d="m6 10c2.2 0 4-1.8 4-4s-1.8-4-4-4-4 1.8-4 4 1.8 4 4 4z" fill="#2ed5c9" stroke="#272c36" stroke-width="2"></path></g></svg>'};function yv(a){lv.call(this,a);this.j=function(b){b.preventDefault();};this.i=A(function(b){this.mc()||this.toggleState();b.preventDefault();},this);}u(yv,lv);t("H.ui.base.PushButton",yv);yv.prototype.$=function(a){Hu(a,"start",this.i);Hu(a,"end",this.j);this.Qc(this.Ye(),!0);};yv.prototype.renderInternal=yv.prototype.$;yv.prototype.mp=function(){var a=mv.DOWN;this.P(this.getState()===a?mv.UP:a);return this};yv.prototype.toggleState=yv.prototype.mp;
  yv.prototype.u=function(){var a=this.L();a&&Iu(a,"start",this.i);lv.prototype.u.call(this);};var Xu,zv=navigator.userAgent,Av=-1<zv.indexOf("Android")&&-1<zv.indexOf("Mozilla/5.0")&&-1<zv.indexOf("AppleWebKit"),Bv=/AppleWebKit\/([\d.]+)/,Cv=null===Bv.exec(zv)?null:parseFloat(Bv.exec(zv)[1]);Xu=Av&&null!==Cv&&537>Cv;var Dv=Function("return this")(),Su=document.createElement("T");function Ev(a,b,c){Qi.call(this,a,{icon:Fv,visibility:c});Gv(this,b);}u(Ev,Qi);function Gv(a,b){a.oo=b;a.S&&(a.S.textContent=b);}var Fv=new Hi(ou(Dv.document,"span","H_dm_label"),{onAttach:function(a,b,c){c.S=a;Gv(c,c.oo);},onDetach:function(a,b,c){delete c.S;}});function Hv(a,b){F.call(this);this.f=a;this.a=new Ev(this.N,"");b.push(this.a);this.b=new Q({objects:b,data:this});this.j=this.j.bind(this);}u(Hv,F);Hv.prototype.g=!1;Hv.prototype.N={lat:0,lng:0};Hv.prototype.Qc=function(a,b){Gv(this.a,a);this.a.da(b);};Hv.prototype.j=function(){this.a.wb(this.c);};function Iv(a,b){b&&(a.nextSibling=b,b.previousSibling=a);}function Jv(a,b,c,d){var e=new L,f=[];Iv(a,this);Iv(this,b);e.Fd(a.Ca());e.Fd(b.Ca());this.i=new nh(e,{style:c.ne});this.s=new nh(e,{style:{strokeColor:"transparent",lineWidth:Math.min(100,this.i.ua().lineWidth+2*(d||5))}});c.c&&(this.o=new nh(e,{style:c.c}),f.push(this.o));f.push(this.i,this.s);Hv.call(this,c,f);this.O=this.v=-1;a=this.b;a.addEventListener("pointermove",this.J,!0,this);a.addEventListener("pointerleave",this.C,!0,this);}u(Jv,Hv);Jv.prototype.Xe=function(){var a=this.i.ba();return a.Qe(0).Za(a.Qe(1))};
  function Kv(a,b,c){var d=a.i.ba();d.Bf(3*c,3,[b.lat,b.lng,0]);a.o&&a.o.da(d);a.s.da(d);a.i.da(d);}Jv.prototype.J=function(a){var b=a.currentPointer;a=this.previousSibling.Ca();var c=this.nextSibling.Ca(),d=this.f.f,e=b.viewportX;b=b.viewportY;if(this.v!==e||this.O!==b)this.v=e,this.O=b,d.da(this.f.g(a,c,{x:e,y:b})),d.wb(!0);};Jv.prototype.C=function(){this.f.f.wb();};Jv.prototype.Ei=function(){this.Qc(this.f.a(this.Xe()),this.i.G().fb());};function Lv(a,b,c){c=b.b(c||0);this.i=new yn(a,{icon:c,zIndex:0});this.i.draggable=!0;Hv.call(this,b,[this.i]);a=this.b;a.addEventListener("dragstart",this.Bo,!0,this);a.addEventListener("drag",this.Co,!0,this);a.addEventListener("dragend",this.Ao,!0,this);}u(Lv,Hv);n=Lv.prototype;n.Lk=0;n.ii={nd:"change"};n.Xe=function(){return this.Lk};n.Ca=function(){return this.i.ba()};
  function Mv(a){var b=0;a.nextSibling&&a.previousSibling&&(a.nextSibling.g||a.previousSibling.g?a.nextSibling.g&&!a.previousSibling.g&&(b=2):b=1);b=a.f.b(b);a.i.Pc(b);}n.Co=function(a){var b=a.currentPointer;a=b.viewportX;b=b.viewportY;if(this.s!==a||this.v!==b)this.s=a,this.v=b,this.i.da(this.f.map.Wa(a-this.o.x,b-this.o.y)),this.dispatchEvent(new rd(this.ii.nd,this));};
  n.Bo=function(a){var b=a.currentPointer,c=b.viewportX;b=b.viewportY;var d=this.f.map.Fa(this.Ca());this.i.ye(1);this.o={x:c-d.x,y:b-d.y};a.stopPropagation();};n.Ao=function(){this.i.ye(0);};n.Ei=function(a){this.Lk=a;this.Qc(this.f.a(a),this.Ca());};function Nv(a,b){this.c=b;this.b=a;this.a={previousSibling:null,nextSibling:null,g:!0};Ov(this,this.a);this.rg=A(this.rg,this);}t("H.ui.distanceMeasurement.Model",Nv);n=Nv.prototype;n.jg=function(){return this.a.nextSibling===this.a};function Pv(a,b){a=a.a;for(var c=a.nextSibling;c!==a;){var d=c,e=c.previousSibling===a?!1:b;(d.c=e)?d.j():(d.m&&x.clearTimeout(d.m),d.m=x.setTimeout(d.j,100));c=c.nextSibling;}}
  function Qv(a,b){var c=b||a.a.nextSibling,d=0,e=0;if(b&&!Rv(a,b))throw new D(a.sf,0,b);c instanceof Lv?d=c.Xe():c instanceof Jv&&(d=c.previousSibling.Xe());for(b=c;b&&b!==a.a;b=b.nextSibling,e++)b.Ei(d),1===e%2&&(d+=b.Xe());}n.Ge=function(a){var b=this.a.previousSibling,c=this.jg();a=new Lv(a,this.c,c?0:2);this.b.ea(a.b);Iv(a,this.a);a.addEventListener(a.ii.nd,this.rg);c?Ov(this,a):(Sv(this,b,a),Mv(b),Qv(this,b));return a};
  n.insertBefore=function(a,b){var c;var d=1;if(b){if(!Rv(this,b))throw new D(this.insertBefore,1,b);if(c=b.previousSibling.g)d=0;a=new Lv(a,this.c,d);a.addEventListener(a.ii.nd,this.rg);this.b.ea(a.b);c?(c=this.a.nextSibling,Sv(this,a,c),Ov(this,a),b=a,Mv(c)):(c=b.previousSibling,b=c.previousSibling,d=c.nextSibling,this.b.Ia(c.b),Sv(this,b,a),Sv(this,a,d));Qv(this,b);}else a=this.Ge(a);return a};n.qa=function(){Ov(this,this.a);this.b.qa();};
  n.sf=function(a){var b=this.a,c=a.previousSibling,d=a.nextSibling;if(!Rv(this,a))throw new D(this.sf,0,a);this.b.Ia(a.b);if(c===b){var e=d;e!==b?(a=e.nextSibling,Ov(this,a),a.Ei(0),Mv(a),Qv(this,a)):Ov(this,this.a);}else d===b?(e=c,a=e.previousSibling,Iv(a,b),Mv(a)):c&&d&&(Sv(this,c.previousSibling,d.nextSibling),this.b.Gd([d.b,c.b]),Qv(this,c.previousSibling));e&&e!==b&&this.b.Ia(e.b);};function Rv(a,b){for(var c=a.a.nextSibling,d=!1;c!==a.a;){if(c===b){d=!0;break}c=c.nextSibling;}return d}
  function Sv(a,b,c){b=new Jv(b,c,a.c);a.b.ea(b.b);}function Ov(a,b){a.a.nextSibling=b;b.previousSibling=a.a;}n.rg=function(a){a=a.target;var b=a.previousSibling,c=a.nextSibling,d=a.Ca();if(!c.g){Kv(c,d,!1);var e=a;}b.g||(Kv(b,d,!0),e=b.previousSibling);Qv(this,e);};function iv(a){a=a||{};var b,c=a.lineStyle;dv.call(this);this.s=new yv({label:xv.btn,onStateChange:A(this.yo,this)});this.Ka(this.s);if(b=a.distanceFormatter)this.Jj=b;c&&(this.wk=c,this.Vk=B);this.Zb(a.alignment||"right-bottom");this.m={};this.m[0]=a.startIcon;this.m[2]=a.endIcon;this.m[1]=a.stopoverIcon;this.m[3]=a.splitIcon;}u(iv,dv);t("H.ui.DistanceMeasurement",iv);n=iv.prototype;n.wk={strokeColor:"rgb(39,44,54)",lineWidth:5};n.Vk={strokeColor:"white",lineWidth:7};
  function Tv(a){var b=a.map,c,d={};a.i||(a.j=new N,a.f=new ml(a.j,{pixelRatio:a.map.$a()}),a.v=c=a.j.kc(),a.v.El(!0),c.addEventListener("dragstart",a.wo,!0,a),c.addEventListener("dragend",a.Af,!0,a),c.addEventListener("pointerenter",a.Af,!0,a),c.addEventListener("pointerleave",a.xo,!0,a),c.addEventListener("tap",a.Lo,!0,a),a.o=Uv(a),d.a=A(a.Jj,a),d.b=A(a.Gk,a),d.g=A(a.Zj,a),d.map=a.map,d.f=a.o,d.ne=a.wk,d.c=a.Vk,a.a=new Nv(a.v,d),a.i=!0);a.o&&a.v.ea(a.o);b.addEventListener("tap",a.Sk,!0,a);b.a.add(a.f);}
  function Vv(a){var b=a.map;a.i&&(b.removeEventListener("tap",a.Sk,!0,a),b.rf(a.f),a.a.qa());}function Uv(a){function b(){var h=c.Db();h={anchor:c.ud().clone().scale(f).floor(),size:new Ki(yd(h.w*f),yd(h.h*f)),hitArea:d};return new Ij(c.ad(),h)}var c=a.Gk(3),d=new Li(Mi.NONE,[]),e,f=c===a.C?.5:1;if(1===c.getState())var g=b();else g=new Ij("<svg/>",{hitArea:d}),c.addEventListener("statechange",function(){1===c.getState()&&e.Pc(b());});return e=new yn(a.map.fb(),{visibility:!1,icon:g})}
  n.Jj=function(a){var b="m",c=0;"metric"===this.U?1E3<=a&&(a/=1E3,b="km",c=1):(a/=.3048,b="ft",5280<=a&&(a/=5280,b="mi",c=1));return a.toFixed(c)+" "+this.Ba().translate("scale."+b)};n.Zj=function(a,b,c){a=this.map.Fa(a);b=this.map.Fa(b);c=(new I(c.x,c.y)).Yj(a,b);return this.map.Wa(c.x,c.y)};
  n.$=function(a,b){var c=22*(this.map.ic().type===Vj.P2D?this.map.$a():1),d=c/2;dv.prototype.renderInternal.call(this,a,b);this.U=Au.METRIC;this.C=new Ij(xv.point,{anchor:{x:d,y:d},size:{w:c,h:c},hitArea:new Li(Mi.CIRCLE,[d,d,d])});this.s.sc(this.Ba().translate("distance.measurement"));};iv.prototype.renderInternal=iv.prototype.$;n=iv.prototype;n.Gk=function(a){return this.m[a]||this.C};n.Af=function(){Pv(this.a,!0);};n.wo=function(){Pv(this.a);};n.xo=function(a){"touch"!==a.currentPointer.type&&Pv(this.a);};
  n.Lo=function(a){var b=a.currentPointer;var c=a.target.Ha;var d;c&&(c=c.getData())instanceof Hv&&(d=c);c=d;a=a.originalEvent;a=a.metaKey||a.altKey;c&&(a&&c instanceof Lv?this.a.sf(c):c instanceof Jv&&(a=c.previousSibling.Ca(),d=c.nextSibling.Ca(),b={x:b.viewportX,y:b.viewportY},this.a.insertBefore(this.Zj(a,d,b),c.nextSibling),this.o.wb()),this.Af());};
  n.Sk=function(a){var b=a.currentPointer;a=a.target;a!==this.map&&a.getProvider&&a.getProvider()===this.j||(this.a.Ge(this.map.Wa(b.viewportX,b.viewportY)),this.o.wb(),this.Af());};n.yo=function(a){"down"===a.target.getState()?Tv(this):Vv(this);};n.kf=function(a){this.U=a;this.i&&(Qv(this.a),this.Af());};iv.prototype.onUnitSystemChange=iv.prototype.kf;iv.prototype.u=function(){Vv(this);this.i&&(this.j.B(),this.f.B());iv.l.u.call(this);};
  iv.prototype.Ja=function(a){a?this.s.getState()===mv.DOWN&&(this.map=a,Tv(this)):(Vv(this),this.i=!1);dv.prototype.Ja.apply(this,arguments);};iv.prototype.setMap=iv.prototype.Ja;function Wv(){this.A=Xv.CLOSED;Qu.call(this,"div","H_overlay");}u(Wv,Qu);t("H.ui.base.OverlayPanel",Wv);Wv.prototype.P=function(a,b){if(a!==this.A||b)this.A=a,a===Xv.OPEN?this.La("H_open"):this.qb("H_open");return this};Wv.prototype.setState=Wv.prototype.P;Wv.prototype.getState=function(){return this.A};Wv.prototype.getState=Wv.prototype.getState;
  Wv.prototype.$k=function(a){var b=a.Vc;a=a.L();var c=this.L(),d=c.style;this.qb("H_top");this.qb("H_middle");this.qb("H_bottom");this.qb("H_left");this.qb("H_center");this.qb("H_right");d.bottom=d.top=d.left=d.right=d.margin="";if(/top/g.test(b)){this.La("H_top");d.top="0";d.margin="0 12px";var e=-1;}else /bottom/g.test(b)?(this.La("H_bottom"),d.bottom="0",d.margin="0 12px",e=1):(this.La("H_middle"),d.top="50%",d.margin="0 12px",d.marginTop=-Math.round(.5*
  c.offsetHeight)+"px",e=0);/left/g.test(b)?(this.La("H_left"),d.left=a.offsetWidth+"px",d.marginLeft="12px"):/right/g.test(b)?(this.La("H_right"),d.right=a.offsetWidth+"px",d.marginRight="12px"):(this.La("H_center"),d.left="50%",0>e?(d.top=a.offsetHeight+"px",d.marginTop="12px"):0<e&&(d.bottom=a.offsetHeight+"px",d.marginBottom="12px"),d.marginLeft=-Math.round(.5*c.offsetWidth)+"px",a.appendChild(c));};Wv.prototype.pointToControl=Wv.prototype.$k;var Xv={OPEN:"open",CLOSED:"closed"};
  Wv.State=Xv;function Yv(a){a=a||{};Qu.call(this,"div","H_rdo");this.i=new Z("div","H_rdo_title");this.a=new Qu("div","H_rdo_buttons");this.Ka(this.i);this.Ka(this.a);this.j=A(function(b){b.target.getState()===mv.DOWN?(this.ql(b.target,!0),this.dispatchEvent(Zv)):b.target.P(mv.DOWN,!0);},this);this.addEventListener("statechange",this.j);this.Ri(a.title||"");a.onActiveButtonChange&&this.addEventListener(Zv,a.onActiveButtonChange);a.buttonsOptions&&a.buttonsOptions.forEach(function(b){this.Vg(new yv(b));},
  this);}u(Yv,Qu);t("H.ui.base.RadioGroup",Yv);var Zv="activebuttonchange";Yv.prototype.$=function(a,b){Qu.prototype.renderInternal.call(this,a,b);this.Ri(this.f,!0);};Yv.prototype.renderInternal=Yv.prototype.$;Yv.prototype.qa=function(){this.a.qa();};Yv.prototype.Ri=function(a,b){if(a!==this.f||b)this.f=a,this.i.L()&&(this.i.L().innerHTML=this.f);return this};Yv.prototype.setTitle=Yv.prototype.Ri;Yv.prototype.Nn=function(){return this.f};Yv.prototype.getTitle=Yv.prototype.Nn;
  Yv.prototype.Vg=function(a){if(!(a instanceof yv))throw Error("PushButton expected");a.ka(this);this.a.Ka(a);return this};Yv.prototype.addButton=Yv.prototype.Vg;Yv.prototype.So=function(a){this.a.removeChild(a);a.ka(null);return this};Yv.prototype.removeButton=Yv.prototype.So;Yv.prototype.Yf=function(){return this.a.vh()};Yv.prototype.getButtons=Yv.prototype.Yf;Yv.prototype.ql=function(a,b){for(var c=this.Yf(),d=c.length;d--;)c[d].P(c[d]===a?mv.DOWN:mv.UP,b);};Yv.prototype.setActiveButton=Yv.prototype.ql;
  Yv.prototype.u=function(){this.removeEventListener("statechange",this.j);this.qa();Qu.prototype.u.call(this);};function gv(a){a=a||{};dv.call(this);this.i=new Wv;new Yv;this.a=this.a.bind(this);this.o=this.o.bind(this);this.s=this.s.bind(this);this.Zb(a.alignment||"bottom-right");kv(this,a.baseLayers,a.layers);}u(gv,dv);t("H.ui.MapSettingsControl",gv);function kv(a,b,c){var d=a.jc();a.f&&a.f.forEach(function(e){var f=e.layer;e=f&&iu(c,function(g){return g.layer===f});f&&!e&&d.rf(f);});a.m=yc(b)?b:[];a.f=yc(c)?c:[];a.j&&(a.j.qa(),a.v.qa(),$v(a));}
  gv.prototype.fa=function(){var a=this.jc();a&&(a.addEventListener("tap",this.o),a=a.a,a.addEventListener("add",this.a),a.addEventListener("remove",this.a),a.addEventListener("set",this.a));};gv.prototype.N=function(){var a=this.jc();a&&(a.removeEventListener("tap",this.o),a=a.a,a.removeEventListener("add",this.a),a.removeEventListener("remove",this.a),a.removeEventListener("set",this.a));};
  gv.prototype.$=function(a,b){var c=this.Ba().translate("layers.choose");dv.prototype.renderInternal.call(this,a,b);this.fa();this.C=new yv({tooltip:c,label:'<svg xmlns="http://www.w3.org/2000/svg" class="H_icon" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M6.7,14.6 L4.5,16 L12,20.6 L19.5,16 L17.3,14.6 L19.1,13.5 L23,16 L12,23 L1,16 L4.9,13.5 L6.7,14.6 Z M12,2 L23,9 L12,16 L1,9 L12,2 Z"></path></svg>',onStateChange:A(function(d){d.target.getState()===mv.DOWN?(this.i.P(Xv.OPEN),this.i.$k(this)):
  this.i.P(Xv.CLOSED);},this)});this.j=new Yv({title:c,onActiveButtonChange:function(){a:{var d=this.j.Yf();for(var e=d.length;e--;)if(d[e].getState()===mv.DOWN){d=d[e];break a}d=null;}d=d.getData();this.map.Kd(this.m[d].layer);this.s();}.bind(this)});this.v=new Qu("div","H_grp");this.U=new Z("div","H_separator");this.Ka(this.C);this.Ka(this.i);this.i.Ka(this.j);this.i.Ka(this.U);this.i.Ka(this.v);$v(this);};gv.prototype.renderInternal=gv.prototype.$;
  function $v(a){var b=a.Ba();a.m.forEach(function(c,d){this.j.Vg(new yv({label:aw(b,c.label),data:d,disabled:!c.layer}));},a);a.f.forEach(function(c,d){this.v.Ka(new yv({label:aw(b,c.label),onStateChange:this.za.bind(this,c.layer),data:d,disabled:!c.layer}));},a);a.U.wb(!(!a.f.length||!a.m.length));x.setTimeout(function(){this.map&&(this.a(),this.C.Da(!(this.m&&this.m.length||this.f&&this.f.length)));}.bind(a));}
  gv.prototype.a=function(){var a=this.map.c,b=this.map.a;this.m.forEach(function(c,d){this.j.Yf()[d].P(mv[c.layer===a?"DOWN":"UP"],!0);},this);this.f.forEach(function(c,d){d=this.v.vh()[d];c.layer?d.P(mv[-1!==b.indexOf(c.layer)?"DOWN":"UP"],!0):d.Da(!0);},this);};gv.prototype.za=function(a,b){b.target.getState()===mv.DOWN?this.map.Xg(a):this.map.rf(a);this.s();};
  gv.prototype.s=function(){var a;if(a=bw(this)){var b=a.Qg;b.ga().ua().hf(a.ga().ua().vd());this.map.rf(a);a.B();delete a.Qg;}cw(this)&&dw(this,this.map.c);};
  function dw(a,b){var c,d,e={},f=b.ga(),g=window.H.service&&window.H.service.omv.Provider;if(g&&b.ga()instanceof g&&f.ua().Pe){var h=f.ua();var k=function(){var l=ew.ground.filter(function(p){return !!h.Eh("layers."+p)}),m=ew.water.filter(function(p){return !!h.Eh("layers."+p)});l.concat(m).length&&(vh(e,h.Pe(l)),vh(e,h.Pe(m,!1,!0)),delete e.global,c=new Th(e,h.hc()),d=f.o.qd(c),d.Qg=b,this.map.Xg(d));h.removeEventListener(Sh.CHANGE,k);}.bind(a);h.getState()!==Qh.READY?h.addEventListener(Sh.CHANGE,
  k):k();}}function bw(a){return iu(a.map.a.Na(),function(b){return !!b.Qg})}function cw(a){a=a.map.a.Na();var b=window.H.service&&window.H.service.traffic.flow.Provider;return !!b&&a.some(function(c){return c.ga()instanceof b})}var ew={water:["water.water-labels"],ground:"road_labels continent_label island_label roads.shields roads.directions truck-restriction.signs places landuse.label".split(" ")};function aw(a,b){return /^layers?/.test(b)&&a.Kh(b)?a.translate(b):b}gv.prototype.o=function(){this.C.P(mv.UP);};
  gv.prototype.u=function(){gv.l.u.call(this);this.N();};function fv(a){a=a||{};dv.call(this);this.f=new yv({label:'<svg xmlns="http://www.w3.org/2000/svg" class="H_icon" viewBox="0 0 24 24"><g transform="translate(1 3)"><path fill-rule="nonzero" d="M5,0 L5,2 L2,2 L2,16 L5,16 L5,18 L2,18 C0.9,18 0,17 0,15.75 L0,2.25 C0,1 0.9,0 2,0 L5,0 Z M17,0 L20,0 C21.1,0 22,1 22,2.25 L22,15.75 C22,17 21.1,18 20,18 L17,18 L17,16 L20,16 L20,2 L17,2 L17,0 Z"></path><rect width="10" height="2" x="6" y="8"></rect><rect width="2" height="10" x="10" y="4"></rect></g></svg>',
  onStateChange:A(this.zo,this)});this.Ka(this.f);this.Zb(a.alignment||"right-bottom");}u(fv,dv);t("H.ui.ZoomRectangle",fv);n=fv.prototype;
  n.zo=function(a){var b=this.map,c=b.ya.element;a.target.getState()===mv.DOWN?(b.addEventListener("dragstart",this.Ik,!0,this),b.addEventListener("drag",this.Jk,!0,this),b.addEventListener("dragend",this.Hk,!0,this),a=c.ownerDocument.createElement("div"),a.className="H_zoom_lasso",c.appendChild(a),this.a=a):(b.removeEventListener("dragstart",this.Ik,!0,this),b.removeEventListener("drag",this.Jk,!0,this),b.removeEventListener("dragend",this.Hk,!0,this),c.removeChild(this.a));};
  n.Ik=function(a){var b=this.a.style,c=a.currentPointer,d=c.viewportX;c=c.viewportY;a.target===this.map&&(a.stopPropagation(),b.width="0px",b.height="0px",b.top=c+"px",b.left=d+"px",b.display="block",this.j=c,this.i=d);};n.Jk=function(a){var b=a.currentPointer,c=b.viewportX,d=b.viewportY;b=this.i;var e=this.j,f=this.a.style;a.target===this.map&&(a.stopPropagation(),a=c-b,c=d-e,f.left=b+(0>a?a:0)+"px",f.top=e+(0>c?c:0)+"px",f.width=Math.abs(a)+"px",f.height=Math.abs(c)+"px");};
  n.Hk=function(a){var b=this.map,c=a.currentPointer;a.target===this.map&&(a.stopPropagation(),this.a.style.display="none",b.b.$b({bounds:eg([b.Wa(this.i,this.j),b.Wa(c.viewportX,c.viewportY)])},!0));};n.$=function(a,b){dv.prototype.renderInternal.call(this,a,b);this.f.sc(this.Ba().translate("zoom.rectangle"));};fv.prototype.renderInternal=fv.prototype.$;function fw(a,b){b=b||{};if(!(a&&a instanceof ll))throw Error("Base layer is mandatory for overview UI element");dv.call(this);this.f=new yv({label:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="H_icon"><g fill-rule="evenodd" transform="translate(2 2)"><rect width="9" height="9" x="10" y="10"/><rect class="H_icon_stroke" width="18" height="18" x="1" y="1" fill="none" stroke="#000" stroke-width="2" rx="2"/></g></svg>',onStateChange:A(this.i,this)});this.Ka(this.f);this.a=
  new gw(a,b.zoomDelta,b.scaleX,b.scaleY);this.Zb(b.alignment||"right-bottom");this.Ka(this.a);}u(fw,dv);t("H.ui.Overview",fw);fw.prototype.Kd=function(a){this.a.Kd(a);return this};fw.prototype.setBaseLayer=fw.prototype.Kd;fw.prototype.i=function(a){a.target.getState()===mv.DOWN?(a=this.a,hw(a,!0),a.Vi(),a.La("H_overview_active"),a.a.addEventListener("mapviewchange",a.Vi,!1,a)):iw(this.a);};
  fw.prototype.$=function(a,b){dv.prototype.renderInternal.call(this,a,b);this.f.L().style["float"]=this.Vc.match("right")?"right":"left";this.a.Ja(this.map);this.f.sc(this.Ba().translate("minimap"));};fw.prototype.renderInternal=fw.prototype.$;fw.prototype.u=function(){this.a.B();Z.prototype.u.call(this);};function gw(a,b,c,d){this.m=a;"number"===typeof b&&(this.Sl=b);"number"===typeof c&&(this.Wk=c);"number"===typeof d&&(this.Xk=d);Qu.call(this,"div","H_overview");}u(gw,dv);gw.prototype.Kd=function(a){this.f.Kd(a);};
  gw.prototype.$=function(a,b){b=ou(b,"div","H_overview_map");yu(a,b);this.i=b;};gw.prototype.renderInternal=gw.prototype.$;n=gw.prototype;n.Sl=3;n.Wk=5;n.Xk=5;n.Ja=function(a){this.a=a;this.f=new T(this.i,this.m,{pixelRatio:this.a.$a(),engineType:this.a.ic().type});this.f.m.L().style.display="none";this.o=this.f.b;this.j=this.a.b;};function iw(a){!a.Nd&&hw(a);a.qb("H_overview_active");a.a.removeEventListener("mapviewchange",a.Vi,!1,a);}
  n.Vi=function(a){a&&a.modifiers&a.SIZE&&hw(this,!0);a=this.j.mb();a.zoom=a.zoom-this.Sl;this.o.$b(a);};function hw(a,b){var c=a.a.ya.element,d=a.L().style,e=c.offsetWidth/a.Wk/10;c=c.offsetHeight/a.Xk/10;var f=a.i.style;b?(d.width=e+"em",d.height=c+"em",f.width=e+"em",f.height=c+"em"):d.width=d.height="0em";a.f.ya.resize();}n.u=function(){gw.l.u.call(this);iw(this);this.f.B();this.f=this.o=this.j=this.a=this.m=this.i=null;};function hv(a){a=a||{};dv.call(this);this.La("H_scalebar");this.Zb(a.alignment||"right-bottom");this.v=150;this.update=A(this.update,this);this.m=this.f=this.a=this.j=null;}u(hv,dv);t("H.ui.ScaleBar",hv);
  hv.prototype.$=function(a,b){dv.prototype.renderInternal.call(this,a,b);a.innerHTML='<svg height="12" version="1.1" xmlns="http://www.w3.org/2000/svg"><polyline style="fill:none; stroke:white; stroke-width:4" points="2,2 2,10 98,10 98,2"/><polyline style="fill:none; stroke:black; stroke-width:2" points="2,2 2,10 98,10 98,2"/></svg><div style="padding: 0 0 0 10px"></div>';a.style.direction="ltr";this.j=a.firstChild;b=this.j.childNodes;this.a=b[0];this.f=b[1];this.m=a.lastChild;this.o=Au.METRIC;this.s=
  A(function(c){this.mc()||(this.dispatchEvent("toggleunitsystem"),c.preventDefault());},this);this.i=A(function(c){c.preventDefault();},this);Hu(a,"start",this.i);Hu(a,"end",this.s);this.sc(this.Ba().translate("scale.switchToImperial"));this.update();};hv.prototype.renderInternal=hv.prototype.$;hv.prototype.Ja=function(a){this.map&&this.map.removeEventListener("mapviewchange",this.update);a&&a.addEventListener("mapviewchange",this.update);dv.prototype.Ja.apply(this,arguments);};hv.prototype.setMap=hv.prototype.Ja;
  hv.prototype.capture=function(a,b,c){var d=this.L();var e=d.ownerDocument,f=e.createElement("canvas"),g=f.getContext("2d"),h=e.createElementNS("http://www.w3.org/2000/svg","svg"),k=e.createElementNS("http://www.w3.org/2000/svg","foreignObject"),l=jf(d,e,!1);e=parseFloat(d.offsetWidth)+1;var m=parseFloat(d.offsetHeight),p=e*a;a*=m;f.width=p;f.height=a;h.setAttribute("xmlns","http://www.w3.org/2000/svg");h.setAttribute("width",p);h.setAttribute("height",a);h.setAttribute("viewBox","0 0 "+e+" "+m);k.setAttribute("width",
  "100%");k.setAttribute("height","100%");h.appendChild(k);l.setAttribute("width","100%");l.setAttribute("height","100%");l.setAttribute("xmlns","http://www.w3.org/1999/xhtml");var q=window.getComputedStyle(d);"box-shadow display align-items font font-family font-size height text-shadow direction".split(" ").forEach(function(r){l.style.setProperty(r,q.getPropertyValue(r));});k.appendChild(l);d=$e(h.outerHTML);(new rf("image",d)).then(function(r){g.drawImage(r,0,0);b(f);},c);};hv.prototype.capture=hv.prototype.capture;
  hv.prototype.kf=function(a){this.o=a;this.sc("imperial"===a?this.Ba().translate("scale.switchToMetric"):this.Ba().translate("scale.switchToImperial"));this.update();};hv.prototype.onUnitSystemChange=hv.prototype.kf;
  hv.prototype.update=function(){if(this.L()){var a=this.v;var b=0;var c=this.map;var d;if(c){var e=Math.round(.5*c.ya.width);var f=Math.round(.5*c.ya.height);if(d=c.Wa(e,f))b=Zf(d),c=Zf(c.Wa(e+1,f)),b=100*b.Za(c);}if(c=b)this.o===Au.IMPERIAL?c<jw?(f=c/kw,e=this.Ba().translate("scale.ft")):(f=c/jw,e=this.Ba().translate("scale.mi")):1E3>c?(f=c,e=this.Ba().translate("scale.m")):(f=c/1E3,e=this.Ba().translate("scale.km")),c=Math.pow(10,Math.floor(Math.log(f)/Math.LN10)),f=c/f*100,f<a/5?(c*=5,f*=5):f<a/
  2?(c*=2,f*=2):f>a&&(c/=2,f/=2),f=Math.round(f),this.j.setAttribute("width",f),this.m.textContent=c+" "+e,this.a.points.getItem(2).x=this.f.points.getItem(2).x=this.a.points.getItem(3).x=this.f.points.getItem(3).x=f-2;}};var jw=1609.344,kw=.3048006;t("H.ui.buildInfo",function(){return Ef("H-ui","1.30.6","e7e9557")});

  H.__bootstrap__="var l,aa=\"function\"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)},ca=\"undefined\"!=typeof window&&window===this?this:\"undefined\"!=typeof global&&null!=global?global:this;function da(a,b){if(b){var c=ca;a=a.split(\".\");for(var d=0;d<a.length-1;d++){var e=a[d];e in c||(c[e]={});c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&aa(c,a,{configurable:!0,writable:!0,value:b})}}var fa;\nif(\"function\"==typeof Object.setPrototypeOf)fa=Object.setPrototypeOf;else{var ha;a:{var ia={hb:!0},ka={};try{ka.__proto__=ia;ha=ka.hb;break a}catch(a){}ha=!1}fa=ha?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+\" is not extensible\");return a}:null}var la=fa;da(\"Object.setPrototypeOf\",function(a){return a||la});var p=this||self;\nfunction ma(a,b,c){a=a.split(\".\");c=c||p;a[0]in c||\"undefined\"==typeof c.execScript||c.execScript(\"var \"+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===b?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b}function na(){}\nfunction oa(a){var b=typeof a;if(\"object\"==b)if(a){if(a instanceof Array)return\"array\";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if(\"[object Window]\"==c)return\"object\";if(\"[object Array]\"==c||\"number\"==typeof a.length&&\"undefined\"!=typeof a.splice&&\"undefined\"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable(\"splice\"))return\"array\";if(\"[object Function]\"==c||\"undefined\"!=typeof a.call&&\"undefined\"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable(\"call\"))return\"function\"}else return\"null\";\nelse if(\"function\"==b&&\"undefined\"==typeof a.call)return\"object\";return b}function r(a){return\"function\"==oa(a)}function qa(a){var b=typeof a;return\"object\"==b&&null!=a||\"function\"==b}var ra=\"closure_uid_\"+(1E9*Math.random()>>>0),sa=0;function ta(a,b,c){return a.call.apply(a.bind,arguments)}\nfunction ua(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}function va(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf(\"native code\")?va=ta:va=ua;return va.apply(null,arguments)}\nfunction wa(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var d=c.slice();d.push.apply(d,arguments);return a.apply(this,d)}}function t(a,b){ma(a,b,void 0)}function xa(a,b){function c(){}c.prototype=b.prototype;a.W=b.prototype;a.prototype=new c;a.prototype.constructor=a};function x(){}t(\"H.util.ICache\",x);x.prototype.add=function(){};x.prototype.add=x.prototype.add;x.prototype.get=function(){};x.prototype.get=x.prototype.get;x.prototype.sa=function(){};x.prototype.drop=x.prototype.sa;x.prototype.forEach=function(){};x.prototype.forEach=x.prototype.forEach;x.prototype.U=function(){};x.prototype.removeAll=x.prototype.U;x.prototype.ca=function(){};x.prototype.registerOnDrop=x.prototype.ca;x.prototype.qa=function(){};x.prototype.deRegisterOnDrop=x.prototype.qa;function ya(){var a=za,b;for(b in a)return!1;return!0}function Aa(a){var b={},c;for(c in a)b[c]=a[c];return b}var Ba=\"constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf\".split(\" \");function Ca(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<Ba.length;f++)c=Ba[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}};var y=this;function Da(a){if(Error.captureStackTrace)Error.captureStackTrace(this,Da);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))}xa(Da,Error);Da.prototype.name=\"CustomError\";var Ea=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if(\"string\"===typeof a)return\"string\"!==typeof b||1!=b.length?-1:a.indexOf(b,0);for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1};var Fa=va,Ga=String,Ha=y.Object.freeze||function(a){return a},z=self.eval(\"undefined\"),Ia=self.eval(\"null\");function La(a){return Ga(a).split(\",\"!==z?\",\":\" \")}var Ma=\"prototype constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf\".split(\" \");function Na(a,b,c,d){if(!(b=a instanceof b)&&c)throw new A(c,d,void 0!==z?void 0:a);return b}function Oa(a,b,c,d){var e;if(!(e=\"Array\"===Pa(a))&&b)throw new A(b,c,d!==z?d:a);return e}\nt(\"H.lang.isArray\",function(a,b,c,d){return Oa(a,b,c,d)});function Qa(a){return\"string\"===typeof a}t(\"H.lang.isString\",Qa);var Ra=isNaN;function Sa(a){return a===+a}t(\"H.lang.isNumber\",Sa);t(\"H.lang.isInteger\",Number.isInteger?Number.isInteger:function(a){return\"number\"===typeof a&&0===a%1});function Pa(a){var b=Object[Ma[0]][Ma[6]].call(a).match(/^\\[object (\\w+)\\]$/);return b?b[1]:typeof a}var Ta=[];0>Ta.indexOf(Ta)&&Ta.push(Ta);\nfunction Ua(a,b,c,d){var e=\"\",f=2>arguments.length,g;f&&(b={H:y.H},c=\"\",d=Ta.slice());Va(b,!0,function(h,k){try{if(g=h[k],k=Wa(h,g),!(qa(g)&&g.window===g&&g.self===g||qa(g)&&0<g.nodeType&&r(g.cloneNode))&&qa(g)){if(g===a)return e=c+\".\"+k,!0;if(0>d.indexOf(g)&&(d.push(g),e=Ua(a,g,c+\".\"+k,d)))return!0}}catch(m){}});f&&(e=e?e.substr(1).replace(\".\"+Ma[0]+\".\",\"#\"):\"~\"+(r(a)?Xa(a)+\"()\":Pa(a)));return e}\nfunction Wa(a,b){var c=[];Va(a,!1,function(d,e){d[e]===b&&c.push(e)});return c.sort(Ya)[0]}function Ya(a,b){return b.length-a.length}var Za=Object[Ma[0]][Ma[2]];function Va(a,b,c){var d;if(a){for(e in a)if((!b||Za.call(a,e))&&c(a,e,!0))return;for(d=Ma.length;d--;){var e=Ma[d];if((!b||Za.call(a,e))&&c(a,e,!1))break}}}function Xa(a){return(a=/^\\s*function ([^\\( ]+)/.exec(a))?a[1]:\"anonymous\"}function $a(a,b,c){c[b]=\"#\"+b};function B(a,b,c){this.g=[];b&&this.ca(b);if(c&&!r(c))throw new A(B,2,c);this.b=0;this.filter=c;this.a={};this.f=this.c=null;this.Ia(a)}t(\"H.util.Cache\",B);B.prototype.add=function(a,b,c){var d,e;c=+c;if(!Sa(c)||0>c)throw new A(this.add,2,c);a=String(a);if(e=this.filter?this.filter(a,b,c):!0)(d=this.a[a])?(d.data!==b&&db(this,d),this.b+=c-d.size,d.size=c,d.data=b,eb(this,d)):this.a[a]=fb(this,{id:a,data:b,size:c,A:null,F:null},this.c),gb(this);return e};B.prototype.add=B.prototype.add;\nB.prototype.ca=function(a){if(!r(a))throw new A(this.ca,0,a);this.g.push(a)};B.prototype.registerOnDrop=B.prototype.ca;B.prototype.qa=function(a){this.g=this.g.filter(function(b){return b!==a})};B.prototype.deRegisterOnDrop=B.prototype.qa;B.prototype.get=function(a,b){return(a=b?this.a[a]:eb(this,this.a[a]))&&a.data};B.prototype.get=B.prototype.get;B.prototype.sa=function(a){var b;(b=this.a[a])&&hb(this,b,!0)};B.prototype.drop=B.prototype.sa;\nB.prototype.forEach=function(a,b,c){var d;for(d in this.a){var e=this.a[d];(c?c(d,e.data,e.size):1)&&a.call(b,d,e.data,e.size)}};B.prototype.forEach=B.prototype.forEach;B.prototype.U=function(a){var b;for(b in this.a){var c=this.a[b];(a?a(b,c.data,c.size):1)&&hb(this,this.a[b],!0)}};B.prototype.removeAll=B.prototype.U;B.prototype.Ia=function(a){if(!(0<+a))throw new A(B.prototype.Ia,0,a);this.o=+a;gb(this);return this};B.prototype.setMaxSize=B.prototype.Ia;B.prototype.Bb=function(){return this.o};\nB.prototype.getMaxSize=B.prototype.Bb;B.prototype.xb=function(){return this.b};B.prototype.getCurrentSize=B.prototype.xb;function eb(a,b){b&&(a.c=fb(a,b,a.c));return b}function gb(a){for(;a.b>a.o&&a.f;)hb(a,a.f,!0)}function fb(a,b,c){if(c!==b){(b.A||b.F)&&hb(a,b,!1);if(b.A=c)b.F=c.F,c.F=b;b.F||(a.c=b);b.A||(a.f=b);a.b+=b.size}return b}function hb(a,b,c){var d=b.F,e=b.A;if(d||e||b==a.c&&b==a.f)d?d.A=e:a.c=e,e?e.F=d:a.f=d,a.b-=b.size,c&&(delete a.a[b.id],db(a,b));b.A=b.F=null}\nfunction db(a,b){for(var c=a.g.length;c--;)a.g[c].call(a,b.id,b.data,b.size)};function C(){}t(\"H.service.extension.dataView.ITable\",C);C.prototype.ya=function(){};C.prototype.getMeta=C.prototype.ya;C.prototype.za=function(){};C.prototype.getRowCount=C.prototype.za;C.prototype.ja=function(){};C.prototype.getRow=C.prototype.ja;C.prototype.D=function(){};C.prototype.getColumnNames=C.prototype.D;C.prototype.xa=function(){};C.prototype.getColumn=C.prototype.xa;C.prototype.s=function(){};C.prototype.getCell=C.prototype.s;C.prototype.concat=function(){};C.prototype.concat=C.prototype.concat;function ib(){}t(\"H.service.extension.dataView.IRow\",ib);ib.prototype.D=function(){};ib.prototype.getColumnNames=ib.prototype.D;ib.prototype.s=function(){};ib.prototype.getCell=ib.prototype.s;ib.prototype.Aa=function(){};ib.prototype.getTable=ib.prototype.Aa;function jb(a,b){this.a=a;this.b=b}t(\"H.service.extension.dataView.ObjRow\",jb);jb.prototype.D=function(){return this.a.D()};jb.prototype.getColumnNames=jb.prototype.D;jb.prototype.s=function(a){return this.a.s(this.b,a)};jb.prototype.getCell=jb.prototype.s;jb.prototype.Aa=function(){return this.a};jb.prototype.getTable=jb.prototype.Aa;function kb(){}t(\"H.service.extension.dataView.IColumn\",kb);kb.prototype.s=function(){};kb.prototype.getCell=kb.prototype.s;function lb(a,b){this.b=a;this.a=b}t(\"H.service.extension.dataView.ObjColumn\",lb);lb.prototype.s=function(a){return this.b.s(a,this.a)};lb.prototype.getCell=lb.prototype.s;function A(a,b,c){var d=arguments.length;b=b!==z?+b:b;if(b!==z){var e=(e=/^.*?\\(([^\\)]+)/.exec((\"\"+a).replace(/(\\/\\*([\\s\\S]*?)\\*\\/)|(\\/\\/(.*)$)/gm,\"\")))?La(e[1].replace(/\\s+/g,\"\")):[];e.forEach($a);e=e[b]||\"#\"+b}var f=a?Ua(a):\"\";d=2<d?Ga(c):\"\";if(e||d)f+=\" (Argument \"+(e||\"\")+(d?\" \"+d:\"\")+\")\";d=Error(f);Object.setPrototypeOf(d,A.prototype);return d}xa(A,Error);t(\"H.lang.InvalidArgumentError\",A);A.prototype.name=\"InvalidArgumentError\";function D(a,b,c){var d;b=b||(a&&a.length?Object.keys(a[0]):z);this.G=a;if(b)for(this.O=b,this.pa=a=Object.create(Ia,void 0),d=b.length;d--;)a[b[d]]=!0;c!==z&&(this.Ca=c)}t(\"H.service.extension.dataView.ObjTable\",D);l=D.prototype;l.Ca=z;l.G=z;l.O=z;l.pa=z;l.ya=function(){return this.Ca};D.prototype.getMeta=D.prototype.ya;D.prototype.za=function(){return this.G?this.G.length:0};D.prototype.getRowCount=D.prototype.za;D.prototype.ja=function(a){var b=this.G;return b&&b[a]?new jb(this,a):z};\nD.prototype.getRow=D.prototype.ja;D.prototype.D=function(){return this.O||mb};D.prototype.getColumnNames=D.prototype.D;D.prototype.xa=function(a){return this.pa[a]?new lb(this,a):z};D.prototype.getColumn=D.prototype.xa;D.prototype.s=function(a,b){var c=this.G;return(a=c&&this.pa[b]&&c[a])&&a[b]};D.prototype.getCell=D.prototype.s;\nD.prototype.concat=function(){var a=arguments.length,b,c=this.O,d=\"\"+this.O,e=(this.G||[]).slice();for(b=0;b<a;b++){var f=arguments[b];if(!(f instanceof D))throw new A(this.concat,b);if(f.G){if(c&&\"\"+f.O!==d)throw new A(this.concat,b,\"Incompatible columns!\");e=e.concat(f.G)}}return new D(e,this.O,this.Ca)};D.prototype.concat=D.prototype.concat;function E(a,b){this.x=+a;this.y=+b}t(\"H.math.Point\",E);E.prototype.set=E;E.prototype.set=E.prototype.set;E.prototype.clone=function(a){a?(a.x=this.x,a.y=this.y):a=new E(this.x,this.y);return a};E.prototype.clone=E.prototype.clone;E.prototype.add=function(a){this.x+=a.x;this.y+=a.y;return this};E.prototype.add=E.prototype.add;E.prototype.sub=function(a){this.x-=a.x;this.y-=a.y;return this};E.prototype.sub=E.prototype.sub;E.prototype.scale=function(a,b){this.x*=a;this.y*=void 0===b?a:b;return this};\nE.prototype.scale=E.prototype.scale;E.prototype.round=function(){this.x=nb(this.x);this.y=nb(this.y);return this};E.prototype.round=E.prototype.round;E.prototype.floor=function(){this.x=ob(this.x);this.y=ob(this.y);return this};E.prototype.floor=E.prototype.floor;E.prototype.ceil=function(){this.x=pb(this.x);this.y=pb(this.y);return this};E.prototype.ceil=E.prototype.ceil;E.prototype.I=function(a){return!(!a||this.x!==a.x||this.y!==a.y)};E.prototype.equals=E.prototype.I;\nE.prototype.Cb=function(a,b){var c=b.x-a.x,d=b.y-a.y,e=a;if(c||d){var f=((this.x-a.x)*c+(this.y-a.y)*d)/(c*c+d*d);0>=f?e=a:1<=f?e=b:e=new E(a.x+f*c,a.y+f*d)}return e};E.prototype.getNearest=E.prototype.Cb;E.prototype.ra=function(a){return qb(rb(this.x-a.x,2)+rb(this.y-a.y,2))};E.prototype.distance=E.prototype.ra;E.fromIPoint=function(a){if(!a)throw Error(\"invalid argument\");return a instanceof E?a:new E(a.x,a.y)};var F=Math,sb=F.min,tb=F.max,nb=F.round,ob=F.floor,pb=F.ceil,ub=F.abs,vb=F.log,qb=F.sqrt,rb=F.pow,wb=F.exp,xb=F.sin,yb=F.asin,zb=F.cos,Ab=F.tan,Bb=F.atan,Cb=F.atan2,Db=F.LN2,I=F.PI,Eb=I/2,Gb=I/4,Hb=2*I,Ib=3*I,Jb=I/180,Kb=180/I,Lb=1/0;rb(-2,53);function Mb(a,b){var c;return 0>(c=a%b)===0>b?c:c+b}t(\"H.math.normalize\",function(a,b,c){b-=c=c||0;a-=c;return a-ob(a/b)*b+c});function Nb(a,b,c){return a>c?c:a<b?b:a}t(\"H.math.clamp\",Nb);function Ob(a,b,c){return b<c?a>=b&&a<=c:a>=c&&a<=b}\nfunction Pb(a,b,c,d,e,f){return qb(rb((a-e)*(d-f)-(b-f)*(c-e),2)/(rb(c-e,2)+rb(d-f,2)))}var Qb={NONE:0,VERTEX:1,EDGE:2,SURFACE:3};t(\"H.math.CoverType\",Qb);\nfunction Rb(a,b,c){for(var d=c.length,e=d,f,g,h,k,m=c[0],n=0,q=0,u=0;1!=n&&1<e;){g=c[--e];f=c[--e];k=c[e?e-1:(d+(e-1))%d];h=c[e?e-2:(d+(e-2))%d];if(f>=a&&f<=a&&g>=b&&g<=b||h>=a&&h<=a&&k>=b&&k<=b)n=1;else if(!n&&f===a)h===a&&(g<b&&k>b||g>b&&k<b)||(m<=a&&h>a||m>=a&&h<a)&&(g>=b?++q:++u),n=Ob(b,g,k)&&0>=Pb(a,b,f,g,h,k)?2:0;else if(!n&&Ob(a,f,h)){if(f<a&&h>a||f>a&&h<a)m=g+(a-f)/(h-f)*(k-g),q+=m>b,u+=m<b;n=Ob(b,g,k)&&0>=Pb(a,b,f,g,h,k)?2:0}m=f}!n&&0!==u&&0!==q%2&&(n=3);return n}\nfunction Sb(a,b){return Rb(a.x,a.y,b)!==Qb.NONE}t(\"H.math.isPointInsidePolygon\",Sb);function Tb(a){for(var b=a.length,c=new Float64Array(2*b),d=b&&a[0].x!==z;b--;){var e=a[b],f=b<<1;c[f]=d?e.x:e[0];c[f+1]=d?e.y:e[1]}return c}t(\"H.math.flatten\",Tb);function Ub(a,b,c,d,e,f){var g,h,k=a.length,m,n;if(k)for(g=[];k--;){var q=a[k];var u=q.length;var J=0;for(m=1;m<u;m++)if(n=Vb(q[m-1],q[m],c,b,d,e)){var M=n[0];var v=n[1];J&&J.I(M)?h.push(v):g.push(h=n);J=v;f&&(m=u,k=0)}}else g=a;return g}t(\"H.math.clipping.clipStrips\",Ub);\nfunction Vb(a,b,c,d,e,f){var g=a.x;a=-a.y;var h=b.x;b=-b.y;c=-c;f=-f;if(g>h){if(h>e||g<d)return;var k=g;var m=a;g=h;a=b;h=k;b=m;k=1}else if(g>e||h<d)return;if(a>b){if(b>c||a<f)return;var n=1;a=-a;b=-b;m=f;f=-c;c=-m}else if(a>c||b<f)return;if(g<d){if((a+=(d-g)*(b-a)/(h-g))>c)return;g=d}if(a<f){if((g+=(f-a)*(h-g)/(b-a))>e)return;a=f}h>e&&(b=a+(e-g)*(b-a)/(h-g),h=e);b>c&&(h=g+(c-a)*(h-g)/(b-a),b=c);n&&(a=-a,b=-b);return k?[new E(h,-b),new E(g,-a)]:[new E(g,-a),new E(h,-b)]}\nfunction Wb(a,b,c){a=Xb(a,!0);b=Xb(b,!1);var d,e;var f={};var g=d=1;switch(~~(c||0)){case 1:g=d=0;break;case 2:d=0;g=1;break;case 3:d=1,g=0}c=d;var h=g;if(b&&a){b.ia=Yb(b.x,b.y,null,Zb(b));a.ia=Yb(a.x,a.y,null,Zb(a));for(g=b;g.next;g=g.next)if(!g.C)for(d=a;d.next;d=d.next)if(!d.C){var k=$b(g.next);var m=$b(d.next);if(e=ac(g,k,d,m,f)){e=f.kb;var n=f.lb;var q=f.kc;var u=f.lc;e=Yb(q,u,null,null,null,null,!0,0,0,e);bc(e,g,k);k=Yb(q,u,null,null,null,null,!0,0,0,n);bc(k,d,m);e.Da=k;k.Da=e}}f=Sb(b,cc(a));\nc&&(f=!f);for(g=b;g;g=g.next)g.C&&(g.ta=f,f=!f);f=Sb(a,cc(b));h&&(f=!f);for(d=a;d.next;d=d.next)d.C&&(d.ta=f,f=!f);dc(b);for(dc(a);(a=ec(b))!=b;){for(c=null;!a.na;a=a.Da){for(f=a.ta;;){c=Yb(a.x,a.y,c);c.artificial=a.C||a.Ob;a.na=1;a=f?a.next:a.u;if(!a)break;if(a.C){a.na=1;break}}if(!a)break}c.Xa=J;var J=c}return J}}t(\"H.math.clipping.clipPolygon\",Wb);\nfunction Yb(a,b,c,d,e,f,g,h,k,m){a={x:a,y:b,next:c||null,u:d||null,Xa:e||null,Da:f||null,C:!!g,ta:h||0,na:k||0,alpha:m||0};d&&(a.u.next=a);c&&(a.next.u=a);return a}function $b(a){for(;a&&a.C;)a=a.next;return a}function Zb(a){if(a)for(;a.next;)a=a.next;return a}function ec(a){var b=a;if(b){do b=b.next;while(b!=a&&(!b.C||b.C&&b.na))}return b}function dc(a){var b=Zb(a);b.u.next=a;a.u=b.u}\nfunction ac(a,b,c,d,e){var f,g=b.x-a.x,h=b.y-a.y;var k=d.x-c.x;var m=d.y-c.y;var n=g*m-h*k;if(!n)return 0;k=((c.x-a.x)*m-(c.y-a.y)*k)/n;n=(h*(c.x-a.x)-g*(c.y-a.y))/n;if(0>k||1<k||0>n||1<n)return 0;0===k?f=a:1===k?f=b:0===n?f=c:1===n&&(f=d);if(f)return f.x+=2.480549651603763E-5,f.y+=7.321997314118067E-5,f.ia&&(f.ia.x=f.x,f.ia.y=f.y),ac(a,b,c,d,e);e.kc=a.x+k*g;e.lc=a.y+k*h;e.kb=k;e.lb=n;return 1}function cc(a){for(var b=[];a;)b.push(a.x,a.y),a=a.next;return b}\nfunction bc(a,b,c){for(b=b.next;b!==c&&b.alpha<=a.alpha;)b=b.next;a.next=b;a.u=b.u;a.next.u=a;a.u.next=a}function Xb(a,b){for(var c,d=null,e=0,f=a.length;e<f;e++){c=Yb(a[e].x,a[e].y,d);c.Ob=b;if(c.next=d)d.u=c;d=c}return d};function fc(a,b){var c=[];a&&c.push(Ua(a));1<arguments.length&&c.push(\"\"+b);c=Error(c.join(\" \"));Object.setPrototypeOf(c,fc.prototype);return c}xa(fc,Error);t(\"H.lang.IllegalOperationError\",fc);fc.prototype.name=\"IllegalOperationError\";function gc(){if(!Qa(\"STATIC_DB\"))throw new A(this.constructor,0);this.o=y.indexedDB||y.jc||y.Rb||y.Sb;if(!this.o)throw new fc(this.constructor,\"This browser does not support IndexedDB\");this.a=[];this.c=[];this.g=Fa(this.g,this)}var hc,ic;gc.prototype.get=function(a,b,c){var d;if(!Qa(a)&&!Sa(a))throw new A(this.get,0);if(!r(b))throw new A(this.get,1);jc(this,function(e){d=e.get(a);kc(d,b,c)},c);return{cancel:function(){d&&(d.onsuccess=lc)}}};\ngc.prototype.g=function(){var a=this.b.result;a.objectStoreNames.contains(\"data\")||a.createObjectStore(\"data\")};\nfunction mc(a,b,c){if(a.b)a.a?(a.a.push(b),c&&a.c.push(c)):a.f?c&&c(a.f):b(a.b.result);else{a.b=a.o.open(nc+\"STATIC_DB\",1);a.b.onupgradeneeded=a.g;var d=a.b.onerror=function(){clearTimeout(a.v);a.f=this.error;a.c.forEach(function(e){e(a.f)});a.a=a.c=null};a.v=setTimeout(function(){d.call({error:Error(\"DbOpenTimeoutError\")})},500);a.b.onsuccess=function(){clearTimeout(a.v);a.a?(a.a.forEach(function(e){e(this.result)},this),a.a=a.c=null):(a.b=a.f=null,a.a=[],a.c=[])};a.a.push(b);c&&a.c.push(c)}}\nfunction jc(a,b,c){mc(a,function(d){d=d.transaction([\"data\"],\"readwrite\");b(d.objectStore(\"data\"))},c)}function kc(a,b,c){b&&(a.onsuccess=function(){b(this.result)});c&&(a.onerror=function(){c(this.error)})}t(\"H.util.IndexedDBStorage.getInstance\",function(){hc||(hc=new gc);return hc});var nc=\"H_\";\nt(\"H.util.IndexedDBStorage.isSupported\",function(){if(ic===z)if(\"file:\"===window.location.protocol&&-1<navigator.userAgent.toLowerCase().indexOf(\"firefox\")&&128<=window.location.href.length)ic=!1;else{var a=y.indexedDB||y.jc||y.Rb||y.Sb;var b=nc+\"TEST_DB\";try{var c=a&&a.open(b,1)}catch(d){}ic=!!c&&null===c.onupgradeneeded;c&&a.deleteDatabase&&a.deleteDatabase(b)}return ic});function K(){0!=oc&&(pc[this[ra]||(this[ra]=++sa)]=this);this.c=this.c;this.a=this.a}var oc=0,pc={};K.prototype.c=!1;K.prototype.B=function(){if(!this.c&&(this.c=!0,this.P(),0!=oc)){var a=this[ra]||(this[ra]=++sa);if(0!=oc&&this.a&&0<this.a.length)throw Error(this+\" did not empty its onDisposeCallbacks queue. This probably means it overrode dispose() or disposeInternal() without calling the superclass' method.\");delete pc[a]}};\nK.prototype.N=function(a,b){this.c?void 0!==b?a.call(b):a():(this.a||(this.a=[]),this.a.push(void 0!==b?va(a,b):a))};K.prototype.P=function(){if(this.a)for(;this.a.length;)this.a.shift()()};function L(a,b){this.type=a;this.currentTarget=this.target=b;this.a=!1;this.Za=!0}L.prototype.stopPropagation=function(){this.a=!0};L.prototype.c=function(){this.Za=!1};t(\"H.util.Event\",L);L.prototype.stopPropagation=L.prototype.stopPropagation;L.prototype.stopPropagation=L.prototype.stopPropagation;L.prototype.CAPTURING_PHASE=1;L.prototype.CAPTURING_PHASE=L.prototype.CAPTURING_PHASE;L.prototype.AT_TARGET=2;L.prototype.AT_TARGET=L.prototype.AT_TARGET;L.prototype.BUBBLING_PHASE=3;L.prototype.BUBBLING_PHASE=L.prototype.BUBBLING_PHASE;L.prototype.eventPhase=0;L.prototype.eventPhase=L.prototype.eventPhase;function qc(a,b,c){qc.W.constructor.call(this,a,c);this.data=b}xa(qc,L);t(\"H.util.DataEvent\",qc);function rc(a,b,c){rc.W.constructor.call(this,a,c);this.message=b}xa(rc,L);t(\"H.util.ErrorEvent\",rc);function sc(a,b){this.c=a;this.f=b;this.b=0;this.a=null}sc.prototype.get=function(){if(0<this.b){this.b--;var a=this.a;this.a=a.next;a.next=null}else a=this.c();return a};function tc(a,b){a.f(b);100>a.b&&(a.b++,b.next=a.a,a.a=b)};function uc(){this.b=this.a=null}var wc=new sc(function(){return new vc},function(a){a.reset()});uc.prototype.add=function(a,b){var c=wc.get();c.set(a,b);this.b?this.b.next=c:this.a=c;this.b=c};function xc(){var a=yc,b=null;a.a&&(b=a.a,a.a=a.a.next,a.a||(a.b=null),b.next=null);return b}function vc(){this.next=this.b=this.a=null}vc.prototype.set=function(a,b){this.a=a;this.b=b;this.next=null};vc.prototype.reset=function(){this.next=this.b=this.a=null};var Bc=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\\s\\xa0]*([\\s\\S]*?)[\\s\\xa0]*$/.exec(a)[1]};function Cc(a,b){return a<b?-1:a>b?1:0};var Dc;a:{var Ec=p.navigator;if(Ec){var Fc=Ec.userAgent;if(Fc){Dc=Fc;break a}}Dc=\"\"}function Gc(a){return-1!=Dc.indexOf(a)};function Hc(a,b){this.b=a===Ic&&b||\"\";this.a=Jc}var Jc={},Ic={},Kc=new Hc(Ic,\"\");function Lc(a,b){this.b=a===Mc&&b||\"\";this.a=Nc}var Nc={},Mc={};function Oc(){this.a=\"\";this.b=Pc}function Qc(){var a=Rc;if(a instanceof Oc&&a.constructor===Oc&&a.b===Pc)return a.a;oa(a);return\"type_error:SafeHtml\"}var Pc={};function Sc(a){var b=new Oc;b.a=a;return b}Sc(\"<!DOCTYPE html>\");var Rc=Sc(\"\");Sc(\"<br>\");function Tc(a){var b=new Lc(Mc,Kc instanceof Hc&&Kc.constructor===Hc&&Kc.a===Jc?Kc.b:\"type_error:Const\");b instanceof Lc&&b.constructor===Lc&&b.a===Nc?b=b.b:(oa(b),b=\"type_error:TrustedResourceUrl\");a.src=b.toString()};function Uc(a){Uc[\" \"](a);return a}Uc[\" \"]=na;var Vc=Gc(\"Opera\"),Wc=Gc(\"Trident\")||Gc(\"MSIE\"),Xc=Gc(\"Edge\"),Yc=Gc(\"Gecko\")&&!(-1!=Dc.toLowerCase().indexOf(\"webkit\")&&!Gc(\"Edge\"))&&!(Gc(\"Trident\")||Gc(\"MSIE\"))&&!Gc(\"Edge\"),Zc=-1!=Dc.toLowerCase().indexOf(\"webkit\")&&!Gc(\"Edge\");function $c(){var a=p.document;return a?a.documentMode:void 0}var ad;\na:{var bd=\"\",cd=function(){var a=Dc;if(Yc)return/rv:([^\\);]+)(\\)|;)/.exec(a);if(Xc)return/Edge\\/([\\d\\.]+)/.exec(a);if(Wc)return/\\b(?:MSIE|rv)[: ]([^\\);]+)(\\)|;)/.exec(a);if(Zc)return/WebKit\\/(\\S+)/.exec(a);if(Vc)return/(?:Version)[ \\/]?(\\S+)/.exec(a)}();cd&&(bd=cd?cd[1]:\"\");if(Wc){var dd=$c();if(null!=dd&&dd>parseFloat(bd)){ad=String(dd);break a}}ad=bd}var ed={},fd;fd=p.document&&Wc?$c():void 0;function gd(a){var b=document;a=String(a);\"application/xhtml+xml\"===b.contentType&&(a=a.toLowerCase());return b.createElement(a)};function hd(a){p.setTimeout(function(){throw a;},0)}var id;\nfunction jd(){var a=p.MessageChannel;\"undefined\"===typeof a&&\"undefined\"!==typeof window&&window.postMessage&&window.addEventListener&&!Gc(\"Presto\")&&(a=function(){var e=gd(\"IFRAME\");e.style.display=\"none\";Tc(e);document.documentElement.appendChild(e);var f=e.contentWindow;e=f.document;e.open();e.write(Qc());e.close();var g=\"callImmediate\"+Math.random(),h=\"file:\"==f.location.protocol?\"*\":f.location.protocol+\"//\"+f.location.host;e=va(function(k){if((\"*\"==h||k.origin==h)&&k.data==g)this.port1.onmessage()},\nthis);f.addEventListener(\"message\",e,!1);this.port1={};this.port2={postMessage:function(){f.postMessage(g,h)}}});if(\"undefined\"!==typeof a&&!Gc(\"Trident\")&&!Gc(\"MSIE\")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var e=c.Oa;c.Oa=null;e()}};return function(e){d.next={Oa:e};d=d.next;b.port2.postMessage(0)}}return\"undefined\"!==typeof document&&\"onreadystatechange\"in gd(\"SCRIPT\")?function(e){var f=gd(\"SCRIPT\");f.onreadystatechange=function(){f.onreadystatechange=null;\nf.parentNode.removeChild(f);f=null;e();e=null};document.documentElement.appendChild(f)}:function(e){p.setTimeout(e,0)}};function kd(a,b){ld||md();nd||(ld(),nd=!0);yc.add(a,b)}var ld;function md(){if(p.Promise&&p.Promise.resolve){var a=p.Promise.resolve(void 0);ld=function(){a.then(od)}}else ld=function(){var b=od;!r(p.setImmediate)||p.Window&&p.Window.prototype&&!Gc(\"Edge\")&&p.Window.prototype.setImmediate==p.setImmediate?(id||(id=jd()),id(b)):p.setImmediate(b)}}var nd=!1,yc=new uc;function od(){for(var a;a=xc();){try{a.a.call(a.b)}catch(b){hd(b)}tc(wc,a)}nd=!1};function pd(a){this.a=qd;this.v=void 0;this.f=this.b=this.c=null;this.g=this.o=!1;if(a!=na)try{var b=this;a.call(void 0,function(c){rd(b,sd,c)},function(c){rd(b,td,c)})}catch(c){rd(this,td,c)}}var qd=0,sd=2,td=3;function ud(){this.next=this.c=this.b=this.f=this.a=null;this.g=!1}ud.prototype.reset=function(){this.c=this.b=this.f=this.a=null;this.g=!1};var vd=new sc(function(){return new ud},function(a){a.reset()});function wd(a,b,c){var d=vd.get();d.f=a;d.b=b;d.c=c;return d}\nfunction xd(a,b,c){yd(a,b,c,null)||kd(wa(b,a))}function zd(a){return new pd(function(b,c){var d=a.length,e=[];if(d)for(var f=function(m,n){d--;e[m]=n;0==d&&b(e)},g=function(m){c(m)},h=0,k;h<a.length;h++)k=a[h],xd(k,wa(f,h),g);else b(e)})}function Ad(){var a,b,c=new pd(function(d,e){a=d;b=e});return new Bd(c,a,b)}pd.prototype.then=function(a,b,c){return Cd(this,r(a)?a:null,r(b)?b:null,c)};pd.prototype.$goog_Thenable=!0;\npd.prototype.cancel=function(a){if(this.a==qd){var b=new Dd(a);kd(function(){Ed(this,b)},this)}};function Ed(a,b){if(a.a==qd)if(a.c){var c=a.c;if(c.b){for(var d=0,e=null,f=null,g=c.b;g&&(g.g||(d++,g.a==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(c.a==qd&&1==d?Ed(c,b):(f?(d=f,d.next==c.f&&(c.f=d),d.next=d.next.next):Fd(c),Gd(c,e,td,b)))}a.c=null}else rd(a,td,b)}function Hd(a,b){a.b||a.a!=sd&&a.a!=td||Id(a);a.f?a.f.next=b:a.b=b;a.f=b}\nfunction Cd(a,b,c,d){var e=wd(null,null,null);e.a=new pd(function(f,g){e.f=b?function(h){try{var k=b.call(d,h);f(k)}catch(m){g(m)}}:f;e.b=c?function(h){try{var k=c.call(d,h);void 0===k&&h instanceof Dd?g(h):f(k)}catch(m){g(m)}}:g});e.a.c=a;Hd(a,e);return e.a}pd.prototype.Ea=function(a){this.a=qd;rd(this,sd,a)};pd.prototype.Ga=function(a){this.a=qd;rd(this,td,a)};\nfunction rd(a,b,c){a.a==qd&&(a===c&&(b=td,c=new TypeError(\"Promise cannot resolve to itself\")),a.a=1,yd(c,a.Ea,a.Ga,a)||(a.v=c,a.a=b,a.c=null,Id(a),b!=td||c instanceof Dd||Jd(a,c)))}function yd(a,b,c,d){if(a instanceof pd)return Hd(a,wd(b||na,c||null,d)),!0;if(a)try{var e=!!a.$goog_Thenable}catch(g){e=!1}else e=!1;if(e)return a.then(b,c,d),!0;if(qa(a))try{var f=a.then;if(r(f))return Kd(a,f,b,c,d),!0}catch(g){return c.call(d,g),!0}return!1}\nfunction Kd(a,b,c,d,e){function f(k){h||(h=!0,d.call(e,k))}function g(k){h||(h=!0,c.call(e,k))}var h=!1;try{b.call(a,g,f)}catch(k){f(k)}}function Id(a){a.o||(a.o=!0,kd(a.T,a))}function Fd(a){var b=null;a.b&&(b=a.b,a.b=b.next,b.next=null);a.b||(a.f=null);return b}pd.prototype.T=function(){for(var a;a=Fd(this);)Gd(this,a,this.a,this.v);this.o=!1};\nfunction Gd(a,b,c,d){if(c==td&&b.b&&!b.g)for(;a&&a.g;a=a.c)a.g=!1;if(b.a)b.a.c=null,Ld(b,c,d);else try{b.g?b.f.call(b.c):Ld(b,c,d)}catch(e){Md.call(null,e)}tc(vd,b)}function Ld(a,b,c){b==sd?a.f.call(a.c,c):a.b&&a.b.call(a.c,c)}function Jd(a,b){a.g=!0;kd(function(){a.g&&Md.call(null,b)})}var Md=hd;function Dd(a){Da.call(this,a)}xa(Dd,Da);Dd.prototype.name=\"cancel\";function Bd(a,b,c){this.a=a;this.b=b;this.reject=c};function Nd(a,b,c){this.type=a;this.data=b;this.a=Ad();this.Va=Fa(this.Va,this);this.reject=Fa(this.reject,this);this.priority=Od;c!==z&&(this.priority=c);this.b().add(this)}var Od=1,Pd={nc:0,oc:Od,mc:2};l=Nd.prototype;l.then=function(a,b,c){return this.a.a.then(a,b,c)};l.Va=function(a){this.$=3;this.a.b(a)};l.reject=function(a){this.$=5;this.a.reject(a)};l.$=0;\nl.cancel=function(){if(3>this.$){this.c();var a=this.b(),b=this.priority,c=a.a[b].indexOf(this);-1<c?a.a[b].splice(c,1):this.Na&&a.ea.ob(this.Na);this.$=4}};function Qd(a){var b;this.a={};for(b in Pd)this.a[Pd[b]]=[];this.ea=a;this.ea.addEventListener(\"allocatable\",Fa(this.b,this))}t(\"H.util.JobManager\",Qd);var Rd=Object.keys(Pd).map(function(a){return Pd[a]}).sort().reverse();Qd.prototype.add=function(a){Na(a,Nd,this.add,0);this.a[a.priority].push(a);this.b()};Qd.prototype.contains=function(a){return-1<this.a[a.priority].indexOf(a)};\nQd.prototype.b=function(){Rd.forEach(function(a){this.a[a]=this.a[a].filter(function(b){var c;if((c=this.ea.pc(b))!==Ia){var d=Fa(this.ea.ob,this.ea,c,b);b.Na=c;b.then(d,d);b.$=b.qc(c)?1:5}else return!0},this)},this)};function Sd(a,b,c){var d=[],e=arguments.length;a&&d.push(Ua(a));1<e&&(e=2<e&&Oa(c,void 0,void 0,void 0)?\" out of [\"+c[0]+\"...\"+c[1]+\"]\":\"\",d.push(\"(\"+b+e+\")\"));d=Error(d.join(\" \"));Object.setPrototypeOf(d,Sd.prototype);return d}xa(Sd,Error);t(\"H.lang.OutOfRangeError\",Sd);Sd.prototype.name=\"OutOfRangeError\";var Td=\"closure_listenable_\"+(1E6*Math.random()|0),Ud=0;function Vd(a,b,c,d,e){this.listener=a;this.proxy=null;this.src=b;this.type=c;this.capture=!!d;this.ka=e;this.key=++Ud;this.V=this.fa=!1}function Wd(a){a.V=!0;a.listener=null;a.proxy=null;a.src=null;a.ka=null};function Xd(a){this.src=a;this.a={};this.b=0}Xd.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.a[f];a||(a=this.a[f]=[],this.b++);var g=Yd(a,b,d,e);-1<g?(b=a[g],c||(b.fa=!1)):(b=new Vd(b,this.src,f,!!d,e),b.fa=c,a.push(b));return b};function Zd(a,b){var c=b.type;if(c in a.a){var d=a.a[c],e=Ea(d,b),f;(f=0<=e)&&Array.prototype.splice.call(d,e,1);f&&(Wd(b),0==a.a[c].length&&(delete a.a[c],a.b--))}}\nXd.prototype.U=function(a){a=a&&a.toString();var b=0,c;for(c in this.a)if(!a||c==a){for(var d=this.a[c],e=0;e<d.length;e++)++b,Wd(d[e]);delete this.a[c];this.b--}return b};function Yd(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.V&&f.listener==b&&f.capture==!!c&&f.ka==d)return e}return-1};var $d;($d=!Wc)||($d=9<=Number(fd));var ae=$d,be;\nif(be=Wc){var ce;if(Object.prototype.hasOwnProperty.call(ed,\"9\"))ce=ed[\"9\"];else{for(var de=0,ee=Bc(String(ad)).split(\".\"),fe=Bc(\"9\").split(\".\"),ge=Math.max(ee.length,fe.length),he=0;0==de&&he<ge;he++){var ie=ee[he]||\"\",je=fe[he]||\"\";do{var ke=/(\\d*)(\\D*)(.*)/.exec(ie)||[\"\",\"\",\"\",\"\"],le=/(\\d*)(\\D*)(.*)/.exec(je)||[\"\",\"\",\"\",\"\"];if(0==ke[0].length&&0==le[0].length)break;de=Cc(0==ke[1].length?0:parseInt(ke[1],10),0==le[1].length?0:parseInt(le[1],10))||Cc(0==ke[2].length,0==le[2].length)||Cc(ke[2],le[2]);\nie=ke[3];je=le[3]}while(0==de)}ce=ed[\"9\"]=0<=de}be=!ce}var me=be,ne=function(){if(!p.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},\"passive\",{get:function(){a=!0}});try{p.addEventListener(\"test\",na,b),p.removeEventListener(\"test\",na,b)}catch(c){}return a}();function oe(a,b){L.call(this,a?a.type:\"\");this.relatedTarget=this.currentTarget=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key=\"\";this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.pointerId=0;this.pointerType=\"\";this.b=null;if(a){var c=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.currentTarget=b;if(b=a.relatedTarget){if(Yc){a:{try{Uc(b.nodeName);var e=!0;break a}catch(f){}e=\n!1}e||(b=null)}}else\"mouseover\"==c?b=a.fromElement:\"mouseout\"==c&&(b=a.toElement);this.relatedTarget=b;d?(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0):(this.clientX=void 0!==a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0);this.button=a.button;this.key=a.key||\"\";this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=\na.shiftKey;this.metaKey=a.metaKey;this.pointerId=a.pointerId||0;this.pointerType=\"string\"===typeof a.pointerType?a.pointerType:pe[a.pointerType]||\"\";this.b=a;a.defaultPrevented&&this.c()}}xa(oe,L);var pe={2:\"touch\",3:\"pen\",4:\"mouse\"};oe.prototype.stopPropagation=function(){oe.W.stopPropagation.call(this);this.b.stopPropagation?this.b.stopPropagation():this.b.cancelBubble=!0};\noe.prototype.c=function(){oe.W.c.call(this);var a=this.b;if(a.preventDefault)a.preventDefault();else if(a.returnValue=!1,me)try{if(a.ctrlKey||112<=a.keyCode&&123>=a.keyCode)a.keyCode=-1}catch(b){}};var qe=\"closure_lm_\"+(1E6*Math.random()|0),re={},se=0;function te(a,b,c,d,e){if(d&&d.once)ue(a,b,c,d,e);else if(\"array\"==oa(b))for(var f=0;f<b.length;f++)te(a,b[f],c,d,e);else c=ve(c),a&&a[Td]?a.b.add(String(b),c,!1,qa(d)?!!d.capture:!!d,e):we(a,b,c,!1,d,e)}\nfunction we(a,b,c,d,e,f){if(!b)throw Error(\"Invalid event type\");var g=qa(e)?!!e.capture:!!e,h=xe(a);h||(a[qe]=h=new Xd(a));c=h.add(b,c,d,g,f);if(!c.proxy){d=ye();c.proxy=d;d.src=a;d.listener=c;if(a.addEventListener)ne||(e=g),void 0===e&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(ze(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error(\"addEventListener and attachEvent are unavailable.\");se++}}\nfunction ye(){var a=Ae,b=ae?function(c){return a.call(b.src,b.listener,c)}:function(c){c=a.call(b.src,b.listener,c);if(!c)return c};return b}function ue(a,b,c,d,e){if(\"array\"==oa(b))for(var f=0;f<b.length;f++)ue(a,b[f],c,d,e);else c=ve(c),a&&a[Td]?a.b.add(String(b),c,!0,qa(d)?!!d.capture:!!d,e):we(a,b,c,!0,d,e)}\nfunction Ce(a,b,c,d,e){if(\"array\"==oa(b))for(var f=0;f<b.length;f++)Ce(a,b[f],c,d,e);else(d=qa(d)?!!d.capture:!!d,c=ve(c),a&&a[Td])?(a=a.b,b=String(b).toString(),b in a.a&&(f=a.a[b],c=Yd(f,c,d,e),-1<c&&(Wd(f[c]),Array.prototype.splice.call(f,c,1),0==f.length&&(delete a.a[b],a.b--)))):a&&(a=xe(a))&&(b=a.a[b.toString()],a=-1,b&&(a=Yd(b,c,d,e)),(c=-1<a?b[a]:null)&&De(c))}\nfunction De(a){if(\"number\"!==typeof a&&a&&!a.V){var b=a.src;if(b&&b[Td])Zd(b.b,a);else{var c=a.type,d=a.proxy;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(ze(c),d):b.addListener&&b.removeListener&&b.removeListener(d);se--;(c=xe(b))?(Zd(c,a),0==c.b&&(c.src=null,b[qe]=null)):Wd(a)}}}function ze(a){return a in re?re[a]:re[a]=\"on\"+a}\nfunction Ee(a,b,c,d){var e=!0;if(a=xe(a))if(b=a.a[b.toString()])for(b=b.concat(),a=0;a<b.length;a++){var f=b[a];f&&f.capture==c&&!f.V&&(f=Fe(f,d),e=e&&!1!==f)}return e}function Fe(a,b){var c=a.listener,d=a.ka||a.src;a.fa&&De(a);return c.call(d,b)}\nfunction Ae(a,b){if(a.V)return!0;if(!ae){if(!b)a:{b=[\"window\",\"event\"];for(var c=p,d=0;d<b.length;d++)if(c=c[b[d]],null==c){b=null;break a}b=c}d=b;b=new oe(d,this);c=!0;if(!(0>d.keyCode||void 0!=d.returnValue)){a:{var e=!1;if(0==d.keyCode)try{d.keyCode=-1;break a}catch(g){e=!0}if(e||void 0==d.returnValue)d.returnValue=!0}d=[];for(e=b.currentTarget;e;e=e.parentNode)d.push(e);a=a.type;for(e=d.length-1;!b.a&&0<=e;e--){b.currentTarget=d[e];var f=Ee(d[e],a,!0,b);c=c&&f}for(e=0;!b.a&&e<d.length;e++)b.currentTarget=\nd[e],f=Ee(d[e],a,!1,b),c=c&&f}return c}return Fe(a,new oe(b,this))}function xe(a){a=a[qe];return a instanceof Xd?a:null}var Ge=\"__closure_events_fn_\"+(1E9*Math.random()>>>0);function ve(a){if(r(a))return a;a[Ge]||(a[Ge]=function(b){return a.handleEvent(b)});return a[Ge]};function N(){K.call(this);this.b=new Xd(this);this.v=this;this.o=null}xa(N,K);N.prototype[Td]=!0;l=N.prototype;l.K=function(){return this.o};l.Ja=function(a){this.o=a};l.addEventListener=function(a,b,c,d){te(this,a,b,c,d)};l.removeEventListener=function(a,b,c,d){Ce(this,a,b,c,d)};\nl.dispatchEvent=function(a){var b,c=this.K();if(c)for(b=[];c;c=c.K())b.push(c);c=this.v;var d=a.type||a;if(\"string\"===typeof a)a=new L(a,c);else if(a instanceof L)a.target=a.target||c;else{var e=a;a=new L(d,c);Ca(a,e)}e=!0;if(b)for(var f=b.length-1;!a.a&&0<=f;f--){var g=a.currentTarget=b[f];e=g.R(d,!0,a)&&e}a.a||(g=a.currentTarget=c,e=g.R(d,!0,a)&&e,a.a||(e=g.R(d,!1,a)&&e));if(b)for(f=0;!a.a&&f<b.length;f++)g=a.currentTarget=b[f],e=g.R(d,!1,a)&&e;return e};\nl.P=function(){N.W.P.call(this);this.b&&this.b.U(void 0);this.o=null};l.R=function(a,b,c){a=this.b.a[String(a)];if(!a)return!0;a=a.concat();for(var d=!0,e=0;e<a.length;++e){var f=a[e];if(f&&!f.V&&f.capture==b){var g=f.listener,h=f.ka||f.src;f.fa&&Zd(this.b,f);d=!1!==g.call(h,c)&&d}}return d&&0!=c.Za};t(\"H.util.EventTarget\",N);N.prototype.Ja=N.prototype.Ja;N.prototype.setParentEventTarget=N.prototype.Ja;N.prototype.K=N.prototype.K;N.prototype.getParentEventTarget=N.prototype.K;N.prototype.addEventListener=N.prototype.addEventListener;N.prototype.addEventListener=N.prototype.addEventListener;N.prototype.removeEventListener=N.prototype.removeEventListener;N.prototype.removeEventListener=N.prototype.removeEventListener;N.prototype.dispatchEvent=N.prototype.dispatchEvent;\nN.prototype.dispatchEvent=N.prototype.dispatchEvent;N.prototype.B=N.prototype.B;N.prototype.dispose=N.prototype.B;N.prototype.N=N.prototype.N;N.prototype.addOnDisposeCallback=N.prototype.N;N.prototype.T=N.prototype.R;\nN.prototype.R=function(a,b,c){var d,e,f=!0;var g=c[c.currentTarget===c.target?\"AT_TARGET\":b?\"CAPTURING_PHASE\":(d=!0,\"BUBBLING_PHASE\")];if(!d||\"pointerenter\"!==(e=c.type)&&\"pointerleave\"!==e)c.eventPhase=g,f=N.prototype.T.apply(this,arguments),d&&this.K&&null===this.K()&&delete c.eventPhase;return f};function O(a){a=a||{};var b=a.callback;this.g=a.label;r(b)&&(this.callback=b);this.f=!!a.disabled;O.W.constructor.call(this)}xa(O,N);t(\"H.util.ContextItem\",O);O.prototype.zb=function(){return this.g};O.prototype.getLabel=O.prototype.zb;O.prototype.cc=function(a){this.g!==a&&(this.g=a,this.dispatchEvent(\"update\"));return this};O.prototype.setLabel=O.prototype.cc;O.prototype.Pb=function(){return this.f};O.prototype.isDisabled=O.prototype.Pb;\nO.prototype.bc=function(a){a^this.f&&(this.f=a,this.dispatchEvent(\"update\"));return this};O.prototype.setDisabled=O.prototype.bc;var He=new O;O.SEPARATOR=He;function Ie(){if(y.document){var a=document.createElement(\"canvas\");a.width=a.height=1;a.getContext(\"2d\")}}t(\"H.util.getPixelRatio\",function(){return window.devicePixelRatio||1});Object.create(Ia,void 0);t(\"H.util.eval\",function(a){return eval(a)});t(\"H.util.provide\",function(a){var b=p.$jscomp;if(b&&(\"function\"!=typeof b.wb?0:b.wb()))throw Error(\"goog.provide cannot be used within a module.\");ma(a,void 0)});function Je(){this.A=0}\nJe.prototype.next=function(a){if(9007199254740992===this.A)throw new Sd(a,this.A,[0,9007199254740991]);return this.A++};var Ke=new Je;Fa(Ke.next,Ke);function lc(){}var mb=Ha([]);Ha({});Ie();Ie();function Le(a,b,c){var d=Nb(+a,-90,90);if(b&&Ra(d))throw new A(b,c,a);return d}function Me(a,b,c){var d=+a;if(-180>d||180<d)d=Mb(d+180,360)-180;if(b&&Ra(d))throw new A(b,c,a);return d}function Ne(a,b,c){var d;if(a!==z&&Ra(d=+a)&&b)throw new A(b,c,a);return d}t(\"H.geo.isDBC\",function(a,b){return 0!==(0>a^0>b)&&180<ub(b-a)});function Q(){var a=Q;if(!0===(Na(this,a)&&this.constructor===a))throw new TypeError(\"Illegal constructor \"+Ua(a));}t(\"H.geo.AbstractGeometry\",Q);Q.prototype.getBoundingBox=Q.prototype.Y;Q.prototype.equals=Q.prototype.I;Q.prototype.oa=\"\";Q.prototype.wa=\"\";Q.prototype.toString=function(){return this.eb([this.oa.toUpperCase(),\" \"]).join(\"\")};Q.prototype.toString=Q.prototype.toString;Q.prototype.ec=function(){return{type:this.wa,coordinates:this.cb()}};Q.prototype.toGeoJSON=Q.prototype.ec;\nQ.prototype.ua=function(){return{type:this.oa,coordinates:this.va(),boundingBox:this.Y().ua()}};Q.prototype.forWorkerMessage=Q.prototype.ua;function R(a,b,c){this.lat=Le(a,R,0);this.lng=Me(b,R,1);c!==z&&(this.alt=Ne(c,R,2))}xa(R,Q);t(\"H.geo.Point\",R);R.prototype.I=function(a){return this===a||!!a&&this.lat===a.lat&&this.lng===a.lng&&(this.alt||0)===(a.alt||0)};R.prototype.equals=R.prototype.I;R.prototype.ra=function(a){if(this===a||this.lat===a.lat&&this.lng===a.lng)a=0;else{var b=this.lat*Jb;var c=a.lat*Jb;a=1.274200158E7*yb(sb(1,qb(rb(xb((b-c)/2),2)+zb(b)*zb(c)*rb(xb((this.lng*Jb-a.lng*Jb)/2),2))))}return a};\nR.prototype.distance=R.prototype.ra;\nR.prototype.ic=function(a,b,c){if(c){if(b/=6371000.79){a*=Jb;var d=Jb*this.lat;var e=xb(d);var f=xb(b);var g=zb(b);var h=Jb*this.lng;var k=zb(d);d=yb(k*zb(a)*f+e*g);a=Cb(xb(a)*k*f,g-e*xb(d));a=(h+a+I)%(2*I)-I;k=a*Kb}return b?new R(d*Kb,(k+540)%360-180):this}a=(a%360+360)%360;if(0===(a+90)%180)return d=this.lng+b/(6371000.79*Hb*zb(this.lat*Jb))*(270===a?-360:360),new R(this.lat,(d+540)%360-180);if(b/=6371000.79){a*=Jb;h=this.lat*Jb;e=this.lng*Jb;f=h+b*zb(a);g=f-h;d=vb(Ab(f/2+Gb)/Ab(h/2+Gb));d=Ra(g/\nd)?zb(h):g/d;var m=b*xb(a)/d;ub(f)>Eb&&(f=0<f?I-f:-(I+f))}return b?new R(f*Kb,((e+m+Ib+(ub(h+g)>Eb?I:0))%Hb-I)*Kb):this};R.prototype.walk=R.prototype.ic;R.prototype.Y=function(){return new T(this.lat,this.lng,this.lat,this.lng)};R.prototype.getBoundingBox=R.prototype.Y;function Oe(a,b,c){var d=qa(a)&&!(Ra(a.lat=Le(a.lat))||Ra(a.lng=Me(a.lng))||a.alt!==z&&Ra(a.alt=Ne(a.alt)));if(!d&&b)throw new A(b,c,a);return d}R.validate=Oe;\nfunction Pe(a){if(!a)throw new A(Pe,0,a);return new R(a.lat,a.lng,a.alt)}R.fromIPoint=Pe;l=R.prototype;l.oa=\"Point\";l.eb=function(a){a.push(\"(\",this.lng,\" \",this.lat,\")\");return a};l.wa=\"Point\";l.cb=function(){return[this.lng,this.lat,this.alt||0]};l.va=function(){return[this.lat,this.lng,this.alt||0]};var W={};t(\"H.geo.mercator\",W);W.a=function(a){return sb(1,tb(0,.5-vb(Ab(Gb+Eb*a/180))/I/2))};W.b=function(a){return a/360+.5};W.la=function(a,b,c){c?(c.x=W.b(b),c.y=W.a(a)):c=new E(W.b(b),W.a(a));return c};W.latLngToPoint=W.la;W.tb=function(a,b){return W.la(a.lat,a.lng,b)};W.geoToPoint=W.tb;W.f=function(a){return 0>=a?90:1<=a?-90:Kb*(2*Bb(wb(I*(1-2*a)))-Eb)};W.c=function(a){return 360*(1===a?1:Mb(a,1))-180};W.X=function(a,b,c){c?(c.lat=W.f(b),c.lng=W.c(a)):c=new R(W.f(b),W.c(a));return c};\nW.xyToGeo=W.X;W.Wb=function(a,b){return W.X(a.x,a.y,b)};W.pointToGeo=W.Wb;t(\"H.util.constants.DEFAULT_MIN_ZOOM_LEVEL\",0);t(\"H.util.constants.DEFAULT_MAX_ZOOM_LEVEL\",22);function X(a,b){this.projection=a||W;this.b=0;this.a=this.exp=vb(b||256)/Db;Qe(this);this.y=this.x=0}t(\"H.geo.PixelProjection\",X);var Re=ub(24)+ub(-8);X.prototype.Zb=W;X.prototype.projection=X.prototype.Zb;X.prototype.x=0;X.prototype.x=X.prototype.x;X.prototype.y=0;X.prototype.y=X.prototype.y;X.prototype.hc=rb(2,Re);X.prototype.w=X.prototype.hc;X.prototype.Jb=rb(2,Re);X.prototype.h=X.prototype.Jb;\nX.prototype.da=function(a){if(Ra(a))throw new A(this.da,0,a);var b=this.x/this.w;var c=this.y/this.h;this.b=a;this.a=this.exp+a;Qe(this);this.x=b*this.w;this.y=c*this.h};X.prototype.rescale=X.prototype.da;function Qe(a){a.a>Re&&(a.a=Re);a.w=rb(2,a.a);a.h=rb(2,a.a)}X.prototype.Sa=function(){return this.b||0};X.prototype.getZoomScale=X.prototype.Sa;X.prototype.sb=function(a,b){a=this.projection.la(a.lat,a.lng,b);a.x=a.x*this.w-this.x;a.y=a.y*this.h-this.y;return a};X.prototype.geoToPixel=X.prototype.sb;\nX.prototype.Fa=function(a,b){return this.projection.X((a.x+this.x)/this.w,(a.y+this.y)/this.h,b)};X.prototype.pixelToGeo=X.prototype.Fa;X.prototype.X=function(a,b,c){return this.projection.X((a+this.x)/this.w,(b+this.y)/this.h,c)};X.prototype.xyToGeo=X.prototype.X;X.prototype.Ba=function(a,b,c){a=this.projection.la(a,b,c);a.x=a.x*this.w-this.x;a.y=a.y*this.h-this.y;return a};X.prototype.latLngToPixel=X.prototype.Ba;X.prototype.Xb=function(a){return new E(a.x*this.w-this.x,a.y*this.h-this.y)};\nX.prototype.pointToPixel=X.prototype.Xb;t(\"H.util.Disposable\",K);K.prototype.N=K.prototype.N;K.prototype.addOnDisposeCallback=K.prototype.N;t(\"H.util.dispose\",function(a){a&&\"function\"==typeof a.B&&a.B()});K.prototype.B=K.prototype.B;K.prototype.dispose=K.prototype.B;K.prototype.P=K.prototype.P;function Se(){}t(\"H.util.ICancelable\",Se);Se.prototype.cancel=function(){};Se.prototype.cancel=Se.prototype.cancel;function Te(a,b,c,d){this.key=\"\";this.x=a;this.y=b;this.b=c;this.Z=d;this.a=Ad()}Te.prototype.then=function(a,b,c){return this.a.a.then(a,b,c)};Te.prototype.reject=function(a){this.a.reject(a)};Te.prototype.cancel=function(){this.a.a.cancel()};function Ue(a,b,c,d){if(!a||!b||!c)throw new A(Ue,null,\"Must specify name, version and revision parameter\");this.name=a;this.version=b;this.revision=c;d&&Ca(this,d)}t(\"H.util.BuildInfo\",Ue);Ue.prototype.toString=function(){var a,b=[];for(a in this)Qa(this[a])&&b.push(this[a]);return b.join(\";\")};var Ve={};function We(a,b,c,d){if(!a)throw new A(We,1,\"Must specify a name parameter\");return Ve[a]||(Ve[a]=new Ue(a,b,c,d))}Ue.get=We;function Z(a,b,c,d,e,f){if(a&&b)this.bb(a),this.Ha(b),this.Ka(c),this.ab(e),this.$a(f),this.La(d);else throw Error('Parameters \"scheme\" and \"host\" must be specified');}t(\"H.service.Url\",Z);\nfunction Xe(a,b){var c=y.document,d,e=c&&c.createElement(\"a\"),f=\"\";if(c){if(b){var g=(d=c.getElementsByTagName(\"base\")[0])&&d.href;var h=c.head;var k=d||h.appendChild(c.createElement(\"base\"));k.href=b}e.href=a;f=e.href;b&&(d?d.href=g:h.removeChild(k))}else/[\\w]+:\\/\\//.test(a)&&(f=a);g=/(?:(\\w+):\\/\\/)?(?:([^:]+):([^@/]*)@)?([^/:]+)?(?:[:]{1}([0-9]+))?(\\/[^?#]*)?(\\?[^#]+)?(#.*)?/.exec(f);a=g[1];k=g[4];b=g[5];h=g[6];c=g[7];d=g[8];!g[2]&&k&&/@/.test(k)&&(k=k.split(\"@\")[1]);g=k;h=h&&0<h.length?h.substr(1):\n\"\";k={};if(c)for(e=/([?&]?([^=&+]+))(=([^&]+))?/g;f=e.exec(c);)k[decodeURIComponent(f[2])]=f[4]?decodeURIComponent(f[4]):void 0;return new Z(a,g,h,k,isNaN(+b)?void 0:+b,d&&0<d.length?d.substr(1):\"\")}Z.parse=Xe;var Ye=0;Z.prototype.clone=function(){Ye++;var a={},b;for(b in this.a)a[b]=this.a[b];return new Z(this.o,this.f,this.b,a,this.g,this.c)};Z.prototype.clone=Z.prototype.clone;\nZ.prototype.bb=function(a){if(!a||\"string\"!==typeof a)throw Error('The \"scheme\" parameter must be a non-empty string.');this.o=a;return this};Z.prototype.setScheme=Z.prototype.bb;Z.prototype.Gb=function(){return this.o};Z.prototype.getScheme=Z.prototype.Gb;Z.prototype.Ha=function(a){if(!a||\"string\"!==typeof a||\"-\"===a.charAt(0)||\".\"===a.charAt(0)||\".\"===a.charAt(a.length-1))throw Error('The \"host\" parameter is not a valid host name.');this.f=a;return this};Z.prototype.setHost=Z.prototype.Ha;\nZ.prototype.yb=function(){return this.f};Z.prototype.getHost=Z.prototype.yb;Z.prototype.Ka=function(a){this.b=a||void 0;return this};Z.prototype.setPath=Z.prototype.Ka;Z.prototype.Db=function(){return this.b};Z.prototype.getPath=Z.prototype.Db;Z.prototype.La=function(a){if(a)if(\"object\"==typeof a)this.a=a;else throw Error('Parameter \"params\" must be an object.');else this.a={};return this};Z.prototype.setQuery=Z.prototype.La;Z.prototype.Kb=function(){return!Ze(this)};Z.prototype.hasQuery=Z.prototype.Kb;\nZ.prototype.getQuery=function(){return this.a};Z.prototype.getQuery=Z.prototype.getQuery;Z.prototype.ab=function(a){if(a&&isNaN(parseInt(a,10)))throw Error('Parameter \"port\" must be a number or undefined');this.g=+a||void 0;return this};Z.prototype.setPort=Z.prototype.ab;Z.prototype.Eb=function(){return this.g};Z.prototype.getPort=Z.prototype.Eb;Z.prototype.$a=function(a){this.c=a||void 0;return this};Z.prototype.setAnchor=Z.prototype.$a;Z.prototype.ub=function(){return this.c};\nZ.prototype.getAnchor=Z.prototype.ub;Z.prototype.aa=function(a){if(\"object\"!==typeof a)throw Error('Parameter \"other\" must be an object.');var b=this.a,c;for(c in a)a.hasOwnProperty(c)&&\"function\"!==typeof a[c]&&(b[c]=a[c]);return this};Z.prototype.mergeQuery=Z.prototype.aa;Z.prototype.ib=function(a){if(!a||\"string\"!==typeof a)throw Error('Parameter \"subDomain\" must be a non-empty string');\".\"===a.substr(a.length-1)&&(a=a.substr(0,a.length-1));return this.Ha(a+\".\"+this.f)};\nZ.prototype.addSubDomain=Z.prototype.ib;Z.prototype.jb=function(a){if(!a||\"string\"!==typeof a)throw Error('Parameter \"subPath\" must be a non-empty string');return this.Ka((this.b?this.b+\"/\":\"\")+a)};Z.prototype.addSubPath=Z.prototype.jb;Z.prototype.toString=function(){return[this.o+\"://\",this.f,this.g?\":\"+this.g:\"\",this.b||!Ze(this)||this.c?\"/\":\"\",this.b?encodeURI(this.b):\"\",$e(this),this.c?\"#\"+encodeURIComponent(this.c):\"\"].join(\"\")};Z.prototype.toString=Z.prototype.toString;\nfunction $e(a){function b(g,h){return encodeURIComponent(g)+(void 0===h?\"\":\"=\"+encodeURIComponent(h).replace(/[!'()*]/g,function(k){return\"%\"+k.charCodeAt(0).toString(16)}))}var c=[],d,e=a.a;for(d in e)if(e.hasOwnProperty(d)&&\"function\"!==typeof e[d]){var f=a.a[d];Na(f,af)?f.fb.forEach(function(g){c.push(b(d,g))}):c.push(b(d,f))}return 0<c.length?\"?\"+c.join(\"&\"):\"\"}function Ze(a){var b,c=0;for(b in a.a)if(a.a.hasOwnProperty(b)&&\"function\"!==typeof a.a[b]&&(c++,0<c))break;return!c}\nfunction af(a){var b;if(!Oa(a,void 0,void 0,void 0))throw new A(af,0,a);for(b=0;b<a.length;b++){var c=a[b];if(!Qa(c)&&!Sa(c))throw new A(af,0,\"The array can only contain strings and numbers\");}this.fb=a}Z.MultiValueQueryParameter=af;af.prototype.Ib=function(){return this.fb};af.prototype.getValues=af.prototype.Ib;var bf={};function cf(a){try{importScripts.apply(self,arguments)}catch(b){this.postError(\"invalid_script\")}}function df(a){bf[a]=null;this.postMessage(a)}function ef(a,b,c){if(r(b))var d=b;else try{d=self.eval(\"(\"+b+\")\"),r(d)||(d=null)}catch(e){}d?(bf[a]=d,c||this.postMessage(a)):this.postError(\"invalid_processor\")}function ff(a){this.b=a&&a[0];this.a=a&&a[1];this.c=a&&a[2]||[]}ff.prototype.postError=function(a){this.postMessage(a,z,0)};\nff.prototype.postMessage=function(a,b,c){self.postMessage({processor:this.b,taskId:this.a,type:c===z?1:c,data:a},b||z)};function gf(a,b,c){if(!Qa(a))throw new A(gf,0,\"InvalidArgument\");if(!r(b))throw new A(gf,1,\"InvalidArgument\");var d=hf++;jf[d]={mimeType:c||kf,mb:b};(new ff([\"3\",d,[]])).postMessage(a,[],2)}var jf={},hf=0;\nfunction lf(a,b){var c=a;if(jf[this.a]){var d=jf[this.a];var e=d.mb;delete jf[this.a];if(b)e(null,b);else{if(d.mimeType===mf){a=new Uint8Array(a);b=a.byteLength;d=\"\";c=0;for(var f,g,h,k;c<b;)f=a[c++],192>f||(g=a[c++],224>f?f=(f&31)<<6|g&63:(h=a[c++],240>f?f=(f&15)<<12|(g&63)<<6|h&63:(k=a[c++],f=(f&7)<<18|(g&63)<<12|(h&63)<<6|k&63))),65536>f?d+=String.fromCharCode(f):(f-=65536,d+=String.fromCharCode((f>>10)+55296,(f&1023)+56320));c=d}e(c)}}}var kf=0,mf=1;function T(a,b,c,d){nf(this,Le(a,T,0),Me(b,T,1),Le(c,T,2),Me(d,T,3))}xa(T,Q);t(\"H.geo.Rect\",T);T.prototype.oa=\"Polygon\";T.prototype.eb=function(a){var b=this.m,c=this.i,d=this.l,e=this.j;a.push(\"(\",\"(\",c,\" \",b,\",\",e,\" \",b,\",\",e,\" \",d,\",\",c,\" \",d,\",\",c,\" \",b,\")\",\")\");return a};T.prototype.I=function(a){return this===a||!!a&&this.m===a.m&&this.i===a.i&&this.l===a.l&&this.j===a.j};T.prototype.equals=T.prototype.I;T.prototype.clone=function(){return new T(this.m,this.i,this.l,this.j)};\nT.prototype.clone=T.prototype.clone;function nf(a,b,c,d,e){a.i=c;a.j=e;b<d&&(c=b,b=d,d=c);a.m=b;a.l=d;a.c=a.a=a.b=null;return a}T.prototype.Ra=function(){this.c||(this.c=new R(this.m,this.i));return this.c};T.prototype.getTopLeft=T.prototype.Ra;T.prototype.Qa=function(){this.a||(this.a=new R(this.l,this.j));return this.a};T.prototype.getBottomRight=T.prototype.Qa;T.prototype.Hb=function(){return this.m};T.prototype.getTop=T.prototype.Hb;T.prototype.vb=function(){return this.l};\nT.prototype.getBottom=T.prototype.vb;T.prototype.Ab=function(){return this.i};T.prototype.getLeft=T.prototype.Ab;T.prototype.Fb=function(){return this.j};T.prototype.getRight=T.prototype.Fb;T.prototype.J=function(){this.b||(this.b=new R(this.l+(this.m-this.l)/2,of(this.i,this.L())));return this.b};T.prototype.getCenter=T.prototype.J;T.prototype.L=function(){return pf(this.i,this.j)};T.prototype.getWidth=T.prototype.L;T.prototype.S=function(){return this.m-this.l};T.prototype.getHeight=T.prototype.S;\nT.prototype.Nb=function(){return this.i>this.j};T.prototype.isCDB=T.prototype.Nb;T.prototype.Qb=function(){return!this.L()&&!this.S()};T.prototype.isEmpty=T.prototype.Qb;T.prototype.Y=function(){return new T(this.m,this.i,this.l,this.j)};T.prototype.getBoundingBox=T.prototype.Y;T.prototype.ga=function(a,b,c){var d=this.J();c||(a=Le(a,this.ga,0),b=Me(b,this.ga,1));b=this.M(a,b,c);a=b.J();return a.lat===d.lat&&a.lng===d.lng&&this.S()===b.S()&&this.L()===b.L()};T.prototype.containsLatLng=T.prototype.ga;\nT.prototype.ha=function(a,b){b||Oe(a,this.ha,0);return this.ga(a.lat,a.lng,b)};T.prototype.containsPoint=T.prototype.ha;T.prototype.Pa=function(a,b){var c=this.J();if(!b&&!Na(a,T))throw new A(this.Pa,0,a);b=this.ma(a,b);a=b.J();return a.lat===c.lat&&a.lng===c.lng&&this.S()===b.S()&&this.L()===b.L()};T.prototype.containsRect=T.prototype.Pa;\nT.prototype.M=function(a,b,c,d){if(!c){if(Ra(a=Le(a)))throw new A(this.M,0,a);if(Ra(b=Me(b)))throw new A(this.M,1,b);}return qf(this.m,this.i,this.l,this.j,a,b,a,b,d)};T.prototype.mergeLatLng=T.prototype.M;T.prototype.Wa=function(a,b,c){b||Oe(a,this.Wa,0);return this.M(a.lat,a.lng,b,c)};T.prototype.mergePoint=T.prototype.Wa;T.prototype.ma=function(a,b,c){if(!b&&!Na(a,T))throw new A(this.ma,0,a);return qf(this.m,this.i,this.l,this.j,a.m,a.i,a.l,a.j,c)};T.prototype.mergeRect=T.prototype.ma;\nT.prototype.ba=function(a,b,c,d,e,f){e||(a=Le(a,this.ba,0),b=Me(b,this.ba,1),c=Le(c,this.ba,2),d=Me(d,this.ba,3));return qf(this.m,this.i,this.l,this.j,a,b,c,d,f)};T.prototype.mergeTopLeftBottomRight=T.prototype.ba;T.prototype.Ua=function(a,b){var c=this.i<=this.j,d=a.i<=a.j,e=this.i<a.j,f=a.i<this.j;if(!b&&!Na(a,T))throw new A(this.Ua,0,a);return this.l<=a.m&&a.l<=this.m&&(!c&&(!d||e||f)||!d&&(e||f)||e&&f)};T.prototype.intersects=T.prototype.Ua;function pf(a,b){a=b-a;return a+(0>a?360:0)}\nfunction of(a,b){a+=b/2;return a-(180<a?360:0)}function qf(a,b,c,d,e,f,g,h,k){c=sb(c,g);a=tb(a,e);e=pf(b,d);var m=of(b,e);g=pf(f,h);var n=of(f,g)-m;n+=0>n-1E-6?360:0;if(180>n-1E-6){m=b;var q=h}else n=360-n,m=f,q=d;n=n+e/2+g/2;360<=n+5E-7?(m=-180,q=180):n-5E-7<e?(m=b,q=d):n-5E-7<g&&(m=f,q=h);return k?nf(k,a,m,c,q):new T(a,m,c,q)}T.merge=qf;function rf(a,b,c){c||(Oe(a,rf,0),Oe(b,rf,1));return new T(a.lat,a.lng,b.lat,b.lng)}T.fromPoints=rf;\nfunction sf(a,b){var c=1,d=a.length,e=null;var f=oa(a);if(\"array\"!=f&&(\"object\"!=f||\"number\"!=typeof a.length))throw new A(sf,0,a);if(0<d)for(f=a[0],e=rf(f,f,b);c<d;c++)f=a[c],e.M(f.lat,f.lng,b,e);return e}T.coverPoints=sf;function tf(a,b){var c=3,d=a.length,e;if(!(b||a&&null!=a.length))throw new A(tf,0,a);if(0<d)for(e=new T(a[0],a[1],a[0],a[1]);c<d;c+=3)e.M(a[c],a[c+1],b,e);return e}T.coverLatLngAlts=tf;\nfunction uf(a,b){var c=1,d=a.length,e;if(b&&(!a||null==a.length))throw new A(uf,0,a);if(0<d)for(e=new T(a[0].m,a[0].i,a[0].l,a[0].j);c<d;c++)e.ma(a[c],b,e);return e}T.coverRects=uf;\nT.prototype.Ya=function(a,b){var c=this.i,d=this.m,e=this.j,f=this.l,g=this.J().lng;Oe(a,this.Ya,0);var h=a.lat-f-(d-f)/2;var k=a.lng-g;k=180<k||-180>k?-(g+a.lng):k;a=c+(0>k?2*k:0);a=-180>a?360+a:a;e+=0<k?2*k:0;e=180<e?e-360:e;d=0<h?d+2*h:d;90<=d&&(d=90);f=0>h?f+2*h:f;-90>=f&&(f=-90);return b?nf(b,d,a,f,e):new T(d,a,f,e)};T.prototype.resizeToCenter=T.prototype.Ya;T.prototype.wa=\"Polygon\";\nT.prototype.cb=function(){return[[this.i,this.m,0],[this.j,this.m,0],[this.j,this.l,0],[this.i,this.l,0],[this.i,this.m,0]]};T.prototype.ua=function(){return this.va()};T.prototype.va=function(){return[this.m,this.i,this.l,this.j]};function vf(a,b,c,d){var e=!!c,f,g=0,h=0,k=0,m=0,n=0,q,u=-1;var J=y.Float32Array;var M,v=[];if(b){b=La(b);a=La(a);e&&(f=La(c));c=b.length;d=d?1E-7:1E-5;for(M=new J(3*c);g<c;){J=b[g];var G=+J;var Y=+a[g];e&&(q=+f[g]);wf.test(J)?0<=u&&(0<g-u&&v.push(u,g+1),u=-1):0>u&&(u=g);g++;m=M[h++]=m+Y*d;k=M[h++]=k+G*d;e&&(n=M[h]=n+q);h++}0<=u&&1<c-u&&v.push(u,c)}else M=new J(0);return{path:M,outlineIndices:v}}var wf=/^-?0\\d/;\nfunction xf(a,b){for(var c=0,d=a.length/3,e=new y.Array(d),f=0;c<d;)e[c++]=b.Ba(a[f],a[++f]),f+=2;return e};function yf(a,b){b=180/(1<<b);var c=a.lat+90;a=(a.lng+180)%360;var d=0;180==c&&d--;d+=Math.floor(c/b);return[d,Math.floor(a/b)]}var zf=1/Math.pow(10,10);function Af(a,b){var c=[],d=a.Ra();a=a.Qa();var e;180==a.lng&&(a.lng-=zf);d=yf(d,b);a=yf(a,b);for(e=d[0];e>=a[0];e--)for(b=d[1];b<=a[1];b++)c.push(e,b);return c};function Bf(a,b){var c=a.tileSize||256;this.b={};this.v=Xe(a.serverUrl);this.g=b;this.fc=a.layerConfigs||[];this.o=a.projected;this.T=c;this.Ea=!1!==a.batchTiles;this.Ga=a.horizontalMargin||0;this.gc=a.onlyOutline;this.gb=new X(Ia,c);this.f=new X(Ia,c);this.f.da(22-Math.log(c)/Math.LN2+8)}xa(Bf,K);l=Bf.prototype;\nl.ac=function(a,b,c){var d=this.T,e=this.Ga,f={x:a*d-e,y:b*d};d={x:(a+1)*d-1+e,y:(b+1)*d-1};e=this.gb;e.da(c);f=e.Fa(f);d=e.Fa(d);return Cf(this,new T(f.lat,f.lng,d.lat,d.lng),this.fc,{x:a,y:b,z:c})};l.$b=function(a,b,c,d,e){return Cf(this,new T(a,b,c,d),e)};\nfunction Cf(a,b,c,d){var e=Df(c),f=e.length,g={},h,k=a.b,m=[],n=[];for(c=0;c<f;c++){var q=e[c];var u=q.layerId;var J=q.level;g[u]=q.columns;q=Af(b,J);var M=q.length-1;for(h=0;h<M;h+=2){var v=[u,q[h+1],q[h],J].join(\"_\");var G=k[v]||a.g.get(v);G||(G=new Te(q[h+1],q[h],J,u),G.key=v,k[v]=G,n.push(G));m.push(G)}}n.length&&(a.Ea?Ef(a,n):Ff(a,n));return zd(m.map(function(Y){return Y.then(Fa(this.qb,this,Y.Z,Gf(e))).then(Fa(this.Yb,this,Y,d||{})).then(Fa(this.rb,this,g[Y.Z]))},a))}\nl.qb=function(a,b,c){var d=c.Rows,e=d.length,f,g;if(e&&(f=b[a])){b=new D(c.Rows);var h=[];for(g=0;g<e;g++){var k=d[g];f(b.ja(g),a)&&h.push(k)}a={Rows:h};if(c=c.Meta)a.Meta=c}else a=c;return a};function Ff(a,b){function c(k,m,n){n?(delete a.b[k.key],k.reject(n)):Hf(a,k,m)}var d,e=b.length,f=a.v;for(d=0;d<e;d++){var g=b[d];var h=f.clone().aa({tilex:g.x}).aa({tiley:g.y}).aa({level:g.b}).aa({layer:g.Z});new gf(h.toString(),Fa(c,null,g),mf)}}\nfunction Ef(a,b){var c=b.length,d;for(d=0;d<c;d+=15){var e=b.slice(d,d+15);If(a,e)}}function If(a,b){var c=a.v.clone(),d=[],e=[],f=[],g=c.getQuery();b.length&&(b.forEach(function(h){d.push(h.x,h.y);e.push(h.b);f.push(h.Z)}),g.tilexy=d.join(\",\"),g.layers=f.join(\",\"),g.levels=e.join(\",\"),c.La(g),new gf(c.toString(),function(h,k){k?b.forEach(function(m){delete a.b[m.key];m.reject(\"error\")}):Hf(a,b,h)},mf))}\nfunction Hf(a,b,c){var d=b.length,e;if(Oa(b,void 0,void 0,void 0)){var f=c.indexOf(\"[\")+1;for(e=0;e<d;e++){var g=c.indexOf(\"]},{\",f+3)+2;g<f&&(g=c.lastIndexOf(\"]}\"));var h=c.substr(f,g-f);f=g+1;Jf(a,b[e],h)}}else Jf(a,b,c)}function Jf(a,b,c){try{var d=c.length;var e=b.key;delete a.b[e];a.g.add(e,b,2*d);var f=JSON.parse(c);b.a.b(f)}catch(g){b.reject(g.message)}}\nfunction Gf(a){var b={},c,d=a.length;for(c=0;c<d;c++){var e=a[c];if(e.rowFilter){var f=e.layerId;f=f!==z?f:e.layer;b[f]=Fa(e.rowFilter,e.rowFilterContext)}}return b}function Kf(a,b,c,d,e){return e?[new E(a,b),new E(c,b),new E(c,d),new E(a,d),new E(a,b)]:[a,b,c,b,c,d,a,d]}\nl.Yb=function(a,b,c){var d=this.f.Sa()-b.z,e=this.T<<d,f=50<<d,g=b.x*e;b=b.y*e;var h=g+e;e=b+e;var k=g-f,m=b-f,n=h+f;f=e+f;var q,u,J=c.Rows,M=J.length,v,G=/^ADAS/.test(a.Z),Y=this.f,pa=this.gc,S,ab=[],Ja=[],Ka=[],bb=[];for(a=0;a<M;a++){var w=v=J[a];var P=(S=G)?\"HPY\":\"LAT\";var U=S?\"HPX\":\"LON\";var ea=S?\"HPZ\":\"ZLEVEL\";if(w[P]){var V=vf(w[P],w[U],w[ea],S);w.geometry=V;delete w[P];delete w[U];delete w[ea];if(w.INNER_LAT)for(P=w.INNER_LAT.split(\";\"),V=w.INNER_LON.split(\";\"),delete w.INNER_LAT,delete w.INNER_LON,\nw.interiors=ea=[],U=P.length,w=0;w<U;w++)ea.push(vf(P[w],V[w],\"\",S))}if(this.o){S=void 0;U=v;V=Y;P=U.$$projected$$;if(!P){var ba=U.geometry;w=xf(ba.path,V);v=[w];U.$$projected$$=P={Vb:v};U=(ea=U.interiors)?ea.length:0;v.length+=U;S|=Lf(v,w,ba.outlineIndices);if(U)for(P.Lb=1,q=0;q<U;q++)ba=ea[q],w=xf(ba.path,V),v[1+q]=w,S|=Lf(v,w,ba.outlineIndices);S&&(P.Tb=1+U)}w=P;S=w.Vb;v=w.Lb;var zc=w.Tb;V=[];P=U=Lb;var cb=ea=z;w=S[0];if(1===w.length){var Ac=Ac||(Ac=Kf(g,b,h,e,!1));v=w[0];Rb(v.x,v.y,Ac)&&V.push(Mf(w,\ng,b,d))}else{var Be=S.length;for(ba=pa?zc:0;ba<Be&&(pa||!ba||V.length);ba++)if(w=S[ba],ba>=zc){ba===zc&&(P=V.length);var ja=Ub([w],k,m,n,f,!1);Nf(ja,g,b,d,V)}else{var Fb=Fb||(Fb=Kf(k,m,n,f,!0));if(ba>=v)if(ba===v&&(U=V.length),cb)for(q=cb.length;q--;){if(ja=Of(cb[q],w),u=ja.length){for(ea=ea||[];u--;)ea.push(q);Nf(ja,g,b,d,V)}}else ja=Of(Fb,w),Nf(ja,g,b,d,V);else if(ja=Of(Fb,w),Nf(ja,g,b,d,V),1<ja.length&&v<Be)for(cb=[],q=ja.length;q--;)cb[q]=ja[q]}}V.length&&(ab[a]=V,Ja[a]=U,Ka[a]=ea,bb[a]=P)}}return{dc:c,\nnb:ab,Mb:Ja,pb:Ka,Ub:bb}};function Lf(a,b,c){for(var d=c.length,e=0,f,g,h=b.length;e<d;)f=c[e++],g=c[e++],a.push(g-f===h?b:b.slice(f,g));return 0<c.length}function Of(a,b){var c,d=[];if(c=Wb(a,b)){do{a=[];b=c;do a.push(b);while(b=b.next);d.push(a)}while(c=c.Xa)}else Sb(b[0],Tb(a))?d.push(b):Sb(a[0],Tb(b))&&d.push(a);return d}function Nf(a,b,c,d,e){for(var f=0,g=a.length;f<g;f++)e.push(Mf(a[f],b,c,d))}\nfunction Mf(a,b,c,d){var e,f=a.length,g=new Int32Array(2*f),h=0;for(e=0;e<f;e++){var k=a[e];g[h++]=k.x-b>>d;g[h++]=k.y-c>>d}return g}\nl.rb=function(a,b){var c=b.dc,d=b.nb,e=b.Mb,f=b.Ub;b=b.pb;for(var g=[],h,k={Rows:g},m,n=a?a.length:0,q=0,u,J=c.Rows,M=J.length,v;q<M;q+=1)if(d[q]||!this.o){h={};u=J[q];if(n)for(m=0;m<n;m++)u.hasOwnProperty(a[m])&&(h[a[m]]=u[a[m]]);else for(v in u)\"$$projected$$\"!==v&&(h[v]=u[v]);u.geometry&&(h.geometry=u.geometry);m=void 0;var G,Y=h,pa=d[q],S=e[q],ab=b[q],Ja=f[q],Ka=g;if(pa){var bb=pa.length;if(ab)for(G=S;G--;){if(G){var w={};for(m in Y)w[m]=Y[m]}else w=Y;u=[pa[G]];var P=sb(bb,Ja)-S;for(h=0;h<P;h++)ab[h]===\nG&&u.push(pa[S+h]);P=u.length;if(!G)for(h=Ja;h<bb;h++)u.push(pa[h]);w.$HProjGeometry={paths:u,interiorsIndex:1,outlinesIndex:P};Ka.push(w)}else Y.$HProjGeometry={paths:pa,interiorsIndex:S,outlinesIndex:Ja},Ka.push(Y)}else Ka.push(Y)}c.Meta&&(k.Meta=c.Meta);return k};l.P=function(){var a,b=this.b;for(a in b)b.hasOwnProperty(a)&&(b[a].reject(\"disposed\"),delete b[a])};\nfunction Df(a){for(var b=[],c,d=a.length,e=0;e<d;e++){c=Aa(a[e]);if(c.rowFilter&&(c.rowFilter=eval(\"(\"+c.rowFilter+\")\"),!r(c.rowFilter)))throw Error(\"Invalid row filter for layer \"+c.layerId);b.push(c)}return b};t(\"H.service.extension.worker.processor\",function(a,b,c){function d(h){e.postMessage(h)}var e=this,f=za[a];var g=function(h){e.postError(h.toString())};if(0===b)f||(za[a]=new Bf(c,Pf)),this.postMessage();else if(f)switch(b){case 1:try{f.ac.apply(f,c).then(d,g)}catch(h){this.postError(h.message)}break;case 2:try{f.$b.apply(f,c).then(d,g)}catch(h){this.postError(h.message)}break;case 3:f.B();delete za[a];ya()&&Pf.U();break;default:e.postError(\"Unsupported command\")}});\nvar Pf=new B(26214400),za=Object.create(Ia,void 0);function Qf(a,b,c){var d=a[b];a=a[b+1];this.Ta=[];this.Ma=0;this.b=b;this.a=[a-c,d-c,a+c,d+c]}Qf.prototype.ha=function(a,b){var c=a[b];a=a[b+1];b=this.a;return b[1]<=c&&c<=b[3]&&b[0]<=a&&a<=b[2]};Qf.prototype.J=function(){return this.b};var Rf=new E(0,0);function Sf(a,b,c,d,e){d[e]=b;d[e+1]=a}var Tf=new X;function Uf(a,b,c,d,e){Tf.Ba(a,b,Rf);d[e]=Rf.x;d[e+1]=Rf.y}\nt(\"H.clustering.dynamicgrid.worker\",function(a,b,c,d,e){var f=e?Sf:Uf,g=0;e=!!self.ArrayBuffer;var h=a.byteLength?new Float64Array(a):a,k=h.length/3;a=[];var m=[],n=[],q=e?new Float64Array(2*k):[];k=0;var u=0;for(Tf.da(d);g<h.length;){var J=h[g++];var M=h[g++];var v=h[g++];f(v,M,d,q,u);for(v=a.length;v--;)if(M=a[v],M.ha(q,u)){var G=M;break}G||(G=new Qf(q,u,b),a.push(G));v=u/2;G.Ma+=J||1;G.Ta.push(v);G=null;u+=2}for(v=a.length;v--;)M=a[v],b=M.Ma>=c,f=M.Ta,d=f.length,b?(m.push(d),m=m.concat(f)):\n(k+=d,n=n.concat(f));c=[k].concat(n,m);c=e?(new Uint32Array(c)).buffer:c;this.postMessage(c,[c])});self.addEventListener(\"message\",function(a){a=new ff(a.data);var b=bf[a.b];if(b)try{b.apply(a,a.c)}catch(c){a.postError(c.message)}else a.postError(\"processor_not_found\")});(function(){var a=new ff;var b=function(c,d){ef.apply(a,[c,d,!0])};b(\"0\",cf);b(\"1\",ef);b(\"2\",df);b(\"3\",lf)})();\n";

  /**!
   * The code below uses open source software. Please visit the URL below for an overview of the licenses: 
   * https://sdk.venues.here.com/v3/3.1/HERE_NOTICE 
   */
  this.H=this.H||{},this.H.venues=function(e){function t(e,t){void 0===t&&(t={});var n,r=t.insertAt;e&&"undefined"!=typeof document&&(n=document.head||document.getElementsByTagName("head")[0],(t=document.createElement("style")).type="text/css","top"===r&&n.firstChild?n.insertBefore(t,n.firstChild):n.appendChild(t),t.styleSheet?t.styleSheet.cssText=e:t.appendChild(document.createTextNode(e)));}function s(e){return (s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r);}}function l(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(t,e){var n,r=Object.keys(t);return Object.getOwnPropertySymbols&&(n=Object.getOwnPropertySymbols(t),e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,n)),r}function O(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach(function(e){c(t,e,n[e]);}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e));});}return t}function h(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&o(e,t);}function d(e){return (d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function o(e,t){return (o=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function a(){if("undefined"==typeof Reflect||!Reflect.construct)return !1;if(Reflect.construct.sham)return !1;if("function"==typeof Proxy)return !0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return !1}}function v(e,t,n){return (v=a()?Reflect.construct:function(e,t,n){var r=[null];r.push.apply(r,t);r=new(Function.bind.apply(e,r));return n&&o(r,n.prototype),r}).apply(null,arguments)}function f(e,t){if(null==e)return {};var n,r=function(e,t){if(null==e)return {};for(var n,r={},i=Object.keys(e),o=0;o<i.length;o++)n=i[o],0<=t.indexOf(n)||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols)for(var i=Object.getOwnPropertySymbols(e),o=0;o<i.length;o++)n=i[o],0<=t.indexOf(n)||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n]);return r}function g(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function p(n){var r=a();return function(){var e,t=d(n);return e=r?(e=d(this).constructor,Reflect.construct(t,arguments,e)):t.apply(this,arguments),t=this,!(e=e)||"object"!=typeof e&&"function"!=typeof e?g(t):e}}function y(e,t,n){return (y="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){e=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=d(e)););return e}(e,t);if(e){t=Object.getOwnPropertyDescriptor(e,t);return t.get?t.get.call(n):t.value}})(e,t,n||e)}function A(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,i=!1,o=void 0;try{for(var a,s=e[Symbol.iterator]();!(r=(a=s.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){i=!0,o=e;}finally{try{r||null==s.return||s.return();}finally{if(i)throw o}}return n}(e,t)||n(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function L(e){return function(e){if(Array.isArray(e))return m(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||n(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(e,t){if(e){if("string"==typeof e)return m(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return "Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?m(e,t):void 0}}function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}t(".H_l_right .venues-ui__drawings .trigger.button--active .arrow {\n  transform: rotate(90deg); }\n\n.H_l_right .venues-ui__drawings .drawings {\n  right: 45px;\n  left: initial; }\n");var I=function(){h(r,H.map.Feature);var n=p(r);function r(e){var t;return u(this,r),(t=n.call(this)).id=e.id,t.model=e,t}return l(r,[{key:"getData",value:function(){return this.model}},{key:"getAddress",value:function(){return this.model.getInternalAddress()}},{key:"getCenter",value:function(){var e=A(this.model.getCenter(),2),t=e[0],e=e[1];return new H.geo.Point(e,t)}},{key:"getId",value:function(){return this.model.getId()}},{key:"getName",value:function(){return this.model.getDisplayName()}},{key:"toGeoJSON",value:function(){return this.model.toJSON()}},{key:"getLevel",value:function(){return this.getParentEventTarget()}},{key:"getVenue",value:function(){return this.getLevel().getDrawing().getParentEventTarget()}}]),r}(),_=function(){h(r,H.map.Feature);var n=p(r);function r(e){var t;return u(this,r),(t=n.call(this)).id=e.id,t.model=e,t}return l(r,[{key:"getData",value:function(){return this.model}},{key:"getBoundingBox",value:function(){return v(H.geo.Rect,L(this.model.getBoundingBox()))}},{key:"getCenter",value:function(){var e=A(this.model.getCenter(),2),t=e[0],e=e[1];return new H.geo.Point(e,t)}},{key:"getId",value:function(){return this.model.getId()}},{key:"getName",value:function(){return this.model.getDisplayName()}},{key:"getLevel",value:function(t){return this.getLevels().find(function(e){return e.id===t})}},{key:"getLevels",value:function(){var t=this.getData().getLevels().map(function(e){return e.getId()});return this.getVenue().getLevels().filter(function(e){return -1!==t.indexOf(e.id)})}},{key:"getMainLevel",value:function(){return this.getLevel(this.model.getMainLevel().getId())}},{key:"getVenue",value:function(){return this.getParentEventTarget()}}]),r}(),E=function(){h(r,H.map.Feature);var n=p(r);function r(e){var t;return u(this,r),(t=n.call(this)).id=e.id,t.model=e,t}return l(r,[{key:"getGeometry",value:function(t){return this.getGeometries().find(function(e){return e.id===t})}},{key:"getGeometries",value:function(){var t=this.getData().getGeometries().map(function(e){return e.getId()});return this.getDrawing().getVenue().getGeometries().filter(function(e){return -1!==t.indexOf(e.id)})}},{key:"getData",value:function(){return this.model}},{key:"getId",value:function(){return this.model.getId()}},{key:"getName",value:function(){return this.model.getDisplayName()}},{key:"getShortName",value:function(){return this.model.getShortName()}},{key:"getZIndex",value:function(){return this.model.getZIndex()}},{key:"isMain",value:function(){return this.model.isMain()}},{key:"getDrawing",value:function(){return this.getParentEventTarget()}},{key:"getVenue",value:function(){return this.getDrawing().getParentEventTarget()}}]),r}();function M(e,t,n,r){for(var i,o=r,a=n-t>>1,s=n-t,u=e[t],l=e[t+1],c=e[n],h=e[n+1],d=t+3;d<n;d+=3){var v=function(e,t,n,r,i,o){var a=i-n,s=o-r;{var u;0===a&&0===s||(1<(u=((e-n)*a+(t-r)*s)/(a*a+s*s))?(n=i,r=o):0<u&&(n+=a*u,r+=s*u));}return (a=e-n)*a+(s=t-r)*s}(e[d],e[d+1],u,l,c,h);o<v?(i=d,o=v):v!==o||(v=Math.abs(d-a))<s&&(i=d,s=v);}r<o&&(3<i-t&&M(e,t,i,r),e[i+2]=o,3<n-i&&M(e,i,n,r));}function T(e,t,n,r){r={id:void 0===e?null:e,type:t,geometry:n,tags:r,minX:1/0,minY:1/0,maxX:-1/0,maxY:-1/0};return function(e){var t=e.geometry,n=e.type;if("Point"===n||"MultiPoint"===n||"LineString"===n)N(e,t);else if("Polygon"===n||"MultiLineString"===n)for(var r=0;r<t.length;r++)N(e,t[r]);else if("MultiPolygon"===n)for(r=0;r<t.length;r++)for(var i=0;i<t[r].length;i++)N(e,t[r][i]);}(r),r}function N(e,t){for(var n=0;n<t.length;n+=3)e.minX=Math.min(e.minX,t[n]),e.minY=Math.min(e.minY,t[n+1]),e.maxX=Math.max(e.maxX,t[n]),e.maxY=Math.max(e.maxY,t[n+1]);}function b(e,t,n,r){if(t.geometry){var i=t.geometry.coordinates,o=t.geometry.type,a=Math.pow(n.tolerance/((1<<n.maxZoom)*n.extent),2),s=[],u=t.id;if(n.promoteId?u=t.properties[n.promoteId]:n.generateId&&(u=r||0),"Point"===o)S(i,s);else if("MultiPoint"===o)for(var l=0;l<i.length;l++)S(i[l],s);else if("LineString"===o)k(i,s,a,!1);else if("MultiLineString"===o){if(n.lineMetrics){for(l=0;l<i.length;l++)s=[],k(i[l],s,a,!1),e.push(T(u,"LineString",s,t.properties));return}w(i,s,a,!1);}else if("Polygon"===o)w(i,s,a,!0);else {if("MultiPolygon"!==o){if("GeometryCollection"!==o)throw new Error("Input data is not a valid GeoJSON object.");for(l=0;l<t.geometry.geometries.length;l++)b(e,{id:u,geometry:t.geometry.geometries[l],properties:t.properties},n,r);return}for(l=0;l<i.length;l++){var c=[];w(i[l],c,a,!0),s.push(c);}}e.push(T(u,o,s,t.properties));}}function S(e,t){t.push(P(e[0])),t.push(C(e[1])),t.push(0);}function k(e,t,n,r){for(var i,o,a=0,s=0;s<e.length;s++){var u=P(e[s][0]),l=C(e[s][1]);t.push(u),t.push(l),t.push(0),0<s&&(a+=r?(i*l-u*o)/2:Math.sqrt(Math.pow(u-i,2)+Math.pow(l-o,2))),i=u,o=l;}var c=t.length-3;t[2]=1,M(t,0,c,n),t[2+c]=1,t.size=Math.abs(a),t.start=0,t.end=t.size;}function w(e,t,n,r){for(var i=0;i<e.length;i++){var o=[];k(e[i],o,n,r),t.push(o);}}function P(e){return e/360+.5}function C(e){e=Math.sin(e*Math.PI/180),e=.5-.25*Math.log((1+e)/(1-e))/Math.PI;return e<0?0:1<e?1:e}function x(e,t,n,r,i,o,a,s){if(r/=t,(n/=t)<=o&&a<r)return e;if(a<n||r<=o)return null;for(var u=[],l=0;l<e.length;l++){var c=e[l],h=c.geometry,d=c.type,v=0===i?c.minX:c.minY,f=0===i?c.maxX:c.maxY;if(n<=v&&f<r)u.push(c);else if(!(f<n||r<=v)){var g=[];if("Point"===d||"MultiPoint"===d)!function(e,t,n,r,i){for(var o=0;o<e.length;o+=3){var a=e[o+i];n<=a&&a<=r&&(t.push(e[o]),t.push(e[o+1]),t.push(e[o+2]));}}(h,g,n,r,i);else if("LineString"===d)D(h,g,n,r,i,!1,s.lineMetrics);else if("MultiLineString"===d)R(h,g,n,r,i,!1);else if("Polygon"===d)R(h,g,n,r,i,!0);else if("MultiPolygon"===d)for(var p=0;p<h.length;p++){var y=[];R(h[p],y,n,r,i,!0),y.length&&g.push(y);}if(g.length)if(s.lineMetrics&&"LineString"===d)for(p=0;p<g.length;p++)u.push(T(c.id,d,g[p],c.tags));else "LineString"!==d&&"MultiLineString"!==d||(1===g.length?(d="LineString",g=g[0]):d="MultiLineString"),"Point"!==d&&"MultiPoint"!==d||(d=3===g.length?"Point":"MultiPoint"),u.push(T(c.id,d,g,c.tags));}}return u.length?u:null}function D(e,t,n,r,i,o,a){for(var s,u,l=V(e),c=0===i?j:F,h=e.start,d=0;d<e.length-3;d+=3){var v=e[d],f=e[d+1],g=e[d+2],p=e[d+3],y=e[d+4],m=0===i?v:f,I=0===i?p:y,_=!1;a&&(s=Math.sqrt(Math.pow(v-p,2)+Math.pow(f-y,2))),m<n?n<I&&(u=c(l,v,f,p,y,n),a&&(l.start=h+s*u)):r<m?I<r&&(u=c(l,v,f,p,y,r),a&&(l.start=h+s*u)):G(l,v,f,g),I<n&&n<=m&&(u=c(l,v,f,p,y,n),_=!0),r<I&&m<=r&&(u=c(l,v,f,p,y,r),_=!0),!o&&_&&(a&&(l.end=h+s*u),t.push(l),l=V(e)),a&&(h+=s);}var E=e.length-3,v=e[E],f=e[1+E],g=e[2+E];n<=(m=0===i?v:f)&&m<=r&&G(l,v,f,g),E=l.length-3,o&&3<=E&&(l[E]!==l[0]||l[1+E]!==l[1])&&G(l,l[0],l[1],l[2]),l.length&&t.push(l);}function V(e){var t=[];return t.size=e.size,t.start=e.start,t.end=e.end,t}function R(e,t,n,r,i,o){for(var a=0;a<e.length;a++)D(e[a],t,n,r,i,o,!1);}function G(e,t,n,r){e.push(t),e.push(n),e.push(r);}function j(e,t,n,r,i,o){t=(o-t)/(r-t);return e.push(o),e.push(n+(i-n)*t),e.push(1),t}function F(e,t,n,r,i,o){n=(o-n)/(i-n);return e.push(t+(r-t)*n),e.push(o),e.push(1),n}function U(e,t){for(var n=[],r=0;r<e.length;r++){var i,o=e[r],a=o.type;if("Point"===a||"MultiPoint"===a||"LineString"===a)i=B(o.geometry,t);else if("MultiLineString"===a||"Polygon"===a){i=[];for(var s=0;s<o.geometry.length;s++)i.push(B(o.geometry[s],t));}else if("MultiPolygon"===a)for(i=[],s=0;s<o.geometry.length;s++){for(var u=[],l=0;l<o.geometry[s].length;l++)u.push(B(o.geometry[s][l],t));i.push(u);}n.push(T(o.id,a,i,o.tags));}return n}function B(e,t){var n=[];n.size=e.size,void 0!==e.start&&(n.start=e.start,n.end=e.end);for(var r=0;r<e.length;r+=3)n.push(e[r]+t,e[r+1],e[r+2]);return n}function z(e,t){if(e.transformed)return e;for(var n,r=1<<e.z,i=e.x,o=e.y,a=0;a<e.features.length;a++){var s=e.features[a],u=s.geometry,l=s.type;if(s.geometry=[],1===l)for(n=0;n<u.length;n+=2)s.geometry.push(Y(u[n],u[n+1],t,r,i,o));else for(n=0;n<u.length;n++){for(var c=[],h=0;h<u[n].length;h+=2)c.push(Y(u[n][h],u[n][h+1],t,r,i,o));s.geometry.push(c);}}return e.transformed=!0,e}function Y(e,t,n,r,i,o){return [Math.round(n*(e*r-i)),Math.round(n*(t*r-o))]}function Z(e,t,n,r,i){for(var o=t===i.maxZoom?0:i.tolerance/((1<<t)*i.extent),a={features:[],numPoints:0,numSimplified:0,numFeatures:0,source:null,x:n,y:r,z:t,transformed:!1,minX:2,minY:1,maxX:-1,maxY:0},s=0;s<e.length;s++){a.numFeatures++,function(e,t,n,r){var i=t.geometry,o=t.type,a=[];if("Point"===o||"MultiPoint"===o)for(var s=0;s<i.length;s+=3)a.push(i[s]),a.push(i[s+1]),e.numPoints++,e.numSimplified++;else if("LineString"===o)W(a,i,e,n,!1,!1);else if("MultiLineString"===o||"Polygon"===o)for(s=0;s<i.length;s++)W(a,i[s],e,n,"Polygon"===o,0===s);else if("MultiPolygon"===o)for(var u=0;u<i.length;u++){var l=i[u];for(s=0;s<l.length;s++)W(a,l[s],e,n,!0,0===s);}if(a.length){var c=t.tags||null;if("LineString"===o&&r.lineMetrics){for(var h in c={},t.tags)c[h]=t.tags[h];c.mapbox_clip_start=i.start/i.size,c.mapbox_clip_end=i.end/i.size;}r={geometry:a,type:"Polygon"===o||"MultiPolygon"===o?3:"LineString"===o||"MultiLineString"===o?2:1,tags:c};null!==t.id&&(r.id=t.id),e.features.push(r);}}(a,e[s],o,i);var u=e[s].minX,l=e[s].minY,c=e[s].maxX,h=e[s].maxY;u<a.minX&&(a.minX=u),l<a.minY&&(a.minY=l),c>a.maxX&&(a.maxX=c),h>a.maxY&&(a.maxY=h);}return a}function W(e,t,n,r,i,o){var a=r*r;if(0<r&&t.size<(i?a:r))n.numPoints+=t.length/3;else {for(var s=[],u=0;u<t.length;u+=3)(0===r||t[u+2]>a)&&(n.numSimplified++,s.push(t[u]),s.push(t[u+1])),n.numPoints++;i&&function(e,t){for(var n=0,r=0,i=e.length,o=i-2;r<i;o=r,r+=2)n+=(e[r]-e[o])*(e[r+1]+e[o+1]);if(0<n===t)for(r=0,i=e.length;r<i/2;r+=2){var a=e[r],s=e[r+1];e[r]=e[i-2-r],e[r+1]=e[i-1-r],e[i-2-r]=a,e[i-1-r]=s;}}(s,o),e.push(s);}}function J(e,t){var n=(t=this.options=function(e,t){for(var n in t)e[n]=t[n];return e}(Object.create(this.options),t)).debug;if(t.maxZoom<0||24<t.maxZoom)throw new Error("maxZoom should be in the 0-24 range");if(t.promoteId&&t.generateId)throw new Error("promoteId and generateId cannot be used together.");var r,i,o,a,s=function(e,t){var n=[];if("FeatureCollection"===e.type)for(var r=0;r<e.features.length;r++)b(n,e.features[r],t,r);else "Feature"===e.type?b(n,e,t):b(n,{geometry:e},t);return n}(e,t);this.tiles={},this.tileCoords=[],n&&(this.stats={},this.total=0),r=s,o=(i=t).buffer/i.extent,e=x(a=r,1,-1-o,o,0,-1,2,i),t=x(r,1,1-o,2+o,0,-1,2,i),(e||t)&&(a=x(r,1,-o,1+o,0,-1,2,i)||[],e&&(a=U(e,1).concat(a)),t&&(a=a.concat(U(t,-1)))),(s=a).length&&this.splitTile(s,0,0,0),n&&s.length;}function K(e,t,n){return 32*((1<<e)*n+t)+e}J.prototype.options={maxZoom:14,indexMaxZoom:5,indexMaxPoints:1e5,tolerance:3,extent:4096,buffer:64,lineMetrics:!1,promoteId:null,generateId:!1,debug:0},J.prototype.splitTile=function(e,t,n,r,i,o,a){for(var s=[e,t,n,r],u=this.options,l=u.debug;s.length;){r=s.pop(),n=s.pop(),t=s.pop(),e=s.pop();var c,h,d,v,f,g,p,y,m=1<<t,I=K(t,n,r),_=this.tiles[I];if(_||(_=this.tiles[I]=Z(e,t,n,r,u),this.tileCoords.push({z:t,x:n,y:r}),l&&(y="z"+t,this.stats[y]=(this.stats[y]||0)+1,this.total++)),_.source=e,i){if(t===u.maxZoom||t===i)continue;var E=1<<i-t;if(n!==Math.floor(o/E)||r!==Math.floor(a/E))continue}else if(t===u.indexMaxZoom||_.numPoints<=u.indexMaxPoints)continue;_.source=null,0!==e.length&&(h=.5-(c=.5*u.buffer/u.extent),d=1+c,p=v=f=g=null,y=x(e,m,n-c,n+(I=.5+c),0,_.minX,_.maxX,u),E=x(e,m,n+h,n+d,0,_.minX,_.maxX,u),e=null,y&&(p=x(y,m,r-c,r+I,1,_.minY,_.maxY,u),v=x(y,m,r+h,r+d,1,_.minY,_.maxY,u),y=null),E&&(f=x(E,m,r-c,r+I,1,_.minY,_.maxY,u),g=x(E,m,r+h,r+d,1,_.minY,_.maxY,u),E=null),s.push(p||[],t+1,2*n,2*r),s.push(v||[],t+1,2*n,2*r+1),s.push(f||[],t+1,2*n+1,2*r),s.push(g||[],t+1,2*n+1,2*r+1));}},J.prototype.getTile=function(e,t,n){var r=this.options,i=r.extent;r.debug;if(e<0||24<e)return null;r=1<<e,r=K(e,t=(t%r+r)%r,n);if(this.tiles[r])return z(this.tiles[r],i);for(var o,a=e,s=t,u=n;!o&&0<a;)a--,s=Math.floor(s/2),u=Math.floor(u/2),o=this.tiles[K(a,s,u)];return o&&o.source?(this.splitTile(o.source,a,s,u,e,t,n),this.tiles[r]?z(this.tiles[r],i):null):null};function X(e){for(var t,n=[],r=[],i=0,o=e.coordinates.length;i<o;i+=1){var a=e.coordinates[i],s=function(e){e=function(e){for(var t=0,n=e.length,r=0;r<n-1;r+=1){var i=e[r],o=e[r+1];t+=i[0]*o[1]-o[0]*i[1];}return t+=e[n-1][0]*e[0][1]-e[0][0]*e[n-1][1]}(e);return 0<e?ve:e<0?fe:void 0}(a);null!==s&&(s===(t=t||s)&&r.length&&(n.push(r),r=[]),r.push(a));}return 0<r.length&&n.push(r),1===n.length?(e.type=$,e.coordinates=n[0]):1<n.length?(e.type=ne,e.coordinates=n):e=null,e}function Q(e,t,n,r,i){var o;return i=(t=n=(o=n,n=r,r=i,t=1<<(i=t),(i=[])[0]=((e=e)[0]/r+o)/t,i[1]=(e[1]/r+n)/t,{x:i[0],y:i[1]})).x,n=t.y,t=360*(i-.5),i=Math.exp(Math.PI*(.5-n)/.25)-1,n=Math.exp(Math.PI*(.5-n)/.25)+1,[t,180*Math.asin(i/n)/Math.PI]}var q="Point",$="Polygon",ee="MultiPoint",te="MultiLineString",ne="MultiPolygon",re={fillColor:"#e0e0e0",outlineColor:"#829DB4",outlineWidth:1},ie={fill:"#333333",size:13},oe={fillColor:"#F2F285",outlineColor:"#0088BF",outlineWidth:1.2},ae=18,se=18,ue=24,le={FOOTPRINT:"FOOTPRINT",ICON:"ICON",TEXT:"TEXT",VECTOR:"VECTOR"},ce=1,he=2,de=3,ve="CW",fe="CCW";function ge(e){var t=void 0===(i=e.addressList)?[]:i,n=void 0===(r=e.geometries)?[]:r,r=void 0===(i=e.entity)?null:i,i=void 0===(i=e.name)?"":i,e=void 0===(e=e.icon)?"":e;u(this,ge),this.addressList=t,this.geometries=n,this.icon=e,this.entity=r,this.name=i;}var pe,ye,me=(function(e){e.exports=function(n){var r={};function i(e){if(r[e])return r[e].exports;var t=r[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,i),t.l=!0,t.exports}return i.m=n,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n});},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0});},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==s(t)&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=0)}([function(e,t,n){function c(e){return (c="function"==typeof Symbol&&"symbol"==s(Symbol.iterator)?function(e){return s(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":s(e)})(e)}var o=n(1),n=n(7),I=n.get,P=(n.deepValue,n.isArray),n=(function(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r);}}(_.prototype,[{key:"setCollection",value:function(e){return this.list=e}},{key:"_processKeys",value:function(e){if(this._keyWeights={},this._keyNames=[],e.length&&"string"==typeof e[0])for(var t=0,n=e.length;t<n;t+=1){var r=e[t];this._keyWeights[r]=1,this._keyNames.push(r);}else {for(var i=0,o=0,a=e.length;o<a;o+=1){var s=e[o];if(!s.hasOwnProperty("name"))throw new Error('Missing "name" property in key object');var u=s.name;if(this._keyNames.push(u),!s.hasOwnProperty("weight"))throw new Error('Missing "weight" property in key object');s=s.weight;if(s<0||1<s)throw new Error('"weight" property in key must bein the range of [0, 1)');i+=this._keyWeights[u]=s;}if(1<i)throw new Error("Total of weights cannot exceed 1")}}},{key:"search",value:function(e,t){var n=1<arguments.length&&void 0!==t?t:{limit:!1};this._log('---------\nSearch pattern: "'.concat(e,'"'));t=this._prepareSearchers(e),e=t.tokenSearchers,t=t.fullSearcher,t=this._search(e,t);return this._computeScore(t),this.options.shouldSort&&this._sort(t),n.limit&&"number"==typeof n.limit&&(t=t.slice(0,n.limit)),this._format(t)}},{key:"_prepareSearchers",value:function(e){var e=0<arguments.length&&void 0!==e?e:"",t=[];if(this.options.tokenize)for(var n=e.split(this.options.tokenSeparator),r=0,i=n.length;r<i;r+=1)t.push(new o(n[r],this.options));return {tokenSearchers:t,fullSearcher:new o(e,this.options)}}},{key:"_search",value:function(e,t){var n=0<arguments.length&&void 0!==e?e:[],r=1<arguments.length?t:void 0,i=this.list,o={},a=[];if("string"==typeof i[0]){for(var s=0,u=i.length;s<u;s+=1)this._analyze({key:"",value:i[s],record:s,index:s},{resultMap:o,results:a,tokenSearchers:n,fullSearcher:r});return a}for(var l=0,c=i.length;l<c;l+=1)for(var h=i[l],d=0,v=this._keyNames.length;d<v;d+=1){var f=this._keyNames[d];this._analyze({key:f,value:this.options.getFn(h,f),record:h,index:l},{resultMap:o,results:a,tokenSearchers:n,fullSearcher:r});}return a}},{key:"_analyze",value:function(e,t){var T=this,N=e.key,n=e.arrayIndex,r=void 0===n?-1:n,i=e.value,o=e.record,n=e.index,e=t.tokenSearchers,b=void 0===e?[]:e,S=t.fullSearcher,e=t.resultMap,k=void 0===e?{}:e,t=t.results,w=void 0===t?[]:t;!function e(t,n,r,i){if(null!=n)if("string"==typeof n){var o=!1,a=-1,s=0;T._log("\nKey: ".concat(""===N?"--":N));var u=S.search(n);if(T._log('Full text: "'.concat(n,'", score: ').concat(u.score)),T.options.tokenize){for(var l=n.split(T.options.tokenSeparator),c=l.length,h=[],d=0,v=b.length;d<v;d+=1){var f=b[d];T._log('\nPattern: "'.concat(f.pattern,'"'));for(var g=!1,p=0;p<c;p+=1){var y=l[p],m=f.search(y),I={};m.isMatch?(I[y]=m.score,g=o=!0,h.push(m.score)):(I[y]=1,T.options.matchAllTokens||h.push(1)),T._log('Token: "'.concat(y,'", score: ').concat(I[y]));}g&&(s+=1);}a=h[0];for(var _=h.length,E=1;E<_;E+=1)a+=h[E];a/=_,T._log("Token score average:",a);}var M=u.score;-1<a&&(M=(M+a)/2),T._log("Score average:",M);var O=!T.options.tokenize||!T.options.matchAllTokens||s>=b.length;T._log("\nCheck Matches: ".concat(O)),(o||u.isMatch)&&O&&(M={key:N,arrayIndex:t,value:n,score:M},T.options.includeMatches&&(M.matchedIndices=u.matchedIndices),(u=k[i])?u.output.push(M):(k[i]={item:r,output:[M]},w.push(k[i])));}else if(P(n))for(var A=0,L=n.length;A<L;A+=1)e(A,n[A],r,i);}(r,i,o,n);}},{key:"_computeScore",value:function(e){this._log("\n\nComputing score:\n");for(var t=this._keyWeights,n=!!Object.keys(t).length,r=0,i=e.length;r<i;r+=1){for(var o=e[r],a=o.output,s=a.length,u=1,l=0;l<s;l+=1){var c=a[l],h=c.key,d=n?t[h]:1,c=0===c.score&&t&&0<t[h]?Number.EPSILON:c.score;u*=Math.pow(c,d);}o.score=u,this._log(o);}}},{key:"_sort",value:function(e){this._log("\n\nSorting...."),e.sort(this.options.sortFn);}},{key:"_format",value:function(e){var n,t=[];this.options.verbose&&(n=[],this._log("\n\nOutput:\n\n",JSON.stringify(e,function(e,t){if("object"===c(t)&&null!==t){if(-1!==n.indexOf(t))return;n.push(t);}return t},2)),n=null);var r=[];this.options.includeMatches&&r.push(function(e,t){var n=e.output;t.matches=[];for(var r=0,i=n.length;r<i;r+=1){var o,a=n[r];0!==a.matchedIndices.length&&(o={indices:a.matchedIndices,value:a.value},a.key&&(o.key=a.key),a.hasOwnProperty("arrayIndex")&&-1<a.arrayIndex&&(o.arrayIndex=a.arrayIndex),t.matches.push(o));}}),this.options.includeScore&&r.push(function(e,t){t.score=e.score;});for(var i=0,o=e.length;i<o;i+=1){var a=e[i];if(this.options.id&&(a.item=this.options.getFn(a.item,this.options.id)[0]),r.length){for(var s={item:a.item},u=0,l=r.length;u<l;u+=1)r[u](a,s);t.push(s);}else t.push(a.item);}return t}},{key:"_log",value:function(){var e;this.options.verbose&&(e=console).log.apply(e,arguments);}}]),_);function _(e,t){var n=t.location,r=void 0===n?0:n,i=t.distance,o=void 0===i?100:i,a=t.threshold,s=void 0===a?.6:a,u=t.maxPatternLength,l=void 0===u?32:u,c=t.caseSensitive,h=void 0!==c&&c,d=t.tokenSeparator,v=void 0===d?/ +/g:d,f=t.findAllMatches,g=void 0!==f&&f,p=t.minMatchCharLength,y=void 0===p?1:p,m=t.id,n=void 0===m?null:m,i=t.keys,a=void 0===i?[]:i,u=t.shouldSort,c=void 0===u||u,d=t.getFn,f=void 0===d?I:d,p=t.sortFn,m=void 0===p?function(e,t){return e.score-t.score}:p,i=t.tokenize,u=void 0!==i&&i,d=t.matchAllTokens,p=void 0!==d&&d,i=t.includeMatches,d=void 0!==i&&i,i=t.includeScore,i=void 0!==i&&i,t=t.verbose,t=void 0!==t&&t;!function(e){if(!(e instanceof _))throw new TypeError("Cannot call a class as a function")}(this),this.options={location:r,distance:o,threshold:s,maxPatternLength:l,isCaseSensitive:h,tokenSeparator:v,findAllMatches:g,minMatchCharLength:y,id:n,keys:a,includeMatches:d,includeScore:i,shouldSort:c,getFn:f,sortFn:m,verbose:t,tokenize:u,matchAllTokens:p},this.setCollection(e),this._processKeys(a);}e.exports=n;},function(e,t,n){var s=n(2),u=n(3),c=n(6),n=(function(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r);}}(h.prototype,[{key:"search",value:function(e){var t=this.options,n=t.isCaseSensitive,r=t.includeMatches;if(n||(e=e.toLowerCase()),this.pattern===e){var i={isMatch:!0,score:0};return r&&(i.matchedIndices=[[0,e.length-1]]),i}var o=this.options,a=o.maxPatternLength,t=o.tokenSeparator;if(this.pattern.length>a)return s(e,this.pattern,t);n=this.options,i=n.location,o=n.distance,a=n.threshold,t=n.findAllMatches,n=n.minMatchCharLength;return u(e,this.pattern,this.patternAlphabet,{location:i,distance:o,threshold:a,findAllMatches:t,minMatchCharLength:n,includeMatches:r})}}]),h);function h(e,t){var n=t.location,r=void 0===n?0:n,i=t.distance,o=void 0===i?100:i,a=t.threshold,s=void 0===a?.6:a,u=t.maxPatternLength,l=void 0===u?32:u,n=t.isCaseSensitive,i=void 0!==n&&n,a=t.tokenSeparator,u=void 0===a?/ +/g:a,n=t.findAllMatches,a=void 0!==n&&n,n=t.minMatchCharLength,n=void 0===n?1:n,t=t.includeMatches,t=void 0!==t&&t;!function(e){if(!(e instanceof h))throw new TypeError("Cannot call a class as a function")}(this),this.options={location:r,distance:o,threshold:s,maxPatternLength:l,isCaseSensitive:i,tokenSeparator:u,findAllMatches:a,includeMatches:t,minMatchCharLength:n},this.pattern=i?e:e.toLowerCase(),this.pattern.length<=l&&(this.patternAlphabet=c(this.pattern));}e.exports=n;},function(e,t){var u=/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g;e.exports=function(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:/ +/g,n=new RegExp(t.replace(u,"\\$&").replace(n,"|")),r=e.match(n),n=!!r,i=[];if(n)for(var o=0,a=r.length;o<a;o+=1){var s=r[o];i.push([e.indexOf(s),s.length-1]);}return {score:n?.5:1,isMatch:n,matchedIndices:i}};},function(e,t,n){var k=n(4),w=n(5);e.exports=function(e,t,n,r){for(var i=r.location,o=void 0===i?0:i,a=r.distance,s=void 0===a?100:a,i=r.threshold,a=void 0===i?.6:i,i=r.findAllMatches,u=void 0!==i&&i,i=r.minMatchCharLength,i=void 0===i?1:i,r=r.includeMatches,r=void 0!==r&&r,l=o,c=e.length,h=a,d=e.indexOf(t,l),v=t.length,f=[],g=0;g<c;g+=1)f[g]=0;-1!==d&&(a=k(t,{errors:0,currentLocation:d,expectedLocation:l,distance:s}),h=Math.min(a,h),-1!==(d=e.lastIndexOf(t,l+v))&&(S=k(t,{errors:0,currentLocation:d,expectedLocation:l,distance:s}),h=Math.min(S,h))),d=-1;for(var p=[],y=1,m=v+c,I=1<<(v<=31?v-1:30),_=0;_<v;_+=1){for(var E=0,M=m;E<M;)k(t,{errors:_,currentLocation:l+M,expectedLocation:l,distance:s})<=h?E=M:m=M,M=Math.floor((m-E)/2+E);m=M;var O=Math.max(1,l-M+1),A=u?c:Math.min(l+M,c)+v,L=Array(A+2);L[A+1]=(1<<_)-1;for(var T=A;O<=T;--T){var N=T-1,b=n[e.charAt(N)];if(b&&(f[N]=1),L[T]=(L[T+1]<<1|1)&b,0!==_&&(L[T]|=(p[T+1]|p[T])<<1|1|p[T+1]),L[T]&I&&(y=k(t,{errors:_,currentLocation:N,expectedLocation:l,distance:s}))<=h){if(h=y,(d=N)<=l)break;O=Math.max(1,2*l-d);}}if(k(t,{errors:_+1,currentLocation:l,expectedLocation:l,distance:s})>h)break;p=L;}var S={isMatch:0<=d,score:0===y?.001:y};return r&&(S.matchedIndices=w(f,i)),S};},function(e,t){e.exports=function(e,t){var n=t.errors,r=void 0===n?0:n,i=t.currentLocation,n=void 0===i?0:i,i=t.expectedLocation,i=void 0===i?0:i,t=t.distance,t=void 0===t?100:t,e=r/e.length,n=Math.abs(i-n);return t?e+n/t:n?1:e};},function(e,t){e.exports=function(){for(var e,t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:[],n=1<arguments.length&&void 0!==arguments[1]?arguments[1]:1,r=[],i=-1,o=0,a=t.length;o<a;o+=1){var s=t[o];s&&-1===i?i=o:s||-1===i||((e=o-1)-i+1>=n&&r.push([i,e]),i=-1);}return t[o-1]&&n<=o-i&&r.push([i,o-1]),r};},function(e,t){e.exports=function(e){for(var t={},n=e.length,r=0;r<n;r+=1)t[e.charAt(r)]=0;for(var i=0;i<n;i+=1)t[e.charAt(i)]|=1<<n-i-1;return t};},function(e,t){function c(e){return Array.isArray?Array.isArray(e):"[object Array]"===Object.prototype.toString.call(e)}function h(t){return null==t?"":function(){if("string"==typeof t)return t;var e=t+"";return "0"==e&&1/t==-1/0?"-0":e}()}function d(e){return "string"==typeof e}function v(e){return "number"==typeof e}e.exports={get:function(e,t){var l=[];return function e(t,n){if(n){var r=n.indexOf("."),i=n,o=null;-1!==r&&(i=n.slice(0,r),o=n.slice(r+1));var a=t[i];if(null!=a)if(o||!d(a)&&!v(a))if(c(a))for(var s=0,u=a.length;s<u;s+=1)e(a[s],o);else o&&e(a,o);else l.push(h(a));}else l.push(t);}(e,t),l},isArray:c,isString:d,isNum:v,toString:h};}]);}(pe={exports:{}}),pe.exports),Ie=(ye=me)&&ye.__esModule&&Object.prototype.hasOwnProperty.call(ye,"default")?ye.default:ye,_e=(me.Fuse,{keys:[{name:"name",weight:.6},{name:"addressList",weight:.4}],threshold:.2}),Ee=function(){function t(e){u(this,t),this.fuseSearch=null,this.levels_=null,this.searchListEntities_=[],this.searchListIcons_=[],this.searchList_=[],this.venueModel=e,this.init();}return l(t,[{key:"init",value:function(){var e=this.venueModel.getGeometries().reduce(function(e,t){return e[t.getId()]=t,e},{});this.initEntityList(this.venueModel.entities),this.initIconList(e),this.levels_=this.venueModel.getLevels().map(function(e){return {levelId:e.getId(),levelName:e.getName(),drawingId:e.getDrawing().getId(),drawingName:e.getDrawing().getName()}});e=[].concat(L(this.searchListEntities_),L(this.searchListIcons_));this.searchList_=e.sort(function(e,t){return e.name.localeCompare(t.name)}),this.fuseSearch_=new Ie(this.searchList_,_e);}},{key:"initEntityList",value:function(e){e=(0<arguments.length&&void 0!==e?e:[]).map(function(e){return new ge({geometries:e.getGeometries(),addressList:e.getInternalAddress()||[],name:e.getName()||"",entity:e})});this.searchListEntities_=e;}},{key:"initIconList",value:function(e){e=0<arguments.length&&void 0!==e?e:{};this.searchListIcons_=Object.values(e).filter(function(e){return e.getIcon()}).map(function(e){var t=e.getIcon();return new ge({geometries:[e],icon:t.getSVG(),name:t.ar||""})});}},{key:"all",value:function(){return this.searchList_}},{key:"allIconTypes",value:function(){var e=this.searchListIcons_.reduce(function(e,t){return e[t.name]=t.name,e},{});return Object.keys(e)}},{key:"find",value:function(e){e=0<arguments.length&&void 0!==e?e:"";return ""===e?this.searchList_:this.fuseSearch_.search(e)}},{key:"groupByLevel",value:function(e){var t=0<arguments.length&&void 0!==e?e:this.searchList_;return this.levels_?L(this.levels_.flatMap(function(n){return O(O({},n),{},{results:t.filter(function(e){return t=n,0<(e=e).geometries.length&&e.geometries.find(function(e){return Number(e.getLevel().getId())===Number(t.levelId)});var t;})})})):[]}}]),t}(),Me="MFS",Oe=0,Ae=1,Le=2,Te=3,Ne=4,be=2,Se=0,ke=1,we=2,Pe=3,Ce="Point",xe="LineString",De="Polygon",Ve="MultiPoint",Re="MultiLineString",Ge="MultiPolygon",He=Object.freeze({STANDARD:"STANDARD",FLATTEN:"FLATTEN",OUTDOOR_MAIN:"OUTDOOR_MAIN",INDOOR_MAIN:"INDOOR_MAIN",NO_OUTDOORS:"NO_OUTDOORS",FLATTEN_INDOOR_MAIN:"FLATTEN_INDOOR_MAIN",FLATTEN_OUTDOOR_COPY:"FLATTEN_OUTDOOR_COPY"}),je=Object.freeze({THEME:"THEME",THEME_MAP:"THEME_MAP",PRESETS:"PRESETS",SDK_STRINGS:"SDK_STRINGS",ICON_FILE:"ICON_FILE",INPUT_COLORS:"INPUT_COLORS",BASE_MAP_INFO:"BASE_MAP_INFO",CONFIG_PROFILE:"CONFIG_PROFILE",NAV_THEME:"NAV_THEME",NAV_NAME_THEME:"NAV_NAME_THEME",NAV_PROP_MAP:"NAV_PROP_MAP",NAV_STRINGS:"NAV_STRINGS",NAV_THEME_MAP:"NAV_THEME_MAP",NAV_NAME_THEME_MAP:"NAV_NAME_THEME_MAP",V4_THEME_FAMILY:"V4_THEME_FAMILY",V4_MAPTYPE_THEME:"V4_MAPTYPE_THEME",ICON:"ICON",MARKER:"MARKER",PERMISSIONS:"PERMISSIONS",NAICS_ARRAY:"NAICS_ARRAY",NAICS_MAP:"NAICS_MAP"}),Fe=Object.freeze((c(zt={},je.THEME,"themeUrls"),c(zt,je.THEME_MAP,"themeMapUrl"),c(zt,je.PRESETS,"presetsUrl"),c(zt,je.SDK_STRINGS,"stringsUrl"),zt)),Ue=Object.freeze((c(Ft={},je.THEME,"themeOverrides"),c(Ft,je.THEME_MAP,"themeMapOverrides"),c(Ft,je.PRESETS,"presetOverrides"),c(Ft,je.SDK_STRINGS,"stringsOverrides"),c(Ft,je.INPUT_COLORS,"inputColorOverrides"),Ft)),Be=(Object.freeze((c(Ye={},je.THEME,["Modern","Standard","Factory","Navteq","TheBase","Westfield_noLabels","Westfield","TDM_noLabel"]),c(Ye,je.SDK_STRINGS,["Standard","SDK","sdk/standard"]),c(Ye,je.V4_THEME_FAMILY,["modern","standard"]),c(Ye,je.V4_MAPTYPE_THEME,["Airport Terminal","Airport","Casino","College Building","College Campus","Convention","General","Hospital","Outdoor","Retail","School Building","School Campus","Shopping Mall","Traffic","Train Station"]),c(Ye,je.NAV_THEME,["Factory","MapEditor"]),c(Ye,je.ICON,["Multicolor","Standard","TheBase","Factory"]),Ye)),Object.freeze((c(zt={},je.THEME,"Modern"),c(zt,je.THEME_MAP,"Standard"),c(zt,je.PRESETS,"Standard"),c(zt,je.SDK_STRINGS,"Standard"),c(zt,je.ICON_FILE,"Standard"),c(zt,je.INPUT_COLORS,"Standard"),c(zt,je.BASE_MAP_INFO,"Standard"),c(zt,je.CONFIG_PROFILE,"factory"),c(zt,je.NAV_THEME,"Factory"),c(zt,je.NAV_NAME_THEME,"FactoryName"),c(zt,je.NAV_PROP_MAP,"Standard"),c(zt,je.NAV_STRINGS,"Standard"),c(zt,je.NAV_THEME_MAP,"Standard"),c(zt,je.NAV_NAME_THEME_MAP,"StandardName"),c(zt,je.V4_THEME_FAMILY,"Standard"),c(zt,je.V4_MAPTYPE_THEME,"Standard"),c(zt,je.ICON,"Multicolor"),c(zt,je.MARKER,"Standard"),zt))),ze=Object.freeze({GEO_JSON:"GEO_JSON",V5_MAP:"V5_MAP",V5_NAV:"V5_NAV",V5_INFO:"V5_INFO",KML:"KML",SVG:"SVG",PNG:"PNG"}),Ye=Object.freeze((c(Ft={},ze.V5_MAP,{COMMUNITY_MAP:"COMMUNITY_MAP",COMMUNITY_DIRECTORY:"COMMUNITY_DIRECTORY",COMMUNITY_DETAIL:"COMMUNITY_DETAIL",LEVEL_GEOMETRY:"LEVEL_GEOMETRY",DRAWING_ENTITY:"DRAWING_ENTITY"}),c(Ft,ze.GEO_JSON,{COMMUNITY_MAP:"COMMUNITY_MAP",COMMUNITY_ENTITY:"COMMUNITY_ENTITY",PATH_LEVEL_GEOMETRY:"PATH_LEVEL_GEOMETRY",GEOJSON_LEVEL_GEOMETRY:"GEOJSON_LEVEL_GEOMETRY"}),c(Ft,ze.V5_NAV,{JSON_NAV:"JSON_NAV",BINARY_NAV:"BINARY_NAV",JSON_ENHANCED_NAV:"JSON_ENHANCED_NAV",BINARY_ENHANCED_NAV:"BINARY_ENHANCED_NAV"}),c(Ft,ze.V5_INFO,{GEOMETRY_INFO:"GEOMETRY_INFO"}),c(Ft,ze.SVG,{PLAIN:"PLAIN",PRETTY:"PRETTY",PRETTY_HORIZONTAL_LABEL:"PRETTY_HORIZONTAL_LABEL"}),c(Ft,ze.KML,{RASTER:"RASTER",VECTOR:"VECTOR",RASTER_HORIZONTAL:"RASTER_HORIZONTAL",VECTOR_HORIZONTAL:"VECTOR_HORIZONTAL"}),c(Ft,ze.PNG,{LOW_RESOLUTION:"LOW_RESOLUTION",HIGH_RESOLUTION:"HIGH_RESOLUTION",LOW_RESOLUTION_GEO:"LOW_RESOLUTION_GEO",HIGH_RESOLUTION_GEO:"HIGH_RESOLUTION_GEO",LOW_RESOLUTION_HORIZONTAL:"LOW_RESOLUTION_HORIZONTAL",HIGH_RESOLUTION_HORIZONTAL:"HIGH_RESOLUTION_HORIZONTAL",LOW_RESOLUTION_HORIZONTAL_GEO:"LOW_RESOLUTION_HORIZONTAL_GEO",HIGH_RESOLUTION_HORIZONTAL_GEO:"HIGH_RESOLUTION_HORIZONTAL_GEO"}),Ft));function Ze(){}function We(){We.init.call(this);}function Je(e){return void 0===e._maxListeners?We.defaultMaxListeners:e._maxListeners}function Ke(e,t,n,r){var i,o;if("function"!=typeof n)throw new TypeError('"listener" argument must be a function');return (i=e._events)?(i.newListener&&(e.emit("newListener",t,n.listener||n),i=e._events),o=i[t]):(i=e._events=new Ze,e._eventsCount=0),o?("function"==typeof o?o=i[t]=r?[n,o]:[o,n]:r?o.unshift(n):o.push(n),o.warned||(r=Je(e))&&0<r&&o.length>r&&(o.warned=!0,(r=new Error("Possible EventEmitter memory leak detected. "+o.length+" "+t+" listeners added. Use emitter.setMaxListeners() to increase limit")).name="MaxListenersExceededWarning",r.emitter=e,r.type=t,r.count=o.length,console.warn)):(o=i[t]=n,++e._eventsCount),e}function Xe(e,t,n){var r=!1;function i(){e.removeListener(t,i),r||(r=!0,n.apply(e,arguments));}return i.listener=n,i}function Qe(e){var t=this._events;if(t){e=t[e];if("function"==typeof e)return 1;if(e)return e.length}return 0}function qe(e,t){for(var n=new Array(t);t--;)n[t]=e[t];return n}Ze.prototype=Object.create(null),(We.EventEmitter=We).usingDomains=!1,We.prototype.domain=void 0,We.prototype._events=void 0,We.prototype._maxListeners=void 0,We.defaultMaxListeners=10,We.init=function(){this.domain=null,We.usingDomains&&(void 0).active,this._events&&this._events!==Object.getPrototypeOf(this)._events||(this._events=new Ze,this._eventsCount=0),this._maxListeners=this._maxListeners||void 0;},We.prototype.setMaxListeners=function(e){if("number"!=typeof e||e<0||isNaN(e))throw new TypeError('"n" argument must be a positive number');return this._maxListeners=e,this},We.prototype.getMaxListeners=function(){return Je(this)},We.prototype.emit=function(e,t,n,r){var i,o,a,s="error"===e,u=this._events;if(u)s=s&&null==u.error;else if(!s)return !1;if(l=this.domain,s){if(s=t,l)return (s=s||new Error('Uncaught, unspecified "error" event')).domainEmitter=this,s.domain=l,s.domainThrown=!1,l.emit("error",s),!1;if(s instanceof Error)throw s;var l=new Error('Uncaught, unspecified "error" event. ('+s+")");throw l.context=s,l}if(!(i=u[e]))return !1;var c,h="function"==typeof i;switch(c=arguments.length){case 1:!function(e,t,n){if(t)e.call(n);else for(var r=e.length,i=qe(e,r),o=0;o<r;++o)i[o].call(n);}(i,h,this);break;case 2:!function(e,t,n,r){if(t)e.call(n,r);else for(var i=e.length,o=qe(e,i),a=0;a<i;++a)o[a].call(n,r);}(i,h,this,t);break;case 3:!function(e,t,n,r,i){if(t)e.call(n,r,i);else for(var o=e.length,a=qe(e,o),s=0;s<o;++s)a[s].call(n,r,i);}(i,h,this,t,n);break;case 4:!function(e,t,n,r,i,o){if(t)e.call(n,r,i,o);else for(var a=e.length,s=qe(e,a),u=0;u<a;++u)s[u].call(n,r,i,o);}(i,h,this,t,n,r);break;default:for(o=new Array(c-1),a=1;a<c;a++)o[a-1]=arguments[a];!function(e,t,n,r){if(t)e.apply(n,r);else for(var i=e.length,o=qe(e,i),a=0;a<i;++a)o[a].apply(n,r);}(i,h,this,o);}return !0},We.prototype.addListener=function(e,t){return Ke(this,e,t,!1)},We.prototype.on=We.prototype.addListener,We.prototype.prependListener=function(e,t){return Ke(this,e,t,!0)},We.prototype.once=function(e,t){if("function"!=typeof t)throw new TypeError('"listener" argument must be a function');return this.on(e,Xe(this,e,t)),this},We.prototype.prependOnceListener=function(e,t){if("function"!=typeof t)throw new TypeError('"listener" argument must be a function');return this.prependListener(e,Xe(this,e,t)),this},We.prototype.removeListener=function(e,t){var n,r,i,o,a;if("function"!=typeof t)throw new TypeError('"listener" argument must be a function');if(!(r=this._events))return this;if(!(n=r[e]))return this;if(n===t||n.listener&&n.listener===t)0==--this._eventsCount?this._events=new Ze:(delete r[e],r.removeListener&&this.emit("removeListener",e,n.listener||t));else if("function"!=typeof n){for(i=-1,o=n.length;0<o--;)if(n[o]===t||n[o].listener&&n[o].listener===t){a=n[o].listener,i=o;break}if(i<0)return this;if(1===n.length){if(n[0]=void 0,0==--this._eventsCount)return this._events=new Ze,this;delete r[e];}else !function(e,t){for(var n=t,r=n+1,i=e.length;r<i;n+=1,r+=1)e[n]=e[r];e.pop();}(n,i);r.removeListener&&this.emit("removeListener",e,a||t);}return this},We.prototype.removeAllListeners=function(e){var t,n=this._events;if(!n)return this;if(!n.removeListener)return 0===arguments.length?(this._events=new Ze,this._eventsCount=0):n[e]&&(0==--this._eventsCount?this._events=new Ze:delete n[e]),this;if(0===arguments.length){for(var r,i=Object.keys(n),o=0;o<i.length;++o)"removeListener"!==(r=i[o])&&this.removeAllListeners(r);return this.removeAllListeners("removeListener"),this._events=new Ze,this._eventsCount=0,this}if("function"==typeof(t=n[e]))this.removeListener(e,t);else if(t)for(;this.removeListener(e,t[t.length-1]),t[0];);return this},We.prototype.listeners=function(e){var t=this._events,n=t&&(n=t[e])?"function"==typeof n?[n.listener||n]:function(e){for(var t=new Array(e.length),n=0;n<t.length;++n)t[n]=e[n].listener||e[n];return t}(n):[];return n},We.listenerCount=function(e,t){return "function"==typeof e.listenerCount?e.listenerCount(t):Qe.call(e,t)},We.prototype.listenerCount=Qe,We.prototype.eventNames=function(){return 0<this._eventsCount?Reflect.ownKeys(this._events):[]};var $e="venues-ui-button--active",et="venues-ui-button",tt="venues-ui__drawings",nt="data-drawing",rt=function(){function o(e,t,n){var r=this;u(this,o),this.clickHandler=n,this.containerDiv=document.createElement("div"),this.containerDiv.setAttribute("class",tt);var i=document.createElement("div");i.setAttribute("class","trigger ".concat(et));n=document.createElement("div");n.setAttribute("class","arrow arrow--down"),i.appendChild(n),i.addEventListener("click",function(){i.classList.toggle($e),r.containerButtons.classList.toggle("drawings--open");}),this.containerDiv.appendChild(i),this.containerButtons=document.createElement("div"),this.containerButtons.setAttribute("class","drawings"),this.containerDiv.appendChild(this.containerButtons),t&&this.update(t),e.appendChild(this.containerDiv);}return l(o,[{key:"drawButton",value:function(e,t,n){var r=this,i=document.createElement("div"),n=Number(n)===Number(e);i.setAttribute("class",n?"".concat(et," ").concat($e):et),i.innerHTML=t,i.setAttribute(nt,e),i.addEventListener("click",function(){r.switch(e),r.clickHandler(e);}),this.containerButtons.appendChild(i);}},{key:"switch",value:function(e){this.containerButtons.querySelectorAll(".".concat(tt," .").concat($e)).forEach(function(e){return e.setAttribute("class",et)});e=this.containerButtons.querySelector("[".concat(nt,"='").concat(e,"']"));e&&e.setAttribute("class","".concat(et," ").concat($e));}},{key:"update",value:function(n){var r=this;this.containerButtons.innerHTML="";var e=function(e){e=e.getDrawings();return new Map(e.map(function(e){var t=e.getDisplayName()||e.getName();return [e.getId(),t]}))}(n);0<e.size&&e.forEach(function(e,t){return r.drawButton(t,e,n.getRootDrawing().getId())});}}]),o}(),it="venues-ui-button--active",ot="venues-ui-button",at="levels",st="data-level",ut="venues-ui__levels",lt=4,ct=function(){function o(e,t,n,r){var i=4<arguments.length&&void 0!==arguments[4]?arguments[4]:lt;u(this,o),this.clickHandler=r,this.levelButtonCount=i,this.currentScrollIndex=0,this.containerUI=document.createElement("div"),this.containerUI.setAttribute("class","".concat(ut)),this.containerButtons=document.createElement("div"),this.containerButtons.setAttribute("class",at),this.containerUI.appendChild(this.containerButtons),t&&this.update(t,n),e.appendChild(this.containerUI);}return l(o,[{key:"clear",value:function(){this.containerButtons.innerHTML="",this.buttonScrollUp&&(this.containerUI.removeChild(this.buttonScrollUp),this.buttonScrollUp=null),this.buttonScrollDown&&(this.containerUI.removeChild(this.buttonScrollDown),this.buttonScrollDown=null);}},{key:"drawLevelButton",value:function(e,t){var n=this,r=document.createElement("div");r.innerHTML=t,r.style.fontSize="".concat(Math.max(Math.min(28.8/t.length,11.52),10),"px"),r.style.display="block",r.setAttribute("class",ot),r.setAttribute(st,e),r.addEventListener("click",function(){n.switch(e),n.clickHandler(e);}),this.containerButtons.appendChild(r);}},{key:"drawScrollButtons",value:function(){var e=this;this.buttonScrollUp=document.createElement("div"),this.buttonScrollUp.setAttribute("class","".concat(ot," ").concat(ot,"--up"));var t=document.createElement("div");t.setAttribute("class","arrow arrow--up"),this.buttonScrollUp.appendChild(t),this.buttonScrollUp.addEventListener("click",function(){return e.scroll(1)}),this.containerUI.insertBefore(this.buttonScrollUp,this.containerButtons),this.buttonScrollDown=document.createElement("div"),this.buttonScrollDown.setAttribute("class","".concat(ot," ").concat(ot,"--down"));t=document.createElement("div");t.setAttribute("class","arrow arrow--down"),this.buttonScrollDown.appendChild(t),this.buttonScrollDown.addEventListener("click",function(){return e.scroll(-1)}),this.containerUI.appendChild(this.buttonScrollDown);}},{key:"scroll",value:function(e){var t,n=0<arguments.length&&void 0!==e?e:0,r=Array.from(this.containerButtons.querySelectorAll(".".concat(ot))).reverse(),i=[];0<=n?(this.currentScrollIndex=Math.min(this.currentScrollIndex+n,r.length-this.levelButtonCount),e=Math.min(this.currentScrollIndex,r.length-this.levelButtonCount),t=Math.min(this.currentScrollIndex+this.levelButtonCount,r.length),i=r.slice(e,t)):n<0&&(this.currentScrollIndex=Math.max(this.currentScrollIndex+n,0),t=Math.max(0,this.currentScrollIndex),n=Math.min(r.length,this.currentScrollIndex+this.levelButtonCount),i=r.slice(t,n)),r.forEach(function(e){-1!==i.indexOf(e)?e.style.display="block":e.style.display="none";}),this.buttonScrollDown&&(0===this.currentScrollIndex?this.buttonScrollDown.setAttribute("disabled","disabled"):this.buttonScrollDown.removeAttribute("disabled")),this.buttonScrollUp&&(this.currentScrollIndex===r.length-this.levelButtonCount?this.buttonScrollUp.setAttribute("disabled","disabled"):this.buttonScrollUp.removeAttribute("disabled"));}},{key:"switch",value:function(e){this.containerButtons.querySelectorAll(".".concat(it)).forEach(function(e){return e.setAttribute("class",ot)});var t=this.containerButtons.querySelector(".".concat(ut," [").concat(st,"='").concat(e,"']"));t&&(e=Array.from(this.containerButtons.querySelectorAll(".".concat(ot))).reverse(),t.setAttribute("class","".concat(ot," ").concat(it)),((t=e.indexOf(t))<this.currentScrollIndex||t>=this.currentScrollIndex+lt)&&this.scroll(t-this.currentScrollIndex));}},{key:"update",value:function(e,t){var n=this,t=function(e){return new Map((0<arguments.length&&void 0!==e?e:[]).map(function(e){return [e.getZIndex(),e.getShortName()||e.getDisplayName()||e.getName()]}))}(function(e,t){if(t!==He.FLATTEN)return e.getLevels();e=e.getVenueModel().getLevelMapFlattenedByZIndex_();return Object.values(e).map(function(e){return e[0]})}(e,t).sort(function(e,t){return t.getZIndex()-e.getZIndex()})),r=e.getMainLevel().getZIndex();this.clear(),t.forEach(function(e,t){return n.drawLevelButton(t,e)}),t.size>this.levelButtonCount&&(t.size>this.levelButtonCount+1?this.currentScrollIndex=Math.min(Array.from(t).reverse().findIndex(function(e){return e[0]===r}),t.size-this.levelButtonCount):this.currentScrollIndex=0,this.drawScrollButtons(),this.scroll(0)),this.switch(r);}}]),o}(),ht={VENUE_DATA_LOADED:"VENUE_DATA_LOADED",VENUE_MAP_DATA_LOADED:"VENUE_MAP_DATA_LOADED",VENUE_ENTITY_DATA_LOADED:"VENUE_ENTITY_DATA_LOADED",VENUE_DATA_MODEL_LOADED:"VENUE_DATA_MODEL_LOADED",VENUE_NAV_DATA_LOADED:"VENUE_NAV_DATA_LOADED",META_DATA_LOADED:"META_DATA_LOADED",META_DATA_MODEL_LOADED:"META_DATA_MODEL_LOADED",META_DATA_MODEL_UPDATED:"META_DATA_MODEL_UPDATED",VENUE_ICONS_LOADED:"VENUE_ICONS_LOADED"},dt=(Object.freeze((c(zt={},ht.VENUE_DATA_LOADED,{description:"event fired when all requested files along with metadata & overrides are loaded",emitTemplate:{}}),c(zt,ht.VENUE_MAP_DATA_LOADED,{description:"event fired when requested levels, drawings & community files are loaded",emitTemplate:{}}),c(zt,ht.VENUE_ENTITY_DATA_LOADED,{description:"event fired when requested entity data is loaded",emitTemplate:{}}),c(zt,ht.VENUE_DATA_MODEL_LOADED,{description:"event fired when a map file is loaded",emitTemplate:{}}),c(zt,ht.VENUE_NAV_DATA_LOADED,{description:"event fired when requested navigation product is loaded",emitTemplate:{}}),c(zt,ht.META_DATA_LOADED,{description:"event fired when all requested meta files are loaded except icon & marker",emitTemplate:{}}),c(zt,ht.META_DATA_MODEL_LOADED,{description:"event fired when a specific model is loaded except icon & marker",emitTemplate:{}}),c(zt,ht.META_DATA_MODEL_UPDATED,{description:"event fired when a specific meta override is added or removed",emitTemplate:{}}),c(zt,ht.VENUE_ICONS_LOADED,{description:"event fired when all icons of venue are loaded",emitTemplate:{}}),zt)),new We);dt.EVENT_NAME=ht,dt.on("newListener",function(e){});function vt(t,n){var r,i,o,a,s=0;Object.keys(n).forEach(function(e){for(r=n[e],null==(o=r.priority)&&(o=0),a=!1;!a;)s<t.length?(i=t[s],null==(i=i.priority)&&(i=0)):i=Number.MAX_VALUE,o<=i&&(t.splice(s,0,r),a=!0),s+=1;});}var ft=Math.PI/180,gt=180/Math.PI,pt=function(){function d(){u(this,d);}return l(d,null,[{key:"toRadians",value:function(e){return e*ft}},{key:"toDegrees",value:function(e){return e*gt}},{key:"getInverseTransform",value:function(e){var t=e[0]*e[3]-e[1]*e[2],t=[e[3]/t,-e[1]/t,-e[2]/t,e[0]/t,0,0];return t[4]=-(t[0]*e[4]+t[2]*e[5]),t[5]=-(t[1]*e[4]+t[3]*e[5]),t}},{key:"applyTransformToPoint",value:function(e,t){return [t[0]*e[0]+t[1]*e[2]+e[4],t[0]*e[1]+t[1]*e[3]+e[5]]}},{key:"transformProduct",value:function(e,t){var n=[0,0,0,0,0,0];return n[0]=t[0]*e[0]+t[2]*e[1],n[1]=t[1]*e[0]+t[3]*e[1],n[2]=t[0]*e[2]+t[2]*e[3],n[3]=t[1]*e[2]+t[3]*e[3],n[4]=t[0]*e[4]+t[2]*e[5]+t[4],n[5]=t[1]*e[4]+t[3]*e[5]+t[5],n}},{key:"convertLonLatToMerc",value:function(e){var t=e[0]*ft,e=e[1]*ft,e=Math.sin(e);return [.5+t/(2*Math.PI),.5-Math.log((1+e)/(1-e))/(4*Math.PI)]}},{key:"convertMercToLatLon",value:function(e){var t=2*Math.PI*(e[0]-.5),e=Math.atan(Math.sinh(2*Math.PI*(.5-e[1])));return [t/ft,e/ft]}},{key:"getTransformScale",value:function(e){return Math.sqrt(e[0]*e[3]-e[1]*e[2])}},{key:"getLonLatToMercTransform",value:function(e){var t=[1/360,0,0,-1/(360*Math.cos(e[1]*ft)),0,0],n=d.applyTransformToPoint(t,e),e=d.convertLonLatToMerc(e);return t[4]=e[0]-n[0],t[5]=e[1]-n[1],t}},{key:"getNatToMercTransform",value:function(e){var t=[e[4],e[5]],t=d.getLonLatToMercTransform(t);return d.transformProduct(e,t)}},{key:"convertMxMy2LonLat",value:function(e,t){return e.length&&t.length?d.applyTransformToPoint(e,t):[]}},{key:"convertLonLat2MxMy",value:function(e,t){if(!e.length||!t.length)return [];e=d.getInverseTransform(e);return d.applyTransformToPoint(e,t)}},{key:"getFlattenedQuadraticBezierCurve",value:function(e,t,n,r){var i=[],o=3<arguments.length&&void 0!==r?r:10;o<1&&(o=6);for(var a=0;a<=o;a+=1){var s=a/o,u=(1-s)*(1-s),l=2*s*(1-s),c=s*s,s=u*e[0]+l*t[0]+c*n[0],c=u*e[1]+l*t[1]+c*n[1];i.push([s,c]);}return i}},{key:"getFlattenedCubicBezierCurve",value:function(e,t,n,r,i){var o=[],a=4<arguments.length&&void 0!==i?i:10;a<1&&(a=6);for(var s=0;s<=a;s+=1){var u=s/a,l=(1-u)*(1-u)*(1-u),c=3*u*(1-u)*(1-u),h=3*u*u*(1-u),d=u*u*u,u=l*e[0]+c*t[0]+h*n[0]+d*r[0],d=l*e[1]+c*t[1]+h*n[1]+d*r[1];o.push([u,d]);}return o}},{key:"getRectangularCoordinatesOfLabelArea",value:function(e,t,n){var r=!(2<arguments.length&&void 0!==n)||n,i=A(e,6),o=i[0],a=i[1],s=i[2],u=i[3],n=i[5],i=d.getDeltaLonLatForMeterAtGivenLonLat(o,a),e=e[4];return r?(n&&(e*=-1),null!=t&&(e=(e+=t<0?2*Math.PI+t:t)<0?2*Math.PI+e:e)):e=0,d.getRectVerticesFromSignatureRectRepresentation([o,a],{xLength:s,yLength:u},e,i)}},{key:"getRotatedPoint",value:function(e,t,n,r){var i=!(2<arguments.length&&void 0!==n)||n,o=3<arguments.length&&void 0!==r?r:[0,0],a=Math.cos(t),n=Math.sin(t),r=e[0]-o[0],t=e[1]-o[1],e=[];return [(e=i?[r*a+t*n,t*a-r*n]:[r*a-t*n,t*a+r*n])[0]+o[0],e[1]+o[1]]}},{key:"getRectVerticesFromSignatureRectRepresentation",value:function(e,t,n,r,i){var o=t.xLength,t=t.yLength,a=!(4<arguments.length&&void 0!==i)||i,e=A(e,2),s=e[0],u=e[1],l=o/2,H=t/2,r=A(r,2),c=r[0],h=r[1];return [[1,1],[-1,1],[-1,-1],[1,-1]].map(function(e){return [e[0]*l,e[1]*H]}).map(function(e){return d.getRotatedPoint(e,n,a)}).map(function(e){return [e[0]*c,e[1]*h]}).map(function(e){return [e[0]+s,e[1]+u]})}},{key:"getScaleFactorForRectInSpace",value:function(e,t,n,r){n=e/n,r=t/r;return r<n?r:n}},{key:"getDeltaLonLatForMeterAtGivenLonLat",value:function(e,t){return [1/6371e3*(180/Math.PI)/Math.cos(t*Math.PI/180),1/6371e3*(180/Math.PI)]}},{key:"getBoundingBoxVertices",value:function(e){var t=0<arguments.length&&void 0!==e?e:[],e=[[Number.POSITIVE_INFINITY,Number.POSITIVE_INFINITY],[Number.NEGATIVE_INFINITY,Number.NEGATIVE_INFINITY]];return t.reduce(function(e,t){return [[Math.min(t[0],e[0][0]),Math.min(t[1],e[0][1])],[Math.max(t[0],e[1][0]),Math.max(t[1],e[1][1])]]},e)}},{key:"isPointInBoundingBox",value:function(e,t){if(e&&t){var n=A(e,2),r=n[0],i=n[1],o=A(t,2),e=A(o[0],2),n=e[0],t=e[1],e=A(o[1],2),o=e[0],e=e[1];return r<=o&&n<=r&&i<=e&&t<=i}}},{key:"isPointOnLineSegment",value:function(e,t,n){var r=A(e,2),i=r[0],o=r[1],a=A(t,2),e=a[0],r=a[1],t=A(n,2),a=t[0],n=t[1],t=(r-o)*(n-o)<=0;return e===a?e===i&&t:o-n==(n-r)/(a-e)*(i-a)&&t}},{key:"rayIntersectLineSegment",value:function(e,t,n){var r=A(e,2),i=r[0],o=r[1],e=A(t,2),r=e[0],t=e[1],e=A(n,2),n=e[0],e=e[1];if(r===n)return !1;r=(i-r)/(n-r);return 0<=r&&r<1&&o<(e-t)*r+t}},{key:"isPointInPolygon",value:function(e,t){var e=A(e,2),n=e[0],r=e[1],e=t.length;if(e<3)return !1;var i=0,o=t[e-1];return t.forEach(function(e){d.rayIntersectLineSegment([n,r],o,e)&&(i+=1),o=e;}),i%2!=0}},{key:"isPointOnLineString",value:function(e,t){var e=A(e,2),n=e[0],r=e[1],i=t.length;if(i<2)return !1;for(var o=t[i-1],a=0;a<i;a+=1){var s=t[a];if(d.isPointOnLineSegment([n,r],o,s))return !0;o=t[a];}return !1}},{key:"getAreaOfPolygon",value:function(e){var t=e.length;if(t<3)return null;var o=0,a=e[t-1];return e.forEach(function(e){var t,n,r,i;o+=.5*(n=e,r=A(t=a,2),i=r[0],t=r[1],r=A(n,2),n=r[0],i*r[1]-t*n),a=e;}),o}},{key:"getDistanceBetweenPoints",value:function(e,t){var n=A(e,2),e=n[0],n=n[1],t=A(t,2),e=e-t[0],t=n-t[1];return Math.sqrt(e*e+t*t)}}]),d}(),yt=function(){function e(){u(this,e);}return l(e,null,[{key:"get",value:function(t,e){return fetch(t,1<arguments.length&&void 0!==e?e:{method:"GET"}).then(function(e){return e.ok?e.json():Promise.reject(new Error("Call failed for ".concat(t," : ").concat(e.status," ").concat(e.statusText)))})}}]),e}(),mt=!1,It=function(){function M(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:mt;u(this,M),e&&Object.assign(this,e),this.splitIconGeomBasisGeomType_=t,this.splitIconGeomBasisGeomType_&&this.splitMultiGeom();}return l(M,[{key:"flattenIconShape",value:function(e){var t,n=0<arguments.length&&void 0!==e&&e;this.isFlattened||(t=[],(e=this.g)&&e.forEach(function(e){var c,h=[];e.shp&&e.shp.forEach(function(e){var t,n=A(e,7),r=n[0],i=n[1],o=n[2],a=n[3],s=n[4],u=n[5],l=n[6];switch(r){case Oe:case Ae:h.push(e),c=[i,o];break;case Le:t=pt.getFlattenedQuadraticBezierCurve(c,[i,o],[a,s]),c=[a,s];break;case Te:t=pt.getFlattenedCubicBezierCurve(c,[i,o],[a,s],[u,l]),c=[u,l];break;case Ne:h.push(e),c=void 0;}t&&(t.splice(0,2),t.forEach(function(e){h.push([1].concat(L(e)));}));}),t.push(O(O({},e),{shp:h}));}),n&&(this.g_original=e),this.g=t,this.isFlattened=!0);}},{key:"splitMultiGeom",value:function(){var e=this;if(this.isIconGeomSplittedBasisGeomType)return this.isIconWithHole;this.splitIconGeomBasisGeomType_||(this.splitIconGeomBasisGeomType_=!0);var f=be,t=this.g,g=[],p=[],n=!1,y=!0,m=-1,I=Se,_=ke,E=we,r=Pe;return !!t&&(t.forEach(function(c){var h,d=[],v=[];c.gt===r||(c.shp.forEach(function(e){var t=A(e,7),n=t[0],r=t[1],i=t[2],o=t[3],a=t[4],s=t[5],u=t[6],l=null;switch(n){case Oe:d.push([r,i]),h=[r,i],y||m!==_&&m!==I||g.push(O(O({},c),{},{st:f},{gt:m,shp:p})),m=I,y=!(p=[]),p.push(e);break;case Ae:d.push([r,i]),h=[r,i],m===E||m!==I&&m!==_||(m=_,p.push(e));break;case Le:(l=pt.getFlattenedQuadraticBezierCurve(h,[r,i],[o,a],15)).splice(0,2),d.push.apply(d,L(l)),h=[o,a],m===E||m!==I&&m!==_||(m=_,p.push(e));break;case Te:(l=pt.getFlattenedCubicBezierCurve(h,[r,i],[o,a],[s,u],15)).splice(0,2),d.push.apply(d,L(l)),h=[s,u],m===E||m!==I&&m!==_||(m=_,p.push(e));break;case Ne:p.push(e),m=E,y=!0,2<d.length&&v.push({shp:p,area:pt.getAreaOfPolygon(d),points:d,children:[]}),h=void 0,d=[];}},e),M.getLinkedParentChildPolygonArray(v).forEach(function(e){var t=[];t.push.apply(t,L(e.shp)),e.children.forEach(function(e){n=!0,t.push.apply(t,L(e.shp));}),g.push(O(O({},c),{},{st:f},{gt:we,shp:t}));}));},this),this.g=g,this.isIconGeomSplittedBasisGeomType=!0,this.isIconWithHole=n,this.isIconWithHole)}},{key:"getIconWithOriginTranslatedToIconCenter",value:function(){var t=new M(this,this.splitIconGeomBasisGeomType_),c=Number.parseInt(t.w,10)/2*1,h=Number.parseInt(t.h,10)/2*1;return t.g=[],this.g&&this.g.forEach(function(e){var l=[];e.shp&&e.shp.forEach(function(e){var t=A(e,7),n=t[0],r=t[1],i=t[2],o=t[3],a=t[4],s=t[5],u=t[6];switch(n){case 0:case 1:l.push([n,r-c,i-h]);break;case 2:l.push([n,r-c,i-h,o-c,a-h]);break;case 3:l.push([n,r-c,i-h,o-c,a-h,s-c,u-h]);break;case 4:l.push(e);}}),t.g.push(O(O({},e),{shp:l}));}),t}},{key:"getTransformedIconThatFitsInLabelArea",value:function(e,t,n){var r=1<arguments.length&&void 0!==t?t:0,t=!(2<arguments.length&&void 0!==n)||n,n=new M(this,this.splitIconGeomBasisGeomType_),g=M.getParamForTransformedIconThatFitsInLabelArea(n,e,r,t),t=g.scaleFactor;n.w=t,n.h=t;var i=[];return n.g&&n.g.forEach(function(e){var f=[];e.shp&&e.shp.forEach(function(e){var t=A(e,7),n=t[0],r=t[1],i=t[2],o=t[3],a=t[4],s=t[5],t=t[6],i=A(M.getTransformedIconPointThatFitsInLabelArea([r,i],g),2),u=i[0],l=i[1],a=A(M.getTransformedIconPointThatFitsInLabelArea([o,a],g),2),c=a[0],h=a[1],t=A(M.getTransformedIconPointThatFitsInLabelArea([s,t],g),2),d=t[0],v=t[1];switch(n){case Oe:case Ae:f.push([n,u,l]);break;case Le:f.push([n,u,l,c,h]);break;case Te:f.push([n,u,l,c,h,d,v]);break;case Ne:f.push(e);}}),i.push(O(O({},e),{shp:f}));}),n.g=i,n}},{key:"getSVG",value:function(e){var t,n,r='<?xml version="1.0" encoding="utf-8"?>',i=this.w||50,o=this.h||50,a=this.g;if(r+='<svg viewBox="0 0 '.concat(i," ").concat(o,'" xmlns="http://www.w3.org/2000/svg" width="').concat(i,'" height="').concat(o,'">'),r+="<g>",a&&0<a.length)for(var s=0;s<a.length;s+=1){r+="<path ",a[s].gw&&(r+=' stroke-width="'.concat(a[s].gw,'"')),e?r+=' fill="'.concat(e,'"'):a[s].os&&a[s].os.m?r+=' fill="'.concat(a[s].os.m,'"'):r+=0===s?' fill="#006BB7"':' fill="#ffffff"',r+=' d="';for(var u=0;u<a[s].shp.length;u+=1)for(var l=0;l<a[s].shp[u].length;l+=1)r+=0===l?(t=a[s].shp[u][l],n=void 0,(c(n={},Oe,"M"),c(n,Ae,"L"),c(n,Le,"Q"),c(n,Te,"C"),c(n,Ne,"Z"),n)[t]):a[s].shp[u][l],0===l||l+1===a[s].shp[u][l].length?r+="":r+=" ";r+='" ></path>';}return r+="</g>",r+="</svg>"}}],[{key:"getParamForTransformedIconThatFitsInLabelArea",value:function(e,t,n,r){var i=2<arguments.length&&void 0!==n?n:0,o=!(3<arguments.length&&void 0!==r)||r,a=A(t,5),s=a[0],u=a[1],n=a[2],r=a[3],t=a[4],a=(o?0:t)+i,o=A(pt.getDeltaLonLatForMeterAtGivenLonLat(s,u),2),t=o[0],i=o[1],o=[Number.parseInt(e.w,10),Number.parseInt(e.h,10)],e=o[0],o=o[1];return {labelCenterX:s,labelCenterY:u,iconWidth:e,iconHeight:o,deltaLonPerMeter:t,deltaLatPerMeter:i,scaleFactor:pt.getScaleFactorForRectInSpace(n,r,e,o),effectiveRotation:a}}},{key:"getTransformedIconPointThatFitsInLabelArea",value:function(e,t){var n=A(e,2),r=n[0],i=n[1];if(void 0===r||void 0===i||null===r||null===i)return [];var o=t.labelCenterX,a=t.labelCenterY,s=t.iconWidth,u=t.iconHeight,l=t.deltaLonPerMeter,e=t.deltaLatPerMeter,n=t.scaleFactor,t=t.effectiveRotation,r=r,i=i;r-=+s/2,i-=+u/2,i*=-1;l=r*=n*l,e=i*=n*e,r=l*Math.cos(t)+e*Math.sin(t),i=e*Math.cos(t)-l*Math.sin(t);return [r+=o,i+=a]}},{key:"getWebGLSuitableCoordinatesOfIconSubGeom",value:function(e){var i,t=e.st,n=e.gt,r=e.shp,o=[];if(t!==be||!r||!n)return o;switch(n){case we:r.forEach(function(e){var t=A(e,3),e=t[0],n=t[1],r=t[2];switch(e){case Oe:(i=[]).push([n,r]);break;case Ae:i.push([n,r]);break;case Ne:o.push(i);}});break;case ke:r.forEach(function(e){var t=A(e,3),e=t[1],t=t[2];o.push([e,t]);});}return o}},{key:"getLinkedParentChildPolygonArray",value:function(e){var t=[];e.sort(function(e,t){return Math.abs(t.area)-Math.abs(e.area)});for(var n=0;n<e.length;n+=1){for(var r=null,i=e[n],o=i.points[0],a=n-1;0<=a;--a){var s=e[a],u=i.area*s.area<0;if(u)if(pt.isPointInPolygon(o,s.points)||pt.isPointOnLineString(o,s.points)){r=s;break}}(r?r.children:t).push(i);}return t}}]),M}(),_t=Object.freeze({TEXT:"",ICON:"icon:",IMAGE:"icon:"}),Et=Object.freeze({VALUE:"<value>",SHORT:"<short>",LONG:"<long>",FULL:"<full>"}),Mt=Object.freeze({NONE:0,TEXT:1,ICON:2,IMAGE:3}),Ot=dt.EVENT_NAME,At=["resetBaseMetaFileRules_","updateOverridableComponents"],Lt=function(t){var n=[];return At.forEach(function(e){t[e]||n.push(e);}),0<n.length?n:null},Tt=function(){function i(e,t,n){if(u(this,i),!e)throw new Error("one should not instantiate object of this class without apt payload");var r=Lt(this);if(r)throw new Error("function definition missing in the implementation ".concat(r.join()));this.metaFileIdentifier=t,this.metaInformation_=n,this.basedata_=O({},e),this.baseOverrides_=[],this.customOverrides_=[],this.resetBaseMetaFileRules_();}return l(i,[{key:"applyOverride",value:function(e,t,n){var r=!(1<arguments.length&&void 0!==t)||t,t=2<arguments.length&&void 0!==n&&n;e&&(t||(r?this.customOverrides_:this.baseOverrides_).push(e),this.updateOverridableComponents(e),n=this.getMetaInformation(),!t&&n&&n.config.emitEventOnOverrideUpdate&&(e={applyOverride:!0,metaFileIdentifier:this.metaFileIdentifier,isCustomOverride:r,metaInformation:n,overrideJson:e},dt.emit(Ot.META_DATA_MODEL_UPDATED,e)));}},{key:"undoOverride",value:function(){var e,t,n=this;0!==this.customOverrides_.length&&(t=this.customOverrides_.pop(),this.resetBaseMetaFileRules_(),this.baseOverrides_.forEach(function(e){return n.applyOverride(e,!1,!0)}),this.customOverrides_.forEach(function(e){return n.applyOverride(e,!0,!0)}),(e=this.getMetaInformation())&&e.config.emitEventOnOverrideUpdate&&(t={metaFileIdentifier:this.metaFileIdentifier,undoOverride:!0,metaInformation:e,overrideJson:t},dt.emit(Ot.META_DATA_MODEL_UPDATED,t)));}},{key:"getMetaInformation",value:function(){return this.metaInformation_}},{key:"basedata_",get:function(){return this.basedata__},set:function(e){this.basedata__||(this.basedata__=e);}}]),i}(),Nt=je.PRESETS,bt=function(){h(r,Tt);var n=p(r);function r(e,t){return u(this,r),n.call(this,e,Nt,t)}return l(r,[{key:"resetBaseMetaFileRules_",value:function(){this.property_trees=null,this.named_groups=null,this.named_keys=null,this.updateOverridableComponents(this.basedata_);}},{key:"updateOverridableComponents",value:function(e){this.property_trees=e.property_trees,this.named_groups=e.named_groups,this.named_keys=e.named_keys;}},{key:"getPropertyTree",value:function(e){var n,r=this,e=this.property_trees[e],i=[];return e.forEach(function(e){switch(e.input){case"named_group":n=r.getNamedGroup(r.getKeyKey(e)),i=[].concat(L(i),L(n));break;case"named_key":var t;(n=r.getKeyName(e))?((t=r.getNamedKey(n)).k=r.getKeyKey(e),t.name=n,i.push(t)):i.push(r.getNamedKey(r.getKeyKey(e)));break;default:i.push(e);}},this),i}},{key:"getNamedGroup",value:function(e){return this.named_groups[e]}},{key:"getNamedKey",value:function(e){return this.named_keys[e]}}],[{key:"getMetaFileIdentifier",value:function(){return Nt}}]),r}(),St=je.SDK_STRINGS,kt=function(){h(r,Tt);var n=p(r);function r(e,t){return u(this,r),n.call(this,e,St,t)}return l(r,[{key:"resetBaseMetaFileRules_",value:function(){this.stringsTable={},this.updateOverridableComponents(this.basedata_);}},{key:"updateOverridableComponents",value:function(e){e&&this.updateTranslationsStringMap(e.translations);}},{key:"updateTranslationsStringMap",value:function(t){var n=this;t&&Object.keys(t).forEach(function(e){n.addToStringsTable(e,t[e]);},this);}},{key:"addToStringsTable",value:function(e,t){this.stringsTable[e]=t;}},{key:"translate",value:function(e,t){var n,r=t;return !this.stringsTable||(n=this.stringsTable[e])&&(r=n.en||n.en||(0<(e=Object.keys(n)).length?n[e.pop()]:t)),r}}],[{key:"getMetaFileIdentifier",value:function(){return St}}]),r}(),wt=je.THEME,Pt=function(){h(r,Tt);var n=p(r);function r(e,t){return u(this,r),n.call(this,e,wt,t)}return l(r,[{key:"resetBaseMetaFileRules_",value:function(){var e=this.basedata_;this.ft=e.ft,this.name=e.nm,this.iurl=e.iurl,this.styleMap={},this.iconInfoMap={},this.labelStyleMap={},this.markerMap={},this.updateOverridableComponents(e);}},{key:"updateOverridableComponents",value:function(e){e&&(this.updateStyleMap(e.s),this.updateIconInfoMap(e.i,e.iurl),this.updateLabelStyleMap(e.l),this.updateMarkerMap(e.m));}},{key:"updateStyleMap",value:function(e){this.styleMap=O(O({},this.styleMap),e);}},{key:"updateIconInfoMap",value:function(r,i){var o=this;r&&Object.keys(r).forEach(function(e){var t=r[e],n=i||o.iurl;n&&t.rurl&&(t.url=n+t.rurl),o.iconInfoMap[e]=t;},this);}},{key:"updateLabelStyleMap",value:function(e){this.labelStyleMap=O(O({},this.labelStyleMap),e);}},{key:"updateMarkerMap",value:function(e){this.markerMap=O(O({},this.markerMap),e);}},{key:"getStyleMap",value:function(){return this.styleMap}},{key:"getGeometryStyle",value:function(e){return this.styleMap?this.styleMap[e]:null}},{key:"getGeometryDefaultStyle",value:function(){return this.styleMap?this.styleMap.Object:null}},{key:"getLabelStyle",value:function(e){return this.labelStyleMap?this.labelStyleMap[e]:null}},{key:"getLabelDefaultStyle",value:function(){return this.labelStyleMap?this.labelStyleMap.default:null}},{key:"getMarker",value:function(e){return this.markerMap&&e?this.markerMap[e]:null}},{key:"getIconInfo",value:function(e){return this.iconInfoMap&&e?this.iconInfoMap[e]:null}}],[{key:"getMetaFileIdentifier",value:function(){return wt}}]),r}(),Ct=function(){function e(){u(this,e);}return l(e,null,[{key:"createShortAddress",value:function(e){return e&&Array.isArray(e)?e[1]:null}},{key:"createLongAddress",value:function(e){return e&&Array.isArray(e)?e[0]+" "+e[1]:null}},{key:"createFullAddress",value:function(e){if(e&&Array.isArray(e)){var t=3===e.length?e[2]+" ":"";return t+=e[0]+" "+e[1]}return null}}]),e}(),xt=je.THEME_MAP,Dt=function(){h(r,Tt);var n=p(r);function r(e,t){return u(this,r),n.call(this,e,xt,t)}return l(r,[{key:"resetBaseMetaFileRules_",value:function(){var e=this.basedata_;this.ft=e.ft,this.styleTreeList=[],this.labelTreeList=[],this.updateOverridableComponents(e);}},{key:"updateOverridableComponents",value:function(e){this.updateLabelTreeList(e.label),this.updateStyleTreeList(e.style);}},{key:"updateLabelTreeList",value:function(e){e&&vt(this.labelTreeList,e);}},{key:"updateStyleTreeList",value:function(e){e&&vt(this.styleTreeList,e);}}],[{key:"getMetaFileIdentifier",value:function(){return xt}},{key:"extractThemeMapPayload",value:function(e){return {labelType:e.lt,labelRef:e.r,styleName:e.n}}},{key:"getGeomStyleLookupTag",value:function(e,t){e=e?e.styleName:null;return e=e===Et.VALUE?t:e}},{key:"getLabelRefConstructed",value:function(e,t,n){var r=e;switch(e){case Et.VALUE:r=n;break;case Et.SHORT:r=Ct.createShortAddress(t);break;case Et.LONG:r=Ct.createLongAddress(t);break;case Et.FULL:r=Ct.createFullAddress(t);}return r}},{key:"getLabelInfoConstructed",value:function(e,t,n,r){var i={lt:e,entry:n};switch(e){case Mt.NONE:break;case Mt.TEXT:n.trans?i.ar=t:i.r=t;break;case Mt.ICON:i.iconIdentifier=t,r?i=O(O({},r),i):i.error=!0;break;case Mt.IMAGE:i.url=t;break;default:i=null;}return i}}]),r}(),Vt=je.THEME,Rt=je.THEME_MAP,Gt=je.PRESETS,Ht=je.SDK_STRINGS,jt=function(){function e(){u(this,e),this.config=Object.seal({emitEventOnOverrideUpdate:!0}),this.iconCache={},this.imageCache={},this.releaseSettings_={};}return l(e,[{key:"instantiateMetaFileAccessor_",value:function(e){for(var t=arguments.length,n=new Array(1<t?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];switch(e){case Vt:this[Vt]=v(Pt,n.concat([this]));break;case Rt:this[Rt]=v(Dt,n.concat([this]));break;case Gt:this[Gt]=v(bt,n.concat([this]));break;case Ht:this[Ht]=v(kt,n.concat([this]));break;default:return null}return this[e]}},{key:"applyOverride",value:function(e,t){this[e]&&this[e].applyOverride(t);}},{key:"undoOverride",value:function(e){this[e]&&this[e].undoOverride();}},{key:"getTheme",value:function(){return this[Vt]||{}}},{key:"getThemeMap",value:function(){return this[Rt]||{}}},{key:"getPresets",value:function(){return this[Gt]||{}}},{key:"getStrings",value:function(){return this[Ht]||{}}},{key:"getIcon",value:function(e){return e&&e.iconIdentifier?this.iconCache[e.iconIdentifier]:null}},{key:"getImage",value:function(e){return this.imageCache[e]}},{key:"extractGeomStyle",value:function(e){var t=e.valueEntry,e=e.value,t=Dt.extractThemeMapPayload(t),e=Dt.getGeomStyleLookupTag(t,e);return this.getTheme()?this.getTheme().getGeometryStyle(e):null}},{key:"getStyle",value:function(n,e){var r=this,t=1<arguments.length&&void 0!==e&&e,i=this.getThemeMap().styleTreeList,o=this.processValueEntry_.bind(this);if(null===i||0===i.length||!this.getTheme())return null;var e=this.getTheme().getGeometryDefaultStyle(),a=this.extractGeomStyle.bind(this),s=n.getAddress(),u=n.getEntities(),l=null,c=null,h={};return u&&0<u.length?i.find(function(t){return c=u.find(function(e){return l=o({geometry:n,entity:e,address:s,valueEntry:t,value:void 0,returnValueFunction:a,valueEntryIdentified:h})},r)},this):i.find(function(e){return l=o({geometry:n,entity:c,address:s,valueEntry:e,value:void 0,returnValueFunction:a,valueEntryIdentified:h})},this),l||t||(l=e),l?JSON.parse(JSON.stringify(l)):void 0}},{key:"getLabelValue",value:function(e){var t=e.address,n=e.valueEntry,r=e.value,i=Dt.extractThemeMapPayload(n),e=i.labelType,i=i.labelRef,t=Dt.getLabelRefConstructed(i,t,r),r=e===Mt.ICON?this.getTheme().getIconInfo(t):null,r=Dt.getLabelInfoConstructed(e,t,n,r);return r?JSON.parse(JSON.stringify(r)):void 0}},{key:"convertLabelToText",value:function(e){if(e){var t,n=e.r,r=e.ar,e=e.lt;if(n)return n;if(r){switch(e){case Mt.TEXT:t=_t.TEXT+r;break;case Mt.ICON:t=_t.ICON+r;break;case Mt.IMAGE:t=_t.IMAGE+r;break;default:return null}return this.getStrings().translate(t,r)}}return null}},{key:"getLabelStyle",value:function(e,t){var n,r=1<arguments.length&&void 0!==t&&t,i=this.getTheme(),o=i.getLabelDefaultStyle(),a={};return e&&(n=e.t,t=e.zmin,e=e.l,n&&(a.t=n),t&&(a.zmin=t),(e=i.getLabelStyle(e))&&(a=O(O({},a),e))),a||r||(a=o),a}},{key:"getLabelConstantsSet_",value:function(){var e=this.getThemeMap().labelTreeList,t=this.processValueEntry_.bind(this);return null==e||0===e.length?{isInsufficientInput:!0}:{labelTreeList:e,returnValueFunction:this.getLabelValue.bind(this),processValueEntry:t}}},{key:"getGeometryLabelInfo",value:function(t){var n=this,e=this.getLabelConstantsSet_(),r=e.isInsufficientInput,i=e.labelTreeList,o=e.returnValueFunction,a=e.processValueEntry;if(r)return null;var s=t.getAddress(),u=null;return i.find(function(e){return (u=a({geometry:t,address:s,valueEntry:e,returnValueFunction:o}))&&(u.r=n.convertLabelToText(u)),u}),u?JSON.parse(JSON.stringify(u)):void 0}},{key:"getEntityLabelInfo",value:function(t){var e=this.getLabelConstantsSet_(),n=e.isInsufficientInput,r=e.labelTreeList,i=e.returnValueFunction,o=e.processValueEntry;if(n)return null;var a=null;return r.find(function(e){return a=o({entity:t,valueEntry:e,returnValueFunction:i})}),a?JSON.parse(JSON.stringify(a)):void 0}},{key:"getLabelInfo",value:function(o){var a=this,e=this.getLabelConstantsSet_(),t=e.isInsufficientInput,n=e.labelTreeList,s=e.returnValueFunction,u=e.processValueEntry;if(t)return null;var l,r,c=o.getAddress(),h=o.getEntities(),d=null;return h&&1<h.length?(l=null,n.find(function(t){var n,r=null,i=!1;return h.forEach(function(e){n=u({entity:e,valueEntry:t,returnValueFunction:s}),(r=a.convertLabelToText(n))&&0<r.length&&(l?l+=", "+r:(l=r,i=!0));},a),i||(n=u({geometry:o,address:c,valueEntry:t,returnValueFunction:s}),(r=a.convertLabelToText(n))&&0<r.length&&(l?l+=", "+r:l=r,i=!0)),i&&(d={lt:a.TEXT_LABEL_TYPE,r:l}),i},this)):(r=h?h[0]:null,n.find(function(e){return (d=u({geometry:o,entity:r,address:c,valueEntry:e,returnValueFunction:s}))&&(d.r=a.convertLabelToText(d)),d},this)),d?JSON.parse(JSON.stringify(d)):void 0}},{key:"processValueEntry_",value:function(e){var r=this,i=e.geometry,o=e.entity,a=e.address,t=e.valueEntry,n=e.value,s=e.returnValueFunction,u=null,e=t.ks;if(void 0!==e&&e.find(function(e){var t;if(e.gk&&i?(n=e.gk,t=i.properties[n]):e.ek&&o?(n=e.ek,t=o.properties[n]):e.ak&&a&&(n=e.ak)===a[0]&&(t=A(a,2)[1]),void 0!==t){if(e.v){var n=e.v[t];if(void 0!==n&&void 0!==(u=r.processValueEntry_({geometry:i,entity:o,address:a,valueEntry:n,value:t,returnValueFunction:s})))return !0}if(void 0!==(u=s({geometry:i,entity:o,address:a,valueEntry:e,value:t})))return !0}return !1},this))return u;return s?s({geometry:i,entity:o,address:a,valueEntry:t,value:n}):u}},{key:"setIcon",value:function(e,t){e&&t&&(this.iconCache[e]=t);}},{key:"setReleaseSettings_",value:function(e){this.releaseSettings_=e;}}]),e}(),Ft={NODES_LB:"mfs.micello.com",US_1:"mfs-us-1.micello.com",US_2:"mfs-us-2.micello.com",AU_1:"mfs-au-1.micello.com",AU_2:"mfs-au-2.micello.com",EU_1:"mfs-eu-1.micello.com",SG_1:"mfs-sg-1.micello.com",HUB:"mfs-hub-master.micello.com",PREVIEW:"preview.micello.com/mfs",FACTORY:"factory-mfs.micello.com",CIT:"integration.mfs.hub.venues.ext.here.com",STG:"alpha.mfs.hub.venues.ext.here.com"},Ut=Ft.HUB,Bt=Object.freeze({MFILE:"MFILE",MVAR:"MVAR",MPATH:"MPATH",MKEY:"MKEY",MPATTERN:"MPATTERN",MPACKAGE:"MPACKAGE"}),zt=(Object.freeze((c(zt={},Bt.MFILE,"/mfile"),c(zt,Bt.MVAR,"/mvar"),c(zt,Bt.MPATH,"/mpath"),c(zt,Bt.MKEY,"/mkey"),c(zt,Bt.MPATTERN,"/mpattern"),c(zt,Bt.MPACKAGE,"/mpackage"),zt)),Object.freeze(Object.values(Ft).reduce(function(e,t){return O(O({},e),{},c({},t,{key:null}))},{}))),Yt=Object.freeze({apiKey:null,dataApiType:Me,fileHost:Ut,queryParamMap:zt}),Zt=ze.GEO_JSON,Ft=Ye[Zt],Wt=Ft.COMMUNITY_MAP,Jt=Ft.COMMUNITY_ENTITY,Kt=Ft.GEOJSON_LEVEL_GEOMETRY,Xt=function(){function t(e){u(this,t),this.baseApi=e;}return l(t,[{key:"getBaseAPI",value:function(){return this.baseApi}},{key:"getCommunityMap",value:function(e,t,n){return this.baseApi.fetch(this.baseApi.getMapProductFileUrl(e,Zt,Wt,null,t,n))}},{key:"getCommunityEntity",value:function(e,t,n){return this.baseApi.fetch(this.baseApi.getMapProductFileUrl(e,Zt,Jt,null,t,n))}},{key:"getGeoJsonLevelGeometry",value:function(e,t,n,r){t="/".concat(t);return this.baseApi.fetch(this.baseApi.getMapProductFileUrl(e,Zt,Kt,t,n,r))}}]),t}(),Qt=Object.freeze({MAP:"MAP",META:"META",CUSTOMER:"CUSTOMER"}),qt=Object.freeze((c(zt={},Qt.MAP,"/map"),c(zt,Qt.META,"/meta"),c(zt,Qt.CUSTOMER,"/customer"),zt)),$t=Object.freeze({METACONFIG:"METACONFIG",OVERRIDES:"OVERRIDES",DATAHOSTS:"DATAHOSTS"}),en=Object.freeze((c(Ye={},$t.METACONFIG,"/metaConfig"),c(Ye,$t.OVERRIDES,"/overrides"),c(Ye,$t.DATAHOSTS,"/map/dataHosts"),Ye)),Ft=Object.freeze({V4:"V4",V5:"V5"}),tn=(Object.freeze((c(zt={},Ft.V4,"/v4"),c(zt,Ft.V5,"/v5"),zt)),Object.freeze((c(Ye={},je.THEME,"/theme/v5"),c(Ye,je.THEME_MAP,"/thememap/v5"),c(Ye,je.PRESETS,"/presets/v5"),c(Ye,je.SDK_STRINGS,"/strings/v5"),c(Ye,je.ICON_FILE,"/iconfile/v5"),c(Ye,je.INPUT_COLORS,"/miceditor/inputcolors"),c(Ye,je.BASE_MAP_INFO,"/miceditor/basemapinfo"),c(Ye,je.CONFIG_PROFILE,"/miceditor/configprofile"),c(Ye,je.NAV_THEME,"/navtheme/v5"),c(Ye,je.NAV_NAME_THEME,"/navtheme/v5"),c(Ye,je.NAV_PROP_MAP,"/navpropmap/v5"),c(Ye,je.NAV_STRINGS,"/strings/v5/nav"),c(Ye,je.NAV_THEME_MAP,"/navthememap/v5"),c(Ye,je.NAV_NAME_THEME_MAP,"/navthememap/v5"),c(Ye,je.V4_THEME_FAMILY,"/theme/v4"),c(Ye,je.V4_MAPTYPE_THEME,"/theme/v4"),c(Ye,je.ICON,"/theme/icon/v5"),c(Ye,je.MARKER,"/theme/marker"),c(Ye,je.PERMISSIONS,"/auth/stringroles"),c(Ye,je.NAICS_ARRAY,"/naics/2012/array"),c(Ye,je.NAICS_MAP,"/naics/2012/map"),Ye))),nn=Object.freeze((c(Ft={},ze.GEO_JSON,"/geojson"),c(Ft,ze.V5_MAP,"/v5_map"),c(Ft,ze.V5_NAV,"/v5_nav"),c(Ft,ze.V5_INFO,"/v5_info"),c(Ft,ze.KML,"/kml"),c(Ft,ze.SVG,"/svg"),c(Ft,ze.PNG,"/png"),Ft)),rn=Object.freeze((c(zt={},ze.V5_MAP,{COMMUNITY_MAP:"/com-map",COMMUNITY_DIRECTORY:"/com-dir",COMMUNITY_DETAIL:"/com-detail",LEVEL_GEOMETRY:"/level-geom",DRAWING_ENTITY:"/drawing-entity"}),c(zt,ze.GEO_JSON,{COMMUNITY_MAP:"/com-map",COMMUNITY_ENTITY:"/com-entity",PATH_LEVEL_GEOMETRY:"/path-level-geom",GEOJSON_LEVEL_GEOMETRY:"/geojson-level-geom"}),c(zt,ze.V5_NAV,{JSON_NAV:"/json",BINARY_NAV:"/bin",JSON_ENHANCED_NAV:"/json-enh",BINARY_ENHANCED_NAV:"/bin-enh"}),c(zt,ze.V5_NAV,{JSON_NAV:"/json",BINARY_NAV:"/bin",JSON_ENHANCED_NAV:"/json-enh",BINARY_ENHANCED_NAV:"/bin-enh"}),c(zt,ze.V5_INFO,{GEOMETRY_INFO:"/geom-info"}),c(zt,ze.SVG,{PLAIN:"/plain",PRETTY:"/pretty",PRETTY_HORIZONTAL_LABEL:"/pretty"}),c(zt,ze.KML,{RASTER:"/raster",RASTER_HORIZONTAL:"/raster",VECTOR:"/vector",VECTOR_HORIZONTAL:"/vector"}),c(zt,ze.PNG,{LOW_RESOLUTION:"/lo-res",HIGH_RESOLUTION:"/high-res",LOW_RESOLUTION_GEO:"/lo-res-geo",HIGH_RESOLUTION_GEO:"/high-res-geo",LOW_RESOLUTION_HORIZONTAL:"/lo-res",HIGH_RESOLUTION_HORIZONTAL:"/high-res",LOW_RESOLUTION_HORIZONTAL_GEO:"/lo-res-geo",HIGH_RESOLUTION_HORIZONTAL_GEO:"/high-res-geo"}),zt)),on=Object.freeze({venueId:null,language:"-",mapVersion:"-",entityVersion:"-",fileVersion:null,themeName:Be[je.THEME]}),an=Object.freeze({MFILE:"MFILE",MPATH:"MPATH",MVAR:"MVAR"}),sn=Object.freeze((c(Ye={},an.MFILE,"/mfile"),c(Ye,an.MPATH,"/mpath"),c(Ye,an.MVAR,"/mvar"),Ye)),un=function(){function r(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};u(this,r),this.productAPI={},this.hostConfig_=e,this.isHostCustom=!1;}return l(r,[{key:"getBaseUrl",value:function(e){e=!(0<arguments.length&&void 0!==e)||e,e="".concat(this.hostConfig_.fileHost).concat(e?"/ms/v1":"");return e.startsWith("https://")||e.startsWith("http://")||(e="https://".concat(e)),e}},{key:"getFileServiceBaseUrl",value:function(e){e=0<arguments.length&&void 0!==e?e:an.MFILE;if(an[e])return "".concat(this.getBaseUrl()).concat(sn[e])}},{key:"getGlobalMetaBaseUrl",value:function(e){var t=qt[Qt.META],e=this.getFileServiceBaseUrl(e);return "".concat(e).concat(t)}},{key:"getVenueMapBaseUrl",value:function(e){var t=this.getFileServiceBaseUrl(e),e=qt[Qt.MAP];return "".concat(t).concat(e)}},{key:"getGlobalMetaFileUrl",value:function(e,t,n,r){var t=1<arguments.length&&void 0!==t?t:Be[e],i=2<arguments.length?n:void 0,r=3<arguments.length?r:void 0,o=this.getGlobalMetaBaseUrl(r),a=tn[e],s=null===t||""===t?"":"/".concat(t);switch(e){case je.THEME:case je.THEME_MAP:case je.PRESETS:case je.SDK_STRINGS:case je.ICON_FILE:case je.INPUT_COLORS:case je.BASE_MAP_INFO:case je.CONFIG_PROFILE:case je.NAV_THEME:case je.NAV_NAME_THEME:case je.NAV_PROP_MAP:case je.NAV_STRINGS:case je.NAV_THEME_MAP:case je.NAV_NAME_THEME_MAP:case je.V4_THEME_FAMILY:o+="".concat(a).concat(s);break;case je.ICON:case je.MARKER:case je.V4_MAPTYPE_THEME:o+=0<s.length&&i&&0<i.length?"".concat(a).concat(s,"/").concat(i):"".concat(a);break;case je.PERMISSIONS:case je.NAICS_ARRAY:case je.NAICS_MAP:o+="".concat(a);}return o}},{key:"getGeoJsonApi",value:function(){return this.productAPI[ze.GEO_JSON]||(this.productAPI[ze.GEO_JSON]=new Xt(this)),this.productAPI[ze.GEO_JSON]}},{key:"getMapProductUrlPath",value:function(e,t,n,r){t=!(1<arguments.length&&void 0!==t)||t,n=2<arguments.length?n:void 0,r=3<arguments.length?r:void 0,r=this.getVersionedVenueUrl(e,t,r);return n&&(r+="".concat(nn[n])),r}},{key:"getMapProductFileUrl",value:function(e,t,n,r,i,o){var a=rn[ze[t]][n],i=this.getMapProductUrlPath(e,!0,t,i);return n&&(i+="".concat(a)),r&&(i+="".concat(r)),!o&&0!==o||(i+="/fv/".concat(o)),i}},{key:"getMetaConfigUrl",value:function(e,t){var n=en[$t.METACONFIG],t=this.getVersionedVenueUrl(e,!0,t);return t+="".concat(n)}},{key:"getMetaFileUrl",value:function(e,t,n){n=2<arguments.length&&void 0!==n?n:Be[t];if(e){var r,t=Fe[t];return "object"===s(e[t])&&e[t][n]?r=new URL(e[t][n]):"string"==typeof e[t]&&(r=new URL(e[t])),r?this.isHostCustom?"".concat(this.getBaseUrl(!1)).concat(r.pathname):r.toString():null}}},{key:"getMetaOverrideFileUrls",value:function(e,t,n,r){r=3<arguments.length&&void 0!==r?r:Be[n];if(!t||!t.communityOverrides||!t.communityOverrides[e])return [];n=Ue[n],n=t.communityOverrides[e][n]||{};return Array.isArray(n)?n:n[r]||[]}},{key:"getVersionedVenueUrl",value:function(e,t,n){n=2<arguments.length?n:void 0,n=!(1<arguments.length&&void 0!==t)||t?this.getFileServiceBaseUrl(n):"";return n+=r.getVersionedVenuePathSegment(e)}},{key:"getNormalizedUrl",value:function(e){if(this.isHostCustom){var t=new URL(e);return "".concat(this.getBaseUrl(!1)).concat(t.pathname)}return e}},{key:"getMetaConfig",value:function(n){var r=this;if(!n)return null;var i={venueId:n.cid};Object.values(Fe).forEach(function(t){n[t]&&("string"==typeof n[t]?i[t]=n[t]:(i[t]={},Object.keys(n[t]).forEach(function(e){i[t][e]=n[t][e];})));});var e={},o=n.communityOverrides[i.venueId];return Object.keys(o).forEach(function(t){var n;Array.isArray(o[t])?e[t]=o[t].map(function(e){return "".concat(r.getFileServiceBaseUrl()).concat(e)}):"object"===s(o[t])&&(n={},Object.keys(o[t]).forEach(function(e){Array.isArray(o[t][e])&&(n[e]=o[t][e].map(function(e){return "".concat(r.getFileServiceBaseUrl()).concat(e)}));}),e[t]=n);}),i.communityOverrides=c({},i.venueId,e),O(O({},n),i)}}],[{key:"getVersionedVenuePathSegment",value:function(e,t,n){var r=1<arguments.length&&void 0!==t?t:"-",t=2<arguments.length&&void 0!==n?n:"-",n=qt[Qt.MAP];return "".concat(n,"/").concat(e,"/mv/").concat(r,"/ev/").concat(t)}},{key:"getVenueConfig",value:function(e){e=O(O({},on),e);return e.mapVersion=Number(e.mapVersion)||"-",e.entityVersion=Number(e.entityVersion)||"-",e.fileVersion=Number(e.fileVersion)||null,e.venueId=Number(e.venueId),e}}]),r}(),ln=function(){h(a,un);var n=p(a);function a(e){var t;return u(this,a),(t=n.call(this,e)).setAndUpdateHostConfig_(e),e.fileHost&&(t.isHostCustom=!0),t}return l(a,[{key:"setAndUpdateHostConfig_",value:function(e){var t=e.apiKey,e=e.fileHost,n={};Object.keys(Yt.queryParamMap).forEach(function(e){n[e]={key:t};}),e&&(n[e]={key:t}),this.hostConfig_={apiKey:t,dataApiType:Me,fileHost:e||Ut,queryParamMap:O(O({},n),Yt.QUERY_PARAM_MAP_DEFAULT)};}},{key:"addServer",value:function(e,t){var e=-1<e.indexOf("://")?e.split("://")[1]:e,n=this.hostConfig_.queryParamMap[e]?O(O({},this.hostConfig_.queryParamMap[e]),t):t;Object.keys(n).forEach(function(e){null!==n[e]&&void 0!==n[e]&&""!==n[e]||delete n[e];}),this.hostConfig_.queryParamMap[e]=n;}},{key:"appendQueryParams",value:function(e){var t=this.hostConfig_.queryParamMap,n=-1<e.indexOf("://")?e.split("://")[1]:e,t=t[A(Object.keys(t).filter(function(e){return n.startsWith(e)}).sort(function(e,t){return t.length-e.length}),1)[0]];return a.appendParamList(e,t)}},{key:"fetch",value:function(e,t,n,r){r=3<arguments.length&&void 0!==r&&r;return e.startsWith("http://")&&(e=e.replace(/http:\/\//gm,"https://")),r||(e=this.appendQueryParams(e)),yt.get(e,t,n)}},{key:"getMapProductFileUrl",value:function(e,t,n,r,i,o){return y(d(a.prototype),"getMapProductFileUrl",this).call(this,e,t,n,r,i,o)}},{key:"getGlobalMetaFileUrl",value:function(e,t,n,r,i){i=4<arguments.length&&void 0!==i?i:0,n=y(d(a.prototype),"getGlobalMetaFileUrl",this).call(this,e,t,n,r);return r&&r===Bt.MPATH&&(n=a.appendParamList(n,{fvhistory:i})),n}}],[{key:"appendParamList",value:function(e,t){if(!t||"object"!==s(t))return e;var n=e.split("?"),r=A(n,2)[1],i=void 0===r?"":r;return Object.keys(t).filter(function(e){return -1===i.indexOf("".concat(e,"="))}).forEach(function(e){i+="&".concat(e,"=").concat(t[e]);}),0<(i=i.startsWith("&")?i.substr(1):i).length?"".concat(n[0],"?").concat(i):e}}]),a}(),cn=function(){function i(){u(this,i);}return l(i,null,[{key:"isPointOnGeoJSONLineString",value:function(e,t){var n=!1;if(t&&1<t.length)for(var r,i,o=1;o<t.length;o+=1)if(r=t[o-1],i=t[o],pt.isPointOnLineSegment(e,r,i)){n=!0;break}return n}},{key:"isPointOnGeoJSONMultiLineString",value:function(e,t){for(var n=!1,r=0;r<t.length;r+=1)if(i.isPointOnGeoJSONLineString(e,t[r])){n=!0;break}return n}},{key:"isPointInsideGeoJSONPolygon",value:function(e,t){var n=!1;if(pt.isPointInPolygon(e,t[0])&&(n=!0),n)for(var r=1;r<t.length;r+=1)if(pt.isPointInPolygon(e,t[r])){n=!1;break}return n}},{key:"isPointInsideGeoJSONMultiPolygon",value:function(e,t){for(var n=t.length,r=0;r<n;r+=1)if(i.isPointInsideGeoJSONPolygon(e,t[r]))return !0;return !1}},{key:"convertIntAddressToGeometryAddressListFormat",value:function(e){if(e&&"string"==typeof e){var t=[];return e.split(" ").forEach(function(e){t.push.apply(t,L(e.split(" ")));}),t}return null}},{key:"getGeometriesByLonLat",value:function(t,e,n){for(var r=2<arguments.length&&void 0!==n&&n,i=[],o=e.filter(function(e){return pt.isPointInBoundingBox(t,e.getBoundingBox())}),a=0;a<o.length;a+=1){var s=o[a];if(s.isPointInsideGeometry(t,!0)&&(i.push(s),!r))break}return i.sort(function(e,t){return t.getZIndex()-e.getZIndex()})}}]),i}(),hn=function(){function r(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},n=2<arguments.length?arguments[2]:void 0;u(this,r),this.venueModel=n,this.id=e,this.properties=O({geometry:[],int_address:[]},t);}return l(r,[{key:"getId",value:function(){return this.id}},{key:"getGeometries",value:function(){var t=this;return this.properties.geometry.filter(function(e){return A(e,2)[1]}).map(function(e){e=A(e,1)[0];return t.venueModel.getGeometryById(e)})}},{key:"getInternalAddress",value:function(){return this.properties.int_address||[]}},{key:"getName",value:function(){return (Array.isArray(this.properties.name)?this.properties.name[0]:this.properties.name)||""}},{key:"getProperties",value:function(){return this.properties}},{key:"getLabelInfo",value:function(){return this.venueModel.metaInformation_.getEntityLabelInfo(this)}}]),r}(),dn=function(){function r(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},t=1<arguments.length?arguments[1]:void 0,n=2<arguments.length?arguments[2]:void 0;u(this,r),this.id=e.id,this.properties=e.properties||{},this.labelArea=e.label_area||[],this.geometry=e.geometry||{},this.location=e.location||{},this.level=t,this.zIndex=n,this.state_={isHighlighted:!1,highlightedStyle:{}};}return l(r,[{key:"getId",value:function(){return this.id}},{key:"getProperties",value:function(){return this.properties}},{key:"getAddress",value:function(){return cn.convertIntAddressToGeometryAddressListFormat(this.getInternalAddress())}},{key:"getInternalAddress",value:function(){return this.properties.int_address||""}},{key:"getCenter",value:function(){return this.location.coordinates||[]}},{key:"getCoordinates",value:function(){return this.geometry.coordinates||[]}},{key:"getDisplayName",value:function(){return this.properties.display_name||""}},{key:"getName",value:function(){return this.properties.name||""}},{key:"getStyle",value:function(){return this.getMetaInformation_().getStyle(this)}},{key:"getIcon",value:function(){return this.getMetaInformation_().getIcon(this.getLabelInfo())}},{key:"getLabelArea",value:function(){return this.labelArea||[]}},{key:"getLabelInfo",value:function(){return this.getMetaInformation_().getLabelInfo(this)}},{key:"getLabelStyle",value:function(){return O({fill:"#333333"},this.getMetaInformation_().getLabelStyle(this.getStyle()))}},{key:"getGeometryLabelInfo",value:function(){return this.getMetaInformation_().getGeometryLabelInfo(this)}},{key:"getEntities",value:function(){var t=this;return (this.properties.entities||[]).map(function(e){return t.level.getDrawing().getVenueModel().getEntityById(e)})}},{key:"getLevel",value:function(){return this.level}},{key:"getType",value:function(){return this.geometry.type}},{key:"getZIndex",value:function(){return this.zIndex}},{key:"getBoundingBox",value:function(){var e=this.getType(),t=this.getCoordinates(),n=[];switch(e){case Ce:n=[t,t];break;case Ve:case xe:n=t;break;case Re:case De:n=t.reduce(function(e,t){return e.concat(t)},[]);break;case Ge:n=t.reduce(function(e,t){return e.concat(t)},[]).reduce(function(e,t){return e.concat(t)},[]);}return pt.getBoundingBoxVertices(n)}},{key:"isIcon",value:function(){var e=this.getLabelInfo();return e&&e.lt===Mt.ICON}},{key:"isPointInsideGeometry",value:function(e,t){var n,r=1<arguments.length&&void 0!==t&&t,i=!1;switch(this.getType()){case Ce:n=this.getLabelArea()&&pt.getRectangularCoordinatesOfLabelArea(this.getLabelArea()),i=pt.isPointInPolygon(e,n);break;case Ve:break;case xe:i=r&&cn.isPointOnGeoJSONLineString(e,this.getCoordinates());break;case Re:i=r&&cn.isPointOnGeoJSONMultiLineString(e,this.getCoordinates());break;case De:i=cn.isPointInsideGeoJSONPolygon(e,this.getCoordinates());break;case Ge:i=cn.isPointInsideGeoJSONMultiPolygon(e,this.getCoordinates());}return i}},{key:"highlight",value:function(e,t){e=!(0<arguments.length&&void 0!==e)||e,t=1<arguments.length?t:void 0;this.state_.isHighlighted=e,this.state_.highlightedStyle=e?t:{};}},{key:"isHighlighted",value:function(){return Boolean(this.state_.isHighlighted)}},{key:"getHighlightedStyle",value:function(){return this.state_.highlightedStyle||{}}},{key:"toJSON",value:function(){return O({},this.geometry)}},{key:"getMetaInformation_",value:function(){return this.getLevel()?this.getLevel().getDrawing().getVenueModel().metaInformation_:null}}]),r}(),vn=function(){function o(e){var t=this,n=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},r=2<arguments.length&&void 0!==arguments[2]?arguments[2]:[],i=3<arguments.length?arguments[3]:void 0;u(this,o),this.id=e,this.properties=O({},n),this.zIndexCount=0,this.geometries=r.map(function(e){return t.zIndexCount+=1,new dn(e,t,t.zIndexCount)}),this.drawing=i;}return l(o,[{key:"getId",value:function(){return this.id}},{key:"getProperties",value:function(){return this.properties}},{key:"getName",value:function(){return this.properties.name||""}},{key:"getDisplayName",value:function(){return this.properties.display_name||""}},{key:"getDrawing",value:function(){return this.drawing}},{key:"getShortName",value:function(){return this.properties["short name"]||""}},{key:"getZIndex",value:function(){return Number(this.properties.zlevel)}},{key:"getFeatureCollectionArray",value:function(){return this.getGeometries().map(function(e){return e.toJSON()})}},{key:"getGeometryById",value:function(t){return this.geometries.find(function(e){return e.getId()===t})}},{key:"getGeometries",value:function(e){return 0<arguments.length&&void 0!==e&&e?this.geometries.sort(function(e,t){return t.getZIndex()-e.getZIndex()}):this.geometries.sort(function(e,t){return e.getZIndex()-t.getZIndex()})}},{key:"getGeometriesByAddress",value:function(t){return this.geometries.filter(function(e){return e.getInternalAddress()===t})}},{key:"isMain",value:function(){return Boolean(this.properties.main)}}]),o}(),fn=function(){function a(e){var t=this,n=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},r=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{},i=3<arguments.length&&void 0!==arguments[3]?arguments[3]:[],o=4<arguments.length?arguments[4]:void 0;u(this,a),this.venueModel=o,this.levels=i.map(function(e){return new vn(e.id,e.properties,e.features,t)}),this.id=e,this.properties=n,this.frame_=r;}return l(a,[{key:"getId",value:function(){return this.id}},{key:"getProperties",value:function(){return this.properties}},{key:"isRoot",value:function(){return Boolean(this.properties.is_root)}},{key:"getDisplayName",value:function(){return this.properties.display_name||""}},{key:"getName",value:function(){return this.properties.name||""}},{key:"getBoundingBox",value:function(){var e=this.frame_,t=e.height,n=e.width,e=e.transform,n=A(pt.getBoundingBoxVertices([pt.convertMxMy2LonLat(e,[0,0]),pt.convertMxMy2LonLat(e,[0,t]),pt.convertMxMy2LonLat(e,[n,0]),pt.convertMxMy2LonLat(e,[n,t])]),2),t=n[0],n=n[1];return [n[1],t[0],t[1],n[0]]}},{key:"getCenter",value:function(){var e=this.frame_;if(e)return pt.convertMxMy2LonLat(e.transform,[e.width/2,e.height/2])}},{key:"getGeometryById",value:function(t,e){return e?e.getGeometryById(t):this.getGeometries().find(function(e){return e.getId()===t})}},{key:"getGeometries",value:function(){return this.levels.flatMap(function(e){return e.getGeometries()})}},{key:"getLevelById",value:function(t){return this.levels.find(function(e){return e.getId()===t})}},{key:"getLevelByZIndex",value:function(t){return this.levels.find(function(e){return e.getZIndex()===t})}},{key:"getLevels",value:function(){return this.levels}},{key:"getMainLevel",value:function(){return this.levels.find(function(e){return e.isMain()})}},{key:"getVenueModel",value:function(){return this.venueModel}}]),a}(),gn=He.STANDARD,pn=function(){function o(){var n=this,e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},r=2<arguments.length&&void 0!==arguments[2]?arguments[2]:[],i=3<arguments.length&&void 0!==arguments[3]?arguments[3]:new jt;u(this,o),this.metaInformation_=i,this.id=e.id,this.location=e.location||{},this.properties=O({},e.properties),this.drawings=(e.drawings||[]).map(function(e){var t=e.levels.map(function(e){var t=e.id;return r.find(function(e){return e.id===t})});return new fn(e.id,e.properties,e.ref_frame,t,n)}),this.entities=(t.entities||[]).map(function(e){return new hn(e.id,e.properties,n)});}return l(o,[{key:"getDisplaySettings",value:function(){return this.metaInformation_.releaseSettings_.displayOptions.display||gn}},{key:"getId",value:function(){return this.id}},{key:"getName",value:function(){return this.properties.name}},{key:"getBoundingBox",value:function(){var e=pt.getBoundingBoxVertices(this.getDrawings().flatMap(function(e){var t=A(e.getBoundingBox(),4),e=t[0];return [[t[1],t[2]],[t[3],e]]})),t=A(e,2),e=t[0],t=t[1];return [t[1],e[0],e[1],t[0]]}},{key:"getCenter",value:function(){return this.location.coordinates}},{key:"getEntityById",value:function(t){return this.entities.find(function(e){return e.id===t})}},{key:"getGeometryById",value:function(t){return this.getGeometries().find(function(e){return e.getId()===t})}},{key:"getGeometries",value:function(){return this.getLevels().sort(function(e,t){return e.getZIndex()-t.getZIndex()}).flatMap(function(e){return e.getGeometries()})}},{key:"getGeometriesByLonLat",value:function(t,e,n){var r=this,n=!(2<arguments.length&&void 0!==n)||n,e=(1<arguments.length&&void 0!==e?e:[]).map(function(e){return r.getLevelById(e)});return 0===e.length&&(e=this.drawings.filter(function(e){e=e.getBoundingBox();return pt.isPointInBoundingBox(t,e)}).flatMap(function(e){return e.getLevels()})),cn.getGeometriesByLonLat(t,e.flatMap(function(e){return e.getGeometries(!0)}),n)}},{key:"getDrawingById",value:function(t){return this.drawings.find(function(e){return e.getId()===t})}},{key:"getDrawings",value:function(){return this.drawings}},{key:"getRootDrawing",value:function(){return this.drawings.find(function(e){return e.isRoot()})}},{key:"getLevelById",value:function(t){return this.getLevels().find(function(e){return e.getId()===t})}},{key:"getLevelsByZIndex",value:function(e){var t=0<arguments.length&&void 0!==e?e:0;return this.getLevels().filter(function(e){return Number(e.getZIndex())===Number(t)})}},{key:"getLevels",value:function(){return this.drawings.flatMap(function(e){return e.getLevels()})}},{key:"getLevelMapFlattenedByZIndex_",value:function(){return this.getLevels().reduce(function(e,t){var n=t.getZIndex(),e=e;return e[n]||(e[n]=[]),e[n].push(t),e},{})}},{key:"getIconsInformation",value:function(){var t=new Map;return this.getGeometries().filter(function(e){return e.isIcon()}).forEach(function(e){e=e.getLabelInfo();t.set(e.iconIdentifier,e);}),Array.from(t.values())}}]),o}(),yn={PRD:"vfs.venue.maps.api.here.com",STG:"vfs.sit.venue.maps.api.here.com"},mn=function(){h(i,un);var r=p(i);function i(e){var t=e.apiKey,n=e.fileHost,e=e.token;return u(this,i),e=r.call(this,{apiKey:t,fileHost:n||yn.PRD,token:e}),n&&(e.isHostCustom=!0),e}return l(i,[{key:"fetch",value:function(e,t,n){var r=this.hostConfig_,i=r.apiKey,o=r.token,r=O({method:"GET",headers:{}},t),t=e;return t.startsWith("http://")&&(t=t.replace(/http:\/\//gm,"https://")),o?(e="Bearer ",o=o.startsWith(e)?o:"".concat(e).concat(o),r.headers instanceof Headers?r.headers.append("Authorization",o):r.headers.Authorization=o):i&&(t="".concat(t,"?apiKey=").concat(i)),yt.get(t,r,n)}}]),i}(),In={isIconsEnabled:!0,isMetaEnabled:!0,metaOptions:{},iconOptions:{}},_n=Object.keys(Fe).map(function(e){return {identifier:e,name:void 0,url:void 0}}),En=function(){function i(e){var t=e.apiKey,n=e.baseUrl,r=e.token,e=1<arguments.length&&void 0!==arguments[1]&&arguments[1];u(this,i);r={apiKey:t,fileHost:n,token:r};this.dataApi_=new(e?ln:mn)(r);}return l(i,[{key:"load",value:function(n,e){var r=this,e=1<arguments.length&&void 0!==e?e:{},e=O(O({},In),e),i=e.isIconsEnabled,t=e.isMetaEnabled,o=e.iconOptions,a=e.metaOptions;return Promise.resolve().then(function(){return t?r.getMeta_(n,a).catch(function(e){return Promise.resolve()}):new jt}).then(function(e){return r.getVenue_(n,e)}).then(function(e){if(dt.emit(ht.VENUE_MAP_DATA_LOADED,{data:e}),i){var t=e.getIconsInformation();return r.getIcons_(n,e.metaInformation_,t,o).then(function(){return e})}return e})}},{key:"getVenue_",value:function(t,r){var n=this;return this.getCommunityMap_(t).then(function(e){return Promise.all([Promise.resolve(e),n.getCommunityEntity_(t),n.getLevels_(t,e.drawings.flatMap(function(e){return e.levels.map(function(e){return e.id})}))])}).then(function(e){var t=A(e,3),n=t[0],e=t[1],t=t[2];return new pn(n,e,void 0===t?[]:t,r)})}},{key:"getCommunityMap_",value:function(t){return this.dataApi_.getGeoJsonApi().getCommunityMap(t).catch(function(e){return Promise.reject(new Error("Community map load failed for venue id ".concat(t,' with error "\n ').concat(e.message,'"')))})}},{key:"getCommunityEntity_",value:function(t){return this.dataApi_.getGeoJsonApi().getCommunityEntity(t).catch(function(e){return Promise.reject(new Error("Community Entity failed for venue id ".concat(t,' with error "').concat(e.message,'"')))})}},{key:"getLevels_",value:function(e,t){var n=this,t=1<arguments.length&&void 0!==t?t:[];return Promise.all(t.map(function(t){return n.dataApi_.getGeoJsonApi().getGeoJsonLevelGeometry(e,t).catch(function(e){return Promise.reject(new Error("Level load failed for level id ".concat(t,' with error: "').concat(e.message,'"')))})}))}},{key:"getIcon_",value:function(e,t,n,r){var i=2<arguments.length&&void 0!==n?n:{},o=3<arguments.length&&void 0!==r&&r,a=i.iconIdentifier,r=i.url;return a&&r?this.dataApi_.fetch(this.dataApi_.getNormalizedUrl(r)).then(function(e){e=new It(O(O({},i),e),o);return t.setIcon(a,e),e}):Promise.reject(new Error("Issue with icon data, iconIdentifier and url should be available: ".concat(i)))}},{key:"getIcons_",value:function(e,n,t,r){var i=this,t=2<arguments.length&&void 0!==t?t:[],o=(3<arguments.length&&void 0!==r?r:{}).isMultiObjectToSplit;return Promise.all(t.map(function(t){return i.getIcon_(e,n,t,o).catch(function(e){return Promise.resolve(t)})})).catch(function(e){return Promise.resolve()})}},{key:"getMeta_",value:function(t,e,n){var r=this,i=1<arguments.length&&void 0!==e?e:{},o=2<arguments.length&&void 0!==n?n:_n,a=new jt;return Promise.resolve().then(function(){return r.getMetaConfig_(t,i).then(function(e){return a.releaseSettings_=e.settings,r.dataApi_.getMetaConfig(e)})}).then(function(e){return r.getMetaFiles_(e,a,o).then(function(){return r.getMetaOverrides_(t,e,a,o)})}).then(function(){return a})}},{key:"getMetaConfig_",value:function(e){e=this.dataApi_.getMetaConfigUrl(e);return this.dataApi_.fetch(e).catch(function(e){return Promise.reject(e)})}},{key:"getMetaFiles_",value:function(r,i,e,t){var o=this,e=2<arguments.length&&void 0!==e?e:[],a=!(3<arguments.length&&void 0!==t)||t;return Promise.all(e.map(function(e){var t=e.identifier,n=e.name,e=e.url;return !e&&a&&(e=o.dataApi_.getMetaFileUrl(r,t,n)),e=e||o.dataApi_.getGlobalMetaFileUrl(t,n),o.dataApi_.fetch(e).then(function(e){return i.instantiateMetaFileAccessor_(t,e),e}).catch(function(e){return Promise.resolve()})}))}},{key:"getMetaOverrides_",value:function(r,i,o,e){var a=this,e=3<arguments.length&&void 0!==e?e:[];return Promise.all(e.map(function(e){var t=e.identifier,n=e.name,n=(e=t,n=n,r&&i&&a.dataApi_.getMetaOverrideFileUrls(r,i,e,n)||[]);return Promise.all(n.map(function(e){return a.dataApi_.fetch(e).then(function(e){return o[t]&&o[t].applyOverride(e,!1),Promise.resolve()}).catch(function(e){return Promise.resolve()})}))}))}}]),i}(),Mn="https://meta-indoor-routing.api-gateway.ls.hereapi.com",On=function(){function t(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};if(u(this,t),!e.apiKey&&!e.token)throw new Error("API key or Token is missing");this.config_=O({baseUrl:Mn},e);}return l(t,[{key:"calculateRoute",value:function(e){var t=e.origin,n=void 0===t?{}:t,r=e.destination,i=void 0===r?{}:r,t=f(e,["origin","destination"]);if(!n.coordinates||!i.coordinates)throw new Error("Waypoint coordinates are missing");var r=function(e){var t=e.coordinates,n=e.venueId,e=e.levelId,t=t.join(",");return n&&e?t.concat(";indoorMapId=",n,";levelId=",e):t},e=new URL("".concat(this.config_.baseUrl,"/v1/routes")),o=new URLSearchParams({origin:r(n),destination:r(i),apiKey:this.config_.apiKey});return Object.entries(t).forEach(function(e){var t=A(e,2),e=t[0],t=t[1];o.append(e,"object"===s(t)?JSON.stringify(t):t);}),e.search=o,fetch(e,{headers:{"X-Api-Key":this.config_.apiKey}}).then(function(e){return e.json()})}}]),t}(),An=function(){h(s,H.map.Feature);var t=p(s);function s(e){var n;if(u(this,s),n=t.call(this),!(e instanceof pn))throw new Error("It is mandatory to provide valid instance of venueModel");return n.venueModel=e,n.search_=new Ee(e),n.status_={activeDrawingId:e.getRootDrawing().getId(),activeLevelIndex:e.getRootDrawing().getMainLevel().getZIndex()},n.mapObjectStore_=n.getDefaultMapObjectsStore_(),n.drawings=e.getDrawings().map(function(e){e=new _(e);return e.setParentEventTarget(g(n)),e}),n.levels=e.getLevels().map(function(e){var t=new E(e);return t.setParentEventTarget(n.drawings.find(function(e){return e.getId()===t.getData().getDrawing().getId()})),t}),n.geometries=e.getGeometries().map(function(e){var t=new I(e);return t.setParentEventTarget(n.levels.find(function(e){return e.getId()===t.getData().getLevel().getId()})),t}),n}return l(s,[{key:"getData",value:function(){return this.venueModel}},{key:"getBoundingBox",value:function(){return v(H.geo.Rect,L(this.venueModel.getBoundingBox()))}},{key:"getCenter",value:function(){var e=A(this.venueModel.getCenter(),2),t=e[0],e=e[1];return new H.geo.Point(e,t)}},{key:"getId",value:function(){return this.venueModel.getId()}},{key:"getName",value:function(){return this.venueModel.getName()}},{key:"getDrawing",value:function(t){return this.drawings.find(function(e){return e.getId()===t})}},{key:"getDrawings",value:function(){return this.drawings}},{key:"getLevel",value:function(t){return this.levels.find(function(e){return e.getId()===t})}},{key:"getLevels",value:function(){return this.levels}},{key:"getGeometry",value:function(t){return this.geometries.find(function(e){return e.getId()===t})}},{key:"getGeometries",value:function(){return this.geometries}},{key:"getActiveLevels",value:function(){var t=this;return this.getData().getDisplaySettings()===He.FLATTEN?this.venueModel.getLevelsByZIndex(this.status_.activeLevelIndex).map(function(e){return t.getLevel(e.getId())}):[this.venueModel.getDrawingById(this.status_.activeDrawingId).getLevelByZIndex(this.status_.activeLevelIndex)].map(function(e){return t.getLevel(e.getId())})}},{key:"getActiveDrawing",value:function(){return this.getDrawing(this.status_.activeDrawingId)}},{key:"setActiveDrawing",value:function(e){if(this.status_.activeDrawingId!==e){var t=this.venueModel.getDrawingById(e);if(!t)throw new Error("Drawing ".concat(e," was not found"));var n=this.status_.activeDrawingId;this.status_.activeDrawingId=e,this.setActiveLevelIndex(t.getMainLevel().getZIndex()),this.dispatchEvent(new H.util.ChangeEvent(s.EVENTS.DRAWING_CHANGE,e,n));}}},{key:"getActiveLevelIndex",value:function(){return this.status_.activeLevelIndex}},{key:"setActiveLevelIndex",value:function(e){var t;this.venueModel.getLevelsByZIndex(e)&&(t=this.status_.activeLevelIndex,this.status_.activeLevelIndex=e,this.dispatchEvent(new H.util.ChangeEvent(s.EVENTS.LEVEL_CHANGE,e,t)));}},{key:"isActive",value:function(){var e=this.getParentEventTarget();return !!e&&this===e.activeVenue}},{key:"getHighlightedGeometries",value:function(){var t=this;return this.venueModel.getGeometries().filter(function(e){return e.isHighlighted()}).map(function(e){return t.getGeometry(e.getId())})}},{key:"setHighlightedGeometries",value:function(e,t,n){var r=!(0<arguments.length&&void 0!==e)||e,t=1<arguments.length&&void 0!==t?t:[],n=2<arguments.length&&void 0!==n?n:{},n=O(O({},oe),n),i=n.fillColor,o=n.outlineColor,a=n.outlineWidth;t.forEach(function(e){e.getData().highlight(r,{m:i,o:o,w:a});}),this.dispatchEvent(s.EVENTS.GEOMETRY_HIGHLIGHT);}},{key:"getMapObjects",value:function(e,t){e=0<arguments.length&&void 0!==e?e:this.getActiveLevelIndex(),t=1<arguments.length&&void 0!==t?t:this.getActiveDrawing();return this.mapObjectStore_[e][t.getId()]}},{key:"setMapObjects",value:function(e,t,n){e=0<arguments.length&&void 0!==e?e:[],t=1<arguments.length&&void 0!==t?t:this.getActiveLevelIndex(),n=2<arguments.length&&void 0!==n?n:this.getActiveDrawing();this.mapObjectStore_[t]&&this.mapObjectStore_[t][n.getId()]&&(this.mapObjectStore_[t][n.getId()]=L(e)),this.updateMapObjectsVisibility_();}},{key:"search",value:function(e){var t=this,e=0<arguments.length&&void 0!==e?e:"";return this.search_.find(e).flatMap(function(e){return e.geometries.map(function(e){return t.getGeometry(e.getId())})})}},{key:"updateMapObjectsVisibility_",value:function(){Object.values(this.mapObjectStore_).forEach(function(e){Object.values(e).forEach(function(e){return e.forEach(function(e){return e.setVisibility(!1)})});}),this.isActive()&&this.mapObjectStore_[this.getActiveLevelIndex()][this.getActiveDrawing().getId()].forEach(function(e){return e.setVisibility(!0)});}},{key:"getDefaultMapObjectsStore_",value:function(){var r=this,i=this.getData().getDisplaySettings()===He.FLATTEN;return this.venueModel.getLevels().reduce(function(e,t){var n=t.getZIndex(),e=O({},e);return e[n]||(e[n]={}),e[n][t.getDrawing().getId()]=[],i&&(e[n][r.venueModel.getRootDrawing().getId()]=[]),e},{})}}]),s}();An.EVENTS={ACTIVE_VENUE_CHANGE:"activevenuechange",DRAWING_CHANGE:"drawingchange",LEVEL_CHANGE:"levelchange",GEOMETRY_HIGHLIGHT:"geometryhighlight"};function Ln(e,t,n){return n===Rn.ObjectType.SEGMENT_START_MARKER?0===e?Cn:Dn:n===Rn.ObjectType.SEGMENT_FINISH_MARKER?1===t.length||e===t.length-1?xn:Vn:"indoor"===t[e].departure.place.type?wn:Pn}var Tn=function(){function e(){u(this,e);}return l(e,null,[{key:"getIconLayer",value:function(e){return {type:"FeatureCollection",features:(0<arguments.length&&void 0!==e?e:[]).flatMap(function(e){return e.getData().getGeometries()}).filter(function(e){return e.isIcon()&&e.getIcon()}).map(function(e){var t=A(e.getLabelArea(),2),n=t[0],r=t[1],i=e.getLevel(),t=e.getIcon().getSVG();return {type:"Feature",properties:{id:e.getId(),geometryId:e.getId(),levelId:i.getId(),name:e.getDisplayName(),venueId:i.getDrawing().getVenueModel().getId(),url:t?"data:image/svg+xml;utf8,".concat(encodeURIComponent(t)):""},geometry:{type:q,coordinates:[n,r]}}})}}},{key:"getLabelLayer",value:function(e){return {type:"FeatureCollection",features:(0<arguments.length&&void 0!==e?e:[]).flatMap(function(e){return e.getData().getGeometries()}).filter(function(e){return e.getDisplayName()&&!e.isIcon()}).map(function(e){var t=A(e.getLabelArea(),2),n=t[0],r=t[1],i=e.getLabelStyle(),o=i.fill,t=i.zmin,i=e.getLevel();return {type:"Feature",properties:{id:e.getId(),geometryId:e.getId(),levelId:i.getId(),venueId:i.getDrawing().getVenueModel().getId(),name:e.getDisplayName(),minZoom:t||15,textFillColor:o.toLowerCase()},geometry:{type:q,coordinates:[n,r]}}})}}},{key:"getGeometryLayer",value:function(e){return {type:"FeatureCollection",features:(0<arguments.length&&void 0!==e?e:[]).flatMap(function(e){return e.getData().getGeometries()}).filter(function(e){return e.getType()!==q}).map(function(e){var t=e.getHighlightedStyle()||{},n=t.m,r=t.o,i=t.w,o=O({},e.getStyle()),a=o.m,s=o.o,u=o.w,l=re.fillColor,c=re.outlineColor,t=re.outlineWidth,o=e.getLevel();return {type:"Feature",properties:{id:e.getId(),fillColor:(n||a||l).toLowerCase(),geometryId:e.getId(),levelId:o.getId(),venueId:o.getDrawing().getVenueModel().getId(),outlineColor:(r||s||c).toLowerCase(),outlineWidth:Number(((i||u||t)/3).toFixed(2)),zIndex:e.getZIndex()},geometry:{type:e.getType(),coordinates:e.getCoordinates()}}})}}},{key:"getFootprintLayer",value:function(e){return {type:"FeatureCollection",features:e.flatMap(function(e){var t=e.getData().getRootDrawing().getMainLevel().getId(),n=e.getLevel(t).getData().getGeometries().filter(function(e){return e.getType()===$});return [{type:"Feature",properties:{isFootprint:!0,levelId:t,venueId:e.getId(),zIndex:1},geometry:{type:"MultiPolygon",coordinates:n.map(function(e){return e.getCoordinates()})}},{type:"Feature",properties:{isFootprint:!0,levelId:t,venueId:e.getId(),zIndex:2,venueName:e.getName()},geometry:{type:"Point",coordinates:e.getCenter().toGeoJSON().coordinates.slice(0,2)}}]})}}}]),e}(),Nn=function(){function e(){u(this,e);}return l(e,null,[{key:"getStyle",value:function(e){var e=0<arguments.length&&void 0!==e?e:[],n={styles:[{layer:le.FOOTPRINT,when:["==",["geometry-type"],"Polygon"],technique:"solid-line",color:"#613F8E",lineWidth:"2px",renderOrder:1},{layer:le.FOOTPRINT,when:["==",["geometry-type"],"Polygon"],technique:"fill",color:"#AF91B4",renderOrder:2},{layer:le.FOOTPRINT,when:["==",["geometry-type"],"Point"],technique:"text",color:"black",size:16,text:["get","venueName"],priority:61},{layer:le.VECTOR,when:["==",["geometry-type"],"Polygon"],technique:"fill",color:["get","fillColor"],renderOrder:["get","zIndex"]},{layer:le.VECTOR,technique:"solid-line",color:["get","outlineColor"],lineWidth:["get","outlineWidth"],renderOrder:["get","zIndex"]},{layer:le.TEXT,minZoomLevel:["get","minZoom"],technique:"text",color:["get","textFillColor"],size:ie.size,text:["get","name"],priority:60},{layer:le.ICON,minZoomLevel:ae,when:["==",["geometry-type"],"Point"],technique:"labeled-icon",textIsOptional:!0,size:0,imageTexture:["concat","texture",["get","name"]],screenWidth:["interpolate",["linear"],["zoom"],15,3,21,25],screenHeight:["interpolate",["linear"],["zoom"],15,3,21,25],priority:61}],images:{},imageTextures:[]};return e.forEach(function(e){var t="texture"+e.properties.name;n.images[t]||(n.images[t]={url:e.properties.url,preload:!0},n.imageTextures.push({name:t,image:t}));}),new H.map.render.harp.Style(n)}}]),e}(),bn=function(){function n(){u(this,n);}return l(n,null,[{key:"getIconsTextures",value:function(e){var i={},o={},a=(0<arguments.length&&void 0!==e?e:[]).reduce(function(e,t){var n=t.properties.name;return e[n]||(e[n]=[]),e[n].push(t),e},{});return Object.keys(a).forEach(function(e){var t="texture".concat(e),n="sprite".concat(e),r=a[e][0].properties.url;i[t]={url:r,sprites:c({},n,[0,0,50,50])},a[e].forEach(function(e){e=e.properties;o["icon".concat(e.name)]={filter:{name:e.name,$zoom:{min:ae}},draw:{points:{interactive:!0,priority:1,size:[[15,"5%"],[16,"10%"],[17,"15%"],[18,"25%"],[19,"35%"],[20,"40%"],[21,"50%"]],texture:t,sprite:n}}};});}),{textures:i,iconLayers:o}}},{key:"getFootprintLayer",value:function(){return {data:{source:"venues",layer:le.FOOTPRINT},draw:{polygons:{interactive:!0,color:"#AF91B4",order:2},lines:{color:"#613F8E",width:"2px",order:1},points:{color:"[0, 0, 0, 0]",size:"0px",order:3,priority:1,text:{anchor:"center",collide:!1,font:{fill:"black",size:"16px"},text_source:"function() { return feature.venueName }"}}}}}},{key:"getGeometryLayer",value:function(){return {data:{source:"venues",layer:le.VECTOR},draw:{polygons:{interactive:!0,color:"function() { return feature.fillColor }",order:"function() { return feature.zIndex }"},lines:{color:"function() { return feature.outlineColor }",order:"function() { return feature.zIndex }",width:"function() { return feature.outlineWidth }"}}}}},{key:"getTextLayer",value:function(){return {filter:{$zoom:{min:se}},data:{source:"venues",layer:le.TEXT},draw:{points:{filter:"function() { return $zoom > feature.minZoom }",color:"[0, 0, 0, 0]",size:"0px",offset:["0px","-10px"],priority:2,text:{font:{fill:"function() { return feature.textFillColor }",size:ie.size},text_source:"function() { return feature.name }"}}}}}},{key:"getIconLayer",value:function(e){return O({data:{source:"venues",layer:le.ICON}},e)}},{key:"getStyle",value:function(e){var t=n.getIconsTextures(0<arguments.length&&void 0!==e?e:[]),e=t.textures,t=t.iconLayers,t={venue_footprints:n.getFootprintLayer(),venue_geometries:n.getGeometryLayer(),venue_labels:n.getTextLayer(),venue_icons:n.getIconLayer(t)},e=H.gl.yaml.safeDump({sources:{venues:{max_zoom:ue,type:"GeoJSONTileSource"}},layers:t,textures:e});return new H.map.render.webgl.Style(e)}}]),n}(),Sn={type:"FeatureCollection",features:[]},kn={extent:4096,indexMaxZoom:0,maxZoom:24,tolerance:3},Ft=function(){h(n,H.map.provider.RemoteTileProvider);var t=p(n);function n(e){return u(this,n),(e=t.call(this,e)).venues=[],e.activeVenue=null,e.dataLayers_={},e.tileIndexes_={},e.addEventListener(An.EVENTS.ACTIVE_VENUE_CHANGE,e.activeVenueChangeHandler_,void 0,g(e)),e}return l(n,[{key:"setStyle",value:function(e){return this.setStyleInternal(e)}},{key:"getStyle",value:function(){return this.getStyleInternal()}},{key:"isFeatureVisible_",value:function(e,t){var n=e.properties;return this.activeVenue&&n.venueId===this.activeVenue.getId()?t!==le.FOOTPRINT&&this.activeVenue.getActiveLevels().some(function(e){return e.id===n.levelId}):!0===n.isFootprint&&t===le.FOOTPRINT}},{key:"requestInternal",value:function(s,u,l,e){function c(e){for(var t=0;t<e.length;t+=1)e[t]=e[t].map(function(e){return Q(e,l,s,u,kn.extent)});}var h=this,d={};return Object.keys(this.tileIndexes_).forEach(function(t){var e=h.tileIndexes_[t].getTile(l,s,u);d[t]=e?function(e){var t=[],n=e&&e.features;if(n)for(var r=0,i=n.length;r<i;r+=1){var o=n[r],a=o.type,s=void 0,u=!1;switch(a){case ce:s={type:ee,coordinates:o.geometry.map(function(e){return e.slice()})};break;case he:case de:s={type:te,coordinates:o.geometry.map(function(e){return e.map(function(e){return e.slice()})})},a===de&&null==(s=X(s))&&(u=!0);break;default:u=!0;}u||t.push({geometry:s,id:o.id,properties:o.tags,type:"Feature"});}return {type:"FeatureCollection",features:t}}(e):Sn,d[t].features=d[t].features.filter(function(e){return h.isFeatureVisible_(e,t)});for(var n=0;n<d[t].features.length;n+=1){var r=d[t].features[n],i=r.geometry.type;if(i===$||i===te)c(r.geometry.coordinates);else if(i===ne)r.geometry.coordinates.map(c);else for(var o=r.geometry.coordinates,a=0;a<o.length;a+=1)o[a]=Q(o[a],l,s,u,kn.extent);}}),e(d),{cancel:function(){}}}},{key:"getActiveVenue",value:function(){return this.activeVenue}},{key:"getVenue",value:function(t){return t?this.venues.find(function(e){return e.getId()===Number(t)}):this.activeVenue}},{key:"setActiveVenue",value:function(e){var t=this.activeVenue;this.activeVenue=e,this.dispatchEvent(new H.util.ChangeEvent(An.EVENTS.ACTIVE_VENUE_CHANGE,e,t)),this.reload();}},{key:"addVenue",value:function(e,t){var n=1<arguments.length&&void 0!==t&&t;if(!(e instanceof An))throw new Error("Invalid argument");t=e.getId();if(this.getVenue(t))throw new Error("Please invoke provider.removeVenue to remove old instance of venue ".concat(t," before adding new"));e.setParentEventTarget(this),this.venues.push(e),n||(this.reloadData_(),this.reloadStyle_());}},{key:"addVenues",value:function(e){var t=this,e=0<arguments.length&&void 0!==e?e:[];0<e.length&&(e.forEach(function(e){e instanceof An&&t.addVenue(e,!0);}),this.reloadData_(),this.reloadStyle_());}},{key:"removeVenue",value:function(e){var t;e instanceof An&&-1<this.venues.indexOf(e)&&(t=e.getId(),this.activeVenue&&this.activeVenue.getId()===t&&this.setActiveVenue(null),this.venues.splice(this.venues.indexOf(e),1),this.reloadData_(),this.reloadStyle_(),this.reload());}},{key:"getFeatureProxy",value:function(e,t,n){var r=e.geometryId,e=e.venueId,e=this.getVenue(e);return r?n(e.getGeometries().find(function(e){return e.id===r})):e&&n(e),!0}},{key:"addVenueEventListeners_",value:function(e){e&&(e.addEventListener(An.EVENTS.GEOMETRY_HIGHLIGHT,this.geometryHighlightHandler_,void 0,this),e.addEventListener(An.EVENTS.LEVEL_CHANGE,this.levelChangeHandler_,void 0,this),e.addEventListener(An.EVENTS.DRAWING_CHANGE,this.drawingChangeHandler_,void 0,this));}},{key:"removeVenueEventListeners_",value:function(e){e&&(e.removeEventListener(An.EVENTS.GEOMETRY_HIGHLIGHT,this.geometryHighlightHandler_,void 0,this),e.removeEventListener(An.EVENTS.LEVEL_CHANGE,this.levelChangeHandler_,void 0,this),e.removeEventListener(An.EVENTS.DRAWING_CHANGE,this.drawingChangeHandler_,void 0,this));}},{key:"activeVenueChangeHandler_",value:function(e){var t=e.oldValue,e=e.newValue;t&&(this.removeVenueEventListeners_(t),t.updateMapObjectsVisibility_()),e&&(this.addVenueEventListeners_(e),e.updateMapObjectsVisibility_());}},{key:"drawingChangeHandler_",value:function(){this.reload();}},{key:"levelChangeHandler_",value:function(){this.activeVenue&&(this.activeVenue.updateMapObjectsVisibility_(),this.reload());}},{key:"geometryHighlightHandler_",value:function(){this.reloadData_([le.VECTOR]),this.reload();}},{key:"createDataLayers_",value:function(e){var t=this,e=0<arguments.length&&void 0!==e?e:Object.keys(le),n=le.FOOTPRINT,r=le.ICON,i=le.TEXT,o=le.VECTOR;e.forEach(function(e){switch(e){case o:t.dataLayers_[o]=Tn.getGeometryLayer(t.venues);break;case n:t.dataLayers_[n]=Tn.getFootprintLayer(t.venues);break;case r:t.dataLayers_[r]=Tn.getIconLayer(t.venues);break;case i:t.dataLayers_[i]=Tn.getLabelLayer(t.venues);break;default:throw new Error("Unsupported Layer ".concat(e))}});}},{key:"createTileIndexes_",value:function(e){var t=this;(0<arguments.length&&void 0!==e?e:Object.keys(le)).forEach(function(e){t.tileIndexes_[e]=new J(t.dataLayers_[e],kn);});}},{key:"reloadData_",value:function(e){e=0<arguments.length&&void 0!==e?e:Object.keys(le);this.createDataLayers_(e),this.createTileIndexes_(e);}},{key:"reloadStyle_",value:function(){var e=this.dataLayers_[le.ICON]?this.dataLayers_[le.ICON].features:[];this.getEngineType()===H.Map.EngineType.WEBGL?this.setStyle(bn.getStyle(e)):this.getEngineType()===H.Map.EngineType.HARP&&this.setStyle(Nn.getStyle(e));}},{key:"providesGeoJSON",value:function(){return !0}}]),n}(),wn=new H.map.SpatialStyle({strokeColor:"#1ab4bf",lineWidth:3}),Pn=new H.map.SpatialStyle({strokeColor:"#1ab4bf",lineWidth:3}),Cn=new H.map.Icon("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI1MCIgdmlld0JveD0iMCAwIDQwIDUwIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PGRlZnM+PHBhdGggaWQ9ImIiIGQ9Ik0zNC4yNSAzMS42NTJBMTkuMDE1IDE5LjAxNSAwIDAgMCAzOSAxOS4wNkMzOSA4LjU0OSAzMC40NzggMCAyMCAwUzEgOC41NSAxIDE5LjA1OWMwIDQuODIzIDEuNzk1IDkuMjMzIDQuNzUgMTIuNTkzTDE5Ljk3NSA0NiAzNC4yNSAzMS42NTJ6Ii8+PHBhdGggaWQ9ImEiIGQ9Ik0zNC4yNSAzMS42NTJBMTkuMDE1IDE5LjAxNSAwIDAgMCAzOSAxOS4wNkMzOSA4LjU0OSAzMC40NzggMCAyMCAwUzEgOC41NSAxIDE5LjA1OWMwIDQuODIzIDEuNzk1IDkuMjMzIDQuNzUgMTIuNTkzTDE5Ljk3NSA0NiAzNC4yNSAzMS42NTJ6Ii8+PG1hc2sgaWQ9ImMiIHdpZHRoPSIzOCIgaGVpZ2h0PSI0NiIgeD0iMCIgeT0iMCIgZmlsbD0iI2ZmZiI+PHVzZSB4bGluazpocmVmPSIjYSIvPjwvbWFzaz48L2RlZnM+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48ZWxsaXBzZSBjeD0iMjAiIGN5PSI0NS4xNiIgZmlsbD0iI0ZGRiIgc3Ryb2tlPSIjOTc5Nzk3IiBzdHJva2Utd2lkdGg9Ii4yNSIgcng9IjMuNSIgcnk9IjMuNSIvPjx1c2UgZmlsbD0iIzAxQjZCMiIgeGxpbms6aHJlZj0iI2IiLz48cGF0aCBmaWxsPSIjMzIzMjMyIiBmaWxsLW9wYWNpdHk9Ii41IiBkPSJNMTEuODEgMzcuNjZoMTYuMzhsLTguMiA4eiIvPjx1c2Ugc3Ryb2tlPSIjNDE2QTg2IiBzdHJva2Utd2lkdGg9Ii41IiBtYXNrPSJ1cmwoI2MpIiB4bGluazpocmVmPSIjYSIvPjxlbGxpcHNlIGN4PSIxOS44MSIgY3k9IjE5LjE5IiBmaWxsPSIjRkZGIiByeD0iNC44MSIgcnk9IjQuODEiLz48L2c+PC9zdmc+"),xn=new H.map.Icon("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI1MCIgdmlld0JveD0iMCAwIDQwIDUwIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PGRlZnM+PHBhdGggaWQ9ImEiIGQ9Ik0zNC4yNSAzMS42NTJBMTkuMDE1IDE5LjAxNSAwIDAgMCAzOSAxOS4wNkMzOSA4LjU0OSAzMC40NzggMCAyMCAwUzEgOC41NSAxIDE5LjA1OWMwIDQuODIzIDEuNzk1IDkuMjMzIDQuNzUgMTIuNTkzTDE5Ljk3NSA0NiAzMi44MyAzMy4xMDRjLjQwNy0uMzc0IDEuNDE5LTEuNDUyIDEuNDE5LTEuNDUyeiIvPjxtYXNrIGlkPSJjIiB3aWR0aD0iMzgiIGhlaWdodD0iNDYiIHg9IjAiIHk9IjAiIGZpbGw9IiNmZmYiPjx1c2UgeGxpbms6aHJlZj0iI2EiLz48L21hc2s+PGVsbGlwc2UgaWQ9ImIiIGN4PSIxOS44MDciIGN5PSIxOS4xNjgiIHJ4PSIxMi4zNjMiIHJ5PSIxMi4xOTciLz48bWFzayBpZD0iZCIgd2lkdGg9IjI1LjcyNSIgaGVpZ2h0PSIyNS4zOTQiIHg9Ii0uNSIgeT0iLS41Ij48cGF0aCBmaWxsPSIjZmZmIiBkPSJNNi45NDQgNi40NzFoMjUuNzI1djI1LjM5NEg2Ljk0NHoiLz48dXNlIHhsaW5rOmhyZWY9IiNiIi8+PC9tYXNrPjwvZGVmcz48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxlbGxpcHNlIGN4PSIyMCIgY3k9IjQ1LjE2IiBmaWxsPSIjRkZGIiBzdHJva2U9IiM5Nzk3OTciIHN0cm9rZS13aWR0aD0iLjI1IiByeD0iMy41IiByeT0iMy41Ii8+PHVzZSBmaWxsPSIjMzIzMjMyIiB4bGluazpocmVmPSIjYSIvPjxwYXRoIGZpbGw9IiM3RDdEN0QiIGQ9Ik0xMi4wMTEgMzcuODA1aDE1Ljk3OGwtNy45MTYgOHoiLz48dXNlIHN0cm9rZT0iIzdDN0M3QyIgc3Ryb2tlLXdpZHRoPSIuNSIgbWFzaz0idXJsKCNlKSIgeGxpbms6aHJlZj0iI2EiLz48dXNlIHN0cm9rZT0iI0ZGRiIgc3Ryb2tlLXdpZHRoPSIuNSIgbWFzaz0idXJsKCNjKSIgeGxpbms6aHJlZj0iI2EiLz48ZWxsaXBzZSBmaWxsPSIjRkZGIiBjeD0iMTkuODA3IiBjeT0iMTkuMTY4IiByeD0iMTIuMzYzIiByeT0iMTIuMTk3Ii8+PHBhdGggZmlsbD0iIzMyMzIzMiIgZD0iTTYuODEyIDYuOTQ4aDYuNDV2Ni4zNjRoLTYuNDV6bTAgMTIuNzI3aDYuNDV2Ni4zNjRoLTYuNDV6bTYuNDUtNi4zNjNoNi40NXY2LjM2NGgtNi40NXptMCAxMi43MjdoNi40NXY2LjM2NGgtNi40NXptNi40NS0xOS4wOTFoNi40NXY2LjM2NGgtNi40NXptMCAxMi43MjdoNi40NXY2LjM2NGgtNi40NXptNi40NS02LjM2M2g2LjQ1djYuMzY0aC02LjQ1em0wIDEyLjcyN2g2LjQ1djYuMzY0aC02LjQ1eiIvPjx1c2Ugc3Ryb2tlPSIjRkZGIiBtYXNrPSJ1cmwoI2QpIiB4bGluazpocmVmPSIjYiIgc3Ryb2tlLWxpbmVjYXA9InNxdWFyZSIvPjwvZz48L3N2Zz4="),Dn=null,Vn=null,Rn=function(){function v(e,t){u(this,v),this.indoorMapObjects_=null,this.outdoorMapObjects_=null,this.createRouteObjects_(e,t);}return l(v,[{key:"createRouteObjects_",value:function(e,t){var c=this,e=e.sections,h=void 0===e?[]:e,d=1<arguments.length&&void 0!==t?t:Ln;this.indoorMapObjects_={},this.outdoorMapObjects_=new H.map.Group;for(var n=function(e){var t=h[e],n=t.departure.place,r=n.id,i=n.type,o=H.util.flexiblePolyline.decode(t.polyline).polyline,a=void 0,s=void 0,n=d(e,h,v.ObjectType.SEGMENT_START_MARKER);n&&(a=new H.map.Marker(t.departure.place.location,{icon:n}));n=d(e,h,v.ObjectType.SEGMENT_FINISH_MARKER);n&&(s=new H.map.Marker(t.arrival.place.location,{icon:n}));var u,l=d(e,h,v.ObjectType.SEGMENT_POLYLINE);"indoor"===i?(i=function(e){var e=0<arguments.length&&void 0!==e?e:[],t=new Map,n=new H.geo.LineString,r=A(e[0],3)[2];return t.set(r,[n]),e.forEach(function(e){e[2]!==r&&(r=e[2],n=new H.geo.LineString,t.has(r)?t.get(r).push(n):t.set(r,[n])),n.pushLatLngAlt.apply(n,L(e));}),t}(o),u=Array.from(i.keys()).reduce(function(e,t){return e[t]||(e[t]=new H.map.Group),e},{}),l&&i.forEach(function(e,t){e.forEach(function(e){1<e.getPointCount()&&(e=new H.map.Polyline(e,{style:l}),u[t].addObject(e));});}),a&&u[t.departure.place.location.lvl].addObject(a),s&&u[t.arrival.place.location.lvl].addObject(s),c.indoorMapObjects_[r]=O(O({},c.indoorMapObjects_[r]||{}),u)):(l&&(o=new H.geo.LineString(o.flatMap(function(e){return [e[0],e[1],0]})),o=new H.map.Polyline(o,{style:l}),c.outdoorMapObjects_.addObject(o)),a&&c.outdoorMapObjects_.addObject(a),s&&c.outdoorMapObjects_.addObject(s));},r=0;r<h.length;r++)n(r);}},{key:"getIndoorObjects",value:function(){return this.indoorMapObjects_}},{key:"getOutdoorObjects",value:function(){return this.outdoorMapObjects_}}]),v}();Rn.ObjectType={SEGMENT_START_MARKER:1,SEGMENT_FINISH_MARKER:2,SEGMENT_POLYLINE:3};var Gn=function(){h(a,H.service.Service);var o=p(a);function a(e){var t;u(this,a),t=o.call(this,a,e);var n={apiKey:e.apikey,baseUrl:e.baseUrl&&e.baseUrl.getHost(),token:e.token},r={apiKey:n.apiKey,token:n.token};n.apiKey||(n.apiKey=t.getUrl().getQuery().apikey);var i=e.useLegacy||!1;return t.venueService_=new En(n,i),r.apiKey||(r.apiKey=t.getUrl().getQuery().apikey),e.routingBaseUrl&&(r.baseUrl=e.routingBaseUrl),t.routingService_=new On(r),t}return l(a,[{key:"loadVenue",value:function(e,t){t=1<arguments.length&&void 0!==t?t:{};return this.venueService_.load(e,t).then(function(e){return new An(e)})}},{key:"calculateRoute",value:function(e){return this.routingService_.calculateRoute(e)}}]),a}();Gn.CONFIG_KEY="venues",H.service.Platform.prototype.getVenuesService=function(e){return this.createService(Gn,e)};zt=function(){h(i,H.ui.Control);var r=p(i);function i(e){var t,n=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};return u(this,i),(t=r.call(this)).provider_=null,t.levelSelectorUI_=null,t.setAlignment(n&&n.alignment||H.ui.LayoutAlignment.RIGHT_BOTTOM),t.addClass("venues-ui"),e instanceof An&&t.setVenue(e),t}return l(i,[{key:"renderInternal",value:function(e,t){y(d(i.prototype),"renderInternal",this).call(this,e,t),this.createLevelSelectorUI_(e),this.venue&&this.setVenue(this.venue);}},{key:"setVenue",value:function(e){e instanceof An&&(this.removeEventListeners_(),this.venue=e,this.provider_=e.getParentEventTarget(),this.update_(),this.addEventListeners_());}},{key:"createLevelSelectorUI_",value:function(e){var t=this;e.innerHTML="",this.levelSelectorUI_=null;this.levelSelectorUI_=new ct(e,null,null,function(e){return t.venue.setActiveLevelIndex(e)});}},{key:"update_",value:function(){var e,t;this.levelSelectorUI_&&(e=this.venue.getActiveDrawing().getData(),t=this.venue.getData().getDisplaySettings(),this.levelSelectorUI_.update(e,t),this.levelChangeHandler_());}},{key:"addEventListeners_",value:function(){this.venue&&(this.venue.addEventListener(An.EVENTS.LEVEL_CHANGE,this.levelChangeHandler_,void 0,this),this.venue.addEventListener(An.EVENTS.DRAWING_CHANGE,this.drawingChangeHandler_,void 0,this)),this.provider_&&this.provider_.addEventListener(An.EVENTS.ACTIVE_VENUE_CHANGE,this.activeVenueChangeHandler_,void 0,this);}},{key:"removeEventListeners_",value:function(){this.venue&&(this.venue.removeEventListener(An.EVENTS.LEVEL_CHANGE,this.levelChangeHandler_,void 0,this),this.venue.removeEventListener(An.EVENTS.DRAWING_CHANGE,this.drawingChangeHandler_,void 0,this)),this.provider_&&this.provider_.removeEventListener(An.EVENTS.ACTIVE_VENUE_CHANGE,this.activeVenueChangeHandler_,void 0,this);}},{key:"levelChangeHandler_",value:function(){this.levelSelectorUI_.switch(this.venue.getActiveLevelIndex());}},{key:"drawingChangeHandler_",value:function(){this.update_();}},{key:"activeVenueChangeHandler_",value:function(e){this.setVenue(e.newValue);}}]),i}(),Ye=function(){h(i,H.ui.Control);var r=p(i);function i(e){var t,n=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};return u(this,i),(t=r.call(this)).provider_=null,t.drawingSelectorUI_=null,t.addClass("venues-ui"),t.setAlignment(n&&n.alignment||H.ui.LayoutAlignment.RIGHT_BOTTOM),e instanceof An&&t.setVenue(e),t}return l(i,[{key:"renderInternal",value:function(e,t){y(d(i.prototype),"renderInternal",this).call(this,e,t),this.createDrawingSelectorUI_(e),this.venue&&this.setVenue(this.venue);}},{key:"setVenue",value:function(e){e instanceof An&&(this.removeEventListeners_(),this.venue=e,this.provider_=e.getParentEventTarget(),this.drawingSelectorUI_&&this.drawingSelectorUI_.update(e.getData()),this.addEventListeners_());}},{key:"createDrawingSelectorUI_",value:function(e){var t=this;e.innerHTML="",this.drawingSelectorUI_=null,this.drawingSelectorUI_=new rt(e,null,function(e){return t.venue.setActiveDrawing(e)});}},{key:"addEventListeners_",value:function(){this.venue&&this.venue.addEventListener(An.EVENTS.DRAWING_CHANGE,this.drawingChangeHandler_,void 0,this),this.provider_&&this.provider_.addEventListener(An.EVENTS.ACTIVE_VENUE_CHANGE,this.activeVenueChangeHandler_,void 0,this);}},{key:"removeEventListeners_",value:function(){this.venue&&this.venue.removeEventListener(An.EVENTS.DRAWING_CHANGE,this.drawingChangeHandler_,void 0,this),this.provider_&&this.provider_.removeEventListener(An.EVENTS.ACTIVE_VENUE_CHANGE,this.activeVenueChangeHandler_,void 0,this);}},{key:"drawingChangeHandler_",value:function(){this.drawingSelectorUI_.switch(this.venue.getActiveDrawing().id);}},{key:"activeVenueChangeHandler_",value:function(e){this.setVenue(e.newValue);}}]),i}(),zt=Object.freeze({__proto__:null,DrawingControl:Ye,LevelControl:zt});return t(".venues-ui * {\n  font-family: 'Fira Sans', 'Helvetica Neue', Helvetica, sans-serif;\n  color: #0F1621; }\n\n.venues-ui .arrow {\n  display: block;\n  width: 100%;\n  height: 100%;\n  background-repeat: no-repeat;\n  background-position: center; }\n  .venues-ui .arrow--up {\n    background-image: url(\"data:image/svg+xml,%0A%3Csvg width='13px' height='9px' viewBox='0 0 13 9' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Cg id='VenueMap_Facilities_Detail' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E%3Cg id='Floorplan-Switcher' transform='translate(-426.000000, -584.000000)' fill='%23383C45'%3E%3Cg id='Map-Controls-Copy' transform='translate(417.753906, 572.000000)'%3E%3Cg id='Chevron,-Dark' transform='translate(15.000000, 16.499023) rotate(-180.000000) translate(-15.000000, -16.499023) translate(9.000000, 12.749023)'%3E%3Cpath d='M6.0105,7.5 L4.1895,5.76404817 L0.1695,1.90510321 C0.057,1.79759174 0,1.68291284 0,1.56106651 C0,1.44065367 0.057,1.32597477 0.1695,1.2184633 L1.2465,0.16771789 C1.347,0.0587729358 1.47,0.00430045872 1.617,0.00430045872 C1.764,0.00430045872 1.887,0.0587729358 1.986,0.166284404 L6.009,3.98365826 L10.023,0.161983945 C10.122,0.0530389908 10.236,0 10.3695,0 C10.503,0 10.62,0.0530389908 10.7205,0.161983945 L11.841,1.21129587 C12.0525,1.43922018 12.0525,1.67144495 11.8425,1.89793578 L7.827,5.76118119 L6.0105,7.5 Z' id='Fill-3'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E\"); }\n  .venues-ui .arrow--down {\n    background-image: url(\"data:image/svg+xml,%0A%3Csvg width='13px' height='9px' viewBox='0 0 13 9' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Cg id='VenueMap_Facilities_Detail' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E%3Cg id='Floorplan-Switcher' transform='translate(-347.000000, -704.000000)' fill='%23383C45'%3E%3Cg id='Map-Controls' transform='translate(338.251953, 572.000000)'%3E%3Cg id='Chevron,-Dark' transform='translate(9.000000, 132.746094)'%3E%3Cpath d='M6.0105,7.5 L4.1895,5.76404817 L0.1695,1.90510321 C0.057,1.79759174 0,1.68291284 0,1.56106651 C0,1.44065367 0.057,1.32597477 0.1695,1.2184633 L1.2465,0.16771789 C1.347,0.0587729358 1.47,0.00430045872 1.617,0.00430045872 C1.764,0.00430045872 1.887,0.0587729358 1.986,0.166284404 L6.009,3.98365826 L10.023,0.161983945 C10.122,0.0530389908 10.236,0 10.3695,0 C10.503,0 10.62,0.0530389908 10.7205,0.161983945 L11.841,1.21129587 C12.0525,1.43922018 12.0525,1.67144495 11.8425,1.89793578 L7.827,5.76118119 L6.0105,7.5 Z' id='Fill-3'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E\"); }\n\n.venues-ui .venues-ui-button {\n  display: block;\n  width: 40px;\n  height: 40px;\n  line-height: 40px;\n  font-size: 16px;\n  font-weight: 600;\n  background-color: #fff;\n  border: none;\n  border-bottom: 1px solid #9FA2A6;\n  cursor: pointer;\n  overflow: hidden;\n  color: #6e737a;\n  text-align: center;\n  text-overflow: ellipsis;\n  white-space: nowrap; }\n  .venues-ui .venues-ui-button:hover, .venues-ui .venues-ui-button--active {\n    background-color: #f0f0f0;\n    color: #0F1621; }\n\n@keyframes fade {\n  0% {\n    opacity: 0; }\n  100% {\n    opacity: 1; } }\n\n.venues-ui__drawings .drawings {\n  position: absolute;\n  top: 0;\n  right: 45px;\n  display: none;\n  opacity: 0;\n  border-radius: 5px;\n  box-shadow: 0 0 0.4em 0 rgba(15, 22, 33, 0.6); }\n  .venues-ui__drawings .drawings--open {\n    display: block;\n    opacity: 1;\n    animation: fade 1s; }\n  .venues-ui__drawings .drawings .venues-ui-button {\n    width: auto;\n    padding: 0 10px; }\n    .venues-ui__drawings .drawings .venues-ui-button:first-of-type {\n      border-top-left-radius: 5px;\n      border-top-right-radius: 5px; }\n    .venues-ui__drawings .drawings .venues-ui-button:last-of-type {\n      border-bottom-left-radius: 5px;\n      border-bottom-right-radius: 5px; }\n\n.venues-ui__drawings .trigger {\n  border-radius: 5px;\n  box-shadow: 0 0 0.4em 0 rgba(15, 22, 33, 0.6); }\n  .venues-ui__drawings .trigger .arrow {\n    transform: rotate(0);\n    transition: 0.4s; }\n  .venues-ui__drawings .trigger.venues-ui-button--active .arrow {\n    transform: rotate(90deg);\n    transition: 0.4s; }\n\n.venues-ui__levels {\n  border-radius: 5px;\n  box-shadow: 0 0 0.4em 0 rgba(15, 22, 33, 0.6); }\n  .venues-ui__levels .levels {\n    overflow: hidden; }\n  .venues-ui__levels .venues-ui-button--up + .levels .venues-ui-button {\n    border-radius: 0; }\n  .venues-ui__levels .venues-ui-button:first-of-type {\n    border-top-left-radius: 5px;\n    border-top-right-radius: 5px; }\n  .venues-ui__levels .venues-ui-button:last-of-type {\n    border-bottom-left-radius: 5px;\n    border-bottom-right-radius: 5px; }\n  .venues-ui__levels .venues-ui-button[disabled=disabled] .arrow {\n    opacity: 0.5; }\n\n.venues-ui__directory {\n  position: absolute;\n  top: 10px;\n  right: 60px;\n  bottom: calc(100% - 45px);\n  width: 350px;\n  overflow: hidden;\n  background: white;\n  border-radius: 5px;\n  box-shadow: 0 0 0.4em 0 rgba(15, 22, 33, 0.6); }\n  .venues-ui__directory.active {\n    bottom: 10px; }\n  .venues-ui__directory .directory__list {\n    top: 80px;\n    bottom: 20px;\n    position: absolute;\n    overflow-y: scroll;\n    right: 10px;\n    left: 10px;\n    font-size: 12px; }\n    .venues-ui__directory .directory__list svg {\n      width: 25px;\n      height: 25px; }\n  .venues-ui__directory .directory__heading {\n    margin: 8px;\n    font-size: 15px;\n    font-weight: normal;\n    cursor: pointer; }\n  .venues-ui__directory .directory__input {\n    margin: 10px; }\n    .venues-ui__directory .directory__input input {\n      width: 100%;\n      padding: 5px 0; }\n  .venues-ui__directory .directory__trigger {\n    position: absolute;\n    right: 10px;\n    top: 15px;\n    width: 10px;\n    height: 10px; }\n    .venues-ui__directory .directory__trigger .arrow {\n      transform: rotate(0);\n      transition: 0.4s; }\n    .venues-ui__directory .directory__trigger--active .arrow {\n      transform: rotate(-180deg);\n      transition: 0.4s; }\n"),e.Drawing=_,e.Geometry=I,e.Level=E,e.Provider=Ft,e.Route=Rn,e.Service=Gn,e.Venue=An,e.ui=zt,Object.defineProperty(e,"__esModule",{value:!0}),e}({});
  }).call(self);
  var H$1 = H;

  /*! shepherd.js 8.3.1 */

  var isMergeableObject = function isMergeableObject(value) {
    return isNonNullObject(value) && !isSpecial(value);
  };

  function isNonNullObject(value) {
    return !!value && typeof value === 'object';
  }

  function isSpecial(value) {
    var stringValue = Object.prototype.toString.call(value);
    return stringValue === '[object RegExp]' || stringValue === '[object Date]' || isReactElement(value);
  } // see https://github.com/facebook/react/blob/b5ac963fb791d1298e7f396236383bc955f916c1/src/isomorphic/classic/element/ReactElement.js#L21-L25


  var canUseSymbol = typeof Symbol === 'function' && Symbol.for;
  var REACT_ELEMENT_TYPE = canUseSymbol ? Symbol.for('react.element') : 0xeac7;

  function isReactElement(value) {
    return value.$$typeof === REACT_ELEMENT_TYPE;
  }

  function emptyTarget(val) {
    return Array.isArray(val) ? [] : {};
  }

  function cloneUnlessOtherwiseSpecified(value, options) {
    return options.clone !== false && options.isMergeableObject(value) ? deepmerge(emptyTarget(value), value, options) : value;
  }

  function defaultArrayMerge(target, source, options) {
    return target.concat(source).map(function (element) {
      return cloneUnlessOtherwiseSpecified(element, options);
    });
  }

  function getMergeFunction(key, options) {
    if (!options.customMerge) {
      return deepmerge;
    }

    var customMerge = options.customMerge(key);
    return typeof customMerge === 'function' ? customMerge : deepmerge;
  }

  function getEnumerableOwnPropertySymbols(target) {
    return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(target).filter(function (symbol) {
      return target.propertyIsEnumerable(symbol);
    }) : [];
  }

  function getKeys(target) {
    return Object.keys(target).concat(getEnumerableOwnPropertySymbols(target));
  }

  function propertyIsOnObject(object, property) {
    try {
      return property in object;
    } catch (_) {
      return false;
    }
  } // Protects from prototype poisoning and unexpected merging up the prototype chain.


  function propertyIsUnsafe(target, key) {
    return propertyIsOnObject(target, key) // Properties are safe to merge if they don't exist in the target yet,
    && !(Object.hasOwnProperty.call(target, key) // unsafe if they exist up the prototype chain,
    && Object.propertyIsEnumerable.call(target, key)); // and also unsafe if they're nonenumerable.
  }

  function mergeObject(target, source, options) {
    var destination = {};

    if (options.isMergeableObject(target)) {
      getKeys(target).forEach(function (key) {
        destination[key] = cloneUnlessOtherwiseSpecified(target[key], options);
      });
    }

    getKeys(source).forEach(function (key) {
      if (propertyIsUnsafe(target, key)) {
        return;
      }

      if (propertyIsOnObject(target, key) && options.isMergeableObject(source[key])) {
        destination[key] = getMergeFunction(key, options)(target[key], source[key], options);
      } else {
        destination[key] = cloneUnlessOtherwiseSpecified(source[key], options);
      }
    });
    return destination;
  }

  function deepmerge(target, source, options) {
    options = options || {};
    options.arrayMerge = options.arrayMerge || defaultArrayMerge;
    options.isMergeableObject = options.isMergeableObject || isMergeableObject; // cloneUnlessOtherwiseSpecified is added to `options` so that custom arrayMerge()
    // implementations can use it. The caller may not replace it.

    options.cloneUnlessOtherwiseSpecified = cloneUnlessOtherwiseSpecified;
    var sourceIsArray = Array.isArray(source);
    var targetIsArray = Array.isArray(target);
    var sourceAndTargetTypesMatch = sourceIsArray === targetIsArray;

    if (!sourceAndTargetTypesMatch) {
      return cloneUnlessOtherwiseSpecified(source, options);
    } else if (sourceIsArray) {
      return options.arrayMerge(target, source, options);
    } else {
      return mergeObject(target, source, options);
    }
  }

  deepmerge.all = function deepmergeAll(array, options) {
    if (!Array.isArray(array)) {
      throw new Error('first argument should be an array');
    }

    return array.reduce(function (prev, next) {
      return deepmerge(prev, next, options);
    }, {});
  };

  var deepmerge_1 = deepmerge;
  var cjs = deepmerge_1;

  /**
   * Checks if `value` is classified as an `Element`.
   * @param {*} value The param to check if it is an Element
   */
  function isElement$1(value) {
    return value instanceof Element;
  }
  /**
   * Checks if `value` is classified as an `HTMLElement`.
   * @param {*} value The param to check if it is an HTMLElement
   */

  function isHTMLElement$1(value) {
    return value instanceof HTMLElement;
  }
  /**
   * Checks if `value` is classified as a `Function` object.
   * @param {*} value The param to check if it is a function
   */

  function isFunction(value) {
    return typeof value === 'function';
  }
  /**
   * Checks if `value` is classified as a `String` object.
   * @param {*} value The param to check if it is a string
   */

  function isString(value) {
    return typeof value === 'string';
  }
  /**
   * Checks if `value` is undefined.
   * @param {*} value The param to check if it is undefined
   */

  function isUndefined(value) {
    return value === undefined;
  }

  class Evented {
    on(event, handler, ctx, once = false) {
      if (isUndefined(this.bindings)) {
        this.bindings = {};
      }

      if (isUndefined(this.bindings[event])) {
        this.bindings[event] = [];
      }

      this.bindings[event].push({
        handler,
        ctx,
        once
      });
      return this;
    }

    once(event, handler, ctx) {
      return this.on(event, handler, ctx, true);
    }

    off(event, handler) {
      if (isUndefined(this.bindings) || isUndefined(this.bindings[event])) {
        return this;
      }

      if (isUndefined(handler)) {
        delete this.bindings[event];
      } else {
        this.bindings[event].forEach((binding, index) => {
          if (binding.handler === handler) {
            this.bindings[event].splice(index, 1);
          }
        });
      }

      return this;
    }

    trigger(event, ...args) {
      if (!isUndefined(this.bindings) && this.bindings[event]) {
        this.bindings[event].forEach((binding, index) => {
          const {
            ctx,
            handler,
            once
          } = binding;
          const context = ctx || this;
          handler.apply(context, args);

          if (once) {
            this.bindings[event].splice(index, 1);
          }
        });
      }

      return this;
    }

  }

  /**
   * Binds all the methods on a JS Class to the `this` context of the class.
   * Adapted from https://github.com/sindresorhus/auto-bind
   * @param {object} self The `this` context of the class
   * @return {object} The `this` context of the class
   */
  function autoBind(self) {
    const keys = Object.getOwnPropertyNames(self.constructor.prototype);

    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      const val = self[key];

      if (key !== 'constructor' && typeof val === 'function') {
        self[key] = val.bind(self);
      }
    }

    return self;
  }

  /**
   * Sets up the handler to determine if we should advance the tour
   * @param {string} selector
   * @param {Step} step The step instance
   * @return {Function}
   * @private
   */

  function _setupAdvanceOnHandler(selector, step) {
    return event => {
      if (step.isOpen()) {
        const targetIsEl = step.el && event.currentTarget === step.el;
        const targetIsSelector = !isUndefined(selector) && event.currentTarget.matches(selector);

        if (targetIsSelector || targetIsEl) {
          step.tour.next();
        }
      }
    };
  }
  /**
   * Bind the event handler for advanceOn
   * @param {Step} step The step instance
   */


  function bindAdvance(step) {
    // An empty selector matches the step element
    const {
      event,
      selector
    } = step.options.advanceOn || {};

    if (event) {
      const handler = _setupAdvanceOnHandler(selector, step); // TODO: this should also bind/unbind on show/hide


      let el;

      try {
        el = document.querySelector(selector);
      } catch (e) {// TODO
      }

      if (!isUndefined(selector) && !el) {
        return console.error(`No element was found for the selector supplied to advanceOn: ${selector}`);
      } else if (el) {
        el.addEventListener(event, handler);
        step.on('destroy', () => {
          return el.removeEventListener(event, handler);
        });
      } else {
        document.body.addEventListener(event, handler, true);
        step.on('destroy', () => {
          return document.body.removeEventListener(event, handler, true);
        });
      }
    } else {
      return console.error('advanceOn was defined, but no event name was passed.');
    }
  }

  var top = 'top';
  var bottom = 'bottom';
  var right = 'right';
  var left = 'left';
  var auto = 'auto';
  var basePlacements = [top, bottom, right, left];
  var start = 'start';
  var end = 'end';
  var clippingParents = 'clippingParents';
  var viewport = 'viewport';
  var popper = 'popper';
  var reference = 'reference';
  var variationPlacements = /*#__PURE__*/basePlacements.reduce(function (acc, placement) {
    return acc.concat([placement + "-" + start, placement + "-" + end]);
  }, []);
  var placements = /*#__PURE__*/[].concat(basePlacements, [auto]).reduce(function (acc, placement) {
    return acc.concat([placement, placement + "-" + start, placement + "-" + end]);
  }, []); // modifiers that need to read the DOM

  var beforeRead = 'beforeRead';
  var read = 'read';
  var afterRead = 'afterRead'; // pure-logic modifiers

  var beforeMain = 'beforeMain';
  var main = 'main';
  var afterMain = 'afterMain'; // modifier with the purpose to write to the DOM (or write into a framework state)

  var beforeWrite = 'beforeWrite';
  var write = 'write';
  var afterWrite = 'afterWrite';
  var modifierPhases = [beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite];

  function getNodeName(element) {
    return element ? (element.nodeName || '').toLowerCase() : null;
  }

  function getWindow(node) {
    if (node == null) {
      return window;
    }

    if (node.toString() !== '[object Window]') {
      var ownerDocument = node.ownerDocument;
      return ownerDocument ? ownerDocument.defaultView || window : window;
    }

    return node;
  }

  function isElement(node) {
    var OwnElement = getWindow(node).Element;
    return node instanceof OwnElement || node instanceof Element;
  }

  function isHTMLElement(node) {
    var OwnElement = getWindow(node).HTMLElement;
    return node instanceof OwnElement || node instanceof HTMLElement;
  }

  function isShadowRoot(node) {
    // IE 11 has no ShadowRoot
    if (typeof ShadowRoot === 'undefined') {
      return false;
    }

    var OwnElement = getWindow(node).ShadowRoot;
    return node instanceof OwnElement || node instanceof ShadowRoot;
  }

  // and applies them to the HTMLElements such as popper and arrow

  function applyStyles(_ref) {
    var state = _ref.state;
    Object.keys(state.elements).forEach(function (name) {
      var style = state.styles[name] || {};
      var attributes = state.attributes[name] || {};
      var element = state.elements[name]; // arrow is optional + virtual elements

      if (!isHTMLElement(element) || !getNodeName(element)) {
        return;
      } // Flow doesn't support to extend this property, but it's the most
      // effective way to apply styles to an HTMLElement
      // $FlowFixMe[cannot-write]


      Object.assign(element.style, style);
      Object.keys(attributes).forEach(function (name) {
        var value = attributes[name];

        if (value === false) {
          element.removeAttribute(name);
        } else {
          element.setAttribute(name, value === true ? '' : value);
        }
      });
    });
  }

  function effect$2(_ref2) {
    var state = _ref2.state;
    var initialStyles = {
      popper: {
        position: state.options.strategy,
        left: '0',
        top: '0',
        margin: '0'
      },
      arrow: {
        position: 'absolute'
      },
      reference: {}
    };
    Object.assign(state.elements.popper.style, initialStyles.popper);
    state.styles = initialStyles;

    if (state.elements.arrow) {
      Object.assign(state.elements.arrow.style, initialStyles.arrow);
    }

    return function () {
      Object.keys(state.elements).forEach(function (name) {
        var element = state.elements[name];
        var attributes = state.attributes[name] || {};
        var styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]); // Set all values to an empty string to unset them

        var style = styleProperties.reduce(function (style, property) {
          style[property] = '';
          return style;
        }, {}); // arrow is optional + virtual elements

        if (!isHTMLElement(element) || !getNodeName(element)) {
          return;
        }

        Object.assign(element.style, style);
        Object.keys(attributes).forEach(function (attribute) {
          element.removeAttribute(attribute);
        });
      });
    };
  } // eslint-disable-next-line import/no-unused-modules


  var applyStyles$1 = {
    name: 'applyStyles',
    enabled: true,
    phase: 'write',
    fn: applyStyles,
    effect: effect$2,
    requires: ['computeStyles']
  };

  function getBasePlacement(placement) {
    return placement.split('-')[0];
  }

  function getBoundingClientRect(element) {
    var rect = element.getBoundingClientRect();
    return {
      width: rect.width,
      height: rect.height,
      top: rect.top,
      right: rect.right,
      bottom: rect.bottom,
      left: rect.left,
      x: rect.left,
      y: rect.top
    };
  }

  // means it doesn't take into account transforms.

  function getLayoutRect(element) {
    var clientRect = getBoundingClientRect(element); // Use the clientRect sizes if it's not been transformed.
    // Fixes https://github.com/popperjs/popper-core/issues/1223

    var width = element.offsetWidth;
    var height = element.offsetHeight;

    if (Math.abs(clientRect.width - width) <= 1) {
      width = clientRect.width;
    }

    if (Math.abs(clientRect.height - height) <= 1) {
      height = clientRect.height;
    }

    return {
      x: element.offsetLeft,
      y: element.offsetTop,
      width: width,
      height: height
    };
  }

  function contains(parent, child) {
    var rootNode = child.getRootNode && child.getRootNode(); // First, attempt with faster native method

    if (parent.contains(child)) {
      return true;
    } // then fallback to custom implementation with Shadow DOM support
    else if (rootNode && isShadowRoot(rootNode)) {
        var next = child;

        do {
          if (next && parent.isSameNode(next)) {
            return true;
          } // $FlowFixMe[prop-missing]: need a better way to handle this...


          next = next.parentNode || next.host;
        } while (next);
      } // Give up, the result is false


    return false;
  }

  function getComputedStyle$1(element) {
    return getWindow(element).getComputedStyle(element);
  }

  function isTableElement(element) {
    return ['table', 'td', 'th'].indexOf(getNodeName(element)) >= 0;
  }

  function getDocumentElement(element) {
    // $FlowFixMe[incompatible-return]: assume body is always available
    return ((isElement(element) ? element.ownerDocument : // $FlowFixMe[prop-missing]
    element.document) || window.document).documentElement;
  }

  function getParentNode(element) {
    if (getNodeName(element) === 'html') {
      return element;
    }

    return (// this is a quicker (but less type safe) way to save quite some bytes from the bundle
      // $FlowFixMe[incompatible-return]
      // $FlowFixMe[prop-missing]
      element.assignedSlot || // step into the shadow DOM of the parent of a slotted node
      element.parentNode || ( // DOM Element detected
      isShadowRoot(element) ? element.host : null) || // ShadowRoot detected
      // $FlowFixMe[incompatible-call]: HTMLElement is a Node
      getDocumentElement(element) // fallback

    );
  }

  function getTrueOffsetParent(element) {
    if (!isHTMLElement(element) || // https://github.com/popperjs/popper-core/issues/837
    getComputedStyle$1(element).position === 'fixed') {
      return null;
    }

    return element.offsetParent;
  } // `.offsetParent` reports `null` for fixed elements, while absolute elements
  // return the containing block


  function getContainingBlock(element) {
    var isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') !== -1;
    var isIE = navigator.userAgent.indexOf('Trident') !== -1;

    if (isIE && isHTMLElement(element)) {
      // In IE 9, 10 and 11 fixed elements containing block is always established by the viewport
      var elementCss = getComputedStyle$1(element);

      if (elementCss.position === 'fixed') {
        return null;
      }
    }

    var currentNode = getParentNode(element);

    while (isHTMLElement(currentNode) && ['html', 'body'].indexOf(getNodeName(currentNode)) < 0) {
      var css = getComputedStyle$1(currentNode); // This is non-exhaustive but covers the most common CSS properties that
      // create a containing block.
      // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block

      if (css.transform !== 'none' || css.perspective !== 'none' || css.contain === 'paint' || ['transform', 'perspective'].indexOf(css.willChange) !== -1 || isFirefox && css.willChange === 'filter' || isFirefox && css.filter && css.filter !== 'none') {
        return currentNode;
      } else {
        currentNode = currentNode.parentNode;
      }
    }

    return null;
  } // Gets the closest ancestor positioned element. Handles some edge cases,
  // such as table ancestors and cross browser bugs.


  function getOffsetParent(element) {
    var window = getWindow(element);
    var offsetParent = getTrueOffsetParent(element);

    while (offsetParent && isTableElement(offsetParent) && getComputedStyle$1(offsetParent).position === 'static') {
      offsetParent = getTrueOffsetParent(offsetParent);
    }

    if (offsetParent && (getNodeName(offsetParent) === 'html' || getNodeName(offsetParent) === 'body' && getComputedStyle$1(offsetParent).position === 'static')) {
      return window;
    }

    return offsetParent || getContainingBlock(element) || window;
  }

  function getMainAxisFromPlacement(placement) {
    return ['top', 'bottom'].indexOf(placement) >= 0 ? 'x' : 'y';
  }

  var max = Math.max;
  var min = Math.min;
  var round = Math.round;

  function within(min$1, value, max$1) {
    return max(min$1, min(value, max$1));
  }

  function getFreshSideObject() {
    return {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    };
  }

  function mergePaddingObject(paddingObject) {
    return Object.assign({}, getFreshSideObject(), paddingObject);
  }

  function expandToHashMap(value, keys) {
    return keys.reduce(function (hashMap, key) {
      hashMap[key] = value;
      return hashMap;
    }, {});
  }

  var toPaddingObject = function toPaddingObject(padding, state) {
    padding = typeof padding === 'function' ? padding(Object.assign({}, state.rects, {
      placement: state.placement
    })) : padding;
    return mergePaddingObject(typeof padding !== 'number' ? padding : expandToHashMap(padding, basePlacements));
  };

  function arrow(_ref) {
    var _state$modifiersData$;

    var state = _ref.state,
        name = _ref.name,
        options = _ref.options;
    var arrowElement = state.elements.arrow;
    var popperOffsets = state.modifiersData.popperOffsets;
    var basePlacement = getBasePlacement(state.placement);
    var axis = getMainAxisFromPlacement(basePlacement);
    var isVertical = [left, right].indexOf(basePlacement) >= 0;
    var len = isVertical ? 'height' : 'width';

    if (!arrowElement || !popperOffsets) {
      return;
    }

    var paddingObject = toPaddingObject(options.padding, state);
    var arrowRect = getLayoutRect(arrowElement);
    var minProp = axis === 'y' ? top : left;
    var maxProp = axis === 'y' ? bottom : right;
    var endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets[axis] - state.rects.popper[len];
    var startDiff = popperOffsets[axis] - state.rects.reference[axis];
    var arrowOffsetParent = getOffsetParent(arrowElement);
    var clientSize = arrowOffsetParent ? axis === 'y' ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
    var centerToReference = endDiff / 2 - startDiff / 2; // Make sure the arrow doesn't overflow the popper if the center point is
    // outside of the popper bounds

    var min = paddingObject[minProp];
    var max = clientSize - arrowRect[len] - paddingObject[maxProp];
    var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
    var offset = within(min, center, max); // Prevents breaking syntax highlighting...

    var axisProp = axis;
    state.modifiersData[name] = (_state$modifiersData$ = {}, _state$modifiersData$[axisProp] = offset, _state$modifiersData$.centerOffset = offset - center, _state$modifiersData$);
  }

  function effect$1(_ref2) {
    var state = _ref2.state,
        options = _ref2.options;
    var _options$element = options.element,
        arrowElement = _options$element === void 0 ? '[data-popper-arrow]' : _options$element;

    if (arrowElement == null) {
      return;
    } // CSS selector


    if (typeof arrowElement === 'string') {
      arrowElement = state.elements.popper.querySelector(arrowElement);

      if (!arrowElement) {
        return;
      }
    }

    if (!contains(state.elements.popper, arrowElement)) {

      return;
    }

    state.elements.arrow = arrowElement;
  } // eslint-disable-next-line import/no-unused-modules


  var arrow$1 = {
    name: 'arrow',
    enabled: true,
    phase: 'main',
    fn: arrow,
    effect: effect$1,
    requires: ['popperOffsets'],
    requiresIfExists: ['preventOverflow']
  };

  var unsetSides = {
    top: 'auto',
    right: 'auto',
    bottom: 'auto',
    left: 'auto'
  }; // Round the offsets to the nearest suitable subpixel based on the DPR.
  // Zooming can change the DPR, but it seems to report a value that will
  // cleanly divide the values into the appropriate subpixels.

  function roundOffsetsByDPR(_ref) {
    var x = _ref.x,
        y = _ref.y;
    var win = window;
    var dpr = win.devicePixelRatio || 1;
    return {
      x: round(round(x * dpr) / dpr) || 0,
      y: round(round(y * dpr) / dpr) || 0
    };
  }

  function mapToStyles(_ref2) {
    var _Object$assign2;

    var popper = _ref2.popper,
        popperRect = _ref2.popperRect,
        placement = _ref2.placement,
        offsets = _ref2.offsets,
        position = _ref2.position,
        gpuAcceleration = _ref2.gpuAcceleration,
        adaptive = _ref2.adaptive,
        roundOffsets = _ref2.roundOffsets;

    var _ref3 = roundOffsets === true ? roundOffsetsByDPR(offsets) : typeof roundOffsets === 'function' ? roundOffsets(offsets) : offsets,
        _ref3$x = _ref3.x,
        x = _ref3$x === void 0 ? 0 : _ref3$x,
        _ref3$y = _ref3.y,
        y = _ref3$y === void 0 ? 0 : _ref3$y;

    var hasX = offsets.hasOwnProperty('x');
    var hasY = offsets.hasOwnProperty('y');
    var sideX = left;
    var sideY = top;
    var win = window;

    if (adaptive) {
      var offsetParent = getOffsetParent(popper);
      var heightProp = 'clientHeight';
      var widthProp = 'clientWidth';

      if (offsetParent === getWindow(popper)) {
        offsetParent = getDocumentElement(popper);

        if (getComputedStyle$1(offsetParent).position !== 'static') {
          heightProp = 'scrollHeight';
          widthProp = 'scrollWidth';
        }
      } // $FlowFixMe[incompatible-cast]: force type refinement, we compare offsetParent with window above, but Flow doesn't detect it


      offsetParent = offsetParent;

      if (placement === top) {
        sideY = bottom; // $FlowFixMe[prop-missing]

        y -= offsetParent[heightProp] - popperRect.height;
        y *= gpuAcceleration ? 1 : -1;
      }

      if (placement === left) {
        sideX = right; // $FlowFixMe[prop-missing]

        x -= offsetParent[widthProp] - popperRect.width;
        x *= gpuAcceleration ? 1 : -1;
      }
    }

    var commonStyles = Object.assign({
      position: position
    }, adaptive && unsetSides);

    if (gpuAcceleration) {
      var _Object$assign;

      return Object.assign({}, commonStyles, (_Object$assign = {}, _Object$assign[sideY] = hasY ? '0' : '', _Object$assign[sideX] = hasX ? '0' : '', _Object$assign.transform = (win.devicePixelRatio || 1) < 2 ? "translate(" + x + "px, " + y + "px)" : "translate3d(" + x + "px, " + y + "px, 0)", _Object$assign));
    }

    return Object.assign({}, commonStyles, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y + "px" : '', _Object$assign2[sideX] = hasX ? x + "px" : '', _Object$assign2.transform = '', _Object$assign2));
  }

  function computeStyles(_ref4) {
    var state = _ref4.state,
        options = _ref4.options;
    var _options$gpuAccelerat = options.gpuAcceleration,
        gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat,
        _options$adaptive = options.adaptive,
        adaptive = _options$adaptive === void 0 ? true : _options$adaptive,
        _options$roundOffsets = options.roundOffsets,
        roundOffsets = _options$roundOffsets === void 0 ? true : _options$roundOffsets;

    var commonStyles = {
      placement: getBasePlacement(state.placement),
      popper: state.elements.popper,
      popperRect: state.rects.popper,
      gpuAcceleration: gpuAcceleration
    };

    if (state.modifiersData.popperOffsets != null) {
      state.styles.popper = Object.assign({}, state.styles.popper, mapToStyles(Object.assign({}, commonStyles, {
        offsets: state.modifiersData.popperOffsets,
        position: state.options.strategy,
        adaptive: adaptive,
        roundOffsets: roundOffsets
      })));
    }

    if (state.modifiersData.arrow != null) {
      state.styles.arrow = Object.assign({}, state.styles.arrow, mapToStyles(Object.assign({}, commonStyles, {
        offsets: state.modifiersData.arrow,
        position: 'absolute',
        adaptive: false,
        roundOffsets: roundOffsets
      })));
    }

    state.attributes.popper = Object.assign({}, state.attributes.popper, {
      'data-popper-placement': state.placement
    });
  } // eslint-disable-next-line import/no-unused-modules


  var computeStyles$1 = {
    name: 'computeStyles',
    enabled: true,
    phase: 'beforeWrite',
    fn: computeStyles,
    data: {}
  };

  var passive = {
    passive: true
  };

  function effect(_ref) {
    var state = _ref.state,
        instance = _ref.instance,
        options = _ref.options;
    var _options$scroll = options.scroll,
        scroll = _options$scroll === void 0 ? true : _options$scroll,
        _options$resize = options.resize,
        resize = _options$resize === void 0 ? true : _options$resize;
    var window = getWindow(state.elements.popper);
    var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);

    if (scroll) {
      scrollParents.forEach(function (scrollParent) {
        scrollParent.addEventListener('scroll', instance.update, passive);
      });
    }

    if (resize) {
      window.addEventListener('resize', instance.update, passive);
    }

    return function () {
      if (scroll) {
        scrollParents.forEach(function (scrollParent) {
          scrollParent.removeEventListener('scroll', instance.update, passive);
        });
      }

      if (resize) {
        window.removeEventListener('resize', instance.update, passive);
      }
    };
  } // eslint-disable-next-line import/no-unused-modules


  var eventListeners = {
    name: 'eventListeners',
    enabled: true,
    phase: 'write',
    fn: function fn() {},
    effect: effect,
    data: {}
  };

  var hash$1 = {
    left: 'right',
    right: 'left',
    bottom: 'top',
    top: 'bottom'
  };
  function getOppositePlacement(placement) {
    return placement.replace(/left|right|bottom|top/g, function (matched) {
      return hash$1[matched];
    });
  }

  var hash = {
    start: 'end',
    end: 'start'
  };
  function getOppositeVariationPlacement(placement) {
    return placement.replace(/start|end/g, function (matched) {
      return hash[matched];
    });
  }

  function getWindowScroll(node) {
    var win = getWindow(node);
    var scrollLeft = win.pageXOffset;
    var scrollTop = win.pageYOffset;
    return {
      scrollLeft: scrollLeft,
      scrollTop: scrollTop
    };
  }

  function getWindowScrollBarX(element) {
    // If <html> has a CSS width greater than the viewport, then this will be
    // incorrect for RTL.
    // Popper 1 is broken in this case and never had a bug report so let's assume
    // it's not an issue. I don't think anyone ever specifies width on <html>
    // anyway.
    // Browsers where the left scrollbar doesn't cause an issue report `0` for
    // this (e.g. Edge 2019, IE11, Safari)
    return getBoundingClientRect(getDocumentElement(element)).left + getWindowScroll(element).scrollLeft;
  }

  function getViewportRect(element) {
    var win = getWindow(element);
    var html = getDocumentElement(element);
    var visualViewport = win.visualViewport;
    var width = html.clientWidth;
    var height = html.clientHeight;
    var x = 0;
    var y = 0; // NB: This isn't supported on iOS <= 12. If the keyboard is open, the popper
    // can be obscured underneath it.
    // Also, `html.clientHeight` adds the bottom bar height in Safari iOS, even
    // if it isn't open, so if this isn't available, the popper will be detected
    // to overflow the bottom of the screen too early.

    if (visualViewport) {
      width = visualViewport.width;
      height = visualViewport.height; // Uses Layout Viewport (like Chrome; Safari does not currently)
      // In Chrome, it returns a value very close to 0 (+/-) but contains rounding
      // errors due to floating point numbers, so we need to check precision.
      // Safari returns a number <= 0, usually < -1 when pinch-zoomed
      // Feature detection fails in mobile emulation mode in Chrome.
      // Math.abs(win.innerWidth / visualViewport.scale - visualViewport.width) <
      // 0.001
      // Fallback here: "Not Safari" userAgent

      if (!/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
        x = visualViewport.offsetLeft;
        y = visualViewport.offsetTop;
      }
    }

    return {
      width: width,
      height: height,
      x: x + getWindowScrollBarX(element),
      y: y
    };
  }

  // of the `<html>` and `<body>` rect bounds if horizontally scrollable

  function getDocumentRect(element) {
    var _element$ownerDocumen;

    var html = getDocumentElement(element);
    var winScroll = getWindowScroll(element);
    var body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
    var width = max(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
    var height = max(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
    var x = -winScroll.scrollLeft + getWindowScrollBarX(element);
    var y = -winScroll.scrollTop;

    if (getComputedStyle$1(body || html).direction === 'rtl') {
      x += max(html.clientWidth, body ? body.clientWidth : 0) - width;
    }

    return {
      width: width,
      height: height,
      x: x,
      y: y
    };
  }

  function isScrollParent(element) {
    // Firefox wants us to check `-x` and `-y` variations as well
    var _getComputedStyle = getComputedStyle$1(element),
        overflow = _getComputedStyle.overflow,
        overflowX = _getComputedStyle.overflowX,
        overflowY = _getComputedStyle.overflowY;

    return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
  }

  function getScrollParent(node) {
    if (['html', 'body', '#document'].indexOf(getNodeName(node)) >= 0) {
      // $FlowFixMe[incompatible-return]: assume body is always available
      return node.ownerDocument.body;
    }

    if (isHTMLElement(node) && isScrollParent(node)) {
      return node;
    }

    return getScrollParent(getParentNode(node));
  }

  /*
  given a DOM element, return the list of all scroll parents, up the list of ancesors
  until we get to the top window object. This list is what we attach scroll listeners
  to, because if any of these parent elements scroll, we'll need to re-calculate the
  reference element's position.
  */

  function listScrollParents(element, list) {
    var _element$ownerDocumen;

    if (list === void 0) {
      list = [];
    }

    var scrollParent = getScrollParent(element);
    var isBody = scrollParent === ((_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body);
    var win = getWindow(scrollParent);
    var target = isBody ? [win].concat(win.visualViewport || [], isScrollParent(scrollParent) ? scrollParent : []) : scrollParent;
    var updatedList = list.concat(target);
    return isBody ? updatedList : // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    updatedList.concat(listScrollParents(getParentNode(target)));
  }

  function rectToClientRect(rect) {
    return Object.assign({}, rect, {
      left: rect.x,
      top: rect.y,
      right: rect.x + rect.width,
      bottom: rect.y + rect.height
    });
  }

  function getInnerBoundingClientRect(element) {
    var rect = getBoundingClientRect(element);
    rect.top = rect.top + element.clientTop;
    rect.left = rect.left + element.clientLeft;
    rect.bottom = rect.top + element.clientHeight;
    rect.right = rect.left + element.clientWidth;
    rect.width = element.clientWidth;
    rect.height = element.clientHeight;
    rect.x = rect.left;
    rect.y = rect.top;
    return rect;
  }

  function getClientRectFromMixedType(element, clippingParent) {
    return clippingParent === viewport ? rectToClientRect(getViewportRect(element)) : isHTMLElement(clippingParent) ? getInnerBoundingClientRect(clippingParent) : rectToClientRect(getDocumentRect(getDocumentElement(element)));
  } // A "clipping parent" is an overflowable container with the characteristic of
  // clipping (or hiding) overflowing elements with a position different from
  // `initial`


  function getClippingParents(element) {
    var clippingParents = listScrollParents(getParentNode(element));
    var canEscapeClipping = ['absolute', 'fixed'].indexOf(getComputedStyle$1(element).position) >= 0;
    var clipperElement = canEscapeClipping && isHTMLElement(element) ? getOffsetParent(element) : element;

    if (!isElement(clipperElement)) {
      return [];
    } // $FlowFixMe[incompatible-return]: https://github.com/facebook/flow/issues/1414


    return clippingParents.filter(function (clippingParent) {
      return isElement(clippingParent) && contains(clippingParent, clipperElement) && getNodeName(clippingParent) !== 'body';
    });
  } // Gets the maximum area that the element is visible in due to any number of
  // clipping parents


  function getClippingRect(element, boundary, rootBoundary) {
    var mainClippingParents = boundary === 'clippingParents' ? getClippingParents(element) : [].concat(boundary);
    var clippingParents = [].concat(mainClippingParents, [rootBoundary]);
    var firstClippingParent = clippingParents[0];
    var clippingRect = clippingParents.reduce(function (accRect, clippingParent) {
      var rect = getClientRectFromMixedType(element, clippingParent);
      accRect.top = max(rect.top, accRect.top);
      accRect.right = min(rect.right, accRect.right);
      accRect.bottom = min(rect.bottom, accRect.bottom);
      accRect.left = max(rect.left, accRect.left);
      return accRect;
    }, getClientRectFromMixedType(element, firstClippingParent));
    clippingRect.width = clippingRect.right - clippingRect.left;
    clippingRect.height = clippingRect.bottom - clippingRect.top;
    clippingRect.x = clippingRect.left;
    clippingRect.y = clippingRect.top;
    return clippingRect;
  }

  function getVariation(placement) {
    return placement.split('-')[1];
  }

  function computeOffsets(_ref) {
    var reference = _ref.reference,
        element = _ref.element,
        placement = _ref.placement;
    var basePlacement = placement ? getBasePlacement(placement) : null;
    var variation = placement ? getVariation(placement) : null;
    var commonX = reference.x + reference.width / 2 - element.width / 2;
    var commonY = reference.y + reference.height / 2 - element.height / 2;
    var offsets;

    switch (basePlacement) {
      case top:
        offsets = {
          x: commonX,
          y: reference.y - element.height
        };
        break;

      case bottom:
        offsets = {
          x: commonX,
          y: reference.y + reference.height
        };
        break;

      case right:
        offsets = {
          x: reference.x + reference.width,
          y: commonY
        };
        break;

      case left:
        offsets = {
          x: reference.x - element.width,
          y: commonY
        };
        break;

      default:
        offsets = {
          x: reference.x,
          y: reference.y
        };
    }

    var mainAxis = basePlacement ? getMainAxisFromPlacement(basePlacement) : null;

    if (mainAxis != null) {
      var len = mainAxis === 'y' ? 'height' : 'width';

      switch (variation) {
        case start:
          offsets[mainAxis] = offsets[mainAxis] - (reference[len] / 2 - element[len] / 2);
          break;

        case end:
          offsets[mainAxis] = offsets[mainAxis] + (reference[len] / 2 - element[len] / 2);
          break;
      }
    }

    return offsets;
  }

  function detectOverflow(state, options) {
    if (options === void 0) {
      options = {};
    }

    var _options = options,
        _options$placement = _options.placement,
        placement = _options$placement === void 0 ? state.placement : _options$placement,
        _options$boundary = _options.boundary,
        boundary = _options$boundary === void 0 ? clippingParents : _options$boundary,
        _options$rootBoundary = _options.rootBoundary,
        rootBoundary = _options$rootBoundary === void 0 ? viewport : _options$rootBoundary,
        _options$elementConte = _options.elementContext,
        elementContext = _options$elementConte === void 0 ? popper : _options$elementConte,
        _options$altBoundary = _options.altBoundary,
        altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary,
        _options$padding = _options.padding,
        padding = _options$padding === void 0 ? 0 : _options$padding;
    var paddingObject = mergePaddingObject(typeof padding !== 'number' ? padding : expandToHashMap(padding, basePlacements));
    var altContext = elementContext === popper ? reference : popper;
    var referenceElement = state.elements.reference;
    var popperRect = state.rects.popper;
    var element = state.elements[altBoundary ? altContext : elementContext];
    var clippingClientRect = getClippingRect(isElement(element) ? element : element.contextElement || getDocumentElement(state.elements.popper), boundary, rootBoundary);
    var referenceClientRect = getBoundingClientRect(referenceElement);
    var popperOffsets = computeOffsets({
      reference: referenceClientRect,
      element: popperRect,
      strategy: 'absolute',
      placement: placement
    });
    var popperClientRect = rectToClientRect(Object.assign({}, popperRect, popperOffsets));
    var elementClientRect = elementContext === popper ? popperClientRect : referenceClientRect; // positive = overflowing the clipping rect
    // 0 or negative = within the clipping rect

    var overflowOffsets = {
      top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
      bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
      left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
      right: elementClientRect.right - clippingClientRect.right + paddingObject.right
    };
    var offsetData = state.modifiersData.offset; // Offsets can be applied only to the popper element

    if (elementContext === popper && offsetData) {
      var offset = offsetData[placement];
      Object.keys(overflowOffsets).forEach(function (key) {
        var multiply = [right, bottom].indexOf(key) >= 0 ? 1 : -1;
        var axis = [top, bottom].indexOf(key) >= 0 ? 'y' : 'x';
        overflowOffsets[key] += offset[axis] * multiply;
      });
    }

    return overflowOffsets;
  }

  function computeAutoPlacement(state, options) {
    if (options === void 0) {
      options = {};
    }

    var _options = options,
        placement = _options.placement,
        boundary = _options.boundary,
        rootBoundary = _options.rootBoundary,
        padding = _options.padding,
        flipVariations = _options.flipVariations,
        _options$allowedAutoP = _options.allowedAutoPlacements,
        allowedAutoPlacements = _options$allowedAutoP === void 0 ? placements : _options$allowedAutoP;
    var variation = getVariation(placement);
    var placements$1 = variation ? flipVariations ? variationPlacements : variationPlacements.filter(function (placement) {
      return getVariation(placement) === variation;
    }) : basePlacements;
    var allowedPlacements = placements$1.filter(function (placement) {
      return allowedAutoPlacements.indexOf(placement) >= 0;
    });

    if (allowedPlacements.length === 0) {
      allowedPlacements = placements$1;
    } // $FlowFixMe[incompatible-type]: Flow seems to have problems with two array unions...


    var overflows = allowedPlacements.reduce(function (acc, placement) {
      acc[placement] = detectOverflow(state, {
        placement: placement,
        boundary: boundary,
        rootBoundary: rootBoundary,
        padding: padding
      })[getBasePlacement(placement)];
      return acc;
    }, {});
    return Object.keys(overflows).sort(function (a, b) {
      return overflows[a] - overflows[b];
    });
  }

  function getExpandedFallbackPlacements(placement) {
    if (getBasePlacement(placement) === auto) {
      return [];
    }

    var oppositePlacement = getOppositePlacement(placement);
    return [getOppositeVariationPlacement(placement), oppositePlacement, getOppositeVariationPlacement(oppositePlacement)];
  }

  function flip(_ref) {
    var state = _ref.state,
        options = _ref.options,
        name = _ref.name;

    if (state.modifiersData[name]._skip) {
      return;
    }

    var _options$mainAxis = options.mainAxis,
        checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis,
        _options$altAxis = options.altAxis,
        checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis,
        specifiedFallbackPlacements = options.fallbackPlacements,
        padding = options.padding,
        boundary = options.boundary,
        rootBoundary = options.rootBoundary,
        altBoundary = options.altBoundary,
        _options$flipVariatio = options.flipVariations,
        flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio,
        allowedAutoPlacements = options.allowedAutoPlacements;
    var preferredPlacement = state.options.placement;
    var basePlacement = getBasePlacement(preferredPlacement);
    var isBasePlacement = basePlacement === preferredPlacement;
    var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [getOppositePlacement(preferredPlacement)] : getExpandedFallbackPlacements(preferredPlacement));
    var placements = [preferredPlacement].concat(fallbackPlacements).reduce(function (acc, placement) {
      return acc.concat(getBasePlacement(placement) === auto ? computeAutoPlacement(state, {
        placement: placement,
        boundary: boundary,
        rootBoundary: rootBoundary,
        padding: padding,
        flipVariations: flipVariations,
        allowedAutoPlacements: allowedAutoPlacements
      }) : placement);
    }, []);
    var referenceRect = state.rects.reference;
    var popperRect = state.rects.popper;
    var checksMap = new Map();
    var makeFallbackChecks = true;
    var firstFittingPlacement = placements[0];

    for (var i = 0; i < placements.length; i++) {
      var placement = placements[i];

      var _basePlacement = getBasePlacement(placement);

      var isStartVariation = getVariation(placement) === start;
      var isVertical = [top, bottom].indexOf(_basePlacement) >= 0;
      var len = isVertical ? 'width' : 'height';
      var overflow = detectOverflow(state, {
        placement: placement,
        boundary: boundary,
        rootBoundary: rootBoundary,
        altBoundary: altBoundary,
        padding: padding
      });
      var mainVariationSide = isVertical ? isStartVariation ? right : left : isStartVariation ? bottom : top;

      if (referenceRect[len] > popperRect[len]) {
        mainVariationSide = getOppositePlacement(mainVariationSide);
      }

      var altVariationSide = getOppositePlacement(mainVariationSide);
      var checks = [];

      if (checkMainAxis) {
        checks.push(overflow[_basePlacement] <= 0);
      }

      if (checkAltAxis) {
        checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
      }

      if (checks.every(function (check) {
        return check;
      })) {
        firstFittingPlacement = placement;
        makeFallbackChecks = false;
        break;
      }

      checksMap.set(placement, checks);
    }

    if (makeFallbackChecks) {
      // `2` may be desired in some cases – research later
      var numberOfChecks = flipVariations ? 3 : 1;

      var _loop = function _loop(_i) {
        var fittingPlacement = placements.find(function (placement) {
          var checks = checksMap.get(placement);

          if (checks) {
            return checks.slice(0, _i).every(function (check) {
              return check;
            });
          }
        });

        if (fittingPlacement) {
          firstFittingPlacement = fittingPlacement;
          return "break";
        }
      };

      for (var _i = numberOfChecks; _i > 0; _i--) {
        var _ret = _loop(_i);

        if (_ret === "break") break;
      }
    }

    if (state.placement !== firstFittingPlacement) {
      state.modifiersData[name]._skip = true;
      state.placement = firstFittingPlacement;
      state.reset = true;
    }
  } // eslint-disable-next-line import/no-unused-modules


  var flip$1 = {
    name: 'flip',
    enabled: true,
    phase: 'main',
    fn: flip,
    requiresIfExists: ['offset'],
    data: {
      _skip: false
    }
  };

  function getSideOffsets(overflow, rect, preventedOffsets) {
    if (preventedOffsets === void 0) {
      preventedOffsets = {
        x: 0,
        y: 0
      };
    }

    return {
      top: overflow.top - rect.height - preventedOffsets.y,
      right: overflow.right - rect.width + preventedOffsets.x,
      bottom: overflow.bottom - rect.height + preventedOffsets.y,
      left: overflow.left - rect.width - preventedOffsets.x
    };
  }

  function isAnySideFullyClipped(overflow) {
    return [top, right, bottom, left].some(function (side) {
      return overflow[side] >= 0;
    });
  }

  function hide(_ref) {
    var state = _ref.state,
        name = _ref.name;
    var referenceRect = state.rects.reference;
    var popperRect = state.rects.popper;
    var preventedOffsets = state.modifiersData.preventOverflow;
    var referenceOverflow = detectOverflow(state, {
      elementContext: 'reference'
    });
    var popperAltOverflow = detectOverflow(state, {
      altBoundary: true
    });
    var referenceClippingOffsets = getSideOffsets(referenceOverflow, referenceRect);
    var popperEscapeOffsets = getSideOffsets(popperAltOverflow, popperRect, preventedOffsets);
    var isReferenceHidden = isAnySideFullyClipped(referenceClippingOffsets);
    var hasPopperEscaped = isAnySideFullyClipped(popperEscapeOffsets);
    state.modifiersData[name] = {
      referenceClippingOffsets: referenceClippingOffsets,
      popperEscapeOffsets: popperEscapeOffsets,
      isReferenceHidden: isReferenceHidden,
      hasPopperEscaped: hasPopperEscaped
    };
    state.attributes.popper = Object.assign({}, state.attributes.popper, {
      'data-popper-reference-hidden': isReferenceHidden,
      'data-popper-escaped': hasPopperEscaped
    });
  } // eslint-disable-next-line import/no-unused-modules


  var hide$1 = {
    name: 'hide',
    enabled: true,
    phase: 'main',
    requiresIfExists: ['preventOverflow'],
    fn: hide
  };

  function distanceAndSkiddingToXY(placement, rects, offset) {
    var basePlacement = getBasePlacement(placement);
    var invertDistance = [left, top].indexOf(basePlacement) >= 0 ? -1 : 1;

    var _ref = typeof offset === 'function' ? offset(Object.assign({}, rects, {
      placement: placement
    })) : offset,
        skidding = _ref[0],
        distance = _ref[1];

    skidding = skidding || 0;
    distance = (distance || 0) * invertDistance;
    return [left, right].indexOf(basePlacement) >= 0 ? {
      x: distance,
      y: skidding
    } : {
      x: skidding,
      y: distance
    };
  }

  function offset(_ref2) {
    var state = _ref2.state,
        options = _ref2.options,
        name = _ref2.name;
    var _options$offset = options.offset,
        offset = _options$offset === void 0 ? [0, 0] : _options$offset;
    var data = placements.reduce(function (acc, placement) {
      acc[placement] = distanceAndSkiddingToXY(placement, state.rects, offset);
      return acc;
    }, {});
    var _data$state$placement = data[state.placement],
        x = _data$state$placement.x,
        y = _data$state$placement.y;

    if (state.modifiersData.popperOffsets != null) {
      state.modifiersData.popperOffsets.x += x;
      state.modifiersData.popperOffsets.y += y;
    }

    state.modifiersData[name] = data;
  } // eslint-disable-next-line import/no-unused-modules


  var offset$1 = {
    name: 'offset',
    enabled: true,
    phase: 'main',
    requires: ['popperOffsets'],
    fn: offset
  };

  function popperOffsets(_ref) {
    var state = _ref.state,
        name = _ref.name; // Offsets are the actual position the popper needs to have to be
    // properly positioned near its reference element
    // This is the most basic placement, and will be adjusted by
    // the modifiers in the next step

    state.modifiersData[name] = computeOffsets({
      reference: state.rects.reference,
      element: state.rects.popper,
      strategy: 'absolute',
      placement: state.placement
    });
  } // eslint-disable-next-line import/no-unused-modules


  var popperOffsets$1 = {
    name: 'popperOffsets',
    enabled: true,
    phase: 'read',
    fn: popperOffsets,
    data: {}
  };

  function getAltAxis(axis) {
    return axis === 'x' ? 'y' : 'x';
  }

  function preventOverflow(_ref) {
    var state = _ref.state,
        options = _ref.options,
        name = _ref.name;
    var _options$mainAxis = options.mainAxis,
        checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis,
        _options$altAxis = options.altAxis,
        checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis,
        boundary = options.boundary,
        rootBoundary = options.rootBoundary,
        altBoundary = options.altBoundary,
        padding = options.padding,
        _options$tether = options.tether,
        tether = _options$tether === void 0 ? true : _options$tether,
        _options$tetherOffset = options.tetherOffset,
        tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
    var overflow = detectOverflow(state, {
      boundary: boundary,
      rootBoundary: rootBoundary,
      padding: padding,
      altBoundary: altBoundary
    });
    var basePlacement = getBasePlacement(state.placement);
    var variation = getVariation(state.placement);
    var isBasePlacement = !variation;
    var mainAxis = getMainAxisFromPlacement(basePlacement);
    var altAxis = getAltAxis(mainAxis);
    var popperOffsets = state.modifiersData.popperOffsets;
    var referenceRect = state.rects.reference;
    var popperRect = state.rects.popper;
    var tetherOffsetValue = typeof tetherOffset === 'function' ? tetherOffset(Object.assign({}, state.rects, {
      placement: state.placement
    })) : tetherOffset;
    var data = {
      x: 0,
      y: 0
    };

    if (!popperOffsets) {
      return;
    }

    if (checkMainAxis || checkAltAxis) {
      var mainSide = mainAxis === 'y' ? top : left;
      var altSide = mainAxis === 'y' ? bottom : right;
      var len = mainAxis === 'y' ? 'height' : 'width';
      var offset = popperOffsets[mainAxis];
      var min$1 = popperOffsets[mainAxis] + overflow[mainSide];
      var max$1 = popperOffsets[mainAxis] - overflow[altSide];
      var additive = tether ? -popperRect[len] / 2 : 0;
      var minLen = variation === start ? referenceRect[len] : popperRect[len];
      var maxLen = variation === start ? -popperRect[len] : -referenceRect[len]; // We need to include the arrow in the calculation so the arrow doesn't go
      // outside the reference bounds

      var arrowElement = state.elements.arrow;
      var arrowRect = tether && arrowElement ? getLayoutRect(arrowElement) : {
        width: 0,
        height: 0
      };
      var arrowPaddingObject = state.modifiersData['arrow#persistent'] ? state.modifiersData['arrow#persistent'].padding : getFreshSideObject();
      var arrowPaddingMin = arrowPaddingObject[mainSide];
      var arrowPaddingMax = arrowPaddingObject[altSide]; // If the reference length is smaller than the arrow length, we don't want
      // to include its full size in the calculation. If the reference is small
      // and near the edge of a boundary, the popper can overflow even if the
      // reference is not overflowing as well (e.g. virtual elements with no
      // width or height)

      var arrowLen = within(0, referenceRect[len], arrowRect[len]);
      var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - tetherOffsetValue : minLen - arrowLen - arrowPaddingMin - tetherOffsetValue;
      var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + tetherOffsetValue : maxLen + arrowLen + arrowPaddingMax + tetherOffsetValue;
      var arrowOffsetParent = state.elements.arrow && getOffsetParent(state.elements.arrow);
      var clientOffset = arrowOffsetParent ? mainAxis === 'y' ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
      var offsetModifierValue = state.modifiersData.offset ? state.modifiersData.offset[state.placement][mainAxis] : 0;
      var tetherMin = popperOffsets[mainAxis] + minOffset - offsetModifierValue - clientOffset;
      var tetherMax = popperOffsets[mainAxis] + maxOffset - offsetModifierValue;

      if (checkMainAxis) {
        var preventedOffset = within(tether ? min(min$1, tetherMin) : min$1, offset, tether ? max(max$1, tetherMax) : max$1);
        popperOffsets[mainAxis] = preventedOffset;
        data[mainAxis] = preventedOffset - offset;
      }

      if (checkAltAxis) {
        var _mainSide = mainAxis === 'x' ? top : left;

        var _altSide = mainAxis === 'x' ? bottom : right;

        var _offset = popperOffsets[altAxis];

        var _min = _offset + overflow[_mainSide];

        var _max = _offset - overflow[_altSide];

        var _preventedOffset = within(tether ? min(_min, tetherMin) : _min, _offset, tether ? max(_max, tetherMax) : _max);

        popperOffsets[altAxis] = _preventedOffset;
        data[altAxis] = _preventedOffset - _offset;
      }
    }

    state.modifiersData[name] = data;
  } // eslint-disable-next-line import/no-unused-modules


  var preventOverflow$1 = {
    name: 'preventOverflow',
    enabled: true,
    phase: 'main',
    fn: preventOverflow,
    requiresIfExists: ['offset']
  };

  function getHTMLElementScroll(element) {
    return {
      scrollLeft: element.scrollLeft,
      scrollTop: element.scrollTop
    };
  }

  function getNodeScroll(node) {
    if (node === getWindow(node) || !isHTMLElement(node)) {
      return getWindowScroll(node);
    } else {
      return getHTMLElementScroll(node);
    }
  }

  // Composite means it takes into account transforms as well as layout.

  function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
    if (isFixed === void 0) {
      isFixed = false;
    }

    var documentElement = getDocumentElement(offsetParent);
    var rect = getBoundingClientRect(elementOrVirtualElement);
    var isOffsetParentAnElement = isHTMLElement(offsetParent);
    var scroll = {
      scrollLeft: 0,
      scrollTop: 0
    };
    var offsets = {
      x: 0,
      y: 0
    };

    if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
      if (getNodeName(offsetParent) !== 'body' || // https://github.com/popperjs/popper-core/issues/1078
      isScrollParent(documentElement)) {
        scroll = getNodeScroll(offsetParent);
      }

      if (isHTMLElement(offsetParent)) {
        offsets = getBoundingClientRect(offsetParent);
        offsets.x += offsetParent.clientLeft;
        offsets.y += offsetParent.clientTop;
      } else if (documentElement) {
        offsets.x = getWindowScrollBarX(documentElement);
      }
    }

    return {
      x: rect.left + scroll.scrollLeft - offsets.x,
      y: rect.top + scroll.scrollTop - offsets.y,
      width: rect.width,
      height: rect.height
    };
  }

  function order(modifiers) {
    var map = new Map();
    var visited = new Set();
    var result = [];
    modifiers.forEach(function (modifier) {
      map.set(modifier.name, modifier);
    }); // On visiting object, check for its dependencies and visit them recursively

    function sort(modifier) {
      visited.add(modifier.name);
      var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
      requires.forEach(function (dep) {
        if (!visited.has(dep)) {
          var depModifier = map.get(dep);

          if (depModifier) {
            sort(depModifier);
          }
        }
      });
      result.push(modifier);
    }

    modifiers.forEach(function (modifier) {
      if (!visited.has(modifier.name)) {
        // check for visited object
        sort(modifier);
      }
    });
    return result;
  }

  function orderModifiers(modifiers) {
    // order based on dependencies
    var orderedModifiers = order(modifiers); // order based on phase

    return modifierPhases.reduce(function (acc, phase) {
      return acc.concat(orderedModifiers.filter(function (modifier) {
        return modifier.phase === phase;
      }));
    }, []);
  }

  function debounce(fn) {
    var pending;
    return function () {
      if (!pending) {
        pending = new Promise(function (resolve) {
          Promise.resolve().then(function () {
            pending = undefined;
            resolve(fn());
          });
        });
      }

      return pending;
    };
  }

  function mergeByName(modifiers) {
    var merged = modifiers.reduce(function (merged, current) {
      var existing = merged[current.name];
      merged[current.name] = existing ? Object.assign({}, existing, current, {
        options: Object.assign({}, existing.options, current.options),
        data: Object.assign({}, existing.data, current.data)
      }) : current;
      return merged;
    }, {}); // IE11 does not support Object.values

    return Object.keys(merged).map(function (key) {
      return merged[key];
    });
  }

  var DEFAULT_OPTIONS = {
    placement: 'bottom',
    modifiers: [],
    strategy: 'absolute'
  };

  function areValidElements() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return !args.some(function (element) {
      return !(element && typeof element.getBoundingClientRect === 'function');
    });
  }

  function popperGenerator(generatorOptions) {
    if (generatorOptions === void 0) {
      generatorOptions = {};
    }

    var _generatorOptions = generatorOptions,
        _generatorOptions$def = _generatorOptions.defaultModifiers,
        defaultModifiers = _generatorOptions$def === void 0 ? [] : _generatorOptions$def,
        _generatorOptions$def2 = _generatorOptions.defaultOptions,
        defaultOptions = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
    return function createPopper(reference, popper, options) {
      if (options === void 0) {
        options = defaultOptions;
      }

      var state = {
        placement: 'bottom',
        orderedModifiers: [],
        options: Object.assign({}, DEFAULT_OPTIONS, defaultOptions),
        modifiersData: {},
        elements: {
          reference: reference,
          popper: popper
        },
        attributes: {},
        styles: {}
      };
      var effectCleanupFns = [];
      var isDestroyed = false;
      var instance = {
        state: state,
        setOptions: function setOptions(options) {
          cleanupModifierEffects();
          state.options = Object.assign({}, defaultOptions, state.options, options);
          state.scrollParents = {
            reference: isElement(reference) ? listScrollParents(reference) : reference.contextElement ? listScrollParents(reference.contextElement) : [],
            popper: listScrollParents(popper)
          }; // Orders the modifiers based on their dependencies and `phase`
          // properties

          var orderedModifiers = orderModifiers(mergeByName([].concat(defaultModifiers, state.options.modifiers))); // Strip out disabled modifiers

          state.orderedModifiers = orderedModifiers.filter(function (m) {
            return m.enabled;
          }); // Validate the provided modifiers so that the consumer will get warned

          runModifierEffects();
          return instance.update();
        },
        // Sync update – it will always be executed, even if not necessary. This
        // is useful for low frequency updates where sync behavior simplifies the
        // logic.
        // For high frequency updates (e.g. `resize` and `scroll` events), always
        // prefer the async Popper#update method
        forceUpdate: function forceUpdate() {
          if (isDestroyed) {
            return;
          }

          var _state$elements = state.elements,
              reference = _state$elements.reference,
              popper = _state$elements.popper; // Don't proceed if `reference` or `popper` are not valid elements
          // anymore

          if (!areValidElements(reference, popper)) {

            return;
          } // Store the reference and popper rects to be read by modifiers


          state.rects = {
            reference: getCompositeRect(reference, getOffsetParent(popper), state.options.strategy === 'fixed'),
            popper: getLayoutRect(popper)
          }; // Modifiers have the ability to reset the current update cycle. The
          // most common use case for this is the `flip` modifier changing the
          // placement, which then needs to re-run all the modifiers, because the
          // logic was previously ran for the previous placement and is therefore
          // stale/incorrect

          state.reset = false;
          state.placement = state.options.placement; // On each update cycle, the `modifiersData` property for each modifier
          // is filled with the initial data specified by the modifier. This means
          // it doesn't persist and is fresh on each update.
          // To ensure persistent data, use `${name}#persistent`

          state.orderedModifiers.forEach(function (modifier) {
            return state.modifiersData[modifier.name] = Object.assign({}, modifier.data);
          });

          for (var index = 0; index < state.orderedModifiers.length; index++) {

            if (state.reset === true) {
              state.reset = false;
              index = -1;
              continue;
            }

            var _state$orderedModifie = state.orderedModifiers[index],
                fn = _state$orderedModifie.fn,
                _state$orderedModifie2 = _state$orderedModifie.options,
                _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2,
                name = _state$orderedModifie.name;

            if (typeof fn === 'function') {
              state = fn({
                state: state,
                options: _options,
                name: name,
                instance: instance
              }) || state;
            }
          }
        },
        // Async and optimistically optimized update – it will not be executed if
        // not necessary (debounced to run at most once-per-tick)
        update: debounce(function () {
          return new Promise(function (resolve) {
            instance.forceUpdate();
            resolve(state);
          });
        }),
        destroy: function destroy() {
          cleanupModifierEffects();
          isDestroyed = true;
        }
      };

      if (!areValidElements(reference, popper)) {

        return instance;
      }

      instance.setOptions(options).then(function (state) {
        if (!isDestroyed && options.onFirstUpdate) {
          options.onFirstUpdate(state);
        }
      }); // Modifiers have the ability to execute arbitrary code before the first
      // update cycle runs. They will be executed in the same order as the update
      // cycle. This is useful when a modifier adds some persistent data that
      // other modifiers need to use, but the modifier is run after the dependent
      // one.

      function runModifierEffects() {
        state.orderedModifiers.forEach(function (_ref3) {
          var name = _ref3.name,
              _ref3$options = _ref3.options,
              options = _ref3$options === void 0 ? {} : _ref3$options,
              effect = _ref3.effect;

          if (typeof effect === 'function') {
            var cleanupFn = effect({
              state: state,
              name: name,
              instance: instance,
              options: options
            });

            var noopFn = function noopFn() {};

            effectCleanupFns.push(cleanupFn || noopFn);
          }
        });
      }

      function cleanupModifierEffects() {
        effectCleanupFns.forEach(function (fn) {
          return fn();
        });
        effectCleanupFns = [];
      }

      return instance;
    };
  }

  var defaultModifiers = [eventListeners, popperOffsets$1, computeStyles$1, applyStyles$1, offset$1, flip$1, preventOverflow$1, arrow$1, hide$1];
  var createPopper = /*#__PURE__*/popperGenerator({
    defaultModifiers: defaultModifiers
  }); // eslint-disable-next-line import/no-unused-modules

  function _extends() {
    _extends = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };

    return _extends.apply(this, arguments);
  }

  function _getCenteredStylePopperModifier() {
    return [{
      name: 'applyStyles',

      fn({
        state
      }) {
        Object.keys(state.elements).forEach(name => {
          if (name !== 'popper') {
            return;
          }

          const style = {
            position: 'fixed',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)'
          };
          const attributes = state.attributes[name] || {};
          const element = state.elements[name];
          Object.assign(element.style, style);
          Object.keys(attributes).forEach(name => {
            const value = attributes[name];

            if (value === false) {
              element.removeAttribute(name);
            } else {
              element.setAttribute(name, value === true ? '' : value);
            }
          });
        });
      }

    }, {
      name: 'computeStyles',
      options: {
        adaptive: false
      }
    }];
  }
  /**
   * Generates the array of options for a tooltip that doesn't have a
   * target element in the DOM -- and thus is positioned in the center
   * of the view
   *
   * @param {Step} step The step instance
   * @return {Object} The final Popper options object
   */


  function makeCenteredPopper(step) {
    const centeredStylePopperModifier = _getCenteredStylePopperModifier();

    let popperOptions = {
      placement: 'top',
      strategy: 'fixed',
      modifiers: [{
        name: 'focusAfterRender',
        enabled: true,
        phase: 'afterWrite',

        fn() {
          setTimeout(() => {
            if (step.el) {
              step.el.focus();
            }
          }, 300);
        }

      }]
    };
    popperOptions = _extends({}, popperOptions, {
      modifiers: Array.from(new Set([...popperOptions.modifiers, ...centeredStylePopperModifier]))
    });
    return popperOptions;
  }

  /**
   * Ensure class prefix ends in `-`
   * @param {string} prefix The prefix to prepend to the class names generated by nano-css
   * @return {string} The prefix ending in `-`
   */

  function normalizePrefix(prefix) {
    if (!isString(prefix) || prefix === '') {
      return '';
    }

    return prefix.charAt(prefix.length - 1) !== '-' ? `${prefix}-` : prefix;
  }
  /**
   * Checks if options.attachTo.element is a string, and if so, tries to find the element
   * @param {Step} step The step instance
   * @returns {{element, on}}
   * `element` is a qualified HTML Element
   * `on` is a string position value
   */

  function parseAttachTo(step) {
    const options = step.options.attachTo || {};
    const returnOpts = Object.assign({}, options);

    if (isString(options.element)) {
      // Can't override the element in user opts reference because we can't
      // guarantee that the element will exist in the future.
      try {
        returnOpts.element = document.querySelector(options.element);
      } catch (e) {// TODO
      }

      if (!returnOpts.element) {
        console.error(`The element for this Shepherd step was not found ${options.element}`);
      }
    }

    return returnOpts;
  }
  /**
   * Determines options for the tooltip and initializes
   * `step.tooltip` as a Popper instance.
   * @param {Step} step The step instance
   */

  function setupTooltip(step) {
    if (step.tooltip) {
      step.tooltip.destroy();
    }

    const attachToOptions = parseAttachTo(step);
    let target = attachToOptions.element;
    const popperOptions = getPopperOptions(attachToOptions, step);

    if (step.isCentered()) {
      target = document.body;
      const content = step.shepherdElementComponent.getElement();
      content.classList.add('shepherd-centered');
    }

    step.tooltip = createPopper(target, step.el, popperOptions);
    step.target = attachToOptions.element;
    return popperOptions;
  }
  /**
   * Create a unique id for steps, tours, modals, etc
   * @return {string}
   */

  function uuid() {
    let d = Date.now();
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
      const r = (d + Math.random() * 16) % 16 | 0;
      d = Math.floor(d / 16);
      return (c == 'x' ? r : r & 0x3 | 0x8).toString(16);
    });
  }
  /**
   * Gets the `Popper` options from a set of base `attachTo` options
   * @param attachToOptions
   * @param {Step} step The step instance
   * @return {Object}
   * @private
   */

  function getPopperOptions(attachToOptions, step) {
    let popperOptions = {
      modifiers: [{
        name: 'preventOverflow',
        options: {
          altAxis: true,
          tether: false
        }
      }, {
        name: 'focusAfterRender',
        enabled: true,
        phase: 'afterWrite',

        fn() {
          setTimeout(() => {
            if (step.el) {
              step.el.focus();
            }
          }, 300);
        }

      }],
      strategy: 'absolute'
    };

    if (step.isCentered()) {
      popperOptions = makeCenteredPopper(step);
    } else {
      popperOptions.placement = attachToOptions.on;
    }

    const defaultStepOptions = step.tour && step.tour.options && step.tour.options.defaultStepOptions;

    if (defaultStepOptions) {
      popperOptions = _mergeModifiers(defaultStepOptions, popperOptions);
    }

    popperOptions = _mergeModifiers(step.options, popperOptions);
    return popperOptions;
  }

  function _mergeModifiers(stepOptions, popperOptions) {
    if (stepOptions.popperOptions) {
      let mergedPopperOptions = Object.assign({}, popperOptions, stepOptions.popperOptions);

      if (stepOptions.popperOptions.modifiers && stepOptions.popperOptions.modifiers.length > 0) {
        const names = stepOptions.popperOptions.modifiers.map(mod => mod.name);
        const filteredModifiers = popperOptions.modifiers.filter(mod => !names.includes(mod.name));
        mergedPopperOptions.modifiers = Array.from(new Set([...filteredModifiers, ...stepOptions.popperOptions.modifiers]));
      }

      return mergedPopperOptions;
    }

    return popperOptions;
  }

  function noop() {}

  function assign(tar, src) {
    // @ts-ignore
    for (const k in src) tar[k] = src[k];

    return tar;
  }

  function run(fn) {
    return fn();
  }

  function blank_object() {
    return Object.create(null);
  }

  function run_all(fns) {
    fns.forEach(run);
  }

  function is_function(thing) {
    return typeof thing === 'function';
  }

  function safe_not_equal(a, b) {
    return a != a ? b == b : a !== b || a && typeof a === 'object' || typeof a === 'function';
  }

  function is_empty(obj) {
    return Object.keys(obj).length === 0;
  }

  function append(target, node) {
    target.appendChild(node);
  }

  function insert(target, node, anchor) {
    target.insertBefore(node, anchor || null);
  }

  function detach(node) {
    node.parentNode.removeChild(node);
  }

  function destroy_each(iterations, detaching) {
    for (let i = 0; i < iterations.length; i += 1) {
      if (iterations[i]) iterations[i].d(detaching);
    }
  }

  function element(name) {
    return document.createElement(name);
  }

  function svg_element(name) {
    return document.createElementNS('http://www.w3.org/2000/svg', name);
  }

  function text(data) {
    return document.createTextNode(data);
  }

  function space() {
    return text(' ');
  }

  function empty() {
    return text('');
  }

  function listen(node, event, handler, options) {
    node.addEventListener(event, handler, options);
    return () => node.removeEventListener(event, handler, options);
  }

  function attr(node, attribute, value) {
    if (value == null) node.removeAttribute(attribute);else if (node.getAttribute(attribute) !== value) node.setAttribute(attribute, value);
  }

  function set_attributes(node, attributes) {
    // @ts-ignore
    const descriptors = Object.getOwnPropertyDescriptors(node.__proto__);

    for (const key in attributes) {
      if (attributes[key] == null) {
        node.removeAttribute(key);
      } else if (key === 'style') {
        node.style.cssText = attributes[key];
      } else if (key === '__value') {
        node.value = node[key] = attributes[key];
      } else if (descriptors[key] && descriptors[key].set) {
        node[key] = attributes[key];
      } else {
        attr(node, key, attributes[key]);
      }
    }
  }

  function children(element) {
    return Array.from(element.childNodes);
  }

  function toggle_class(element, name, toggle) {
    element.classList[toggle ? 'add' : 'remove'](name);
  }

  let current_component;

  function set_current_component(component) {
    current_component = component;
  }

  function get_current_component() {
    if (!current_component) throw new Error('Function called outside component initialization');
    return current_component;
  }

  function onMount(fn) {
    get_current_component().$$.on_mount.push(fn);
  }

  function afterUpdate(fn) {
    get_current_component().$$.after_update.push(fn);
  }

  const dirty_components = [];
  const binding_callbacks = [];
  const render_callbacks = [];
  const flush_callbacks = [];
  const resolved_promise = Promise.resolve();
  let update_scheduled = false;

  function schedule_update() {
    if (!update_scheduled) {
      update_scheduled = true;
      resolved_promise.then(flush);
    }
  }

  function add_render_callback(fn) {
    render_callbacks.push(fn);
  }

  let flushing = false;
  const seen_callbacks = new Set();

  function flush() {
    if (flushing) return;
    flushing = true;

    do {
      // first, call beforeUpdate functions
      // and update components
      for (let i = 0; i < dirty_components.length; i += 1) {
        const component = dirty_components[i];
        set_current_component(component);
        update(component.$$);
      }

      set_current_component(null);
      dirty_components.length = 0;

      while (binding_callbacks.length) binding_callbacks.pop()(); // then, once components are updated, call
      // afterUpdate functions. This may cause
      // subsequent updates...


      for (let i = 0; i < render_callbacks.length; i += 1) {
        const callback = render_callbacks[i];

        if (!seen_callbacks.has(callback)) {
          // ...so guard against infinite loops
          seen_callbacks.add(callback);
          callback();
        }
      }

      render_callbacks.length = 0;
    } while (dirty_components.length);

    while (flush_callbacks.length) {
      flush_callbacks.pop()();
    }

    update_scheduled = false;
    flushing = false;
    seen_callbacks.clear();
  }

  function update($$) {
    if ($$.fragment !== null) {
      $$.update();
      run_all($$.before_update);
      const dirty = $$.dirty;
      $$.dirty = [-1];
      $$.fragment && $$.fragment.p($$.ctx, dirty);
      $$.after_update.forEach(add_render_callback);
    }
  }

  const outroing = new Set();
  let outros;

  function group_outros() {
    outros = {
      r: 0,
      c: [],
      p: outros // parent group

    };
  }

  function check_outros() {
    if (!outros.r) {
      run_all(outros.c);
    }

    outros = outros.p;
  }

  function transition_in(block, local) {
    if (block && block.i) {
      outroing.delete(block);
      block.i(local);
    }
  }

  function transition_out(block, local, detach, callback) {
    if (block && block.o) {
      if (outroing.has(block)) return;
      outroing.add(block);
      outros.c.push(() => {
        outroing.delete(block);

        if (callback) {
          if (detach) block.d(1);
          callback();
        }
      });
      block.o(local);
    }
  }

  function get_spread_update(levels, updates) {
    const update = {};
    const to_null_out = {};
    const accounted_for = {
      $$scope: 1
    };
    let i = levels.length;

    while (i--) {
      const o = levels[i];
      const n = updates[i];

      if (n) {
        for (const key in o) {
          if (!(key in n)) to_null_out[key] = 1;
        }

        for (const key in n) {
          if (!accounted_for[key]) {
            update[key] = n[key];
            accounted_for[key] = 1;
          }
        }

        levels[i] = n;
      } else {
        for (const key in o) {
          accounted_for[key] = 1;
        }
      }
    }

    for (const key in to_null_out) {
      if (!(key in update)) update[key] = undefined;
    }

    return update;
  }

  function create_component(block) {
    block && block.c();
  }

  function mount_component(component, target, anchor, customElement) {
    const {
      fragment,
      on_mount,
      on_destroy,
      after_update
    } = component.$$;
    fragment && fragment.m(target, anchor);

    if (!customElement) {
      // onMount happens before the initial afterUpdate
      add_render_callback(() => {
        const new_on_destroy = on_mount.map(run).filter(is_function);

        if (on_destroy) {
          on_destroy.push(...new_on_destroy);
        } else {
          // Edge case - component was destroyed immediately,
          // most likely as a result of a binding initialising
          run_all(new_on_destroy);
        }

        component.$$.on_mount = [];
      });
    }

    after_update.forEach(add_render_callback);
  }

  function destroy_component(component, detaching) {
    const $$ = component.$$;

    if ($$.fragment !== null) {
      run_all($$.on_destroy);
      $$.fragment && $$.fragment.d(detaching); // TODO null out other refs, including component.$$ (but need to
      // preserve final state?)

      $$.on_destroy = $$.fragment = null;
      $$.ctx = [];
    }
  }

  function make_dirty(component, i) {
    if (component.$$.dirty[0] === -1) {
      dirty_components.push(component);
      schedule_update();
      component.$$.dirty.fill(0);
    }

    component.$$.dirty[i / 31 | 0] |= 1 << i % 31;
  }

  function init(component, options, instance, create_fragment, not_equal, props, dirty = [-1]) {
    const parent_component = current_component;
    set_current_component(component);
    const $$ = component.$$ = {
      fragment: null,
      ctx: null,
      // state
      props,
      update: noop,
      not_equal,
      bound: blank_object(),
      // lifecycle
      on_mount: [],
      on_destroy: [],
      on_disconnect: [],
      before_update: [],
      after_update: [],
      context: new Map(parent_component ? parent_component.$$.context : options.context || []),
      // everything else
      callbacks: blank_object(),
      dirty,
      skip_bound: false
    };
    let ready = false;
    $$.ctx = instance ? instance(component, options.props || {}, (i, ret, ...rest) => {
      const value = rest.length ? rest[0] : ret;

      if ($$.ctx && not_equal($$.ctx[i], $$.ctx[i] = value)) {
        if (!$$.skip_bound && $$.bound[i]) $$.bound[i](value);
        if (ready) make_dirty(component, i);
      }

      return ret;
    }) : [];
    $$.update();
    ready = true;
    run_all($$.before_update); // `false` as a special case of no DOM component

    $$.fragment = create_fragment ? create_fragment($$.ctx) : false;

    if (options.target) {
      if (options.hydrate) {
        const nodes = children(options.target); // eslint-disable-next-line @typescript-eslint/no-non-null-assertion

        $$.fragment && $$.fragment.l(nodes);
        nodes.forEach(detach);
      } else {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        $$.fragment && $$.fragment.c();
      }

      if (options.intro) transition_in(component.$$.fragment);
      mount_component(component, options.target, options.anchor, options.customElement);
      flush();
    }

    set_current_component(parent_component);
  }
  /**
   * Base class for Svelte components. Used when dev=false.
   */


  class SvelteComponent {
    $destroy() {
      destroy_component(this, 1);
      this.$destroy = noop;
    }

    $on(type, callback) {
      const callbacks = this.$$.callbacks[type] || (this.$$.callbacks[type] = []);
      callbacks.push(callback);
      return () => {
        const index = callbacks.indexOf(callback);
        if (index !== -1) callbacks.splice(index, 1);
      };
    }

    $set($$props) {
      if (this.$$set && !is_empty($$props)) {
        this.$$.skip_bound = true;
        this.$$set($$props);
        this.$$.skip_bound = false;
      }
    }

  }

  /* src/js/components/shepherd-button.svelte generated by Svelte v3.37.0 */

  function create_fragment$8(ctx) {
    let button;
    let button_aria_label_value;
    let button_class_value;
    let mounted;
    let dispose;
    return {
      c() {
        button = element("button");
        attr(button, "aria-label", button_aria_label_value =
        /*label*/
        ctx[3] ?
        /*label*/
        ctx[3] : null);
        attr(button, "class", button_class_value = `${
      /*classes*/
      ctx[1] || ""} shepherd-button ${
      /*secondary*/
      ctx[4] ? "shepherd-button-secondary" : ""}`);
        button.disabled =
        /*disabled*/
        ctx[2];
        attr(button, "tabindex", "0");
      },

      m(target, anchor) {
        insert(target, button, anchor);
        button.innerHTML =
        /*text*/
        ctx[5];

        if (!mounted) {
          dispose = listen(button, "click", function () {
            if (is_function(
            /*action*/
            ctx[0]))
              /*action*/
              ctx[0].apply(this, arguments);
          });
          mounted = true;
        }
      },

      p(new_ctx, [dirty]) {
        ctx = new_ctx;
        if (dirty &
        /*text*/
        32) button.innerHTML =
        /*text*/
        ctx[5];

        if (dirty &
        /*label*/
        8 && button_aria_label_value !== (button_aria_label_value =
        /*label*/
        ctx[3] ?
        /*label*/
        ctx[3] : null)) {
          attr(button, "aria-label", button_aria_label_value);
        }

        if (dirty &
        /*classes, secondary*/
        18 && button_class_value !== (button_class_value = `${
      /*classes*/
      ctx[1] || ""} shepherd-button ${
      /*secondary*/
      ctx[4] ? "shepherd-button-secondary" : ""}`)) {
          attr(button, "class", button_class_value);
        }

        if (dirty &
        /*disabled*/
        4) {
          button.disabled =
          /*disabled*/
          ctx[2];
        }
      },

      i: noop,
      o: noop,

      d(detaching) {
        if (detaching) detach(button);
        mounted = false;
        dispose();
      }

    };
  }

  function instance$8($$self, $$props, $$invalidate) {
    let {
      config
    } = $$props,
        {
      step
    } = $$props;
    let action, classes, disabled, label, secondary, text;

    function getDisabled(disabled) {
      if (isFunction(disabled)) {
        return disabled = disabled.call(step);
      }

      return disabled;
    }

    $$self.$$set = $$props => {
      if ("config" in $$props) $$invalidate(6, config = $$props.config);
      if ("step" in $$props) $$invalidate(7, step = $$props.step);
    };

    $$self.$$.update = () => {
      if ($$self.$$.dirty &
      /*config, step*/
      192) {
        {
          $$invalidate(0, action = config.action ? config.action.bind(step.tour) : null);
          $$invalidate(1, classes = config.classes);
          $$invalidate(2, disabled = config.disabled ? getDisabled(config.disabled) : false);
          $$invalidate(3, label = config.label);
          $$invalidate(4, secondary = config.secondary);
          $$invalidate(5, text = config.text);
        }
      }
    };

    return [action, classes, disabled, label, secondary, text, config, step];
  }

  class Shepherd_button extends SvelteComponent {
    constructor(options) {
      super();
      init(this, options, instance$8, create_fragment$8, safe_not_equal, {
        config: 6,
        step: 7
      });
    }

  }

  /* src/js/components/shepherd-footer.svelte generated by Svelte v3.37.0 */

  function get_each_context(ctx, list, i) {
    const child_ctx = ctx.slice();
    child_ctx[2] = list[i];
    return child_ctx;
  } // (24:4) {#if buttons}


  function create_if_block$3(ctx) {
    let each_1_anchor;
    let current;
    let each_value =
    /*buttons*/
    ctx[1];
    let each_blocks = [];

    for (let i = 0; i < each_value.length; i += 1) {
      each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
    }

    const out = i => transition_out(each_blocks[i], 1, 1, () => {
      each_blocks[i] = null;
    });

    return {
      c() {
        for (let i = 0; i < each_blocks.length; i += 1) {
          each_blocks[i].c();
        }

        each_1_anchor = empty();
      },

      m(target, anchor) {
        for (let i = 0; i < each_blocks.length; i += 1) {
          each_blocks[i].m(target, anchor);
        }

        insert(target, each_1_anchor, anchor);
        current = true;
      },

      p(ctx, dirty) {
        if (dirty &
        /*buttons, step*/
        3) {
          each_value =
          /*buttons*/
          ctx[1];
          let i;

          for (i = 0; i < each_value.length; i += 1) {
            const child_ctx = get_each_context(ctx, each_value, i);

            if (each_blocks[i]) {
              each_blocks[i].p(child_ctx, dirty);
              transition_in(each_blocks[i], 1);
            } else {
              each_blocks[i] = create_each_block(child_ctx);
              each_blocks[i].c();
              transition_in(each_blocks[i], 1);
              each_blocks[i].m(each_1_anchor.parentNode, each_1_anchor);
            }
          }

          group_outros();

          for (i = each_value.length; i < each_blocks.length; i += 1) {
            out(i);
          }

          check_outros();
        }
      },

      i(local) {
        if (current) return;

        for (let i = 0; i < each_value.length; i += 1) {
          transition_in(each_blocks[i]);
        }

        current = true;
      },

      o(local) {
        each_blocks = each_blocks.filter(Boolean);

        for (let i = 0; i < each_blocks.length; i += 1) {
          transition_out(each_blocks[i]);
        }

        current = false;
      },

      d(detaching) {
        destroy_each(each_blocks, detaching);
        if (detaching) detach(each_1_anchor);
      }

    };
  } // (25:8) {#each buttons as config}


  function create_each_block(ctx) {
    let shepherdbutton;
    let current;
    shepherdbutton = new Shepherd_button({
      props: {
        config:
        /*config*/
        ctx[2],
        step:
        /*step*/
        ctx[0]
      }
    });
    return {
      c() {
        create_component(shepherdbutton.$$.fragment);
      },

      m(target, anchor) {
        mount_component(shepherdbutton, target, anchor);
        current = true;
      },

      p(ctx, dirty) {
        const shepherdbutton_changes = {};
        if (dirty &
        /*buttons*/
        2) shepherdbutton_changes.config =
        /*config*/
        ctx[2];
        if (dirty &
        /*step*/
        1) shepherdbutton_changes.step =
        /*step*/
        ctx[0];
        shepherdbutton.$set(shepherdbutton_changes);
      },

      i(local) {
        if (current) return;
        transition_in(shepherdbutton.$$.fragment, local);
        current = true;
      },

      o(local) {
        transition_out(shepherdbutton.$$.fragment, local);
        current = false;
      },

      d(detaching) {
        destroy_component(shepherdbutton, detaching);
      }

    };
  }

  function create_fragment$7(ctx) {
    let footer;
    let current;
    let if_block =
    /*buttons*/
    ctx[1] && create_if_block$3(ctx);
    return {
      c() {
        footer = element("footer");
        if (if_block) if_block.c();
        attr(footer, "class", "shepherd-footer");
      },

      m(target, anchor) {
        insert(target, footer, anchor);
        if (if_block) if_block.m(footer, null);
        current = true;
      },

      p(ctx, [dirty]) {
        if (
        /*buttons*/
        ctx[1]) {
          if (if_block) {
            if_block.p(ctx, dirty);

            if (dirty &
            /*buttons*/
            2) {
              transition_in(if_block, 1);
            }
          } else {
            if_block = create_if_block$3(ctx);
            if_block.c();
            transition_in(if_block, 1);
            if_block.m(footer, null);
          }
        } else if (if_block) {
          group_outros();
          transition_out(if_block, 1, 1, () => {
            if_block = null;
          });
          check_outros();
        }
      },

      i(local) {
        if (current) return;
        transition_in(if_block);
        current = true;
      },

      o(local) {
        transition_out(if_block);
        current = false;
      },

      d(detaching) {
        if (detaching) detach(footer);
        if (if_block) if_block.d();
      }

    };
  }

  function instance$7($$self, $$props, $$invalidate) {
    let buttons;
    let {
      step
    } = $$props;

    $$self.$$set = $$props => {
      if ("step" in $$props) $$invalidate(0, step = $$props.step);
    };

    $$self.$$.update = () => {
      if ($$self.$$.dirty &
      /*step*/
      1) {
        $$invalidate(1, buttons = step.options.buttons);
      }
    };

    return [step, buttons];
  }

  class Shepherd_footer extends SvelteComponent {
    constructor(options) {
      super();
      init(this, options, instance$7, create_fragment$7, safe_not_equal, {
        step: 0
      });
    }

  }

  /* src/js/components/shepherd-cancel-icon.svelte generated by Svelte v3.37.0 */

  function create_fragment$6(ctx) {
    let button;
    let span;
    let button_aria_label_value;
    let mounted;
    let dispose;
    return {
      c() {
        button = element("button");
        span = element("span");
        span.textContent = "×";
        attr(span, "aria-hidden", "true");
        attr(button, "aria-label", button_aria_label_value =
        /*cancelIcon*/
        ctx[0].label ?
        /*cancelIcon*/
        ctx[0].label : "Close Tour");
        attr(button, "class", "shepherd-cancel-icon");
        attr(button, "type", "button");
      },

      m(target, anchor) {
        insert(target, button, anchor);
        append(button, span);

        if (!mounted) {
          dispose = listen(button, "click",
          /*handleCancelClick*/
          ctx[1]);
          mounted = true;
        }
      },

      p(ctx, [dirty]) {
        if (dirty &
        /*cancelIcon*/
        1 && button_aria_label_value !== (button_aria_label_value =
        /*cancelIcon*/
        ctx[0].label ?
        /*cancelIcon*/
        ctx[0].label : "Close Tour")) {
          attr(button, "aria-label", button_aria_label_value);
        }
      },

      i: noop,
      o: noop,

      d(detaching) {
        if (detaching) detach(button);
        mounted = false;
        dispose();
      }

    };
  }

  function instance$6($$self, $$props, $$invalidate) {
    let {
      cancelIcon
    } = $$props,
        {
      step
    } = $$props;
    /**
    * Add a click listener to the cancel link that cancels the tour
    */

    const handleCancelClick = e => {
      e.preventDefault();
      step.cancel();
    };

    $$self.$$set = $$props => {
      if ("cancelIcon" in $$props) $$invalidate(0, cancelIcon = $$props.cancelIcon);
      if ("step" in $$props) $$invalidate(2, step = $$props.step);
    };

    return [cancelIcon, handleCancelClick, step];
  }

  class Shepherd_cancel_icon extends SvelteComponent {
    constructor(options) {
      super();
      init(this, options, instance$6, create_fragment$6, safe_not_equal, {
        cancelIcon: 0,
        step: 2
      });
    }

  }

  /* src/js/components/shepherd-title.svelte generated by Svelte v3.37.0 */

  function create_fragment$5(ctx) {
    let h3;
    return {
      c() {
        h3 = element("h3");
        attr(h3, "id",
        /*labelId*/
        ctx[1]);
        attr(h3, "class", "shepherd-title");
      },

      m(target, anchor) {
        insert(target, h3, anchor);
        /*h3_binding*/

        ctx[3](h3);
      },

      p(ctx, [dirty]) {
        if (dirty &
        /*labelId*/
        2) {
          attr(h3, "id",
          /*labelId*/
          ctx[1]);
        }
      },

      i: noop,
      o: noop,

      d(detaching) {
        if (detaching) detach(h3);
        /*h3_binding*/

        ctx[3](null);
      }

    };
  }

  function instance$5($$self, $$props, $$invalidate) {
    let {
      labelId
    } = $$props,
        {
      element
    } = $$props,
        {
      title
    } = $$props;
    afterUpdate(() => {
      if (isFunction(title)) {
        $$invalidate(2, title = title());
      }

      $$invalidate(0, element.innerHTML = title, element);
    });

    function h3_binding($$value) {
      binding_callbacks[$$value ? "unshift" : "push"](() => {
        element = $$value;
        $$invalidate(0, element);
      });
    }

    $$self.$$set = $$props => {
      if ("labelId" in $$props) $$invalidate(1, labelId = $$props.labelId);
      if ("element" in $$props) $$invalidate(0, element = $$props.element);
      if ("title" in $$props) $$invalidate(2, title = $$props.title);
    };

    return [element, labelId, title, h3_binding];
  }

  class Shepherd_title extends SvelteComponent {
    constructor(options) {
      super();
      init(this, options, instance$5, create_fragment$5, safe_not_equal, {
        labelId: 1,
        element: 0,
        title: 2
      });
    }

  }

  /* src/js/components/shepherd-header.svelte generated by Svelte v3.37.0 */

  function create_if_block_1$1(ctx) {
    let shepherdtitle;
    let current;
    shepherdtitle = new Shepherd_title({
      props: {
        labelId:
        /*labelId*/
        ctx[0],
        title:
        /*title*/
        ctx[2]
      }
    });
    return {
      c() {
        create_component(shepherdtitle.$$.fragment);
      },

      m(target, anchor) {
        mount_component(shepherdtitle, target, anchor);
        current = true;
      },

      p(ctx, dirty) {
        const shepherdtitle_changes = {};
        if (dirty &
        /*labelId*/
        1) shepherdtitle_changes.labelId =
        /*labelId*/
        ctx[0];
        if (dirty &
        /*title*/
        4) shepherdtitle_changes.title =
        /*title*/
        ctx[2];
        shepherdtitle.$set(shepherdtitle_changes);
      },

      i(local) {
        if (current) return;
        transition_in(shepherdtitle.$$.fragment, local);
        current = true;
      },

      o(local) {
        transition_out(shepherdtitle.$$.fragment, local);
        current = false;
      },

      d(detaching) {
        destroy_component(shepherdtitle, detaching);
      }

    };
  } // (39:4) {#if cancelIcon && cancelIcon.enabled}


  function create_if_block$2(ctx) {
    let shepherdcancelicon;
    let current;
    shepherdcancelicon = new Shepherd_cancel_icon({
      props: {
        cancelIcon:
        /*cancelIcon*/
        ctx[3],
        step:
        /*step*/
        ctx[1]
      }
    });
    return {
      c() {
        create_component(shepherdcancelicon.$$.fragment);
      },

      m(target, anchor) {
        mount_component(shepherdcancelicon, target, anchor);
        current = true;
      },

      p(ctx, dirty) {
        const shepherdcancelicon_changes = {};
        if (dirty &
        /*cancelIcon*/
        8) shepherdcancelicon_changes.cancelIcon =
        /*cancelIcon*/
        ctx[3];
        if (dirty &
        /*step*/
        2) shepherdcancelicon_changes.step =
        /*step*/
        ctx[1];
        shepherdcancelicon.$set(shepherdcancelicon_changes);
      },

      i(local) {
        if (current) return;
        transition_in(shepherdcancelicon.$$.fragment, local);
        current = true;
      },

      o(local) {
        transition_out(shepherdcancelicon.$$.fragment, local);
        current = false;
      },

      d(detaching) {
        destroy_component(shepherdcancelicon, detaching);
      }

    };
  }

  function create_fragment$4(ctx) {
    let header;
    let t;
    let current;
    let if_block0 =
    /*title*/
    ctx[2] && create_if_block_1$1(ctx);
    let if_block1 =
    /*cancelIcon*/
    ctx[3] &&
    /*cancelIcon*/
    ctx[3].enabled && create_if_block$2(ctx);
    return {
      c() {
        header = element("header");
        if (if_block0) if_block0.c();
        t = space();
        if (if_block1) if_block1.c();
        attr(header, "class", "shepherd-header");
      },

      m(target, anchor) {
        insert(target, header, anchor);
        if (if_block0) if_block0.m(header, null);
        append(header, t);
        if (if_block1) if_block1.m(header, null);
        current = true;
      },

      p(ctx, [dirty]) {
        if (
        /*title*/
        ctx[2]) {
          if (if_block0) {
            if_block0.p(ctx, dirty);

            if (dirty &
            /*title*/
            4) {
              transition_in(if_block0, 1);
            }
          } else {
            if_block0 = create_if_block_1$1(ctx);
            if_block0.c();
            transition_in(if_block0, 1);
            if_block0.m(header, t);
          }
        } else if (if_block0) {
          group_outros();
          transition_out(if_block0, 1, 1, () => {
            if_block0 = null;
          });
          check_outros();
        }

        if (
        /*cancelIcon*/
        ctx[3] &&
        /*cancelIcon*/
        ctx[3].enabled) {
          if (if_block1) {
            if_block1.p(ctx, dirty);

            if (dirty &
            /*cancelIcon*/
            8) {
              transition_in(if_block1, 1);
            }
          } else {
            if_block1 = create_if_block$2(ctx);
            if_block1.c();
            transition_in(if_block1, 1);
            if_block1.m(header, null);
          }
        } else if (if_block1) {
          group_outros();
          transition_out(if_block1, 1, 1, () => {
            if_block1 = null;
          });
          check_outros();
        }
      },

      i(local) {
        if (current) return;
        transition_in(if_block0);
        transition_in(if_block1);
        current = true;
      },

      o(local) {
        transition_out(if_block0);
        transition_out(if_block1);
        current = false;
      },

      d(detaching) {
        if (detaching) detach(header);
        if (if_block0) if_block0.d();
        if (if_block1) if_block1.d();
      }

    };
  }

  function instance$4($$self, $$props, $$invalidate) {
    let {
      labelId
    } = $$props,
        {
      step
    } = $$props;
    let title, cancelIcon;

    $$self.$$set = $$props => {
      if ("labelId" in $$props) $$invalidate(0, labelId = $$props.labelId);
      if ("step" in $$props) $$invalidate(1, step = $$props.step);
    };

    $$self.$$.update = () => {
      if ($$self.$$.dirty &
      /*step*/
      2) {
        {
          $$invalidate(2, title = step.options.title);
          $$invalidate(3, cancelIcon = step.options.cancelIcon);
        }
      }
    };

    return [labelId, step, title, cancelIcon];
  }

  class Shepherd_header extends SvelteComponent {
    constructor(options) {
      super();
      init(this, options, instance$4, create_fragment$4, safe_not_equal, {
        labelId: 0,
        step: 1
      });
    }

  }

  /* src/js/components/shepherd-text.svelte generated by Svelte v3.37.0 */

  function create_fragment$3(ctx) {
    let div;
    return {
      c() {
        div = element("div");
        attr(div, "class", "shepherd-text");
        attr(div, "id",
        /*descriptionId*/
        ctx[1]);
      },

      m(target, anchor) {
        insert(target, div, anchor);
        /*div_binding*/

        ctx[3](div);
      },

      p(ctx, [dirty]) {
        if (dirty &
        /*descriptionId*/
        2) {
          attr(div, "id",
          /*descriptionId*/
          ctx[1]);
        }
      },

      i: noop,
      o: noop,

      d(detaching) {
        if (detaching) detach(div);
        /*div_binding*/

        ctx[3](null);
      }

    };
  }

  function instance$3($$self, $$props, $$invalidate) {
    let {
      descriptionId
    } = $$props,
        {
      element
    } = $$props,
        {
      step
    } = $$props;
    afterUpdate(() => {
      let {
        text
      } = step.options;

      if (isFunction(text)) {
        text = text.call(step);
      }

      if (isHTMLElement$1(text)) {
        element.appendChild(text);
      } else {
        $$invalidate(0, element.innerHTML = text, element);
      }
    });

    function div_binding($$value) {
      binding_callbacks[$$value ? "unshift" : "push"](() => {
        element = $$value;
        $$invalidate(0, element);
      });
    }

    $$self.$$set = $$props => {
      if ("descriptionId" in $$props) $$invalidate(1, descriptionId = $$props.descriptionId);
      if ("element" in $$props) $$invalidate(0, element = $$props.element);
      if ("step" in $$props) $$invalidate(2, step = $$props.step);
    };

    return [element, descriptionId, step, div_binding];
  }

  class Shepherd_text extends SvelteComponent {
    constructor(options) {
      super();
      init(this, options, instance$3, create_fragment$3, safe_not_equal, {
        descriptionId: 1,
        element: 0,
        step: 2
      });
    }

  }

  /* src/js/components/shepherd-content.svelte generated by Svelte v3.37.0 */

  function create_if_block_2(ctx) {
    let shepherdheader;
    let current;
    shepherdheader = new Shepherd_header({
      props: {
        labelId:
        /*labelId*/
        ctx[1],
        step:
        /*step*/
        ctx[2]
      }
    });
    return {
      c() {
        create_component(shepherdheader.$$.fragment);
      },

      m(target, anchor) {
        mount_component(shepherdheader, target, anchor);
        current = true;
      },

      p(ctx, dirty) {
        const shepherdheader_changes = {};
        if (dirty &
        /*labelId*/
        2) shepherdheader_changes.labelId =
        /*labelId*/
        ctx[1];
        if (dirty &
        /*step*/
        4) shepherdheader_changes.step =
        /*step*/
        ctx[2];
        shepherdheader.$set(shepherdheader_changes);
      },

      i(local) {
        if (current) return;
        transition_in(shepherdheader.$$.fragment, local);
        current = true;
      },

      o(local) {
        transition_out(shepherdheader.$$.fragment, local);
        current = false;
      },

      d(detaching) {
        destroy_component(shepherdheader, detaching);
      }

    };
  } // (28:2) {#if !isUndefined(step.options.text)}


  function create_if_block_1(ctx) {
    let shepherdtext;
    let current;
    shepherdtext = new Shepherd_text({
      props: {
        descriptionId:
        /*descriptionId*/
        ctx[0],
        step:
        /*step*/
        ctx[2]
      }
    });
    return {
      c() {
        create_component(shepherdtext.$$.fragment);
      },

      m(target, anchor) {
        mount_component(shepherdtext, target, anchor);
        current = true;
      },

      p(ctx, dirty) {
        const shepherdtext_changes = {};
        if (dirty &
        /*descriptionId*/
        1) shepherdtext_changes.descriptionId =
        /*descriptionId*/
        ctx[0];
        if (dirty &
        /*step*/
        4) shepherdtext_changes.step =
        /*step*/
        ctx[2];
        shepherdtext.$set(shepherdtext_changes);
      },

      i(local) {
        if (current) return;
        transition_in(shepherdtext.$$.fragment, local);
        current = true;
      },

      o(local) {
        transition_out(shepherdtext.$$.fragment, local);
        current = false;
      },

      d(detaching) {
        destroy_component(shepherdtext, detaching);
      }

    };
  } // (35:2) {#if Array.isArray(step.options.buttons) && step.options.buttons.length}


  function create_if_block$1(ctx) {
    let shepherdfooter;
    let current;
    shepherdfooter = new Shepherd_footer({
      props: {
        step:
        /*step*/
        ctx[2]
      }
    });
    return {
      c() {
        create_component(shepherdfooter.$$.fragment);
      },

      m(target, anchor) {
        mount_component(shepherdfooter, target, anchor);
        current = true;
      },

      p(ctx, dirty) {
        const shepherdfooter_changes = {};
        if (dirty &
        /*step*/
        4) shepherdfooter_changes.step =
        /*step*/
        ctx[2];
        shepherdfooter.$set(shepherdfooter_changes);
      },

      i(local) {
        if (current) return;
        transition_in(shepherdfooter.$$.fragment, local);
        current = true;
      },

      o(local) {
        transition_out(shepherdfooter.$$.fragment, local);
        current = false;
      },

      d(detaching) {
        destroy_component(shepherdfooter, detaching);
      }

    };
  }

  function create_fragment$2(ctx) {
    let div;
    let show_if_2 = !isUndefined(
    /*step*/
    ctx[2].options.title) ||
    /*step*/
    ctx[2].options.cancelIcon &&
    /*step*/
    ctx[2].options.cancelIcon.enabled;
    let t0;
    let show_if_1 = !isUndefined(
    /*step*/
    ctx[2].options.text);
    let t1;
    let show_if = Array.isArray(
    /*step*/
    ctx[2].options.buttons) &&
    /*step*/
    ctx[2].options.buttons.length;
    let current;
    let if_block0 = show_if_2 && create_if_block_2(ctx);
    let if_block1 = show_if_1 && create_if_block_1(ctx);
    let if_block2 = show_if && create_if_block$1(ctx);
    return {
      c() {
        div = element("div");
        if (if_block0) if_block0.c();
        t0 = space();
        if (if_block1) if_block1.c();
        t1 = space();
        if (if_block2) if_block2.c();
        attr(div, "class", "shepherd-content");
      },

      m(target, anchor) {
        insert(target, div, anchor);
        if (if_block0) if_block0.m(div, null);
        append(div, t0);
        if (if_block1) if_block1.m(div, null);
        append(div, t1);
        if (if_block2) if_block2.m(div, null);
        current = true;
      },

      p(ctx, [dirty]) {
        if (dirty &
        /*step*/
        4) show_if_2 = !isUndefined(
        /*step*/
        ctx[2].options.title) ||
        /*step*/
        ctx[2].options.cancelIcon &&
        /*step*/
        ctx[2].options.cancelIcon.enabled;

        if (show_if_2) {
          if (if_block0) {
            if_block0.p(ctx, dirty);

            if (dirty &
            /*step*/
            4) {
              transition_in(if_block0, 1);
            }
          } else {
            if_block0 = create_if_block_2(ctx);
            if_block0.c();
            transition_in(if_block0, 1);
            if_block0.m(div, t0);
          }
        } else if (if_block0) {
          group_outros();
          transition_out(if_block0, 1, 1, () => {
            if_block0 = null;
          });
          check_outros();
        }

        if (dirty &
        /*step*/
        4) show_if_1 = !isUndefined(
        /*step*/
        ctx[2].options.text);

        if (show_if_1) {
          if (if_block1) {
            if_block1.p(ctx, dirty);

            if (dirty &
            /*step*/
            4) {
              transition_in(if_block1, 1);
            }
          } else {
            if_block1 = create_if_block_1(ctx);
            if_block1.c();
            transition_in(if_block1, 1);
            if_block1.m(div, t1);
          }
        } else if (if_block1) {
          group_outros();
          transition_out(if_block1, 1, 1, () => {
            if_block1 = null;
          });
          check_outros();
        }

        if (dirty &
        /*step*/
        4) show_if = Array.isArray(
        /*step*/
        ctx[2].options.buttons) &&
        /*step*/
        ctx[2].options.buttons.length;

        if (show_if) {
          if (if_block2) {
            if_block2.p(ctx, dirty);

            if (dirty &
            /*step*/
            4) {
              transition_in(if_block2, 1);
            }
          } else {
            if_block2 = create_if_block$1(ctx);
            if_block2.c();
            transition_in(if_block2, 1);
            if_block2.m(div, null);
          }
        } else if (if_block2) {
          group_outros();
          transition_out(if_block2, 1, 1, () => {
            if_block2 = null;
          });
          check_outros();
        }
      },

      i(local) {
        if (current) return;
        transition_in(if_block0);
        transition_in(if_block1);
        transition_in(if_block2);
        current = true;
      },

      o(local) {
        transition_out(if_block0);
        transition_out(if_block1);
        transition_out(if_block2);
        current = false;
      },

      d(detaching) {
        if (detaching) detach(div);
        if (if_block0) if_block0.d();
        if (if_block1) if_block1.d();
        if (if_block2) if_block2.d();
      }

    };
  }

  function instance$2($$self, $$props, $$invalidate) {
    let {
      descriptionId
    } = $$props,
        {
      labelId
    } = $$props,
        {
      step
    } = $$props;

    $$self.$$set = $$props => {
      if ("descriptionId" in $$props) $$invalidate(0, descriptionId = $$props.descriptionId);
      if ("labelId" in $$props) $$invalidate(1, labelId = $$props.labelId);
      if ("step" in $$props) $$invalidate(2, step = $$props.step);
    };

    return [descriptionId, labelId, step];
  }

  class Shepherd_content extends SvelteComponent {
    constructor(options) {
      super();
      init(this, options, instance$2, create_fragment$2, safe_not_equal, {
        descriptionId: 0,
        labelId: 1,
        step: 2
      });
    }

  }

  /* src/js/components/shepherd-element.svelte generated by Svelte v3.37.0 */

  function create_if_block(ctx) {
    let div;
    return {
      c() {
        div = element("div");
        attr(div, "class", "shepherd-arrow");
        attr(div, "data-popper-arrow", "");
      },

      m(target, anchor) {
        insert(target, div, anchor);
      },

      d(detaching) {
        if (detaching) detach(div);
      }

    };
  }

  function create_fragment$1(ctx) {
    let div;
    let t;
    let shepherdcontent;
    let div_aria_describedby_value;
    let div_aria_labelledby_value;
    let current;
    let mounted;
    let dispose;
    let if_block =
    /*step*/
    ctx[4].options.arrow &&
    /*step*/
    ctx[4].options.attachTo &&
    /*step*/
    ctx[4].options.attachTo.element &&
    /*step*/
    ctx[4].options.attachTo.on && create_if_block();
    shepherdcontent = new Shepherd_content({
      props: {
        descriptionId:
        /*descriptionId*/
        ctx[2],
        labelId:
        /*labelId*/
        ctx[3],
        step:
        /*step*/
        ctx[4]
      }
    });
    let div_levels = [{
      "aria-describedby": div_aria_describedby_value = !isUndefined(
      /*step*/
      ctx[4].options.text) ?
      /*descriptionId*/
      ctx[2] : null
    }, {
      "aria-labelledby": div_aria_labelledby_value =
      /*step*/
      ctx[4].options.title ?
      /*labelId*/
      ctx[3] : null
    },
    /*dataStepId*/
    ctx[1], {
      role: "dialog"
    }, {
      tabindex: "0"
    }];
    let div_data = {};

    for (let i = 0; i < div_levels.length; i += 1) {
      div_data = assign(div_data, div_levels[i]);
    }

    return {
      c() {
        div = element("div");
        if (if_block) if_block.c();
        t = space();
        create_component(shepherdcontent.$$.fragment);
        set_attributes(div, div_data);
        toggle_class(div, "shepherd-has-cancel-icon",
        /*hasCancelIcon*/
        ctx[5]);
        toggle_class(div, "shepherd-has-title",
        /*hasTitle*/
        ctx[6]);
        toggle_class(div, "shepherd-element", true);
      },

      m(target, anchor) {
        insert(target, div, anchor);
        if (if_block) if_block.m(div, null);
        append(div, t);
        mount_component(shepherdcontent, div, null);
        /*div_binding*/

        ctx[13](div);
        current = true;

        if (!mounted) {
          dispose = listen(div, "keydown",
          /*handleKeyDown*/
          ctx[7]);
          mounted = true;
        }
      },

      p(ctx, [dirty]) {
        if (
        /*step*/
        ctx[4].options.arrow &&
        /*step*/
        ctx[4].options.attachTo &&
        /*step*/
        ctx[4].options.attachTo.element &&
        /*step*/
        ctx[4].options.attachTo.on) {
          if (if_block) ; else {
            if_block = create_if_block();
            if_block.c();
            if_block.m(div, t);
          }
        } else if (if_block) {
          if_block.d(1);
          if_block = null;
        }

        const shepherdcontent_changes = {};
        if (dirty &
        /*descriptionId*/
        4) shepherdcontent_changes.descriptionId =
        /*descriptionId*/
        ctx[2];
        if (dirty &
        /*labelId*/
        8) shepherdcontent_changes.labelId =
        /*labelId*/
        ctx[3];
        if (dirty &
        /*step*/
        16) shepherdcontent_changes.step =
        /*step*/
        ctx[4];
        shepherdcontent.$set(shepherdcontent_changes);
        set_attributes(div, div_data = get_spread_update(div_levels, [(!current || dirty &
        /*step, descriptionId*/
        20 && div_aria_describedby_value !== (div_aria_describedby_value = !isUndefined(
        /*step*/
        ctx[4].options.text) ?
        /*descriptionId*/
        ctx[2] : null)) && {
          "aria-describedby": div_aria_describedby_value
        }, (!current || dirty &
        /*step, labelId*/
        24 && div_aria_labelledby_value !== (div_aria_labelledby_value =
        /*step*/
        ctx[4].options.title ?
        /*labelId*/
        ctx[3] : null)) && {
          "aria-labelledby": div_aria_labelledby_value
        }, dirty &
        /*dataStepId*/
        2 &&
        /*dataStepId*/
        ctx[1], {
          role: "dialog"
        }, {
          tabindex: "0"
        }]));
        toggle_class(div, "shepherd-has-cancel-icon",
        /*hasCancelIcon*/
        ctx[5]);
        toggle_class(div, "shepherd-has-title",
        /*hasTitle*/
        ctx[6]);
        toggle_class(div, "shepherd-element", true);
      },

      i(local) {
        if (current) return;
        transition_in(shepherdcontent.$$.fragment, local);
        current = true;
      },

      o(local) {
        transition_out(shepherdcontent.$$.fragment, local);
        current = false;
      },

      d(detaching) {
        if (detaching) detach(div);
        if (if_block) if_block.d();
        destroy_component(shepherdcontent);
        /*div_binding*/

        ctx[13](null);
        mounted = false;
        dispose();
      }

    };
  }

  const KEY_TAB = 9;
  const KEY_ESC = 27;
  const LEFT_ARROW = 37;
  const RIGHT_ARROW = 39;

  function getClassesArray(classes) {
    return classes.split(" ").filter(className => !!className.length);
  }

  function instance$1($$self, $$props, $$invalidate) {
    let {
      classPrefix
    } = $$props,
        {
      element
    } = $$props,
        {
      descriptionId
    } = $$props,
        {
      firstFocusableElement
    } = $$props,
        {
      focusableElements
    } = $$props,
        {
      labelId
    } = $$props,
        {
      lastFocusableElement
    } = $$props,
        {
      step
    } = $$props,
        {
      dataStepId
    } = $$props;
    let hasCancelIcon, hasTitle, classes;

    const getElement = () => element;

    onMount(() => {
      // Get all elements that are focusable
      $$invalidate(1, dataStepId = {
        [`data-${classPrefix}shepherd-step-id`]: step.id
      });
      $$invalidate(9, focusableElements = element.querySelectorAll("a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), [tabindex=\"0\"]"));
      $$invalidate(8, firstFocusableElement = focusableElements[0]);
      $$invalidate(10, lastFocusableElement = focusableElements[focusableElements.length - 1]);
    });
    afterUpdate(() => {
      if (classes !== step.options.classes) {
        updateDynamicClasses();
      }
    });

    function updateDynamicClasses() {
      removeClasses(classes);
      classes = step.options.classes;
      addClasses(classes);
    }

    function removeClasses(classes) {
      if (isString(classes)) {
        const oldClasses = getClassesArray(classes);

        if (oldClasses.length) {
          element.classList.remove(...oldClasses);
        }
      }
    }

    function addClasses(classes) {
      if (isString(classes)) {
        const newClasses = getClassesArray(classes);

        if (newClasses.length) {
          element.classList.add(...newClasses);
        }
      }
    }
    /**
    * Setup keydown events to allow closing the modal with ESC
    *
    * Borrowed from this great post! https://bitsofco.de/accessible-modal-dialog/
    *
    * @private
    */


    const handleKeyDown = e => {
      const {
        tour
      } = step;

      switch (e.keyCode) {
        case KEY_TAB:
          if (focusableElements.length === 0) {
            e.preventDefault();
            break;
          } // Backward tab


          if (e.shiftKey) {
            if (document.activeElement === firstFocusableElement || document.activeElement.classList.contains("shepherd-element")) {
              e.preventDefault();
              lastFocusableElement.focus();
            }
          } else {
            if (document.activeElement === lastFocusableElement) {
              e.preventDefault();
              firstFocusableElement.focus();
            }
          }

          break;

        case KEY_ESC:
          if (tour.options.exitOnEsc) {
            step.cancel();
          }

          break;

        case LEFT_ARROW:
          if (tour.options.keyboardNavigation) {
            tour.back();
          }

          break;

        case RIGHT_ARROW:
          if (tour.options.keyboardNavigation) {
            tour.next();
          }

          break;
      }
    };

    function div_binding($$value) {
      binding_callbacks[$$value ? "unshift" : "push"](() => {
        element = $$value;
        $$invalidate(0, element);
      });
    }

    $$self.$$set = $$props => {
      if ("classPrefix" in $$props) $$invalidate(11, classPrefix = $$props.classPrefix);
      if ("element" in $$props) $$invalidate(0, element = $$props.element);
      if ("descriptionId" in $$props) $$invalidate(2, descriptionId = $$props.descriptionId);
      if ("firstFocusableElement" in $$props) $$invalidate(8, firstFocusableElement = $$props.firstFocusableElement);
      if ("focusableElements" in $$props) $$invalidate(9, focusableElements = $$props.focusableElements);
      if ("labelId" in $$props) $$invalidate(3, labelId = $$props.labelId);
      if ("lastFocusableElement" in $$props) $$invalidate(10, lastFocusableElement = $$props.lastFocusableElement);
      if ("step" in $$props) $$invalidate(4, step = $$props.step);
      if ("dataStepId" in $$props) $$invalidate(1, dataStepId = $$props.dataStepId);
    };

    $$self.$$.update = () => {
      if ($$self.$$.dirty &
      /*step*/
      16) {
        {
          $$invalidate(5, hasCancelIcon = step.options && step.options.cancelIcon && step.options.cancelIcon.enabled);
          $$invalidate(6, hasTitle = step.options && step.options.title);
        }
      }
    };

    return [element, dataStepId, descriptionId, labelId, step, hasCancelIcon, hasTitle, handleKeyDown, firstFocusableElement, focusableElements, lastFocusableElement, classPrefix, getElement, div_binding];
  }

  class Shepherd_element extends SvelteComponent {
    constructor(options) {
      super();
      init(this, options, instance$1, create_fragment$1, safe_not_equal, {
        classPrefix: 11,
        element: 0,
        descriptionId: 2,
        firstFocusableElement: 8,
        focusableElements: 9,
        labelId: 3,
        lastFocusableElement: 10,
        step: 4,
        dataStepId: 1,
        getElement: 12
      });
    }

    get getElement() {
      return this.$$.ctx[12];
    }

  }

  function createCommonjsModule(fn, module) {
  	return module = { exports: {} }, fn(module, module.exports), module.exports;
  }

  var smoothscroll = createCommonjsModule(function (module, exports) {
    /* smoothscroll v0.4.4 - 2019 - Dustan Kasten, Jeremias Menichelli - MIT License */
    (function () {

      function polyfill() {
        // aliases
        var w = window;
        var d = document; // return if scroll behavior is supported and polyfill is not forced

        if ('scrollBehavior' in d.documentElement.style && w.__forceSmoothScrollPolyfill__ !== true) {
          return;
        } // globals


        var Element = w.HTMLElement || w.Element;
        var SCROLL_TIME = 468; // object gathering original scroll methods

        var original = {
          scroll: w.scroll || w.scrollTo,
          scrollBy: w.scrollBy,
          elementScroll: Element.prototype.scroll || scrollElement,
          scrollIntoView: Element.prototype.scrollIntoView
        }; // define timing method

        var now = w.performance && w.performance.now ? w.performance.now.bind(w.performance) : Date.now;
        /**
         * indicates if a the current browser is made by Microsoft
         * @method isMicrosoftBrowser
         * @param {String} userAgent
         * @returns {Boolean}
         */

        function isMicrosoftBrowser(userAgent) {
          var userAgentPatterns = ['MSIE ', 'Trident/', 'Edge/'];
          return new RegExp(userAgentPatterns.join('|')).test(userAgent);
        }
        /*
         * IE has rounding bug rounding down clientHeight and clientWidth and
         * rounding up scrollHeight and scrollWidth causing false positives
         * on hasScrollableSpace
         */


        var ROUNDING_TOLERANCE = isMicrosoftBrowser(w.navigator.userAgent) ? 1 : 0;
        /**
         * changes scroll position inside an element
         * @method scrollElement
         * @param {Number} x
         * @param {Number} y
         * @returns {undefined}
         */

        function scrollElement(x, y) {
          this.scrollLeft = x;
          this.scrollTop = y;
        }
        /**
         * returns result of applying ease math function to a number
         * @method ease
         * @param {Number} k
         * @returns {Number}
         */


        function ease(k) {
          return 0.5 * (1 - Math.cos(Math.PI * k));
        }
        /**
         * indicates if a smooth behavior should be applied
         * @method shouldBailOut
         * @param {Number|Object} firstArg
         * @returns {Boolean}
         */


        function shouldBailOut(firstArg) {
          if (firstArg === null || typeof firstArg !== 'object' || firstArg.behavior === undefined || firstArg.behavior === 'auto' || firstArg.behavior === 'instant') {
            // first argument is not an object/null
            // or behavior is auto, instant or undefined
            return true;
          }

          if (typeof firstArg === 'object' && firstArg.behavior === 'smooth') {
            // first argument is an object and behavior is smooth
            return false;
          } // throw error when behavior is not supported


          throw new TypeError('behavior member of ScrollOptions ' + firstArg.behavior + ' is not a valid value for enumeration ScrollBehavior.');
        }
        /**
         * indicates if an element has scrollable space in the provided axis
         * @method hasScrollableSpace
         * @param {Node} el
         * @param {String} axis
         * @returns {Boolean}
         */


        function hasScrollableSpace(el, axis) {
          if (axis === 'Y') {
            return el.clientHeight + ROUNDING_TOLERANCE < el.scrollHeight;
          }

          if (axis === 'X') {
            return el.clientWidth + ROUNDING_TOLERANCE < el.scrollWidth;
          }
        }
        /**
         * indicates if an element has a scrollable overflow property in the axis
         * @method canOverflow
         * @param {Node} el
         * @param {String} axis
         * @returns {Boolean}
         */


        function canOverflow(el, axis) {
          var overflowValue = w.getComputedStyle(el, null)['overflow' + axis];
          return overflowValue === 'auto' || overflowValue === 'scroll';
        }
        /**
         * indicates if an element can be scrolled in either axis
         * @method isScrollable
         * @param {Node} el
         * @param {String} axis
         * @returns {Boolean}
         */


        function isScrollable(el) {
          var isScrollableY = hasScrollableSpace(el, 'Y') && canOverflow(el, 'Y');
          var isScrollableX = hasScrollableSpace(el, 'X') && canOverflow(el, 'X');
          return isScrollableY || isScrollableX;
        }
        /**
         * finds scrollable parent of an element
         * @method findScrollableParent
         * @param {Node} el
         * @returns {Node} el
         */


        function findScrollableParent(el) {
          while (el !== d.body && isScrollable(el) === false) {
            el = el.parentNode || el.host;
          }

          return el;
        }
        /**
         * self invoked function that, given a context, steps through scrolling
         * @method step
         * @param {Object} context
         * @returns {undefined}
         */


        function step(context) {
          var time = now();
          var value;
          var currentX;
          var currentY;
          var elapsed = (time - context.startTime) / SCROLL_TIME; // avoid elapsed times higher than one

          elapsed = elapsed > 1 ? 1 : elapsed; // apply easing to elapsed time

          value = ease(elapsed);
          currentX = context.startX + (context.x - context.startX) * value;
          currentY = context.startY + (context.y - context.startY) * value;
          context.method.call(context.scrollable, currentX, currentY); // scroll more if we have not reached our destination

          if (currentX !== context.x || currentY !== context.y) {
            w.requestAnimationFrame(step.bind(w, context));
          }
        }
        /**
         * scrolls window or element with a smooth behavior
         * @method smoothScroll
         * @param {Object|Node} el
         * @param {Number} x
         * @param {Number} y
         * @returns {undefined}
         */


        function smoothScroll(el, x, y) {
          var scrollable;
          var startX;
          var startY;
          var method;
          var startTime = now(); // define scroll context

          if (el === d.body) {
            scrollable = w;
            startX = w.scrollX || w.pageXOffset;
            startY = w.scrollY || w.pageYOffset;
            method = original.scroll;
          } else {
            scrollable = el;
            startX = el.scrollLeft;
            startY = el.scrollTop;
            method = scrollElement;
          } // scroll looping over a frame


          step({
            scrollable: scrollable,
            method: method,
            startTime: startTime,
            startX: startX,
            startY: startY,
            x: x,
            y: y
          });
        } // ORIGINAL METHODS OVERRIDES
        // w.scroll and w.scrollTo


        w.scroll = w.scrollTo = function () {
          // avoid action when no arguments are passed
          if (arguments[0] === undefined) {
            return;
          } // avoid smooth behavior if not required


          if (shouldBailOut(arguments[0]) === true) {
            original.scroll.call(w, arguments[0].left !== undefined ? arguments[0].left : typeof arguments[0] !== 'object' ? arguments[0] : w.scrollX || w.pageXOffset, // use top prop, second argument if present or fallback to scrollY
            arguments[0].top !== undefined ? arguments[0].top : arguments[1] !== undefined ? arguments[1] : w.scrollY || w.pageYOffset);
            return;
          } // LET THE SMOOTHNESS BEGIN!


          smoothScroll.call(w, d.body, arguments[0].left !== undefined ? ~~arguments[0].left : w.scrollX || w.pageXOffset, arguments[0].top !== undefined ? ~~arguments[0].top : w.scrollY || w.pageYOffset);
        }; // w.scrollBy


        w.scrollBy = function () {
          // avoid action when no arguments are passed
          if (arguments[0] === undefined) {
            return;
          } // avoid smooth behavior if not required


          if (shouldBailOut(arguments[0])) {
            original.scrollBy.call(w, arguments[0].left !== undefined ? arguments[0].left : typeof arguments[0] !== 'object' ? arguments[0] : 0, arguments[0].top !== undefined ? arguments[0].top : arguments[1] !== undefined ? arguments[1] : 0);
            return;
          } // LET THE SMOOTHNESS BEGIN!


          smoothScroll.call(w, d.body, ~~arguments[0].left + (w.scrollX || w.pageXOffset), ~~arguments[0].top + (w.scrollY || w.pageYOffset));
        }; // Element.prototype.scroll and Element.prototype.scrollTo


        Element.prototype.scroll = Element.prototype.scrollTo = function () {
          // avoid action when no arguments are passed
          if (arguments[0] === undefined) {
            return;
          } // avoid smooth behavior if not required


          if (shouldBailOut(arguments[0]) === true) {
            // if one number is passed, throw error to match Firefox implementation
            if (typeof arguments[0] === 'number' && arguments[1] === undefined) {
              throw new SyntaxError('Value could not be converted');
            }

            original.elementScroll.call(this, // use left prop, first number argument or fallback to scrollLeft
            arguments[0].left !== undefined ? ~~arguments[0].left : typeof arguments[0] !== 'object' ? ~~arguments[0] : this.scrollLeft, // use top prop, second argument or fallback to scrollTop
            arguments[0].top !== undefined ? ~~arguments[0].top : arguments[1] !== undefined ? ~~arguments[1] : this.scrollTop);
            return;
          }

          var left = arguments[0].left;
          var top = arguments[0].top; // LET THE SMOOTHNESS BEGIN!

          smoothScroll.call(this, this, typeof left === 'undefined' ? this.scrollLeft : ~~left, typeof top === 'undefined' ? this.scrollTop : ~~top);
        }; // Element.prototype.scrollBy


        Element.prototype.scrollBy = function () {
          // avoid action when no arguments are passed
          if (arguments[0] === undefined) {
            return;
          } // avoid smooth behavior if not required


          if (shouldBailOut(arguments[0]) === true) {
            original.elementScroll.call(this, arguments[0].left !== undefined ? ~~arguments[0].left + this.scrollLeft : ~~arguments[0] + this.scrollLeft, arguments[0].top !== undefined ? ~~arguments[0].top + this.scrollTop : ~~arguments[1] + this.scrollTop);
            return;
          }

          this.scroll({
            left: ~~arguments[0].left + this.scrollLeft,
            top: ~~arguments[0].top + this.scrollTop,
            behavior: arguments[0].behavior
          });
        }; // Element.prototype.scrollIntoView


        Element.prototype.scrollIntoView = function () {
          // avoid smooth behavior if not required
          if (shouldBailOut(arguments[0]) === true) {
            original.scrollIntoView.call(this, arguments[0] === undefined ? true : arguments[0]);
            return;
          } // LET THE SMOOTHNESS BEGIN!


          var scrollableParent = findScrollableParent(this);
          var parentRects = scrollableParent.getBoundingClientRect();
          var clientRects = this.getBoundingClientRect();

          if (scrollableParent !== d.body) {
            // reveal element inside parent
            smoothScroll.call(this, scrollableParent, scrollableParent.scrollLeft + clientRects.left - parentRects.left, scrollableParent.scrollTop + clientRects.top - parentRects.top); // reveal parent in viewport unless is fixed

            if (w.getComputedStyle(scrollableParent).position !== 'fixed') {
              w.scrollBy({
                left: parentRects.left,
                top: parentRects.top,
                behavior: 'smooth'
              });
            }
          } else {
            // reveal element in viewport
            w.scrollBy({
              left: clientRects.left,
              top: clientRects.top,
              behavior: 'smooth'
            });
          }
        };
      }

      {
        // commonjs
        module.exports = {
          polyfill: polyfill
        };
      }
    })();
  });
  smoothscroll.polyfill;

  smoothscroll.polyfill();
  /**
   * A class representing steps to be added to a tour.
   * @extends {Evented}
   */

  class Step extends Evented {
    /**
     * Create a step
     * @param {Tour} tour The tour for the step
     * @param {object} options The options for the step
     * @param {boolean} options.arrow Whether to display the arrow for the tooltip or not. Defaults to `true`.
     * @param {object} options.attachTo The element the step should be attached to on the page.
     * An object with properties `element` and `on`.
     *
     * ```js
     * const step = new Step(tour, {
     *   attachTo: { element: '.some .selector-path', on: 'left' },
     *   ...moreOptions
     * });
     * ```
     *
     * If you don’t specify an attachTo the element will appear in the middle of the screen.
     * If you omit the `on` portion of `attachTo`, the element will still be highlighted, but the tooltip will appear
     * in the middle of the screen, without an arrow pointing to the target.
     * @param {HTMLElement|string} options.attachTo.element An element selector string or a DOM element.
     * @param {string} options.attachTo.on The optional direction to place the Popper tooltip relative to the element.
     *   - Possible string values: 'auto', 'auto-start', 'auto-end', 'top', 'top-start', 'top-end', 'bottom', 'bottom-start', 'bottom-end', 'right', 'right-start', 'right-end', 'left', 'left-start', 'left-end'
     * @param {Object} options.advanceOn An action on the page which should advance shepherd to the next step.
     * It should be an object with a string `selector` and an `event` name
     * ```js
     * const step = new Step(tour, {
     *   advanceOn: { selector: '.some .selector-path', event: 'click' },
     *   ...moreOptions
     * });
     * ```
     * `event` doesn’t have to be an event inside the tour, it can be any event fired on any element on the page.
     * You can also always manually advance the Tour by calling `myTour.next()`.
     * @param {function} options.beforeShowPromise A function that returns a promise.
     * When the promise resolves, the rest of the `show` code for the step will execute.
     * @param {Object[]} options.buttons An array of buttons to add to the step. These will be rendered in a
     * footer below the main body text.
     * @param {function} options.buttons.button.action A function executed when the button is clicked on.
     * It is automatically bound to the `tour` the step is associated with, so things like `this.next` will
     * work inside the action.
     * You can use action to skip steps or navigate to specific steps, with something like:
     * ```js
     * action() {
     *   return this.show('some_step_name');
     * }
     * ```
     * @param {string} options.buttons.button.classes Extra classes to apply to the `<a>`
     * @param {boolean} options.buttons.button.disabled Should the button be disabled?
     * @param {string} options.buttons.button.label The aria-label text of the button
     * @param {boolean} options.buttons.button.secondary If true, a shepherd-button-secondary class is applied to the button
     * @param {string} options.buttons.button.text The HTML text of the button
     * @param {boolean} options.canClickTarget A boolean, that when set to false, will set `pointer-events: none` on the target
     * @param {object} options.cancelIcon Options for the cancel icon
     * @param {boolean} options.cancelIcon.enabled Should a cancel “✕” be shown in the header of the step?
     * @param {string} options.cancelIcon.label The label to add for `aria-label`
     * @param {string} options.classes A string of extra classes to add to the step's content element.
     * @param {string} options.highlightClass An extra class to apply to the `attachTo` element when it is
     * highlighted (that is, when its step is active). You can then target that selector in your CSS.
     * @param {string} options.id The string to use as the `id` for the step.
     * @param {number} options.modalOverlayOpeningPadding An amount of padding to add around the modal overlay opening
     * @param {number} options.modalOverlayOpeningRadius An amount of border radius to add around the modal overlay opening
     * @param {object} options.popperOptions Extra options to pass to Popper
     * @param {boolean|Object} options.scrollTo Should the element be scrolled to when this step is shown? If true, uses the default `scrollIntoView`,
     * if an object, passes that object as the params to `scrollIntoView` i.e. `{behavior: 'smooth', block: 'center'}`
     * @param {function} options.scrollToHandler A function that lets you override the default scrollTo behavior and
     * define a custom action to do the scrolling, and possibly other logic.
     * @param {function} options.showOn A function that, when it returns `true`, will show the step.
     * If it returns false, the step will be skipped.
     * @param {string} options.text The text in the body of the step. It can be one of three types:
     * ```
     * - HTML string
     * - `HTMLElement` object
     * - `Function` to be executed when the step is built. It must return one the two options above.
     * ```
     * @param {string} options.title The step's title. It becomes an `h3` at the top of the step. It can be one of two types:
     * ```
     * - HTML string
     * - `Function` to be executed when the step is built. It must return HTML string.
     * ```
     * @param {object} options.when You can define `show`, `hide`, etc events inside `when`. For example:
     * ```js
     * when: {
     *   show: function() {
     *     window.scrollTo(0, 0);
     *   }
     * }
     * ```
     * @return {Step} The newly created Step instance
     */
    constructor(tour, options = {}) {
      super(tour, options);
      this.tour = tour;
      this.classPrefix = this.tour.options ? normalizePrefix(this.tour.options.classPrefix) : '';
      this.styles = tour.styles;
      autoBind(this);

      this._setOptions(options);

      return this;
    }
    /**
     * Cancel the tour
     * Triggers the `cancel` event
     */


    cancel() {
      this.tour.cancel();
      this.trigger('cancel');
    }
    /**
     * Complete the tour
     * Triggers the `complete` event
     */


    complete() {
      this.tour.complete();
      this.trigger('complete');
    }
    /**
     * Remove the step, delete the step's element, and destroy the Popper instance for the step.
     * Triggers `destroy` event
     */


    destroy() {
      if (this.tooltip) {
        this.tooltip.destroy();
        this.tooltip = null;
      }

      if (isHTMLElement$1(this.el) && this.el.parentNode) {
        this.el.parentNode.removeChild(this.el);
        this.el = null;
      }

      this._updateStepTargetOnHide();

      this.trigger('destroy');
    }
    /**
     * Returns the tour for the step
     * @return {Tour} The tour instance
     */


    getTour() {
      return this.tour;
    }
    /**
     * Hide the step
     */


    hide() {
      this.tour.modal.hide();
      this.trigger('before-hide');

      if (this.el) {
        this.el.hidden = true;
      }

      this._updateStepTargetOnHide();

      this.trigger('hide');
    }
    /**
     * Checks if the step should be centered or not
     * @return {boolean} True if the step is centered
     */


    isCentered() {
      const attachToOptions = parseAttachTo(this);
      return !attachToOptions.element || !attachToOptions.on;
    }
    /**
     * Check if the step is open and visible
     * @return {boolean} True if the step is open and visible
     */


    isOpen() {
      return Boolean(this.el && !this.el.hidden);
    }
    /**
     * Wraps `_show` and ensures `beforeShowPromise` resolves before calling show
     * @return {*|Promise}
     */


    show() {
      if (isFunction(this.options.beforeShowPromise)) {
        const beforeShowPromise = this.options.beforeShowPromise();

        if (!isUndefined(beforeShowPromise)) {
          return beforeShowPromise.then(() => this._show());
        }
      }

      this._show();
    }
    /**
     * Updates the options of the step.
     *
     * @param {Object} options The options for the step
     */


    updateStepOptions(options) {
      Object.assign(this.options, options);

      if (this.shepherdElementComponent) {
        this.shepherdElementComponent.$set({
          step: this
        });
      }
    }
    /**
     * Returns the element for the step
     * @return {HTMLElement|null|undefined} The element instance. undefined if it has never been shown, null if it has been destroyed
     */


    getElement() {
      return this.el;
    }
    /**
     * Returns the target for the step
     * @return {HTMLElement|null|undefined} The element instance. undefined if it has never been shown, null if query string has not been found
     */


    getTarget() {
      return this.target;
    }
    /**
     * Creates Shepherd element for step based on options
     *
     * @return {Element} The DOM element for the step tooltip
     * @private
     */


    _createTooltipContent() {
      const descriptionId = `${this.id}-description`;
      const labelId = `${this.id}-label`;
      this.shepherdElementComponent = new Shepherd_element({
        target: this.tour.options.stepsContainer || document.body,
        props: {
          classPrefix: this.classPrefix,
          descriptionId,
          labelId,
          step: this,
          styles: this.styles
        }
      });
      return this.shepherdElementComponent.getElement();
    }
    /**
     * If a custom scrollToHandler is defined, call that, otherwise do the generic
     * scrollIntoView call.
     *
     * @param {boolean|Object} scrollToOptions If true, uses the default `scrollIntoView`,
     * if an object, passes that object as the params to `scrollIntoView` i.e. `{ behavior: 'smooth', block: 'center' }`
     * @private
     */


    _scrollTo(scrollToOptions) {
      const {
        element
      } = parseAttachTo(this);

      if (isFunction(this.options.scrollToHandler)) {
        this.options.scrollToHandler(element);
      } else if (isElement$1(element) && typeof element.scrollIntoView === 'function') {
        element.scrollIntoView(scrollToOptions);
      }
    }
    /**
     * _getClassOptions gets all possible classes for the step
     * @param {Object} stepOptions The step specific options
     * @returns {String} unique string from array of classes
     * @private
     */


    _getClassOptions(stepOptions) {
      const defaultStepOptions = this.tour && this.tour.options && this.tour.options.defaultStepOptions;
      const stepClasses = stepOptions.classes ? stepOptions.classes : '';
      const defaultStepOptionsClasses = defaultStepOptions && defaultStepOptions.classes ? defaultStepOptions.classes : '';
      const allClasses = [...stepClasses.split(' '), ...defaultStepOptionsClasses.split(' ')];
      const uniqClasses = new Set(allClasses);
      return Array.from(uniqClasses).join(' ').trim();
    }
    /**
     * Sets the options for the step, maps `when` to events, sets up buttons
     * @param {Object} options The options for the step
     * @private
     */


    _setOptions(options = {}) {
      let tourOptions = this.tour && this.tour.options && this.tour.options.defaultStepOptions;
      tourOptions = cjs({}, tourOptions || {});
      this.options = Object.assign({
        arrow: true
      }, tourOptions, options);
      const {
        when
      } = this.options;
      this.options.classes = this._getClassOptions(options);
      this.destroy();
      this.id = this.options.id || `step-${uuid()}`;

      if (when) {
        Object.keys(when).forEach(event => {
          this.on(event, when[event], this);
        });
      }
    }
    /**
     * Create the element and set up the Popper instance
     * @private
     */


    _setupElements() {
      if (!isUndefined(this.el)) {
        this.destroy();
      }

      this.el = this._createTooltipContent();

      if (this.options.advanceOn) {
        bindAdvance(this);
      }

      setupTooltip(this);
    }
    /**
     * Triggers `before-show`, generates the tooltip DOM content,
     * sets up a Popper instance for the tooltip, then triggers `show`.
     * @private
     */


    _show() {
      this.trigger('before-show');

      this._setupElements();

      if (!this.tour.modal) {
        this.tour._setupModal();
      }

      this.tour.modal.setupForStep(this);

      this._styleTargetElementForStep(this);

      this.el.hidden = false; // start scrolling to target before showing the step

      if (this.options.scrollTo) {
        setTimeout(() => {
          this._scrollTo(this.options.scrollTo);
        });
      }

      this.el.hidden = false;
      const content = this.shepherdElementComponent.getElement();
      const target = this.target || document.body;
      target.classList.add(`${this.classPrefix}shepherd-enabled`);
      target.classList.add(`${this.classPrefix}shepherd-target`);
      content.classList.add('shepherd-enabled');
      this.trigger('show');
    }
    /**
     * Modulates the styles of the passed step's target element, based on the step's options and
     * the tour's `modal` option, to visually emphasize the element
     *
     * @param step The step object that attaches to the element
     * @private
     */


    _styleTargetElementForStep(step) {
      const targetElement = step.target;

      if (!targetElement) {
        return;
      }

      if (step.options.highlightClass) {
        targetElement.classList.add(step.options.highlightClass);
      }

      if (step.options.canClickTarget === false) {
        targetElement.classList.add('shepherd-target-click-disabled');
      }
    }
    /**
     * When a step is hidden, remove the highlightClass and 'shepherd-enabled'
     * and 'shepherd-target' classes
     * @private
     */


    _updateStepTargetOnHide() {
      const target = this.target || document.body;

      if (this.options.highlightClass) {
        target.classList.remove(this.options.highlightClass);
      }

      target.classList.remove('shepherd-target-click-disabled', `${this.classPrefix}shepherd-enabled`, `${this.classPrefix}shepherd-target`);
    }

  }

  /**
   * Cleanup the steps and set pointerEvents back to 'auto'
   * @param tour The tour object
   */
  function cleanupSteps(tour) {
    if (tour) {
      const {
        steps
      } = tour;
      steps.forEach(step => {
        if (step.options && step.options.canClickTarget === false && step.options.attachTo) {
          if (step.target instanceof HTMLElement) {
            step.target.classList.remove('shepherd-target-click-disabled');
          }
        }
      });
    }
  }

  /**
   * Generates the svg path data for a rounded rectangle overlay
   * @param {Object} dimension - Dimensions of rectangle.
   * @param {number} width - Width.
   * @param {number} height - Height.
   * @param {number} [x=0] - Offset from top left corner in x axis. default 0.
   * @param {number} [y=0] - Offset from top left corner in y axis. default 0.
   * @param {number} [r=0] - Corner Radius. Keep this smaller than  half of width or height.
   * @returns {string} - Rounded rectangle overlay path data.
   */
  function makeOverlayPath({
    width,
    height,
    x = 0,
    y = 0,
    r = 0
  }) {
    const {
      innerWidth: w,
      innerHeight: h
    } = window;
    return `M${w},${h}\
H0\
V0\
H${w}\
V${h}\
Z\
M${x + r},${y}\
a${r},${r},0,0,0-${r},${r}\
V${height + y - r}\
a${r},${r},0,0,0,${r},${r}\
H${width + x - r}\
a${r},${r},0,0,0,${r}-${r}\
V${y + r}\
a${r},${r},0,0,0-${r}-${r}\
Z`;
  }

  /* src/js/components/shepherd-modal.svelte generated by Svelte v3.37.0 */

  function create_fragment(ctx) {
    let svg;
    let path;
    let svg_class_value;
    let mounted;
    let dispose;
    return {
      c() {
        svg = svg_element("svg");
        path = svg_element("path");
        attr(path, "d",
        /*pathDefinition*/
        ctx[2]);
        attr(svg, "class", svg_class_value = `${
      /*modalIsVisible*/
      ctx[1] ? "shepherd-modal-is-visible" : ""} shepherd-modal-overlay-container`);
      },

      m(target, anchor) {
        insert(target, svg, anchor);
        append(svg, path);
        /*svg_binding*/

        ctx[11](svg);

        if (!mounted) {
          dispose = listen(svg, "touchmove",
          /*_preventModalOverlayTouch*/
          ctx[3]);
          mounted = true;
        }
      },

      p(ctx, [dirty]) {
        if (dirty &
        /*pathDefinition*/
        4) {
          attr(path, "d",
          /*pathDefinition*/
          ctx[2]);
        }

        if (dirty &
        /*modalIsVisible*/
        2 && svg_class_value !== (svg_class_value = `${
      /*modalIsVisible*/
      ctx[1] ? "shepherd-modal-is-visible" : ""} shepherd-modal-overlay-container`)) {
          attr(svg, "class", svg_class_value);
        }
      },

      i: noop,
      o: noop,

      d(detaching) {
        if (detaching) detach(svg);
        /*svg_binding*/

        ctx[11](null);
        mounted = false;
        dispose();
      }

    };
  }

  function _getScrollParent(element) {
    if (!element) {
      return null;
    }

    const isHtmlElement = element instanceof HTMLElement;
    const overflowY = isHtmlElement && window.getComputedStyle(element).overflowY;
    const isScrollable = overflowY !== "hidden" && overflowY !== "visible";

    if (isScrollable && element.scrollHeight >= element.clientHeight) {
      return element;
    }

    return _getScrollParent(element.parentElement);
  }
  /**
   * Get the visible height of the target element relative to its scrollParent.
   * If there is no scroll parent, the height of the element is returned.
   *
   * @param {HTMLElement} element The target element
   * @param {HTMLElement} [scrollParent] The scrollable parent element
   * @returns {{y: number, height: number}}
   * @private
   */


  function _getVisibleHeight(element, scrollParent) {
    const elementRect = element.getBoundingClientRect();
    let top = elementRect.y || elementRect.top;
    let bottom = elementRect.bottom || top + elementRect.height;

    if (scrollParent) {
      const scrollRect = scrollParent.getBoundingClientRect();
      const scrollTop = scrollRect.y || scrollRect.top;
      const scrollBottom = scrollRect.bottom || scrollTop + scrollRect.height;
      top = Math.max(top, scrollTop);
      bottom = Math.min(bottom, scrollBottom);
    }

    const height = Math.max(bottom - top, 0); // Default to 0 if height is negative

    return {
      y: top,
      height
    };
  }

  function instance($$self, $$props, $$invalidate) {
    let {
      element
    } = $$props,
        {
      openingProperties
    } = $$props;
    uuid();
    let modalIsVisible = false;
    let rafId = undefined;
    let pathDefinition;
    closeModalOpening();

    const getElement = () => element;

    function closeModalOpening() {
      $$invalidate(4, openingProperties = {
        width: 0,
        height: 0,
        x: 0,
        y: 0,
        r: 0
      });
    }

    function hide() {
      $$invalidate(1, modalIsVisible = false); // Ensure we cleanup all event listeners when we hide the modal

      _cleanupStepEventListeners();
    }

    function positionModal(modalOverlayOpeningPadding = 0, modalOverlayOpeningRadius = 0, scrollParent, targetElement) {
      if (targetElement) {
        const {
          y,
          height
        } = _getVisibleHeight(targetElement, scrollParent);

        const {
          x,
          width,
          left
        } = targetElement.getBoundingClientRect(); // getBoundingClientRect is not consistent. Some browsers use x and y, while others use left and top

        $$invalidate(4, openingProperties = {
          width: width + modalOverlayOpeningPadding * 2,
          height: height + modalOverlayOpeningPadding * 2,
          x: (x || left) - modalOverlayOpeningPadding,
          y: y - modalOverlayOpeningPadding,
          r: modalOverlayOpeningRadius
        });
      } else {
        closeModalOpening();
      }
    }

    function setupForStep(step) {
      // Ensure we move listeners from the previous step, before we setup new ones
      _cleanupStepEventListeners();

      if (step.tour.options.useModalOverlay) {
        _styleForStep(step);

        show();
      } else {
        hide();
      }
    }

    function show() {
      $$invalidate(1, modalIsVisible = true);
    }

    const _preventModalBodyTouch = e => {
      e.preventDefault();
    };

    const _preventModalOverlayTouch = e => {
      e.stopPropagation();
    };
    /**
    * Add touchmove event listener
    * @private
    */


    function _addStepEventListeners() {
      // Prevents window from moving on touch.
      window.addEventListener("touchmove", _preventModalBodyTouch, {
        passive: false
      });
    }
    /**
    * Cancel the requestAnimationFrame loop and remove touchmove event listeners
    * @private
    */


    function _cleanupStepEventListeners() {
      if (rafId) {
        cancelAnimationFrame(rafId);
        rafId = undefined;
      }

      window.removeEventListener("touchmove", _preventModalBodyTouch, {
        passive: false
      });
    }
    /**
    * Style the modal for the step
    * @param {Step} step The step to style the opening for
    * @private
    */


    function _styleForStep(step) {
      const {
        modalOverlayOpeningPadding,
        modalOverlayOpeningRadius
      } = step.options;

      const scrollParent = _getScrollParent(step.target); // Setup recursive function to call requestAnimationFrame to update the modal opening position


      const rafLoop = () => {
        rafId = undefined;
        positionModal(modalOverlayOpeningPadding, modalOverlayOpeningRadius, scrollParent, step.target);
        rafId = requestAnimationFrame(rafLoop);
      };

      rafLoop();

      _addStepEventListeners();
    }

    function svg_binding($$value) {
      binding_callbacks[$$value ? "unshift" : "push"](() => {
        element = $$value;
        $$invalidate(0, element);
      });
    }

    $$self.$$set = $$props => {
      if ("element" in $$props) $$invalidate(0, element = $$props.element);
      if ("openingProperties" in $$props) $$invalidate(4, openingProperties = $$props.openingProperties);
    };

    $$self.$$.update = () => {
      if ($$self.$$.dirty &
      /*openingProperties*/
      16) {
        $$invalidate(2, pathDefinition = makeOverlayPath(openingProperties));
      }
    };

    return [element, modalIsVisible, pathDefinition, _preventModalOverlayTouch, openingProperties, getElement, closeModalOpening, hide, positionModal, setupForStep, show, svg_binding];
  }

  class Shepherd_modal extends SvelteComponent {
    constructor(options) {
      super();
      init(this, options, instance, create_fragment, safe_not_equal, {
        element: 0,
        openingProperties: 4,
        getElement: 5,
        closeModalOpening: 6,
        hide: 7,
        positionModal: 8,
        setupForStep: 9,
        show: 10
      });
    }

    get getElement() {
      return this.$$.ctx[5];
    }

    get closeModalOpening() {
      return this.$$.ctx[6];
    }

    get hide() {
      return this.$$.ctx[7];
    }

    get positionModal() {
      return this.$$.ctx[8];
    }

    get setupForStep() {
      return this.$$.ctx[9];
    }

    get show() {
      return this.$$.ctx[10];
    }

  }

  const Shepherd = new Evented();
  /**
   * Class representing the site tour
   * @extends {Evented}
   */

  class Tour extends Evented {
    /**
     * @param {Object} options The options for the tour
     * @param {boolean} options.confirmCancel If true, will issue a `window.confirm` before cancelling
     * @param {string} options.confirmCancelMessage The message to display in the confirm dialog
     * @param {string} options.classPrefix The prefix to add to the `shepherd-enabled` and `shepherd-target` class names as well as the `data-shepherd-step-id`.
     * @param {Object} options.defaultStepOptions Default options for Steps ({@link Step#constructor}), created through `addStep`
     * @param {boolean} options.exitOnEsc Exiting the tour with the escape key will be enabled unless this is explicitly
     * set to false.
     * @param {boolean} options.keyboardNavigation Navigating the tour via left and right arrow keys will be enabled
     * unless this is explicitly set to false.
     * @param {HTMLElement} options.stepsContainer An optional container element for the steps.
     * If not set, the steps will be appended to `document.body`.
     * @param {HTMLElement} options.modalContainer An optional container element for the modal.
     * If not set, the modal will be appended to `document.body`.
     * @param {object[] | Step[]} options.steps An array of step options objects or Step instances to initialize the tour with
     * @param {string} options.tourName An optional "name" for the tour. This will be appended to the the tour's
     * dynamically generated `id` property -- which is also set on the `body` element as the `data-shepherd-active-tour` attribute
     * whenever the tour becomes active.
     * @param {boolean} options.useModalOverlay Whether or not steps should be placed above a darkened
     * modal overlay. If true, the overlay will create an opening around the target element so that it
     * can remain interactive
     * @returns {Tour}
     */
    constructor(options = {}) {
      super(options);
      autoBind(this);
      const defaultTourOptions = {
        exitOnEsc: true,
        keyboardNavigation: true
      };
      this.options = Object.assign({}, defaultTourOptions, options);
      this.classPrefix = normalizePrefix(this.options.classPrefix);
      this.steps = [];
      this.addSteps(this.options.steps); // Pass these events onto the global Shepherd object

      const events = ['active', 'cancel', 'complete', 'inactive', 'show', 'start'];
      events.map(event => {
        (e => {
          this.on(e, opts => {
            opts = opts || {};
            opts.tour = this;
            Shepherd.trigger(e, opts);
          });
        })(event);
      });

      this._setTourID();

      return this;
    }
    /**
     * Adds a new step to the tour
     * @param {Object|Step} options An object containing step options or a Step instance
     * @param {number} index The optional index to insert the step at. If undefined, the step
     * is added to the end of the array.
     * @return {Step} The newly added step
     */


    addStep(options, index) {
      let step = options;

      if (!(step instanceof Step)) {
        step = new Step(this, step);
      } else {
        step.tour = this;
      }

      if (!isUndefined(index)) {
        this.steps.splice(index, 0, step);
      } else {
        this.steps.push(step);
      }

      return step;
    }
    /**
     * Add multiple steps to the tour
     * @param {Array<object> | Array<Step>} steps The steps to add to the tour
     */


    addSteps(steps) {
      if (Array.isArray(steps)) {
        steps.forEach(step => {
          this.addStep(step);
        });
      }

      return this;
    }
    /**
     * Go to the previous step in the tour
     */


    back() {
      const index = this.steps.indexOf(this.currentStep);
      this.show(index - 1, false);
    }
    /**
     * Calls _done() triggering the 'cancel' event
     * If `confirmCancel` is true, will show a window.confirm before cancelling
     */


    cancel() {
      if (this.options.confirmCancel) {
        const cancelMessage = this.options.confirmCancelMessage || 'Are you sure you want to stop the tour?';
        const stopTour = window.confirm(cancelMessage);

        if (stopTour) {
          this._done('cancel');
        }
      } else {
        this._done('cancel');
      }
    }
    /**
     * Calls _done() triggering the `complete` event
     */


    complete() {
      this._done('complete');
    }
    /**
     * Gets the step from a given id
     * @param {Number|String} id The id of the step to retrieve
     * @return {Step} The step corresponding to the `id`
     */


    getById(id) {
      return this.steps.find(step => {
        return step.id === id;
      });
    }
    /**
     * Gets the current step
     * @returns {Step|null}
     */


    getCurrentStep() {
      return this.currentStep;
    }
    /**
     * Hide the current step
     */


    hide() {
      const currentStep = this.getCurrentStep();

      if (currentStep) {
        return currentStep.hide();
      }
    }
    /**
     * Check if the tour is active
     * @return {boolean}
     */


    isActive() {
      return Shepherd.activeTour === this;
    }
    /**
     * Go to the next step in the tour
     * If we are at the end, call `complete`
     */


    next() {
      const index = this.steps.indexOf(this.currentStep);

      if (index === this.steps.length - 1) {
        this.complete();
      } else {
        this.show(index + 1, true);
      }
    }
    /**
     * Removes the step from the tour
     * @param {String} name The id for the step to remove
     */


    removeStep(name) {
      const current = this.getCurrentStep(); // Find the step, destroy it and remove it from this.steps

      this.steps.some((step, i) => {
        if (step.id === name) {
          if (step.isOpen()) {
            step.hide();
          }

          step.destroy();
          this.steps.splice(i, 1);
          return true;
        }
      });

      if (current && current.id === name) {
        this.currentStep = undefined; // If we have steps left, show the first one, otherwise just cancel the tour

        this.steps.length ? this.show(0) : this.cancel();
      }
    }
    /**
     * Show a specific step in the tour
     * @param {Number|String} key The key to look up the step by
     * @param {Boolean} forward True if we are going forward, false if backward
     */


    show(key = 0, forward = true) {
      const step = isString(key) ? this.getById(key) : this.steps[key];

      if (step) {
        this._updateStateBeforeShow();

        const shouldSkipStep = isFunction(step.options.showOn) && !step.options.showOn(); // If `showOn` returns false, we want to skip the step, otherwise, show the step like normal

        if (shouldSkipStep) {
          this._skipStep(step, forward);
        } else {
          this.trigger('show', {
            step,
            previous: this.currentStep
          });
          this.currentStep = step;
          step.show();
        }
      }
    }
    /**
     * Start the tour
     */


    start() {
      this.trigger('start'); // Save the focused element before the tour opens

      this.focusedElBeforeOpen = document.activeElement;
      this.currentStep = null;

      this._setupModal();

      this._setupActiveTour();

      this.next();
    }
    /**
     * Called whenever the tour is cancelled or completed, basically anytime we exit the tour
     * @param {String} event The event name to trigger
     * @private
     */


    _done(event) {
      const index = this.steps.indexOf(this.currentStep);

      if (Array.isArray(this.steps)) {
        this.steps.forEach(step => step.destroy());
      }

      cleanupSteps(this);
      this.trigger(event, {
        index
      });
      Shepherd.activeTour = null;
      this.trigger('inactive', {
        tour: this
      });

      if (this.modal) {
        this.modal.hide();
      }

      if (event === 'cancel' || event === 'complete') {
        if (this.modal) {
          const modalContainer = document.querySelector('.shepherd-modal-overlay-container');

          if (modalContainer) {
            modalContainer.remove();
          }
        }
      } // Focus the element that was focused before the tour started


      if (isHTMLElement$1(this.focusedElBeforeOpen)) {
        this.focusedElBeforeOpen.focus();
      }
    }
    /**
     * Make this tour "active"
     * @private
     */


    _setupActiveTour() {
      this.trigger('active', {
        tour: this
      });
      Shepherd.activeTour = this;
    }
    /**
     * _setupModal create the modal container and instance
     * @private
     */


    _setupModal() {
      this.modal = new Shepherd_modal({
        target: this.options.modalContainer || document.body,
        props: {
          classPrefix: this.classPrefix,
          styles: this.styles
        }
      });
    }
    /**
     * Called when `showOn` evaluates to false, to skip the step
     * @param {Step} step The step to skip
     * @param {Boolean} forward True if we are going forward, false if backward
     * @private
     */


    _skipStep(step, forward) {
      const index = this.steps.indexOf(step);
      const nextIndex = forward ? index + 1 : index - 1;
      this.show(nextIndex, forward);
    }
    /**
     * Before showing, hide the current step and if the tour is not
     * already active, call `this._setupActiveTour`.
     * @private
     */


    _updateStateBeforeShow() {
      if (this.currentStep) {
        this.currentStep.hide();
      }

      if (!this.isActive()) {
        this._setupActiveTour();
      }
    }
    /**
     * Sets this.id to `${tourName}--${uuid}`
     * @private
     */


    _setTourID() {
      const tourName = this.options.tourName || 'tour';
      this.id = `${tourName}--${uuid()}`;
    }

  }

  Object.assign(Shepherd, {
    Tour,
    Step
  });

  function styleInject(css, ref) {
    if ( ref === void 0 ) ref = {};
    var insertAt = ref.insertAt;

    if (!css || typeof document === 'undefined') { return; }

    var head = document.head || document.getElementsByTagName('head')[0];
    var style = document.createElement('style');
    style.type = 'text/css';

    if (insertAt === 'top') {
      if (head.firstChild) {
        head.insertBefore(style, head.firstChild);
      } else {
        head.appendChild(style);
      }
    } else {
      head.appendChild(style);
    }

    if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }
  }

  var css_248z$1 = ".shepherd-button{background:#3288e6;border:0;border-radius:3px;color:hsla(0,0%,100%,.75);cursor:pointer;margin-right:.5rem;padding:.5rem 1.5rem;transition:all .5s ease}.shepherd-button:not(:disabled):hover{background:#196fcc;color:hsla(0,0%,100%,.75)}.shepherd-button.shepherd-button-secondary{background:#f1f2f3;color:rgba(0,0,0,.75)}.shepherd-button.shepherd-button-secondary:not(:disabled):hover{background:#d6d9db;color:rgba(0,0,0,.75)}.shepherd-button:disabled{cursor:not-allowed}\n.shepherd-footer{border-bottom-left-radius:5px;border-bottom-right-radius:5px;display:flex;justify-content:flex-end;padding:0 .75rem .75rem}.shepherd-footer .shepherd-button:last-child{margin-right:0}\n.shepherd-cancel-icon{background:transparent;border:none;color:hsla(0,0%,50.2%,.75);font-size:2em;cursor:pointer;font-weight:400;margin:0;padding:0;transition:color .5s ease}.shepherd-cancel-icon:hover{color:rgba(0,0,0,.75)}.shepherd-has-title .shepherd-content .shepherd-cancel-icon{color:hsla(0,0%,50.2%,.75)}.shepherd-has-title .shepherd-content .shepherd-cancel-icon:hover{color:rgba(0,0,0,.75)}\n.shepherd-title{color:rgba(0,0,0,.75);display:flex;font-size:1rem;font-weight:400;flex:1 0 auto;margin:0;padding:0}\n.shepherd-header{align-items:center;border-top-left-radius:5px;border-top-right-radius:5px;display:flex;justify-content:flex-end;line-height:2em;padding:.75rem .75rem 0}.shepherd-has-title .shepherd-content .shepherd-header{background:#e6e6e6;padding:1em}\n.shepherd-text{color:rgba(0,0,0,.75);font-size:1rem;line-height:1.3em;padding:.75em}.shepherd-text p{margin-top:0}.shepherd-text p:last-child{margin-bottom:0}\n.shepherd-content{border-radius:5px;outline:none;padding:0}\n.shepherd-element{background:#fff;border-radius:5px;box-shadow:0 1px 4px rgba(0,0,0,.2);max-width:400px;opacity:0;outline:none;transition:opacity .3s,visibility .3s;visibility:hidden;width:100%;z-index:9999}.shepherd-enabled.shepherd-element{opacity:1;visibility:visible}.shepherd-element[data-popper-reference-hidden]:not(.shepherd-centered){opacity:0;pointer-events:none;visibility:hidden}.shepherd-element,.shepherd-element *,.shepherd-element :after,.shepherd-element :before{box-sizing:border-box}.shepherd-arrow,.shepherd-arrow:before{position:absolute;width:16px;height:16px;z-index:-1}.shepherd-arrow:before{content:\"\";transform:rotate(45deg);background:#fff}.shepherd-element[data-popper-placement^=top]>.shepherd-arrow{bottom:-8px}.shepherd-element[data-popper-placement^=bottom]>.shepherd-arrow{top:-8px}.shepherd-element[data-popper-placement^=left]>.shepherd-arrow{right:-8px}.shepherd-element[data-popper-placement^=right]>.shepherd-arrow{left:-8px}.shepherd-element.shepherd-centered>.shepherd-arrow{opacity:0}.shepherd-element.shepherd-has-title[data-popper-placement^=bottom]>.shepherd-arrow:before{background-color:#e6e6e6}.shepherd-target-click-disabled.shepherd-enabled.shepherd-target,.shepherd-target-click-disabled.shepherd-enabled.shepherd-target *{pointer-events:none}\n.shepherd-modal-overlay-container{height:0;left:0;opacity:0;overflow:hidden;pointer-events:none;position:fixed;top:0;transition:all .3s ease-out,height 0ms .3s,opacity .3s 0ms;width:100vw;z-index:9997}.shepherd-modal-overlay-container.shepherd-modal-is-visible{height:100vh;opacity:.5;transition:all .3s ease-out,height 0s 0s,opacity .3s 0s}.shepherd-modal-overlay-container.shepherd-modal-is-visible path{pointer-events:all}";
  styleInject(css_248z$1);

  var css_248z = "/*\n * Copyright (C) 2022 HERE Europe B.V.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *     http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n *\n * SPDX-License-Identifier: Apache-2.0\n * License-Filename: LICENSE\n */\n#map {\n    position:absolute;\n    left: 0px;\n    top: 0px;\n    width: 100%;\n    height: 100%;\n}\n body {\n     overflow: hidden;\n     font-family: FiraGO,\"Noto Sans JP\",Tahoma,Calibri,Helvetica,Arial,sans-serif;\n     font-size: 16px;\n     font-weight: 400;\n     color: #6d6178;\n }\n\n .page-header{\n    position:absolute;\n    width: 300px;\n    background-color: white;\n    margin: 15px;\n    padding: 16px;\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n }\n\n  #info {\n    position: absolute;\n    background: white;\n    color: #6d6178;\n    margin: 15px;\n    padding: 16px;\n    right: 5px;\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n  }\n\n  .expanded{\n    width: 500px;\n  }\n  .collapsed{\n    cursor: pointer;\n    width: 180px;\n  }\n\n  #switch{\n    position: absolute;\n    bottom: 0px;\n    left: 50%;\n    margin: 10px;\n    padding: 4px;\n    transform: translateX(-115px);\n    background: white;\n  }\n  #overlay-trees .descp, #switch .descp{\n    padding: 0 0 0 5px;\n  }\n\n  .infoicon{\n    cursor: pointer;\n    float: right\n  }\n\n  .btn-group {\n    margin: 5px;\n  }\n  .btn-group button {\n    background-color: #00AFAA;\n    border: 1px solid #00AFAA; \n    color: white; \n    padding: 8px 1px;\n    cursor: pointer;\n    float: left;\n    width: 70px;\n  }\n  \n  .btn-group button:not(:last-child) {\n    border-right: none; /* Prevent double borders */\n  }\n  \n  .btn-group:after {\n    content: \"\";\n    clear: both;\n    display: table;\n  }\n  \n  .btn-group button:hover {\n    background-color: #007c78;\n  }\n\n  .btn-group .active {\n    background-color: #007c78;\n  }\n\n  .line-parent {\n    line-height: 25px;\n  }\n\n  .line-parent .treelabel {\n    display: inline-block;\n    width: 140px;\n  }\n  \n  .line {\n    display: inline-block;\n    border-radius: 50%;\n    width: 5px;\n    height: 5px;\n    margin-right: 10px;\n    margin-bottom: 3px;\n    border:1px solid #333;\n  }\n\n  #trees {\n    margin-left: 15px;\n  }\n\n  .resizeicon{\n    position: absolute;\n    cursor: pointer;\n    width: 24px;\n    height: 24px;\n    top: 5px;\n  }\n\n  .hidden{\n    display: none;\n  }\n\n  #resizetext{\n      position: absolute;\n      left: 60px;\n      top: 8px;\n  }\n\n  .expand{\n      background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAA3NCSVQICAjb4U/gAAAACXBIWXMAAAEWAAABFgGExyN2AAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAADZQTFRF////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAARy+jrgAAABF0Uk5TAAQFBhUkLausra6vsLG90uo1ntoSAAAAa0lEQVQoz73JOxaAIBDF0IAj/oW3/81a6BwFrU15A7/Ud610PUAqW6w9biVBKtJanbhKJbFL0vI4cZGkHcv1OT0b15mvE2d3P1MACNPtz1O7nzGEsXY/w9C6n7ffp3U/bz/Pl4Plbwcz/u0APXwITYhubTcAAAAASUVORK5CYII=');\n  }\n\n  .collapse{\n      background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAABFgAAARYBhMcjdgAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAADBSURBVEiJ5dXBCYMwFIDh/xV1g2zg1clrqw7gEo7hEq+HJhAC6ktKQGggB2P8/oMRRVWpOR5V9f8LiIgTEVcl4OEVWLMiqno5AQdsgPq5Ac70bAGeFSnFzZFfcFMkF3/6aY7k4CPQ+DlaI1b8BTTRvsavXUay8dzIFf4G2pOD0Po9h5EzfDrDk8h0FIHv51+EGyIrwADs0eKcgyeROXJ2YAg3Q2QpwZPIEvD0FPVAV4pHTgf04VrCm6417vVHu2XgA7IgcnnLUJTbAAAAAElFTkSuQmCC');\n  }\n  .shepherd-element {\n    background: none;\n    box-shadow: none;\n  }\n  .shepherd-content {\n      background: white;\n      margin: 13px;\n  }\n  .shepherd-arrow {\n      margin-left: 13px;\n  }\n\n  .last-step .shepherd-arrow {\n    margin-left: 0px;\n    margin-bottom: 13px;\n  }\n\n  .last-step .shepherd-title{\n    flex: auto;\n  }\n\n  .first-step {\n    background: white;\n    max-width: 800px;\n  }\n  .first-step .shepherd-content{\n    background: rgba(255, 255, 255, 0);\n  }\n\n  .shepherd-content .shepherd-text{\n    color: #6D6179;\n  }\n\n  .shepherd-enabled .shepherd-content .shepherd-header {\n    background: rgba(255, 255, 255, 0);\n  }\n\n  .shepherd-content .shepherd-header h3{\n    color: #6D6179;\n    line-height: 20px;\n  }\n\n  .shepherd-content .shepherd-header span{\n    color: #6D6179;\n  }";
  styleInject(css_248z);

  /*
   * Copyright (C) 2022 HERE Europe B.V.
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *     http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *
   * SPDX-License-Identifier: Apache-2.0
   * License-Filename: LICENSE
   */

  function tour() {
      const tour = new Shepherd.Tour({
          useModalOverlay: true,
          cancelIcon: {
            enabled: true
          },
          exitOnEsc: true,
          classes: 'shepherd-theme-custom'
      });
      
      const infoIcons = document.querySelectorAll(".infoicon");
      infoIcons.forEach(function(e){
        e.addEventListener('pointerup', function(i){
          const value = this.getAttribute("value");
          tour.start();
          tour.show(value*1, true);
        });
      });

      tour.addStep({
        title: "<h3>Data sampling with interactive map layers</h3>",
        text:
            "<p>One of the features offered by interactive map layers is data sampling. Data sampling enables clients to efficiently render an excerpt of a very large data set for visual reference and analysis, without the need to retrieve all the data.</p>"+
            "<p>This example includes a cadastral map to explore the trees in maintenance of the city of Amsterdam. Each of the <b>259,431</b> trees is stored as an individual map feature.</p>"+
            "<p>By including the parameter <i>mode=viz</i> the Interactive API is instructed to return the data optimized for visualization. On map zoom levels, where there are too many features, the tiles returned by Interactive API include only a sample with a geographically accurate representation of the data.</p>",
        // attachTo: {
        //   element: ''
        //   on: 'auto'
        // },
        arrow: true,
        classes: "first-step",
        cancelIcon: {
            enabled: true
        },
        buttons: [
            {
                action() {
                    localStorage.setItem('guided-tour-vs', 'yes');
                    return this.cancel();
                },
                text: 'Don\'t show again'
            },
            {
                action() {
                return this.next();
                },
                text: 'Next'
            }
        ]
      });

      
      tour.addStep({
        title: `Filter by tree species.`,
        text: "The species of the tree is stored as a property in each feature. Interactive map layers offer the capability to query selected features using property search. The property search could be combined with spatial requests.",
        attachTo: {
          element: '#overlay-trees',
          on: 'auto'
        },
        cancelIcon: {
            enabled: true
        },
        arrow: true,
        buttons: [
          {
            action() {
              return this.back();
            },
            text: 'Back'
          },
          {
            action() {
              return this.next();
            },
            text: 'Next'
          }
        ]
      });
      
      tour.addStep({
        title: "The visualization mode uses by default 'medium' sampling strength.",
        text: "It is possible to reduce or increase the sampling strength. This affects the number of features returned in each tile, if sampling was required.",
        attachTo: {
          element: '#switch',
          on: 'auto'
        },
        classes: "last-step",
        cancelIcon: {
            enabled: true
        },
        arrow: true,
        buttons: [
          {
            action() {
              return this.back();
            },
            text: 'Back'
          },
          {
            action() {
              return this.next();
            },
            text: 'Done'
          }
        ]
      });
      

      // Initiate the tour
      if(!localStorage.getItem('guided-tour-vs')) {
        tour.start();
        // localStorage.setItem('guided-tour', 'yes');
      }

      document.addEventListener("keydown", event => {
        if (event.key === 'g') {
          tour.cancel();
          tour.start();
        }
      });
  }

  const API_KEY = 'wuhhFoo3HHQ8Bxw68fCZe8iA_J9v4dBnRhSbkAlMup4';

  /*
   * Copyright (C) 2022 HERE Europe B.V.
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *     http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *
   * SPDX-License-Identifier: Apache-2.0
   * License-Filename: LICENSE
   */

  function addIml(map, platform, options, treecolor, treecolorM, treecolorH) {
      const catalogHrn = 'hrn:here:data::olp-here:dh-showcase-amsterdam';
      const layerId = 'trees';
      const service = platform.getIMLService();
      const imlProvider = new H$1.service.iml.Provider(service, catalogHrn, layerId, options);

      const style = imlProvider.getStyle();
      const styleConfig = style.extractConfig(['iml']);

      // low zoom level
      styleConfig.layers.iml.points.draw.points.size = [[1,'1px'], [16,'3px'], [17,'10px'], [18,'20px'], [20,'50px']];
      styleConfig.layers.iml.points.draw.points.color = treecolor;
      styleConfig.layers.iml.filter = { $zoom: { min: 0, max: 16} };

      styleConfig.layers.imlm = {
          data: {source: 'iml', layer: 'hrn:here:data::olp-here:dh-showcase-amsterdam:trees'},
          filter: { $zoom: { min: 16, max: 18} },
          points: {
              filter: {$geometry: 'point'},
              draw: {
                  points: {
                      collide: false, 
                      order: 200, 
                      texture: 'icons/tree.png',
                      color: treecolorM, 
                      size: [[1,'1px'], [16,'3px'], [17,'10px'], [18,'20px'], [20,'50px']]
                  }
              }
          }
      };

      // high zoom level
      styleConfig.layers.imlH = {
          data: {source: 'iml', layer: 'hrn:here:data::olp-here:dh-showcase-amsterdam:trees'},
          filter: { $zoom: { min: 18} },
          points: {
              filter: {$geometry: 'point'},
              draw: {
                  points: {
                      collide: false, 
                      order: 200, 
                      color: treecolorH, 
                      texture: 'icons/tree.png',
                      size: [[1,'1px'], [16,'3px'], [17,'10px'], [18,'20px'], [20,'50px']]
                  }
              }
          }
      };

      style.mergeConfig(styleConfig);

      return new H$1.map.layer.TileLayer(imlProvider);
  }

  const platform = new H$1.service.Platform({
      apikey: API_KEY
  });
  const defaultLayers = platform.createDefaultLayers();

  window.map = new H$1.Map(
      document.getElementById('map'),
      defaultLayers.vector.normal.map,
      {
          center: new H$1.geo.Point(52.36745, 4.90399),
          zoom: 12
      }
  );
  new H$1.mapevents.Behavior(new H$1.mapevents.MapEvents(map));

  var species = "All";
  var sampling = "med";
  var color = "rgba(200, 254, 182, 0.1)";
  var colorM = "rgba(200, 254, 182, 0.3)";
  var colorH = "rgba(200, 254, 182, 0.6)";
  var imlLayer = addIml(map, platform, {parameters: {
      mode: "viz",
      vizSampling: sampling
  }}, color, colorM, colorH);
  map.addLayer(imlLayer);
  window.addEventListener('resize', () => {
      map.getViewPort().resize();
  });

  const clusteringSwitch = document.querySelectorAll('.btn-group button');
  document.querySelector('.page-header p');
  clusteringSwitch.forEach(button => {
    button.addEventListener('click', (e)=>{
      clusteringSwitch.forEach(b=>b.classList.remove('active'));
      e.target.classList.add('active');


      if(e.target.value == sampling) return;

      sampling = e.target.getAttribute('value');

      map.removeLayer(imlLayer);
      var params =  {parameters: {
          mode: "viz",
          vizSampling: sampling
      }};
      if(species != "All") {
          params.parameters['p.Categorie'] = species;
      }

      imlLayer = addIml(map, platform, params, color, colorM, colorH);
      map.addLayer(imlLayer);
    });
  });

  function setStyle(map){
      // get the vector provider from the base layer
      var provider = map.getBaseLayer().getProvider();
      var style = new H$1.map.Style('dark.yml', document.URL.substr(0,document.URL.lastIndexOf('/')) +  '/');
      // set the style on the existing layer
      provider.setStyle(style);
  }

  const trees = document.querySelectorAll("#overlay-trees input");  
  trees.forEach(s=>{
    s.onclick=(e)=>{
      if(e.target.value == species) return;

      species = e.target.value;
      var rgb = e.target.parentElement.querySelector('.line').style.background;
      var opacity = 0.1;
      var opacityM = 0.3;
      var opacityH = 0.4;
      map.removeLayer(imlLayer);
      var params =  {parameters: {
          mode: "viz",
          vizSampling: sampling
      }};
      if(species != "All") {
          params.parameters['p.Categorie'] = species;
          opacity = 0.3;
          opacityM = 0.5;
          opacityH = 0.6;
      }
      color = rgb.replace('rgb', 'rgba').replace(')', ', ' + opacity + ')');
      colorM = rgb.replace('rgb', 'rgba').replace(')', ', ' + opacityM + ')');
      colorH = rgb.replace('rgb', 'rgba').replace(')', ', ' + opacityH + ')');

      imlLayer = addIml(map, platform, params, color, colorM, colorH);
      map.addLayer(imlLayer);
    };
  });

  setStyle(map);

  const info = document.querySelector("#info");
  const infoResize = document.querySelector(".resizeicon");
  const resizeText = document.querySelector("#resizetext");
  const infoContent = document.querySelector("#content");

  function resizeOnClick(e){
    e.stopPropagation();
    if(info.classList.contains("collapsed")){
      info.classList.remove("collapsed");
      info.classList.add("expanded");
      infoResize.classList.remove("expand");
      infoResize.classList.add("collapse");
    } else {
      if(this.id == "info") return;
      info.classList.remove("expanded");
      info.classList.add("collapsed");
      infoResize.classList.remove("collapse");
      infoResize.classList.add("expand");
    }
    resizeText.classList.toggle("hidden");
    infoContent.classList.toggle("hidden");
    
  }
  info.addEventListener("pointerup", resizeOnClick);
  infoResize.addEventListener("pointerup", resizeOnClick);

  tour();

}));