import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import { observer, inject } from "@tarojs/mobx";
import IconFont from '@components/iconfont'
// eslint-disable-next-line no-unused-vars
import { StoreInterface } from "@store/index";
import { fixUrl } from '@utils/index'

import './index.styl'

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
    md: '',
    title: '',
    top: 0,
    url: '',
    img: ''
  }

  componentWillMount () {
    const menuBtn = Taro.getMenuButtonBoundingClientRect()
    this.setState({
      top: menuBtn.top + 2
    })
  }

  config: Config = {
    navigationBarTitleText: '详情页',
    navigationStyle: 'custom',
    usingComponents: {
      wemark: '../../wemark/wemark'
    }
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

  async componentDidShow () {
    const query = this.$router.params
    const { posts } = this.props.indexStore
    const data = posts[query.id]
    const content = fixUrl(data.content, data.url)
    this.setState({
      title: data.title,
      url: data.url,
      img: data.image,
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
    const { md, title, top, img } = this.state
    return (
      <View className='post'>
        <View className='header' style={{padding: `${top}px 0 0 10px`,}}>
          <View onClick={this.onHome}>
            <IconFont name='home' size={60} color='#000' />
          </View>
          <Text className='title' onClick={this.onCopyUrl}>{title}</Text>
        </View>
        {/* <View className='title' style={{padding: '10px'}} onClick={this.onCopyUrl}>
          <Text>
            { title }
          </Text>
        </View> */}
        <View className='content'>
          {
            img &&
            <Image src={img} mode='aspectFit' />
          }
          <wemark md={md} link highlight type='wemark' />
        </View>
      </View>
    )
  }
}

export default Index
