import React from 'react';

import SummaryForm from './SummaryForm';

import { useOrderDetails } from '../../context/OrderDetails';
import { formatCurrency } from '../../utilities';
import { optionType } from '../../constants/option';

const OrderSummary = () => {
  const { totals, optionCounts } = useOrderDetails();

  const scoopArray = Object.entries(optionCounts[optionType.SCOOPS]); // [["chocolate", 2], ["vanilla", 1]]
  const toppingArray = Object.keys(optionCounts[optionType.TOPPINGS]); // ["M&Ms", "Gummi bears"]

  return (
    <div>
      <h1>OrderSummary</h1>
      <h2>Scoops: {formatCurrency(totals[optionType.SCOOPS])}</h2>
      <ul>
        {scoopArray.map(([name, value]) => (
          <li key={name}>
            {value} {name}
          </li>
        ))}
      </ul>
      <h2>Toppings: {formatCurrency(totals[optionType.TOPPINGS])}</h2>
      <ul>
        {toppingArray.map((topping) => (
          <li key={topping}>{topping}</li>
        ))}
      </ul>
      <SummaryForm />
    </div>
  );
};

export default OrderSummary;
