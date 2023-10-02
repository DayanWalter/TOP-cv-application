import { useState } from 'react';

export default function Experience() {
  const [experience, setExperience] = useState({
    company: '',
    position: '',
    startDate: '',
    endDate: '',
    location: '',
    description: '',
  });

  function handleCompanyChange(e) {
    const newExperience = { ...experience, company: e.target.value };
    setExperience(newExperience);
  }
  function handlePositionChange(e) {
    const newExperience = { ...experience, position: e.target.value };
    setExperience(newExperience);
  }
  function handleStartDateChange(e) {
    const newExperience = { ...experience, startDate: e.target.value };
    setExperience(newExperience);
  }
  function handleEndDateChange(e) {
    const newExperience = { ...experience, endDate: e.target.value };
    setExperience(newExperience);
  }
  function handleLocationChange(e) {
    const newExperience = { ...experience, location: e.target.value };
    setExperience(newExperience);
  }
  function handleDescriptionChange(e) {
    const newExperience = { ...experience, description: e.target.value };
    setExperience(newExperience);
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
            value={experience.company}
            onChange={handleCompanyChange}
          />
        </label>
        <label htmlFor="position">
          Position title:
          <input
            type="text"
            id="position"
            placeholder="Enter Position Title"
            value={experience.position}
            onChange={handlePositionChange}
          />
        </label>
        <label htmlFor="startDate">
          Start Date:
          <input
            type="tel"
            id="startDate"
            placeholder="Enter Start Date"
            value={experience.startDate}
            onChange={handleStartDateChange}
          />
        </label>
        <label htmlFor="endDate">
          End Date:
          <input
            type="text"
            id="endDate"
            placeholder="Enter End Date"
            value={experience.endDate}
            onChange={handleEndDateChange}
          />
        </label>
        <label htmlFor="location">
          Location:
          <input
            type="text"
            id="location"
            placeholder="Enter Location"
            value={experience.location}
            onChange={handleLocationChange}
          />
        </label>
        <label htmlFor="description">
          Description:
          <textarea
            type="text"
            id="description"
            placeholder="Enter Description"
            value={experience.description}
            onChange={handleDescriptionChange}
          />
        </label>
      </form>
    </>
  );
}
