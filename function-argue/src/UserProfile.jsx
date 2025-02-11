import React from "react";

const UserProfile = (prop) => {
  return (
    <div>
      UserProfile Assignment
      <p>My name is {prop.name}</p>
      <p>My email address is {prop.email}</p>
      <p>I am {prop.age} years old.</p>
    </div>
  );
};

export default UserProfile;
