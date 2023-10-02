import { useState } from 'react';

export default function Education() {
  const [school, setSchool] = useState('');
  const [degree, setDegree] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [location, setLocation] = useState('');

  function handleSchoolChange(e) {
    setSchool(e.target.value);
  }
  function handleDegreeChange(e) {
    setDegree(e.target.value);
  }
  function handleStartDateChange(e) {
    setStartDate(e.target.value);
  }
  function handleEndDateChange(e) {
    setEndDate(e.target.value);
  }
  function handleLocationChange(e) {
    setLocation(e.target.value);
  }

  return (
    <>
      <form onSubmit={(e) => e.preventDefault()}>
        <h1>Education</h1>
        <label htmlFor="school">
          School:
          <input
            type="text"
            id="school"
            placeholder="Enter School"
            value={school}
            onChange={handleSchoolChange}
          />
        </label>
        <label htmlFor="degree">
          Degree:
          <input
            type="text"
            id="degree"
            placeholder="Enter Degree"
            value={degree}
            onChange={handleDegreeChange}
          />
        </label>
        <label htmlFor="startDate">
          Start Date:
          <input
            type="tel"
            id="startDate"
            placeholder="Enter Start Date"
            value={startDate}
            onChange={handleStartDateChange}
          />
        </label>
        <label htmlFor="endDate">
          End Date:
          <input
            type="text"
            id="endDate"
            placeholder="Enter End Date"
            value={endDate}
            onChange={handleEndDateChange}
          />
        </label>
        <label htmlFor="location">
          Location:
          <input
            type="text"
            id="location"
            placeholder="Enter Location"
            value={location}
            onChange={handleLocationChange}
          />
        </label>
      </form>
    </>
  );
}
