import React from 'react';
import FlightInfo from './FlightInfo';


const Ticket = ({ data }) => {


    const { price, carrier, segments } = data;
    console.log(price, carrier, segments)
    const [destination, homecoming] = segments

    const commonCarrierLogoUrl = 'https://pics.avs.io/99/36';

    return (
        <div className="ticket">
            <div className="ticket-price-and-logo d-flex">
                <p>{price} ₽</p>
                <img src={`${commonCarrierLogoUrl}/${carrier}.png`} alt="" />
            </div>
            <div className="destination-ticket">
                <FlightInfo data={destination} />
            </div>
            <div className="return-ticket">
                <FlightInfo data={homecoming} />
            </div>
        </div>
    );
}

export default Ticket;