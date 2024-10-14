import React, { useState, useEffect } from 'react';

function PracticalExperience({ cvData, setCvData }) {
  const [experiences, setExperiences] = useState(cvData.experiences || []);

  const handleChange = (e, index) => {
    const newExperiences = [...experiences];
    newExperiences[index] = { ...newExperiences[index], [e.target.name]: e.target.value };
    setExperiences(newExperiences);
  };

  const addExperience = () => {
    setExperiences([...experiences, { company: '', position: '', responsibilities: '', from: '', until: '' }]);
  };

  useEffect(() => {
    setCvData((prev) => ({ ...prev, experiences }));
  }, [experiences, setCvData]);

  return (
    <div className="mb-5">
      <h2 className="text-xl font-semibold mb-3">Practical Experience</h2>
      {experiences.map((experience, index) => (
        <div key={index} className="grid grid-cols-1 gap-4 mb-4">
          <input
            className="border p-2"
            type="text"
            name="company"
            value={experience.company}
            onChange={(e) => handleChange(e, index)}
            placeholder="Company Name"
          />
          <input
            className="border p-2"
            type="text"
            name="position"
            value={experience.position}
            onChange={(e) => handleChange(e, index)}
            placeholder="Position Title"
          />
          <textarea
            className="border p-2"
            name="responsibilities"
            value={experience.responsibilities}
            onChange={(e) => handleChange(e, index)}
            placeholder="Main Responsibilities"
          />
          <input
            className="border p-2"
            type="text"
            name="from"
            value={experience.from}
            onChange={(e) => handleChange(e, index)}
            placeholder="From"
          />
          <input
            className="border p-2"
            type="text"
            name="until"
            value={experience.until}
            onChange={(e) => handleChange(e, index)}
            placeholder="Until"
          />
        </div>
      ))}
      <button
        className="bg-gray-500 text-white px-4 py-2"
        onClick={addExperience}
      >
        Add More
      </button>
    </div>
  );
}

export default PracticalExperience;
