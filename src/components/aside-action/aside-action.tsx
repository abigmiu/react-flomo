import {
  GatewayOutlined,
  CommentOutlined,
  BarChartOutlined,
  PartitionOutlined,
} from '@ant-design/icons'
import './style.css'
export default function AsideAction() {
  return (
    <div className="mt-10 actions">
      <div className="flex items-center actions-item h-10 rounded px-10">
        <GatewayOutlined className="actions-item__icon" />
        <span className="text-xl text-gray-400 actions-item__name">MEMO</span>
      </div>
      <div className="flex items-center actions-item h-10 rounded px-10">
        <CommentOutlined className="actions-item__icon" />
        <span className="text-xl text-gray-400 actions-item__name">
          微信输入
        </span>
      </div>
      <div className="flex items-center actions-item h-10 rounded px-10">
        <BarChartOutlined className="actions-item__icon " />
        <span className="text-xl text-gray-400 actions-item__name">
          每日回顾
        </span>
      </div>
      <div className="flex items-center actions-item h-10 rounded px-10">
        <PartitionOutlined className="actions-item__icon" />
        <span className="text-xl text-gray-400 actions-item__name">
          随机漫步
        </span>
      </div>
    </div>
  )
}
