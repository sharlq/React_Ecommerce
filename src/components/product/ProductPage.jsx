import React from 'react'

const ProductPage = ({product,onAdd}) => {
    const RenderHTML = (props) => (<div dangerouslySetInnerHTML={{__html:props.HTML}}></div>)
    console.log("hi",product)
    return (
        <div className="productPage">
            <div className="media">
            <img src={product.media.source} alt=""/>
            </div>
            <div className="info">
            <h4 className="title">{product.name}</h4>
           
            <RenderHTML  HTML={product.description} />
           
            </div>
            <div className="control">
                <h3>prise : {product.price.formatted_with_symbol}</h3>
                <button className="btn" onClick={()=>onAdd(product.id,1)}>Add to cart</button>
            </div>
        </div>
    )
}

export default ProductPage
