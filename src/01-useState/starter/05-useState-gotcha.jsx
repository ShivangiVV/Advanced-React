import { useState } from 'react'

const UseStateGotcha = () => {
  const [value, setValue] = useState(0)

  const handleClick = () => {
    setValue((currentState) => {
      const newState = currentState + 1
      console.log(newState)
      return newState
    })
  }
  return (
    <>
      <h2>{value}</h2>
      <button onClick={handleClick} type="button" className="btn">
        {' '}
        Click Me
      </button>
    </>
  )
}

export default UseStateGotcha
