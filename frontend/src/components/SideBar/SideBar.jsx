import React from "react";
import { useNavigate } from "react-router-dom";

import useDarkMode from "../../hooks/useDarkMode";

import { InsideLinks } from "../../utils";

import * as Icon from "react-feather";
import { IconButton } from "../IconButton";
import { HorizontalDivider as Divider } from "../Divider";

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
    <div className="left-0 top-0 flex h-screen w-16 flex-col gap-3 border-r-2 border-zinc-500 border-opacity-20 p-3 bg-light-background dark:bg-dark-background">
      <div className="flex flex-col items-center">
        <IconButton
          icon={<Icon.User size={24} />}
          tooltip="Profile"
          onClickFunction={() => handleButtonClickNavigation(InsideLinks.userProfile)}
        />
      </div>        
      <Divider customStyles="w-full"/>
      <div className="flex flex-col items-center gap-2">
        <IconButton
          icon={<Icon.Home size={24} />}
          tooltip="Home"
          onClickFunction={() => handleButtonClickNavigation(InsideLinks.home)}
        />
        <IconButton
          icon={<Icon.LogOut size={24} />}
          tooltip="Logout"
          onClickFunction={() => handleButtonClickNavigation(InsideLinks.login)}
        />
      </div>
      <Divider customStyles="w-full"/>
      <div className="flex flex-col items-center">
        {darkMode ? (
          <IconButton
            icon={<Icon.Sun size={24} />}
            tooltip="Light Mode"
            customButtonStyles="text-light-background"
            onClickFunction={handleDarkMode}
          />
        ) : (
          <IconButton
            icon={<Icon.Moon size={24} />}
            tooltip="Dark Mode"
            customButtonStyles="text-dark-background"
            onClickFunction={handleDarkMode}
          />
        )}
      </div>
    </div>
  );
};
