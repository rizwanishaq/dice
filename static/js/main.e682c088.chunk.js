(this.webpackJsonpdice=this.webpackJsonpdice||[]).push([[0],[,,,,function(e,n,t){e.exports=t(13)},,,,,function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){"use strict";t.r(n);var o=t(0),a=t.n(o),i=t(2),l=t.n(i),r=(t(9),t(10),t(3));t(11),t(12);var c=function(e){var n=e.face,t=e.rolling;return a.a.createElement("i",{className:" Die fas fa-dice-".concat(n," ").concat(t&&"shaking")})};var s=function(){var e=Object(o.useState)({die1:"one",die2:"one",rolling:!1}),n=Object(r.a)(e,2),t=n[0],i=n[1],l=["one","two","three","four","five","six"];return a.a.createElement("div",{className:"RollDice"},a.a.createElement("div",{className:"RollDice-container"},a.a.createElement(c,{face:t.die1,rolling:t.rolling}),a.a.createElement(c,{face:t.die2,rolling:t.rolling})),a.a.createElement("button",{onClick:function(){var e=l[Math.floor(Math.random()*l.length)],n=l[Math.floor(Math.random()*l.length)];i({die1:e,die2:n,rolling:!0}),setTimeout((function(){i({die1:e,die2:n,rolling:!1})}),1e3)},disabled:t.rolling},t.rolling?"Rolling...":"Roll Dice"))};var d=function(){return a.a.createElement("div",{className:"App"},a.a.createElement(s,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(a.a.createElement(d,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[4,1,2]]]);
//# sourceMappingURL=main.e682c088.chunk.js.map