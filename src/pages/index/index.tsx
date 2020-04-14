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
    tags: string[]
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
    innerHeight: number
    page: number
    tag: string
    type: string
    showTag: boolean
  } = {
    top: 0,
    topics: [],
    tags: [],
    posts: [],
    show: true,
    pub: '',
    keyword: '',
    innerHeight: 750,
    page: 0,
    tag: '',
    type: 'latest',
    showTag: false
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

  async componentWillMount () {
    const menuBtn = Taro.getMenuButtonBoundingClientRect()
    const info = await Taro.getSystemInfoSync()
    this.setState({
      top: menuBtn.top + 2,
      innerHeight: info.windowHeight
    })
   }

  componentWillReact () {
    console.log('componentWillReact')
  }

  async componentDidMount () { 
    await this.getPost()
    await this.getTags()
    await this.getPubs()
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  getPubs = () => {
    Taro.request({
      url: `${Uri}v1/publications`
    }).then(res => {
      this.setState({
        topics: res.data
      })
    })
  }

  getTags = () => {
    Taro.request({
      url: `${Uri}v1/tags/popular`
    }).then(res => {
      const tags = res.data.map(v => v.name)
      this.setState({
        tags
      })
    })
  }
  getPost = () => {
    const { type, page, pub, tag, posts } = this.state
    if (page === 0) {
      this.setState({
        posts: []
      })
    }
    const types = {
      latest: [`"sortBy":"popularity"`, 'fetchLatest', 'QueryPostInput', 'latest', 'latest'],
      pub: [`"pub":"${pub}"`, 'fetchPostsByPublication', 'PostByPublicationInput', 'postsByPublication', 'postsByPublication' ],
      tag: [`"tag":"${tag}"`, 'fetchPostsByTag', 'PostByTagInput', 'postsByTag', 'postsByTag']
    }
    const mapType = types[type]
    const query = `query ${mapType[1]}($params: ${mapType[2]}) { ${mapType[3]}(params: $params) { id,title,url,publishedAt,createdAt,image,ratio,placeholder,views,readTime,publication { id, name, image },tags,bookmarked,read } }`
    Taro.showLoading({
      title: 'Loading ...'
    })
    Taro.request({
      url: `${Uri}graphql`,
      data: {
        query,
        variables: `{"params":{"latest":"${new Date().toISOString()}","page":${page},"pageSize":20,${mapType[0]}}}`
      }
    }).then(res => {
      const data = res.data.data
      Taro.hideLoading()
      this.setState({
        show: true,
        posts: page > 0 ? posts.concat(data[mapType[4]]) : data[mapType[4]]
      })
    }).catch(() => {
      Taro.hideLoading()
      Taro.showToast({
        title: '数据拉取失败',
        duration: 2000
      })
    })
  }

  onTopic = (pub: string) => {
    this.setState({
      pub,
      keyword: '',
      type: 'pub',
      page: 0
    }, () => this.getPost())
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

  onShowTag = () => {
    const { showTag, show } = this.state
    if (show) {
      this.setState({
        showTag: !showTag
      })
    } else {
      this.setState({
        show: true
      })
    }
  }

  onNext = () => {
    const { page } = this.state
    this.setState({
      page: page + 1
    }, () => this.getPost())
  }

  onTag = (tag) => {
    this.setState({
      tag,
      showTag: false,
      page: 0,
      type: 'tag'
    }, () => this.getPost())
  }

  onHome = () => {
    this.setState({
      page: 0,
      type: 'latest'
    }, () => this.getPost())
  }

  render () {
    const { top, topics, posts, show, pub, keyword, innerHeight, tags, showTag } = this.state
    const theTopic = pub ? topics.filter(v => v.id === pub)[0] : {image: '', name: ''}
    const pubs = keyword ? topics.filter(v => v.name.toLowerCase().indexOf(keyword) > -1) : topics
    return (
      <View className='index'>
        <View className='header' style={{color: '#1c1e21', padding: `${top}px 0 0 10px`, height: `35px`}}>
          <View className='gengduo' onClick={() => this.setState({show: false})}>
            <IconFont name='gengduo' size={50} color='#000' />
          </View>
          <View className='caidan' onClick={this.onShowTag}>
            <IconFont name='caidan' size={60} color='#000' />
          </View>
          {
            !show &&
            <View className='search'>
              <IconFont name='sousuo' size={30} color='#000' />
              <Input value={keyword} onInput={this.onSearch} placeholder='搜索主题' />
            </View>
          }
          {
            show &&
            <Text className='title' onClick={this.onHome}>程序猿 Daily</Text>
          }
        </View>
        <View className='inner' style={{transform: `translateX(${show ? '-50%' : '0'})`}}>
          <ScrollView className='topics' scrollY style={{height: `${innerHeight - top - 35}px`}}>
            {
              pubs.map(v => <View key={v.id} className='topic' onClick={this.onTopic.bind(this, v.id)}>
                <Image src={v.image} mode='aspectFit' />
                <Text>{v.name}</Text>
                {/* <IconFont name='home' size={50} color='#000' /> */}
              </View>)
            }
          </ScrollView>
          <ScrollView scrollY lowerThreshold={20} className='posts' style={{height: `${innerHeight - top - 35}px`}} onScrollToLower={this.onNext}>
            <View className={showTag ? 'alltags' : 'alltags hide'}>
              {/* <View>流行标签#TAG</View> */}
              {
                tags.map(tag => <Text key={tag} onClick={this.onTag.bind(this, tag)}>#{tag}</Text>)
              }
            </View>
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
                      v.tags.map((tag, index) => <Text key={v.id + index} onClick={this.onTag.bind(this, tag)}>#{tag}</Text>)
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
