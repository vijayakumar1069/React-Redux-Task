import React from "react";
import { products } from "./data";
import "../styles/homepage.css";
import { useDispatch, useSelector } from "react-redux";
import { addtocartredux, removefromcartredux } from "../Slices/ProductSlices";

export default function Homepage() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const { cartitem } = cart;
  const iscart = (id) => {
    return cartitem.some((item) => item.id === id);
  };
  const togglecart = (product) => {
    if (iscart(product.id)) {
      dispatch(removefromcartredux(product));
    } else {
      dispatch(addtocartredux(product));
    }
  };

  return (
    <>
      <div className="container">
        {products.map((product, index) => (
          <div className="item-home" key={index}>
            <div className="image-input-conatiner">
              <div className="image">
                <img src={product.thumbnail} alt="" />
              </div>
            </div>
            <h2>Price : {product.price}</h2>
            <div className="item-details">
              <h1>{product.title}</h1>
              <p>{product.description}</p>
              <h3>{product.category}</h3>
            </div>
            <div className="button-conatiner">
              <button
                className="add"
                onClick={() => {
                  togglecart(product);
                }}
              >
                {iscart(product.id) ? "Remove from cart" : "Add to cart"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
