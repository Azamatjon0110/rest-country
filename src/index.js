import React from "react";
import  ReactDOM  from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from './App';


// const title = <h1>Hello world</h1>


  // ReactDOM.render(<App/>, document.getElementById('root'))

  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );