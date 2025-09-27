import React from "react";
import { type UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({ id, name, username, email, address }) => {
  return (
    <div className="border rounded-md shadow p-4 bg-white">
      <h2 className="text-lg font-semibold mb-1">{name}</h2>
      <p className="text-gray-600 mb-1">@{username}</p>
      <p className="text-gray-700 mb-1">{email}</p>
      <p className="text-sm text-gray-500">
        {address.street}, {address.city}, {address.zipcode}
      </p>
      <span className="text-xs text-gray-400">User #{id}</span>
    </div>
  );
};

export default UserCard;
