(wx.webpackJsonp=wx.webpackJsonp||[]).push([[13],{"17":function(t,e,n){"use strict";n.r(e);var o=n(6),i=n.n(o);for(var r in o)"default"!==r&&function(t){n.d(e,t,function(){return o[t]})}(r);e.default=i.a},"26":function(t,e,n){t.exports=n.p+"pages/post/index.wxml"},"47":function(t,e,n){"use strict";n.r(e);n(48);var o=n(17);for(var i in o)"default"!==i&&function(t){n.d(e,t,function(){return o[t]})}(i)},"48":function(t,e,n){"use strict";n(26)},"49":function(t,e,n){},"6":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{"value":!0});var a=_interopRequireDefault(n(14)),q=function(t,e){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return function sliceIterator(t,e){var n=[],o=!0,i=!1,r=void 0;try{for(var a,s=t[Symbol.iterator]();!(o=(a=s.next()).done)&&(n.push(a.value),!e||n.length!==e);o=!0);}catch(t){i=!0,r=t}finally{try{!o&&s.return&&s.return()}finally{if(i)throw r}}return n}(t,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")},o=function(t,e,n){return e&&defineProperties(t.prototype,e),n&&defineProperties(t,n),t};function defineProperties(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}var i,r,s=n(15),U=n(0),c=_interopRequireDefault(U),u=n(13),E=n(3),l=n(27);function _interopRequireDefault(t){return t&&t.__esModule?t:{"default":t}}function _asyncToGenerator(t){return function(){var a=t.apply(this,arguments);return new Promise(function(i,r){return function step(t,e){try{var n=a[t](e),o=n.value}catch(t){return void r(t)}if(!n.done)return Promise.resolve(o).then(function(t){step("next",t)},function(t){step("throw",t)});i(o)}("next")})}}function _possibleConstructorReturn(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}n(49);var p,d,f=(function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{"constructor":{"value":t,"enumerable":!1,"writable":!0,"configurable":!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(Index,U.Component),o(Index,[{"key":"_constructor","value":function _constructor(){(function get(t,e,n){null===t&&(t=Function.prototype);var o=Object.getOwnPropertyDescriptor(t,e);if(void 0===o){var i=Object.getPrototypeOf(t);return null===i?void 0:get(i,e,n)}if("value"in o)return o.value;var r=o.get;return void 0!==r?r.call(n):void 0})(Index.prototype.__proto__||Object.getPrototypeOf(Index.prototype),"_constructor",this).apply(this,arguments),this.state={"id":this.$router.params.id,"pid":0,"title":"","title_cn":"","innerHeight":750,"top":0,"url":"","content":"","content_cn":"","isLoading":!1},this.$$refs=new c.default.RefsArray}},{"key":"componentWillMount","value":(d=_asyncToGenerator(a.default.mark(function _callee(){var e,n;return a.default.wrap(function _callee$(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.default.getMenuButtonBoundingClientRect();case 2:return e=t.sent,t.next=5,c.default.getSystemInfoSync();case 5:return n=t.sent,this.setState({"top":e.top+2,"innerHeight":n.windowHeight}),t.next=9,this.props.indexStore.initSetting();case 9:case"end":return t.stop()}},_callee,this)})),function componentWillMount(){return d.apply(this,arguments)})},{"key":"onShareAppMessage","value":function onShareAppMessage(t){var e=this.state,n=e.title,o=e.id;return"button"===t.from&&console.log(t.target),{"title":""+n,"path":"pages/post/index?id="+o,"success":function success(t){console.log("转发成功:"+JSON.stringify(t))},"fail":function fail(t){console.log("转发失败:"+JSON.stringify(t))}}}},{"key":"componentDidShow","value":(p=_asyncToGenerator(a.default.mark(function _callee2(){var e,n,o,i,r=this;return a.default.wrap(function _callee2$(t){for(;;)switch(t.prev=t.next){case 0:e=this.state.id,n=this.props.indexStore,o=n.posts,n.isAuth||n.getAuth(),(i=o[e]||{})&&i.content?this.setData(i):(this.setState({"isLoading":!0}),c.default.request({"url":E.Uri+"post/fetch","data":{"pid":e,"link":i.url||""}}).then(function(t){r.setState({"isLoading":!1}),0===t.data.code&&((i=t.data.data).pid=Number(i.id),i.id=e,n.setPost({"id":e,"pid":i.pid,"author":i.author,"lead_image_url":i.lead_image_url,"word_count":i.word_count,"content":i.content,"content_cn":i.content_cn}),r.setData(i))}).catch(function(){r.setState({"isLoading":!1}),c.default.showToast({"title":"拉取数据失败","duration":2e3})}));case 6:case"end":return t.stop()}},_callee2,this)})),function componentDidShow(){return p.apply(this,arguments)})},{"key":"_createData","value":function _createData(t,e,n){var o=this;this.__state=t||this.state||{},this.__props=e||this.props||{};var i=this.$prefix,r=(0,U.genCompid)(i+"$compid__41"),a=q(r,2),s=a[0],u=a[1],c=(0,U.genCompid)(i+"$compid__42"),l=q(c,2),p=l[0],d=l[1],f=(0,U.genCompid)(i+"$compid__43"),_=q(f,2),h=_[0],m=_[1],g=(0,U.genCompid)(i+"$compid__44"),y=q(g,2),v=y[0],x=y[1],S=this.__props.indexStore,w=S.setting,b=S.favs,$=S.posts,k=w.language,C=w.theme,O=this.__state,P=O.id,T=(O.title,O.top),j=(O.title_cn,O.pid),I=(O.content,O.content_cn,O.innerHeight),D=(O.isLoading,b.includes(String(j))),L=$[P]||{},M=L.image||L.lead_image_url||L.placeholder||"",A=C?"#007AFF":"#323E70",R=(0,U.internal_inline_style)({"padding":T+"px 0 10px 10px"});this.anonymousFunc0=function(){return o.__props.indexStore.setSetting("show",!0)};var F=(0,U.internal_inline_style)({"height":I-T-50+"px"}),H=(0,U.internal_inline_style)({"padding":"10px"});return U.propsManager.set({"setting":w,"onSet":S.setSetting.bind(S),"show":w.show},u,s),U.propsManager.set({"name":"home","size":40,"color":A},d,p),U.propsManager.set({"name":"Settingscontroloptions","size":40,"color":A},m,h),U.propsManager.set({"name":D?"bqxin":"xin","size":40,"color":A},x,v),Object.assign(this.__state,{"anonymousState__temp":R,"anonymousState__temp2":F,"anonymousState__temp3":H,"$compid__41":u,"$compid__42":d,"$compid__43":m,"$compid__44":x,"Themes":E.Themes,"theme":C,"isLike":D,"language":k,"img":M}),this.__state}},{"key":"anonymousFunc0","value":function anonymousFunc0(){}}]),r=i=Index,i.$$events=["onHome","anonymousFunc0","onLike","onCopyUrl"],i.$$componentPath="pages/post/index",r);function Index(){var t,e,u;!function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,Index);for(var n=arguments.length,o=Array(n),i=0;i<n;i++)o[i]=arguments[i];return(e=u=_possibleConstructorReturn(this,(t=Index.__proto__||Object.getPrototypeOf(Index)).call.apply(t,[this].concat(o)))).$usedState=["anonymousState__temp","anonymousState__temp2","anonymousState__temp3","$compid__41","$compid__42","$compid__43","$compid__44","Themes","theme","isLike","language","img","isLoading","content","content_cn","title","title_cn","id","pid","innerHeight","top","url","indexStore"],u.config={"navigationBarTitleText":"详情页","navigationStyle":"custom","usingComponents":{"wemark":"../../wemark/wemark"}},u.setData=function(t){var e=t.content?(0,l.fixUrl)(t.content,t.url):"",n=t.content_cn?(0,l.fixUrl)(t.content_cn,t.url):"";u.setState({"pid":t.pid,"title":t.title,"title_cn":t.title_cn,"url":t.url,"content":e,"content_cn":n})},u.onHome=function(){1<c.default.getCurrentPages().length?c.default.navigateBack():c.default.navigateTo({"url":"/pages/index/index"})},u.onCopyUrl=function(){var t=u.state.url;c.default.setClipboardData({"data":t,"success":function success(){c.default.showToast({"title":"原文链接已复制","duration":1e3})}})},u.onLike=function(){var t=u.props.indexStore,e=t.favs,n=t.auth.openid,o=t.favPids,i=u.state,r=i.id,a=i.pid,s=String(a);e.includes(s)?(e=e.filter(function(t){return t!==s}),o=o.filter(function(t){return t!==r})):(e.unshift(s),o.unshift(r)),u.props.indexStore.favs=e,u.props.indexStore.favPids=o,c.default.request({"url":E.Uri+"user/me","method":"POST","data":{"uid":n,"platform":"wechat","fav":s}})},u.customComponents=["Setting","IconFont","Loading"],_possibleConstructorReturn(u,e)}f=(0,s.__decorate)([(0,u.inject)("indexStore"),u.observer],f),e.default=f,Component(n(0).default.createComponent(f,!0))}},[[47,0,1,2]]]);