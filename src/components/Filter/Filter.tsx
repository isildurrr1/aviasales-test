import './filter/filter.sass'

const Filter = () => {
  return (
    <div className="filter">
      <h4 className="filter__title">Количество пересадок</h4>
      <div className="filter__list">
        <label className="filter__label" htmlFor="all">
          <input className="filter__checkbox" type="checkbox" id="all" />
          <span className="filter__custom-checkbox" />
          Все
        </label>
        <label className="filter__label" htmlFor="withOut">
          <input className="filter__checkbox" type="checkbox" id="withOut" />
          <span className="filter__custom-checkbox" />
          Без пересадок
        </label>
        <label className="filter__label" htmlFor="oneTransfer">
          <input className="filter__checkbox" type="checkbox" id="oneTransfer" />
          <span className="filter__custom-checkbox" />1 пересадка
        </label>
        <label className="filter__label" htmlFor="twoTransfer">
          <input className="filter__checkbox" type="checkbox" id="twoTransfer" />
          <span className="filter__custom-checkbox" />2 пересадки
        </label>
        <label className="filter__label" htmlFor="threeTransfer">
          <input className="filter__checkbox" type="checkbox" id="threeTransfer" />
          <span className="filter__custom-checkbox" />3 пересадки
        </label>
      </div>
    </div>
  )
}

export default Filter
