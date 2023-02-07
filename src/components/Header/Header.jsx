import { React } from 'react'
import InputAddItem from '../InputAddItem/InputAddItem'

export default function Header () {
  return (
        <>
            <div className="flex flex-col w-100 text-6xl text-white text-center py-6 rounded-lg">
                <h1>To Do</h1>
                <InputAddItem/>
            </div>
        </>
  )
}
