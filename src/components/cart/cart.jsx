import React from 'react'
import CartItem from './cart-item';
import {Link} from "react-router-dom";

const Cart = ({cart , UpdateCart , RemoveItem ,Empty}) => {


    if(!cart.line_items){return(<div className="loading"><i class="fas fa-circle-notch motion"></i></div>)}
    const pro =cart.line_items.map(i  =><CartItem cart={i} handleUpdateCart={UpdateCart} handleRemoveItem={RemoveItem} /> );
    return (cart.line_items.length?
        <div className="cart">
            <div className="cartItems">
            {pro}
            </div>
            <div className="cartControl">
            <p className="one">Total coast:</p>
            <p> {cart.subtotal.formatted_with_code}</p>

            <Link to="/checkout"  className="margin-auto-sides">
            <button className="chechout-btn">check out</button>
            </Link>


            
            <button className="empty-btn" onClick={Empty} >Empty cart</button>
           
            </div>
        </div>  
        :
        <div className="cart">
            <Link to= "/" className="empty">
            <div >
            Add something ...
            </div>
            </Link>
            <div className="cartControl">
            <p className="one">Total coast:</p>
            
            <p> {cart.subtotal.formatted_with_code}</p>

            <Link to="/checkout"  className="margin-auto-sides">
            <button className="chechout-btn">check out</button>
            </Link>

            
            <button className="empty-btn" onClick={Empty}>Empty cart</button>
            
            </div>
        </div>  
    )
    }
export default Cart
