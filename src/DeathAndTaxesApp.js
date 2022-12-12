import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import React from "react";

import InputIncome from "./Components/InputIncome"
import TableIncome from "./Components/TableIncome"
import LandingPage from "./Components/LandingPage"


export default function DeathAndTaxesApp() {
    return (
        <Router>
      <Routes>
      <Route path="/"  element={<LandingPage />} exact />
      <Route path="/input" element={<InputIncome />}  />
      <Route path="/results"  element={<TableIncome/>} />
      </Routes>
    </Router>
    );
}


