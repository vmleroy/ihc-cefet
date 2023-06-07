import React from "react";
import { styles } from "./styles";

export const SideBarIcon = ({
  icon,
  tooltip = "tooltip 💡",
  colorOnHover = "hover:text-light-contrast hover:dark:text-dark-contrast",
  onClickFunction,
  ...props
}) => {
  return (
    <div
      className={`group z-50 ${styles.icon} ${colorOnHover}`}
      onClick={onClickFunction}
    >
      {icon}
      <span
        className={`pointer-events-none group-hover:scale-100 ${styles.tooltip} `}
      >
        {tooltip}
      </span>
    </div>
  );
};
