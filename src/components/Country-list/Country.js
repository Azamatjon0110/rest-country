

import "./country.css";
import { Item } from "../Card/Card";

const List = ({data}) => {


  return (
    <ul className="list-unstyle">
      {
        data.map(item => (
          <Item key={item.name.common}
          img={item.flags.png}
          name={item.name.common}
          population={item.population}
          region={item.region}
          capital= {item.capital}
          />
        ))
      }

    </ul>

    )
  }

  export default List