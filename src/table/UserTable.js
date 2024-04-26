import React from "react";

const UserTable = (props) => {
  const handleDeleteUser = (id) => {
    let answer = window.confirm("Are you sure?");

    if (answer) {
      props.deleteUser(id);
    }
  };
  return (
    <table className="table">
      <thead className="thead-dark">
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {props.users.length > 0 ? (
          props.users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.age}</td>
              <td>
                <button
                  onClick={() => {
                    props.editRow(user);
                  }}
                  className="btn btn-sm btn-secondary"
                >
                  Edit
                </button>
                <button
                  className="btn btn-sm btn-secondary"
                  onClick={() => handleDeleteUser(user.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={3}>No users</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export { UserTable };
