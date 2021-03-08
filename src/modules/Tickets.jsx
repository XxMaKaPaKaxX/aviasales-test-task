import React from 'react';
import Ticket from '../components/Ticket';

const Tickets = ({ ticketsPack, amountShowedTickets, filterCheaperOrFaster, transfersCheckboxesStatus }) => {

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

    const prepareFiltermatrix = (obj) => {
        const filterMatrix = [];
        for (const option in obj) {
            if (option === "all" && obj[option] === true) {
                filterMatrix.push("all");
            } else if (option === "without" && obj[option] === true) {
                filterMatrix.push(0);
            } else if (option === "one" && obj[option] === true) {
                filterMatrix.push(1);
            } else if (option === "two" && obj[option] === true) {
                filterMatrix.push(2);
            } else if (option === "three" && obj[option] === true) {
                filterMatrix.push(3);
            }
        }
        return filterMatrix;
    }

    const filterByTransfers = (arr) => {
        const filterMatrix = prepareFiltermatrix(transfersCheckboxesStatus);
        if (filterMatrix.includes('all')) {
            return arr;
        }

        const result = arr.filter(ticket => {
            const amountStopsTo = [...(ticket.segments[0].stops)].length   //wtf bez rest operatora length nie działa
            const amountStopsFrom = [...(ticket.segments[1].stops)].length
            return (filterMatrix.includes(amountStopsTo) && filterMatrix.includes(amountStopsFrom))
        })
        return result;
    }

    const filteredTickets = filterByTransfers(getFilteredByPriceOrTime(ticketsPack));

    const tickets = filteredTickets.slice(0, amountShowedTickets)
        .map((ticket, index) => <Ticket key={index} data={ticket} />)


    return (
        <div className="tickets">
            {tickets}
        </div>
    );
}

export default Tickets;