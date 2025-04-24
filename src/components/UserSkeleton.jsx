import React from "react";

export function UserSkeleton() {
  return (
    <div className="flex items-center justify-center p-4">
      <div className=" bg-[#1F1F1F] min-h-[22rem] min-w-[60rem] w-full max-w-[90%] rounded-3xl p-6 flex items-center animate-pulse">
        {/* Avatar */}
        <div className="w-60 h-60 rounded-full border-2bg-gray-700 bg-gray-700" />
        {/* Nome */}

        {/* Bio (duas linhas) */}
        <div className="flex flex-col h-full justify-center flex-1">
          <div className="h-4 bg-gray-700 rounded w-2/3 mx-auto"></div>
          <div className="mt-5">
            <div className="h-4 bg-gray-700 rounded mb-2 w-5/6 mx-auto"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
