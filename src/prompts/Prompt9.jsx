import React from 'react'
import { Link } from 'react-router-dom'

const Prompt9 = () => {
  return (
    <>
        <p>Do you feel unsafe because of the people, or lack of people, in your surroundings?</p>
        <div>
            <Link to={"/prompt9/response1"}>Yes, there are too many people here, or people I don't feel comfortable with.</Link>
            <Link to={"/prompt9/response2"}>I am alone and I don't like it.</Link>
            <Link to={"/prompt10"}>No, I'm good.</Link>
        </div>
        
    </>
  )
}

export default Prompt9