import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import BusinessBody from "./Components/BusinessBody";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function dataRecive(data){
    console.log(data.title)
}

ReactDOM.render(
  <Router>
    <Routes>
        <Route path="/" element={<App data={dataRecive}/>}/>
        <Route path="/business" element={<BusinessBody/>}/>
    </Routes>
  
  </Router>,
  document.getElementById("root")
);
