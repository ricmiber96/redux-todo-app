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
  return (
        <>
            <div className="flex flex-col">
                <h5>Filter by Status</h5>
                {
                    Object.keys(StatusFilters).map(key => (
                        <button className="bg-gray-600 text-white m-4 p-2 rounded-sm" onClick={() => dispatch(statusFilterChanged(key.toLowerCase()))}>{key}</button>
                    ))
                }
            </div>
        </>
  )
}
