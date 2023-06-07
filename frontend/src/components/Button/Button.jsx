import React from "react";

export const Button = ({ label, onClick, customStyles }) => {
  return (
    <button
      onClick={onClick}
      className={`flex h-10 items-center justify-center rounded-lg border-2 
        border-light-primary bg-transparent font-archivoNarrow font-bold text-light-primary ${customStyles}
        hover:bg-light-primary hover:text-light-background dark:border-dark-primary dark:text-dark-primary dark:hover:bg-dark-primary dark:hover:text-dark-secondary`}
    >
      {label}
    </button>
  );
};
