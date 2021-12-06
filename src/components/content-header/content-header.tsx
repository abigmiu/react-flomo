import './style.css'
export default function ContentHeader() {
    const title = 'MEMO'
    return (
        <div className="content-header flex justify-between items-center mb-10">
            <div className="title">{ title }</div>
            <div className="search">
                <input className="search-input"/>
            </div>
        </div>
    )
}