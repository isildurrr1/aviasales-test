import './filter/filter.sass'

import { useAppSelector, useAppDispatch } from '../../hooks/hooks'
import { toggleTransfer } from '../../store/checkboxesSlice'

const Filter = () => {
  const all = useAppSelector((state) => state.checkboxes.all)
  const dispatch = useAppDispatch()
  return (
    <div className="filter">
      <h4 className="filter__title">Количество пересадок</h4>
      <div className="filter__list">
        <label className="filter__label" htmlFor="all">
          <input
            className="filter__checkbox"
            type="checkbox"
            id="all"
            checked={all}
            // onChange={(e) => dispatch(toggleTransfer(e.target.checked))}
          />
          <span className="filter__custom-checkbox" />
          Все
        </label>
        <label className="filter__label" htmlFor="withOut">
          <input
            className="filter__checkbox"
            type="checkbox"
            id="withOut"
            onChange={(e) => dispatch(toggleTransfer({ checkInfo: e.target.checked, transfer: 'direct' }))}
          />
          <span className="filter__custom-checkbox" />
          Без пересадок
        </label>
        <label className="filter__label" htmlFor="oneTransfer">
          <input
            className="filter__checkbox"
            type="checkbox"
            id="oneTransfer"
            onChange={(e) => dispatch(toggleTransfer({ checkInfo: e.target.checked, transfer: 'one' }))}
          />
          <span className="filter__custom-checkbox" />1 пересадка
        </label>
        <label className="filter__label" htmlFor="twoTransfer">
          <input
            className="filter__checkbox"
            type="checkbox"
            id="twoTransfer"
            onChange={(e) => dispatch(toggleTransfer({ checkInfo: e.target.checked, transfer: 'two' }))}
          />
          <span className="filter__custom-checkbox" />2 пересадки
        </label>
        <label className="filter__label" htmlFor="threeTransfer">
          <input
            className="filter__checkbox"
            type="checkbox"
            id="threeTransfer"
            onChange={(e) => dispatch(toggleTransfer({ checkInfo: e.target.checked, transfer: 'three' }))}
          />
          <span className="filter__custom-checkbox" />3 пересадки
        </label>
      </div>
    </div>
  )
}

export default Filter
