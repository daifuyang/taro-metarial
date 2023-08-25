import { ComponentMetadata, Snippet } from '@alilc/lowcode-types';

const Meta: ComponentMetadata = {
  componentName: 'Image',
  title: '图片',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  configure: {
    props: [
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'type',
            'zh-CN': '图片类型',
          },
        },
        name: 'type',
        description: '图片类型',
        setter: {
          componentName: 'RadioGroupSetter',
          initialValue: 'vertical', // 设置默认值
          props: {
            options: [
              {
                title: '一行一个',
                value: 'vertical',
              },
              {
                title: '轮播海报',
                value: 'swiper',
              },
              {
                title: '横向滑动',
                value: 'horizontal',
              },
            ],
          },
        },
      },
      {
        name: 'list',
        display: 'block',
        title: { label: '添加图片', tip: '建议图片尺寸宽度750，高度不限制。' },
        setter: {
          componentName: 'ImageArraySetter',
          props: {
            config: {
              type: 'image'
            }
          },
        },
      },
      {
        type: 'group',
        title: '样式设置',
        display: 'accordion',
        items: [
          {
            title: {
              label: {
                type: 'i18n',
                'en-US': 'type',
                'zh-CN': '图片样式',
              },
            },
            name: 'boxShadow',
            description: '图片样式',
            setter: {
              componentName: 'RadioGroupSetter',
              initialValue: '', // 设置默认值
              props: {
                options: [
                  {
                    title: '常规',
                    value: '',
                  },
                  {
                    title: '投影',
                    value: '0 4px 10px rgba(47,54,70,.1)',
                  },
                ],
              },
            },
          },
          {
            title: {
              label: {
                type: 'i18n',
                'en-US': 'type',
                'zh-CN': '边角样式',
              },
            },
            name: 'borderRadius',
            description: '边角样式',
            setter: {
              componentName: 'RadioGroupSetter',
              initialValue: '', // 设置默认值
              props: {
                options: [
                  {
                    title: '方角',
                    value: '',
                  },
                  {
                    title: '圆角',
                    value: '8px',
                  },
                ],
              },
            },
          },
          {
            title: {
              label: {
                type: 'i18n',
                'en-US': 'type',
                'zh-CN': '页面边距',
              },
            },
            name: 'pagePadding',
            description: '页面边距',
            setter: {
              componentName: 'NumberSetter',
              initialValue: 0, // 设置默认值
              props: {
                min: 0,
                max: 30,
              },
            },
          },
          {
            title: {
              label: {
                type: 'i18n',
                'en-US': 'type',
                'zh-CN': '图片边距',
              },
            },
            name: 'imagePadding',
            description: '图片边距',
            setter: {
              componentName: 'NumberSetter',
              initialValue: 0, // 设置默认值
              props: {
                min: 0,
                max: 30,
              },
            },
          },
          {
            title: {
              label: {
                type: 'i18n',
                'en-US': 'type',
                'zh-CN': '重叠高度',
              },
            },
            name: 'imageMargin',
            description: '重叠高度',
            setter: {
              componentName: 'NumberSetter',
              initialValue: 0, // 设置默认值
              props: {
                min: 0,
                max: 100,
              },
            },
          },
        ],
      },
    ],
    supports: {},
    component: {},
  },
};
const snippets: Snippet[] = [
  {
    title: '图片',
    screenshot:
      'https://img.alicdn.com/imgextra/i3/O1CN01tnhXhk1GUIFhsXwzA_!!6000000000625-55-tps-56-56.svg',
    schema: {
      componentName: 'Image',
    },
  },
];

export default {
  ...Meta,
  snippets,
};
