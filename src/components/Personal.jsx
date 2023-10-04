import Icon from '@mdi/react';
import { mdiChevronUp } from '@mdi/js';
import { mdiChevronDown } from '@mdi/js';
import { mdiAccount } from '@mdi/js';

export default function Personal({
  handleFullNameChange,
  handleEmailChange,
  handlePhoneNumberChange,
  handleAdressChange,
  person,
  isActive,
  onShow,
}) {
  return (
    <>
      {isActive ? (
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="personal">
            <Icon path={mdiAccount} size={1} />

            <h1>Personal Details</h1>

            <Icon path={mdiChevronUp} size={1} onClick={onShow} />
          </div>
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
      ) : (
        <form>
          <div className="personal">
            <Icon path={mdiAccount} size={1} />

            <h1>Personal Details</h1>

            <Icon path={mdiChevronDown} size={1} onClick={onShow} />
          </div>
        </form>
      )}
    </>
  );
}
