import React from "react";

export const ProfileCard = ({ avatarUrl, name, bio }) => {
  return (
    <div className="flex items-center justify-center">
      <div className="bg-gray-200 min-h-[17rem] min-w-[55rem] w-full max-w-[90%] text-black rounded-3xl p-6 flex items-center space-x-6 shadow-sm hover:shadow-lg cursor-pointer hover:scale-105 ">
        <img
          src={avatarUrl}
          alt={`foto do perfil ${name}`}
          className="w-60 h-50 rounded-full border-2 border-blue-500"
        />
        <div className="flex flex-col h-full justify-center flex-1">
          <h2 className="text-xl font-bold mb-1 text-blue-600">{name}</h2>
          <div className="mt-5">
            <p className="text-base">{bio || "Sem bio disponível."}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
