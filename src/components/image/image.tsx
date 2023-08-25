import * as React from 'react';
import { createElement } from 'react';

import { View, Image as TaroImage } from '@tarojs/components';
import empty from './empty.png';
import { getPrevPath } from '../../utils/util';

interface List {
  _BASE_URL?: string;
  src?: string;
  alt?: string;
  onClick?: any; //待定义
}

export interface ImageProps {
  __designMode?: string;
  type?: 'vertical' | 'swiper' | 'horizontal';
  list?: List[];
  boxShadow?: string;
  borderRadius?: string;
  pagePadding?: string;
  imagePadding?: string;
  imageMargin?: string;
}

const Image: React.FC<ImageProps> = function (props) {
  const { __designMode, list = [] } = props;

  const style: React.CSSProperties = {};

  if (list.length === 0) {
    style.height = 200;
  }

  let ViewEle: any = 'div';
  let ImageEle: any = 'img';

  if (__designMode !== 'design') {
    if (View) ViewEle = View;
    if (TaroImage) ImageEle = TaroImage;
  }

  const imageRender: any = () => {
    if (__designMode === 'design') {
      if (list?.length === 0) {
        return <ImageEle mode="widthFix" style={{ width: '100%', height: '100%' }} src={empty} />;
      }
    }

    return (
      <ViewEle className="ui taro-image">
        {list?.map((item, i) => {
          const prevPath = getPrevPath(item) || empty
          return (
            <ViewEle key={i} className="li">
              <ImageEle mode="widthFix" style={{ width: '100%' }} key={i} src={prevPath} alt={item?.alt} />
            </ViewEle>
          );
        })}
      </ViewEle>
    );
  };

  return <ViewEle style={style}>{imageRender()}</ViewEle>;
};

export default Image;
