import React from 'react';
import 'C:/React/discountshoes/src/components/style/Header.css';
import {  Link } from "react-router-dom";
import 'C:/React/discountshoes/src/components/style/Linkstyling.css';

const Header = () => (
  <div className="header">
    <div className="headertitle">Quality Shoes</div>
   <div className="headerlinks"><table><tr><td></td><td>Create Account</td></tr><tr><td></td>
   <td><Link to="/Signin" className='linkstyling' >Signin/Signout</Link></td></tr><tr><td>
    Cart</td><td>View Cart</td></tr></table></div>
  </div>
)
export default Header;