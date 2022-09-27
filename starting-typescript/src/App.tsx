import React from "react";
import Product from "./Components/Product";
import NavBar from "./Components/NavBar";
import Piano from "./Images/piano.jpg";
import BMW from "./Images/bmw.jpg";
import Mercedez from "./Images/mercedez.jpg";
import Macbook from "./Images/macbook.jpg";

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center h-screen w-screen border-[5px] border-[gray]">
      <NavBar />
      <div className="flex justify-around flex-wrap w-[90%] border-[1px] border-[blue] mt-[1rem]">
        <Product img={Piano} id="1"/>
        <Product img={BMW} id="2"/>
        <Product img={Mercedez} id="3"/>
        <Product img={Macbook} id="4"/>
        <Product img={BMW} id="5"/>
        <Product img={Mercedez} id="6"/>
      </div>
    </div>
  );
};

export default App;
