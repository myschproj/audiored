(()=>{var e={125:e=>{"use strict";e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=e(n);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(e,t,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var c=0;c<e.length;c++){var s=[].concat(e[c]);r&&o[s[0]]||(t&&(s[2]?s[2]="".concat(t," and ").concat(s[2]):s[2]=t),n.push(s))}},n}},851:function(e,n,t){e.exports=function(){"use strict";var e=function(e){var n=e.id,t=e.viewBox,r=e.content;this.id=n,this.viewBox=t,this.content=r};e.prototype.stringify=function(){return this.content},e.prototype.toString=function(){return this.stringify()},e.prototype.destroy=function(){var e=this;["id","viewBox","content"].forEach((function(n){return delete e[n]}))};function n(e,n){return e(n={exports:{}},n.exports),n.exports}"undefined"!=typeof window?window:void 0!==t.g?t.g:"undefined"!=typeof self&&self;var r=n((function(e,n){e.exports=function(){function e(e){return e&&"object"==typeof e&&"[object RegExp]"!==Object.prototype.toString.call(e)&&"[object Date]"!==Object.prototype.toString.call(e)}function n(e){return Array.isArray(e)?[]:{}}function t(t,r){return r&&!0===r.clone&&e(t)?i(n(t),t,r):t}function r(n,r,o){var a=n.slice();return r.forEach((function(r,c){void 0===a[c]?a[c]=t(r,o):e(r)?a[c]=i(n[c],r,o):-1===n.indexOf(r)&&a.push(t(r,o))})),a}function o(n,r,o){var a={};return e(n)&&Object.keys(n).forEach((function(e){a[e]=t(n[e],o)})),Object.keys(r).forEach((function(c){e(r[c])&&n[c]?a[c]=i(n[c],r[c],o):a[c]=t(r[c],o)})),a}function i(e,n,i){var a=Array.isArray(n),c=(i||{arrayMerge:r}).arrayMerge||r;return a?Array.isArray(e)?c(e,n,i):t(n,i):o(e,n,i)}return i.all=function(e,n){if(!Array.isArray(e)||e.length<2)throw new Error("first argument should be an array with at least two elements");return e.reduce((function(e,t){return i(e,t,n)}))},i}()})),o=n((function(e,n){n.default={svg:{name:"xmlns",uri:"http://www.w3.org/2000/svg"},xlink:{name:"xmlns:xlink",uri:"http://www.w3.org/1999/xlink"}},e.exports=n.default})),i=o.svg,a=o.xlink,c={};c[i.name]=i.uri,c[a.name]=a.uri;var s=function(e,n){return void 0===e&&(e=""),"<svg "+function(e){return Object.keys(e).map((function(n){return n+'="'+e[n].toString().replace(/"/g,"&quot;")+'"'})).join(" ")}(r(c,n||{}))+">"+e+"</svg>"},u=function(e){function n(){e.apply(this,arguments)}e&&(n.__proto__=e),n.prototype=Object.create(e&&e.prototype),n.prototype.constructor=n;var t={isMounted:{}};return t.isMounted.get=function(){return!!this.node},n.createFromExistingNode=function(e){return new n({id:e.getAttribute("id"),viewBox:e.getAttribute("viewBox"),content:e.outerHTML})},n.prototype.destroy=function(){this.isMounted&&this.unmount(),e.prototype.destroy.call(this)},n.prototype.mount=function(e){if(this.isMounted)return this.node;var n="string"==typeof e?document.querySelector(e):e,t=this.render();return this.node=t,n.appendChild(t),t},n.prototype.render=function(){var e=this.stringify();return function(e){var n=!!document.importNode,t=(new DOMParser).parseFromString(e,"image/svg+xml").documentElement;return n?document.importNode(t,!0):t}(s(e)).childNodes[0]},n.prototype.unmount=function(){this.node.parentNode.removeChild(this.node)},Object.defineProperties(n.prototype,t),n}(e);return u}()},981:function(e,n,t){e.exports=function(){"use strict";function e(e,n){return e(n={exports:{}},n.exports),n.exports}"undefined"!=typeof window?window:void 0!==t.g?t.g:"undefined"!=typeof self&&self;var n=e((function(e,n){e.exports=function(){function e(e){return e&&"object"==typeof e&&"[object RegExp]"!==Object.prototype.toString.call(e)&&"[object Date]"!==Object.prototype.toString.call(e)}function n(e){return Array.isArray(e)?[]:{}}function t(t,r){return r&&!0===r.clone&&e(t)?i(n(t),t,r):t}function r(n,r,o){var a=n.slice();return r.forEach((function(r,c){void 0===a[c]?a[c]=t(r,o):e(r)?a[c]=i(n[c],r,o):-1===n.indexOf(r)&&a.push(t(r,o))})),a}function o(n,r,o){var a={};return e(n)&&Object.keys(n).forEach((function(e){a[e]=t(n[e],o)})),Object.keys(r).forEach((function(c){e(r[c])&&n[c]?a[c]=i(n[c],r[c],o):a[c]=t(r[c],o)})),a}function i(e,n,i){var a=Array.isArray(n),c=(i||{arrayMerge:r}).arrayMerge||r;return a?Array.isArray(e)?c(e,n,i):t(n,i):o(e,n,i)}return i.all=function(e,n){if(!Array.isArray(e)||e.length<2)throw new Error("first argument should be an array with at least two elements");return e.reduce((function(e,t){return i(e,t,n)}))},i}()}));var r=e((function(e,n){n.default={svg:{name:"xmlns",uri:"http://www.w3.org/2000/svg"},xlink:{name:"xmlns:xlink",uri:"http://www.w3.org/1999/xlink"}},e.exports=n.default})),o=r.svg,i=r.xlink,a={};a[o.name]=o.uri,a[i.name]=i.uri;var c,s=function(e,t){return void 0===e&&(e=""),"<svg "+function(e){return Object.keys(e).map((function(n){return n+'="'+e[n].toString().replace(/"/g,"&quot;")+'"'})).join(" ")}(n(a,t||{}))+">"+e+"</svg>"},u=r.svg,l=r.xlink,d={attrs:(c={style:["position: absolute","width: 0","height: 0"].join("; "),"aria-hidden":"true"},c[u.name]=u.uri,c[l.name]=l.uri,c)},f=function(e){this.config=n(d,e||{}),this.symbols=[]};f.prototype.add=function(e){var n=this.symbols,t=this.find(e.id);return t?(n[n.indexOf(t)]=e,!1):(n.push(e),!0)},f.prototype.remove=function(e){var n=this.symbols,t=this.find(e);return!!t&&(n.splice(n.indexOf(t),1),t.destroy(),!0)},f.prototype.find=function(e){return this.symbols.filter((function(n){return n.id===e}))[0]||null},f.prototype.has=function(e){return null!==this.find(e)},f.prototype.stringify=function(){var e=this.config.attrs,n=this.symbols.map((function(e){return e.stringify()})).join("");return s(n,e)},f.prototype.toString=function(){return this.stringify()},f.prototype.destroy=function(){this.symbols.forEach((function(e){return e.destroy()}))};var p=function(e){var n=e.id,t=e.viewBox,r=e.content;this.id=n,this.viewBox=t,this.content=r};p.prototype.stringify=function(){return this.content},p.prototype.toString=function(){return this.stringify()},p.prototype.destroy=function(){var e=this;["id","viewBox","content"].forEach((function(n){return delete e[n]}))};var m=function(e){var n=!!document.importNode,t=(new DOMParser).parseFromString(e,"image/svg+xml").documentElement;return n?document.importNode(t,!0):t},h=function(e){function n(){e.apply(this,arguments)}e&&(n.__proto__=e),n.prototype=Object.create(e&&e.prototype),n.prototype.constructor=n;var t={isMounted:{}};return t.isMounted.get=function(){return!!this.node},n.createFromExistingNode=function(e){return new n({id:e.getAttribute("id"),viewBox:e.getAttribute("viewBox"),content:e.outerHTML})},n.prototype.destroy=function(){this.isMounted&&this.unmount(),e.prototype.destroy.call(this)},n.prototype.mount=function(e){if(this.isMounted)return this.node;var n="string"==typeof e?document.querySelector(e):e,t=this.render();return this.node=t,n.appendChild(t),t},n.prototype.render=function(){var e=this.stringify();return m(s(e)).childNodes[0]},n.prototype.unmount=function(){this.node.parentNode.removeChild(this.node)},Object.defineProperties(n.prototype,t),n}(p),g={autoConfigure:!0,mountTo:"body",syncUrlsWithBaseTag:!1,listenLocationChangeEvent:!0,locationChangeEvent:"locationChange",locationChangeAngularEmitter:!1,usagesToUpdate:"use[*|href]",moveGradientsOutsideSymbol:!1},v=function(e){return Array.prototype.slice.call(e,0)},y=function(){return/firefox/i.test(navigator.userAgent)},w=function(){return/msie/i.test(navigator.userAgent)||/trident/i.test(navigator.userAgent)},b=function(){return/edge/i.test(navigator.userAgent)},x=function(e){return(e||window.location.href).split("#")[0]},E=function(e){angular.module("ng").run(["$rootScope",function(n){n.$on("$locationChangeSuccess",(function(n,t,r){var o,i,a;o=e,i={oldUrl:r,newUrl:t},(a=document.createEvent("CustomEvent")).initCustomEvent(o,!1,!1,i),window.dispatchEvent(a)}))}])},C=function(e,n){return void 0===n&&(n="linearGradient, radialGradient, pattern, mask, clipPath"),v(e.querySelectorAll("symbol")).forEach((function(e){v(e.querySelectorAll(n)).forEach((function(n){e.parentNode.insertBefore(n,e)}))})),e};var T=r.xlink.uri,k="xlink:href",S=/[{}|\\\^\[\]`"<>]/g;function M(e){return e.replace(S,(function(e){return"%"+e[0].charCodeAt(0).toString(16).toUpperCase()}))}var N,A=["clipPath","colorProfile","src","cursor","fill","filter","marker","markerStart","markerMid","markerEnd","mask","stroke","style"],_=A.map((function(e){return"["+e+"]"})).join(","),B=function(e,n,t,r){var o,i,a=M(t),c=M(r);(o=e.querySelectorAll(_),i=function(e){var n=e.localName,t=e.value;return-1!==A.indexOf(n)&&-1!==t.indexOf("url("+a)},v(o).reduce((function(e,n){if(!n.attributes)return e;var t=v(n.attributes),r=i?t.filter(i):t;return e.concat(r)}),[])).forEach((function(e){return e.value=e.value.replace(new RegExp(a.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),"g"),c)})),function(e,n,t){v(e).forEach((function(e){var r=e.getAttribute(k);if(r&&0===r.indexOf(n)){var o=r.replace(n,t);e.setAttributeNS(T,k,o)}}))}(n,a,c)},O="mount",j="symbol_mount",z=function(e){function t(t){var r=this;void 0===t&&(t={}),e.call(this,n(g,t));var o,i=(o=o||Object.create(null),{on:function(e,n){(o[e]||(o[e]=[])).push(n)},off:function(e,n){o[e]&&o[e].splice(o[e].indexOf(n)>>>0,1)},emit:function(e,n){(o[e]||[]).map((function(e){e(n)})),(o["*"]||[]).map((function(t){t(e,n)}))}});this._emitter=i,this.node=null;var a=this.config;if(a.autoConfigure&&this._autoConfigure(t),a.syncUrlsWithBaseTag){var c=document.getElementsByTagName("base")[0].getAttribute("href");i.on(O,(function(){return r.updateUrls("#",c)}))}var s=this._handleLocationChange.bind(this);this._handleLocationChange=s,a.listenLocationChangeEvent&&window.addEventListener(a.locationChangeEvent,s),a.locationChangeAngularEmitter&&E(a.locationChangeEvent),i.on(O,(function(e){a.moveGradientsOutsideSymbol&&C(e)})),i.on(j,(function(e){var n;a.moveGradientsOutsideSymbol&&C(e.parentNode),(w()||b())&&(n=[],v(e.querySelectorAll("style")).forEach((function(e){e.textContent+="",n.push(e)})))}))}e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t;var r={isMounted:{}};return r.isMounted.get=function(){return!!this.node},t.prototype._autoConfigure=function(e){var n=this.config;void 0===e.syncUrlsWithBaseTag&&(n.syncUrlsWithBaseTag=void 0!==document.getElementsByTagName("base")[0]),void 0===e.locationChangeAngularEmitter&&(n.locationChangeAngularEmitter=void 0!==window.angular),void 0===e.moveGradientsOutsideSymbol&&(n.moveGradientsOutsideSymbol=y())},t.prototype._handleLocationChange=function(e){var n=e.detail,t=n.oldUrl,r=n.newUrl;this.updateUrls(t,r)},t.prototype.add=function(n){var t=e.prototype.add.call(this,n);return this.isMounted&&t&&(n.mount(this.node),this._emitter.emit(j,n.node)),t},t.prototype.attach=function(e){var n=this,t=this;if(t.isMounted)return t.node;var r="string"==typeof e?document.querySelector(e):e;return t.node=r,this.symbols.forEach((function(e){e.mount(t.node),n._emitter.emit(j,e.node)})),v(r.querySelectorAll("symbol")).forEach((function(e){var n=h.createFromExistingNode(e);n.node=e,t.add(n)})),this._emitter.emit(O,r),r},t.prototype.destroy=function(){var e=this,n=e.config,t=e.symbols,r=e._emitter;t.forEach((function(e){return e.destroy()})),r.off("*"),window.removeEventListener(n.locationChangeEvent,this._handleLocationChange),this.isMounted&&this.unmount()},t.prototype.mount=function(e,n){void 0===e&&(e=this.config.mountTo),void 0===n&&(n=!1);var t=this;if(t.isMounted)return t.node;var r="string"==typeof e?document.querySelector(e):e,o=t.render();return this.node=o,n&&r.childNodes[0]?r.insertBefore(o,r.childNodes[0]):r.appendChild(o),this._emitter.emit(O,o),o},t.prototype.render=function(){return m(this.stringify())},t.prototype.unmount=function(){this.node.parentNode.removeChild(this.node)},t.prototype.updateUrls=function(e,n){if(!this.isMounted)return!1;var t=document.querySelectorAll(this.config.usagesToUpdate);return B(this.node,t,x(e)+"#",x(n)+"#"),!0},Object.defineProperties(t.prototype,r),t}(f),L=e((function(e){var n;n=function(){var e,n=[],t=document,r=t.documentElement.doScroll,o="DOMContentLoaded",i=(r?/^loaded|^c/:/^loaded|^i|^c/).test(t.readyState);return i||t.addEventListener(o,e=function(){for(t.removeEventListener(o,e),i=1;e=n.shift();)e()}),function(e){i?setTimeout(e,0):n.push(e)}},e.exports=n()})),R="__SVG_SPRITE_NODE__";window.__SVG_SPRITE__?N=window.__SVG_SPRITE__:(N=new z({attrs:{id:R,"aria-hidden":"true"}}),window.__SVG_SPRITE__=N);var P=function(){var e=document.getElementById(R);e?N.attach(e):N.mount(document.body,!0)};return document.body?P():L(P),N}()},728:(e,n,t)=>{"use strict";t.d(n,{Z:()=>i});var r=t(125),o=t.n(r)()((function(e){return e[1]}));o.push([e.id,"html,\nbody {\n  height: 100%;\n}\nbody {\n  margin: 0;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n:focus:not(:focus-visible) {\n  outline: none;\n}\n.btn-reset,\n.ctrl-item,\n.dropdown .list button {\n  padding: 0;\n  border: 0;\n  outline: 0;\n  background: none;\n}\n.container {\n  box-sizing: border-box;\n  position: relative;\n  width: 1080px;\n  margin: 0 auto;\n  padding: 40px;\n}\n.app-title {\n  position: absolute;\n  text-align: center;\n  color: #ccc;\n  font-size: 40px;\n  left: 0;\n  right: 0;\n  top: -135px;\n}\n.player {\n  position: relative;\n  margin: 0 auto;\n  height: 160px;\n  display: block;\n  box-shadow: 0 0 30px rgba(0, 0, 0, 0.1);\n}\n.player .wave-canvas {\n  position: absolute;\n}\n.player-landing {\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  color: #ddd;\n  font-size: 24px;\n}\n.dragger {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  width: 1px;\n  background: #999;\n  cursor: col-resize;\n}\n.dragger::after {\n  content: '';\n  position: absolute;\n  left: -2px;\n  right: -2px;\n  top: 0;\n  bottom: 0;\n}\n.dragger:hover {\n  background: #333;\n}\n.drag-current {\n  background: #0cf;\n}\n.landing {\n  padding-bottom: 100px;\n}\n.landing h2 {\n  padding: 0;\n  margin: 0;\n  text-align: center;\n  color: #ccc;\n  font-size: 40px;\n  margin-bottom: 40px;\n}\n.controllers {\n  display: flex;\n  margin-top: 10px;\n}\n.controllers .seconds {\n  font-size: 12px;\n  line-height: 36px;\n  margin-left: 10px;\n  display: inline-block;\n  overflow: hidden;\n  color: #aaa;\n}\n.file input {\n  visibility: hidden;\n  position: absolute;\n}\n.file-main {\n  display: block;\n  margin: 0 auto;\n  padding: 40px;\n  text-align: center;\n  cursor: pointer;\n  color: #999;\n  transition: 0.3s;\n  background: none;\n  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);\n}\n.file-main .icon {\n  margin: -1px 5px 0;\n  font-size: 24px;\n}\n.file-main:hover {\n  color: #6ac;\n  border-color: #6ac;\n}\n.icon {\n  width: 1em;\n  height: 1em;\n  fill: currentColor;\n  vertical-align: middle;\n}\n@keyframes spin {\n  from {\n    transform: rotate(0);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.icon.__icon-spin {\n  animation: spin infinite 1s linear;\n}\n.ctrl-item {\n  display: inline-block;\n  font-size: 16px;\n  text-align: center;\n  color: #999;\n  padding: 10px;\n  margin-right: 10px;\n  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);\n  cursor: pointer;\n}\n.ctrl-item:hover {\n  box-shadow: 0 0 20px rgba(0, 0, 0, 0.16);\n}\n.ctrl-item .icon {\n  display: block;\n}\n.dropdown {\n  display: inline-block;\n  position: relative;\n}\n.dropdown .list-wrap {\n  position: relative;\n}\n.dropdown .list {\n  position: absolute;\n  width: 60px;\n  top: 0;\n  left: 0;\n  visibility: hidden;\n  opacity: 0;\n  transition-duration: 0.3s;\n  transition-property: opacity, visibility;\n  list-style: none;\n  background: #fff;\n  box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);\n  padding: 0;\n  margin: 0;\n  z-index: 10;\n}\n.dropdown .list button {\n  display: block;\n  width: 100%;\n  text-align: center;\n  padding: 5px 0;\n  color: inherit;\n  font-size: 12px;\n  cursor: pointer;\n}\n.dropdown .list button:hover {\n  background: #333;\n  color: #fff;\n}\n.dropdown:hover .list {\n  opacity: 1;\n  visibility: visible;\n}\n.clipper {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n.cursor-current {\n  position: absolute;\n  font-size: 12px;\n  top: -22px;\n  padding: 1px 3px;\n  text-align: center;\n  color: #fff;\n  transform: translate(-50%) scale(0.8);\n  background: #0cf;\n}\n.cursor-current .num {\n  font-family: monospace;\n}\n.cursor-current::after {\n  content: '';\n  position: absolute;\n  border: 5px solid transparent;\n  border-top-color: #0cf;\n  bottom: -9px;\n  left: 50%;\n  margin-left: -5px;\n}\n",""]);const i=o},119:(e,n,t)=>{"use strict";var r,o=function(){var e={};return function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}e[n]=t}return e[n]}}(),i=[];function a(e){for(var n=-1,t=0;t<i.length;t++)if(i[t].identifier===e){n=t;break}return n}function c(e,n){for(var t={},r=[],o=0;o<e.length;o++){var c=e[o],s=n.base?c[0]+n.base:c[0],u=t[s]||0,l="".concat(s," ").concat(u);t[s]=u+1;var d=a(l),f={css:c[1],media:c[2],sourceMap:c[3]};-1!==d?(i[d].references++,i[d].updater(f)):i.push({identifier:l,updater:h(f,n),references:1}),r.push(l)}return r}function s(e){var n=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var i=t.nc;i&&(r.nonce=i)}if(Object.keys(r).forEach((function(e){n.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(n);else{var a=o(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(n)}return n}var u,l=(u=[],function(e,n){return u[e]=n,u.filter(Boolean).join("\n")});function d(e,n,t,r){var o=t?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=l(n,o);else{var i=document.createTextNode(o),a=e.childNodes;a[n]&&e.removeChild(a[n]),a.length?e.insertBefore(i,a[n]):e.appendChild(i)}}function f(e,n,t){var r=t.css,o=t.media,i=t.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var p=null,m=0;function h(e,n){var t,r,o;if(n.singleton){var i=m++;t=p||(p=s(n)),r=d.bind(null,t,i,!1),o=d.bind(null,t,i,!0)}else t=s(n),r=f.bind(null,t,n),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)};return r(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;r(e=n)}else o()}}e.exports=function(e,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=(void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r));var t=c(e=e||[],n);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<t.length;r++){var o=a(t[r]);i[o].references--}for(var s=c(e,n),u=0;u<t.length;u++){var l=a(t[u]);0===i[l].references&&(i[l].updater(),i.splice(l,1))}t=s}}}}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var i=n[r]={id:r,exports:{}};return e[r].call(i.exports,i,i.exports,t),i.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var r=n.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.nc=void 0,(()=>{"use strict";const e=React;var n=t.n(e);const r=ReactDOM;var o=t.n(r);function i(e){var n,t,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=i(e[n]))&&(r&&(r+=" "),r+=t);else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}const a=function(){for(var e,n,t=0,r="";t<arguments.length;)(e=arguments[t++])&&(n=i(e))&&(r&&(r+=" "),r+=n);return r};function c(e,n,t){let r,o=0,i=0,a=0,c=0;const s=Math.floor((t-n)/15);for(let u=n;u<t;u+=s)r=e[u],r<o?(i=o,o=r):r>a&&(c=a,a=r);return[(o+i)/2,(a+c)/2]}const s=window.devicePixelRatio||1;function u({width:t,height:r,color1:o="#ccc",color2:i="#ddd",audioBuffer:u,className:l}){const d=t*s,f=(0,e.useMemo)((()=>function(e,n){const t=n.length/e;let r=0;const o=new Float32Array(e),i=new Float32Array(e);for(let a=0;a<e;a+=1){const e=Math.floor(r);r+=t;const s=Math.floor(r);[o[a],i[a]]=c(n,e,s)}return[o,i]}(Math.floor(d),u.getChannelData(0))),[u,d]),p=(0,e.useRef)(null);return(0,e.useEffect)((()=>{(()=>{const e=p.current?.getContext("2d"),n=f[0].length,t=r/2*s;if(e){e.lineWidth=1,e.clearRect(0,0,d,r*s);for(let r=0;r<n;r+=1){const n=f[0][r],a=f[1][r],c=r-.5;e.beginPath(),e.strokeStyle=o,e.moveTo(c,t+t*n+.5),e.lineTo(c,t),e.stroke(),e.beginPath(),e.strokeStyle=i,e.moveTo(c,t),e.lineTo(c,t+t*a+.5),e.stroke()}}})()}),[]),n().createElement("canvas",{ref:p,className:a("wave-canvas",l),style:{width:`${t}px`,height:`${r}px`},width:t*s,height:r*s})}const l=(0,e.memo)(u);function d({x:e,y:t=0,value:r,onDrag:o,className:i,children:c}){return n().createElement("div",{className:a("dragger",i),onMouseDown:n=>{const{screenX:r,screenY:i}=n,a=n=>{o({x:n.screenX-r+e,y:n.screenY-i+t})},c=()=>{window.removeEventListener("mousemove",a),window.removeEventListener("mouseup",c)};window.addEventListener("mousemove",a),window.addEventListener("mouseup",c)},role:"slider","aria-valuenow":r,tabIndex:0,style:{left:`${e}px`,top:`${t}px`}},c)}const f=e=>URL.createObjectURL(e),p=1e3;function m(e,n){return`rect(0, ${n}px, 160px, ${e}px)`}function h({blob:t,audioBuffer:r,startTime:o,endTime:i,currentTime:a,paused:c,onStartTimeChange:s,onEndTimeChange:u,onCurrentTimeChange:f,onEnd:h}){const g=p/r.duration,v=e=>e*g,y=(0,e.useRef)(null),w=(0,e.useRef)(),b=(0,e.useCallback)((e=>e/g),[g]),x=(0,e.useCallback)((e=>{return n=e,0,t=r.duration,n<0?0:n>t?t:n;var n,t}),[r.duration]),E=v(o),C=v(i),T=v(a),k=(S=a,[Math.floor(S/60),Math.floor(S%60),Math.round(S%1*100)]);var S;const M=(0,e.useCallback)((({x:e})=>{s(x(b(e)))}),[x,s,b]),N=(0,e.useCallback)((({x:e})=>{u(x(b(e)))}),[x,u,b]),A=(0,e.useCallback)((({x:e})=>{f(x(b(e)))}),[x,f,b]),_=(0,e.useMemo)((()=>URL.createObjectURL(t)),[t]);return(0,e.useEffect)((()=>()=>URL.revokeObjectURL(_)),[_]),(0,e.useEffect)((()=>{const e=y.current;e?.src&&(c?e.pause():e.play())}),[c]),(0,e.useEffect)((()=>{const e=y.current;e?.src&&w.current!==a&&(e.currentTime=a)}),[a]),function(n){const t=(0,e.useRef)(),r=(0,e.useCallback)((()=>{t.current=requestAnimationFrame(r),n()}),[n]);(0,e.useEffect)((()=>(t.current=requestAnimationFrame(r),()=>cancelAnimationFrame(t.current))),[r])}((()=>{if(!y.current)return;const{currentTime:e}=y.current;e!==a&&(f(e),e>=i&&a<i&&h(),w.current=e)})),n().createElement("div",{className:"player"},n().createElement("audio",{hidden:!0,src:_,ref:y,onEnded:()=>{h()}}),n().createElement("div",{className:"clipper"},n().createElement(l,{audioBuffer:r,width:p,height:160,color1:"#ddd",color2:"#e3e3e3"})),n().createElement("div",{className:"clipper",style:{clip:m(E,C)}},n().createElement(l,{audioBuffer:r,width:p,height:160,color1:"#0cf",color2:"#1ad1ff"})),n().createElement(d,{x:E,value:o,onDrag:M}),n().createElement(d,{className:"drag-current",x:T,value:a,onDrag:A},n().createElement("div",{className:"cursor-current"},n().createElement("span",{className:"num"},k[0]),"'",n().createElement("span",{className:"num"},k[1]),".",n().createElement("span",{className:"num"},k[2].toString().padStart(2,"0")))),n().createElement(d,{x:C,value:i,onDrag:N}))}function g({onPick:t,className:r,children:o}){const[i,c]=(0,e.useState)(0);return n().createElement("label",{className:a("file",r)},o,n().createElement("input",{type:"file",key:i,onChange:e=>{t(e.currentTarget?.files?.[0]),c(i+1)}}))}const v=({icon:e})=>{const t="string"==typeof e?e:e.id;return n().createElement("svg",{className:`icon __${t}`},n().createElement("use",{xlinkHref:`#${t}`}))};async function y(e){const n=await(t=e,((e,n)=>new Promise(((t,r)=>{const o=new FileReader;o[`readAs${n}`](e),o.onload=()=>t(o.result),o.onerror=e=>r(e)})))(t,"ArrayBuffer"));var t;return await(new AudioContext).decodeAudioData(n)}const w=new function(){return new Worker(t.p+"worker.worker.js")};var b=t(119),x=t.n(b),E=t(728);x()(E.Z,{insert:"head",singleton:!1}),E.Z.locals;var C=t(851),T=t.n(C),k=t(981),S=t.n(k),M=new(T())({id:"icon-music",use:"icon-music-usage",viewBox:"0 0 24 24",content:'<symbol viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" id="icon-music">\n  <path d="M0 0h24v24H0z" fill="none" />\n  <path d="M15 6H3v2h12V6zm0 4H3v2h12v-2zM3 16h8v-2H3v2zM17 6v8.18c-.31-.11-.65-.18-1-.18-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3V8h3V6h-5z" />\n</symbol>'});S().add(M);const N=M;var A=new(T())({id:"icon-play",use:"icon-play-usage",viewBox:"0 0 24 24",content:'<symbol fill="#000000" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" id="icon-play">\n  <path d="M0 0h24v24H0z" fill="none" />\n  <path d="M10 16.5l6-4.5-6-4.5v9zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />\n</symbol>'});S().add(A);const _=A;var B=new(T())({id:"icon-pause",use:"icon-pause-usage",viewBox:"0 0 24 24",content:'<symbol viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" id="icon-pause">\n  <path d="M0 0h24v24H0z" fill="none" />\n  <path d="M9 16h2V8H9v8zm3-14C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm1-4h2V8h-2v8z" />\n</symbol>'});S().add(B);const O=B;var j=new(T())({id:"icon-replay",use:"icon-replay-usage",viewBox:"0 0 24 24",content:'<symbol viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" id="icon-replay">\n  <path d="M0 0h24v24H0z" fill="none" />\n  <path d="M12 5V1L7 6l5 5V7c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6H4c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8z" />\n</symbol>'});S().add(j);const z=j;var L=new(T())({id:"icon-spin",use:"icon-spin-usage",viewBox:"0 0 42 42",content:'<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 42 42" id="icon-spin"><path d="M21 37c-4.3 0-8.3-1.7-11.3-4.7S5 25.3 5 21c0-3 .8-6 2.5-8.5C9 10 11.2 8 13.8 6.7l1.3 2.7c-2.1 1.1-3.9 2.7-5.2 4.7-1.3 2.1-2 4.5-2 6.9 0 7.2 5.8 13 13 13s13-5.8 13-13c0-2.5-.7-4.9-2-6.9s-3.1-3.6-5.2-4.7L28 6.7c2.8 1.3 5 3.3 6.5 5.8C36.2 15 37 18 37 21c0 4.3-1.7 8.3-4.7 11.3S25.3 37 21 37z" /></symbol>'});S().add(L);const R=L;var P=new(T())({id:"icon-download",use:"icon-download-usage",viewBox:"0 0 24 24",content:'<symbol viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" id="icon-download">\n  <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z" />\n  <path d="M0 0h24v24H0z" fill="none" />\n</symbol>'});S().add(P);const U=P;function $(){const[t,r]=(o={file:null,decoding:!1,audioBuffer:null,paused:!0,startTime:0,endTime:1/0,currentTime:0,processing:!1},(0,e.useReducer)(((e,n)=>"function"==typeof n?n(e):{...e,...n}),o));var o;const i=async e=>{if(!(e=>e.type.indexOf("audio")>-1)(e))return void alert("请选择合法的音频文件");r({file:e,paused:!0,decoding:!0,audioBuffer:null});const n=await y(e);r({paused:!1,decoding:!1,audioBuffer:n,startTime:0,currentTime:0,endTime:n.duration/2})},a=e=>{const{startTime:n,endTime:o,audioBuffer:i,file:a}=t;if(!i||!a)return;const{length:c,duration:s}=i,u=function(e,n=0,t=e.length){const r=(new AudioContext).createBuffer(e.numberOfChannels,t-n,e.sampleRate);for(let o=0;o<e.numberOfChannels;o+=1)r.copyToChannel(e.getChannelData(o).slice(n,t),o);return r}(i,Math.floor(c*n/s),Math.floor(c*o/s));r({processing:!0}),function(e,n){const t=Math.random();return new Promise(((r,o)=>{const i=function(e){return{channels:(0,n=e.numberOfChannels-1,Array.from(new Array(n-0+1),((e,n)=>n+0))).map((n=>e.getChannelData(n))),sampleRate:e.sampleRate,length:e.length};var n}(e);w.postMessage({type:n,audioData:i,id:t});const a=({data:e})=>{e&&e.id===t&&(e.success?r(e.data):o(new Error(e.message)),w.removeEventListener("message",a))};w.addEventListener("message",a)}))}(u,e).then(f).then((n=>{var t,r;((e,n)=>{const t=document.createElement("a");t.href=e,t.download=n,t.click()})(n,(t=a.name,r=e,`${t.replace(/\.\w+$/,"")}.${r}`))})).catch((e=>console.error(e))).then((()=>{r({processing:!1})}))},c=e=>`${e.toFixed(2)}s`;return n().createElement("div",{className:"container"},t.audioBuffer||t.decoding?n().createElement("div",null,n().createElement("h2",{className:"app-title"},"Audio Cutter"),t.decoding?n().createElement("div",{className:"player player-landing"},"DECODING..."):n().createElement(h,{audioBuffer:t.audioBuffer,blob:t.file,paused:t.paused,startTime:t.startTime,endTime:t.endTime,currentTime:t.currentTime,onStartTimeChange:e=>{r({startTime:e})},onEndTimeChange:e=>{r({endTime:e})},onCurrentTimeChange:e=>{r({currentTime:e})},onEnd:()=>{r({currentTime:t.startTime,paused:!1})}}),n().createElement("div",{className:"controllers"},n().createElement(g,{className:"ctrl-item",onPick:i},n().createElement(v,{icon:N})),n().createElement("button",{type:"button",className:"ctrl-item",title:"Play/Pause",onClick:()=>{r({paused:!t.paused})}},n().createElement(v,{icon:t.paused?_:O})),n().createElement("button",{type:"button",className:"ctrl-item",title:"Replay",onClick:()=>{r({currentTime:t.startTime,paused:!1})}},n().createElement(v,{icon:z})),n().createElement("div",{className:"dropdown list-wrap"},n().createElement("button",{type:"button",className:"ctrl-item"},n().createElement(v,{icon:t.processing?R:U})),!t.processing&&n().createElement("ul",{className:"list"},n().createElement("li",null,n().createElement("button",{type:"button",onClick:()=>a("wav")},"Wav")),n().createElement("li",null,n().createElement("button",{type:"button",onClick:()=>a("mp3"),"data-type":"mp3"},"MP3")))),Number.isFinite(t.endTime)&&n().createElement("span",{className:"seconds"},"Select"," ",n().createElement("span",{className:"seconds-range"},c(t.endTime-t.startTime))," ","of"," ",n().createElement("span",{className:"seconds-total"},c(t.audioBuffer?.duration??0))," ","(from"," ",n().createElement("span",{className:"seconds-start"},c(t.startTime))," ","to"," ",n().createElement("span",{className:"seconds-end"},c(t.endTime)),")"))):n().createElement("div",{className:"landing"},n().createElement("h2",null,"Audio Cutter"),n().createElement(g,{onPick:i},n().createElement("div",{className:"file-main"},n().createElement(v,{icon:N}),"Select music file"))))}o().render(n().createElement($,null),document.getElementById("main"))})()})();