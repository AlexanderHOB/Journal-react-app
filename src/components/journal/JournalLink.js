import React from 'react'
import { NavLink } from 'react-router-dom'

export const JournalLink = ({name,icon,color='#fff'}) => {
    return (
        <NavLink to='/' 
            className='journal__nav-link'
            activeClassName='active'
        >
            <box-icon name={icon} type='solid' color={color} ></box-icon>
            <span>{name}</span>
        </NavLink>
    )
}
