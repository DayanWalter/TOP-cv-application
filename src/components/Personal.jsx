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
            placeholder="Enter Full Name"
            value={fullName}
            onChange={handleFullNameChange}
          />
        </label>
        <label htmlFor="email">
          Email:
          <input
            type="text"
            id="email"
            placeholder="Enter Email"
            value={email}
            onChange={handleEmailChange}
          />
        </label>
        <label htmlFor="phoneNumber">
          Phone number:
          <input
            type="tel"
            id="phoneNumber"
            placeholder="Enter Phone Number"
            value={phoneNumber}
            onChange={handlePhoneNumberChange}
          />
        </label>
        <label htmlFor="adress">
          Adress:
          <input
            type="text"
            id="adress"
            placeholder="Enter Adress"
            value={adress}
            onChange={handleAdressChange}
          />
        </label>
      </form>
    </>
  );
}
