import React from 'react'
import { useState } from 'react'

const UseStateGotcha = () => {
  const [value, setValue] = useState(0)
  const handleclick = () => {
    setTimeout(() => {
      console.log('Clicked the button')
      setValue((currentState) => {
        return currentState + 1
      })
    }, 3000)
  }

  return (
    <>
      <h3>{value}</h3>
      <button type="button" className="btn" onClick={handleclick}>
        {' '}
        CLick Me
      </button>
    </>
  )
}

export default UseStateGotcha
