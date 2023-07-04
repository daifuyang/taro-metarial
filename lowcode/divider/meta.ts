import { ComponentMetadata, Snippet } from '@alilc/lowcode-types';

const Meta: ComponentMetadata = {
  componentName: 'Divider',
  title: '辅助分割',
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
            'zh-CN': '分割类型',
          },
        },
        name: 'type',
        description: '分割类型',
        setter: {
          componentName: 'RadioGroupSetter',
          initialValue: 'block', // 设置默认值
          props: {
            options: [
              {
                title: '辅助空白',
                value: 'block',
              },
              {
                title: '辅助线',
                value: 'border',
              },
            ],
          },
        },
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'height',
            'zh-CN': '空白高度',
          },
        },
        name: 'height',
        description: '空白高度',
        condition: (target) => {
          return target.getProps().getPropValue('type') === 'block';
        },
        setter: {
          componentName: 'NumberSetter',
          initialValue: 8, // 设置默认值
          props: {
            min: 8,
            max: 100,
          },
        },
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'height',
            'zh-CN': '选择样式',
          },
        },
        name: 'borderStyle',
        description: '选择样式',
        condition: (target) => {
          return target.getProps().getPropValue('type') === 'border';
        },
        setter: {
          componentName: 'RadioGroupSetter',
          initialValue: 'solid', // 设置默认值
          props: {
            options: [
              {
                title: '实线',
                value: 'solid',
              },
              {
                title: '虚线',
                value: 'dashed',
              },
              {
                title: '点线',
                value: 'dotted',
              },
            ],
          },
        },
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'height',
            'zh-CN': '左右边距',
          },
        },
        name: 'padding',
        description: '左右边距',
        condition: (target) => {
          return target.getProps().getPropValue('type') === 'border';
        },
        setter: {
          componentName: 'RadioGroupSetter',
          initialValue: 0, // 设置默认值
          props: {
            options: [
              {
                title: '无边距',
                value: 0,
              },
              {
                title: '左右留边',
                value: 1,
              },
            ],
          },
        },
      },
      {
        name: 'borderColor',
        title: { label: '辅助线颜色', tip: '标题颜色' },
        setter: {
          componentName: 'ColorSetter',
          initialValue: '#e5e5e5',
        },
      },
    ],
    supports: {},
    component: {},
  },
};
const snippets: Snippet[] = [
  {
    title: '辅助分割',
    screenshot:
      'https://alifd.oss-cn-hangzhou.aliyuncs.com/fusion-cool/icons/icon-light/ic_light_divider.png',
    schema: {
      componentName: 'Divider',
    },
  },
];

export default {
  ...Meta,
  snippets,
};
