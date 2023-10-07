import { useState } from 'react';
import Icon from '@mdi/react';
import { mdiBriefcaseVariant } from '@mdi/js';
import { mdiChevronUp } from '@mdi/js';
import { mdiChevronDown } from '@mdi/js';
import { mdiPlus } from '@mdi/js';

export default function ExperienceList({
  experienceArray,
  onChangeExperience,
  onDeleteExperience,
  isActive,
  toggleActive,
  setAddExpActive,
}) {
  return (
    <>
      {isActive ? (
        <>
          <div className="openEntry" onClick={toggleActive}>
            <div className="experience">
              <Icon path={mdiBriefcaseVariant} size={1} />
              <h1>Experience</h1>
              <Icon path={mdiChevronUp} size={1} />
            </div>
          </div>

          <ul>
            {experienceArray.map((entry) => (
              <li key={entry.id}>
                <ExpEntry
                  entry={entry}
                  onChange={onChangeExperience}
                  onDelete={onDeleteExperience}
                />
              </li>
            ))}
          </ul>

          <div className="addEntry">
            <div className="addExperience">
              <button className="addButton" onClick={setAddExpActive}>
                Add Experience
              </button>
            </div>
          </div>
        </>
      ) : (
        <form onClick={toggleActive}>
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

function ExpEntry({ entry, onChange, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  let experienceContent;

  if (isEditing) {
    experienceContent = (
      <>
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="experience">
            {/* <Icon path={mdiPlus} size={1} /> */}

            <h1>Edit Experience</h1>
          </div>
          <label htmlFor="company">
            Company:
            <input
              type="text"
              id="company"
              placeholder="e.g. Google. Inc."
              value={entry.company}
              onChange={(e) => {
                onChange({
                  ...entry,
                  company: e.target.value,
                });
              }}
            />
          </label>
          <label htmlFor="position">
            Position:
            <input
              type="text"
              id="position"
              placeholder="e.g. React Developer"
              value={entry.position}
              onChange={(e) => {
                onChange({
                  ...entry,
                  position: e.target.value,
                });
              }}
            />
          </label>
          <label htmlFor="startDateExp">
            Start Date:
            <input
              type="tel"
              id="startDateExp"
              placeholder="e.g. 09/2020"
              value={entry.startDate}
              onChange={(e) => {
                onChange({
                  ...entry,
                  startDate: e.target.value,
                });
              }}
            />
          </label>
          <label htmlFor="endDateExp">
            End Date:
            <input
              type="text"
              id="endDateExp"
              placeholder="e.g. 09/2023"
              value={entry.endDate}
              onChange={(e) => {
                onChange({
                  ...entry,
                  endDate: e.target.value,
                });
              }}
            />
          </label>
          <label htmlFor="locationExp">
            Location:
            <input
              type="text"
              id="locationExp"
              placeholder="e.g. Kiel, Germany"
              value={entry.location}
              onChange={(e) => {
                onChange({
                  ...entry,
                  location: e.target.value,
                });
              }}
            />
          </label>
          <label htmlFor="description">
            Description:
            <textarea
              type="text"
              id="description"
              placeholder="Enter Description"
              value={entry.description}
              onChange={(e) => {
                onChange({
                  ...entry,
                  description: e.target.value,
                });
              }}
            />
          </label>
          <div className="button">
            <button className="delete" onClick={() => onDelete(entry.id)}>
              Delete
            </button>
            <button
              className="save"
              onClick={() => {
                setIsEditing(false);
              }}
            >
              Save
            </button>
          </div>
        </form>
      </>
    );
  } else {
    experienceContent = (
      <>
        <div className="entry" onClick={() => setIsEditing(true)}>
          <p>{entry.company}</p>
        </div>
      </>
    );
  }

  return <label key={entry.id}>{experienceContent}</label>;
}
