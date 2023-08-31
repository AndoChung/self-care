import React from 'react'
import { Link } from 'react-router-dom'

const Prompt3 = () => {
  return (
    <>
        <p>Drink a glass of whatever liquid you like best. Water is ideal, but don't beat yourself up if you'd rather have tea, soda, juice, or milk. Soda will actually make you feel thirstier, but if it's easier for you, then that's okay!</p>
        <Link to={"/prompt4"}>Okay, I did it.</Link>
    </>
  )
}

export default Prompt3