import React from 'react';
import "./styling/pagStyling.css";
import { BrowserRouter, Route, Link } from "react-router-dom";

function ViewAll() {
    return (

        <div className="pagstyling"> 
        <h1>Select Item</h1>

        <table className="tabstyle1" >
            <tr><Link to="/additem">Add item</Link></tr>
            <tr><Link to="/">Delete Item</Link></tr>
            <tr><Link to="/">Update Item</Link></tr>
            <tr><Link to="/">Add Employee</Link></tr>
            <tr><Link to="/">Update Employee</Link></tr>

        </table>
        </div>
    );
}

export default ViewAll;