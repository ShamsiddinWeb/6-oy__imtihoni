import React from "react";
import "./Featured.css";
import { data } from "../../static/featured";

const Featured = () => {
  let featuredList = data?.map((e) => (
    <li key={e.id} className="featured__list-item">
      <img className="featured__img" src={e.img} alt="" />
      <h3 className="featured__list-title">{e.title}</h3>
      <p className="featured__list-text">{e.text} items</p>
    </li>
  ));
  return (
    <section className="featured">
      <div className="container">
        <div className="featured__start">
          <div className="featured__card">
            <h2 className="featured__title">Featured Categories</h2>
            <p className="featured__text">Cake & Milk</p>
            <p className="featured__text">Coffes & Teas</p>
            <p className="featured__text">Pet Foods</p>
            <p className="featured__text">Vegetables</p>
          </div>
          <ul className="featured__list">{featuredList}</ul>
        </div>
      </div>
    </section>
  );
};

export default Featured;
