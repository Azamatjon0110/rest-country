
import { useEffect, useState } from "react";
import List from "../Country-list/Country";
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
				console.log(data);
				setData(data);
			});
  }, [value, region])

  const selectVal = (region) => {
    console.log(region);
    setRegion(region);
    setValue("")
  }
  const valget = (text) => {
    setValue(text)
    console.log(text);
    setRegion("")
  }

  return (
    <section className="form-section">
      <div className="container">
          <Form getv={valget} getSelect={selectVal}/>
          <List data={data}/>
      </div>
    </section>
  )
}

export default FormSection;