
import { useEffect, useState } from "react";
import { Item } from "../Card/Card";
import { Form } from "../CountryInput/Input";
import "./form.css"

const FormSection = () => {
  const [value,setValue] = useState("");
  const [region, setRegion] = useState('');
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/${value ? `name/${value}`: region ? `region/${region}` : 'all'}`)
			.then((res) => res.json())
			.then((data) => {
				setData(data);
			});
  }, [value, region])

  const selectVal = (region) => {
    setRegion(region);
    setValue("")
  }
  const valget = (text) => {
    setValue(text)
    setRegion("")
  }

  return (
    <section className="form-section">
      <div className="container">
          <Form getv={valget} getSelect={selectVal}/>
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
      </div>
    </section>
  )
}

export default FormSection;