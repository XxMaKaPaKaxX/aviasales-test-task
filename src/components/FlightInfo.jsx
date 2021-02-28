import React from 'react';

const FlightInfo = ({ data }) => {
    const { date, destination, duration, origin, stops } = data;

    const departureTime = new Date(date);
    const arrivalTime = new Date(Date.parse(date) + (duration * 60000));
    const durationInfo = `${Math.floor(duration / 60)}godz. ${duration % 60}min.`;

    const amoutStops = [...stops].length;
    const witchStops = [...stops].join(', ');
    console.log(witchStops)


    return (
        <div className="d-flex justify-content-between">
            <div className="d-flex flex-column">
                <p>{origin} - {destination}</p>
                <p>
                    {`${departureTime.getHours()}:${departureTime.getMinutes()}`} - {`${arrivalTime.getHours()}:${arrivalTime.getMinutes()}`}
                </p>
            </div>
            <div className="d-flex flex-column">
                <p>Czas lotu</p>
                <p>{durationInfo}</p>
            </div>
            <div className="d-flex flex-column">
                <p>{`${amoutStops} przesiadek`} </p>
                <p>{witchStops}</p>
            </div>
        </div>
    );
}

export default FlightInfo;