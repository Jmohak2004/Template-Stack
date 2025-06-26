import React from 'react'
import {Routes, Route} from 'react-router-dom'
import { Button } from "@/components/ui/button"


const App = () => {
  return (
    <div>
      <div className="flex min-h-svh flex-col items-center justify-center">
      <Button>Click me</Button>
    </div>
      <Routes>
        <Route to='/form'><Form/></Route>
        <Route to='/dashboard'><Dashboard/></Route>

      </Routes>
    </div>
  )
}

export default App
