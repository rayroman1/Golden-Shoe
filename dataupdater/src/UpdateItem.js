import React from 'react';
import "./styling/pagStyling.css";
import {useEffect, useState} from 'react';
import axios from 'axios';

function UpdateItem(props){

    const [items,setitems] =useState([]);
    const [i,seti]=useState('');
    const[itid,setitid] =useState('');

    const getdata= async () => { axios.get('http://localhost:8080/items3').then((dataa) =>  { const r=dataa.data;
    //this.setState({persons:JSON.stringify(r)});
    setitems({ items:r}); }); }
    
    let f='';
    items.forEach(item => console.log(f=f+item.id+' '+item.product+' '+new Date(item.purchasedate).toLocaleDateString()+' '+new Date(item.expdate).toLocaleDateString()+' '+item.quantity+' '+item.price+'<br/>'))//this.setState({i:movie.id}), this.setState({f:this.state.f+this.state.i+<br/>}) ); //f+i+'<br/>'
    //this.setState({i:f}); 
    seti( f); 

  const  handleItemName = event => {
        this.setState({ delitem:event.target.value});
       console.log("Item "+this.state.delitem);
      }; 
    

    const  handleClick = (event) => {
        console.log('Click happened');
        console.log("Item in handle "+this.state.itemn);console.log("purchdate "+this.state.purchdate);console.log("exdate "+this.state.exdate);console.log("itmprice "+this.state.itmprice);
        console.log("Item "+this.state.itmquant);

          this.setState({delitem:event.target.value});
        axios.delete(`http://localhost:8080/deltitem/+${this.state.delitem}`)  
        .then((response) => {
          console.log(response);
        }, (error) => {
          console.log(error);})

      };





    return  (
       <>
        <div className="pagsstyle1">
       <h1>Update Items</h1>
        <div>
       <label for="iid">Enter the item name: </label>
       <input type="text" name="iid" id="iid"  onChange={handleItemName} value={itid} ></input><br/>
       
       <input type="button" onClick={handleClick} value="Submit"/>
    </div>
       </div> 
      
        </>
    );
}
export default UpdateItem;