import { IoCloseCircleOutline } from "react-icons/io5";
import { useContext } from "react";
import StateContext from "../helpers/useContext";

interface Props {
  img: string;
  productName: string;
  productAmt: number;
  quantity: number
}

const AddedTo: React.FC<Props> = ({ productAmt, productName, img, quantity }) => {
  return (
    <div className="flex justify-between items-center w-full h-[25vh] mt-[1rem] bg-[#E8E8E8]">
      <div className="h-full w-[55%] flex flex-col justify-evenly">
        <div className="h-[70%]">
          <img src={img} alt="" className="cursor-pointer object-cover h-full w-full"/>
        </div>
        <div className="flex w-full justify-around">
          <h1>{productName}</h1>
          <h1>{productAmt}</h1>
        </div>
      </div>
      <div className="h-1/2 w-[30%] flex flex-col justify-around">
        <h1 className="">Quantity: {quantity}</h1>
        <h2 className="">Total: $30 </h2>
      </div>
      <div className="h-full w-[10%] flex flex-col items-center justify-center">
        <IoCloseCircleOutline size={35} />
      </div>
    </div>
  );
};

export default AddedTo;
