(wx.webpackJsonp=wx.webpackJsonp||[]).push([[12],{"16":function(e,t,n){"use strict";n.r(t);var o=n(5),a=n.n(o);for(var r in o)"default"!==r&&function(e){n.d(t,e,function(){return o[e]})}(r);t.default=a.a},"36":function(e,t,n){"use strict";n.r(t);n(58);var o=n(16);for(var a in o)"default"!==a&&function(e){n.d(t,e,function(){return o[e]})}(a)},"37":function(e){e.exports=JSON.parse('{"miniprogramRoot":"./dist","projectname":"mapp-coder-daily","description":"程序猿日常","appid":"wx47cf84f458781f68","setting":{"urlCheck":true,"es6":false,"postcss":false,"minified":false},"compileType":"miniprogram"}')},"38":function(e,t,n){},"5":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0});var f=_interopRequireDefault(n(14)),be=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function sliceIterator(e,t){var n=[],o=!0,a=!1,r=void 0;try{for(var i,s=e[Symbol.iterator]();!(o=(i=s.next()).done)&&(n.push(i.value),!t||n.length!==t);o=!0);}catch(e){a=!0,r=e}finally{try{!o&&s.return&&s.return()}finally{if(a)throw r}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},o=function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e};function defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var a,r,i=n(15),we=n(0),_=_interopRequireDefault(we),s=n(13),m=n(3),u=_interopRequireDefault(n(37));function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}function _asyncToGenerator(e){return function(){var i=e.apply(this,arguments);return new Promise(function(a,r){return function step(e,t){try{var n=i[e](t),o=n.value}catch(e){return void r(e)}if(!n.done)return Promise.resolve(o).then(function(e){step("next",e)},function(e){step("throw",e)});a(o)}("next")})}}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}n(38);var p,c,h=["java","devops","development","webdev","frontend","javascript","ai","golang","design","python","nodejs","react","android","deep-learning","kubernetes","algorithms","ios"],l=(function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(Index,we.Component),o(Index,[{"key":"_constructor","value":function _constructor(){(function get(e,t,n){null===e&&(e=Function.prototype);var o=Object.getOwnPropertyDescriptor(e,t);if(void 0===o){var a=Object.getPrototypeOf(e);return null===a?void 0:get(a,t,n)}if("value"in o)return o.value;var r=o.get;return void 0!==r?r.call(n):void 0})(Index.prototype.__proto__||Object.getPrototypeOf(Index.prototype),"_constructor",this).apply(this,arguments),this.state={"top":0,"show":!0,"pub":"","keyword":"","innerHeight":750,"tag":"","type":"latest","title":"Daily 最新动态","hits":[],"showTabsOptions":!1,"isRefresh":!1},this.$$refs=new _.default.RefsArray}},{"key":"componentWillMount","value":(c=_asyncToGenerator(f.default.mark(function _callee6(){var t,n,o,a;return f.default.wrap(function _callee6$(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_.default.getMenuButtonBoundingClientRect();case 2:return t=e.sent,e.next=5,_.default.getSystemInfoSync();case 5:return n=e.sent,this.setState({"top":t.top+2,"innerHeight":n.windowHeight}),e.next=9,this.props.indexStore.initSetting();case 9:(!(o=_.default.getStorageSync("refreshTime"))||Number(o)>=(new Date).getTime()+6048e5)&&(this.setState({"isRefresh":!0}),_.default.setStorage({"key":"refreshTime","data":(new Date).getTime()})),(a=_.default.getStorageSync("tags"))&&(this.props.indexStore.tags=a);case 13:case"end":return e.stop()}},_callee6,this)})),function componentWillMount(){return c.apply(this,arguments)})},{"key":"componentDidMount","value":(p=_asyncToGenerator(f.default.mark(function _callee7(){return f.default.wrap(function _callee7$(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getPost(!1);case 2:this.getPopularTags();case 3:case"end":return e.stop()}},_callee7,this)})),function componentDidMount(){return p.apply(this,arguments)})},{"key":"componentWillUnmount","value":function componentWillUnmount(){}},{"key":"componentWillReact","value":function componentWillReact(){}},{"key":"onShareAppMessage","value":function onShareAppMessage(e){return"button"===e.from&&console.log(e.target),{"title":"程序猿日报","path":"pages/index/index","success":function success(e){console.log("转发成功:"+JSON.stringify(e))},"fail":function fail(e){console.log("转发失败:"+JSON.stringify(e))}}}},{"key":"onShareTimeline","value":function onShareTimeline(e){return"button"===e.from&&console.log(e.target),{"title":"程序猿日报","path":"pages/index/index","success":function success(e){console.log("转发成功:"+JSON.stringify(e))},"fail":function fail(e){console.log("转发失败:"+JSON.stringify(e))}}}},{"key":"componentDidShow","value":function componentDidShow(){var e=this.props.indexStore;e.isAuth||e.getAuth()}},{"key":"componentDidHide","value":function componentDidHide(){}},{"key":"_createData","value":function _createData(e,t,n){var i=this;this.__state=e||this.state||{},this.__props=t||this.props||{};var s=this.$prefix,o=(0,we.genCompid)(s+"$compid__29"),a=be(o,2),r=a[0],u=a[1],p=(0,we.genCompid)(s+"$compid__30"),c=be(p,2),l=c[0],d=c[1],f=(0,we.genCompid)(s+"$compid__31"),g=be(f,2),_=g[0],m=g[1],h=(0,we.genCompid)(s+"$compid__32"),y=be(h,2),S=y[0],v=y[1],b=(0,we.genCompid)(s+"$compid__33"),w=be(b,2),x=w[0],P=w[1],T=(0,we.genCompid)(s+"$compid__34"),$=be(T,2),O=$[0],k=$[1],C=(0,we.genCompid)(s+"$compid__35"),I=be(C,2),j=I[0],z=I[1],M=(0,we.genCompid)(s+"$compid__36"),D=be(M,2),R=D[0],q=D[1],L=(0,we.genCompid)(s+"$compid__37"),A=be(L,2),B=A[0],N=A[1],G=(0,we.genCompid)(s+"$compid__38"),J=be(G,2),F=J[0],H=J[1],U=this.__state,E=(U.title,U.top),W=U.show,V=U.pub,Q=U.tag,X=(U.keyword,U.innerHeight),K=(U.hits,U.showTabsOptions,this.__props.indexStore),Y=K.list,Z=K.posts,ee=K.allPubs,te=K.allTags,ne=K.tags,oe=K.pubs,ae=K.setting,re=K.favPids,ie=V?ee.filter(function(e){return e.id===V})[0]:{"image":"","name":""},se=oe.includes(V),ue=ne.includes(Q),pe=(ee.filter(function(e){return oe.includes(e.id)}),re.map(function(e){return Z[e]})),ce=ae.language[1],le="#323E70",de=(0,we.internal_inline_style)({"color":"#1c1e21","padding":E+"px 0 10px 10px","height":"35px"});this.anonymousFunc0=function(){return i.__props.indexStore.setSetting("show",!0)};var fe=(0,we.internal_inline_style)({"transform":"translateX("+(W?"-50%":"0")+")"}),ge=(0,we.internal_inline_style)({"height":X-E-50+"px"}),_e=0===re.length?(0,we.internal_inline_style)({"color":"#a9abb3","textAlign":"center","padding":"10px 0"}):null,me=(0,we.internal_inline_style)({"height":X-E-50+"px"}),he=V?(0,we.internal_inline_style)({"display":"flex","alignItems":"center"}):null,ye=V?(0,we.internal_inline_style)({"color":se?"#f58301":le}):null,Se=Q?(0,we.internal_inline_style)({"color":ue?"#f58301":le}):null,ve=Y.map(function(e,t){e={"$original":(0,we.internal_get_original)(e)};var n=(0,we.genCompid)(s+"czzzzzzzzz"+t,!0),o=be(n,2),a=o[0],r=o[1];return we.propsManager.set({"pid":e.$original,"post":Z[e.$original],"setting":ae,"onPost":i.onPost,"onTag":i.onTag,"onPub":i.onPub},r,a),{"$compid__28":r,"$original":e.$original}});return we.propsManager.set({"setting":ae,"onSet":K.setSetting.bind(K),"show":ae.show},u,r),we.propsManager.set({"name":"gengduo","size":40,"color":le},d,l),we.propsManager.set({"name":"Settingscontroloptions","size":40,"color":le},m,_),we.propsManager.set({"name":"caidan","size":50,"color":le},v,S),we.propsManager.set({"name":"tag","size":50,"color":le},P,x),we.propsManager.set({"name":"sousuo","size":36,"color":"#000"},k,O),we.propsManager.set({"name":"more1","size":50,"color":le},z,j),we.propsManager.set({"name":"shoucang","size":50,"color":le},q,R),V&&we.propsManager.set({"name":"rss","size":40,"color":se?"#f58301":le},N,B),Q&&we.propsManager.set({"name":"tag","size":40,"color":ue?"#f58301":le},H,F),Object.assign(this.__state,{"anonymousState__temp":de,"anonymousState__temp2":fe,"anonymousState__temp3":ge,"anonymousState__temp4":_e,"anonymousState__temp5":me,"anonymousState__temp6":he,"anonymousState__temp7":ye,"anonymousState__temp8":Se,"loopArray10":ve,"$compid__29":u,"$compid__30":d,"$compid__31":m,"$compid__32":v,"$compid__33":P,"$compid__34":k,"$compid__35":z,"$compid__36":q,"$compid__37":N,"$compid__38":H,"setting":ae,"tags":ne,"allTags":te,"favPids":re,"favPost":pe,"thePub":ie,"isPub":se,"isTag":ue,"list":Y,"itemLan":ce}),this.__state}},{"key":"anonymousFunc0","value":function anonymousFunc0(){}}]),r=a=Index,a.$$events=["onShowPage","anonymousFunc0","onTabs","onChangeTab","onTag","onSearch","onLikeTag","onPost","onNext","onLikePub"],a.$$componentPath="pages/index/index",r);function Index(){var e,t,l,d=this;!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Index);for(var n,o,a=arguments.length,r=Array(a),i=0;i<a;i++)r[i]=arguments[i];return(t=l=_possibleConstructorReturn(this,(e=Index.__proto__||Object.getPrototypeOf(Index)).call.apply(e,[this].concat(r)))).$usedState=["anonymousState__temp","anonymousState__temp2","anonymousState__temp3","anonymousState__temp4","anonymousState__temp5","anonymousState__temp6","anonymousState__temp7","anonymousState__temp8","loopArray10","$compid__29","$compid__30","$compid__31","$compid__32","$compid__33","$compid__34","$compid__35","$compid__36","$compid__37","$compid__38","showTabsOptions","setting","tags","keyword","hits","allTags","favPids","favPost","pub","thePub","isPub","tag","isTag","list","itemLan","title","top","show","innerHeight","type","isRefresh","indexStore"],l.config={"navigationBarTitleText":u.default.description,"navigationStyle":"custom"},l.getPubs=_asyncToGenerator(f.default.mark(function _callee(){var t;return f.default.wrap(function _callee$(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_.default.getStorageSync("publications");case 2:(t=e.sent)&&!l.state.isRefresh?l.props.indexStore.allPubs=t:_.default.request({"url":m.Uri+"daily/v1/publications"}).then(function(e){l.props.indexStore.allPubs=e.data,_.default.setStorageSync("publications",e.data)});case 4:case"end":return e.stop()}},_callee,d)})),l.getPopularTags=_asyncToGenerator(f.default.mark(function _callee2(){var t;return f.default.wrap(function _callee2$(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_.default.getStorageSync("popularTags");case 2:(t=e.sent)&&!l.state.isRefresh?l.props.indexStore.allTags=t:_.default.request({"url":m.Uri+"daily/v1/tags/popular"}).then(function(e){t=e.data.map(function(e){return e.name}).filter(function(e){return e.indexOf("new")<0}),l.props.indexStore.allTags=t,_.default.setStorageSync("popularTags",t)});case 4:case"end":return e.stop()}},_callee2,d)})),l.getPost=function(){var e=!(0<arguments.length&&void 0!==arguments[0])||arguments[0],i=l.props.indexStore,s=i.page,t=l.state,n=t.type,o=t.pub,a=t.tag;0===s&&i.setList([],!1);var r,u={"latest":['"sortBy":"popularity"',"fetchLatest","QueryPostInput","latest","latest"],"pub":['"pub":"'+o+'"',"fetchPostsByPublication","PostByPublicationInput","postsByPublication","postsByPublication"],"tag":['"tag":"'+a+'"',"fetchPostsByTag","PostByTagInput","postsByTag","postsByTag"]}[n],p="query "+u[1]+"($params: "+u[2]+") { "+u[3]+"(params: $params) { id,title,url,publishedAt,createdAt,image,ratio,placeholder,views,readTime,publication { id, name, image },tags } }",c='{"params":{"latest":"'+(new Date).toISOString()+'","page":'+s+',"pageSize":20,'+u[0]+"}}";"latest"===n&&(c=JSON.stringify(l.fetchLatestVariables())),_.default.request({"url":m.Uri+"daily/graphql","data":{"query":p,"variables":c}}).then((r=_asyncToGenerator(f.default.mark(function _callee3(t){var n,o,a,r;return f.default.wrap(function _callee3$(e){for(;;)switch(e.prev=e.next){case 0:return n=t.data.data,o=n[u[4]],l.props.indexStore.more=20===o.length,e.next=5,l.savePosts(o.map(function(e){return{"id":e.id,"title":e.title}}));case 5:a=e.sent,r=o.map(function(e){return i.setPost(g({},e,{"title_cn":a[e.id]})),e.id}),i.setList(r,0<s);case 8:case"end":return e.stop()}},_callee3,d)})),function(e){return r.apply(this,arguments)})).catch(function(){e&&_.default.hideLoading(),_.default.showToast({"title":"数据拉取失败","duration":2e3})})},l.fetchLatestVariables=function(){var e=l.props.indexStore,t=e.setting.tabId?h:e.tags;return{"params":g({"latest":(new Date).toISOString(),"page":e.page,"pageSize":20},t&&{"tags":t.join()},{"sortBy":e.setting.order})}},l.onPub=function(e){l.props.indexStore.page=0,l.setState({"pub":e,"keyword":"","type":"pub","tag":"","title":"@ "+e,"show":!0},function(){return l.getPost()})},l.onPost=function(e){_.default.navigateTo({"url":"/pages/post/index?&id="+e})},l.onSearch=function(e){var t=e.detail.value.toLowerCase();l.setState({"keyword":""}),l.searchTag(t)},l.searchTag=(o=_asyncToGenerator(f.default.mark(function _callee4(t){var n,o;return f.default.wrap(function _callee4$(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_.default.request({"url":m.Uri+"daily/v1/tags/search?query="+t});case 2:n=e.sent,o=n.data.hits.map(function(e){return e.name}),l.setState({"hits":o});case 5:case"end":return e.stop()}},_callee4,d)})),function(e){return o.apply(this,arguments)}),l.onNext=function(){l.props.indexStore.more&&(l.props.indexStore.page+=1,l.getPost(!1))},l.onTag=function(e){l.props.indexStore.page=0,l.setState({"tag":e,"keyword":"","pub":"","type":"tag","title":"# "+e,"show":!0},function(){return l.getPost()})},l.onChangeTab=function(e){var t=l.props.indexStore;l.setState({"showTabsOptions":!1}),t.setting.tabId!==e&&(t.page=0,2!==e&&t.setSetting("tabId",e),l.setState({"showTabsOptions":!1,"keyword":"","pub":"","tag":"","type":"latest"},function(){l.getPost()}))},l.onLikeTag=function(t){var e=l.props.indexStore,n=e.tags,o=e.auth.openid;n.includes(t)?n=n.filter(function(e){return e!==t}):n.push(t),l.props.indexStore.tags=n,_.default.setStorage({"key":"tags","data":n}),_.default.request({"url":m.Uri+"user/me","method":"POST","data":{"uid":o,"platform":"wechat","tag":t}})},l.onLikePub=function(e){},l.savePosts=(n=_asyncToGenerator(f.default.mark(function _callee5(t){var n,o;return f.default.wrap(function _callee5$(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_.default.request({"url":"https://daily.leeapps.cn/post/create","method":"POST","data":{"list":t}});case 2:return n=e.sent,o={},0===n.data.code&&n.data.data.forEach(function(e){o[e.pid]=e.title_cn}),e.abrupt("return",o);case 6:case"end":return e.stop()}},_callee5,d)})),function(e){return n.apply(this,arguments)}),l.onTabs=function(){var e=l.state,t=e.showTabsOptions;if(!e.show)return l.setState({"show":!0});l.setState({"showTabsOptions":!t})},l.onShowPage=function(){var e=l.state.show,t=l.props.indexStore;e&&!t.favsDone&&t.getFavPosts(),l.setState({"show":!e})},l.customComponents=["Setting","IconFont","Post","Loading"],_possibleConstructorReturn(l,t)}l=(0,i.__decorate)([(0,s.inject)("indexStore"),s.observer],l),t.default=l,Component(n(0).default.createComponent(l,!0))},"58":function(e,t,n){"use strict";n.p}},[[36,0,1,2]]]);