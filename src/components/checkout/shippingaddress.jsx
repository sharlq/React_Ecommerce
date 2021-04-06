import React from 'react'
import {useState,useEffect} from "react"
import {commerce} from "../../lib/commerce"
import {useForm} from  "react-hook-form"
import {Link} from "react-router-dom";
const Shipping = ({token ,oonSubmit}) => {
    let [countries,setCountreis] = useState([]);
    let [country,setCountry] = useState(null);
    let [subdivisions,setSubdivisions] = useState([]);
    let [subdivision,setSubdivision] = useState(null);
    let [options,setOptions] = useState([]);
    let [option,setOption] = useState("");
    const {register , handleSubmit , errors} = useForm();

    const fetchCountreis = async(tokenID)=>{
      if(token){
        const   response   = await commerce.services.localeListShippingCountries(tokenID)
        setCountreis(response.countries)
      setCountry(Object.keys(countries)[0])}
    }
   const fetchSubdivisions = async(tokenID)=>{
     
        const response = await commerce.services.localeListShippingSubdivisions(tokenID, country)
        console.log(response)
        setSubdivisions(response.subdivisions)
        setSubdivision(Object.keys(response.subdivisions)[0])
        
      
       
    }
     const fetchOptions = async(tokenID)=>{
       
         const response = await commerce.checkout.getShippingOptions(tokenID, {
            country: country,
           region: subdivision,
           })
        setOptions(response)
     }


     
    console.log(country)
    console.log(countries)
     
    useEffect(() =>
    fetchCountreis(token.id)
    , [token])
    useEffect(() =>{
    if(country) fetchSubdivisions(token.id);}
    , [country])
    useEffect(() =>{
    if(subdivision) fetchOptions(token.id);
    }, [subdivision])
      
    return (
        
            <>
            <div className="steps">
            <div className="step active">1</div>   
            <div className="bar" />
            <div className="step">2</div>
            </div>
            <h4>Shipping Address</h4>
            <form id="shippingForm" className="form" onSubmit={handleSubmit(oonSubmit)}>
                 
                 <div className="inputcontainer">
                <input  ref={register} className="texti" type="text" name="firstName" placeholder="First name*" />
                <input ref={register} className="texti" type="text" name="lastName" placeholder="Last name*" />
                <input ref={register} className="texti" type="text" name="email" placeholder="Email*" />
                <input  ref={register} className="texti" type="text" name="address1" placeholder="Address*" />
                <input ref={register} className="texti" type="text" name="city" placeholder="City*" />
                <input  ref={register} className="texti" type="text" name="zip" placeholder="ZIP / Postal code*" />
                </div>
                
                
                <div className="select-container">
                  <div>
                <label htmlFor="country">Shipping Country</label>   
                <select ref={register} defaultValue="Country" value={country} onChange={(e)=>setCountry(e.target.value)}   className="select"  name="shippingCountry">
                    <option  disabled>Country</option>
                     {Object.entries(countries).map(([code, name]) => ({ id: code, label: name })).map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.label}
                  </option>
                ))} 
                </select>
                </div>

                  <div>    
                <label htmlFor="Subdivision">Shipping Subdivision</label>
                <select ref={register} defaultValue="Subdivision" value={subdivision} onChange={(e)=>setSubdivision(e.target.value)} className="select"  name="shippingSubdivision"> 
                    <option   disabled>Subdivision</option>
                    { Object.entries(subdivisions).map(([code, name]) => ({ id: code, label: name })).map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.label}
                  </option>
                ))} 
                </select>
                </div>

                    <div>
                <label htmlFor="options">Shipping Options</label>   
                <select ref={register} defaultValue="Options" value={option} onChange={(e)=>setOption(e.target.value)} className="select"  name="shippingOption">
                    <option  disabled>Options</option>
                    { options.map((sO) => ({ id: sO.id, label: `${sO.description} - (${sO.price.formatted_with_symbol})` })).map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.label}
                  </option>
                ))}
                </select>
                </div>
                </div>

                

            
            
                
                
                
               
            
            
            </form>

            <div className="checkout-control">
            <Link to="/cart"  className="margin-auto-sides">
              <button className="btn bg-w" to="/cart">back</button>
              </Link>
              <button type="submit" form="shippingForm" className="btn bg-p" >Next</button>
            </div>


            </>
    )
}

export default Shipping