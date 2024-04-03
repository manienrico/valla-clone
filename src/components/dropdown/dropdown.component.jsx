import React from 'react'
import "./dropdown.style.css"
import Button from '../button/button.component'

export default function Drop({name,verified,dropItem}) {
  return (
    <div className='drop-contain'>
        <div className='detail-contain'></div>
        <div className='drop-items'>
            <p></p>
            <p></p>
            <p></p>
        </div>
        <hr className='drop-hr'/>
        <div>
            <Button />
        </div>
    </div>
  )
}
