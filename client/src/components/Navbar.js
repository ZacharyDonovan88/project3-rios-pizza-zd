import React, { useState } from "react";
import { Link } from 'react-router-dom';
import "../App.css";
import "./css/navbar.css";



function Home() {


  return (
    <>
      <nav>
        <ul>
            <li>
            <Link to="/pizza">Pizza</Link>
            </li>
            <li>
            <Link to="/Sides">Sides</Link>
            </li>  
            <li>
            <Link to="/Drinks">Drinks</Link>
            </li>  
            <li>
            <Link to="/Desserts">Desserts</Link>
            </li>  
            <li>
            <Link to="/Deals">Deals</Link>
            </li>
            <li>
            <Link to="/Login">Log In</Link>
            </li>
            <li>
            <Link to="/Sign Up">Sign Up</Link>
            </li>   
        </ul>
      </nav>
    </>
  );
}

export default Home;
