import { useState } from 'react';
import Personal from './Personal';
import Education from './Education';
import Experience from './Experience';
import CV from './CV';

export default function App() {
  const [person, setPerson] = useState({
    fullname: '',
    email: '',
    phoneNumber: '',
    adress: '',
  });
  function handleFullNameChange(e) {
    const newPerson = { ...person, fullname: e.target.value };
    console.log(
      '🚀 ~ file: App.jsx:16 ~ handleFullNameChange ~ newPerson:',
      newPerson
    );

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

  return (
    <div className="app">
      <div className="left">
        <Personal
          person={person}
          fullNameChange={handleFullNameChange}
          emailChange={handleEmailChange}
          phoneNumberChange={handlePhoneNumberChange}
          adressChange={handleAdressChange}
        />
        {/* <Education isActive={true} /> */}
        {/* <Experience isActive={false} /> */}
      </div>
      <div className="right">
        <CV />{' '}
      </div>
    </div>
  );
}
