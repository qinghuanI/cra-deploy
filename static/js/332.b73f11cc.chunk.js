"use strict";(self.webpackChunkcra_deploy=self.webpackChunkcra_deploy||[]).push([[332,125,668],{332:function(n,e,t){t.r(e);t(2791);var r=t(9607),s=t(9125),u=t(184);describe("test Page1 component",(function(){it("should render Page1 component",(function(){(0,r.sY)((0,u.jsx)(s.default,{}));expect(r.sp.getByText("this is Page1 component!")).toBeInTheDocument()}))}))},9125:function(n,e,t){t.r(e),t.d(e,{default:function(){return m}});var r=t(32),s=t(4402),u=t(657),c=t(8668),o=t(5671),i=t(3144),a=t(7757),h=t.n(a),f=t(4098),d=new(function(){function n(){var e=this;(0,o.Z)(this,n),this.num=1,this.users=[],this.setCount=function(){e.num++},this.reset=function(){e.num=1},this.addUser=function(){e.users=e.users.concat({name:"qin"})},(0,f.ky)(this)}return(0,i.Z)(n,[{key:"userCount",get:function(){return this.users.length}},{key:"getUsers",value:h().mark((function n(){return h().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Promise.resolve([{name:"John"},{name:"Jane"}]);case 3:this.users=n.sent,n.next=9;break;case 6:n.prev=6,n.t0=n.catch(0),console.error("fetch users error",n.t0);case 9:case"end":return n.stop()}}),n,this,[[0,6]])}))}]),n}()),l=t(6871),p=t(184);function m(){var n=(0,c.useCount)(),e=n.count,t=n.add,o=(0,l.s0)(),i=(0,r.fv)((function(){return d})),a=function(){t()};return(0,s.Z)((function(){i.getUsers()})),(0,u.Z)((function(){i.reset()})),(0,p.jsx)(r.Qj,{children:function(){return(0,p.jsxs)("div",{children:[(0,p.jsx)("h2",{children:"this is Page1 component!"}),(0,p.jsxs)("p",{children:["data from store: ",i.num]}),e,(0,p.jsx)("button",{onClick:a,children:"click"}),(0,p.jsx)("button",{onClick:i.setCount,children:"change name"}),(0,p.jsx)("button",{onClick:i.addUser,children:"Add user"}),(0,p.jsxs)("p",{children:["user \u603b\u4eba\u6570\uff1a",i.userCount]}),(0,p.jsx)("ul",{children:i.users.map((function(n,e){var t=n.name;return(0,p.jsx)("li",{children:t},e)}))}),(0,p.jsx)("button",{onClick:function(){o("/page2")},children:"to page2"})]})}})}},8668:function(n,e,t){t.r(e),t.d(e,{useCount:function(){return u}});var r=t(8152),s=t(2791);function u(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=(0,s.useState)(n),t=(0,r.Z)(e,2),u=t[0],c=t[1],o=(0,s.useCallback)((function(){c((function(n){return n+1}))}),[]),i=(0,s.useCallback)((function(){c(n)}),[n]);return{count:u,add:o,reset:i}}}}]);
//# sourceMappingURL=332.b73f11cc.chunk.js.map