import React from 'react';
import Ticket from '../components/Ticket';

const Tickets = ({ ticketsPack, amountShowedTickets }) => {

    const tickets = ticketsPack.slice(0, amountShowedTickets)
        .map((ticket, index) => <Ticket key={index} data={ticket} />)


    return (
        <div>
            {tickets}
        </div>
    );
}

export default Tickets;