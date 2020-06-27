Component({
  properties: {
    // kefu | aixinjuanzeng | queding | theme | yingwen | zhongwen | language | shoucang | tag | rss | lianjie | tianjia | gengduo | sousuo | caidan | iconfonttoggleon | more | guan | more1 | home | Settingscontroloptions | bqxin | xin
    name: {
      type: String,
    },
    // string | string[]
    color: {
      type: null,
      value: '',
      observer: function(color) {
        this.setData({
          isStr: typeof color === 'string',
        });
      }
    },
    size: {
      type: Number,
      value: 18,
      observer: function(size) {
        this.setData({
          svgSize: size / 750 * tt.getSystemInfoSync().windowWidth,
        });
      },
    },
  },
  data: {
    svgSize: 18 / 750 * tt.getSystemInfoSync().windowWidth,
    quot: '"',
    isStr: true,
  },
});
