import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ListeJoueurs from './components/ListeJoueurs'

function App() {

  return (
    <>
      <div className='container mt-3'>
        <div className="row">
          <ListeJoueurs />
        </div>
      </div>
    </>
  )
}

export default App
