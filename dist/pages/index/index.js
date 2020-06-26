(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/index/index"],{

/***/ "./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/index/index.tsx?taro&type=script&parse=PAGE&":
/*!*************************************************************************************************************************************************!*\
  !*** ./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/pages/index/index.tsx?taro&type=script&parse=PAGE& ***!
  \*************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(/*! babel-runtime/regenerator */ "./node_modules/babel-runtime/regenerator/index.js");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _class, _temp2;

var _tslib = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var _taroWeapp = __webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js");

var _taroWeapp2 = _interopRequireDefault(_taroWeapp);

var _mobx = __webpack_require__(/*! @tarojs/mobx */ "./node_modules/@tarojs/mobx/index.js");

var _index = __webpack_require__(/*! ../../api/index */ "./src/api/index.ts");

var _project = __webpack_require__(/*! @project */ "./project.config.json");

var _project2 = _interopRequireDefault(_project);

__webpack_require__(/*! ./index.styl */ "./src/pages/index/index.styl");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Index = (_temp2 = _class = function (_BaseComponent) {
  _inherits(Index, _BaseComponent);

  function Index() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["anonymousState__temp", "anonymousState__temp2", "anonymousState__temp3", "anonymousState__temp4", "anonymousState__temp5", "anonymousState__temp6", "anonymousState__temp7", "anonymousState__temp8", "anonymousState__temp9", "loopArray12", "$compid__10", "$compid__11", "$compid__12", "$compid__13", "$compid__14", "show", "tabId", "tabs", "Publications", "tags", "keyword", "hits", "allTags", "pub", "thePub", "tag", "list", "title", "top", "innerHeight", "type", "indexStore"], _this.config = {
      navigationBarTitleText: _project2.default.description,
      navigationStyle: "custom"
    }, _this.getPubs = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
      var allPubs;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _taroWeapp2.default.getStorageSync("publications");

            case 2:
              allPubs = _context.sent;

              if (allPubs) {
                _this.props.indexStore.allPubs = allPubs;
              } else {
                _taroWeapp2.default.request({
                  url: _index.Uri + "daily/v1/publications"
                }).then(function (res) {
                  _this.props.indexStore.allPubs = res.data;
                  _taroWeapp2.default.setStorageSync("publications", res.data);
                });
              }

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, _this2);
    })), _this.getPopularTags = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
      var allTags;
      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return _taroWeapp2.default.getStorageSync("popularTags");

            case 2:
              allTags = _context2.sent;

              if (allTags) {
                _this.props.indexStore.allTags = allTags;
              } else {
                _taroWeapp2.default.request({
                  url: _index.Uri + "daily/v1/tags/popular"
                }).then(function (res) {
                  allTags = res.data.map(function (v) {
                    return v.name;
                  });
                  _this.props.indexStore.allTags = allTags;
                  _taroWeapp2.default.setStorageSync("popularTags", allTags);
                });
              }

            case 4:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, _this2);
    })), _this.getPost = function () {
      var indexStore = _this.props.indexStore;
      var page = indexStore.page;
      var _this$state = _this.state,
          type = _this$state.type,
          pub = _this$state.pub,
          tag = _this$state.tag;

      var types = {
        latest: ["\"sortBy\":\"popularity\"", "fetchLatest", "QueryPostInput", "latest", "latest"],
        pub: ["\"pub\":\"" + pub + "\"", "fetchPostsByPublication", "PostByPublicationInput", "postsByPublication", "postsByPublication"],
        tag: ["\"tag\":\"" + tag + "\"", "fetchPostsByTag", "PostByTagInput", "postsByTag", "postsByTag"]
      };
      var mapType = types[type];
      var query = "query " + mapType[1] + "($params: " + mapType[2] + ") { " + mapType[3] + "(params: $params) { id,title,url,publishedAt,createdAt,image,ratio,placeholder,views,readTime,publication { id, name, image },tags } }";
      _taroWeapp2.default.showLoading({
        title: "Loading ..."
      });
      var variables = "{\"params\":{\"latest\":\"" + new Date().toISOString() + "\",\"page\":" + page + ",\"pageSize\":20," + mapType[0] + "}}";
      if (type === "latest") {
        variables = JSON.stringify(_this.fetchLatestVariables());
      }
      _taroWeapp2.default.request({
        url: _index.Uri + "daily/graphql",
        data: {
          query: query,
          variables: variables
        }
      }).then(function () {
        var _ref4 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee3(res) {
          var data, newPosts, cns, ids;
          return _regenerator2.default.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  data = res.data.data;

                  _taroWeapp2.default.hideLoading();
                  newPosts = data[mapType[4]];
                  _context3.next = 5;
                  return _this.savePosts(newPosts.map(function (v) {
                    return { id: v.id, title: v.title };
                  }));

                case 5:
                  cns = _context3.sent;
                  ids = newPosts.map(function (v) {
                    indexStore.setPost(_extends({}, v, { title_cn: cns[v.id] }));
                    return v.id;
                  });

                  indexStore.setList(ids, page > 0);

                case 8:
                case "end":
                  return _context3.stop();
              }
            }
          }, _callee3, _this2);
        }));

        return function (_x) {
          return _ref4.apply(this, arguments);
        };
      }()).catch(function () {
        _taroWeapp2.default.hideLoading();
        _taroWeapp2.default.showToast({
          title: "数据拉取失败",
          duration: 2000
        });
      });
    }, _this.fetchLatestVariables = function () {
      var indexStore = _this.props.indexStore;
      var tabId = _this.state.tabId;

      var tags = tabId ? [] : indexStore.tags;
      var inputParams = _extends({
        latest: new Date().toISOString(),
        page: indexStore.page,
        pageSize: 20
      }, tags && { tags: tags.join() }, {
        sortBy: tabId ? "popularity" : "creation" // creation, popularity
      });
      return {
        params: inputParams
      };
    }, _this.onTopic = function (pub) {
      _this.props.indexStore.page = 0;
      _this.setState({
        pub: pub,
        keyword: "",
        type: "pub",
        tag: "",
        title: "@ " + pub
      }, function () {
        return _this.getPost();
      });
    }, _this.onPost = function (id) {
      _taroWeapp2.default.navigateTo({
        url: "/pages/post/index?&id=" + id
      });
    }, _this.onSearch = function (e) {
      var keyword = e.detail.value.toLowerCase();
      _this.setState({
        keyword: keyword
      });
      _this.searchTag(keyword);
      // 授权
      // https://app.dailynow.co/v1/auth/authorize?provider=github&redirect_uri=http://pi.leeapps.cn:5000/?provider=github&code_challenge=hUj93mi0vqKM0zehTG5dXQBvQ8h0-l-R6nlCuc9A_KU
    }, _this.searchTag = function () {
      var _ref5 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee4(tag) {
        var result, hits;
        return _regenerator2.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return _taroWeapp2.default.request({
                  url: _index.Uri + "daily/v1/tags/search?query=" + tag
                });

              case 2:
                result = _context4.sent;
                hits = result.data.hits.map(function (v) {
                  return v.name;
                });

                _this.setState({
                  hits: hits
                });

              case 5:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, _this2);
      }));

      return function (_x2) {
        return _ref5.apply(this, arguments);
      };
    }(), _this.onNext = function () {
      _this.props.indexStore.page += 1;
      _this.getPost();
    }, _this.onTag = function (tag) {
      var indexStore = _this.props.indexStore;

      indexStore.page = 0;
      _this.setState({
        tag: tag,
        keyword: "",
        pub: "",
        type: "tag",
        title: "# " + tag
      }, function () {
        return _this.getPost();
      });
    }, _this.onTabs = function (index) {
      var indexStore = _this.props.indexStore;

      indexStore.page = 0;
      _this.setState({
        tabId: index,
        keyword: "",
        pub: "",
        tag: "",
        type: "latest"
      }, function () {
        _this.getPost();
      });
    }, _this.onLikeTag = function (tag) {
      var _this$props$indexStor = _this.props.indexStore,
          tags = _this$props$indexStor.tags,
          openid = _this$props$indexStor.auth.openid;

      if (tags.includes(tag)) {
        tags = tags.filter(function (v) {
          return v !== tag;
        });
      } else {
        tags.push(tag);
      }
      _this.props.indexStore.tags = tags;
      _taroWeapp2.default.request({
        url: _index.Uri + "user/me",
        method: "POST",
        data: {
          uid: openid,
          platform: "wechat",
          tag: tag
        }
      });
    }, _this.onLikePub = function (pub) {
      var _this$props$indexStor2 = _this.props.indexStore,
          pubs = _this$props$indexStor2.pubs,
          openid = _this$props$indexStor2.auth.openid;

      if (pubs.includes(pub)) {
        pubs = pubs.filter(function (v) {
          return v !== pub;
        });
      } else {
        pubs.push(pub);
      }
      _this.props.indexStore.pubs = pubs;
      _taroWeapp2.default.request({
        url: _index.Uri + "user/me",
        method: "POST",
        data: {
          uid: openid,
          platform: "wechat",
          pub: pub
        }
      });
    }, _this.savePosts = function () {
      var _ref6 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee5(list) {
        var res, datas;
        return _regenerator2.default.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return _taroWeapp2.default.request({
                  url: "https://daily.leeapps.cn/post/create",
                  method: "POST",
                  data: {
                    list: list
                  }
                });

              case 2:
                res = _context5.sent;
                datas = {};

                if (res.data.code === 0) {
                  res.data.data.forEach(function (v) {
                    datas[v.id] = v.title;
                  });
                }
                return _context5.abrupt("return", datas);

              case 6:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, _this2);
      }));

      return function (_x3) {
        return _ref6.apply(this, arguments);
      };
    }(), _this.customComponents = ["IconFont", "Post"], _temp), _possibleConstructorReturn(_this, _ret);
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
        top: 0,
        show: true,
        pub: "",
        keyword: "",
        innerHeight: 750,
        tag: "",
        type: "latest",
        title: "Daily 最新动态",
        tabs: ["关注", "全部"],
        tabId: 1,
        hits: []
      };
      this.$$refs = new _taroWeapp2.default.RefsArray();
    }
  }, {
    key: "componentWillMount",
    value: function () {
      var _ref7 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee6() {
        var menuBtn, info;
        return _regenerator2.default.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return _taroWeapp2.default.getMenuButtonBoundingClientRect();

              case 2:
                menuBtn = _context6.sent;
                _context6.next = 5;
                return _taroWeapp2.default.getSystemInfoSync();

              case 5:
                info = _context6.sent;

                this.setState({
                  top: menuBtn.top + 2,
                  innerHeight: info.windowHeight
                });

              case 7:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function componentWillMount() {
        return _ref7.apply(this, arguments);
      }

      return componentWillMount;
    }()
  }, {
    key: "componentDidMount",
    value: function () {
      var _ref8 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee7() {
        return _regenerator2.default.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.next = 2;
                return this.getPost();

              case 2:
                this.getPopularTags();
                this.getPubs();

              case 4:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function componentDidMount() {
        return _ref8.apply(this, arguments);
      }

      return componentDidMount;
    }()
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {}
  }, {
    key: "componentWillReact",
    value: function componentWillReact() {}
  }, {
    key: "onShareAppMessage",
    value: function onShareAppMessage(ops) {
      if (ops.from === "button") {
        // 来自页面内转发按钮
        console.log(ops.target);
      }
      return {
        title: "\u7A0B\u5E8F\u733F\u65E5\u62A5",
        path: "pages/index/index",
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
    value: function componentDidShow() {
      var indexStore = this.props.indexStore;

      if (!indexStore.isAuth) {
        indexStore.getAuth();
      }
    }
  }, {
    key: "componentDidHide",
    value: function componentDidHide() {}
  }, {
    key: "_createData",
    value: function _createData() {
      var _this3 = this;

      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;

      var _genCompid = (0, _taroWeapp.genCompid)(__prefix + "$compid__10"),
          _genCompid2 = _slicedToArray(_genCompid, 2),
          $prevCompid__10 = _genCompid2[0],
          $compid__10 = _genCompid2[1];

      var _genCompid3 = (0, _taroWeapp.genCompid)(__prefix + "$compid__11"),
          _genCompid4 = _slicedToArray(_genCompid3, 2),
          $prevCompid__11 = _genCompid4[0],
          $compid__11 = _genCompid4[1];

      var _genCompid5 = (0, _taroWeapp.genCompid)(__prefix + "$compid__12"),
          _genCompid6 = _slicedToArray(_genCompid5, 2),
          $prevCompid__12 = _genCompid6[0],
          $compid__12 = _genCompid6[1];

      var _genCompid7 = (0, _taroWeapp.genCompid)(__prefix + "$compid__13"),
          _genCompid8 = _slicedToArray(_genCompid7, 2),
          $prevCompid__13 = _genCompid8[0],
          $compid__13 = _genCompid8[1];

      var _genCompid9 = (0, _taroWeapp.genCompid)(__prefix + "$compid__14"),
          _genCompid10 = _slicedToArray(_genCompid9, 2),
          $prevCompid__14 = _genCompid10[0],
          $compid__14 = _genCompid10[1];

      var _state = this.__state,
          title = _state.title,
          top = _state.top,
          show = _state.show,
          pub = _state.pub,
          tag = _state.tag,
          keyword = _state.keyword,
          innerHeight = _state.innerHeight,
          tabs = _state.tabs,
          tabId = _state.tabId,
          hits = _state.hits;
      var _props$indexStore = this.__props.indexStore,
          list = _props$indexStore.list,
          posts = _props$indexStore.posts,
          allPubs = _props$indexStore.allPubs,
          allTags = _props$indexStore.allTags,
          tags = _props$indexStore.tags,
          pubs = _props$indexStore.pubs,
          setting = _props$indexStore.setting;

      var thePub = pub ? allPubs.filter(function (v) {
        return v.id === pub;
      })[0] : { image: "", name: "" };
      var isPub = pubs.includes(pub);
      var isTag = tags.includes(tag);
      var publication1 = allPubs.filter(function (v) {
        return pubs.includes(v.id);
      });
      var publication2 = allPubs.filter(function (v) {
        return !pubs.includes(v.id);
      });
      var Publications = [].concat(_toConsumableArray(publication1), _toConsumableArray(publication2));
      var anonymousState__temp = (0, _taroWeapp.internal_inline_style)({
        color: "#1c1e21",
        padding: top + "px 0 0 10px",
        height: "35px"
      });

      this.anonymousFunc0 = function () {
        return _this3.setState({ show: false });
      };

      this.anonymousFunc1 = function () {
        return _this3.setState({ show: true });
      };

      var anonymousState__temp2 = (0, _taroWeapp.internal_inline_style)({ transform: "translateX(" + (show ? "-50%" : "0") + ")" });
      var anonymousState__temp3 = (0, _taroWeapp.internal_inline_style)({ height: innerHeight - top - 35 + "px" });
      var anonymousState__temp4 = (0, _taroWeapp.internal_inline_style)({ color: "#fff", padding: "20px 0 10px 20px" });
      var anonymousState__temp5 = (0, _taroWeapp.internal_inline_style)({ height: "200px" });
      var anonymousState__temp6 = (0, _taroWeapp.internal_inline_style)({ height: innerHeight - top - 35 + "px" });
      var anonymousState__temp7 = pub ? (0, _taroWeapp.internal_inline_style)({ display: "flex", alignItems: "center" }) : null;
      var anonymousState__temp8 = pub ? (0, _taroWeapp.internal_inline_style)({ color: isPub ? "#f58301" : "#000" }) : null;
      var anonymousState__temp9 = tag ? (0, _taroWeapp.internal_inline_style)({ color: isTag ? "#f58301" : "#000" }) : null;
      var loopArray12 = list.map(function (id, _anonIdx9) {
        id = {
          $original: (0, _taroWeapp.internal_get_original)(id)
        };

        var _genCompid11 = (0, _taroWeapp.genCompid)(__prefix + "czzzzzzzzz" + _anonIdx9, true),
            _genCompid12 = _slicedToArray(_genCompid11, 2),
            $prevCompid__9 = _genCompid12[0],
            $compid__9 = _genCompid12[1];

        _taroWeapp.propsManager.set({
          "pid": id.$original,
          "post": posts[id.$original],
          "setting": setting,
          "onPost": _this3.onPost,
          "onTag": _this3.onTag
        }, $compid__9, $prevCompid__9);
        return {
          $compid__9: $compid__9,
          $original: id.$original
        };
      });
      _taroWeapp.propsManager.set({
        "name": "gengduo",
        "size": 50,
        "color": "#000"
      }, $compid__10, $prevCompid__10);
      _taroWeapp.propsManager.set({
        "name": "caidan",
        "size": 60,
        "color": "#000"
      }, $compid__11, $prevCompid__11);
      _taroWeapp.propsManager.set({
        "name": "sousuo",
        "size": 36,
        "color": "#000"
      }, $compid__12, $prevCompid__12);
      pub && _taroWeapp.propsManager.set({
        "name": "bookmark-add",
        "size": 36,
        "color": isPub ? "#f58301" : "#000"
      }, $compid__13, $prevCompid__13);
      tag && _taroWeapp.propsManager.set({
        "name": "bookmark-add",
        "size": 50,
        "color": isTag ? "#f58301" : "#000"
      }, $compid__14, $prevCompid__14);
      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp,
        anonymousState__temp2: anonymousState__temp2,
        anonymousState__temp3: anonymousState__temp3,
        anonymousState__temp4: anonymousState__temp4,
        anonymousState__temp5: anonymousState__temp5,
        anonymousState__temp6: anonymousState__temp6,
        anonymousState__temp7: anonymousState__temp7,
        anonymousState__temp8: anonymousState__temp8,
        anonymousState__temp9: anonymousState__temp9,
        loopArray12: loopArray12,
        $compid__10: $compid__10,
        $compid__11: $compid__11,
        $compid__12: $compid__12,
        $compid__13: $compid__13,
        $compid__14: $compid__14,
        Publications: Publications,
        tags: tags,
        allTags: allTags,
        thePub: thePub,
        list: list
      });
      return this.__state;
    }
  }, {
    key: "anonymousFunc0",
    value: function anonymousFunc0(e) {
      ;
    }
  }, {
    key: "anonymousFunc1",
    value: function anonymousFunc1(e) {
      ;
    }
  }]);

  return Index;
}(_taroWeapp.Component), _class.$$events = ["anonymousFunc0", "anonymousFunc1", "onTabs", "onTopic", "onTag", "onSearch", "onLikeTag", "onNext", "onLikePub"], _class.$$componentPath = "pages/index/index", _temp2);
Index = (0, _tslib.__decorate)([(0, _mobx.inject)("indexStore"), _mobx.observer], Index);
exports.default = Index;

Component(__webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js").default.createComponent(Index, true));

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=D:\\www\\mapp-coder-daily\\src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/index/index.tsx?taro&type=template&parse=PAGE&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=D:/www/mapp-coder-daily/src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/pages/index/index.tsx?taro&type=template&parse=PAGE& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pages/index/index.wxml";

/***/ }),

/***/ "./project.config.json":
/*!*****************************!*\
  !*** ./project.config.json ***!
  \*****************************/
/*! exports provided: miniprogramRoot, projectname, description, appid, setting, compileType, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"miniprogramRoot\":\"./dist\",\"projectname\":\"mapp-coder-daily\",\"description\":\"程序猿日常\",\"appid\":\"wx47cf84f458781f68\",\"setting\":{\"urlCheck\":true,\"es6\":false,\"postcss\":false,\"minified\":false},\"compileType\":\"miniprogram\"}");

/***/ }),

/***/ "./src/pages/index/index.styl":
/*!************************************!*\
  !*** ./src/pages/index/index.styl ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/index/index.tsx":
/*!***********************************!*\
  !*** ./src/pages/index/index.tsx ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.tsx?taro&type=template&parse=PAGE& */ "./src/pages/index/index.tsx?taro&type=template&parse=PAGE&");
/* harmony import */ var _index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.tsx?taro&type=script&parse=PAGE& */ "./src/pages/index/index.tsx?taro&type=script&parse=PAGE&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));




/***/ }),

/***/ "./src/pages/index/index.tsx?taro&type=script&parse=PAGE&":
/*!****************************************************************!*\
  !*** ./src/pages/index/index.tsx?taro&type=script&parse=PAGE& ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./index.tsx?taro&type=script&parse=PAGE& */ "./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/index/index.tsx?taro&type=script&parse=PAGE&");
/* harmony import */ var _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/pages/index/index.tsx?taro&type=template&parse=PAGE&":
/*!******************************************************************!*\
  !*** ./src/pages/index/index.tsx?taro&type=template&parse=PAGE& ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _file_loader_name_path_name_wxml_context_D_www_mapp_coder_daily_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!file-loader?name=[path][name].wxml&context=D:/www/mapp-coder-daily/src!../../../node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!../../../node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./index.tsx?taro&type=template&parse=PAGE& */ "./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=D:\\www\\mapp-coder-daily\\src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/index/index.tsx?taro&type=template&parse=PAGE&");
/* harmony import */ var _file_loader_name_path_name_wxml_context_D_www_mapp_coder_daily_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_file_loader_name_path_name_wxml_context_D_www_mapp_coder_daily_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _file_loader_name_path_name_wxml_context_D_www_mapp_coder_daily_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _file_loader_name_path_name_wxml_context_D_www_mapp_coder_daily_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ })

},[["./src/pages/index/index.tsx","runtime","vendors","common"]]]);