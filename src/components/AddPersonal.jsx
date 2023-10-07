import Icon from '@mdi/react';
import { mdiChevronUp } from '@mdi/js';
import { mdiChevronDown } from '@mdi/js';
import { mdiAccount } from '@mdi/js';

export default function AddPersonal({
  handleChangeFullname,
  handleChangeEmail,
  handleChangePhonenumber,
  handleChangeAdress,
  person,
  isActive,
  toggleActive,
}) {
  return (
    <>
      {isActive ? (
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="personal">
            <Icon path={mdiAccount} size={1} />

            <h1>Personal Details</h1>

            <Icon path={mdiChevronUp} size={1} onClick={toggleActive} />
          </div>
          <label htmlFor="fullName">
            Full name:
            <input
              type="text"
              id="fullName"
              placeholder="Enter Full Name"
              value={person.fullname}
              onChange={handleChangeFullname}
            />
          </label>
          <label htmlFor="email">
            Email:
            <input
              type="text"
              id="email"
              placeholder="Enter Email"
              value={person.email}
              onChange={handleChangeEmail}
            />
          </label>
          <label htmlFor="phoneNumber">
            Phone number:
            <input
              type="tel"
              id="phoneNumber"
              placeholder="Enter Phone Number"
              value={person.phoneNumber}
              onChange={handleChangePhonenumber}
            />
          </label>
          <label htmlFor="adress">
            Adress:
            <input
              type="text"
              id="adress"
              placeholder="Enter Adress"
              value={person.adress}
              onChange={handleChangeAdress}
            />
          </label>
        </form>
      ) : (
        <form onClick={toggleActive}>
          <div className="personal">
            <Icon path={mdiAccount} size={1} />

            <h1>Personal Details</h1>

            <Icon path={mdiChevronDown} size={1} />
          </div>
        </form>
      )}
    </>
  );
}
