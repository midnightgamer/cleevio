import React from 'react';
import {logo, plusSign, clockIcon, editIcon, globeIcon} from "../../assets/svgs";
import styles from './Sidemenu.module.scss'
import {Link} from "react-router-dom";

function SideMenu() {
    return (
        <div className={styles.sideMenu}>
            <div className={styles.wrapper}>
                <div className={styles.brand}>
                    <Link to={'/'}>
                        {logo}
                    </Link>
                </div>
                <nav>
                    <ul>
                        <li className={styles.newTrip}>
                            <Link to={'/new-trip'}>
                                New Trip {plusSign}
                            </Link>
                        </li>
                        <li>
                            <Link to={'/overview'} className={styles.active} >
                                {clockIcon} Your trips
                            </Link>
                        </li>
                        <li>
                            <Link to={'/overview'}>
                                {editIcon} Future feature
                            </Link>
                        </li>
                        <li>
                            <Link to={'/overview'}>
                                {globeIcon} Future section
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default SideMenu;
