import React from 'react'

const Images = ({className, imgSrc, imgAlt}) => {
  return (
<img className={`w-[20px]${className}`} src={imgSrc} alt={imgAlt}  />
)}

export default Images