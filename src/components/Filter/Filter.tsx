import './filter/filter.sass'

import { useAppSelector, useAppDispatch } from '../../hooks/hooks'
import { toggleAll, toggleTransfer } from '../../store/checkboxesSlice'
import { TransferKeysType } from '../../types/type'

const Filter: React.FC = () => {
  const checkboxesStore = useAppSelector((state) => state.checkboxes)
  const { transfers } = checkboxesStore
  const dispatch = useAppDispatch()

  const handleToggle = (e: React.ChangeEvent<HTMLInputElement>, transferType?: TransferKeysType): void => {
    if (transferType) {
      dispatch(toggleTransfer({ checkState: e.target.checked, transfer: transferType }))
    } else {
      dispatch(toggleAll(e.target.checked))
    }
  }

  return (
    <div className="filter">
      <h4 className="filter__title">Количество пересадок</h4>
      <div className="filter__list">
        <label className="filter__label" htmlFor="all">
          <input
            className="filter__checkbox"
            type="checkbox"
            id="all"
            checked={checkboxesStore.all}
            onChange={(e) => handleToggle(e)}
          />
          <span className="filter__custom-checkbox" />
          Все
        </label>
        <label className="filter__label" htmlFor="withOut">
          <input
            className="filter__checkbox"
            type="checkbox"
            id="withOut"
            checked={transfers.direct}
            onChange={(e) => handleToggle(e, 'direct')}
          />
          <span className="filter__custom-checkbox" />
          Без пересадок
        </label>
        <label className="filter__label" htmlFor="oneTransfer">
          <input
            className="filter__checkbox"
            type="checkbox"
            id="oneTransfer"
            checked={transfers.one}
            onChange={(e) => handleToggle(e, 'one')}
          />
          <span className="filter__custom-checkbox" />1 пересадка
        </label>
        <label className="filter__label" htmlFor="twoTransfer">
          <input
            className="filter__checkbox"
            type="checkbox"
            id="twoTransfer"
            checked={transfers.two}
            onChange={(e) => handleToggle(e, 'two')}
          />
          <span className="filter__custom-checkbox" />2 пересадки
        </label>
        <label className="filter__label" htmlFor="threeTransfer">
          <input
            className="filter__checkbox"
            type="checkbox"
            id="threeTransfer"
            checked={transfers.three}
            onChange={(e) => handleToggle(e, 'three')}
          />
          <span className="filter__custom-checkbox" />3 пересадки
        </label>
      </div>
    </div>
  )
}

export default Filter
