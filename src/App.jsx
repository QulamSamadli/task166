import React from 'react'
import Routing from './Components/Routing'
import Navbar from './Components/Navbar'
import Responsive from './Components/Responsive'



const App = () => {
  return (
    <div>
      <Navbar />
      <Routing />
      <Responsive/>
    </div>
  )
}

export default App