import * as React from 'react';
import { createElement } from 'react';
import { View } from '@tarojs/components';
import clx from 'classnames';

export interface TypographyProps {
  __designMode?: string;
  title?: string;
  desc?: string;
  textAlign?: string;
  titleFontSize?: string;
  descFontSize?: string;
  titleFontWeight?: string;
  descFontWeight?: string;
  titleColor?: string;
  descColor?: string;
  backgroundColor?: string;
  divider?: boolean;
  showMore?: boolean;
}

const Typography: React.FC<TypographyProps> = function (props) {
  const {
    __designMode,
    title,
    desc,
    textAlign,
    titleFontSize,
    descFontSize,
    titleFontWeight,
    descFontWeight,
    titleColor,
    descColor,
    backgroundColor,
    divider
  } = props;

  const titleStyle: any = {
    textAlign,
    fontSize: Number(titleFontSize),
    fontWeight: titleFontWeight,
    color: titleColor,
  };

  const descStyle: any = {
    textAlign,
    fontSize: Number(descFontSize),
    fontWeight: descFontWeight,
    color: descColor,
  };

  let Component: any = 'div';

  if (__designMode !== 'design' && View) {
    Component = View;
  }

  return (
    <Component style={{ backgroundColor }} className="taro-typography">
      <Component className={clx({
        "taro-typography-container":true,
        "has-divider": divider
      })}>
        {title && (
          <Component style={titleStyle} className="taro-title">
            {title}
          </Component>
        )}
        {desc && (
          <Component style={descStyle} className="taro-desc">
            {desc}
          </Component>
        )}
      </Component>
    </Component>
  );
};

export default Typography;
