import React from 'react'
import "./custom-button.styles.scss"

export const CustomButton=({children, ...otherprops})=>(
    <div>
        <button className='custom-button' {...otherprops}>
            {children}
        </button>
    </div>
)