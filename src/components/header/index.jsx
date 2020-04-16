import React from 'react';
import './style.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faBars,faUser } from '@fortawesome/free-solid-svg-icons'

const Header = function () {
    return <header>
        <FontAwesomeIcon icon={faBars} size="2x" className="nav-icon" />
        Blot - Notes
        <FontAwesomeIcon icon={faUser} size="2x" className="profile-icon" />
    </header>
}

export default Header;