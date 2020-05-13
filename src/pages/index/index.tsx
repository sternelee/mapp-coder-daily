import Taro, { Component, Config } from '@tarojs/taro';
import { View, Text, Image, Input, ScrollView } from '@tarojs/components';
import IconFont from '../../components/iconfont';
import { Uri, dateForLatest } from '../../utils/index';
import { setGlobalData } from '../../utils/store';
import './index.styl';

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
  };
  state: {
    top: number;
    publications: {
      enabled: boolean;
      id: string;
      image: string;
      name: string;
      twitter: string;
    }[];
    posts: {
      bookmarked: boolean;
      createdAt: string;
      id: string;
      image: string;
      placeholder: string;
      publication: {
        id: string;
        image: string;
        name: string;
      };
      publishedAt: string;
      ratio: number;
      read: boolean;
      readTime: number;
      tags: string[];
      title: string;
      url: string;
      views: number;
    }[];
    show: boolean;
    pub: string;
    keyword: string;
    innerHeight: number;
    page: number;
    tag: string;
    type: string;
    title: string;
    tabs: string[];
    tabId: number;
    popularTags: string[];
    hits: string[];
    store: { // 缓存记录用户收藏的tagst和pubs
      pubs: string[];
      tags: string[];
    };
  } = {
    top: 0,
    publications: [],
    posts: [],
    show: true,
    pub: '',
    keyword: '',
    innerHeight: 750,
    page: 0,
    tag: '',
    type: 'latest',
    title: 'Daily 最新动态',
    tabs: ['关注', '全部'],
    tabId: 0,
    popularTags: [],
    hits: [],
    store: {
      tags: [],
      pubs: []
    }
  };

  onShareAppMessage(ops) {
    if (ops.from === 'button') {
      // 来自页面内转发按钮
      console.log(ops.target);
    }
    return {
      title: `程序猿日报`,
      path: `pages/index/index`,
      success: function(res) {
        // 转发成功
        console.log('转发成功:' + JSON.stringify(res));
      },
      fail: function(res) {
        // 转发失败
        console.log('转发失败:' + JSON.stringify(res));
      }
    };
  }

  async componentWillMount() {
    const menuBtn = Taro.getMenuButtonBoundingClientRect();
    const info = await Taro.getSystemInfoSync();
    this.setState({
      top: menuBtn.top + 2,
      innerHeight: info.windowHeight
    });
    const store = await Taro.getStorageSync('store');
    console.log(store);
    if (store) {
      this.setState({
        store
      });
    }
  }

  componentWillReact() {
    // console.log('componentWillReact')
  }

  async componentDidMount() {
    await this.getPost();
    await this.getPopularTags();
    await this.getPubs();
  }

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  getPubs = async () => {
    let publications = await Taro.getStorageSync('publications')
    if (publications) {
      this.setState({
        publications
      })
    } else {
      Taro.request({
        url: `${Uri}v1/publications`
      }).then(res => {
        this.setState({
          publications: res.data
        })
        Taro.setStorageSync('publications', res.data)
      })
    }
  }

  getPopularTags = async () => {
    let popularTags = await Taro.getStorageSync('popularTags')
    if (popularTags) {
      this.setState({
        popularTags
      })
    } else {
      Taro.request({
        url: `${Uri}v1/tags/popular`
      }).then(res => {
        popularTags = res.data.map(v => v.name);
        this.setState({
          popularTags
        })
        Taro.setStorageSync('popularTags', popularTags)
      })
    }
  }

  getPost = () => {
    const { type, page, pub, tag, posts } = this.state;
    if (page === 0) {
      this.setState({
        posts: []
      });
    }
    const types = {
      latest: [
        `"sortBy":"popularity"`,
        'fetchLatest',
        'QueryPostInput',
        'latest',
        'latest'
      ],
      pub: [
        `"pub":"${pub}"`,
        'fetchPostsByPublication',
        'PostByPublicationInput',
        'postsByPublication',
        'postsByPublication'
      ],
      tag: [
        `"tag":"${tag}"`,
        'fetchPostsByTag',
        'PostByTagInput',
        'postsByTag',
        'postsByTag'
      ]
    };
    const mapType = types[type];
    const query = `query ${mapType[1]}($params: ${mapType[2]}) { ${mapType[3]}(params: $params) { id,title,url,publishedAt,createdAt,image,ratio,placeholder,views,readTime,publication { id, name, image },tags,bookmarked,read } }`;
    Taro.showLoading({
      title: 'Loading ...'
    });
    let variables = `{"params":{"latest":"${new Date().toISOString()}","page":${page},"pageSize":20,${
      mapType[0]
    }}}`;
    if (type === 'latest') {
      variables = JSON.stringify(this.fetchLatestVariables());
    }
    Taro.request({
      url: `${Uri}graphql`,
      data: {
        query,
        variables
      }
    })
      .then(res => {
        const data = res.data.data;
        Taro.hideLoading();
        this.setState({
          show: true,
          posts: page > 0 ? posts.concat(data[mapType[4]]) : data[mapType[4]]
        });
      })
      .catch(() => {
        Taro.hideLoading();
        Taro.showToast({
          title: '数据拉取失败',
          duration: 2000
        })
      })
  }

  fetchLatestVariables = () => {
    const {
      tabId,
      store,
      page
    } = this.state;
    // const pubs = tabId ? [] : store.pubs
    const tags = tabId ? [] : store.tags
    const inputParams = {
      latest: new Date().toISOString(),
      page,
      pageSize: 20,
      // ...(pubs && { pubs: pubs.join() }),
      ...(tags && { tags: tags.join() }),
      sortBy: tabId ? 'popularity' : 'creation' // creation, popularity
    };
    return {
      params: inputParams
    };
  };

  onTopic = (pub: string) => {
    this.setState(
      {
        pub,
        keyword: '',
        type: 'pub',
        tag: '',
        title: `@ ${pub}`,
        page: 0
      },
      () => this.getPost()
    );
  };

  onPost = id => {
    console.log(id);
    setGlobalData('pid', id);
    // setGlobalData('url', url)
    Taro.navigateTo({
      url: `/pages/post/index?&id=${id}`
    });
  };

  onSearch = e => {
    const keyword = e.detail.value.toLowerCase()
    this.setState({
      keyword
    });
    this.searchTag(keyword)
    // 搜索 tag 标签
    // https://app.dailynow.co/v1/tags/search?query=react
    // 授权
    // https://app.dailynow.co/v1/auth/authorize?provider=github&redirect_uri=http://pi.leeapps.cn:5000/?provider=github&code_challenge=hUj93mi0vqKM0zehTG5dXQBvQ8h0-l-R6nlCuc9A_KU
  };

  searchTag = async (tag) => {
    const result = await Taro.request({
      url: `${Uri}v1/tags/search?query=${tag}`
    })
    const hits = result.data.hits.map(v => v.name)
    this.setState({
      hits
    })
    console.log(result)
  }

  onNext = () => {
    const { page } = this.state;
    this.setState(
      {
        page: page + 1
      },
      () => this.getPost()
    );
  };

  onTag = tag => {
    this.setState(
      {
        tag,
        page: 0,
        keyword: '',
        pub: '',
        type: 'tag',
        title: `# ${tag}`
      },
      () => this.getPost()
    );
  };

  onTabs = (index) => {
    this.setState({
      tabId: index,
      keyword: '',
      pub: '',
      tag: '',
      type: 'latest',
      page: 0
    }, () => {
      this.getPost()
    })
  }

  onLikeTag = (tag) => {
    let { tags, pubs } = this.state.store
    if (tags.includes(tag)) {
      tags = tags.filter(v => v !== tag)
    } else {
      tags.push(tag)
    }
    const newStore = {
      tags,
      pubs
    }
    this.setState({
      store: newStore
    })
    Taro.setStorageSync('store', newStore)
  }

  onLikePub = (pub) => {
    let { tags, pubs } = this.state.store
    if (pubs.includes(pub)) {
      pubs = pubs.filter(v => v !== pub)
    } else {
      pubs.push(pub)
    }
    const newStore = {
      tags,
      pubs
    }
    this.setState({
      store: newStore
    })
    Taro.setStorageSync('store', newStore)
  }

  render() {
    const {
      title,
      top,
      publications,
      posts,
      show,
      pub,
      tag,
      keyword,
      innerHeight,
      popularTags,
      store,
      tabs,
      tabId,
      hits
    } = this.state;
    const thePub = pub ? publications.filter(v => v.id === pub)[0] : {image: '', name: ''}
    const isPub = store.pubs.includes(pub)
    const isTag = store.tags.includes(tag)
    const publication1 = publications.filter(v => store.pubs.includes(v.id))
    const publication2 = publications.filter(v =>!store.pubs.includes(v.id))
    const Publications = [...publication1, ...publication2]
    return (
      <View className='index'>
        <View
          className='header'
          style={{
            color: '#1c1e21',
            padding: `${top}px 0 0 10px`,
            height: `35px`
          }}
        >
          <View
            className='gengduo'
            onClick={() => this.setState({ show: false })}
          >
            <IconFont name='gengduo' size={50} color='#000' />
          </View>
          <View
            className='caidan'
            onClick={() => this.setState({ show: true })}
          >
            <IconFont name='caidan' size={60} color='#000' />
          </View>
          {/* {!show && (
            <View className='search'>
              <IconFont name='sousuo' size={26} color='#000' />
              <Input
                value={keyword}
                onInput={this.onSearch}
                placeholder='搜索主题'
              />
            </View>
          )} */}
          {
            show &&
            <View className='title'>
            {
              tabs.map((v, index) => <Text className={index === tabId ? 'on' : ''} onClick={this.onTabs.bind(this, index)} key={index}>{v}</Text>)
            }
            </View>
          }
        </View>
        <View
          className='inner'
          style={{ transform: `translateX(${show ? '-50%' : '0'})` }}
        >
          <ScrollView
            className='topics'
            scrollY
            style={{ height: `${innerHeight - top - 35}px` }}
          >
            <View style={{color:'#fff',padding: '20px 0 10px 20px'}}>常见频道</View>
            <ScrollView className='pubs' scrollX lowerThreshold={20}>
              {Publications.map(v => (
                <View
                  key={v.id}
                  className='topic'
                  onClick={this.onTopic.bind(this, v.id)}
                >
                  <View className='box'>
                    <Image src={v.image} mode='aspectFit' />
                    <Text>{v.name}</Text>
                  </View>
                  {/* <IconFont name='home' size={50} color='#000' /> */}
                </View>
              ))}
            </ScrollView>
            <View className='alltags'>
              <View>Ni~关注的标签#TAG</View>
              {
                store.tags.length ?
                <View className='my-tags'>
                  {
                    store.tags.map(mtag => <Text key={mtag} onClick={this.onTag.bind(this, mtag)}>
                    #{mtag}
                  </Text>)
                  }
                </View>:
                <View className='my-empty'>暂无关注，请搜索添加</View>
              }
              <View className='search-tag'>
                <View className='search-input'>
                  <IconFont name='sousuo' size={36} color='#000' />
                  {/* <IconFont name='bookmark-add' size={36} color='#000' /> */}
                  <Input
                    value={keyword}
                    onConfirm={this.onSearch}
                    placeholder='搜索标签'
                  />
                  {/* <View onClick={this.addBookmark}>
                  <IconFont name='bookmark-add' size={36} color='#000' />
                  </View> */}
                </View>
                <View className='hit-tags'>
                {
                    hits.map(hit => <Text key={hit} onClick={this.onLikeTag.bind(this, hit)}>
                    #{hit}
                  </Text>)
                  }
                </View>
              </View>
              <View className='tag-tips'>常见标签#TAG ( ↕ )</View>
              <ScrollView scrollY style={{height: '200px'}}>
                {popularTags.map(ptag => (
                  <Text key={ptag} onClick={this.onTag.bind(this, ptag)}>
                    #{ptag}
                  </Text>
                ))}
              </ScrollView>
            </View>
          </ScrollView>
          <ScrollView
            scrollY
            lowerThreshold={20}
            className='posts'
            style={{ height: `${innerHeight - top - 35}px` }}
            onScrollToLower={this.onNext}
          >
            {
              pub &&
              <View className='the-topic' onClick={this.onLikePub.bind(this, pub)}>
                <Image src={thePub.image} mode='aspectFit' />
                <View style={{display: 'flex', alignItems: 'center'}}>
                  <Text style={{color: isPub ? '#f58301' : '#000'}}>{title}</Text>
                  <IconFont name='bookmark-add' size={36} color={isPub ? '#f58301' : '#000'} />
                </View>
              </View>
            }
            {
              tag &&
              <View className='the-tag' onClick={this.onLikeTag.bind(this, tag)}>
                <Text style={{color: isTag ? '#f58301' : '#000'}}>{title}</Text>
                <IconFont name='bookmark-add' size={50} color={isTag ? '#f58301' : '#000'} />
              </View>
            }
            {posts.map(v => (
              <View key={v.id} className='post'>
                <View className='topic'>
                  <Image src={v.publication.image} mode='aspectFit' />
                  <Text>{v.publication.name}</Text>
                  <Text className='date'>{dateForLatest(v.createdAt)}</Text>
                </View>
                <View className='content'>
                  <Image src={v.image} onClick={this.onPost.bind(this, v.id)} />
                  <Text className='name' onClick={this.onPost.bind(this, v.id)}>
                    {v.title}
                  </Text>
                  <View className='tags'>
                    {v.tags.map((vtag, index) => (
                      <Text
                        key={v.id + index}
                        onClick={this.onTag.bind(this, vtag)}
                      >
                        #{vtag}
                      </Text>
                    ))}
                  </View>
                </View>
              </View>
            ))}
          </ScrollView>
        </View>
      </View>
    );
  }
}
