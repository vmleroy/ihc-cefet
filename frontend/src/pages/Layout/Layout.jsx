import React from "react";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  React.useEffect(() => {
    document.title = "Rede Social";
  }, []);

  return (
    <div
      className="h-screen w-screen bg-light-background font-archivoNarrow text-light-secondary transition-all 
      duration-100 dark:bg-dark-background dark:text-dark-secondary"
    >
      <Outlet />
    </div>
  );
};
