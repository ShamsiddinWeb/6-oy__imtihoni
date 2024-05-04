import React from "react";
import "./Admin.css";
import AdminService from "./AdminService";
import AdminForm from "./AdminForm";
import Needs from "../../components/Needs/Needs";
import Footer from "../../components/footer/Footer";

const Admin = () => {
  return (
    <>
      <div className="admin">
        <div className="container">
          <div className="admin__wrapper">
            <span className="admin__span">How can help you ?</span>
            <div className="admin__start">
              <div className="admin__card">
                <h2 className="admin__title">Admin panel</h2>
                <p className="admin__text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                  leo.
                </p>
                <p className="admin__text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                  leo.
                </p>
              </div>
              <div className="admin__cards">
                <div className="admin__card-group">
                  <h3 className="admin__titlee">01. Visit Feedback</h3>
                  <p className="admin__text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                    elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                    leo.
                  </p>
                </div>
                <div className="admin__card-group">
                  <h3 className="admin__titlee">02. Employer Services</h3>
                  <p className="admin__text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                    elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                    leo.
                  </p>
                </div>
                <div className="admin__card-group">
                  <h3 className="admin__titlee">03. Billing Inquiries</h3>
                  <p className="admin__text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                    elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                    leo.
                  </p>
                </div>
                <div className="admin__card-group">
                  <h3 className="admin__titlee">04.General Inquiries</h3>
                  <p className="admin__text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                    elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                    leo.
                  </p>
                </div>
              </div>
            </div>
            <p>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2998.07306925311!2d69.20123767591303!3d41.28551417131306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8ba578f4f58d%3A0xd7a2ecf23413b7a0!2sNajot%20Ta&#39;lim%20Chilonzor%20Filial!5e0!3m2!1sru!2s!4v1714766209046!5m2!1sru!2s"
                width="100%"
                height="350"
              ></iframe>
            </p>
            <AdminService/>
            <AdminForm/>
          </div>
        </div>
      </div>
      <Needs/>
      <Footer/>
    </>
  );
};

export default Admin;
