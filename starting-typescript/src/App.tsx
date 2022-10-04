import React from "react";
import { useState } from "react";
import Product from "./Components/Product";
import NavBar from "./Components/NavBar";
import Camera from "./Images/camera.jpg";
import Mitziig from "./Images/mitziig.jpg";
import Headphones from "./Images/headphones.jpg";
import RangeRover from "./Images/range-rover.jpg";
import Macbook from "./Images/macbook.jpg";
import Mercedez from "./Images/mercedez.jpg";
import SideCart from "./Components/SideCart";
import StateContext from "./helpers/useContext";

export interface Product {
  name: string;
  amt: number;
  img: string;
  quantity: number;
  total?: number;
}

const App: React.FC = () => {
  const [openVal, setOpenVal] = useState<boolean>(false);
  const products: Product[] = [];
  const [productsArr, setProductsArr] = useState(products);
  const [totalMoney, setTotalMoney] = useState<number>(0);

  const addProduct = (data: Product) => {
    setProductsArr((prev: Product[]) => {
      const alreadySelected = productsArr.find(
        (el: Product) => el.name === data.name
      );
      if (alreadySelected) {
        return productsArr.map((prod: Product) => {
          if (prod.name === data.name) prod.quantity += 1;
          return prod;
        });
      }
      return [...prev, { ...data }];
    });
  };

  return (
    <StateContext.Provider
      value={{
        openVal,
        setOpenVal,
        productsArr,
        setProductsArr,
        totalMoney,
        setTotalMoney,
      }}
    >
      <div className="flex flex-col items-center h-[115vh] w-screen overflow-y-scroll">
        <NavBar />
        <SideCart />
        <div className="flex justify-around flex-wrap w-[90%] mt-[3rem]">
          <Product
            addProduct={addProduct}
            img={Camera}
            amt={1500}
            name="Camera"
            quantity={1}
          />
          <Product
            addProduct={addProduct}
            img={Mitziig}
            amt={30}
            name="Mütziig"
            quantity={1}
          />
          <Product
            addProduct={addProduct}
            img={RangeRover}
            amt={70000}
            name="Range Rover"
            quantity={1}
          />
          <Product
            addProduct={addProduct}
            img={Macbook}
            amt={1000}
            name="Macbook"
            quantity={1}
          />
          <Product
            addProduct={addProduct}
            img={Mercedez}
            amt={45000}
            name="Mercedez Benz"
            quantity={1}
          />
          <Product
            addProduct={addProduct}
            img={Headphones}
            amt={120}
            name="Headphones"
            quantity={1}
          />
        </div>
      </div>
    </StateContext.Provider>
  );
};

export default App;
