
import { ComponentMetadata, Snippet } from '@alilc/lowcode-types';

const ConfigProviderMeta: ComponentMetadata = {
  "componentName": "ConfigProvider",
  "title": "ConfigProvider",
  "docUrl": "",
  "screenshot": "",
  "devMode": "proCode",
  "npm": {
    "package": "taro-metarial",
    "version": "0.1.0",
    "exportName": "ConfigProvider",
    "main": "src/index.tsx",
    "destructuring": true,
    "subName": ""
  },
  "configure": {
    "props": [
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "config",
            "zh-CN": "config"
          }
        },
        "name": "config",
        "setter": {
          "componentName": "MixedSetter",
          "isRequired": false,
          "props": {}
        }
      }
    ],
    "supports": {
      "style": true
    },
    "component": {}
  }
};
const snippets: Snippet[] = [
  {
    "title": "ConfigProvider",
    "screenshot": "",
    "schema": {
      "componentName": "ConfigProvider",
      "props": {}
    }
  }
];

export default {
  ...ConfigProviderMeta,
  // snippets
};
