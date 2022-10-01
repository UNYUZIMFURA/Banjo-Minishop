import { useContext } from "react";
import StateContext from "../helpers/useContext";
import { IoCloseCircleOutline } from "react-icons/io5";

interface Props {
  img: string;
  productName: string;
  productAmt: number;
  quantity: number;
}

const AddedTo: React.FC<Props> = ({
  productAmt,
  productName,
  img,
  quantity,
}) => {

const { productArr } = useContext(StateContext) as any

console.log(productArr)

const incrementProduct = () => {
productArr.map((prod:any) => {
if(prod.name === productName) console.log("Do something")
})
}

// const decrementProduct = () => {
//   productArr.map((prod:any) => {

//   })
// }

  return (
    <div className="flex justify-between items-center w-full h-[25vh] mt-[1rem] bg-[#E8E8E8]">
      <div className="h-full w-[55%] flex flex-col justify-evenly">
        <div className="h-[70%]">
          <img
            src={img}
            alt=""
            className="cursor-pointer object-cover h-full w-full"
          />
        </div>
        <div className="flex w-full justify-around">
          <h1>{productName}</h1>
          <h1>{productAmt}</h1>
        </div>
      </div>
      <div className="bg-[red] h-1/2 w-[40%] flex flex-col items-center justify-around">
        <div className="h-1/2 w-1/2 flex items-center justify-around bg-[blue]">
          <button className="rounded-full h-1/2 w-[2rem] bg-[white]">-</button>
          <h1 className="">{quantity}</h1>
          <button className="rounded-full h-1/2 w-[2rem] bg-[white]" onClick={incrementProduct}>+</button>
        </div>
        <h2 className="">Total: {productAmt * quantity} </h2>
      </div>
      <div className="bg-[brown] h-full flex flex-col cursor-pointer items-center justify-center">
        <IoCloseCircleOutline size={35} />
      </div>
    </div>
  );
};

export default AddedTo;
