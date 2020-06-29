/* tslint:disable */
/* eslint-disable */

import Taro, { FunctionComponent } from '@tarojs/taro';

interface Props {
  name: 'loading' | 'kefu' | 'aixinjuanzeng' | 'queding' | 'theme' | 'yingwen' | 'zhongwen' | 'language' | 'shoucang' | 'tag' | 'rss' | 'lianjie' | 'tianjia' | 'gengduo' | 'sousuo' | 'caidan' | 'iconfonttoggleon' | 'more' | 'guan' | 'more1' | 'home' | 'Settingscontroloptions' | 'bqxin' | 'xin';
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
