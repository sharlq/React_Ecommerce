import React from 'react'

const ProductPage = ({product,onAdd}) => {
    const RenderHTML = (props) => (<div dangerouslySetInnerHTML={{__html:props.HTML}}></div>)
    console.log("hi",product)
    return (
        <div className="productPage">
            <div className="media">
            <div className="hidden">
            <h4 className="title">{product.name}</h4>
            </div>
            <img src={product.media.source} alt=""/>
            </div>
            <div className="control hidden">
                <h3>prise : {product.price.formatted_with_symbol}</h3>
                <button className="btn" onClick={()=>onAdd(product.id,1)}>Add to cart</button>
            </div>
            <div className="info">
            <h4 className="title hide">{product.name}</h4>
            <h3 className="mr-t hidden">Detailes</h3>
            <RenderHTML  HTML={product.description} />
           
            </div>
            <div className="control hide">
                <h3>prise : {product.price.formatted_with_symbol}</h3>
                <button className="btn" onClick={()=>onAdd(product.id,1)}>Add to cart</button>
            </div>
        </div>
    )
}

export default ProductPage
