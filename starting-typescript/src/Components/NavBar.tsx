import React, { useContext, useState } from "react";
import { BsCartPlusFill } from "react-icons/bs";
import StateContext from "../helpers/useContext";

const NavBar: React.FC = () => {
  const { setOpenVal } = useContext(StateContext) as any;
  const { productsArr } = useContext(StateContext) as any;

  return (
    <div className="h-[10vh] w-full relative flex justify-center items-center bg-[#111]">
      <h1 className="flex text-[2rem] text-[white] font-medium">
        <span>E</span>
        <span>X</span>
        <span>P</span>
        <span>L</span>
        <span>O</span>
        <span>R</span>
        <span>E</span>
        <span className="ml-[1rem] ">P</span>
        <span>R</span>
        <span>O</span>
        <span>D</span>
        <span>U</span>
        <span>C</span>
        <span>T</span>
        <span>S</span>
        
      </h1>
      <span className="cursor-pointer absolute right-[8%]">
        <div
          onClick={() => {
            setOpenVal(true);
          }}
        >
          <BsCartPlusFill size={30} />
        </div>
        <div className="flex justify-center items-center absolute right-[-0.3rem] bottom-[-0.5rem] rounded-full bg-[red] h-[1.2rem] w-[1.2rem] text-[0.8rem] text-[white]">
          {productsArr.length}
        </div>
      </span>
    </div>
  );
};

export default NavBar;
