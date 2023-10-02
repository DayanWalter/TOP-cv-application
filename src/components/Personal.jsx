export default function Personal() {
  return (
    <>
      <h1>Personal Details</h1>
      <label htmlFor="fullName">
        Full name:
        <input type="text" id="fullName" />
      </label>
      <label htmlFor="email">
        Email:
        <input type="text" id="email" />
      </label>
      <label htmlFor="phoneNumber">
        Phone number:
        <input type="text" id="phoneNumber" />
      </label>
      <label htmlFor="adress">
        Adress:
        <input type="text" id="adress" />
      </label>
    </>
  );
}
