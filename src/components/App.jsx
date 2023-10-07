import { useState } from 'react';
import Personal from './Personal';
import Education from './Education';
import Experience from './Experience';
import CV from './CV';

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

export default function App() {
  // Personal.jsx
  const [person, setPerson] = useState({
    fullname: '',
    email: '',
    phoneNumber: '',
    adress: '',
  });

  function handleFullNameChange(e) {
    const newPerson = { ...person, fullname: e.target.value };
    setPerson(newPerson);
  }
  function handleEmailChange(e) {
    const newPerson = { ...person, email: e.target.value };
    setPerson(newPerson);
  }
  function handlePhoneNumberChange(e) {
    const newPerson = { ...person, phoneNumber: e.target.value };
    setPerson(newPerson);
  }
  function handleAdressChange(e) {
    const newPerson = { ...person, adress: e.target.value };
    setPerson(newPerson);
  }

  // Education.jsx
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
  function handleEduStartDateChange(e) {
    const newEducation = { ...education, startDate: e.target.value };
    setEducation(newEducation);
  }
  function handleEduEndDateChange(e) {
    const newEducation = { ...education, endDate: e.target.value };
    setEducation(newEducation);
  }
  function handleEduLocationChange(e) {
    const newEducation = { ...education, location: e.target.value };
    setEducation(newEducation);
  }

  // Experience.jsx
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
  function handleExpStartDateChange(e) {
    const newExperience = { ...experience, startDate: e.target.value };
    setExperience(newExperience);
  }
  function handleExpEndDateChange(e) {
    const newExperience = { ...experience, endDate: e.target.value };
    setExperience(newExperience);
  }
  function handleExpLocationChange(e) {
    const newExperience = { ...experience, location: e.target.value };
    setExperience(newExperience);
  }
  function handleDescriptionChange(e) {
    const newExperience = { ...experience, description: e.target.value };
    setExperience(newExperience);
  }

  // Drop Down state
  const [activeIndex, setActiveIndex] = useState(0);

  // Education Array
  const [educationArray, setEducationArray] = useState(exampleEdu);

  function handleAddEducation() {
    setEducationArray([
      ...educationArray,
      {
        id: nextEduId++,
        ...education,
      },
    ]);
    const newEducation = {
      school: '',
      degree: '',
      startDate: '',
      endDate: '',
      location: '',
    };
    setEducation(newEducation);
  }

  // Experience Array

  const [experienceArray, setExperienceArray] = useState(exampleExp);

  function handleAddExperience() {
    setExperienceArray([
      ...experienceArray,
      {
        id: nextExpId++,
        ...experience,
      },
    ]);
    const newExperience = {
      company: '',
      position: '',
      startDate: '',
      endDate: '',
      location: '',
      description: '',
    };
    setExperience(newExperience);
  }

  // Show Form
  const [activeFormIndex, setActiveFormIndex] = useState(0);

  return (
    <div className="app">
      <div className="left">
        <Personal
          // Drop down
          isActive={activeIndex === 0}
          onShow={() =>
            activeIndex === 0 ? setActiveIndex(10) : setActiveIndex(0)
          }
          person={person}
          handleFullNameChange={handleFullNameChange}
          handleEmailChange={handleEmailChange}
          handlePhoneNumberChange={handlePhoneNumberChange}
          handleAdressChange={handleAdressChange}
        />
        <Education
          // Drop down
          isActive={activeIndex === 1}
          onShow={() => {
            activeIndex === 1
              ? setActiveIndex(10)
              : (setActiveIndex(1), setActiveFormIndex(10));
          }}
          formActive={activeFormIndex === 1}
          formShow={() => {
            setActiveFormIndex(1);
            setActiveIndex(10);
          }}
          education={education}
          handleSchoolChange={handleSchoolChange}
          handleDegreeChange={handleDegreeChange}
          handleEduStartDateChange={handleEduStartDateChange}
          handleEduEndDateChange={handleEduEndDateChange}
          handleEduLocationChange={handleEduLocationChange}
          handleAddEducation={handleAddEducation}
          educationArray={educationArray}
        />
        <Experience
          // Drop down
          isActive={activeIndex === 2}
          onShow={() => {
            activeIndex === 2
              ? setActiveIndex(10)
              : (setActiveIndex(2), setActiveFormIndex(10));
          }}
          formActive={activeFormIndex === 2}
          formShow={() => {
            setActiveFormIndex(2);
            setActiveIndex(10);
          }}
          experience={experience}
          handleCompanyChange={handleCompanyChange}
          handlePositionChange={handlePositionChange}
          handleExpStartDateChange={handleExpStartDateChange}
          handleExpEndDateChange={handleExpEndDateChange}
          handleExpLocationChange={handleExpLocationChange}
          handleDescriptionChange={handleDescriptionChange}
          handleAddExperience={handleAddExperience}
          experienceArray={experienceArray}
        />
      </div>
      <div className="right">
        <CV
          person={person}
          education={education}
          experience={experience}
          educationArray={educationArray}
          experienceArray={experienceArray}
        />
      </div>
    </div>
  );
}
