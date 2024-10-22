import Tabs from '../Tabs/Tabs'
import Ticket from '../Ticket/Ticket'
import './ticket-list/ticket-list.sass'

const TicketList = () => {
  return (
    <div className="ticket-list">
      <Tabs />
      <Ticket />
      <Ticket />
      <Ticket />
      <Ticket />
      <Ticket />
      <button type="button" className="ticket-list__button" style={{ marginBottom: '50px' }}>
        Показать еще 5 билетов!
      </button>
    </div>
  )
}

export default TicketList
