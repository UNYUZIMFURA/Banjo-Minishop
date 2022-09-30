import { useContext, useState } from "react";
import StateContext from "../helpers/useContext";

interface Props {
  img: string;
  amt: number
  name: string;
}

const Product: React.FC<Props> = ({ img, amt, name }) => {
   const [productClick, setProductClick] = useState<number>(0)
  const { productsArr, setProductsArr } = useContext(StateContext) as any;
  const doubleCall = () => {
    setProductClick(prevClicks => prevClicks + 1)
    setProductsArr([...productsArr, {
      img,
      amt,
      name
    }])
  }
  
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
          className="bg-[blue] text-[#fff] rounded-[3px] h-[3.3rem] w-[80%] cursor-pointer outline-none"
          onClick={() => doubleCall()}
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default Product;
