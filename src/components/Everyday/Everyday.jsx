import React from "react";
import "./Everyday.css";

function Everyday() {
  let data = [
    {
      id: 1,
      title: "Everyday Fresh & Clean with Our Products",
      btn: "Shop Now",
    },
    {
      id: 2,
      title: "Make your Breakfast Healthy and Easy",
      btn: "Shop Now",
    },
    {
      id: 3,
      title: "The best Organic Products Online",
      btn: "Shop Now",
    },
  ];
  let completed = data?.map((el) => (
    <li key={el.id} className="everyday__list-item">
      <h3 className="everyday__list-title">{el.title}</h3>
      <button className="everyday__list-btn">{el.btn}</button>
    </li>
  ));
  return (
    <section className="everyday">
      <div className="container">
        <div className="everyday__start">
          <ul className="everyday__list">{completed}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Everyday;
