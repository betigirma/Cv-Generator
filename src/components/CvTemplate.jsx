import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { jsPDF } from 'jspdf';

function CvTemplate() {
  const [cvData, setCvData] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem('cvData'));
    if (savedData) {
      setCvData(savedData);
    }
  }, []);

  const handleDownload = () => {
    const doc = new jsPDF();
    doc.text(`Name: ${cvData.generalInfo?.name || ''}`, 10, 10);
    doc.text(`Email: ${cvData.generalInfo?.email || ''}`, 10, 20);
    doc.text(`Phone: ${cvData.generalInfo?.phone || ''}`, 10, 30);

    doc.text(`School: ${cvData.education?.school || ''}`, 10, 40);
    doc.text(`Title of Study: ${cvData.education?.studyTitle || ''}`, 10, 50);
    doc.text(`Date of Study: ${cvData.education?.studyDate || ''}`, 10, 60);

    cvData.experiences?.forEach((exp, index) => {
      doc.text(`Company: ${exp.company}`, 10, 80 + index * 20);
      doc.text(`Position: ${exp.position}`, 10, 90 + index * 20);
      doc.text(`From: ${exp.from} Until: ${exp.until}`, 10, 100 + index * 20);
      doc.text(`Responsibilities: ${exp.responsibilities}`, 10, 110 + index * 20);
    });

    doc.save('CV.pdf');
  };

  return (
    <div className="container mx-auto p-5">
      <h1 className="text-3xl font-bold text-center mb-8">Your CV</h1>
      <div className="bg-gray-100 p-5 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-3">General Information</h2>
        <p><strong>Name:</strong> {cvData.generalInfo?.name}</p>
        <p><strong>Email:</strong> {cvData.generalInfo?.email}</p>
        <p><strong>Phone:</strong> {cvData.generalInfo?.phone}</p>

        <h2 className="text-2xl font-semibold mb-3 mt-5">Education Experience</h2>
        <p><strong>School:</strong> {cvData.education?.school}</p>
        <p><strong>Title of Study:</strong> {cvData.education?.studyTitle}</p>
        <p><strong>Date of Study:</strong> {cvData.education?.studyDate}</p>

        <h2 className="text-2xl font-semibold mb-3 mt-5">Practical Experience</h2>
        {cvData.experiences?.map((exp, index) => (
          <div key={index}>
            <p><strong>Company:</strong> {exp.company}</p>
            <p><strong>Position:</strong> {exp.position}</p>
            <p><strong>From:</strong> {exp.from} <strong>Until:</strong> {exp.until}</p>
            <p><strong>Responsibilities:</strong> {exp.responsibilities}</p>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-5">
        <button
          className="bg-blue-500 text-white px-4 py-2"
          onClick={handleDownload}
        >
          Download as PDF
        </button>
        <button
          className="ml-3 bg-gray-500 text-white px-4 py-2"
          onClick={() => navigate('/')}
        >
          Edit CV
        </button>
      </div>
    </div>
  );
}

export default CvTemplate;
