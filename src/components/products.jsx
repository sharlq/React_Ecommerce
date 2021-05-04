import React from 'react'
import Product from './product/product'
import {Link} from "react-router-dom"

const Products = ({products,onAdd,searchTerm,openProductPage}) => {
    console.log(products)
 const prod =products.filter((val)=>{
     if(searchTerm==""){
         return val
     }else if(val.name.toLowerCase().includes(searchTerm.toLowerCase())){return val}
 }).map(i  =><Link to="/product" onClick={()=>openProductPage(i)}> <Product item={i} onAdd={onAdd} /> </Link>);
    return (
        <div className="products">
            {prod}
        </div>
    )
}

export default Products
