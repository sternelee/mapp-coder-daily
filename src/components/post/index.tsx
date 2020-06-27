import Taro from "@tarojs/taro";
import { View, Text, Image } from "@tarojs/components";
import { dateForLatest } from "@utils/index";
import { Themes } from '@api/index';

import "./index.styl";

const maxLen = 8

function Post(props) {
  const { post, pid, onPost, onTag, onPub, setting } = props;
  const { language, theme } = setting;
  const tags = post.tags.length > maxLen ? post.tags.slice(0, maxLen) : post.tags
  const pub = post.publication
  return (
    <View key={pid} className={`post ${Themes[theme]}`}>
      <View className="topic">
        <Image src={pub.image} mode="aspectFit" onClick={() => onPub(pub.id)} lazyLoad />
        <Text onClick={() => onPub(pub.id)}>{pub.name}</Text>
        <Text className="date">
          {dateForLatest(post.createdAt, language[0])}
        </Text>
      </View>
      <View className="content">
        <Image src={post.image} onClick={() => onPost(pid)} lazyLoad />
        <View className="name" onClick={() => onPost(pid)}>
        {
          (language[1] === 0 || language[1] === 2) &&
          <View className="text">{ post.title }</View>
        }
        {
          (language[1] === 1 || language[1] === 2) &&
          <View className="text">{ post.title_cn }</View>
        }
        </View>
        <View className="tags">
          {tags.map((vtag, index) => (
            <Text className="tag" key={pid + index} onClick={() => onTag(vtag)}>
              #{vtag}
            </Text>
          ))}
          {
            post.tags.length > maxLen &&
            <Text>...</Text>
          }
        </View>
      </View>
    </View>
  );
}

Post.defaultProps = {
  post: {
    createdAt: new Date(),
    image: "",
    publication: {},
    tags: []
  },
  pid: 0,
  setting: {
    language: [0, 1, 0],
    theme: 0
  }
};

export default Post;
