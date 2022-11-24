import React, { createRef, useState } from "react";
import "./Navbar.css";
const Body = () => {
  const [phoneNumber, setPhonenumber] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const phoneRef = createRef(null);
  const emailRef = createRef(null);
  const nameRef = createRef(null);

  const checkErrors = (event) => {
    event.preventDefault();
    phoneRef.current.style.display = "none";
    nameRef.current.style.display = "none";
    emailRef.current.style.display = "none";

    if (isNaN(phoneNumber)) {
      phoneRef.current.style.display = "block";
    }
    const regexIT = /[`!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/;
    if (regexIT.test(name)) {
      nameRef.current.style.display = "block";
    }
    if (email.charAt(email.length - 1) === ".") {
      emailRef.current.style.display = "block";
    }
  };

  return (
    <div className="container d-lg-flex">
        <p className="container pointer fw-bold fs-6 text-primary contact-link">Contact us</p>
      <section className="p-5">
        <img className="img-fluid" src="images/main-img.png" alt="main" />
      </section>
      <section className="container-fluid">
        <div className="h3 fw-bold greenColor text-center text-lg-start">Hi, let's get in touch.</div>
        <form className="pt-4">
          <div className="input-field">
            <label htmlFor="phone" className="greyColor">
              Phone no.
            </label>
            <input
              type="text"
              className="form-control my-2 pt-3"
              onChange={(e) => setPhonenumber(e.target.value)}
            />
            <p className="text-end show-alert" ref={phoneRef}>Alphabets not allowed</p>
          </div>
          <div className="input-field">
            <label htmlFor="country" className="greyColor">
              Select country
            </label>
            <select className="form-control my-2 pt-3">
              <option value="india">India</option>
              <option value="England">England</option>
              <option value="Vietnam">Vietnam</option>
            </select>
          </div>
          <div className="input-field">
            <label htmlFor="name" className="greyColor">
              Enter Name
            </label>
            <input
              type="text"
              id="name"
              className="form-control my-2 pt-3"
              onChange={(e) => setName(e.target.value)}
            />
            <p className="text-end show-alert" ref={nameRef}>Special Characters not allowed</p>
          </div>
          <div className="input-field">
            <label htmlFor="email" className="greyColor">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="form-control my-2 pt-3"
              onChange={(e) => setEmail(e.target.value)}
            />
            <p className="text-end show-alert" ref={emailRef}>Remove full stop</p>
          </div>
          <div className="input-field">
            <textarea
              placeholder="message"
              className="form-control message"
            ></textarea>
          </div>
          <button
            className="btn my-5 py-2 px-4 mt-lg-3 rounded submit-button"
            onClick={(e) => checkErrors(e)}
          >
            Submit
          </button>
        </form>
      </section>
    </div>
  );
};

export default Body;
