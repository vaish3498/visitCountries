import './index.css'

const VisitedCountries = props => {
  const {visitedCountryList, deletedVisitedCountry} = props
  const {name, imageUrl, id} = visitedCountryList

  const remove = () => {
    deletedVisitedCountry(id)
  }

  return (
    <li className="countries-list">
      <div className="countries-container">
        <img src={imageUrl} alt="thumbnails" className="image" />
        <div className="detail-container">
          <p className="name">{name}</p>
          <button
            className="button"
            type="button"
            onClick={remove}
            data-testid="delete"
          >
            Remove
          </button>
        </div>
      </div>
    </li>
  )
}

export default VisitedCountries
