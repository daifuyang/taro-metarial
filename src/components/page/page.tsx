import React,{createElement} from 'react';
import { View } from '@tarojs/components';

interface PageProps {
  children: React.ReactNode;
  __designMode?: string; // Assuming __designMode is an optional prop
}

const Page: React.FC<PageProps> = ({ children, __designMode }) => {
  let Div: any = 'div';
  if (__designMode !== 'design' && View) {
    Div = View;
  }

  return (
    <Div className="lce-page">
      {children}
    </Div>
  );
};

Page.displayName = 'Page';

export default Page;
