import React, { useContext } from "react";
import { VscChromeClose } from "react-icons/vsc";
import AddedTo from "./AddedTo";
import StateContext from "../helpers/useContext";

const SideCart: React.FC = (): any => {
  const { openVal, setOpenVal } = useContext(StateContext) as any;
  console.log(openVal)
  if (openVal) {
    <div className="flex-col justify-between items-center absolute right-0 overflow-y-scroll h-screen w-[31%] border-[1px] border-[red]">
      <div className="flex items-center h-[10vh] flex justify-around w-full">
        <h1 className="text-[1.3rem]">Inside Cart</h1>
        <div>
          <VscChromeClose size={28} />
        </div>
      </div>
      <AddedTo />
      <AddedTo />
      <AddedTo />
      <AddedTo />
      <AddedTo />
      <AddedTo />
      <AddedTo />
      <AddedTo />
    </div>;
  } else {
    console.log('No')
  }
};

export default SideCart;
