import { useState } from 'react';
import Icon from '@mdi/react';
import { mdiSchool } from '@mdi/js';
import { mdiChevronUp } from '@mdi/js';
import { mdiChevronDown } from '@mdi/js';
import { mdiPlus } from '@mdi/js';

export default function EducationList({
  educationArray,
  onChangeEducation,
  onDeleteEducation,
  isActive,
  toggleActive,
  setAddEduActive,
}) {
  return (
    <>
      {isActive ? (
        <>
          <div className="openEntry" onClick={toggleActive}>
            <div className="education">
              <Icon path={mdiSchool} size={1} />
              <h1>Education</h1>
              <Icon path={mdiChevronUp} size={1} onClick={toggleActive} />
            </div>
          </div>

          <ul>
            {educationArray.map((entry) => (
              <li key={entry.id}>
                <EduEntry
                  entry={entry}
                  onChange={onChangeEducation}
                  onDelete={onDeleteEducation}
                />
              </li>
            ))}
          </ul>

          <div className="addEntry">
            <div className="addEducation">
              <button className="addButton" onClick={setAddEduActive}>
                Add Education
              </button>
            </div>
          </div>
        </>
      ) : (
        <form onClick={toggleActive}>
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

function EduEntry({ entry, onChange, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  let educationContent;

  {
    isEditing
      ? (educationContent = (
          <>
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="education">
                {/* <Icon path={mdiPlus} size={1} /> */}

                <h1>Edit Education</h1>
              </div>
              <label htmlFor="school">
                School:
                <input
                  type="text"
                  id="school"
                  placeholder="e.g. Christian-Albrechts-Universität"
                  value={entry.school}
                  onChange={(e) => {
                    onChange({
                      ...entry,
                      school: e.target.value,
                    });
                  }}
                />
              </label>
              <label htmlFor="degree">
                Degree:
                <input
                  type="text"
                  id="degree"
                  placeholder="e.g. Bachelor of Science"
                  value={entry.degree}
                  onChange={(e) => {
                    onChange({
                      ...entry,
                      degree: e.target.value,
                    });
                  }}
                />
              </label>
              <label htmlFor="startDateEdu">
                Start Date:
                <input
                  type="tel"
                  id="startDateEdu"
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
              <label htmlFor="endDateEdu">
                End Date:
                <input
                  type="text"
                  id="endDateEdu"
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
              <label htmlFor="locationEdu">
                Location:
                <input
                  type="text"
                  id="locationEdu"
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
        ))
      : (educationContent = (
          <>
            <div className="entry" onClick={() => setIsEditing(true)}>
              <p>{entry.school}</p>
            </div>
          </>
        ));
  }
  return <label key={entry.id}>{educationContent}</label>;
}
