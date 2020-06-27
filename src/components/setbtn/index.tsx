import Taro from "@tarojs/taro";
import { View } from "@tarojs/components";
import IconFont from "@components/iconfont";

function SetBtn(props) {
  const { name, on, onClick } = props;
  return (
    <View className={`btn ${on ? "on" : ""}`} onClick={() => onClick}>
      <IconFont name={name} size={40} color={on ? "#2d4cc8" : "#323E70"} />
    </View>
  );
}

SetBtn.defaultProps = {
  on: false,
  name: 'home',
  onClick: () => null
};

export default SetBtn;
