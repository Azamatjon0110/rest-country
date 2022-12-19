
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './Country.css';

export const SingleCountry = () => {
  const [object, setobject] = useState("")
  const {name} = useParams();
  const navigate = useNavigate()
  console.log(object);
  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${name}`)
      .then((res) => res.json())
      .then((data) => setobject(data[0]));
  }, [])

  return(
    <section className="country-section bg-secondary bg-opacity-10">
      <div className="container">
      {object ? (
          <div className=" py-5">
            <button className="btn btn-light mb-5" onClick={() => navigate("/")}>
              Back
            </button>
            <div className="single-info-wrapper d-flex">
              <img
                className="single-info-img me-5 rounded-3"
                src={object.flags.svg}
                alt="single country flag"
                width="560"
                height="400"
              />
              <div className="single-info w-100">
                <h3 className="single-info-title mb-4"><strong>{object.name?.common}</strong></h3>
                <div className="single-info-list-wrapper w-100 d-flex justify-content-between">
                  <ul className="single-info-list list-unstyled">
                    <li className="single-info-item mb-3">
                      <strong>Native Name:</strong> {object.name?.common}
                    </li>
                    <li className="single-info-item mb-3">
                      <strong> Population:</strong>
                      {object.population}
                    </li>
                    <li className="single-info-item mb-3"> <strong>Region:</strong> {object.region}</li>
                    <li className="single-info-item mb-3">
                    <strong>Sub Region:</strong>
                       {object.subregion}
                    </li>
                    <li className="single-info-item mb-3">
                    <strong>Capital:</strong> {object.capital}</li>
                  </ul>
                  <ul className="single-info-list list-unstyled">
                    <li className="single-info-item mb-3">
                    <strong>Top Lavel Domain:</strong>
                       {object.tld}
                    </li>
                    <li className="single-info-item mb-3">
                    <strong> Currencies: </strong>
                     {Object.keys(object.currencies)}
                    </li>
                    <li className="single-info-item mb-3">
                    <strong>Language:</strong>
                       {Object.values(object.languages).join(", ")}
                    </li>
                  </ul>
                </div>
                <div className="single-info-border-wrapper">
                  <span className="single-info-border-title">
                    <strong>
                    Border Countries:

                    </strong>
                  </span>
                  {object.borders ? (
                    object.borders.map((item) => (
                      <button className="single-info-border btn btn-light me-2"> {item}</button>
                    ))
                  ) : (
                    <span className="single-info-border-title">No borders</span>
                  )}
                </div>
              </div>
            </div>
          </div>
        ) : (
          <p>Waiting...</p>
        )}
      </div>
    </section>
  )
}