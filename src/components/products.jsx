import React from 'react'
import Product from './product/product'


const Products = ({products,onAdd,searchTerm,openProductPage}) => {
    console.log(products)
 const prod =products.filter((val)=>{
     if(searchTerm==""){
         return val
     }else if(val.name.toLowerCase().includes(searchTerm.toLowerCase())){return val}
 }).map(i  => <Product item={i} onAdd={onAdd} openProductPage={openProductPage} /> );
    return (
        <div className="products">
            {prod}
        </div>
    )
}

export default Products
