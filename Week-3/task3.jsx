import React from 'react';

const UserCard = ({ name, email }) => {
  return (
    <div className="border rounded-2xl p-4 shadow-lg max-w-sm bg-white">
      <h2 className="text-xl font-bold mb-2">{name}</h2>
      <p className="text-gray-600">{email}</p>
    </div>
  );
};

export default UserCard;
