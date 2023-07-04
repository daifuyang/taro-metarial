import * as React from 'react';
import { createElement } from 'react';

import { View } from '@tarojs/components';

export interface RichTextProps {
  /**
   * 类型
   */
  html?: string;
  __designMode?: string;
}

const RichText: React.FC<RichTextProps> = function RichText({ html, __designMode }) {
  let Component: any = 'div';

  if (__designMode !== 'design' && View) {
    Component = View;
  } else if (!html) {
    html = ` <p>点此编辑『富文本』内容 &mdash;&mdash;&gt;</p>
<p>你可以对文字进行<strong>加粗</strong>、<em>斜体</em>、<span style="text-decoration: underline;">下划线</span>、<span style="text-decoration: line-through;">删除线</span>、文字<span style="color: rgb(0, 176, 240);">颜色</span>、<span style="background-color: rgb(255, 192, 0); color: rgb(255, 255, 255);">背景色</span>、以及字号<span style="font-size: 20px;">大</span><span style="font-size: 14px;">小</span>等简单排版操作。</p>
<p>还可以在这里加入表格了</p>
<table style="border-collapse: collapse; width: 100%; border: 1px solid #dddddd;" border="1">
<tbody>
<tr>
<td style="word-break: break-all; border-width: 1px; padding: 5px; border-color: rgb(221, 221, 221);" valign="top" width="93">中奖客户</td>
<td style="word-break: break-all; border-width: 1px; padding: 5px; border-color: rgb(221, 221, 221);" valign="top" width="93">发放奖品</td>
<td style="word-break: break-all; border-width: 1px; padding: 5px; border-color: rgb(221, 221, 221);" valign="top" width="93">备注</td>
</tr>
<tr>
<td style="word-break: break-all; border-width: 1px; padding: 5px; border-color: rgb(221, 221, 221);" valign="top" width="93">猪猪</td>
<td style="word-break: break-all; border-width: 1px; padding: 5px; border-color: rgb(221, 221, 221);" valign="top" width="93">内测码</td>
<td style="word-break: break-all; border-width: 1px; padding: 5px; border-color: rgb(221, 221, 221);" valign="top" width="93"><em><span style="color: rgb(255, 0, 0);">已经发放</span></em></td>
</tr>
<tr>
<td style="word-break: break-all; border-width: 1px; padding: 5px; border-color: rgb(221, 221, 221);" valign="top" width="93">大麦</td>
<td style="word-break: break-all; border-width: 1px; padding: 5px; border-color: rgb(221, 221, 221);" valign="top" width="93">积分</td>
<td style="word-break: break-all; border-width: 1px; padding: 5px; border-color: rgb(221, 221, 221);" valign="top" width="93"><a draggable="false" target="_blank">领取地址</a></td>
</tr>
</tbody>
</table>
<p style="text-align: left;"><span style="text-align: left;">也可在这里插入图片、并对图片加上超级链接，方便用户点击。</span></p>`;
  }

  return <Component className="taro-rich-text" dangerouslySetInnerHTML={{ __html: html }} />;
};

RichText.displayName = 'RichText';
export default RichText;
