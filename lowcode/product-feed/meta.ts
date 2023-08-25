import { ComponentMetadata, Snippet } from '@alilc/lowcode-types';

const ProductFeedMeta: ComponentMetadata = {
  componentName: 'ProductFeed',
  title: '商品列表',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: 'taro-metarial',
    version: '0.1.0',
    exportName: 'ProductFeed',
    main: 'src/index.tsx',
    destructuring: true,
    subName: '',
  },
  configure: {
    props: [
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'product',
            'zh-CN': '商品',
          },
        },
        name: 'value',
        display: 'block',
        setter: {
          componentName: 'ProductSetter',
          props: {},
          initialValue: [],
        },
      },

    ],
    supports: {
      style: true,
    },
    component: {},
  },
};
const snippets: Snippet[] = [
  {
    title: '商品列表',
    screenshot: '',
    schema: {
      componentName: 'ProductFeed',
      props: {},
    },
  },
];

export default {
  ...ProductFeedMeta,
  snippets,
};
