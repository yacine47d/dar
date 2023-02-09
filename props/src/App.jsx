import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Profile from './components/profile'
import Profileimage from './components/profile.jpg'
function App() {
  const users=[
    {
    name:"Yacine",
    Bio:"etudiant gomycode web",
    profession:"nothing",

    }
  ]
  const affiche=(name)=>(
   alert (name)
  )
  return (
    <div className="App">
      <Profile data={users[0]} affiche={affiche} >
        <img src={Profileimage}  />
      </Profile>
       
    </div>
  )
}

export default App
