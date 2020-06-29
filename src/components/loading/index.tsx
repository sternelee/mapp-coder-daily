import Taro from "@tarojs/taro";
import { View } from "@tarojs/components";
import IconFont from "@components/iconfont";

import "./index.styl";

export default function Loading () {
  const iconColor = '#323E70'
  return (
    <View className="loading-wrap">
      <View className="loading">
        <IconFont name="loading" size={60} color={iconColor} />
      </View>
    </View>
  )
}
