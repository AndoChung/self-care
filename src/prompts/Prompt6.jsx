import React from 'react'
import { Link } from 'react-router-dom'

const Prompt6 = () => {
  return (
    <>
        <p>Next we're going to deal with other types of physical discomfort you may be in.</p>
        <p>Is something about your environment distressing or uncomfortable?</p>
        <Link to={"/prompt7"}>Let's continue!</Link>
    </>
  )
}

export default Prompt6