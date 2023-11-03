import{j as T,r as D}from"./app-35991081.js";import{a as it}from"./index.esm-0fdc8a7f.js";const st=({items:e=[]})=>T.jsx("div",{className:"glide__bullets mt-3 flex gap-2 justify-center","data-glide-el":"controls[nav]",children:e.map((t,n)=>T.jsx("button",{className:"glide__bullet","data-glide-dir":`=${n}`,children:T.jsx(it,{id:"dot"})},n.toString()))});/*!
 * Glide.js v3.6.0
 * (c) 2013-2022 Jędrzej Chałubek (https://github.com/jedrzejchalubek/)
 * Released under the MIT License.
 */function H(e){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?H=function(t){return typeof t}:H=function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},H(e)}function M(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function $(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function L(e,t,n){return t&&$(e.prototype,t),n&&$(e,n),e}function at(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&z(e,t)}function O(e){return O=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},O(e)}function z(e,t){return z=Object.setPrototypeOf||function(r,s){return r.__proto__=s,r},z(e,t)}function ot(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function ut(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function ct(e,t){if(t&&(typeof t=="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return ut(e)}function ft(e){var t=ot();return function(){var r=O(e),s;if(t){var i=O(this).constructor;s=Reflect.construct(r,arguments,i)}else s=r.apply(this,arguments);return ct(this,s)}}function lt(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&(e=O(e),e!==null););return e}function P(){return typeof Reflect<"u"&&Reflect.get?P=Reflect.get:P=function(t,n,r){var s=lt(t,n);if(s){var i=Object.getOwnPropertyDescriptor(s,n);return i.get?i.get.call(arguments.length<3?t:r):i.value}},P.apply(this,arguments)}var dt={type:"slider",startAt:0,perView:1,focusAt:0,gap:10,autoplay:!1,hoverpause:!0,keyboard:!0,bound:!1,swipeThreshold:80,dragThreshold:120,perSwipe:"",touchRatio:.5,touchAngle:45,animationDuration:400,rewind:!0,rewindDuration:800,animationTimingFunc:"cubic-bezier(.165, .840, .440, 1)",waitForTransition:!0,throttle:10,direction:"ltr",peek:0,cloningRatio:1,breakpoints:{},classes:{swipeable:"glide--swipeable",dragging:"glide--dragging",direction:{ltr:"glide--ltr",rtl:"glide--rtl"},type:{slider:"glide--slider",carousel:"glide--carousel"},slide:{clone:"glide__slide--clone",active:"glide__slide--active"},arrow:{disabled:"glide__arrow--disabled"},nav:{active:"glide__bullet--active"}}};function y(e){console.error("[Glide warn]: ".concat(e))}function m(e){return parseInt(e)}function ht(e){return parseFloat(e)}function N(e){return typeof e=="string"}function R(e){var t=H(e);return t==="function"||t==="object"&&!!e}function B(e){return typeof e=="function"}function G(e){return typeof e>"u"}function I(e){return e.constructor===Array}function gt(e,t,n){var r={};for(var s in t)B(t[s])?r[s]=t[s](e,r,n):y("Extension must be a function");for(var i in r)B(r[i].mount)&&r[i].mount();return r}function h(e,t,n){Object.defineProperty(e,t,n)}function vt(e){return Object.keys(e).sort().reduce(function(t,n){return t[n]=e[n],t[n],t},{})}function E(e,t){var n=Object.assign({},e,t);return t.hasOwnProperty("classes")&&(n.classes=Object.assign({},e.classes,t.classes),t.classes.hasOwnProperty("direction")&&(n.classes.direction=Object.assign({},e.classes.direction,t.classes.direction)),t.classes.hasOwnProperty("type")&&(n.classes.type=Object.assign({},e.classes.type,t.classes.type)),t.classes.hasOwnProperty("slide")&&(n.classes.slide=Object.assign({},e.classes.slide,t.classes.slide)),t.classes.hasOwnProperty("arrow")&&(n.classes.arrow=Object.assign({},e.classes.arrow,t.classes.arrow)),t.classes.hasOwnProperty("nav")&&(n.classes.nav=Object.assign({},e.classes.nav,t.classes.nav))),t.hasOwnProperty("breakpoints")&&(n.breakpoints=Object.assign({},e.breakpoints,t.breakpoints)),n}var mt=function(){function e(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};M(this,e),this.events=t,this.hop=t.hasOwnProperty}return L(e,[{key:"on",value:function(n,r){if(I(n)){for(var s=0;s<n.length;s++)this.on(n[s],r);return}this.hop.call(this.events,n)||(this.events[n]=[]);var i=this.events[n].push(r)-1;return{remove:function(){delete this.events[n][i]}}}},{key:"emit",value:function(n,r){if(I(n)){for(var s=0;s<n.length;s++)this.emit(n[s],r);return}this.hop.call(this.events,n)&&this.events[n].forEach(function(i){i(r||{})})}}]),e}(),pt=function(){function e(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};M(this,e),this._c={},this._t=[],this._e=new mt,this.disabled=!1,this.selector=t,this.settings=E(dt,n),this.index=this.settings.startAt}return L(e,[{key:"mount",value:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return this._e.emit("mount.before"),R(n)?this._c=gt(this,n,this._e):y("You need to provide a object on `mount()`"),this._e.emit("mount.after"),this}},{key:"mutate",value:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];return I(n)?this._t=n:y("You need to provide a array on `mutate()`"),this}},{key:"update",value:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return this.settings=E(this.settings,n),n.hasOwnProperty("startAt")&&(this.index=n.startAt),this._e.emit("update"),this}},{key:"go",value:function(n){return this._c.Run.make(n),this}},{key:"move",value:function(n){return this._c.Transition.disable(),this._c.Move.make(n),this}},{key:"destroy",value:function(){return this._e.emit("destroy"),this}},{key:"play",value:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1;return n&&(this.settings.autoplay=n),this._e.emit("play"),this}},{key:"pause",value:function(){return this._e.emit("pause"),this}},{key:"disable",value:function(){return this.disabled=!0,this}},{key:"enable",value:function(){return this.disabled=!1,this}},{key:"on",value:function(n,r){return this._e.on(n,r),this}},{key:"isType",value:function(n){return this.settings.type===n}},{key:"settings",get:function(){return this._o},set:function(n){R(n)?this._o=n:y("Options must be an `object` instance.")}},{key:"index",get:function(){return this._i},set:function(n){this._i=m(n)}},{key:"type",get:function(){return this.settings.type}},{key:"disabled",get:function(){return this._d},set:function(n){this._d=!!n}}]),e}();function yt(e,t,n){var r={mount:function(){this._o=!1},make:function(f){var c=this;e.disabled||(!e.settings.waitForTransition||e.disable(),this.move=f,n.emit("run.before",this.move),this.calculate(),n.emit("run",this.move),t.Transition.after(function(){c.isStart()&&n.emit("run.start",c.move),c.isEnd()&&n.emit("run.end",c.move),c.isOffset()&&(c._o=!1,n.emit("run.offset",c.move)),n.emit("run.after",c.move),e.enable()}))},calculate:function(){var f=this.move,c=this.length,d=f.steps,l=f.direction,g=1;if(l==="="){if(e.settings.bound&&m(d)>c){e.index=c;return}e.index=d;return}if(l===">"&&d===">"){e.index=c;return}if(l==="<"&&d==="<"){e.index=0;return}if(l==="|"&&(g=e.settings.perView||1),l===">"||l==="|"&&d===">"){var p=s(g);p>c&&(this._o=!0),e.index=i(p,g);return}if(l==="<"||l==="|"&&d==="<"){var v=a(g);v<0&&(this._o=!0),e.index=o(v,g);return}y("Invalid direction pattern [".concat(l).concat(d,"] has been used"))},isStart:function(){return e.index<=0},isEnd:function(){return e.index>=this.length},isOffset:function(){var f=arguments.length>0&&arguments[0]!==void 0?arguments[0]:void 0;return f?this._o?f==="|>"?this.move.direction==="|"&&this.move.steps===">":f==="|<"?this.move.direction==="|"&&this.move.steps==="<":this.move.direction===f:!1:this._o},isBound:function(){return e.isType("slider")&&e.settings.focusAt!=="center"&&e.settings.bound}};function s(u){var f=e.index;return e.isType("carousel")?f+u:f+(u-f%u)}function i(u,f){var c=r.length;return u<=c?u:e.isType("carousel")?u-(c+1):e.settings.rewind?r.isBound()&&!r.isEnd()?c:0:r.isBound()?c:Math.floor(c/f)*f}function a(u){var f=e.index;if(e.isType("carousel"))return f-u;var c=Math.ceil(f/u);return(c-1)*u}function o(u,f){var c=r.length;return u>=0?u:e.isType("carousel")?u+(c+1):e.settings.rewind?r.isBound()&&r.isStart()?c:Math.floor(c/f)*f:0}return h(r,"move",{get:function(){return this._m},set:function(f){var c=f.substr(1);this._m={direction:f.substr(0,1),steps:c?m(c)?m(c):c:0}}}),h(r,"length",{get:function(){var f=e.settings,c=t.Html.slides.length;return this.isBound()?c-1-(m(f.perView)-1)+m(f.focusAt):c-1}}),h(r,"offset",{get:function(){return this._o}}),r}function K(){return new Date().getTime()}function j(e,t,n){var r,s,i,a,o=0;n||(n={});var u=function(){o=n.leading===!1?0:K(),r=null,a=e.apply(s,i),r||(s=i=null)},f=function(){var d=K();!o&&n.leading===!1&&(o=d);var l=t-(d-o);return s=this,i=arguments,l<=0||l>t?(r&&(clearTimeout(r),r=null),o=d,a=e.apply(s,i),r||(s=i=null)):!r&&n.trailing!==!1&&(r=setTimeout(u,l)),a};return f.cancel=function(){clearTimeout(r),o=0,r=s=i=null},f}var x={ltr:["marginLeft","marginRight"],rtl:["marginRight","marginLeft"]};function bt(e,t,n){var r={apply:function(i){for(var a=0,o=i.length;a<o;a++){var u=i[a].style,f=t.Direction.value;a!==0?u[x[f][0]]="".concat(this.value/2,"px"):u[x[f][0]]="",a!==i.length-1?u[x[f][1]]="".concat(this.value/2,"px"):u[x[f][1]]=""}},remove:function(i){for(var a=0,o=i.length;a<o;a++){var u=i[a].style;u.marginLeft="",u.marginRight=""}}};return h(r,"value",{get:function(){return m(e.settings.gap)}}),h(r,"grow",{get:function(){return r.value*t.Sizes.length}}),h(r,"reductor",{get:function(){var i=e.settings.perView;return r.value*(i-1)/i}}),n.on(["build.after","update"],j(function(){r.apply(t.Html.wrapper.children)},30)),n.on("destroy",function(){r.remove(t.Html.wrapper.children)}),r}function tt(e){if(e&&e.parentNode){for(var t=e.parentNode.firstChild,n=[];t;t=t.nextSibling)t.nodeType===1&&t!==e&&n.push(t);return n}return[]}function X(e){return!!(e&&e instanceof window.HTMLElement)}function V(e){return Array.prototype.slice.call(e)}var Y='[data-glide-el="track"]';function wt(e,t,n){var r={mount:function(){this.root=e.selector,this.track=this.root.querySelector(Y),this.collectSlides()},collectSlides:function(){this.slides=V(this.wrapper.children).filter(function(i){return!i.classList.contains(e.settings.classes.slide.clone)})}};return h(r,"root",{get:function(){return r._r},set:function(i){N(i)&&(i=document.querySelector(i)),X(i)?r._r=i:y("Root element must be a existing Html node")}}),h(r,"track",{get:function(){return r._t},set:function(i){X(i)?r._t=i:y("Could not find track element. Please use ".concat(Y," attribute."))}}),h(r,"wrapper",{get:function(){return r.track.children[0]}}),n.on("update",function(){r.collectSlides()}),r}function _t(e,t,n){var r={mount:function(){this.value=e.settings.peek}};return h(r,"value",{get:function(){return r._v},set:function(i){R(i)?(i.before=m(i.before),i.after=m(i.after)):i=m(i),r._v=i}}),h(r,"reductor",{get:function(){var i=r.value,a=e.settings.perView;return R(i)?i.before/a+i.after/a:i*2/a}}),n.on(["resize","update"],function(){r.mount()}),r}function St(e,t,n){var r={mount:function(){this._o=0},make:function(){var i=this,a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0;this.offset=a,n.emit("move",{movement:this.value}),t.Transition.after(function(){n.emit("move.after",{movement:i.value})})}};return h(r,"offset",{get:function(){return r._o},set:function(i){r._o=G(i)?0:m(i)}}),h(r,"translate",{get:function(){return t.Sizes.slideWidth*e.index}}),h(r,"value",{get:function(){var i=this.offset,a=this.translate;return t.Direction.is("rtl")?a+i:a-i}}),n.on(["build.before","run"],function(){r.make()}),r}function kt(e,t,n){var r={setupSlides:function(){for(var i="".concat(this.slideWidth,"px"),a=t.Html.slides,o=0;o<a.length;o++)a[o].style.width=i},setupWrapper:function(){t.Html.wrapper.style.width="".concat(this.wrapperSize,"px")},remove:function(){for(var i=t.Html.slides,a=0;a<i.length;a++)i[a].style.width="";t.Html.wrapper.style.width=""}};return h(r,"length",{get:function(){return t.Html.slides.length}}),h(r,"width",{get:function(){return t.Html.track.offsetWidth}}),h(r,"wrapperSize",{get:function(){return r.slideWidth*r.length+t.Gaps.grow+t.Clones.grow}}),h(r,"slideWidth",{get:function(){return r.width/e.settings.perView-t.Peek.reductor-t.Gaps.reductor}}),n.on(["build.before","resize","update"],function(){r.setupSlides(),r.setupWrapper()}),n.on("destroy",function(){r.remove()}),r}function Tt(e,t,n){var r={mount:function(){n.emit("build.before"),this.typeClass(),this.activeClass(),n.emit("build.after")},typeClass:function(){t.Html.root.classList.add(e.settings.classes.type[e.settings.type])},activeClass:function(){var i=e.settings.classes,a=t.Html.slides[e.index];a&&(a.classList.add(i.slide.active),tt(a).forEach(function(o){o.classList.remove(i.slide.active)}))},removeClasses:function(){var i=e.settings.classes,a=i.type,o=i.slide;t.Html.root.classList.remove(a[e.settings.type]),t.Html.slides.forEach(function(u){u.classList.remove(o.active)})}};return n.on(["destroy","update"],function(){r.removeClasses()}),n.on(["resize","update"],function(){r.mount()}),n.on("move.after",function(){r.activeClass()}),r}function Ot(e,t,n){var r={mount:function(){this.items=[],e.isType("carousel")&&(this.items=this.collect())},collect:function(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],a=t.Html.slides,o=e.settings,u=o.perView,f=o.classes,c=o.cloningRatio;if(a.length!==0)for(var d=+!!e.settings.peek,l=u+d+Math.round(u/2),g=a.slice(0,l).reverse(),p=a.slice(l*-1),v=0;v<Math.max(c,Math.floor(u/a.length));v++){for(var b=0;b<g.length;b++){var w=g[b].cloneNode(!0);w.classList.add(f.slide.clone),i.push(w)}for(var _=0;_<p.length;_++){var k=p[_].cloneNode(!0);k.classList.add(f.slide.clone),i.unshift(k)}}return i},append:function(){for(var i=this.items,a=t.Html,o=a.wrapper,u=a.slides,f=Math.floor(i.length/2),c=i.slice(0,f).reverse(),d=i.slice(f*-1).reverse(),l="".concat(t.Sizes.slideWidth,"px"),g=0;g<d.length;g++)o.appendChild(d[g]);for(var p=0;p<c.length;p++)o.insertBefore(c[p],u[0]);for(var v=0;v<i.length;v++)i[v].style.width=l},remove:function(){for(var i=this.items,a=0;a<i.length;a++)t.Html.wrapper.removeChild(i[a])}};return h(r,"grow",{get:function(){return(t.Sizes.slideWidth+t.Gaps.value)*r.items.length}}),n.on("update",function(){r.remove(),r.mount(),r.append()}),n.on("build.before",function(){e.isType("carousel")&&r.append()}),n.on("destroy",function(){r.remove()}),r}var S=function(){function e(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};M(this,e),this.listeners=t}return L(e,[{key:"on",value:function(n,r,s){var i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!1;N(n)&&(n=[n]);for(var a=0;a<n.length;a++)this.listeners[n[a]]=s,r.addEventListener(n[a],this.listeners[n[a]],i)}},{key:"off",value:function(n,r){var s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1;N(n)&&(n=[n]);for(var i=0;i<n.length;i++)r.removeEventListener(n[i],this.listeners[n[i]],s)}},{key:"destroy",value:function(){delete this.listeners}}]),e}();function Rt(e,t,n){var r=new S,s={mount:function(){this.bind()},bind:function(){r.on("resize",window,j(function(){n.emit("resize")},e.settings.throttle))},unbind:function(){r.off("resize",window)}};return n.on("destroy",function(){s.unbind(),r.destroy()}),s}var xt=["ltr","rtl"],At={">":"<","<":">","=":"="};function Ht(e,t,n){var r={mount:function(){this.value=e.settings.direction},resolve:function(i){var a=i.slice(0,1);return this.is("rtl")?i.split(a).join(At[a]):i},is:function(i){return this.value===i},addClass:function(){t.Html.root.classList.add(e.settings.classes.direction[this.value])},removeClass:function(){t.Html.root.classList.remove(e.settings.classes.direction[this.value])}};return h(r,"value",{get:function(){return r._v},set:function(i){xt.indexOf(i)>-1?r._v=i:y("Direction value must be `ltr` or `rtl`")}}),n.on(["destroy","update"],function(){r.removeClass()}),n.on("update",function(){r.mount()}),n.on(["build.before","update"],function(){r.addClass()}),r}function Pt(e,t){return{modify:function(r){return t.Direction.is("rtl")?-r:r}}}function Bt(e,t){return{modify:function(r){var s=Math.floor(r/t.Sizes.slideWidth);return r+t.Gaps.value*s}}}function Mt(e,t){return{modify:function(r){return r+t.Clones.grow/2}}}function Lt(e,t){return{modify:function(r){if(e.settings.focusAt>=0){var s=t.Peek.value;return R(s)?r-s.before:r-s}return r}}}function jt(e,t){return{modify:function(r){var s=t.Gaps.value,i=t.Sizes.width,a=e.settings.focusAt,o=t.Sizes.slideWidth;return a==="center"?r-(i/2-o/2):r-o*a-s*a}}}function Dt(e,t,n){var r=[Bt,Mt,Lt,jt].concat(e._t,[Pt]);return{mutate:function(i){for(var a=0;a<r.length;a++){var o=r[a];B(o)&&B(o().modify)?i=o(e,t,n).modify(i):y("Transformer should be a function that returns an object with `modify()` method")}return i}}}function zt(e,t,n){var r={set:function(i){var a=Dt(e,t).mutate(i),o="translate3d(".concat(-1*a,"px, 0px, 0px)");t.Html.wrapper.style.mozTransform=o,t.Html.wrapper.style.webkitTransform=o,t.Html.wrapper.style.transform=o},remove:function(){t.Html.wrapper.style.transform=""},getStartIndex:function(){var i=t.Sizes.length,a=e.index,o=e.settings.perView;return t.Run.isOffset(">")||t.Run.isOffset("|>")?i+(a-o):(a+o)%i},getTravelDistance:function(){var i=t.Sizes.slideWidth*e.settings.perView;return t.Run.isOffset(">")||t.Run.isOffset("|>")?i*-1:i}};return n.on("move",function(s){if(!e.isType("carousel")||!t.Run.isOffset())return r.set(s.movement);t.Transition.after(function(){n.emit("translate.jump"),r.set(t.Sizes.slideWidth*e.index)});var i=t.Sizes.slideWidth*t.Translate.getStartIndex();return r.set(i-t.Translate.getTravelDistance())}),n.on("destroy",function(){r.remove()}),r}function Nt(e,t,n){var r=!1,s={compose:function(a){var o=e.settings;return r?"".concat(a," 0ms ").concat(o.animationTimingFunc):"".concat(a," ").concat(this.duration,"ms ").concat(o.animationTimingFunc)},set:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"transform";t.Html.wrapper.style.transition=this.compose(a)},remove:function(){t.Html.wrapper.style.transition=""},after:function(a){setTimeout(function(){a()},this.duration)},enable:function(){r=!1,this.set()},disable:function(){r=!0,this.set()}};return h(s,"duration",{get:function(){var a=e.settings;return e.isType("slider")&&t.Run.offset?a.rewindDuration:a.animationDuration}}),n.on("move",function(){s.set()}),n.on(["build.before","resize","translate.jump"],function(){s.disable()}),n.on("run",function(){s.enable()}),n.on("destroy",function(){s.remove()}),s}var et=!1;try{var U=Object.defineProperty({},"passive",{get:function(){et=!0}});window.addEventListener("testPassive",null,U),window.removeEventListener("testPassive",null,U)}catch{}var W=et,A=["touchstart","mousedown"],J=["touchmove","mousemove"],Q=["touchend","touchcancel","mouseup","mouseleave"],Z=["mousedown","mousemove","mouseup","mouseleave"];function It(e,t,n){var r=new S,s=0,i=0,a=0,o=!1,u=W?{passive:!0}:!1,f={mount:function(){this.bindSwipeStart()},start:function(d){if(!o&&!e.disabled){this.disable();var l=this.touches(d);s=null,i=m(l.pageX),a=m(l.pageY),this.bindSwipeMove(),this.bindSwipeEnd(),n.emit("swipe.start")}},move:function(d){if(!e.disabled){var l=e.settings,g=l.touchAngle,p=l.touchRatio,v=l.classes,b=this.touches(d),w=m(b.pageX)-i,_=m(b.pageY)-a,k=Math.abs(w<<2),q=Math.abs(_<<2),nt=Math.sqrt(k+q),rt=Math.sqrt(q);if(s=Math.asin(rt/nt),s*180/Math.PI<g)d.stopPropagation(),t.Move.make(w*ht(p)),t.Html.root.classList.add(v.dragging),n.emit("swipe.move");else return!1}},end:function(d){if(!e.disabled){var l=e.settings,g=l.perSwipe,p=l.touchAngle,v=l.classes,b=this.touches(d),w=this.threshold(d),_=b.pageX-i,k=s*180/Math.PI;this.enable(),_>w&&k<p?t.Run.make(t.Direction.resolve("".concat(g,"<"))):_<-w&&k<p?t.Run.make(t.Direction.resolve("".concat(g,">"))):t.Move.make(),t.Html.root.classList.remove(v.dragging),this.unbindSwipeMove(),this.unbindSwipeEnd(),n.emit("swipe.end")}},bindSwipeStart:function(){var d=this,l=e.settings,g=l.swipeThreshold,p=l.dragThreshold;g&&r.on(A[0],t.Html.wrapper,function(v){d.start(v)},u),p&&r.on(A[1],t.Html.wrapper,function(v){d.start(v)},u)},unbindSwipeStart:function(){r.off(A[0],t.Html.wrapper,u),r.off(A[1],t.Html.wrapper,u)},bindSwipeMove:function(){var d=this;r.on(J,t.Html.wrapper,j(function(l){d.move(l)},e.settings.throttle),u)},unbindSwipeMove:function(){r.off(J,t.Html.wrapper,u)},bindSwipeEnd:function(){var d=this;r.on(Q,t.Html.wrapper,function(l){d.end(l)})},unbindSwipeEnd:function(){r.off(Q,t.Html.wrapper)},touches:function(d){return Z.indexOf(d.type)>-1?d:d.touches[0]||d.changedTouches[0]},threshold:function(d){var l=e.settings;return Z.indexOf(d.type)>-1?l.dragThreshold:l.swipeThreshold},enable:function(){return o=!1,t.Transition.enable(),this},disable:function(){return o=!0,t.Transition.disable(),this}};return n.on("build.after",function(){t.Html.root.classList.add(e.settings.classes.swipeable)}),n.on("destroy",function(){f.unbindSwipeStart(),f.unbindSwipeMove(),f.unbindSwipeEnd(),r.destroy()}),f}function Et(e,t,n){var r=new S,s={mount:function(){this.bind()},bind:function(){r.on("dragstart",t.Html.wrapper,this.dragstart)},unbind:function(){r.off("dragstart",t.Html.wrapper)},dragstart:function(a){a.preventDefault()}};return n.on("destroy",function(){s.unbind(),r.destroy()}),s}function Vt(e,t,n){var r=new S,s=!1,i=!1,a={mount:function(){this._a=t.Html.wrapper.querySelectorAll("a"),this.bind()},bind:function(){r.on("click",t.Html.wrapper,this.click)},unbind:function(){r.off("click",t.Html.wrapper)},click:function(u){i&&(u.stopPropagation(),u.preventDefault())},detach:function(){if(i=!0,!s){for(var u=0;u<this.items.length;u++)this.items[u].draggable=!1;s=!0}return this},attach:function(){if(i=!1,s){for(var u=0;u<this.items.length;u++)this.items[u].draggable=!0;s=!1}return this}};return h(a,"items",{get:function(){return a._a}}),n.on("swipe.move",function(){a.detach()}),n.on("swipe.end",function(){t.Transition.after(function(){a.attach()})}),n.on("destroy",function(){a.attach(),a.unbind(),r.destroy()}),a}var Wt='[data-glide-el="controls[nav]"]',F='[data-glide-el^="controls"]',Ft="".concat(F,' [data-glide-dir*="<"]'),qt="".concat(F,' [data-glide-dir*=">"]');function $t(e,t,n){var r=new S,s=W?{passive:!0}:!1,i={mount:function(){this._n=t.Html.root.querySelectorAll(Wt),this._c=t.Html.root.querySelectorAll(F),this._arrowControls={previous:t.Html.root.querySelectorAll(Ft),next:t.Html.root.querySelectorAll(qt)},this.addBindings()},setActive:function(){for(var o=0;o<this._n.length;o++)this.addClass(this._n[o].children)},removeActive:function(){for(var o=0;o<this._n.length;o++)this.removeClass(this._n[o].children)},addClass:function(o){var u=e.settings,f=o[e.index];f&&f&&(f.classList.add(u.classes.nav.active),tt(f).forEach(function(c){c.classList.remove(u.classes.nav.active)}))},removeClass:function(o){var u=o[e.index];u&&u.classList.remove(e.settings.classes.nav.active)},setArrowState:function(){if(!e.settings.rewind){var o=i._arrowControls.next,u=i._arrowControls.previous;this.resetArrowState(o,u),e.index===0&&this.disableArrow(u),e.index===t.Run.length&&this.disableArrow(o)}},resetArrowState:function(){for(var o=e.settings,u=arguments.length,f=new Array(u),c=0;c<u;c++)f[c]=arguments[c];f.forEach(function(d){V(d).forEach(function(l){l.classList.remove(o.classes.arrow.disabled)})})},disableArrow:function(){for(var o=e.settings,u=arguments.length,f=new Array(u),c=0;c<u;c++)f[c]=arguments[c];f.forEach(function(d){V(d).forEach(function(l){l.classList.add(o.classes.arrow.disabled)})})},addBindings:function(){for(var o=0;o<this._c.length;o++)this.bind(this._c[o].children)},removeBindings:function(){for(var o=0;o<this._c.length;o++)this.unbind(this._c[o].children)},bind:function(o){for(var u=0;u<o.length;u++)r.on("click",o[u],this.click),r.on("touchstart",o[u],this.click,s)},unbind:function(o){for(var u=0;u<o.length;u++)r.off(["click","touchstart"],o[u])},click:function(o){!W&&o.type==="touchstart"&&o.preventDefault();var u=o.currentTarget.getAttribute("data-glide-dir");t.Run.make(t.Direction.resolve(u))}};return h(i,"items",{get:function(){return i._c}}),n.on(["mount.after","move.after"],function(){i.setActive()}),n.on(["mount.after","run"],function(){i.setArrowState()}),n.on("destroy",function(){i.removeBindings(),i.removeActive(),r.destroy()}),i}function Kt(e,t,n){var r=new S,s={mount:function(){e.settings.keyboard&&this.bind()},bind:function(){r.on("keyup",document,this.press)},unbind:function(){r.off("keyup",document)},press:function(a){var o=e.settings.perSwipe;a.code==="ArrowRight"&&t.Run.make(t.Direction.resolve("".concat(o,">"))),a.code==="ArrowLeft"&&t.Run.make(t.Direction.resolve("".concat(o,"<")))}};return n.on(["destroy","update"],function(){s.unbind()}),n.on("update",function(){s.mount()}),n.on("destroy",function(){r.destroy()}),s}function Xt(e,t,n){var r=new S,s={mount:function(){this.enable(),this.start(),e.settings.hoverpause&&this.bind()},enable:function(){this._e=!0},disable:function(){this._e=!1},start:function(){var a=this;this._e&&(this.enable(),e.settings.autoplay&&G(this._i)&&(this._i=setInterval(function(){a.stop(),t.Run.make(">"),a.start(),n.emit("autoplay")},this.time)))},stop:function(){this._i=clearInterval(this._i)},bind:function(){var a=this;r.on("mouseover",t.Html.root,function(){a._e&&a.stop()}),r.on("mouseout",t.Html.root,function(){a._e&&a.start()})},unbind:function(){r.off(["mouseover","mouseout"],t.Html.root)}};return h(s,"time",{get:function(){var a=t.Html.slides[e.index].getAttribute("data-glide-autoplay");return m(a||e.settings.autoplay)}}),n.on(["destroy","update"],function(){s.unbind()}),n.on(["run.before","swipe.start","update"],function(){s.stop()}),n.on(["pause","destroy"],function(){s.disable(),s.stop()}),n.on(["run.after","swipe.end"],function(){s.start()}),n.on(["play"],function(){s.enable(),s.start()}),n.on("update",function(){s.mount()}),n.on("destroy",function(){r.destroy()}),s}function C(e){return R(e)?vt(e):(y("Breakpoints option must be an object"),{})}function Yt(e,t,n){var r=new S,s=e.settings,i=C(s.breakpoints),a=Object.assign({},s),o={match:function(f){if(typeof window.matchMedia<"u"){for(var c in f)if(f.hasOwnProperty(c)&&window.matchMedia("(max-width: ".concat(c,"px)")).matches)return f[c]}return a}};return Object.assign(s,o.match(i)),r.on("resize",window,j(function(){e.settings=E(s,o.match(i))},e.settings.throttle)),n.on("update",function(){i=C(i),a=Object.assign({},s)}),n.on("destroy",function(){r.off("resize",window)}),o}var Ut={Html:wt,Translate:zt,Transition:Nt,Direction:Ht,Peek:_t,Sizes:kt,Gaps:bt,Move:St,Clones:Ot,Resize:Rt,Build:Tt,Run:yt,Swipe:It,Images:Et,Anchors:Vt,Controls:$t,Keyboard:Kt,Autoplay:Xt,Breakpoints:Yt},Jt=function(e){at(n,e);var t=ft(n);function n(){return M(this,n),t.apply(this,arguments)}return L(n,[{key:"mount",value:function(){var s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return P(O(n.prototype),"mount",this).call(this,Object.assign({},Ut,s))}}]),n}(pt);const Ct=({children:e,id:t,items:n,perView:r=2,autoplay:s=2e3})=>{const[i,a]=D.useState(null),o={gap:20,perView:r,startAt:0,autoplay:s,breakpoints:{1200:{perView:1}},type:"carousel"};return D.useEffect(()=>{a(new Jt(`.${t}`,o))},[]),D.useEffect(()=>(i&&i.mount(),()=>{i&&a(null)}),[i]),T.jsxs("div",{children:[T.jsx("div",{className:"glide__track relative z-0 ","data-glide-el":"track",children:T.jsx("ul",{className:"glide__slides ",children:e})}),T.jsx(st,{items:n})]})};export{Ct as C};