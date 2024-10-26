import './filter/filter.sass'

import { useAppSelector, useAppDispatch } from '../../hooks/hooks'
import { toggleAll, toggleTransfer } from '../../store/checkboxesSlice'
import { TransferKeysType } from '../../types/type'

const Filter: React.FC = () => {
  const checkboxesStore = useAppSelector((state) => state.checkboxes)
  const { transfers } = checkboxesStore
  const dispatch = useAppDispatch()

  const createActionCheckbox = (status: boolean, transferString: TransferKeysType) => {
    return { checkState: status, transfer: transferString }
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
            onChange={(e) => dispatch(toggleAll(e.target.checked))}
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
            onChange={(e) => dispatch(toggleTransfer(createActionCheckbox(e.target.checked, 'direct')))}
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
            onChange={(e) => dispatch(toggleTransfer({ checkState: e.target.checked, transfer: 'one' }))}
          />
          <span className="filter__custom-checkbox" />1 пересадка
        </label>
        <label className="filter__label" htmlFor="twoTransfer">
          <input
            className="filter__checkbox"
            type="checkbox"
            id="twoTransfer"
            checked={transfers.two}
            onChange={(e) => dispatch(toggleTransfer({ checkState: e.target.checked, transfer: 'two' }))}
          />
          <span className="filter__custom-checkbox" />2 пересадки
        </label>
        <label className="filter__label" htmlFor="threeTransfer">
          <input
            className="filter__checkbox"
            type="checkbox"
            id="threeTransfer"
            checked={transfers.three}
            onChange={(e) => dispatch(toggleTransfer({ checkState: e.target.checked, transfer: 'three' }))}
          />
          <span className="filter__custom-checkbox" />3 пересадки
        </label>
      </div>
    </div>
  )
}

export default Filter
