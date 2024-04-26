import React, { useState } from "react";

const AddUserForm = (props) => {
  const initialFormState = { id: null, name: "", age: "" };
  const [user, setUser] = useState(initialFormState);

  const handleInputChange = (event) => {
    const { name, value } = event.currentTarget;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!user.name || !user.age) return;

    props.addUser(user);
    setUser(initialFormState);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="formgroup">
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={user.name}
          onChange={handleInputChange}
          className="form-control"
          required
        />
      </div>
      <div className="formgroup">
        <label>Age</label>
        <input
          type="number"
          name="age"
          value={user.age}
          onChange={handleInputChange}
          className="form-control"
          required
        />
      </div>
      <button type="submit" className="btn btn-sm btn-secondary">
        Add new user
      </button>
    </form>
  );
};

export { AddUserForm };
