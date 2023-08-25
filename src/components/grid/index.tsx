import * as React from 'react';
import { createElement, useContext } from 'react';
import { ConfigContext } from '../ConfigContext';
import { View, Image } from '@tarojs/components';
import { getPrevPath } from '../../utils/util';

export interface GridProps {
  __designMode?: string;
  columns?: number;
}

const Grid: React.FC<GridProps> = function (props) {
  const { __designMode, columns = 4, data = [] } = props;

  const { config = {} } = useContext(ConfigContext) || {};

  const { actionTo } = config;

  let Div: any = 'div';
  let Img: any = 'img';
  if (__designMode !== 'design' && View) {
    Div = View;
    Img = Image;
  }

  return (
    <Div className="taro-grid">
      {data?.map((item, i) => {
        const prevPath = getPrevPath(item);
        return (
          <Div
            onClick={() => {
              if (actionTo) {
                actionTo(item.action);
              }
            }}
            key={i}
            className="taro-grid-item"
          >
            <Div className="taro-grid-item-content">
              <Div
                className="icon"
                style={{
                  backgroundImage: `url(${prevPath})`,
                }}
              />
              <Div className="taro-grid-item-text">{item.title}</Div>
            </Div>
          </Div>
        );
      })}

      {!data?.length && <div className="taro-grid-empty">请在右侧添加图文导航</div>}
    </Div>
  );
};

export default Grid;
