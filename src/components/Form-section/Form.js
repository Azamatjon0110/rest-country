
import List from "../Country-list/Country";
import "./form.css"

const FormSection = () => {
  return (
    <section className="form-section">
      <div className="container">
        <form className="js-form" action="#">
          <input className="input-search" type="search" name="search" aria-label="Search for a country…" placeholder="Search for a country…"/>
          <select class="country-select">
            <option value="africa">Africa</option>
            <option value="america">America</option>
            <option value="asia">Asia</option>
            <option value="europe">Europe</option>
            <option value="oceania">Oceania</option>
          </select>
        </form>
        <ul className="list-unstyle">
          <List/>
          <List/>
          <List/>
          <List/>
          <List/>
          <List/>
          <List/>
          <List/>

        </ul>
      </div>
    </section>
  )
}

export default FormSection;