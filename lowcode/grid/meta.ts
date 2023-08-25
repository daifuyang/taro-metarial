import { ComponentMetadata, Snippet } from '@alilc/lowcode-types';

const GridMeta: ComponentMetadata = {
  componentName: 'Grid',
  title: '宫格导航',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: 'taro-metarial',
    version: '0.1.0',
    exportName: 'Grid',
    main: 'src/index.tsx',
    destructuring: true,
    subName: '',
  },
  configure: {
    props: [
      {
        name: 'data',
        display: 'block',
        title: { label: '添加图片', tip: '建议图片尺寸宽度750，高度不限制。' },
        setter: {
          componentName: 'ImageArraySetter',
          props: {
            config: {
              type: 'icon'
            }
          },
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
    title: '宫格导航',
    screenshot: '',
    schema: {
      componentName: 'Grid',
      props: {},
    },
  },
];

export default {
  ...GridMeta,
  snippets,
};
