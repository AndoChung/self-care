import React from 'react'
import { Link } from 'react-router-dom'

const Prompt8 = () => {
  return (
    <>
        <p>Are your surroundings dirty or smelly?</p>
        <div>
            <Link to={"/prompt8/response1"}>Yes, it's gross.</Link>
            <Link to={"/prompt9"}>No, it's fine.</Link>
        </div>
    </>
  )
}

export default Prompt8