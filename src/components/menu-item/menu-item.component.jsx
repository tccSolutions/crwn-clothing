import React from 'react';
import'./menu-item.styles.scss'

export const MenuItem =({title, subtitle, imageURL,size })=>(
    <div className={`${size} menu-item`}>
        <div 
        className='background-image' 
        style={{backgroundImage: `url(${imageURL})`}} />                
        <div className='content' >
            <h1 className='title'>{`${title}`}</h1>
            <span className='subtitle'>{`${subtitle}`}</span>           
        </div>
    </div>
)