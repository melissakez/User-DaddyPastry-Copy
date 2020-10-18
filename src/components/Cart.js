import React, { Component } from "react";
import Header from "./Header";
import BannerInner from "./BannerInner";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link } from "react-router-dom";

export default class Cart extends Component {
  render() {
    return (
      <div>
        <Header />
        <BannerInner />
        <Navbar />
        <div>
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            <li className="breadcrumb-item active">Cart</li>
          </ol>
          {/*/main*/}
          <section className="banner-bottom">
            <div className="container">
              <div className="row">
                <div className="col-lg-7">
                  <h3>Shopping Cart</h3>
                  <div className="row">
                    <div className="col">
                      <hr />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-6">
                      <h5>Product</h5>
                    </div>
                    <div className="col-lg-2">
                      <h5>Price</h5>
                    </div>
                    <div className="col-lg-2">
                      <h5>Quantity</h5>
                    </div>
                    <div className="col-lg-2">
                      <h5>Total</h5>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <hr />
                    </div>
                  </div>
                </div>
                <div className="col-lg-5">
                  <div className="container">
                    <div className="row inner-sec">
                      <div className="checkout">
                        <div className="row">
                          <div className="col">
                            <p>Order Summary</p>
                            <hr />
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-lg-7">
                            <p>Subtotal</p>
                            <br />
                            <p>Shipping</p>
                          </div>
                          <div className="col-lg-5">
                            <p>Rp 1234</p>
                            <br />
                            <p>Rp 1234</p>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col">
                            <hr />
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-lg-7">
                            <h3>Total</h3>
                          </div>
                          <div className="col-lg-5">
                            <p>Rp 2468</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-6">
                        <button className="btn btn-outline-primary">
                          Continue Shopping
                        </button>
                      </div>
                      <div className="col-lg-6">
                        <button className="btn btn-outline-primary ml-5">
                          Checkout
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <Footer />
      </div>
    );
  }
}
