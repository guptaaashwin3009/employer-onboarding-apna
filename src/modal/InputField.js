import React from 'react'

function InputField({isOptional,value,setValue,label,placeholder}) {

  const handleonChange = (e) => {
    setValue(e.target.value)
  }

  return (
    <div className='inputfield'>
        <label htmlFor='input'>{label}
          {isOptional && <span className='optional'>{` (optional)`}</span>}
        </label>
        <input value={value} 
              onChange={handleonChange} 
              placeholder={placeholder} 
              type="text" 
              name="" 
              id="input" />
    </div>
  )
}

export default InputField
