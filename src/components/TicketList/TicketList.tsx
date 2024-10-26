import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

import { useAppSelector } from '../../hooks/hooks'
import Tabs from '../Tabs/Tabs'
import Ticket from '../Ticket/Ticket'
import './ticket-list/ticket-list.sass'

const TicketList = () => {
  const tickets = useAppSelector((state) => state.tickets.list)
  const [ticketsPerPage, setTicketsPerPage] = useState(5)

  return (
    <div className="ticket-list">
      <Tabs />
      {tickets.slice(0, ticketsPerPage).map((ticket) => (
        <Ticket ticket={ticket} key={uuidv4()} />
      ))}
      {tickets.length !== 0 && (
        <button type="button" className="ticket-list__button" onClick={() => setTicketsPerPage(ticketsPerPage + 5)}>
          Показать еще 5 билетов!
        </button>
      )}
    </div>
  )
}

export default TicketList
