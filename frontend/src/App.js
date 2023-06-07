import React from "react";

const App = () => {
  const [message, setMessage] = React.useState("");
  // fetch("http://localhost:1999/")
  //   .then((res) => res.json())
  //   .then((res) => setMessage(res.message));

  return (
    <div className="bg-black font-bold text-red-800">{message}
      <div className="bg-black font-archivoNarrow text-light-primary">Hello World</div>
    </div>
  );
};

export default App;
