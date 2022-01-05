import React from "react";

function User({ user }) {
  return (
    <div>
      <b>{user.username}</b>
      <span>({user.email})</span>
    </div>
  );
}

function UserList() {
  const users = [
    {
      id: 1,
      username: "user1",
      email: "user1@gmail.com",
    },
    {
      id: 2,
      username: "user2",
      email: "user2@email.com",
    },
  ];

  return (
    <>
      <User user={users[0]} />
      <User user={users[1]} />
    </>
  );
}

export default UserList;
