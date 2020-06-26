(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["common"],{

/***/ "./src/api/index.ts":
/*!**************************!*\
  !*** ./src/api/index.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var Uri = exports.Uri = "https://daily.leeapps.cn/";
var AuthUri = exports.AuthUri = "https://api.leeapps.cn/koa/";
var Themes = exports.Themes = ["light", "dark", "auto"];

/***/ }),

/***/ "./src/utils/index.ts":
/*!****************************!*\
  !*** ./src/utils/index.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var Uri = exports.Uri = "https://daily.leeapps.cn/daily/";
var fixUrl = exports.fixUrl = function fixUrl(content, url) {
  var str = content.replace(/(\.\.\/)+/g, function ($1) {
    var len = $1.length / 3;
    return url.split("/").map(function (v) {
      return v + "/";
    }).slice(0, 0 - len - 1).join("");
  });
  var urls = url.split("://");
  var rUrl = urls[0] + "://" + url.split("://")[1].split("/")[0];
  str = str.replace(/!\[\]\(([^\)]+)\)/g, function ($1, $2) {
    if ($2.indexOf("://") > -1) return $1;
    return "![](" + rUrl + $2 + ")";
  });
  return str;
};
var dateForLatest = exports.dateForLatest = function dateForLatest(timestamp) {
  var language = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

  timestamp = new Date(timestamp).getTime();
  var minute = 60000;
  var hour = 3600000;
  var day = 86400000;
  var month = 2592000000;
  var now = new Date().getTime();
  var diffValue = now - timestamp;
  // 如果本地时间反而小于变量时间
  if (diffValue < 0) {
    return language ? "不久前" : "just a moment ago";
  }
  // 计算差异时间的量级
  var monthC = diffValue / month;
  var weekC = diffValue / 604800000;
  var dayC = diffValue / day;
  var hourC = diffValue / hour;
  var minC = diffValue / minute;
  // 数值补0方法
  var zero = function zero(value) {
    if (value < 10) {
      return "0" + value;
    }
    return value;
  };
  // 使用
  if (monthC > 12) {
    // 超过1年，直接显示年月日
    return function () {
      var date = new Date(timestamp);
      return date.getFullYear() + "年" + zero(date.getMonth() + 1) + "月" + zero(date.getDate()) + "日";
    }();
  } else if (monthC >= 1) {
    return parseInt(monthC) + (language ? "月前" : "months ago");
  } else if (weekC >= 1) {
    return parseInt(weekC) + (language ? "周前" : "weeks ago");
  } else if (dayC >= 1) {
    return parseInt(dayC) + (language ? "天前" : "d ago");
  } else if (hourC >= 1) {
    return parseInt(hourC) + (language ? "小时前" : "h ago");
  } else if (minC >= 1) {
    return parseInt(minC) + (language ? "分钟前" : "m ago");
  }
  return "刚刚";
};
exports.default = {};

/***/ })

}]);