import React, { createElement, useContext, useEffect, useState } from 'react';
import { ConfigContext } from '../ConfigContext';
import Card from './components/card';
import List from './components/card';

export interface ProductFeed {
  __designMode: string;
  data: any[];
  itemKey?: string;
  initProductNum?: number;
  col?: 1 | 2;
  padding?: number | string;
  borderRadius?: number | string;
  thumb?: string;
}

const Index = (props: ProductFeed) => {
  const { __designMode, value = {} ,onClick } = props;
  const [products, setProducts] = useState([]);

  const { config = {} } = useContext(ConfigContext) || {};
  let { productListAction } = config;

  if (__designMode === 'design') {
    productListAction = (window as any).top.productListAction;
  }

  const fetchData = async (params = {}) => {
    if (productListAction) {
      const res = await productListAction(params);
      if (res.success) {
        setProducts(res.data);
      }
    }
  };

  useEffect(() => {
    const {type,data} = value
    const params:any = {}
    if(type === 'category' && data.length > 0) {
      params.category = data[0].id
    }
    fetchData(params);
  }, []);

  const { col = 2 } = props;
  if (col == 2) {
    return <Card products={products} {...props} />;
  }

  return <List {...props} />;
};
export default Index;
