import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import React from "react";

import {LandingPage} from "./Pages/index"


export default function DeathAndTaxesApp() {
    return (
      <Router>
        <Routes>
          <Route path="/"  element={<LandingPage />} exact />
        </Routes>
    </Router>
    );
}


