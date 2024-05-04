import React from "react";

const HeaderStart = () => {
  
  let data = ["About Us", "My Account", "Wishlist", " Order Tracking"];
  let left = data?.map((e, inx) => (
    <li key={inx} className="header__outset-item">
      <a href="#">{e}</a>
    </li>
  ));
  return (
    <div className="header__outset">
      <div className="container">
        <div className="header__outset-start">
          <ul className="header__outset-list">{left}</ul>
          <div className="header__outset-right">
            <p className="header__outset-text">Need help? Call Us: <b>+ 1800 900</b> </p>
            <select class="header__outset_input" name="country">
              <option value="Question type">English </option>
              <option value="nimadir">UZB</option>
              <option value="nimadir">RUS</option>
            </select>
            <select class="header__outset_input" name="country">
              <option value="Question type">USD</option>
              <option value="nimadir">EUR</option>
              <option value="nimadir">RUB</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderStart;
