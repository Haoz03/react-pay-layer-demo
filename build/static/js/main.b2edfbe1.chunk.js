(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,n){e.exports=n(18)},16:function(e,t,n){},17:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),o=n(3),s=n.n(o),l=(n(16),n(4)),c=n(5),r=n(9),u=n(6),d=n(1),h=n(10),f=n(7),p=n.n(f),y=(n(17),n(8)),m=n.n(y),b=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(r.a)(this,Object(u.a)(t).call(this,e))).onRef=function(e){n.payLayer=e},n.state={layerVisibility:!1,password:"123456"},n.showLayer=n.showLayer.bind(Object(d.a)(n)),n.handleClose=n.handleClose.bind(Object(d.a)(n)),n.forgetClickEvent=n.forgetClickEvent.bind(Object(d.a)(n)),n.inputEnd=n.inputEnd.bind(Object(d.a)(n)),n}return Object(h.a)(t,e),Object(c.a)(t,[{key:"showLayer",value:function(){this.setState({layerVisibility:!0})}},{key:"handleClose",value:function(){this.setState({layerVisibility:!1})}},{key:"forgetClickEvent",value:function(){alert("\u70b9\u51fb\u4e86\u5fd8\u8bb0\u5bc6\u7801")}},{key:"inputEnd",value:function(e){var t=this,n=setTimeout(function(){e===t.state.password?t.payLayer.success().then(function(){}):t.payLayer.fail("\u652f\u4ed8\u5bc6\u7801\u9519\u8bef"),clearTimeout(n)},1500);console.log(e)}},{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement("header",{className:"App-header"},i.a.createElement("img",{src:p.a,className:"App-logo",alt:"logo"}),i.a.createElement("p",null,"\u6b63\u786e\u5bc6\u7801\u4e3a\uff1a123456"),i.a.createElement("button",{onClick:this.showLayer},"\u663e\u793a\u652f\u4ed8\u5f39\u7a97")),this.state.layerVisibility&&i.a.createElement(m.a,{onRef:this.onRef,handleClose:this.handleClose,forgetClickEvent:this.forgetClickEvent,inputEnd:this.inputEnd}))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(i.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},7:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"}},[[11,1,2]]]);
//# sourceMappingURL=main.b2edfbe1.chunk.js.map