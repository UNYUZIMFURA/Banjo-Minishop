import React, { useContext } from "react";
// import { BsCartPlusFill } from "react-icons/bs";
import StateContext from "../helpers/useContext";

{/* Small change to push */}

const NavBar: React.FC = () => {
  const { setOpenVal } = useContext(StateContext) as any;
  const { productsArr } = useContext(StateContext) as any;

  return (
    <div className="relative flex justify-center items-center h-[10vh] w-full">
      <h1 className="text-[2rem] font-medium">Typescript Cart</h1>
      <span className="cursor-pointer absolute right-[8%]">
        <div
          onClick={() => {
            setOpenVal(true);
          }}
        >
          {/* <BsCartPlusFill size={30} /> */}
        </div>
        <div className="flex justify-center items-center absolute right-[-0.3rem] bottom-[-0.5rem] rounded-full bg-[red] h-[1.2rem] w-[1.2rem] text-[0.8rem] text-[white]">
          {productsArr.length}
        </div>
      </span>
    </div>
  );
};

export default NavBar;
