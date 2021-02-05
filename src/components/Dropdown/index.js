import React from 'react'
import { useOutsideClick } from '../../hooks/useOutsideClick';
import { DropdownButton } from '../DropdownButton'

export const DropDown = ({ items, setDropdownAuth }) => {

    const closeDropdown = () => {
        setDropdownAuth(false);
    }

    const dropdownRef = useOutsideClick(closeDropdown);

    return (
        <div ref={dropdownRef} className="dropdown__content">
            {
                items.map((item, index) => (
                    <DropdownButton 
                        key={index} 
                        icon={item.icon} 
                        text={item.text}
                        onClick={item.onClick} />
                ))
            }
        </div>
    )
}
