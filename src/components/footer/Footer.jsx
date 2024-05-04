import React from "react";
import "./Footer.css";
import { FaApplePay } from "react-icons/fa";
import { GrLocation } from "react-icons/gr";
import { CgMail } from "react-icons/cg";
import { BsTelephone } from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";
import { BiLogoFacebook } from "react-icons/bi";
import { BiLogoInstagram } from "react-icons/bi";
import { BsTwitterX } from "react-icons/bs";
import { TiSocialLinkedin } from "react-icons/ti";
import { LuHeadphones } from "react-icons/lu";
import footerImg from "../../assets/icon/Header.svg";
import app from "../../assets/icon/app.svg";
import app2 from "../../assets/icon/app2.svg";
import app3 from "../../assets/icon/app3.svg";
import footer from "../../assets/icon/Footer.svg"

const  Footer = () =>  {
  let footerLeft = [
    "About Us",
    "Delivery Information",
    "Privacy Policy",
    "Terms & Conditions",
    "contact Us",
    "Support Center",
    "Careers",
  ];
  let footerLeftList = footerLeft?.map((val, inx) => (
    <li key={inx}>
      <a className="footer__list-link" href="#">
        {val}
      </a>
    </li>
  ));

  let footerLefts = [
    "Sign In",
    "View Cart",
    "My Wishlist",
    "Track My Order",
    "Help Ticket",
    "Shipping Details",
    "Compare products",
  ];
  let footerLeftLists = footerLefts?.map((val, inx) => (
    <li key={inx}>
      <a className="footer__list-link" href="#">
        {val}
      </a>
    </li>
  ));
  let footerLeftss = [
    "Become a Vendor",
    "Affiliate Program",
    "Farm Business",
    "Farm Careers",
    "Our Suppliers",
    "Accessibility",
    "Promotions",
  ];
  let footerLeftListss = footerLeftss?.map((val, inx) => (
    <li key={inx}>
      <a className="footer__list-link" href="#">
        {val}
      </a>
    </li>
  ));

  let footerRight = [
    "Milk & Flavoured Milk",
    "Butter and Margarine",
    "Eggs Substitutes",
    "Marmalades",
    "Sour Cream and Dips",
    "Tea & Kombucha",
    "Cheese",
  ];
  let footerRightList = footerRight?.map((val, inx) => (
    <li key={inx}>
      <a className="footer__list-link" href="#">
        {val}
      </a>
    </li>
  ));
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__start">
          <div className="footer__wrapper">
            <img className="footer-icon" src={footerImg} alt="" />
            <p className="footer__text">
              Awesome grocery store website template
            </p>
            <div className="footer__card">
              <GrLocation />
              <p className="footer__card-text">
                Address: 5171 W Campbell Ave undefined Kent, Utah 53127 United
                States
              </p>
            </div>
            <div className="footer__card">
              <LuHeadphones />
              <p className="footer__card-text">
                Call Us:(+91) - 540-025-124553
              </p>
            </div>
            <div className="footer__card">
              <CgMail />
              <p className="footer__card-text">Email:sale@Nest.com</p>
            </div>
            <div className="footer__card">
              <BsTelephone />
              <p className="footer__card-text">+91 123 4567890</p>
            </div>
          </div>
          <ul className="footer__list">
            <li className="footer__list-item">Company</li>
            {footerLeftList}
          </ul>

          <ul className="footer__list">
            <li className="footer__list-item">Account</li>
            {footerLeftLists}
          </ul>
          <ul className="footer__list">
            <li className="footer__list-item">Corporate</li>
            {footerLeftListss}
          </ul>

          <ul className="footer__list">
            <li className="footer__list-item">Popular</li>
            {footerRightList}
          </ul>
          <div className="footer__left">
            <h4 className="footer__left-title">Subscribe Our Newsletter</h4>
            <p className="footer__list-link ss">
              From App Store or Google Play
            </p>
            <div className="group">
              <a href="https://www.apple.com/" target="_">
                <img src={app} alt="" />
              </a>
              <a
                href="https://play.google.com/store/games?device=windows&pli=1"
                target="_"
              >
                <img src={app2} alt="" />
              </a>
            </div>
            <p className="footer__list-link ss">
              From App Store or Google Play
            </p>
            <img src={app3} alt="" />
          </div>
        </div>
        <div className="footer__end">
          <p className="footer__end-text">© 2022, Nest - HTML Ecommerce Template All rights reserved</p>
          <img src={footer} alt="" />
          <div className="footer__group">
              <a href="https://www.facebook.com/?locale=ru_RU" target="_">
                <BiLogoFacebook />
              </a>
              <a href="https://twitter.com/?lang=ru " target="_">
                <BsTwitterX />
              </a>
              <a href="https://www.instagram.com/" target="_">
                <BiLogoInstagram />
              </a>
              <a href="https://ru.linkedin.com/" target="_">
                <TiSocialLinkedin />
              </a>
            </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
