import React, { useContext, useState } from "react";
import { VscChromeClose } from "react-icons/vsc";
import AddedTo from "./AddedTo";
import StateContext from "../helpers/useContext";

const SideCart: React.FC = (): any => {
  const { openVal, setOpenVal } = useContext(StateContext) as any;
  const { productsArr, setProductsArr } = useContext(StateContext) as any;

  return openVal ? (
    <div className="absolute w-full h-full bg-[rgba(0,0,0,0.5)] ">
      <div className="bg-[white] flex-col justify-between items-center absolute right-0 overflow-y-scroll h-screen w-[31%]">
        <div className="flex items-center h-[10vh] flex justify-around w-full">
          <h1 className="text-[1.3rem]">Inside Cart</h1>
          <div
            onClick={() => {
              setOpenVal(false);
            }}
            className="cursor-pointer"
          >
            <VscChromeClose size={28} />
          </div>
        </div>
        {productsArr.map((singleProduct) => {
          <AddedTo />;
        })}
      </div>
    </div>
  ) : (
    <></>
  );
};

export default SideCart;
