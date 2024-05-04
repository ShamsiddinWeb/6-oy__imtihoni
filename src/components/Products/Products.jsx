import React, { useEffect, useState } from "react";
import axios from "../../api";
import "./Products.css";
import img from "../../assets/icon/div.product-rating.svg";
import { BsCart3 } from "react-icons/bs";
import "./loading.css";
import { Link } from "react-router-dom";

function Products() {
  let productsList = [
    "Electronics",
    "Jewelery",
    "Men's clothing",
    "Women's clothing",
  ];
  let productsListItem = productsList?.map((val, inx) => (
    <li key={inx}>
      <a className="products__card-link" href="#">
        {val}
      </a>
    </li>
  ));

  // const API__URL = `https://fakestoreapi.com/products?limit=${count*5}`;
  const [data, setData] = useState([]);
  const [loading, setloading] = useState(false);
  const [count, setCount] = useState(1);

 
  useEffect(() => {
    setloading(true);
    axios
      .get(`/products?limit=${count * 6}`)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err))
      .finally(() => setloading(false));
  }, [count]);
  let cards = data?.map((pro) => (
    <li key={pro.id} className="products__list-item">
      <button className="btn">-14%</button>
      <div className="img">
        <Link to={`/product/${pro.id}`}>
          <img className="products__list-img" src={pro.image} alt="" />
        </Link>
      </div>
      <h5 className="products__list-title" title={pro.title}>
        {pro.title}
      </h5>
      <p className="products__list-text" title={pro.description}>
        {pro.description}
      </p>
      <img src={img} alt="" /> <span className="span">({pro.rating.rate})</span>
      <p className="category">
        <span className="span">By</span>: {pro.category}
      </p>
      <div className="products__list-card">
        <span>${pro.price} </span>
        <button className="products__list-btn">
          <BsCart3 />
          Add
        </button>
      </div>
    </li>
  ));
  return (
    <>
      <section className="products">
        <div className="container">
          <div className="products__start">
            <div className="products__card">
              <h3 className="products__title">Popular Products</h3>
              <ul className="products__card-list">{productsListItem}</ul>
            </div>
            {loading ? (
              <ul className="loading">
                <li className="loading__list-item">
                  <button className="loading__btn"></button>
                  <div className="loading__img"></div>
                  <h5 className="loading__list-title"></h5>
                  <p className="loadings__list-text"></p>
                  <div className="d">
                    <p className="b"></p>
                    <p className="loading__span"></p>
                  </div>
                  <p className="loading-pp"></p>
                  <div className="loading__list-card">
                    <div> </div>
                    <button className="loading_list-btn"></button>
                  </div>
                </li>
                <li className="loading__list-item">
                  <button className="loading__btn"></button>
                  <div className="loading__img"></div>
                  <h5 className="loading__list-title"></h5>
                  <p className="loadings__list-text"></p>
                  <div className="d">
                    <p className="b"></p>
                    <p className="loading__span"></p>
                  </div>
                  <p className="loading-pp"></p>
                  <div className="loading__list-card">
                    <div> </div>
                    <button className="loading_list-btn"></button>
                  </div>
                </li>
                <li className="loading__list-item">
                  <button className="loading__btn"></button>
                  <div className="loading__img"></div>
                  <h5 className="loading__list-title"></h5>
                  <p className="loadings__list-text"></p>
                  <div className="d">
                    <p className="b"></p>
                    <p className="loading__span"></p>
                  </div>
                  <p className="loading-pp"></p>
                  <div className="loading__list-card">
                    <div> </div>
                    <button className="loading_list-btn"></button>
                  </div>
                </li>
                <li className="loading__list-item">
                  <button className="loading__btn"></button>
                  <div className="loading__img"></div>
                  <h5 className="loading__list-title"></h5>
                  <p className="loadings__list-text"></p>
                  <div className="d">
                    <p className="b"></p>
                    <p className="loading__span"></p>
                  </div>
                  <p className="loading-pp"></p>
                  <div className="loading__list-card">
                    <div> </div>
                    <button className="loading_list-btn"></button>
                  </div>
                </li>
                <li className="loading__list-item">
                  <button className="loading__btn"></button>
                  <div className="loading__img"></div>
                  <h5 className="loading__list-title"></h5>
                  <p className="loadings__list-text"></p>
                  <div className="d">
                    <p className="b"></p>
                    <p className="loading__span"></p>
                  </div>
                  <p className="loading-pp"></p>
                  <div className="loading__list-card">
                    <div> </div>
                    <button className="loading_list-btn"></button>
                  </div>
                </li>
                <li className="loading__list-item">
                  <button className="loading__btn"></button>
                  <div className="loading__img"></div>
                  <h5 className="loading__list-title"></h5>
                  <p className="loadings__list-text"></p>
                  <div className="d">
                    <p className="b"></p>
                    <p className="loading__span"></p>
                  </div>
                  <p className="loading-pp"></p>
                  <div className="loading__list-card">
                    <div> </div>
                    <button className="loading_list-btn"></button>
                  </div>
                </li>
              </ul>
            ) : (
              <></>
            )}
            <ul className="products__list">{cards}</ul>
            <button
              onClick={() => setCount((p) => p + 1)}
              className="products__list-button"
            >
              See more
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Products;
