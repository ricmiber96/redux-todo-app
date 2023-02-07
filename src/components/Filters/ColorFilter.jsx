import { React, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { colorFilterChanged } from '../../reducers/filterReducer'
import { availableColors, capitalize } from '../../utils/colors'

export default function ColorFilter () {
  const colors = useSelector(state => state.filters.colors)
  const dispatch = useDispatch()
  return (
        <>
        <h5 className='text-lg'>Filter by Color</h5>
        <div className="grid grid-cols-2 items-center">
        {
            availableColors.map((color, i) => {
              const checked = colors.includes(color)
              const handleChange = () => {
                const changeAction = checked ? 'unchecked' : 'checked'
                dispatch(colorFilterChanged(color, changeAction))
              }
              return (
              <label className='flex flex-row items-center p-2' key={i}>
                    <input type="checkbox" name={color} checked={checked} onChange={handleChange}/>
                    <span className="w-4 h-4 mx-2" style={{
                      backgroundColor: color
                    }}></span>
                    <span>{capitalize(color)}</span>
                </label>)
            })
        }
        </div>
        </>
  )
}
