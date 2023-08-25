import { ComponentMetadata, Snippet } from '@alilc/lowcode-types';

const PageMeta: ComponentMetadata = {
  componentName: 'Page',
  title: 'Page',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: 'taro-metarial',
    version: '0.1.0',
    exportName: 'Page',
    main: 'src/index.tsx',
    destructuring: true,
    subName: '',
  },
  configure: {
    props: [

    ],
    supports: {
      style: true,
    },
    component: {},
  },
};
const snippets: Snippet[] = [
  {
    title: 'Page',
    screenshot: '',
    schema: {
      componentName: 'Page',
      props: {},
    },
  },
];

export default {
  ...PageMeta,
  // snippets,
};
