(wx.webpackJsonp=wx.webpackJsonp||[]).push([[11],{"19":function(t,e,n){"use strict";n.r(e);var o=n(8),r=n.n(o);for(var a in o)"default"!==a&&function(t){n.d(e,t,function(){return o[t]})}(a);e.default=r.a},"30":function(t,e,n){t.exports=n.p+"components/setting/pay.wxml"},"52":function(t,e,n){"use strict";n.r(e);n(53);var o=n(19);for(var r in o)"default"!==r&&function(t){n.d(e,t,function(){return o[t]})}(r)},"53":function(t,e,n){"use strict";n(30)},"8":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{"value":!0});var f=function(t,e){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return function sliceIterator(t,e){var n=[],o=!0,r=!1,a=void 0;try{for(var u,i=t[Symbol.iterator]();!(o=(u=i.next()).done)&&(n.push(u.value),!e||n.length!==e);o=!0);}catch(t){r=!0,a=t}finally{try{!o&&i.return&&i.return()}finally{if(r)throw a}}return n}(t,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")},o=function(t,e,n){return e&&defineProperties(t.prototype,e),n&&defineProperties(t,n),t};function defineProperties(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}var r,a,l=n(0),y=function _interopRequireDefault(t){return t&&t.__esModule?t:{"default":t}}(l);function _possibleConstructorReturn(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}n(29);var u=(function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{"constructor":{"value":t,"enumerable":!1,"writable":!0,"configurable":!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(Pay,y.default.Component),o(Pay,[{"key":"_constructor","value":function _constructor(t){(function get(t,e,n){null===t&&(t=Function.prototype);var o=Object.getOwnPropertyDescriptor(t,e);if(void 0===o){var r=Object.getPrototypeOf(t);return null===r?void 0:get(r,e,n)}if("value"in o)return o.value;var a=o.get;return void 0!==a?a.call(n):void 0})(Pay.prototype.__proto__||Object.getPrototypeOf(Pay.prototype),"_constructor",this).call(this,t),this.$$refs=new y.default.RefsArray}},{"key":"_createData","value":function _createData(t,e,n){this.__state=t||this.state||{},this.__props=e||this.props||{};var o=this.$prefix,r=(0,l.genCompid)(o+"$compid__45"),a=f(r,2),u=a[0],i=a[1],s=this.__props,c=s.onPay,p=s.show;return this.anonymousFunc0=function saveImg(){y.default.previewImage({"current":"https://api.leeapps.cn/uploads/bb5a5f2ba9b2430dac887245cfe9aba1.jpg","urls":["https://api.leeapps.cn/uploads/bb5a5f2ba9b2430dac887245cfe9aba1.jpg"]})},this.anonymousFunc1=function(){return c()},l.propsManager.set({"name":"Settingscontroloptions","size":50,"color":"#323E70"},i,u),Object.assign(this.__state,{"$compid__45":i,"show":p}),this.__state}},{"key":"anonymousFunc0","value":function anonymousFunc0(){}},{"key":"anonymousFunc1","value":function anonymousFunc1(){}}]),a=r=Pay,r.$$events=["anonymousFunc0","anonymousFunc1"],r.$$componentPath="components/setting/pay",a);function Pay(){var t,e,n;!function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,Pay);for(var o=arguments.length,r=Array(o),a=0;a<o;a++)r[a]=arguments[a];return(e=n=_possibleConstructorReturn(this,(t=Pay.__proto__||Object.getPrototypeOf(Pay)).call.apply(t,[this].concat(r)))).$usedState=["$compid__45","show"],n.customComponents=["IconFont"],_possibleConstructorReturn(n,e)}u.defaultProps={"show":!1,"onPay":function onPay(){return null}},e.default=u,Component(n(0).default.createComponent(u))}},[[52,0,1,2]]]);