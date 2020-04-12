import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text, Image, Input, ScrollView } from '@tarojs/components'
import IconFont from '../../components/iconfont'
import { Uri } from '../../utils/index'
import { setGlobalData } from '../../utils/store'
import './index.styl'

export default class Index extends Component {

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
    populars: string[]
    posts: {
      bookmarked: boolean
      createdAt: string
      id: string
      image: string
      placeholder: string
      publication: {
        id: string
        image: string
        name: string
      }
      publishedAt: string
      ratio: number
      read: boolean
      readTime: number
      tags: string[]
      title: string
      url: string
      views: number
    }[]
    show: boolean
    pub: string
    keyword: string
  } = {
    top: 0,
    topics: [],
    populars: [],
    posts: [],
    show: true,
    pub: '',
    keyword: ''
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
      top: menuBtn.top + 2
    })
   }

  componentWillReact () {
    console.log('componentWillReact')
  }

  componentDidMount () { 
    this.getTopics()
    this.getPopular()
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
      this.setState({
        topics: res.data
      })
    })
  }

  getPopular = () => {
    Taro.request({
      url: `${Uri}v1/tags/popular`
    }).then(res => {
      const tags = res.data.map(v => v.name)
      this.setState({
        populars: tags
      })
    })
  }
  getPost = (pub = '') => {
    const variables = pub ? `"pub":"${pub}"` : `"sortBy":"popularity"`
    const query = `query ${pub ? 'fetchPostsByPublication' : 'fetchLatest'}($params: ${pub ? 'PostByPublicationInput' : 'QueryPostInput'}) { ${pub ? 'postsByPublication' : 'latest'}(params: $params) { id,title,url,publishedAt,createdAt,image,ratio,placeholder,views,readTime,publication { id, name, image },tags,bookmarked,read } }`
    Taro.request({
      url: `${Uri}graphql`,
      data: {
        query,
        variables: `{"params":{"latest":"${new Date().toISOString()}","page":0,"pageSize":30,${variables}}}`
      }
    }).then(res => {
      const data = res.data.data
      this.setState({
        show: true,
        posts: pub ? data.postsByPublication : data.latest
      })
    })
  }

  onTopic = (name: string) => {
    this.setState({
      pub: name,
      keyword: ''
    })
    this.getPost(name)
  }

  onPost = (id) => {
    console.log(id)
    setGlobalData('pid', id)
    // setGlobalData('url', url)
    Taro.navigateTo({
      url: `/pages/post/index?&id=${id}`
    })
  }

  onSearch = (e) => {
    this.setState({
      keyword: e.detail.value.toLowerCase()
    })
  }

  render () {
    const { top, topics, posts, populars, show, pub, keyword } = this.state
    const theTopic = pub ? topics.filter(v => v.id === pub)[0] : {image: '', name: ''}
    const tags = keyword ? topics.filter(v => v.name.toLowerCase().indexOf(keyword) > -1) : topics
    return (
      <View className='index'>
        <View className='header' style={{color: '#1c1e21', padding: `${top}px 0 0 10px`, height: `35px`}}>
          <View className='gengduo' onClick={() => this.setState({show: false})}>
            <IconFont name='gengduo' size={50} color='#000' />
          </View>
          <View className='caidan' onClick={() => this.setState({show: true})}>
            <IconFont name='caidan' size={60} color='#000' />
          </View>
          {
            !show &&
            <View className='search'>
              <Input value={keyword} onInput={this.onSearch} placeholder='搜索主题' />
              <IconFont name='sousuo' size={40} color='#000' />
            </View>
          }
          {
            show &&
            <Text className='title'>程序猿 Daily</Text>
          }
        </View>
        <View className='inner' style={{transform: `translateX(${show ? '-50%' : '0'})`}}>
          <ScrollView className='topics' scrollY>
            {
              tags.map(v => <View key={v.id} className='topic' onClick={this.onTopic.bind(this, v.id)}>
                <Image src={v.image} mode='aspectFit' />
                <Text>{v.name}</Text>
                {/* <IconFont name='home' size={50} color='#000' /> */}
              </View>)
            }
          </ScrollView>
          <ScrollView scrollY className='posts'>
            {
              pub &&
              <View className='the-topic'>
                <Image src={theTopic.image} mode='aspectFit' />
                <Text>{theTopic.name}</Text>
              </View>
            }
            {
              posts.map(v => <View key={v.id} className='post'>
                <View className='topic'>
                  <Image src={v.publication.image} mode='aspectFit' />
                  <Text>{v.publication.name}</Text>
                  <Text className='date'>{new Date(v.createdAt).toLocaleDateString()}</Text>
                </View>
                <View className='content'>
                  <Image src={v.image} onClick={this.onPost.bind(this, v.id)} />
                  <Text className='name' onClick={this.onPost.bind(this, v.id)}>{v.title}</Text>
                  <View className='tags'>
                    {
                      v.tags.map((tag, index) => <Text key={v.id + index}>{tag}</Text>)
                    }
                  </View>
                </View>
              </View>)
            }
          </ScrollView>
        </View>
      </View>
    )
  }
}
