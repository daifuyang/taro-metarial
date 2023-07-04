import * as React from 'react';
import { createElement } from 'react';

import { View } from '@tarojs/components';

export interface DividerProps {
  __designMode?: string;
  type: 'block' | 'border';
  height?: number;
  borderStyle?: string;
  borderColor?: string;
  padding?: string;
}

const Divider: React.FC<DividerProps> = function (props) {
  const { type, __designMode, borderStyle, padding,borderColor } = props;

  let { height = 8 } = props;

  let Component: any = 'div';

  if (__designMode !== 'design' && View) {
    Component = View;
  }

  if (height < 8) {
    height = 8;
  }

  if (type === 'block') {
    return <Component className="taro-margin" style={{ height }} />;
  }

  return (
    <Component
      style={{
        padding: padding ? '0 15px' : '',
      }}
    >
      <Component
        style={{
          '--border-style': borderStyle,
          '--border-color': borderColor,
        }}
        className="taro-divider"
      />
    </Component>
  );
};

export default Divider;
