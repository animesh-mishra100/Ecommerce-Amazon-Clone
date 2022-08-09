import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";

function Checkout() {
  const [{ basket,user}, dispatch] = useStateValue();

  return <div className="checkout">
    <div className="checkout_left">
        <img className="checkout_ad" src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2021/X-site/SingleTitle/TheTerminalList/3000x1200_Hero-Tall_P._CB634276799_.jpg" alt=""></img>
    
    
    
    <div>
        <h3>Hey There, Thanks for visiting our page !! </h3>
        <h2 className="checkout_title">Your Shopping Trolley</h2>

        {basket.map(item => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        
    </div>
    </div>

    <div className="checkout_right">
      <Subtotal></Subtotal>
      
    </div>
  </div>;
}

export default Checkout;
