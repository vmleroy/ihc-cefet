import React from "react";

export const HorizontalDivider = ({ customStyles }) => {
  return (
    <div
      className={`w-full border-r-2 border-divider-light dark:border-divider-light ${customStyles}`}
    />
  );
};

export const VerticalDivider = ({ customStyles }) => {
  return (
    <div
      className={`h-full border-r-2 border-divider-light dark:border-divider-light ${customStyles}`}
    />
  );
};
