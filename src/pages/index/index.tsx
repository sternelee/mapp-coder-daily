import { ComponentType } from 'react'
import Taro, { Component, Config } from '@tarojs/taro'
import { View, Button, Text, Imgae } from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'
// import IconFont from '../../components/iconfont/index.weapp'
import { Uri } from '../../utils/index'

import './index.styl'

type PageStateProps = {
  counterStore: {
    counter: number,
    increment: Function,
    decrement: Function,
    incrementAsync: Function
  }
}

interface Index {
  props: PageStateProps;
}

@inject('counterStore')
@observer
class Index extends Component {

  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    navigationBarTitleText: '程序猿日常',
    navigationStyle: 'custom'
  }

  state: {
    top: number
    topics: {
      enabled: boolean
      id: string
      image: string
      name: string
      twitter: string
    }[]
  } = {
    top: 0,
    topics: []
  }

  onShareAppMessage (ops) {
    if (ops.from === 'button') {
      // 来自页面内转发按钮
      console.log(ops.target)
    }
    return {
      title: `程序猿日报`,
      path: `pages/index/index`,
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
      top: menuBtn.top + 2,
      // topH: menuBtn.height
    })
   }

  componentWillReact () {
    console.log('componentWillReact')
  }

  componentDidMount () { 
    this.getTopics()
  }

  componentWillUnmount () { }

  componentDidShow () { 
    this.getPost()
  }

  componentDidHide () { }

  getTopics = () => {
    Taro.request({
      url: `${Uri}v1/publications`
    }).then(res => {
      console.log(res)
    })
  }

  getPopular = () => {
    Taro.request({
      url: `${Uri}v1/popular`
    }).then(res => {
      console.log(res)
    })
  }
  getPost = () => {

  }

  render () {
    const { top, topics } = this.state
    return (
      <View className='index'>
        <View className='header' style={{color: '#1c1e21', padding: `${top}px 0 0 10px`, height: `35px`}}>
          <View className='daohang'>
            {/* <IconFont name='gengduo' size={50} color='#fff' /> */}
          </View>
          <View className='list'>
            {/* <IconFont name='caidan' size={50} color='#fff' /> */}
          </View>
          <Text className='title'>程序猿日常</Text>
        </View>
        <View className='topics'>
          {
            topics.map(v => <View key={v.id} className='topic'>
              <Imgae src={v.image} mode='aspectFit'></Imgae>
              <Text>{v.name}</Text>
              <IconFont name='home' size={50} color='#000' />
            </View>)
          }
        </View>
      </View>
    )
  }
}

export default Index  as ComponentType
