import Taro, { saveFile } from "@tarojs/taro";
import { View, Text, Image } from "@tarojs/components";
import IconFont from "@components/iconfont";

import "./index.styl";

interface IProps {
  onPay: () => void;
}

function Pay(props: IProps) {
  let { onPay } = props;

  const saveImg = () => {
    Taro.previewImage({
      current: 'https://api.leeapps.cn/uploads/bb5a5f2ba9b2430dac887245cfe9aba1.jpg',
      urls: ['https://api.leeapps.cn/uploads/bb5a5f2ba9b2430dac887245cfe9aba1.jpg']
    })
  }
  return (
    <View className="toast">
      <View className="setting">
        <View className="title">
          <Image onClick={() => saveImg()} src="https://api.leeapps.cn/uploads/bb5a5f2ba9b2430dac887245cfe9aba1.jpg" mode="aspectFit" />
        </View>
        <View className="title btn" onClick={() => onPay()}>
          <IconFont name="Settingscontroloptions" size={50} color="#323E70" />
          <Text>关闭</Text>
        </View>
      </View>
    </View>
  );
}

Pay.defaultProps = {
  onPay: () => null
}

export default Pay;
