import React, { Component } from "react";
import Header from "./Header";
import BannerInner from "./BannerInner";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link } from "react-router-dom";

export default class Menu extends Component {
  render() {
    return (
      <div>
        <Header />
        <BannerInner />
        <Navbar />
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          <li class="breadcrumb-item active">Menu</li>
        </ol>
        <div>
          <div className="wthreeproductdisplay">
            <div className="container">
              <div className="top-grid">
                <div className="cart-grid" id="cart-1">
                  <div className="img">
                    <img src="images/d5.jpg" alt="img" />
                  </div>
                  <ul className="info">
                    <center>
                      <div>Cokelat</div>
                      <br />
                    </center>
                    <center>
                      <li>5000</li>
                    </center>
                    {/* <li class="right-text">$115.00</li> */}
                  </ul>
                  <div className="snipcart-details ">
                    <form action="#" method="post">
                      <input type="hidden" name="cmd" defaultValue="_cart" />
                      <input type="hidden" name="add" defaultValue={1} />
                      <input
                        type="hidden"
                        name="w3l_item"
                        defaultValue="Striped Top "
                      />
                      <input type="hidden" name="amount" defaultValue={5000} />
                      <input
                        type="hidden"
                        name="item_name"
                        defaultValue="Cokelat"
                      />
                      <button
                        type="submit"
                        className="button w3l-cart"
                        data-id="cart-1"
                      >
                        add to cart
                      </button>
                    </form>
                  </div>
                </div>
                <div className="cart-grid" id="cart-2">
                  <div className="img">
                    <img src="images/d1.jpg" alt="img" />
                  </div>
                  <ul className="info">
                    <center>
                      <div>Keju</div>
                      <br />
                    </center>
                    <center>
                      <li>5000</li>
                    </center>
                    {/* <li class="right-text">$195.00</li> */}
                  </ul>
                  <div className="snipcart-details ">
                    <form action="#" method="post">
                      <input type="hidden" name="cmd" defaultValue="_cart" />
                      <input type="hidden" name="add" defaultValue={1} />
                      <input
                        type="hidden"
                        name="w3l_item"
                        defaultValue="Striped Top "
                      />
                      <input type="hidden" name="amount" defaultValue={5000} />
                      <input
                        type="hidden"
                        name="item_name"
                        defaultValue="Keju"
                      />
                      <button
                        type="submit"
                        className="button w3l-cart"
                        data-id="cart-3"
                      >
                        add to cart
                      </button>
                    </form>
                  </div>
                </div>
                <div className="cart-grid" id="cart-3">
                  <div className="img">
                    <img src="images/d8.jpg" alt="img" />
                  </div>
                  <ul className="info">
                    <center>
                      <div>Cokelat Keju</div>
                      <br />
                    </center>
                    <center>
                      <li>6000</li>
                    </center>
                    {/* <li class="right-text">$95.00</li> */}
                  </ul>
                  <div className="snipcart-details ">
                    <form action="#" method="post">
                      <input type="hidden" name="cmd" defaultValue="_cart" />
                      <input type="hidden" name="add" defaultValue={1} />
                      <input
                        type="hidden"
                        name="w3l_item"
                        defaultValue="Striped Top "
                      />
                      <input type="hidden" name="amount" defaultValue={6000} />
                      <input
                        type="hidden"
                        name="item_name"
                        defaultValue="Cokelat Keju"
                      />
                      <button
                        type="submit"
                        className="button w3l-cart"
                        data-id="cart-3"
                      >
                        add to cart
                      </button>
                    </form>
                  </div>
                </div>
                <div className="cart-grid" id="cart-4">
                  <div className="img">
                    <img src="images/d4.jpg" alt="img" />
                  </div>
                  <ul className="info">
                    <center>
                      <div>Nutella</div>
                      <br />
                    </center>
                    <center>
                      <li>7000</li>
                    </center>
                    {/* <li class="right-text">$195.00</li> */}
                  </ul>
                  <div className="snipcart-details ">
                    <form action="#" method="post">
                      <input type="hidden" name="cmd" defaultValue="_cart" />
                      <input type="hidden" name="add" defaultValue={1} />
                      <input
                        type="hidden"
                        name="w3l_item"
                        defaultValue="Striped Top "
                      />
                      <input type="hidden" name="amount" defaultValue={7000} />
                      <input
                        type="hidden"
                        name="item_name"
                        defaultValue="Nutella"
                      />
                      <button
                        type="submit"
                        className="button w3l-cart"
                        data-id="cart-4"
                      >
                        add to cart
                      </button>
                    </form>
                  </div>
                </div>
                <div className="clear" />
              </div>
              <div className="bot-grid">
                <div className="cart-grid" id="cart-5">
                  <div className="img">
                    <img src="images/d7.jpg" alt="img" />
                  </div>
                  <ul className="info">
                    <center>
                      <div>Skimaltine</div>
                      <br />
                    </center>
                    <center>
                      <li>7000</li>
                    </center>
                    {/* <li class="right-text">$45.00</li> */}
                  </ul>
                  <div className="snipcart-details ">
                    <form action="#" method="post">
                      <input type="hidden" name="cmd" defaultValue="_cart" />
                      <input type="hidden" name="add" defaultValue={1} />
                      <input
                        type="hidden"
                        name="w3l_item"
                        defaultValue="Striped Top "
                      />
                      <input type="hidden" name="amount" defaultValue={7000} />
                      <input
                        type="hidden"
                        name="item_name"
                        defaultValue="Skimaltine"
                      />
                      <button
                        type="submit"
                        className="button w3l-cart"
                        data-id="cart-5"
                      >
                        add to cart
                      </button>
                    </form>
                  </div>
                </div>
                <div className="cart-grid" id="cart-6">
                  <div className="img">
                    <img src="images/d3.jpg" alt="img" />
                  </div>
                  <ul className="info">
                    <center>
                      <div>Apple Almond</div>
                      <br />
                    </center>
                    <center>
                      <li>8000</li>
                    </center>
                    {/* <li class="right-text">$95.00</li> */}
                  </ul>
                  <div className="snipcart-details ">
                    <form action="#" method="post">
                      <input type="hidden" name="cmd" defaultValue="_cart" />
                      <input type="hidden" name="add" defaultValue={1} />
                      <input
                        type="hidden"
                        name="w3l_item"
                        defaultValue="Striped Top "
                      />
                      <input type="hidden" name="amount" defaultValue={8000} />
                      <input
                        type="hidden"
                        name="item_name"
                        defaultValue="Apple Almond"
                      />
                      <button
                        type="submit"
                        className="button w3l-cart"
                        data-id="cart-6"
                      >
                        add to cart
                      </button>
                    </form>
                  </div>
                </div>
                <div className="cart-grid" id="cart-7">
                  <div className="img">
                    <img src="images/d2.jpg" alt="img" />
                  </div>
                  <ul className="info">
                    <center>
                      <div>Kari</div>
                      <br />
                    </center>
                    <center>
                      <li>8000</li>
                    </center>
                    {/* <li class="right-text">$65.00</li> */}
                  </ul>
                  <div className="snipcart-details ">
                    <form action="#" method="post">
                      <input type="hidden" name="cmd" defaultValue="_cart" />
                      <input type="hidden" name="add" defaultValue={1} />
                      <input
                        type="hidden"
                        name="w3l_item"
                        defaultValue="Striped Top "
                      />
                      <input type="hidden" name="amount" defaultValue={8000} />
                      <input
                        type="hidden"
                        name="item_name"
                        defaultValue="Kari"
                      />
                      <button
                        type="submit"
                        className="button w3l-cart"
                        data-id="cart-7"
                      >
                        add to cart
                      </button>
                    </form>
                  </div>
                </div>
                <div className="cart-grid" id="cart-8">
                  <div className="img">
                    <img src="images/d6.jpg" alt="img" />
                  </div>
                  <ul className="info">
                    <center>
                      <div>Ayam Panggang</div>
                      <br />
                    </center>
                    <center>
                      <li>10000</li>
                    </center>
                    {/* <li class="right-text">$84.00</li> */}
                  </ul>
                  <div className="snipcart-details ">
                    <form action="#" method="post">
                      <input type="hidden" name="cmd" defaultValue="_cart" />
                      <input type="hidden" name="add" defaultValue={1} />
                      <input
                        type="hidden"
                        name="w3l_item"
                        defaultValue="Striped Top "
                      />
                      <input type="hidden" name="amount" defaultValue={10000} />
                      <input
                        type="hidden"
                        name="item_name"
                        defaultValue="Ayam Panggang"
                      />
                      <button
                        type="submit"
                        className="button w3l-cart"
                        data-id="cart-8"
                      >
                        add to cart
                      </button>
                    </form>
                  </div>
                </div>
                <div className="clear" />
              </div>
            </div>
          </div>
          {/* //cart's-Product-Display */}
          <div className="wthreecartaits wthreecartaits2 cart cart box_1">
            <form action="#" method="post" className="last">
              <input type="hidden" name="cmd" defaultValue="_cart" />
              <input type="hidden" name="display" defaultValue={1} />
              <button className="w3view-cart" type="submit" name="submit" value>
                view cart
                <span className="fa fa-cart-arrow-down" aria-hidden="true" />
              </button>
            </form>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
