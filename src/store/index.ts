import { observable, action } from 'mobx'

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

export interface StoreInterface {
  auth: {
    openid: string
    session_key: string
  }
  setting: {
    language: number[] // 0为英文，1为中文，2为双语；系统显示，文章标题，文章内容
    theme: number // o为默认，1为黑暗主题，2为自适应
    order: 'latest' | 'popularity' // 默认排序
  }
  list: string[]
  posts: {
    [id: string]: PostInterface
  }
  tags: string[]
  pubs: string[]
  favs: string[]
  allTags: string[]
  allPubs: PubInterface[]
  page: number
  setAuth: (obj: any) => void
  setList: (list: string[], more: boolean) => void
  setPost: (obj: any) => void
  setTags: (list: string[]) => void
  setPubs: (list: string[]) => void
  setFavs: (list: string[]) => void
}

class Store implements StoreInterface {
  @observable auth = {openid: '', session_key: ''}
  @observable list: string[] = []
  @observable posts = {}
  @observable tags: string[] = []
  @observable pubs: string[] = []
  @observable favs: string[] = []
  @observable allTags: string[] = []
  @observable allPubs: PubInterface[] = []
  @observable page: number = 0
  @observable setting: {
    language: number[]
    theme: number
    order: 'latest' | 'popularity'
  } = {
    language: [1, 2, 0],
    theme: 0,
    order: 'popularity'
  }


  @action
  setAuth (obj) {
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
}

export default new Store
