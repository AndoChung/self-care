import React from 'react'
import { Link } from 'react-router-dom'

const Prompt7 = () => {
  return (
    <>
        <p>Are your surroundings the right temperature?</p>
        <div>
            <Link to={"/prompt7/response1"}>I'm too cold.</Link>
            <Link to={"/prompt7/response2"}>I'm too hot.</Link>
            <Link to={"/prompt8"}>I'm just right.</Link>
        </div>
        
    </>
  )
}

export default Prompt7