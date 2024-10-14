import React, { useState, useEffect } from 'react';

function GeneralInfo({ cvData, setCvData }) {
  const [generalInfo, setGeneralInfo] = useState(cvData.generalInfo || { name: '', email: '', phone: '' });

  useEffect(() => {
    setCvData((prev) => ({ ...prev, generalInfo }));
  }, [generalInfo, setCvData]);

  const handleChange = (e) => {
    setGeneralInfo({ ...generalInfo, [e.target.name]: e.target.value });
  };

  return (
    <div className="mb-5">
      <h2 className="text-xl font-semibold mb-3">General Information</h2>
      <div className="grid grid-cols-1 gap-4">
        <input
          className="border p-2"
          type="text"
          name="name"
          value={generalInfo.name}
          onChange={handleChange}
          placeholder="Name"
        />
        <input
          className="border p-2"
          type="email"
          name="email"
          value={generalInfo.email}
          onChange={handleChange}
          placeholder="Email"
        />
        <input
          className="border p-2"
          type="text"
          name="phone"
          value={generalInfo.phone}
          onChange={handleChange}
          placeholder="Phone"
        />
      </div>
    </div>
  );
}

export default GeneralInfo;
