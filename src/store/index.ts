import Taro from '@tarojs/taro'
import { observable, action } from 'mobx'
import { Uri, AuthUri } from '@api/index'

interface PostInterface {
  id: string
  createdAt: string
  image: string
  placeholder: string
  publication: {
    id: string
    image: string
    name: string
  }
  publishedAt: string
  ratio: number
  readTime: number
  tags: string[]
  title: string
  url: string
  views: number
  pid?: number // 对应内容的序号id
  author?: string
  title_cn?: string
  lead_image_url?: string
  word_count?: number
  content?: string
  content_cn?: string
}

interface PubInterface {
  enabled: boolean;
  id: string;
  image: string;
  name: string;
  twitter: string;
}

export interface ISeeting {
  language: number[] // 0为英文，1为中文，2为双语；系统显示，文章标题，文章内容
  theme: number // o为默认，1为黑暗主题，2为自适应
  order: 'latest' | 'popularity' // 默认排序
  show: boolean
}

export interface StoreInterface {
  auth: {
    openid: string
    session_key: string
  }
  isAuth: boolean
  setting: ISeeting
  list: string[]
  posts: {
    [id: string]: PostInterface
  }
  tags: string[]
  pubs: string[]
  favs: string[]
  favPids: string[]
  favsDone: boolean
  allTags: string[]
  allPubs: PubInterface[]
  page: number
  more: boolean
  setAuth: (obj: any) => void
  setList: (list: string[], more: boolean) => void
  setPost: (obj: any) => void
  setTags: (list: string[]) => void
  setPubs: (list: string[]) => void
  setFavs: (list: string[]) => void
  getAuth: () => void
  checkUser: () => void
  getFavPosts: () => void
  setSetting: (key: 'language' | 'theme' | 'show' | 'order', val: any) => void
  initSetting: () => void
}

class Store implements StoreInterface {
  @observable auth = {openid: '', session_key: ''}
  @observable isAuth: boolean = false
  @observable list: string[] = []
  @observable posts = {}
  @observable tags: string[] = []
  @observable pubs: string[] = []
  @observable favs: string[] = []
  @observable favPids: string[] = []
  @observable favsDone: boolean = false
  @observable allTags: string[] = []
  @observable allPubs: PubInterface[] = []
  @observable page: number = 0
  @observable more: boolean = false
  @observable setting: ISeeting = {
    language: [0, 2, 2],
    theme: 0,
    order: 'latest',
    show: false
  }


  @action
  setAuth (obj) {
    this.isAuth = true
    this.auth = obj
  }

  @action
  setList (list: string[], more: boolean) {
    this.list = more ? [...this.list, ...list] : list
  }

  @action
  setPost (newObj: any) {
    const id = newObj.id
    const old = this.posts[id] || {}
    this.posts[id] = {
      ...old,
      ...newObj
    }
  }

  @action
  setTags (list) {
    this.tags = list
  }

  @action
  setPubs (list) {
    this.pubs = list
  }

  @action
  setFavs (list) {
    this.favs = list
  }

  @action
  getAuth () {
    Taro.getStorage({
      key: "auth"
    })
      .then(res => {
        this.setAuth(res.data);
        setTimeout(() => this.checkUser(), 1000);
      })
      .catch(() => {
        Taro.login().then(res => {
          Taro.request({
            url: `${AuthUri}auth?js_code=${res.code}&type=daily`
          })
            .then(res1 => res1.data)
            .then(res2 => {
              if (res2.openid) {
                this.setAuth(res2);
                Taro.setStorageSync("auth", res2);
                setTimeout(() => this.checkUser(), 1000);
              }
            });
        });
      });
  }

  @action
  checkUser () {
    const {
      auth: { openid }
    } = this;
    Taro.request({
      url: `${Uri}user/me?uid=${openid}&platform=wechat`
    }).then(res => {
      const { tags, pubs, favs } = res.data.data;
      this.setTags(tags);
      this.setPubs(pubs);
      this.setFavs(favs);
    });
  }

  @action
  getFavPosts () {
    if (this.favsDone) return
    Taro.request({
      url: `${Uri}post/find?ids=${this.favs}`
    }).then(res => {
      this.favsDone = true
      const list = res.data.data.map(v => {
        this.setPost({
          ...v,
          id: v.pid,
          pid: v.id
        })
        return v.pid
      })
      this.favPids = list
    })
  }

  @action
  async initSetting () {
    const setting = await Taro.getStorageSync('setting');
    if (setting) {
      this.setting = setting
    }
  }

  @action
  setSetting (key, val) {
    const setting = Object.assign({}, this.setting)
    setting[key] = val
    this.setting = setting
    Taro.setStorage({
      key: 'setting',
      data: setting
    })
  }
}

export default new Store
