import React from 'react';
import {  Link } from "react-router-dom";
import 'C:/React/discountshoes/src/components/style/Navbar.css';
import 'C:/React/discountshoes/src/components/style/Linkstyling.css';
const Menubar= () =>{
 
  return(
  <div className="navbar1">  <li>
 
</li>
<li>
  
</li>
<li>
  
</li>
<li>
  
</li>
<li>
  
</li>
<table> <tr>
<td> <Link to="/" className='linkstyling'>Home</Link></td>
    <td><Link to="/Womens" className='linkstyling' >Womens</Link></td>
    <td><Link to="/Mens" className='linkstyling'>Mens</Link></td>
    <td><Link to="/Girls"className='linkstyling' >Girls</Link></td>
    <td><Link to="/Boys" className='linkstyling'>Boys</Link></td>
    
  </tr></table>

</div>
  );
}
export default Menubar;