import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";
export const StoreContext = createContext(null);
const StoreContextProvider = (props) => {
  const [cardItems, setCardItems] = useState({});
  //!! Hàm thêm số lượng sản phẩm vào giỏ hàng
  const addToCart = (itemId) => {
    if (!cardItems[itemId]) {
      setCardItems((prev) => ({
        ...prev,
        [itemId]: 1,
      }));
    } else {
      setCardItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
  };
  //!! Hàm xóa số lượng sản phẩm khỏi giỏ hàng
  const removeFromCart = (itemId) => {
    setCardItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };
  useEffect(() => {
    console.log(cardItems);
  }, [cardItems]);
  const contextValue = {
    food_list,
    cardItems,
    setCardItems,
    addToCart,
    removeFromCart,
  };
  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
