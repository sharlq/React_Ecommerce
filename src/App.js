import React, {useEffect,useState} from 'react'
import { commerce } from "./lib/commerce"
import Products from './components/products'
import Navbar from './components/Navbar'
import Cart from "./components/cart/cart"
import ProductPage from "./components/product/ProductPage"
import {BrowserRouter as Router, Switch ,Route} from "react-router-dom"
import Checkout from "./components/checkout/checkout"

const  App = () => {
    const [products, setProducts] = useState([]);
    const [product,setProduct] = useState({})
    const [cart, setCart] = useState({});
    const [order,setOrder] = useState({});
    const [errorMessage,setErrorMessage]= useState("")
    const [searchTerm,setSearchTerm]= useState("")
    
    const searchFilter = (val) => {
        setSearchTerm(val)
        console.log(val);
    }
    const fetchProducts = async()=>{
        const {data} = await commerce.products.list();
        setProducts(data)
    }

    const fetchCart = async() => {
        setCart(await commerce.cart.retrieve());
    }

    const emptyCart = async() => {
        const response = await commerce.cart.empty();

        setCart(response.cart);
    }
    

    useEffect(()=>{
        fetchProducts();
        fetchCart();
       // emptyCart ();
    },[])

    const handleAddToCart =async(productID,quantity) =>{
        const added = await commerce.cart.add(productID,quantity);
        console.log(cart);
        setCart(added.cart);
        console.log("it",cart.total_items)
    }

    const handleUpdateCart = async(itemID,itemQuantity)=>{
        const response= await commerce.cart.update(itemID, { quantity: itemQuantity })
         setCart(response.cart)
    }

    const handleRemoveItem = async(itemID)=>{
        const response = await commerce.cart.remove(itemID)
        setCart(response.cart)
    }

    const refreshCart = async() =>{
        const newCart= await commerce.cart.refresh();
        setCart(newCart);
    }

    const handleCaptureCheckout = async(checkoutTokenId,newOrder)=>{
        console.log("token",checkoutTokenId,"order",newOrder)
        try{
            console.log("STOIC")
            const incomingOrder = await commerce.checkout.capture(checkoutTokenId, newOrder);
            setOrder(incomingOrder);
            console.log("incomingOrder",incomingOrder)
            refreshCart();
        }catch(error){
            setErrorMessage(error.data.error.message)
        }
    }

    const handleProductPage = async(item)=>{
        setProduct(item)
    }
    

    console.log(products,cart);

   // handleAddToCart(products[0].id,1);

    //console.log(products[0].id,cart);


    return (
        <Router>
            <Navbar cartt={cart} search={searchFilter}  />
            <Switch>

            <Route path="/" exact>
            <Products 
            products={products} 
            onAdd={handleAddToCart}
            openProductPage={handleProductPage}
            searchTerm={searchTerm}/> 
            </Route>

            <Route path="/cart">
            <Cart cart={cart}
             UpdateCart={handleUpdateCart}
             RemoveItem={handleRemoveItem}
             Empty={emptyCart}/>
             </Route>

             <Route path="/checkout">
                 <Checkout
                  cart={cart}
                  order={order}
                  onCaptureCheckout={handleCaptureCheckout}
                  error={errorMessage}/>
             </Route>

             <Route path="/product">
                 <ProductPage
                  onAdd={handleAddToCart}
                  product={product}
                  />
             </Route>

             </Switch>
        </Router>
    )
}

export default  App
