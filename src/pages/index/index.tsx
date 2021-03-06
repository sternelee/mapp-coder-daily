import Taro, { Component, Config } from "@tarojs/taro";
import { View, Text, Image, Input, ScrollView } from "@tarojs/components";
import { observer, inject } from "@tarojs/mobx";
import IconFont from "@components/iconfont";
// eslint-disable-next-line no-unused-vars
import { StoreInterface } from "@store/index";
import { Uri } from "@api/index";
import project from "@project";
import Post from "@components/post/index";
import Setting from "@components/setting/index";
import Loading from "@components/loading/index";

import "./index.styl";

const defTags = ['java', 'devops', 'development', 'webdev', 'frontend', 'javascript', 'ai', 'golang', 'design', 'python', 'nodejs', 'react', 'android', 'deep-learning', 'kubernetes', 'algorithms', 'ios'];

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
  state: {
    top: number;
    show: boolean;
    pub: string;
    keyword: string;
    innerHeight: number;
    tag: string;
    type: string;
    title: string;
    hits: string[];
    showTabsOptions: boolean;
    isRefresh: boolean;
  } = {
    top: 0,
    show: true,
    pub: "",
    keyword: "",
    innerHeight: 750,
    tag: "",
    type: "latest",
    title: "Daily 最新动态",
    hits: [],
    showTabsOptions: false,
    isRefresh: false
  };

  async componentWillMount() {
    const menuBtn = await Taro.getMenuButtonBoundingClientRect();
    const info = await Taro.getSystemInfoSync();
    this.setState({
      top: menuBtn.top + 2,
      innerHeight: info.windowHeight
    });
    await this.props.indexStore.initSetting()
    const refershTime = Taro.getStorageSync('refreshTime')
    if (!refershTime || (Number(refershTime) >= new Date().getTime() + 1000*60*60*24*7)) {
      this.setState({
        isRefresh: true
      })
      Taro.setStorage({key: 'refreshTime', data: new Date().getTime()})
    }
    const tags = Taro.getStorageSync('tags')
    if (tags) {
      this.props.indexStore.tags = tags
    }
  }

  async componentDidMount() {
    await this.getPost(false);
    this.getPopularTags();
    // this.getPubs();
  }

  componentWillUnmount() {}

  config: Config = {
    navigationBarTitleText: project.description,
    navigationStyle: "custom"
  };

  componentWillReact() {}

  onShareAppMessage(ops) {
    if (ops.from === "button") {
      // 来自页面内转发按钮
      console.log(ops.target);
    }
    return {
      title: `程序猿日报`,
      path: `pages/index/index`,
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

  onShareTimeline (ops) {
    if (ops.from === "button") {
      // 来自页面内转发按钮
      console.log(ops.target);
    }
    return {
      title: `程序猿日报`,
      path: `pages/index/index`,
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

  componentDidShow() {
    const { indexStore } = this.props
    if (!indexStore.isAuth) indexStore.getAuth()
  }

  componentDidHide() {}

  getPubs = async () => {
    let allPubs = await Taro.getStorageSync("publications");
    if (allPubs && !this.state.isRefresh) {
      this.props.indexStore.allPubs = allPubs;
    } else {
      Taro.request({
        url: `${Uri}daily/v1/publications`
      }).then(res => {
        this.props.indexStore.allPubs = res.data;
        Taro.setStorageSync("publications", res.data);
      });
    }
  };

  getPopularTags = async () => {
    let allTags = await Taro.getStorageSync("popularTags");
    if (allTags && !this.state.isRefresh) {
      this.props.indexStore.allTags = allTags;
    } else {
      Taro.request({
        url: `${Uri}daily/v1/tags/popular`
      }).then(res => {
        allTags = res.data.map(v => v.name).filter(v => v.indexOf('new') < 0);
        this.props.indexStore.allTags = allTags;
        Taro.setStorageSync("popularTags", allTags);
      });
    }
  };

  getPost = (isLoading = true) => {
    const { indexStore } = this.props;
    const { page } = indexStore;
    const { type, pub, tag } = this.state;
    page === 0 && indexStore.setList([], false)
    // isLoading && Taro.showLoading({
    //   title: 'Loading ...'
    // })
    const types = {
      latest: [
        `"sortBy":"popularity"`,
        "fetchLatest",
        "QueryPostInput",
        "latest",
        "latest"
      ],
      pub: [
        `"pub":"${pub}"`,
        "fetchPostsByPublication",
        "PostByPublicationInput",
        "postsByPublication",
        "postsByPublication"
      ],
      tag: [
        `"tag":"${tag}"`,
        "fetchPostsByTag",
        "PostByTagInput",
        "postsByTag",
        "postsByTag"
      ]
    };
    const mapType = types[type];
    const query = `query ${mapType[1]}($params: ${mapType[2]}) { ${mapType[3]}(params: $params) { id,title,url,publishedAt,createdAt,image,ratio,placeholder,views,readTime,publication { id, name, image },tags } }`;
    let variables = `{"params":{"latest":"${new Date().toISOString()}","page":${page},"pageSize":20,${
      mapType[0]
    }}}`;
    if (type === "latest") {
      variables = JSON.stringify(this.fetchLatestVariables());
    }
    Taro.request({
      url: `${Uri}daily/graphql`,
      data: {
        query,
        variables
      }
    })
      .then(async res => {
        const data = res.data.data;
        const newPosts = data[mapType[4]];
        this.props.indexStore.more = newPosts.length === 20
        let cns = await this.savePosts(
          newPosts.map(v => ({ id: v.id, title: v.title }))
        );
        const ids = newPosts.map(v => {
          indexStore.setPost({ ...v, title_cn: cns[v.id] });
          return v.id;
        });
        indexStore.setList(ids, page > 0);
        // isLoading && Taro.hideLoading()
      })
      .catch(() => {
        isLoading && Taro.hideLoading()
        Taro.showToast({
          title: "数据拉取失败",
          duration: 2000
        });
      });
  };

  fetchLatestVariables = () => {
    const { indexStore } = this.props;
    const tags = indexStore.setting.tabId ? defTags : indexStore.tags;
    const inputParams = {
      latest: new Date().toISOString(),
      page: indexStore.page,
      pageSize: 20,
      // ...(pubs && { pubs: pubs.join() }),
      ...(tags && { tags: tags.join() }),
      sortBy: indexStore.setting.order // creation, popularity
    };
    return {
      params: inputParams
    };
  };

  onPub = (pub: string) => {
    this.props.indexStore.page = 0;
    this.setState(
      {
        pub,
        keyword: "",
        type: "pub",
        tag: "",
        title: `@ ${pub}`,
        show: true
      },
      () => this.getPost()
    );
  };

  onPost = id => {
    Taro.navigateTo({
      url: `/pages/post/index?&id=${id}`
    });
  };

  onSearch = e => {
    const keyword = e.detail.value.toLowerCase();
    this.setState({
      keyword: ''
    });
    this.searchTag(keyword);
    // 授权
    // https://app.dailynow.co/v1/auth/authorize?provider=github&redirect_uri=http://pi.leeapps.cn:5000/?provider=github&code_challenge=hUj93mi0vqKM0zehTG5dXQBvQ8h0-l-R6nlCuc9A_KU
  };

  searchTag = async tag => {
    const result = await Taro.request({
      url: `${Uri}daily/v1/tags/search?query=${tag}`
    });
    const hits = result.data.hits.map(v => v.name).filter(v => v.indexOf('new') < 0);
    this.setState({
      hits
    });
  };

  onNext = () => {
    if (!this.props.indexStore.more) return
    this.props.indexStore.page += 1;
    this.getPost(false);
  };

  onTag = tag => {
    const { indexStore } = this.props;
    indexStore.page = 0;
    this.setState(
      {
        tag,
        keyword: "",
        pub: "",
        type: "tag",
        title: `# ${tag}`,
        show: true
      },
      () => this.getPost()
    );
  };

  onChangeTab = index => {
    const { indexStore } = this.props;
    this.setState({
      showTabsOptions: false
    })
    if (indexStore.setting.tabId === index) {
      return
    }
    indexStore.page = 0;
    if (index !== 2) indexStore.setSetting('tabId', index)
    this.setState(
      {
        showTabsOptions: false,
        keyword: "",
        pub: "",
        tag: "",
        type: "latest"
      },
      () => {
        this.getPost();
      }
    );
  };

  onLikeTag = tag => {
    let {
      tags,
      auth: { openid }
    } = this.props.indexStore;
    if (tags.includes(tag)) {
      tags = tags.filter(v => v !== tag);
    } else {
      tags.push(tag);
    }
    this.props.indexStore.tags = tags;
    Taro.setStorage({key: 'tags', data: tags})
    Taro.request({
      url: `${Uri}user/me`,
      method: "POST",
      data: {
        uid: openid,
        platform: "wechat",
        tag
      }
    });
  };

  onLikePub = pub => {
    return
    // let { pubs, auth: { openid } } = this.props.indexStore;
    // if (pubs.includes(pub)) {
    //   pubs = pubs.filter(v => v !== pub);
    // } else {
    //   pubs.push(pub);
    // }
    // this.props.indexStore.pubs = pubs;
    // Taro.request({
    //   url: `${Uri}user/me`,
    //   method: "POST",
    //   data: {
    //     uid: openid,
    //     platform: "wechat",
    //     pub
    //   }
    // });
  };

  savePosts = async list => {
    const res = await Taro.request({
      url: "https://daily.leeapps.cn/post/create",
      method: "POST",
      data: {
        list
      }
    });
    const datas: any = {};
    if (res.data.code === 0) {
      res.data.data.forEach(v => {
        datas[v.pid] = v.title_cn;
      });
    }
    return datas;
  };

  onTabs = () => {
    const { showTabsOptions, show } =this.state
    if (!show) {
      return this.setState({
        show: true
      })
    }
    this.setState({
      showTabsOptions: !showTabsOptions
    })
  }

  onShowPage = () => {
    const { show } = this.state
    const { indexStore } = this.props
    if (show && !indexStore.favsDone) {
      indexStore.getFavPosts()
    }
    this.setState({
      show: !show
    })
  }

  render() {
    const {
      title,
      top,
      show,
      pub,
      tag,
      keyword,
      innerHeight,
      hits,
      showTabsOptions
    } = this.state;
    const { indexStore } = this.props
    const {
      list,
      posts,
      allPubs,
      allTags,
      tags,
      pubs,
      setting,
      favPids
    } = indexStore;
    const thePub = pub
      ? allPubs.filter(v => v.id === pub)[0]
      : { image: "", name: "" };
    const isPub = pubs.includes(pub);
    const isTag = tags.includes(tag);
    // const mypubs = allPubs.filter(v => pubs.includes(v.id));
    const favPost = favPids.map(v => posts[v]);
    const itemLan = setting.language[1]
    // const iconColor = setting.theme ? '#007AFF' : '#323E70'
    const iconColor = '#323E70'
    return (
      <View className="index">
        <Setting setting={setting} onSet={indexStore.setSetting.bind(indexStore)} show={setting.show} />
        <View
          className="header"
          style={{
            color: "#1c1e21",
            padding: `${top}px 0 10px 10px`,
            height: `35px`
          }}
        >
          <View className="btn" onClick={this.onShowPage}>
            <IconFont name="gengduo" size={40} color={iconColor} />
          </View>
          <View className="btn" onClick={() => this.props.indexStore.setSetting('show', true)}>
            <IconFont name="Settingscontroloptions" size={40} color={iconColor} />
          </View>
          <View className="title">
            <View className="btn" onClick={this.onTabs}>
              {/* 根据关注，全部使用不同的颜色，点击可选择 关注、全部、刷新 */}
              <IconFont name="caidan" size={50} color={iconColor} />
            </View>
            <View className={`options ${showTabsOptions ? 'on' : ''}`}>
              <View className={`option ${setting.tabId === 0 ? 'on' : ''}`} onClick={this.onChangeTab.bind(this, 0)}>关注</View>
              <View className={`option ${setting.tabId === 1 ? 'on' : ''}`} onClick={this.onChangeTab.bind(this, 1)}>全部</View>
              <View className="option" onClick={this.onChangeTab.bind(this, 2)}>刷新</View>
            </View>
          </View>
        </View>
        <View
          className="inner"
          style={{ transform: `translateX(${show ? "-50%" : "0"})` }}
        >
          <ScrollView
            className="topics"
            scrollY
            style={{ height: `${innerHeight - top - 50}px` }}
            enableFlex
          >
            {/* <View className="btn">
              <IconFont name="rss" size={50} color={iconColor} />
              <Text>关注的频道</Text>
            </View> */}
            {/* <ScrollView className="pubs" scrollX lowerThreshold={20} enableFlex>
              {mypubs.map(v => (
                <View
                  key={v.id}
                  className="topic"
                  onClick={this.onPub.bind(this, v.id)}
                >
                  <View className="box">
                    <Image src={v.image} mode="aspectFit" />
                    <Text>{v.name}</Text>
                  </View>
                </View>
              ))}
              {
                pubs.length === 0 &&
                <View>
                  <Text>暂无关注频道，快去常见频道选择添加吧</Text>
                </View>
              }
            </ScrollView> */}
            <View className="btn">
              <IconFont name="tag" size={50} color={iconColor} />
              <Text>关注的标签</Text>
            </View>
            <ScrollView className="tags" scrollX lowerThreshold={20} enableFlex>
              {
                tags.map(mtag => (
                  <Text className="tag" key={mtag} onClick={this.onTag.bind(this, mtag)}>
                    #{mtag}
                  </Text>
                  ))
              }
              {
                tags.length === 0 &&
                <Text className="tag">暂无关注，请搜索添加</Text>
              }
            </ScrollView>
            <View className="search-tag">
              <View className="search-tag-box">
                <View className="search-input">
                  <IconFont name="sousuo" size={36} color="#000" />
                  <Input
                    value={keyword}
                    onConfirm={this.onSearch}
                    placeholder="搜索标签"
                  />
                </View>
                <View className="hit-tags">
                  {hits.map(hit => (
                    <Text key={hit} onClick={this.onTag.bind(this, hit)}>
                      {hit}
                    </Text>
                  ))}
                </View>
              </View>
            </View>
            {/* <View className="btn" style={{marginTop: "30px"}}>
              <IconFont name="more1" size={50} color={iconColor} />
              <Text>常见频道</Text>
            </View>
            <ScrollView className="pubs" scrollX lowerThreshold={20} enableFlex>
              {allPubs.map(v => (
                <View
                  key={v.id}
                  className="topic"
                  onClick={this.onPub.bind(this, v.id)}
                >
                  <View className="box">
                    <Image src={v.image} mode="aspectFit" lazyLoad />
                    <Text>{v.name}</Text>
                  </View>
                </View>
              ))}
            </ScrollView> */}
            <View className="btn">
              <IconFont name="more1" size={50} color={iconColor} />
              <Text>常见标签</Text>
            </View>
            <ScrollView className="tags" scrollX lowerThreshold={20} enableFlex>
              {
                allTags.map(mtag => (
                  <Text className="tag" key={mtag} onClick={this.onTag.bind(this, mtag)}>
                    #{mtag}
                  </Text>
                  ))
              }
            </ScrollView>
            <View className="btn">
              <IconFont name="shoucang" size={50} color={iconColor} />
              <Text>我的收藏</Text>
            </View>
            <View className="fav-posts">
              {
                favPids.length === 0 &&
                <View style={{color: '#a9abb3', textAlign: 'center', padding: '10px 0'}}>暂无收藏，快去阅读吧</View>
              }
              {
                favPost.map((v, index) => <View key={v.id} className="btn" onClick={this.onPost.bind(this, v.id)}>{index + 1}. {itemLan === 0 ? v.title : (itemLan === 1 ? v.title_cn : `${v.title}  (${v.title_cn})`)}</View>)
              }
            </View>
          </ScrollView>
          <ScrollView
            scrollY
            lowerThreshold={200}
            className="posts"
            style={{ height: `${innerHeight - top - 50}px` }}
            onScrollToLower={this.onNext}
            enableFlex
            enableBackToTop
          >
            {pub && (
              <View
                className="the-topic"
                onClick={this.onLikePub.bind(this, pub)}
              >
                <Image src={thePub.image} mode="aspectFit" />
                <View style={{ display: "flex", alignItems: "center" }}>
                  <Text style={{ color: isPub ? "#f58301" : iconColor }}>
                    {title}
                  </Text>
                  <View className={`btn ${isPub ? 'on' : ''}`}>
                    <IconFont name="rss" size={40} color={isPub ? "#f58301" : iconColor} />
                  </View>
                </View>
              </View>
            )}
            {tag && (
              <View
                className="the-tag"
                onClick={this.onLikeTag.bind(this, tag)}
              >
                <Text style={{ color: isTag ? "#f58301" : iconColor }}>
                  {title}
                </Text>
                <View className={`btn ${isTag ? 'on' : ''}`}>
                  <IconFont name="tag" size={40} color={isTag ? "#f58301" : iconColor} />
                </View>
              </View>
            )}
            {list.map(id => (
              <Post
                key={id}
                pid={id}
                post={posts[id]}
                setting={setting}
                onPost={this.onPost}
                onTag={this.onTag}
                onPub={this.onPub}
              />
            ))}
            <Loading />
          </ScrollView>
        </View>
      </View>
    );
  }
}

export default Index;
