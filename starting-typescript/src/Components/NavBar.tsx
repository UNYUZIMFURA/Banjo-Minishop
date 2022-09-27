import React from "react";
import {BsCartPlusFill} from "react-icons/bs"

const NavBar:React.FC = () => {
  return <div className="relative flex justify-center items-center h-[10vh] w-full border-[1px] border-[blue]">
    <h1 className="text-[2rem] font-medium">Typescript Cart</h1>
    <span className="absolute right-[5%]"><BsCartPlusFill size={30}/>
    <div className="flex justify-center items-center absolute right-[-0.3rem] bottom-[-0.5rem] rounded-full bg-[red] h-[1.2rem] w-[1.2rem] text-[0.8rem] text-[white]">1</div>
    </span>

  </div>;
};

export default NavBar;
