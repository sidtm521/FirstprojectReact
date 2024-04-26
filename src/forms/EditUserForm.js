import React, { useState, useEffect } from "react";

const EditUserForm = (props) => {
  const [user, setUser] = useState(props.currentUser);

  useEffect(() => {
    setUser(props.currentUser);
  }, [props]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!user.name || !user.age) return;
    props.updateUser(user.id, user);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
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

      <div className="form-group">
        <label>age</label>
        <input
          type="number"
          name="age"
          value={user.age}
          onChange={handleInputChange}
          className="form-control"
          required
        />
      </div>
      <button className="btn btn-sm btn-secondary">Update user</button>
      <button
        onClick={() => props.setEditing(false)}
        className="btn btn-sm btn-light"
      >
        Cancel
      </button>
    </form>
  );
};

export { EditUserForm };
