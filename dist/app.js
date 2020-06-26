require("./runtime");
require("./common");
require("./vendors");

(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["app"],{

/***/ "./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/app.tsx?taro&type=script&parse=ENTRY&":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/app.tsx?taro&type=script&parse=ENTRY& ***!
  \************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _taroWeapp = __webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js");

var _taroWeapp2 = _interopRequireDefault(_taroWeapp);

var _mobx = __webpack_require__(/*! @tarojs/mobx */ "./node_modules/@tarojs/mobx/index.js");

var _index = __webpack_require__(/*! ./store/index */ "./src/store/index.ts");

var _index2 = _interopRequireDefault(_index);

__webpack_require__(/*! ./app.styl */ "./src/app.styl");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }
var store = {
  indexStore: _index2.default
};
(0, _mobx.setStore)(store);
;

var _App = function (_BaseComponent) {
  _inherits(_App, _BaseComponent);

  function _App() {
    _classCallCheck(this, _App);

    /**
     * 指定config的类型声明为: Taro.Config
     *
     * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
     * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
     * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
     */
    var _this = _possibleConstructorReturn(this, (_App.__proto__ || Object.getPrototypeOf(_App)).apply(this, arguments));

    _this.config = {
      pages: ['pages/post/index', 'pages/index/index'],
      window: {
        backgroundTextStyle: 'light',
        navigationBarBackgroundColor: '#fff',
        navigationBarTitleText: 'WeChat',
        navigationBarTextStyle: 'black'
      }
    };
    return _this;
  }

  _createClass(_App, [{
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
    key: "componentDidShow",
    value: function componentDidShow() {}
  }, {
    key: "componentDidHide",
    value: function componentDidHide() {}
  }, {
    key: "componentDidCatchError",
    value: function componentDidCatchError() {}
    // 在 App 类中的 render() 函数没有实际作用
    // 请勿修改此函数

  }, {
    key: "_createData",
    value: function _createData() {}
  }]);

  return _App;
}(_taroWeapp.Component);

exports.default = _App;

App(__webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js").default.createApp(_App));
_taroWeapp2.default.initPxTransform({
  "designWidth": 750,
  "deviceRatio": {
    "640": 1.17,
    "750": 1,
    "828": 0.905
  }
});

/***/ }),

/***/ "./src/app.styl":
/*!**********************!*\
  !*** ./src/app.styl ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/app.tsx":
/*!*********************!*\
  !*** ./src/app.tsx ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_tsx_taro_type_script_parse_ENTRY___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.tsx?taro&type=script&parse=ENTRY& */ "./src/app.tsx?taro&type=script&parse=ENTRY&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _app_tsx_taro_type_script_parse_ENTRY___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _app_tsx_taro_type_script_parse_ENTRY___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));



/***/ }),

/***/ "./src/app.tsx?taro&type=script&parse=ENTRY&":
/*!***************************************************!*\
  !*** ./src/app.tsx?taro&type=script&parse=ENTRY& ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_app_tsx_taro_type_script_parse_ENTRY___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./app.tsx?taro&type=script&parse=ENTRY& */ "./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/app.tsx?taro&type=script&parse=ENTRY&");
/* harmony import */ var _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_app_tsx_taro_type_script_parse_ENTRY___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_app_tsx_taro_type_script_parse_ENTRY___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_app_tsx_taro_type_script_parse_ENTRY___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_app_tsx_taro_type_script_parse_ENTRY___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_app_tsx_taro_type_script_parse_ENTRY___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/store/index.ts":
/*!****************************!*\
  !*** ./src/store/index.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _tslib = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var _taroWeapp = __webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js");

var _taroWeapp2 = _interopRequireDefault(_taroWeapp);

var _mobx = __webpack_require__(/*! mobx */ "./node_modules/mobx/lib/mobx.module.js");

var _index = __webpack_require__(/*! ../api/index */ "./src/api/index.ts");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Store = function () {
  function Store() {
    _classCallCheck(this, Store);

    this.auth = { openid: '', session_key: '' };
    this.isAuth = false;
    this.list = [];
    this.posts = {};
    this.tags = [];
    this.pubs = [];
    this.favs = [];
    this.allTags = [];
    this.allPubs = [];
    this.page = 0;
    this.setting = {
      language: [1, 2, 0],
      theme: 0,
      order: 'popularity'
    };
  }

  _createClass(Store, [{
    key: "setAuth",
    value: function setAuth(obj) {
      this.isAuth = true;
      this.auth = obj;
    }
  }, {
    key: "setList",
    value: function setList(list, more) {
      this.list = more ? [].concat(_toConsumableArray(this.list), _toConsumableArray(list)) : list;
    }
  }, {
    key: "setPost",
    value: function setPost(newObj) {
      var id = newObj.id;
      var old = this.posts[id] || {};
      this.posts[id] = _extends({}, old, newObj);
    }
  }, {
    key: "setTags",
    value: function setTags(list) {
      this.tags = list;
    }
  }, {
    key: "setPubs",
    value: function setPubs(list) {
      this.pubs = list;
    }
  }, {
    key: "setFavs",
    value: function setFavs(list) {
      this.favs = list;
    }
  }, {
    key: "getAuth",
    value: function getAuth() {
      var _this = this;

      _taroWeapp2.default.getStorage({
        key: "auth"
      }).then(function (res) {
        _this.setAuth(res.data);
        setTimeout(function () {
          return _this.checkUser();
        }, 1000);
      }).catch(function () {
        _taroWeapp2.default.login().then(function (res) {
          _taroWeapp2.default.request({
            url: _index.AuthUri + "auth?js_code=" + res.code + "&type=daily"
          }).then(function (res1) {
            return res1.data;
          }).then(function (res2) {
            if (res2.openid) {
              _this.setAuth(res2);
              _taroWeapp2.default.setStorageSync("auth", res2);
              setTimeout(function () {
                return _this.checkUser();
              }, 1000);
            }
          });
        });
      });
    }
  }, {
    key: "checkUser",
    value: function checkUser() {
      var _this2 = this;

      var openid = this.auth.openid;

      _taroWeapp2.default.request({
        url: _index.Uri + "user/me?uid=" + openid + "&platform=wechat"
      }).then(function (res) {
        var _res$data$data = res.data.data,
            tags = _res$data$data.tags,
            pubs = _res$data$data.pubs,
            favs = _res$data$data.favs;

        _this2.setTags(tags);
        _this2.setPubs(pubs);
        _this2.setFavs(favs);
      });
    }
  }]);

  return Store;
}();

(0, _tslib.__decorate)([_mobx.observable], Store.prototype, "auth", undefined);
(0, _tslib.__decorate)([_mobx.observable], Store.prototype, "isAuth", undefined);
(0, _tslib.__decorate)([_mobx.observable], Store.prototype, "list", undefined);
(0, _tslib.__decorate)([_mobx.observable], Store.prototype, "posts", undefined);
(0, _tslib.__decorate)([_mobx.observable], Store.prototype, "tags", undefined);
(0, _tslib.__decorate)([_mobx.observable], Store.prototype, "pubs", undefined);
(0, _tslib.__decorate)([_mobx.observable], Store.prototype, "favs", undefined);
(0, _tslib.__decorate)([_mobx.observable], Store.prototype, "allTags", undefined);
(0, _tslib.__decorate)([_mobx.observable], Store.prototype, "allPubs", undefined);
(0, _tslib.__decorate)([_mobx.observable], Store.prototype, "page", undefined);
(0, _tslib.__decorate)([_mobx.observable], Store.prototype, "setting", undefined);
(0, _tslib.__decorate)([_mobx.action], Store.prototype, "setAuth", null);
(0, _tslib.__decorate)([_mobx.action], Store.prototype, "setList", null);
(0, _tslib.__decorate)([_mobx.action], Store.prototype, "setPost", null);
(0, _tslib.__decorate)([_mobx.action], Store.prototype, "setTags", null);
(0, _tslib.__decorate)([_mobx.action], Store.prototype, "setPubs", null);
(0, _tslib.__decorate)([_mobx.action], Store.prototype, "setFavs", null);
(0, _tslib.__decorate)([_mobx.action], Store.prototype, "getAuth", null);
(0, _tslib.__decorate)([_mobx.action], Store.prototype, "checkUser", null);
exports.default = new Store();

/***/ })

},[["./src/app.tsx","runtime","vendors","common"]]]);;