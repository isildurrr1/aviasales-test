import './ticket/ticket.sass'

const Ticket = () => {
  return (
    <div className="ticket">
      <div className="ticket__header">
        <h2 className="ticket__price">13 400 Р</h2>
        <img className="ticket__logo" src="./images/S7.png" alt="logo" />
      </div>
      <div className="ticket__info">
        <div className="ticket__flight">
          <div className="ticket__description">
            <span className="ticket__span-title">MOW – HKT</span>
            <span className="ticket__span-data">10:45 – 08:00</span>
          </div>
          <div className="ticket__description">
            <span className="ticket__span-title">В пути</span>
            <span className="ticket__span-data">21ч 15м</span>
          </div>
          <div className="ticket__description">
            <span className="ticket__span-title">2 пересадки</span>
            <span className="ticket__span-data">HKG, JNB</span>
          </div>
        </div>
        <div className="ticket__flight">
          <div className="ticket__description">
            <span className="ticket__span-title">MOW – HKT</span>
            <span className="ticket__span-data">11:20 – 00:50</span>
          </div>
          <div className="ticket__description">
            <span className="ticket__span-title">В пути</span>
            <span className="ticket__span-data">13ч 30м</span>
          </div>
          <div className="ticket__description">
            <span className="ticket__span-title">2 пересадки</span>
            <span className="ticket__span-data">HKG</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Ticket
