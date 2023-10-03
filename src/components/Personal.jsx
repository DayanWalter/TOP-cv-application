import { useState } from 'react';

export default function Personal({
  handleFullNameChange,
  handleEmailChange,
  handlePhoneNumberChange,
  handleAdressChange,
  ...person
}) {
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
          {console.log('🚀 ~ file: Personal.jsx:21 ~ person:', person)}
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
