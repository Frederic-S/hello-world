(function(e){function t(t){for(var c,o,l=t[0],i=t[1],s=t[2],u=0,d=[];u<l.length;u++)o=l[u],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&d.push(r[o][0]),r[o]=0;for(c in i)Object.prototype.hasOwnProperty.call(i,c)&&(e[c]=i[c]);b&&b(t);while(d.length)d.shift()();return n.push.apply(n,s||[]),a()}function a(){for(var e,t=0;t<n.length;t++){for(var a=n[t],c=!0,l=1;l<a.length;l++){var i=a[l];0!==r[i]&&(c=!1)}c&&(n.splice(t--,1),e=o(o.s=a[0]))}return e}var c={},r={app:0},n=[];function o(t){if(c[t])return c[t].exports;var a=c[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=e,o.c=c,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)o.d(a,c,function(t){return e[t]}.bind(null,c));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/hello-world/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],i=l.push.bind(l);l.push=t,l=l.slice();for(var s=0;s<l.length;s++)t(l[s]);var b=i;n.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"368a":function(e,t,a){e.exports=a.p+"img/bg.537e63c2.webp"},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var c=a("7a23");function r(e,t,a,r,n,o){var l=Object(c["i"])("HelloWorld"),i=Object(c["i"])("News"),s=Object(c["i"])("Footer");return Object(c["f"])(),Object(c["c"])(c["a"],null,[Object(c["e"])(l,{msg:"Hi people"}),Object(c["e"])(i),Object(c["e"])(s)],64)}var n=a("cf05"),o=a.n(n),l=Object(c["k"])("data-v-f7a19b82");Object(c["h"])("data-v-f7a19b82");var i=Object(c["e"])("img",{id:"logo",alt:"Vue logo",src:o.a},null,-1),s={class:"welltext"},b=Object(c["e"])("p",{class:"greet"},"I'm Fred 👀",-1),u=Object(c["e"])("p",{class:"greet2"},"Web Developer",-1),d=Object(c["e"])("div",{class:"scroll"},[Object(c["e"])("a",{href:"#news"},[Object(c["e"])("h1",{class:"icon-scroll"})])],-1);Object(c["g"])();var f=l((function(e,t,a,r,n,o){return Object(c["f"])(),Object(c["c"])("div",{class:"hello",style:{backgroundImage:"url(".concat(n.backgroundUrl,")")}},[i,Object(c["e"])("div",s,[Object(c["e"])("h1",null,Object(c["j"])(a.msg),1),b,u]),d],4)})),p=a("368a"),v=a.n(p),j={name:"HelloWorld",props:{msg:String},data:function(){return{backgroundUrl:v.a}}};a("a23a");j.render=f,j.__scopeId="data-v-f7a19b82";var O=j,g=Object(c["k"])("data-v-3ca9b4e6");Object(c["h"])("data-v-3ca9b4e6");var h={class:"footer",id:"foot"},w=Object(c["d"])('<div class="icon-group" data-v-3ca9b4e6><a href="https://github.com/Frederic-S" target="_blank" data-v-3ca9b4e6><i class="fab fa-github" data-v-3ca9b4e6></i></a><a href="https://www.linkedin.com/in/fred-soloy/" target="_blank" data-v-3ca9b4e6><i class="fab fa-linkedin" data-v-3ca9b4e6></i></a><a href="https://www.instagram.com/fredericsoloy/" target="_blank" data-v-3ca9b4e6><i class="fab fa-instagram" data-v-3ca9b4e6></i></a></div><div class="legal" data-v-3ca9b4e6><span data-v-3ca9b4e6> Made with <span class="heart" data-v-3ca9b4e6>♥</span> by </span></div>',2),y={class:"copy"};Object(c["g"])();var m=g((function(e,t,a,r,n,o){return Object(c["f"])(),Object(c["c"])("footer",h,[w,Object(c["e"])("div",y,[Object(c["e"])("p",null,"Fred Soloy - © "+Object(c["j"])(n.currentYear),1)])])})),_={data:function(){return{currentYear:(new Date).getFullYear()}}};a("6c26");_.render=m,_.__scopeId="data-v-3ca9b4e6";var k=_,x=Object(c["k"])("data-v-aece96d8");Object(c["h"])("data-v-aece96d8");var S={class:"flex mb-4",id:"news"},P=Object(c["e"])("div",{class:"w-1/2 bg-gray-400 h-12"},[Object(c["e"])("h1",null,"Rebuilding the site")],-1),F=Object(c["e"])("div",{class:"w-2/2 bg-gray-500 h-12"},[Object(c["e"])("h3",null,"In progress...")],-1);Object(c["g"])();var I=x((function(e,t,a,r,n,o){return Object(c["f"])(),Object(c["c"])("div",S,[P,F])})),M={};a("d17d");M.render=I,M.__scopeId="data-v-aece96d8";var H=M,W={name:"App",components:{HelloWorld:O,Footer:k,News:H}};a("64be");W.render=r;var Y=W;Object(c["b"])(Y).mount("#app")},"64be":function(e,t,a){"use strict";a("c894")},"6c26":function(e,t,a){"use strict";a("8c90")},7390:function(e,t,a){},"8c90":function(e,t,a){},a23a:function(e,t,a){"use strict";a("7390")},c894:function(e,t,a){},cf05:function(e,t,a){e.exports=a.p+"img/logo.14f81a9b.png"},d17d:function(e,t,a){"use strict";a("f822")},f822:function(e,t,a){}});
//# sourceMappingURL=app.b31f4dbb.js.map