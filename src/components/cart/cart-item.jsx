import React from 'react'

const CartItem = ({cart,handleUpdateCart,handleRemoveItem}) => {
    const inc = ()=> handleUpdateCart(cart.id,cart.quantity+1)
    const dec = ()=> handleUpdateCart(cart.id,cart.quantity-1)
    const remove = ()=> handleRemoveItem(cart.id)
    return (
        <div>
            <div className="products__product">
            <div className="img-container">
            <img src={cart.media.source} alt="product" />
            </div>
            <div className="products__product-info">
            <h2>{cart.product_name}</h2>
           
            <h4>{cart.price.formatted_with_symbol}</h4>
            <div className="quantityControl">

                <div className="inContainer" onClick={inc}>
                <button className="increase">+</button>
                </div>
                <div className="qContainer">
                <i className="quantity">{cart.quantity}</i>
                </div>
                <div className="deContainer" onClick={dec}>
                <button className="decrease">-</button>
                </div>

            </div>
            
            <button className="R-btn" onClick={remove}>Remove item</button>

            </div>
        </div>
        </div>
    )
}

export default CartItem
