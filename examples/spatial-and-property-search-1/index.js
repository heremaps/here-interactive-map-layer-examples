(function (factory) {
	typeof define === 'function' && define.amd ? define(factory) :
	factory();
})((function () { 'use strict';

	/*
	 * @here/xyz-maps-common
	 * (c) 2019-2021 HERE
	 */
	var t="undefined"!=typeof window?window:global,e=0,n=function(){function t(t,n,r,i,o,a,s,u){this.id=++e,this.exec=r,i&&(this.init=i),this.delay=0^u,this.name=s,this.time=o||100,this.priority=Math.max(Math.min(0^n,5),1),this.manager=t,a&&(this.onDone=a);}return t.prototype.start=function(t){var e=this;return e._data=t,e.manager.start(e)},t.prototype.restart=function(t){void 0===t&&(t={});var e=this._data;this.cancel(),this.canceled=!1,this.paused=!1,this.delayed=null,this.heap=null,this._data=e,t.init&&(this.init=t.init),t.priority&&(this.priority=t.priority),t.onDone&&(this.onDone=t.onDone),this.start();},t.prototype.init=function(t){return t},t.prototype.cancel=function(){var t=this;return t._data=null,t.manager.cancel(t)},t}();n.prototype.CONTINUE=!0,n.prototype.BREAK=!1,n.prototype.onDone=null,n.prototype.heap=null,n.prototype.paused=!1,n.prototype.delayed=null,n.prototype.yielded=!1,n.prototype.canceled=!1;var r,i=1e3/60,o=0,a=function(){function e(e){this.time=i,this._delayed=null,this.now=Date.now;var n=this;if(n.queue=[[],[],[],[],[],[]],n.id=o++,n.active=!1,e>1&&(n.time=e||i),t.postMessage){var r="tm-"+n.id;t.addEventListener("message",(function(e){e.source==t&&e.data==r&&(e.stopPropagation(),n.runner());}),!0),n._resume=function(){n.active=!0,t.postMessage(r,"*");};}else n._resume=function(){n.active=!0,setTimeout(n.runner.bind(n),0);};}return e.prototype.runner=function(t){var e,n,r,i,o,a,s,u,h,c=this,p=!0;if(t=t||c.now(),c.active){for(;(p=c.now()-t<c.time)&&(c.task=a=c._next());){for(h=!1,s=!1,a.paused?(a.paused=!1,u=a.heap):(r=c.now(),u=a.init(a._data));!s;)if(i=r||c.now(),s=!a.exec(u)||a.canceled,n=(o=c.now())-i,r=null,e=o-t>c.time,c.task=null,!s&&(a.paused||n>=a.time)||e){if(s||(c._insert(c.task=a,!0),a.paused=!0,a.heap=u),e)return s&&!a.canceled&&(a.started=!1,a.onDone&&a.onDone(u)),c._resume();h=!0;break}h||(a.paused=!1,a.heap=null,a.canceled||(a.started=!1,a.onDone&&a.onDone(u)));}if(!p)return c._resume();c.active=!1;}else c._resume();},e.prototype.setExclusiveTime=function(t){this.time=0^t;},e.prototype._next=function(){var e,n=this,r=n.queue,i=r[0][0],o=n.now();if(i&&o>=i.delayed)return n._delayed&&t.clearTimeout(n._delayed),n.queue[0].shift();for(var a=1,s=r.length;a<s;a++)if(e=r[a].shift())return e;i&&(n._delayed&&t.clearTimeout(n._delayed),n._delayed=t.setTimeout((function(){n._delayed=null,n.active=!0,n.runner();}),i.delayed-o));},e.prototype.create=function(t){return new n(this,t.priority,t.exec,t.init,t.time,t.onDone,t.name,t.delay)},e.prototype._insert=function(t,e){var n;if(t.delay){t.delayed=this.now()+t.delay;for(var r=0,i=(n=this.queue[0]).length-1,o=void 0;r<=i;)if(n[o=(r+i)/2|0].delayed>t.delayed)i=o-1;else if(r=o+1,n[o].delayed==t.delayed)break;n.splice(r,0,t);}else n=this.queue[t.priority],e?n.unshift(t):n.push(t);},e.prototype.isWaiting=function(t){return -1!=this.queue[t.delay?0:t.priority].indexOf(t)},e.prototype.start=function(t,e){var n=this.task;t.started||(t.started=!0,t!=n&&(t.canceled=!1,this._insert(t),this.active?n&&n.priority>t.priority&&(n.paused=!0):(this.active=!!e,this.runner())));},e.prototype.cancel=function(t){t.canceled=!0,t.paused=!1,t.started=!1;var e=t==this.task,n=t.delay?0:t.priority,r=this.queue[n],i=r.indexOf(t);return -1!=i&&r.splice(i,1),e&&(this.task=null),e},e}(),s={getInstance:function(t){return r?"number"==typeof t&&(r.time=t):r=this.createInstance(t),r},createInstance:function(t){return this.active=!0,new a(t)},active:!1},u=function(t,e,n){for(var r=-1,i=0;i<t.length;i++)if(t[i][0]==e&&t[i][1]==n){r=i;break}return r},h=function(){function t(t){this._l={},this._sync=!1,this._exec={};for(var e=0;e<t.length;e++)this.addEvent(t[e]);}return t.prototype.addEvent=function(t){this._l[t]||(this._l[t]=[],this._exec[t]=undefined);},t.prototype.sync=function(t){return this._sync=!!t,this},t.prototype.removeEvent=function(t){delete this._l[t];},t.prototype.getEvents=function(){var t=[];for(var e in this._l)t[t.length]=e;return t},t.prototype.get=function(t){var e=this._l[t];return e&&e.slice()},t.prototype.isDefined=function(t){return !!this._l[t]},t.prototype.isListened=function(t){return this._l[t]&&this._l[t].length},t.prototype.add=function(t,e,n){var r=!1;return this._l.hasOwnProperty(t)&&-1==u(this._l[t],e,n)&&(this._l[t].push([e,n]),r=!0),r},t.prototype.remove=function(t,e,n){if(this._l.hasOwnProperty(t)){var r=u(this._l[t],e,n);if(-1!=r)return this._exec[t]--,this._l[t].splice(r,1),!0}return !1},t.prototype.trigger=function(t,e,n,r){var i,o=!1;if(this._l[t]){var a=this._l[t].length;for(this._exec[t]=0;this._exec[t]<a;this._exec[t]++)if(o=!0,i=this._l[t][this._exec[t]]){if(r&&!r(i))continue;var s=i[0],u=i[1];n||this._sync?Array.isArray(e)?s.apply(u,e):s.call(u,e):function(t,e,n){setTimeout((function(){Array.isArray(n)?t.apply(e,n):t.call(e,n);}),0);}(s,u,e);}this._exec[t]=undefined;}return o},t}(),c=function(t,e){this.key=t,this.data=e;};c.prototype.data=null,c.prototype.next=null,c.prototype.prev=null;var p=function(){function t(t){this.length=0,this.head=null,this.tail=null,this.max=t||5e3,this._={},this.tail=null;}return t.prototype.setSize=function(t){if(this.length>t)for(var e=this.length-t;e--;)this.remove(this.tail.key);this.max=t;},t.prototype.get=function(t){var e,n,r;return (e=this._[t])&&(e!=this.head&&(this.tail==e&&(this.tail=e.next),n=e.prev,r=e.next,n&&(n.next=e.next||e),r&&(r.prev=n),(n=this.head)&&(n.next=e),e.prev=this.head,e.next=null,this.head=e),e=e.data),e},t.prototype.toArray=function(){for(var t=[],e=this.tail,n=0;e;)t[n++]=e.data,e=e.next;return t},t.prototype.forEach=function(t){for(var e=this.tail,n=0;e;)t(e.data,n++),e=e.next;},t.prototype.clear=function(){this._={},this.head=null,this.tail=null,this.length=0;},t.prototype.remove=function(t){var e,n,r;return (e=this._[t])&&(n=e.prev,r=e.next,n&&(n.next=r),r&&(r.prev=n),r||(this.head=n),n||(this.tail=r),delete this._[t],e=e.data,this.length--),e},t.prototype.set=function(t,e){var n,r,i;return (n=this._[t])?(n.data=e,n!=this.head&&this.get(t)):(this.length==this.max?(i=this.tail.data,delete this._[this.tail.key],this.tail=this.tail.next,this.tail.prev=null):this.length++,n=new c(t,e),this._[t]=n,(r=this.head)?(n.prev=r,r.next=n):this.tail=n,this.head=n),i},t}(),l=s.getInstance(13),f=function(t,e,n){n=n||l;var r=t.indexOf("["),i=t.lastIndexOf("]"),o=function(e,n){e.grp=20,e.elements.push.apply(e.elements,JSON.parse("["+t.slice(e.start,n)+"]")),e.start=null;};n.create({name:"PJA",priority:4,time:4,onDone:function(n){if(e){var o=void 0,a=n.elements;if(a.length)if(-1!=t.indexOf('"type":"FeatureCollection"')){var s=JSON.parse(t.substr(0,r+1)+t.substr(i));s.features=a,o=s;}else o=a;else o=JSON.parse(t);e(o);}},init:function(){return {i:r,open:0,start:null,len:i,elements:[],grp:20,last:null}},exec:function(e){var n,r,i=e.elements,a=e.len;if(e.i<a){for(;(n=e.i++)<a;)if('"'!=(r=t.charAt(n))){if("{"==r)e.open++,null==e.start&&(e.start=n);else if("}"==r){if(0==--e.open)return --e.grp&&n<a-2||(e.grp=20,i.push.apply(i,JSON.parse("["+t.slice(e.start,e.last=n+1)+"]")),e.start=null),this.CONTINUE}else if(0==e.open&&!isNaN(r)){20!=e.grp&&o(e,n-1);var s=t.substr(n),u=s.search("[0-9](]|,)")+1;i.push(parseFloat(s.substring(0,u))),e.i=n+u;}}else e.i=t.indexOf('"',n+1)+1;20!=e.grp&&null!=e.last&&i.push.apply(i,JSON.parse("["+t.slice(e.last+1,t.lastIndexOf("]"))+"]"));}}}).start();},d$1=function(t,e,n){if(null==n||"object"!=typeof n)return n;if(n.constructor!=Object&&n.constructor!=Array)return n;if(n.constructor==Date||n.constructor==RegExp||n.constructor==Function||n.constructor==String||n.constructor==Number||n.constructor==Boolean)return new n.constructor(n);for(var r in e=e||new n.constructor,n)e[r]=d$1(t,t?e[r]:null,n[r]);return e},y$1=function(t,e){for(var n in e)"constructor"!=n&&(t[n]=e[n]);return t},v$1=function(t){var e,n;if("object"!=typeof t)return t;if(!t)return t;if("[object Array]"===Object.prototype.toString.apply(t)){for(e=[],n=0;n<t.length;n+=1)e[n]=v$1(t[n]);return e}for(n in e={},t)t.hasOwnProperty(n)&&(e[n]=v$1(t[n]));return e},_$1={loglevel:"debug",dump:function(t,e){var n=!!_$1.loglevel,r=Array.prototype.slice.call(arguments),i=r[r.length-1],o=window.console;if(n&&o&&(i in o?r.pop():i="log",!0===n||n===i))if(Function.prototype.bind&&"object"==typeof o.log){var a=Function.prototype.bind.call(o[i],o);a.apply(o,r);}else o[i].apply(o,r);return _$1},extend:function(t,e,n){return "boolean"!=typeof t&&(n=e,e=t,t=!1),d$1(t,e,n)},clone:v$1,createObject:Object.create||function(t){var e=function(){};return e.prototype=t,new e},inheritClass:function(t,e,n){var r=e.prototype,i=t.prototype;for(var o in "object"==typeof e&&(n=e,e.constructor==Object.prototype.constructor&&(e.constructor=function(){t.apply(this,arguments);}),e=e.constructor),e.prototype=_$1.createObject(i),r&&r!=Object.prototype&&y$1(e.prototype,r),t)e[o]=t[o];return n&&y$1(e.prototype,n),e},isFunction:function(t){return "function"==typeof t},isNumeric:function(t){return !isNaN(+t)&&isFinite(t)},isPlainObject:function(t){if(!t||"object"!=typeof t||t.nodeType||t==t.window)return !1;try{if(t.constructor&&!t.hasOwnProperty("constructor")&&!t.constructor.prototype.hasOwnProperty("isPrototypeOf"))return !1}catch(t){return !1}var e;for(e in t);return undefined===e||t.hasOwnProperty(e)},String:{round:function(t,e){return e?Number(t.toFixed(e)):Math.round(t)},random:function(t){t=t||16;for(var e="",n="ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789abcdefghijklmnopqrstuvwxyz",r=n.length,i=0;i<t;i++)e+=n.charAt(Math.random()*r^0);return e}}},g$1=Math.PI/180,M$1=180/Math.PI,m$1={calcBearing:function(t,e){var n,r,i,o,a;return n=Math.PI/180,r=t[1]*n,i=e[1]*n,o=t[0]*n,a=e[0]*n,(Math.atan2(Math.cos(r)*Math.sin(i)-Math.sin(r)*Math.cos(i)*Math.cos(a-o),Math.sin(a-o)*Math.cos(i))/n+360)%360},movePoint:function(t,e,n,r){var i=e/(r=void 0===r?6371e3:r),o=n*g$1,a=t[1]*g$1,s=t[0]*g$1,u=Math.asin(Math.sin(a)*Math.cos(i)+Math.cos(a)*Math.sin(i)*Math.cos(o)),h=s+Math.atan2(Math.sin(o)*Math.sin(i)*Math.cos(a),Math.cos(i)-Math.sin(a)*Math.sin(u));return [(h=(h+3*Math.PI)%(2*Math.PI)-Math.PI)*M$1,u*M$1]},getPointBBox:function(t,e){var n=t[1],r=t[0],i=Math.asin(e/(6371e3*Math.cos(Math.PI*n/180)))*M$1,o=Math.asin(e/6371e3)*M$1;return [r-i,n-o,r+i,n+o]},mergeBBoxes:function(t,e){return t[0]>e[0]&&(t[0]=e[0]),t[1]>e[1]&&(t[1]=e[1]),t[2]<e[2]&&(t[2]=e[2]),t[3]<e[3]&&(t[3]=e[3]),t},extendBBox:function(t,e){var n=Math.abs(Math.asin(e/(6371e3*Math.cos(t[0]*g$1))))*M$1,r=Math.abs(Math.asin(e/(6371e3*Math.cos(t[2]*g$1))))*M$1,i=Math.abs(Math.asin(e/6371e3))*M$1;return [t[0]-n,t[1]-i,t[2]+r,t[3]+i]},distance:function(t,e){var n=g$1*(e[1]-t[1]),r=g$1*(e[0]-t[0]),i=Math.sin(n/2)*Math.sin(n/2)+Math.cos(g$1*t[1])*Math.cos(g$1*e[1])*Math.sin(r/2)*Math.sin(r/2);return 6371e3*(2*Math.atan2(Math.sqrt(i),Math.sqrt(1-i)))}},x$1=function(){function t(t){if(this.size=0,this._=[],t)for(var e=0;e<t.length;e++)this.add(t[e]);}return t.prototype.add=function(t){var e=!this.has(t);return e&&(this.size=this._.push(t)),e},t.prototype.clear=function(){this.size=this._.length=0;},t.prototype.delete=function(t){var e=this._.indexOf(t),n=-1!=e;return n&&(this._.splice(e,1),this.size--),n},t.prototype.has=function(t){return -1!=this._.indexOf(t)},t.prototype.toArray=function(){return this._.slice(0)},t}(),b$1=function(){function t(t){if(this._={},this.size=0,t)for(var e=0;e<t.length;e++)this.set(t[e][0],t[e][1]);}return t.prototype.clear=function(){this.size=0,this._={};},t.prototype.delete=function(t){var e=this.has(t);return e&&(delete this._[t],this.size--),e},t.prototype.get=function(t){return this._[t]},t.prototype.has=function(t){return null!=this._[t]},t.prototype.set=function(t,e){var n=!this.has(t);return n&&(this.size++,this._[t]=e),n},t.prototype.values=function(){var t=this._,e=[];for(var n in t)e[e.length]=t[n];return e},t.prototype.keys=function(){var t=this._,e=[];for(var n in t)e[e.length]=n;return e},t.prototype.forEach=function(t){var e=this._;for(var n in e)t(e[n],n,this);},t}(),O$1=function(){function t(){this.queue=[];}return t.prototype.add=function(t){if("function"==typeof t)return this.queue.push(t)},t.prototype.done=function(t,e,n){for(var r=this.queue;r.length;)r.shift().apply(void 0,arguments);},t}(),w$1=t;"here.xyz.maps".split(".").forEach((function(t){return w$1=w$1[t]=w$1[t]||{}})),t.HERE=t.here;var P$1={LRU:p,TaskManager:s,Listener:h,parseJSONArray:f,JSUtils:_$1,geotools:m$1,global:t,Queue:O$1,Set:x$1,Map:b$1};w$1.common=P$1;

	var xyzMapsCommon_esm_min = /*#__PURE__*/Object.freeze({
		__proto__: null,
		JSUtils: _$1,
		LRU: p,
		Listener: h,
		Map: b$1,
		Queue: O$1,
		Set: x$1,
		Task: n,
		TaskManager: s,
		'default': P$1,
		geotools: m$1,
		global: t,
		parseJSONArray: f
	});

	var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

	function getAugmentedNamespace(n) {
		if (n.__esModule) return n;
		var a = Object.defineProperty({}, '__esModule', {value: true});
		Object.keys(n).forEach(function (k) {
			var d = Object.getOwnPropertyDescriptor(n, k);
			Object.defineProperty(a, k, d.get ? d : {
				enumerable: true,
				get: function () {
					return n[k];
				}
			});
		});
		return a;
	}

	var xyzMapsCore_min = {exports: {}};

	var require$$0 = /*@__PURE__*/getAugmentedNamespace(xyzMapsCommon_esm_min);

	/*
	 * @here/xyz-maps-core
	 * (c) 2019-2021 HERE
	 */

	(function (module, exports) {
	(function (global, factory) {
		module.exports = factory(require$$0) ;
	}(commonjsGlobal, (function (xyzMapsCommon) {
		let shared;
		let worker;

		function define(_, chunk) {
		    if (!shared) {
		        shared = chunk;
		    } else if (!worker) {
		        worker = chunk || _;
		    } else {
		        const workerBundle = 'var shared={};(' + shared + ')(shared);(' + worker + ')(shared);';
		        const sharedExports = {};
		        shared(sharedExports);
		        const xyzMaps = here.xyz.maps;
		        xyzMaps.__workerURL = window.URL.createObjectURL(new Blob([workerBundle], {type: 'text/javascript'}));
		        chunk(xyzMaps, xyzMaps.common, sharedExports);
		    }
		}


		define(["exports"],(function(t){var i=function(){function t(t){this.bO=0,"number"==typeof t&&(t=new ArrayBuffer(t)),this.dV=new DataView(t),this.aB=t;}return t.prototype.setUint16Array=function(t){var i=this.bO,e=t.length;this.dV.setUint32(i,e),new Uint16Array(this.aB,i+4,e).set(t),this.bO+=4+2*e;},t.prototype.setLayer=function(t,i){var e=this.dV,r=this.bO;e.setUint16(r,Number(t)),e.setUint32(r+2,i),this.bO+=6;},t.prototype.setFeature=function(t,i){this.dV.setUint16(this.bO,t),this.bO+=2,this.setUint16Array(i);},t.prototype.getLayers=function(){for(var t=this.dV,i=t.byteLength,e=0,r={};e<i;){var n=t.getUint16(e),s=2*t.getUint32(e+2);e+=6,r[n]={offset:e,length:s,features:null},e+=s;}return r},t.prototype.getFeatures=function(t){if(t.features)return t.features;for(var i=t.features={},e=this.dV,r=this.aB,n=t.offset,s=n+t.length;n<s;){var o=e.getUint16(n),h=e.getUint32(n+2);n+=6,i[o]=new Uint16Array(r,n,h),n+=2*h;}},t.prototype.getBuffer=function(){return this.aB},t}(),e={read:function(t,i,e,r,n){var s,o,h=8*n-r-1,a=(1<<h)-1,u=a>>1,f=-7,p=e?n-1:0,d=e?-1:1,c=t[i+p];for(p+=d,s=c&(1<<-f)-1,c>>=-f,f+=h;f>0;s=256*s+t[i+p],p+=d,f-=8);for(o=s&(1<<-f)-1,s>>=-f,f+=r;f>0;o=256*o+t[i+p],p+=d,f-=8);if(0===s)s=1-u;else {if(s===a)return o?NaN:1/0*(c?-1:1);o+=Math.pow(2,r),s-=u;}return (c?-1:1)*o*Math.pow(2,s-r)},write:function(t,i,e,r,n,s){var o,h,a,u=8*s-n-1,f=(1<<u)-1,p=f>>1,d=23===n?Math.pow(2,-24)-Math.pow(2,-77):0,c=r?0:s-1,l=r?1:-1,y=i<0||0===i&&1/i<0?1:0;for(i=Math.abs(i),isNaN(i)||i===1/0?(h=isNaN(i)?1:0,o=f):(o=Math.floor(Math.log(i)/Math.LN2),i*(a=Math.pow(2,-o))<1&&(o--,a*=2),(i+=o+p>=1?d/a:d*Math.pow(2,1-p))*a>=2&&(o++,a/=2),o+p>=f?(h=0,o=f):o+p>=1?(h=(i*a-1)*Math.pow(2,n),o+=p):(h=i*Math.pow(2,p-1)*Math.pow(2,n),o=0));n>=8;t[e+c]=255&h,c+=l,h/=256,n-=8);for(o=o<<n|h,u+=n;u>0;t[e+c]=255&o,c+=l,o/=256,u-=8);t[e+c-l]|=128*y;}},r=s,n=e;function s(t){this.buf=ArrayBuffer.isView&&ArrayBuffer.isView(t)?t:new Uint8Array(t||0),this.pos=0,this.type=0,this.length=this.buf.length;}s.Varint=0,s.Fixed64=1,s.Bytes=2,s.Fixed32=5;var o=4294967296,h=1/o,a="undefined"==typeof TextDecoder?null:new TextDecoder("utf8");function u(t){return t.type===s.Bytes?t.readVarint()+t.pos:t.pos+1}function f(t,i,e){return e?4294967296*i+(t>>>0):4294967296*(i>>>0)+(t>>>0)}function p(t,i,e){var r=i<=16383?1:i<=2097151?2:i<=268435455?3:Math.floor(Math.log(i)/(7*Math.LN2));e.realloc(r);for(var n=e.pos-1;n>=t;n--)e.buf[n+r]=e.buf[n];}function d(t,i){for(var e=0;e<t.length;e++)i.writeVarint(t[e]);}function c(t,i){for(var e=0;e<t.length;e++)i.writeSVarint(t[e]);}function l(t,i){for(var e=0;e<t.length;e++)i.writeFloat(t[e]);}function y(t,i){for(var e=0;e<t.length;e++)i.writeDouble(t[e]);}function w(t,i){for(var e=0;e<t.length;e++)i.writeBoolean(t[e]);}function v(t,i){for(var e=0;e<t.length;e++)i.writeFixed32(t[e]);}function g(t,i){for(var e=0;e<t.length;e++)i.writeSFixed32(t[e]);}function x(t,i){for(var e=0;e<t.length;e++)i.writeFixed64(t[e]);}function b(t,i){for(var e=0;e<t.length;e++)i.writeSFixed64(t[e]);}function F(t,i){return (t[i]|t[i+1]<<8|t[i+2]<<16)+16777216*t[i+3]}function V(t,i,e){t[e]=i,t[e+1]=i>>>8,t[e+2]=i>>>16,t[e+3]=i>>>24;}function _(t,i){return (t[i]|t[i+1]<<8|t[i+2]<<16)+(t[i+3]<<24)}s.prototype={destroy:function(){this.buf=null;},readFields:function(t,i,e){for(e=e||this.length;this.pos<e;){var r=this.readVarint(),n=r>>3,s=this.pos;this.type=7&r,t(n,i,this),this.pos===s&&this.skip(r);}return i},readMessage:function(t,i){return this.readFields(t,i,this.readVarint()+this.pos)},readFixed32:function(){var t=F(this.buf,this.pos);return this.pos+=4,t},readSFixed32:function(){var t=_(this.buf,this.pos);return this.pos+=4,t},readFixed64:function(){var t=F(this.buf,this.pos)+F(this.buf,this.pos+4)*o;return this.pos+=8,t},readSFixed64:function(){var t=F(this.buf,this.pos)+_(this.buf,this.pos+4)*o;return this.pos+=8,t},readFloat:function(){var t=n.read(this.buf,this.pos,!0,23,4);return this.pos+=4,t},readDouble:function(){var t=n.read(this.buf,this.pos,!0,52,8);return this.pos+=8,t},readVarint:function(t){var i,e,r=this.buf;return i=127&(e=r[this.pos++]),e<128?i:(i|=(127&(e=r[this.pos++]))<<7,e<128?i:(i|=(127&(e=r[this.pos++]))<<14,e<128?i:(i|=(127&(e=r[this.pos++]))<<21,e<128?i:function(t,i,e){var r,n,s=e.buf;if(n=s[e.pos++],r=(112&n)>>4,n<128)return f(t,r,i);if(n=s[e.pos++],r|=(127&n)<<3,n<128)return f(t,r,i);if(n=s[e.pos++],r|=(127&n)<<10,n<128)return f(t,r,i);if(n=s[e.pos++],r|=(127&n)<<17,n<128)return f(t,r,i);if(n=s[e.pos++],r|=(127&n)<<24,n<128)return f(t,r,i);if(n=s[e.pos++],r|=(1&n)<<31,n<128)return f(t,r,i);throw new Error("Expected varint not more than 10 bytes")}(i|=(15&(e=r[this.pos]))<<28,t,this))))},readVarint64:function(){return this.readVarint(!0)},readSVarint:function(){var t=this.readVarint();return t%2==1?(t+1)/-2:t/2},readBoolean:function(){return Boolean(this.readVarint())},readString:function(){var t=this.readVarint()+this.pos,i=this.pos;return this.pos=t,t-i>=12&&a?function(t,i,e){return a.decode(t.subarray(i,e))}(this.buf,i,t):function(t,i,e){var r="",n=i;for(;n<e;){var s,o,h,a=t[n],u=null,f=a>239?4:a>223?3:a>191?2:1;if(n+f>e)break;1===f?a<128&&(u=a):2===f?128==(192&(s=t[n+1]))&&(u=(31&a)<<6|63&s)<=127&&(u=null):3===f?(s=t[n+1],o=t[n+2],128==(192&s)&&128==(192&o)&&((u=(15&a)<<12|(63&s)<<6|63&o)<=2047||u>=55296&&u<=57343)&&(u=null)):4===f&&(s=t[n+1],o=t[n+2],h=t[n+3],128==(192&s)&&128==(192&o)&&128==(192&h)&&((u=(15&a)<<18|(63&s)<<12|(63&o)<<6|63&h)<=65535||u>=1114112)&&(u=null)),null===u?(u=65533,f=1):u>65535&&(u-=65536,r+=String.fromCharCode(u>>>10&1023|55296),u=56320|1023&u),r+=String.fromCharCode(u),n+=f;}return r}(this.buf,i,t)},readBytes:function(){var t=this.readVarint()+this.pos,i=this.buf.subarray(this.pos,t);return this.pos=t,i},readPackedVarint:function(t,i){if(this.type!==s.Bytes)return t.push(this.readVarint(i));var e=u(this);for(t=t||[];this.pos<e;)t.push(this.readVarint(i));return t},readPackedSVarint:function(t){if(this.type!==s.Bytes)return t.push(this.readSVarint());var i=u(this);for(t=t||[];this.pos<i;)t.push(this.readSVarint());return t},readPackedBoolean:function(t){if(this.type!==s.Bytes)return t.push(this.readBoolean());var i=u(this);for(t=t||[];this.pos<i;)t.push(this.readBoolean());return t},readPackedFloat:function(t){if(this.type!==s.Bytes)return t.push(this.readFloat());var i=u(this);for(t=t||[];this.pos<i;)t.push(this.readFloat());return t},readPackedDouble:function(t){if(this.type!==s.Bytes)return t.push(this.readDouble());var i=u(this);for(t=t||[];this.pos<i;)t.push(this.readDouble());return t},readPackedFixed32:function(t){if(this.type!==s.Bytes)return t.push(this.readFixed32());var i=u(this);for(t=t||[];this.pos<i;)t.push(this.readFixed32());return t},readPackedSFixed32:function(t){if(this.type!==s.Bytes)return t.push(this.readSFixed32());var i=u(this);for(t=t||[];this.pos<i;)t.push(this.readSFixed32());return t},readPackedFixed64:function(t){if(this.type!==s.Bytes)return t.push(this.readFixed64());var i=u(this);for(t=t||[];this.pos<i;)t.push(this.readFixed64());return t},readPackedSFixed64:function(t){if(this.type!==s.Bytes)return t.push(this.readSFixed64());var i=u(this);for(t=t||[];this.pos<i;)t.push(this.readSFixed64());return t},skip:function(t){var i=7&t;if(i===s.Varint)for(;this.buf[this.pos++]>127;);else if(i===s.Bytes)this.pos=this.readVarint()+this.pos;else if(i===s.Fixed32)this.pos+=4;else {if(i!==s.Fixed64)throw new Error("Unimplemented type: "+i);this.pos+=8;}},writeTag:function(t,i){this.writeVarint(t<<3|i);},realloc:function(t){for(var i=this.length||16;i<this.pos+t;)i*=2;if(i!==this.length){var e=new Uint8Array(i);e.set(this.buf),this.buf=e,this.length=i;}},finish:function(){return this.length=this.pos,this.pos=0,this.buf.subarray(0,this.length)},writeFixed32:function(t){this.realloc(4),V(this.buf,t,this.pos),this.pos+=4;},writeSFixed32:function(t){this.realloc(4),V(this.buf,t,this.pos),this.pos+=4;},writeFixed64:function(t){this.realloc(8),V(this.buf,-1&t,this.pos),V(this.buf,Math.floor(t*h),this.pos+4),this.pos+=8;},writeSFixed64:function(t){this.realloc(8),V(this.buf,-1&t,this.pos),V(this.buf,Math.floor(t*h),this.pos+4),this.pos+=8;},writeVarint:function(t){(t=+t||0)>268435455||t<0?function(t,i){var e,r;t>=0?(e=t%4294967296|0,r=t/4294967296|0):(r=~(-t/4294967296),4294967295^(e=~(-t%4294967296))?e=e+1|0:(e=0,r=r+1|0));if(t>=0x10000000000000000||t<-0x10000000000000000)throw new Error("Given varint doesn't fit into 10 bytes");i.realloc(10),function(t,i,e){e.buf[e.pos++]=127&t|128,t>>>=7,e.buf[e.pos++]=127&t|128,t>>>=7,e.buf[e.pos++]=127&t|128,t>>>=7,e.buf[e.pos++]=127&t|128,t>>>=7,e.buf[e.pos]=127&t;}(e,0,i),function(t,i){var e=(7&t)<<4;if(i.buf[i.pos++]|=e|((t>>>=3)?128:0),!t)return;if(i.buf[i.pos++]=127&t|((t>>>=7)?128:0),!t)return;if(i.buf[i.pos++]=127&t|((t>>>=7)?128:0),!t)return;if(i.buf[i.pos++]=127&t|((t>>>=7)?128:0),!t)return;if(i.buf[i.pos++]=127&t|((t>>>=7)?128:0),!t)return;i.buf[i.pos++]=127&t;}(r,i);}(t,this):(this.realloc(4),this.buf[this.pos++]=127&t|(t>127?128:0),t<=127||(this.buf[this.pos++]=127&(t>>>=7)|(t>127?128:0),t<=127||(this.buf[this.pos++]=127&(t>>>=7)|(t>127?128:0),t<=127||(this.buf[this.pos++]=t>>>7&127))));},writeSVarint:function(t){this.writeVarint(t<0?2*-t-1:2*t);},writeBoolean:function(t){this.writeVarint(Boolean(t));},writeString:function(t){t=String(t),this.realloc(4*t.length),this.pos++;var i=this.pos;this.pos=function(t,i,e){for(var r,n,s=0;s<i.length;s++){if((r=i.charCodeAt(s))>55295&&r<57344){if(!n){r>56319||s+1===i.length?(t[e++]=239,t[e++]=191,t[e++]=189):n=r;continue}if(r<56320){t[e++]=239,t[e++]=191,t[e++]=189,n=r;continue}r=n-55296<<10|r-56320|65536,n=null;}else n&&(t[e++]=239,t[e++]=191,t[e++]=189,n=null);r<128?t[e++]=r:(r<2048?t[e++]=r>>6|192:(r<65536?t[e++]=r>>12|224:(t[e++]=r>>18|240,t[e++]=r>>12&63|128),t[e++]=r>>6&63|128),t[e++]=63&r|128);}return e}(this.buf,t,this.pos);var e=this.pos-i;e>=128&&p(i,e,this),this.pos=i-1,this.writeVarint(e),this.pos+=e;},writeFloat:function(t){this.realloc(4),n.write(this.buf,t,this.pos,!0,23,4),this.pos+=4;},writeDouble:function(t){this.realloc(8),n.write(this.buf,t,this.pos,!0,52,8),this.pos+=8;},writeBytes:function(t){var i=t.length;this.writeVarint(i),this.realloc(i);for(var e=0;e<i;e++)this.buf[this.pos++]=t[e];},writeRawMessage:function(t,i){this.pos++;var e=this.pos;t(i,this);var r=this.pos-e;r>=128&&p(e,r,this),this.pos=e-1,this.writeVarint(r),this.pos+=r;},writeMessage:function(t,i,e){this.writeTag(t,s.Bytes),this.writeRawMessage(i,e);},writePackedVarint:function(t,i){i.length&&this.writeMessage(t,d,i);},writePackedSVarint:function(t,i){i.length&&this.writeMessage(t,c,i);},writePackedBoolean:function(t,i){i.length&&this.writeMessage(t,w,i);},writePackedFloat:function(t,i){i.length&&this.writeMessage(t,l,i);},writePackedDouble:function(t,i){i.length&&this.writeMessage(t,y,i);},writePackedFixed32:function(t,i){i.length&&this.writeMessage(t,v,i);},writePackedSFixed32:function(t,i){i.length&&this.writeMessage(t,g,i);},writePackedFixed64:function(t,i){i.length&&this.writeMessage(t,x,i);},writePackedSFixed64:function(t,i){i.length&&this.writeMessage(t,b,i);},writeBytesField:function(t,i){this.writeTag(t,s.Bytes),this.writeBytes(i);},writeFixed32Field:function(t,i){this.writeTag(t,s.Fixed32),this.writeFixed32(i);},writeSFixed32Field:function(t,i){this.writeTag(t,s.Fixed32),this.writeSFixed32(i);},writeFixed64Field:function(t,i){this.writeTag(t,s.Fixed64),this.writeFixed64(i);},writeSFixed64Field:function(t,i){this.writeTag(t,s.Fixed64),this.writeSFixed64(i);},writeVarintField:function(t,i){this.writeTag(t,s.Varint),this.writeVarint(i);},writeSVarintField:function(t,i){this.writeTag(t,s.Varint),this.writeSVarint(i);},writeStringField:function(t,i){this.writeTag(t,s.Bytes),this.writeString(i);},writeFloatField:function(t,i){this.writeTag(t,s.Fixed32),this.writeFloat(i);},writeDoubleField:function(t,i){this.writeTag(t,s.Fixed64),this.writeDouble(i);},writeBooleanField:function(t,i){this.writeVarintField(t,Boolean(i));}};var M={},S=B;function B(t,i){this.x=t,this.y=i;}B.prototype={clone:function(){return new B(this.x,this.y)},add:function(t){return this.clone()._add(t)},sub:function(t){return this.clone()._sub(t)},multByPoint:function(t){return this.clone()._multByPoint(t)},divByPoint:function(t){return this.clone()._divByPoint(t)},mult:function(t){return this.clone()._mult(t)},div:function(t){return this.clone()._div(t)},rotate:function(t){return this.clone()._rotate(t)},rotateAround:function(t,i){return this.clone()._rotateAround(t,i)},matMult:function(t){return this.clone()._matMult(t)},unit:function(){return this.clone()._unit()},perp:function(){return this.clone()._perp()},round:function(){return this.clone()._round()},mag:function(){return Math.sqrt(this.x*this.x+this.y*this.y)},equals:function(t){return this.x===t.x&&this.y===t.y},dist:function(t){return Math.sqrt(this.distSqr(t))},distSqr:function(t){var i=t.x-this.x,e=t.y-this.y;return i*i+e*e},angle:function(){return Math.atan2(this.y,this.x)},angleTo:function(t){return Math.atan2(this.y-t.y,this.x-t.x)},angleWith:function(t){return this.angleWithSep(t.x,t.y)},angleWithSep:function(t,i){return Math.atan2(this.x*i-this.y*t,this.x*t+this.y*i)},_matMult:function(t){var i=t[0]*this.x+t[1]*this.y,e=t[2]*this.x+t[3]*this.y;return this.x=i,this.y=e,this},_add:function(t){return this.x+=t.x,this.y+=t.y,this},_sub:function(t){return this.x-=t.x,this.y-=t.y,this},_mult:function(t){return this.x*=t,this.y*=t,this},_div:function(t){return this.x/=t,this.y/=t,this},_multByPoint:function(t){return this.x*=t.x,this.y*=t.y,this},_divByPoint:function(t){return this.x/=t.x,this.y/=t.y,this},_unit:function(){return this._div(this.mag()),this},_perp:function(){var t=this.y;return this.y=this.x,this.x=-t,this},_rotate:function(t){var i=Math.cos(t),e=Math.sin(t),r=i*this.x-e*this.y,n=e*this.x+i*this.y;return this.x=r,this.y=n,this},_rotateAround:function(t,i){var e=Math.cos(t),r=Math.sin(t),n=i.x+e*(this.x-i.x)-r*(this.y-i.y),s=i.y+r*(this.x-i.x)+e*(this.y-i.y);return this.x=n,this.y=s,this},_round:function(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}},B.convert=function(t){return t instanceof B?t:Array.isArray(t)?new B(t[0],t[1]):t};var m=S,k=P;function P(t,i,e,r,n){this.properties={},this.extent=e,this.type=0,this._pbf=t,this._geometry=-1,this._keys=r,this._values=n,t.readFields(T,this,i);}function T(t,i,e){1==t?i.id=e.readVarint():2==t?function(t,i){var e=t.readVarint()+t.pos;for(;t.pos<e;){var r=i._keys[t.readVarint()],n=i._values[t.readVarint()];i.properties[r]=n;}}(e,i):3==t?i.type=e.readVarint():4==t&&(i._geometry=e.pos);}function U(t){for(var i,e,r=0,n=0,s=t.length,o=s-1;n<s;o=n++)i=t[n],r+=((e=t[o]).x-i.x)*(i.y+e.y);return r}P.types=["Unknown","Point","LineString","Polygon"],P.prototype.loadGeometry=function(){var t=this._pbf;t.pos=this._geometry;for(var i,e=t.readVarint()+t.pos,r=1,n=0,s=0,o=0,h=[];t.pos<e;){if(n<=0){var a=t.readVarint();r=7&a,n=a>>3;}if(n--,1===r||2===r)s+=t.readSVarint(),o+=t.readSVarint(),1===r&&(i&&h.push(i),i=[]),i.push(new m(s,o));else {if(7!==r)throw new Error("unknown command "+r);i&&i.push(i[0].clone());}}return i&&h.push(i),h},P.prototype.bbox=function(){var t=this._pbf;t.pos=this._geometry;for(var i=t.readVarint()+t.pos,e=1,r=0,n=0,s=0,o=1/0,h=-1/0,a=1/0,u=-1/0;t.pos<i;){if(r<=0){var f=t.readVarint();e=7&f,r=f>>3;}if(r--,1===e||2===e)(n+=t.readSVarint())<o&&(o=n),n>h&&(h=n),(s+=t.readSVarint())<a&&(a=s),s>u&&(u=s);else if(7!==e)throw new Error("unknown command "+e)}return [o,a,h,u]},P.prototype.toGeoJSON=function(t,i,e){var r,n,s=this.extent*Math.pow(2,e),o=this.extent*t,h=this.extent*i,a=this.loadGeometry(),u=P.types[this.type];function f(t){for(var i=0;i<t.length;i++){var e=t[i],r=180-360*(e.y+h)/s;t[i]=[360*(e.x+o)/s-180,360/Math.PI*Math.atan(Math.exp(r*Math.PI/180))-90];}}switch(this.type){case 1:var p=[];for(r=0;r<a.length;r++)p[r]=a[r][0];f(a=p);break;case 2:for(r=0;r<a.length;r++)f(a[r]);break;case 3:for(a=function(t){var i=t.length;if(i<=1)return [t];for(var e,r,n=[],s=0;s<i;s++){var o=U(t[s]);0!==o&&(void 0===r&&(r=o<0),r===o<0?(e&&n.push(e),e=[t[s]]):e.push(t[s]));}e&&n.push(e);return n}(a),r=0;r<a.length;r++)for(n=0;n<a[r].length;n++)f(a[r][n]);}1===a.length?a=a[0]:u="Multi"+u;var d={type:"Feature",geometry:{type:u,coordinates:a},properties:this.properties};return "id"in this&&(d.id=this.id),d};var A=k,D=N;function N(t,i){this.version=1,this.name=null,this.extent=4096,this.length=0,this._pbf=t,this._keys=[],this._values=[],this._features=[],t.readFields(O,this,i),this.length=this._features.length;}function O(t,i,e){15===t?i.version=e.readVarint():1===t?i.name=e.readString():5===t?i.extent=e.readVarint():2===t?i._features.push(e.pos):3===t?i._keys.push(e.readString()):4===t&&i._values.push(function(t){var i=null,e=t.readVarint()+t.pos;for(;t.pos<e;){var r=t.readVarint()>>3;i=1===r?t.readString():2===r?t.readFloat():3===r?t.readDouble():4===r?t.readVarint64():5===r?t.readVarint():6===r?t.readSVarint():7===r?t.readBoolean():null;}return i}(e));}N.prototype.feature=function(t){if(t<0||t>=this._features.length)throw new Error("feature index out of bounds");this._pbf.pos=this._features[t];var i=this._pbf.readVarint()+this._pbf.pos;return new A(this._pbf,i,this.extent,this._keys,this._values)};var E=D,L=function(t,i){this.layers=t.readFields(q,{},i);};function q(t,i,e){if(3===t){var r=new E(e,e.readVarint()+e.pos);r.length&&(i[r.name]=r);}}var C=M.VectorTile=L;M.VectorTileFeature=k,M.VectorTileLayer=D,t.VectorTile=C,t.XYZBin=i,t.pbf=r,t.vectorTile=M;}));

		define(["./shared"],(function(e){var t={exports:{}};function n(e,t,n){n=n||2;var u,a,s,v,l,h,p,c=t&&t.length,g=c?t[0]*n:e.length,d=r(e,0,g,n,!0),Z=[];if(!d||d.next===d.prev)return Z;if(c&&(d=function(e,t,n,i){var u,a,s,v=[];for(u=0,a=t.length;u<a;u++)(s=r(e,t[u]*i,u<a-1?t[u+1]*i:e.length,i,!1))===s.next&&(s.steiner=!0),v.push(y(s));for(v.sort(o),u=0;u<v.length;u++)n=x(n=f(v[u],n),n.next);return n}(e,t,d,n)),e.length>80*n){u=s=e[0],a=v=e[1];for(var w=n;w<g;w+=n)(l=e[w])<u&&(u=l),(h=e[w+1])<a&&(a=h),l>s&&(s=l),h>v&&(v=h);p=0!==(p=Math.max(s-u,v-a))?1/p:0;}return i(d,Z,n,u,a,p),Z}function r(e,t,n,r,x){var i,u;if(x===k(e,t,n,r)>0)for(i=t;i<n;i+=r)u=z(i,e[i],e[i+1],u);else for(i=n-r;i>=t;i-=r)u=z(i,e[i],e[i+1],u);return u&&d(u,u.next)&&(T(u),u=u.next),u}function x(e,t){if(!e)return e;t||(t=e);var n,r=e;do{if(n=!1,r.steiner||!d(r,r.next)&&0!==g(r.prev,r,r.next))r=r.next;else {if(T(r),(r=t=r.prev)===r.next)break;n=!0;}}while(n||r!==t);return t}function i(e,t,n,r,o,f,l){if(e){!l&&f&&function(e,t,n,r){var x=e;do{null===x.z&&(x.z=h(x.x,x.y,t,n,r)),x.prevZ=x.prev,x.nextZ=x.next,x=x.next;}while(x!==e);x.prevZ.nextZ=null,x.prevZ=null,function(e){var t,n,r,x,i,u,a,s,v=1;do{for(n=e,e=null,i=null,u=0;n;){for(u++,r=n,a=0,t=0;t<v&&(a++,r=r.nextZ);t++);for(s=v;a>0||s>0&&r;)0!==a&&(0===s||!r||n.z<=r.z)?(x=n,n=n.nextZ,a--):(x=r,r=r.nextZ,s--),i?i.nextZ=x:e=x,x.prevZ=i,i=x;n=r;}i.nextZ=null,v*=2;}while(u>1)}(x);}(e,r,o,f);for(var y,p,c=e;e.prev!==e.next;)if(y=e.prev,p=e.next,f?a(e,r,o,f):u(e))t.push(y.i/n),t.push(e.i/n),t.push(p.i/n),T(e),e=p.next,c=p.next;else if((e=p)===c){l?1===l?i(e=s(x(e),t,n),t,n,r,o,f,2):2===l&&v(e,t,n,r,o,f):i(x(e),t,n,r,o,f,1);break}}}function u(e){var t=e.prev,n=e,r=e.next;if(g(t,n,r)>=0)return !1;for(var x=e.next.next;x!==e.prev;){if(p(t.x,t.y,n.x,n.y,r.x,r.y,x.x,x.y)&&g(x.prev,x,x.next)>=0)return !1;x=x.next;}return !0}function a(e,t,n,r){var x=e.prev,i=e,u=e.next;if(g(x,i,u)>=0)return !1;for(var a=x.x<i.x?x.x<u.x?x.x:u.x:i.x<u.x?i.x:u.x,s=x.y<i.y?x.y<u.y?x.y:u.y:i.y<u.y?i.y:u.y,v=x.x>i.x?x.x>u.x?x.x:u.x:i.x>u.x?i.x:u.x,o=x.y>i.y?x.y>u.y?x.y:u.y:i.y>u.y?i.y:u.y,f=h(a,s,t,n,r),l=h(v,o,t,n,r),y=e.prevZ,c=e.nextZ;y&&y.z>=f&&c&&c.z<=l;){if(y!==e.prev&&y!==e.next&&p(x.x,x.y,i.x,i.y,u.x,u.y,y.x,y.y)&&g(y.prev,y,y.next)>=0)return !1;if(y=y.prevZ,c!==e.prev&&c!==e.next&&p(x.x,x.y,i.x,i.y,u.x,u.y,c.x,c.y)&&g(c.prev,c,c.next)>=0)return !1;c=c.nextZ;}for(;y&&y.z>=f;){if(y!==e.prev&&y!==e.next&&p(x.x,x.y,i.x,i.y,u.x,u.y,y.x,y.y)&&g(y.prev,y,y.next)>=0)return !1;y=y.prevZ;}for(;c&&c.z<=l;){if(c!==e.prev&&c!==e.next&&p(x.x,x.y,i.x,i.y,u.x,u.y,c.x,c.y)&&g(c.prev,c,c.next)>=0)return !1;c=c.nextZ;}return !0}function s(e,t,n){var r=e;do{var i=r.prev,u=r.next.next;!d(i,u)&&Z(i,r,r.next,u)&&b(i,u)&&b(u,i)&&(t.push(i.i/n),t.push(r.i/n),t.push(u.i/n),T(r),T(r.next),r=e=u),r=r.next;}while(r!==e);return x(r)}function v(e,t,n,r,u,a){var s=e;do{for(var v=s.next.next;v!==s.prev;){if(s.i!==v.i&&c(s,v)){var o=M(s,v);return s=x(s,s.next),o=x(o,o.next),i(s,t,n,r,u,a),void i(o,t,n,r,u,a)}v=v.next;}s=s.next;}while(s!==e)}function o(e,t){return e.x-t.x}function f(e,t){var n=function(e,t){var n,r=t,x=e.x,i=e.y,u=-1/0;do{if(i<=r.y&&i>=r.next.y&&r.next.y!==r.y){var a=r.x+(i-r.y)*(r.next.x-r.x)/(r.next.y-r.y);if(a<=x&&a>u){if(u=a,a===x){if(i===r.y)return r;if(i===r.next.y)return r.next}n=r.x<r.next.x?r:r.next;}}r=r.next;}while(r!==t);if(!n)return null;if(x===u)return n;var s,v=n,o=n.x,f=n.y,h=1/0;r=n;do{x>=r.x&&r.x>=o&&x!==r.x&&p(i<f?x:u,i,o,f,i<f?u:x,i,r.x,r.y)&&(s=Math.abs(i-r.y)/(x-r.x),b(r,e)&&(s<h||s===h&&(r.x>n.x||r.x===n.x&&l(n,r)))&&(n=r,h=s)),r=r.next;}while(r!==v);return n}(e,t);if(!n)return t;var r=M(n,e),i=x(n,n.next);return x(r,r.next),t===n?i:t}function l(e,t){return g(e.prev,e,t.prev)<0&&g(t.next,e,e.next)<0}function h(e,t,n,r,x){return (e=1431655765&((e=858993459&((e=252645135&((e=16711935&((e=32767*(e-n)*x)|e<<8))|e<<4))|e<<2))|e<<1))|(t=1431655765&((t=858993459&((t=252645135&((t=16711935&((t=32767*(t-r)*x)|t<<8))|t<<4))|t<<2))|t<<1))<<1}function y(e){var t=e,n=e;do{(t.x<n.x||t.x===n.x&&t.y<n.y)&&(n=t),t=t.next;}while(t!==e);return n}function p(e,t,n,r,x,i,u,a){return (x-u)*(t-a)-(e-u)*(i-a)>=0&&(e-u)*(r-a)-(n-u)*(t-a)>=0&&(n-u)*(i-a)-(x-u)*(r-a)>=0}function c(e,t){return e.next.i!==t.i&&e.prev.i!==t.i&&!function(e,t){var n=e;do{if(n.i!==e.i&&n.next.i!==e.i&&n.i!==t.i&&n.next.i!==t.i&&Z(n,n.next,e,t))return !0;n=n.next;}while(n!==e);return !1}(e,t)&&(b(e,t)&&b(t,e)&&function(e,t){var n=e,r=!1,x=(e.x+t.x)/2,i=(e.y+t.y)/2;do{n.y>i!=n.next.y>i&&n.next.y!==n.y&&x<(n.next.x-n.x)*(i-n.y)/(n.next.y-n.y)+n.x&&(r=!r),n=n.next;}while(n!==e);return r}(e,t)&&(g(e.prev,e,t.prev)||g(e,t.prev,t))||d(e,t)&&g(e.prev,e,e.next)>0&&g(t.prev,t,t.next)>0)}function g(e,t,n){return (t.y-e.y)*(n.x-t.x)-(t.x-e.x)*(n.y-t.y)}function d(e,t){return e.x===t.x&&e.y===t.y}function Z(e,t,n,r){var x=m(g(e,t,n)),i=m(g(e,t,r)),u=m(g(n,r,e)),a=m(g(n,r,t));return x!==i&&u!==a||(!(0!==x||!w(e,n,t))||(!(0!==i||!w(e,r,t))||(!(0!==u||!w(n,e,r))||!(0!==a||!w(n,t,r)))))}function w(e,t,n){return t.x<=Math.max(e.x,n.x)&&t.x>=Math.min(e.x,n.x)&&t.y<=Math.max(e.y,n.y)&&t.y>=Math.min(e.y,n.y)}function m(e){return e>0?1:e<0?-1:0}function b(e,t){return g(e.prev,e,e.next)<0?g(e,t,e.next)>=0&&g(e,e.prev,t)>=0:g(e,t,e.prev)<0||g(e,e.next,t)<0}function M(e,t){var n=new V(e.i,e.x,e.y),r=new V(t.i,t.x,t.y),x=e.next,i=t.prev;return e.next=t,t.prev=e,n.next=x,x.prev=n,r.next=n,n.prev=r,i.next=r,r.prev=i,r}function z(e,t,n,r){var x=new V(e,t,n);return r?(x.next=r.next,x.prev=r,r.next.prev=x,r.next=x):(x.prev=x,x.next=x),x}function T(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ);}function V(e,t,n){this.i=e,this.x=t,this.y=n,this.prev=null,this.next=null,this.z=null,this.prevZ=null,this.nextZ=null,this.steiner=!1;}function k(e,t,n,r){for(var x=0,i=t,u=n-r;i<n;i+=r)x+=(e[u]-e[i])*(e[i+1]+e[u+1]),u=i;return x}t.exports=n,t.exports.default=n,n.deviation=function(e,t,n,r){var x=t&&t.length,i=x?t[0]*n:e.length,u=Math.abs(k(e,0,i,n));if(x)for(var a=0,s=t.length;a<s;a++){var v=t[a]*n,o=a<s-1?t[a+1]*n:e.length;u-=Math.abs(k(e,v,o,n));}var f=0;for(a=0;a<r.length;a+=3){var l=r[a]*n,h=r[a+1]*n,y=r[a+2]*n;f+=Math.abs((e[l]-e[y])*(e[h+1]-e[l+1])-(e[l]-e[h])*(e[y+1]-e[l+1]));}return 0===u&&0===f?0:Math.abs((f-u)/u)},n.flatten=function(e){for(var t=e[0][0].length,n={vertices:[],holes:[],dimensions:t},r=0,x=0;x<e.length;x++){for(var i=0;i<e[x].length;i++)for(var u=0;u<t;u++)n.vertices.push(e[x][i][u]);x>0&&(r+=e[x-1].length,n.holes.push(r));}return n};var L=t.exports,E=function(e){var t=e._pbf;t.pos=e._geometry;for(var n,r=t.readVarint()+t.pos,x=1,i=0,u=0,a=0,s=[];t.pos<r;){if(i<=0){var v=t.readVarint();x=7&v,i=v>>3;}if(i--,1===x||2===x)u+=t.readSVarint(),a+=t.readSVarint(),1===x&&(n&&s.push(n),n=[]),n.push([u,a]);else {if(7!==x)throw new Error("unknown command "+x);n&&n.push(n[0].slice());}}return n&&s.push(n),s};function S(e){var t=e.length;if(t<=1)return [e];for(var n,r,x=[],i=0;i<t;i++){var u=B(e[i]);0!==u&&(void 0===r&&(r=u<0),r===u<0?(n&&x.push(n),n=[e[i]]):n.push(e[i]));}return n&&x.push(n),x}function B(e){for(var t,n,r=0,x=0,i=e.length,u=i-1;x<i;u=x++)t=e[x],r+=((n=e[u])[0]-t[0])*(t[1]+n[1]);return r}var X=function(e,t){void 0===t&&(t=[]);for(var n=[],r=0,x=0;x<e.length;x++){for(var i=0;i<e[x].length;i++)t[t.length]=e[x][i][0],t[t.length]=e[x][i][1];x>0&&(r+=e[x-1].length,n[n.length]=r);}return {vertices:t,holes:n,dimensions:e[0][0].length}},_=new Map;self.addEventListener("message",(function(t){var n=t.data,r=n.msg,x=n.url;switch(r){case"abort":var i=_.get(x);i&&(i.abort(),_.delete(x));break;case"load":_.set(x,function(e,t,n){var r=new XMLHttpRequest;return r.responseType="arraybuffer",r.onload=function(){if(this.status>=200&&this.status<=226){var e=this.response,n=e.byteLength;t(e,n);}},r.onreadystatechange=function(){4==this.readyState&&(this.status<200||this.status>=300)&&(this.onload=null,0!==this.status&&n&&n({status:this.status,statusText:this.statusText}));},r.open("GET",e,!0),r.send(null),r}(x,(function(t){var r=function(t,n,r,x){var i=new e.VectorTile(new e.pbf(t)),u={},a=0,s=0,v=0;for(var o in i.layers){for(var f=i.layers[o],l=0,h=u[a++]={length:0,features:{}};l<f.length;){if(3==(q=f.feature(l)).type){for(var y=[],p=[],c=0,g=0,d=S(E(q));g<d.length;g++){var Z=d[g],w=X(Z),m=L(w.vertices,w.holes,w.dimensions);p.push(c);for(var b=0,M=m;b<M.length;b++){var z=M[b];y[y.length]=c+z;}c+=w.vertices.length/w.dimensions;}h.features[l]={tris:y,verts:[],polys:p,holes:[]},h.length+=y.length+2+1;}l++;}h.length&&(v++,s+=2*h.length);}var T=new e.XYZBin(6*v+s);if(s>0)for(var V in u){var k=(h=u[V]).length;if(k){T.setLayer(V,k);var B=h.features;for(var _ in B){var q;m=(q=B[_]).tris,T.setFeature(Number(_),m);}}}return T.getBuffer()}(t,n.x,n.y,n.z);_.delete(x),self.postMessage({msg:"success",url:x,data:t,triangles:r},[t,r]);}),(function(e){_.delete(x),self.postMessage({msg:"error",url:x,data:e});})));}}));}));

		define(["exports","@here/xyz-maps-common","./shared"],(function(t,e,r){function o(t){if(t&&t.__esModule)return t;var e=Object.create(null);return t&&Object.keys(t).forEach((function(r){if("default"!==r){var o=Object.getOwnPropertyDescriptor(t,r);Object.defineProperty(e,r,o.get?o:{enumerable:!0,get:function(){return t[r]}});}})),e.default=t,Object.freeze(e)}var n=o(e),i=function(t,e){return (i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e;}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);})(t,e)};
		/*! *****************************************************************************
		Copyright (c) Microsoft Corporation.

		Permission to use, copy, modify, and/or distribute this software for any
		purpose with or without fee is hereby granted.

		THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
		REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
		AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
		INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
		LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
		OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
		PERFORMANCE OF THIS SOFTWARE.
		***************************************************************************** */function a(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function r(){this.constructor=t;}i(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r);}var s=function(){return (s=Object.assign||function(t){for(var e,r=1,o=arguments.length;r<o;r++)for(var n in e=arguments[r])Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t}).apply(this,arguments)},u=function(t,e){this.x=t,this.y=e;},l=function(t,e,r,o){this.minX=t,this.minY=e,this.maxX=r,this.maxY=o;},p=function(t,e){this.longitude=t,this.latitude=e;},c=function(t,e,r,o){this.minLon=t,this.minLat=e,this.maxLon=r,this.maxLat=o;},h=[{zIndex:0,type:"Circle",radius:6,fill:"#ff0000"}],f=[{zIndex:0,type:"Line",strokeWidth:10,stroke:"#ff0000"}],d=[{zIndex:0,type:"Polygon",strokeWidth:1,stroke:"#ffffff",fill:"#ff0000"}],y={styleGroups:{Point:h,MultiPoint:h,LineString:f,MultiLineString:f,Polygon:d,MultiPolygon:d},assign:function(t){return t.geometry.type}};function v(t,e){for(var r in e)t[r]=e[r];return t}var g,m=[],x=function(){function t(t,e){this.styleGroups=null,this._c=null;var r=function(t,e){if("object"!=typeof t||null===t)return t;for(var o in e=e||(Array.isArray(t)?[]:{}),t)e[o]=r(t[o]);return e};for(var o in t)this[o]="styleGroups"==o?r(t.styleGroups,{}):t[o];this._c=e||{};}return t.prototype.assign=function(t,e){return t.geometry.type},t.prototype.getStyleGroup=function(t,e,r){var o=this._c[t.id];return (null==o||r)&&"object"!=typeof(o=this.assign(t,e))&&(o=this.styleGroups[o]),o},t.prototype.setStyleGroup=function(t,e,r){var o=t.id,n=this._c;return e&&r&&(e=this.merge(this.getStyleGroup(t),e)),e?n[o]=e:null===e||!1===e?e=n[o]=m:n[o]&&delete n[o],e},t.prototype.merge=function(t,e){if(null===e||!1===e)return null;for(var r,o=[],n=0,i=t.length;n<i;n++)r=v({},t[n]),e[n]&&v(r,e[n]),o[n]=r;return o},t}(),_="featureRemove",b="featureAdd",w="featureCoordinatesChange",L="styleGroupChange",T="styleChange",M="clear",P=function(){function t(t){this._p=[],this._sd=null,this._pev=!0,this.__type="Layer",this.margin=20,this.name="",this.min=15,this.max=32,this.levelOffset=0;var r=this,o=t.pointerEvents;for(var n in delete t.pointerEvents,t)r[n]=t[n];r.id==g&&(r.id="L-"+(1e8*Math.random()^0)),r._l=new e.Listener([b,_,w,M,L,"viewportReady",T]),"boolean"==typeof o&&this.pointerEvents(o);var i,a=t.providers||t.provider,s=256,u=function(t,e,o){for(var n=t;n<=e;n++)r._p[n]=o;};if(a instanceof Array)for(var l=0,p=a;l<p.length;l++){var c=p[l];u(c.min,c.max,c.provider);}else {s=this.tileSize?a.size=this.tileSize:Math.max(s,a.size);var h=Number(512==s),f=r.min-h,d=r.max-h;u(f,d,a),r._fp=a,a.minLevel=f,a.maxLevel=d;}this.tileSize||s%256||(this.tileSize=s),this.levelOffset=Math.round(Math.log(this.tileSize)/Math.log(2)-8),r._p.forEach((function(t,e){t&&("FeatureProvider"==t.__type&&(t.addEventListener(b,r._eventProxy,r),t.addEventListener(_,r._eventProxy,r),t.addEventListener(w,r._eventProxy,r)),t.addEventListener(M,r._eventProxy,r));})),r.setMargin(r.getMargin());var v=this._fp&&this._fp.styles;(i=t.style||t.styles||v||y)&&r.setStyle(i),["style","styles","provider","providers"].forEach((function(t){delete r[t];}));}return t.prototype.getProvider=function(t){return t?this._p[Math.floor(t)-this.levelOffset]:this._fp},t.prototype.addEventListener=function(t,e,r){var o=this._l;return o.isDefined(t)?o.add(t,e,r):this._fp&&this._fp.addEventListener(t,e,r)},t.prototype.removeEventListener=function(t,e,r){var o=this._l;return o.isDefined(t)?o.remove(t,e,r):this._fp.removeEventListener(t,e,r)},t.prototype._eventProxy=function(t){var e=t.type,r=t.detail;r.layer=this,e==_&&this.setStyleGroup(r.feature),this._l.trigger(e,t,!0);},t.prototype.dispatchEvent=function(t,e){e.layer=this;var r=new CustomEvent(t,{detail:e});this._l.trigger(t,r,!0);},t.prototype.setFeatureCoordinates=function(t,e){return this._fp.setFeatureCoordinates(t,e)},t.prototype.addFeature=function(t,e){var r=this._fp;if(r.addFeature){var o=r.addFeature(t);return e&&this.setStyleGroup(o,e),o}},t.prototype.removeFeature=function(t){var e=this._fp;if(e.removeFeature)return e.removeFeature(t)},t.prototype.setStyleGroup=function(t,e,r){this._sd&&this.dispatchEvent(L,{feature:t,styleGroup:this._sd.setStyleGroup(t,e,r)});},t.prototype.getStyleGroup=function(t,e,r){return this._sd&&this._sd.getStyleGroup(t,e,r)},t.prototype.search=function(t,e){var r=this._fp;if(r&&r.search)return r.search.apply(this._fp,arguments)},t.prototype.getTile=function(t,e){var r=t.length,o=this._p[r];if(o)return o.getTile(t,e)},t.prototype.cancelTile=function(t,e){var r="string"==typeof t?t.length:t.quadkey.length,o=this._p[r];if(o&&o.cancel)return o.cancel(t,e)},t.prototype.getCachedTile=function(t){var e=t.length,r=this._p[e];if(r)return r.getCachedTile(t)},t.prototype.setStyle=function(t,e){void 0===e&&(e=!1);var r=function(t){return "function"==typeof t};r(t.getStyleGroup)&&r(t.setStyleGroup)||(t=new x(t,e&&this._sd&&this._sd._c)),this._sd=t,this.dispatchEvent(T,{style:t});},t.prototype.getStyle=function(){return this._sd},t.prototype.getMargin=function(){return this.margin},t.prototype.setMargin=function(t){void 0===t&&(t=0),t=Number(t);for(var e=this._p,r=e.length;r--;)e[r]&&e[r].setMargin(t);return this.margin=t},t.prototype.pointerEvents=function(t){return t!=g&&(this._pev=!!t),this._pev},t.prototype.getCopyright=function(t){for(var e,r=this._p.filter((function(t,e,r){return r.indexOf(t)===e})),o=[],n=0,i=function(e){e.length&&o.push.apply(o,e),--n||t&&t(o);};e=r.pop();)e&&e.getCopyright&&(n++,e.getCopyright(i));},t}();P.prototype.modifyFeatureCoordinates=P.prototype.setFeatureCoordinates;var S=function(){function t(t){for(var e in this.withCredentials=!1,this.responseType="",t)this[e]=t[e];}return t.prototype.send=function(t){var e=t.success,r=t.error,o=t.responseType||this.responseType,n=t.headers,i=new XMLHttpRequest,a=t.withCredentials;if(i.withCredentials=null!=a?a:this.withCredentials,i.responseType="json"==o?"text":o,i.onload=function(){var t,r,n=this.responseType;""==n||"text"==n?(r=(t=this.responseText).length,"json"==o&&204!=this.status&&(t=JSON.parse(t))):r=(t=this.response).byteLength,this.status>=200&&this.status<=226&&e(t,r);},i.onreadystatechange=function(){4==this.readyState&&(this.status<200||this.status>=300)&&(this.onload=null,0!==this.status&&r&&r(this));},i.open(t.type||"GET",t.url,!0),n)for(var s in n)i.setRequestHeader(s,n[s]);return i.send(t.data||null),i},t}(),E={},O=/{([xX]|(COL))}/,U=/{([yY]|(ROW))}/,F=/{([zZ]|(LEVEL))}/,B=/{((qk)|(QK)|(quadkey)|(QUADKEY))}/,C=/{SUBDOMAIN_INT_1_4}/,k=/{SUBDOMAIN_INT}/,z=/{SUBDOMAIN_CHAR}/,R=function(t){function e(e){var r=t.call(this,"Service request failed with HTTP status: '"+e.status+" "+e.statusText+"'")||this;r.name="NetworkError";var o=r,n=e.responseType;return o.statusCode=e.status,""!=n&&"text"!=n||(o.responseText=e.responseText||null),r}return a(e,t),e}(Error),q=function(){function t(t){this.withCredentials=!1,this.headers=null,this.store=null,this.baseUrl=null,this.q={};var r=t.responseType||"json",o=t.src||t.url,n=!!t.withCredentials;this.withCredentials=n,this.baseUrl=o,this.headers=e.JSUtils.extend(e.JSUtils.clone(E),t.headers||{}),"function"==typeof o&&(this.getUrl=function(t){return o(t.z,t.y,t.x,t.quadkey)}),this.http=new S({responseType:r,withCredentials:n});}return t.prototype.getUrl=function(t){var e=4*Math.random()^0;return this.baseUrl.replace(C,e+1).replace(k,e).replace(z,"abcd"[e]).replace(B,t.quadkey).replace(F,t.z).replace(O,t.x).replace(U,t.y)},t.prototype.setUrl=function(t){this.baseUrl=t;},t.prototype.load=function(t,r,o){var n,i=this.getUrl(t),a=t.quadkey,s=this.q,u={key:a,url:i,success:r,error:o};"image"==t.type?(u.responseType="blob",u.success=function(t){s[a]=n;var o=new Image;o.onload=function(t){delete s[a],e.global.URL.revokeObjectURL(o.src),n._aborted||r(o);},o.src=e.global.URL.createObjectURL(t);}):("json"==t.type&&(u.success=function(t,e){r("FeatureCollection"==t.type?t.features:t,e);}),u.headers=this.headers),n=this.send(u);},t.prototype.abort=function(t){var e=this.q,r=t.quadkey,o=e[r];o&&("image"==t.type&&(o.onload=undefined,o._aborted=!0),o.abort&&o.abort(),delete e[r]);},t.prototype.send=function(t){var e=t.key||Math.random(),r=this.q,o=t.success;t.success=function(t,n){delete r[e],o(t,n);};var n=t.error;return t.error=function(t){delete r[e],n&&n(new R(t));},r[e]=this.http.send(t)},t}(),D=function(t){function e(e){var r=t.call(this,e)||this;return r.cbs=new Map,r.worker=new Worker(window.here.xyz.maps.__workerURL),r.worker.addEventListener("message",r.receiveMessage.bind(r)),r}return a(e,t),e.prototype.receiveMessage=function(t){var e=t.data;switch(e.msg){case"success":var o=e.url,n=this.cbs.get(o);if(n){this.cbs.delete(o),n.tile;var i=new r.XYZBin(e.triangles),a=i.getLayers();for(var s in a)i.getFeatures(a[s]);n.success({mvt:e.data,xyz:a});}}},e.prototype.load=function(t,e,r){var o=this.getUrl(t);this.cbs.set(o,{tile:t,success:e,error:r}),this.worker.postMessage({msg:"load",url:o,x:t.x,y:t.y,z:t.z});},e.prototype.abort=function(t){var e=this.getUrl(t);this.cbs.get(e)&&(this.cbs.delete(e),this.worker.postMessage({msg:"abort",url:e}));},e}(q),Y=function(){function t(t,e){this._m=0,this.id=t.id,this.properties=t.properties,this.geometry=t.geometry,this.bbox=t.bbox,this._provider=e;}return t.prototype.toJSON=function(){return e.JSUtils.clone({id:this.id,type:this.type,bbox:this.bbox,properties:this.properties,geometry:{type:this.geometry.type,coordinates:this.geometry.coordinates}})},t.prototype.getProvider=function(){return this._provider},t.prototype.getBBox=function(){return this._provider.decBBox(this)},t}();Y.prototype.type="Feature";var I=r.vectorTile.VectorTile,X=r.vectorTile.VectorTileFeature;X.prototype.loadGeometry=function(){var t=this._pbf;t.pos=this._geometry;for(var e,r=t.readVarint()+t.pos,o=1,n=0,i=0,a=0,s=[];t.pos<r;){if(n<=0){var u=t.readVarint();o=7&u,n=u>>3;}if(n--,1===o||2===o)i+=t.readSVarint(),a+=t.readSVarint(),1===o&&(e&&s.push(e),e=[]),e.push([i,a]);else {if(7!==o)throw new Error("unknown command "+o);e&&e.push(e[0].slice());}}return e&&s.push(e),s};var j=e.TaskManager.getInstance(),A=0;function G(t){for(var e,r,o=0,n=0,i=t.length,a=i-1;n<i;a=n++)e=t[n],o+=((r=t[a])[0]-e[0])*(e[1]+r[1]);return o}var N=function(t,e){return 360*t/e-180},J=function(t,e){var r=180-360*t/e;return 360/Math.PI*Math.atan(Math.exp(r*Math.PI/180))-90},Q=function(t,e,r,o,n){var i=t.loadGeometry();switch(t.type){case 1:for(var a=[],s=0;s<i.length;s++)a[s]=i[s][0];n(i=a,e,r,o,t);break;case 2:for(s=0;s<i.length;s++)n(i[s],e,r,o,t);break;case 3:i=function(t){var e=t.length;if(e<=1)return [t];for(var r,o,n=[],i=0;i<e;i++){var a=G(t[i]);0!==a&&(void 0===o&&(o=a<0),o===a<0?(r&&n.push(r),r=[t[i]]):r.push(t[i]));}return r&&n.push(r),n}(i);for(s=0;s<i.length;s++)for(var u=0;u<i[s].length;u++)n(i[s][u],e,r,o,t);}return i};function H(t,e,r){var o=function(t,e,r,o){var n=1/0,i=-n,a=n,s=-a,u=t.extent*(1<<o),l=t.extent*e,p=t.extent*r,c=X.types[t.type];return Q(t,e,r,o,(function(t){for(var e=0,r=t;e<r.length;e++){var o=r[e],u=o[0],l=o[1];u<n&&(n=u),u>i&&(i=u),l<a&&(a=l),l>s&&(s=l);}})).length>1&&(c="Multi"+c),{bbox:[N(n+l,u),J(s+p,u),N(i+l,u),J(a+p,u)],type:c}}(t,e.x,e.y,e.z),n={type:"Feature",geometry:new Z(o.type,t,e),properties:t.properties};return "id"in t&&(n.id=t.id),r&&(n.bbox=o.bbox),n}var V=function(t,e,r,o,n){for(var i=n.extent,a=1<<o,s=0,u=t;s<u.length;s++){var l=u[s];l[0]=(e+l[0]/i)/a,l[1]=(r+l[1]/i)/a;}},Z=function(){function t(t,e,r){this.type=t,this._vtf=e,this.__xyz=r;}return t.prototype._coordinates=function(){var t=this.type,e=this.__xyz,r=e.x,o=e.y,n=e.z,i=Q(this._vtf,r,o,n,V);return "Point"!=t&&"Polygon"!=t&&"LineString"!=t||(i=i[0]),i},Object.defineProperty(t.prototype,"coordinates",{get:function(){var t=this.__xyz,e=t.x,r=t.y,o=t.z;return function(t,e,r,o){var n=t.extent*(1<<o),i=t.extent*e,a=t.extent*r,s=Q(t,e,r,o,(function(t){for(var e=0;e<t.length;e++){var r=t[e],o=N(r[0]+i,n),s=J(r[1]+a,n);t[e]=[o,s];}}));return 1===s.length&&(s=s[0]),s}(this._vtf,e,r,o)},enumerable:!1,configurable:!0}),t}();function K(t){j.create({init:function(){var e=[],o=new I(new r.pbf(t.data.mvt)),n=t.tile;for(var i in o.layers)e.push(i);return {xyz:{x:n.x,y:n.y,z:n.z},mvt:o,xyzLayers:t.data.xyz,layers:e,l:0,f:0,geojson:[]}},priority:4,exec:function(t){for(var e,r,o,n,i=t.mvt,a=t.xyz,s=t.layers,u=t.xyzLayers,l=t.l,p=t.f,c=t.geojson;l<s.length;){for(e=i.layers[s[l]],n={x:a.x,y:a.y,z:a.z,l:e.name};p<e.length;){if("MultiPolygon"==(o=(r=H(e.feature(p),n,!0)).geometry.type)||"Polygon"==o){var h=u[l]&&u[l].features[p];h&&(r.geometry._xyz=h);}if(r.id=++A,p++,null==r.properties.layer&&(r.properties.layer=e.name),c.push(r),!(p%16))return t.f=p,this.CONTINUE}return t.l=++l,t.f=0,this.CONTINUE}return this.BREAK},onDone:function(e){t.ready(e.geojson);}}).start();}var W=Math.PI,$=Array.from({length:33},(function(t,e){return 40075017/256/(1<<e)})),tt=function(t,e){return (t+180)/360*e},et=function(t,e){return (180-180/W*Math.log(Math.tan(W/4+t*W/360)))*e/360},rt=function(t,e){return 360*t/e-180},ot=function(t,e){var r=180-360*t/e;return 360/W*Math.atan(Math.exp(r*W/180))-90},nt={mapSizePixel:function(t,e){return Math.pow(2,e)*t},lon2x:tt,lat2y:et,x2lon:rt,y2lat:ot,pixelToGeo:function(t,e,r){return {longitude:rt(t,r),latitude:ot(e,r)}},geoToPixel:function(t,e,r){return {x:tt(t,r),y:et(e,r)}},meterToPixel:function(t,e){return t/$[e]},pixelToMeter:function(t,e){return t*$[e]},getGroundResolution:function(t){return $[t]}},it=e.global.Math,at=256,st=85.05112878,ut=-85.05112878,lt=function(t,e,r){var o=1<<r;return [it.floor(nt.lon2x(t,o)),it.floor(nt.lat2y(e,o)),r]},pt=function(t){"number"==typeof t&&(t=String(t));for(var e=t.length,r=0,o=0,n=0;n<e;++n)switch(r*=2,o*=2,t[n]){case"1":o++;break;case"3":o++;case"2":r++;}return [e,r,o]},ct=function(t,e,r){for(var o,n="";t-- >0;)n+=(0!=(r&(o=1<<t)))+2*(0!=(e&o));return n},ht=function(t,e,r){var o=at<<t,n=at*r,i=at*e;return [nt.x2lon(n,o),nt.y2lat(i+at,o),nt.x2lon(n+at,o),nt.y2lat(i,o)]},ft=function(t,e){for(var r=[],o=e[1]-t[1]+1,n=e[0]-t[0]+1,i=t[2],a=0;a<o;a++)for(var s=0;s<n;s++)r[r.length]=ct(i,t[1]+a,t[0]+s);return r},dt={geoToGrid:lt,pixelToGrid:function(t,e,r){return [it.floor(t),it.floor(e),r]},quadToGrid:pt,tileXYToQuadKey:ct,getGeoBounds:ht,getTilesOfLevel:function(t,e){var r=[t],o=0,n=r.length,i=t.length;if(e<=i)return [t.substring(0,e)];for(;i<e;){for(;o<n;o++)r.push(r[o]+"0",r[o]+"1",r[o]+"2",r[o]+"3");o=n,n=r.length,i++;}return r.slice(o)},getTilesIds:ft,getTilesInRect:function(t,e,r,o,n){r>=180&&(r=179.999999),t<=-180&&(t=-180),o>=st&&(o=85.05112778),e<ut&&(e=-85.05112778);var i=lt(t,o,n),a=lt(r,e,n);return ft(i,a)}},yt={exports:{}};yt.exports=function(){function t(t,o,n,i,a){!function t(r,o,n,i,a){for(;i>n;){if(i-n>600){var s=i-n+1,u=o-n+1,l=Math.log(s),p=.5*Math.exp(2*l/3),c=.5*Math.sqrt(l*p*(s-p)/s)*(u-s/2<0?-1:1);t(r,o,Math.max(n,Math.floor(o-u*p/s+c)),Math.min(i,Math.floor(o+(s-u)*p/s+c)),a);}var h=r[o],f=n,d=i;for(e(r,n,o),a(r[i],h)>0&&e(r,n,i);f<d;){for(e(r,f,d),f++,d--;a(r[f],h)<0;)f++;for(;a(r[d],h)>0;)d--;}0===a(r[n],h)?e(r,n,d):e(r,++d,i),d<=o&&(n=d+1),o<=d&&(i=d-1);}}(t,o,n||0,i||t.length-1,a||r);}function e(t,e,r){var o=t[e];t[e]=t[r],t[r]=o;}function r(t,e){return t<e?-1:t>e?1:0}var o=function(t){void 0===t&&(t=9),this._maxEntries=Math.max(4,t),this._minEntries=Math.max(2,Math.ceil(.4*this._maxEntries)),this.clear();};function n(t,e,r){if(!r)return e.indexOf(t);for(var o=0;o<e.length;o++)if(r(t,e[o]))return o;return -1}function i(t,e){a(t,0,t.children.length,e,t);}function a(t,e,r,o,n){n||(n=d(null)),n.minX=1/0,n.minY=1/0,n.maxX=-1/0,n.maxY=-1/0;for(var i=e;i<r;i++){var a=t.children[i];s(n,t.leaf?o(a):a);}return n}function s(t,e){return t.minX=Math.min(t.minX,e.minX),t.minY=Math.min(t.minY,e.minY),t.maxX=Math.max(t.maxX,e.maxX),t.maxY=Math.max(t.maxY,e.maxY),t}function u(t,e){return t.minX-e.minX}function l(t,e){return t.minY-e.minY}function p(t){return (t.maxX-t.minX)*(t.maxY-t.minY)}function c(t){return t.maxX-t.minX+(t.maxY-t.minY)}function h(t,e){return t.minX<=e.minX&&t.minY<=e.minY&&e.maxX<=t.maxX&&e.maxY<=t.maxY}function f(t,e){return e.minX<=t.maxX&&e.minY<=t.maxY&&e.maxX>=t.minX&&e.maxY>=t.minY}function d(t){return {children:t,height:1,leaf:!0,minX:1/0,minY:1/0,maxX:-1/0,maxY:-1/0}}function y(e,r,o,n,i){for(var a=[r,o];a.length;)if(!((o=a.pop())-(r=a.pop())<=n)){var s=r+Math.ceil((o-r)/n/2)*n;t(e,s,r,o,i),a.push(r,s,s,o);}}return o.prototype.all=function(){return this._all(this.data,[])},o.prototype.search=function(t){var e=this.data,r=[];if(!f(t,e))return r;for(var o=this.toBBox,n=[];e;){for(var i=0;i<e.children.length;i++){var a=e.children[i],s=e.leaf?o(a):a;f(t,s)&&(e.leaf?r.push(a):h(t,s)?this._all(a,r):n.push(a));}e=n.pop();}return r},o.prototype.collides=function(t){var e=this.data;if(!f(t,e))return !1;for(var r=[];e;){for(var o=0;o<e.children.length;o++){var n=e.children[o],i=e.leaf?this.toBBox(n):n;if(f(t,i)){if(e.leaf||h(t,i))return !0;r.push(n);}}e=r.pop();}return !1},o.prototype.load=function(t){if(!t||!t.length)return this;if(t.length<this._minEntries){for(var e=0;e<t.length;e++)this.insert(t[e]);return this}var r=this._build(t.slice(),0,t.length-1,0);if(this.data.children.length)if(this.data.height===r.height)this._splitRoot(this.data,r);else {if(this.data.height<r.height){var o=this.data;this.data=r,r=o;}this._insert(r,this.data.height-r.height-1,!0);}else this.data=r;return this},o.prototype.insert=function(t){return t&&this._insert(t,this.data.height-1),this},o.prototype.clear=function(){return this.data=d([]),this},o.prototype.remove=function(t,e){if(!t)return this;for(var r,o,i,a=this.data,s=this.toBBox(t),u=[],l=[];a||u.length;){if(a||(a=u.pop(),o=u[u.length-1],r=l.pop(),i=!0),a.leaf){var p=n(t,a.children,e);if(-1!==p)return a.children.splice(p,1),u.push(a),this._condense(u),this}i||a.leaf||!h(a,s)?o?(r++,a=o.children[r],i=!1):a=null:(u.push(a),l.push(r),r=0,o=a,a=a.children[0]);}return this},o.prototype.toBBox=function(t){return t},o.prototype.compareMinX=function(t,e){return t.minX-e.minX},o.prototype.compareMinY=function(t,e){return t.minY-e.minY},o.prototype.toJSON=function(){return this.data},o.prototype.fromJSON=function(t){return this.data=t,this},o.prototype._all=function(t,e){for(var r=[];t;)t.leaf?e.push.apply(e,t.children):r.push.apply(r,t.children),t=r.pop();return e},o.prototype._build=function(t,e,r,o){var n,a=r-e+1,s=this._maxEntries;if(a<=s)return i(n=d(t.slice(e,r+1)),this.toBBox),n;o||(o=Math.ceil(Math.log(a)/Math.log(s)),s=Math.ceil(a/Math.pow(s,o-1))),(n=d([])).leaf=!1,n.height=o;var u=Math.ceil(a/s),l=u*Math.ceil(Math.sqrt(s));y(t,e,r,l,this.compareMinX);for(var p=e;p<=r;p+=l){var c=Math.min(p+l-1,r);y(t,p,c,u,this.compareMinY);for(var h=p;h<=c;h+=u){var f=Math.min(h+u-1,c);n.children.push(this._build(t,h,f,o-1));}}return i(n,this.toBBox),n},o.prototype._chooseSubtree=function(t,e,r,o){for(;o.push(e),!e.leaf&&o.length-1!==r;){for(var n=1/0,i=1/0,a=void 0,s=0;s<e.children.length;s++){var u=e.children[s],l=p(u),c=(h=t,f=u,(Math.max(f.maxX,h.maxX)-Math.min(f.minX,h.minX))*(Math.max(f.maxY,h.maxY)-Math.min(f.minY,h.minY))-l);c<i?(i=c,n=l<n?l:n,a=u):c===i&&l<n&&(n=l,a=u);}e=a||e.children[0];}var h,f;return e},o.prototype._insert=function(t,e,r){var o=r?t:this.toBBox(t),n=[],i=this._chooseSubtree(o,this.data,e,n);for(i.children.push(t),s(i,o);e>=0&&n[e].children.length>this._maxEntries;)this._split(n,e),e--;this._adjustParentBBoxes(o,n,e);},o.prototype._split=function(t,e){var r=t[e],o=r.children.length,n=this._minEntries;this._chooseSplitAxis(r,n,o);var a=this._chooseSplitIndex(r,n,o),s=d(r.children.splice(a,r.children.length-a));s.height=r.height,s.leaf=r.leaf,i(r,this.toBBox),i(s,this.toBBox),e?t[e-1].children.push(s):this._splitRoot(r,s);},o.prototype._splitRoot=function(t,e){this.data=d([t,e]),this.data.height=t.height+1,this.data.leaf=!1,i(this.data,this.toBBox);},o.prototype._chooseSplitIndex=function(t,e,r){for(var o,n,i,s,u,l,c,h=1/0,f=1/0,d=e;d<=r-e;d++){var y=a(t,0,d,this.toBBox),v=a(t,d,r,this.toBBox),g=(n=y,i=v,s=void 0,u=void 0,l=void 0,c=void 0,s=Math.max(n.minX,i.minX),u=Math.max(n.minY,i.minY),l=Math.min(n.maxX,i.maxX),c=Math.min(n.maxY,i.maxY),Math.max(0,l-s)*Math.max(0,c-u)),m=p(y)+p(v);g<h?(h=g,o=d,f=m<f?m:f):g===h&&m<f&&(f=m,o=d);}return o||r-e},o.prototype._chooseSplitAxis=function(t,e,r){var o=t.leaf?this.compareMinX:u,n=t.leaf?this.compareMinY:l;this._allDistMargin(t,e,r,o)<this._allDistMargin(t,e,r,n)&&t.children.sort(o);},o.prototype._allDistMargin=function(t,e,r,o){t.children.sort(o);for(var n=this.toBBox,i=a(t,0,e,n),u=a(t,r-e,r,n),l=c(i)+c(u),p=e;p<r-e;p++){var h=t.children[p];s(i,t.leaf?n(h):h),l+=c(i);}for(var f=r-e-1;f>=e;f--){var d=t.children[f];s(u,t.leaf?n(d):d),l+=c(u);}return l},o.prototype._adjustParentBBoxes=function(t,e,r){for(var o=r;o>=0;o--)s(e[o],t);},o.prototype._condense=function(t){for(var e=t.length-1,r=void 0;e>=0;e--)0===t[e].children.length?e>0?(r=t[e-1].children).splice(r.indexOf(t[e]),1):this.clear():i(t[e],this.toBBox);},o}();var vt=function(t){function e(e){return t.call(this,e)||this}return a(e,t),e.prototype.toBBox=function(t){var e=t.bbox;return {minX:e[0],minY:e[1],maxX:e[2],maxY:e[3]}},e.prototype.compareMinX=function(t,e){return t.bbox[0]-e.bbox[0]},e.prototype.compareMinY=function(t,e){return t.bbox[1]-e.bbox[1]},e}(yt.exports),gt=256,mt=null,xt=function(){function t(t,e,r,o){var n=pt(t);this.quadkey=t,this.z=n[0],this.y=n[1],this.x=n[2],this.type=e,this.bounds=ht(n[0],n[1],n[2]),this.expire=o,this.clipped=r;}return t.prototype.expired=function(t){return (t=t||Date.now())-this.loadStopTs>1e3*this.expire},t.prototype.add=function(t){var e=this.data;e&&-1==e.indexOf(t)&&(e.push(t),this.tree&&this.tree.insert(t));},t.prototype.remove=function(t){var e=this.data.indexOf(t);-1!==e&&(this.data.splice(e,1),this.tree&&this.tree.remove(t));},t.prototype.search=function(t){if(this.data)return this.tree||(this.tree=new vt(9),this.tree.load(this.data)),this.tree.search(t)},t.prototype.isLoaded=function(){return "number"==typeof this.loadStopTs},t.prototype.getContentBounds=function(){if(!this.cbnds){var t=this.bounds,e=this.provider,r=e.margin;if(r){var o=e.size,n=o<<this.z,i=nt.lon2x(t[0],n),a=nt.lat2y(t[1],n);this.cbnds=[nt.x2lon(i-r,n),nt.y2lat(a+r,n),nt.x2lon(i+r+o,n),nt.y2lat(a-r-o,n)];}else this.cbnds=this.bounds;}return this.cbnds},t.prototype.project=function(t,e){var r=gt<<this.z,o=this.x*gt,n=this.y*gt;return [Math.round(nt.lon2x(t,r)-o),Math.round(nt.lat2y(e,r)-n)]},t.prototype.lon2x=function(t,e){void 0===e&&(e=gt);var r=e<<this.z,o=this.x*e;return nt.lon2x(t,r)-o},t.prototype.lat2y=function(t,e){void 0===e&&(e=gt);var r=e<<this.z,o=this.y*e;return nt.lat2y(t,r)-o},t.prototype.isInside=function(t){var e=this.bounds,r=t[0],o=t[1];return r>e[0]&&r<=e[2]&&o>e[1]&&o<=e[3]},t}(),_t=xt.prototype;_t.expire=1/0,_t.error=mt,_t.canvasX=mt,_t.canvasY=mt;var bt=function(t){function e(e,r,o,n){var i=t.call(this,e,r,o,n)||this;return i.s=1<<i.z,i}return a(e,t),e.prototype.lon2x=function(t,e){return void 0===e&&(e=256),(t*this.s-this.x)*e},e.prototype.lat2y=function(t,e){return void 0===e&&(e=256),(t*this.s-this.y)*e},e.prototype.isInside=function(t){var e=t[0]*this.s-this.x,r=t[1]*this.s-this.y;return !(e<0||e>1||r<0||r>1)},e}(xt),wt=function(){function t(t,r,o){this.lvl=t,this.main="object"==typeof r?r:new e.LRU(r||256),this.sub="object"==typeof o?o:new e.LRU(r||1024);}return t.prototype.forEach=function(t){this.main.forEach(t),this.sub.forEach(t);},t.prototype.clear=function(){this.main.clear(),this.sub.clear();},t.prototype.getCache=function(t){return t==this.lvl?this.main:this.sub},t.prototype.remove=function(t){this.getCache(t.z).remove(t.quadkey);},t.prototype.get=function(t){return this.getCache(t.length).get(t)},t.prototype.set=function(t){var e=this.getCache(t.z).set(t.quadkey,t),r=this._onDrop;e&&r&&r(e);},t.prototype.onDrop=function(t){this._onDrop=t;},t}(),Lt=function(){function t(t){this.margin=0,this.dep={},this.Tile=xt,this.size=256,this.expire=Infinity,this.clipped=!1;var r=this;for(var o in t=t||{})this[o]=t[o];null==this.id&&(this.id="TP-"+(1e6*Math.random()^0)),r.storage=t.storage||new wt(r.level),r.initStorage(r.storage),this.listeners=new e.Listener(["clear","error"]);}return t.prototype.dispatchEvent=function(t,e){e.provider=this;var r=new CustomEvent(t,{detail:e});this.listeners.trigger(t,r,!0);},t.prototype.initStorage=function(t){t.onDrop((function(t){return t.provider._removeTile(t)}));},t.prototype.addEventListener=function(t,e,r){return this.listeners.add(t,e,r)},t.prototype.removeEventListener=function(t,e,r){return this.listeners.remove(t,e,r)},t.prototype.clear=function(t){this.storage.clear();},t.prototype.getCachedTile=function(t){return this.storage.get(t)},t.prototype.setMargin=function(t){void 0===t&&(t=0),this.margin=Number(t),this.storage.forEach((function(t){return t.cbnds=null}));},t.prototype.getCachedTilesOfBBox=function(t,e){var r=t[0],o=t[1],n=t[2],i=t[3],a=[];return e^=0,this.storage.forEach((function(t){var s,u,l,p,c,h,f,d=t.getContentBounds();s=d[0],u=d[2],l=d[1],p=d[3],c=r,h=o,f=i,s<=n&&c<=u&&l<=f&&h<=p&&(!e||t.z==e)&&(a[a.length]=t);})),a},t.prototype.config=function(t){for(var e in t=t||{})this.config[e]=t[e];return this},t.prototype.createTile=function(t){var e=new this.Tile(t,this.dataType,this.clipped,this.expire);return e.provider=this,e},t}();Lt.prototype.__type="Provider";var Tt,Mt=function(t,e){var r,o;e&&((r=t[0])<e[0]&&(e[0]=r),r>e[2]&&(e[2]=r),(o=t[1])<e[1]&&(e[1]=o),o>e[3]&&(e[3]=o));},Pt=function(t,e){for(var r=t.length;r--;)Mt(t[r],e);},St=function(t,e){var r=t.geometry.type,o=t.geometry.coordinates;if("Point"==r)e?Mt(o,e):e=[o[0],o[1],o[0],o[1]];else if(e=e||[1/0,1/0,-1/0,-1/0],"MultiLineString"==r)for(var n=0;n<o.length;n++)Pt(o[n],e);else if("MultiPolygon"==r)for(var i=0;i<o.length;i++)Pt(o[i][0],e);else if("LineString"==r||"MultiPoint"==r)Pt(o,e);else {if("Polygon"!=r)return !1;Pt(o[0],e);}return e},Et={calcBBox:St},Ot="featureRemove",Ut="featureAdd",Ft="featureCoordinatesChange";function Bt(t){this.feature=t;}Bt.prototype.cnt=0;var Ct=function(t){function r(e){var r=t.call(this,e)||this;return r.IDPOOL={},r.dataType="json",r.ignore=!1,r.cnt=0,r.__type="FeatureProvider",r.tree=new vt(9),r.Feature=r.Feature||Y,[Ut,Ot,Ft].forEach((function(t){return r.listeners.addEvent(t)})),r}return a(r,t),r.prototype.isDroppable=function(t){return !0},r.prototype.addFeature=function(t){var e,r,o=this;if("object"==typeof t){if("FeatureCollection"==t.type&&(t=t.features||[]),Array.isArray(t)){for(var n=[],i=0,a=t.length;i<a;i++)n[i]=o.addFeature(t[i]);return n}if(o.isFeatureInstance(t,Y)){var s=t.getProvider();s&&s!=o&&(t=t.toJSON());}if(!1!==(e=o.prepareFeature(t))){if((r=o._insert(e))!=Tt){t=r;for(var u=o.getCachedTilesOfBBox(o.decBBox(t)),l=0,p=void 0;l<u.length;l++)(p=u[l]).add(t),p.z==o.level&&this._mark(t,p);o.tree&&o.tree.insert(t),o.ignore||o.dispatchEvent(Ut,{feature:t,tiles:u});}}else t=null;return t}},r.prototype.addEventListener=function(e,r,o){return t.prototype.addEventListener.call(this,e,r,o)},r.prototype.removeEventListener=function(e,r,o){return t.prototype.removeEventListener.call(this,e,r,o)},r.prototype.all=function(){var t=this;return t.tree?t.tree.all():t._s({minX:-180,maxX:180,minY:-90,maxY:90})},r.prototype.getFeature=function(t){if(this.IDPOOL[t])return this.IDPOOL[t].feature},r.prototype.getFeatures=function(t){t instanceof Array||(t=[t]);for(var e=[],r=0;r<t.length;r++)e[r]=this.getFeature(t[r]);return 1==e.length?e[0]:e},r.prototype.getTile=function(t,e){var r=this,o=r.storage,n=o.get(t);return n===Tt&&(o.set(n=r.createTile(t)),n.loadStartTs=n.loadStopTs=Date.now(),n.data=r.search(n.getContentBounds())),e&&e(n),n},r.prototype.setFilter=function(t){this.filter="function"==typeof t?t:Tt;},r.prototype.getFeatureClass=function(t){return this.Feature},r.prototype.isFeatureInstance=function(t,e){return t instanceof e},r.prototype.createFeature=function(t,e){return new e(t,this)},r.prototype.search=function(t,r){var o,n,i=this;if("object"==typeof t)if(r)for(var a in t)r[a]=t[a];else r=t;var s=r&&r.radius||1;if(t instanceof Array)n=4==t.length?t:e.geotools.getPointBBox(t,s);else {if("number"==typeof t||"string"==typeof t||!t)return i.getFeatures(t);if(t.longitude!=Tt&&t.latitude!=Tt)n=e.geotools.getPointBBox([t.longitude,t.latitude],s);else if(t.minLon!=Tt&&t.minLat!=Tt&&t.maxLon!=Tt&&t.maxLat!=Tt)n=[t.minLon,t.minLat,t.maxLon,t.maxLat];else {if(o=t.point||t.rect||t.viewport)return i.search(o,r);if(t.id||t.ids)return i.getFeatures(t.id||t.ids)}}return n={minX:n[0],minY:n[1],maxX:n[2],maxY:n[3]},i._s(n)},r.prototype.exists=function(t){return this.IDPOOL[t.id]},r.prototype.setFeatureCoordinates=function(t,e){var r=t;if(t=this.getFeature(t.id)){var o=t.getBBox(),n=t.geometry,i=n.coordinates;this.ignore=!0,this.removeFeature(t),n._xyz&&delete n._xyz,n.coordinates=this.encCoord(n.type,e),t.bbox=null,this.addFeature(t),this.ignore=!1,this.dispatchEvent(Ft,{feature:t,prevBBox:o,prevCoordinates:i,provider:this});}else r.geometry.coordinates=e,r.bbox=null,this.updateBBox(r);},r.prototype.removeFeature=function(t){if(t){if("FeatureCollection"==t.type&&(t=t.features),Array.isArray(t)){for(var e=[],r=0,o=t.length;r<o;r++)e[r]=this.removeFeature(t[r]);return e}if(t=this.getFeature(t.id)){for(var n=this.getCachedTilesOfBBox(this.decBBox(t)),i=void 0,a=0;a<n.length;a++)(i=n[a]).isLoaded()&&i.remove(t);this.cnt--,delete this.IDPOOL[t.id],this.tree&&this.tree.remove(t),this.ignore||this.dispatchEvent(Ot,{feature:t,tiles:n});}}return t},r.prototype.clear=function(t){var e,r=this,o=null;if(4==arguments.length&&(t=Array.prototype.slice.call(arguments)),t instanceof Array){o=r.getCachedTilesOfBBox(t,r.level);for(var n=0,i=void 0;n<o.length;n++)i=o[n],r._removeTile(i,!1),o[n]=i.quadkey;}else if(0==arguments.length){var a={},s=r.IDPOOL,u=0;for(var l in r.tree&&r.tree.clear(),s)e=r.getFeature(l),r.isDroppable(e)||(a[l]=new Bt(e),u++,r.tree&&r.tree.insert(e));r.cnt=u,r.dep={},r.IDPOOL=a,Lt.prototype.clear.call(this,t);}r.dispatchEvent("clear",{tiles:o});},r.prototype._insert=function(t,e){var r=t.id,o=null,n=this.getFeatureClass(t),i=this.filter;return i&&!i(t)||(this.IDPOOL[r]===Tt&&(this.cnt++,this.isFeatureInstance(t,n)?t._provider=this:t=this.createFeature(t,n),this.updateBBox(t),this.IDPOOL[r]=new Bt(t),o=t),e&&this._mark(t,e)),o},r.prototype._mark=function(t,e){var r=this.IDPOOL[t.id];r[e.quadkey]||(r.cnt++,r[e.quadkey]=!0);},r.prototype._removeTile=function(t,e){var r,o,n=this,i=t.quadkey;if(r=n.dep[i]){for(var a=0;a<r.length;a++)n.storage.remove(r[a]);delete n.dep[i];}if(n.storage.remove(t),o=t.data)for(a=0;a<o.length;a++)n._dropFeature(o[a],i,e);},r.prototype._dropFeature=function(t,e,r){var o=this,n=o.IDPOOL[t.id];n&&(n[e]&&(n[e]=Tt,n.cnt--),o.isDroppable(t)&&(n.cnt||(o.cnt--,delete o.IDPOOL[t.id],o.tree&&o.tree.remove(t),r&&o.dispatchEvent(Ot,{feature:t}))));},r.prototype._s=function(t){if(this.tree)return this.tree.search(t);var e,r,o=1e8*Math.random()^0,n=this.level;return this.storage.forEach((function(i){if(i.z==n&&i.isLoaded()&&(r=i.search(t)).length)if(e)for(var a=0,s=r;a<s.length;a++){(p=s[a])._m!=o&&(p._m=o,e[e.length]=p);}else for(var u=0,l=e=r;u<l.length;u++){var p;(p=l[u])._m=o;}})),e||[]},r.prototype.encCoord=function(t,e){return e},r.prototype.decCoord=function(t){return t.geometry.coordinates},r.prototype.decBBox=function(t){return t.bbox},r.prototype.prepareFeature=function(t){return t.id==Tt&&(t.id=1e8*Math.random()^0),t.bbox?(6===t.bbox.length&&(t.bbox=[t.bbox[0],t.bbox[1],t.bbox[3],t.bbox[4]]),t):this.updateBBox(t)&&t},r.prototype.updateBBox=function(t){if(!t.bbox){var e=St(t);if(!e)return !1;t.bbox=e,t.geometry._c&&(t.geometry._c=null);}return !0},r}(Lt);Ct.prototype.modifyFeatureCoordinates=Ct.prototype.setFeatureCoordinates;var kt=function(){function t(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];this.executing=0,this.parallel=16,this.q=[],this.lq={},this.src=t;}return t.prototype.exec=function(){for(var t=this,e=t.q;e.length&&t.executing<t.parallel;)t.fire(e.pop(),e.pop(),e.pop());},t.prototype.fire=function(t,e,r,o){var n=this,i=n.src,a=n.lq;o^=0;n.executing++,a[t.quadkey]=[t,e,r,o],i[o].load(t,(function(r,o){n.executing--,delete a[t.quadkey],n.exec(),e(r,o);}),(function(e){r(e),n.executing--,delete a[t.quadkey],n.exec();}));},t.prototype.tile=function(t,e,r){this.q.push(r,e,t),this.exec();},t.prototype.abort=function(t){var e,r,o=this,n=o.q,i=o.lq,a=o.src,s=!0;return -1!==(e=n.indexOf(t))?n.splice(e-2,3):(r=i[t.quadkey])?(o.executing--,delete i[t.quadkey],a[r[3]].abort(t)):s=!1,o.exec(),s},t.prototype.store=function(t,e){var r=this.src;for(var o in r)if(r[o].store){r[o].store(t,e);break}},t.prototype.clear=function(){this.src.forEach((function(t){t.clear&&t.clear();}));},t.prototype.setUrl=function(){var t=this.src;for(var e in t)t[e].setUrl&&t[e].setUrl.apply(t[e],arguments);},t}(),zt=function(){function t(t,e){this.c=0,this.cbs=[],this.qks=e,this.tile=t;}return t.prototype.receive=function(t){var e=this;if(!e.ready){var r=e.tile,o=e.qks,n=o.indexOf(t.quadkey);if(-1!=n&&(o[n]=null,++e.c==o.length)){e.ready=!0,r.processedData=undefined;var i=t.error;i?r.error=i:r.data=r.provider.search(r.getContentBounds()),r.loadStopTs=Date.now(),e.exec(),r.onLoaded.length=0,e.qks=null;}}},t.prototype.exec=function(){for(var t=this.cbs,e=t.length,r=this.tile,o=0;o<e;)t[o++](r,r.error);t.length=0;},t.prototype.add=function(t){var e=this.cbs;if("function"==typeof t&&-1==e.indexOf(t))return e.push(t),!0},t.prototype.remove=function(t){var e=this.cbs,r=e.indexOf(t);return -1!=r&&e.splice(r,1),e.length},t}();zt.prototype.ready=!1;var Rt,qt=function(t){return "function"==typeof t},Dt=function(t){return qt(t)},Yt=function(t){return function(e,r,o){var n={data:e,provider:this,ready:r};o&&(n.tile={x:o.x,y:o.y,z:o.z}),function(t,e){void 0===e&&(e={});var r,o,n=e.ready;r=Dt(t)?t(e):e.data,!(o=r)||"object"!=typeof o&&"function"!=typeof o||"function"!=typeof o.then?void 0!==r&&n(r):r.then(n);}(t,n);}},It=function(t){function e(e){var r=t.call(this,s({minLevel:8,maxLevel:20,staticData:!1},e))||this;r.sizeKB=0;var o=r,n=e.loader;if(!n)throw new Error("no tile loader defined.");n instanceof kt||(n=new kt(n)),o.loader=n;var i=e.preProcessor;return o.preprocess=Yt(i),r}return a(e,t),e.prototype.cancel=function(t,e){var r,o,n=this,i=n.storage,a=e==Rt;if(o=t instanceof this.Tile?t:i.get(t)){t=o.quadkey,r=this.calcStorageQuads(t);for(var s=0,u=void 0,l=void 0;s<r.length;s++)if(u=(l=r[s])==t?o:i.get(l)){var p=u.onLoaded,c=void 0;p&&(a?o.onLoaded.length=0:n.level&&o.z!=n.level?-1!=(c=p.indexOf(o.onLoaded[0]))&&(p[c].remove(e)||p.splice(c,1)):p.splice(p.indexOf(e),1),p.length||n.loader.abort(u)&&i.remove(u));}}},e.prototype.getLoader=function(){return this.loader},e.prototype.config=function(e){return t.prototype.config.call(this,e)},e.prototype.clear=function(e){0==arguments.length&&this.loader.clear(),t.prototype.clear.apply(this,arguments);},e.prototype.calcStorageQuads=function(t){return dt.getTilesOfLevel(t,this.level)},e.prototype.createTile=function(e){var r,o,n=t.prototype.createTile.call(this,e),i=n.z,a=this.level;if(a&&i!=a)if(i>a)r=e.substr(0,a),(o=this.dep[r])||(o=this.dep[r]=[]),o[o.length]=n;else if(i<a)for(var s=dt.getTilesOfLevel(e,a),u=0,l=s.length;u<l;u++)r=s[u],(o=this.dep[r])||(o=this.dep[r]=[]),o[o.length]=n;return n},e.prototype.execTile=function(t){var e,r=t.onLoaded;if(r){for(var o=0,n=r.length;o<n;o++)(e=r[o])instanceof zt?e.receive(t):e(t);r.length=0;}},e.prototype.attachData=function(t,e){for(var r,o,n,i=this,a=[],s=e.length,u=0;u<s;u++)!1!==(r=i.prepareFeature(n=e[u]))?(n=r,(o=i._insert(n,t))?(n=o,a[a.length]=n):i.tree||(a[a.length]=i.getFeature(n.id))):(e.splice(u--,1),s--);if(e=a,t.loadStopTs=Date.now(),i.tree&&i.tree.load(e),t.data=i.clipped?e:i.search(t.getContentBounds()),i.margin)for(var l=0,p=t.data.length;l<p;l++)i._mark(t.data[l],t);i.execTile(t);},e.prototype.getTile=function(t,e){var r,o=this,n=o.storage,i=o.level;if((r=n.get(t))==Rt)(r=o.createTile(t)).onLoaded=[],r.data=[],n.set(r);else if(r.isLoaded())return e&&e(r,r.error),r;if(t.length!=i){var a=o.calcStorageQuads(t),s=void 0,u=void 0;r.loadStartTs=Date.now(),r.onLoaded.length?u=r.onLoaded[0]:(u=new zt(r,a),r.onLoaded.push(u)),u.add(e);for(var l=0;l<a.length;l++)(s=n.get(a[l]))==Rt?s=o.getTile(a[l],u):s.isLoaded()?u.receive(s):-1==s.onLoaded.indexOf(u)&&s.onLoaded.push(u);}else e&&-1==r.onLoaded.indexOf(e)&&r.onLoaded.push(e),r.loadStartTs||(r.loadStartTs=Date.now(),o.loader.tile(r,(function(t,e){o.sizeKB+=e/1024,o.preprocess(t,(function(t){return o.attachData(r,t)}),r);}),(function(t){r.loadStopTs=Date.now(),r.error=t,o.execTile(r),o.listeners.trigger("error",[t],!0);})));return r},e.prototype._removeTile=function(e,r){t.prototype._removeTile.call(this,e,r),e.isLoaded()||this.loader.abort(e);},e}(Ct),Xt=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return a(e,t),e.prototype.getMvtLayer=function(){return this.geometry.__xyz.l},e}(Y),jt=function(t){function r(r){var o=t.call(this,e.JSUtils.extend({loader:r.loader||new D(r),margin:0,Tile:bt,Feature:Xt,preProcessor:K},r))||this;return o.c=null,o.clipped=!0,o.tree=null,o}return a(r,t),r.prototype.decCoord=function(t){return t.geometry._coordinates()},r.prototype.getCopyright=function(t){var r=this,o=r.url;"function"==typeof o&&(o=o(0,0,0,""));var n=(null==o?void 0:o.match)&&o.match(/.*xyz+.*here\.com\/tiles\/[a-zA-Z]+[\.\d]*\//),i=r.c;t&&(null==i?n?((i=new e.Queue).add(t),r.c=i,r.getLoader().src[0].send({url:n+"copyright",responseType:"json",success:function(t){r.c=t,i.done(t);}})):t(r.c=[]):i instanceof e.Queue?i.add(t):t(i));},r}(It),At={backgroundColor:"#555555",strokeWidthZoomScale:function(t){return t>17?1:t>14?.5:.25},styleGroups:{earth:[{zIndex:1,type:"Polygon",fill:"#555555"}],landuse:[{zIndex:2,type:"Polygon",fill:"#666666"}],water:[{zIndex:3,type:"Polygon",fill:"#353535"}],roads:[{zIndex:4,type:"Line",stroke:"#ffffff",strokeWidth:4}],highway:[{zIndex:5,type:"Line",stroke:"#ffffff",strokeWidth:6}],buildings:[{zIndex:6,type:"Polygon",fill:"#999999"}]},assign:function(t,e){var r=t.properties,o=r.kind,n=r.layer,i=t.geometry.type;if("water"!=n||"LineString"!=i&&"MultiLineString"!=i){if("roads"==n){if("rail"==o||"ferry"==o)return;if("highway"==o)return o}return n}}},Gt=function(t){function r(r){var o=r.remote,n=o.url,i=o.min||1,a=o.max||16,u=o.tileSize,l=r.name||"",p=r.max||32,c=new D(o),h=[];if(!u){var f="string"==typeof n&&n.match(/256|512|1024|2048|4096/);u=f?Number(f[0]):512;}for(var d=new e.LRU(256/Math.pow(2,0)),y=new e.LRU(4*d.max),v=i;v<=a;v++)h.push({min:v,max:v==a?p:v,provider:new jt({name:l+"-L"+v,url:n,level:v-0,loader:c,size:u,storage:new wt(v-0,d,y)})});return t.call(this,s(s({min:i,max:p,style:At,margin:0,pointerEvents:!1},r),{tileSize:u,providers:h}))||this}return a(r,t),r.prototype.getProvider=function(t){var e=Math.floor(t)-this.levelOffset;return this._p[e]},r.prototype.getCopyright=function(t){this.getProvider(this.max).getCopyright(t);},r}(P);function Nt(t,e,r){var o=new XMLHttpRequest;return o.onload=function(){e(JSON.parse(this.responseText));},o.onreadystatechange=function(){var t=this.status;4==this.readyState&&(t<200||t>=300)&&0!==t&&r&&r(this);},o.open("GET",t,!0),o.send(),o}var Jt,Qt=function(){function t(t){var e=".json";(t=t||{}).host=t.host||"geocoder.api.here.com",t.version=t.version||"6.2",this.url="https://"+t.host+"/"+t.version+"/geocode"+e,this.reverseUrl="https://reverse."+t.host+"/"+t.version+"/reversegeocode"+e,this.cfg=t;}return t.prototype.createUrl=function(t,e){var r="";for(var o in e=e||{})r+="&"+o+"="+encodeURIComponent(e[o]);return this.reverseUrl+"?app_id="+this.cfg.app_id+"&app_code="+this.cfg.app_code+r},t.prototype.geocode=function(t,e,r){Nt(this.createUrl(this.url,t),e,r);},t.prototype.reverseGeocode=function(t,e,r){Nt(this.createUrl(this.reverseUrl,t),e,r);},t.prototype.getIsoCountryCode=function(t,e,r){var o={mode:"retrieveAddresses",maxresults:1,jsonattributes:1};o.prox=t instanceof Array?t[1]+","+t[0]:t.latitude+","+t.longitude,this.reverseGeocode(o,(function(t){var r=null;try{r=t.response.view[0].result[0].location.address.country;}catch(t){}e&&e(r,t);}),r);},t}(),Ht=function(){function t(t){this.cache=new e.LRU(t||256);}return t.prototype.forEach=function(t){this.cache.forEach(t);},t.prototype.clear=function(){this.cache.clear();},t.prototype.remove=function(t){this.cache.remove(t.quadkey);},t.prototype.get=function(t){return this.cache.get(t)},t.prototype.set=function(t){var e=this.cache.set(t.quadkey,t),r=this._onDrop;e&&r&&r(e);},t.prototype.onDrop=function(t){this._onDrop=t;},t}(),Vt=function(){return +new Date},Zt=function(t){function e(e){var r=t.call(this,s({storage:new Ht(512)},e))||this;r.name="",r.opacity=1,r.dataType="image";var o=r;return o.loader||(o.loader=new kt(new q({url:e.url,headers:{Accept:"*/*"}}))),r}return a(e,t),e.prototype.getTile=function(t,e){var r,o=this,n=o.loader,i=o.storage;return (r=i.get(t))===Jt&&(i.set(r=o.createTile(t)),r.onLoaded=[]),r.loadStopTs?(e&&e(r),r):(e&&-1==r.onLoaded.indexOf(e)&&r.onLoaded.push(e),r.loadStartTs||(r.loadStartTs=Vt(),n.tile(r,(function(t){r.loadStopTs=Vt(),r.data=t;for(var e=0,o=r.onLoaded;e<o.length;e++){(0, o[e])(r);}r.onLoaded=Jt;}),(function(t){r.loadStopTs=Vt(),r.error=t;}))),r)},e.prototype._removeTile=function(t){t.isLoaded()||(this.storage.remove(t),this.loader.abort(t));},e.prototype.getLoader=function(){return this.loader},e.prototype.clear=function(t){var e=this,r=null;if(t instanceof Array){r=e.getCachedTilesOfBBox(t,e.level);for(var o=0,n=void 0;o<r.length;o++)n=r[o],e.storage.remove(n),r[o]=n.quadkey;}else 0==arguments.length&&this.storage.clear();e.dispatchEvent("clear",{tiles:r});},e.prototype.cancel=function(t){var e;(e=t instanceof xt?t:this.storage.get(t))&&this._removeTile(e);},e}(Lt);Zt.prototype.__type="ImageProvider";var Kt,Wt=function(t){function r(e){var r=t.call(this,s({editable:!0},e))||this;return r.blocked={},r}return a(r,t),r.prototype.detectFeatureClass=function(t){switch(t.geometry.type){case"Point":return "MARKER";case"LineString":return "LINE";case"Polygon":case"MultiPolygon":return "AREA"}},r.prototype.getFeatureProperties=function(t){return t.properties},r.prototype.readRoutingPoint=function(t){return {link:this.readRoutingLink(t),position:this.readRoutingPosition(t)}},r.prototype.blockFeature=function(t,e){var r=t.id||t,o=typeof r;"string"!=o&&"number"!=o||(e?this.blocked[r]=!0:delete this.blocked[r]);},r.prototype._insert=function(e,r){return this.blocked[e.id]?null:t.prototype._insert.call(this,e,r)},r.prototype.reserveId=function(t,e){setTimeout((function(){return e(t.map((function(t){return t.id})))}),0);},r.prototype.isoCC=function(t,e){return !0},r.prototype.prepareFeature=function(t){return t.properties||(t.properties={}),null==t.id&&(t.id=e.JSUtils.String.random()),t},r}(Ct),$t="Method not implemented.",te=function(t){function e(e,r){var o=t.call(this,e)||this;return o.name="FeatureError",o.feature=r,o}return a(e,t),e}(Error),ee=function(t){function r(e){var r=t.call(this,s({minLevel:8,maxLevel:20,staticData:!1},e))||this;r.sizeKB=0,r._clearOnCommit=!0;var o=r,n=e.loader;if(!n)throw new Error("no tile loader defined.");n instanceof kt||(n=new kt(n)),o.loader=n;var i,a=e.preProcessor;return o.preprocess=Yt(a||e.preprocessor),o.postprocess=Yt(e.postProcessor),o.commit&&(o.commit=(i=o.commit,function(t,e,r){var n,a=this,s=this.postProcessor,u=function(t){Array.isArray(t)||(t=[t]);for(var e,r=t.length;r--;)(e=(t[r]=Y.prototype.toJSON.call(t[r])).properties)&&delete e["@ns:com:here:editor"];return t};return "object"==typeof t&&(t.put=u(t.put||[]),t.remove=u(t.remove||[]),qt(s))?(o.postprocess(t,(function(t){n=i.call(a,t,e,r);})),n):i.call(this,t,e,r)})),r}return a(r,t),r.prototype.getFeatures=function(e,r){var o=this;r=r||{},e instanceof Array||("object"==typeof e&&(e.remote&&(r.remote=e.remote),e.onload&&(r.onload=e.onload),e=e.ids||e.id),e=[].concat(e));var n=this,i=!0,a=r.onload,s=r.remote;(p=t.prototype.getFeatures.call(this,e))instanceof Array||(p=[p]);for(var u=0;u<p.length;u++)p[u]||(p[u]=e[u],i=!1);function l(){return 1==(p=p.map((function(t){return "object"==typeof t?t:Kt}))).length?p[0]:p}if(i||!s){var p=l();return a&&a(p),p}e=p.filter((function(t){return "object"!=typeof t}));var c=function(t){var e=r.onerror;e&&e(t);};n._requestFeatures(e,(function(t){for(var e=0,r=t;e<r.length;e++){var i=r[e],s=i.geometry;if(!s||!s.type||!s.coordinates)return void c(new te("Invalid geometry",i))}o.preprocess(t,(function(t){for(var e=0,r=t;e<r.length;e++){var o=r[e];p[p.indexOf(o.id)]=n.addFeature(o);}a&&a(l());}));}),c,r);},r.prototype.cancel=function(t,e){var r,o,n=this,i=n.storage,a=e==Kt;if(o=t instanceof this.Tile?t:i.get(t)){t=o.quadkey,r=this.calcStorageQuads(t);for(var s=0,u=void 0,l=void 0;s<r.length;s++)if(u=(l=r[s])==t?o:i.get(l)){var p=u.onLoaded,c=void 0;p&&(a?o.onLoaded.length=0:n.level&&o.z!=n.level?-1!=(c=p.indexOf(o.onLoaded[0]))&&(p[c].remove(e)||p.splice(c,1)):p.splice(p.indexOf(e),1),p.length||n.loader.abort(u)&&i.remove(u));}}},r.prototype.search=function(t,r){var o,n,i=this;if("object"==typeof t)if(r)for(var a in t)r[a]=t[a];else r=t;var s=(r=r||{}).onload,u=r.radius,l=r.remote,p=r.onerror;if(u==Kt&&(u=1),t instanceof Array)n=4==t.length?t:e.geotools.getPointBBox(t,u);else {if("number"==typeof t||"string"==typeof t||!t)return i.getFeatures(t,r);if(t.longitude!=Kt&&t.latitude!=Kt)n=e.geotools.getPointBBox([t.longitude,t.latitude],u);else if(t.minLon!=Kt&&t.minLat!=Kt&&t.maxLon!=Kt&&t.maxLat!=Kt)n=[t.minLon,t.minLat,t.maxLon,t.maxLat];else {if(o=t.point||t.rect||t.viewport)return i.search(o,r);if(t.id||t.ids)return i.getFeatures(t.id||t.ids,r)}}if(n={minX:n[0],minY:n[1],maxX:n[2],maxY:n[3]},l){for(var c,h=dt.getTilesInRect(n.minX,n.minY,n.maxX,n.maxY,i.level),f=function(t){h.splice(h.indexOf(t.quadkey),1),c=c||t.error,h.length||(c?p(c):s&&s(i._s(n)));},d=0;d<h.length;d++){var y=h[d],v=i.getCachedTile(y);if(v&&v.isLoaded()){if(v.error)return void(p&&p(v.error));h.splice(d--,1);}else i.getTile(y,f);}if(h.length)return}var g=i._s(n);return s&&s(g),g},r.prototype.getLoader=function(){return this.loader},r.prototype.config=function(e){return t.prototype.config.call(this,e)},r.prototype.clear=function(e){0==arguments.length&&this.loader.clear(),t.prototype.clear.apply(this,arguments);},r.prototype.calcStorageQuads=function(t){return dt.getTilesOfLevel(t,this.level)},r.prototype.createTile=function(e){var r,o,n=t.prototype.createTile.call(this,e),i=n.z,a=this.level;if(a&&i!=a)if(i>a)r=e.substr(0,a),(o=this.dep[r])||(o=this.dep[r]=[]),o[o.length]=n;else if(i<a)for(var s=dt.getTilesOfLevel(e,a),u=0,l=s.length;u<l;u++)r=s[u],(o=this.dep[r])||(o=this.dep[r]=[]),o[o.length]=n;return n},r.prototype.execTile=function(t){var e,r=t.onLoaded;if(r){for(var o=0,n=r.length;o<n;o++)(e=r[o])instanceof zt?e.receive(t):e(t);r.length=0;}},r.prototype.attachData=function(t,e){for(var r,o,n,i=this,a=[],s=e.length,u=0;u<s;u++)!1!==(r=i.prepareFeature(n=e[u]))?(n=r,(o=i._insert(n,t))?(n=o,a[a.length]=n):i.tree||(a[a.length]=i.getFeature(n.id))):(e.splice(u--,1),s--);if(e=a,t.loadStopTs=Date.now(),i.tree&&i.tree.load(e),t.data=i.clipped?e:i.search(t.getContentBounds()),i.margin)for(var l=0,p=t.data.length;l<p;l++)i._mark(t.data[l],t);i.execTile(t);},r.prototype.getTile=function(t,e){var r,o=this,n=o.storage,i=o.level;if((r=n.get(t))==Kt)(r=o.createTile(t)).onLoaded=[],r.data=[],n.set(r);else if(r.isLoaded())return e&&e(r,r.error),r;if(t.length!=i){var a=o.calcStorageQuads(t),s=void 0,u=void 0;r.loadStartTs=Date.now(),r.onLoaded.length?u=r.onLoaded[0]:(u=new zt(r,a),r.onLoaded.push(u)),u.add(e);for(var l=0;l<a.length;l++)(s=n.get(a[l]))==Kt?s=o.getTile(a[l],u):s.isLoaded()?u.receive(s):-1==s.onLoaded.indexOf(u)&&s.onLoaded.push(u);}else e&&-1==r.onLoaded.indexOf(e)&&r.onLoaded.push(e),r.loadStartTs||(r.loadStartTs=Date.now(),o.loader.tile(r,(function(t,e){o.sizeKB+=e/1024,o.preprocess(t,(function(t){return o.attachData(r,t)}),r);}),(function(t){r.loadStopTs=Date.now(),r.error=t,o.execTile(r),o.listeners.trigger("error",[t],!0);})));return r},r.prototype._removeTile=function(e,r){t.prototype._removeTile.call(this,e,r),e.isLoaded()||this.loader.abort(e);},r.prototype.readDirection=function(t){throw new Error($t)},r.prototype.readPedestrianOnly=function(t){throw new Error($t)},r.prototype.writeTurnRestriction=function(t,e,r){throw new Error($t)},r.prototype.readRoutingProvider=function(t,e){return this.id},r.prototype.readRoutingPosition=function(t){throw new Error($t)},r.prototype.readRoutingLink=function(t){throw new Error($t)},r.prototype.writeRoutingPosition=function(t,e){throw new Error($t)},r.prototype.writeRoutingLink=function(t,e){throw new Error($t)},r.prototype.readTurnRestriction=function(t,e){throw new Error($t)},r.prototype.writeRoutingPoint=function(t,e,r){this.writeRoutingLink(t,e),this.writeRoutingPosition(t,r);},r.prototype.writeEditState=function(t,e){},r.prototype.reserveId=function(t,r){for(var o,n=t.length,i=[];n--;)"string"==typeof(o=t[n].id)&&o.length>15?i.push(t[n].id):i.push(e.JSUtils.String.random(16));setTimeout((function(){r(i.reverse());}),0);},r.prototype.isDroppable=function(t){var e=t.editState&&t.editState();return !e||!e.modified&&!e.removed&&!e.split},r}(Wt),re="Method not implemented.",oe=function(t){function r(e){var r=this,o=e.loader;return o?o instanceof kt||(o=new kt(o)):o=new kt(new q({url:e.url,withCredentials:e.withCredentials,headers:e.headers})),e.loader=o,(r=t.call(this,e)||this).setParams(e.params||{}),r.setHeaders(e.headers||{}),r}return a(r,t),r.prototype.getHeader=function(t){var e=this.loader.src;return e[e.length-1].headers[t]||null},r.prototype.getHeaders=function(){var t=this.loader.src;return e.JSUtils.clone(t[t.length-1].headers)},r.prototype.setHeader=function(t,e){var r=this.loader.src,o=this.getHeaders();o[t]=e,r[r.length-1].headers=o,this.headers=o;},r.prototype.setHeaders=function(t){var r=this.loader.src,o=this.getHeaders();e.JSUtils.extend(o,t),r[r.length-1].headers=o,this.headers=o;},r.prototype.getParams=function(){return this.params},r.prototype.getParam=function(t){return this.params[t]||null},r.prototype.setParams=function(t){var r=this.loader.src,o=r[r.length-1],n=o.baseUrl,i=this.params||{};if(e.JSUtils.extend(i,t),this.params=i,"string"==typeof n){i=e.JSUtils.extend(function(t,e){return e=e||{},t.split(/\?|\&/).slice(1).map((function(t){t=t.split(/\=/),e[t[0]]=t[1];})),e}(n),i);var a=n.split(/\?/)[0],s="?";for(var u in i){var l=i[u];void 0===l?delete i[u]:(a+=s+u+"="+l,s="&");}o.setUrl(a);}},r.prototype.setParam=function(t,e){var r={};r[t]=e,this.setParams(r);},r.prototype.config=function(e){return t.prototype.config.call(this,e),e&&e.url&&this.setParams({}),this},r.prototype.commit=function(t,e,r,o){throw new Error(re)},r.prototype._requestFeatures=function(t,e,r,o){throw new Error(re)},r.prototype.readZLevels=function(t){throw new Error(re)},r.prototype.writeZLevels=function(t,e){throw new Error(re)},r}(ee);oe.prototype.getFeatureUrl=oe.prototype.getLayerUrl=oe.prototype.getTileUrl=function(){throw new Error(re)};var ne="Method not implemented.",ie=function(t){function r(r){return r.level=r.level||13,r.headers=e.JSUtils.extend({Accept:"application/geo+json"},r.headers||{}),t.call(this,r)||this}return a(r,t),r.prototype.getFeatureUrl=function(t,e){throw new Error(ne)},r.prototype.getLayerUrl=function(t){throw new Error(ne)},r.prototype.getTileUrl=function(t){throw new Error(ne)},r}(oe),ae="Method not implemented.",se=function(t){function e(e){var r=t.call(this,s({minLevel:8,maxLevel:20,storage:new Ht(512),editable:!1,size:512},e))||this;return r._clearOnCommit=!1,delete r.level,r.editable||(r.Feature=Y,r.detectFeatureClass=function(){return null}),r}return a(e,t),e.prototype.cancel=function(t){},e.prototype.delete=function(t){this.tree.remove(t);},e.prototype.import=function(t){var e=this;e.tree.fromJSON(t);for(var r=(t=e.tree.all()).length;r--;)e._insert(t[r]);},e.prototype.initStorage=function(t){},e.prototype.commit=function(t,e,r){return "function"==typeof e&&setTimeout((function(){return e({})}),0),!0},e.prototype.readDirection=function(t){throw new Error(ae)},e.prototype.readPedestrianOnly=function(t){throw new Error(ae)},e.prototype.writeTurnRestriction=function(t,e,r){throw new Error(ae)},e.prototype.readRoutingProvider=function(t,e){return this.id},e.prototype.readRoutingPosition=function(t){throw new Error(ae)},e.prototype.readRoutingLink=function(t){throw new Error(ae)},e.prototype.writeRoutingPosition=function(t,e){throw new Error(ae)},e.prototype.writeRoutingLink=function(t,e){throw new Error(ae)},e.prototype.readTurnRestriction=function(t,e){throw new Error(ae)},e.prototype.writeRoutingPoint=function(t,e,r){this.writeRoutingLink(t,e),this.writeRoutingPosition(t,r);},e.prototype.readZLevels=function(t){throw new Error("Method not implemented.")},e.prototype.writeZLevels=function(t,e){throw new Error("Method not implemented.")},e.prototype.writeEditState=function(t,e){},e}(Wt),ue={environment:"prd",space:"",credentials:{access_token:""},withCredentials:!1,tags:!1,https:!0,clip:!1,url:null,headers:null,propertySearch:null,editable:!0,level:0},le="@ns:com:here:xyz",pe="http://",ce={prd:pe+"xyz.api.here.com/hub/spaces"},he=function(t,r){return (t=e.JSUtils.extend(e.JSUtils.clone(ue),t)).params=e.JSUtils.extend(t.params||{},t.credentials),delete t.credentials,Dt(r)&&(t.preProcessor=r),t.url||(t.url=ce[t.environment]),t.https&&(t.url=t.url.replace(pe,"https://")),t},fe=function(t){function r(e){var r=t.call(this,he(e,arguments[1]))||this;return r.definition=null,r.setUrl(r.getTileUrl(r.space)),e.propertySearch&&r.setPropertySearch(e.propertySearch),r}return a(r,t),r.prototype.config=function(e){return t.prototype.config.call(this,e)},r.prototype.commit=function(t,e,r){var o=this.loader.src,n=o[o.length-1],i=0,a=function(t){!--i&&e&&e(t);},s=function(t){r&&r(t);};if("object"==typeof t){var u=t.put||[],l=t.remove||[];u.length&&(i++,n.send(this.createUpdateFeatureRequest(u,{success:a,error:s}))),l.length&&(i++,n.send(this.createRemoveFeatureRequest(l,{success:a,error:s})));}},r.prototype.getLayerUrl=function(t){return this.url+"/"+t},r.prototype.getTileUrl=function(t){return this._addUrlFilters(this.getLayerUrl(t)+"/tile/quadkey/{QUADKEY}?margin="+this.margin+"&clip="+!!this.clip)},r.prototype.getFeatureUrl=function(t,e){return e instanceof Array||(e=[e]),this.getLayerUrl(t)+"/features?id="+e.join("&id=")},r.prototype.createUpdateFeatureRequest=function(t,e){void 0===e&&(e={});var r=this,o=r._addUrlCredentials(r.getLayerUrl(r.space)+"/features","?");return s({type:"POST",url:o,headers:s(s({},r.headers),{"Content-Type":"application/geo+json"}),data:JSON.stringify({type:"FeatureCollection",features:t})},e)},r.prototype.createRemoveFeatureRequest=function(t,e){void 0===e&&(e={});var r=this,o=r._addUrlCredentials(r.getLayerUrl(r.space)+"/features","?");return s({type:"DELETE",url:o+"&id="+t.map((function(t){return t.id})).join(","),headers:s(s({},r.headers),{Accept:"application/json"})},e)},r.prototype.prepareFeature=function(e){var r=(e=t.prototype.prepareFeature.call(this,e)).properties;return r[le]||(r[le]={}),e},r.prototype.setMargin=function(t){ie.prototype.setMargin.call(this,t),this.setUrl(this.getTileUrl(this.space));},r.prototype.setUrl=function(t){this.loader.setUrl(this._addUrlCredentials(t));},r.prototype.setTags=function(t){"string"==typeof t&&(t=[t]),this.tags=t,this.setUrl(this.getTileUrl(this.space)),this.clear();},r.prototype.setPropertySearch=function(t,r,o){var n,i="";for(var a in "string"==typeof t?(n={})[t]={operator:r,value:o}:n=t,n){var s=n[a];r=s.operator.replace(">=","=gte=").replace("<=","=lte=").replace(">","=gt=").replace("<","=lt="),(o=null==s.values?s.value:s.values)instanceof Array||(o=[o]),o=o.map((function(t){return "string"==typeof t&&(e.JSUtils.isNumeric(t)||"true"==t||"false"==t||"null"==t)&&(t='"'+t+'"'),encodeURIComponent(t)}));var u=a.slice(0,2);"f."!=u&&"p."!=u&&(a="p."+a),i+=a+r+o+"&";}this.psf=i.slice(0,-1),this.setUrl(this.getTileUrl(this.space)),this.clear();},r.prototype.getCopyright=function(t,e){this.getDefinition((function(e){t&&t(e.copyright||[]);}),e);},r.prototype.getDefinition=function(t,r){var o=this,n=o.getLoader().src,i=o.definition;if(null==i){var a=new e.Queue;i=this.definition=a,n[n.length-1].send({url:o._addUrlCredentials(o.getLayerUrl(o.space),"?"),key:"def",success:function(t){o.definition=t,a.done(t);},error:function(t){o.definition=[],r&&r(t);},headers:s(s({},this.headers),{Accept:"application/json"})});}t&&(i instanceof e.Queue?i.add(t):t(i));},r.prototype._requestFeatures=function(t,e,r,o){var n=this.loader.src;n[n.length-1].send({key:t.join("&"),url:this._addUrlCredentials(this.getFeatureUrl(this.space,t)),success:function(t){e(t.features);},headers:this.headers,error:r});},r.prototype._addUrlCredentials=function(t,e){return t=function(t,e,r){for(var o in e)t+=r+o+"="+e[o],r="&";return t}(t,this.params,e||"&")},r.prototype._addUrlFilters=function(t){var e=this.tags,r=this.psf;return e&&e.length&&(t+="&tags="+e.join(",")),r&&(t+="&"+r),t},r}(ie),de=function(t){function e(e){var r,o=t.call(this,function(t){var e=s(s({url:"http://interactive.data.api.platform.here.com/interactive/v1",https:!0,space:t.layer},t),{credentials:s({},t.credentials)});return delete e.credentials.token,e}(e))||this;return o.definition=[],o.token=null===(r=e.credentials)||void 0===r?void 0:r.token,o}return a(e,t),e.prototype.addRequestToken=function(t){return (t.headers=t.headers||{}).Authorization="Bearer "+this.token,t},e.prototype.createUpdateFeatureRequest=function(e,r){return void 0===r&&(r={}),this.addRequestToken(t.prototype.createUpdateFeatureRequest.call(this,e,r))},e.prototype.createRemoveFeatureRequest=function(e,r){return void 0===r&&(r={}),this.addRequestToken(t.prototype.createRemoveFeatureRequest.call(this,e,r))},e.prototype.getLayerUrl=function(t){return this.url+"/catalogs/"+this.catalog+"/layers/"+t},e}(fe),ye=nt,ve=s({name:"xyz-maps"},{version:"0.27.0",revision:"ebe6bd8",date:"2021-12-15T16:16:31Z"}),ge=n.global.here.xyz.maps;ge.common=n;var me=ge.geo={Point:p,Rect:c},xe=ge.pixel={Point:u,Rect:l},_e=ge.layers={TileLayer:P,MVTLayer:Gt},be=ge.features={Feature:Y},we=ge.tile={Tile:xt,Utils:dt};ge.build=ve;var Le=ge.providers={ImageProvider:Zt,GeoJSONProvider:ie,FeatureProvider:Ct,LocalProvider:se,RemoteTileProvider:It,EditableRemoteTileProvider:ee,SpaceProvider:fe,IMLProvider:de,MVTProvider:jt,EditableFeatureProvider:Wt},Te=ge.projection={webMercator:ye},Me=ge.loaders={HTTPLoader:q,Manager:kt},Pe=ge.service||{Geocoder:Qt},Se={tile:we,layers:_e,geo:me,pixel:xe,features:be,providers:Le,projection:Te,loaders:Me,service:Pe,build:ve,common:n};t.DEFAULT_LAYER_MAX_ZOOM=32,t.DEFAULT_LAYER_MIN_ZOOM=15,t.EditableFeatureProvider=Wt,t.EditableRemoteTileProvider=ee,t.Feature=Y,t.FeatureProvider=Ct,t.GeoCoder=Qt,t.GeoJSONProvider=ie,t.GeoPoint=p,t.GeoRect=c,t.IMLProvider=de,t.ImageProvider=Zt,t.LocalProvider=se,t.MVTLayer=Gt,t.MVTProvider=jt,t.PixelPoint=u,t.PixelRect=l,t.RemoteTileProvider=It,t.SpaceProvider=fe,t.Tile=xt,t.TileLayer=P,t.build=ve,t.default=Se,t.features=be,t.layers=_e,t.loaders=Me,t.pixel=xe,t.projection=Te,t.providers=Le,t.service=Pe,t.tile=we,t.tileUtils=dt,t.utils=Et,t.webMercator=ye,Object.defineProperty(t,"__esModule",{value:!0});}));

		let XYZ = xyzMapsCommon.global;
		'here.xyz.maps'.split('.').forEach((ns) => XYZ = (XYZ[ns] = XYZ[ns] || {}));
		var XYZ$1 = XYZ;

		return XYZ$1;

	})));
	}(xyzMapsCore_min));

	/*
	 * @here/xyz-maps-display
	 * (c) 2019-2021 HERE
	 */
	/*! *****************************************************************************
	Copyright (c) Microsoft Corporation.

	Permission to use, copy, modify, and/or distribute this software for any
	purpose with or without fee is hereby granted.

	THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
	REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
	AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
	INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
	LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
	OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
	PERFORMANCE OF THIS SOFTWARE.
	***************************************************************************** */var d=function(t,e){return (d=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e;}||function(t,e){for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);})(t,e)};function v(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function i(){this.constructor=t;}d(t,e),t.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i);}var y=function(){return (y=Object.assign||function(t){for(var e,i=1,n=arguments.length;i<n;i++)for(var r in e=arguments[i])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t}).apply(this,arguments)};function g(t,e,i,n){return new(i||(i=Promise))((function(r,o){function a(t){try{l(n.next(t));}catch(t){o(t);}}function s(t){try{l(n.throw(t));}catch(t){o(t);}}function l(t){var e;t.done?r(t.value):(e=t.value,e instanceof i?e:new i((function(t){t(e);}))).then(a,s);}l((n=n.apply(t,e||[])).next());}))}function m(t,e){var i,n,r,o,a={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return o={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function s(o){return function(s){return function(o){if(i)throw new TypeError("Generator is already executing.");for(;a;)try{if(i=1,n&&(r=2&o[0]?n.return:o[0]?n.throw||((r=n.return)&&r.call(n),0):n.next)&&!(r=r.call(n,o[1])).done)return r;switch(n=0,r&&(o=[2&o[0],r.value]),o[0]){case 0:case 1:r=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,n=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(!(r=a.trys,(r=r.length>0&&r[r.length-1])||6!==o[0]&&2!==o[0])){a=0;continue}if(3===o[0]&&(!r||o[1]>r[0]&&o[1]<r[3])){a.label=o[1];break}if(6===o[0]&&a.label<r[1]){a.label=r[1],r=o;break}if(r&&a.label<r[2]){a.label=r[2],a.ops.push(o);break}r[2]&&a.ops.pop(),a.trys.pop();continue}o=e.call(t,a);}catch(t){o=[6,t],n=0;}finally{i=r=0;}if(5&o[0])throw o[1];return {value:o[0]?o[1]:void 0,done:!0}}([o,s])}}}var x=function(t,e,i,n){("string"==typeof e?[e]:e).forEach((function(e){t.addEventListener(e,i,n);}));},_=function(t,e,i,n){("string"==typeof e?[e]:e).forEach((function(e){t.removeEventListener(e,i,n);}));},w=function(t,e){return Math.round(parseFloat((n=e,(o=(i=t).ownerDocument.defaultView.getComputedStyle(i,null))&&""===(r=o.getPropertyValue(n))&&(r=i.style[n]),r)))||0;var i,n,r,o;},b=function(t,e,i,n){this.lrTs=!1,this.x=t,this.y=e,this.size=i,this.tile=n;},T=function(){function t(t,e){this.ready=!1,this.cnt=0,this.z={},this.zLength=0,this.zd=!1,this._z3d=1/0,this.layer=t,this.tileSize=t.tileSize,this.layers=e,this.id=Math.floor(1e16*Math.random());}return t.prototype.getZ=function(t){var e=this.z;if(this.zd){var i=0;for(var n in e)e[n]=i++;this.zLength=i,this.zd=!1,this.z3d=e[this._z3d];}return e[t]||0},t.prototype.getAbsoluteZ=function(t){for(var e=this.index,i=this.layers,n=0,r=0;n<e;)r+=i[n++].zLength;return null!=t&&(r+=this.getZ(t)),r},t.prototype.addZ=function(t,e){var i=this.z;null==i[t]&&(i[t]=0,this.zd=!0,e&&t<this._z3d&&(this._z3d=t));},t.prototype.getZ3d=function(){for(var t,e=this.layers,i=0,n=0;t=e[i++];){if(t._z3d>=0)return n+t.z3d;n+=t.zLength;}return n},t}(),L=function(t){function e(){for(var i=[],n=0;n<arguments.length;n++)i[n]=arguments[n];var r=t.apply(this,i)||this;return r._map={},Object.setPrototypeOf(r,e.prototype),r}return v(e,t),e.prototype.indexOf=function(e){var i=this._map[e.id];return t.prototype.indexOf.call(this,i)},e.prototype.fixZ=function(){for(var t=0;t<this.length;t++)this[t].index=t;},e.prototype.add=function(e,i){var n,r=e.id,o=this._map[r];return o?(this.splice(t.prototype.indexOf.call(this,o),1),this.splice(i,0,o),n=!1):(o=this._map[r]=new T(e,this),this.splice(i,0,o),n=!0),this.fixZ(),n},e.prototype.remove=function(t){var e=this.indexOf(t);return -1!==e&&(this.splice(e,1),delete this._map[t.id],this.fixZ()),e},e.prototype.get=function(t){return "string"!=typeof t&&(t=t.id),this._map[t]},e.prototype.reset=function(t){for(var e,i=new Set,n=0;n<this.length;n++){var r=this[n];e=r.layer,r.error=!1,r.cnt=0,r.tiles=[],(r.visible=t>=e.min&&t<=e.max)?(r.ready=!1,i.add(e.tileSize)):r.ready=!0;}return Array.from(i)},e}(Array),S=function(){function t(t,e){this.display=t,this.render=e;}return t.prototype.forEachTile=function(t,e){t.getProvider().getCachedTilesOfBBox(t.getBBox()).forEach(e);},t.prototype.remove=function(t,e,i){for(var n=0,r=e;n<r.length;n++){var o=r[n];this.removeFromTile(t,o,i);}},t.prototype.modifyInTile=function(t,e,i,n){var r=this.isVertexDataInitialized(e);return !!r&&(this.display.updateTile(e,r,n,t),!0)},t.prototype.isVertexDataInitialized=function(t){return this.display.getBucket(t.quadkey)},t.prototype.addToTile=function(t,e,i){var n=this.isVertexDataInitialized(e);n&&this.display.updateTile(e,n,i,t);},t.prototype.removeFromTile=function(t,e,i){var n=this.isVertexDataInitialized(e);n&&this.display.updateTile(e,n,i,t);},t.prototype.add=function(t,e,i){for(var n=0,r=e;n<r.length;n++){var o=r[n];this.addToTile(t,o,i);}},t.prototype.updateGeometry=function(t,e,i,n){for(var r=n.getProvider(),o=r.getCachedTilesOfBBox(e),a=r.getCachedTilesOfBBox(t.getBBox()),s=0,l=a.length;s<l;s++){var u=o.indexOf(a[s]);-1===u?this.addToTile(t,a[s],n):(this.modifyInTile(t,a[s],i,n),o.splice(u,1));}for(s=0,l=o.length;s<l;s++)this.removeFromTile(t,o[s],n),this.removeFromTile(t,o[s],n);},t.prototype.repaint=function(t,e,i){var n=this;n.forEachTile(t,(function(e){var r=n.isVertexDataInitialized(e);r?n.display.updateTile(e,r,i,t):e.preview&&(e.preview=undefined);}));},t.prototype.clear=function(t,e){e=e||[];var i=this.display,n=i.layers.indexOf(t);i.buckets.forEach((function(i){e.length&&!function(t,e){for(var i,n,r=t.length,o=0;o<e.length;o++)if(n=t,i=e[o],r>e[o].length&&(i=n,n=e[o]),0===i.search(n))return !0}(i.quadkey,e)||(i.clear(n),i.ready(n,!1),i.cancelTasks(t),i.luTs=null);})),i.update();},t}(),A=[],M=function(){function t(t,e){this.display=t,"number"==typeof e?(this.down=e,this.up=e):(this.down=e[0],this.up=e[1]);}return t.prototype.lookUp=function(t,e,i,n,r,o){var a,s,l,u=t.quadkey,h=i-n;if(a=Number(u[h]),o.x+=a%2*e/2,o.y+=Number(a>1)*e/2,l=u.substring(0,h),this.hasData(l,r)){var f=e/Math.pow(2,n);return s=[],this.add(s,l,o.x,o.y,f,0,0,e),s}o.x/=2,o.y/=2;},t.prototype.add=function(t,e,i,n,r,o,a,s){t.push([e,i,n,r,r,0^o,0^a,s,s]);},t.prototype.hasData=function(t,e){var i=this.display.buckets.get(t,!0);if(i)return i.ready(e)&&i.getData(e)},t.prototype.lookDown=function(t,e,i,n,r){var o,s,l,u,h,f,c=i+n;o=xyzMapsCore_min.exports.tileUtils.getTilesOfLevel(t.quadkey,c);for(var p=0;p<o.length;p++){s=l=0,u=e;for(var d=0;d<n;d++)u/=2,s+=(h=o[p][i+d])%2*u,l+=Number(h>1)*u,d==n-1&&this.hasData(o[p],r)&&(f=f||[],this.add(f,o[p],0,0,e,s,l,u));}return f},t.prototype.create=function(t,e,i,n){var r,o=t.quadkey.length,a=e.min,s=e.max,l=s-o,u=o-a,h={x:0,y:0},f=0,c=e.tileSize;i=i||this.down,(n=n||this.up)>u&&(n=u),i>l&&(i=l);for(var p=n>i?n:i,d=t.index(e);f++<p;){if(o-f>=a&&(r=this.lookUp(t,c,o,f,d,h)))return r;if(o+f<=s&&f<i&&(r=this.lookDown(t,c,o,f,d)))return r}return A},t}(),C=document.createElement("canvas").getContext("2d"),I="abcdefghijklmnopqrstuvwxyz",z=(I=I+I.toUpperCase()+" 0123456789").length,E={},P="normal 12px Arial",k=function(t,e,i,n){t.font=e.font||P,"number"==typeof e.strokeWidth?t.lineWidth=e.strokeWidth:t.lineWidth=1,t.strokeStyle=n,t.fillStyle=i,t.textAlign=e.textAlign||"start",t.lineCap="round",t.lineJoin="round";},D=function(t,e,i,n,r){var o=r.fill,a=r.stroke,s=r.strokeWidth;a&&0!=s&&t.strokeText(e,i,n),o&&t.fillText(e,i,n);},R=function(t,e,i,n,r){n=n||128,r=r||128,t.fillStyle="#000",t.fillRect(0,0,n,r),k(t,e,"#fff","#fff"),D(t,i,0,0,e);for(var o=t.getImageData(0,0,n,r).data,a=-1,s=-1,l=0;l<r;l++)for(var u=0;u<n;u++){if(0!=o[4*(l*n+u)]){-1==a&&(a=l);break}if(u==n-1&&-1!==a){s=l,l=r;break}}return t.clearRect(0,0,n,r),{height:s-a,min:a,max:s}},O=function(t){void 0===t&&(t={});var e=t.font,i=t.strokeWidth,n=(e=e||P)+(i=i||0);return E[n]||(C.font=e,C.textBaseline="top",E[n]={width:C.measureText(I).width/z,height:R(C,t,"gM").height}),E[n]},B=function(t,e){if(!1===e)return [t];null!=e&&!0!==e||(e=14);for(var i,n=[],r=0,o=-1,a=0,s=void 0,l=void 0,u=t.length;a<u;a++)l=a-r," "==(i=t.charAt(a))?o=a:"\n"==i&&(l=1/0,o=a),l>=e&&r<=o&&(s=t.substring(r,o),r=o+1,n.push(s)),a==u-1&&r<=a&&(s=t.substring(r,a+1),n.push(s));return n},N={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"00ffff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000000",blanchedalmond:"ffebcd",blue:"0000ff",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"00ffff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgrey:"a9a9a9",darkgreen:"006400",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"ff00ff",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",grey:"808080",green:"008000",greenyellow:"adff2f",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgrey:"d3d3d3",lightgreen:"90ee90",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"778899",lightslategrey:"778899",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"00ff00",limegreen:"32cd32",linen:"faf0e6",magenta:"ff00ff",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370d8",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"d87093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",red:"ff0000",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"ffffff",whitesmoke:"f5f5f5",yellow:"ffff00",yellowgreen:"9acd32"},F=function(t){return t.length<5?[parseInt(""+t[1]+t[1],16)/255,parseInt(""+t[2]+t[2],16)/255,parseInt(""+t[3]+t[3],16)/255,1]:[parseInt(t.slice(1,3),16)/255,parseInt(t.slice(3,5),16)/255,parseInt(t.slice(5,7),16)/255,1]};for(var U in N)N[U]=F("#"+N[U]);var W=function(t){var e;return t&&(Array.isArray(t)?3==(e=t).length&&(e[3]=1):e="#"==t[0]?F(t):(e=N[t])?e.slice():function(t){var e=t.match(/^rgba?\s*\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d*(?:\.\d+)?))?\)$/);return e&&e.length>3&&[e[1]/255,e[2]/255,e[3]/255,null==e[4]?1:Number(e[4])]}(t)),e},G=function(t,e){for(var i=0,n=[t,e];i<n.length;i++)for(var r=n[i],o=0;o<r.length;o++){for(var a=undefined,s=undefined,l=undefined,u=undefined,h=void 0,f=(o+1)%r.length,c=r[o],p=r[f],d=[p[1]-c[1],c[0]-p[0]],v=0,y=t;v<y.length;v++){var g=y[v];h=d[0]*g[0]+d[1]*g[1],(undefined===a||h<a)&&(a=h),(undefined===s||h>s)&&(s=h);}for(var m=0,x=e;m<x.length;m++){g=x[m];h=d[0]*g[0]+d[1]*g[1],(undefined===l||h<l)&&(l=h),(undefined===u||h>u)&&(u=h);}if(s<l||u<a)return !1}return !0},X=function(t,e,i,n,r){var o=Math.sin(r),a=Math.cos(r),s=t-i,l=e-n;return [a*s-o*l+i,o*s+a*l+n]},Z=function(t,e,i,n,r,o){return t>i&&t<r&&e>n&&e<o},H=function(t,e,i,n,r,o,a,s){return t<=o&&r<=e&&i<=s&&a<=n},Y=function(t,e,i,n){var r=t-i,o=e-n;return Math.sqrt(r*r+o*o)},j=function(t){return t>47&&t<58},q=function(){function t(){this.fonts={};}return t.getInstance=function(){return this.instance=this.instance||new t},t.prototype.getFontId=function(t,e){return ""+(t.font||"normal 12px Arial")+(t.strokeWidth||1)+e},t.prototype.initFont=function(t,e){void 0===e&&(e=1);var i=this.fonts,n=this.getFontId(t,e);if(!i[n]){var r=96*e,o=function(t,e){var i=document.createElement("canvas");return i.width=t,i.height=e,i}(r,r),a=o.getContext("2d");a.textBaseline="bottom";var s=R(a,t,"gM").height;a.textBaseline="top";var l=R(a,t,"gM").height;k(a,t,"#fff","#000"),a.setTransform(e,0,0,e,0,0);var u=a.lineWidth,h=Math.floor(u),f=Math.floor(u),c=l+2*f;i[n]={name:n,size:0,glyphs:new Map,paddingX:h,paddingY:f,canvas:o,ctx:a,width:r,offsetX:2*u*e,scale:e,style:t,charWidthCache:new Map,rowHeight:c*e,letterHeightBottom:s,letterHeight:l,spaceWidth:a.measureText(" ").width*e,baselineOffset:e*((l-s)/2+f)};}return i[n]},t.prototype.hasGlyph=function(t,e){return e.glyphs.has(t)},t.prototype.getGlyph=function(t,e){var i,n=e.glyphs.get(t);if(!n){var r=e.canvas.width,o=e.offsetX,a=e.scale;e.ctx.clearRect(0,0,r,r),D(e.ctx,t,e.paddingX,e.paddingY,e.style);var s=e.charWidthCache.get(t);null==s?s=e.ctx.measureText(t).width:e.charWidthCache.delete(t);var l=Math.round((s||0)+2*e.paddingX)*a,u=e.ctx.getImageData(0,0,l,e.rowHeight);n={char:t,width:s,data:u,direction:(i=t.charCodeAt(0),function(t){return t>=32&&t<=47||t>=58&&t<=64||t>=91&&t<=96||t>=123&&t<=126}(i)||j(i)?0:function(t){return t>=1424&&t<=1791||t>=1872&&t<=1919||t>=2208&&t<=2303||t>=64336&&t<=65023||t>=65136&&t<=65279}(i)?-1:1),advanceX:s?u.width-o:0},e.glyphs.set(t,n),e.size++;}return n},t.prototype.getTextWidth=function(t,e){for(var i=e.ctx,n=0,r=0,o=t;r<o.length;r++){var a=o[r],s=e.glyphs.get(a);if(s)n+=s.width;else {var l=e.charWidthCache.get(a);null==l&&(l=i.measureText(a).width,e.charWidthCache.set(a,l)),n+=l;}}return n},t}(),V=q.getInstance(),K=xyzMapsCore_min.exports.webMercator.meterToPixel,Q=xyzMapsCore_min.exports.webMercator.pixelToMeter,$=function(t){return 0^Math.min(t,20)},J={type:1,zIndex:1,fill:1,stroke:1,strokeWidth:1,radius:1,width:1,height:1,font:1,text:1,textRef:1,offsetX:1,offsetY:1,alignment:1,rotation:1,priority:1,repeat:1,collide:1,offset:1,from:1,to:1,checkLineSpace:1,extrude:1,extrudeBase:1},tt=new Map,et=function(t,e,i){var n=it("text",t,e,i);if(!n&&t.textRef&&(null==(n=tt.get(t.textRef))&&(n=new Function("f","return f."+t.textRef),tt.set(t.textRef,n)),n=n(e,i)),""!=n)return undefined!==n&&"string"!=typeof n&&(n=String(n)),n},it=function(t,e,i,n){var r=e[t];return "function"==typeof r?r(i,n,e):r},nt=function(t,e){void 0===e&&(e=!1);var i="px",n=t;return "string"==typeof t&&(n=parseFloat(t)||0,"m"==t.charAt(t.length-1))?(i="m",[n=Math.round(10*n)/10,i]):(e||(n^=0),[n,i])},rt=function(t,e,i,n,r){var o=it(t,e,i,n),a=nt(o,r),s=a[0];if("m"==a[1]){var l=$(n);s=Math.pow(2,n%l)*K(s,l);}return s},ot=function(t,e,i,n){var r=it("zIndex",t,e,i),o=it("zLayer",t,e,i);return "number"!=typeof o&&(o=n+1),1e6*o+r},at=function(t,e,i,n){for(var r=0,o=$(i),a=0,s=t;a<s.length;a++){var l=s[a],u=ot(l,e,o,n);u>r&&(r=u);}return r},st=function(t,e,i,n){for(var r,o=0,a=0,s=$(i),l=0;l<t.length;l++){r=t[l];var u=ot(r,e,s,n);u>a&&(a=u);var h=rt("strokeWidth",r,e,i,!0);h>o&&(o=h);}return [o,a]},lt=function(t,e,i,n,r,o){var a,s,l,u,h,f,c=$(i),p=it("type",t,e,c);r=r||[Infinity,Infinity,-Infinity,-Infinity];var d=it("fill",t,e,c),v=!o&&it("stroke",t,e,c);if("Image"!=p&&!d&&!v)return null;if("Text"==p){var y=et(t,e,c);if(!y)return null;var g=it("strokeWidth",t,e,c),m=it("font",t,e,c),x=V.initFont({font:m,strokeWidth:g,fill:d,stroke:v},n),_=void 0;if(h=0,"LineString"==e.geometry.type||"MultiLineString"==e.geometry.type)h=V.getTextWidth(y,x),f=x.letterHeight;else {for(var w=it("lineWrap",t,e,c),b=0,T=_=B(y,w);b<T.length;b++){var L=T[b],S=V.getTextWidth(L,x);S>h&&(h=S);}f=_.length*x.letterHeight;}}else {g=it("strokeWidth",t,e,c);isNaN(g)&&(g=1),"Circle"==p?f=h=2*rt("radius",t,e,c)^0:(h=0^rt("width",t,e,c),f=0^((f=rt("height",t,e,c))||h)),f+=g,h+=g;}var A=0^it("offsetX",t,e,c),M=0^it("offsetY",t,e,c),C="Circle"!=p&&0^it("rotation",t,e,c);if(C){var I=function(t,e,i,n,r){void 0===n&&(n=0),void 0===r&&(r=0);var o=n-(e*=.5),a=n+e,s=r-(i*=.5),l=r+i,u=X(o,s,n,r,t),h=X(a,l,n,r,t),f=X(o,l,n,r,t),c=X(a,s,n,r,t);return [Math.min(u[0],h[0],f[0],c[0]),Math.min(u[1],h[1],f[1],c[1]),Math.max(u[0],h[0],f[0],c[0]),Math.max(u[1],h[1],f[1],c[1])]}(C,h,f,A,M);a=I[0],l=I[1],s=I[2],u=I[3];}else s=(a=A-.5*h)+h,u=(l=M-.5*f)+f;return a<r[0]&&(r[0]=a),s>r[2]&&(r[2]=s),l<r[1]&&(r[1]=l),u>r[3]&&(r[3]=u),r},ut=function(t,e,i,n,r){for(var o,a,s=$(i),l=0,u=0,h=t;u<h.length;u++){var f=h[u];a=lt(f,e,i,n,a,!0)||a,(o=ot(f,e,s,r))>l&&(l=o);}if(a)return a[4]=l,a},ht=function(t){return t.type&&null!=t.zIndex},ft=function(t,e,i){return void 0===e&&(e=0),void 0===i&&(i=1),Math.min(i,Math.max(e,t))},ct=function(t,e,i,n,r){return function(t,e,i){return t*(1-i)+e*i}(i,n,function(t,e,i){return ft((i-t)/(e-t))}(t,e,r))},pt=function(t,e){var i,n,r,o,a,s=0;for(var l in t){var u=Number(l);n=t[u];var h=Array.isArray(n),f=void 0,c=void 0;if(h?f=n:(f=(i=nt(n))[0],c=i[1]),"px"==c&&(n=f),e<=u){if(0==s)return "m"==c?t[u]:f;if(h){for(var p=[],d=0;d<f.length;d++)p[d]=ct(a,u,r[d],f[d],e);return p}if(u-a>1){var v=r,y=f,g=c!=o,m="m"==c;return g&&(m?v=Q(v,a):y=Q(y,u)),ct(a,u,v,y,e)+(g||m?"m":0)}return n}a=u,r=f,o=c,s++;}return n},dt=function(t,e){for(var i=1;i<=20;i++)t[i]=pt(e,i);return t},vt=function(t){for(var e in t)t[e]=W(t[e]);},yt=function(t){var e=function(e,i){return t[i]};return e.map=t,e},gt=function(t){if(!t.__p){t.__p=!0;for(var e=0,i=t;e<i.length;e++){var n=i[e];for(var r in n)if(r in J){var o=n[r];if("object"==typeof o&&!Array.isArray(o)){"stroke"!=r&&"fill"!=r||vt(o);var a=dt({},o);n[r]=yt(a);}}}}},mt=Object.freeze({__proto__:null,getTextString:et,calcBBox:lt,getValue:it,parseSizeValue:nt,getLineWidth:st,getPixelSize:ut,getSizeInPixel:rt,merge:function(t,e){if(null===e||!1===e)return null;for(var i,n=[],r=0,o=t.length;r<o;r++){for(var a in i=t[r],n.push([i[0],{}]),i[1])n[r][1][a]=i[1][a];if(e[r])for(var a in n[r][0]=e[r][0],e[r][1])n[r][1][a]=e[r][1][a];}return n},isStyle:ht,getMaxZoom:at,parseStyleGroup:gt}),xt=function(){return 1},_t=function(){function t(t,e){this.tm=t,this.ms=e;}return t.prototype.exclusiveRuntime=function(t){this.ms=t;},t.prototype.spawn=function(t,e,i,n,r,o,a,s){var l=this.createTask(t,e,i,n,r,o,a);return this.tm.start(l,s),l},t.prototype.createTask=function(t,e,i,n,r,o,a){var s=[],l=this.ms,u=this.tm.create({time:l,priority:t,init:function(){if(n){n.length;var t=Date.now();u.time=l-(Date.now()-t);}return [i,n,r,0,s,300,e,{}]},name:"cluster",onDone:function(){var t=e.getStyle(),n=t&&(t.strokeWidthZoomScale||t.LineStringZoomScale)||xt;s.swzs=n(i.z),a(s,this);},exec:function(t){var e,i,n,r,a,s,l,u,h,f,c,p,d,v,y,g,m,x,_,w=t[0],b=t[1],T=t[2],L=t[6],S=b.length,A=t[4],M=w.z;if(b&&!(t[3]>=S)){for(;t[5]--&&(a=b[t[3]++]);)if(!T[s=a.id]&&(T[s]=!0,n=L.getStyleGroup(a,M))){n.length||(n=[n]);for(var C=0,I=n.length;C<I;C++)r=n[C],ht(r)&&(e=it("zIndex",r,a,M),l=it("type",r,a,M),y=it("opacity",r,a,M),p=undefined,c=undefined,d=undefined,v=undefined,x=undefined,g=undefined,m=undefined,_=undefined,"Image"==l?i="I":(c=it("fill",r,a,M),d=it("stroke",r,a,M),v=it("strokeWidth",r,a,M),i="Line"==l?"L"+((g=it("strokeLinecap",r,a,M))||"*")+((m=it("strokeLinejoin",r,a,M))||"*")+((x=it("strokeDasharray",r,a,M))||"*"):"Text"==l?"T"+((p=it("font",r,a,M)||"normal 12px Arial")||"*"):"Circle"==l?"C"+it("radius",r,a,M)||"*":"R"+(_=it("width",r,a,M))+(it("height",r,a,M)||_),i+=(d||"*")+(v||"*")+(c||"*")),null!=y&&(i+=100*y^0),null==(f=(u=A[e]=A[e]||[])[i])?(f=u[i]=u.length,h=u[f]={shared:{font:p,fill:c,opacity:y,stroke:d,strokeWidth:v,strokeLinecap:g,strokeLinejoin:m,strokeDasharray:x},data:new o}):h=u[f],h.data.add(a,r));}return t[5]=300,t[3]<S}}});return u},t}(),wt=function(){function t(t){this.tiles={},this.size=t;}return t.prototype.init=function(t,e,i,n,r){this.cwpx=t[0],this.cwpy=t[1],this.width=i,this.height=n,this.bounds=r;for(var o=Infinity,a=-o,s=Infinity,l=-s,u=0,h=r;u<h.length;u++){var f=h[u];f[0]<o&&(o=f[0]),f[0]>a&&(a=f[0]),f[1]<s&&(s=f[1]),f[1]>l&&(l=f[1]);}this.minX=o,this.maxX=a,this.minY=s,this.maxY=l;},t.prototype.getTiles=function(t,e){void 0===e&&(e=this.size);for(var i=this.width,n=this.height,r=Math.pow(2,t)*e,o=this.bounds,s=[],l=this.cwpx*r,u=this.cwpy*r,h=l-i/2+this.minX,f=u-n/2+this.minY,c=l+i/2+this.maxX-i,p=u+n/2+this.maxY-n,d=xyzMapsCore_min.exports.tileUtils.pixelToGrid(h/e,f/e,t),v=xyzMapsCore_min.exports.tileUtils.pixelToGrid(c/e,p/e,t),y=v[0]-d[0]+1,g=v[1]-d[1]+1,m=xyzMapsCore_min.exports.tileUtils.getTilesIds(d,v),x=d[0]*e-h+this.minX,_=d[1]*e-f+this.minY,w=0,b=0;w<g;w++)for(var T=0;T<y;T++){var L=x+T*e,S=_+w*e,A=L+e,M=S+e,C=m[b++];G(o,[[L,S],[A,S],[A,M],[L,M]])&&s.push({quadkey:C,x:L,y:S});}return this.tiles[e]=s,s},t}();function bt(t,e,i){if(e[t+="EventListener"])for(var n in i)e[t](n,i[n]);}var Tt=function(){function i(t,n,r,o,a,s$1){this.updating=!1,this.dirty=!1,this.globalBgc=!1;var l=this,u=w(t,"width"),h=w(t,"height"),f=function(t,e,i,n,r){var o,a=document.createElement("canvas"),s=a.style;return function(t,e,i){t.setAttribute("width",e),t.setAttribute("height",i);}(a,e,i),a.setAttribute("oncontextmenu","return false;"),function(t,e){["-webkit-user-select","-moz-user-select","-ms-user-select","user-select"].forEach((function(i){t.style[i]=e;}));}(a,"none"),s.top=s.left="0px",s.position="absolute",1!=r&&(s.opacity=String(r)),t.querySelectorAll("canvas[type=layer]"),a.setAttribute("type","layer"),(o=t.querySelectorAll("canvas")[n])?t.insertBefore(a,o):t.appendChild(a),a}(t,u,h,0);l.previewer=new M(l,s$1),l.cluster=new _t(s.getInstance(),4),l.grid=new wt(n),l.tiles={256:[],512:[]},l.render=a,l.tileSize=n,l.buckets=o,l.layers=new L,l.w=u,l.h=h,l.canvas=f,f.className="tmc",l.dpr=i.getPixelRatio(r),l.setSize(u,h),l.setBGColor();var c=new S(l,a);l.listeners={clear:function(t){var e=t.detail,i=e.tiles,n=e.layer;c.clear(n,i);},featureAdd:function(t){var e=t.detail,i=e.feature,n=e.tiles,r=e.layer;n&&c.add(i,n,r);},featureRemove:function(t){var e=t.detail,i=e.feature,n=e.tiles,r=e.layer;n&&c.remove(i,n,r);},featureCoordinatesChange:function(t){var e=t.detail,i=e.feature,n=e.prevBBox,r=e.prevCoordinates,o=e.layer;c.updateGeometry(i,n,r,o);},styleGroupChange:function(t){var e=t.detail,i=e.feature,n=e.styleGroup,r=e.layer;c.repaint(i,n,r);},styleChange:function(t){var e=t.detail,i=e.layer,n=e.style,r=l.layers.indexOf(i);l.setLayerBgColor(n,l.layers[r]),l.buckets.tiles.forEach((function(t){return t.clear(r)}));}};}return i.getPixelRatio=function(e){return (e="auto"==e?Math.min(2,t.devicePixelRatio||1):e||1)<1?1:e},i.prototype.addLayer=function(t,e,i){var n=this,r=n.layers,o=!1;if(r.add(t,i)){var a=r.get(t);a.handleTile=function(e){n.isVisible(e,a)&&n.handleTile(e,t);},bt("add",t,n.listeners),0==i&&n.setLayerBgColor(t.getStyle(),a),n.buckets.forEach((function(t){t.addLayer(i);})),o=!0;}return o},i.prototype.removeLayer=function(t){var e=this,i=this.layers,n=i.get(t),r=n.tiles,o=i.indexOf(t);if(-1!==o){e.buckets.forEach((function(e){e.cancelTasks(t),e.removeLayer(o);}));for(var a=0,s=r;a<s.length;a++){var l=s[a].tile.quadkey;e.releaseTile(l,n),e.cancel(l,t);}i.remove(t),bt("remove",t,e.listeners);}return o},i.prototype.getBucket=function(t,e){var i=this;return e?i.buckets.create(t,i.layers):i.buckets.get(t)},i.prototype.handleTile=function(t,e,i,n){var r,o=this,a=!1;if(i?a=!0:i=o.getBucket(t.quadkey,true),null==n&&(n=o.layers.indexOf(e)),t.error&&(o.layers[n].error=!0),!i.ready(n)&&!i.busy(e)&&(r=t.data)){var s=function(e,i){t.isLoaded()&&e.ready(e.index(i),!0),o.update(a);};i.ready(n,!1);var l=e.render;l?l(t,r,e,i,s):o.prepareTile(t,r,e,i,s);}},i.prototype.setLayerBgColor=function(t,e){var i=t.backgroundColor;i&&(e.bgColor=this.render.convertColor(i));},i.prototype.isVisible=function(t,e){for(var i=t.quadkey,n=0,r=e.tiles;n<r.length;n++){if(r[n].tile.quadkey==i)return !0}return !1},i.prototype.copyCanvas2d=function(t,e,i,n){void 0===t&&(t=0),void 0===e&&(e=0),void 0===i&&(i=this.w),void 0===n&&(n=this.h);var r=this.canvas,o=this.dpr;t*=o,e*=o,i*=o,n*=o;var a=document.createElement("Canvas");return a.width=i,a.height=n,this.viewport(),a.getContext("2d").drawImage(r,t,e,i,n,0,0,i,n),a},i.prototype.getScreenTile=function(t,e){return this.grid.tiles[e].find((function(e){return e.quadkey==t}))},i.prototype.updateTile=function(t,e,i,n){if(e&&!e.busy(i)){var r=this,o=e.index(i);e.ready(o,!1),r.isVisible(t,r.layers[o])&&r.handleTile(t,i,e,o);}},i.prototype.setSize=function(t,e){var i=this,n=i.dpr,r=i.canvas;i.w=t,i.h=e,r.width=t*n,r.height=e*n,r.style.width=t+"px",r.style.height=e+"px";},i.prototype.cancel=function(t,e){var i=this.buckets.get(t,!0);i&&i.cancelTasks(e);},i.prototype.preview=function(t,e,i){var n=this.previewer.create(t,e);return t.preview(i,n),n},i.prototype.initVpTiles=function(t,e,i){for(var n=this,r=this.layers,o=n.tiles[i],a=n.tiles[i]=[],s=[],l=0,u=t;l<u.length;l++){var h=u[l],f=h.x,c=h.y,p=h.quadkey,d=n.getBucket(p,true),v=new b(f,c,i,d);d.i=++this.ti,s.push(v),a.push(v);for(var y=0,g=r;y<g.length;y++){var m=g[y],x=m.layer;(x.tileSize||256)==i&&(m.tiles!=s&&(m.tiles=s),e>=x.min&&e<=x.max&&(n.initTile(d,m),x.getTile(p,m.handleTile)));}}o.forEach((function(t){for(var e=t.tile.quadkey,o=0,s=a;o<s.length;o++){if(s[o].tile.quadkey==e)return}for(var l=0,u=r;l<u.length;l++){var h=u[l];h.layer.tileSize==i&&n.releaseTile(e,h);}n.cancel(e);}));},i.prototype.updateGrid=function(t,e,i,n){this.viewChange=!0,this.sx=i,this.sy=n;var r=this,o=this.rz,a=this.w,s=this.h,l=a,u=s,h=this.grid,f=[r.unproject(0,0),r.unproject(l-1,0),r.unproject(l-1,u-1),r.unproject(0,u-1)];h.init(t,o,a,s,f);var c=this.layers.reset(e+Math.log(this.s)/Math.LN2);this.ti=0;for(var p=0,d=c;p<d.length;p++){var v=d[p],y=r.grid.getTiles(e-Number(512==v),v);this.initVpTiles(y,e,v);}-1==c.indexOf(512)&&r.grid.getTiles(e-1,512),this.dirty=!0,r.update();},i.prototype.releaseTile=function(t,e){var i=e.layer.getCachedTile(t);i&&i.loadStartTs&&(i.isLoaded()||e.layer.cancelTile(i,e.handleTile));},i.prototype.initTile=function(t,e){var i=e.index;e.visible?t.ready(i)||t.preview(i)||this.preview(t,e.layer,i):t.ready(i,!0);},i.prototype.update=function(t){var e=this;e.dirty||(e.dirty=t),e.updating||(e.updating=!0,requestAnimationFrame((function(){e.viewport(),e.updating=!1;})));},i.prototype.setBGColor=function(e){var i=this,n=i.render,r=e||t.getComputedStyle(i.canvas.parentElement,null).getPropertyValue("background-color");r&&"rgba(0, 0, 0, 0)"!=r&&"transparent"!=r||(r="#ffffff"),r=n.convertColor(r),i.globalBgc=r,n.setBackgroundColor(r);},i.prototype.showGrid=function(t){this.render.grid(!!t);},i.prototype.setTransform=function(t,e,i){this.render.setScale(this.s=t,0,0),this.render.setRotation(this.rz=e,this.rx=i),this.render.applyTransform();},i.prototype.getLayers=function(){return this.layers},i.prototype.destroy=function(){this.render.destroy();var t=this.canvas;t.parentElement.removeChild(t),t.width=t.height=1;},i.prototype.clearLayer=function(t){var e=this.getLayers().indexOf(t);this.buckets.forEach((function(t){t.preview(e,!1),t.ready(e,!1);}));},i.prototype.viewChangeDone=function(){this.viewChange=!1;},i}(),Lt=document.createElement("canvas"),St=Lt.getContext("2d");Lt.width=1,Lt.height=1;function At(){var t=this,e=t._cbs,i=Math.max(t.width,t.height);if(t._cbs=null,i>64){var n=64/i;t=t._r[t.src]=function(t,e){var i=document.createElement("canvas"),n=i.getContext("2d");return i.width=t.width*e,i.height=t.height*e,n.drawImage(t,0,0,i.width,i.height),i}(t,n);}else St.drawImage(t,0,0);for(var r in t.ready=!0,t._r=null,e)e[r][0](t,e[r][1]);}var Mt,Ct=function(){function t(){this.imgData={};}return t.prototype.isRequested=function(t){return !!this.imgData[t]},t.prototype.isReady=function(t){return this.imgData[t]&&this.imgData[t].ready},t.prototype.get=function(t,e,i,n){var r=this.imgData;if(null==r[t]){var o=r[t]=new Image;o.ready=!1,o._cbs={},e&&(o._cbs[i]=[e,n]),o._r=r,o.crossOrigin="Anonymous",o.onload=At,o.src=t;}else e&&(r[t].ready?e(r[t],n):r[t]._cbs[i]=[e,n]);return r[t]},t}(),It=function(){function t(t,e,i){this.gl=t,this.format=i||t.RGBA,e&&this.set(e);}return t.prototype.bind=function(){var t=this.gl,e=this.texture;e&&t.bindTexture(t.TEXTURE_2D,e);},t.prototype.set=function(t,e,i){var n=this,r=n.gl,o=n.texture,a=n.format,s=t.width,l=t.height,u=a,h="number"==typeof e;o||(this.texture=o=r.createTexture()),r.bindTexture(r.TEXTURE_2D,o),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!0),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),h||this.width==s&&!this.height&&!l?r.texSubImage2D(r.TEXTURE_2D,0,e||0,i||0,a,r.UNSIGNED_BYTE,t):(t instanceof HTMLCanvasElement||t instanceof HTMLImageElement?r.texImage2D(r.TEXTURE_2D,0,u,a,r.UNSIGNED_BYTE,t):r.texImage2D(r.TEXTURE_2D,0,u,s,l,0,a,r.UNSIGNED_BYTE,t.pixels),this.width=s,this.height=l),s==l&&function(t){return 0==(t&t-1)}(l)?(r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR_MIPMAP_NEAREST),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MAG_FILTER,r.LINEAR),r.generateMipmap(r.TEXTURE_2D)):(r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MAG_FILTER,r.LINEAR));},t.prototype.destroy=function(){var t=this.gl,e=this.texture;e&&(t.deleteTexture(e),this.texture=null);},t}(),zt=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return v(e,t),e.prototype.destroy=function(e){e&&t.prototype.destroy.call(this);},e}(It),Et=function(t,e,i,n,r){this.i=t,this.u1=e,this.v1=n,this.u2=i,this.v2=r;},Pt=function(){function t(t){var e=t.gl,n=t.maxImgSize||256,r=Math.pow(1024/n,2),o=Math.sqrt(r);this.c=new p(r),this.max=r,this.maxSize=n,this.gl=e,this.d=o;}return t.prototype.get=function(t){return this.c.get(t)},t.prototype.init=function(){var t=this;t.texture,t.gl;var e=t.maxSize,i=t.d;if(!this.texture){var n=i*e;this.texture=new zt(this.gl,{width:n,height:n});}},t.prototype.set=function(t,e){var i,n=this.c,r=this.d,o=this.maxSize,a=n.get(t),s=!1;a?i=a.i:((i=n.length)>=n.max&&(i=(a=n.tail.data).i),s=!0);var l=i%r^0,u=i/r^0,h=l*o,f=u*o,c=h+e.width,p=f+e.height;return a?(a.u1=h,a.u2=c,a.v1=f,a.v2=p):a=new Et(i,h,c,f,p),(e instanceof HTMLImageElement||e instanceof HTMLCanvasElement)&&(this.init(),this.texture.set(e,l*o,u*o)),s&&n.set(t,a),a},t.prototype.destroy=function(){var t=this.texture;t&&t.destroy(!0);},t}(),kt=function(){function t(t,e){this.images=new Ct,this.atlas=new Pt({gl:t,maxImgSize:64});}return t.prototype.getTexture=function(){return this.atlas.texture},t.prototype.get=function(t,e,i,n){var r=this,o=r.atlas,a=r.images,s=r.onLoad,l=o.get(t);if(!l&&!a.get(t,(function(e){l=o.set(t,e),n&&n(l),s&&s(l);})).ready)return !1;return l},t.prototype.destroy=function(){this.atlas.destroy();},t}(),Dt=window.console.error,Rt=function(t,e,i,n){n=n||Dt;var r=t.createShader(i);return t.shaderSource(r,e),t.compileShader(r),t.getShaderParameter(r,t.COMPILE_STATUS)?r:(n("compileShader "+t.getShaderInfoLog(r)),t.deleteShader(r),null)},Ot=function(t,e,i){return function(t,e,i){i=i||Dt;for(var n=t.createProgram(),r=0,o=e;r<o.length;r++){var a=o[r];t.attachShader(n,a);}return t.linkProgram(n),t.getProgramParameter(n,t.LINK_STATUS)?n:(i("linkProgram "+t.getProgramInfoLog(n)),t.deleteProgram(n),null)}(t,[Rt(t,e,t.VERTEX_SHADER),Rt(t,i,t.FRAGMENT_SHADER)])},Bt=function(t){for(var e in t)this[e]=t[e];};!function(t){t[t.OPAQUE=0]="OPAQUE",t[t.ALPHA=1]="ALPHA",t[t.POST_ALPHA=2]="POST_ALPHA";}(Mt||(Mt={}));var Nt,Ft,Ut=function(){function t(t,e,i,n,r){this.attributes={},this.uniforms={},this.uniformSetters={},this.macros=["#define M_PI 3.1415927410125732"];var o=this.macros.concat("#define DEVICE_PIXEL_RATIO "+r.toFixed(1)+"\n").join("\n"),a=Ot(t,o+"vec2 round(vec2 point){\n    vec2 fractPoint = fract(point);\n    point += step(0.5, fractPoint) - fractPoint;\n    return point;\n}\n\nvec4 snapToScreenPixel(vec4 position, vec2 resolution){\n    resolution *= DEVICE_PIXEL_RATIO;\n    vec2 screenPixel = ((position.xy / position.w + 1.0) / 2.0) * resolution;\n    position.xy = (round(screenPixel) / resolution * 2.0 - 1.0) * position.w;\n    return position;\n}\n"+i,o+n);this.mode=e,this.usage=t.STATIC_DRAW,this.gl=t,this.prog=a,this.glStates=new Bt({scissor:!0,blend:!1,depth:!0});for(var s=t.getProgramParameter(a,t.ACTIVE_ATTRIBUTES),l=0;l<s;++l){var u=t.getActiveAttrib(a,l).name;this.attributes[u]=t.getAttribLocation(a,u);}for(var h=t.getProgramParameter(a,t.ACTIVE_UNIFORMS),f=0;f<h;f++){var c=t.getActiveUniform(a,f),p=c.name,d=t.getUniformLocation(a,p);this.uniforms[p]=d,this.uniformSetters[c.name]=this.createUniformSetter(c,d);}}return t.prototype.createUniformSetter=function(t,e){var i=this.gl;switch(t.type){case i.FLOAT:return function(t){return i.uniform1f(e,t)};case i.FLOAT_MAT4:return function(t){return i.uniformMatrix4fv(e,!1,t)};case i.FLOAT_VEC2:return function(t){return i.uniform2fv(e,t)};case i.FLOAT_VEC3:return function(t){return i.uniform3fv(e,t)};case i.FLOAT_VEC4:return function(t){return i.uniform4fv(e,t)};case i.BOOL:case i.SAMPLER_2D:return function(t){return i.uniform1i(e,t)}}return function(){}},t.prototype.setBufferCache=function(t){this.buffers=t;},t.prototype.getUniformLocation=function(t){return this.uniforms[t]},t.prototype.setUniform=function(t,e){var i;(i=this.uniformSetters[t])&&i(e);},t.prototype.initUniforms=function(t){for(var e in t){var i=this.uniformSetters[e];i&&i(t[e]);}},t.prototype.initAttributes=function(t){var e,i,n=this.gl;for(var r in t)e=t[r],i=this.attributes[r],n.bindBuffer(n.ARRAY_BUFFER,this.buffers.get(e)),n.vertexAttribPointer(i,e.size,e.type,e.normalized,e.stride,e.offset),n.enableVertexAttribArray(i);},t.prototype.initIndex=function(t){var e=this.buffers,i=this.gl,n=e.get(t),r=!0;n||(n=i.createBuffer(),e.set(t,n),r=!1),i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,n),r?delete t.data:i.bufferData(i.ELEMENT_ARRAY_BUFFER,t.data,i.STATIC_DRAW);},t.prototype.pass=function(t){return t==Mt.OPAQUE},t.prototype.draw=function(t){var e=this.gl,i=t.texture,n=t.groups;i&&(e.activeTexture(e.TEXTURE0),i.bind());for(var r=0,o=n;r<o.length;r++){var a=o[r],s=a.mode||this.mode;a.uniforms&&this.initUniforms(a.uniforms),a.index?(this.initIndex(a.index),e.drawElements(s,a.index.length,a.index.type,0)):e.drawArrays(s,a.arrays.first,a.arrays.count);}},t.prototype.setStates=function(t,e,i,n){var r=this.gl;t?r.enable(r.SCISSOR_TEST):r.disable(r.SCISSOR_TEST),n?r.enable(r.STENCIL_TEST):r.disable(r.STENCIL_TEST),e?r.enable(r.BLEND):r.disable(r.BLEND),i?r.enable(r.DEPTH_TEST):r.disable(r.DEPTH_TEST);},t.prototype.init=function(t,e,i){var n=this.gl,r=e==Mt.OPAQUE,o=this.glStates,a=o.blend,s=o.scissor,l=o.depth;null!=t.scissor&&(s=t.scissor),null!=t.blend&&(a=t.blend),null!=t.depth&&(l=t.depth),this.setStates(s,a,l,i&&!r&&a&&s),n.blendFunc(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA),n.depthMask(r);},t}(),Wt=function(t){function e(e,i){var n=t.call(this,e,e.TRIANGLES,"precision lowp float;\n\nattribute highp vec2 a_position;\nuniform float u_scale;\n\nuniform vec4 u_size;\nuniform mat4 u_matrix;\nuniform float u_strokeWidth;\nuniform vec2 u_topLeft;\nuniform float u_rotation;\nuniform vec4 u_offset;\nuniform bool u_alignMap;\nuniform vec2 u_resolution;\n\nvarying vec2 vSize;\nvarying vec2 vDir;\n\nconst float EXTENT_SCALE = 1.0 / 32.0;// 8912->512\n\nfloat toPixel(vec2 size){\n    float pixel = size.x;\n    if (size.y > 0.0){\n        // value is defined in meters -> convert to pixels at current zoom\n        pixel *= u_scale * size.y;\n    }\n    return pixel;\n}\n\nvoid main(void){\n    // LSB defines visibility\n    if (mod(a_position.x, 2.0) == 1.0)\n    {\n        // bit1 is direction/normal vector [-1,+1]\n        vec2 dir = mod(floor(a_position / 2.0), 2.0) * 2.0 - 1.0;\n        vec2 pos = floor(a_position / 4.0) * EXTENT_SCALE;\n        vec2 size = vec2(toPixel(u_size.xy), toPixel(u_size.zw));\n\n        size = (size + u_strokeWidth) * .5;\n\n        float rotation = u_rotation;\n\n        if (!u_alignMap){\n            rotation *= -1.0;\n        }\n\n        float rotSin = sin(rotation);\n        float rotCos = cos(rotation);\n        mat2 mRotate = mat2(rotCos, -rotSin, rotSin, rotCos);\n\n        vec2 pixel_offset = vec2(toPixel(u_offset.xy), toPixel(u_offset.zw));\n\n        if (u_alignMap){\n            vec2 shift = (pixel_offset + dir * vec2(size.x, -size.y) * mRotate) / u_scale;\n            gl_Position = u_matrix * vec4(u_topLeft + pos + shift, 0.0, 1.0);\n        } else {\n            vec4 cpos = u_matrix * vec4(u_topLeft + pos, 0.0, 1.0);\n            vec2 shift = dir * size * mRotate;\n            vec2 offset = pixel_offset * vec2(1.0, -1.0);\n\n            gl_Position = vec4(cpos.xy / cpos.w + (offset + shift) / u_resolution * 2.0, 0.0, 1.0);\n        }\n\n        vSize = size;\n        vDir = dir;\n\n    }\n}\n","precision lowp float;\n\nuniform vec4 u_fill;\nuniform vec4 u_stroke;\nuniform float u_strokeWidth;\n\nvarying vec2 vSize;\nvarying vec2 vDir;\n\n#define COLOR_UNDEF -1.0\n\nvoid main(void){\n    float dx = distance(vDir.x, 0.0) * vSize.x;\n    float dy = distance(vDir.y, 0.0) * vSize.y;\n\n    if (dx > vSize.x-u_strokeWidth || dy > vSize.y-u_strokeWidth){\n        gl_FragColor = u_stroke;\n    } else {\n        gl_FragColor = u_fill;\n        if(u_fill[0] == COLOR_UNDEF){\n//            discard;\n            gl_FragColor.a = 0.0;\n        };\n\n    }\n}\n",i)||this;return n.name="Rect",n.glStates=new Bt({scissor:!1,blend:!1,depth:!0}),n}return v(e,t),e}(Ut),Gt=function(t){function e(e,i){var n=t.call(this,e,e.TRIANGLES,"precision lowp float;\n\nattribute highp vec2 a_position;\nuniform vec2 u_radius;\nuniform mat4 u_matrix;\nuniform vec2 u_topLeft;\nuniform vec4 u_offset;\nuniform float u_scale;\nuniform vec2 u_resolution;\nuniform bool u_alignMap;\nuniform float u_strokeWidth;\n\nvarying vec2 v_position;\nvarying float v_radius;\n\nconst float EXTENT_SCALE = 1.0 / 32.0;// 8912->512\n\nfloat toPixel(vec2 size){\n    float value = size.x;\n    if (size.y > 0.0){\n        // value is defined in meters -> convert to pixels at current zoom\n        value *= u_scale * size.y;\n    }\n    return value;\n}\n\nvoid main(void){\n\n    if (mod(a_position.x, 2.0) == 1.0)\n    {\n        // LSB is direction/normal vector [-1,+1]\n        vec2 dir = mod(floor(a_position / 2.0), 2.0) * 2.0 - 1.0;\n        vec2 pos = floor(a_position / 4.0) * EXTENT_SCALE;\n\n        float radius = toPixel(u_radius);\n\n        radius = radius + u_strokeWidth / 2.0;\n\n        v_position = dir * radius;\n        v_radius = radius;\n\n        vec2 pixel_offset = vec2(toPixel(u_offset.xy), toPixel(u_offset.zw));\n\n        if (u_alignMap){\n            vec2 shift = (pixel_offset + v_position * vec2(1.0, -1.0)) / u_scale;\n            gl_Position = u_matrix * vec4(u_topLeft + pos + shift, 0.0, 1.0);\n        } else {\n            vec4 cpos = u_matrix * vec4(u_topLeft + pos, 0.0, 1.0);\n            vec2 offset = pixel_offset * vec2(1.0, -1.0);\n            gl_Position = vec4(cpos.xy / cpos.w + (offset + v_position) / u_resolution * 2.0, 0.0, 1.0);\n        }\n    }\n}\n","precision lowp float;\n\nuniform vec4 u_fill;\nuniform vec4 u_stroke;\nuniform float u_strokeWidth;\n\nvarying float v_radius;\nvarying vec2 v_position;\n\n#define COLOR_UNDEF -1.0\n\nvoid main(void){\n    float r = length(v_position);\n\n    if (r > v_radius) discard;\n\n    if (r < v_radius - u_strokeWidth){\n        if(u_fill[0] == COLOR_UNDEF) discard;\n        gl_FragColor = u_fill;\n    } else {\n        gl_FragColor = u_stroke;\n    }\n}\n",i)||this;return n.name="Circle",n.glStates=new Bt({scissor:!1,blend:!1,depth:!0}),n}return v(e,t),e}(Ut),Xt="precision lowp float;\n\nattribute vec2 a_position;\nattribute highp vec4 a_normal;\nattribute float a_lengthSoFar;\n\nuniform mat4 u_matrix;\nuniform highp vec2 u_strokeWidth;\nuniform highp float u_scale;\nuniform vec2 u_topLeft;\nuniform float u_texWidth;\nvarying vec2 v_normal;\nvarying float v_lengthSoFar;\nvarying vec2 v_width;\n\nuniform vec2 u_offset;\nuniform float u_tileScale;\n\nconst float N_SCALE = 1.0 / 8191.0;\n\n\nfloat toPixel(vec2 size){\n    float value = size.x;\n    if (size.y > 0.0){\n        // value is defined in meters -> convert to pixels at current zoom\n        value *= u_scale * size.y;\n    }\n    return value;\n}\n\nvoid main(void){\n\n    float strokeWidth = toPixel(u_strokeWidth);\n    float alias = strokeWidth<1. ? .65 : 1.;\n    float width = (strokeWidth+alias) / u_scale;\n    v_width = vec2(strokeWidth, alias * .5);\n    // LSB is direction/normal vector [-1,+1]\n    vec2 dir2 = mod(a_normal.zw, 2.0) * 2.0 - 1.0;\n    vec2 aliasNormal = floor(a_normal.zw * .5) * N_SCALE;\n    v_normal = dir2 * aliasNormal;\n    // LSB is direction/normal vector [-1,+1]\n    vec2 dir = mod(a_normal.xy, 2.0) * 2.0 - 1.0;\n    vec2 normal = floor(a_normal.xy * .5) * N_SCALE;\n\n    v_lengthSoFar = a_lengthSoFar / u_texWidth;\n\n    float lineOffset = toPixel(u_offset);\n\n    vec2 position = a_position + normal * -lineOffset / u_scale;\n\n    gl_Position = u_matrix * vec4(u_topLeft + position * u_tileScale + dir * normal * width, 0.0, 1.0);\n}\n\n",Zt=function(t){function e(e,i){var n=t.call(this,e,e.TRIANGLES,Xt,"precision lowp float;\n\nuniform sampler2D u_pattern;\nuniform vec4 u_fill;\nvarying vec2 v_normal;\nvarying float v_lengthSoFar;\nvarying vec2 texCoord;\nvarying vec2 v_width;\n\nvoid main(void){\n\n    float width = length(v_normal) * (v_width.s + v_width.t);\n    float alpha = 1.0 - clamp(.5 * (width - v_width.s + v_width.t) / v_width.t, .0, 1.);\n\n    gl_FragColor = u_fill;\n    gl_FragColor.a *= alpha;\n}\n",i)||this;return n.name="Line",n.glStates=new Bt({blend:!0,scissor:!0,depth:!0}),n}return v(e,t),e.prototype.pass=function(t){return t==Mt.ALPHA},e.prototype.init=function(e,i,n){t.prototype.init.call(this,e,i,n),this.gl.depthMask(!1);},e}(Ut),Ht=function(t){function e(e,i){var n=t.call(this,e,e.TRIANGLES,Xt,"precision lowp float;\n\nuniform vec4 u_fill;\nvarying vec2 v_normal;\nvarying vec2 v_width;\nvarying float v_lengthSoFar;\n\nuniform sampler2D u_pattern;\n\nvoid main(void){\n\n    float width = length(v_normal) * (v_width.s + v_width.t);\n    float alpha = 1.0 - clamp(.5 * (width - v_width.s + v_width.t) / v_width.t, .0, 1.);\n\n    gl_FragColor = u_fill;\n    gl_FragColor.a *= alpha * texture2D(u_pattern, vec2(fract(v_lengthSoFar))).r;\n}\n",i)||this;return n.name="Line",n.glStates=new Bt({blend:!0,scissor:!0,depth:!0}),n}return v(e,t),e.prototype.pass=function(t){return t==Mt.ALPHA},e.prototype.init=function(e,i,n){var r=this.gl;t.prototype.init.call(this,e,i,n),r.blendFunc(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA);},e}(Ut),Yt=function(t){function e(e,i){var n=t.call(this,e,e.TRIANGLES,"precision lowp float;\n\nattribute vec2 a_position;\n\nuniform float u_tileScale;\nuniform mat4 u_matrix;\nuniform vec2 u_topLeft;\n\nvoid main(void){\n    gl_Position = u_matrix * vec4( u_topLeft + a_position * u_tileScale, 0.0, 1.0 );\n}\n","precision lowp float;\n\nuniform vec4 u_fill;\n\nvoid main(void){\n    gl_FragColor = u_fill;\n}\n",i)||this;return n.name="Polygon",n}return v(e,t),e}(Ut),jt=function(t){function e(e,i){var n=t.call(this,e,e.TRIANGLES,"precision lowp float;\n\nattribute vec2 a_position;\nattribute vec2 a_textureCoord;\n\nuniform highp mat4 u_matrix;\nuniform highp vec2 u_topLeft;\nuniform highp vec2 u_resolution;\n\nvarying vec2 v_textureCoord;\n\nvoid main(void){\n    v_textureCoord = a_textureCoord;\n\n    vec4 position = u_matrix * vec4( u_topLeft + a_position, 0.0, 1.0 );\n\n    gl_Position = snapToScreenPixel(position, u_resolution);\n}\n","precision lowp float;\n\nvarying vec2 v_textureCoord;\nuniform sampler2D u_sampler;\n\nvoid main(void){\n    gl_FragColor = texture2D(u_sampler, v_textureCoord);\n}\n",i)||this;return n.name="Image",n.glStates=new Bt({scissor:!0,blend:!1,depth:!0}),n}return v(e,t),e.prototype.draw=function(e){var i=this.gl,n=e.texture;n&&(i.activeTexture(i.TEXTURE0),n.bind()),t.prototype.draw.call(this,e);},e}(Ut),qt=function(t){function e(e,i){var n=t.call(this,e,e.TRIANGLES,"precision highp float;\n\nattribute vec2 a_point;\nattribute vec2 a_position;\nattribute vec2 a_texcoord;\n\nuniform vec2 u_resolution;\nuniform mat4 u_matrix;\nuniform vec2 u_topLeft;\nuniform vec2 u_offset;\nuniform float u_scale;\nuniform float u_rotate;\nuniform bool u_alignMap;\nuniform bool u_fixedView;\nuniform float u_atlasScale;\n\nvarying vec2 v_texcoord;\nvarying vec4 vColor;\n\nconst float EXTENT_SCALE = 1.0 / 64.0;// 32768->512\nconst float OFFSET_SCALE = 1.0 / 32.0;\n\nconst float PI_05 = M_PI * 0.5;\nconst float PI_15 = M_PI * 1.5;\nconst float PI_20 = M_PI * 2.0;\n\nvec2 rotate(vec2 point, float rad){\n    float s = sin(rad);\n    float c = cos(rad);\n    return vec2(point.x * c + point.y * s, point.y * c - point.x * s);\n}\n\nvoid main(void){\n    if (mod(a_position.x, 2.0) == 1.0){\n\n        vec2 position = floor(a_position / 2.0) * EXTENT_SCALE;\n\n        vec2 rotLowHi = mod(a_texcoord, 32.0);\n        float rotation = rotLowHi.y * 32.0 + rotLowHi.x;\n        // texture coodrinates bit6->bit16\n        v_texcoord = floor(a_texcoord / 32.0) * u_atlasScale;\n\n        vec2 labelOffset = u_offset;\n\n        labelOffset *= DEVICE_PIXEL_RATIO;\n\n        rotation = rotation / 1024.0 * PI_20;// 9bit -> 2PI;\n\n        if (u_alignMap){\n            float absRotation = mod(u_rotate + rotation, PI_20);\n\n            if (absRotation > PI_05 && absRotation < PI_15){\n                rotation += M_PI;\n                labelOffset *= -1.0;\n            }\n\n            vec2 posOffset = rotate(a_point.xy * OFFSET_SCALE + labelOffset, -rotation) / u_scale / DEVICE_PIXEL_RATIO;\n            gl_Position = u_matrix * vec4(u_topLeft + position + posOffset, 0.0, 1.0);\n        } else {\n            vec4 cpos = u_matrix * vec4((u_topLeft + position), 0.0, 1.0);\n            vec2 offset = rotate(a_point * OFFSET_SCALE + labelOffset, -rotation);\n            gl_Position = vec4(cpos.xy / cpos.w + vec2(1, -1) * offset / DEVICE_PIXEL_RATIO / u_resolution * 2.0, 0.0, 1.0);\n        }\n\n        if (u_fixedView){\n            // round/snap to pixelgrid if mapview is static -> crisp\n            gl_Position = snapToScreenPixel(gl_Position, u_resolution);\n        }\n    }\n}\n","precision mediump float;\n\nvarying vec2 v_texcoord;\nuniform sampler2D u_texture;\nuniform bool u_strokeOnly;\nuniform vec4 u_fillColor;\nuniform vec4 u_strokeColor;\n\nvoid main() {\n    vec4 glyph = texture2D(u_texture, v_texcoord);\n    vec4 color;\n    float glyphAlpha;\n\n    if (u_strokeOnly){\n        color = u_strokeColor;\n        glyphAlpha = glyph.a;\n    } else {\n        color = u_fillColor;\n        glyphAlpha = glyph.r;\n    }\n\n    gl_FragColor = glyphAlpha * vec4(color.rgb * color.a, color.a);\n}\n",i)||this;return n.name="Text",n.glStates=new Bt({blend:!0,scissor:!1,depth:!0}),n}return v(e,t),e.prototype.pass=function(t){return t==Mt.ALPHA},e.prototype.init=function(e,i,n){var r=this.gl;t.prototype.init.call(this,e,i,n),r.depthMask(!1),r.blendFunc(r.ONE,r.ONE_MINUS_SRC_ALPHA);},e.prototype.draw=function(e){var i=this.gl,n=this.uniforms;i.uniform1f(n.u_strokeOnly,1),t.prototype.draw.call(this,e),i.uniform1f(n.u_strokeOnly,0),t.prototype.draw.call(this,e);},e}(Ut),Vt=function(t){function e(e,i){var n=t.call(this,e,e.TRIANGLES,"precision lowp float;\n\nattribute vec2 a_size;\nattribute highp vec2 a_position;\nattribute vec2 a_texcoord;\n\nuniform mat4 u_matrix;\nuniform vec2 u_topLeft;\nuniform float u_scale;\nuniform float u_atlasScale;\nuniform vec2 u_offset;\nuniform bool u_alignMap;\nuniform vec2 u_resolution;\nuniform bool u_fixedView;\n\nvarying float vOpacity;\nvarying vec2 v_texcoord;\n\nconst float EXTENT_SCALE = 1.0 / 32.0;// 8912->512\n\nvoid main(void){\n\n    // LSB defines visibility\n    if (mod(a_position.x, 2.0) == 1.0)\n    {\n        vec2 rotLowHi = mod(a_texcoord, 32.0);\n        float rotation = rotLowHi.x + floor(rotLowHi.y * 32.0);\n\n        rotation = rotation / 1024.0 * 2.0 * M_PI;// 10bit -> 2PI;\n\n        // bit1 is direction/normal vector [-1,+1]\n        vec2 dir = mod(floor(a_position / 2.0), 2.0) * 2.0 - 1.0;\n        vec2 pos = floor(a_position / 4.0) * EXTENT_SCALE;\n\n\n        if (!u_alignMap){\n            rotation *= -1.0;\n        }\n\n        float rotSin = sin(rotation);\n        float rotCos = cos(rotation);\n        mat2 mRotate = mat2(rotCos, -rotSin, rotSin, rotCos);\n\n        if (u_alignMap){\n            vec2 shift = ((u_offset + dir * vec2(a_size.x, -a_size.y) * 0.5) * mRotate) / u_scale;\n            gl_Position = u_matrix * vec4(u_topLeft + pos + shift, 0.0, 1.0);\n        } else {\n            vec4 cpos = u_matrix * vec4(u_topLeft + pos, 0.0, 1.0);\n            vec2 shift = dir * a_size * 0.5 * mRotate;\n            vec2 offset = vec2(u_offset.x, -u_offset.y);\n            gl_Position = vec4(cpos.xy / cpos.w + (offset + shift) / u_resolution * 2.0, 0.0, 1.0);\n        }\n\n        if (u_fixedView){\n            gl_Position = snapToScreenPixel(gl_Position, u_resolution);\n        }\n\n        // textcoords bit6->bit16\n        v_texcoord = floor(a_texcoord / 32.0) * u_atlasScale;\n    }\n}\n","precision mediump float;\n\nvarying vec2 v_texcoord;\nuniform float u_opacity;\n\nuniform sampler2D u_texture;\n\nvoid main() {\n\n   gl_FragColor = texture2D(u_texture, v_texcoord);\n\n   gl_FragColor.a *= u_opacity;\n}\n",i)||this;return n.name="icon",n.glStates=new Bt({blend:!0,scissor:!1,depth:!0}),n}return v(e,t),e.prototype.pass=function(t){return t==Mt.ALPHA},e.prototype.init=function(e,i,n){var r=this.gl;t.prototype.init.call(this,e,i,n),r.blendFunc(r.ONE,r.ONE_MINUS_SRC_ALPHA);},e}(Ut),Kt=function(t){function e(e,i){var n=t.call(this,e,e.TRIANGLES,"precision lowp float;\n\nattribute vec3 a_position;\nattribute vec3 a_normal;\n\nuniform mat4 u_matrix;\n\nuniform vec2 u_topLeft;\nuniform float u_zoom;\n\nvarying vec4 v_fill;\nvarying vec3 v_normal;\n\n\nvoid main(void){\n    gl_Position = u_matrix * vec4(u_topLeft + a_position.xy, -a_position.z / u_zoom, 1.0);\n    v_normal = a_normal;\n}\n","precision lowp float;\n\nuniform vec4 u_fill;\nuniform vec4 u_stroke;\nuniform bool u_strokePass;\nvarying vec3 v_normal;\n\n#define lightDir normalize(vec3(0.5, 0.0, -1.0))\n#define top vec2(0.0)\n\nvoid main(void){\n    if (u_strokePass){\n        gl_FragColor = u_stroke;\n    } else {\n        if (v_normal.xy == top){\n            gl_FragColor = u_fill;\n        } else {\n            float diffuse = 0.3 + dot(v_normal, lightDir) * 0.7;\n            gl_FragColor.rgb = u_fill.rgb * diffuse;\n        }\n        gl_FragColor.a = u_fill.a;\n    }\n}\n",i)||this;return n.name="Extrude",n.glStates=new Bt({scissor:!1,blend:!1,depth:!0}),n}return v(e,t),e.prototype.init=function(e,i,n){var r=this.gl;this._pass=i,t.prototype.init.call(this,e,i,n),r.depthMask(!0),i==Mt.POST_ALPHA&&(r.enable(r.STENCIL_TEST),r.stencilFunc(r.GREATER,1,255),r.stencilOp(r.KEEP,r.KEEP,r.REPLACE)),r.polygonOffset(1,1),r.enable(r.POLYGON_OFFSET_FILL);},e.prototype.draw=function(e){var i=this.gl;this._pass==Mt.ALPHA?(i.colorMask(!1,!1,!1,!1),t.prototype.draw.call(this,e),i.colorMask(!0,!0,!0,!1)):t.prototype.draw.call(this,e),i.disable(i.POLYGON_OFFSET_FILL);},e}(Ut),Qt=function(){function t(t,e,i){this.attributes={},this.uniforms={},this.flat=!0,this.groups=[],t&&(this.addGroup(t,i),this.type=e);}return t.prototype.createIndex=function(t,e){return {index:e?{data:new Uint32Array(t),type:5125,length:t.length}:{data:new Uint16Array(t),type:5123,length:t.length}}},t.prototype.createArrays=function(t){return {arrays:t}},t.prototype.addGroup=function(t,e,i){if(t){var n=void 0;return n=Array.isArray(t)?this.createIndex(t,e):this.createArrays(t),i&&(n.mode=i),this.groups[this.groups.length]=n}},t.prototype.addUniform=function(t,e){this.uniforms[t]=e;},t.prototype.getUniform=function(t){return this.uniforms[t]},t.prototype.addAttribute=function(t,e){var i=e.data;e.type=function(t){return t instanceof Int8Array?5120:t instanceof Uint8Array?5121:t instanceof Int16Array?5122:t instanceof Uint16Array?5123:t instanceof Int32Array?5124:t instanceof Uint32Array?5125:t instanceof Float32Array?5126:void 0}(i),null==e.stride&&(e.stride=0),null==e.dirty&&(e.dirty=!0),this.attributes[t]=e,this.size=i.length;},t.prototype.getAttributes=function(){return this.attributes},t.prototype.destroy=function(){},t}(),$t=function(t,e,i,n,r,o){return void 0===o&&(o=1),Math.abs(e)<o&&Math.abs(n)<o||Math.abs(t-r)<o&&Math.abs(i-r)<o||Math.abs(e-r)<o&&Math.abs(n-r)<o||Math.abs(t)<o&&Math.abs(i)<o},Jt=function(t){var e=t[0],i=t[1],n=e*e+i*i;return n>0&&(n=1/Math.sqrt(n),t[0]=e*n,t[1]=i*n),t},te=function(t,e,i,n,r,o,a,s){if(void 0===s&&(s=1),"round"==t)o.push(e,i,e,i,e,i),n*=Math.SQRT2*s,r*=Math.SQRT2*s,a.push(n<<1|0,r<<1|1,n<<1|0,r<<1|1,n<<1|1,r<<1|0,n<<1|1,r<<1|0,r<<1|1,n<<1|1,r<<1|1,n<<1|1);else if("square"==t){o.push(e,i,e,i,e,i,e,i,e,i,e,i);var l=r-n,u=n+r;a.push(n<<1|0,r<<1|1,0,0,u<<1|1,l<<1|0,0,0,n<<1|1,r<<1|0,0,0,l<<1|1,u<<1|1,n<<1|1,r<<1|1,u<<1|1,l<<1|0,n<<1|1,r<<1|1,n<<1|0,r<<1|1,0,0);}},ee=function(t,e,i,n,r,o,a,s,l,u,h,f,c,p,d){void 0===p&&(p=0),void 0===d&&(d=0),u*=.5;var v,y,g,m=o+16,x=n[r/2-1],_=p*x,w=d*x;if(_&&w&&d<p){var b=_;_=w,w=b;}c&&(s="butt","none"!=l&&(l="miter")),h&&(s="butt",c||(l="none"));var T=null,L=null,S=!1;for(g=0;g<r;g+=2){var A=i[g],M=i[g+1],C=Z(A,M,0,0,o,o);if(C){if(!S){var I=g-4;T=null==T||I<T?I:T;}}else if(g)if(S);else {var z=A,E=v,P=M,k=y;if(v<A&&(z=v,E=A),y<M&&(P=y,k=M),a&&!$t(v,y,A,M,o)||!a&&H(z,E,P,k,-16,m,-16,m)){I=g-4;T=null==T||I<T?I:T;}else T&&(L=g);}null==T||null==L&&g!=r-2||(T||(T=0),L||(L=r-2),T<0&&(T=f?-2:0),ie(t,e,i,n,r,T,L+2,o,s,l,u,h,_,w,c,f),T=null,L=null),S=C,v=A,y=M;}},ie=function(t,e,i,n,r,o,a,s,l,u,h,f,c,p,d,v){var y,g=o;o<0&&(g=r-2+o);var m,x,_,w,b,T,L,S,A,M,C,I,z,E,P,k,D,R,O,B,N,F,U=i[g],W=i[g+1],G=n[g/2],X=a,Z=null,H=null,Y=null,j=null,q=null,V=null;if(p&&p<G)return G;for(var K=v,Q=o+2;Q<X;Q+=2){w=i[Q],b=i[Q+1];var $=!v&&Q==X-2,J=void 0,tt=null,et=!1,it=void 0;_=u,S=(F=Jt([T=U-w,L=W-b]))[1],A=F[0],j=null==j;var nt=G,rt=(G=n[Q/2])-nt;if(length=rt,p&&p<G&&p>nt){var ot=(p-nt)/rt;w=U-T*ot,b=W-L*ot,length*=ot,$=!0,X=0;}if(c){if(!(c<G)){U=w,W=b;continue}if(c>nt){var at=(c-nt)/rt;U-=T*at,W-=L*at,length*=1-at,j=!0;}}if(j&&$&&(u="none"),!$){var st=Q%(r-2);Z=i[st+2],J=T*(Y=b-i[st+3])-L*(H=w-Z)<0;var lt=[M=(tt=Jt([H,Y]))[1]+S,C=-tt[0]-A];(it=1/(lt[0]*S-lt[1]*A))==1/0?(et=!0,M=2,C=2):(et=it>3,"miter"==u&&et&&(_="bevel"),it>2?(M=(y=Jt(lt))[0],C=y[1],M*=2,C*=2):(M=lt[0]*it,C=lt[1]*it)),M*=-8191,C*=-8191;}if(R=D=[1^(E=[-(S*=8191)<<1|1,(A*=8191)<<1|1])[0],1^E[1]],O=D,P=E,k=E,"none"!=u){if(!$&&"miter"==_&&X>4&&(O=[M<<1|0,C<<1|0],k=[M<<1|1,C<<1|1]),j||B||(N?(P=[I<<1|1,z<<1|1],"miter"==u&&(R=[I<<1|0,z<<1|0])):(R=[I<<1|0,z<<1|0],"miter"==u&&(P=[I<<1|1,z<<1|1]))),!et&&!$&&"miter"!=u){var ut=h*M/-8191,ht=h*C/-8191;J&&(ut*=-1,ht*=-1);var ft=F[0]*ut+F[1]*ht;length<ft?et=!0:J?k=[M<<1|1,C<<1|1]:O=[M<<1|0,C<<1|0];}if((!j||$)&&G)if("round"==u&&(N?e.push(x[0],x[1],x[0],x[1],R[0],R[1],R[0],R[1],I<<1|0,z<<1|0,I<<1|0,z<<1|0):e.push(I<<1|1,z<<1|1,I<<1|1,z<<1|1,P[0],P[1],P[0],P[1],m[0],m[1],m[0],m[1]),t.push(q,V,q,V,q,V)),!j)if(B){if(!d){var ct,pt=0,dt=0;if("round"!=u)pt=8191*(ct=Jt([M,C]))[0],dt=8191*ct[1];pt=pt<<1|1,dt=dt<<1|1,N?e.push(0,0,0,0,D[0],D[1],pt,dt,x[0],x[1],pt,dt):e.push(0,0,0,0,m[0],m[1],pt,dt,E[0],E[1],pt,dt),t.push(q,V,q,V,q,V);}}else if("miter"!=u)(ct=Jt([I,z]))[0]*=8191,ct[1]*=8191,N?"bevel"==u?e.push(I<<1|1,z<<1|1,ct[0]<<1|1,ct[1]<<1|1,R[0],R[1],ct[0]<<1|0,ct[1]<<1|0,x[0],x[1],ct[0]<<1|0,ct[1]<<1|0):e.push(I<<1|1,z<<1|1,ct[0]<<1|1,ct[1]<<1|1,R[0],R[1],R[0],R[1],x[0],x[1],x[0],x[1]):"bevel"==u?e.push(P[0],P[1],ct[0]<<1|1,ct[1]<<1|1,I<<1|0,z<<1|0,ct[0]<<1|0,ct[1]<<1|0,m[0],m[1],ct[0]<<1|1,ct[1]<<1|1):e.push(P[0],P[1],P[0],P[1],I<<1|0,z<<1|0,ct[0]<<1|0,ct[1]<<1|0,m[0],m[1],m[0],m[1]),t.push(q,V,q,V,q,V);}if(!K&&(e.push(P[0],P[1],E[0],E[1],O[0],O[1],D[0],D[1],R[0],R[1],D[0],D[1],P[0],P[1],E[0],E[1],k[0],k[1],E[0],E[1],O[0],O[1],D[0],D[1]),t.push(U,W,w,b,U,W,U,W,w,b,w,b),j&&te(l,U,W,S,A,t,e),$&&te(l,w,b,-S,-A,t,e),f)){var vt=G-length;f.push(vt,G,vt,vt,G,G);}K=!1,m=E,x=D,I=M,z=C,q=w,V=b,U=w,W=b,N=J,B=et;}},ne=function(){function t(t,e){void 0===e&&(e=128),this.length=0,this.data=new t(this.size=e);}return t.prototype.get=function(t){return this.data[t]},t.prototype.push=function(t){var e=arguments.length;this.reserve(e);for(var i=0;i<e;i++)this.data[this.length++]=arguments[i];return this.length},t.prototype.reserve=function(t){var e=this.data,i=t-(this.size-this.length);i>0&&(this.size+=Math.max(i,this.size),this.data=new e.constructor(this.size),this.length&&this.data.set(e));},t.prototype.trim=function(){return this.data=this.data.slice(0,this.length)},t}(),re=function(t,e,i){for(var n;++e<t.length;){var r=t.charAt(e),o=null===(n=i.glyphInfos[r])||void 0===n?void 0:n.glyph;if(o){var a=o.direction;if(a)return a}}},oe=function(t,e,i,n,r,o){var a=o.offset,s=e.spaceWidth,l=e.glyphInfos[t],u=o.x,h=0,f=n.data,c=n.length,p=r.data,d=r.length,v=i>>5,y=31&i;if(l){var g=l.glyph,m=l.u1<<5|y,x=l.u2<<5|y,_=l.v1<<5|v,w=l.v2<<5|v,b=g.advanceX,T=g.data,L=T.width,S=T.height,A=32*u;S*=32,h=A+32*L,f[c++]=A,f[c++]=0,f[c++]=h,f[c++]=S,f[c++]=A,f[c++]=S,f[c++]=h,f[c++]=0,f[c++]=h,f[c++]=S,f[c++]=A,f[c++]=0,p[d++]=m,p[d++]=_,p[d++]=x,p[d++]=w,p[d++]=m,p[d++]=w,p[d++]=x,p[d++]=_,p[d++]=x,p[d++]=w,p[d++]=m,p[d++]=_,u+=b,a+=12;}else " "==t&&(u+=s);n.length=c,r.length=d,o.x=u,o.offset=a,o.x2=h;},ae=function(t,e,i,n,r,o,a,s,l){for(var u=e,h=i,f=void 0,c=void 0;u<h;u++){if(f=n?e+(h-1-u):u,c=t.charAt(f),n&&j(t.charCodeAt(f))){for(var p=f,d=0;--p>=0;)if(!j(t.charCodeAt(p))){for(;++p<=f;)oe(t.charAt(p),r,o,a,s,l),d++;break}if(d){u+=d-1;continue}}oe(c,r,o,a,s,l);}},se=function(t,e,i,n,r){var o;void 0===i&&(i=0);var a=t.length;n?n.reserve(18*a):n=new ne(Int16Array,18*a),r?r.reserve(12*a):r=new ne(Uint16Array,12*a);var s,l,u,h={x:0,x2:0,offset:0},f=0;i=Math.round(i);for(var c=0;c<a;c++){var p=t.charAt(c),d=e.glyphInfos[p],v=c==a-1,y=(null===(o=null==d?void 0:d.glyph)||void 0===o?void 0:o.direction)||0;if(!s){if(" "==p)continue;s=y=y||1;}if(void 0!==l){var g=!0;if(!y){var m=re(t,c,e);g=m&&m!=l;}if(g&&y!=l){var x=c-1;" "==u&&1==y&&x--,x++,ae(t,f,x,-1==l,e,i,n,r,h),f=x;}}if(v&&f<=c){x=c+Number(" "!=p);ae(t,f,x,y?-1==y:l!=s,e,i,n,r,h);}y&&(l=y),u=p;}var _=h.x2;return {count:h.offset/2,position:n.data,texcoord:r.data,width:_/32/e.scale}},le=q.getInstance(),ue=function(){function t(t,e,i,n){this.x=0,this.y=0,this.glyphInfos={},this.avgCharWidth=0,this.glyphs=0;var r=le.initFont(t,e);if(this.style=t,this.letterHeight=r.letterHeight,this.lineHeight=r.letterHeight*e,this.baselineOffset=r.baselineOffset,this.rowHeight=r.rowHeight,this.spaceWidth=r.spaceWidth,this.fontScale=r.fontScale,!i)for(i=1;i<r.rowHeight;)i*=2;i*=e,this.width=i,this.height=i,this.maxWidth=i,this.maxHeight=i,this.style=t,this.scale=e,this.font=r,n&&this.addChars(n);}return t.prototype.getTextWidth=function(t){return le.getTextWidth(t,this.font)},t.prototype.placeGlyph=function(t){var e=this.rowHeight;if(this.x+t>this.width){var i=this.y+2*e;i>this.maxHeight?i>this.height?(this.height*=2,this.width*=2,0==this.x?this.maxWidth=this.maxWidth=this.width:(this.x=this.maxWidth,this.y=0)):(this.x=0,this.y+=e,this.maxHeight=this.height,this.maxWidth=this.width):(this.y+=e,this.maxHeight<this.height?this.x=this.maxWidth:this.x=0);}},t.prototype.addChars=function(t){for(var e=this.glyphInfos,i=this.rowHeight,n=!1,r=0,o=t;r<o.length;r++){var a=o[r];if(" "!=a&&!e[a]){var s=le.getGlyph(a,this.font),l=a.charCodeAt(0),u=s.data.width,h=s.width;if(l){this.avgCharWidth=(this.avgCharWidth*this.glyphs+h)/++this.glyphs,n=!0,this.placeGlyph(u);var f=this.x,c=this.y;e[a]={u1:f,v1:c,u2:f+u,v2:c+i,glyph:s},this.x+=u;}}}return n},t}(),he=function(t){function e(e,i,n){var r=t.call(this,e)||this;r.dirty=!1;var o=e.dpr;return r.atlas=new ue(i,o,n),r.format=e.LUMINANCE_ALPHA,r}return v(e,t),e.prototype.addChars=function(t){this.dirty=this.atlas.addChars(t)||this.dirty;},e.prototype.bufferLength=function(t){for(var e=0,i=0,n=t;i<n.length;i++){" "!=n[i]&&e++;}return 6*e*2},e.prototype.getAtlas=function(){return this.atlas},e.prototype.sync=function(){if(this.dirty){var t=this.atlas;this.gl;var e=t.glyphInfos;for(var i in this.set({width:t.width,height:t.height}),e){var n=e[i];this.set(n.glyph.data,n.u1,n.v1);}}},e.prototype.destroy=function(){this.atlas=null,t.prototype.destroy.call(this);},e}(It),fe=function(){function t(t){this.i32=!1,this._flat=!0,this.scissor=t;}return t.prototype.count=function(){var t=this.attributes.a_position;return t.data.length/t.size-this.first},t.prototype.index=function(){return this._index=this._index||[]},t.prototype.hasIndex=function(){return !!this._index},t.prototype.isEmpty=function(){return 0==this.count()},t.prototype.trimAttribute=function(t){var e=t;return e.data=e.data.trim(),e},t.prototype.isFlat=function(){return this._flat},t.prototype.finalize=function(t){var e,i=this,n=i.attributes;if(i.hasIndex()){var r=i.index();if(!r.length)return null;e=new Qt(r,t,i.i32);}else e=new Qt({first:i.first,count:i.count()},t);for(var o in n){var a=n[o];a.data.length&&e.addAttribute(o,i.trimAttribute(a));}return e},t}(),ce=function(t){function e(){var e=t.call(this,!0)||this;return e.attributes={a_position:{data:new ne(Float32Array),size:2},a_normal:{data:new ne(Int16Array),size:4},a_lengthSoFar:{data:new ne(Uint16Array),size:1}},e.first=0,e}return v(e,t),e}(fe),pe="undefined"!=typeof Float32Array?Float32Array:Array;function de(t,e,i){var n=e[0],r=e[1],o=e[2],a=i[3]*n+i[7]*r+i[11]*o+i[15];return a=a||1,t[0]=(i[0]*n+i[4]*r+i[8]*o+i[12])/a,t[1]=(i[1]*n+i[5]*r+i[9]*o+i[13])/a,t[2]=(i[2]*n+i[6]*r+i[10]*o+i[14])/a,t}function ve(t){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function ye(t,e){var i=e[0],n=e[1],r=e[2],o=e[3],a=e[4],s=e[5],l=e[6],u=e[7],h=e[8],f=e[9],c=e[10],p=e[11],d=e[12],v=e[13],y=e[14],g=e[15],m=i*s-n*a,x=i*l-r*a,_=i*u-o*a,w=n*l-r*s,b=n*u-o*s,T=r*u-o*l,L=h*v-f*d,S=h*y-c*d,A=h*g-p*d,M=f*y-c*v,C=f*g-p*v,I=c*g-p*y,z=m*I-x*C+_*M+w*A-b*S+T*L;return z?(z=1/z,t[0]=(s*I-l*C+u*M)*z,t[1]=(r*C-n*I-o*M)*z,t[2]=(v*T-y*b+g*w)*z,t[3]=(c*b-f*T-p*w)*z,t[4]=(l*A-a*I-u*S)*z,t[5]=(i*I-r*A+o*S)*z,t[6]=(y*_-d*T-g*x)*z,t[7]=(h*T-c*_+p*x)*z,t[8]=(a*C-s*A+u*L)*z,t[9]=(n*A-i*C-o*L)*z,t[10]=(d*b-v*_+g*m)*z,t[11]=(f*_-h*b-p*m)*z,t[12]=(s*S-a*M-l*L)*z,t[13]=(i*M-n*S+r*L)*z,t[14]=(v*x-d*w-y*m)*z,t[15]=(h*w-f*x+c*m)*z,t):null}Math.hypot||(Math.hypot=function(){for(var t=0,e=arguments.length;e--;)t+=arguments[e]*arguments[e];return Math.sqrt(t)}),Ft=new pe(3),pe!=Float32Array&&(Ft[0]=0,Ft[1]=0,Ft[2]=0);var ge={create:function(){var t=new pe(16);return pe!=Float32Array&&(t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0),t[0]=1,t[5]=1,t[10]=1,t[15]=1,t},lookAt:function(t,e,i,n){var r,o,a,s,l,u,h,f,c,p,d=e[0],v=e[1],y=e[2],g=n[0],m=n[1],x=n[2],_=i[0],w=i[1],b=i[2];return Math.abs(d-_)<1e-6&&Math.abs(v-w)<1e-6&&Math.abs(y-b)<1e-6?ve(t):(h=d-_,f=v-w,c=y-b,r=m*(c*=p=1/Math.hypot(h,f,c))-x*(f*=p),o=x*(h*=p)-g*c,a=g*f-m*h,(p=Math.hypot(r,o,a))?(r*=p=1/p,o*=p,a*=p):(r=0,o=0,a=0),s=f*a-c*o,l=c*r-h*a,u=h*o-f*r,(p=Math.hypot(s,l,u))?(s*=p=1/p,l*=p,u*=p):(s=0,l=0,u=0),t[0]=r,t[1]=s,t[2]=h,t[3]=0,t[4]=o,t[5]=l,t[6]=f,t[7]=0,t[8]=a,t[9]=u,t[10]=c,t[11]=0,t[12]=-(r*d+o*v+a*y),t[13]=-(s*d+l*v+u*y),t[14]=-(h*d+f*v+c*y),t[15]=1,t)},multiply:function(t,e,i){var n=e[0],r=e[1],o=e[2],a=e[3],s=e[4],l=e[5],u=e[6],h=e[7],f=e[8],c=e[9],p=e[10],d=e[11],v=e[12],y=e[13],g=e[14],m=e[15],x=i[0],_=i[1],w=i[2],b=i[3];return t[0]=x*n+_*s+w*f+b*v,t[1]=x*r+_*l+w*c+b*y,t[2]=x*o+_*u+w*p+b*g,t[3]=x*a+_*h+w*d+b*m,x=i[4],_=i[5],w=i[6],b=i[7],t[4]=x*n+_*s+w*f+b*v,t[5]=x*r+_*l+w*c+b*y,t[6]=x*o+_*u+w*p+b*g,t[7]=x*a+_*h+w*d+b*m,x=i[8],_=i[9],w=i[10],b=i[11],t[8]=x*n+_*s+w*f+b*v,t[9]=x*r+_*l+w*c+b*y,t[10]=x*o+_*u+w*p+b*g,t[11]=x*a+_*h+w*d+b*m,x=i[12],_=i[13],w=i[14],b=i[15],t[12]=x*n+_*s+w*f+b*v,t[13]=x*r+_*l+w*c+b*y,t[14]=x*o+_*u+w*p+b*g,t[15]=x*a+_*h+w*d+b*m,t},perspective:function(t,e,i,n,r){var o,a=1/Math.tan(e/2);return t[0]=a/i,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=a,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[11]=-1,t[12]=0,t[13]=0,t[15]=0,null!=r&&r!==1/0?(o=1/(n-r),t[10]=(r+n)*o,t[14]=2*r*n*o):(t[10]=-1,t[14]=-2*n),t},rotateX:function(t,e,i){var n=Math.sin(i),r=Math.cos(i),o=e[4],a=e[5],s=e[6],l=e[7],u=e[8],h=e[9],f=e[10],c=e[11];return e!==t&&(t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15]),t[4]=o*r+u*n,t[5]=a*r+h*n,t[6]=s*r+f*n,t[7]=l*r+c*n,t[8]=u*r-o*n,t[9]=h*r-a*n,t[10]=f*r-s*n,t[11]=c*r-l*n,t},rotateZ:function(t,e,i){var n=Math.sin(i),r=Math.cos(i),o=e[0],a=e[1],s=e[2],l=e[3],u=e[4],h=e[5],f=e[6],c=e[7];return e!==t&&(t[8]=e[8],t[9]=e[9],t[10]=e[10],t[11]=e[11],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15]),t[0]=o*r+u*n,t[1]=a*r+h*n,t[2]=s*r+f*n,t[3]=l*r+c*n,t[4]=u*r-o*n,t[5]=h*r-a*n,t[6]=f*r-s*n,t[7]=c*r-l*n,t},translate:function(t,e,i){var n,r,o,a,s,l,u,h,f,c,p,d,v=i[0],y=i[1],g=i[2];return e===t?(t[12]=e[0]*v+e[4]*y+e[8]*g+e[12],t[13]=e[1]*v+e[5]*y+e[9]*g+e[13],t[14]=e[2]*v+e[6]*y+e[10]*g+e[14],t[15]=e[3]*v+e[7]*y+e[11]*g+e[15]):(n=e[0],r=e[1],o=e[2],a=e[3],s=e[4],l=e[5],u=e[6],h=e[7],f=e[8],c=e[9],p=e[10],d=e[11],t[0]=n,t[1]=r,t[2]=o,t[3]=a,t[4]=s,t[5]=l,t[6]=u,t[7]=h,t[8]=f,t[9]=c,t[10]=p,t[11]=d,t[12]=n*v+s*y+f*g+e[12],t[13]=r*v+l*y+c*g+e[13],t[14]=o*v+u*y+p*g+e[14],t[15]=a*v+h*y+d*g+e[15]),t},scale:function(t,e,i){var n=i[0],r=i[1],o=i[2];return t[0]=e[0]*n,t[1]=e[1]*n,t[2]=e[2]*n,t[3]=e[3]*n,t[4]=e[4]*r,t[5]=e[5]*r,t[6]=e[6]*r,t[7]=e[7]*r,t[8]=e[8]*o,t[9]=e[9]*o,t[10]=e[10]*o,t[11]=e[11]*o,t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15],t},clone:function(t){var e=new pe(16);return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e[8]=t[8],e[9]=t[9],e[10]=t[10],e[11]=t[11],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15],e},copy:function(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t[8]=e[8],t[9]=e[9],t[10]=e[10],t[11]=e[11],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15],t},invert:ye,identity:ve},me=45*Math.PI/180,xe=function(t,e){return Math.round((t+1)/2*e)},_e={font:"bold 14px Arial",stroke:"red",fill:"white",strokeWidth:3},we=function(){function t(t){this.gridTextBuf=new WeakMap,this.tileGrid=!1,this.tileSize=256,this.dbgTile=function(t,e){void 0===t&&(t=[1,0,0,1]),void 0===e&&(e=2);var i=new ce,n=i.attributes;ee(n.a_position.data,n.a_normal.data,new Float32Array([0,0,1,0,1,1,0,1,0,0]),new Float32Array([0,1,2,3,4]),10,1,!1,"butt","none",e);var r=i.finalize("Line");return r.addUniform("u_zIndex",0),r.addUniform("u_fill",t),r.addUniform("u_strokeWidth",[e,0]),r.addUniform("u_offset",[0,0]),r.scissor=!1,r.depth=!1,r}(),this.buffers=new WeakMap,this.ctxAttr=y({alpha:!0,antialias:!1,depth:!0,stencil:!0,premultipliedAlpha:!1,preserveDrawingBuffer:!1},t),this.pMat=ge.create(),this.vMat=ge.create(),this.invPMat=ge.create(),this.screenMat=ge.create(),this.invScreenMat=ge.create(),this.tilePreviewTransform={m:ge.create(),tx:0,ty:0,s:0};var e,i,n,r=(e=1,i=new Qt([0,1,3,3,1,2],"Polygon"),n=e>256?Int16Array:Int8Array,i.addAttribute("a_position",{data:new n([0,0,e,0,e,e,0,e]),size:2}),i.addUniform("u_zIndex",0),i.addUniform("u_fill",[1,1,1,1]),i.scissor=!0,i.depth=!1,i.alpha=0,i);r.alpha=Mt.ALPHA,r.blend=!0,this.stencilTile=r;}return t.prototype.setPass=function(t){var e=this.gl;this.pass=t,this.depthFnc=t!=Mt.OPAQUE?e.LEQUAL:e.LESS,t==Mt.POST_ALPHA&&e.clear(e.STENCIL_BUFFER_BIT);},t.prototype.convertColor=function(t){return W(t)},t.prototype.setBackgroundColor=function(t){this.gl&&this.gl.clearColor(t[0],t[1],t[2],1);},t.prototype.setScale=function(t,e,i){},t.prototype.setRotation=function(t,e){},t.prototype.clear=function(t){var e=this.gl;t&&this.setBackgroundColor(t),e.colorMask(!0,!0,!0,!0),e.disable(e.SCISSOR_TEST),e.depthMask(!0),e.clear(e.COLOR_BUFFER_BIT|e.DEPTH_BUFFER_BIT|e.STENCIL_BUFFER_BIT),e.colorMask(!0,!0,!0,!1);},t.prototype.init=function(t,e){this.dpr=e;var i=t.getContext("webgl",this.ctxAttr);i.dpr=e,i.getExtension("OES_element_index_uint"),i.enable(i.CULL_FACE),i.cullFace(i.FRONT),i.enable(i.DEPTH_TEST),i.enable(i.SCISSOR_TEST),i.clearStencil(0);var n=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS);for(var r in this.icons=new kt(i,n-2),this.programs={Rect:new Wt(i,e),Line:new Zt(i,e),DashedLine:new Ht(i,e),Text:new qt(i,e),Image:new jt(i,e),Circle:new Gt(i,e),Polygon:new Yt(i,e),Extrude:new Kt(i,e),Icon:new Vt(i,e)},this.programs)this.programs[r].setBufferCache(this.buffers);i.blendFunc(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA),this.gl=i;},t.prototype.grid=function(t){this.tileGrid=t;},t.prototype.applyTransform=function(){},t.prototype.initView=function(t,e,i,n,r){var o=this.pMat,a=this.vMat,s=.5*me,l=.5*t,u=.5*e,h=u/Math.tan(s),f=Math.cos(s),c=Math.sin(s)*h,p=.5*Math.PI-s+n,d=.25*h,v=f*(f*h+c/Math.tan(p));v*=1.005,this.tilePreviewTransform.tx=null,this.tilePreviewTransform.ty=null,this.tilePreviewTransform.s=null,this.w=t,this.h=e,this.rz=r,this.rx=n,this.scale=i,this.gl.viewport(0,0,t*this.dpr,e*this.dpr),ge.perspective(o,me,t/e,d,v),ge.lookAt(a,[l,u,-h],[l,u,0],[0,-1,0]),ge.translate(a,a,[l,u,0]),ge.rotateX(a,a,n),ge.rotateZ(a,a,r),ge.scale(a,a,[i,i,i]),ge.translate(a,a,[-l,-u,0]),ge.multiply(o,o,a),ye(this.invPMat,this.pMat);var y=ge.identity(this.screenMat);ge.scale(y,y,[l,-u,1]),ge.translate(y,y,[1,-1,0]),ge.multiply(y,y,this.pMat),ye(this.invScreenMat,y);},t.prototype.initBuffers=function(t){var e=this.gl;for(var i in t){var n=t[i],r=this.buffers.get(n);r||(r=e.createBuffer(),this.buffers.set(n,r)),n.dirty&&(n.dirty=!1,e.bindBuffer(e.ARRAY_BUFFER,r),e.bufferData(e.ARRAY_BUFFER,n.data,e.STATIC_DRAW));}},t.prototype.useProgram=function(t){var e=this.prog;if(e!=t){var i=this.gl;if(e){var n=e.attributes;for(var r in n)i.disableVertexAttribArray(n[r]);}return i.useProgram(t.prog),this.prog=t,!0}return !1},t.prototype.drawGrid=function(t,e,i,n){var r=this.pass;this.pass=Mt.ALPHA,this.drawBuffer(this.dbgTile,t,e,null,null,n);var o=this.gridTextBuf.get(i);o||(o=function(t,e,i){Nt||((Nt=new he(e,i)).addChars("L0123456789"),Nt.sync());var n=se(t+" L"+t.length,Nt.atlas),r=n.position,o=n.count,a=n.texcoord,s=new Qt({first:0,count:o},"Text");return s.addAttribute("a_position",{data:new Int8Array(r.length).fill(1),size:2,stride:0}),s.addAttribute("a_point",{data:r,size:2,stride:0}),s.addAttribute("a_texcoord",{data:a,size:2,stride:0}),s.depth=!1,s.scissor=!1,s.texture=Nt,s.addUniform("u_texture",0),s.addUniform("u_atlasScale",1/Nt.width),s.addUniform("u_opacity",1),s.addUniform("u_alignMap",!0),s.addUniform("u_fillColor",W(i.fill)),s.addUniform("u_strokeColor",W(i.stroke)),s}(i.quadkey,this.gl,_e),this.gridTextBuf.set(i,o)),this.drawBuffer(o,t+4,e+4),this.pass=r;},t.prototype.deleteBuffer=function(t){var e=this.buffers,i=this.gl,n=t.attributes,r=t.texture;for(var o in r&&r.destroy(),n){var a=n[o],s=e.get(a);i.deleteBuffer(s);}for(var l=0,u=t.groups;l<u.length;l++){var h=u[l].index;h&&i.deleteBuffer(e.get(h));}},t.prototype.drawBuffer=function(t,e,i,n,r,o){var a,s,l,u=this.gl,h=this.pass;if(s=this.programs[t.type]){var f=s.pass(h);r=r||1;var c=this.zIndex,p=c>this.min3dZIndex,d=t.alpha==Mt.POST_ALPHA&&h==Mt.POST_ALPHA;if((t.alpha||p)&&(f=h==Mt.ALPHA||d),f){if(this.stencilVal&&t.alpha){var v=this.stencilVal;this.stencilVal=null,this.drawStencil(v);}a=t.getAttributes(),this.initBuffers(a),this.useProgram(s),u.depthFunc(this.depthFnc);var y=1-(1+c)/65536;u.depthRange(t.flat?y:0,y),s.init(t,h,Boolean(this.rx||this.rz)),p&&u.disable(this.gl.DEPTH_TEST),s.initAttributes(a),s.initUniforms(t.uniforms),l=s.uniforms,u.uniform1i(l.u_fixedView,this.fixedView),u.uniform1f(l.u_rotate,this.rz),u.uniform2f(l.u_resolution,this.w,this.h),u.uniform1f(l.u_scale,this.scale*r),u.uniform2f(l.u_topLeft,e,i),u.uniform1f(l.u_tileScale,o||1),u.uniformMatrix4fv(l.u_matrix,!1,n||this.pMat),s.draw(t);}}},t.prototype.initStencil=function(t,e,i,n){this.stencilVal=t,this.stencilSize=n,this.stencilX=e,this.stencilY=i;},t.prototype.drawStencil=function(t){if(this.rx||this.rz){var e=this.gl,i=this.stencilTile,n=this.stencilX,r=this.stencilY;e.stencilFunc(e.ALWAYS,t,255),e.stencilOp(e.REPLACE,e.REPLACE,e.REPLACE),e.colorMask(!1,!1,!1,!1),this.drawBuffer(i,n,r,null,1/0,this.stencilSize),e.stencilFunc(e.EQUAL,t,255),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.colorMask(!0,!0,!0,!1);}},t.prototype.initScissor=function(t,e,i,n,r){if(t.scissor){var o=this.gl,a=o.canvas.width,s=o.canvas.height;if(this.scale>4)return o.scissor(0,0,a,s),this.scissorX=null,!0;if(this.scissorX!=e||this.scissorY!=i||this.scissorSize!=n){this.scissorX=e,this.scissorY=i,this.scissorSize=n;for(var l=e+n,u=i+r,h=1/0,f=-h,c=h,p=f,d=0,v=[[e,u,0],[l,u,0],[e,i,0],[l,i,0]];d<v.length;d++){var y=v[d];y=de([],y,this.pMat);var g=xe(y[0],a),m=xe(y[1],s);g<h&&(h=g),g>f&&(f=g),m<c&&(c=m),m>p&&(p=m);}o.scissor(h,c,f-h,p-c);}return !0}},t.prototype.draw=function(t,e){var i,n,r,o,a,s,l,u,h,f,c,p=!1,d=!1,v=t,y=v.tile,g=y.tile,m=y.size,x=y.x,_=y.y,w=v.b,b=v.preview;if(this.zIndex=v.z,this.min3dZIndex=e,b){var T=v.previewTile;i=b[0],n=b[1],r=b[2],o=b[3],a=b[5],s=b[6],u=(l=b[7])/o,h=Math.pow(2,g.quadkey.length-i.length),f=a/u-n,c=s/u-r,this.initScissor(w,x+a,_+s,l,l),h<1?this.initStencil(T.i,x+a,_+s,m*h):d||(d=!0,this.initStencil(g.i,x,_,m));var L=this.initPreviewMatrix(x,_,u);this.drawBuffer(w,f,c,L,h);}else p||(p=this.initScissor(w,x,_,m,m)),d||(this.initStencil(g.i,x,_,m),d=!0),this.drawBuffer(w,x,_);},t.prototype.initPreviewMatrix=function(t,e,i){var n=this.tilePreviewTransform,r=n.m;return n.tx==t&&n.ty==e&&n.s==i||(ge.copy(r,this.pMat),ge.translate(r,r,[t,e,0]),ge.scale(r,r,[i,i,i]),n.tx=t,n.ty=e,n.s=i),r},t.prototype.destroy=function(){this.icons.destroy();},t.prototype.prepare=function(t,e,i,n,r,o){},t}(),be=function(){function t(){this.r=[],this.p=[];}return t.prototype.init=function(t,e){this.luTs=null,this.quadkey=t,this.layers=e,this.tasks={},this.r.length=0,this.p.length=0;},t.prototype.busy=function(t){var e=t.id;for(var i in this.tasks)if(e==this.tasks[i]._lid)return !0},t.prototype.addTask=function(t,e){t._lid=e.id,this.tasks[t.id]=t;},t.prototype.cancelTasks=function(t){var e,i=this.tasks;for(var n in i)e=i[n],t&&t.id!=e._lid||(e.cancel(),delete i[n]);},t.prototype.removeTask=function(t,e){delete this.tasks[t.id];},t.prototype.index=function(t){return this.layers.indexOf(t)},t.prototype.ready=function(t,e){return 2==arguments.length&&(this.r[t]=e,e&&(this.luTs=Date.now())),this.r[t]},t.prototype.addLayer=function(t){this.r.splice(t,0,!1),this.p.splice(t,0,undefined);},t.prototype.removeLayer=function(t){this.r.splice(t,1),this.p.splice(t,1);},t.prototype.preview=function(t,e){return 2==arguments.length&&(this.p[t]=e),this.p[t]},t}(),Te=function(t){function e(e,i,n){var r=t.call(this)||this;return r.data=[],r.onDrop=n,r.init(e,i),r}return v(e,t),e.prototype.clear=function(t){this.setData(t,undefined),this.ready(t,!1),this.preview(t,!1);},e.prototype.init=function(e,i){t.prototype.init.call(this,e,i),this.data.length=0;},e.prototype.setData=function(t,e){var i="number"==typeof t?t:this.layers.indexOf(t),n=this.data[i];return n&&n.length&&this.onDrop&&this.onDrop(n,i),this.data[i]=e,i},e.prototype.getData=function(t){return this.data[t]},e.prototype.addLayer=function(e){t.prototype.addLayer.call(this,e),this.data.splice(e,0,undefined);},e.prototype.removeLayer=function(e){t.prototype.removeLayer.call(this,e),this.setData(e,undefined),this.preview(e,undefined),this.data.splice(e,1);},e}(be),Le=function(){function t(t){this.tiles=new p(t);}return t.prototype.setSize=function(t){this.tiles.setSize(t);},t.prototype.get=function(t,e){if(e){var i=this.tiles._[t];return i&&i.data}return this.tiles.get(t)},t.prototype.forEach=function(t){return this.tiles.forEach(t)},t}(),Se=function(t){function e(e){return t.call(this,e)||this}return v(e,t),e.prototype.create=function(t,e){var i,n,r=this.tiles,o=this.onDrop,a=r.get(t);if(!a&&(a=new Te(t,e,o),(i=r.set(t,a))&&(n=i.data))){for(var s=0;s<n.length;s++)i.setData(s,null),i.preview(s,null);i.data=null;}return a},e}(Le),Ae=function(t,e,i,n,r){for(var o="number"==typeof r,a=t.length,s=[],l=0,u=0;u<e.length;u++){for(var h=0,f=void 0,c=void 0;h<e[u].length;h++)f=i.lon2x(e[u][h][0],n),c=i.lat2y(e[u][h][1],n),o?t.push(f,c,r):t.push(f,c);u>0&&(l+=e[u-1].length,s[s.length]=l);}return {dimensions:o?3:2,vertices:t,holes:s,start:a,stop:t.length}},Me=function(t,e,i,n,r){var o;if("number"!=typeof e[0][0][0]){o=[];for(var a=0,s=e;a<s.length;a++){var l=s[a];o.push(Ae(t,l,i,n,r));}}else o=[Ae(t,e,i,n,r)];return o},Ce=function(t){for(var e,i,n=t[0],r=0,o=0,a=0,s=0,l=n.length,u=l-1,h=void 0,f=void 0,c=void 0;s<l;u=s,s++)e=n[s][0],i=n[s][1],o+=(e+(h=n[u][0]))*(c=i*h-(f=n[u][1])*e),a+=(i+f)*c,r+=c;return (r*=3)?[o/r,a/r]:[e,i]},Ie=s.getInstance(),ze=Math.PI/180,Ee=new Float32Array([-1,-1,-1,-1]),Pe=function(t,e,i,n,r,o,a){void 0===a&&(a=0);for(var s=t.z,l=!0,u=0,h=n;u<h.length;u++){var f=h[u],c=f.type,p=it("type",f,e,s);if("Polygon"==p||"Line"==p){if(it("stroke",f,e,s)){f.type="Line";for(var d=0,v=i;d<v.length;d++){var y=v[d];l=l&&t.create(e,"LineString",y,[f],r,o.clipped);}f.type=c;}}else if(0==a){var g=o.bounds,m=e.bbox,x=void 0;if("Centroid"==it("anchor",f,e,s)){var _=e.geometry;x=_._c=_._c||Ce("Polygon"==_.type?_.coordinates:_.coordinates[0]);}else x=[m[0]+(m[2]-m[0])/2,m[1]+(m[3]-m[1])/2];var w=x[0],b=x[1];w>=g[0]&&b>=g[1]&&w<g[2]&&b<g[3]&&(l=l&&t.create(e,"Point",x,[f],r));}}return l},ke=[0,0,1,0,1,1,0,0,1,1,0,1],De=function(t,e,i){var n=i.length,r=t=32*t<<2|1,o=e=32*e<<2|1,a=2|t,s=o,l=r,u=2|e,h=a,f=u;return i.push(r,o,l,u,h,f,r,o,h,f,a,s),n+12},Re=function(t,e,i){for(var n=0,r=e,o=i-1;r<o;r+=3){var a=t[r],s=t[r+1];n+=(t[r+3]-a)*(s+t[r+4]);}return n},Oe=function(t,e,i,n,r,o,a,s){var l=t.holes,u=t.vertices,h=t.stop-3,f=t.start,c=0,p=f+3*l[c]-6,d=Re(e.data,f,p?p+3:h)>=0;for(a=a||0;f<h;){var v=void 0,y=void 0,g=void 0,m=void 0;if(d){var x=t.start+h-f;v=u.get(x),g=u.get(x+1),y=u.get(x-3),m=u.get(x-2);}else v=u.get(f),g=u.get(f+1),y=u.get(f+3),m=u.get(f+4);var _=Math.round(v)-Math.round(y),w=Math.round(g)-Math.round(m);if((_||w)&&(Z(v,g,0,0,r,r)||Z(y,m,0,0,r,r))){var b=e.length/3;n[n.length]=b+2,n[n.length]=b,n[n.length]=b+1,n[n.length]=b+3,n[n.length]=b+2,n[n.length]=b+1,null==s||s.push(b,b+1,b+2,b+3,b,b+2,b+1,b+3),e.push(v,g,o,v,g,a,y,m,o,y,m,a);var T=_*_+w*w,L=w,S=-_;L*=T=127/Math.sqrt(T),S*=T,i.push(L,S,L,S,L,S,L,S);}f==p?(f+=6,p=t.start+3*l[++c]-6,d=Re(e.data,f,p?p+3:h)<0):f+=3;}},Be=function(t,e,i,n,r,o,a,s,l){for(var u=t.length,h=Me(t,n,r,o,a);u<t.length;)e.push(0,0),u+=3;if(a)for(var f=0,c=h;f<c.length;f++){var p=c[f];Oe(p,t,e,i,o,a,s,l);}return h},Ne={exports:{}};function Fe(t,e,i){i=i||2;var n,r,o,a,s,l,u,h=e&&e.length,f=h?e[0]*i:t.length,c=Ue(t,0,f,i,!0),p=[];if(!c||c.next===c.prev)return p;if(h&&(c=function(t,e,i,n){var r,o,a,s=[];for(r=0,o=e.length;r<o;r++)(a=Ue(t,e[r]*n,r<o-1?e[r+1]*n:t.length,n,!1))===a.next&&(a.steiner=!0),s.push(Qe(a));for(s.sort(je),r=0;r<s.length;r++)i=We(i=qe(s[r],i),i.next);return i}(t,e,c,i)),t.length>80*i){n=o=t[0],r=a=t[1];for(var d=i;d<f;d+=i)(s=t[d])<n&&(n=s),(l=t[d+1])<r&&(r=l),s>o&&(o=s),l>a&&(a=l);u=0!==(u=Math.max(o-n,a-r))?1/u:0;}return Ge(c,p,i,n,r,u),p}function Ue(t,e,i,n,r){var o,a;if(r===hi(t,e,i,n)>0)for(o=e;o<i;o+=n)a=si(o,t[o],t[o+1],a);else for(o=i-n;o>=e;o-=n)a=si(o,t[o],t[o+1],a);return a&&ei(a,a.next)&&(li(a),a=a.next),a}function We(t,e){if(!t)return t;e||(e=t);var i,n=t;do{if(i=!1,n.steiner||!ei(n,n.next)&&0!==ti(n.prev,n,n.next))n=n.next;else {if(li(n),(n=e=n.prev)===n.next)break;i=!0;}}while(i||n!==e);return e}function Ge(t,e,i,n,r,o,a){if(t){!a&&o&&function(t,e,i,n){var r=t;do{null===r.z&&(r.z=Ke(r.x,r.y,e,i,n)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;}while(r!==t);r.prevZ.nextZ=null,r.prevZ=null,function(t){var e,i,n,r,o,a,s,l,u=1;do{for(i=t,t=null,o=null,a=0;i;){for(a++,n=i,s=0,e=0;e<u&&(s++,n=n.nextZ);e++);for(l=u;s>0||l>0&&n;)0!==s&&(0===l||!n||i.z<=n.z)?(r=i,i=i.nextZ,s--):(r=n,n=n.nextZ,l--),o?o.nextZ=r:t=r,r.prevZ=o,o=r;i=n;}o.nextZ=null,u*=2;}while(a>1)}(r);}(t,n,r,o);for(var s,l,u=t;t.prev!==t.next;)if(s=t.prev,l=t.next,o?Ze(t,n,r,o):Xe(t))e.push(s.i/i),e.push(t.i/i),e.push(l.i/i),li(t),t=l.next,u=l.next;else if((t=l)===u){a?1===a?Ge(t=He(We(t),e,i),e,i,n,r,o,2):2===a&&Ye(t,e,i,n,r,o):Ge(We(t),e,i,n,r,o,1);break}}}function Xe(t){var e=t.prev,i=t,n=t.next;if(ti(e,i,n)>=0)return !1;for(var r=t.next.next;r!==t.prev;){if($e(e.x,e.y,i.x,i.y,n.x,n.y,r.x,r.y)&&ti(r.prev,r,r.next)>=0)return !1;r=r.next;}return !0}function Ze(t,e,i,n){var r=t.prev,o=t,a=t.next;if(ti(r,o,a)>=0)return !1;for(var s=r.x<o.x?r.x<a.x?r.x:a.x:o.x<a.x?o.x:a.x,l=r.y<o.y?r.y<a.y?r.y:a.y:o.y<a.y?o.y:a.y,u=r.x>o.x?r.x>a.x?r.x:a.x:o.x>a.x?o.x:a.x,h=r.y>o.y?r.y>a.y?r.y:a.y:o.y>a.y?o.y:a.y,f=Ke(s,l,e,i,n),c=Ke(u,h,e,i,n),p=t.prevZ,d=t.nextZ;p&&p.z>=f&&d&&d.z<=c;){if(p!==t.prev&&p!==t.next&&$e(r.x,r.y,o.x,o.y,a.x,a.y,p.x,p.y)&&ti(p.prev,p,p.next)>=0)return !1;if(p=p.prevZ,d!==t.prev&&d!==t.next&&$e(r.x,r.y,o.x,o.y,a.x,a.y,d.x,d.y)&&ti(d.prev,d,d.next)>=0)return !1;d=d.nextZ;}for(;p&&p.z>=f;){if(p!==t.prev&&p!==t.next&&$e(r.x,r.y,o.x,o.y,a.x,a.y,p.x,p.y)&&ti(p.prev,p,p.next)>=0)return !1;p=p.prevZ;}for(;d&&d.z<=c;){if(d!==t.prev&&d!==t.next&&$e(r.x,r.y,o.x,o.y,a.x,a.y,d.x,d.y)&&ti(d.prev,d,d.next)>=0)return !1;d=d.nextZ;}return !0}function He(t,e,i){var n=t;do{var r=n.prev,o=n.next.next;!ei(r,o)&&ii(r,n,n.next,o)&&oi(r,o)&&oi(o,r)&&(e.push(r.i/i),e.push(n.i/i),e.push(o.i/i),li(n),li(n.next),n=t=o),n=n.next;}while(n!==t);return We(n)}function Ye(t,e,i,n,r,o){var a=t;do{for(var s=a.next.next;s!==a.prev;){if(a.i!==s.i&&Je(a,s)){var l=ai(a,s);return a=We(a,a.next),l=We(l,l.next),Ge(a,e,i,n,r,o),void Ge(l,e,i,n,r,o)}s=s.next;}a=a.next;}while(a!==t)}function je(t,e){return t.x-e.x}function qe(t,e){var i=function(t,e){var i,n=e,r=t.x,o=t.y,a=-1/0;do{if(o<=n.y&&o>=n.next.y&&n.next.y!==n.y){var s=n.x+(o-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(s<=r&&s>a){if(a=s,s===r){if(o===n.y)return n;if(o===n.next.y)return n.next}i=n.x<n.next.x?n:n.next;}}n=n.next;}while(n!==e);if(!i)return null;if(r===a)return i;var l,u=i,h=i.x,f=i.y,c=1/0;n=i;do{r>=n.x&&n.x>=h&&r!==n.x&&$e(o<f?r:a,o,h,f,o<f?a:r,o,n.x,n.y)&&(l=Math.abs(o-n.y)/(r-n.x),oi(n,t)&&(l<c||l===c&&(n.x>i.x||n.x===i.x&&Ve(i,n)))&&(i=n,c=l)),n=n.next;}while(n!==u);return i}(t,e);if(!i)return e;var n=ai(i,t),r=We(i,i.next);return We(n,n.next),e===i?r:e}function Ve(t,e){return ti(t.prev,t,e.prev)<0&&ti(e.next,t,t.next)<0}function Ke(t,e,i,n,r){return (t=1431655765&((t=858993459&((t=252645135&((t=16711935&((t=32767*(t-i)*r)|t<<8))|t<<4))|t<<2))|t<<1))|(e=1431655765&((e=858993459&((e=252645135&((e=16711935&((e=32767*(e-n)*r)|e<<8))|e<<4))|e<<2))|e<<1))<<1}function Qe(t){var e=t,i=t;do{(e.x<i.x||e.x===i.x&&e.y<i.y)&&(i=e),e=e.next;}while(e!==t);return i}function $e(t,e,i,n,r,o,a,s){return (r-a)*(e-s)-(t-a)*(o-s)>=0&&(t-a)*(n-s)-(i-a)*(e-s)>=0&&(i-a)*(o-s)-(r-a)*(n-s)>=0}function Je(t,e){return t.next.i!==e.i&&t.prev.i!==e.i&&!function(t,e){var i=t;do{if(i.i!==t.i&&i.next.i!==t.i&&i.i!==e.i&&i.next.i!==e.i&&ii(i,i.next,t,e))return !0;i=i.next;}while(i!==t);return !1}(t,e)&&(oi(t,e)&&oi(e,t)&&function(t,e){var i=t,n=!1,r=(t.x+e.x)/2,o=(t.y+e.y)/2;do{i.y>o!=i.next.y>o&&i.next.y!==i.y&&r<(i.next.x-i.x)*(o-i.y)/(i.next.y-i.y)+i.x&&(n=!n),i=i.next;}while(i!==t);return n}(t,e)&&(ti(t.prev,t,e.prev)||ti(t,e.prev,e))||ei(t,e)&&ti(t.prev,t,t.next)>0&&ti(e.prev,e,e.next)>0)}function ti(t,e,i){return (e.y-t.y)*(i.x-e.x)-(e.x-t.x)*(i.y-e.y)}function ei(t,e){return t.x===e.x&&t.y===e.y}function ii(t,e,i,n){var r=ri(ti(t,e,i)),o=ri(ti(t,e,n)),a=ri(ti(i,n,t)),s=ri(ti(i,n,e));return r!==o&&a!==s||(!(0!==r||!ni(t,i,e))||(!(0!==o||!ni(t,n,e))||(!(0!==a||!ni(i,t,n))||!(0!==s||!ni(i,e,n)))))}function ni(t,e,i){return e.x<=Math.max(t.x,i.x)&&e.x>=Math.min(t.x,i.x)&&e.y<=Math.max(t.y,i.y)&&e.y>=Math.min(t.y,i.y)}function ri(t){return t>0?1:t<0?-1:0}function oi(t,e){return ti(t.prev,t,t.next)<0?ti(t,e,t.next)>=0&&ti(t,t.prev,e)>=0:ti(t,e,t.prev)<0||ti(t,t.next,e)<0}function ai(t,e){var i=new ui(t.i,t.x,t.y),n=new ui(e.i,e.x,e.y),r=t.next,o=e.prev;return t.next=e,e.prev=t,i.next=r,r.prev=i,n.next=i,i.prev=n,o.next=n,n.prev=o,n}function si(t,e,i,n){var r=new ui(t,e,i);return n?(r.next=n.next,r.prev=n,n.next.prev=r,n.next=r):(r.prev=r,r.next=r),r}function li(t){t.next.prev=t.prev,t.prev.next=t.next,t.prevZ&&(t.prevZ.nextZ=t.nextZ),t.nextZ&&(t.nextZ.prevZ=t.prevZ);}function ui(t,e,i){this.i=t,this.x=e,this.y=i,this.prev=null,this.next=null,this.z=null,this.prevZ=null,this.nextZ=null,this.steiner=!1;}function hi(t,e,i,n){for(var r=0,o=e,a=i-n;o<i;o+=n)r+=(t[a]-t[o])*(t[o+1]+t[a+1]),a=o;return r}Ne.exports=Fe,Ne.exports.default=Fe,Fe.deviation=function(t,e,i,n){var r=e&&e.length,o=r?e[0]*i:t.length,a=Math.abs(hi(t,0,o,i));if(r)for(var s=0,l=e.length;s<l;s++){var u=e[s]*i,h=s<l-1?e[s+1]*i:t.length;a-=Math.abs(hi(t,u,h,i));}var f=0;for(s=0;s<n.length;s+=3){var c=n[s]*i,p=n[s+1]*i,d=n[s+2]*i;f+=Math.abs((t[c]-t[d])*(t[p+1]-t[c+1])-(t[c]-t[p])*(t[d+1]-t[c+1]));}return 0===a&&0===f?0:Math.abs((f-a)/a)},Fe.flatten=function(t){for(var e=t[0][0].length,i={vertices:[],holes:[],dimensions:e},n=0,r=0;r<t.length;r++){for(var o=0;o<t[r].length;o++)for(var a=0;a<e;a++)i.vertices.push(t[r][o][a]);r>0&&(n+=t[r-1].length,i.holes.push(n));}return i};var fi,ci=Ne.exports,pi=function(){function t(t){this.data={},this.gl=t;}return t.prototype.create=function(t){var e=t.reduce((function(t,e){return t+e}))*(t.length%2+1);e*=Math.ceil(512/e);for(var i=new Uint8Array(e),n=!0,r=0;r<e;)for(var o=0,a=t;o<a.length;o++){var s=a[o];n&&i.fill(255,r,r+s),r+=s,n=!n;}return new zt(this.gl,{width:i.length,height:1,pixels:i},this.gl.LUMINANCE)},t.prototype.get=function(t){var e=String(t),i=this.data[e];return i||(i=this.data[e]=this.create(t)),i},t}(),di=function(){function t(t){void 0===t&&(t=256),this.length=0,this.points=[],this.sqDistance=this.setMinDistance(t);}return t.prototype.setMinDistance=function(t){return this.sqDistance=t*t},t.prototype.add=function(t,e){var i=this.points;i[this.length++]=t,i[this.length++]=e;},t.prototype.clear=function(){this.length=0,this.points.length=0;},t.prototype.hasSpace=function(t,e){var i=this,n=i.length,r=i.points,o=i.sqDistance,a=0;if(o)for(;a<n;){var s=t-r[a++],l=e-r[a++];if(s*s+l*l<o)return !1}return !0},t}(),vi=180/Math.PI,yi=function(){function t(t){this.length=0,this.dashes=new pi(t),this.gl=t,this.pixels=new Float32Array(262144),this.alpha=new Float32Array(131072),this.lineLength=new Float32Array(131072),this.repeat={};}return t.prototype.getDistanceGrp=function(){return this.repeat[this.dId]},t.prototype.projectLine=function(t,e,i){var n=this.pixels,r=this.decimals;if(!this.length){for(var o=0,a=0,s=t.length,l=void 0,u=void 0,h=void 0,f=void 0;a<s;a++){if(l=e.lon2x(t[a][0],i),u=e.lat2y(t[a][1],i),(!a||Math.round(h*r)-Math.round(l*r)||Math.round(f*r)-Math.round(u*r))&&(n[o++]=l,n[o++]=u,o>2)){var c=h-l,p=f-u;this.lineLength[a]=this.lineLength[a-1]+Math.sqrt(c*c+p*p);}h=l,f=u;}this.length=o;}return this.length},t.prototype.placeCached=function(t,e,i,n){for(var r=this.collisions,o=0,a=void 0;o<r.length;o++){var s=(a=r[o]).cx,l=a.cy;256==i&&(s-=e.x%2*i,l-=e.y%2*i),t(s,l,n?this.alpha[o]:0,a);}},t.prototype.initTile=function(){var t=this.repeat;for(var e in t)t[e].clear();},t.prototype.initFeature=function(t,e,i){this.decimals=t>=20-Number(512==e)?100:1,this.length=0,this.collisions=null;var n=this.repeat;this.dId=i,i&&!n[i]&&(n[i]=new di);},t.prototype.createLine=function(t,e,i,n,r,o,a,s,l,u,h,f){o&&(e.texture=this.dashes.get(o)),e.buffer||(e.buffer=new ce);var c=e.buffer;this.projectLine(t,i,n);var p=this.pixels,d=this.length,v=p[0]==p[d-2]&&p[1]==p[d-1];ee(c.attributes.a_position.data,c.attributes.a_normal.data,p,this.lineLength,d,n,r,a,s,l,o&&c.attributes.a_lengthSoFar.data,v,u,h,f);},t.prototype.placeAtSegments=function(t,e,i,n,r,o,a,s,l,u,h,f,c){var p;this.projectLine(t,e,i),null===(p=this.getDistanceGrp())||void 0===p||p.setMinDistance(null==o?256:o),this.placeAlongLine(e,i,n,r,a,s,l,u,h,f,c);},t.prototype.placeAtPoints=function(t,e,i,n,r,o,a,s,l,u){if(this.projectLine(t,e,i),this.collisions)return this.placeCached(u,e,i);for(var h=n&&[],f=0,c=this.pixels,p=this.length;f<p;f++){var d=c[f],v=c[++f],y=void 0;if(d>=0&&v>=0&&d<i&&v<i){var g=void 0;h&&((g=this.getDistanceGrp())&&!g.hasSpace(d,v)||(y=n.insert(d,v,s,l,o,a,e,i,r))&&h.push(y)),h&&!y||(u(d,v,0,y),null==g||g.add(d,v));}}(null==h?void 0:h.length)&&(this.collisions=h);},t.prototype.placeAlongLine=function(t,e,i,n,r,o,a,s,l,u,h){if(this.collisions)return this.placeCached(h,t,e,l);for(var f,c,p,d,v,y,g=i&&[],m=this.length/2,x=this.pixels,_=Math.pow(2*r+a,2),w=Math.floor(m/2)-1,b=1,T=x[2*w],L=x[2*w+1],S=T,A=L,M=1;M<m;M++){var C=w+b*M;if(C>=m&&(b=-1,C=w-1,w=m-1,T=S,L=A),f=x[2*C],y=.5*(d=(c=x[2*C+1])-L)+L,(v=.5*(p=f-T)+T)>=0&&y>=0&&v<e&&y<e){var I=u?p*p+d*d:1/0;if(I>_){var z=Math.atan2(d,p);-1==b&&(z+=Math.PI);var E=void 0,P=void 0;if(g&&(!(P=this.getDistanceGrp())||P.hasSpace(v,y))){var k=r,D=o;if(l&&z&&(k||D)){var R=Math.sin(z),O=Math.cos(z);k=O*r-R*o,D=R*r+O*o;}var B=Math.sqrt(_/I),N=[p*B,d*B];(E=i.insert(v,y,k,D,a/2,s/2,t,e,n,N))&&(this.alpha[g.length]=z*vi,g.push(E));}g&&!E||(h(v,y,l?z*vi:0,E),null==P||P.add(v,y));}}T=f,L=c;}(null==g?void 0:g.length)&&(this.collisions=g);},t}(),gi=function(t){function e(){var e=t.call(this,!1)||this;return e.attributes={a_position:{data:new ne(Uint16Array),size:2},a_point:{data:new ne(Int16Array),size:2},a_texcoord:{data:new ne(Uint16Array),size:2}},e.first=0,e}return v(e,t),e}(fe),mi=function(t){function e(){var e=t.call(this,!1)||this;return e.attributes={a_position:{data:new ne(Uint16Array),size:2},a_size:{data:new ne(Uint8Array),size:2},a_texcoord:{data:new ne(Uint16Array),size:2}},e.first=0,e}return v(e,t),e}(fe),xi=function(t){function e(){var e=t.call(this,!1)||this;return e.attributes={a_position:{data:new ne(Uint16Array),size:2}},e.first=0,e}return v(e,t),e}(fe),_i=function(t){function e(){var e=t.call(this,!0)||this;return e.attributes={a_position:{data:new ne(Float32Array),size:2}},e.first=0,e}return v(e,t),e}(fe),wi=function(t){function e(){var e=t.call(this,!0)||this;return e._flat=!1,e.attributes={a_position:{data:new ne(Float32Array),size:3},a_normal:{data:new ne(Int8Array),size:2,normalized:!0}},e.first=0,e}return v(e,t),e}(fe),bi=new Map;[[fi,fi,fi],[fi,fi,65154],[fi,fi,65156],[fi,fi,65158],[fi,fi,65160],[65163,65164,65162],[fi,fi,65166],[65169,65170,65168],[fi,fi,65172],[65175,65176,65174],[65179,65180,65178],[65183,65184,65182],[65187,65188,65186],[65191,65192,65190],[fi,fi,65194],[fi,fi,65196],[fi,fi,65198],[fi,fi,65200],[65203,65204,65202],[65207,65208,65206],[65211,65212,65210],[65215,65216,65214],[65219,65220,65218],[65223,65224,65222],[65227,65228,65226],[65231,65232,65230],fi,fi,fi,fi,fi,[1600,1600,1600],[65235,65236,65234],[65239,65240,65238],[65243,65244,65242],[65247,65248,65246],[65251,65252,65250],[65255,65256,65254],[65259,65260,65258],[fi,fi,65262],[fi,fi,65264],[65267,65268,65266]].forEach((function(t,e){bi.set(1569+e,t&&{initial:t[0],medial:t[1],final:t[2]});})),bi.set(1662,{initial:64344,medial:64345,final:64343}),bi.set(1740,{initial:64510,medial:64511,final:64509}),bi.set(1670,{initial:64380,medial:64381,final:64379}),bi.set(1705,{initial:64400,medial:64401,final:64399}),bi.set(1711,{initial:64404,medial:64405,final:64403}),bi.set(1688,{final:64395});var Ti=new Set([1552,1554,1555,1556,1557,1611,1612,1613,1614,1615,1616,1617,1618,1619,1620,1621,1622,1623,1624,1648,1750,1751,1752,1753,1754,1755,1756,1759,1760,1761,1762,1763,1764,1767,1768,1770,1771,1772,1773]),Li={1570:{isolated:65269,final:65270},1571:{isolated:65271,final:65272},1573:{isolated:65273,final:65274},1575:{isolated:65275,final:65276}},Si=function(t,e,i){for(var n=i>0?t.length-e:e+1,r=1,o=void 0;r<n;r++)if(o=t.charCodeAt(e+i*r),!Ti.has(o))return {cp:o,map:bi.get(o)}},Ai=function(t){var e;if(!function(t){return /[\u0600-\u06FF]/.test(t)}(t))return t;for(var i="",n=0;n<t.length;++n){var r=t.charCodeAt(n);if(bi.has(r)){var o=null===(e=Si(t,n,-1))||void 0===e?void 0:e.map;!o||o.initial||o.medial||(o=fi);var a=Si(t,n,1),s=null==a?void 0:a.map;!s||s.medial||s.final||(s=fi);var l;if(l=1604==r&&Li[null==a?void 0:a.cp])r=o?l.final:l.isolated,n++;else {var u=bi.get(r);o&&s&&u.medial?r=u.medial:o&&u.final?r=u.final:s&&u.initial&&(r=u.initial);}}i+=String.fromCharCode(r);}return i},Mi=function(){function t(t,e,i,n){this.pendingCollisions=[],this.gl=t,this.icons=e,this.dpr=n,this.dashes=new pi(t),this.collisions=i,this.lineFactory=new yi(t);}return t.prototype.init=function(t,e,i,n){this.tile=t,this.groups=e,this.tileSize=i,this.z=n,this.lineFactory.initTile(),this.pendingCollisions.length=0;},t.prototype.createPoint=function(t,e,i,n,r,o,a,s,l,u){void 0===s&&(s=0);var h,f,c,p=this.z;if(s=(s+360)%360,"Text"==t){e.texture||(e.texture=new he(this.gl,e.shared),e.buffer=new gi);var d=e.texture,v=e.buffer.attributes;d.addChars(l);var y=d.getAtlas(),g=it("lineWrap",r,o,p);null==g&&(g=u);var m=B(l,g);h=v.a_position,c=(f=v.a_texcoord.data.length)+d.bufferLength(l),function(t,e,i,n,r,o,a,s){void 0===s&&(s=0);var l=i.length,u=a.lineHeight,h=32*(a.baselineOffset+(l-1)*u*.5);t=64*t<<1|1,e=64*e<<1|1,s=Math.round(1024*s/360);for(var f=0,c=i;f<c.length;f++){var p=c[f],d=r.length,v=se(p,a,s,n,o),y=v.width*a.scale/2*32,g=2*v.count;r.reserve(g);for(var m=n.data,x=r.data,_=d+g;d<_;d+=2)m[d]-=y,m[d+1]-=h,x[d]=t,x[d+1]=e;r.length+=g,h-=32*u;}}(i,n,m,v.a_point.data,v.a_position.data,v.a_texcoord.data,y,s);}else {if("Icon"==t){e.buffer||(e.buffer=new mi),h=e.buffer.attributes.a_position;var x=it("src",r,o,p),_=it("width",r,o,p),w=it("height",r,o,p)||_,b=(v=e.buffer.attributes,this.icons.get(x,_,w));if(!b)return void(this.iconsLoaded=!1);!function(t,e,i,n,r,o,a,s,l){void 0===l&&(l=0);var u=i.u1,h=i.u2,f=i.v1,c=i.v2;De(t,e,a);var p=(l=Math.round(1024*l/360))>>5,d=31&l;u=u<<5|d,h=h<<5|d,f=f<<5|p,c=c<<5|p,o.push(n,r,n,r,n,r,n,r,n,r,n,r),s.push(u,c,u,f,h,f,u,c,h,f,h,c);}(i,n,b,_,w,v.a_size.data,h.data,v.a_texcoord.data,s),e.texture=this.icons.getTexture();}else {if("Circle"!=t&&"Rect"!=t)return;e.buffer||(e.buffer=new xi),h=e.buffer.attributes.a_position,De(i,n,h.data);}f=(c=h.data.length)-12;}a&&h&&a.attrs.push({buffer:h,start:f,stop:c});},t.prototype.create=function(t,e,i,n,r,o,a,s){var l,u,h,f,c,p,d,v,y,g,m,x,_,w,b,T,L,S,A,M,C,I,z,E,k,D,R,O,B,N,F,U,G,X,Z,H,Y,j,q,V,K=this,Q=this,$=Q.tile,J=Q.groups,tt=Q.tileSize,rt=this.z,ot=Number.MAX_SAFE_INTEGER,at=-Number.MAX_SAFE_INTEGER,st="";if(this.iconsLoaded=!0,this.lineFactory.initFeature(rt,tt,null==s?void 0:s.id),undefined===a&&"Point"===e&&!$.isInside(i))return this.iconsLoaded;for(var ut=0,ht=n.length;ut<ht;ut++)if(y=n[ut],(m=it("type",y,t,rt))&&0!==(x=it("opacity",y,t,rt))){var ft="Polygon"==e||it("collide",y,t,rt);if(null!=a||("Text"!=m||ft)&&!1!==ft){if((null==x||x>=.98)&&(x=1),"Image"==m&&(m="Icon"),_=undefined,w=undefined,L=undefined,b=undefined,S=undefined,A=undefined,M=undefined,C=undefined,I=undefined,k=undefined,D=undefined,F=0,U=0,G=undefined,Z=undefined,X=r,H="px",Y=undefined,T=0^it("rotation",y,t,rt),"Icon"==m)F=0^it("offsetX",y,t,rt),U=0^it("offsetY",y,t,rt),Z=it("alignment",y,t,rt)||"viewport",O="I"+F+U;else {if(L=it("stroke",y,t,rt),A=it("strokeWidth",y,t,rt),"Line"==m){if(!L||!A)continue;var ct=nt(A);A=ct[0],H=ct[1],C=it("strokeLinecap",y,t,rt)||"round",I=it("strokeLinejoin",y,t,rt)||"round",(M=it("strokeDasharray",y,t,rt))instanceof Array&&M.length&&M[0]||(M=undefined);var pt=it("offset",y,t,rt);O="L"+H+(F=(l=nt(pt))[0])+(Y=l[1])+C+I+(M||"*");}else if(w=it("fill",y,t,rt),"Polygon"==m){if(!w||"Polygon"!=e)continue;z=it("extrude",y,t,rt),E=it("extrudeBase",y,t,rt),"number"==typeof z||E?(O="E",m="Extrude"):O="P";}else {if("Polygon"==e)continue;if(Z=it("alignment",y,t,rt),"Text"==m){if(!(G=et(y,t,rt)))continue;G=Ai(G),null==Z&&(Z="Point"==e?"viewport":"map"),O="T"+((_=it("font",y,t,rt)||P)||"*");}else if("Circle"==m)k=D=it("radius",y,t,rt),k=(u=nt(k))[0],O="C"+(H=u[1])+k||"*";else {if("Rect"!=m)continue;k=it("width",y,t,rt),k=(h=nt(k))[0],H=h[1],D=(D=it("height",y,t,rt))?nt(D)[0]:k,O="R"+T+H+k+D;}F=it("offsetX",y,t,rt),U=it("offsetY",y,t,rt),Y=new Array(2),F=(f=nt(F))[0],Y[0]=f[1],U=(c=nt(U))[0],Y[1]=c[1],O+=F+Y[0]+U+Y[1];}w&&((b=W(w))?b[3]*=x:w=null),L&&((S=W(L))?S[3]*=x:L=null,"Text"==m&&(X=1),("number"!=typeof A||(A*=X)<0)&&(A=1)),O+=(L||"*")+(A||"*")+(w||"*");}O+=100*x^0,g=it("zIndex",y,t,rt);var dt=it("zLayer",y,t,rt);if(null!=dt&&(O=dt+":"+O),null==(N=(R=J[g]=J[g]||{index:{},groups:[]}).index[O])?(N=R.index[O]=R.groups.length,B=R.groups[N]={type:m,zLayer:dt,shared:{unit:H,font:_,fill:b,opacity:x,stroke:S,strokeWidth:A,strokeLinecap:C,strokeLinejoin:I,strokeDasharray:M,width:k,height:D,rotation:T,offsetX:F,offsetY:U,offsetUnit:Y,alignment:Z}}):B=R.groups[N],"Point"==e){var vt=$.lon2x(i[0],tt),yt=$.lat2y(i[1],tt);if(s){if(!(V=this.collisions.insert(vt,yt,s.offsetX,s.offsetY,s.width,s.height,$,tt,s.priority)))return this.iconsLoaded;s=null;}this.createPoint(m,B,vt,yt,y,t,V,T,G);}else if("LineString"==e)if("Line"==m)this.lineFactory.createLine(i,B,$,tt,o,M,C,I,A,F,it("from",y,t,rt),it("to",y,t,rt));else {var gt=it("anchor",y,t,rt);null==gt&&(gt="Text"==m?"Line":"Coordinate");var mt="Text"==m?!ft:!1===ft,xt=void 0,_t=void 0;if("Line"==gt){var wt="map"==Z;if(s)xt=2*s.width,_t=2*s.height;else if("Icon"==m)xt=it("width",y,t,rt),_t=it("height",y,t,rt)||k;else if("Text"==m){var bt=B.texture;bt||(bt=B.texture=new he(this.gl,y),B.buffer=new gi);var Tt=bt.getAtlas();xt=Tt.getTextWidth(G),_t=Tt.letterHeight;}else xt=k,_t=D,"Circle"==m&&(xt*=2,_t*=2);var Lt=it("checkLineSpace",y,t,rt);null==Lt&&(Lt=!0),this.lineFactory.placeAtSegments(i,$,tt,mt&&this.collisions,a,it("repeat",y,t,rt),F,U,xt,_t,wt,Lt,(function(e,i,n,r){K.createPoint(m,B,e,i,y,t,r,n+T,G,!1);}));}else s?(xt=s.width,_t=s.height):(xt=k/2,_t=D/2),this.lineFactory.placeAtPoints(i,$,tt,mt&&this.collisions,a,xt,_t,F,U,(function(e,i,n,r){K.createPoint(m,B,e,i,y,t,r,n+T,G);}));}else if("Polygon"==m||"Extrude"==m){B.buffer||(B.buffer="Polygon"==m?new _i:new wi);var St=B.buffer,At=St.index(),Mt=St.attributes,Ct=Mt.a_position.data;if(p=Ct.length,"Extrude"==m){var It=void 0;L&&(It=B.extrudeStrokeIndex=B.extrudeStrokeIndex||[]),d=Be(Ct,Mt.a_normal.data,At,i,$,tt,z,E,It);}else "Polygon"==m&&(d=Me(Ct,i,$,tt));if(!v){var zt=t.geometry;if(zt._xyz)v=zt._xyz;else {v=[];for(var Et=0,Pt=d;Et<Pt.length;Et++)for(var kt=Pt[Et],Dt=kt.dimensions,Rt=Ct.data.subarray(kt.start,kt.stop),Ot=ci(Rt,kt.holes,Dt),Bt=(kt.start-p)/Dt,Nt=0,Ft=Ot;Nt<Ft.length;Nt++){var Ut=Ft[Nt];v.push(Bt+Ut);}$.clipped||(zt._xyz=v);}}Ut=0;for(var Wt,Gt=p/d[0].dimensions;Ut<v.length;Ut++)Wt=Gt+v[Ut],St.i32=St.i32||Wt>65535,At.push(Wt);}}else {var Xt=lt(y,t,rt,this.dpr,q);if(Xt){q=Xt||q,(j=j||[]).push(y);var Zt=it("priority",y,t,rt);Zt<ot&&(ot=Zt);var Ht=it("repeat",y,t,rt);Ht>at&&(at=Ht),st+=m+(Zt||"?")+(Ht||"?");}}}if(j){var Yt={id:st,priority:ot,repeat:at,styleGrp:j,feature:t,geomType:e,coordinates:i},jt=q[0],qt=q[1],Vt=.5*(q[2]-jt),Kt=.5*(q[3]-qt);Yt.offsetX=jt+Vt,Yt.offsetY=qt+Kt,Yt.width=Vt,Yt.height=Kt,this.pendingCollisions.push(Yt);}return this.iconsLoaded},t}(),Ci=function(){function t(t){this.timer=null,this.tiles=new Map,this.display=t,this.debug(false);}return t.prototype.debug=function(t){var e=this;t?this.dbgLayers||(this.dbgLayers=[new xyzMapsCore_min.exports.TileLayer({pointerEvents:!1,min:2,max:28,provider:new xyzMapsCore_min.exports.LocalProvider({})}),new xyzMapsCore_min.exports.TileLayer({pointerEvents:!1,min:2,max:28,provider:new xyzMapsCore_min.exports.LocalProvider({})})],setTimeout((function(){return e.dbgLayers.forEach((function(t){return er.getInstances().pop().addLayer(t)}))}),0)):this.dbgLayers&&this.dbgLayers.forEach((function(t){return t.getProvider().clear()})),this.dbg=t;},t.prototype.dbgBBoxes=function(t,e,i){for(var n=er.getInstances().pop(),r=2,o=1,a=0,l=t.boxes;a<l.length;a++){var u=l[a],h=.5*(u.maxX-u.minX),f=.5*(u.maxY-u.minY),c=void 0,p=void 0;if("number"==typeof e){var d=xyzMapsCore_min.exports.webMercator.mapSizePixel(512,e);c=xyzMapsCore_min.exports.webMercator.x2lon(u.maxX-h,d),p=xyzMapsCore_min.exports.webMercator.y2lat(u.maxY-f,d),r=3,o=0;}else {var v=n.pixelToGeo(u.minX+h,u.minY+f);c=v.longitude,p=v.latitude,i=e?"orange":"green";}this.dbgLayers[Number("number"!=typeof e)].addFeature({type:"Feature",geometry:{type:"Point",coordinates:[c,p]}},[{zLayer:1e5,zIndex:o,type:"Rect",stroke:i,strokeWidth:r,width:2*h,height:2*f,collide:!0}]);}},t.prototype.getTileCacheKey=function(t,e){return 256==e.tileSize?t.slice(0,-1):t},t.prototype.getDataKey=function(t,e){return e.id+"-"+t},t.prototype.intersects=function(t,e){for(var i=t.boxes,n=0,r=e;n<r.length;n++)for(var o=0,a=r[n].boxes;o<a.length;o++)for(var s=a[o],l=0,u=i;l<u.length;l++){var h=u[l];if(h.minX<=s.maxX&&s.minX<=h.maxX&&h.minY<=s.maxY&&s.minY<=h.maxY)return !0}},t.prototype.updateBBoxes=function(t,e,i,n,r,o,a){for(var s=0;s<=o;s++){var l=.75*(s/o-.5),u=i[0]*l+t,h=i[1]*l+e;a[s]={minX:u-n,maxX:u+n,minY:h-r,maxY:h+r};}},t.prototype.initTile=function(t,e){var i=[],n=t.quadkey,r=t.x,o=t.y,s=t.z;this.clearTile(n,e),256==e.tileSize&&(s--,o=.5*o^0,r=.5*r^0);for(var l=-1;l<2;l++)for(var u=-1;u<2;u++)if(0!=u||0!=l){var h=xyzMapsCore_min.exports.tileUtils.tileXYToQuadKey(s,o+l,r+u),f=this.tiles.get(h);if(f)for(var c in f)for(var p=0,d=f[c];p<d.length;p++){var v=d[p];i[i.length]=v;}}var g=this.getTileCacheKey(n,e);this.curLayerTileCollision={tileKey:g,data:[],dataKey:this.getDataKey(n,e),existing:y({neighbours:i},this.tiles.get(g)||{})},this.updated=!1;},t.prototype.insert=function(t,e,i,n,r,o,a,s,l,u){void 0===l&&(l=Number.MAX_SAFE_INTEGER);var h,f=a.x,c=a.y,p=a.z;256==s&&(t+=f%2*s,e+=c%2*s,s*=2,f=.5*f^0,c=.5*c^0,p--),f=f*s+i,c=c*s+n;r+=4,o+=4;var d=Math.min(r,o),v=Math.max(r,o),y=Math.floor(v/d);u&&y>1.5?(r=d,o=d,y=Math.floor(.7*y),h=new Array(y),this.updateBBoxes(t+f,e+c,u,d,d,y,h)):h=[{minX:f+t-r,maxX:f+t+r,minY:c+e-o,maxY:c+e+o}];var g={cx:t,cy:e,halfWidth:r,halfHeight:o,offsetX:i,offsetY:n,boxes:h,slope:u,priority:l,attrs:[]},m=this.curLayerTileCollision,x=m.data,_=m.existing,w=this.dbg;if(this.intersects(g,x))return !1;for(var b in _)if(this.intersects(g,_[b]))return w&&this.dbgBBoxes(g,p,"darkred"),!1;return this.updated=!0,x.push(g),g},t.prototype.completeTile=function(t){var e=this.curLayerTileCollision,i=e.tileKey,n=e.dataKey,r=e.data,o=this.tiles.get(i)||{};return o[n]=r,this.tiles.set(i,o),this.curLayerTileCollision=null,this.updated&&t&&this.updateTileSync(this.display.getScreenTile(i,512)),this.updated},t.prototype.clearTile=function(t,e){var i,n=this.getTileCacheKey(t,e),r=this.getDataKey(t,e);if((null===(i=this.curLayerTileCollision)||void 0===i?void 0:i.dataKey)!=r){var o=this.tiles.get(n);if(o){for(var a in delete o[r],o)return;this.tiles.delete(n);}}},t.prototype.updateTileSync=function(t){return this.updateTiles([t],this.display.s)},t.prototype.update=function(t,e){var i=this;null==this.timer&&(this.timer=setTimeout((function(){var t=i.display.grid.tiles[512],n=i.display.s;i.updateTiles(t,n),i.timer=null,e&&e();}),150));},t.prototype.updateTiles=function(t,e){var i=this.display,n=this.dbg,r=[];n&&this.dbgLayers[1].getProvider().clear();for(var o=0,a=t;o<a.length;o++){var s=a[o],l=s.quadkey,u=this.tiles.get(l);if(u)for(var h in u)for(var f=0,c=u[h];f<c.length;f++){var p=c[f],d=p.attrs,v=p.offsetX/e,y=p.offsetY/e,g=p.boxes.length,m=p.slope,x=p.halfWidth,_=p.halfHeight,w=s.x+p.cx,b=s.y+p.cy,T=void 0;if(g>1){T=new Array(g),w+=v,b+=y;var L=i.project(w,b,0,0),S=L[0],A=L[1],M=i.project(w+m[0],b+m[1],0,0);m=[(M[0]-S)/e,(M[1]-A)/e],this.updateBBoxes(S,A,m,x,_,T.length-1,T);}else {var C=i.project(w,b,0,0);T=[{minX:(S=C[0])-x+v,maxX:S+x+v,minY:(A=C[1])-_+y,maxY:A+_+y}];}r.push({boxes:T,attrs:d,slope:m,priority:p.priority});}}r.sort((function(t,e){return t.priority-e.priority}));for(var I=[],z=[],E=0,P=r;E<P.length;E++){var k=P[E],D=void 0,R=this.intersects(k,z);k.slope?D=I:(R||(R=this.intersects(k,I)),D=z),R||(D[D.length]=k);for(var O=0,B=k.attrs;O<B.length;O++){var N=B[O],F=N.buffer,U=N.start,W=N.stop,G=F.data,X=F.size,Z=1==(1&G[U]);if(R&&Z||!R&&!Z){for(;U<W;)G[U]^=1,U+=X;F.dirty=!0;}}n&&this.dbgBBoxes(k,R);}},t.prototype.removeTiles=function(t){var e=t.id;this.tiles.forEach((function(t){for(var i in t)Number(i.split("-")[0])==e&&delete t[i];}));},t}(),Ii=[3,9],zi=function(t){function e(e,i,n,r){var o=t.call(this,e,i,n||"auto",new Se(512),new we(r),Ii)||this;o.name="gl-test",o.dpr<2&&o.buckets.setSize(1024);var a=o;return o.collision=new Ci(a),o.buckets.onDrop=function(t,e){var i=this.quadkey,n=this.layers;a.collision.clearTile(i,n[e]),a.releaseBuffers(t);},o.render.init(o.canvas,o.dpr),o.factory=new Mi(o.render.gl,o.render.icons,o.collision,o.dpr),o.tilesNotReady=[],o.render.icons.onLoad=function(t){for(var e=0,i=o.tilesNotReady;e<i.length;e++){var n=i[e],r=n.quadkey,a=n.layerId,s=o.layers.get(a);if(s){var l=o.buckets.get(r,!0);if(l){var u=s.layer,h=s.index;l.preview(h,!1),l.ready(h,!1),l.cancelTasks(u);var f=u.getCachedTile(l.quadkey);f&&o.getScreenTile(r,s.tileSize)&&o.handleTile(f,u,l,h);}}}o.tilesNotReady=[];},o}return v(e,t),e.prototype.releaseBuffers=function(t){var e=this.render;if(t)for(var i=0,n=t;i<n.length;i++){var r=n[i];e.deleteBuffer(r);}},e.prototype.removeLayer=function(e){return this.collision.removeTiles(this.layers.get(e)),t.prototype.removeLayer.call(this,e)},e.prototype.unproject=function(t,e){var i=this.render.invScreenMat,n=[t,e,0],r=[t,e,1];de(n,n,i),de(r,r,i);var o=n[2],a=r[2],s=o===a?0:(0-o)/(a-o);return [n[0]*(1-s)+r[0]*s,n[1]*(1-s)+r[1]*s]},e.prototype.project=function(t,e,i,n){void 0===i&&(i=this.sx),void 0===n&&(n=this.sy);var r=[t-i,e-n,0];return de(r,r,this.render.screenMat)},e.prototype.setSize=function(e,i){t.prototype.setSize.call(this,e,i),this.render.gl&&this.render.initView(this.w,this.h,this.s,this.rx,this.rz);},e.prototype.setTransform=function(t,e,i){if(this.s!=t||this.rz!=e||this.rx!=i){this.s=t,this.rz=e,this.rx=i;var n=2*Math.PI;e=(e+n)%n,this.render.initView(this.w,this.h,t,i,e);}},e.prototype.prepareTile=function(t,e,i,n,r){var o=this,a=this,l=a.render.gl,u=i.tileSize,h=this.layers.get(i.id);if("image"==t.type){var f=function(t,e,i,n){var r=new Qt({first:0,count:6},"Image"),o=new Int16Array(12);return o[0]=0,o[1]=0,o[2]=i,o[3]=0,o[4]=i,o[5]=i,o[6]=0,o[7]=0,o[8]=i,o[9]=i,o[10]=0,o[11]=i,r.addAttribute("a_position",{data:o,size:2,stride:0}),r.addAttribute("a_textureCoord",{data:new Int8Array(ke),size:2,stride:0}),r.texture=new It(e,t),r.addUniform("u_sampler",0),r.zIndex=0,r.scissor=!0,r.blend=n,r.alpha=n?Mt.ALPHA:Mt.OPAQUE,r}(e,l,u,h.index>0);h.addZ(f.zIndex),n.preview(n.setData(i,[f]),null),r(n,i);}else if(e.length){var c=function(t,e,i,n,r,o,a){var l=e.layer,u={},h=!0,f=Ie.create({time:4,priority:4,init:function(){var e=n.z+l.levelOffset,a=l.getStyle(),s=1;if(a){var h=a.strokeWidthZoomScale||a.LineStringZoomScale;h&&(s=h(e));}return o&&o(),r.init(n,u,i,e),[n,t,s,0,16,l,e,!1]},name:"createBuffer",onDone:function(t){var i,r,o,f=t[6],c=Math.pow(2,17-f),p=1/xyzMapsCore_min.exports.webMercator.getGroundResolution(f),d=[];for(o in u){var v=u[o];if(v)for(var y=0,g=v.groups;y<g.length;y++){var m=g[y],x=m.type,_=m.shared,w=_.stroke,b=_.strokeWidth,T=x;if(r=m.buffer,("Text"!=T||m.texture)&&r&&!r.isEmpty()&&null!=(i=r.finalize(x))){if(d.push(i),"Line"==x)_.strokeDasharray&&(i.type="DashedLine",i.texture=m.texture,i.addUniform("u_texWidth",m.texture.width),i.addUniform("u_pattern",0)),i.addUniform("u_fill",w),i.addUniform("u_strokeWidth",[.5*b,"m"==_.unit?p:0]),i.addUniform("u_offset",[_.offsetX,"m"==_.offsetUnit?p:0]),i.alpha=1;else if("Polygon"==x||"Extrude"==x)i.addUniform("u_fill",_.fill),"Extrude"==x&&(i.addUniform("u_zoom",c),i.addUniform("u_strokePass",0),i.scissor=!1,_.stroke&&(i.addGroup(m.extrudeStrokeIndex,r.i32,1).uniforms={u_strokePass:1,u_stroke:_.stroke}));else if("Text"==x||"Icon"==x)i.scissor=r.scissor,i.texture=m.texture,"Text"==x?(i.texture.sync(),i.addUniform("u_fillColor",_.fill||Ee),i.addUniform("u_strokeColor",_.stroke||Ee)):i.addUniform("u_opacity",_.opacity),i.addUniform("u_texture",0),i.addUniform("u_atlasScale",1/i.texture.width),i.addUniform("u_alignMap","map"==_.alignment),i.addUniform("u_offset",[_.offsetX,_.offsetY]);else if("Rect"==x||"Circle"==x){i.scissor=r.scissor;var L=_.fill||Ee;i.addUniform("u_fill",L),w&&(i.addUniform("u_stroke",w),null==b&&(b=1)),i.addUniform("u_strokeWidth",0^b);var S="m"==_.unit?p:0;"Circle"==x?i.addUniform("u_radius",[_.width,S]):(L==Ee&&(i.alpha=1,i.blend=!0),i.addUniform("u_size",[_.width,S,_.height,S]),i.addUniform("u_rotation",_.rotation*ze)),i.addUniform("u_alignMap","map"==_.alignment),i.addUniform("u_offset",[_.offsetX,"m"==_.offsetUnit[0]?p:0,_.offsetY,"m"==_.offsetUnit[1]?p:0]);}var A=_.fill&&_.fill[3],M=_.stroke&&_.stroke[3],C=A<1,I=C||M<1;I&&(i.alpha=C&&"Extrude"==x?2:1,i.blend=!0,i.depth=!0);var z=m.zLayer;"top"==o&&(z=1/0,o=0),o=Number(o),i.flat=r.isFlat(),e.addZ(o,!i.flat),i.zIndex=o,i.zLayer="number"==typeof z?Math.ceil(z):null,null==i.scissor&&(i.scissor=!n.clipped||l.getMargin()>0||I);}}}a(d.reverse(),h);},exec:function(t){var e,i,n,o=t[0],a=t[1],s=t[2],l=t[5],u=a.length,f=t[6],c=!1;if(!t[7]){for(;t[4]--&&(i=a[t[3]++]);)if(e=l.getStyleGroup(i,f)){n=i.geometry.type,e.length||(e=[e]),gt(e);var p=i.getProvider().decCoord(i),d=!0;if("MultiLineString"==n||"MultiPoint"==n)for(var v="MultiPoint"==n?"Point":"LineString",y=0,g=p;y<g.length;y++){var m=g[y];d=d&&r.create(i,v,m,e,s);}else if("MultiPolygon"==n){d=r.create(i,"Polygon",p,e,s);for(var x=0;x<p.length;x++){var _=p[x];d=d&&Pe(r,i,_,e,s,o,x);}}else d=r.create(i,n,p,e,s),"Polygon"==n&&(d=d&&Pe(r,i,p,e,s,o));h=h&&d;}c=t[3]<u;}if(!c&&r.pendingCollisions.length){t[7]||(t[7]=r.pendingCollisions.sort((function(t,e){return t.priority-e.priority})),t[3]=0);var w=t[7],b=void 0;if(t[4]>=0)for(;t[4]--&&(b=w[t[3]++]);){p=b.coordinates;var T=b.priority,L=b.geomType;if("Point"==L||"LineString"==L){var S=r.create(b.feature,L,p,b.styleGrp,s,!1,T,b);h=h&&S;}}c=t[3]<w.length;}return t[4]=16,c}});return Ie.start(f),f}(e,h,u,t,this.factory,(function(){a.collision.initTile(t,h);}),(function(t,e){n.removeTask(c,i),n.preview(n.setData(i,t),null),e||a.tilesNotReady.push({quadkey:n.quadkey,layerId:i.id}),a.collision.completeTile(!0)&&(o.dirty=!0),r(n,i);}));n.addTask(c,i);}else n.preview(n.setData(i,[]),null),r(n,i);},e.prototype.orderBuffers=function(t,e,i,n,r,o,a){for(var s=0,l=e;s<l.length;s++){var u=l[s],h=u.zLayer,f=u.zIndex;null==h&&(h=i.index+1);var c=1e6*h+f;n[c]=0,r[r.length]={b:u,z:c,tile:t,preview:o,previewTile:a};}},e.prototype.viewport=function(){var t,e=this,i=e.buckets,n=e.layers,r=e.render,o=n.length;e.dirty&&(e.dirty=!1,e.collision.update(e.grid.tiles[512],(function(){return e.update()}))),r.clear(o&&n[0].bgColor||e.globalBgc),r.fixedView=Number(!this.viewChange);for(var a=[],s={},l=0,u=n;l<u.length;l++){var h=u[l],f=h.tiles;if(h.cnt=0,f)for(var c=h.index,p=f.length,d=0;d<p;){var v=(R=f[d++]).tile,y=v.data[h.index];if(!h.ready&&v.ready(c)&&++h.cnt==p&&(h.ready=!0),y)y.length&&this.orderBuffers(R,y,h,s,a);else {var g;if((g=v.preview(c))&&g.length)for(var m=0,x=g;m<x.length;m++){var _,w=x[m],b=w[0],T=i.get(b,!0);(null==(_=null==T?void 0:T.getData(c))?void 0:_.length)&&this.orderBuffers(R,_,h,s,a,w,T);}}}}var L=-1;for(var d in s)s[d]=++L;for(var S=1/0,A=(d=0,void 0),M=void 0;d<a.length;d++)A=(M=a[d]).z=s[M.z],!M.b.flat&&A<S&&(S=A);r.setPass(Mt.OPAQUE);for(var C=a.length;C--;){(E=a[C])&&r.draw(E,S);}r.setPass(Mt.ALPHA),a=a.sort((function(t,e){return 10*(t.z-e.z)+t.b.alpha-e.b.alpha}));var I=0;do{var z=!1;for(C=0,t=a.length;C<t;C++){var E;2==(E=a[C]).b.alpha&&(z=!0),E&&E.z==I&&r.draw(E,S);}r.pass==Mt.POST_ALPHA?r.setPass(Mt.ALPHA):z&&(r.setPass(Mt.POST_ALPHA),I--);}while(++I<=L);if(r.tileGrid)for(var P in e.tiles){if((f=e.tiles[P]).length){for(var k=0,D=f;k<D.length;k++){var R=D[k];r.drawGrid(R.x,R.y,R.tile,P);}break}}},e.prototype.destroy=function(){t.prototype.destroy.call(this);},e.prototype.viewChangeDone=function(){this.viewChange=!1,this.update();},e.zoomBehavior="float",e}(Tt),Ei=new Ct,Pi=2*Math.PI,ki=Math.PI/180,Di=Math.log(2048)/Math.log(2),Ri=Di+9,Oi=function(t,e,i,n,r,o,a,s,l,u,h,f){var c=a.z;e+=0^it("offsetX",n,r,c),i+=0^it("offsetY",n,r,c);var p,d,v,y,g,m,x=it("rotation",n,r,c),_=e+512<<Di|i+512^0|(x+360)%360<<Ri;h[_]||(h[_]=1,x&&(x*=ki,l.translate(e,i),l.rotate(x),g=e,m=i,e=0,i=0),"Text"==t?(n.stroke&&0!=n.strokeWidth&&l.strokeText(o,e,i),n.fill&&l.fillText(o,e,i)):"Circle"==t?(d=it("radius",n,r,c),l.moveTo(e+d,i),l.arc(e,i,d,0,Pi,!1)):(e-=(v=it("width",n,r,c))/2,i-=(y=it("height",n,r,c)||v)/2,"Image"==t?(p=it("src",n,r,c),Ei.isReady(p)?l.drawImage(Ei.get(p),e,i,v,y):Ei.get(p,(function(){return f.updateTile(a,s,u)}),a.quadkey)):"Rect"==t&&l.rect(e,i,v,y)),x&&(l.rotate(-x),l.translate(-g,-m)));},Bi=Math,Ni=function(){function t(){this.o=.5;}return t.prototype.init=function(t){return this.o=t,!0},t.prototype.createSymbol=function(t,e){return t-("Circle"==e.type?e.radius:e.width)>0},t.prototype.drawSymbol=function(t,e,i,n,r,o,a,s,l,u,h){Oi(r.type,e,i,r,a,!1,o,s,n,l,u,h);},t.prototype.angle=function(t,e){return Math.atan2(t,e)},t.prototype.place=function(t,e,i,n,r,o,a,s,l,u){for(var h,f,c,p,d,v,y,g,m,x,_=this.o,w=0;w<t.length;w++)c=Math.round(e.lon2x(t[w][0])),p=Math.round(e.lat2y(t[w][1])),w&&(m=c-h,x=p-f,d=Bi.sqrt(Bi.pow(m,2)+Bi.pow(x,2))-16,(v=this.createSymbol(d,r))&&(y=(m*_+h)*u,g=(x*_+f)*u,i.setTransform(u,0,0,u,y,g),i.rotate(this.angle(x,m)),i.translate(-y,-g),this.drawSymbol(v,y,g,i,r,e,n,o,a,s,l),i.setTransform(u,0,0,u,0,0))),h=c,f=p;},t}(),Fi=function(t){function e(e){var i=t.call(this)||this;return t.prototype.init.call(i,.5),i.setCharWidth(e),i}return v(e,t),e.prototype.setCharWidth=function(t){this.cw=t;},e.prototype.init=function(t){return "string"!=typeof t&&(t=String(t)),this.lw=t.length*this.cw,this.label=t,!0},e.prototype.angle=function(t,e){return Math.atan(t/e)},e.prototype.createSymbol=function(t){var e,i,n=this.label,r=this.cw,o=this.lw,a=Math.floor(t/o);return a>0&&(e=n,a>1&&(a=1+Math.floor((a-1)/8),i=new Array(Math.floor(1.5*(t-o)/r/a)).join(" "),e=n+new Array(a).join(i+n))),e},e.prototype.drawSymbol=function(t,e,i,n,r){r.stroke&&n.strokeText(t,e,i),r.fill&&n.fillText(t,e,i);},e}(Ni),Ui=function(t,e,i){var n,r,o,a,s=t.length-1;for(e.moveTo(o=Math.round(i.lon2x(t[s][0])),a=Math.round(i.lat2y(t[s][1])));s--;)n=Math.round(i.lon2x(t[s][0])),r=Math.round(i.lat2y(t[s][1])),(o-n||a-r)&&e.lineTo(o=n,a=r);},Wi=[],Gi=new Fi(O({font:P}).width),Xi=new Ni,Zi=function(t,e,i){t.globalAlpha=null==e.opacity?1:e.opacity;var n,r,o=e.font,a=e.stroke;if(a&&(t.strokeStyle=a,o&&(i=1),(n=e.strokeWidth)&&"number"==typeof n||(n=1),t.lineWidth=n*i),e.fill&&(t.fillStyle=e.fill),o){var s=e.font||P;Gi.setCharWidth(O(e).width),t.font=s,t.textAlign=e.textAlign||"center",t.textBaseline=e.textBaseline||"middle";}else t.lineCap=e.strokeLinecap||"round",t.lineJoin=e.strokeLinejoin||"round",(r=e.strokeDasharray)instanceof Array?t.setLineDash(r):t.setLineDash(Wi),(e.fill||e.stroke)&&t.beginPath();return !0},Hi=function(t,e,i,n,r,o,a,s,l,u){var h=i.getProvider().decCoord(i),f=i.geometry.type,c=t.z,p=it("type",r,i,c);if("LineString"==f){if("Circle"==p||"Rect"==p||"Image"==p){var d=it("offset",r,i,c);if(null!=d)return Xi.init(d),void Xi.place(h,t,e,i,r,o,a,s,l,u);f="MultiPoint";}}else if(("Polygon"==f||"MultiPolygon"==f)&&"Polygon"!=p&&"Line"!=p){var v=i.bbox;return Oi(p,Math.round(t.lon2x(v[0]+(v[2]-v[0])/2)),Math.round(t.lat2y(v[1]+(v[3]-v[1])/2)),r,i,n,t,o,e,a,s,l)}if("Point"==f)Oi(p,Math.round(t.lon2x(h[0])),Math.round(t.lat2y(h[1])),r,i,n,t,o,e,a,s,l);else if("Text"==p){if(!Gi.init(n))return;if("MultiLineString"==f)for(var y=0;y<h.length;y++)Gi.place(h[y],t,e,i,r,o,a,s,l,u);else "LineString"==f&&Gi.place(h,t,e,i,r,o,a,s,l,u);}else if("LineString"==f)Ui(h,e,t);else if("Polygon"==f||"MultiLineString"==f)for(var g=0;g<h.length;g++)Ui(h[g],e,t);else if("MultiPolygon"==f)for(y=0;y<h.length;y++)for(g=0;g<h[y].length;g++)Ui(h[y][g],e,t);else if("MultiPoint"==f)for(var m=h.length;m--;)Oi(p,Math.round(t.lon2x(h[m][0])),Math.round(t.lat2y(h[m][1])),r,i,n,t,o,e,a,s,l);},Yi=function(){function t(t,e,i){this.tm=t,this.exclusiveTimeMS=i,this.dpr=e;}return t.prototype.spawn=function(t,e,i,n,r,o,a,s,l){var u=this.createTask(t,e,i,n,r,i.bounds,o,a,s,l);return this.tm.start(u),u},t.prototype.createTask=function(t,e,i,n,r,o,a,s,l,u){var h=this.dpr,f=r.index(n),c=r.getContext(f);return this.tm.create({priority:t,delay:u,time:this.exclusiveTimeMS,init:function(){if(!l){c.setTransform(h,0,0,h,0,0);var t=n.getStyle().backgroundColor;t?(c.fillStyle=t,c.globalAlpha=1,c.fillRect(0,0,256,256)):c.clearRect(0,0,256,256);}return {tile:i,ctx:c,data:a,lI:0,gI:0,fI:0,style:undefined,dTile:r,layer:n,bI:100}},onDone:function(){r.dirty(f),s(c,this);},exec:function(t){var i,n=t.tile,r=t.data,o=r.length;if(o){for(;!(i=r[t.lI])&&t.lI<o;)++t.lI;if(i){var a=i[t.gI];if(a){var s=t.ctx,l=a.shared,u=null!=l.font;if(t.style!=l){t.style=l;var f=Zi(s,l,r.swzs);if(t.pmap={},!f)return t.fI=0,t.gI++,t.bI=100,this.CONTINUE}for(;t.bI--;){var c=t.fI++,p=a.data,d=p.features[c];if(!d){u?s.setTransform(h,0,0,h,0,0):(l.fill&&s.fill(),l.stroke&&(l.strokeWidth||null==l.strokeWidth)&&s.stroke()),t.fI=0,t.gI++;break}var v=p.styles[c],y=void 0;u&&!(y=et(v,d,n.z))||Hi(n,s,d,y,v,t.dTile,t.layer,t.pmap,e,h);}}else t.fI=0,t.gI=0,t.lI++;return t.bI=100,this.CONTINUE}}}})},t}(),ji=function(){function t(t,i){this.dpr=1,this.debug=!1,this.rz=0,this.sx=0,this.sy=0,this.s=1;var n=s.getInstance(),r=this;r.ts=t,r.dpr=i,r.painter=new Yi(n,i,4);}return t.prototype.drawGrid=function(t,e,i){var n=i+"  L"+i.length,r=this.ctx;r.strokeRect(t,e,256,256),r.strokeText(n,t+8,e+16),r.fillText(n,t+8,e+16);},t.prototype.applyTransform=function(){var t=this,e=t.s,i=t.rz;if(t._s!=e||t._rz!=i){t._s=e,t._rz=i;var n=t.ctx,r=t.canvas,o=r.width,a=r.height,s=o/2-t.sx,l=a/2-t.sy,u=t.dpr;n.setTransform(1,0,0,1,o/2,a/2),n.rotate(i),n.translate(-o/2+s,-a/2+l),n.scale(e,e),n.translate(-s,-l),n.scale(u,u);}},t.prototype.init=function(t){var e=t.getContext("2d",{alpha:!1});e.font="bold 14px Arial",e.lineWidth=3,e.strokeStyle="red",e.fillStyle="white",e.textAlign="start",e.textBaseline="alphabetic",this.ctx=e,this.canvas=t;},t.prototype.setBuckets=function(t){this.buckets=t;},t.prototype.clear=function(){},t.prototype.convertColor=function(t){return t},t.prototype.setBackgroundColor=function(t){this.buckets.bgColor(t);},t.prototype.grid=function(t){this.debug=t;},t.prototype.setScale=function(t,e,i){var n=this;n.s=t,n.sx=e,n.sy=i;},t.prototype.setRotation=function(t,e){this.rz=t;},t.prototype.prepare=function(t,e,i,n,r,o){return this.painter.spawn(3,n,e,i,r,t,o)},t.prototype.tile=function(t,e,i){var n=this;e=Math.round(e),i=Math.round(i),n.ctx.drawImage(t.combine(),e,i,256,256),n.debug&&n.drawGrid(e,i,t.quadkey);},t.prototype.preview=function(t,e,i,n){var r=t.getContext(n);r.clearRect(0,0,t.size,t.size);for(var o=0,a=e.length;o<a;o++){var s=e[o],l=this.buckets.get(s[0],!0),u=void 0;l&&(u=l.getData(n))&&(r.setTransform(1,0,0,1,0,0),r.drawImage(u,s[1],s[2],s[3],s[4],0+s[5],0+s[6],s[7],s[8]),t.dirty(n));}},t.prototype.destroy=function(){},t}(),qi=function(t){function e(e,i,n,r,o){var a=t.call(this)||this,s=n.length;return a.c=new Array(s),a.init(i,n),a.size=r,a.bPool=e,a.ctx=e.claimCtx(r),a.canvas=a.ctx.canvas,a.ctx.fillStyle=o,a}return v(e,t),e.prototype.destroy=function(t){if(null!=t)(e=this.c[t])&&(e.canvas&&this.bPool.releaseCtx(e),this.c[t]=undefined);else for(var e,i=this.c.length;i--;)(e=this.c[i])&&e.canvas&&(this.bPool.releaseCtx(e),this.c[i]=undefined);},e.prototype.init=function(e,i){t.prototype.init.call(this,e,i);var n=i.length;for(this.c.length=n;n--;)this.c[n]=undefined;this._c=!1,this._ready=!1;},e.prototype.dirty=function(t,e){var i=this.c[t],n=e!=i;e&&i&&n&&this.destroy(t),e||(n=!0,e=this.c[t]),n&&(this.c[t]=e,this._c=!1);},e.prototype.clear=function(t){var e;(e=this.c[t])&&(e.setTransform&&this.bPool.releaseCtx(e),this.c[t]=undefined,this.preview(t,undefined),this.ready(t,!1),this._c=!1,this.combine());},e.prototype.getContext=function(t){return this.c[t]||(this.c[t]=this.bPool.claimCtx(this.size)),this.c[t]},e.prototype.getData=function(t){return this.c[t]&&(this.c[t].canvas||this.c[t])},e.prototype.combine=function(){var t,e=this,i=e.size;if(!e._c){e._c=!0,e.ctx.fillRect(0,0,i,i);for(var n=0;n<e.c.length;n++)(t=this.getData(n))&&e.ctx.drawImage(t,0,0,i,i);}return e.canvas},e.prototype.addLayer=function(e){t.prototype.addLayer.call(this,e);var i=this;i.c.splice(e,0,undefined),i._c=!1,i._ready=!1;},e.prototype.removeLayer=function(e){t.prototype.removeLayer.call(this,e);this.destroy(e),this.c.splice(e,1),this._c=!1;},e}(be),Vi=[],Ki={length:0,max:128,clear:function(){this.length=0;},create:function(t){var e=document.createElement("canvas");return e.width=e.height=t,this.length++,e.getContext("2d")},get:function(t){return Vi.length?(this.length++,Vi.shift()):this.create(t)},release:function(t){t.setTransform(1,0,0,1,0,0),t.clearRect(0,0,t.canvas.width,t.canvas.height),t.lineWidth=1,t.globalAlpha=1,Vi.push(t),this.length--;}},Qi=function(t){function e(e,i){var n=t.call(this,e||256)||this;return n.ctxCache=Ki,n._bgc=null,n.tSize=i,n}return v(e,t),e.prototype.bgColor=function(t){this._bgc=t,this.forEach((function(e){e.ctx.fillStyle=t;}));},e.prototype.clear=function(){this.tiles.clear(),Ki.clear();},e.prototype.setSize=function(t){this.tiles.setSize(t);},e.prototype.releaseCtx=function(t){return Ki.release(t)},e.prototype.claimCtx=function(t){if(Ki.length<Ki.max)return Ki.get(t);var e=this.tiles.tail.data;return e.destroy(),Ki.release(e.ctx),e.ctx=null,e.canvas=null,this.tiles.remove(e.quadkey),e.cancelTasks(),this.claimCtx(t)},e.prototype.create=function(t,e){var i=this.tiles.get(t);return i||(this.tiles.length>=this.tiles.max?((i=this.tiles.tail.data).destroy(),i.init(t,e),i.size=this.tSize):i=new qi(this,t,e,this.tSize,this._bgc),this.tiles.set(t,i)),i},e}(Le),$i={1:[512,3,512],2:[128,2,128],3:[64,1,128]},Ji=function(t,e,i,n,r){var o=Math.sin(r),a=Math.cos(r),s=t-i,l=e-n;return [a*s-o*l+i,o*s+a*l+n]},tn=function(){function t(){this.features=[],this.styles=[];}return t.prototype.add=function(t,e){this.features.push(t),this.styles.push(e);},t}(),en=function(t){function e(e,i,n,r){var o;i=i||256,n=0^Tt.getPixelRatio(n);var a=$i[n][1],s=new ji(i*n,n),l=$i[n][0],u=new Qi(l,i*n);return s.setBuckets(u),o=t.call(this,e,i,n,u,s,a)||this,s.init(o.canvas),o}return v(e,t),e.prototype.preview=function(e,i,n){var r=t.prototype.preview.call(this,e,i,n);return r&&this.render.preview(e,r,i,n),r},e.prototype.prepareTile=function(t,e,i,n,r){var o=this,a=o.render;if("image"==t.type){var s=n.index(i);n.dirty(s,e),r(n,i);}else if(e.length)n.addTask(o.cluster.spawn(4,i,t,e,{},tn,(function(e,s){n.removeTask(s,i),null==n&&(n=undefined),n.addTask(a.prepare(e,t,i,o,n,(function(t,e){n.removeTask(e,i),r(n,i);})),i);})),i);else {s=n.index(i);n.destroy(s),n.dirty(s),r(n,i);}},e.prototype.viewport=function(t){var e,i,n=this,r=n.tiles,o=n.render,a=n.layers,s=a.length;for(var l in this.buckets,(this.dirty||t)&&(this.render.clear(),this.dirty=!1),r)if("512"!=l)for(var u=r[l],h=u.length,f=0,c=u;f<c.length;f++){var p=c[f];if(i=(e=p.tile).luTs,p.lrTs!=i||t){p.lrTs=i,o.tile(e,p.x,p.y);for(var d,v=0;v<s;v++)!(d=a[v]).ready&&e.ready(v)&&++d.cnt==h&&(d.ready=!0);}}},e.prototype.addLayer=function(e,i,n){e.tileSize=256;var r=t.prototype.addLayer.call(this,e,i,n);return r&&this.setupTilePool(),r},e.prototype.removeLayer=function(e){var i=t.prototype.removeLayer.call(this,e);return -1!==i&&this.setupTilePool(),i},e.prototype.setSize=function(e,i){var n=this;t.prototype.setSize.call(this,e,i),n.setupTilePool(),n.render._s=undefined,n.setTransform(n.s,n.rz,n.rx);},e.prototype.destroy=function(){t.prototype.destroy.call(this),this.buckets.clear();},e.prototype.setupTilePool=function(){var t=this,e=(Math.ceil(t.w/256)+1)*(Math.ceil(t.h/256)+1),i=e,n=$i[t.dpr],r=e*t.getLayers().length;i<n[0]&&(i=n[0]),t.buckets.setSize(i),r<n[2]&&(r=n[2]),t.buckets.ctxCache.max=r;},e.prototype.update=function(e){t.prototype.update.call(this);},e.prototype.project=function(t,e){var i=this,n=i.s;return Ji(t*=n,e*=n,i.w/2,i.h/2,i.rz)},e.prototype.unproject=function(t,e){var i=this,n=i.s,r=i.w/2,o=i.h/2,a=Ji(t,e,r,o,-i.rz);return a[0]=(a[0]-r)/n+r,a[1]=(a[1]-o)/n+o,a},e.zoomBehavior="fixed",e}(Tt),nn=0===navigator.platform.indexOf("Win")?.0025:.0015,rn=function(){function e(t,e,i,n){var r=this;this.passive=!1;try{var o=Object.defineProperty({},"passive",{get:function(){r.passive=!0;}});window.addEventListener("testPassive",null,o),window.removeEventListener("testPassive",null,o);}catch(t){}this.el=t,this.settings=i,this.map=e,this.ams=0^n,this.onSpin=this.onSpin.bind(this);}return e.prototype.onSpin=function(e){var i=this,n=i.settings,r=i.el,o=i.map,a=n.zoom;if(a){var s=-(e=e||t.event).deltaY;if(e.deltaMode===e.DOM_DELTA_LINE&&(s*=32.001953125),s){var l=o.getZoomlevel(),u=void 0,h=void 0;"fixed"==a?e.shiftKey?u=l+(s>0?.1:-.1):(u=Math.round(l+(s<0?-1:1)),h=!0):u=l+s*nn;var f=r.getBoundingClientRect();this.zoom(u,e.pageX-f.left,e.pageY-f.top,h);}}e.preventDefault&&e.preventDefault(),e.returnValue=!1;},e.prototype.enable=function(){x(this.el,["wheel","DOMMouseScroll"],this.onSpin);},e.prototype.disable=function(){_(this.el,["wheel","DOMMouseScroll"],this.onSpin);},e.prototype.zoom=function(t,e,i,n){var r=this.map,o=this.ams;r.setZoomlevel(t,e,i,n&&o);},e}(),on=function(t){return t},an=function(t){return Math.sin(Math.PI*t*.5)},sn=Object.freeze({__proto__:null,linear:on,easeOut:function(t){return 1-Math.pow(1-t,1.5)},easeOutSine:an,easeOutCubic:function(t){return 1-(t=1-t)*t*t}}),ln=function(){function t(t,e,i,n,r){this.ts=0,this.af=null,this.from="number"==typeof t?[t]:t,this.to="number"==typeof e?[e]:e,this.duration=i,"function"==typeof n&&(r=n,n="linear"),this.easing=sn[n]||on,this.animator=r,this.animate=this.animate.bind(this);}return t.prototype.animate=function(){var t=this,e=this.duration,i=Math.min(Date.now()-this.ts,e),n=this.from.map((function(n,r){var o=t.to[r];return n+t.easing(i/e)*(o-n)}));this.animator(1==n.length?n[0]:n),i<e?this.af=requestAnimationFrame(this.animate):(this.af=null,this.done());},t.prototype.start=function(){return g(this,void 0,void 0,(function(){var t=this;return m(this,(function(e){return [2,new Promise((function(e){t.done=e,t.ts?e():(t.ts=Date.now(),t.animate());}))]}))}))},t.prototype.stop=function(){null!=this.af&&(cancelAnimationFrame(this.af),this.af=null);},t}(),un=function(t,e){var i,n,r=t.targetTouches;if(r){var o=r.length,a=r[o-1],s=void 0;if(o){var l=e.getBoundingClientRect(),u=a.pageX-l.left,h=a.pageY-l.top;o>1?(i=(u+(s=r[o-2]).pageX-l.left)/2,n=(h+s.pageY-l.top)/2):(i=u,n=h);}}else i=t.clientX,n=t.clientY;return [0^i,0^n]},hn=function(t){var e=t.targetTouches,i=e.length,n=e[i-2];if(n){var r=e[i-1],o=n.clientX-r.clientX,a=n.clientY-r.clientY;return 180*Math.atan2(a,o)/Math.PI}},fn=function(e,i,n,r,o){var a=this;this.scrollHandler=new rn(e,i,r,o.zoomAnimationMs);var s,l,u,h,f,c,p,d,v,y,g,m,w,b,T,L=this,S=null,A=Date.now(),M=[],C=[],I=function(){p=0,M.length=0,C.length=0;};function z(t){var e=1;if(null!=t.scale)return t.scale;var i=t.targetTouches,n=i.length,r=i[n-1],o=i[n-2];if(o){var a=Y(r.clientX,r.clientY,o.clientX,o.clientY);null==S&&(S=a),e=a/S;}return e}function E(t,e){if(!f){var a=o.minPanMapThreshold;if(Math.abs(t-s)<a&&Math.abs(e-l)<a)return !0;n.cancel();}if(c=Date.now(),r.drag&&!i.lockViewport().pan){var d=t-u,v=e-h;p<8?(M[p]=d,C[p]=v,p++):p=0,i.pan(d,v),f=!0;}u=t,h=e;}function P(t){if(f){var e=Date.now();e-c<25&&n.pan(e,3*M.reduce((function(t,e){return t+e}),0),3*C.reduce((function(t,e){return t+e}),0));}}var k,D=null;function R(t){I();var n=t.targetTouches,r=n.length,o=un(t,e);if(u=o[0],h=o[1],s=u,l=h,z(t),f=!1,2==r){k=0;var a=n[r-1],c=n[r-2];m=a.clientX,w=a.clientY,b=c.clientX,T=c.clientY,S=Y(m,w,b,T),g=i.getZoomlevel(),d=i.rotate(),v=i.pitch(),y=hn(t);}}function O(t){var n=t.targetTouches,o=n.length,a=un(t,e),s=z(t);if(o>1){if(r.pitch){if(++k<5)return void t.preventDefault();var l=n[o-1],f=n[o-2],c=w-l.clientY,p=T-f.clientY;if(D||0!=D&&Math.abs(f.clientY-l.clientY)<110&&Math.sign(c)==Math.sign(p))return D=!0,i.pitch(v+.2*c),void t.preventDefault();D=!1;}r.zoom&&L.scrollHandler.zoom(g+Math.log2(s),a[0],a[1],!1),r.rotate&&i.rotate(d+hn(t)-y);}E(a[0],a[1]),u=a[0],h=a[1],t.preventDefault();}function B(t){var i=un(t,e),n=t.targetTouches.length;D=null,i&&(u=i[0],h=i[1],s=u,l=h),n<2&&(S=null);var r=Date.now(),o=r-A;n&&(A=r),z(t),0==n&&1==t.changedTouches.length&&o>350&&P();}var N=null;function F(t){N=t.button,I(),f=!1,x(e,"mousemove",U),d=i.rotate(),v=i.pitch(),u=t.clientX,h=t.clientY,s=u,l=h;}function U(t){var e;null===(e=L.resetAnimation)||void 0===e||e.stop(),0==N?E(t.clientX,t.clientY):2==N&&(r.rotate&&i.rotate(d+.25*(u-t.clientX)),r.pitch&&i.pitch(v+.1*(h-t.clientY)));}function W(t){if(N=null,_(e,"mousemove",U),f)P();else if(r.rotate){var n=i.rotate();d!=n&&Math.abs(n)<=5&&(L.resetAnimation=new ln(n,0,500,"easeOutSine",(function(t){return i.rotate(t)})),L.resetAnimation.start());}}L.scroll=function(t){var e=a.scrollHandler;t?e.enable():e.disable();},L.drag=function(i){var n=i?x:_;setTimeout((function(){n(e,"touchstart",R),n(t,"touchend",B),n(e,"touchmove",O),n(e,"mousedown",F),n(t,"mouseup",W);}),0);},L.getOptions=function(){return r};},cn=function(){function t(t,e,i,n,r){this.type=t,this.timeStamp=Date.now(),null!=e&&(this.data=this.detail=e),i&&(this.mapX=n,this.mapY=r,this.nativeEvent=i,this.button=i.button);}return t.prototype.stopPropagation=function(){var t=this.nativeEvent;if("mousemove"==t.type||"touchmove"==t.type)return t.stopImmediatePropagation(),t.preventDefault()},t.prototype.toString=function(){return "MapEvent "+this.type},t}(),pn=["pointerup","pointerenter","pointerleave","pointerdown","pointermove","pressmove","tap","dbltap"];function dn(t){return -1!==pn.indexOf(t)}function vn(t,e){var i=e.type;"touchstart"!=i&&"touchmove"!=i&&"touchend"!=i||(e=e.changedTouches[e.changedTouches.length-1]);var n=t.getBoundingClientRect();return [e.pageX-n.left,e.pageY-n.top]}var yn,gn=function(){function t(t,i,r,o){this.disabled={},this.hActive=!1,this.cnt=0,this.el=t,this.cbs=new h(["click"]);var a,s$1,l,u,h$1,f,c=this.disabled,p=!1,d=!1,v=0,y=!1,g=this.cbs;g.sync(!0),pn.forEach((function(t){g.addEvent(t),c[t]=!1;}));var m=s.getInstance().create({delay:40,priority:5,exec:function(){!function(e){var i=vn(t,e),n=w(i);_("pointermove",e,i,n),n?h$1?h$1.feature.id!==n.feature.id&&(_("pointerleave",e,i,h$1),_("pointerenter",e,i,n)):_("pointerenter",e,i,n):h$1&&_("pointerleave",e,i,h$1);h$1=n;}(f),y=!1;}});function x(t,e,n,r,o){var a=new cn(t,o,e,n,r);return o&&(a.target=o.feature,a.detail.display=i),a}function _(t,e,i,n){g.trigger(t,[x(t,e,i[0],i[1],n)],!1);}function w(t){return i.getFeatureAt({x:t[0],y:t[1]},{layers:i._layers.filter((function(t){return t.pointerEvents()}))})}var b=!1;this.onPointerDown=function(e){var n="touchstart"==e.type;n||!b?(l=i.getCenter(),d=!0,p=!1,a=vn(t,e),s$1=w(a),_("pointerdown",e,a,s$1),n&&e.target.parentNode==t&&(b=!0)):b=!1;},this.onPointerMove=function(e){var i="mousemove"==e.type;if(!i||!b){var n,r,l;if(d){var u=o.minPanMapThreshold;if(!p&&(r=(n=vn(t,e))[0]-a[0],l=n[1]-a[1],Math.abs(r)<u&&Math.abs(l)<u))return}p=!0,d?s$1&&g.isListened("pressmove")&&(r=(n=vn(t,e))[0]-a[0],l=n[1]-a[1],g.trigger("pressmove",[x("pressmove",e,n[0],n[1],s$1),r,l],!1)):i&&(g.isListened("pointerenter")||g.isListened("pointerleave")||g.isListened("pointermove"))&&(f=e,c.pointerenter||c.pointerleave||y||(y=!0,m.start()));}},this.onPointerUp=function(e){if(d){var n=i.getCenter();if(!(l.longitude!=n.longitude||l.latitude!=n.latitude)&&e.target.parentNode==t&&(s$1||!p)){var r=vn(t,e);_("tap",e,r,s$1),_("pointerup",e,r,s$1),function(t){var e=Date.now(),i=s$1&&s$1.feature;e-v<250&&!p&&u==i&&_("dbltap",t,a,s$1),u=i,v=e;}(e);}d=p=!1;}};}return t.prototype.getGlobalHandlers=function(){var t=this,e=t.onPointerDown,i=t.onPointerMove,n=t.onPointerUp;return {touchstart:e,touchmove:i,touchend:n,mousedown:e,mouseup:n,mousemove:i}},t.prototype.enable=function(t){dn(t)&&delete this.disabled[t];},t.prototype.disable=function(t){dn(t)&&(this.disabled[t]=!0);},t.prototype.destroy=function(){var t=this.getGlobalHandlers();if(this.hActive){for(var e in t)_(this.el,e,t[e]);this.hActive=!1;}},t.prototype.addEventListener=function(t,e,i){if(dn(t)&&this.cbs.add(t,e,i)){this.cnt++;var n=this.getGlobalHandlers(),r=void 0;if(!this.hActive)for(var o in n){r=n[o];var a=this.el;if("mouseup"==o)for(;a.parentNode;)a=a.parentNode;x(a,o,r),this.hActive=!0;}}},t.prototype.removeEventListener=function(t,e,i){var n=this.cbs,r=this.el;if(dn(t)&&n.remove(t,e,i)&&!--this.cnt&&this.hActive){var o=this.getGlobalHandlers();for(var a in o)n.isListened(a)||_(r,a,o[a]);this.hActive=!1;}},t}(),mn=function(t,e,i){for(var n=!1,r=0,o=i.length-1;r<i.length;o=r++){var a=i[r][0],s=i[r][1],l=i[o][0],u=i[o][1];s>e!=u>e&&t<(l-a)*(e-s)/(u-s)+a&&(n=!n);}return n},xn=function(t,e,i,n){var r=(n[1]-i[1])*(e[0]-t[0])-(n[0]-i[0])*(e[1]-t[1]);if(0!=r){var o=((n[0]-i[0])*(t[1]-i[1])-(n[1]-i[1])*(t[0]-i[0]))/r,a=((e[0]-t[0])*(t[1]-i[1])-(e[1]-t[1])*(t[0]-i[0]))/r;return 0<=o&&o<=1&&0<=a&&a<=1}},_n=function(){function t(t,e){this.map=t,this.dpr=e;}return t.prototype.pointToLineDistanceSq=function(t,e,i,n,r,o){var a,s,l,u,h=r-i,f=o-n,c=h*h+f*f,p=-1;0!=c&&(p=((a=t-i)*h+(s=e-n)*f)/c);p<0?(l=i,u=n):p>1?(l=r,u=o):(l=i+p*h,u=n+p*f);var d=t-l,v=e-u;return this.sideOfLine=h*s-a*f<0?-1:1,d*d+v*v},t.prototype.pointInPolygon=function(t,e,i){for(var n=0;n<i.length;n++)if(mn(t,e,i[n])!=!n)return !1;return !0},t.prototype.pointInBox=function(t,e,i,n,r){for(var o=0,a=t;o<a.length;o++){var s=a[o],l=s[0],u=s[1];if(l>=e&&l<=i&&u>=n&&u<=r)return !0}},t.prototype.linesIntersectBox=function(t,e,i,n,r){for(var o=[[e,r],[i,r],[i,n],[e,n],[e,r]],a=0,s=t.length-1;a<s;a++)for(var l=0;l<o.length-1;l++)if(xn(t[a],t[a+1],o[l],o[l+1]))return !0},t.prototype.getOffsetLineData=function(t,e,i){for(var n=[],r=function(e){var r=it("offset",e,t,i)||0;if(r&&n.find((function(t){return t.offset==r})))return "continue";n.push({offset:r,width:.5*rt("strokeWidth",e,t,i,!0)});},o=0,a=e;o<a.length;o++){r(a[o]);}return n.length,n},t.prototype.geometry=function(t,e,i,n,r,o,a,s,l,u,h){var f=!1,c=this.dpr,p=this.map,d=!i&&!n;if("Point"==o){if(h=h||ut(a,l,u,c,s)){var v=p.geoToPixel(r[0],r[1]),y=Math.round(v.x+h[0]),g=Math.round(v.y+h[1]),m=Math.round(v.x+h[2]),x=Math.round(v.y+h[3]);f=H(t,t+i,e,e+n,y,m,g,x);}}else if("LineString"==o){h=h||st(a,l,u,s);var _=r.length;if(d){var w=p.geoToPixel(r[0][0],r[0][1]),b=this.getOffsetLineData(l,a,u),T=void 0,L=void 0,S=void 0;b.length||(T=Math.pow(.5*h[0],2));for(var A=1;A<_;A++){if(L=p.geoToPixel(r[A][0],r[A][1]),S=this.pointToLineDistanceSq(t,e,w.x,w.y,L.x,L.y),b.length){for(var M=0,C=b;M<C.length;M++){var I=C[M],z=I.offset,E=I.width,P=Math.pow(z-this.sideOfLine*E,2);if(z){if(S>P){if(f=S-Math.pow(z+this.sideOfLine*E,2)<=E*E)break}}else if(f=S<=E*E)break}if(f)break}else if(f=S<=T)break;w=L;}}else {var k=.5*(h=h||st(a,l,u,s))[0],D=p.pixelToGeo(t-k,e-k),R=p.pixelToGeo(t+k,e+k),O=D.longitude,B=R.longitude,N=R.latitude,F=D.latitude;if(!(f=this.pointInBox(r,O,B,N,F)||this.linesIntersectBox(r,O,B,N,F)))return !1}}else if("Polygon"==o){var U=!1;if(!a.find((function(t){var e=it("type",t,l,u);return U=U||"Line"==e,"Polygon"==e})))return U&&this.geometry(t,e,i,n,r,"MultiLineString",a,s,l,u);if(r=r,d){var W=p.pixelToGeo(t,e),G=W.longitude,X=W.latitude;if(!(f=this.pointInPolygon(G,X,r)))return !1}else {D=p.pixelToGeo(t-i,e-i),R=p.pixelToGeo(t+i,e+i),O=D.longitude,B=R.longitude,N=R.latitude,F=D.latitude;for(var Z=0;Z<r.length&&!(f=this.pointInBox(r[Z],O,B,N,F));Z++);if(!f){var Y=p.pixelToGeo(t,e);G=Y.longitude,X=Y.latitude;if(!(f=this.pointInPolygon(G,X,r)||this.linesIntersectBox(r[0],O,B,N,F)))return !1}}h=h||[at(a,l,u,s)];}else {var j=void 0;if("MultiPolygon"==o?(j="Polygon",h=h||[at(a,l,u,s)]):"MultiPoint"==o?(j="Point",h=h||ut(a,l,u,c,s)):"MultiLineString"==o&&(j="LineString",h=h||st(a,l,u,s)),j){Z=0;for(var q=r.length;Z<q;Z++)if(this.geometry(t,e,i,n,r[Z],j,a,s,l,u,h)){f=!0;break}}}return f&&h},t.prototype.feature=function(t,e,i,n,r,o,a,s){return this.geometry(t,e,i,n,r.geometry.coordinates,r.geometry.type,o,a,r,s)},t}(),wn=Array.from({length:33},(function(t,e){return 32*Math.pow(2,Math.max(0,e-20+3))})),bn=function(t){return "number"==typeof t},Tn=function(){function t(t,e){this.map=t,this.hit=new _n(t,e);}return t.prototype.getFeaturesInRect=function(t,e,i,n,r){for(var o,a,s,l,u,h,f,c,p=this.map,d=this.hit,v=p.getZoomlevel(),y=wn[Math.ceil(v)],g=0^Math.min(20,v),m={},x=(i-t)/2,_=(n-e)/2,w=t+x,b=e+_,T=180,L=-180,S=180,A=-180,M=[p.pixelToGeo(t-y,e-y),p.pixelToGeo(i+y,e-y),p.pixelToGeo(i+y,n+y),p.pixelToGeo(t-y,n+y)],C=4,I=[];C--;){var z=M[C].longitude,E=M[C].latitude;z<T&&(T=z),z>L&&(L=z),E<S&&(S=E),E>A&&(A=E);}o=[T,S,L,A],r&&!Array.isArray(r)&&(r=[]);for(var P=r.length;P--;)if(a=(s=r[P]).getProvider(v),v<=s.max&&v>=s.min&&a.search)for(h=(u=a.search(o)).length;h--;)if(l=u[h],(f=s.getStyleGroup(l,g))&&(c=d.feature(w,b,x,_,l,f,P,v))){var k=c[c.length-1],D=m[k]=m[k]||[];(D[P]=D[P]||[]).push(l);}var R={layer:null,features:null};for(var O in m)for(var B=m[O],N=0,F=void 0;N<B.length;N++)if(F=B[N]){var U=r[N];R.layer==U?R.features=R.features.concat(F):I.push({layer:U,features:F});}return I},t.prototype.search=function(t,e,i,n,r){var o=this.map._layers;if(r=r?r instanceof Array?r.slice().sort((function(t,e){return Number(o.indexOf(t)>o.indexOf(e))})):[r]:o,bn(t)&&bn(e)&&bn(i)&&bn(n))return this.getFeaturesInRect(t,e,i,n,r)},t}(),Ln=t.setTimeout,Sn=t.setInterval,An=100,Mn=function(t,e,i){var n;return "function"==typeof Event?n=new Event(t):(n=document.createEvent("Event")).initEvent(t,!0,!0),n.detail=n.data={map:e,layer:i},n},Cn=function(){function e(e,i,n){this.watchTimer=null,this.map=e,this.trigger=i,this.renderInfo=n,An=t.__XYZTST_MVCEDelayMs||An,this.changeWatcher=this.changeWatcher.bind(this),this.readyWatcher=this.readyWatcher.bind(this);}return e.prototype.centerChanged=function(t){return this.center.longitude!=t.longitude||this.center.latitude!=t.latitude},e.prototype.vpChanged=function(t,e,i){var n=this,r=n.viewport,o=n.rz,a=n.rx;return !(r.minLon!=t.minLon||r.maxLon!=t.maxLon||r.minLat!=t.minLat||r.maxLat!=t.maxLat||o!=e||a!=i)},e.prototype.changeWatcher=function(){var t=this,e=t.map,i=t.readyTimer,n=t.watchTimer,r=t.viewport;t.center;var o=e.getViewBounds(),a=e.getCenter(),s=e.rotate(),l=e.pitch(),u="mapviewchange",h={changed:{center:!0}};if(r){if(h.changed.center=this.centerChanged(a),this.vpChanged(o,s,l))return clearInterval(n),this.watchTimer=this.viewport=this.rz=this.rx=null,i&&clearTimeout(i),this.readyTimer=Ln(this.readyWatcher,An);this.viewport=o,this.rz=s,this.rx=l,this.center=a;}else this.triggeredLayers={},u="mapviewchangestart",this.viewport=o,this.rz=s,this.center=a,this.endTriggered=!0;this.trigger(u,h,true);},e.prototype.readyWatcher=function(){var t,e,i,n=this.map,r=this.triggeredLayers,o=this.renderInfo.getLayers(),a=!0;if(this.endTriggered){this.endTriggered=!1;var s=n.getCenter();this.trigger("mapviewchangeend",{changed:{center:this.centerChanged(s)}},true);}for(var l=0;l<o.length;l++)if(i=(t=(e=o[l]).layer).id,e.ready){if(!r[i]&&(r[i]=!0,!e.error)){var u=Mn("viewportReady",n,t);t._l.trigger("viewportReady",u,!0);}}else a=!1;a||(this.readyTimer=Ln(this.readyWatcher,An));},e.prototype.watch=function(t){var e=this.readyTimer,i=this.watchTimer;e&&(clearTimeout(e),this.readyTimer=null),t?i||(this.watchTimer=Sn(this.changeWatcher,33.333333333333336)):i&&(clearInterval(i),this.watchTimer=null);},e}(),In=function(){function t(t,e,i,n){this._v=!0;var r=this;r.map=i,r.cPrefix=t.className+"-ui-",r.parent=t,r.opt=e,e.visible&&(r.create(t,e),r.enable());}return t.prototype.show=function(){var t=this;t.html||t.create(t.parent,t.opt),t.html.style.display="inline";},t.prototype.hide=function(){var t=this.html;t&&(t.style.display="none");},t.prototype.enable=function(){this.active=!0,this.toggleListeners(!0);},t.prototype.disable=function(){this.active=!1,this.toggleListeners(!1);},t.prototype.destroy=function(){var t=this;t.disable(),t.parent.removeChild(t.html);},t.prototype.toggleListeners=function(t){var e=this,i=e.listeners,n=function(n){var r=e.querySelectorAll(n),o=function(o){r.forEach((function(r){var a=i[n][o];t?r.addEventListener(o,i[n][o]._=a.bind(e)):r.removeEventListener(o,a._);}));};for(var a in i[n])o(a);};for(var r in i)n(r);},t.prototype.insertRule=function(t,e){var i,n=(yn=yn||(i=document.createElement("style"),document.head.appendChild(i),i)).sheet;n.insertRule?n.insertRule(t+" {"+e+"}",n.cssRules.length):n.addRule&&n.addRule(t,e);},t.prototype.create=function(t,e){var i=this.templ.replace(/class\=\"/g,'class="'+this.cPrefix);i=i.replace(/\>[\s]+\</g,"><");var n,r=(n=i,(new DOMParser).parseFromString(n,"text/html").body.childNodes[0]),o=r.style,a=e.position,s="."+t.className+" ";for(var l in a)o[l]=a[l];if(this.style)for(var u in this.style)this.insertRule(s+this.prefixClass(u),this.style[u]);this.html=t.appendChild(r);},t.prototype.prefixClass=function(t){return t=t.replace(/\./g,"."+this.cPrefix)},t.prototype.querySelector=function(t){return this.html.querySelector(this.prefixClass(t))},t.prototype.querySelectorAll=function(t){return this.html.querySelectorAll(this.prefixClass(t))},t}(),zn=function(t){function e(e,i,n,r){var o=t.call(this,e,i,n)||this;return o.maxPitch=r.maxPitch,o}return v(e,t),e.prototype.enable=function(){t.prototype.enable.call(this);var e=this.querySelector(".needle"),i=this.map;i.addEventListener("mapviewchange",this._rl=function(t){e.style.transform="rotate("+i.rotate()+"deg) rotateX("+i.pitch()+"deg) scale(0.7,1.1)";}),this._rl();},e.prototype.disable=function(){t.prototype.disable.call(this),this.map.removeEventListener("mapviewchange",this._rl),this.a&&(this.a.stop(),this.a=null);},e}(In);zn.prototype.listeners={".needle":{click:function(t){return g(this,void 0,void 0,(function(){var t,e,i,n;return m(this,(function(r){switch(r.label){case 0:return this.aip?[3,2]:(t=this.map,e=t.rotate(),i=t.pitch(),n=[0,0],e||i||(n=[0,this.maxPitch]),this.a=new ln([e,i],n,500,"easeOutCubic",(function(e){t.rotate(e[0]),t.pitch(e[1]);})),[4,this.a.start()]);case 1:r.sent(),this.a=null,r.label=2;case 2:return [2]}}))}))}}},zn.prototype.style={".compass":"        position: absolute;        right:  10px;        bottom: 96px;        text-align: center;        font-family: sans-serif;        color: white;        height: 28px;        background-color: #0f1621;        user-select: none;        border-radius: 4px;        font-size: 12px;        width: 28px;        margin: 2px;        overflow: hidden;",".compass .needle":"        padding: 4px 0px;        line-height: 10px;",".compass:hover":"        background-color: #383c45;        cursor: pointer;"},zn.prototype.templ='<div class="compass">        <div class="needle">&#9650;<br>&#9661;</div>    </div>';var En=function(t){function e(e,i,n,r){var o=t.call(this,e,i,n)||this;o.ams=250;var a=o;return r&&r.zoomAnimationMs&&(a.ams=r.zoomAnimationMs),o}return v(e,t),e.prototype.enable=function(){t.prototype.enable.call(this);var e=this.querySelector(".info"),i=this.map;e.innerText=i.getZoomlevel(),i.addEventListener("mapviewchangeend",this._zll=function(t){e.innerText=Math.round(10*i.getZoomlevel())/10;});},e.prototype.disable=function(){t.prototype.disable.call(this),this.map.removeEventListener("mapviewchangeend",this._zll);},e}(In);En.prototype.listeners={".zoomBtn":{click:function(t){var e=0^t.srcElement.getAttribute("dir");this.map.setZoomlevel(this.map.getZoomlevel()+e,this.ams);}}},En.prototype.style={".zoomctrl":"        position: absolute;        right:  10px;        bottom: 20px;        text-align: center;        font-family: sans-serif;        color: white;        user-select: none;",".zoomctrl div":"        background-color: #0f1621;        border-radius: 4px;        font-size: 12px;        width: 28px;        margin: 2px;",".zoomctrl .zoomBtn":"        height: 28px;        font-size: 32px;        /* border: 1px solid white; */        line-height: 22px;        font-weight: 200;",".zoomctrl .zoomBtn:hover":"        background-color: #383c45;        cursor: pointer;"},En.prototype.templ='<div class="zoomctrl">         <div class="zoomBtn" dir="1">+</div>         <div class="info">L</div>        <div class="zoomBtn" dir="-1">-</div>     </div>';var Pn=function(t){function e(e,i,n){return t.call(this,e,i,n)||this}return v(e,t),e.prototype.add=function(t){var e,i,n,r,o;e="div",i=this.prefixClass(".src").substr(1),n="© "+t.label,r=this.html,o=document.createElement(e),i&&(o.className=i),n&&(o.innerText=n),r&&r.appendChild(o);},e.prototype.setData=function(t){var e=this;if(e.data=t,e.html){e.html.innerText="";for(var i=0,n=t;i<n.length;i++){var r=n[i];e.add(r);}}},e}(In);Pn.prototype.style={".copyright-popup":"        user-select: none;        background-color: rgba(0,0,0,0.1);        position: absolute;        bottom: 15px;        padding: 2px;        right: 120px;        z-index: 1;        width:  auto;        color: #fff;        font-family: arial;        font-size: 11px;        opacity: 0.8;        height: auto;",".src":"        opacity: 0.8;        margin: 4px;    "},Pn.prototype.templ='<div class="copyright-popup"></div>';var kn=t.document,Dn=function(t,e){var i,n,r,o=t.scopes,a=o.length;if(!a)return true;for(;i=o[--a];){var s=i.layer.getProvider(e),l=s&&s.level||e;if(n=i.minLevel||-1/0,r=i.maxLevel||1/0,l>=n&&l<=r)return true}return false},Rn=function(t,e){t.style.display=e?"inline":"none";},On={defaultOwner:"XYZ",termsAndConditions:{label:"Terms and Conditions",url:!1}},Bn=function(t){function e(e,i,n){var a=t.call(this,e,_$1.extend(!0,_$1.clone(On),i),n)||this;a.sources=new b$1,a.sLen=0,a.srcWidth=0;var s=a,l=s.opt,u=l.termsAndConditions,h=l.defaultOwner;return s.$src=s.querySelector(".sources"),s.$cDefault=s.querySelector(".cDefault"),s.$btn=s.querySelector(".btn"),a.details=new Pn(e,{visible:!1},n),a.setDefaultOwner(h),a.setTermsAndConditions(u),a}return v(e,t),e.prototype.setTermsAndConditions=function(t){var e=t.url,i=t.label,n=this.querySelector(".terms");e?(n.lastChild.href=e,i&&(n.lastChild.innerText=i)):Rn(n,false);},e.prototype.setDefaultOwner=function(t){"string"==typeof t&&this.setOwnerLabel(this.$cDefault,t);},e.prototype.enable=function(){var e=this;t.prototype.enable.call(this),e.map.addObserver("zoomlevel",e.onZoomChange=function(t,i,n){Math.abs((0^i)-(0^n))&&(e.sources.forEach((function(t){Rn(t.el,Dn(t,i));})),e.showDetails(!1),e.handleOverflow());}),e.map.addEventListener("addLayer removeLayer",e.onLayerChange=function(t){var i=t.detail.layer;i.getCopyright((function(n){e.active&&("addLayer"==t.type?n.forEach((function(t){return e.addSource(t,i)})):n.forEach((function(t){return e.removeSource(t,i)})));}));}),e.map.addEventListener("resize",e.onResize=function(){return e.handleOverflow()});},e.prototype.disable=function(){var e=this;t.prototype.disable.call(this),e.map.removeObserver("zoomlevel",e.onZoomChange),e.map.removeEventListener("addLayer removeLayer",e.onLayerChange),e.map.removeEventListener("resize",e.onResize);},e.prototype.getSourceLabelsString=function(){for(var t=0^this.map.getZoomlevel(),e="",i=0,n=this.sources.values();i<n.length;i++){var r=n[i];Dn(r,t)&&(e+="© "+r.label+" ");}return e},e.prototype.getColors=function(){return {color:window.getComputedStyle(this.$cDefault).getPropertyValue("color"),backgroundColor:window.getComputedStyle(this.html).getPropertyValue("background-color")}},e.prototype.calcWidth=function(){var t=0^this.map.getZoomlevel(),e=this.sources,i=0;return e.forEach((function(e){i+=Dn(e,t)&&e.width;})),i},e.prototype.handleOverflow=function(){var t=this,e=t.$btn,i=t.map.getWidth(),n=t.calcWidth(),r=i-132^0;t.$src.style.width=(r<n?r-10:n)+"px",n>Math.min(r,384)?Rn(e,true):(Rn(e,false),t.showDetails(!1));},e.prototype.showDetails=function(t){var e=this,i=e.details,n=e.map.getZoomlevel();e.$btn.innerText=t?"-":"+",t?(i.show(),i.setData(e.sources.values().filter((function(t){return Dn(t,n)})))):i.hide();},e.prototype.setOwnerLabel=function(t,e){t.innerText="© "+e;},e.prototype.addSource=function(t,e){var i,n=this,r=n.sources,o=t.label,a=t.scopes,s=0^n.map.getZoomlevel(),l=r.get(o);l?(i=l.el,l.cnt++):((i=kn.createElement("span")).className=this.prefixClass(".source").substr(1),n.setOwnerLabel(i,o),n.$src.appendChild(i),l={label:o,scopes:[],el:i,cnt:1,width:i.getBoundingClientRect().width},r.set(o,l),n.sLen++,n.srcWidth+=l.width),null!=a&&a.forEach((function(t){return l.scopes.push({minLevel:t.minLevel,maxLevel:t.maxLevel,layer:e})})),Rn(n.$cDefault,false),Rn(i,Dn(l,s)),n.handleOverflow();},e.prototype.removeSource=function(t,e){var i,n,r=this,o=t.label,a=r.sources.get(o);if(a){if(n=a.scopes,i=t.scopes)for(var s=0,l=void 0;s<i.length;s++){l=i[s];for(var u=0,h=void 0;s<n.length;u++)if((h=n[u]).layer==e&&h.minLevel==l.minLevel&&h.maxLevel==l.maxLevel){n.splice(u,1);break}}--a.cnt||(r.$src.removeChild(a.el),r.sources.delete(o),r.handleOverflow(),--r.sLen||Rn(r.$cDefault,true));}},e}(In);Bn.prototype.listeners={".btn":{click:function(t){var e="+"==this.$btn.innerText;this.showDetails(e);}}},Bn.prototype.style={".copyright *":"        color: rgba(255,255,255,.8);        font-family: arial;        text-decoration: none;",".copyright":"        right: 0px;        bottom: 0px;        padding: 1px 4px;        margin: 0px;        background-color: rgba(0,0,0,.1);        position: absolute;        font-size: 11px;        line-height: 13px;        overflow: hidden;        white-space: nowrap;        user-select: none;",".sources":"        width:auto;        max-width: 384px;        float: left;        white-space: nowrap;        overflow: hidden;        text-overflow: ellipsis;        border-right: 2px;",".btn":"        display: none;        font-family: sans-serif;        font-weight: bold;        text-align: center;        height: 12px;        width: 12px;        float: left;        padding: 0px;        line-height: 9px;        margin: 1px 2px 0px;        background-color: inherit;        box-sizing: border-box;        border-radius: 3px;        border: 1px solid;",".terms, .cDefault, .source":"        white-space: nowrap;        padding-right: 4px;"},Bn.prototype.templ='<div class="copyright">        <span style="float: left; white-space: nowrap;">            <span class="sources"></span>            <span class="cDefault"></span>         </span>        <span class="tac" style="float: right; white-space: nowrap;">            <span class="btn">+</span>            <span class="terms" style="white-space: nowrap;">|            <a target="_blank" style="white-space: nowrap;" href="">Terms and Conditions</a></span>        </span>    </div>';var Nn=function(t){function e(e,i,n){var r=t.call(this,e,i,n)||this,o=i.url;return o&&r.setSrc(o),r}return v(e,t),e.prototype.setSrc=function(t){this.html.style.backgroundImage="url("+t+")";},e.prototype.getImage=function(){var t=window.getComputedStyle(this.html),e=Math.round(parseFloat(t.getPropertyValue("width"))),i=Math.round(parseFloat(t.getPropertyValue("height")));return new Promise((function(n){var r=new Image;r.onload=function(){return n({img:r,width:e,height:i})},r.src=t.getPropertyValue("background-image").slice(5,-2);}))},e}(In);Nn.prototype.style={".logo":"        position: absolute;        bottom: 6px;        left: 6px;        z-index: 1;        margin:  0px;        background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjdweCIgaGVpZ2h0PSIzMnB4IiB2aWV3Qm94PSIwIDAgMjcgMzIiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUyLjYgKDY3NDkxKSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5Hcm91cCAzPC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGcgaWQ9IlBhZ2UtMSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9Ikdyb3VwLTMiPgogICAgICAgICAgICA8cG9seWdvbiBpZD0iUGF0aCIgZmlsbD0iIzA0QjZDOCIgcG9pbnRzPSItNy44NjQyMTYxOWUtMTQgOSAxMyAxNS45Njg4NjgxIDEzIDMyIDAgMjQuNDc4MDIyNiI+PC9wb2x5Z29uPgogICAgICAgICAgICA8cG9seWdvbiBpZD0iUGF0aCIgZmlsbD0iIzBBNTdENCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjAuNTAwMDAwLCAyMC41MDAwMDApIHNjYWxlKC0xLCAxKSB0cmFuc2xhdGUoLTIwLjUwMDAwMCwgLTIwLjUwMDAwMCkgIiBwb2ludHM9IjE0IDkgMjcgMTUuOTY4ODY4MSAyNyAzMiAxNCAyNC40NzgwMjI2Ij48L3BvbHlnb24+CiAgICAgICAgICAgIDxwb2x5Z29uIGlkPSJQYXRoLTIiIGZpbGw9IiMwQTk0REUiIHBvaW50cz0iMCA3Ljc5MTIyNDMxIDEzLjU1MDIxNTEgMCAyNyA3Ljc5MTIyNDMxIDEzLjU1MDIxNTEgMTUiPjwvcG9seWdvbj4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==);        background-repeat: no-repeat;        background-size: contain;        width: 32px;        height: 32px;        cursor: pointer;"},Nn.prototype.templ='<div class="logo"></div>';var Fn,Un={Compass:zn,ZoomControl:En,Copyright:Bn,Logo:Nn},Wn=function(){function t(t,e,i){var n=y({},e.UI||e.ui||{}),r=this.components={};for(var o in this.el=t,null!=n.HERE&&(n.Logo=n.HERE),Un){var a=n[o];!1!==a&&("object"!=typeof a&&(a={}),null==a.visible&&(a.visible=!0),a.visible&&(r[o]=new Un[o](t,a,i,e)));}}return t.initComponentOptions=function(){},t.prototype.get=function(t){return this.components[t]},t.prototype.destroy=function(){var t=this.components;for(var e in t)t[e].destroy(),delete t[e];},t}(),Gn=_$1.isFunction,Xn=function(){function t(t){void 0===t&&(t={}),this.animation=null;this.easing=t.easing,Gn(t.onStart)&&(this.onStart=t.onStart),Gn(t.onStop)&&(this.onStop=t.onStop);}return t.prototype.onStart=function(){},t.prototype.onStop=function(){},t.prototype.animate=function(t,e,i,n){return g(this,void 0,void 0,(function(){var r;return m(this,(function(o){switch(o.label){case 0:return (r=this).active?[3,2]:(r.active=!0,r.onStart(),r.animation=new ln(t,e,i,this.easing,n),[4,r.animation.start()]);case 1:o.sent(),r.onStop(),r.active=!1,r.animation=null,o.label=2;case 2:return [2]}}))}))},t.prototype.stop=function(){var t;null===(t=this.animation)||void 0===t||t.stop();},t}(),Zn=function(t){function e(e,i){void 0===i&&(i={});var n=this;return i.easing=i.easing||"easeOutCubic",(n=t.call(this,i)||this).map=e,n}return v(e,t),e.prototype.start=function(t,e,i,n){var r=this.map;this.animate(r.getZoomlevel(),t,n,(function(t){r.setZoomlevel(t,e,i);}));},e}(Xn),Hn=_$1.isFunction,Yn=function(){function t(t,e){e=e||{};var i=this;i.map=t,i.duration=e.duration||500,Hn(e.onStart)&&(i.onStart=e.onStart),Hn(e.onStop)&&(i.onStop=e.onStop),i.raf=function(){i._pan()&&(i.rafId=requestAnimationFrame(i.raf));};}return t.prototype._pan=function(){var t=this,e=t.deltaX,i=t.deltaY,n=t.duration,r=t.startTs,o=Math.min(Date.now()-r,n)/n,a=an(o)*e,s=an(o)*i;if(t.map.pan(a-t.lastDx||0,s-t.lastDy||0),a!=e||s!=i)return t.lastDx=a,t.lastDy=s,!0;t.onStop();},t.prototype.pan=function(t,e,i){this.startTs=t,this.deltaX=e,this.deltaY=i,this.onStart(),this.raf();},t.prototype.cancel=function(){var t=this.rafId;t&&(cancelAnimationFrame(t),this.rafId=null),this.onStop(),this.startTs=0,this.lastDx=0,this.lastDy=0;},t.prototype.onStart=function(){},t.prototype.onStop=function(){},t}(),jn={ui:{},behavior:{drag:!0,pitch:!1,rotate:!1},rotate:0,pitch:0,zoomlevel:18,center:{longitude:8.534,latitude:50.162},layers:null,maxLevel:20,minLevel:2,debug:!1,minPanMapThreshold:4,zoomAnimationMs:100,maxPitch:50},qn=function(t){function e(e,i){void 0===i&&(i={});var n=this;return i.easing=i.easing||"easeOut",(n=t.call(this,i)||this).map=e,n}return v(e,t),e.prototype.start=function(t,e,i){var n=this.map,r=n.getZoomlevel(),o=n._wSize,a=n.getCenter(),l=xyzMapsCore_min.exports.webMercator.lon2x(a.longitude,o),u=xyzMapsCore_min.exports.webMercator.lat2y(a.latitude,o),f=xyzMapsCore_min.exports.webMercator.lon2x(t.longitude,o),c=xyzMapsCore_min.exports.webMercator.lat2y(t.latitude,o),p=Math.max(n.getWidth(),n.getHeight()),d=p/Math.pow(2,e-r),v=Y(f,c,l,u)||1,y=1.42,g=2.0164,m=function(t){return (Math.exp(t)-Math.exp(-t))/2},x=function(t){return (Math.exp(t)+Math.exp(-t))/2},_=function(t){var e=(d*d-p*p+(t?-1:1)*g*g*v*v)/(2*(t?d:p)*g*v);return Math.log(Math.sqrt(e*e+1)-e)},w=_(0),b=function(t){return p*(x(w)*(m(e=w+y*t)/x(e))-m(w))/g;var e;},T=(_(1)-w)/y,L=p*Math.pow(2,r);i=i||1e3*T*.77,this.animate(0,T,i,(function(i){var a,d,g=b(i)/v,m=l+(f-l)*g,_=u+(c-u)*g;i>=T?(a=t,d=e):(a=new xyzMapsCore_min.exports.GeoPoint(xyzMapsCore_min.exports.webMercator.x2lon(m,o),xyzMapsCore_min.exports.webMercator.y2lat(_,o)),d=Math.log(L/function(t){return p*(x(w)/x(w+y*t))}(i))/Math.LN2,d=isNaN(d)?r:d),n.setZoomlevel(d),n.setCenter(a);}));},e}(Xn),Vn=xyzMapsCore_min.exports.webMercator,Kn="fixed",Qn="longitude",$n="latitude",Jn=[];function tr(t,e,i,n,r,o){for(var a,s,l,u=256*Math.pow(2,20),h=20;h>=0;--h)if(l=20-h,a=(Vn.lon2x(i,u)>>l)-(Vn.lon2x(t,u)>>l),s=(Vn.lat2y(e,u)>>l)-(Vn.lat2y(n,u)>>l),a<=r&&s<=o)return h;return 0}var er=function(){function t(t,e){this._s=1,this._rz=0,this._rx=0,this._cw=new xyzMapsCore_min.exports.PixelPoint(0,0),this._c=new xyzMapsCore_min.exports.GeoPoint(0,0),this._pc=new xyzMapsCore_min.exports.GeoPoint(0,0),this._ox=0,this._oy=0,this._cfg=e=_$1.extend(!0,_$1.extend(!0,{},jn),e||{});var i=this;this._w=w(t,"width"),this._h=w(t,"height"),this._cx=this._w/2,this._cy=this._h/2;var o=e.zoomLevel||e.zoomlevel;e.maxLevel=Math.min(28,e.maxLevel),this._z=0^Math.min(20,o),this._wSize=256*Math.pow(2,this._z),this._l=new h(["center","rotation","zoomlevel","mapviewchangestart","mapviewchange","mapviewchangeend","resize","addLayer","removeLayer"]);var a=this._l,s=[],l=t;i._layers=s,i.id=1e6*Math.random()^0,(t=document.createElement("div")).className="_"+_$1.String.random(11),t.style["-webkit-tap-highlight-color"]="rgba(0,0,0,0)",t.style.position="relative",t.style.width=this._w+"px",t.style.height=this._h+"px",l.appendChild(t),this._el=t;var u="canvas"==e.renderer?en:zi;"string"==typeof u.zoomBehavior&&(Kn=u.zoomBehavior);var f=new u(t,256,e.devicePixelRatio,e.renderOptions||{});i._mvcRecognizer=new Cn(i,(function(t,e,i){a.trigger(t,[new cn(t,e)],i);}),f),i._display=f,this._search=new Tn(i,f.dpr);var p=this._evDispatcher=new gn(t,i,s,e);a.add("mapviewchangestart",(function(t){return p.disable("pointerenter")})),a.add("mapviewchangeend",(function(t){return p.enable("pointerenter")})),a.add("mapviewchangeend",(function(t){return f.viewChangeDone()})),this._zoomAnimator=new Zn(i),this._flightAnimator=new qn(i);var d=y(y({},e.behavior),e.behaviour);d.zoom==Fn&&(d.zoom=Kn);var v=this._b=new fn(t,i,new Yn(i),d,e);v.drag(!0),v.scroll(!0),this._vplock={pan:!1,minLevel:e.minLevel,maxLevel:e.maxLevel};var g=e.UI||e.ui||{};g.Compass==Fn&&(g.Compass=d.rotate||d.pitch),this.ui=new Wn(t,e,i),i.setCenter(e.center),i.pitch(e.pitch),i.rotate(e.rotate),i.setZoomlevel(o),i._layerClearListener=i._layerClearListener.bind(i);for(var m=0,x=e.layers||[];m<x.length;m++){var _=x[m];i.addLayer(_);}Jn.push(this),e.debug&&this.debug(e.debug);}return t.getInstances=function(){return Jn.slice()},t.prototype._layerClearListener=function(t){this.refresh(t.detail.layer);},t.prototype.initViewPort=function(){var t=this._s,e=this._w/2,i=this._h/2,n=this._cw.x,r=this._cw.y,o=n-e/t,a=r-i/t;this._tlwx=o,this._tlwy=a,this._ox=n-e-o,this._oy=r-i-a;var s=this._wSize,l=Vn.x2lon(o,s),u=Vn.y2lat(a,s),h=n+e/t,c=r+i/t,p=Vn.x2lon(h,s),d=Vn.y2lat(c,s);return this._vp=new xyzMapsCore_min.exports.GeoRect(l,d,p,u),[n/s,r/s]},t.prototype.updateGrid=function(){var t=this._display,e=this._c,i=this._pc;this._mvcRecognizer.watch(!0),t.setTransform(this._s,this._rz,this._rx),t.updateGrid(this.initViewPort(),this._z,this._ox,this._oy),i[Qn]==e[Qn]&&i[$n]==e[$n]||(this._l.trigger("center",["center",e,i],!0),this._pc=e);},t.prototype._setCenter=function(t,e){var i=this._wSize;return 2!=arguments.length&&(t instanceof Array?(e=t[1],t=t[0]):(e=(t=t||this._c)[$n],t=t[Qn])),!isNaN(t)&&!isNaN(e)&&"number"==typeof t&&"number"==typeof e&&(t>180?t-=360:t<-180&&(t+=360),e<-85.05112878?e=-85.05112878:e>85.05112878&&(e=85.05112878),this._c=new xyzMapsCore_min.exports.GeoPoint(t,e),this._cw=new xyzMapsCore_min.exports.PixelPoint(Vn.lon2x(t,i),Vn.lat2y(e,i)),!0)},t.prototype.repaint=function(){this.updateGrid();},t.prototype.debug=function(t){this._display.showGrid(t),this.updateGrid();},t.prototype.pitch=function(t){if(t!==Fn){var e=this._cfg.maxPitch,i=Math.max(0,Math.min(e,Math.round(t%360*10)/10));this._rx=-i*Math.PI/180,this.updateGrid();}return 180*-this._rx/Math.PI},t.prototype.rotate=function(t){if(t!==Fn){var e=Math.round(10*t||0)*Math.PI/1800,i=this._rz;if(e!==i){var n=this._cx,r=this._cy,o=this._display.unproject(n,r),a=this._cw;a.x+=o[0]-n,a.y+=o[1]-r,this._rz=e,this.updateGrid(),this._l.trigger("rotation",["rotation",this._rz,i],!0);}}return this._rz/Math.PI*180},t.prototype.setBackgroundColor=function(t){this._display.setBGColor(t),this.refresh();},t.prototype.addEventListener=function(t,e){var i=this,n=this._l;t.split(" ").forEach((function(t){if(n.isDefined(t))return n.add(t,e);i._evDispatcher.addEventListener(t,e);}));},t.prototype.removeEventListener=function(t,e){var i=this,n=this._l;t.split(" ").forEach((function(t){if(n.isDefined(t))return n.remove(t,e);i._evDispatcher.removeEventListener(t,e);}));},t.prototype.getViewBounds=function(){var t=this._vp,e=t.minLon,i=t.maxLon,n=t.minLat,r=t.maxLat;return n<=-85.05112878&&(n=-90),r>=85.05112878&&(r=90),e<-180&&(e=-180),i>180&&(i=180),new xyzMapsCore_min.exports.GeoRect(e,n,i,r)},t.prototype.setViewBounds=function(t,e){var i,n,r,o,a=arguments;if("number"==typeof t?t=[a[0],a[1],a[2],a[3]]:"FeatureCollection"==t.type?t=t.features:"Feature"==t.type&&(t=[t]),Array.isArray(t)){if("object"==typeof t[0]){for(var s=[1/0,1/0,-1/0,-1/0],l=0,u=t;l<u.length;l++){var f=u[l];xyzMapsCore_min.exports.utils.calcBBox(f,s);}t=s;}i=t[0],n=t[1],r=t[2],o=t[3];}else {var c=t;i=c.minLon,n=c.minLat,r=c.maxLon,o=c.maxLat;}var d=tr(i,n,r,o,this.getWidth(),this.getHeight()),v=new xyzMapsCore_min.exports.GeoPoint(i+(r-i)/2,n+(o-n)/2);e?this.flyTo(v,d,!0===e?{}:e):(this.setZoomlevel(d),this.setCenter(v));},t.prototype.getFeatureAt=function(t,e){(e=e||{}).topOnly=!0;var i=this.getFeaturesAt(t,e);if(i.length){var n=i[i.length-1];return n.feature=n.features[0],n}},t.prototype.getFeaturesAt=function(t,e){var i,n,r,o;if(e=e||{},t.x!=Fn&&t.y!=Fn){var a=t.x,s=t.y,l=0^e.width,u=e.height||l;i=a-l/2,n=a+l/2,r=s-u/2,o=s+u/2;}else t.minX!=Fn&&t.maxX!=Fn&&(i=t.minX,r=t.minY,n=t.maxX,o=t.maxY);return i!=Fn&&this._search.search(i,r,n,o,e.layers)},t.prototype.snapshot=function(t,e,i,n,r){var o=this;if(t){e||(e=0),i||(i=0),n||(n=this._w),r||(r=this._h),n+e>this._w&&(n=this._w-e),r+i>this._h&&(r=this._h-i);var a=this._display,s=a.dpr,l=a.copyCanvas2d(e,i,n,r),u=Math.ceil(11/3),h=this.ui.get("Copyright"),f=h.getSourceLabelsString(),c=h.getColors(),p=h.calcWidth();g(o,void 0,void 0,(function(){var e,i;return m(this,(function(o){switch(o.label){case 0:return [4,this.ui.get("Logo").getImage()];case 1:return e=o.sent(),(i=l.getContext("2d")).scale(s,s),i.font="11px sans-serif",i.textBaseline="hanging",i.fillStyle=c.backgroundColor,i.fillRect(n-p-2*u,r-11-u,n+2*u,11+u),i.fillStyle=c.color,i.fillText(f,n-p-u,r-11),i.drawImage(e.img,2*u,r-e.height-2*u),l.style.width=n+"px",l.style.height=r+"px",t(l),[2]}}))}));}},t.prototype.getBehavior=function(){var t={},e=this._b.getOptions();for(var i in e)t[i]=!!e[i];return t},t.prototype.setBehavior=function(t,e){var i=typeof t,n="object"==i?t:{},r=this._b.getOptions();"string"==i&&(n[t]=e);var o=n.zoom;o!=Fn&&(r.zoom="fixed"==o||"float"==o?o:!!o&&Kn);for(var a=0,s=["drag","pitch","rotate"];a<s.length;a++){var l=s[a],u=n[l];u!=Fn&&(r[l]=!!u);}},t.prototype.getZoomlevel=function(){return this._z+Math.log(this._s)/Math.LN2},t.prototype.setZoomlevel=function(t,e,i,n){var r=this._vplock,o=this._z,a=this._s;if(t=Math.round(1e3*t)/1e3,t=Math.max(Math.min(t,r.maxLevel),r.minLevel),2==arguments.length&&(n=e,e=Fn),e!=Fn&&i!=Fn||(e=this._cx,i=this._cy),o!=t||1!=a)if(n)this._zoomAnimator.start(t,e,i,"number"==typeof n?n:250);else {var s=this.getZoomlevel(),l=this._display.unproject(e,i),u=0^Math.min(20,t),h=o-u,f=this._wSize,c=Math.pow(2,t-u);h&&(this._z=0^Math.min(20,t),this._wSize=256*Math.pow(2,this._z)),this._display.setTransform(c*Math.pow(.5,h),this._rz,this._rx);var p=this._display.unproject(e,i);this._setCenter(Vn.x2lon(this._cw.x+l[0]-p[0],f),Vn.y2lat(this._cw.y+l[1]-p[1],f)),this._s=c,this.updateGrid(),this._l.trigger("zoomlevel",["zoomlevel",this.getZoomlevel(),s],!0);}},t.prototype.setCenter=function(t,e){this._setCenter.apply(this,arguments)&&this.updateGrid();},t.prototype.getCenter=function(){return new xyzMapsCore_min.exports.GeoPoint(this._c.longitude,this._c.latitude)},t.prototype.flyTo=function(t,e,i){e&&"object"!=typeof e||(i=e,e=this.getZoomlevel()),this._flightAnimator.stop(),this._flightAnimator.start(t,e,null==i?void 0:i.duration);},t.prototype.lockViewport=function(t){var e=this._vplock;if(t){var i=t.pan,n=t.minLevel,r=t.maxLevel;n=!1===n?this._cfg.minLevel:n,r=!1===r?this._cfg.maxLevel:r,i!=Fn&&(e.pan=i),"number"==typeof n&&(e.minLevel=n),"number"==typeof r&&(e.maxLevel=r);}return e},t.prototype.pan=function(t,e){if(0!=t||0!=e){var i=this._wSize,n=this._cx,r=this._cy,o=this._cw,a=this._display.unproject(n+t,r+e),s=o.x-a[0]+n,l=o.y-a[1]+r;this.setCenter(Vn.x2lon(s,i),Vn.y2lat(l,i));}},t.prototype.getLayers=function(t){var e=this._layers;return t!=Fn?e[t]:e.slice()},t.prototype.addLayer=function(t,e){var i=this._layers;-1==i.indexOf(t)&&(e==Fn&&(e=i.length),this._display.addLayer(t,t.getStyle(),e),t.addEventListener("clear",this._layerClearListener),this._l.trigger("addLayer",[new cn("addLayer",{index:e,layer:t})]),i.splice(e,0,t),this.updateGrid());},t.prototype.removeLayer=function(t){var e=this._layers,i=e.indexOf(t);i>=0&&(this._display.removeLayer(t),t.removeEventListener("clear",this._layerClearListener),e.splice(i,1),this.updateGrid(),this._l.trigger("removeLayer",[new cn("removeLayer",{index:i,layer:t})]));},t.prototype.refresh=function(t){t instanceof Array||(t=[t]);for(var e=0,i=t;e<i.length;e++){var n=i[e];n instanceof xyzMapsCore_min.exports.TileLayer&&this._display.clearLayer(n);}this.updateGrid();},t.prototype.pixelToGeo=function(t,e){var i=this._wSize;1==arguments.length&&(e=t.y,t=t.x);var n=this._ox,r=this._oy,o=this._display.unproject(t,e),a=this._tlwx,s=this._tlwy,l=o[0]+a+n,u=o[1]+s+r;return l%=i,(u%=i)<0&&(u+=i),new xyzMapsCore_min.exports.GeoPoint(Vn.x2lon(l,i),Vn.y2lat(u,i))},t.prototype.geoToPixel=function(t,e){e==Fn&&(e=t.latitude,t=t.longitude),e<-85.05112878?e=-85.05112878:e>85.05112878&&(e=85.05112878);var i=this._wSize,n=this._tlwx,r=this._tlwy,o=Vn.lon2x(t,i)-n,a=Vn.lat2y(e,i)-r,s=this._display.project(o,a);return new xyzMapsCore_min.exports.PixelPoint(s[0],s[1])},t.prototype.destroy=function(){var t=this,e=this._el;this.ui.destroy(),this._layers.forEach((function(e){return t.removeLayer(e)})),this._display.destroy(),e.parentNode.removeChild(e),this._mvcRecognizer.watch(!1),this._evDispatcher.destroy(),this._b.drag(!1),this._b.scroll(!1);var i=this;i.__proto__=null,Object.keys(i).forEach((function(t){return delete i[t]})),Jn.splice(Jn.indexOf(i),1);},t.prototype.resize=function(t,e){var i=this._el;t!=Fn&&e!=Fn||(t=w(i.parentNode,"width"),e=w(i.parentNode,"height"));var n=this._w,r=this._h;n===t&&r===e||(i.style.width=t+"px",i.style.height=e+"px",this._display.setSize(t,e),this._w=t,this._h=e,this._cx=t/2,this._cy=e/2,this.updateGrid(),this._l.trigger("resize",[new cn("resize",{width:t,height:e})]));},t.prototype.getWidth=function(){return this._w},t.prototype.getHeight=function(){return this._h},t.prototype.addObserver=function(t,e){return "zoomLevel"==t&&(t="zoomlevel"),this._l.add(t,e)},t.prototype.removeObserver=function(t,e){return "zoomLevel"==t&&(t="zoomlevel"),this._l.remove(t,e)},t.prototype.getContainer=function(){return this._el.parentNode},t}(),ir=t.here.xyz.maps;ir.Map=er,ir.styleTools=mt;

	/*
	 * Copyright (C) 2021 HERE Europe B.V.
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
	const mapStyle = {
	  backgroundColor: '#e8e5d8',

	  styleGroups: {
	      'landuse': [{zIndex: 0, type: 'Polygon', fill: '#eae0d0'}],
	      'pier': [{zIndex: 1, type: 'Polygon', fill: '#e8e5d8', stroke: '#e8e5d8', strokeWidth: 2}],
	      'park': [{zIndex: 1, type: 'Polygon', fill: '#D3DCC0'}],
	      'nature_reserve': [{zIndex: 1, type: 'Polygon', fill: '#c0d897'}],
	      'hospital': [{zIndex: 1, type: 'Polygon', fill: '#f3d3d3'}],
	      'water': [{zIndex: 2, type: 'Polygon', fill: '#94c1e1'}],
	      'path': [{zIndex: 3, type: 'Line', stroke: 'rgb(247, 247, 247)', strokeWidth: {4: 0.5, 20: '1m'}, strokeDasharray: [1, 1]}],
	      'tunnel': [{zIndex: 3, type: 'Line', stroke: 'rgba(255, 255, 255, 0.7)', strokeWidth: {15: 4, 20: 16}, strokeDasharray: [2, 2]}],
	      'ferry': [{zIndex: 4, type: 'Line', stroke: '#164ac8', strokeWidth: 1}],
	      'highway': [{zIndex: 5, type: 'Line', stroke: '#ffffff', repeat: 128, strokeWidth: {10: 1.5, 15: 4, 16: '12m'}}],
	      'boundaries': [{zIndex: 6, type: 'Line', stroke: 'rgb(153, 153, 153)', strokeWidth: {22: 1, 3: 0.5}}],
	      'buildings': [{
	          zIndex: 7, type: 'Polygon', fill: 'rgba(222, 211, 190, 1)'},
	          {zIndex: 7, type: 'Polygon', stroke: {15: 'rgba(212, 177, 146, 0)', 16: 'rgba(212, 177, 146, 0.5)'}, strokeWidth: 1
	      }],
	      'roads': [{zIndex: 4, type: 'Line', stroke: 'rgb(247, 247, 247)', strokeWidth: {15: 1, 16: '5m'}}, {
	          zIndex: 6, type: 'Text', fill: '#000000',
	          font: '12px Noto Sans Regular',
	          strokeWidth: 4,
	          stroke: 'white', text: (f, z) => z>13?f.properties.name:'',
	          // Minimum distance in pixel between repeated text labels on line geometries.
	          // Applies per tile only. Default is 256 pixel.
	          repeat: 128,
	          // Alignment for Text. "map" aligns to the plane of the map.
	          alignment: 'map',
	          // Text with a higher priority (lower value) will be drawn before lower priorities (higher value)
	          // make sure "road labels" are drawn after "place labels".
	          priority: 2
	      }],
	      'places': [{
	          zIndex: 8,
	          type: 'Text',
	          text: (f) => f.properties.name,
	          stroke: 'rgba(255,255,255,0.75)',
	          fill: '#666',
	          font: '18px Noto Sans Regular',
	          strokeWidth: 4,
	          // set collide property to false to enable label collision detection [default]
	          collide: false,
	          // Alignment for Text. "viewport" aligns to the plane of the viewport/screen.
	          alignment: 'viewport',
	          // Text with a higher priority (lower value) will be drawn before lower priorities (higher value)
	          // In case of "place label" and "road label" are colliding "place label" will be draw
	          // because priority 1 is smaller than priority 2
	          priority: 1
	      }]
	  },

	  assign: (feature, zoom) => {
	      let props = feature.properties;
	      let kind = props.kind;
	      let layer = props.layer;
	      let geom = feature.geometry.type;

	      if (layer == 'landuse') {
	          switch (kind) {
	          case 'pier':
	              return 'pier';
	          case 'nature_reserve':
	              return 'nature_reserve';
	          case 'park':
	          case 'garden':
	          case 'pedestrian':
	          case 'forrest':
	              return 'park';
	          case 'hospital':
	              return 'hospital';
	          default:
	              return 'landuse';
	          }
	      }

	      if (layer == 'water') {
	          if (geom == 'LineString' || geom == 'MultiLineString') {
	              return;
	          }
	      } else if (layer == 'roads') {
	          if (kind == 'rail' || kind == 'ferry') {
	              return;
	          }
	          if (props.is_tunnel && zoom > 13) {
	              return 'tunnel';
	          }
	          if (kind == 'highway' || kind == 'path') {
	              return kind;
	          }
	      }
	      
	      return layer;
	  }
	};

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
	var main$1 = 'main';
	var afterMain = 'afterMain'; // modifier with the purpose to write to the DOM (or write into a framework state)

	var beforeWrite = 'beforeWrite';
	var write = 'write';
	var afterWrite = 'afterWrite';
	var modifierPhases = [beforeRead, read, afterRead, beforeMain, main$1, afterMain, beforeWrite, write, afterWrite];

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

	function getComputedStyle(element) {
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
	  getComputedStyle(element).position === 'fixed') {
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
	    var elementCss = getComputedStyle(element);

	    if (elementCss.position === 'fixed') {
	      return null;
	    }
	  }

	  var currentNode = getParentNode(element);

	  while (isHTMLElement(currentNode) && ['html', 'body'].indexOf(getNodeName(currentNode)) < 0) {
	    var css = getComputedStyle(currentNode); // This is non-exhaustive but covers the most common CSS properties that
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

	  while (offsetParent && isTableElement(offsetParent) && getComputedStyle(offsetParent).position === 'static') {
	    offsetParent = getTrueOffsetParent(offsetParent);
	  }

	  if (offsetParent && (getNodeName(offsetParent) === 'html' || getNodeName(offsetParent) === 'body' && getComputedStyle(offsetParent).position === 'static')) {
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

	      if (getComputedStyle(offsetParent).position !== 'static') {
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

	  if (getComputedStyle(body || html).direction === 'rtl') {
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
	  var _getComputedStyle = getComputedStyle(element),
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
	  var canEscapeClipping = ['absolute', 'fixed'].indexOf(getComputedStyle(element).position) >= 0;
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

	var css_248z = "/*\n * Copyright (C) 2022 HERE Europe B.V.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *     http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n *\n * SPDX-License-Identifier: Apache-2.0\n * License-Filename: LICENSE\n */\n:root {\n    --overlay-width: 300px;\n    --overlay-padding: 15px;\n    --control-width: 300px;\n    --control-padding: 15px;\n    --primary-color: #A4CEFF;\n    --grey: #C7C7C7;\n}\n\nbody {\n    margin: 8px;\n    border: 0px;\n    padding: 0px;\n    font-family: FiraGO,\"Noto Sans JP\",Tahoma,Calibri,Helvetica,Arial,sans-serif;\n    font-size: 16px;\n    font-weight: 400;\n    color: #6d6178;\n}\n\n#overlay a:link {color: var(--link-color); text-decoration: underline; }\n#overlay a:active {color: var(--link-color); text-decoration: underline; }\n#overlay a:visited {color: var(--link-color); text-decoration: underline; }\n#overlay a:hover { color: var(--link-color); text-decoration: underline; }\n\n#map {\n    position: absolute;\n    overflow: hidden;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n}\n#overlay, #request-info {\n    background: white;\n    width: var(--overlay-width);\n    color: #6d6178;\n    margin: 15px;\n    padding: 16px;\n    position: absolute;\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n}\n\n#info {\n    right: 5px;\n    position: absolute;\n    background: white;\n    color: #6d6178;\n    margin: 15px;\n    padding: 16px;\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n    /* transition: height 0.2s ease; */\n}\n\n.expanded{\n    width: 500px;\n}\n.collapsed{\n    cursor: pointer;\n    width: 180px;\n}\n\n#request-info {\n    left: 50%;\n    width: 700px;\n    font-size: 13px;\n    background-color: rgba(255, 255, 255, 0.6);\n    transition:height 0.1s ease;\n    height: 0px;\n    bottom: 5px;\n    transform: translateX(-350px);\n\n}\n#request-info .block {\n    padding: 3px;\n}\n#request-info .blue{\n    background-color: rgba(125, 125, 255, 0.2);\n}\n\n.transparent {\n    visibility: hidden;\n}\n\n#request-info .request {\n    font-size: 11px;\n}\n#request-info .instruct {\n    margin-top: 4px;\n}\n\n#requests{\n    position: absolute;\n    width: 700px;\n    bottom: 16px;\n}\n\n.block{\n    position: absolute;\n    width: 696px;\n    transition: bottom 0.1s ease;\n}\n\n#radius input{\n    position: relative;\n    left: 0;\n    right: 0;\n    width: 100%;\n    /* margin: 0.5em 0.2em; */\n    cursor: ew-resize;\n}\n\n.hidden{\n    display: none;\n}\n\n.resizeicon{\n    position: absolute;\n    cursor: pointer;\n    width: 24px;\n    height: 24px;\n    top: 5px;\n}\n\n#resizetext{\n    position: absolute;\n    left: 60px;\n    top: 8px;\n}\n\n.expand{\n    background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAA3NCSVQICAjb4U/gAAAACXBIWXMAAAEWAAABFgGExyN2AAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAADZQTFRF////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAARy+jrgAAABF0Uk5TAAQFBhUkLausra6vsLG90uo1ntoSAAAAa0lEQVQoz73JOxaAIBDF0IAj/oW3/81a6BwFrU15A7/Ud610PUAqW6w9biVBKtJanbhKJbFL0vI4cZGkHcv1OT0b15mvE2d3P1MACNPtz1O7nzGEsXY/w9C6n7ffp3U/bz/Pl4Plbwcz/u0APXwITYhubTcAAAAASUVORK5CYII=');\n}\n\n.collapse{\n    background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAABFgAAARYBhMcjdgAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAADBSURBVEiJ5dXBCYMwFIDh/xV1g2zg1clrqw7gEo7hEq+HJhAC6ktKQGggB2P8/oMRRVWpOR5V9f8LiIgTEVcl4OEVWLMiqno5AQdsgPq5Ac70bAGeFSnFzZFfcFMkF3/6aY7k4CPQ+DlaI1b8BTTRvsavXUay8dzIFf4G2pOD0Po9h5EzfDrDk8h0FIHv51+EGyIrwADs0eKcgyeROXJ2YAg3Q2QpwZPIEvD0FPVAV4pHTgf04VrCm6417vVHu2XgA7IgcnnLUJTbAAAAAElFTkSuQmCC');\n}\n\n#overlay-areas .descp{\n    margin: 10px 0 10px 0;\n}\n\n.infoicon{\n    cursor: pointer;\n    float: right;\n}\n\n#request-info .infoicon{\n    position: absolute;\n    right: 8px;\n    top: 8px;\n}\n\n#overlay-sport p{\n    margin-top: 0px;\n}\n\n.line-parent {\n    line-height: 30px;\n}\n \n.line {\n    display: inline-block;\n    border-radius: 50%;\n    width: 13px;\n    height: 13px;\n    margin-right: 10px;\n    border:1px solid #333;\n}\n.line-parent input {\n    margin-right:5px;\n}\n#level input{\n    width: 90%;\n}\n\n#label {\n    border: 1px solid #333;\n}\n.areas{\n    border-radius: 20%;\n}\n\n.shepherd-element {\n    background: none;\n    box-shadow: none;\n}\n.shepherd-content {\n    background: white;\n    margin: 13px;\n}\n.shepherd-arrow {\n    margin-left: 13px;\n}\n\n.first-step .shepherd-arrow {\n    margin-left: 0px;\n    margin-right: 13px;\n}\n\n.first-step {\n    background: white;\n    max-width: 800px;\n}\n\n.first-step .shepherd-content{\n    background: rgba(255, 255, 255, 0);\n}\n\n.shepherd-content .shepherd-text{\n    color: #6D6179;\n}\n\n.shepherd-enabled .shepherd-content .shepherd-header {\n    background: rgba(255, 255, 255, 0);\n    align-items: flex-start;\n}\n.shepherd-enabled .shepherd-content .shepherd-header h3{\n  width: 90%;\n}\n\n.shepherd-content .shepherd-header h3{\n    color: #6D6179;\n    line-height: 20px;\n}\n\n.shepherd-content .shepherd-header span{\n    color: #6D6179;\n}\n\n.requests-panel .shepherd-arrow {\n    margin-bottom: 13px;\n}";
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
	      title: " <h3>HERE Interactive Map Layers: Spatial and Property Search</h3>",
	      text: "<p>Features stored in interactive map layers can be retrieved by spatial and/or property search queries. The spatial search query can be used to retrieve features that intersect a given point, line or area. This is provided to the API as a GeoJSON geometry. Additionally, a radius parameter defined in meters could be specified.</p>"
	          + "<p>The property search query can be used to retrieve features that have a property value that matches a given value. It is possible to search for numeric ranges, to query multiple property values, and to combine the queries using logical operators. Property search can be combined with requests for tile, bounding box and spatial search.</p>"
	          + "<p>This example includes a map to explore sport facilities in the city of Amsterdam. Amsterdam manages 26 sports parks, 19 sports centres, 10 swimming pools and over 100 smaller sports facilities in various neighbourhoods.</p>"
	          + "<p>Property search is used to filter the features by the type of sport. The locations of the facilities are combined as a multipoint geometry. This geometry then used as an input for the spatial search query to find the administrative areas that contain the facilities of that type.</p>",
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
	                  localStorage.setItem('guided-tour-sf', 'yes');
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
	      title: `Shows a list of the requests that are triggered by each user interaction.\
      For each request is displayed information about the search endpoint, the search parameter and the request payload for POST requests.`,
	      attachTo: {
	        element: '#request-info',
	        on: 'auto'
	      },
	      classes: "requests-panel",
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
	      title: `Select the type of sport facility.\
      The type of sport is stored as a property in each feature. Interactive map layers offer the capability to query selected features using property search. The property search could be combined with spatial requests.`,
	      attachTo: {
	        element: '#overlay-sport',
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
	      title: "Select an administrative area level.",
	      text:
	          "<p>The administrative level is stored as a property in the feature. A spatial search request with the locations of the selected sport facilities is used as an input for the spatial search query.</p>"+
	          "<p>This is combined with a property search to return only the administrative areas with the selected level.</p>",
	      attachTo: {
	        element: '#overlay-areas',
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
	          text: 'Done'
	        }
	      ]
	    });
	    

	    // Initiate the tour
	    if(!localStorage.getItem('guided-tour-sf')) {
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
	 * Copyright (C) 2021 HERE Europe B.V.
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


	function main(lat, lon, zoom) {
	  var areasLayer;
	  var sportFacilitiesLayer;
	  // setup the Map Display
	  window.display = new er(document.getElementById('map'), {
	      zoomLevel: 12,
	      center: {longitude: 4.897070, latitude: 52.377956},
	      // add layers to display
	      layers: [
	          new xyzMapsCore_min.exports.MVTLayer({
	              name: 'mvt-world-layer',
	              remote: {
	                url: `https://vector.hereapi.com/v2/vectortiles/base/mc/{z}/{x}/{y}/omv?apiKey=${API_KEY}`
	              },
	              min: 1,
	              max: 20,
	              style: mapStyle
	          }),
	          sportFacilitiesLayer = new xyzMapsCore_min.exports.TileLayer({
	              min: 2,
	              max: 20,
	              name: 'sportFacilitiesLayer',
	              provider: new xyzMapsCore_min.exports.LocalProvider({
	                name: 'sport-provider'
	              }),
	              style: {
	                  styleGroups: {
	                    Skate: [
	                      {zIndex: 0, type: 'Circle', stroke: '#333', fill: '#55b6fc', radius: 8}
	                    ],
	                    Tennis: [
	                      {zIndex: 0, type: 'Circle', stroke: '#333', fill: '#fc8c54', radius: 8}
	                    ],
	                    Basketbal: [
	                      {zIndex: 0, type: 'Circle', stroke: '#333', fill: '#9c56fb', radius: 8}
	                    ],
	                    Voetbal: [
	                      {zIndex: 0, type: 'Circle', stroke: '#333', fill: '#7FFC54', radius: 8}
	                    ],
	                    "Jeu de boules": [
	                      {zIndex: 0, type: 'Circle', stroke: '#333', fill: '#919191', radius: 8}
	                    ],
	                    "Fitness \/ Bootcamp": [
	                      {zIndex: 0, type: 'Circle', stroke: '#333', fill: '#BA0003', radius: 8}
	                    ],
	                    "Tafeltennis": [
	                      {zIndex: 0, type: 'Circle', stroke: '#333', fill: '#035DBA', radius: 8}
	                    ],
	                    "Beachvolley": [
	                      {zIndex: 0, type: 'Circle', stroke: '#333', fill: '#00B086', radius: 8}
	                    ],
	                    "Overig": [
	                      {zIndex: 0, type: 'Circle', stroke: '#333', fill: '#FEFF00', radius: 8}
	                    ]
	                  },
	                  assign: function (feature, level) {
	                      return feature.properties.Sportvoorziening;
	                  }
	              }
	          }),
	          areasLayer = new xyzMapsCore_min.exports.TileLayer({
	              min: 2,
	              max: 20,
	              name: 'statesLayer',
	              provider: new xyzMapsCore_min.exports.LocalProvider({
	                name: 'states-provider'
	              }),
	              style: {
	                  styleGroups: {
	                      'Buurt': [
	                        {zIndex: 6, type: 'Polygon', opacity: 0.3, strokeWidth: 3, fill: '#BFBFBF'},
	                        {zIndex: 6, type: 'Polygon', opacity: 1, strokeWidth: 1, stroke: '#000'},
	                        {zIndex: 6, type: 'Text', textRef: 'properties.Buurt', fill: '#3D272B', strokeWidth: 5, font:"normal 9px Arial"}                  
	                      ],
	                      'Buurtcombinatie': [
	                        {zIndex: 6, type: 'Polygon', opacity: 0.3, strokeWidth: 3, fill: '#AFAFAF'},
	                        {zIndex: 6, type: 'Polygon', opacity: 1, strokeWidth: 1, stroke: '#000'},
	                        {zIndex: 6, type: 'Text', textRef: 'properties.Buurtcombinatie', fill: '#3D272B', strokeWidth: 5, font:"normal 10px Arial"}                     
	                      ],
	                      'Gebied': [
	                        {zIndex: 6, type: 'Polygon', opacity: 0.3, strokeWidth: 3, fill: '#9F9F9F'},
	                        {zIndex: 6, type: 'Polygon', opacity: 1, strokeWidth: 1, stroke: '#000'},
	                        {zIndex: 6, type: 'Text', textRef: 'properties.Gebied', fill: '#3D272B', stroke: 'white', strokeWidth: 5, font:"normal 12px Arial"}                 
	                      ],
	                      'Stadsdeel': [
	                        {zIndex: 6, type: 'Polygon', opacity: 0.3, strokeWidth: 3, fill: '#8F8F8F'},
	                        {zIndex: 6, type: 'Polygon', opacity: 1, strokeWidth: 1, stroke: '#000'},
	                        {zIndex: 6, type: 'Text', textRef: 'properties.Stadsdeel', fill: '#3D272B', stroke: 'white', strokeWidth: 5, font:"normal 14px Arial"}              
	                      ]
	                  },
	                  assign: function (feature, level) {
	                      if(feature.properties.Buurt)
	                        return "Buurt";
	                      else if(feature.properties.Buurtcombinatie)
	                        return "Buurtcombinatie";
	                      else if(feature.properties.Gebied)
	                        return "Gebied";
	                      else if(feature.properties.Stadsdeel)
	                        return "Stadsdeel";
	                  }
	              }
	          })
	      ]
	  });
	  
	  display.addEventListener('pointerup', function(e){
	    clearInfo();
	  });

	  var sport = "Skate";
	  var arealevel = "neighbourhoods";

	  getSportFacilities(sport, arealevel, sportFacilitiesLayer, areasLayer);

	  const sports = document.querySelectorAll("#overlay-sport input");  
	  const areas = document.querySelectorAll("#overlay-areas input");
	  sports.forEach(s=>{
	    s.onclick=(e)=>{
	      sport = e.target.value;
	      getSportFacilities(sport, arealevel, sportFacilitiesLayer, areasLayer);
	    };
	  });
	  areas.forEach(s=>{
	    s.onclick=(e)=>{
	      arealevel = e.target.value;
	      getArea(arealevel, areasLayer, (new Date).getTime());
	    };
	  });

	  window.onresize = ()=>{
	    display.resize();
	  };

	  tour();
	}

	//492 fitness
	const sportUrl = (sport) => `https://interactive.data.api.platform.here.com/interactive/v1/catalogs/hrn:here:data::olp-here:dh-showcase-amsterdam-areas/layers/public-playground/search?apiKey=${API_KEY}&p.Sportvoorziening=${sport}`;
	const areaUrl = (areas) => `https://interactive.data.api.platform.here.com/interactive/v1/catalogs/hrn:here:data::olp-here:dh-showcase-amsterdam-areas/layers/${areas}/spatial?apiKey=${API_KEY}`;

	const processInfo = document.querySelector("#request-info");
	const requestsPanel = document.querySelector("#requests");

	var multiPoint;
	var sportController;
	var areaController;
	function getSportFacilities(sport, areas, sportFacilitiesLayer, areasLayer){
	  if (sportController) {
	    sportController.abort();
	  }
	  sportController = new AbortController();
	  const { signal } = sportController;

	  let id = generateRequestId();
	  let value = (new Date).getTime();
	  appendInfo(`<div class='instruct transparent ${id}' value='${value}'>- API Request: Property search for 'Sportvoorziening' equals to <b>${sport}</b> in Sport Facility Layer:</div>`, id, value);
	  id = generateRequestId();
	  appendInfo(`<div class="request transparent ${id}" value='${value}'>&nbsp;&nbsp;&nbsp;<i>GET /search?p.Sportvoorziening='${sport}'</i></div>`, id, value);

	  fetch(sportUrl(sport), {
	      signal: signal
	    })
	    .then(res => res.json())
	    .then(res => {
	      updateInfo([id]);

	      sportFacilitiesLayer.getProvider().clear();
	      sportFacilitiesLayer.addFeature(res);
	      
	      let idn = generateRequestId();
	      appendInfo(`<div class='instruct transparent ${idn}' value='${value}'>- Construct Multipoint with all locations of <b>${sport}</b></div>`, idn, value);

	      multiPoint = [];
	      res.features.forEach(p=>{
	        multiPoint.push(p.geometry.coordinates);
	      });
	      getArea(areas, areasLayer, value);
	    });
	}

	function getArea(areas, areasLayer, value){
	  if (areaController) {
	    areaController.abort();
	  }
	  areaController = new AbortController();
	  const { signal } = areaController;

	  let id = generateRequestId();
	  appendInfo(`<div class='instruct transparent ${id}' value='${value}'>- API Request: Spatial search using Multipoint in <b>${areas}</b> Layer:</div>`, id, value);
	  const requestInfoId = generateRequestId();
	  appendInfo(`<div class="request ${requestInfoId} transparent" value='${value}'>&nbsp;&nbsp;&nbsp;<i>POST /spatial -- Payload: MultiPoint</i></div>`, requestInfoId, value);


	  fetch(areaUrl(areas), {
	      method: 'POST',
	      headers: {
	          'Content-Type': 'application/geo+json'
	      },
	      body: JSON.stringify({
	        coordinates: multiPoint,
	        type: "MultiPoint"
	      }),
	      signal: signal
	    })
	    .then(res => res.json())
	    .then(res => {
	      updateInfo([requestInfoId]);

	      areasLayer.getProvider().clear();
	      areasLayer.addFeature(res);
	    });
	}


	function generateRequestId(){
	  return 'request-' + Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 8);
	}
	var firstBlockCount = 5;
	var blockCount=0;
	function appendInfo(info, className, value) {
	  var height = 19;
	  if(info.indexOf("GET")>0 || info.indexOf("POST")>0)
	    height = 13;
	  const block = processInfo.querySelector('.block-' + value);
	  if(firstBlockCount-- > 0)
	    info = info.replace(' transparent', '');
	  if(block){
	    block.innerHTML += info;
	  } else {
	    currentHeight += 6;
	    requestsPanel.innerHTML += `<div class='block block-${value}${blockCount++%2==0?'':' blueb'}' style='bottom:0px;' value='${value}'>${info}</div>`;
	  }
	  expandSection(processInfo, className, height, block, value);
	}

	function updateInfo(idxs, info) {
	  idxs.forEach(id=>{
	    const req = processInfo.querySelector(`.${id}`);
	    req.innerHTML = req.innerHTML.replace('</i>', '</i>&nbsp;<b>Done!</b>');
	  });
	}

	function clearInfo(idx) {
	    let infos = processInfo.querySelectorAll('.block');
	    let latest = infos[infos.length-1].getAttribute('value');
	    processInfo.style['overflow-y'] = null;
	    if(idx != undefined) {
	      infos[idx].parentNode.removeChild(infos[idx]);
	    } else 
	      for(const [index, info] of infos.entries()) {
	        let value = info.getAttribute('value');
	        if(value != latest) {
	          info.parentNode.removeChild(info);
	        }
	      }
	    processInfo.style['height'] = infos[infos.length-1].scrollHeight + 'px';
	    
	    requestsPanel.style.height = processInfo.style['height'];
	    currentHeight = infos[infos.length-1].scrollHeight;
	}
	var currentHeight = 0;
	function expandSection(element, className, height, latestBlock, value) {
	  currentHeight += height;
	  requestsPanel.style.height = currentHeight + "px";
	  
	  let blocks = processInfo.querySelectorAll('.block');
	  blocks.forEach(block=>{
	    if(block.getAttribute('value') != value) {
	      let currentBottom = block.style.bottom.replace('px', '')*1;
	      
	      block.style.bottom = (latestBlock?currentBottom:currentBottom+6) + height + 'px';
	    }
	  });


	  element.style['height'] = currentHeight>150?150:currentHeight + 'px';

	  element.scrollTop = currentHeight;
	  element.style['overflow-y'] = 'hidden';

	  if(blocks[0]){
	    blocks[0].addEventListener('transitionend', function cb(e) {
	      blocks[0].removeEventListener('transitionend', cb);

	      const req = element.querySelector('.' + className);
	      if(req) {
	        req.classList.remove("transparent");
	        if(req.parentElement.classList.contains("blueb")) 
	          req.parentElement.classList.add("blue");
	      }
	    });
	  }
	}

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

	main();

}));
