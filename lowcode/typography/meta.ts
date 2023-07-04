import { ComponentMetadata, Snippet } from '@alilc/lowcode-types';

const Meta: ComponentMetadata = {
  componentName: 'Typography',
  title: '标题文本',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  configure: {
    props: [
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'title',
            'zh-CN': '标题内容',
          },
          tip: 'type | 标题内容',
        },
        name: 'title',
        description: '标题内容',
        setter: 'StringSetter',
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'desc',
            'zh-CN': '描述内容',
          },
          tip: 'type | 描述内容',
        },
        name: 'desc',
        description: '描述内容',
        setter: 'TextAreaSetter',
      },
      {
        type: 'group',
        title: '样式',
        display: 'accordion',
        items: [
          {
            name: 'textAlign',
            title: { label: '显示位置', tip: '标题文本显示的位置' },
            setter: {
              componentName: 'RadioGroupSetter',
              initialValue: 'left', // 设置默认值
              props: {
                options: [
                  {
                    title: '居左显示',
                    value: 'left',
                  },
                  {
                    title: '居中显示',
                    value: 'center',
                  },
                ],
              },
            },
          },
          {
            name: 'titleFontSize',
            title: { label: '标题大小', tip: '标题显示字体大小' },
            setter: {
              componentName: 'RadioGroupSetter',
              initialValue: '16', // 设置默认值
              props: {
                options: [
                  {
                    title: '大（16号）',
                    value: '16',
                  },
                  {
                    title: '中（14号）',
                    value: '14',
                  },
                  {
                    title: '小（12号）',
                    value: '12',
                  },
                ],
              },
            },
          },
          {
            name: 'descFontSize',
            title: { label: '描述大小', tip: '描述显示字体大小' },
            setter: {
              componentName: 'RadioGroupSetter',
              initialValue: '12', // 设置默认值
              props: {
                options: [
                  {
                    title: '大（16号）',
                    value: '16',
                  },
                  {
                    title: '中（14号）',
                    value: '14',
                  },
                  {
                    title: '小（12号）',
                    value: '12',
                  },
                ],
              },
            },
          },
          {
            name: 'titleFontWeight',
            title: { label: '标题粗细', tip: '标题显示字体粗细' },
            setter: {
              componentName: 'RadioGroupSetter',
              initialValue: 'bold', // 设置默认值
              props: {
                options: [
                  {
                    title: '加粗体',
                    value: 'bold',
                  },
                  {
                    title: '常规体',
                    value: '400',
                  },
                ],
              },
            },
          },
          {
            name: 'descFontWeight',
            title: { label: '描述粗细', tip: '描述显示字体粗细' },
            setter: {
              componentName: 'RadioGroupSetter',
              initialValue: '400', // 设置默认值
              props: {
                options: [
                  {
                    title: '加粗体',
                    value: 'bold',
                  },
                  {
                    title: '常规体',
                    value: '400',
                  },
                ],
              },
            },
          },
          {
            name: 'titleColor',
            title: { label: '标题颜色', tip: '标题颜色' },
            setter: {
              componentName: 'ColorSetter',
              initialValue: '#323233',
            },
          },
          {
            name: 'descColor',
            title: { label: '描述颜色', tip: '描述颜色' },
            setter: {
              componentName: 'ColorSetter',
              initialValue: '#969799',
            },
          },
          {
            name: 'backgroundColor',
            title: { label: '背景色', tip: '背景色' },
            setter: {
              componentName: 'ColorSetter',
              initialValue: '#ffffff',
            },
          },
          {
            name: 'divider',
            title: { label: '底部分割线', tip: '显示底部分割线' },
            setter: 'BoolSetter',
            defaultValue: false
          }
        ],
      },
    ],
    supports: {},
    component: {},
  },
};
const snippets: Snippet[] = [
  {
    title: '标题文本',
    screenshot:
      'https://img.alicdn.com/imgextra/i4/O1CN01E2PcPW1bKJV5QUVMg_!!6000000003446-55-tps-50-50.svg',
    schema: {
      componentName: 'Typography',
    },
  },
];

export default {
  ...Meta,
  snippets,
};
