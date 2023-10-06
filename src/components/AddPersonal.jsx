import Icon from '@mdi/react';
import { mdiChevronUp } from '@mdi/js';
import { mdiChevronDown } from '@mdi/js';
import { mdiAccount } from '@mdi/js';
import { useState } from 'react';

export default function AddPersonal() {
  const [person, setPerson] = useState({
    fullname: '',
    email: '',
    phoneNumber: '',
    adress: '',
  });

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <div className="personal">
        <Icon path={mdiAccount} size={1} />

        <h1>Personal Details</h1>

        <Icon path={mdiChevronUp} size={1} />
      </div>
      <label htmlFor="fullName">
        Full name:
        <input
          type="text"
          id="fullName"
          placeholder="Enter Full Name"
          value={person.fullname}
          onChange={(e) => {
            const newPerson = { ...person, fullname: e.target.value };
            setPerson(newPerson);
          }}
        />
      </label>
      <label htmlFor="email">
        Email:
        <input
          type="text"
          id="email"
          placeholder="Enter Email"
          value={person.email}
          onChange={(e) => {
            const newPerson = { ...person, email: e.target.value };
            setPerson(newPerson);
          }}
        />
      </label>
      <label htmlFor="phoneNumber">
        Phone number:
        <input
          type="tel"
          id="phoneNumber"
          placeholder="Enter Phone Number"
          value={person.phoneNumber}
          onChange={(e) => {
            const newPerson = { ...person, phoneNumber: e.target.value };
            setPerson(newPerson);
          }}
        />
      </label>
      <label htmlFor="adress">
        Adress:
        <input
          type="text"
          id="adress"
          placeholder="Enter Adress"
          value={person.adress}
          onChange={(e) => {
            const newPerson = { ...person, adress: e.target.value };
            setPerson(newPerson);
          }}
        />
      </label>
    </form>
  );
}
