import { useState } from 'react';
import AddEducation from './AddEducation';
import EducationList from './EducationList';
import AddPersonal from './AddPersonal';
import AddExperience from './AddExperience';
import ExperienceList from './ExperienceList';
import CV from './CV';

const examplePerson = {
  fullname: 'John Reed',
  email: 'j.reed@power.com',
  phoneNumber: '+49 4321 335698',
  adress: 'Berlin, Germany',
};

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

let nextExpId = 2;
const exampleExp = [
  {
    id: 0,
    company: 'Umbrella Inc.',
    position: 'UI Designer',
    startDate: '12/2020',
    endDate: '12/2021',
    location: 'Berlin, Germany',
    description: 'Designing UI',
  },
  {
    id: 1,
    company: 'Apple',
    position: 'UI & UX Designer',
    startDate: '12/2021',
    endDate: 'present',
    location: 'California, US',
    description: 'Designing UI and UX',
  },
];

export default function NewApp() {
  const [educationArray, setEducationArray] = useState(exampleEdu);
  const [experienceArray, setExperienceArray] = useState(exampleExp);
  const [person, setPerson] = useState(examplePerson);

  // function handleChangePerson()
  function handleChangeFullname(e) {
    const newPerson = { ...person, fullname: e.target.value };
    setPerson(newPerson);
  }
  function handleChangeEmail(e) {
    const newPerson = { ...person, email: e.target.value };
    setPerson(newPerson);
  }
  function handleChangePhonenumber(e) {
    const newPerson = { ...person, phoneNumber: e.target.value };
    setPerson(newPerson);
  }
  function handleChangeAdress(e) {
    const newPerson = { ...person, adress: e.target.value };
    setPerson(newPerson);
  }

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
  function handleAddExperience(experience) {
    setExperienceArray([
      ...experienceArray,
      {
        id: nextExpId++,
        company: experience.company,
        position: experience.position,
        startDate: experience.startDate,
        endDate: experience.endDate,
        location: experience.location,
        description: experience.description,
      },
    ]);
  }
  function handleChangeExperience(nextExperience) {
    setExperienceArray(
      experienceArray.map((e) => {
        if (e.id === nextExperience.id) {
          return nextExperience;
        } else {
          return e;
        }
      })
    );
  }
  function handleDeleteExperience(experienceId) {
    setExperienceArray(experienceArray.filter((e) => e.id !== experienceId));
  }
  return (
    <>
      <div className="app">
        <div className="left">
          <AddPersonal
            person={person}
            handleChangeFullname={handleChangeFullname}
            handleChangeEmail={handleChangeEmail}
            handleChangePhonenumber={handleChangePhonenumber}
            handleChangeAdress={handleChangeAdress}
          />

          <AddEducation onAddEducation={handleAddEducation} />
          <EducationList
            educationArray={educationArray}
            onChangeEducation={handleChangeEducation}
            onDeleteEducation={handleDeleteEducation}
          />

          <AddExperience onAddExperience={handleAddExperience} />
          <ExperienceList
            experienceArray={experienceArray}
            onChangeExperience={handleChangeExperience}
            onDeleteExperience={handleDeleteExperience}
          />
        </div>
        <div className="right">
          <CV
            person={person}
            educationArray={educationArray}
            experienceArray={experienceArray}
          />
        </div>
      </div>
    </>
  );
}
