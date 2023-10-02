import React from "react";
import "../styles/cartpage.css";
import { useDispatch, useSelector } from "react-redux";
import { removefromcartredux, updatequantity } from "../Slices/ProductSlices";
import { useNavigate, Link } from "react-router-dom";

export default function Cartpage() {
  const cart = useSelector((state) => state.cart);
  const { cartitem } = cart;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const deleteitem = (product) => {
    dispatch(removefromcartredux(product));
  };
  const handlequantitychange = (product, newquantity) => {
    dispatch(updatequantity({ id: product.id, quantity: newquantity }));
  };
  const totalprice = (product) => {
    return product.price * product.quantity;
  };
  const backpage = () => {
    navigate("/");
  };

  return (
    <>
      <div className="container">
        {cartitem.length > 0 ? (
          <div className="inner-container">
            {cartitem.map((product, index) => (
              <div className="item-cart" key={index}>
                <div className="image-input-conatiner">
                  <div className="image">
                    <img src={product.thumbnail} alt="" />
                  </div>
                  <div className="quantity">
                    <select
                      name="quantity"
                      id=""
                      onChange={(e) => {
                        handlequantitychange(product, e.target.value);
                      }}
                    >
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                    </select>
                  </div>
                  <div className="price">
                    <h1>${product.price}</h1>
                  </div>
                </div>
                <div className="item-details">
                  <h1>{product.title}</h1>
                  <p>{product.description}</p>
                  <h3>{product.category}</h3>
                </div>
                <div className="subtotal-shipping">
                  <div className="subtotal">
                    <h3>Subtotal : </h3>
                    <h3>{product.price}</h3>
                  </div>
                  <div className="shipping">
                    <h3>Shipping : </h3>
                    <h3>FREE</h3>
                  </div>
                </div>
                <div className="total">
                  <div className="total-price-heading">
                    <h2>Total : </h2>
                  </div>
                  <div className="total-price">
                    <h3>{totalprice(product)}</h3>
                  </div>
                </div>
                <button
                  onClick={() => {
                    deleteitem(product);
                  }}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        ) : (
          <div className="empty-page">
            <h1>Your Cart is Empty Add Product</h1>
          </div>
        )}
      </div>
      <button
        onClick={() => {
          back - page();
        }}
        className="back-button"
      >
        <Link to="/" className="link">
          Back
        </Link>
      </button>
    </>
  );
}
