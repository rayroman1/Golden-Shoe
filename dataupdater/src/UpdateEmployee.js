import React from 'react';
import "./styling/pagStyling.css";


function UpdateEmployee(){


    

    return  (
        <>
        <div className="pagsstyle1">
        <h1>Add Items</h1>
        <div>
       <label for="iid">Enter the item name: </label>
       <input type="text" name="iid" id="iid"  onChange={this.handleItemName} value={this.state.itemn} ></input><br/>
       <label for="purchdate">Enter the item purchasedate: </label>
       <input type="text" name="purcdate" id="purcdate" required onChange={this.handleItemName2} value={this.state.purchdate} ></input><br/>
       <label for="exdate">Enter the item expirationdate: </label>
       <input type="text" name="exdate" id="exdate" required onChange={this.handleItemName3} value={this.state.exdate} ></input><br/>
       <label for="itemprice">Enter the item price: </label>
       <input type="text" name="itemprice" id="itemprice" required onChange={this.handleItemName4} value={this.state.itmprice} ></input><br/>
       <label for="itemquant">Enter the item quantity: </label>
       <input type="text" name="itemquant" id="itemquant" required onChange={this.handleItemName5} value={this.state.itmquant}  ></input><br/>
       <input type="button" onClick={this.handleClick} value="Submit"/>
       </div>
       </div> 
      
        </>
    );
}
export default UpdateEmployee;