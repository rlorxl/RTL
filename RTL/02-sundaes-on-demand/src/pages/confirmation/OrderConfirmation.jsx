import React, { useEffect, useState } from 'react';
import { useOrderDetails } from '../../context/OrderDetails';
import axios from 'axios';
import Button from 'react-bootstrap/Button';

const OrderConfirmation = ({ setOrderPhase }) => {
  const { resetOrder } = useOrderDetails();
  const [orderNumber, setOrderNumber] = useState(null);

  useEffect(() => {
    // in a real app we would get order details from context and send with POST
    axios
      .post(`http://localhost:3030/order`)
      .then((response) => {
        console.log(response);
        setOrderNumber(response.data.orderNumber);
      })
      .catch((error) => {
        // TODO: handle error here
      });
  }, []);

  const handleClick = () => {
    // clear the order details
    resetOrder();
    // send back to order page
    setOrderPhase('inProgress');
  };

  return (
    <>
      {orderNumber ? (
        <div style={{ textAlign: 'center' }}>
          <h1>Thank You!</h1>
          <p>Your order numbe is {orderNumber}</p>
          <p style={{ fontSize: '25%' }}>
            as per ou terms and conditions, nothing will happen now
          </p>
          <Button onClick={handleClick}>Create new order</Button>
        </div>
      ) : (
        <div>Loading</div>
      )}
    </>
  );
};

export default OrderConfirmation;
