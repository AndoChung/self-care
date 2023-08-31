import React from 'react'
import { Link } from 'react-router-dom'

const Beginning = () => {
  return (
    <>
        <p>This is meant to be an interactive flow chart for people who struggle with self care, executive dysfunction, and/or who have trouble reading internal signals. It's designed to take as much of the weight off of you as possible, so each decision is very easy and doesn't require much judgment.</p>
        <p>Set aside some time--maybe an hour total- to allow yourself to work through each step. Don't rush or skip ahead--just follow the directions. Self care is important, and you deserve to devote some time to it.</p>
        <p>You may want to go through this routine as soon as you wake up, as a preventative measure.</p>
        <Link to={"prompt1"}>I'm ready for the first question.</Link>
    </>
  )
}

export default Beginning