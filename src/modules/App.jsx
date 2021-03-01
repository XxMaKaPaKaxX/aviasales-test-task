import React, { useEffect, useState } from 'react';
import Tickets from './Tickets';
import TransfersControlPanel from './TransfersControlPanel';
import FilterBtn from '../components/FilterBtn';

import '../style/App.scss';

const App = () => {
  const apiUrl = 'https://front-test.beta.aviasales.ru';

  const [searchId, setSearchId] = useState();
  const [ticketsPack, setTicketsPack] = useState([]);
  const [amountShowedTickets, setAmountShowedTickets] = useState(3);
  const [filterCheaperOrFaster, setFilterCheaperOrFaster] = useState('cheapest');

  const [transfersCheckboxesStatus, setTransfersCheckboxesStatus] = useState({
    all: true,
    without: false,
    one: false,
    two: false,
    three: false
  })


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
          return ticketsSearching()
        } else {
          setTicketsPack(resp.tickets)
        }
      })
      .catch(err => {
        console.log(err);
        return ticketsSearching();
      })
  }

  useEffect(() => ticketsSearching(), [searchId])

  const handleClickBtnFilter = (id) => {
    setFilterCheaperOrFaster(id);
  }

  const toggleCheckboxStatus = (event) => {
    const targetCheckbox = event.target.getAttribute('id');
    const newStatus = { ...transfersCheckboxesStatus };
    newStatus[targetCheckbox] = !newStatus[targetCheckbox];
    setTransfersCheckboxesStatus(newStatus);

  }

  return (
    <div className="app m-5">
      <div className="container">
        <div className="row">

          <div className="left-panel col-md-4">
            <TransfersControlPanel checkboxStatus={transfersCheckboxesStatus} toggleStatus={toggleCheckboxStatus} />
          </div>

          <div className="right-panel col-md-8">
            <div class="btn-group w-100 mb-4" role="group">
              <FilterBtn
                id="cheapest"
                text="Najtańsze"
                filterStatus={filterCheaperOrFaster}
                click={handleClickBtnFilter}
              />
              <FilterBtn
                id="fastest"
                text="Najszybsze"
                filterStatus={filterCheaperOrFaster}
                click={handleClickBtnFilter}
              />
            </div>
            <Tickets
              ticketsPack={ticketsPack}
              amountShowedTickets={amountShowedTickets}
            />
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;