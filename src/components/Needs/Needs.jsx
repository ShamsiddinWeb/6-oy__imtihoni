import React from "react";
import "./Needs.css"

function Needs() {
  return (
    <section className="needs">
      <div className="container">
        <div className="needs__start">
          <h2 className="needs__title">
            Stay home & get your daily needs from our shop
          </h2>
          <p className="needs__text">
            Start You'r Daily Shopping with Nest Mart
          </p>
          <form className="needs__form">
            <input
              className="needs__inp"
              type="email"
              placeholder="Your emaill address"
            />
            <button className="needs__btn">Subscribe</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Needs;
