import React from 'react'

const Button = ({className, btnText}) => {
  return (
    <button className={`py-2 px-4 rounded-xl text-[14px] font-medium ${className}`}>{btnText}</button>
  )
}

export default Button