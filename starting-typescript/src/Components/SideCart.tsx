import React, { useContext, useState } from "react";
import { IoCloseCircleOutline } from "react-icons/io5";
import AddedTo from "./AddedTo";
import StateContext from "../helpers/useContext";

const SideCart: React.FC = (): any => {
  const { openVal, setOpenVal } = useContext(StateContext) as any;
  const { productsArr } = useContext(StateContext) as any;
  const { totalMoney } = useContext(StateContext) as any;

  return openVal ? (
    <div className="absolute w-full h-[115vh] bg-[rgba(0,0,0,0.5)] ">
      <div className="bg-[white] flex-col justify-between items-center absolute right-0 overflow-y-scroll h-full w-[31%]">
        <div className="flex items-center h-[10vh] flex justify-around w-full cursor-pointer">
          <h1 className="text-[1.3rem]">Inside Cart</h1>
          <div
            onClick={() => {
              setOpenVal(false);
            }}
          >
        <IoCloseCircleOutline size={40} />
          </div>
        </div>
        {productsArr.map((singleProduct: any) => {
          return (
            <AddedTo
              quantity={singleProduct.quantity}
              img={singleProduct.img}
              key={singleProduct.amt}
              productName={singleProduct.name}
              productAmt={singleProduct.amt}
            />
          );
        })}
<div className="h-[20vh] w-full flex flex-col justify-around items-center mt-[2rem] bg-[#E8E8E8]">
  <div className="w-full flex justify-around">
  <h1 className="text-[rgb(99,99,99)]">Total Cost</h1>
  <h1 className="">${totalMoney}</h1>
  </div>
  <button className="h-[3rem] w-[70%] text-[#fff] bg-[blue] outline-none cursor-pointer rounded-[3px]">CHECKOUT</button>
</div>
      </div>
    </div>
  ) : (
    <></>
  );
};

export default SideCart;
