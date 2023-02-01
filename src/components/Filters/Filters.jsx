import { React, useState } from 'react'
import TodoListItem from '../TodoListItem/TodoListItem'
import ColorFilter from './ColorFilter'
import StatusFilter from './StatusFilter'

export default function Filters () {
  return (
        <>
           <div className="flex flex-col items-center">
            <h1 className="text-4xl font-bold text-white">Filters:</h1>
                <StatusFilter/>
                <ColorFilter/>
           </div>
        </>
  )
}
