import { useAppDispatch, useAppSelector } from '../../hooks/hooks'
import { setSortCriteria } from '../../store/sortSlice'
import './tabs/tabs.sass'

const Tabs = () => {
  const sortCriteriaStore = useAppSelector((state) => state.sortCriteria)
  const dispatch = useAppDispatch()
  return (
    <div className="tabs">
      <button
        type="button"
        onClick={() => dispatch(setSortCriteria('cheap'))}
        className={`tabs__tab ${sortCriteriaStore.ticketSortingMethod === 'cheap' ? 'tabs__tab_active' : ''}`}
      >
        Самый дешевый
      </button>
      <button
        type="button"
        onClick={() => dispatch(setSortCriteria('fast'))}
        className={`tabs__tab ${sortCriteriaStore.ticketSortingMethod === 'fast' ? 'tabs__tab_active' : ''}`}
      >
        Самый быстрый
      </button>
      <div className="tabs__tab">Оптимальный</div>
    </div>
  )
}

export default Tabs
