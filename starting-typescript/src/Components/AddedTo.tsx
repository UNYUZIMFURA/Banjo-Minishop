import {IoCloseCircleOutline} from "react-icons/io5"
import { useContext } from "react";
import StateContext from "../helpers/useContext";

const AddedTo = () => {
  const {productsArr, setProductsArr} = useContext(StateContext) as any
  return (
    <div className="flex justify-between items-center w-full h-[25vh] mt-[1rem] bg-[#E8E8E8]">
      <div className="h-full w-[55%] flex flex-col justify-evenly">
        <div className="h-[70%]">{/* <img src={} /> */}</div>
        <div className="flex w-full justify-around">
          <h1>{productsArr.name}</h1>
          <h1>$50</h1>
        </div>
      </div>
      <div className="h-1/2 w-[30%] flex flex-col justify-around">
        <h1 className="">Quantity: 2</h1>
        <h2 className="">Total $30 </h2>
      </div>
      <div className="h-full w-[10%] flex flex-col items-center justify-center">
     <IoCloseCircleOutline size={35} />
      </div>
    </div>
  );
};

export default AddedTo;
