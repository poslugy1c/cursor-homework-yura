!function(){"use strict";var n,e,t,r,o,a,c,u,s,f,l,p,d,v,m={772:function(n,e,t){var r=t(81),o=t.n(r),a=t(645),i=t.n(a)()(o());i.push([n.id,"body {\r\n  color: rgb(19, 2, 250);\r\n  background-color: #ccdcf8;\r\n  text-align: center;\r\n}\r\n\r\n.container {\r\n  max-width: 1024px;\r\n  margin: 0 auto;\r\n  display: flex;\r\n}\r\n\r\nimg {\r\n  width: 1024px;\r\n}\r\n",""]),e.Z=i},645:function(n){n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var u=this[c][0];null!=u&&(i[u]=!0)}for(var s=0;s<n.length;s++){var f=[].concat(n[s]);r&&i[f[0]]||(void 0!==a&&(void 0===f[5]||(f[1]="@layer".concat(f[5].length>0?" ".concat(f[5]):""," {").concat(f[1],"}")),f[5]=a),t&&(f[2]?(f[1]="@media ".concat(f[2]," {").concat(f[1],"}"),f[2]=t):f[2]=t),o&&(f[4]?(f[1]="@supports (".concat(f[4],") {").concat(f[1],"}"),f[4]=o):f[4]="".concat(o)),e.push(f))}},e}},81:function(n){n.exports=function(n){return n[1]}},379:function(n){var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var a={},i=[],c=0;c<n.length;c++){var u=n[c],s=r.base?u[0]+r.base:u[0],f=a[s]||0,l="".concat(s," ").concat(f);a[s]=f+1;var p=t(l),d={css:u[1],media:u[2],sourceMap:u[3],supports:u[4],layer:u[5]};if(-1!==p)e[p].references++,e[p].updater(d);else{var v=o(d,r);r.byIndex=c,e.splice(c,0,{identifier:l,updater:v,references:1})}i.push(l)}return i}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var a=r(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var c=t(a[i]);e[c].references--}for(var u=r(n,o),s=0;s<a.length;s++){var f=t(a[s]);0===e[f].references&&(e[f].updater(),e.splice(f,1))}a=u}}},569:function(n){var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:function(n){n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:function(n,e,t){n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:function(n){n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:function(n){n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},h={};function y(n){var e=h[n];if(void 0!==e)return e.exports;var t=h[n]={id:n,exports:{}};return m[n](t,t.exports,y),t.exports}y.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return y.d(e,{a:e}),e},y.d=function(n,e){for(var t in e)y.o(e,t)&&!y.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})},y.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},y.nc=void 0,n=y(379),e=y.n(n),t=y(795),r=y.n(t),o=y(569),a=y.n(o),c=y(565),u=y.n(c),s=y(216),f=y.n(s),l=y(589),p=y.n(l),d=y(772),(v={}).styleTagTransform=p(),v.setAttributes=u(),v.insert=a().bind(null,"head"),v.domAPI=r(),v.insertStyleElement=f(),e()(d.Z,v),d.Z&&d.Z.locals&&d.Z.locals,console.log(8888),console.log(function(n,e){var t=5;for(i=1;i<3;i++)t*=5;return t+3}())}();