import { formatFlightTimeInterval, formatFligthDuration, formatPrice, stops } from '../../utils/func'
import { TicketProps } from '../../types/type'
import './ticket/ticket.sass'

const Ticket: React.FC<TicketProps> = ({ ticket }) => {
  console.log(ticket)
  const firstSegment = ticket.segments[0]
  const secondSegment = ticket.segments[1]

  return (
    <div className="ticket">
      <div className="ticket__header">
        <h2 className="ticket__price">{formatPrice(ticket.price)}</h2>
        <img className="ticket__logo" src={`http://pics.avs.io/110/36/${ticket.carrier}.png`} alt="logo" />
      </div>
      <div className="ticket__info">
        <div className="ticket__flight">
          <div className="ticket__description">
            <span className="ticket__span-title">{`${firstSegment.origin} - ${firstSegment.destination}`}</span>
            <span className="ticket__span-data">
              {formatFlightTimeInterval(firstSegment.date, firstSegment.duration)}
            </span>
          </div>
          <div className="ticket__description">
            <span className="ticket__span-title">В пути</span>
            <span className="ticket__span-data">{formatFligthDuration(firstSegment.duration)}</span>
          </div>
          <div className="ticket__description">
            <span className="ticket__span-title">{stops(firstSegment.stops.length)}</span>
            <span className="ticket__span-data">{firstSegment.stops.join(', ')}</span>
          </div>
        </div>
        <div className="ticket__flight">
          <div className="ticket__description">
            <span className="ticket__span-title">{`${secondSegment.origin} - ${secondSegment.destination}`}</span>
            <span className="ticket__span-data">
              {formatFlightTimeInterval(secondSegment.date, secondSegment.duration)}
            </span>
          </div>
          <div className="ticket__description">
            <span className="ticket__span-title">В пути</span>
            <span className="ticket__span-data">{formatFligthDuration(secondSegment.duration)}</span>
          </div>
          <div className="ticket__description">
            <span className="ticket__span-title">{stops(secondSegment.stops.length)}</span>
            <span className="ticket__span-data">{secondSegment.stops.join(', ')}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Ticket
