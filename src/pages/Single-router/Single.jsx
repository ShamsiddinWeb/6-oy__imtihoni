import React, { useEffect, useState } from "react";
import "./singleRoute.css";
import { useParams } from "react-router-dom";
import axios from "../../api";
import SingleRoute from "./SingleRoute";
import Footer from "../../components/footer/Footer";
import Needs from "../../components/Needs/Needs";

const Single = () => {
  const { id } = useParams();
  const [data, setProduct] = useState(null);

  useEffect(() => {
    axios
      .get(`/products/${id}`)
      .then((res) => setProduct(res.data.products))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <SingleRoute/>
      <Needs/>
      <Footer/>
    </div>
  );
};

export default Single;
