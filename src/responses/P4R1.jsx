import React from 'react'
import { Link } from 'react-router-dom'

const P4R1 = () => {
  return (
    <>
        <p>If there is something your doctor has prescribed you for pain, you should take it or do it.</p>
        <p>For aches and pains, take an aspirin. You may also want to apply a heating pad or a cold pack on whatever hurts.</p>
        <p>If you have a stomach ache, there are medications for that, like Pepto Bismol, and hot tea may also help.</p>
        <p>Be nice to your body, and try to do "replace" the unpleasant pain with some pleasant alternative sensations, like good smells and pleasurable textures.</p>
        <Link to={"/prompt5"}>I am all taken care of.</Link>
    </>
    
  )
}

export default P4R1