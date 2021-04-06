import React from 'react'
const RenderHTML = (props) => (<div dangerouslySetInnerHTML={{__html:props.HTML}}></div>)
const Product = ({item, onAdd}) => {

const onAddtocart = ()=> onAdd(item.id,1);
    //return (<div>test</div>)
    return (
        <div className="products__product">
            <div className="img-container">
            <img src={item.media.source} alt="product" />
            </div>
            <div className="products__product-info">
            <h2>{item.name}</h2>
            
            <RenderHTML  HTML={item.description} />
           
            <h4>{item.price.formatted_with_symbol}</h4>
            <i className="fas fa-cart-arrow-down" onClick={ onAddtocart}></i>
            
            </div>
        </div>
    )
}

export default Product
