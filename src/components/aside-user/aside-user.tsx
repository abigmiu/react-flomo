import './style.css'
export default function AsideUser() {
  const userName = 'Abigmiu'
  const historyItems = new Array(14 * 7).fill(1)
  return (
    <div className="px-10">
      <div className="info flex justify-between items-center">
        <div className="nickname text-2xl">{userName}</div>
        <div className="menu flex">
          <div className="menu-item mr-2 cursor-poniter">
            <svg
              data-v-0c4546c0=""
              width="18"
              height="18"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                data-v-0c4546c0=""
                width="48"
                height="48"
                fill="white"
                fillOpacity="0.01"
              ></rect>
              <path
                data-v-0c4546c0=""
                d="M24 4C16.268 4 10 10.268 10 18V38H38V18C38 10.268 31.732 4 24 4Z"
                fill="none"
              ></path>
              <path
                data-v-0c4546c0=""
                d="M10 38V18C10 10.268 16.268 4 24 4C31.732 4 38 10.268 38 18V38M4 38H44"
                stroke="#808080"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                data-v-0c4546c0=""
                d="M24 44C26.7614 44 29 41.7614 29 39V38H19V39C19 41.7614 21.2386 44 24 44Z"
                fill="none"
                stroke="#808080"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </div>
          <div className="menu-item cursor-pointer">
            <svg
              data-v-0c4546c0=""
              width="20"
              height="20"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                data-v-0c4546c0=""
                width="48"
                height="48"
                fill="white"
                fillOpacity="0.01"
              ></rect>
              <path
                data-v-0c4546c0=""
                d="M34.0003 41L44 24L34.0003 7H14.0002L4 24L14.0002 41H34.0003Z"
                fill="none"
                stroke="#808080"
                strokeWidth="3"
                strokeLinejoin="round"
              ></path>
              <path
                data-v-0c4546c0=""
                d="M24 29C26.7614 29 29 26.7614 29 24C29 21.2386 26.7614 19 24 19C21.2386 19 19 21.2386 19 24C19 26.7614 21.2386 29 24 29Z"
                fill="none"
                stroke="#808080"
                strokeWidth="3"
                strokeLinejoin="round"
              ></path>
            </svg>
          </div>
        </div>
      </div>
      <div className="history mt-5 flex justify-between items-center">
        <div className="hostiry-item">
          <div className="text-3xl text-gray-400 font-weight-bold">66</div>
          <div className="text-sm text-gray-400 font-weight-medium">Memo</div>
        </div>
        <div className="hostiry-item">
          <div className="text-3xl text-gray-400 font-weight-bold">4</div>
          <div className="text-sm text-gray-400 font-weight-medium">TAG</div>
        </div>
        <div className="hostiry-item">
          <div className="text-3xl text-gray-400 font-weight-bold">331</div>
          <div className="text-sm text-gray-400 font-weight-medium">Day</div>
        </div>
      </div>
      <div className="history-table mt-5">
        {historyItems.map((_, index) => {
          return <div className="history-table-item" key={index}></div>
        })}
      </div>
    </div>
  )
}
