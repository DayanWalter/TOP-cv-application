import { useState } from 'react';
import Personal from './Personal';
import Education from './Education';
import Experience from './Experience';
import CV from './CV';

export default function App() {
  // Personal
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

  // Education
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

  // Experience
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

  return (
    <div className="app">
      <div className="left">
        <Personal
          isActive={false}
          person={person}
          handleFullNameChange={handleFullNameChange}
          handleEmailChange={handleEmailChange}
          handlePhoneNumberChange={handlePhoneNumberChange}
          handleAdressChange={handleAdressChange}
        />
        <Education
          isActive={false}
          education={education}
          handleSchoolChange={handleSchoolChange}
          handleDegreeChange={handleDegreeChange}
          handleEduStartDateChange={handleEduStartDateChange}
          handleEduEndDateChange={handleEduEndDateChange}
          handleEduLocationChange={handleEduLocationChange}
        />
        <Experience
          isActive={true}
          experience={experience}
          handleCompanyChange={handleCompanyChange}
          handlePositionChange={handlePositionChange}
          handleExpStartDateChange={handleExpStartDateChange}
          handleExpEndDateChange={handleExpEndDateChange}
          handleExpLocationChange={handleExpLocationChange}
          handleDescriptionChange={handleDescriptionChange}
        />
      </div>
      <div className="right">
        <CV person={person} education={education} experience={experience} />
      </div>
    </div>
  );
}
