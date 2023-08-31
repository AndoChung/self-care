import React from 'react'
import { Link } from 'react-router-dom'

const Prompt1 = () => {
  return (
    <>
        <p>Have you eaten in the past 6 hours?</p>
        <div>
          <Link to={"/prompt2"}>Yes. Next question!</Link>
          <Link to={"/prompt1/response1"}>I could use a snack</Link>
          <Link to={"/prompt1/response2"}>No, I need a meal.</Link>
        </div>
    </>
  )
}

export default Prompt1