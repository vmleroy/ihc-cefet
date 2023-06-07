import React from "react";
import { Outlet } from "react-router-dom";

export const Layout = () => {

  React.useEffect(() => {
    document.title = "Rede Social";
  }, []);

  return (
    <div className="w-creen h-screen text-light-secondary bg-light-background dark:text-dark-secondary dark:bg-dark-background">
      <Outlet />
    </div>
  );
};
