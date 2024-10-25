import { v4 as uuidv4 } from 'uuid'

import { useAppSelector } from '../../hooks/hooks'
import Tabs from '../Tabs/Tabs'
import Ticket from '../Ticket/Ticket'
import './ticket-list/ticket-list.sass'

const TicketList = () => {
  const tickets = useAppSelector((state) => state.tickets.list)
  console.log(tickets)
  return (
    <div className="ticket-list">
      <Tabs />
      {tickets.slice(0, 5).map((ticket) => (
        <Ticket ticket={ticket} key={uuidv4()} />
      ))}
      <button type="button" className="ticket-list__button" style={{ marginBottom: '50px' }}>
        Показать еще 5 билетов!
      </button>
    </div>
  )
}

export default TicketList
