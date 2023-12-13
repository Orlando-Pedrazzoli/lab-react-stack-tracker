import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CompanyPage from './pages/CompanyPage';
import TechnologyPage from './pages/TechnologyPage';
import Navbar from './components/Navbar';
import companiesData from './companies.json';
import technologiesData from './technologies.json';

function App() {
  const [companies, setCompanies] = useState([]);
  const [technologies, setTechnologies] = useState([]);

  useEffect(() => {
    setCompanies(companiesData);
    setTechnologies(technologiesData);
  }, []);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage companies={companies} />} />
        <Route
          path='/company/:companySlug'
          element={<CompanyPage companies={companies} />}
        />
        <Route
          path='/tech/:slug'
          element={<TechnologyPage technologies={technologies} />}
        />
      </Routes>
    </>
  );
}

export default App;
