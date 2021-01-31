import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faSignOutAlt, faCog } from '@fortawesome/free-solid-svg-icons'
import { DropDown } from '../Dropdown'
import { startLogout } from '../../redux/actions/auth.actions'

export const AuthUserData = () => {

    const dispatch = useDispatch();

    const { auth } = useSelector(state => state)
    const [dropdownAuth, setDropdownAuth] = useState(false);
    const firstLetter = (auth.name) ? auth.name.charAt(0) : '';

    const handleClickDropdown = () => {
        setDropdownAuth(!dropdownAuth);
    }

    const handleLogout = () => {
        dispatch(startLogout());
    }

    const itemsDropdown = [{
        text: 'Settings',
        icon: faCog,
        onClick: false
    }, {
        text: 'Logout',
        icon: faSignOutAlt,
        onClick: handleLogout
    }];

    

    return (
        <div className="sidebar__content-user-data">
            {
                (auth.avatar === '')
                    ? <div className="sidebar__auth-avatar sidebar__not-avatar"><span>{firstLetter}</span></div>
                    : null
            }

            <div className="sidebar__auth-name">{auth.name}</div>

            <div className="sidebar__logout-icon">
                <FontAwesomeIcon icon={faChevronDown} onClick={handleClickDropdown} />

                {
                    (dropdownAuth) 
                        && <DropDown items={itemsDropdown} setDropdownAuth={setDropdownAuth} />
                }
                
            </div>
        </div>
    )
}
