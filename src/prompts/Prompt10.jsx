import React from 'react'
import { Link } from 'react-router-dom'

const Prompt10 = () => {
  return (
    <>
        <p>Does your body feel uncomfortable, sweaty, or dirty?</p>
        <Link to={"prompt10/response1"}>Yes, I feel icky, gross, or unclean.</Link>
        <Link to={"prompt11"}>No, I feel fine.</Link>
    </>
  )
}

export default Prompt10