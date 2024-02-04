import React from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './components/Home'
import Inbox from './components/Inbox'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/inbox' element={<Inbox/>}/>
      </Routes>
    </Router> 
  )
}

export default App