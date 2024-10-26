import LinearProgress from '@mui/material/LinearProgress'

import useTickets from '../../hooks/useTickets'
import Header from '../Header/Header'
import Main from '../Main/Main'
import './app/app.sass'

const App: React.FC = () => {
  const { loading, progress } = useTickets()
  return (
    <div className="app">
      <Header />
      {loading && (
        <LinearProgress
          variant="determinate"
          value={progress}
          className="app__progress"
          style={{ marginTop: '-4px' }}
        />
      )}
      <Main />
    </div>
  )
}

export default App
