import React from "react";
import "./Admin.css";
import adminForm from "../../assets/images/adminForm.png"

const AdminForm = () => {
  return (
    <div className="adminForm">
      <div className="adminForm__card">
        <span className="adminForm__span">Contact form</span>
        <h2 className="adminForm__title">Drop Us a Line</h2>
        <p className="adminForm__text">
          Your email address will not be published. Required fields are marked *
        </p>
        <form  className="adminForm__form">
          <div className="adminForm__group">
            <input className="adminForm__inp" type="text"  placeholder="First Name"/>
            <input  className="adminForm__inp"  type="email" placeholder="Your Email" />
          </div>
          <div className="adminForm__group">
            <input  className="adminForm__inp" type="nummer" placeholder="Your Phone" />
            <input  className="adminForm__inp" type="text" placeholder="Subject" />
          </div>
          <input  className="adminForm__input" type="text" />
        </form>
        <button className="adminForm__btn">Send message</button>
      </div>
      <img className="adminForm__img" src={adminForm} alt="" />
    </div>
  );
};

export default AdminForm;
