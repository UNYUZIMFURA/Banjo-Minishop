import React from "react";
import { useState } from "react";
import Product from "./Components/Product";
import NavBar from "./Components/NavBar";
import Piano from "./Images/piano.jpg";
import Mitziig from "./Images/mitziig.jpg";
import Headphones from "./Images/headphones.jpg";
import Volkswagen from "./Images/volkswagen.jpg";
import Macbook from "./Images/macbook.jpg";
import Mercedez from "./Images/mercedez.jpg";
import SideCart from "./Components/SideCart";
import StateContext from "./helpers/useContext";

const App: React.FC = () => {
  const [openVal, setOpenVal] = useState<boolean>(false);

  interface Product {
    name: string;
    amt: number;
    img: string;
    quantity: number;
    total: number;
  }

  const products: Product[] = [];
  const [productsArr, setProductsArr] = useState(products);
  return (
    <StateContext.Provider
      value={{ openVal, setOpenVal, productsArr, setProductsArr }}
    >
      <div className="flex flex-col items-center h-[115vh] w-screen overflow-y-scroll">
        <NavBar />
        <SideCart />
        <div className="flex justify-around flex-wrap w-[90%] mt-[3rem]">
          <Product img={Headphones} amt={120} name="Headphones" />
          <Product img={Mitziig} amt={30} name="Mitziig" />
          <Product img={Volkswagen} amt={7000} name="Volkswagen" />
          <Product img={Macbook} amt={1000} name="Macbook" />
          <Product img={Mercedez} amt={45000} name="Mercedez Benz" />
          <Product img={Piano} amt={3000} name="Piano" />
        </div>
      </div>
    </StateContext.Provider>
  );
};

export default App;
