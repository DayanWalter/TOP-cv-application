import { useState } from 'react';
import Icon from '@mdi/react';
import { mdiSchool } from '@mdi/js';
import { mdiChevronUp } from '@mdi/js';
import { mdiChevronDown } from '@mdi/js';
import { mdiPlus } from '@mdi/js';

export default function AddExperience({
  onAddExperience,
  isActive,
  toggleActive,
}) {
  const [experience, setExperience] = useState({
    company: '',
    position: '',
    startDate: '',
    endDate: '',
    location: '',
    description: '',
  });

  return (
    <>
      {isActive ? (
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="experience">
            <Icon path={mdiPlus} size={1} />

            <h1>Add Experience</h1>
          </div>
          <label htmlFor="company">
            Company:
            <input
              type="text"
              id="company"
              placeholder="e.g. Apple"
              value={experience.company}
              onChange={(e) => {
                const newExperience = {
                  ...experience,
                  company: e.target.value,
                };
                setExperience(newExperience);
              }}
            />
          </label>
          <label htmlFor="position">
            Position:
            <input
              type="text"
              id="position"
              placeholder="e.g. UX & UI Designer"
              value={experience.position}
              onChange={(e) => {
                const newExperience = {
                  ...experience,
                  position: e.target.value,
                };
                setExperience(newExperience);
              }}
            />
          </label>
          <label htmlFor="startDateExp">
            Start Date:
            <input
              type="tel"
              id="startDateExp"
              placeholder="e.g. 09/2020"
              value={experience.startDate}
              onChange={(e) => {
                const newExperience = {
                  ...experience,
                  startDate: e.target.value,
                };
                setExperience(newExperience);
              }}
            />
          </label>
          <label htmlFor="endDateExp">
            End Date:
            <input
              type="text"
              id="endDateExp"
              placeholder="e.g. 09/2023"
              value={experience.endDate}
              onChange={(e) => {
                const newExperience = {
                  ...experience,
                  endDate: e.target.value,
                };
                setExperience(newExperience);
              }}
            />
          </label>
          <label htmlFor="locationExp">
            Location:
            <input
              type="text"
              id="locationExp"
              placeholder="e.g. Kiel, Germany"
              value={experience.location}
              onChange={(e) => {
                const newExperience = {
                  ...experience,
                  location: e.target.value,
                };
                setExperience(newExperience);
              }}
            />
          </label>
          <label htmlFor="description">
            Description:
            <textarea
              type="text"
              id="description"
              placeholder="Enter Description"
              value={experience.description}
              onChange={(e) => {
                const newExperience = {
                  ...experience,
                  description: e.target.value,
                };
                setExperience(newExperience);
              }}
            />
          </label>
          <div className="button">
            <button
              className="save"
              onClick={() => {
                onAddExperience(experience);
                toggleActive();
              }}
            >
              Save
            </button>
          </div>
        </form>
      ) : (
        <></>
      )}
    </>
  );
}
