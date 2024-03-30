import React from 'react'
import { Props } from './types'

const RatingBox: React.FC<Props>  = ({ rating, backgroundColor, borderColor, textColor, className}) => {
  return (
    <div
        className={`size-10 flex items-center justify-centerborder-2 p-2 m-5 rounded-md border ${className}`}
        style={{
            backgroundColor: backgroundColor,
            borderColor: borderColor,
            color: textColor,
        }}
    >
        {rating}
    </div>

  )
}

export default RatingBox