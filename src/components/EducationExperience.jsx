import React, { useState, useEffect } from 'react';

function EducationExperience({ cvData, setCvData }) {
  const [education, setEducation] = useState(cvData.education || { school: '', studyTitle: '', studyDate: '' });

  useEffect(() => {
    setCvData((prev) => ({ ...prev, education }));
  }, [education, setCvData]);

  const handleChange = (e) => {
    setEducation({ ...education, [e.target.name]: e.target.value });
  };

  return (
    <div className="mb-5">
      <h2 className="text-xl font-semibold mb-3">Educational Experience</h2>
      <div className="grid grid-cols-1 gap-4">
        <input
          className="border p-2"
          type="text"
          name="school"
          value={education.school}
          onChange={handleChange}
          placeholder="School Name"
        />
        <input
          className="border p-2"
          type="text"
          name="studyTitle"
          value={education.studyTitle}
          onChange={handleChange}
          placeholder="Title of Study"
        />
        <input
          className="border p-2"
          type="text"
          name="studyDate"
          value={education.studyDate}
          onChange={handleChange}
          placeholder="Date of Study"
        />
      </div>
    </div>
  );
}

export default EducationExperience;
