import React from 'react'

export default function MainButton({children ,onClick}) {
  
  return (
    <button className='button' onClick={onClick} >{children}</button>
  )
}
