import React from "react";
import "./Admin.css";
import { IoLocationOutline } from "react-icons/io5";

const AdminService = () => {
  let data = ["Office", "Studio", "Shop"];
  let adminService = data?.map((val, inx) => (
    <li key={inx} className="adminService__list-item">
      <h2 className="adminService__list-title">{val}</h2>
      <p className="adminService__list-text">
        205 North Michigan Avenue, Suite 810 Chicago, 60601, USA Phone: (123)
        456-7890 Email: contact@Evara.com
      </p>
      <button className="adminService__list-btn">
        <IoLocationOutline /> View map
      </button>
    </li>
  ));
  return (
    <div>
      <ul className="adminService__list">
        {adminService}
      </ul>
    </div>
  );
};

export default AdminService;
