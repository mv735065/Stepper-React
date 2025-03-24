import React from 'react'

const Button = ({title,handleClick}) => {
  return (
    <button className='py-2 px-8 border bg-white rounded-2xl mt-8 cursor-pointer' onClick={handleClick} >{title}</button>
  )
}

export default Button