
import Header  from "./components/Header/Header";
import FormSection from "./components/Form-section/Form"
import './main.css'

const App  = () => {
  return (
    <>
      <Header/>
      <main className="site-main">
        <FormSection/>
      </main>
    </>
  )
};

export default App;