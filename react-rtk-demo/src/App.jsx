// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import {CakeView} from "./features/cakes/cakesView"
import { IcecreamView } from './features/icecream/icecreamView'
import { UserView } from "./features/user/UserView"

function App() {


  return (
    <>
      <div className='App'>
        <CakeView/>
        <IcecreamView/>
        <UserView/>
       </div>
    </>
  )
}

export default App
