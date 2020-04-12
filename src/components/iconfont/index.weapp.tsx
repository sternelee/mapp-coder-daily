/* tslint:disable */
/* eslint-disable */

import Taro, { FunctionComponent } from '@tarojs/taro';

interface Props {
  name: 'caidan1' | 'gengduo' | 'check' | 'check1' | 'home' | 'caidan';
  size?: number;
  color?: string | string[];
}

export const IconFont: FunctionComponent<Props> = (props) => {
  const { name, size, color } = props;

  // @ts-ignore
  return <iconfont name={name} size={parseFloat(Taro.pxTransform(size))} color={color} />;
};

IconFont.defaultProps = {
  size: 18,
};

IconFont.config = {
  usingComponents: {
    iconfont: './weapp/weapp',
  },
};

export default IconFont;
