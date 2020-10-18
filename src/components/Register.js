import React, { Component } from "react";
import Header from "./Header";
import BannerInner from "./BannerInner";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default class Register extends Component {
  render() {
    return (
      <div>
        <Header />
        <BannerInner />
        <Navbar />
        <section className="banner-bottom">
          <div className="container">
            <h3 className="tittle">Register Now</h3>
            <div className="inner-sec">
              <div className="login p-5 bg-dark mx-auto mw-100">
                <form action="#" method="post">
                  <div className="form-row">
                    <div className="col-md-6 mb-3">
                      <label htmlFor="validationCustom01">First name</label>
                      <input
                        type="text"
                        className="form-control"
                        id="validationDefault01"
                        placeholder
                        required
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label htmlFor="validationCustom02">Last name</label>
                      <input
                        type="text"
                        className="form-control"
                        id="validationDefault02"
                        placeholder
                        required
                      />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group col-md-6">
                      <label htmlFor="exampleInputPassword1 mb-2">
                        Password
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        id="password1"
                        placeholder
                        required
                      />
                    </div>
                    <div className="form-group col-md-6">
                      <label htmlFor="exampleInputPassword2 mb-2">
                        Confirm Password
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        id="password2"
                        placeholder
                        required
                      />
                    </div>
                  </div>
                  <button type="submit" className="btn btn-primary submit mb-4">
                    Register
                  </button>
                  <p>
                    <a href="#">By clicking Register, I agree to your terms</a>
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
