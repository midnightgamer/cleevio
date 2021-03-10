import React from 'react';
import austria from '../../../assets/flags/austria.svg'
import {arrow} from '../../../assets/svgs'
import './SideTripCard.scss'
function SideTripCard(props) {
    return (
        <div className={'sideTrip'}>
            <div className="country">
                <div className="img">
                    <img src={austria} alt="austria"/>
                </div>
                <h4>
                    Austria
                </h4>
            </div>
            <div className="company">
                <span>Company</span>
                <h5>Daimler AG </h5>
                <p>
                    Mercedes-Benz Plant Berlin' Daimlerstraße 143, 12277 Berlin
                </p>
            </div>
            <div className="date">
                <span>Date</span>
                <span className="date">
                    Jul 14 - Sep 20, 2019
                </span>
            </div>
            <div className="btn">
                View trip
                {arrow}
            </div>
        </div>
    );
}

export default SideTripCard;
