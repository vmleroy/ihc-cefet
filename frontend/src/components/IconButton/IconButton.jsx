import React from "react";
import { styles } from "./styles.js";

export const IconButton = ({
  icon,
  tooltip = "tooltip 💡",
  colorOnHover = "hover:text-light-contrast hover:dark:text-dark-contrast",
  onClickFunction,
  customButtonStyles = "",
  customTootlipStyles = "",
  ...props
}) => {
  return (
    <div
      className={`group z-50 ${styles.icon} ${colorOnHover} ${customButtonStyles}`}
      onClick={onClickFunction}
    >
      {icon}
      <span
        className={`pointer-events-none group-hover:scale-100 ${styles.tooltip} ${customTootlipStyles}`}
      >
        {tooltip}
      </span>
    </div>
  );
};