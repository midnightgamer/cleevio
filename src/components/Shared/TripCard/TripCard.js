import React from 'react';
import uk from '../../../assets/flags/united-kingdom.svg'
import {editIcon, deleteIcon} from '../../../assets/svgs'
import './TripCard.scss'

function TripCard(props) {
    return (
        <div className='tripCard'>
            <div className="country-img">
                <img src={uk} alt="UK"/>
            </div>
            <div className="info">
                <div className="country">
                    <h4>United Kingdom</h4>
                    <p>Jul 14 - Sep 20</p>
                </div>
                <div className="city">
                    <h5>Daimler AG</h5>
                    <p>Mercedes-Benz Plant Berlin' Daimlerstraße 143, 122...</p>
                </div>
            </div>
            <div className="btn_group">
                <div className="btn btn-delete">
                    {deleteIcon}
                </div>
                <div className="btn btn-go">
                    {editIcon}
                </div>
            </div>

        </div>
    );
}

export default TripCard;
