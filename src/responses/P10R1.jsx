import React from 'react'
import { Link } from 'react-router-dom'

const P10R1 = () => {
  return (
    <>
        <p>Do you have the energy and ability to take a shower?</p>
        <Link to={"/prompt11"}>Yes, I'll take a shower.</Link>
    </>
  )
}

export default P10R1