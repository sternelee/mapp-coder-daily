(wx.webpackJsonp=wx.webpackJsonp||[]).push([[2],{"12":function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{"value":!0});n.Uri="https://api.leeapps.cn/dialy/",n.fixUrl=function fixUrl(e,t){var n=e.replace(/(\.\.\/)+/g,function(e){var n=e.length/3;return t.split("/").map(function(e){return e+"/"}).slice(0,0-n-1).join("")}),i=t.split("://")[0]+"://"+t.split("://")[1].split("/")[0];return n=n.replace(/!\[\]\(([^\)]+)\)/g,function(e,n){return-1<n.indexOf("://")?e:"![]("+i+n+")"})};n.default={}}}]);