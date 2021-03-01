import React from 'react';
import FlightInfo from './FlightInfo';


const Ticket = ({ data }) => {


    const { price, carrier, segments } = data;
    console.log(price, carrier, segments)
    const [destination, homecoming] = segments

    const commonCarrierLogoUrl = 'https://pics.avs.io/99/36';

    return (
        <div className="ticket bg-light p-3 rounded shadow-4 mb-3">
            <div className="ticket-price-and-logo d-flex  justify-content-between mb-2">
                <p className="ticket-price">{price} ₽</p>
                <img className="img-fluid" src={`${commonCarrierLogoUrl}/${carrier}.png`} alt="" />
            </div>
            <div className="destination-ticket ticket-info">
                <FlightInfo data={destination} />
            </div>
            <div className="return-ticket ticket-info">
                <FlightInfo data={homecoming} />
            </div>
        </div>
    );
}

export default Ticket;