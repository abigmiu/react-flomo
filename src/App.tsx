import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import AsideLeft from './views/aside/aside'
import Content from './views/content/content'
import A from './views/a/a'
function App() {
  return (
    <Router>
      <div className="App">
        <div className="layout">
          <aside className="aside">
            <AsideLeft></AsideLeft>
          </aside>
          <main className="main">
            <Routes>
              <Route path="/" element={<Content></Content>}></Route>
              <Route path="/a" element={<A></A>}></Route>
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  )
}

export default App
