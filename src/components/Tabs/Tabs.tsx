import './tabs/tabs.sass'

const Tabs = () => {
  return (
    <div className="tabs">
      <div className="tabs__tab tabs__tab_active">Самый дешевый</div>
      <div className="tabs__tab">Самый быстрый</div>
      <div className="tabs__tab">Оптимальный</div>
    </div>
  )
}

export default Tabs
