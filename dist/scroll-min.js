/** 
* scroll-js - v1.7.1.
* https://github.com/mkay581/scroll-js.git
* Copyright 2017 Mark Kennedy. Licensed MIT.
*/

!function(t){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var e;e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,e.Scroll=t()}}(function(){var t;return function t(e,n,r){function o(u,s){if(!n[u]){if(!e[u]){var c="function"==typeof require&&require;if(!s&&c)return c(u,!0);if(i)return i(u,!0);var a=new Error("Cannot find module '"+u+"'");throw a.code="MODULE_NOT_FOUND",a}var f=n[u]={exports:{}};e[u][0].call(f.exports,function(t){var n=e[u][1][t];return o(n||t)},f,f.exports,t,e,n,r)}return n[u].exports}for(var i="function"==typeof require&&require,u=0;u<r.length;u++)o(r[u]);return o}({1:[function(e,n,r){(function(o,i){!function(e,o){"object"==typeof r&&void 0!==n?n.exports=o():"function"==typeof t&&t.amd?t(o):e.ES6Promise=o()}(this,function(){"use strict";function t(t){var e=typeof t;return null!==t&&("object"===e||"function"===e)}function n(t){return"function"==typeof t}function r(t){W=t}function u(t){z=t}function s(){return void 0!==R?function(){R(a)}:c()}function c(){var t=setTimeout;return function(){return t(a,1)}}function a(){for(var t=0;t<K;t+=2){(0,Z[t])(Z[t+1]),Z[t]=void 0,Z[t+1]=void 0}K=0}function f(t,e){var n=arguments,r=this,o=new this.constructor(h);void 0===o[tt]&&k(o);var i=r._state;return i?function(){var t=n[i-1];z(function(){return x(i,o,t,r._result)})}():E(r,o,t,e),o}function l(t){var e=this;if(t&&"object"==typeof t&&t.constructor===e)return t;var n=new e(h);return b(n,t),n}function h(){}function d(){return new TypeError("You cannot resolve a promise with itself")}function p(){return new TypeError("A promises callback cannot return that same promise.")}function v(t){try{return t.then}catch(t){return ot.error=t,ot}}function y(t,e,n,r){try{t.call(e,n,r)}catch(t){return t}}function m(t,e,n){z(function(t){var r=!1,o=y(n,e,function(n){r||(r=!0,e!==n?b(t,n):T(t,n))},function(e){r||(r=!0,A(t,e))},"Settle: "+(t._label||" unknown promise"));!r&&o&&(r=!0,A(t,o))},t)}function w(t,e){e._state===nt?T(t,e._result):e._state===rt?A(t,e._result):E(e,void 0,function(e){return b(t,e)},function(e){return A(t,e)})}function _(t,e,r){e.constructor===t.constructor&&r===f&&e.constructor.resolve===l?w(t,e):r===ot?(A(t,ot.error),ot.error=null):void 0===r?T(t,e):n(r)?m(t,e,r):T(t,e)}function b(e,n){e===n?A(e,d()):t(n)?_(e,n,v(n)):T(e,n)}function g(t){t._onerror&&t._onerror(t._result),O(t)}function T(t,e){t._state===et&&(t._result=e,t._state=nt,0!==t._subscribers.length&&z(O,t))}function A(t,e){t._state===et&&(t._state=rt,t._result=e,z(g,t))}function E(t,e,n,r){var o=t._subscribers,i=o.length;t._onerror=null,o[i]=e,o[i+nt]=n,o[i+rt]=r,0===i&&t._state&&z(O,t)}function O(t){var e=t._subscribers,n=t._state;if(0!==e.length){for(var r=void 0,o=void 0,i=t._result,u=0;u<e.length;u+=3)r=e[u],o=e[u+n],r?x(n,r,o,i):o(i);t._subscribers.length=0}}function S(){this.error=null}function j(t,e){try{return t(e)}catch(t){return it.error=t,it}}function x(t,e,r,o){var i=n(r),u=void 0,s=void 0,c=void 0,a=void 0;if(i){if(u=j(r,o),u===it?(a=!0,s=u.error,u.error=null):c=!0,e===u)return void A(e,p())}else u=o,c=!0;e._state!==et||(i&&c?b(e,u):a?A(e,s):t===nt?T(e,u):t===rt&&A(e,u))}function C(t,e){try{e(function(e){b(t,e)},function(e){A(t,e)})}catch(e){A(t,e)}}function M(){return ut++}function k(t){t[tt]=ut++,t._state=void 0,t._result=void 0,t._subscribers=[]}function P(t,e){this._instanceConstructor=t,this.promise=new t(h),this.promise[tt]||k(this.promise),B(e)?(this.length=e.length,this._remaining=e.length,this._result=new Array(this.length),0===this.length?T(this.promise,this._result):(this.length=this.length||0,this._enumerate(e),0===this._remaining&&T(this.promise,this._result))):A(this.promise,Q())}function Q(){return new Error("Array Methods must be provided an Array")}function I(t){return new P(this,t).promise}function L(t){var e=this;return new e(B(t)?function(n,r){for(var o=t.length,i=0;i<o;i++)e.resolve(t[i]).then(n,r)}:function(t,e){return e(new TypeError("You must pass an array to race."))})}function D(t){var e=this,n=new e(h);return A(n,t),n}function q(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}function F(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}function N(t){this[tt]=M(),this._result=this._state=void 0,this._subscribers=[],h!==t&&("function"!=typeof t&&q(),this instanceof N?C(this,t):F())}function U(){var t=void 0;if(void 0!==i)t=i;else if("undefined"!=typeof self)t=self;else try{t=Function("return this")()}catch(t){throw new Error("polyfill failed because global object is unavailable in this environment")}var e=t.Promise;if(e){var n=null;try{n=Object.prototype.toString.call(e.resolve())}catch(t){}if("[object Promise]"===n&&!e.cast)return}t.Promise=N}var Y=void 0;Y=Array.isArray?Array.isArray:function(t){return"[object Array]"===Object.prototype.toString.call(t)};var B=Y,K=0,R=void 0,W=void 0,z=function(t,e){Z[K]=t,Z[K+1]=e,2===(K+=2)&&(W?W(a):$())},G="undefined"!=typeof window?window:void 0,H=G||{},J=H.MutationObserver||H.WebKitMutationObserver,V="undefined"==typeof self&&void 0!==o&&"[object process]"==={}.toString.call(o),X="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel,Z=new Array(1e3),$=void 0;$=V?function(){return function(){return o.nextTick(a)}}():J?function(){var t=0,e=new J(a),n=document.createTextNode("");return e.observe(n,{characterData:!0}),function(){n.data=t=++t%2}}():X?function(){var t=new MessageChannel;return t.port1.onmessage=a,function(){return t.port2.postMessage(0)}}():void 0===G&&"function"==typeof e?function(){try{var t=e,n=t("vertx");return R=n.runOnLoop||n.runOnContext,s()}catch(t){return c()}}():c();var tt=Math.random().toString(36).substring(16),et=void 0,nt=1,rt=2,ot=new S,it=new S,ut=0;return P.prototype._enumerate=function(t){for(var e=0;this._state===et&&e<t.length;e++)this._eachEntry(t[e],e)},P.prototype._eachEntry=function(t,e){var n=this._instanceConstructor,r=n.resolve;if(r===l){var o=v(t);if(o===f&&t._state!==et)this._settledAt(t._state,e,t._result);else if("function"!=typeof o)this._remaining--,this._result[e]=t;else if(n===N){var i=new n(h);_(i,t,o),this._willSettleAt(i,e)}else this._willSettleAt(new n(function(e){return e(t)}),e)}else this._willSettleAt(r(t),e)},P.prototype._settledAt=function(t,e,n){var r=this.promise;r._state===et&&(this._remaining--,t===rt?A(r,n):this._result[e]=n),0===this._remaining&&T(r,this._result)},P.prototype._willSettleAt=function(t,e){var n=this;E(t,void 0,function(t){return n._settledAt(nt,e,t)},function(t){return n._settledAt(rt,e,t)})},N.all=I,N.race=L,N.resolve=l,N.reject=D,N._setScheduler=r,N._setAsap=u,N._asap=z,N.prototype={constructor:N,then:f,catch:function(t){return this.then(null,t)}},N.polyfill=U,N.Promise=N,N})}).call(this,e("_process"),"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{_process:2}],2:[function(t,e,n){function r(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function i(t){if(l===setTimeout)return setTimeout(t,0);if((l===r||!l)&&setTimeout)return l=setTimeout,setTimeout(t,0);try{return l(t,0)}catch(e){try{return l.call(null,t,0)}catch(e){return l.call(this,t,0)}}}function u(t){if(h===clearTimeout)return clearTimeout(t);if((h===o||!h)&&clearTimeout)return h=clearTimeout,clearTimeout(t);try{return h(t)}catch(e){try{return h.call(null,t)}catch(e){return h.call(this,t)}}}function s(){y&&p&&(y=!1,p.length?v=p.concat(v):m=-1,v.length&&c())}function c(){if(!y){var t=i(s);y=!0;for(var e=v.length;e;){for(p=v,v=[];++m<e;)p&&p[m].run();m=-1,e=v.length}p=null,y=!1,u(t)}}function a(t,e){this.fun=t,this.array=e}function f(){}var l,h,d=e.exports={};!function(){try{l="function"==typeof setTimeout?setTimeout:r}catch(t){l=r}try{h="function"==typeof clearTimeout?clearTimeout:o}catch(t){h=o}}();var p,v=[],y=!1,m=-1;d.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];v.push(new a(t,e)),1!==v.length||y||i(c)},a.prototype.run=function(){this.fun.apply(null,this.array)},d.title="browser",d.browser=!0,d.env={},d.argv=[],d.version="",d.versions={},d.on=f,d.addListener=f,d.once=f,d.off=f,d.removeListener=f,d.removeAllListeners=f,d.emit=f,d.prependListener=f,d.prependOnceListener=f,d.listeners=function(t){return[]},d.binding=function(t){throw new Error("process.binding is not supported")},d.cwd=function(){return"/"},d.chdir=function(t){throw new Error("process.chdir is not supported")},d.umask=function(){return 0}},{}],3:[function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var o=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),i=t("es6-promise").Promise,u={linear:function(t){return t},easeInQuad:function(t){return t*t},easeOutQuad:function(t){return t*(2-t)},easeInOutQuad:function(t){return t<.5?2*t*t:(4-2*t)*t-1},easeInCubic:function(t){return t*t*t},easeOutCubic:function(t){return--t*t*t+1},easeInOutCubic:function(t){return t<.5?4*t*t*t:(t-1)*(2*t-2)*(2*t-2)+1},easeInQuart:function(t){return t*t*t*t},easeOutQuart:function(t){return 1- --t*t*t*t},easeInOutQuart:function(t){return t<.5?8*t*t*t*t:1-8*--t*t*t*t},easeInQuint:function(t){return t*t*t*t*t},easeOutQuint:function(t){return 1+--t*t*t*t*t},easeInOutQuint:function(t){return t<.5?16*t*t*t*t*t:1+16*--t*t*t*t*t}},s=function(t){var e=u[t||"linear"];return e||(console.warn("Scroll error: scroller does not support an easing option of "+t+'. Using "linear" instead'),e=u[t]),e},c=function(){function t(e){if(r(this,t),e&&!(e instanceof Node))throw new Error("Scroll error: element passed to Scroll constructor must be a DOM node, you passed "+e+"!");this.el=e||document.body}return o(t,[{key:"to",value:function(t,e,n){var r=this,o=this.el,u=o.scrollTop;o.scrollLeft;n=n||{},n.duration=n.duration||400;var c=function(t,e){var n=r.el;n[t]=e,n===r.document.body&&(r.document.documentElement[t]=e)},a=function t(e,n,r,o,i,u,s,a){window.requestAnimationFrame(function(){var f=Date.now(),l=Math.min(1,(f-i)/u);if(n===r)return a?a():null;c(o,s(l)*(r-n)+n),l<1?t(e,e[o],r,o,i,u,s,a):a&&a()})};return new i(function(t){a(o,u,e,"scrollTop",Date.now(),n.duration,s(n.easing),t)})}},{key:"toElement",value:function(t,e){var n=this.el,r=0,o=t?t.offsetTop:0,u=void 0;return t?(n===document.body&&(r=window.pageYOffset,o=t.getBoundingClientRect().top+r),this.to(0,o,e)):(u="The element passed to Scroll.toElement() was undefined",console.error(u),i.reject(new Error(u)))}},{key:"destroy",value:function(){}},{key:"document",get:function(){return document}}]),t}();n.default=c,e.exports=n.default},{"es6-promise":1}]},{},[3])(3)});