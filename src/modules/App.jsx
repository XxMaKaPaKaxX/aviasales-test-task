import React, { useEffect, useState } from 'react';
import Tickets from './Tickets';

import '../style/App.scss';

const App = () => {
  const apiUrl = 'https://front-test.beta.aviasales.ru';

  const [searchId, setSearchId] = useState();
  const [ticketsPack, setTicketsPack] = useState([]);
  const [amountShowedTickets, setAmountShowedTickets] = useState(3);


  useEffect(() => {
    fetch(`${apiUrl}/search`)
      .then(resp => resp.json())
      .then(resp => setSearchId(resp.searchId))
  }, []);

  const ticketsSearching = () => {
    console.log(`${apiUrl}/tickets?searchId=${searchId}`)
    if (searchId === undefined) {
      return;
    }
    fetch(`${apiUrl}/tickets?searchId=${searchId}`)
      .then(resp => resp.json())
      .then(resp => {
        console.log(resp.stop)
        if (resp.stop === false) {
          ticketsSearching()
        } else {
          setTicketsPack(resp.tickets)
        }
      })
      .catch(err => {
        console.log(err);
        ticketsSearching();
      })
  }

  useEffect(() => ticketsSearching(), [searchId])


  return (
    <div>
      <Tickets
        ticketsPack={ticketsPack}
        amountShowedTickets={amountShowedTickets}
      />
    </div>
  );
}

export default App;