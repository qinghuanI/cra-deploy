(self.webpackChunkcra_deploy=self.webpackChunkcra_deploy||[]).push([[113,205],{7228:function(e){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n},e.exports.__esModule=!0,e.exports.default=e.exports},3646:function(e,t,r){var n=r(7228);e.exports=function(e){if(Array.isArray(e))return n(e)},e.exports.__esModule=!0,e.exports.default=e.exports},8926:function(e){function t(e,t,r,n,o,u,a){try{var c=e[u](a),i=c.value}catch(s){return void r(s)}c.done?t(i):Promise.resolve(i).then(n,o)}e.exports=function(e){return function(){var r=this,n=arguments;return new Promise((function(o,u){var a=e.apply(r,n);function c(e){t(a,o,u,c,i,"next",e)}function i(e){t(a,o,u,c,i,"throw",e)}c(void 0)}))}},e.exports.__esModule=!0,e.exports.default=e.exports},3269:function(e,t,r){var n=r(379);e.exports=function(e,t){var r="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=n(e))||t&&e&&"number"===typeof e.length){r&&(e=r);var o=0,u=function(){};return{s:u,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:u}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,c=!0,i=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return c=e.done,e},e:function(e){i=!0,a=e},f:function(){try{c||null==r.return||r.return()}finally{if(i)throw a}}}},e.exports.__esModule=!0,e.exports.default=e.exports},6860:function(e){e.exports=function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)},e.exports.__esModule=!0,e.exports.default=e.exports},8206:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.__esModule=!0,e.exports.default=e.exports},319:function(e,t,r){var n=r(3646),o=r(6860),u=r(379),a=r(8206);e.exports=function(e){return n(e)||o(e)||u(e)||a()},e.exports.__esModule=!0,e.exports.default=e.exports},379:function(e,t,r){var n=r(7228);e.exports=function(e,t){if(e){if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}},e.exports.__esModule=!0,e.exports.default=e.exports},794:function(e){function t(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=function(){return[]},t.resolve=t,t.id=794,e.exports=t},7113:function(e,t,r){"use strict";r.r(t);var n=r(5861),o=r(7757),u=r.n(o),a=r(989),c=r(9205);describe("test useCount hook",(function(){it("when setCount in useEffect hook",(0,n.Z)(u().mark((function e(){var t,r,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=(0,a.renderHook)((function(){return(0,c.useAsyncCount)()})),r=t.result,n=t.waitForNextUpdate,expect(r.current.count).toBe(0),e.next=4,n({timeout:2e3});case 4:expect(r.current.count).toBe(100);case 5:case"end":return e.stop()}}),e)}))))}))},9205:function(e,t,r){"use strict";r.r(t),r.d(t,{useAsyncCount:function(){return u}});var n=r(8152),o=r(2791);function u(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=(0,o.useState)(e),r=(0,n.Z)(t,2),u=r[0],a=r[1],c=(0,o.useCallback)((function(){a((function(e){return e+1}))}),[]),i=(0,o.useCallback)((function(){a(e)}),[e]);return(0,o.useEffect)((function(){setTimeout((function(){a(100)}),2e3)}),[]),{count:u,add:c,reset:i}}},9838:function(e,t,r){"use strict";var n=r(3269).default,o=r(7757),u=r(319).default,a=r(8926).default;Object.defineProperty(t,"__esModule",{value:!0}),t.addCleanup=function(e){return c=[e].concat(u(c)),function(){return f(e)}},t.autoRegisterCleanup=function(){"function"!==typeof afterEach||function(){try{return!!{NODE_ENV:"production",PUBLIC_URL:"https://qinghuani.github.io/cra-deploy",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.RHTL_SKIP_AUTO_CLEANUP}catch(e){return!1}}()||afterEach(a(o.mark((function e(){return o.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i();case 2:case"end":return e.stop()}}),e)}))))},t.cleanup=i,t.removeCleanup=f;var c=[];function i(){return s.apply(this,arguments)}function s(){return(s=a(o.mark((function e(){var t,r,u;return o.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=n(c),e.prev=1,t.s();case 3:if((r=t.n()).done){e.next=9;break}return u=r.value,e.next=7,u();case 7:e.next=3;break;case 9:e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),t.e(e.t0);case 14:return e.prev=14,t.f(),e.finish(14);case 17:c=[];case 18:case"end":return e.stop()}}),e,null,[[1,11,14,17]])})))).apply(this,arguments)}function f(e){c=c.filter((function(t){return t!==e}))}},5068:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.enableErrorOutputSuppression=function(){if("function"===typeof beforeEach&&"function"===typeof afterEach&&!function(){try{return!!{NODE_ENV:"production",PUBLIC_URL:"https://qinghuani.github.io/cra-deploy",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.RHTL_DISABLE_ERROR_FILTERING}catch(e){return!1}}()){var e;beforeEach((function(){e=n()})),afterEach((function(){return e()}))}},t.suppressErrorOutput=n;var r=[/^The above error occurred in the <.*?> component:/,/^Error: Uncaught .+/];function n(){var e=console.error;return console.error=function(){var t="string"===typeof(arguments.length<=0?void 0:arguments[0])?arguments.length<=0?void 0:arguments[0]:null;t&&r.some((function(e){return e.test(t)}))||e.apply(void 0,arguments)},function(){console.error=e}}},989:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(9838),o=r(5068),u=r(4418);Object.keys(u).forEach((function(e){"default"!==e&&"__esModule"!==e&&(e in t&&t[e]===u[e]||Object.defineProperty(t,e,{enumerable:!0,get:function(){return u[e]}}))})),(0,n.autoRegisterCleanup)(),(0,o.enableErrorOutputSuppression)()},4418:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={renderHook:!0,act:!0,cleanup:!0,addCleanup:!0,removeCleanup:!0,suppressErrorOutput:!0};t.suppressErrorOutput=t.renderHook=t.removeCleanup=t.cleanup=t.addCleanup=t.act=void 0;var o=r(721);Object.keys(o).forEach((function(e){"default"!==e&&"__esModule"!==e&&(Object.prototype.hasOwnProperty.call(n,e)||e in t&&t[e]===o[e]||Object.defineProperty(t,e,{enumerable:!0,get:function(){return o[e]}}))}));var u=[{required:"react-test-renderer",renderer:"./native/pure"},{required:"react-dom",renderer:"./dom/pure"}];var a=function(){var e=u.find((function(e){return function(e){try{return r(794)(e),!0}catch(t){return!1}}(e.required)}));if(e)return r(794)(e.renderer);var t=u.map((function(e){var t=e.required;return"  - ".concat(t)})).sort((function(e,t){return e.localeCompare(t)})).join("\n");throw new Error("Could not auto-detect a React renderer. Are you sure you've installed one of the following\n".concat(t,"\nIf you are using a bundler, please update your imports to use a specific renderer.\nFor instructions see: https://react-hooks-testing-library.com/installation#being-specific"))}(),c=a.renderHook,i=a.act,s=a.cleanup,f=a.addCleanup,p=a.removeCleanup,l=a.suppressErrorOutput;t.suppressErrorOutput=l,t.removeCleanup=p,t.addCleanup=f,t.cleanup=s,t.act=i,t.renderHook=c},771:function(){},721:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(771);Object.keys(n).forEach((function(e){"default"!==e&&"__esModule"!==e&&(e in t&&t[e]===n[e]||Object.defineProperty(t,e,{enumerable:!0,get:function(){return n[e]}}))}))},5861:function(e,t,r){"use strict";function n(e,t,r,n,o,u,a){try{var c=e[u](a),i=c.value}catch(s){return void r(s)}c.done?t(i):Promise.resolve(i).then(n,o)}function o(e){return function(){var t=this,r=arguments;return new Promise((function(o,u){var a=e.apply(t,r);function c(e){n(a,o,u,c,i,"next",e)}function i(e){n(a,o,u,c,i,"throw",e)}c(void 0)}))}}r.d(t,{Z:function(){return o}})}}]);
//# sourceMappingURL=113.442d41cc.chunk.js.map