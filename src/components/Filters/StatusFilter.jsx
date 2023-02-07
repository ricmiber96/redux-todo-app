import { React, useState } from 'react'
import { useDispatch } from 'react-redux'
import { statusFilterChanged } from '../../reducers/filterReducer'
import store from '../../store/store'

const StatusFilters = {
  All: 'All',
  Active: 'Active',
  Completed: 'Completed'
}

export default function StatusFilter () {
  const dispatch = useDispatch()
  const [active, setActive] = useState('all')

  return (
        <>
            <div className="flex flex-col text-lg">
                <h5>Filter by Status</h5>
                {
                    Object.keys(StatusFilters).map(key => (
                        <button className={`${active === key.toLocaleLowerCase() ? 'bg-purple-700' : 'bg-gray-700'} text-white m-4 p-2 rounded-sm border-2 border-purple-700 shadow-md`} onClick={() => {
                          dispatch(statusFilterChanged(key.toLowerCase()))
                          setActive(key.toLowerCase())
                        }}>{key}</button>
                    ))
                }
            </div>
        </>
  )
}
