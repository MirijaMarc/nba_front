import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import basket from '/basket.svg'
import './App.css'
import ListeJoueurs from './components/ListeJoueurs'

function App() {

  return (
    <>
    {/* <header className="header fixed-top d-flex align-items-center">
      <nav class="navbar bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <img src={basket} alt="Logo" width="30" height="24" class="d-inline-block align-text-top" />
            NBA
          </a>
        </div>
      </nav>
    </header> */}
    <header className="header fixed-top d-flex align-items-center bg-body-tertiary">
       <nav className="navbar bg-body-tertiary" style={{ backgroundColor: '#ededed40'}}>
            <div className="container-fluid">
              <a className="navbar-brand" href="#">
                  <div className="d-flex align-items-center">
                      <img src={basket} alt="Logo" width="50" height="44" className="d-inline-block align-text-top" />
                       NBA
                  </div>
              </a>
            </div>
       </nav>
    </header>
      <div className='container mt-3'>
        <div className="row">
          <ListeJoueurs />
        </div>
      </div>
    </>
  )
}

export default App
