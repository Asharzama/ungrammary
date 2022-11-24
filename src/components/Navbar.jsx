import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [showList, setShowList] = useState(false);
  const displayList = () => {
    setShowList(prev => !prev);
  };
  return (
    <div className="container nav-cont">
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <div className="me-lg-3 image-container">
            <img className="pointer" src="images/logo.png" alt="logo" />
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 fw-bold fs-5 d-flex ms-lg-5">
              <li className="nav-item mx-lg-2">
                <div className="nav-link greenColor pointer">About us</div>
              </li>
              <li className="nav-item mx-lg-2">
                <div className="nav-link greenColor pointer">Solution</div>
              </li>
              <li className="nav-item mx-lg-2">
                <div className="nav-link greenColor pointer">
                  Global Network
                </div>
              </li>
            </ul>
            <form className="d-flex align-items-center">
              <button className="p-3 rounded contact-button fw-bold">
                Contact us
              </button>
              <img
                src="images/english.jpg"
                alt="language"
                style={{ padding: "0 1rem" }}
              />
              <img
                src="images/down-arrow.jpg"
                alt="arrow"
                style={{ height: "50%", padding: "auto 0" }}
                className="pointer"
                onClick={displayList}
                />
            </form>
            <div
              className="lang-list border rounded"
              style={{ display: showList ? "block" : "none"}}
            >
              <ul className="list-group">
                <div className="h4 p-2">Change Language</div>
                <li className="list-group-item">
                  <input
                    className="form-check-input me-1"
                    type="radio"
                    name="languages"
                    id="english"
                  />
                  <label htmlFor="english">English</label>
                </li>
                <li className="list-group-item">
                  <input
                    className="form-check-input me-1"
                    type="radio"
                    name="languages"
                    id="urdu"
                  />
                  <label htmlFor="urdu">Urdu</label>
                </li>
                <li className="list-group-item">
                  <input
                    className="form-check-input me-1"
                    type="radio"
                    name="languages"
                    id="hindi"
                  />
                  <label htmlFor="hindi">Hindi</label>
                </li>
                <li className="list-group-item">
                  <input
                    className="form-check-input me-1"
                    type="radio"
                    name="languages"
                    id="Vietnamese"
                  />
                  <label htmlFor="Vietnamese">Vietnamese</label>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
