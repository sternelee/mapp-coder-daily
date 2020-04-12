import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import IconFont from '../../components/iconfont'
import { fixUrl } from '../../utils/index'

import './index.styl'

class Index extends Component {

  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    navigationBarTitleText: '详情页',
    navigationStyle: 'custom',
    usingComponents: {
      wemark: '../../wemark/wemark'
    }
  }
  state = {
    md: '',
    title: '',
    top: 0,
    url: ''
  }

  onShareAppMessage (ops) {
    const query = this.$router.params
    const { title } = this.state
    if (ops.from === 'button') {
      // 来自页面内转发按钮
      console.log(ops.target)
    }
    return {
      title: `${title}`,
      path: `pages/post/index?id=${query.id}`,
      success: function (res) {
        // 转发成功
        console.log("转发成功:" + JSON.stringify(res));
      },
      fail: function (res) {
        // 转发失败
        console.log("转发失败:" + JSON.stringify(res));
      }
    }
  }

  componentWillMount () {
    const menuBtn = Taro.getMenuButtonBoundingClientRect()
    this.setState({
      top: menuBtn.top + 2
    })
  }

  async componentDidShow () {
    const query = this.$router.params
    Taro.showLoading({
      title: 'Loading ...'
    })
    const res = await Taro.request({
      url: `https://api.leeapps.cn/cooperpress-posts?category=100&pid=${query.id}&_limit=1`
    })
    let data = res.data[0]
    if (!data) {
      const res2 = await Taro.request({
        url: `https://api.leeapps.cn/koa/weekly/post?category=100&id=${query.id}&type=markdown`
      })
      data = res2.data[0]
    }
    Taro.hideLoading()
    if (!data.content) {
      Taro.showToast({
        title: '无法拉取数据',
        duration: 1000
      }).then(() => {
        Taro.setClipboardData({
          data: data.url,
          success: () => {
            Taro.showToast({
              title: '原文链接已复制',
              duration: 1000
            }).then(() => this.onHome())
          }
        })
      })
      return
    }
    const content = fixUrl(data.content, data.url)
    this.setState({
      title: data.title,
      url: data.url,
      md: content
    })
  }

  onHome = () => {
    const len = Taro.getCurrentPages().length
    if (len > 1) {
      Taro.navigateBack()
    } else {
      Taro.navigateTo({
        url: '/pages/index/index'
      })
    }
  }

  onCopyUrl = () => {
    const { url } = this.state
    Taro.setClipboardData({
      data: url,
      success: () => {
        Taro.showToast({
          title: '原文链接已复制',
          duration: 1000
        })
      }
    })
  }

  render () {
    const { md, title, top } = this.state
    return (
      <View className='post'>
        <View className='header' onClick={this.onHome} style={{padding: `${top}px 0 0 10px`, height: `35px`}}>
          <View>
            <IconFont name='home' size={50} color='#fff' />
          </View>
          <Text className='title'>详情页</Text>
        </View>
        <View className='title' style={{padding: '10px'}} onClick={this.onCopyUrl}>
          <Text>
            { title }
          </Text>
        </View>
        <View className='content'>
          <wemark md={md} link highlight type='wemark' />
        </View>
      </View>
    )
  }
}

export default Index