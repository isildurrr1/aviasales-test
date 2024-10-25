import LinearProgress from '@mui/material/LinearProgress'

import useTickets from '../../hooks/useTickets'
import Header from '../Header/Header'
import Main from '../Main/Main'
import './app/app.sass'

const App: React.FC = () => {
  const { loading, loadedTickets } = useTickets()
  return (
    <div className="app">
      <Header />
      {loading && (
        <LinearProgress variant="determinate" value={(loadedTickets / 10500) * 100} style={{ marginTop: '-4px' }} />
      )}
      <Main />
    </div>
  )
}

export default App
