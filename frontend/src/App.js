import React from "react";
import { NavRoutes } from "./routes";

const App = () => {
  const [message, setMessage] = React.useState("");
  // fetch("http://localhost:1999/")
  //   .then((res) => res.json())
  //   .then((res) => setMessage(res.message));

  return (
    <NavRoutes />
  );
};

export default App;
