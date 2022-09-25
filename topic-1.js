!function(){"use strict";var t={91:function(t){t.exports=function(t,e){return e||(e={}),t?(t=String(t.__esModule?t.default:t),e.hash&&(t+=e.hash),e.maybeNeedQuotes&&/[\t\n\f\r "'=<>`]/.test(t)?'"'.concat(t,'"'):t):t}},964:function(t,e,n){t.exports=n.p+"a900ee56be1d9a10d6f7.png"},368:function(t,e,n){t.exports=n.p+"images/fb120b57661b4f7b94b6.jpg"},378:function(t,e,n){t.exports=n.p+"images/86aac3bb583b11522cb2.jpg"},846:function(t,e,n){t.exports=n.p+"images/518804a08b32ac1745a7.jpg"}},e={};function n(r){var i=e[r];if(void 0!==i)return i.exports;var o=e[r]={exports:{}};return t[r](o,o.exports,n),o.exports}n.m=t,n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,{a:e}),e},n.d=function(t,e){for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},function(){var t;n.g.importScripts&&(t=n.g.location+"");var e=n.g.document;if(!t&&e&&(e.currentScript&&(t=e.currentScript.src),!t)){var r=e.getElementsByTagName("script");r.length&&(t=r[r.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=t}(),n.b=document.baseURI||self.location.href,function(){var t=n(91),e=n.n(t),r=new URL(n(964),n.b),i=new URL(n(368),n.b),o=new URL(n(378),n.b),a=new URL(n(846),n.b);function s(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function l(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function c(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function u(t,e){!function(t,e){if(e.has(t))throw new TypeError("Cannot initialize the same private elements twice on an object")}(t,e),e.add(t)}function f(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function h(t,e,n){if(!e.has(t))throw new TypeError("attempted to get private field on non-instance");return n}e()(r),e()(i),e()(o),e()(a);var d=new WeakSet,p=new WeakSet,v=new WeakSet,b=new WeakSet,y=new WeakSet,w=function(){function t(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=n.gap,i=void 0===r?"5%":r,o=n.duration,a=void 0===o?"0.5s":o,s=n.interval,c=void 0===s?null:s;l(this,t),u(this,y),u(this,b),u(this,v),u(this,p),u(this,d),f(this,"slides",[]),f(this,"currentSlideInd",0),f(this,"intervalTimer",null),this.options={gap:i,duration:a,interval:c},this.carousel=e}var e,n;return e=t,(n=[{key:"initialize",value:function(){this.carousel.classList.add("carousel"),h(this,v,S).call(this),h(this,b,A).call(this),h(this,p,m).call(this)}}])&&c(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function g(){var t=this,e=new Event("click");this.intervalTimer=setInterval((function(){t.rightArrow.dispatchEvent(e)}),this.options.interval)}function m(){var t=this;this.carousel.style.gap=this.options.gap,this.carousel.querySelectorAll(".carousel__slide").forEach((function(e){e.style["transition-duration"]=t.options.duration})),null!==this.options.interval&&h(this,d,g).call(this)}function S(){var t,e=function(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(t){if("string"==typeof t)return s(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?s(t,e):void 0}}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var r=0,i=function(){};return{s:i,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,a=!0,l=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return a=t.done,t},e:function(t){l=!0,o=t},f:function(){try{a||null==n.return||n.return()}finally{if(l)throw o}}}}(this.carousel.children);try{for(e.s();!(t=e.n()).done;){var n=t.value;n.classList.add("carousel__slide"),n.firstElementChild.classList.add("carousel__image"),this.slides.push(n)}}catch(t){e.e(t)}finally{e.f()}}function A(){function t(t){var e=this;this.currentSlideInd+=t,this.intervalTimer&&(clearInterval(this.intervalTimer),h(this,d,g).call(this)),this.currentSlideInd>=this.slides.length?this.slides.forEach((function(t){t.style.transform="translateX(0)",e.currentSlideInd=0,e.leftArrow.style.display="none"})):("none"===this.leftArrow.style.display&&this.currentSlideInd>0?this.leftArrow.style.display="block":0===this.currentSlideInd&&(this.leftArrow.style.display="none"),this.slides.forEach((function(t){var n=100*e.currentSlideInd+e.currentSlideInd*parseFloat(e.options.gap);t.style.transform="translateX(-".concat(n,"%)")})))}this.leftArrow=h(this,y,_).call(this,"left-arrow",t.bind(this,-1)),this.leftArrow.style.display="none",this.rightArrow=h(this,y,_).call(this,"right-arrow",t.bind(this,1))}function _(t,e){var n=document.createElement("button");n.classList.add("carousel__".concat(t)),n.addEventListener("click",e);var r=document.createElement("div");return r.classList.add("carousel__".concat(t,"-icon")),n.appendChild(r),this.carousel.appendChild(n),n}new w(document.querySelector(".article__carousel"),{gap:"7%",duration:"0.7s",interval:"10000"}).initialize()}()}();