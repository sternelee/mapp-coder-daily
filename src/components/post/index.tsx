import Taro from "@tarojs/taro";
import { View, Text, Image } from "@tarojs/components";
import { dateForLatest } from "@utils/index";
import { Themes } from '@api/index';

import "./index.styl";

function Post(props) {
  const { post, pid, onPost, onTag, setting } = props;
  const { language, theme } = setting;
  const title =
    language[1] === 0
      ? post.title
      : language[1] === 1
      ? post.title_cn
      : post.title + "-" + post.title_cn;
  return (
    <View key={pid} className={`post ${Themes[theme]}`}>
      <View className="topic">
        <Image src={post.publication.image} mode="aspectFit" />
        <Text>{post.publication.name}</Text>
        <Text className="date">
          {dateForLatest(post.createdAt, language[0])}
        </Text>
      </View>
      <View className="content">
        <Image src={post.image} onClick={() => onPost(pid)} />
        <Text className="name" onClick={() => onPost(pid)}>
          {title}
        </Text>
        <View className="tags">
          {post.tags.map((vtag, index) => (
            <Text className="tag" key={pid + index} onClick={() => onTag(vtag)}>
              #{vtag.toUpperCase()}
            </Text>
          ))}
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
