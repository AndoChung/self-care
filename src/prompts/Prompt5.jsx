import React from 'react'
import { Link } from 'react-router-dom'

const Prompt5 = () => {
  return (
    <>
      <p>Can you take a guess at how many hours you've slept out of the last 24?</p>
      <p>Everyone is an individual with different sleep schedules, but most people need 8 hours of relatively uninterrupted sleep. If you had less than that, and/or woke up frequently, and/or had nightmares, it might help you to take a nap.</p>
      <div>
        <Link to={"/prompt6"}>I am well-rested. Next question!</Link>
        <Link to={"/prompt5/response1"}>I need a nap.</Link>
      </div>
    </>
  )
}

export default Prompt5