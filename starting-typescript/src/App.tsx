import React from "react";
import Product from "./Components/Product";
import NavBar from "./Components/NavBar";
import Piano from "./Images/piano.jpg"
import BMW from './Images/bmw.jpg'
import Mercedez from './Images/mercedez.jpg'
import Maccbook from './Images/macbook.jpg'

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center h-screen w-screen border-[5px] border-[gray]">
      <NavBar />
      <div className="flex justify-around flex-wrap h-[80vh] w-[90%] border-[1px] border-[blue]">
        <Product img={Piano}/>
        <Product img={BMW}/>
        <Product img={Mercedez}/>
      </div>
    </div>
  );
};

export default App;
