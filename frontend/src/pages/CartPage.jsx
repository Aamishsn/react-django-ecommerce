import React from "react";
import { useSearchParams, useParams } from "react-router-dom";
const CartPage = () => {
  const [searchParams] = useSearchParams();
    const {id} = useParams();
    console.log(id);
  const qty = searchParams.get("qty");
  return (
    <div>
      CartPage
        the quantity is :      {qty}
        <br/>
        
      the id of the product is :{id}
    </div>
  );
};

export default CartPage;
