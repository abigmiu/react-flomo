import './style.css'
import { Link } from 'react-router-dom'
export default function AsideTag() {
  const tags = [
    { text: '生活', path: '/a' },
    { text: '影视', path: '/b' },
    { text: '文学', path: '/c' },
    {
      text: '长文本测试长文本测试长文本测试长文本测试长文本测试长文本测试长文本测试',
      path: '/d',
    },
  ]
  return (
    <div className="aside-tags-wrapper mt-20">
      <div className="title mb-5 px-10">全部标签</div>
      <div className="tags">
        {tags.map((item, index) => {
          return (
            <a href={item.path}>
              <div
                className="tag-item truncate h-10 leading-10 text-grey-400 font-weight-bold cursor-pointer rounded  px-10"
                key={index}
              >
                #&nbsp;{item.text}
              </div>
            </a>
          )
        })}
      </div>
    </div>
  )
}
