import { useState } from 'react';
import AddEducation from './AddEducation';
import EducationList from './EducationList';

let nextEduId = 2;
const exampleEdu = [
  {
    id: 0,
    school: 'Christian-Albrechts-Universität',
    degree: 'Bachelor of Science',
    startDate: '12/2017',
    endDate: '12/2020',
    location: 'Kiel, Germany',
  },
  {
    id: 1,
    school: 'Alexander von Humbold',
    degree: 'Master of Science',
    startDate: '12/2020',
    endDate: '12/2022',
    location: 'Berlin, Germany',
  },
];

export default function NewApp() {
  const [educationArray, setEducationArray] = useState(exampleEdu);

  function handleAddEducation(education) {
    setEducationArray([
      ...educationArray,
      {
        id: nextEduId++,
        school: education.school,
        degree: education.degree,
        startDate: education.startDate,
        endDate: education.endDate,
        location: education.location,
      },
    ]);
  }

  function handleChangeEducation(nextEducation) {
    setEducationArray(
      educationArray.map((e) => {
        if (e.id === nextEducation.id) {
          return nextEducation;
        } else {
          return e;
        }
      })
    );
  }

  function handleDeleteEducation(educationId) {
    setEducationArray(educationArray.filter((e) => e.id !== educationId));
  }

  return (
    <>
      <AddEducation onAddEducation={handleAddEducation} />
      <EducationList
        educationArray={educationArray}
        onChangeEducation={handleChangeEducation}
        onDeleteEducation={handleDeleteEducation}
      />
    </>
  );
}
