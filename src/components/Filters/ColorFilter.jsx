import { React, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { colorFilterChanged } from '../../reducers/filterReducer'
import { availableColors, capitalize } from '../../utils/colors'

export default function ColorFilter () {
  const colors = useSelector(state => state.filters.colors)
  const dispatch = useDispatch()
  return (
        <>
        <h5>Filter by Color</h5>
        <div className="grid grid-cols-2 items-center">
        {
            availableColors.map((color, i) => {
              const checked = colors.includes(color)
              const handleChange = () => {
                const changeAction = checked ? 'unchecked' : 'checked'
                dispatch(colorFilterChanged(color, changeAction))
              }
              return (
              <label key={i}>
                    <input type="checkbox" name={color} checked={checked} onChange={handleChange}/>
                    <span className='m-2' style={{ color }}>{capitalize(color)}</span>
                </label>)
            })
        }
        </div>
        </>
  )
}
