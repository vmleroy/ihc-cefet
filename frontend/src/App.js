import React from "react";
import { RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";

import { NavRouter } from "./routes";
import useDarkMode from "./hooks/useDarkMode";

const queryClient = new QueryClient();
const App = () => {
  const [message, setMessage] = React.useState("");
  // fetch("http://localhost:1999/")
  //   .then((res) => res.json())
  //   .then((res) => setMessage(res.message));

  const [darkMode, setDarkMode] = useDarkMode();

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={NavRouter} />
    </QueryClientProvider>
  );
};

export default App;
