import { useState } from 'react';

export default function EducationList({
  educationArray,
  onChangeEducation,
  onDeleteEducation,
}) {
  return (
    <ul>
      {educationArray.map((entry) => (
        <li key={entry.id}>
          <Task
            entry={entry}
            onChange={onChangeEducation}
            onDelete={onDeleteEducation}
          />
        </li>
      ))}
    </ul>
  );
}

function Task({ entry, onChange, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  let educationContent;
  if (isEditing) {
    educationContent = (
      <>
        <input
          value={entry.school}
          onChange={(e) => {
            onChange({
              ...entry,
              school: e.target.value,
            });
          }}
        />
        <button onClick={() => setIsEditing(false)}>Save</button>
      </>
    );
  } else {
    educationContent = (
      <>
        {entry.school}
        <button onClick={() => setIsEditing(true)}>Edit</button>
      </>
    );
  }

  return (
    <label>
      {/* <input
        type="checkbox"
        checked={todo.done}
        onChange={e => {
          onChange({
            ...todo,
            done: e.target.checked
          });
        }}
      /> */}

      {educationContent}

      <button onClick={() => onDelete(entry.id)}>Delete</button>
    </label>
  );
}
