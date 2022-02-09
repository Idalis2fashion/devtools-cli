/*
 *  Copyright 2020 Adobe Systems Incorporated. All rights reserved.
 *  This file is licensed to you under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License. You may obtain a copy
 *  of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software distributed under
 *  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 *  OF ANY KIND, either express or implied. See the License for the specific language
 *  governing permissions and limitations under the License.
 *
 */

var GET_LOCATION = "function(){return function(){var g=this;function h(a,b){function e(){}e.prototype=b.prototype;a.c=b.prototype;a.prototype=new e};function i(a){this.stack=Error().stack||\"\";if(a)this.message=String(a)}h(i,Error);function j(a){for(var b=1;b<arguments.length;b++)var e=String(arguments[b]).replace(/\\$/g,\"$$$$\"),a=a.replace(/\\%s/,e);return a};h(function(a,b){b.unshift(a);i.call(this,j.apply(null,b));b.shift();this.b=a},i);var k;function l(a,b){this.x=a!==void 0?a:0;this.y=b!==void 0?b:0}l.prototype.toString=function(){return\"(\"+this.x+\", \"+this.y+\")\"};function m(a){return a.nodeType==9?a:a.ownerDocument||a.document}function n(a){this.a=a||g.document||document};function o(a){var b;a:{b=m(a);if(b.defaultView&&b.defaultView.getComputedStyle&&(b=b.defaultView.getComputedStyle(a,null))){b=b.position||b.getPropertyValue(\"position\");break a}b=\"\"}return b||(a.currentStyle?a.currentStyle.position:null)||a.style&&a.style.position}\nfunction p(a){for(var b=m(a),e=o(a),c=e==\"fixed\"||e==\"absolute\",a=a.parentNode;a&&a!=b;a=a.parentNode)if(e=o(a),c=c&&e==\"static\"&&a!=b.documentElement&&a!=b.body,!c&&(a.scrollWidth>a.clientWidth||a.scrollHeight>a.clientHeight||e==\"fixed\"||e==\"absolute\"||e==\"relative\"))return a;return null};function q(a){var b=m(a),e=o(a),c=new l(0,0),f=(b?b.nodeType==9?b:m(b):document).documentElement;if(a==f)return c;if(a.getBoundingClientRect)a=a.getBoundingClientRect(),f=(b?new n(m(b)):k||(k=new n)).a,b=f.body,f=f.parentWindow||f.defaultView,b=new l(f.pageXOffset||b.scrollLeft,f.pageYOffset||b.scrollTop),c.x=a.left+b.x,c.y=a.top+b.y;else if(b.getBoxObjectFor)a=b.getBoxObjectFor(a),b=b.getBoxObjectFor(f),c.x=a.screenX-b.screenX,c.y=a.screenY-b.screenY;else{var d=a;do{c.x+=d.offsetLeft;c.y+=d.offsetTop;\nd!=a&&(c.x+=d.clientLeft||0,c.y+=d.clientTop||0);if(o(d)==\"fixed\"){c.x+=b.body.scrollLeft;c.y+=b.body.scrollTop;break}d=d.offsetParent}while(d&&d!=a);e==\"absolute\"&&(c.y-=b.body.offsetTop);for(d=a;(d=p(d))&&d!=b.body&&d!=f;)c.x-=d.scrollLeft,c.y-=d.scrollTop}return c}var r=\"_\".split(\".\"),s=g;!(r[0]in s)&&s.execScript&&s.execScript(\"var \"+r[0]);for(var t;r.length&&(t=r.shift());)!r.length&&q!==void 0?s[t]=q:s=s[t]?s[t]:s[t]={};; return this._.apply(null,arguments);}.apply({navigator:typeof window!='undefined'?window.navigator:null}, arguments);}";
module.exports = GET_LOCATION;