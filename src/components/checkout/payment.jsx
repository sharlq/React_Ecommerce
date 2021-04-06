import React from 'react'
import { Elements, CardElement, ElementsCounsumer,CheckoutForm,useStripe,useElements } from "@stripe/react-stripe-js"
const Payment = ({back,token,onCaptureCheckout,shippingData,nextStep}) => {
    const stripe = useStripe();
    const elements = useElements();

  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const cardElement = elements.getElement(CardElement);

    // Use your card Element with other Stripe.js APIs
    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      console.log('[error]', error);
    } else {
        const orderData = {
            line_items: token.live.line_items,
            customer: { firstname: shippingData.firstName, lastname: shippingData.lastName, email: shippingData.email },
            shipping: { name: 'International', street: shippingData.address1, town_city: shippingData.city, county_state: shippingData.shippingSubdivision, postal_zip_code: shippingData.zip, country: shippingData.shippingCountry },
            fulfillment: { shipping_method: shippingData.shippingOption },
            payment: {
              gateway: 'stripe',
              stripe: {
                payment_method_id: paymentMethod.id,
              },
            },
          };
          console.log("orderdate",orderData)
          onCaptureCheckout(token.id,orderData)
          nextStep()
    }
  };

    return (
        <div>
            <h3 className="mar-l mr-b">Payment method</h3>
             
            <form onSubmit={handleSubmit} className="stripeform" id="paymentform">
            <CardElement className="mr-b paymentcard" />
            </form>
            <div className="checkout-control">
            
              <button className="btn bg-w" onClick={back}>back</button>
              
              <button type="submit" form="paymentform" className="btn-pay bg-p" >Pay {token.live.subtotal.formatted_with_symbol}</button>
            </div>


        </div>
    )
}

export default Payment
