import React from 'react'
import { Link } from 'react-router-dom'

const Q4R1 = () => {
  return (
    <>
        <p>Take a nap. You can finish this self-care guide when you wake up.</p>
        <p>Ideally, let yourself sleep naturally, and sleep until you wake up. Obviously, this isn't always possible. Otherwise, set an alarm for yourself, with plenty of time to wake up and get yourself together between your nap and your responsibilities.</p>
        <Link to={"/question5"}>Okay, I'm well-rested now.</Link>
    </>
  )
}

export default Q4R1