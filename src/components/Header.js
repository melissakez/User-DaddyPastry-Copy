import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Header extends Component {
  render() {
    return (
      <div>
        <header>
          <div className="top-bar_sub container-fluid">
            <div className="row">
              <div className="col-md-4 logo text-left" data-aos="fade-up">
                <Link className="navbar-brand" to="/">
                  {/* <i class="fab fa-gitkraken"></i>  */}
                  {/* Daddy Pastry</a> */}
                  {/* buat tambahin logo di header*/}
                </Link>
                <Link
                  className="navbar-brand mr-auto"
                  to="/"
                  meta
                  charSet="UTF-8"
                >
                  <img
                    src="images/logo.png"
                    alt="Logo Daddy Pastry"
                    className="img-fluid"
                    meta
                    charSet="UTF-8"
                  />{" "}
                  Daddy Pastry
                </Link>
                {/* buat tambahin logo di header*/}
              </div>
              <div
                className="col-md-8 top-forms text-right mt-4"
                data-aos="fade-up"
              >
                <span>Welcome Back!</span>
                <span className="mx-lg-4 mx-md-2  mx-1">
                  <Link to="/login">
                    <i className="fas fa-lock" /> Sign In
                  </Link>
                </span>
                <span className="mx-lg-2 mx-md-2  mx-1">
                  <Link to="/cart">
                    <i className="fas fa-shopping-cart" /> Cart
                  </Link>
                </span>
              </div>
            </div>
          </div>
        </header>
      </div>
    );
  }
}
