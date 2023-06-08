import React from "react";

export const HorizontalDivider = ({ customStyles }) => {
  return (
    <div
      className={`border-t-2 border-divider-light border-opacity-50 dark:border-divider-dark dark:border-opacity-50 ${customStyles}`}
    />
  );
};

export const VerticalDivider = ({ customStyles }) => {
  return (
    <div
      className={`border-r-2 border-divider-light border-opacity-50 dark:border-divider-dark dark:border-opacity-50 ${customStyles}`}
    />
  );
};
