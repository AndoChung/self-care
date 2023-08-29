import React from 'react'
import { Link } from 'react-router-dom'

const Prompt2 = () => {
  return (
    <>
        <p></p>
        <Link to={"/question3"}>Yes, I'm all caught up on any medication I need to take.</Link>
        <Link to={"/question2/response1"}>No, I need to take my pill.</Link>
    </>
  )
}

export default Question2