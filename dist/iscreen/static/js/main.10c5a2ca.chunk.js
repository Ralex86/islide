(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{38:function(n,e,t){n.exports=t.p+"static/media/1.3c2ac001.jpg"},39:function(n,e,t){n.exports=t.p+"static/media/2.4a117edc.jpg"},40:function(n,e,t){n.exports=t.p+"static/media/3.94c96a4a.jpg"},41:function(n,e,t){n.exports=t.p+"static/media/4.0b267450.png"},42:function(n,e,t){n.exports=t.p+"static/media/5.f58ed620.jpg"},43:function(n,e,t){n.exports=t(75)},48:function(n,e,t){},49:function(n,e,t){},72:function(n,e){},75:function(n,e,t){"use strict";t.r(e);var i=t(0),r=t.n(i),a=t(34),o=t.n(a),c=(t(48),t(1)),u=t(9),s=t(10),d=t(12),l=t(11),p=t(13),h=(t(49),t(2)),f=t(37),m=t.n(f);function g(){var n=Object(c.a)(["\n  height: 100%;\n  width: 100%;\n\n  position: relative;\n  z-index: 0;\n\n  background-color: red;\n"]);return g=function(){return n},n}function x(){var n=Object(c.a)(["\n\tposition: relative;\n\tleft: ","%;\n  display: flex;\n  width: ","%;\n\theight: 100%;\n\n\ttransition: left 0.5s ease-in-out;\n\t\n  // transform: ",";\n"]);return x=function(){return n},n}function w(){var n=Object(c.a)(["\n  width: ","%;\n\n  margin: 4px;\n\n  // background-color: blue;\n"]);return w=function(){return n},n}var v=function(n){function e(){var n,t;Object(u.a)(this,e);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(t=Object(d.a)(this,(n=Object(l.a)(e)).call.apply(n,[this].concat(a)))).renderSlides=function(n){var e=100/n.length;return n.map(function(n,t){return i.createElement(b,{slideWidth:e,key:t.toString()},n)})},t}return Object(p.a)(e,n),Object(s.a)(e,[{key:"render",value:function(){var n=this.props,e=n.slides,t=n.index,r=e.length;return i.createElement(j,null,i.createElement(y,{index:t,sliderWidth:100*r},this.renderSlides(e)))}}]),e}(i.Component),b=h.a.div(w(),function(n){return n.slideWidth}),y=h.a.div(x(),function(n){return 100*-n.index},function(n){return n.sliderWidth},function(n){return"translate3d(".concat(n.x,"px,").concat(n.y,"px,0)")}),j=h.a.div(g()),k=v,W=t(38),E=t.n(W),O=t(39),S=t.n(O),H=t(40),z=t.n(H),D=t(41),I=t.n(D),R=t(42),B=t.n(R);function A(){var n=Object(c.a)(["\n  position: relative;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  // background-color: ;\n"]);return A=function(){return n},n}function C(){var n=Object(c.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  position: relative;\n  width: calc(100% - 80px);\n  height: calc(100% - 80px);\n\n  border: 5px solid #ccc;\n  border-radius: 10px;\n  box-sizing: border-box;\n"]);return C=function(){return n},n}function F(){var n=Object(c.a)(["\n  position: absolute;\n  z-index: 999;\n  top: 0;\n  left: 0;\n  width: 20px;\n  height: 20px;\n  background: red;\n  border-radius: 100%;\n  user-select: none;\n  transform: ",";\n"]);return F=function(){return n},n}function J(){var n=Object(c.a)(["\n  position: absolute;\n  bottom: 10px;\n  right: 10px;\n  display: flex;\n  flex-direction: column;\n  width: 100px;\n  color: white;\n  background: rgba(0, 0, 0, 0.6);\n"]);return J=function(){return n},n}function L(){var n=Object(c.a)(["\n  height: 100%;\n  background-size: cover;\n  background-image: url(",");\n"]);return L=function(){return n},n}var M=function(n){function e(){var n,t;Object(u.a)(this,e);for(var i=arguments.length,a=new Array(i),o=0;o<i;o++)a[o]=arguments[o];return(t=Object(d.a)(this,(n=Object(l.a)(e)).call.apply(n,[this].concat(a)))).state={alpha:null,beta:null,gamma:null,x:0,y:0,windowHeight:window.innerHeight,windowWidth:window.innerWidth,hasWindowResized:!1,screenWidth:0,screenHeight:0,slideIndex:0},t.screenRef=r.a.createRef(),t.endpoint="/screen",t.socket=m()(t.endpoint),t.updateScreenDimensions=function(){var n=t.screenRef.current,e=n.clientHeight,i=n.clientWidth;t.setState({screenWidth:i,screenHeight:e})},t.updateWindowDimensions=function(){console.log("update"),t.setState({windowHeight:window.innerHeight,windowWidth:window.innerWidth},function(){return t.updateScreenDimensions()})},t.getSlides=function(){return[{id:1,url:E.a},{id:2,url:S.a},{id:3,url:z.a},{id:4,url:I.a},{id:5,url:B.a}].map(function(n,e){return r.a.createElement(U,{key:e.toString(),slideBackground:n.url})})},t}return Object(p.a)(e,n),Object(s.a)(e,[{key:"componentDidMount",value:function(){var n=this;this.updateWindowDimensions(),window.addEventListener("resize",this.updateWindowDimensions),this.socket.on("position",function(e){var t=e.alpha,i=e.beta,r=e.gamma,a=e.x,o=e.y;n.setState({alpha:t,beta:i,gamma:r,x:a,y:o})}),this.socket.on("slideIndex",function(e){console.log("iscreen",e),n.setState({slideIndex:e})})}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.updateWindowDimensions)}},{key:"render",value:function(){var n=this.state,e=n.alpha,t=n.beta,i=n.gamma,a=n.x,o=n.y,c=n.screenWidth,u=n.screenHeight,s=n.slideIndex,d=c*a/200+c/2,l=u*o/200+u/2;return r.a.createElement(K,null,r.a.createElement(G,{ref:this.screenRef},r.a.createElement(q,{x:d,y:l}),r.a.createElement(k,{index:s,slides:this.getSlides()})),r.a.createElement($,null,r.a.createElement("span",null,"alpha: ",e),r.a.createElement("span",null,"beta: ",t),r.a.createElement("span",null,"gamma: ",i),r.a.createElement("span",null,"x: ",a.toFixed(2)),r.a.createElement("span",null,"y: ",o.toFixed(2))))}}]),e}(r.a.Component),U=h.a.div(L(),function(n){return n.slideBackground}),$=h.a.div(J()),q=h.a.div(F(),function(n){return"translate3d(".concat(n.x,"px,").concat(n.y,"px,0)")}),G=h.a.div(C()),K=h.a.div(A()),N=M;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(n){n.unregister()})}},[[43,1,2]]]);
//# sourceMappingURL=main.10c5a2ca.chunk.js.map