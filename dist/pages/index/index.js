(wx.webpackJsonp=wx.webpackJsonp||[]).push([[10],{"14":function(e,t,n){"use strict";n.r(t);var o=n(5),a=n.n(o);for(var r in o)"default"!==r&&function(e){n.d(t,e,function(){return o[e]})}(r);t.default=a.a},"21":function(e,t,n){e.exports=n.p+"pages/index/index.wxml"},"36":function(e,t,n){"use strict";n.r(t);n(37);var o=n(14);for(var a in o)"default"!==a&&function(e){n.d(t,e,function(){return o[e]})}(a)},"37":function(e,t,n){"use strict";n(21)},"38":function(e){e.exports=JSON.parse('{"miniprogramRoot":"./dist","projectname":"mapp-coder-daily","description":"程序猿日常","appid":"wx47cf84f458781f68","setting":{"urlCheck":true,"es6":false,"postcss":false,"minified":false},"compileType":"miniprogram"}')},"39":function(e,t,n){},"5":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0});var c=_interopRequireDefault(n(12)),Me=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function sliceIterator(e,t){var n=[],o=!0,a=!1,r=void 0;try{for(var i,s=e[Symbol.iterator]();!(o=(i=s.next()).done)&&(n.push(i.value),!t||n.length!==t);o=!0);}catch(e){a=!0,r=e}finally{try{!o&&s.return&&s.return()}finally{if(a)throw r}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},o=function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e};function defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var a,r,i=n(13),je=n(0),f=_interopRequireDefault(je),s=n(11),_=n(3),u=_interopRequireDefault(n(38));function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}function _asyncToGenerator(e){return function(){var i=e.apply(this,arguments);return new Promise(function(a,r){return function step(e,t){try{var n=i[e](t),o=n.value}catch(e){return void r(e)}if(!n.done)return Promise.resolve(o).then(function(e){step("next",e)},function(e){step("throw",e)});a(o)}("next")})}}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}n(39);var p,l,g=(function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(Index,je.Component),o(Index,[{"key":"_constructor","value":function _constructor(){(function get(e,t,n){null===e&&(e=Function.prototype);var o=Object.getOwnPropertyDescriptor(e,t);if(void 0===o){var a=Object.getPrototypeOf(e);return null===a?void 0:get(a,t,n)}if("value"in o)return o.value;var r=o.get;return void 0!==r?r.call(n):void 0})(Index.prototype.__proto__||Object.getPrototypeOf(Index.prototype),"_constructor",this).apply(this,arguments),this.state={"top":0,"show":!0,"pub":"","keyword":"","innerHeight":750,"tag":"","type":"latest","title":"Daily 最新动态","tabId":1,"hits":[],"showTabsOptions":!1},this.$$refs=new f.default.RefsArray}},{"key":"componentWillMount","value":(l=_asyncToGenerator(c.default.mark(function _callee6(){var t,n;return c.default.wrap(function _callee6$(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.default.getMenuButtonBoundingClientRect();case 2:return t=e.sent,e.next=5,f.default.getSystemInfoSync();case 5:return n=e.sent,this.setState({"top":t.top+2,"innerHeight":n.windowHeight}),e.next=9,this.props.indexStore.initSetting();case 9:case"end":return e.stop()}},_callee6,this)})),function componentWillMount(){return l.apply(this,arguments)})},{"key":"componentDidMount","value":(p=_asyncToGenerator(c.default.mark(function _callee7(){return c.default.wrap(function _callee7$(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getPost();case 2:this.getPopularTags(),this.getPubs();case 4:case"end":return e.stop()}},_callee7,this)})),function componentDidMount(){return p.apply(this,arguments)})},{"key":"componentWillUnmount","value":function componentWillUnmount(){}},{"key":"componentWillReact","value":function componentWillReact(){}},{"key":"onShareAppMessage","value":function onShareAppMessage(e){return"button"===e.from&&console.log(e.target),{"title":"程序猿日报","path":"pages/index/index","success":function success(e){console.log("转发成功:"+JSON.stringify(e))},"fail":function fail(e){console.log("转发失败:"+JSON.stringify(e))}}}},{"key":"componentDidShow","value":function componentDidShow(){var e=this.props.indexStore;e.isAuth||e.getAuth()}},{"key":"componentDidHide","value":function componentDidHide(){}},{"key":"_createData","value":function _createData(e,t,n){var i=this;this.__state=e||this.state||{},this.__props=t||this.props||{};var s=this.$prefix,o=(0,je.genCompid)(s+"$compid__44"),a=Me(o,2),r=a[0],u=a[1],p=(0,je.genCompid)(s+"$compid__45"),l=Me(p,2),c=l[0],d=l[1],f=(0,je.genCompid)(s+"$compid__46"),_=Me(f,2),g=_[0],m=_[1],y=(0,je.genCompid)(s+"$compid__47"),h=Me(y,2),b=h[0],S=h[1],v=(0,je.genCompid)(s+"$compid__48"),x=Me(v,2),w=x[0],$=x[1],P=(0,je.genCompid)(s+"$compid__49"),T=Me(P,2),O=T[0],k=T[1],C=(0,je.genCompid)(s+"$compid__50"),I=Me(C,2),z=I[0],M=I[1],j=(0,je.genCompid)(s+"$compid__51"),A=Me(j,2),D=A[0],E=A[1],q=(0,je.genCompid)(s+"$compid__52"),L=Me(q,2),B=L[0],R=L[1],U=(0,je.genCompid)(s+"$compid__53"),G=Me(U,2),F=G[0],H=G[1],J=(0,je.genCompid)(s+"$compid__54"),N=Me(J,2),W=N[0],V=N[1],Q=(0,je.genCompid)(s+"$compid__55"),X=Me(Q,2),K=X[0],Y=X[1],Z=this.__state,ee=(Z.title,Z.top),te=Z.show,ne=Z.pub,oe=Z.tag,ae=(Z.keyword,Z.innerHeight),re=(Z.tabId,Z.hits,Z.showTabsOptions,this.__props.indexStore),ie=re.list,se=re.posts,ue=re.allPubs,pe=re.allTags,le=re.tags,ce=re.pubs,de=re.setting,fe=re.favPids,_e=ne?ue.filter(function(e){return e.id===ne})[0]:{"image":"","name":""},ge=ce.includes(ne),me=le.includes(oe),ye=ue.filter(function(e){return ce.includes(e.id)}),he=fe.map(function(e){return se[e]}),be=de.language[1],Se=(0,je.internal_inline_style)({"color":"#1c1e21","padding":ee+"px 0 10px 10px","height":"35px"});this.anonymousFunc0=function(){return i.__props.indexStore.setSetting("show",!0)};var ve=(0,je.internal_inline_style)({"transform":"translateX("+(te?"-50%":"0")+")"}),xe=(0,je.internal_inline_style)({"height":ae-ee-50+"px"}),we=(0,je.internal_inline_style)({"marginTop":"30px"}),$e=0===fe.length?(0,je.internal_inline_style)({"color":"#a9abb3","textAlign":"center","padding":"10px 0"}):null,Pe=(0,je.internal_inline_style)({"height":ae-ee-50+"px"}),Te=ne?(0,je.internal_inline_style)({"display":"flex","alignItems":"center"}):null,Oe=ne?(0,je.internal_inline_style)({"color":ge?"#f58301":"#323E70"}):null,ke=oe?(0,je.internal_inline_style)({"color":me?"#f58301":"#323E70"}):null,Ce=le.map(function(e,t){return{"$loopState__temp5":(e={"$original":(0,je.internal_get_original)(e)}).$original.toUpperCase(),"$original":e.$original}}),Ie=pe.map(function(e,t){return{"$loopState__temp8":(e={"$original":(0,je.internal_get_original)(e)}).$original.toUpperCase(),"$original":e.$original}}),ze=ie.map(function(e,t){e={"$original":(0,je.internal_get_original)(e)};var n=(0,je.genCompid)(s+"dzzzzzzzzz"+t,!0),o=Me(n,2),a=o[0],r=o[1];return je.propsManager.set({"pid":e.$original,"post":se[e.$original],"setting":de,"onPost":i.onPost,"onTag":i.onTag,"onPub":i.onPub},r,a),{"$compid__43":r,"$original":e.$original}});return de.show&&je.propsManager.set({"setting":de,"onSet":re.setSetting.bind(re)},u,r),je.propsManager.set({"name":"gengduo","size":40,"color":"#323E70"},d,c),je.propsManager.set({"name":"Settingscontroloptions","size":40,"color":"#323E70"},m,g),je.propsManager.set({"name":"caidan","size":50,"color":"#323E70"},S,b),je.propsManager.set({"name":"rss","size":50,"color":"#323E70"},$,w),je.propsManager.set({"name":"tag","size":50,"color":"#323E70"},k,O),je.propsManager.set({"name":"sousuo","size":36,"color":"#000"},M,z),je.propsManager.set({"name":"more1","size":50,"color":"#323E70"},E,D),je.propsManager.set({"name":"more1","size":50,"color":"#323E70"},R,B),je.propsManager.set({"name":"shoucang","size":50,"color":"#323E70"},H,F),ne&&je.propsManager.set({"name":"rss","size":40,"color":ge?"#f58301":"#323E70"},V,W),oe&&je.propsManager.set({"name":"tag","size":40,"color":me?"#f58301":"#323E70"},Y,K),Object.assign(this.__state,{"anonymousState__temp":Se,"anonymousState__temp2":ve,"anonymousState__temp3":xe,"anonymousState__temp6":we,"anonymousState__temp9":$e,"anonymousState__temp10":Pe,"anonymousState__temp11":Te,"anonymousState__temp12":Oe,"anonymousState__temp13":ke,"loopArray10":Ce,"loopArray13":Ie,"loopArray15":ze,"$compid__44":u,"$compid__45":d,"$compid__46":m,"$compid__47":S,"$compid__48":$,"$compid__49":k,"$compid__50":M,"$compid__51":E,"$compid__52":R,"$compid__53":H,"$compid__54":V,"$compid__55":Y,"setting":de,"mypubs":ye,"pubs":ce,"tags":le,"allPubs":ue,"allTags":pe,"favPids":fe,"favPost":he,"thePub":_e,"isPub":ge,"isTag":me,"list":ie,"itemLan":be}),this.__state}},{"key":"anonymousFunc0","value":function anonymousFunc0(){}}]),r=a=Index,a.$$events=["onShowPage","anonymousFunc0","onTabs","onChangeTab","onPub","onTag","onSearch","onLikeTag","onPost","onNext","onLikePub"],a.$$componentPath="pages/index/index",r);function Index(){var e,t,p,l=this;!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Index);for(var n,o,a=arguments.length,r=Array(a),i=0;i<a;i++)r[i]=arguments[i];return(t=p=_possibleConstructorReturn(this,(e=Index.__proto__||Object.getPrototypeOf(Index)).call.apply(e,[this].concat(r)))).$usedState=["anonymousState__temp","anonymousState__temp2","anonymousState__temp3","anonymousState__temp6","anonymousState__temp9","anonymousState__temp10","anonymousState__temp11","anonymousState__temp12","anonymousState__temp13","loopArray10","loopArray13","loopArray15","$compid__44","$compid__45","$compid__46","$compid__47","$compid__48","$compid__49","$compid__50","$compid__51","$compid__52","$compid__53","$compid__54","$compid__55","setting","showTabsOptions","tabId","mypubs","pubs","tags","keyword","hits","allPubs","allTags","favPids","favPost","pub","thePub","isPub","tag","isTag","list","itemLan","title","top","show","innerHeight","type","indexStore"],p.config={"navigationBarTitleText":u.default.description,"navigationStyle":"custom"},p.getPubs=_asyncToGenerator(c.default.mark(function _callee(){var t;return c.default.wrap(function _callee$(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.default.getStorageSync("publications");case 2:(t=e.sent)?p.props.indexStore.allPubs=t:f.default.request({"url":_.Uri+"daily/v1/publications"}).then(function(e){p.props.indexStore.allPubs=e.data,f.default.setStorageSync("publications",e.data)});case 4:case"end":return e.stop()}},_callee,l)})),p.getPopularTags=_asyncToGenerator(c.default.mark(function _callee2(){var t;return c.default.wrap(function _callee2$(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.default.getStorageSync("popularTags");case 2:(t=e.sent)?p.props.indexStore.allTags=t:f.default.request({"url":_.Uri+"daily/v1/tags/popular"}).then(function(e){t=e.data.map(function(e){return e.name}),p.props.indexStore.allTags=t,f.default.setStorageSync("popularTags",t)});case 4:case"end":return e.stop()}},_callee2,l)})),p.getPost=function(){var i=p.props.indexStore,s=i.page,e=p.state,t=e.type,u={"latest":['"sortBy":"popularity"',"fetchLatest","QueryPostInput","latest","latest"],"pub":['"pub":"'+e.pub+'"',"fetchPostsByPublication","PostByPublicationInput","postsByPublication","postsByPublication"],"tag":['"tag":"'+e.tag+'"',"fetchPostsByTag","PostByTagInput","postsByTag","postsByTag"]}[t],n="query "+u[1]+"($params: "+u[2]+") { "+u[3]+"(params: $params) { id,title,url,publishedAt,createdAt,image,ratio,placeholder,views,readTime,publication { id, name, image },tags } }";f.default.showLoading({"title":"Loading ..."});var o,a='{"params":{"latest":"'+(new Date).toISOString()+'","page":'+s+',"pageSize":20,'+u[0]+"}}";"latest"===t&&(a=JSON.stringify(p.fetchLatestVariables())),f.default.request({"url":_.Uri+"daily/graphql","data":{"query":n,"variables":a}}).then((o=_asyncToGenerator(c.default.mark(function _callee3(t){var n,o,a,r;return c.default.wrap(function _callee3$(e){for(;;)switch(e.prev=e.next){case 0:return n=t.data.data,f.default.hideLoading(),o=n[u[4]],p.props.indexStore.more=20===o.length,e.next=6,p.savePosts(o.map(function(e){return{"id":e.id,"title":e.title}}));case 6:a=e.sent,r=o.map(function(e){return i.setPost(d({},e,{"title_cn":a[e.id]})),e.id}),i.setList(r,0<s);case 9:case"end":return e.stop()}},_callee3,l)})),function(e){return o.apply(this,arguments)})).catch(function(){f.default.hideLoading(),f.default.showToast({"title":"数据拉取失败","duration":2e3})})},p.fetchLatestVariables=function(){var e=p.props.indexStore,t=p.state.tabId?[]:e.tags;return{"params":d({"latest":(new Date).toISOString(),"page":e.page,"pageSize":20},t&&{"tags":t.join()},{"sortBy":e.setting.order})}},p.onPub=function(e){p.props.indexStore.page=0,p.setState({"pub":e,"keyword":"","type":"pub","tag":"","title":"@ "+e,"show":!0},function(){return p.getPost()})},p.onPost=function(e){f.default.navigateTo({"url":"/pages/post/index?&id="+e})},p.onSearch=function(e){var t=e.detail.value.toLowerCase();p.setState({"keyword":""}),p.searchTag(t)},p.searchTag=(o=_asyncToGenerator(c.default.mark(function _callee4(t){var n,o;return c.default.wrap(function _callee4$(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.default.request({"url":_.Uri+"daily/v1/tags/search?query="+t});case 2:n=e.sent,o=n.data.hits.map(function(e){return e.name}),p.setState({"hits":o});case 5:case"end":return e.stop()}},_callee4,l)})),function(e){return o.apply(this,arguments)}),p.onNext=function(){p.props.indexStore.more&&(p.props.indexStore.page+=1,p.getPost())},p.onTag=function(e){p.props.indexStore.page=0,p.setState({"tag":e,"keyword":"","pub":"","type":"tag","title":"# "+e,"show":!0},function(){return p.getPost()})},p.onChangeTab=function(e){var t=p.state.tabId,n=p.props.indexStore;if(t===e)return p.setState({"showTabsOptions":!1});n.page=0,p.setState({"showTabsOptions":!1,"tabId":2===e?t:e,"keyword":"","pub":"","tag":"","type":"latest"},function(){p.getPost()})},p.onLikeTag=function(t){var e=p.props.indexStore,n=e.tags,o=e.auth.openid;n.includes(t)?n=n.filter(function(e){return e!==t}):n.push(t),p.props.indexStore.tags=n,f.default.request({"url":_.Uri+"user/me","method":"POST","data":{"uid":o,"platform":"wechat","tag":t}})},p.onLikePub=function(t){var e=p.props.indexStore,n=e.pubs,o=e.auth.openid;n.includes(t)?n=n.filter(function(e){return e!==t}):n.push(t),p.props.indexStore.pubs=n,f.default.request({"url":_.Uri+"user/me","method":"POST","data":{"uid":o,"platform":"wechat","pub":t}})},p.savePosts=(n=_asyncToGenerator(c.default.mark(function _callee5(t){var n,o;return c.default.wrap(function _callee5$(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.default.request({"url":"https://daily.leeapps.cn/post/create","method":"POST","data":{"list":t}});case 2:return n=e.sent,o={},0===n.data.code&&n.data.data.forEach(function(e){o[e.id]=e.title}),e.abrupt("return",o);case 6:case"end":return e.stop()}},_callee5,l)})),function(e){return n.apply(this,arguments)}),p.onTabs=function(){var e=p.state.showTabsOptions;p.setState({"showTabsOptions":!e})},p.onShowPage=function(){var e=p.state.show,t=p.props.indexStore;e&&!t.favsDone&&t.getFavPosts(),p.setState({"show":!e})},p.customComponents=["Setting","IconFont","Post"],_possibleConstructorReturn(p,t)}g=(0,i.__decorate)([(0,s.inject)("indexStore"),s.observer],g),t.default=g,Component(n(0).default.createComponent(g,!0))}},[[36,0,1,2]]]);