import { useState } from 'react';

export default function Education() {
  const [education, setEducation] = useState({
    school: '',
    degree: '',
    startDate: '',
    endDate: '',
    location: '',
  });

  function handleSchoolChange(e) {
    const newEducation = { ...education, school: e.target.value };
    setEducation(newEducation);
  }
  function handleDegreeChange(e) {
    const newEducation = { ...education, degree: e.target.value };
    setEducation(newEducation);
  }
  function handleStartDateChange(e) {
    const newEducation = { ...education, startDate: e.target.value };
    setEducation(newEducation);
  }
  function handleEndDateChange(e) {
    const newEducation = { ...education, endDate: e.target.value };
    setEducation(newEducation);
  }
  function handleLocationChange(e) {
    const newEducation = { ...education, location: e.target.value };
    setEducation(newEducation);
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
            value={education.school}
            onChange={handleSchoolChange}
          />
        </label>
        <label htmlFor="degree">
          Degree:
          <input
            type="text"
            id="degree"
            placeholder="Enter Degree"
            value={education.degree}
            onChange={handleDegreeChange}
          />
        </label>
        <label htmlFor="startDate">
          Start Date:
          <input
            type="tel"
            id="startDate"
            placeholder="Enter Start Date"
            value={education.startDate}
            onChange={handleStartDateChange}
          />
        </label>
        <label htmlFor="endDate">
          End Date:
          <input
            type="text"
            id="endDate"
            placeholder="Enter End Date"
            value={education.endDate}
            onChange={handleEndDateChange}
          />
        </label>
        <label htmlFor="location">
          Location:
          <input
            type="text"
            id="location"
            placeholder="Enter Location"
            value={education.location}
            onChange={handleLocationChange}
          />
        </label>
      </form>
    </>
  );
}
