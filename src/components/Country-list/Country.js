

import "./country.css";
import Flag from "../../assets/images/flag-germany.jpg"

const List = () => {
  return (
    <li className="list-item">
      <img className="country-img" src={Flag} alt="Template" />
      <div className="info-box">
        <h3 className="country-title">Germany</h3>
        <p className="population"><strong>Population </strong> <span>81,770,900</span></p>
        <p className="region"><strong>Region </strong> <span>Europe</span></p>
        <p className="capital"><strong>Capital </strong> <span>Berlin</span></p>
      </div>
    </li>
  )
}

export default List