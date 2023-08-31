import React from 'react'
import { Link } from 'react-router-dom'

const Prompt11 = () => {
  return (
    <>
        <p>Now we've taken care of the physical reasons that you're not feeling well. Now we're going to deal with the emotional ones.</p>
        <p>Obviously, this is a general guide, and can't pinpoint your exact problem. But troubleshooting is a good practice, and we're going to do our best together.</p>
        <p>In my experience, most of the people who would need a flow chart like this have a mental health problem of some type, so these questions are geared towards common mental health problems. You, of course, might have different needs, but starting here can't hurt.</p>
        <p>Do you know why you're in a bad mood, or not feeling well emotionally? (Remember, any answer is okay!)</p>
        <Link to={"prompt12"}>Yes, there's something on my mind.</Link>
        <Link to={"prompt12"}>No, I don't know the reason.</Link>
    </>
  )
}

export default Prompt11