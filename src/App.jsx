import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ListeJoueurs from './components/ListeJoueurs'

function App() {

  return (
    <>
      {/* <header>
          <nav className="navbar bg-body-tertiary" style="background-color: #ededed40;">
                  <div className="container-fluid">
                  <a className="navbar-brand" href="./etat">
                      <div className="d-flex align-items-center">
                          <img src="./assets/img/stock.svg" alt="Logo" width="50" height="44" className="d-inline-block align-text-top" />
                              &nbsp;NBA
                      </div>
                  </a>
                  
                  </div>
          </nav>
      </header> */}
      <div className='container mt-3'>
        <div className="row">
          <ListeJoueurs />
        </div>
      </div>
    </>
  )
}

export default App
