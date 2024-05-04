import React from "react";
import "./Service.css";
import svg1 from "../../assets/icon/icon1.svg";
import svg2 from "../../assets/icon/icon-2.svg";
import svg3 from "../../assets/icon/icon-3.svg";
import svg4 from "../../assets/icon/icon-4.svg";
import svg5 from "../../assets/icon/icon-5.svg";

function Service() {
  let data = [
    {
      id: 1,
      svg: svg1,
      title: "Best prices & offers",
      text: "Orders $50 or more",
    },
    {
      id: 2,
      svg: svg2,
      title: "Free delivery",
      text: "24/7 amazing services",
    },
    {
      id: 3,
      svg: svg3,
      title: "Great daily deal",
      text: "When you sign up",
    },
    {
      id: 4,
      svg: svg4,
      title: "Wide assortment",
      text: "Mega Discounts",
    },
    {
      id: 5,
      svg: svg5,
      title: "Easy returns",
      text: "Within 30 days",
    },
  ];
  let completed = data?.map((el) => (
    <li key={el.id} className="service__list-item">
      <img src={el.svg} alt="" />
      <div className="service__list-card">
        <h4 className="service__list-title">{el.title}</h4>
        <p className="service__list-text">{el.text}</p>
      </div>
    </li>
  ));
  return (
    <section className="service">
      <div className="container">
        <div className="service__start">
          <ul className="service__list">{completed}</ul>
        </div>
      </div>
    </section>
  );
}

export default Service;
