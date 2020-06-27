import Taro, { Component, Config } from "@tarojs/taro";
import { View, Text, Image } from "@tarojs/components";
import { observer, inject } from "@tarojs/mobx";
import IconFont from "@components/iconfont";
import { Uri, Themes } from "@api/index";
// eslint-disable-next-line no-unused-vars
import { StoreInterface } from "@store/index";
import Setting from "@components/setting/index";
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
    id: this.$router.params.id,
    pid: 0, // 注意在这里：id是指文章id, 而pid只是数据的序号
    title: "",
    title_cn: "",
    top: 0,
    url: "",
    content: "",
    content_cn: ""
  };

  async componentWillMount() {
    const menuBtn = Taro.getMenuButtonBoundingClientRect();
    this.setState({
      top: menuBtn.top + 2
    });
    await this.props.indexStore.initSetting()
  }

  config: Config = {
    navigationBarTitleText: "详情页",
    navigationStyle: "custom",
    usingComponents: {
      wemark: "../../wemark/wemark"
    }
  };

  onShareAppMessage(ops) {
    const { title, id } = this.state;
    if (ops.from === "button") {
      // 来自页面内转发按钮
      console.log(ops.target);
    }
    return {
      title: `${title}`,
      path: `pages/post/index?id=${id}`,
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
    const { id } = this.state
    const { indexStore } = this.props;
    const { posts, isAuth } = indexStore;
    if (!isAuth) indexStore.getAuth()
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
          link: data.url || ''
        }
      })
        .then(res => {
          if (res.data.code === 0) {
            data = res.data.data;
            data.pid = Number(data.id)
            data.id = id
            indexStore.setPost({
              id,
              pid: data.pid,
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
    const content = data.content ? fixUrl(data.content, data.url) : '';
    const content_cn = data.content_cn ? fixUrl(data.content_cn, data.url) : '';
    this.setState({
      pid: data.pid,
      title: data.title,
      title_cn: data.title_cn,
      url: data.url,
      content,
      content_cn: content_cn
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
    let { favs, auth: { openid }, favPids } = this.props.indexStore
    const { id, pid } = this.state
    const fav = String(pid)
    if (favs.includes(fav)) {
      favs = favs.filter(v => v !== fav);
      favPids = favPids.filter(v => v !== id);
    } else {
      favs.unshift(fav);
      favPids.unshift(id);
    }
    this.props.indexStore.favs = favs
    this.props.indexStore.favPids = favPids
    Taro.request({
      url: `${Uri}user/me`,
      method: 'POST',
      data: {
        uid: openid,
        platform: 'wechat',
        fav
      }
    })
  }

  render() {
    const { indexStore } = this.props
    const { setting, favs, posts } = indexStore
    const { language, theme } = setting
    const { id, title, top, title_cn, pid, content, content_cn } = this.state;
    const isLike = favs.includes(String(pid))
    const post = posts[id] || {}
    const img = post.image || post.lead_image_url || post.placeholder || ''
    return (
      <View className={`post ${Themes[theme]}`}>
        {
          setting.show &&
          <Setting setting={setting} onSet={indexStore.setSetting.bind(indexStore)} />
        }
        <View className="header" style={{ padding: `${top}px 0 0 10px` }}>
          <View onClick={this.onHome} className="btn">
            <IconFont name="home" size={40} color="#323E70" />
          </View>
          <View onClick={() => this.props.indexStore.setSetting('show', true)} className="btn">
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
          {
            (language[2] === 0 || language[2] === 2) &&
            content &&
            <wemark md={content} link highlight type="wemark" />
          }
          {
            (language[2] === 1 || language[2] === 2) &&
            content_cn &&
            <wemark md={content_cn} link highlight type="wemark" />
          }
        </View>
      </View>
    );
  }
}

export default Index;
