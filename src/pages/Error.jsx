import React from 'react'
import { Link } from 'react-router-dom'
import { FaHeartBroken } from 'react-icons/fa';

const Error = () => {
  return (
    <div>
      <div className="container">
        <br /><br />
        <div className="error">
          <FaHeartBroken size={30} />
          <h5 className="h5">Error 404: Lo sentimos, esta página no existe.</h5>
          <br />
        </div>
        <Link to='/'>Volver a Inicio</Link>
      </div>
    </div>
  )
}

export default Error