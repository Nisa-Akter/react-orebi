import React from 'react'

const Flex = ({className,children}) => {
    return (
        // <div className={`flex items-center ${className}`}>{children}</div>
        <div className={`flex items-center justify-between ${className}`}>{children}</div>
 ) 
}

export default Flex