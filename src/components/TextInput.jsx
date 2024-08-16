import { useState } from 'react'

const TextInput = ({inputId, labelContent, inputPlaceholder, initialInputValue = "", inputValue, onChangeHandler}) => {
  return (
    <>
      <label htmlFor={inputId} className="w-full font-medium">{labelContent}</label>
      <input type="text" placeholder={inputPlaceholder} value={inputValue} onChange={onChangeHandler} className="p-1 my-1 border border-gray-400 border-solid rounded-md" />
    </>
  )
}

export default TextInput