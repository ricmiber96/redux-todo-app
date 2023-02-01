import { React, useState } from 'react'
import InputAddItem from '../InputAddItem/InputAddItem'

export default function Header () {
  return (
        <>
            <div className="flex flex-col text-6xl text-white text-center bg-purple-600 p-10 rounded-lg">
                <h1>To Do</h1>
                <InputAddItem/>
            </div>
        </>
  )
}
