import React from "react";
import { RouterProvider } from "react-router-dom";

import { NavRouter } from "./routes";
import useDarkMode from "./hooks/useDarkMode";

const App = () => {
  const [message, setMessage] = React.useState("");
  // fetch("http://localhost:1999/")
  //   .then((res) => res.json())
  //   .then((res) => setMessage(res.message));

  const [darkMode, setDarkMode] = useDarkMode();

  return <RouterProvider router={NavRouter} />;

};

export default App;
