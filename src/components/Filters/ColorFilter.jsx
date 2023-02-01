import { React, useState } from 'react'
import { availableColors, capitalize } from '../../utils/colors'

export default function ColorFilter () {
  return (
        <>
        <h5>Filter by Color</h5>
        {
            availableColors.map((color, i) => (
                <label key={i}>
                    <input type="checkbox" />
                    <span className='m-2'>{capitalize(color)}</span>
                </label>
            ))
        }

        </>
  )
}
