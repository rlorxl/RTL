import { createContext, useContext, useState } from 'react';
import { pricePerItem } from '../constants';

const OrderDetails = createContext();

// create custom hook to check whether we're in a porvider
export function useOrderDetails() {
  const contextValue = useContext(OrderDetails);

  if (!contextValue) {
    throw new Error(
      'useOrderDetails must be called from within an OrderDetailsProvider'
    );
  }

  return contextValue;
}

export function OrderDetailsProvider(props) {
  const [optionCounts, setOptionCounts] = useState({
    scoops: {}, // { Chocolate: 1, Vanilla: 2 }
    toppings: {}, // { "Gummi Bears": 1 }
  });

  const updateItemCount = (itemName, newItemCount, optionType) => {
    const newOptionCounts = { ...optionCounts };
    newOptionCounts[optionType][itemName] = newItemCount;
    setOptionCounts(newOptionCounts);
  };

  const resetOrder = () => {
    setOptionCounts({ scoops: {}, toppings: {} });
  };

  // utility function to  derive totals from optionCounts state value
  const calculateTotal = (optionType) => {
    // 옵션 타입에 해당하는 수량을 배열로 가져오기 ([1, 2])
    const countsArray = Object.values(optionCounts[optionType]);

    // 수량합계
    const totalCount = countsArray.reduce((total, value) => total + value, 0);

    // 실제가격 (수량(total) * 아이템(optionType) 금액)
    return totalCount * pricePerItem[optionType];
  };

  const totals = {
    scoops: calculateTotal('scoops'),
    toppings: calculateTotal('toppings'),
  };

  const value = {
    optionCounts,
    totals,
    updateItemCount,
    resetOrder,
  };

  return <OrderDetails.Provider value={value} {...props} />;
}
