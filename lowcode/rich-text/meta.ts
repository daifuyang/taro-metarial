import { ComponentMetadata, Snippet } from '@alilc/lowcode-types';

const Meta: ComponentMetadata = {
  componentName: 'RichText',
  title: '富文本',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  configure: {
    props: [
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'content',
            'zh-CN': '内容',
          },
          tip: 'type | 内容',
        },
        name: 'html',
        description: '内容',
        setter: "EditSetter"
      },
    ],
    supports: {

    },
    component: {},
  },
};
const snippets: Snippet[] = [
  {
    title: '富文本段落',
    screenshot: 'https://alifd.alicdn.com/fusion-cool/icons/icon-antd/typography-paragraph-1.png',
    schema: {
      componentName: 'RichText',
    },
  },
];

export default {
  ...Meta,
  snippets,
};
