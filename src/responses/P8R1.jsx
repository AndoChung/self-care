import React from 'react'
import { Link } from 'react-router-dom'

const P8R1 = () => {
  return (
    <>
        <p>It's hard to feel okay in an environment that is unfriendly for whatever reason. If your surroundings aren't clean, set a timer for five minutes and take care of the biggest problems, like leftover food, pet messes, or dirty clothes.</p>
        <p>Chores can be scary and exhausting, but that's not what we're doing here. We're just taking a little five-minute clean up to make ourselves and our homes happier!</p>
        <Link to={"/prompt9"}>Okay, I cleaned up a little!</Link>
    </>
  )
}

export default P8R1