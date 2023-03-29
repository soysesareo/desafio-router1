import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home';
import Contacto from './pages/Contacto';
import Error from './pages/Error';
import Barra from './components/Barra';

import { AiOutlineCopyrightCircle } from 'react-icons/ai';

import './App.css'

function App() {


  return (
    <div className="App">
      <Barra />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Contacto" element={<Contacto />} />
        <Route path="*" element={<Error />} />
      </Routes>

      <footer>
        <br /><br />
        Todos los derechos reservados <AiOutlineCopyrightCircle size={20} /> 2023</footer>
    </div>
  )
}

export default App
