import React from 'react'

const Input = ({colorValue, setColorValue}) => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
        <input
            autoFocus
            type="text"
            placeholder='Add Color Name'
            required
            value={colorValue}
            onChange={(e) => setColorValue(e.target.value)}
        />
    </form>
  )
}

export default Input