import { useState } from "react";
import { createContext } from "react";

export const ProductContext = createContext();

export const ProductProvider = (props) => {

  const [cardGame, setCardGame] = useState([]);

  

  return (
    <>
      <ProductContext.Provider value={{ cardGame, setCardGame }}>
        {props.children}
      </ProductContext.Provider>
    </>
  );
};

export default ProductProvider;
