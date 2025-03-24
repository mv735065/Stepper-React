import { useState } from 'react'
import Header from './Components/Header'
import Stepper from './Components/Stepper'
function App() {
 

  return (
    <>
      <Header />
      <Stepper totalSteps={5} />
    </>
  )
}

export default App
