
import Header  from "./components/Header/Header";
import FormSection from "./components/Form-section/Form"
import './main.css'
import { Route, Routes } from "react-router-dom";
import { SingleCountry } from "./components/SingleContry/Country";

const App  = () => {
  return (
    <>
      <Header/>
      <main className="site-main">
        <Routes>
          <Route path="/" element={<FormSection/>}/>
          <Route path="/:name" element={<SingleCountry/>}/>
        </Routes>

      </main>
    </>
  )
};

export default App;