import { useState } from 'react';

export default function Personal() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [adress, setAdress] = useState('');

  function handleFullNameChange(e) {
    setFullName(e.target.value);
  }
  function handleEmailChange(e) {
    setEmail(e.target.value);
  }
  function handlePhoneNumberChange(e) {
    setPhoneNumber(e.target.value);
  }
  function handleAdressChange(e) {
    setAdress(e.target.value);
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
            value={fullName}
            onChange={handleFullNameChange}
          />
        </label>
        <label htmlFor="email">
          Email:
          <input
            type="text"
            id="email"
            value={email}
            onChange={handleEmailChange}
          />
        </label>
        <label htmlFor="phoneNumber">
          Phone number:
          <input
            type="text"
            id="phoneNumber"
            value={phoneNumber}
            onChange={handlePhoneNumberChange}
          />
        </label>
        <label htmlFor="adress">
          Adress:
          <input
            type="text"
            id="adress"
            value={adress}
            onChange={handleAdressChange}
          />
        </label>
      </form>
    </>
  );
}
