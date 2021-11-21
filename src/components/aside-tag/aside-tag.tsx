import './style.css'
export default function AsideTag() {
  const tags = [
    '生活',
    '影视',
    '文学',
    '长文本测试长文本测试长文本测试长文本测试长文本测试长文本测试长文本测试',
  ]
  return (
    <div className="aside-tags-wrapper mt-20">
      <div className="title mb-5 px-10">全部标签</div>
      <div className="tags">
        {tags.map((item, index) => {
          return (
            <div
              className="tag-item truncate h-10 leading-10 text-grey-400 font-weight-bold cursor-pointer rounded  px-10"
              key={index}>
              #&nbsp;{item}
            </div>
          )
        })}
      </div>
    </div>
  )
}
