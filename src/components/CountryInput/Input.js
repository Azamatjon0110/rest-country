
import { useState } from "react"
import "./Input.css"
export const Form = (props) => {
  const [valueInput, setValueInput]= useState("");

  const submitForm = (evt) => {
    evt.preventDefault()
    props.getv(valueInput);
  }

	const changeRegion = (evt) => {
    props.getSelect(evt.target.value);
    setValueInput("");
  };

  return (
		<form className='js-form' action='#' onSubmit={submitForm}>
			<input
      onChange={(evt) => {
        setValueInput(evt.target.value)
      }}
				className='input-search'
				type='search'
				name='search'
				aria-label='Search for a country…'
				placeholder='Search for a country…'
			/>
			<select class='country-select' onChange={changeRegion}>
				<option value='africa'>Africa</option>
				<option value='america'>America</option>
				<option value='asia'>Asia</option>
				<option value='europe'>Europe</option>
				<option value='oceania'>Oceania</option>
			</select>
		</form>
	);
}