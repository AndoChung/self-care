import React from 'react'
import { Link } from 'react-router-dom'

const Prompt2 = () => {
  return (
    <>
        <p>Have you taken any medication you need to take?</p>
        <div>
          <Link to={"/prompt3"}>Yes, I'm all caught up on any medication I need to take.</Link>
          <Link to={"/prompt2/response1"}>No, I need to take my pill.</Link>
        </div>
        
    </>
  )
}

export default Prompt2