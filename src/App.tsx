import React from 'react'

import './App.css'
import AsideLeft from './views/aside/aside'
import Editor from './components/editor/editor'
import FlomoItem from './components/flomo-item/flomo-item'
function App() {
  return (
    <div className="App">
      <div className="layout">
        <aside className="aside">
          <AsideLeft></AsideLeft>
        </aside>
        <main className="main">
          <Editor></Editor>
          <FlomoItem></FlomoItem>
        </main>
      </div>
    </div>
  )
}

export default App
