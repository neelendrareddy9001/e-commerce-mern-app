import React from "react";
import { Link, NavLink } from "react-router-dom";
import { GiShoppingBag } from "react-icons/gi";

import { G } from "react-icons/gi";

const Header = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-body-tertiary px-5">
        <div class="container-fluid">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <Link to="/" className="navbar-brand" href="#">
              🛒 ECommerce App
            </Link>
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <NavLink to="/" class="nav-link active">
                  Home
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink to="/category" class="nav-link active">
                  Category
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink to="/register" class="nav-link" href="#">
                  Register
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink to="/login" class="nav-link" href="#">
                  Login
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink to="/cart" class="nav-link" href="#">
                  Cart
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
