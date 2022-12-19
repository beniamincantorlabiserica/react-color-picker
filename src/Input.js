import React from 'react'
import colorNames from 'colornames' 

const Input = ({colorValue, setColorValue, hexValue, setHexValue}) => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
        <input
            autoFocus
            type="text"
            placeholder='Add Color Name'
            required
            value={colorValue}
            onChange={(e) => {
                setColorValue(e.target.value);
                setHexValue(colorNames(e.target.value));
            }}
        />
    </form>
  )
}

export default Input