import { Search } from '@material-ui/icons';
import React from 'react'
import {Link} from "react-router-dom"
const Navbar = ({cartt,search}) => {
  let cartItems ;
  if(cartt.total_items<=9){
      cartItems ='cartItemsNumber' 
  } else if(cartt.total_items>9){
    cartItems ='cartItemsNumber1'
  };
  let count=cartt.total_items;
  if(cartt.total_items>99){
    count =99;
}

    return (
        <nav className="navbar">
            <Link className="logo" to="/"  >
            <div >
            <i className="fas fa-store-alt"> Store name</i>
            </div>
            </Link>

            <input type="searchbox" className="search-box" placeholder="Search..." onChange={(event)=>{search(event.target.value)}}></input>
            <Link className="navCartbox" to="/cart">
            <div className={cartt.total_items > 0 ? `textContainer` : `textContainer-d` }><p className={cartt.total_items > 0 ? cartItems : `cartItemsNumber-d` }>{count}</p></div>
            <div className="navCart">
           
            <i className="fas fa-shopping-cart"></i>
           
            </div>
            </Link>

        </nav>
    )
}

export default Navbar
