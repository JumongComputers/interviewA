// import { useState } from 'react'

import  Home  from './Home'
import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {


  return (
    <>
      <div>
      
      <Router>
      <Home/>
        <Routes>
          {/* <Route path= '/' element={<Home />} /> */}
        </Routes>
      </Router>
      </div>
      
    </>
  )
}

export default App
