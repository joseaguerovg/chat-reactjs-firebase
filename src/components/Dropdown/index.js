import React from 'react'
import { useDispatch } from 'react-redux';
import { useOutsideClick } from '../../hooks/useOutsideClick';
import { closeDropdownAuth } from '../../redux/actions/ui.actions';
import { DropdownButton } from '../DropdownButton'

export const DropDown = ({ items }) => {

    const dispatch = useDispatch();
    const closeDropdown = () => {
        dispatch(closeDropdownAuth());
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
