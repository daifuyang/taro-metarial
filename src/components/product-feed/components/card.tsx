import * as React from 'react';
import { createElement, useContext } from 'react';

import { View, Text } from '@tarojs/components';
import type { ProductFeed } from '../productFeed';
import empty from './empty.jpg'
import styles from './card.module.scss';
import { ConfigContext } from '../../ConfigContext';

const Card = (props: ProductFeed) => {
  const { products = [], __designMode,onClick } = props;

  const { config = {} } = useContext(ConfigContext) || {};

  const { assetsURL } = config;

  let Div: any = 'div';
  let Span: any = 'span';
  if (__designMode !== 'design' && View) {
    Div = View;
    Span = Text;
  }

  return (
    <Div className={styles.cardContainer}>
      <Div className={styles.cardList}>
        {products?.map((item, i) => {
          const { productThumbnail = [] } = item;
          let mainSrc = empty;
          if (productThumbnail.length > 0) {
            mainSrc = productThumbnail[0] && assetsURL + productThumbnail[0];
          }

          let priceRender = (
            <Div>
              <Div className={styles.sales}>已售：{item.sales || 0}</Div>
              <Div className={styles.priceWrap}>
                <Div className={styles.unit}>￥</Div>
                <Div className={styles.price}>{item.price}</Div>
              </Div>
            </Div>
          );

          if (item.priceNegotiable === 1) {
            priceRender = (
              <Div className={`${styles.priceWrap} ${styles.priceNegotiable}`}>价格面议</Div>
            );
          }

          return (
            <Div onClick={ () => {
              if(onClick) {
                onClick(item)
              }
            } } key={item.productId} className={styles.col6}>
              <Div className={styles.cardItem}>
                <Div className={styles.imgWrap}>
                  <Div
                    style={{
                      backgroundImage: `url(${mainSrc})`,
                    }}
                    className={styles.img}
                  ></Div>
                </Div>
                <Div className={styles.cardContent}>
                  <Div className={styles.productName}>{item.productName}</Div>
                  {priceRender}
                  {/* <Div className={styles.priceWrap}>
                    <Div className={styles.price}>￥{item.price}</Div>
                    <Div className={styles.addToCart}>
                      <Span className={`${styles.icon} iconfont icon-cart`} />
                    </Div>
                  </Div> */}
                </Div>
              </Div>
            </Div>
          );
        })}
      </Div>
    </Div>
  );
};
export default Card;
