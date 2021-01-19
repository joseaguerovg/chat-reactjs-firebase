import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const DropdownButton = ({text, icon, onClick}) => {

    return (
        <button 
            type="button" 
            className="dropdown__item"
            onClick = {
                (onClick) ? onClick : undefined} >
            <FontAwesomeIcon icon={icon} />
            <span>{text}</span>
        </button>
    )
}
