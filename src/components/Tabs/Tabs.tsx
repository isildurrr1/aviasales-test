import { useAppDispatch, useAppSelector } from '../../hooks/hooks'
import { setSortCriteria } from '../../store/sortSlice'
import { sortList } from '../../store/ticketsSlice'
import './tabs/tabs.sass'

const Tabs = () => {
  const sortCriteriaStore = useAppSelector((state) => state.sortCriteria)
  const dispatch = useAppDispatch()
  return (
    <div className="tabs">
      <button
        type="button"
        onClick={() => {
          dispatch(setSortCriteria('cheap'))
          dispatch(sortList('cheap'))
        }}
        className={`tabs__tab ${sortCriteriaStore.ticketSortingMethod === 'cheap' ? 'tabs__tab_active' : ''}`}
      >
        Самый дешевый
      </button>
      <button
        type="button"
        onClick={() => {
          dispatch(setSortCriteria('fast'))
          dispatch(sortList('fast'))
        }}
        className={`tabs__tab ${sortCriteriaStore.ticketSortingMethod === 'fast' ? 'tabs__tab_active' : ''}`}
      >
        Самый быстрый
      </button>

      <button
        type="button"
        onClick={() => {
          dispatch(setSortCriteria('optim'))
          dispatch(sortList('optim'))
        }}
        className={`tabs__tab ${sortCriteriaStore.ticketSortingMethod === 'optim' ? 'tabs__tab_active' : ''}`}
      >
        Оптимальный
      </button>
    </div>
  )
}

export default Tabs
