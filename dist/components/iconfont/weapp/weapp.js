(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["components/iconfont/weapp/weapp"],{

/***/ "./src/components/iconfont/weapp/weapp.js":
/*!************************************************!*\
  !*** ./src/components/iconfont/weapp/weapp.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Component({
  properties: {
    // bookmark-add | xiala | sousuo | caidan1 | gengduo | check | check1 | home | caidan
    name: {
      type: String
    },
    // string | string[]
    color: {
      type: null,
      observer: function observer(color) {
        this.setData({
          colors: this.fixColor(),
          isStr: typeof color === 'string'
        });
      }
    },
    size: {
      type: Number,
      value: 18,
      observer: function observer(size) {
        this.setData({
          svgSize: size / 750 * wx.getSystemInfoSync().windowWidth
        });
      }
    }
  },
  data: {
    colors: '',
    svgSize: 0.024 * wx.getSystemInfoSync().windowWidth,
    quot: '"',
    isStr: true
  },
  methods: {
    fixColor: function fixColor() {
      var color = this.data.color;
      var hex2rgb = this.hex2rgb;

      if (typeof color === 'string') {
        return color.indexOf('#') === 0 ? hex2rgb(color) : color;
      }

      return color.map(function (item) {
        return item.indexOf('#') === 0 ? hex2rgb(item) : item;
      });
    },
    hex2rgb: function hex2rgb(hex) {
      var rgb = [];

      hex = hex.substr(1);

      if (hex.length === 3) {
        hex = hex.replace(/(.)/g, '$1$1');
      }

      hex.replace(/../g, function (color) {
        rgb.push(parseInt(color, 0x10));
        return color;
      });

      return 'rgb(' + rgb.join(',') + ')';
    }
  }
});

/***/ })

},[["./src/components/iconfont/weapp/weapp.js","runtime"]]]);