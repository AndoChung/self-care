import React from 'react'
import { Link } from 'react-router-dom'

const Q1R2 = () => {
  return (
    <>
        <p>You haven't eaten in a little while, and your body needs fuel. It's time for breakfast, lunch, or dinner.</p>
        <p>If there's a specific food you want, it's okay to eat it! You don't have to eat perfectly healthy all the time-- no one does! Just also use your brain a little, and notice the quantity you're eating, and how healthy it is for you. You're probably just fine at trusting your gut and knowing what your body needs.</p>
        <Link to={"/question2"}>I finished my meal, and I'm ready for the next step!</Link>
    </>
  )
}

export default Q1R2