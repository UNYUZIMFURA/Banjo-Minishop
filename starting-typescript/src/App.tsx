import React from "react";
import NavBar from "./Components/NavBar";

const App: React.FC = () => {
  return (
    <div className="flex flex-col h-screen w-screen border-[5px] border-[gray]">
      <NavBar />
    </div>
  );
};

export default App;
