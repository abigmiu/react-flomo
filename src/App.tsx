import React from 'react'

import './App.css'
import AsideLeft from './views/aside/aside'
import Content from './views/content/content'
function App() {
  return (
    <div className="App">
      <div className="layout">
        <aside className="aside">
          <AsideLeft></AsideLeft>
        </aside>
        <main className="main">
          <Content></Content>
        </main>
      </div>
    </div>
  )
}

export default App
