import React from 'react'
import Cart from '../cart/cart'
import { Elements, CardElement, ElementsCounsumer,CheckoutForm,useStripe,useElements } from "@stripe/react-stripe-js"
import { loadStripe } from '@stripe/stripe-js';
import Payment from "./payment"
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);

const Review = ({token,back, onCaptureCheckout ,shippingData,step}) => {
   


      
    return (
        <div>
            <div className="steps">
            <div className=" "><i class="fas fa-check-circle checked"></i></div>   
            <div className="bar" />
            <div className="step active">2</div>
            </div>
            <div className="review">
            <h2 className="mar-l">Order Summary</h2>
            
            
                {token.live.line_items.map(i=><div className="review-list"><li>{i.name}<br/><p>Quantity:{i.quantity}</p></li><li>{i.price.formatted_with_code}</li></div>)}
           
            
                
           <div className="review-list"> 
            <h4>subtotal</h4>
            <h4>{token.live.subtotal.formatted_with_symbol}</h4>
            </div>
            
            </div>
             
            <div className="divider"/>
            
            <Elements stripe={stripePromise}  >
                <Payment token={token} onCaptureCheckout={onCaptureCheckout} shippingData={shippingData} nextStep={step} back={back}/>
            </Elements>
        </div>
    )
}

export default Review
