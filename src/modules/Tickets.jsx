import React from 'react';
import Ticket from '../components/Ticket';

const Tickets = ({ ticketsPack, amountShowedTickets, filterCheaperOrFaster }) => {



    const filterByLowestPrice = (arr) => {
        const sortedPack = arr.sort((a, b) => a.price - b.price);
        return sortedPack;
    }
    const filterByAmountDuration = (arr) => {
        const sortedPack = arr.sort((a, b) => (a.segments[0].duration + a.segments[1].duration) - (b.segments[0].duration + b.segments[1].duration));
        return sortedPack;
    }

    const getFilteredByPriceOrTime = (arr) => {
        switch (filterCheaperOrFaster) {
            case 'cheapest':
                return filterByLowestPrice(arr)
            case 'fastest':
                return filterByAmountDuration(arr)
            default:
                console.log('some wrong action')
                break;
        }
    }

    /* console.log(getFilteredByPriceOrTime(ticketsPack)) */

    const filteredTickets = getFilteredByPriceOrTime(ticketsPack)

    const tickets = filteredTickets.slice(0, amountShowedTickets)
        .map((ticket, index) => <Ticket key={index} data={ticket} />)




    return (
        <div className="tickets">
            {tickets}
        </div>
    );
}

export default Tickets;