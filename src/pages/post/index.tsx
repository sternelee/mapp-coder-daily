import Taro, { Component, Config } from "@tarojs/taro";
import { View, Text, Image } from "@tarojs/components";
import { observer, inject } from "@tarojs/mobx";
import IconFont from "@components/iconfont";
import { Uri, Themes } from "@api/index";
// eslint-disable-next-line no-unused-vars
import { StoreInterface } from "@store/index";
import { fixUrl } from "@utils/index";

import "./index.styl";

interface PageStateProps {
  indexStore: StoreInterface;
}

interface Index {
  props: PageStateProps;
}

@inject("indexStore")
@observer
class Index extends Component {
  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  state = {
    pid: 0,
    md: "",
    title: "",
    title_cn: "",
    top: 0,
    url: "",
    img: ""
  };

  componentWillMount() {
    const menuBtn = Taro.getMenuButtonBoundingClientRect();
    this.setState({
      top: menuBtn.top + 2
    });
  }

  config: Config = {
    navigationBarTitleText: "详情页",
    navigationStyle: "custom",
    usingComponents: {
      wemark: "../../wemark/wemark"
    }
  };

  onShareAppMessage(ops) {
    const query = this.$router.params;
    const { title } = this.state;
    if (ops.from === "button") {
      // 来自页面内转发按钮
      console.log(ops.target);
    }
    return {
      title: `${title}`,
      path: `pages/post/index?id=${query.id}`,
      success: function(res) {
        // 转发成功
        console.log("转发成功:" + JSON.stringify(res));
      },
      fail: function(res) {
        // 转发失败
        console.log("转发失败:" + JSON.stringify(res));
      }
    };
  }

  async componentDidShow() {
    const query = this.$router.params;
    const { indexStore } = this.props;
    const { posts, isAuth } = indexStore;
    if (!isAuth) indexStore.getAuth()
    const id = query.id || '74b935d8749907d4cfad7386b7e6b5e5';
    let data = posts[id] || {};
    if (data && data.content) {
      // 已有数据
      this.setData(data)
    } else {
      Taro.showLoading({
        title: "请求数据中"
      });
      Taro.request({
        url: `${Uri}post/fetch`,
        data: {
          pid: id,
          link: data.url || null
        }
      })
        .then(res => {
          if (res.data.code === 0) {
            data = res.data.data;
            indexStore.setPost({
              id,
              pid: data.id,
              author: data.author,
              lead_image_url: data.lead_image_url,
              word_count: data.word_count,
              content: data.content,
              content_cn: data.content_cn
            });
            this.setData(data)
            Taro.hideLoading();
          }
        })
        .catch(err => {
          Taro.showToast({
            title: "拉取数据失败",
            duration: 2000
          });
        });
    }
  }

  setData = (data) => {
    const content = fixUrl(data.content, data.url);
    this.setState({
      pid: data.id,
      title: data.title,
      title_cn: data.title_cn,
      url: data.url,
      img: data.image,
      md: content
    });
  }

  onHome = () => {
    const len = Taro.getCurrentPages().length;
    if (len > 1) {
      Taro.navigateBack();
    } else {
      Taro.navigateTo({
        url: "/pages/index/index"
      });
    }
  };

  onCopyUrl = () => {
    const { url } = this.state;
    Taro.setClipboardData({
      data: url,
      success: () => {
        Taro.showToast({
          title: "原文链接已复制",
          duration: 1000
        });
      }
    });
  };

  onLike = () => {
    let { favs, auth: { openid } } = this.props.indexStore
    const { pid } = this.state
    const fav = String(pid)
    if (favs.includes(fav)) {
      favs = favs.filter(v => v !== fav);
    } else {
      favs.push(fav);
    }
    this.props.indexStore.favs = favs
    Taro.request({
      url: `${Uri}user/me`,
      method: 'POST',
      data: {
        uid: openid,
        platform: 'wechat',
        fav: pid
      }
    })
  }

  onSet = () => {

  }

  render() {
    const { setting: { language, theme }, favs } = this.props.indexStore
    const { md, title, top, img, title_cn, pid } = this.state;
    const isLike = favs.includes(String(pid))
    return (
      <View className={`post ${Themes[theme]}`}>
        <View className="header" style={{ padding: `${top}px 0 0 10px` }}>
          <View onClick={this.onHome} className="btn">
            <IconFont name="home" size={40} color="#323E70" />
          </View>
          <View onClick={this.onSet} className="btn">
            <IconFont name="Settingscontroloptions" size={40} color="#323E70" />
          </View>
          <View onClick={this.onLike} className={`btn ${isLike ? 'on' : ''}`}>
            <IconFont name={isLike ? 'bqxin' : 'xin'} size={40} color="#323E70" />
          </View>
        </View>
        <View className='title' style={{padding: '10px'}} onClick={this.onCopyUrl}>
          {
            (language[1] === 0 || language[1] === 2) &&
            <View className="text">{ title }</View>
          }
          {
            (language[1] === 1 || language[1] === 2) &&
            <View className="text">{ title_cn }</View>
          }
        </View>
        <View className="content">
          {img && <Image src={img} mode="aspectFit" />}
          <wemark md={md} link highlight type="wemark" />
        </View>
      </View>
    );
  }
}

export default Index;
