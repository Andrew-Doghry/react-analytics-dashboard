import { useState } from 'react'

import './App.css'
import Sidebar from './components/Sidebar'
import Dashboard from './components/Dashboard'

function App() {

  return (
    < div className='relative '>
      <Dashboard />
      <Sidebar />
    </div>
  )
}

export default App
