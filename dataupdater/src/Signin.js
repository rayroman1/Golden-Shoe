import React from 'react';
import "./styling/pagStyling.css";


function Signin() {
    return (
        
        <div className="pagsstyle1">
        <h1>Enter UserName Password</h1>
        <form action="/action_page.php">
       <label for="fname">First name:</label><br/>
       <input type="text" id="fname" name="fname"/><br/>
       <label for="lname">Last name:</label><br/>
       <input type="text" id="lname" name="lname"/><br/><br/>
       <input type="submit" value="Submit"/>
     </form>
        </div>
      
       
      

    );
}

export default Signin;