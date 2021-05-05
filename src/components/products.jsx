import React ,{useState,useEffect} from 'react'
import Product from './product/product'


const Products = ({products,categorys,onAdd,searchTerm,openProductPage,onCategory}) => {
const [categorysButtons, setCategorysButtons] = useState([])

useEffect(()=>{if(categorys){
     setCategorysButtons(()=>categorys.data.map((i)=><button className="btn" onClick={()=>onCategory(i.name)}>{i.name}</button> ))
}},[categorys])


 const prod =products.filter((val)=>{
     if(searchTerm==""){
         return val
     }else if(val.name.toLowerCase().includes(searchTerm.toLowerCase())){return val}
 }).map(i  => <Product item={i} onAdd={onAdd} openProductPage={openProductPage} /> );
   
 
 
 return (
        <di className="home">
        <div className="mainControls">
            <div className="categoryes">
                <h3>Categoryes</h3>
                {categorysButtons}
            </div>
        </div>
        <div className="products">
            
            {prod}
        </div>
        </di>
    )
}

export default Products
