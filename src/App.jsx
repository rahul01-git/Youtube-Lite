import React from "react";
import { AppContext } from "./context/contextApi";

const App = () => {
  return (
    <AppContext>
      <div className="text-red-500">App</div>
    </AppContext>
  );
};

export default App;
