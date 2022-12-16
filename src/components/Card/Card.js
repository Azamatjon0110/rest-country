
import"./Card.css";

export const Item = ({img, name, population, region, capital}) => {
  return (
    <li className="list-item">
      <img className="country-img" src={img} alt="Template" />
      <div className="info-box">
        <h3 className="country-title">{name}</h3>
        <p className="population"><strong>Population: </strong> <span>{population}</span></p>
        <p className="region"><strong>Region: </strong> <span>{region}</span></p>
        <p className="capital"><strong>Capital: </strong> <span>{capital}</span></p>
      </div>
    </li>
  )
}