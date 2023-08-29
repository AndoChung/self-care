import React from 'react'
import { Link } from 'react-router-dom'

const Q2R1 = () => {
  return (
    <>
     <p>Medication needs to be taken on schedule, or your body might react negatively.</p>
     <p>Take some time now to take any pills, do any tests or injections, or apply any ointments prescribed by your doctor.</p>
     <p>If this is a persistent problem for you, you may want to set a smart phone alarm so you remember to take it at the same time every day.</p>
     <Link to={"/question3"}>Okay, I took my medication. Next Question!</Link>
    </>
  )
}

export default Q2R1