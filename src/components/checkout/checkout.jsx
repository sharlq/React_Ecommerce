import React from 'react'
import {useState,useEffect} from "react"
import{commerce} from "../../lib/commerce"
import Shipping from "./shippingaddress"
import Review from "./review"
import {Link , useHistory} from "react-router-dom"

const Checkout = ({cart,onCaptureCheckout,order,error}) => {
let [token,setToken] = useState(null);
let [shippingData,setShippingdate] = useState([]);
let [step,setStep]=useState(1);
const history=useHistory();
useEffect(() => {
    if (cart.id) {
      const generateToken = async () => {
        try {
          const token = await commerce.checkout.generateToken(cart.id, { type: 'cart' });
            console.log(token)
          setToken(token);
        } catch(error) {
          history.push('/');
        }
      };

      generateToken();
    }
  }, [cart]);

  const nextStep = () => setStep((prevActiveStep) => prevActiveStep + 1);
  const backStep = () => setStep((prevActiveStep) => prevActiveStep - 1);
  const onSubmit=(data)=>{
    setShippingdate(data)
    nextStep()
    }

    let Confirmation = () => (order.customer ? (
      <div className="c">
        <div className="confirmation">
          <h5 >Thank you for your purchase, {order.customer.firstname} {order.customer.lastname}!</h5>
          <div className="divider" />
          <h3 >Order ref: {order.customer_reference}</h3>
        
        <br />
        <Link to="/" className="mar-sides">
        <button className="btn bg-g" type="button">Back to home</button>
        </Link>
        </div>
      </div>
    ) : (
      <div className="loading"><i class="fas fa-circle-notch motion"></i></div>
    ));
  
    if (error) {
      Confirmation = () => (
        <>
          <h5>Error: {error}</h5>
          <br />
          <button   type="button" to="/">Back to home</button>
        </>
      );
    }

   
console.log(token)


    return (
       <main>
        <div className="formcard">
        { step===1?  token && <Shipping  token={token} oonSubmit={onSubmit}/> 
          : step===2?
          <Review token={token} back={backStep} onCaptureCheckout={onCaptureCheckout} shippingData={shippingData} step={nextStep}/>
        :
        <Confirmation/>}
        </div>
        </main>
    )
}

export default Checkout


