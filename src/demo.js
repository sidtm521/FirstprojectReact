import React, { useState } from "react";
import { AddUserForm } from "./forms/AddUserForm";
import { UserTable } from "./table/UserTable";
import { EditUserForm } from "./forms/EditUserForm";

const Demo = () => {
  const usersData = [
    { id: 1, name: "Siddharth", age: "23" },
    { id: 2, name: "Gulshan", age: "24" }
  ];

  const [users, setUsers] = useState(usersData);
  const [editing, setEditing] = useState(false);

  const initialFormState = { id: null, name: "", age: "" };
  const [currentUser, setCurrentUser] = useState(initialFormState);
  const addUser = (user) => {
    user.id = users.length + 1;
    setUsers([...users, user]);
  };

  const deleteUser = (id) => {
    setEditing(false);
    setUsers(users.filter((user) => user.id !== id));
  };

  const updateUser = (id, updatedUser) => {
    setEditing(false);
    setUsers(users.map((user) => (user.id === id ? updatedUser : user)));
  };

  const editRow = (user) => {
    setEditing(true);
    setCurrentUser({ id: user.id, name: user.name, age: user.age });
  };

  return (
    <div className="container">
      <h1>Register Form</h1>
      <hr></hr>
      <div className="flex-row">
        <div className="flex-large">
          {editing ? (
            <div>
              <h2>Edit user</h2>
              <EditUserForm
                editing={editing}
                setEditing={setEditing}
                currentUser={currentUser}
                updateUser={updateUser}
              />
            </div>
          ) : (
            <div>
              <h2>Add user</h2>
              <AddUserForm addUser={addUser} />
            </div>
          )}
        </div>
        <div className="flex-large">
          <h2>List of Users</h2>
          <UserTable users={users} editRow={editRow} deleteUser={deleteUser} />
        </div>
      </div>
    </div>
  );
};

export default Demo;

