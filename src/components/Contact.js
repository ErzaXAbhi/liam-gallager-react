import React from "react";

const Contact = () => {
  return (
    <>
      <div className="contact">
        <div className="contact-heading">
          <h1>
            Available for photo shoots across the <br /> Greater NY, CT, RI
            <i class="fa-solid fa-angles-right"></i> MA AREA
          </h1>
          <p>
            BOOK YOUR NEXT <br /> PHOTOSHOOT
          </p>
        </div>
        <div className="box">
          <span className="borderLine"></span>
          <form action="">
            <h2>Contact Us</h2>
            <div className="inputBox">
              <input type="text" required />
              <span>Name</span>
              <i></i>
            </div>
            <div className="inputBox">
              <input type="email" required />
              <span>Email</span>
              <i></i>
            </div>
            <div className="inputBox">
              <input type="number" required />
              <span>Mobile</span>
              <i></i>
            </div>
            <input type="submit" value="submit" />
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
