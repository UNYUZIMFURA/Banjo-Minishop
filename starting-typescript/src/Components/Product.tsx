import { useContext } from "react";
import StateContext from "../helpers/useContext";
import { BsCartPlusFill } from "react-icons/bs";
import { Product as ProductInterface } from "./../App";

export interface Props {
  img: string;
  amt: number;
  name: string;
  quantity: number;
  addProduct: (o: ProductInterface) => void;
}

const Product: React.FC<Props> = ({ img, amt, name, quantity, addProduct }) => {
  
  const doubleCall = () => {
    setTotalMoney((prevMoney:number) => prevMoney += amt)
    addProduct({ img, amt, name, quantity })
  }

  const { totalMoney, setTotalMoney } = useContext(StateContext) as any;
  return (
    <div className="h-[50vh] w-[28%] flex flex-col mt-[1rem]">
      <div className="h-[60%] w-full">
        <img
          src={img}
          className="object-cover h-full w-full rounded-t-[3px] cursor-pointer"
          alt=""
        />
      </div>
      <div className="flex flex-col justify-around h-1/2 items-center w-full">
        <div className="w-full justify-around flex justify-around">
          <h1 className="text-[1.1rem]">{name}</h1>
          <h1 className="text-[1.1rem] text-[#737373]">${amt}</h1>
        </div>
        <button
          className="flex items-center justify-center bg-[blue] text-[#fff] rounded-[3px] h-[3.3rem] w-[80%] cursor-pointer outline-none"
          onClick={() => doubleCall()}
        >
          <span className="mr-[0.5rem]"><BsCartPlusFill size={22}/></span>
          <span className="ml-[0.5rem] text-[1.1rem]">Add To Cart</span>
        </button>
      </div>
    </div>
  );
};

export default Product;
