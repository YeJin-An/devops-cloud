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

  //const nextId = useRef(4);
  //const onCreate = () => {
  //  nextId.current += 1;
  //};
  return (
    <>
      {users.map((user) => (
        <User user={user} key={user.id} />
      ))}
    </>
  );
}

export default UserList;
