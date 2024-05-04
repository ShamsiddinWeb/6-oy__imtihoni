import React, { useState, useEffect } from "react";
import "./Header.css";
import { FaApplePay } from "react-icons/fa";
import { BiSearch } from "react-icons/bi";
import { VscAccount } from "react-icons/vsc";
import { AiOutlineHeart } from "react-icons/ai";
import { IoCartOutline } from "react-icons/io5";
import { AiOutlineDown } from "react-icons/ai";
import { VscGitCompare } from "react-icons/vsc";
import icon from "../../assets/icon/Header.svg";
import { GrUserAdmin } from "react-icons/gr";
import { BsTelephone } from "react-icons/bs";
import { Link } from "react-router-dom";
import HeaderStart from "./HeaderStart";
import before from "../../assets/icon/__before.svg";
import { RiHeadphoneFill } from "react-icons/ri";

function Header() {
  // const [isFixed, setIsFixed] = useState(false);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (window.scrollY >= 70) {
  //       setIsFixed(true);
  //     } else {
  //       setIsFixed(false);
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []); 

  const [toogle, setToggle] = useState(false);
  let headerList = [
    "Home",
    "About",
    "Shop",
    "Vendors",
    "Mega menu ",
    "Blog",
    "Pages",
    "Contact",
  ];
  let headerListItem = headerList?.map((val, inx) => (
    <li key={inx} className="header__list-item">
      <a className="header__list-link" href="#">
        {val}
        <AiOutlineDown className="header__list-icon" />
      </a>
    </li>
  ));
  return (
    <header className={`header ${toogle ? "open" : ""}`}>
      <HeaderStart />
      <div>
        <div className="header__end">
          <div className="container">
            <div className="header__wrappers">
              <Link className="header__iconss" to={"/"}>
                <img src={icon} alt="" />
              </Link>
              <div className="dddd">
                <form className="header__form" action="">
                  <select class="question_form_input" name="country">
                    <option value="Question type">All Categories</option>
                    <option value="nimadir">nimadir</option>
                    <option value="nimadir">nimadir</option>
                    <option value="nimadir">nimadir</option>
                  </select>
                  <input
                    className="header__inp"
                    type="search"
                    placeholder="Search For items..."
                  />
                  <BiSearch className="header__search" />
                </form>
              </div>
              <div className="header__menu-burgers">
                <button
                  className="header__menu"
                  id="menu-burger"
                  onClick={() => setToggle(!toogle)}
                >
                  <span className="header__menu-span"></span>
                  <span className="header__menu-span"></span>
                  <span className="header__menu-span"></span>
                </button>
              </div>
              <div className="header__card">
                <div className="header__card-group">
                  <VscGitCompare />
                  <span>Compare</span>
                </div>
                <div className="header__card-group">
                  <AiOutlineHeart />
                  <span> Wishlist</span>
                </div>
                <div className="header__card-group">
                  <IoCartOutline />
                  <span>Cart</span>
                </div>
                <div className="header__card-group">
                  <Link to={"/register"}>
                    <GrUserAdmin /> <span>Account</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="header__start">
          <div className="container">
            <div className="header__wrapper">
              <button className="button">
                <img src={before} alt="" />
                <p>Browse</p>
                <select class="question_form_inputs" name="country">
                  <option value="Question type">All Categories</option>
                  <option value="nimadir">nimadir</option>
                  <option value="nimadir">nimadir</option>
                  <option value="nimadir">nimadir</option>
                </select>
              </button>
              <ul className="header__list">{headerListItem}</ul>
              <a className="header__tel" href="tel:+1234567890">
                <RiHeadphoneFill />
                <p>
                  1900 - 888 <br /> <span>24/7 Support Center</span>
                </p>
              </a>
            </div>
          </div>
        </div>
        <div className="form__end">
          <form className="header__form" action="">
            <select class="question_form_input" name="country">
              <option value="Question type">All Categories</option>
              <option value="nimadir">nimadir</option>
              <option value="nimadir">nimadir</option>
              <option value="nimadir">nimadir</option>
            </select>
            <input
              className="header__inp"
              type="search"
              placeholder="Search For items..."
            />
            <BiSearch className="header__search" />
          </form>
        </div>
      </div>
    </header>
  );
}

export default Header;
