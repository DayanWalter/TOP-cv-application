import { useState } from 'react';
import Icon from '@mdi/react';
import { mdiSchool } from '@mdi/js';
import { mdiChevronUp } from '@mdi/js';
import { mdiChevronDown } from '@mdi/js';

export default function Education({
  isActive,
  education,
  handleSchoolChange,
  handleDegreeChange,
  handleEduStartDateChange,
  handleEduEndDateChange,
  handleEduLocationChange,
}) {
  return (
    <>
      {isActive ? (
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="education">
            <Icon path={mdiSchool} size={1} />
            <h1>Education</h1>
            <Icon path={mdiChevronUp} size={1} />
          </div>
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
          <label htmlFor="startDateEdu">
            Start Date:
            <input
              type="tel"
              id="startDateEdu"
              placeholder="Enter Start Date"
              value={education.startDate}
              onChange={handleEduStartDateChange}
            />
          </label>
          <label htmlFor="endDateEdu">
            End Date:
            <input
              type="text"
              id="endDateEdu"
              placeholder="Enter End Date"
              value={education.endDate}
              onChange={handleEduEndDateChange}
            />
          </label>
          <label htmlFor="locationEdu">
            Location:
            <input
              type="text"
              id="locationEdu"
              placeholder="Enter Location"
              value={education.location}
              onChange={handleEduLocationChange}
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
          <div className="education">
            <Icon path={mdiSchool} size={1} />
            <h1>Education</h1>
            <Icon path={mdiChevronDown} size={1} />
          </div>
        </form>
      )}
    </>
  );
}
