import { useState } from 'react';
import Icon from '@mdi/react';
import { mdiBriefcaseVariant } from '@mdi/js';
import { mdiChevronUp } from '@mdi/js';
import { mdiChevronDown } from '@mdi/js';

export default function Experience({ isActive }) {
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
      {isActive ? (
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="experience">
            <Icon path={mdiBriefcaseVariant} size={1} />
            <h1>Experience</h1>
            <Icon path={mdiChevronUp} size={1} />
          </div>
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
          <label htmlFor="startDateExp">
            Start Date:
            <input
              type="tel"
              id="startDateExp"
              placeholder="Enter Start Date"
              value={experience.startDate}
              onChange={handleStartDateChange}
            />
          </label>
          <label htmlFor="endDateExp">
            End Date:
            <input
              type="text"
              id="endDateExp"
              placeholder="Enter End Date"
              value={experience.endDate}
              onChange={handleEndDateChange}
            />
          </label>
          <label htmlFor="locationExp">
            Location:
            <input
              type="text"
              id="locationExp"
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
          <div className="button">
            <button className="delete">Delete</button>
            <button className="cancel">Cancel</button>
            <button className="save">Save</button>
          </div>
        </form>
      ) : (
        <form>
          <div className="experience">
            <Icon path={mdiBriefcaseVariant} size={1} />
            <h1>Experience</h1>
            <Icon path={mdiChevronDown} size={1} />
          </div>
        </form>
      )}
    </>
  );
}
