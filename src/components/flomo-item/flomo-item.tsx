import { Card, Popover } from 'antd'

import './flomo-item.css'
export default function FlomoItem() {

    const itemAction = (
        <div className="flomo-item-actions">
            <div className="py-4 px-2 cursor-pointer">分享</div>
            <div className="py-4 px-2 cursor-pointer">查看详情</div>
            <div className="py-4 px-2 cursor-pointer">复制连接</div>
            <div className="py-4 px-2 cursor-pointer">批注</div>
            <div className="py-4 px-2 cursor-pointer">编辑</div>
            <div className="py-4 px-2 cursor-pointer">删除</div>
        </div>
    )
  return (
    <Card size="small" className="flomo-item">
        <div className="flex justify-between mb-2">
            <div className="date">2021-04-03 18:25:41</div>
            <Popover content={itemAction}>
                <div className="action">
                    <svg data-v-0b03096f="" width="16px" height="16px" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path data-v-0b03096f="" fill-rule="evenodd" d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"></path></svg>
                </div>
            </Popover>

        </div>
        <p><span className="tag">#摘抄</span></p>
      <p>
        你永远不会属于我，这样我永远不会失去你。你是我孤独生活中的希望，怀疑时刻的挂念，你让我的信仰更加坚定。
      </p>
      <p>
        <p>
          你永远不会属于我，这样我永远不会失去你。你是我孤独生活中的希望，怀疑时刻的挂念，你让我的信仰更加坚定。
        </p>
      </p>
    </Card>
  )
}
