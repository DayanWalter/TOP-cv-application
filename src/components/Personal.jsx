import { useState } from 'react';

export default function Personal() {
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

  return (
    <>
      <form onSubmit={(e) => e.preventDefault()}>
        <h1>Personal Details</h1>
        <label htmlFor="fullName">
          Full name:
          <input
            type="text"
            id="fullName"
            placeholder="Enter Full Name"
            value={person.fullname}
            onChange={handleFullNameChange}
          />
        </label>
        <label htmlFor="email">
          Email:
          <input
            type="text"
            id="email"
            placeholder="Enter Email"
            value={person.email}
            onChange={handleEmailChange}
          />
        </label>
        <label htmlFor="phoneNumber">
          Phone number:
          <input
            type="tel"
            id="phoneNumber"
            placeholder="Enter Phone Number"
            value={person.phoneNumber}
            onChange={handlePhoneNumberChange}
          />
        </label>
        <label htmlFor="adress">
          Adress:
          <input
            type="text"
            id="adress"
            placeholder="Enter Adress"
            value={person.adress}
            onChange={handleAdressChange}
          />
        </label>
      </form>
    </>
  );
}
