import './main/main.sass'
import Filter from '../Filter/Filter'
import TicketList from '../TicketList/TicketList'

const Main = () => {
  return (
    <main className="main">
      <Filter />
      <TicketList />
    </main>
  )
}

export default Main
