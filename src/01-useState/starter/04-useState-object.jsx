import { useState } from 'react'

const UseStateObject = () => {
  // const [name, setName] = useState('Shivangi')
  // const [age, setAge] = useState(23)
  // const [hobby, setHobby] = useState('to bite on Paddu')
  const [person, setPerson] = useState({
    name: 'Shivangi',
    age: 23,
    hobby: 'to bite on paddu',
  })
  const showPunith = () => {
    setPerson({
      name: 'Punith',
      age: 23,
      hobby: 'loves to cook',
    })
  }

  return (
    <>
      <div>
        <h2>Name:{person.name}</h2>
        <h3>Age:{person.age}</h3>
        <h3>Enjoys:{person.hobby}</h3>
      </div>
      <button type="button" className="btn" onClick={showPunith}>
        {' '}
        Show Punit
      </button>
    </>
  )
}

export default UseStateObject
