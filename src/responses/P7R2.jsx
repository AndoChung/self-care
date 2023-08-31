import React from 'react'
import { Link } from 'react-router-dom'

const P7R2 = () => {
  return (
    <>
        <p>If you're too cold, you can try putting on some warm clothes, using a space heater, turning up the heat in your home, putting on a blanket, and/or snuggling with a pet or another person.</p>
        <Link to={"/prompt8"}>I'm not cold anymore.</Link>
    </>
  )
}

export default P7R2