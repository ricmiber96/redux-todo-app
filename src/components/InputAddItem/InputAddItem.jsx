
import { React, useState } from 'react'
import { BsPlusSquareFill } from 'react-icons/bs'
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
            <form class="p-4 mt-6">
              <div class="flex">
                  <div class="relative w-full">
                      <input type="search" id="search-dropdown"
                      class="block p-4 w-full z-20 text-lg shadow-lg rounded-lg text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-50 border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                      placeholder="Add new item..."
                      value={text} onChange={handleChange} onKeyDown={handleKeyDown}/>
                      <button type="submit" class="absolute top-0 right-0 p-2.5 text-sm font-medium text-white bg-purple-700 rounded-r-lg border border-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none">
                          <svg fill="#fff" viewBox="0 0 1920 1920" class="w-8 h-10" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M915.744 213v702.744H213v87.842h702.744v702.744h87.842v-702.744h702.744v-87.842h-702.744V213z" fill-rule="evenodd"></path> </g></svg>
                      </button>
                  </div>
              </div>
          </form>
        </>
  )
}
