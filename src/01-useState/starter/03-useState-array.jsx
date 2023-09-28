import { data } from '../../data'
import React, { useState } from 'react'

const UseStateArray = () => {
  const [people, setPeople] = React.useState(data)
  // const handleClick = () => {
  //   setPeople([])
  // }
  const handleRemoveItem = (id) => {
    console.log(id)
    const newPeople = people.filter((person) => person.id !== id)
    setPeople(newPeople)
  }
  return (
    <div>
      {people.map((person) => {
        const { id, name } = person
        return (
          <div key={id}>
            <h4>{name}</h4>
            <button type="button" onClick={() => handleRemoveItem(id)}>
              {' '}
              Remove
            </button>
          </div>
        )
      })}
      <button
        type="button"
        className="btn"
        style={{ marginTop: '2rem' }}
        onClick={() => {
          setPeople([])
        }}
      >
        Clear All
      </button>
    </div>
  )
}

export default UseStateArray
