
import { React, useState } from 'react'
import { useDispatch } from 'react-redux'
import { todoAdded } from '../../reducers/todoReducer'

export default function InputAddItem () {
  const [text, setText] = useState('')
  const dispatch = useDispatch()

  const handleChange = (e) => setText(e.target.value)

  const handleKeyDown = (e) => {
    const trimmedText = e.target.value.trim()
    if (e.key === 'Enter' && trimmedText) {
      dispatch(todoAdded(trimmedText))
      setText('')
    }
  }

  return (
        <>
            <input className='mt-10 p-6 rounded-md text-lg' type="text" placeholder="Add New Item..." value={text} onChange={handleChange} onKeyDown={handleKeyDown}/>
        </>
  )
}
