(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/post/index"],{

/***/ "./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/post/index.tsx?taro&type=script&parse=PAGE&":
/*!************************************************************************************************************************************************!*\
  !*** ./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/pages/post/index.tsx?taro&type=script&parse=PAGE& ***!
  \************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(/*! babel-runtime/regenerator */ "./node_modules/babel-runtime/regenerator/index.js");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _class, _temp2;

var _tslib = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var _taroWeapp = __webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js");

var _taroWeapp2 = _interopRequireDefault(_taroWeapp);

var _mobx = __webpack_require__(/*! @tarojs/mobx */ "./node_modules/@tarojs/mobx/index.js");

var _index = __webpack_require__(/*! ../../api/index */ "./src/api/index.ts");

var _index2 = __webpack_require__(/*! ../../utils/index */ "./src/utils/index.ts");

__webpack_require__(/*! ./index.styl */ "./src/pages/post/index.styl");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Index = (_temp2 = _class = function (_BaseComponent) {
  _inherits(Index, _BaseComponent);

  function Index() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["anonymousState__temp", "anonymousState__temp2", "$compid__33", "$compid__34", "$compid__35", "Themes", "theme", "isLike", "language", "img", "md", "title", "title_cn", "pid", "top", "url", "indexStore"], _this.config = {
      navigationBarTitleText: "详情页",
      navigationStyle: "custom",
      usingComponents: {
        wemark: "../../wemark/wemark"
      }
    }, _this.setData = function (data) {
      var content = (0, _index2.fixUrl)(data.content, data.url);
      _this.setState({
        pid: data.id,
        title: data.title,
        title_cn: data.title_cn,
        url: data.url,
        img: data.image,
        md: content
      });
    }, _this.onHome = function () {
      var len = _taroWeapp2.default.getCurrentPages().length;
      if (len > 1) {
        _taroWeapp2.default.navigateBack();
      } else {
        _taroWeapp2.default.navigateTo({
          url: "/pages/index/index"
        });
      }
    }, _this.onCopyUrl = function () {
      var url = _this.state.url;

      _taroWeapp2.default.setClipboardData({
        data: url,
        success: function success() {
          _taroWeapp2.default.showToast({
            title: "原文链接已复制",
            duration: 1000
          });
        }
      });
    }, _this.onLike = function () {
      var _this$props$indexStor = _this.props.indexStore,
          favs = _this$props$indexStor.favs,
          openid = _this$props$indexStor.auth.openid;
      var pid = _this.state.pid;

      var fav = String(pid);
      if (favs.includes(fav)) {
        favs = favs.filter(function (v) {
          return v !== fav;
        });
      } else {
        favs.push(fav);
      }
      _this.props.indexStore.favs = favs;
      _taroWeapp2.default.request({
        url: _index.Uri + "user/me",
        method: 'POST',
        data: {
          uid: openid,
          platform: 'wechat',
          fav: pid
        }
      });
    }, _this.onSet = function () {}, _this.customComponents = ["IconFont"], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: "_constructor",
    value: function _constructor() {
      _get(Index.prototype.__proto__ || Object.getPrototypeOf(Index.prototype), "_constructor", this).apply(this, arguments);
      /**
       * 指定config的类型声明为: Taro.Config
       *
       * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
       * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
       * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
       */
      this.state = {
        pid: 0,
        md: "",
        title: "",
        title_cn: "",
        top: 0,
        url: "",
        img: ""
      };
      this.$$refs = new _taroWeapp2.default.RefsArray();
    }
  }, {
    key: "componentWillMount",
    value: function componentWillMount() {
      var menuBtn = _taroWeapp2.default.getMenuButtonBoundingClientRect();
      this.setState({
        top: menuBtn.top + 2
      });
    }
  }, {
    key: "onShareAppMessage",
    value: function onShareAppMessage(ops) {
      var query = this.$router.params;
      var title = this.state.title;

      if (ops.from === "button") {
        // 来自页面内转发按钮
        console.log(ops.target);
      }
      return {
        title: "" + title,
        path: "pages/post/index?id=" + query.id,
        success: function success(res) {
          // 转发成功
          console.log("转发成功:" + JSON.stringify(res));
        },
        fail: function fail(res) {
          // 转发失败
          console.log("转发失败:" + JSON.stringify(res));
        }
      };
    }
  }, {
    key: "componentDidShow",
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        var _this2 = this;

        var query, indexStore, posts, isAuth, id, data;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                query = this.$router.params;
                indexStore = this.props.indexStore;
                posts = indexStore.posts, isAuth = indexStore.isAuth;

                if (!isAuth) {
                  indexStore.getAuth();
                }id = query.id || '74b935d8749907d4cfad7386b7e6b5e5';
                data = posts[id] || {};

                if (data && data.content) {
                  // 已有数据
                  this.setData(data);
                } else {
                  _taroWeapp2.default.showLoading({
                    title: "请求数据中"
                  });
                  _taroWeapp2.default.request({
                    url: _index.Uri + "post/fetch",
                    data: {
                      pid: id,
                      link: data.url || null
                    }
                  }).then(function (res) {
                    if (res.data.code === 0) {
                      data = res.data.data;
                      indexStore.setPost({
                        id: id,
                        pid: data.id,
                        author: data.author,
                        lead_image_url: data.lead_image_url,
                        word_count: data.word_count,
                        content: data.content,
                        content_cn: data.content_cn
                      });
                      _this2.setData(data);
                      _taroWeapp2.default.hideLoading();
                    }
                  }).catch(function (err) {
                    _taroWeapp2.default.showToast({
                      title: "拉取数据失败",
                      duration: 2000
                    });
                  });
                }

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function componentDidShow() {
        return _ref2.apply(this, arguments);
      }

      return componentDidShow;
    }()
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;

      var _genCompid = (0, _taroWeapp.genCompid)(__prefix + "$compid__33"),
          _genCompid2 = _slicedToArray(_genCompid, 2),
          $prevCompid__33 = _genCompid2[0],
          $compid__33 = _genCompid2[1];

      var _genCompid3 = (0, _taroWeapp.genCompid)(__prefix + "$compid__34"),
          _genCompid4 = _slicedToArray(_genCompid3, 2),
          $prevCompid__34 = _genCompid4[0],
          $compid__34 = _genCompid4[1];

      var _genCompid5 = (0, _taroWeapp.genCompid)(__prefix + "$compid__35"),
          _genCompid6 = _slicedToArray(_genCompid5, 2),
          $prevCompid__35 = _genCompid6[0],
          $compid__35 = _genCompid6[1];

      var _props$indexStore = this.__props.indexStore,
          _props$indexStore$set = _props$indexStore.setting,
          language = _props$indexStore$set.language,
          theme = _props$indexStore$set.theme,
          favs = _props$indexStore.favs;
      var _state = this.__state,
          md = _state.md,
          title = _state.title,
          top = _state.top,
          img = _state.img,
          title_cn = _state.title_cn,
          pid = _state.pid;

      var isLike = favs.includes(String(pid));
      var anonymousState__temp = (0, _taroWeapp.internal_inline_style)({ padding: top + "px 0 0 10px" });
      var anonymousState__temp2 = (0, _taroWeapp.internal_inline_style)({ padding: '10px' });
      _taroWeapp.propsManager.set({
        "name": "home",
        "size": 40,
        "color": "#323E70"
      }, $compid__33, $prevCompid__33);
      _taroWeapp.propsManager.set({
        "name": "Settingscontroloptions",
        "size": 40,
        "color": "#323E70"
      }, $compid__34, $prevCompid__34);
      _taroWeapp.propsManager.set({
        "name": isLike ? 'bqxin' : 'xin',
        "size": 40,
        "color": "#323E70"
      }, $compid__35, $prevCompid__35);
      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp,
        anonymousState__temp2: anonymousState__temp2,
        $compid__33: $compid__33,
        $compid__34: $compid__34,
        $compid__35: $compid__35,
        Themes: _index.Themes,
        theme: theme,
        isLike: isLike,
        language: language
      });
      return this.__state;
    }
  }]);

  return Index;
}(_taroWeapp.Component), _class.$$events = ["onHome", "onSet", "onLike", "onCopyUrl"], _class.$$componentPath = "pages/post/index", _temp2);
Index = (0, _tslib.__decorate)([(0, _mobx.inject)("indexStore"), _mobx.observer], Index);
exports.default = Index;

Component(__webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js").default.createComponent(Index, true));

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=D:\\www\\mapp-coder-daily\\src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/post/index.tsx?taro&type=template&parse=PAGE&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=D:/www/mapp-coder-daily/src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/pages/post/index.tsx?taro&type=template&parse=PAGE& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pages/post/index.wxml";

/***/ }),

/***/ "./src/pages/post/index.styl":
/*!***********************************!*\
  !*** ./src/pages/post/index.styl ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/post/index.tsx":
/*!**********************************!*\
  !*** ./src/pages/post/index.tsx ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.tsx?taro&type=template&parse=PAGE& */ "./src/pages/post/index.tsx?taro&type=template&parse=PAGE&");
/* harmony import */ var _index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.tsx?taro&type=script&parse=PAGE& */ "./src/pages/post/index.tsx?taro&type=script&parse=PAGE&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));




/***/ }),

/***/ "./src/pages/post/index.tsx?taro&type=script&parse=PAGE&":
/*!***************************************************************!*\
  !*** ./src/pages/post/index.tsx?taro&type=script&parse=PAGE& ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./index.tsx?taro&type=script&parse=PAGE& */ "./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/post/index.tsx?taro&type=script&parse=PAGE&");
/* harmony import */ var _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/pages/post/index.tsx?taro&type=template&parse=PAGE&":
/*!*****************************************************************!*\
  !*** ./src/pages/post/index.tsx?taro&type=template&parse=PAGE& ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _file_loader_name_path_name_wxml_context_D_www_mapp_coder_daily_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!file-loader?name=[path][name].wxml&context=D:/www/mapp-coder-daily/src!../../../node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!../../../node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./index.tsx?taro&type=template&parse=PAGE& */ "./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=D:\\www\\mapp-coder-daily\\src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/post/index.tsx?taro&type=template&parse=PAGE&");
/* harmony import */ var _file_loader_name_path_name_wxml_context_D_www_mapp_coder_daily_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_file_loader_name_path_name_wxml_context_D_www_mapp_coder_daily_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _file_loader_name_path_name_wxml_context_D_www_mapp_coder_daily_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _file_loader_name_path_name_wxml_context_D_www_mapp_coder_daily_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ })

},[["./src/pages/post/index.tsx","runtime","vendors","common"]]]);