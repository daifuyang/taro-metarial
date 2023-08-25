import * as React from 'react';
import { createElement } from 'react';

import Image from './image';
import Swiper from './swiper'


const Index: React.FC<any> = function (props) {

  const {type} = props


  if(type === "vertical") {
    return <Image {...props} />
  }


  return <div>Image</div>
};

export default Index;



