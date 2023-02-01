import { React, useState } from 'react'
import { useDispatch } from 'react-redux'
import store from '../../store/store'
const StatusFilters = {
  All: 'All',
  Active: 'Active',
  Completed: 'Completed'
}

export default function StatusFilter () {
  const dispatch = useDispatch()
  const handleClick = (filter) => {
    console.log('click')
    dispatch({ type: 'filters/statusFilterChanged', payload: filter })
    console.log('Initial state: ', store.getState())
  }

  return (
        <>
            <div className="flex flex-col">
                <h5>Filter by Status</h5>
                {
                    Object.keys(StatusFilters).map(key => (
                        <button className="bg-gray-600 text-white m-4 p-2 rounded-sm" onClick={() => handleClick(key)}>{key}</button>
                    ))
                }
            </div>
        </>
  )
}
