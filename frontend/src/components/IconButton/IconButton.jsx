import React from "react";
import { styles } from "./styles.js";

export const IconButton = ({
  icon,
  tooltip = "tooltip 💡",
  haveTooltip = true,
  colorOnHover = "hover:text-dark-background hover:dark:text-light-background",
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
      {haveTooltip && (
        <span
          className={`pointer-events-none group-hover:scale-100 ${styles.tooltip} ${customTootlipStyles}`}
        >
          {tooltip}
        </span>
      )}
    </div>
  );
};
