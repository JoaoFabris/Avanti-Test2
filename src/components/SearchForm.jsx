import React from "react";
import { FaSistrix } from "react-icons/fa";
import { useEffect, useRef } from "react";

export const SearchForm = ({ userName, onChange, onSearch, loading }) => {
  const inputRef = useRef(null);

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !loading) {
      e.preventDefault();
      onSearch();
      onChange(""); // Limpa o valor
    }

    if (e.key === "Esc") {
      e.preventDefault();
      inputRef.current.focus(); // Mantém o foco no input
    }
  };

  // Foco automático no input ao carregar
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div className="relative max-w-xl mx-auto mb-4">
      <input
        type="text"
        ref={inputRef}
        value={userName}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={handleKeyPress}
        placeholder="Digite um usuário do GitHub"
        className="w-full text-black h-14 pl-6 pr-24 text-lg rounded-lg border-2 border-gray-300 focus:outline-none focus:border-blue-500 focus:ring-2 duration-200 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-white"
        disabled={loading}
      />
      <button
        onClick={onSearch}
        className="absolute top-1/2 right-0 -translate-y-1/2 bg-blue-600 w-16 h-14 rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors hover:scale-105"
        disabled={loading}
      >
        {loading ? (
          <svg
            className="w-8 h-8 animate-spin text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
            />
          </svg>
        ) : (
          <FaSistrix className="w-8 h-8 text-white" />
        )}
      </button>
    </div>
  );
};
