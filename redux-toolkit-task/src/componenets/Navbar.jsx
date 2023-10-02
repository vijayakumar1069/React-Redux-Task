import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Homepage from "./Homepage";
import Cartpage from "./Cartpage";
import '../styles/navbar.css'
import { useSelector } from "react-redux";

export default function Navbar() {
  const{cartitem}=useSelector((state)=>state.cart)
  return (
    <>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">SHOP</Link>
              </li>
              <li>
                <Link to="/cartpage">
                  <i className="fa-solid fa-cart-shopping">{cartitem?.length}</i>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <Routes>
          <Route exact path="/" element={<Homepage />}></Route>
          <Route path="/cartpage" element={<Cartpage />}></Route>
        </Routes>
      </Router>
    </>
  );
}
