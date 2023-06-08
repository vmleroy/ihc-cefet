import React from "react";
import useDarkMode from "../../hooks/useDarkMode";
import { useNavigate } from "react-router-dom";
import { IconButton } from "../IconButton";
import { Divider } from "../Divider";
import { Sun, Moon } from "react-feather";

export const SideBar = () => {
  const navigate = useNavigate();

  const [darkMode, setDarkMode] = useDarkMode();
  
  const handleDarkMode = () => {
    setDarkMode(!darkMode);
    console.log("Dark Mode: ", darkMode);
  };

  const handleButtonClickNavigation = (url) => {
    navigate(url);
  };

  const handleButtonClickToOtherSite = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div className="left-0 top-0 flex h-screen w-20 flex-col gap-3 border-r-2 border-zinc-500 border-opacity-20 p-3">
      <div className="flex flex-col items-center">
        {darkMode ? (
          <IconButton
            icon={<Sun size={28} />}
            tooltip="Light Mode"
            onClickFunction={handleDarkMode}
          />
        ) : (
          <IconButton
            icon={<Moon size={28} />}
            tooltip="Dark Mode"
            onClickFunction={handleDarkMode}
          />
        )}
      </div>
    </div>
  );
};
