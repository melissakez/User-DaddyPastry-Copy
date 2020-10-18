import React, { Component } from "react";
import Header from "./Header";
import BannerInner from "./BannerInner";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link } from "react-router-dom";

export default class Login extends Component {
  render() {
    return (
      <div>
        <Header />
        <BannerInner />
        <Navbar />
        <section className="banner-bottom">
          <div className="container">
            <h3 className="tittle">Sign In Now</h3>
            <div className="row inner-sec">
              <div className="login p-5 bg-dark mx-auto mw-100">
                <form action="#" method="post">
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1 mb-2">
                      Email address
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder
                      required
                    />
                    <small id="emailHelp" className="form-text text-muted">
                      We'll never share your email with anyone else.
                    </small>
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputPassword1 mb-2">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      id="exampleInputPassword1"
                      placeholder
                      required
                    />
                  </div>
                  <div className="form-check mb-2">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="exampleCheck1"
                    />
                    <label className="form-check-label" htmlFor="exampleCheck1">
                      Check me out
                    </label>
                  </div>
                  <button type="submit" className="btn btn-primary submit mb-4">
                    Sign In
                  </button>
                  <p>
                    <Link to="/register"> Don't have an account?</Link>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    );
  }
}
