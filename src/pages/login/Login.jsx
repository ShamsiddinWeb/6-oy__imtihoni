import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import axios from "../../api";
import { toast } from "react-toastify";
import Footer from "../../components/footer/Footer";
import Icons from "../../assets/icon/Header.svg";
import { MdOutlineHome } from "react-icons/md";
import { Link } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa6";

function Login() {
  const [username, setUsername] = useState("johnd");
  const [password, setPassword] = useState("m38rmF$");
  const [loading, setLoading] = useState(false);

  let navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    setLoading(true);
    let user = {
      username,
      password,
    };
    axios
      .post("/auth/login", user)
      .then((res) => {
        console.log("res>>>", res.data.token);
        toast.success("welcome");
        localStorage.setItem("x-auth-token", res.data.token);
        navigate("/admin");
      })
      .catch((err) => {
        console.log("err>>>", err);
        toast.error("username or password is incorrect");
      })
      .finally(() => setLoading(false));
  };
  return (
    <>
      <div className="form__login">
        <div className="login__cards">
          <div className="container login__cardss">
            <Link to={"/"}>
              <MdOutlineHome className="ass" /> <span>Home</span>
            </Link>
            <FaAngleRight className="mmm"/>
            <p>Login</p>
          </div>
        </div>
        <div className="container">
          <form onSubmit={handleLogin} className="login">
            <img className="login_img" src={Icons} alt="" />
            <label htmlFor="">
              <p className="login__text">Email Address*</p>
              <input
                className="login__inp"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                type="text"
                required
              />
            </label>
            <input
              className="login__inp"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              required
            />
            <label className="label__checkbox" htmlFor="">
              <input className="checkbox" type="checkbox" required />
              <p>Remember Me</p>
            </label>
            <button className="login__btn" disabled={loading} type="submit">
              {loading ? "Loading..." : "Log in"}
            </button>
            <button
              className="login__btn"
              type="button"
              onClick={() => navigate(-1)}
            >
              Go back
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Login;
