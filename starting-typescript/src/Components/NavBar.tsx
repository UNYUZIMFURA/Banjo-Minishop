import React from "react";
import {BsCartPlusFill} from "react-icons/bs"

const NavBar:React.FC = () => {
  return <div className="relative flex justify-center items-center h-[10vh] w-full border-[1px] border-[blue]">
    <h1 className="text-[2rem] font-medium">Typescript Cart</h1>
    <span className="absolute right-[5%]"><BsCartPlusFill size={30}/>
    <div className=""></div>
    </span>

  </div>;
};

export default NavBar;
