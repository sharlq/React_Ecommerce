import React from 'react'
import {Link} from "react-router-dom"
const RenderHTML = (props) => (<div dangerouslySetInnerHTML={{__html:props.HTML}}></div>)
const Product = ({item, onAdd,openProductPage}) => {

const onAddtocart = ()=> onAdd(item.id,1);
    //return (<div>test</div>)
    return (
        <div className="products__product">
            <Link to="/product" onClick={()=>openProductPage(item)}>
            <div className="img-container">
            <img src={item.media.source} alt="product" />
            </div>
            </Link>
            <div className="products__product-info">
            <Link to="/product" onClick={()=>openProductPage(item)}>
            <h2 className="name">{item.name}</h2>
            </Link>
            
            {/* <RenderHTML  HTML={item.description} /> */}
           
            <h4 className="price">{item.price.formatted_with_symbol}</h4>
            <i className="fas fa-cart-arrow-down" onClick={ onAddtocart}></i>
            
            </div>
        </div>
    )
}

export default Product
