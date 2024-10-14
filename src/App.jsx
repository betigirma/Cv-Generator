import React, { useState, useEffect } from 'react';
import GeneralInfo from './components/GeneralInfo';
import EducationExperience from './components/EducationExperience';
import PracticalExperience from './components/PracticalExperience';
import CvTemplate from './components/CvTemplate';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import './index.css'

function App() {
  const [cvData, setCvData] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem('cvData'));
    if (savedData) {
      setCvData(savedData);
    }
  }, []);

  const handleSave = () => {
    localStorage.setItem('cvData', JSON.stringify(cvData));
    navigate('/cv-template'); // Navigate to the CV template after submitting
  };

  const handleEdit = () => {
    const savedData = JSON.parse(localStorage.getItem('cvData'));
    setCvData(savedData);
  };

  return (
    <div className="container mx-auto p-5">
      <h1 className="text-3xl font-bold text-center mb-8">CV Generator</h1>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <GeneralInfo cvData={cvData} setCvData={setCvData} />
              <EducationExperience cvData={cvData} setCvData={setCvData} />
              <PracticalExperience cvData={cvData} setCvData={setCvData} />
              <div className="flex justify-between mt-5">
                <button className="bg-blue-500 text-white px-4 py-2" onClick={handleEdit}>
                  Edit
                </button>
                <button className="bg-green-500 text-white px-4 py-2" onClick={handleSave}>
                  Submit
                </button>
              </div>
            </>
          }
        />
        <Route path="/cv-template" element={<CvTemplate />} />
      </Routes>
    </div>
  );
}

export default function WrappedApp() {
  return (
    <Router>
      <App />
    </Router>
  );
}
