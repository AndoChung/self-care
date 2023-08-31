import React from 'react'
import { Link } from 'react-router-dom'

const Prompt4 = () => {
  return (
    <>
      <p>Are you in pain?</p>
      <div>
        <Link to={"/prompt5"}>No, my body feels fine.</Link>
        <Link to={"/prompt4/response1"}>Yes, something hurts.</Link>
      </div>
    </>
  )
}

export default Prompt4