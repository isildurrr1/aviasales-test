import { useEffect } from 'react'

import Header from '../Header/Header'
import Main from '../Main/Main'
import './app/app.sass'
import { useAppDispatch } from '../../hooks/hooks'
import { fetchSearchId } from '../../store/ticketsSlice'

const App: React.FC = () => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchSearchId())
  }, [dispatch])

  return (
    <div className="app">
      <Header />
      <Main />
    </div>
  )
}

export default App
