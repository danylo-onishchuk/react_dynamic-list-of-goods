(this["webpackJsonpreact_dynamic-list-of-goods"]=this["webpackJsonpreact_dynamic-list-of-goods"]||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),r=n(2),i=n.n(r),l=n(3),c=n(4),u=n(6),s=n(5),f=(n(12),"https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json");function h(){return fetch(f).then((function(e){return e.json()}))}function d(){return fetch(f).then((function(e){return e.json()})).then((function(e){return e.sort((function(e,t){return e.name.localeCompare(t.name)}))})).then((function(e){return e.slice(0,5)}))}function m(){return fetch(f).then((function(e){return e.json()})).then((function(e){return e.filter((function(e){return"red"===e.color}))}))}n(13);var b=function(e){var t=e.handleGetAll,n=e.handleGetFive,o=e.handleGetRed;return a.a.createElement("div",{className:"buttons"},a.a.createElement("button",{type:"button",onClick:t},"All goods"),a.a.createElement("button",{type:"button",onClick:n},"5 first goods"),a.a.createElement("button",{type:"button",onClick:o},"Red goods"))},v=function(e){var t=e.visible;return a.a.createElement("ul",null,t.map((function(e){return a.a.createElement("li",{key:e.id,style:{color:e.color}},e.name)})))},p=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(l.a)(this,n);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={visible:[]},e.handleGetAll=function(){h().then((function(t){e.setState({visible:t})}))},e.handleGetFive=function(){d().then((function(t){e.setState({visible:t})}))},e.handleGetRed=function(){m().then((function(t){e.setState({visible:t})}))},e}return Object(c.a)(n,[{key:"render",value:function(){var e=this.state.visible;return a.a.createElement(a.a.Fragment,null,a.a.createElement("h1",null,"Dynamic list of Goods"),a.a.createElement(b,{handleGetAll:this.handleGetAll,handleGetFive:this.handleGetFive,handleGetRed:this.handleGetRed}),a.a.createElement(v,{visible:e}))}}]),n}(o.PureComponent);i.a.render(a.a.createElement(p,null),document.getElementById("root"))},7:function(e,t,n){e.exports=n(14)}},[[7,1,2]]]);
//# sourceMappingURL=main.57ff3ce9.chunk.js.map