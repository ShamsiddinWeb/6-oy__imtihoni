import React, {useState, useEffect} from 'react'
import axios from '../../api'
import { Link } from 'react-router-dom'
import Banner from '../../components/banner/Banner'
import { IoStar } from "react-icons/io5";
import "./Home.css"
import Footer from '../../components/footer/Footer';
import Service from '../../components/Service/Service';
import Needs from '../../components/Needs/Needs';
import Everyday from '../../components/Everyday/Everyday';
import Products from '../../components/Products/Products';
import Featured from '../../components/Featured/Featured';

function Home() {
  return (
    <div className='home'>
        <Banner />
        <Featured/>
        <Everyday/>
        <Products/>
        <Needs/>
        <Service/>
        <Footer/>
    </div>
  )
}

export default Home