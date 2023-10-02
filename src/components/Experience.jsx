import { useState } from 'react';

export default function Experience() {
  const [company, setCompany] = useState('');
  const [position, setPosition] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');

  function handleCompanyChange(e) {
    setCompany(e.target.value);
  }
  function handlePositionChange(e) {
    setPosition(e.target.value);
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
  function handleDescriptionChange(e) {
    setDescription(e.target.value);
  }

  return (
    <>
      <form onSubmit={(e) => e.preventDefault()}>
        <h1>Experience</h1>
        <label htmlFor="company">
          Company name:
          <input
            type="text"
            id="company"
            placeholder="Enter Company Name"
            value={company}
            onChange={handleCompanyChange}
          />
        </label>
        <label htmlFor="position">
          Position title:
          <input
            type="text"
            id="position"
            placeholder="Enter Position Title"
            value={position}
            onChange={handlePositionChange}
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
        <label htmlFor="description">
          Description:
          <textarea
            type="text"
            id="description"
            placeholder="Enter Description"
            value={description}
            onChange={handleDescriptionChange}
          />
        </label>
      </form>
    </>
  );
}
