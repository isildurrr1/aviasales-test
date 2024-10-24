import Header from '../Header/Header'
import Main from '../Main/Main'
import './app/app.sass'

const App: React.FC = () => {
  return (
    <div className="app">
      <Header />
      <Main />
    </div>
  )
}

export default App
