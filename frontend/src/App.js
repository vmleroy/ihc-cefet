import React from "react";

const App = () => {
  const [message, setMessage] = React.useState("");
  fetch("http://localhost:1999/")
    .then((res) => res.json())
    .then((res) => setMessage(res.message));

  return <div className="bg-black font-bold text-red-800">{message}</div>;
};

export default App;
