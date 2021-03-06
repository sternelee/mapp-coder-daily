import Taro, { useState } from "@tarojs/taro";
import { View, Text, Button } from "@tarojs/components";
import { toJS } from "mobx";
import { ISeeting } from "@store/index";
import IconFont from "@components/iconfont";
import Pay from "./pay";

import "./index.styl";

interface IProps {
  show: boolean
  setting: ISeeting;
  onSet: (key, val) => void;
}

function Setting(props: IProps) {
  let { setting: { language, theme, tabId, order }, onSet, show } = props;
  const [ pay, setPay ] = useState(false)
  language = toJS(language)
  const setLan = (index, val) => {
    const lan = language
    lan[index] = val
    onSet('language', lan)
  }

  // const setTheme = (num) => {
  //   onSet('theme', num)
  // }

  return (
    <View className={show ? "toast on" : "toast"}>
      <Pay onPay={() => setPay(false)} show={pay} />
      <View className="setting">
        <View className="title">
          <IconFont name="Settingscontroloptions" size={70} color="#323E70" />
          <Text>设置中心</Text>
        </View>
        <View className="label">
          <Text>默认显示: </Text>
          <View className="sort">
            <View className={`btn ${tabId === 0 ? 'on' : ''}`} onClick={() => onSet('tabId', 0)}><Text>关注</Text></View>
            <View className={`btn ${tabId === 1 ? 'on' : ''}`} onClick={() => onSet('tabId', 1)}><Text>全部</Text></View>
          </View>
        </View>
        <View className="label">
          <Text>内容排序: </Text>
          <View className="sort">
            <View className={`btn ${order === 'popularity' ? 'on' : ''}`} onClick={() => onSet('order', 'popularity')}><Text>最热</Text></View>
            <View className={`btn ${order === 'creation' ? 'on' : ''}`} onClick={() => onSet('order', 'creation')}><Text>最新</Text></View>
          </View>
        </View>
        {/* <View className="label">
          <Text>暗色模式:</Text>
          <View className={`btn ${theme === 1 ? 'on' : ''}`} onClick={() => setTheme(theme ? 0: 1)}><IconFont name={theme === 1 ? 'iconfonttoggleon' : 'guan'} size={50} color="323E70" /></View>
        </View> */}
        <View className="label">
          <Text>标题语言:</Text>
          <View className={`btn ${language[1] === 0 ? 'on' : ''}`} onClick={() => setLan(1, 0)}><IconFont name="yingwen" size={40} color="#323E70" /></View>
          <View className={`btn ${language[1] === 1 ? 'on' : ''}`} onClick={() => setLan(1, 1)}><IconFont name="zhongwen" size={40} color="#323E70" /></View>
          <View className={`btn ${language[1] === 2 ? 'on' : ''}`} onClick={() => setLan(1, 2)}><IconFont name="language" size={40} color="#323E70" /></View>
        </View>
        <View className="label">
          <Text>文章语言:</Text>
          <View className={`btn ${language[2] === 0 ? 'on' : ''}`} onClick={() => setLan(2, 0)}><IconFont name="yingwen" size={40} color="#323E70" /></View>
          <View className={`btn ${language[2] === 1 ? 'on' : ''}`} onClick={() => setLan(2, 1)}><IconFont name="zhongwen" size={40} color="#323E70" /></View>
          <View className={`btn ${language[2] === 2 ? 'on' : ''}`} onClick={() => setLan(2, 2)}><IconFont name="language" size={40} color="#323E70" /></View>
        </View>
        <View className="label info">
          <Button openType="contact">
            <View className="btn"><IconFont name="kefu" size={40} color="323E70" />客服</View>
          </Button>
          <Button onClick={() => setPay(true)}>
          <View className="btn"><IconFont name="aixinjuanzeng" size={40} color="323E70" />捐赠</View>
          </Button>
        </View>
        <View className="title btn" onClick={() => onSet('show', false)}>
          <IconFont name="Settingscontroloptions" size={50} color="#323E70" />
          <Text>确定</Text>
        </View>
      </View>
    </View>
  );
}

Setting.defaultProps = {
  show: false,
  setting: {
    language: [0, 2, 2],
    theme: 0,
    tabId: 0,
    order: 'popularity',
    show: false
  },
  onSet: (key, val) => null
}

export default Setting;
