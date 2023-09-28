import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainMenu from './components/MainMenu';
import MainFooter from './components/MainFooter';

import Home from './screens/js/Home';
import CompanyDetails from './screens/js/CompanyDetails';
import Blogs from './screens/js/Blogs';
import GoldLoanCompanies from './screens/js/GoldLoanCompanies'; // Import the GoldLoanCompanies component

function App() {
  return (
    <div className="App">
      <Router>
      <MainMenu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/company/:companyId" element={<CompanyDetails />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/gold-loan-companies" element={<GoldLoanCompanies />} /> {/* Add this route */}
        </Routes>
        <MainFooter />
      </Router>
    </div>
  );
}

export default App;
