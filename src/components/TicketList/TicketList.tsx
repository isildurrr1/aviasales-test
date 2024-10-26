import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { Empty } from 'antd'

import { useAppSelector } from '../../hooks/hooks'
import Tabs from '../Tabs/Tabs'
import Ticket from '../Ticket/Ticket'
import './ticket-list/ticket-list.sass'
import { filterTickets } from '../../utils/func'

const TicketList = () => {
  const tickets = useAppSelector((state) => state.tickets.list)
  const checkboxesState = useAppSelector((state) => state.checkboxes)
  const checkboxSelected = Object.values(checkboxesState.transfers).includes(true)
  const [ticketsPerPage, setTicketsPerPage] = useState(5)
  return (
    <div className="ticket-list">
      <Tabs />
      {tickets
        .filter((ticket) => filterTickets(checkboxesState, ticket))
        .slice(0, ticketsPerPage)
        .map((ticket) => (
          <Ticket ticket={ticket} key={uuidv4()} />
        ))}
      {tickets.length !== 0 && checkboxSelected ? (
        <button type="button" className="ticket-list__button" onClick={() => setTicketsPerPage(ticketsPerPage + 5)}>
          Показать еще 5 билетов!
        </button>
      ) : (
        <Empty description={!checkboxSelected && <span>Рейсов, подходящих под заданные фильтры, не найдено</span>} />
      )}
    </div>
  )
}

export default TicketList
