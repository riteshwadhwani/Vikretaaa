import React from "react";
import logo from "../../assets/logo/logo.png"

const Footer = () => {
  return (
    <footer className="text-light py-5" style={{ color: "#ffffff" }}>
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-4">
            <img src={logo} width="160" className="logo" />

            <p style={{ color: "gray" }}>
              Vikreta is your go-to platform for safe and efficient online
              auctions. Connect buyers and sellers with trust and transparency.
            </p>
          </div>

          <div className="col-md-4 mb-4">
            <h5>Explore</h5>
            <ul className="list-unstyled">
              <li>
                <a
                  href="/"
                  className="text-gray text-decoration-none"
                  style={{ color: "gray" }}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/aboutus"
                  className="text-gray text-decoration-none"
                  style={{ color: "gray" }}
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/market"
                  className="text-gray text-decoration-none"
                  style={{ color: "gray" }}
                >
                  Market
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray text-decoration-none"
                  style={{ color: "gray" }}
                >
                  FAQs
                </a>
              </li>
              <li>
                <a
                  href="/contactus"
                  className="text-gray text-decoration-none"
                  style={{ color: "gray" }}
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div className="col-md-4 mb-4">
            <h5>Contact Us</h5>

            <p style={{ color: "gray" }}>Email: support@vikreta.com </p>
            <p style={{ color: "gray" }}>Phone: +91-9766412152</p>
            <p style={{ color: "gray" }}>
              Address: Vikreta Business Center, Mumbai, India
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col-12 text-center">
            <a href="#" className="me-3">
              <i className="bi bi-facebook text-primary"></i>
            </a>
            <a href="#" className="me-3">
              <i className="bi bi-twitter text-primary"></i>
            </a>
            <a href="#">
              <i className="bi bi-instagram text-primary"></i>
            </a>
          </div>
        </div>

        <hr />

        <div className="text-center">
          <p className="mb-0">
            © 2024 Vikreta. All rights reserved. | Designed with ❤️ by Team
            Vikreta
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
